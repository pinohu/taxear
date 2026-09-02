import { gate } from '../_lib/gate.js';
import { getPurchase } from '../_lib/entitlements.js';
import { createBillingPortalSession } from '../_lib/stripe.js';
import { json, error } from '../_lib/json.js';

// POST /api/portal — a Stripe customer-portal session for the signed-in account, where
// a subscriber cancels, updates a card, or downloads invoices. Needs the Stripe
// customer id recorded at purchase.
export async function onRequestPost({ request, env }) {
  const g = await gate(request, env);
  if (g.response) return g.response;
  if (!env.STRIPE_SECRET_KEY) return error('Billing is not configured yet.', 503);
  const purchase = await getPurchase(env, g.email);
  if (!purchase?.stripeCustomer) return error('No billing record is attached to this account yet. Write to editor@taxear.com and we will sort it out.', 404);
  try {
    const session = await createBillingPortalSession(env.STRIPE_SECRET_KEY, { customerId: purchase.stripeCustomer, returnUrl: `${new URL(request.url).origin}/account/` });
    return json({ url: session.url });
  } catch (err) {
    return error(err.message, 502);
  }
}
