// What a person has paid for, kept in KV under purchase:<email> and consulted on every
// gated request. Shape (docs/REVENUE_BUILD.md):
//   { skus: { p1?: expMs, p2?: expMs, p3?: expMs, practitioner?: expMs },
//     stripeCustomer?: string, history: [{ at, sku, ref, event, pi?, inv? }] }
// Every Stripe reference that granted something is also kept as ref:<ref> = email, for
// as long as a Checkout Session can be replayed, so the truncated history is never the
// idempotency record. A refund or dispute ends the sku its charge paid for (matched by
// payment intent or invoice); when the charge cannot be matched it writes
// revoked:<email> AND zeroes every sku, so a later purchase restores only what was
// just bought.

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

// Grant a sku from `at` (ms). `ref` is the Stripe object that justifies the grant (a
// Checkout Session id, an invoice id): the same ref never grants twice, so the success
// page and the webhook processing one session, or a retried delivery, are no-ops after
// the first. Extends an unexpired grant rather than replacing it, so a renewal never
// shortens what was already paid for.
export async function grant(env, email, sku, { at = Date.now(), ref, event = 'checkout', stripeCustomer, until, paymentIntent, invoice } = {}) {
  if (!env.ACCESS_KV) throw new Error('ACCESS_KV is not bound');
  const def = SKUS[sku];
  if (!def) throw new Error(`unknown sku ${sku}`);
  const p = (await getPurchase(env, email)) || { skus: {}, history: [] };
  if (ref) {
    // The purchase record is the truth; the ref: marker is written only after it, so a
    // retry after a failed purchase write still grants. A marker with no matching
    // history entry can only mean the entry has been truncated away, never a lost grant.
    const inHistory = (p.history || []).some((h) => h.ref === ref);
    if (inHistory) { await env.ACCESS_KV.put(`ref:${ref}`, email); return { purchase: p, applied: false }; }
    if (await env.ACCESS_KV.get(`ref:${ref}`)) return { purchase: p, applied: false };
  }
  const key = def.mode === 'subscription' ? 'practitioner' : sku;
  const base = Math.max(at, p.skus[key] || 0);
  p.skus[key] = until || base + def.days * 86400e3;
  if (stripeCustomer) p.stripeCustomer = stripeCustomer;
  const entry = { at, sku, ref, event };
  if (paymentIntent) entry.pi = paymentIntent;
  if (invoice) entry.inv = invoice;
  if (until) entry.until = until;
  p.history = [...(p.history || []).slice(-49), entry];
  await env.ACCESS_KV.put(`purchase:${email}`, JSON.stringify(p));
  if (ref) await env.ACCESS_KV.put(`ref:${ref}`, email);
  // A new purchase lifts an earlier revocation; the revoked skus were zeroed when the
  // revocation was written, so only this grant is live afterwards.
  await env.ACCESS_KV.delete(`revoked:${email}`);
  return { purchase: p, applied: true };
}

const keyOf = (sku) => (SKUS[sku] ? (SKUS[sku].mode === 'subscription' ? 'practitioner' : sku) : sku);

// Replays the history for one sku key with the revoked references left out, so a
// refund of one of two Part 1 purchases keeps the year the other one paid for. Grants
// chain from the previous expiry exactly as grant() did; a whole-account revocation
// or an ended subscription caps what came before it.
function replay(history, key, excludedRefs) {
  let exp = 0;
  for (const h of history) {
    const isGrant = h.ref && SKUS[h.sku] && !String(h.event || '').startsWith('revoked:');
    if (isGrant) {
      if (keyOf(h.sku) !== key || excludedRefs.has(h.ref)) continue;
      exp = h.until || Math.max(h.at, exp) + SKUS[h.sku].days * 86400e3;
    } else if (h.sku === '*' || (h.sku === 'practitioner' && key === 'practitioner')) {
      exp = Math.min(exp, h.at);
    }
  }
  return exp;
}

// `charge` names the refunded or disputed Stripe charge by its payment intent and/or
// invoice. When it matches a recorded grant, that purchase alone is taken out of the
// account: its sku is recomputed from the remaining purchases (a refunded Part 1 leaves
// a paid Part 2 alone, and a refunded second Part 1 leaves the first one's year). When
// nothing matches, the whole account is revoked, as before, and a new purchase lifts it.
export async function revoke(env, email, reason, { paymentIntent, invoice } = {}) {
  if (!env.ACCESS_KV) throw new Error('ACCESS_KV is not bound');
  const p = await getPurchase(env, email);
  const now = Date.now();
  const hit = p && (paymentIntent || invoice)
    ? [...(p.history || [])].reverse().find((h) => (paymentIntent && h.pi === paymentIntent) || (invoice && h.inv === invoice))
    : null;
  if (hit && SKUS[hit.sku]) {
    const key = keyOf(hit.sku);
    const history = [...(p.history || []).slice(-49), { at: now, sku: hit.sku, ref: hit.ref, event: `revoked:${reason}` }];
    const excluded = new Set(history.filter((h) => String(h.event || '').startsWith('revoked:') && h.ref).map((h) => h.ref));
    p.skus[key] = Math.min(replay(history, key, excluded), p.skus[key] || 0);
    p.history = history;
    await env.ACCESS_KV.put(`purchase:${email}`, JSON.stringify(p));
    return { scope: key };
  }
  if (p) {
    for (const k of Object.keys(p.skus || {})) p.skus[k] = Math.min(p.skus[k], now);
    p.history = [...(p.history || []).slice(-49), { at: now, sku: '*', event: `revoked:${reason}` }];
    await env.ACCESS_KV.put(`purchase:${email}`, JSON.stringify(p));
  }
  await env.ACCESS_KV.put(`revoked:${email}`, JSON.stringify({ at: now, reason }));
  return { scope: '*' };
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
