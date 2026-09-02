// What a person has paid for, kept in KV under purchase:<email> and consulted on every
// gated request. Shape (docs/REVENUE_BUILD.md):
//   { skus: { p1?: expMs, p2?: expMs, p3?: expMs, all?: expMs, practitioner?: expMs },
//     baseline: { <key>: expMs },              // what the key was worth before its ledger began
//     grants: { <key>: [{ ref, at, days?, until?, pi?, inv? }] },   // live purchases, in order
//     refunds: [{ at, pi?, inv?, scope, reason }],   // tombstones: charges already revoked
//     stripeCustomer?: string,
//     history: [{ at, sku, ref?, event }] }    // a log of the last fifty events; consulted only
//                                              // to scope a refund on a pre-ledger account
// The ledger under `grants` is the record: a key's expiry is always the fold of its
// baseline and its live grants, so a refund removes the grant it paid for and the rest
// is recomputed exactly. The baseline carries purchases made before the ledger existed.
// Every Stripe reference that granted is also kept as ref:<ref> = email, for as long as
// a Checkout Session can be replayed, so nothing bounded is the idempotency record. A
// refund or dispute whose charge cannot be matched to a grant writes revoked:<email>
// AND zeroes every sku, so a later purchase restores only what was just bought.

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

const keyOf = (sku) => (SKUS[sku] ? (SKUS[sku].mode === 'subscription' ? 'practitioner' : sku) : sku);
const DAY = 86400e3;

// A key's expiry: its baseline, then each live grant chained from whichever is later,
// the purchase date or the expiry so far, so a renewal never shortens what was paid for.
function fold(p, key) {
  let exp = p.baseline?.[key] || 0;
  for (const g of p.grants?.[key] || []) exp = g.until || Math.max(g.at, exp) + (g.days || 0) * DAY;
  return exp;
}

const ledgerHas = (p, ref) => Object.values(p.grants || {}).some((list) => list.some((g) => g.ref === ref));
const log = (p, entry) => { p.history = [...(p.history || []).slice(-49), entry]; };

// Grant a sku from `at` (ms). `ref` is the Stripe object that justifies the grant (a
// Checkout Session id, an invoice id): the same ref never grants twice, so the success
// page and the webhook processing one session, or a retried delivery, are no-ops after
// the first.
export async function grant(env, email, sku, { at = Date.now(), ref, event = 'checkout', stripeCustomer, until, paymentIntent, invoice } = {}) {
  if (!env.ACCESS_KV) throw new Error('ACCESS_KV is not bound');
  const def = SKUS[sku];
  if (!def) throw new Error(`unknown sku ${sku}`);
  const p = (await getPurchase(env, email)) || { skus: {}, history: [] };
  p.grants ||= {}; p.baseline ||= {};
  if (ref) {
    // The purchase record is the truth; the ref: marker is written only after it, so a
    // retry after a failed purchase write still grants. A reference already in the
    // ledger is a live purchase: finish what an interrupted first attempt may have left
    // undone (the marker, and lifting the revocation this purchase came after; a
    // whole-account revocation empties the ledger, so anything in it is later than one).
    if (ledgerHas(p, ref)) {
      await env.ACCESS_KV.put(`ref:${ref}`, email);
      await env.ACCESS_KV.delete(`revoked:${email}`);
      return { purchase: p, applied: false };
    }
    if ((await env.ACCESS_KV.get(`ref:${ref}`)) || (p.history || []).some((h) => h.ref === ref)) return { purchase: p, applied: false };
  }
  const key = keyOf(sku);
  if (!p.grants[key]) {
    // First ledger entry for this key: whatever it was worth already (purchases made
    // before the ledger existed) becomes the baseline the fold starts from.
    p.grants[key] = [];
    if (p.skus[key]) p.baseline[key] = p.skus[key];
  }
  const g = { ref, at, days: until ? undefined : def.days, until: until || undefined, pi: paymentIntent || undefined, inv: invoice || undefined };
  p.grants[key].push(g);
  p.skus[key] = fold(p, key);
  if (stripeCustomer) p.stripeCustomer = stripeCustomer;
  log(p, { at, sku, ref, event });
  await env.ACCESS_KV.put(`purchase:${email}`, JSON.stringify(p));
  if (ref) await env.ACCESS_KV.put(`ref:${ref}`, email);
  // A new purchase lifts an earlier revocation; the revoked skus were zeroed when the
  // revocation was written, so only this grant is live afterwards.
  await env.ACCESS_KV.delete(`revoked:${email}`);
  return { purchase: p, applied: true };
}

// `charge` names the refunded or disputed Stripe charge by its payment intent and/or
// invoice. Every live grant that charge paid for leaves the ledger (a subscription's
// first checkout and its first invoice both grant against one invoice) and the sku is
// refolded from what remains: a refunded Part 1 leaves a paid Part 2 alone, and a
// refunded second Part 1 leaves the first one's year. Each refund leaves a tombstone
// under `refunds`, so Stripe's retry of a delivered webhook is a no-op rather than a
// second, wider revocation. A charge that matches only the pre-ledger history log ends
// that sku alone (the log carries the sku but not enough to refold). When nothing
// matches, the whole account is revoked, as before, and a new purchase lifts it.
export async function revoke(env, email, reason, { paymentIntent, invoice } = {}) {
  if (!env.ACCESS_KV) throw new Error('ACCESS_KV is not bound');
  const p = await getPurchase(env, email);
  const now = Date.now();
  const charged = !!(paymentIntent || invoice);
  const matches = (g) => (paymentIntent && g.pi === paymentIntent) || (invoice && g.inv === invoice);
  const save = () => env.ACCESS_KV.put(`purchase:${email}`, JSON.stringify(p));
  const tombstone = (scope) => { p.refunds = [...(p.refunds || []).slice(-99), { at: now, pi: paymentIntent, inv: invoice, scope, reason }]; };

  const seen = p && charged ? (p.refunds || []).find(matches) : null;
  if (seen) return { scope: seen.scope, already: true };

  const keys = p && charged ? Object.keys(p.grants || {}).filter((k) => p.grants[k].some(matches)) : [];
  if (keys.length) {
    for (const key of keys) {
      for (const g of p.grants[key].filter(matches)) log(p, { at: now, sku: key, ref: g.ref, event: `revoked:${reason}` });
      p.grants[key] = p.grants[key].filter((g) => !matches(g));
      p.skus[key] = Math.min(fold(p, key), p.skus[key] || 0);
    }
    const scope = keys.length === 1 ? keys[0] : keys;
    tombstone(scope);
    await save();
    return { scope };
  }

  // Pre-ledger accounts: the log entry names the sku, so end that sku and nothing else.
  const logged = p && charged ? (p.history || []).find((h) => SKUS[h.sku] && !String(h.event || '').startsWith('revoked:') && matches(h)) : null;
  if (logged) {
    const key = keyOf(logged.sku);
    p.skus[key] = Math.min(p.skus[key] || 0, now);
    if (p.grants) delete p.grants[key];
    if (p.baseline) delete p.baseline[key];
    log(p, { at: now, sku: key, ref: logged.ref, event: `revoked:${reason}` });
    tombstone(key);
    await save();
    return { scope: key };
  }

  if (p) {
    for (const k of Object.keys(p.skus || {})) p.skus[k] = Math.min(p.skus[k], now);
    p.grants = {}; p.baseline = {};
    log(p, { at: now, sku: '*', event: `revoked:${reason}` });
    if (charged) tombstone('*');
    await save();
  }
  await env.ACCESS_KV.put(`revoked:${email}`, JSON.stringify({ at: now, reason }));
  return { scope: '*' };
}

export async function endSubscription(env, email, reason) {
  const p = await getPurchase(env, email);
  if (!p) return;
  p.skus.practitioner = Math.min(p.skus.practitioner || 0, Date.now());
  if (p.grants) delete p.grants.practitioner;
  if (p.baseline) delete p.baseline.practitioner;
  log(p, { at: Date.now(), sku: 'practitioner', event: reason });
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
