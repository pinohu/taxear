import { signToken } from '../_lib/cookie.js';
import { getPurchase } from '../_lib/entitlements.js';
import { sendEmail, loginEmail } from '../_lib/email.js';
import { json, error, readJson, normalizeEmail, randomId } from '../_lib/json.js';

// POST /api/login { email } — emails a one-time sign-in link to an address that has a
// purchase on record. The response is the same whether or not the address is known,
// so the endpoint cannot be used to find out who is a customer.
export async function onRequestPost({ request, env }) {
  if (!env.COOKIE_SECRET || !env.ACCESS_KV) return error('Sign-in is not configured yet.', 503);
  const { email: raw } = await readJson(request);
  const email = normalizeEmail(raw);
  if (!email) return error('That does not look like an email address.');

  const purchase = await getPurchase(env, email);
  if (purchase) {
    const jti = randomId();
    const exp = Date.now() + 15 * 60e3;
    await env.ACCESS_KV.put(`login:${jti}`, email, { expirationTtl: 15 * 60 });
    const token = await signToken({ email, jti, exp, purpose: 'login' }, env.COOKIE_SECRET);
    const link = `${new URL(request.url).origin}/api/login/verify?token=${encodeURIComponent(token)}`;
    try {
      await sendEmail(env, { to: email, ...loginEmail({ link }) });
    } catch (err) {
      return error(`Could not send the sign-in email: ${err.message}`, 502);
    }
  }
  return json({ ok: true, message: 'If that address has a purchase on record, a sign-in link is on its way. It works once and expires in 15 minutes.' });
}
