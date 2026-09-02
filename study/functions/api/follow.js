import { json, error, readJson, normalizeEmail, corsHeaders, randomId } from '../_lib/json.js';
import { entitlementsFor } from '../_lib/entitlements.js';
import { addFollow, isKnownCode, topicOf } from '../_lib/follows.js';
import { sessionEmail, signToken } from '../_lib/cookie.js';
import { sendEmail, confirmFollowEmail } from '../_lib/email.js';

const MESSAGE = 'If that address has a Practitioner subscription, a confirmation link is on its way; click it and the topic is followed. Otherwise, subscribe and every topic you have asked for is followed from the first alert.';

// POST /api/follow { email, code } — from the "Follow this rule" control on taxear.com
// (cross-origin) or from Study's own pages. Nobody can enrol an address they do not
// control: a request that is not signed in as that address only parks a pending follow
// and, if the address is a subscriber, emails a confirmation link. The answer is the
// same either way, so the endpoint does not reveal who subscribes. A signed-in
// subscriber following from Study itself is applied at once.
export async function onRequestOptions({ request }) {
  return new Response(null, { status: 204, headers: corsHeaders(request) });
}

export async function onRequestPost({ request, env }) {
  const cors = corsHeaders(request);
  if (!env.ACCESS_KV || !env.COOKIE_SECRET) return error('Following is not configured yet.', 503);
  const { email: raw, code } = await readJson(request);
  const email = normalizeEmail(raw);
  if (!email) return json({ error: 'That does not look like an email address.' }, 400, cors);
  if (!isKnownCode(code)) return json({ error: 'Unknown topic code.' }, 400, cors);

  const origin = new URL(request.url).origin;
  const signedIn = await sessionEmail(request, env);
  const ent = await entitlementsFor(env, email);

  if (signedIn === email && ent.practitioner) {
    const count = await addFollow(env, email, code);
    return json({ status: 'following', count, manageUrl: `${origin}/account/` }, 200, cors);
  }

  await addFollow(env, email, code, { pending: true });
  if (ent.practitioner) {
    const coolKey = `follow-cooldown:${email}`;
    if (!(await env.ACCESS_KV.get(coolKey))) {
      await env.ACCESS_KV.put(coolKey, '1', { expirationTtl: 60 });
      const jti = randomId();
      await env.ACCESS_KV.put(`confirm:${jti}`, email, { expirationTtl: 24 * 3600 });
      const token = await signToken({ email, jti, purpose: 'confirm-follow', exp: Date.now() + 24 * 3600e3 }, env.COOKIE_SECRET);
      const link = `${origin}/api/follow/confirm?token=${encodeURIComponent(token)}`;
      try { await sendEmail(env, { to: email, ...confirmFollowEmail({ link, title: topicOf(code).title }) }); } catch { /* same answer regardless */ }
    }
  }
  return json({ status: 'check_email', message: MESSAGE, subscribeUrl: `${origin}/practitioner/?code=${encodeURIComponent(code)}` }, 200, cors);
}
