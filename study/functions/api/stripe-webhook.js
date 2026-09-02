import { verifyWebhookSignature, retrieveCharge, retrieveCustomer } from '../_lib/stripe.js';
import { SKUS, grant, revoke, endSubscription } from '../_lib/entitlements.js';
import { json, error, normalizeEmail } from '../_lib/json.js';
import { applyPending } from '../_lib/follows.js';

// POST /api/stripe-webhook — Stripe's server tells us what happened to the money.
// Grants on completed checkouts and paid invoices; revokes on refunds and disputes;
// ends the alert subscription when it is cancelled. Signature is verified before
// anything is parsed. Idempotent: grant() ignores a Stripe reference it has seen.
// Any lookup failure returns 500 so Stripe retries; a dispute is never acknowledged
// without being applied.
export async function onRequestPost({ request, env }) {
  if (!env.STRIPE_WEBHOOK_SECRET || !env.STRIPE_SECRET_KEY) return error('Webhook is not configured.', 503);
  if (!env.ACCESS_KV) return error('The access store is not configured.', 503);
  const raw = await request.text();
  const ok = await verifyWebhookSignature(raw, request.headers.get('Stripe-Signature'), env.STRIPE_WEBHOOK_SECRET);
  if (!ok) return error('Bad signature.', 400);

  let event;
  try { event = JSON.parse(raw); } catch { return error('Bad payload.'); }
  const obj = event.data?.object || {};

  const emailOfCustomer = async (customerId) => {
    if (!customerId) return null;
    return normalizeEmail((await retrieveCustomer(env.STRIPE_SECRET_KEY, customerId)).email);
  };

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const email = normalizeEmail(obj.customer_details?.email) || (await emailOfCustomer(obj.customer));
        const sku = obj.metadata?.sku;
        const paid = obj.payment_status === 'paid' || obj.mode === 'subscription';
        if (email && SKUS[sku] && paid) {
          await grant(env, email, sku, { ref: obj.id, stripeCustomer: obj.customer || undefined, event: 'webhook.checkout' });
          if (SKUS[sku].mode === 'subscription') await applyPending(env, email);
        }
        break;
      }
      case 'invoice.paid': {
        // Subscription renewals. Access runs to the period end plus three days' grace.
        const line = obj.lines?.data?.[0];
        const sku = obj.subscription_details?.metadata?.sku || line?.metadata?.sku;
        const email = normalizeEmail(obj.customer_email) || (await emailOfCustomer(obj.customer));
        if (email && SKUS[sku]?.mode === 'subscription') {
          const until = line?.period?.end ? line.period.end * 1000 + 3 * 86400e3 : undefined;
          await grant(env, email, sku, { ref: obj.id, event: 'webhook.invoice', until, stripeCustomer: obj.customer || undefined });
        }
        break;
      }
      case 'customer.subscription.deleted': {
        const email = await emailOfCustomer(obj.customer);
        if (email) await endSubscription(env, email, 'subscription.deleted');
        break;
      }
      case 'charge.refunded': {
        const full = obj.refunded === true || (obj.amount_refunded && obj.amount_refunded >= obj.amount);
        const email = normalizeEmail(obj.billing_details?.email) || (await emailOfCustomer(obj.customer));
        if (email && full) await revoke(env, email, 'refund');
        break;
      }
      case 'charge.dispute.created': {
        const charge = await retrieveCharge(env.STRIPE_SECRET_KEY, obj.charge);
        const email = normalizeEmail(charge.billing_details?.email) || (await emailOfCustomer(charge.customer));
        if (!email) throw new Error(`No email for disputed charge ${obj.charge}`);
        await revoke(env, email, 'dispute');
        break;
      }
      default:
        break;
    }
  } catch (err) {
    // Tell Stripe to retry; nothing was acknowledged.
    return error(err.message, 500);
  }
  return json({ received: true });
}
