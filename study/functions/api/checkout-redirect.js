import { createCheckoutSession } from '../_lib/stripe.js';
import { SKUS, priceIdFor } from '../_lib/entitlements.js';
import { normalizeEmail, randomId } from '../_lib/json.js';
import { sessionEmail } from '../_lib/cookie.js';
import { addFollow, isKnownCode } from '../_lib/follows.js';

// POST /api/checkout-redirect (form-encoded: sku, email?, code?) — the scripts-off
// path: a plain HTML form lands here and is redirected straight to Stripe. A topic
// code with an email is parked as a pending follow first, so a subscription applies it.
export async function onRequestPost({ request, env }) {
  const origin = new URL(request.url).origin;
  const back = (msg) => Response.redirect(`${origin}/practitioner/?error=${encodeURIComponent(msg)}`, 303);
  if (!env.STRIPE_SECRET_KEY) return back('Payments are not configured yet.');
  const form = await request.formData().catch(() => null);
  const sku = form?.get('sku');
  const def = SKUS[sku];
  if (!def) return back('Unknown product.');
  const priceId = priceIdFor(env, sku);
  if (!priceId) return back(`No price is configured for "${def.label}" yet.`);
  const email = (await sessionEmail(request, env)) || normalizeEmail(form.get('email')) || undefined;
  const code = form.get('code');
  if (env.ACCESS_KV && email && isKnownCode(code)) await addFollow(env, email, code, { pending: true });
  try {
    const session = await createCheckoutSession(env.STRIPE_SECRET_KEY, {
      priceId, mode: def.mode, sku, email,
      successUrl: `${origin}/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${origin}/practitioner/`,
      termsUrl: 'https://taxear.com/terms/',
      idempotencyKey: randomId(),
    });
    return Response.redirect(session.url, 303);
  } catch (err) {
    return back(err.message);
  }
}
