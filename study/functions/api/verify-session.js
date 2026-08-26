import { retrieveCheckoutSession } from '../_lib/stripe.js';
import { signToken, setCookieHeader } from '../_lib/cookie.js';

// POST /api/verify-session {sessionId} — re-checks the Checkout Session directly with
// Stripe (never trusts the client's say-so that payment succeeded), records the
// purchase in KV keyed by email so a future device/browser can be reconnected once a
// delivery channel exists for that, and sets a signed access cookie on this browser.
export async function onRequestPost({ request, env }) {
  if (!env.STRIPE_SECRET_KEY || !env.COOKIE_SECRET) {
    return new Response(JSON.stringify({ error: 'Access is not configured yet.' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
  const { sessionId } = await request.json().catch(() => ({}));
  if (!sessionId) {
    return new Response(JSON.stringify({ error: 'Missing sessionId.' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    });
  }

  let session;
  try {
    session = await retrieveCheckoutSession(env.STRIPE_SECRET_KEY, sessionId);
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 502, headers: { 'Content-Type': 'application/json' },
    });
  }

  if (session.payment_status !== 'paid') {
    return new Response(JSON.stringify({ error: 'Payment not completed.' }), {
      status: 402, headers: { 'Content-Type': 'application/json' },
    });
  }

  const email = (session.customer_details?.email || '').toLowerCase();
  if (env.ACCESS_KV && email) {
    await env.ACCESS_KV.put(`purchase:${email}`, JSON.stringify({
      sessionId, purchasedAt: new Date().toISOString(),
    }));
  }

  const token = await signToken({ email, purchasedAt: Date.now() }, env.COOKIE_SECRET);
  return new Response(JSON.stringify({ ok: true, email }), {
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': setCookieHeader(token),
    },
  });
}
