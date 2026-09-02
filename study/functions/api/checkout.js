import { createCheckoutSession } from '../_lib/stripe.js';
import { SKUS, priceIdFor } from '../_lib/entitlements.js';
import { json, error, readJson, normalizeEmail, randomId } from '../_lib/json.js';
import { sessionEmail } from '../_lib/cookie.js';

// POST /api/checkout { sku, email? } — creates a Stripe Checkout Session for a
// Dashboard Price and returns its hosted URL. The secret key never leaves this function.
export async function onRequestPost({ request, env }) {
  if (!env.STRIPE_SECRET_KEY) return error('Payments are not configured yet.', 503);
  const { sku, email: bodyEmail } = await readJson(request);
  const def = SKUS[sku];
  if (!def) return error('Unknown product.', 400);
  const priceId = priceIdFor(env, sku);
  if (!priceId) return error(`No price is configured for "${def.label}" yet.`, 503);

  const origin = new URL(request.url).origin;
  const email = (await sessionEmail(request, env)) || normalizeEmail(bodyEmail) || undefined;
  try {
    const session = await createCheckoutSession(env.STRIPE_SECRET_KEY, {
      priceId, mode: def.mode, sku, email,
      successUrl: `${origin}/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${origin}/#pricing`,
      termsUrl: 'https://taxear.com/terms/',
      idempotencyKey: randomId(),
    });
    return json({ url: session.url });
  } catch (err) {
    return error(err.message, 502);
  }
}
