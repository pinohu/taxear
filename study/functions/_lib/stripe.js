// Minimal fetch-based Stripe REST client. Deliberately not the `stripe` npm SDK:
// the SDK's default HTTP client isn't Workers-runtime-safe without extra configuration,
// and Stripe's API is plain form-encoded POST / GET over HTTPS, so a raw fetch call
// is simpler here and has zero dependency risk.

const STRIPE_API = 'https://api.stripe.com/v1';

function encodeForm(obj, prefix = '') {
  const params = [];
  for (const [key, value] of Object.entries(obj)) {
    const k = prefix ? `${prefix}[${key}]` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      params.push(...new URLSearchParams(encodeForm(value, k)));
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (item && typeof item === 'object') params.push(...new URLSearchParams(encodeForm(item, `${k}[${i}]`)));
        else params.push([`${k}[${i}]`, String(item)]);
      });
    } else if (value !== undefined && value !== null) {
      params.push([k, String(value)]);
    }
  }
  return params;
}

async function stripeRequest(secretKey, method, path, body) {
  const init = {
    method,
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  if (body) init.body = new URLSearchParams(encodeForm(body)).toString();
  const res = await fetch(`${STRIPE_API}${path}`, init);
  const json = await res.json();
  if (!res.ok) {
    const message = json?.error?.message || `Stripe API error (${res.status})`;
    throw new Error(message);
  }
  return json;
}

export function createCheckoutSession(secretKey, { productName, unitAmountCents, successUrl, cancelUrl }) {
  return stripeRequest(secretKey, 'POST', '/checkout/sessions', {
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [{
      quantity: 1,
      price_data: {
        currency: 'usd',
        unit_amount: unitAmountCents,
        product_data: { name: productName },
      },
    }],
  });
}

export function retrieveCheckoutSession(secretKey, sessionId) {
  return stripeRequest(secretKey, 'GET', `/checkout/sessions/${encodeURIComponent(sessionId)}`);
}
