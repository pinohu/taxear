import { createCheckoutSession } from '../_lib/stripe.js';
import { PRODUCT_NAME, UNIT_AMOUNT_CENTS } from '../_lib/config.js';

// POST /api/checkout — creates a Stripe Checkout Session for the one-time purchase
// and returns its hosted URL. The secret key never leaves this server-side function.
export async function onRequestPost({ request, env }) {
  if (!env.STRIPE_SECRET_KEY) {
    return new Response(JSON.stringify({ error: 'Payments are not configured yet.' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
  const origin = new URL(request.url).origin;
  try {
    const session = await createCheckoutSession(env.STRIPE_SECRET_KEY, {
      productName: PRODUCT_NAME,
      unitAmountCents: UNIT_AMOUNT_CENTS,
      successUrl: `${origin}/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${origin}/`,
    });
    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 502, headers: { 'Content-Type': 'application/json' },
    });
  }
}
