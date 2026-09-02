// Minimal fetch-based Stripe REST client. Deliberately not the `stripe` npm SDK: Stripe's
// API is form-encoded POST / GET over HTTPS, a raw fetch is simpler in the Workers
// runtime, and the webhook signature is a plain HMAC we can verify with Web Crypto.

const STRIPE_API = 'https://api.stripe.com/v1';

function encodeForm(obj, prefix = '') {
  const params = [];
  for (const [key, value] of Object.entries(obj)) {
    const k = prefix ? `${prefix}[${key}]` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      params.push(...encodeForm(value, k));
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (item && typeof item === 'object') params.push(...encodeForm(item, `${k}[${i}]`));
        else params.push([`${k}[${i}]`, String(item)]);
      });
    } else if (value !== undefined && value !== null) {
      params.push([k, String(value)]);
    }
  }
  return params;
}

async function stripeRequest(secretKey, method, path, body, idempotencyKey) {
  const init = { method, headers: { Authorization: `Bearer ${secretKey}`, 'Content-Type': 'application/x-www-form-urlencoded' } };
  if (idempotencyKey) init.headers['Idempotency-Key'] = idempotencyKey;
  if (body) init.body = new URLSearchParams(encodeForm(body)).toString();
  const res = await fetch(`${STRIPE_API}${path}`, init);
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error?.message || `Stripe API error (${res.status})`);
  return json;
}

// One-time purchase or subscription, by Dashboard Price ID. Tax is computed by Stripe
// Tax from the billing address; the terms link is Stripe's own consent checkbox.
export function createCheckoutSession(secretKey, { priceId, mode, sku, email, successUrl, cancelUrl, termsUrl, idempotencyKey }) {
  const body = {
    mode, success_url: successUrl, cancel_url: cancelUrl,
    line_items: [{ price: priceId, quantity: 1 }],
    automatic_tax: { enabled: true },
    consent_collection: { terms_of_service: 'required' },
    custom_text: { terms_of_service_acceptance: { message: `I agree to the [terms of use](${termsUrl}) and the refund policy linked from them.` } },
    metadata: { sku },
    allow_promotion_codes: true,
    billing_address_collection: 'auto',
  };
  if (email) body.customer_email = email;
  if (mode === 'payment') { body.customer_creation = 'always'; body.payment_intent_data = { metadata: { sku } }; }
  if (mode === 'subscription') body.subscription_data = { metadata: { sku } };
  return stripeRequest(secretKey, 'POST', '/checkout/sessions', body, idempotencyKey);
}

export function retrieveCheckoutSession(secretKey, sessionId) {
  return stripeRequest(secretKey, 'GET', `/checkout/sessions/${encodeURIComponent(sessionId)}`);
}
export function retrieveCharge(secretKey, chargeId) {
  return stripeRequest(secretKey, 'GET', `/charges/${encodeURIComponent(chargeId)}`);
}
export function retrieveCustomer(secretKey, customerId) {
  return stripeRequest(secretKey, 'GET', `/customers/${encodeURIComponent(customerId)}`);
}
export function retrieveSubscription(secretKey, subscriptionId) {
  return stripeRequest(secretKey, 'GET', `/subscriptions/${encodeURIComponent(subscriptionId)}`);
}
export function createBillingPortalSession(secretKey, { customerId, returnUrl }) {
  return stripeRequest(secretKey, 'POST', '/billing_portal/sessions', { customer: customerId, return_url: returnUrl });
}

// Stripe-Signature: t=<unix seconds>,v1=<hex hmac of "<t>.<raw body>">, possibly
// several v1 entries during a secret rotation. Constant-time compare, 5-minute window.
export async function verifyWebhookSignature(rawBody, header, secret, { toleranceSeconds = 300, now = Date.now() } = {}) {
  if (!header || !secret) return false;
  const parts = Object.create(null);
  for (const kv of header.split(',')) {
    const [k, v] = kv.split('=').map((s) => s.trim());
    if (!k || !v) continue;
    (parts[k] ||= []).push(v);
  }
  const t = parts.t?.[0];
  if (!t || !parts.v1?.length) return false;
  if (Math.abs(now / 1000 - Number(t)) > toleranceSeconds) return false;
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${t}.${rawBody}`)));
  const expected = [...sig].map((b) => b.toString(16).padStart(2, '0')).join('');
  return parts.v1.some((v) => timingSafeEqual(v, expected));
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}
