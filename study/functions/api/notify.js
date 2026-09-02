import { json, error, readJson } from '../_lib/json.js';
import { followersOf, isKnownCode, topicOf } from '../_lib/follows.js';
import { entitlementsFor } from '../_lib/entitlements.js';
import { sendEmail, alertEmail } from '../_lib/email.js';
import { signToken } from '../_lib/cookie.js';

// POST /api/notify  Authorization: Bearer <NOTIFY_SECRET>
// { changes: [{ code, date, summary }] }
// Called by .github/workflows/notify.yml after a push to main that added a changelog
// entry marked material. Emails every follower of that topic who holds a live
// Practitioner entitlement. Delivery is recorded per recipient (sent:<code>:<date>:
// <email>), so a retry after a partial failure reaches only the people still owed a
// message and never repeats one. The topic-level marker is written only when nobody is
// left owed. Every change in the payload is processed; nothing is silently dropped.
// When anyone is still owed, the response is 502 with the full report, so the calling
// workflow fails and its re-run reaches the people the first attempt missed.
export async function onRequestPost({ request, env }) {
  if (!env.NOTIFY_SECRET) return error('Notify is not configured.', 503);
  const auth = request.headers.get('Authorization') || '';
  if (auth !== `Bearer ${env.NOTIFY_SECRET}`) return error('Unauthorized.', 401);
  if (!env.ACCESS_KV || !env.COOKIE_SECRET) return error('The access store is not configured.', 503);
  const { changes } = await readJson(request);
  if (!Array.isArray(changes)) return error('changes[] required.');

  const origin = new URL(request.url).origin;
  const report = [];
  for (const c of changes) {
    if (!isKnownCode(c.code) || !/^\d{4}-\d{2}-\d{2}$/.test(c.date || '') || !c.summary) { report.push({ code: c.code, skipped: 'malformed' }); continue; }
    const doneKey = `alert:${c.code}:${c.date}`;
    if (await env.ACCESS_KV.get(doneKey)) { report.push({ code: c.code, date: c.date, skipped: 'already sent' }); continue; }
    const topic = topicOf(c.code);
    const followers = await followersOf(env, c.code);
    let sent = 0, failed = 0, notEntitled = 0, already = 0;
    for (const email of followers) {
      const sentKey = `sent:${c.code}:${c.date}:${email}`;
      if (await env.ACCESS_KV.get(sentKey)) { already++; continue; }
      const ent = await entitlementsFor(env, email);
      if (!ent.practitioner) { notEntitled++; continue; }
      const stop = await signToken({ email, purpose: 'unfollow-all', exp: Date.now() + 10 * 365 * 86400e3 }, env.COOKIE_SECRET);
      const stopUrl = `${origin}/api/unfollow-all?token=${encodeURIComponent(stop)}`;
      const msg = alertEmail({ code: c.code, title: topic.title, date: c.date, summary: c.summary, url: `https://taxear.com${topic.path}`, manageUrl: `${origin}/account/`, stopUrl });
      try {
        await sendEmail(env, { to: email, ...msg });
        await env.ACCESS_KV.put(sentKey, '1', { expirationTtl: 90 * 86400 });
        sent++;
      } catch { failed++; }
    }
    if (failed === 0) await env.ACCESS_KV.put(doneKey, JSON.stringify({ at: Date.now(), sent, already, notEntitled, followers: followers.length }));
    report.push({ code: c.code, date: c.date, followers: followers.length, sent, already, failed, notEntitled, complete: failed === 0 });
  }
  const incomplete = report.filter((r) => r.complete === false).length;
  return json({ ok: incomplete === 0, incomplete, report }, incomplete ? 502 : 200);
}
