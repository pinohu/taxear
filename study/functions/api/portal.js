import { sessionEmail } from '../_lib/cookie.js';
import { getPurchase } from '../_lib/entitlements.js';
import { createBillingPortalSession } from '../_lib/stripe.js';
import { json, error } from '../_lib/json.js';

// POST /api/portal — a Stripe customer-portal session for the signed-in account, where
// a subscriber cancels, updates a card, or downloads invoices. Needs the Stripe
// customer id recorded at purchase. Deliberately not behind the entitlement gate: an
// account revoked after a refund or dispute may still have a subscription running at
// Stripe, and cancelling it is exactly what this endpoint is for.
export async function onRequestPost({ request, env }) {
  if (!env.COOKIE_SECRET || !env.ACCESS_KV) return error('Access is not configured yet.', 503);
  const email = await sessionEmail(request, env);
  if (!email) return error('Sign in to continue.', 401);
  if (!env.STRIPE_SECRET_KEY) return error('Billing is not configured yet.', 503);
  const purchase = await getPurchase(env, email);
  if (!purchase?.stripeCustomer) return error('No billing record is attached to this account yet. Write to editor@taxear.com and we will sort it out.', 404);
  try {
    const session = await createBillingPortalSession(env.STRIPE_SECRET_KEY, { customerId: purchase.stripeCustomer, returnUrl: `${new URL(request.url).origin}/account/` });
    return json({ url: session.url });
  } catch (err) {
    return error(err.message, 502);
  }
}
