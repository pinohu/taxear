import { json, error, readJson, normalizeEmail, corsHeaders, randomId } from '../_lib/json.js';
import { entitlementsFor } from '../_lib/entitlements.js';
import { addFollow, isKnownCode, topicOf } from '../_lib/follows.js';
import { sessionEmail, signToken } from '../_lib/cookie.js';
import { sendEmail, confirmFollowEmail } from '../_lib/email.js';

const BURST_LIMIT = 5;
const MESSAGE = 'If that address has a Practitioner subscription, a confirmation link is on its way; click it and the topic is followed. Otherwise, subscribe and every topic you have asked for is followed from the first alert.';

// POST /api/follow { email, code } — from the "Follow this rule" control on taxear.com
// (cross-origin) or from Study's own pages. Nobody can enrol an address they do not
// control: a request that is not signed in as that address only parks a pending follow
// and, if the address is a subscriber, emails a confirmation link bound to that one
// topic. The answer is the same either way, so the endpoint does not reveal who
// subscribes. A signed-in subscriber following from Study itself is applied at once.
// A form-encoded post (the scripts-off control) gets the same treatment and a redirect
// to the Practitioner page instead of JSON, so the pending follow is parked server-side
// before the reader ever sees a checkout button.
export async function onRequestOptions({ request }) {
  return new Response(null, { status: 204, headers: corsHeaders(request) });
}

export async function onRequestPost({ request, env }) {
  const cors = corsHeaders(request);
  if (!env.ACCESS_KV || !env.COOKIE_SECRET) return error('Following is not configured yet.', 503);
  const origin = new URL(request.url).origin;
  const isForm = /application\/x-www-form-urlencoded|multipart\/form-data/.test(request.headers.get('Content-Type') || '');
  const body = isForm ? Object.fromEntries((await request.formData().catch(() => new FormData())).entries()) : await readJson(request);
  const { email: raw, code } = body;
  const email = normalizeEmail(raw);
  const fail = (msg) => isForm ? Response.redirect(`${origin}/practitioner/?error=${encodeURIComponent(msg)}`, 303) : json({ error: msg }, 400, cors);
  if (!email) return fail('That does not look like an email address.');
  if (!isKnownCode(code)) return fail('Unknown topic code.');

  const signedIn = await sessionEmail(request, env);
  const ent = await entitlementsFor(env, email);

  if (signedIn === email && ent.practitioner) {
    const count = await addFollow(env, email, code);
    if (isForm) return Response.redirect(`${origin}/account/?followed=1`, 303);
    return json({ status: 'following', count, manageUrl: `${origin}/account/` }, 200, cors);
  }

  await addFollow(env, email, code, { pending: true });
  if (ent.practitioner) {
    // One confirmation per topic per minute, and never more than a handful per address
    // in any hour: the endpoint is public, and nobody's inbox or the sending quota should
    // be spendable by someone submitting every topic code for an address they do not own.
    // The hour is a fixed window from the first accepted message, not extended by later
    // ones. KV cannot serialise the check-and-count, so a burst of simultaneous requests
    // can overshoot the cap by the few that read the counter before the first write
    // landed; that bounds the overshoot by concurrency, not by the number of topics. KV
    // also allows one write a second to a key, so when the counter write is refused the
    // request is treated as over the cap and nothing (cooldown included) is written: a
    // retry a moment later goes through.
    const coolKey = `follow-cooldown:${email}:${code}`;
    const burstKey = `follow-burst:${email}`;
    const now = Date.now();
    let win = null;
    try { win = JSON.parse((await env.ACCESS_KV.get(burstKey)) || 'null'); } catch { win = null; }
    if (!win || !(win.resetAt > now)) win = { count: 0, resetAt: now + 3600e3 };
    let admitted = !(await env.ACCESS_KV.get(coolKey)) && win.count < BURST_LIMIT;
    if (admitted) {
      win.count += 1;
      try { await env.ACCESS_KV.put(burstKey, JSON.stringify(win), { expirationTtl: Math.max(60, Math.ceil((win.resetAt - now) / 1000)) }); } catch { admitted = false; }
    }
    if (admitted) {
      await env.ACCESS_KV.put(coolKey, '1', { expirationTtl: 60 });
      const jti = randomId();
      await env.ACCESS_KV.put(`confirm:${jti}`, JSON.stringify({ email, code }), { expirationTtl: 24 * 3600 });
      const token = await signToken({ email, jti, purpose: 'confirm-follow', exp: Date.now() + 24 * 3600e3 }, env.COOKIE_SECRET);
      const link = `${origin}/api/follow/confirm?token=${encodeURIComponent(token)}`;
      try { await sendEmail(env, { to: email, ...confirmFollowEmail({ link, title: topicOf(code).title }) }); } catch { /* same answer regardless */ }
    }
  }
  const subscribeUrl = `${origin}/practitioner/?code=${encodeURIComponent(code)}`;
  if (isForm) return Response.redirect(`${subscribeUrl}&email=${encodeURIComponent(email)}&parked=1`, 303);
  return json({ status: 'check_email', message: MESSAGE, subscribeUrl }, 200, cors);
}
