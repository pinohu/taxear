import { retrieveCheckoutSession } from '../_lib/stripe.js';
import { sessionToken, setCookieHeader } from '../_lib/cookie.js';
import { SKUS, grant, entitlementsFor } from '../_lib/entitlements.js';
import { json, error, readJson, normalizeEmail } from '../_lib/json.js';
import { applyPending } from '../_lib/follows.js';

// POST /api/verify-session { sessionId } — the browser lands on /success/ with the
// session id; this re-reads the session from Stripe (never trusts the client), records
// the purchase, and signs the browser in. The webhook does the same recording, so
// whichever arrives first wins and the other is a no-op.
export async function onRequestPost({ request, env }) {
  if (!env.STRIPE_SECRET_KEY || !env.COOKIE_SECRET) return error('Access is not configured yet.', 503);
  if (!env.ACCESS_KV) return error('The access store is not configured yet.', 503);
  const { sessionId } = await readJson(request);
  if (!sessionId || typeof sessionId !== 'string') return error('Missing sessionId.');

  let session;
  try { session = await retrieveCheckoutSession(env.STRIPE_SECRET_KEY, sessionId); }
  catch (err) { return error(err.message, 502); }

  const paid = session.payment_status === 'paid' || (session.mode === 'subscription' && session.status === 'complete');
  if (!paid) return error('Payment not completed.', 402);
  const email = normalizeEmail(session.customer_details?.email);
  const sku = session.metadata?.sku;
  if (!email) return error('Stripe did not report an email address for this payment.', 502);
  if (!SKUS[sku]) return error('This payment is not for a known product.', 502);

  await grant(env, email, sku, { sessionId, stripeCustomer: session.customer || undefined, event: 'checkout' });
  if (SKUS[sku].mode === 'subscription') await applyPending(env, email);
  const token = await sessionToken(email, env.COOKIE_SECRET);
  return json({ ok: true, email, entitlements: await entitlementsFor(env, email) }, 200, { 'Set-Cookie': setCookieHeader(token) });
}
