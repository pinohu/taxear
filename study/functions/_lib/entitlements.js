// What a person has paid for, kept in KV under purchase:<email> and consulted on every
// gated request. Shape (docs/REVENUE_BUILD.md):
//   { skus: { p1?: expMs, p2?: expMs, p3?: expMs, practitioner?: expMs },
//     stripeCustomer?: string, history: [{ at, sku, sessionId?, event }] }
// A refund or dispute writes revoked:<email>, which wins over any sku.

export const SKUS = {
  p1: { label: 'Part 1: Individuals', parts: [1], mode: 'payment', days: 365 },
  p2: { label: 'Part 2: Businesses', parts: [2], mode: 'payment', days: 365 },
  p3: { label: 'Part 3: Representation, Practices and Procedures', parts: [3], mode: 'payment', days: 365 },
  all: { label: 'All three parts', parts: [1, 2, 3], mode: 'payment', days: 365 },
  practitioner_month: { label: 'Practitioner alerts, monthly', parts: [], mode: 'subscription', days: 35 },
  practitioner_year: { label: 'Practitioner alerts, yearly', parts: [], mode: 'subscription', days: 370 },
};

export function priceIdFor(env, sku) {
  const map = {
    p1: env.STRIPE_PRICE_P1, p2: env.STRIPE_PRICE_P2, p3: env.STRIPE_PRICE_P3, all: env.STRIPE_PRICE_ALL,
    practitioner_month: env.STRIPE_PRICE_PRACTITIONER_MONTH, practitioner_year: env.STRIPE_PRICE_PRACTITIONER_YEAR,
  };
  return map[sku] || null;
}

export async function getPurchase(env, email) {
  if (!env.ACCESS_KV || !email) return null;
  const raw = await env.ACCESS_KV.get(`purchase:${email}`);
  return raw ? JSON.parse(raw) : null;
}

export async function isRevoked(env, email) {
  if (!env.ACCESS_KV || !email) return false;
  return !!(await env.ACCESS_KV.get(`revoked:${email}`));
}

// Grant a sku from `at` (ms). Extends an existing unexpired grant rather than
// replacing it, so a renewal never shortens what was already paid for.
export async function grant(env, email, sku, { at = Date.now(), sessionId, event = 'checkout', stripeCustomer, until } = {}) {
  if (!env.ACCESS_KV) throw new Error('ACCESS_KV is not bound');
  const def = SKUS[sku];
  if (!def) throw new Error(`unknown sku ${sku}`);
  const p = (await getPurchase(env, email)) || { skus: {}, history: [] };
  const key = def.mode === 'subscription' ? 'practitioner' : sku;
  const base = Math.max(at, p.skus[key] || 0);
  p.skus[key] = until || base + def.days * 86400e3;
  if (stripeCustomer) p.stripeCustomer = stripeCustomer;
  p.history = [...(p.history || []).slice(-49), { at, sku, sessionId, event }];
  await env.ACCESS_KV.put(`purchase:${email}`, JSON.stringify(p));
  // A new purchase lifts an earlier revocation.
  await env.ACCESS_KV.delete(`revoked:${email}`);
  return p;
}

export async function revoke(env, email, reason) {
  if (!env.ACCESS_KV) throw new Error('ACCESS_KV is not bound');
  await env.ACCESS_KV.put(`revoked:${email}`, JSON.stringify({ at: Date.now(), reason }));
}

export async function endSubscription(env, email, reason) {
  const p = await getPurchase(env, email);
  if (!p) return;
  p.skus.practitioner = Math.min(p.skus.practitioner || 0, Date.now());
  p.history = [...(p.history || []).slice(-49), { at: Date.now(), sku: 'practitioner', event: reason }];
  await env.ACCESS_KV.put(`purchase:${email}`, JSON.stringify(p));
}

// The entitlement view returned to the browser and used by the gates.
export function entitlementsOf(purchase, revoked, now = Date.now()) {
  const skus = purchase?.skus || {};
  const live = (k) => !revoked && (skus[k] || 0) > now;
  const parts = [1, 2, 3].filter((n) => live('all') || live(`p${n}`));
  return {
    parts,
    practitioner: live('practitioner'),
    expires: Object.fromEntries(Object.entries(skus).filter(([, v]) => v > now).map(([k, v]) => [k, new Date(v).toISOString().slice(0, 10)])),
    revoked: !!revoked,
  };
}

export async function entitlementsFor(env, email) {
  const [p, r] = await Promise.all([getPurchase(env, email), isRevoked(env, email)]);
  return entitlementsOf(p, r);
}
