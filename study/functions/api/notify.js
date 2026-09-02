import { json, error, readJson } from '../_lib/json.js';
import { followersOf, isKnownCode, topicOf } from '../_lib/follows.js';
import { entitlementsFor } from '../_lib/entitlements.js';
import { sendEmail, alertEmail } from '../_lib/email.js';
import { signToken } from '../_lib/cookie.js';

// POST /api/notify  Authorization: Bearer <NOTIFY_SECRET>
// { changes: [{ code, date, summary }] }
// Called by .github/workflows/notify.yml after a push to main that added a changelog
// entry marked material. Emails every follower of that topic who holds a live
// Practitioner entitlement, once per (code, date), however many times it is called.
// The content is the committed changelog entry; nothing is written here.
export async function onRequestPost({ request, env }) {
  if (!env.NOTIFY_SECRET) return error('Notify is not configured.', 503);
  const auth = request.headers.get('Authorization') || '';
  if (auth !== `Bearer ${env.NOTIFY_SECRET}`) return error('Unauthorized.', 401);
  if (!env.ACCESS_KV) return error('The access store is not configured.', 503);
  const { changes } = await readJson(request);
  if (!Array.isArray(changes)) return error('changes[] required.');

  const origin = new URL(request.url).origin;
  const report = [];
  for (const c of changes.slice(0, 50)) {
    if (!isKnownCode(c.code) || !/^\d{4}-\d{2}-\d{2}$/.test(c.date || '') || !c.summary) { report.push({ code: c.code, skipped: 'malformed' }); continue; }
    const key = `alert:${c.code}:${c.date}`;
    if (await env.ACCESS_KV.get(key)) { report.push({ code: c.code, date: c.date, skipped: 'already sent' }); continue; }
    const topic = topicOf(c.code);
    const followers = await followersOf(env, c.code);
    let sent = 0, failed = 0, notEntitled = 0;
    for (const email of followers) {
      const ent = await entitlementsFor(env, email);
      if (!ent.practitioner) { notEntitled++; continue; }
      const stop = await signToken({ email, purpose: 'unfollow-all', exp: Date.now() + 10 * 365 * 86400e3 }, env.COOKIE_SECRET);
      const msg = alertEmail({ code: c.code, title: topic.title, date: c.date, summary: c.summary, url: `https://taxear.com${topic.path}`, manageUrl: `${origin}/account/` });
      msg.text += `\n\nStop all alerts: ${origin}/api/unfollow-all?token=${encodeURIComponent(stop)}`;
      msg.html = msg.html.replace('</body>', `<p style="font-size:12px;color:#565B63"><a href="${origin}/api/unfollow-all?token=${encodeURIComponent(stop)}" style="color:#565B63">Stop all alerts</a></p></body>`);
      try { await sendEmail(env, { to: email, ...msg }); sent++; } catch { failed++; }
    }
    await env.ACCESS_KV.put(key, JSON.stringify({ at: Date.now(), sent, failed, notEntitled, followers: followers.length }));
    report.push({ code: c.code, date: c.date, followers: followers.length, sent, failed, notEntitled });
  }
  return json({ ok: true, report });
}
