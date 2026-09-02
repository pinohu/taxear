// The Functions' pure logic, run in Node 22 (same Web Crypto as the Workers runtime).
// KV is stubbed with a Map; Stripe and email are never called.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { signToken, verifyToken, sessionToken, readCookie, setCookieHeader } from '../functions/_lib/cookie.js';
import { verifyWebhookSignature } from '../functions/_lib/stripe.js';
import { grant, revoke, endSubscription, entitlementsFor, entitlementsOf } from '../functions/_lib/entitlements.js';
import { sampleQuestions, sampleDrills, counts, questionById, publicQuestion } from '../functions/_lib/bank.js';
import { gate } from '../functions/_lib/gate.js';

const SECRET = 'test-secret-not-for-production';
const kv = () => { const m = new Map(); return { get: async (k) => m.get(k) ?? null, put: async (k, v) => { m.set(k, v); }, delete: async (k) => { m.delete(k); }, _m: m }; };

test('tokens round-trip, reject tampering, and expire', async () => {
  const t = await signToken({ email: 'a@b.co', exp: Date.now() + 1000, purpose: 'session' }, SECRET);
  assert.equal((await verifyToken(t, SECRET)).email, 'a@b.co');
  assert.equal(await verifyToken(t + 'x', SECRET), null);
  assert.equal(await verifyToken(t, 'other'), null);
  const stale = await signToken({ email: 'a@b.co', exp: Date.now() - 1 }, SECRET);
  assert.equal(await verifyToken(stale, SECRET), null);
  const noExp = await signToken({ email: 'a@b.co' }, SECRET);
  assert.equal(await verifyToken(noExp, SECRET), null, 'a token without exp is never valid');
});

test('session cookie carries thirty days and is read back from the header', async () => {
  const t = await sessionToken('x@y.z', SECRET);
  const header = setCookieHeader(t);
  assert.match(header, /HttpOnly/); assert.match(header, /Secure/); assert.match(header, /Max-Age=2592000/);
  const req = new Request('https://study.taxear.com/api/me', { headers: { Cookie: `other=1; ${header.split(';')[0]}` } });
  assert.equal(readCookie(req), t);
});

test('webhook signatures verify with the documented scheme and reject stale or wrong ones', async () => {
  const body = '{"id":"evt_1","type":"charge.refunded"}';
  const secret = 'whsec_test';
  const t = Math.floor(Date.now() / 1000);
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = [...new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${t}.${body}`)))].map((b) => b.toString(16).padStart(2, '0')).join('');
  assert.equal(await verifyWebhookSignature(body, `t=${t},v1=${sig}`, secret), true);
  assert.equal(await verifyWebhookSignature(body, `t=${t},v1=${sig}`, 'whsec_other'), false);
  assert.equal(await verifyWebhookSignature(body + ' ', `t=${t},v1=${sig}`, secret), false);
  assert.equal(await verifyWebhookSignature(body, `t=${t - 900},v1=${sig}`, secret), false, 'outside the tolerance window');
  assert.equal(await verifyWebhookSignature(body, `t=${t},v1=${sig}`, secret, { now: (t + 200) * 1000 }), true);
});

test('grants extend, refunds revoke, a new purchase lifts the revocation, subscriptions end', async () => {
  const env = { ACCESS_KV: kv() };
  const now = Date.UTC(2026, 8, 2);
  await grant(env, 'a@b.co', 'p3', { at: now });
  let e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, [3]);
  await grant(env, 'a@b.co', 'p3', { at: now + 30 * 86400e3 });
  const p = JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co'));
  assert.equal(p.skus.p3, now + 365 * 86400e3 + 365 * 86400e3, 'a repeat purchase extends from the current expiry, not from today');
  await revoke(env, 'a@b.co', 'refund');
  e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, []); assert.equal(e.revoked, true);
  await grant(env, 'a@b.co', 'all', { at: now });
  e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, [1, 2, 3]); assert.equal(e.revoked, false);
  await grant(env, 'a@b.co', 'practitioner_month', { at: now });
  assert.equal((await entitlementsFor(env, 'a@b.co')).practitioner, true);
  await endSubscription(env, 'a@b.co', 'subscription.deleted');
  assert.equal((await entitlementsFor(env, 'a@b.co')).practitioner, false);
  assert.deepEqual((await entitlementsFor(env, 'a@b.co')).parts, [1, 2, 3], 'ending the subscription leaves the parts alone');
});

test('the same Stripe reference never grants twice; a revocation zeroes what was bought', async () => {
  const env = { ACCESS_KV: kv() };
  const now = Date.UTC(2026, 8, 2);
  const first = await grant(env, 'a@b.co', 'p3', { at: now, ref: 'cs_123' });
  const second = await grant(env, 'a@b.co', 'p3', { at: now + 1000, ref: 'cs_123' });
  assert.equal(first.applied, true); assert.equal(second.applied, false);
  assert.equal(second.purchase.skus.p3, now + 365 * 86400e3, 'the success page and the webhook processing one session grant one year, not two');
  await grant(env, 'a@b.co', 'all', { at: now, ref: 'cs_456' });
  await revoke(env, 'a@b.co', 'dispute');
  await grant(env, 'a@b.co', 'p1', { at: now, ref: 'cs_789' });
  const e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, [1], 'buying Part 1 after a dispute restores Part 1 only, never the disputed purchase');
  assert.equal(e.revoked, false);
});

test('a refund ends only the purchase its charge paid for; an unmatched one still revokes everything', async () => {
  const env = { ACCESS_KV: kv() };
  const now = Date.UTC(2026, 8, 2);
  await grant(env, 'a@b.co', 'p1', { at: now, ref: 'cs_p1', paymentIntent: 'pi_1' });
  await grant(env, 'a@b.co', 'p2', { at: now, ref: 'cs_p2', paymentIntent: 'pi_2' });
  await grant(env, 'a@b.co', 'practitioner_month', { at: now, ref: 'cs_sub', invoice: 'in_1' });
  assert.deepEqual((await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_1' })).scope, 'p1');
  let e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, [2], 'refunding Part 1 leaves Part 2 alone'); assert.equal(e.practitioner, true); assert.equal(e.revoked, false);
  await revoke(env, 'a@b.co', 'dispute', { invoice: 'in_1' });
  e = await entitlementsFor(env, 'a@b.co');
  assert.equal(e.practitioner, false); assert.deepEqual(e.parts, [2]); assert.equal(e.revoked, false);
  // Two purchases of the same part: refunding the second keeps the first one's year.
  await grant(env, 'a@b.co', 'p2', { at: now + 86400e3, ref: 'cs_p2b', paymentIntent: 'pi_2b' });
  assert.equal(JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co')).skus.p2, now + 730 * 86400e3);
  await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_2b' });
  assert.equal(JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co')).skus.p2, now + 365 * 86400e3, 'the non-refunded purchase stands');
  assert.deepEqual((await entitlementsFor(env, 'a@b.co')).parts, [2]);
  // A subscription's checkout and first invoice both granted under one invoice; a
  // refund of that invoice takes both out.
  await grant(env, 'a@b.co', 'practitioner_month', { at: now + 2e6, ref: 'cs_sub2', invoice: 'in_2', event: 'webhook.checkout' });
  await grant(env, 'a@b.co', 'practitioner_month', { at: now + 2e6, ref: 'in_2', invoice: 'in_2', event: 'webhook.invoice', until: now + 2e6 + 33 * 86400e3 });
  assert.equal((await entitlementsFor(env, 'a@b.co')).practitioner, true);
  await revoke(env, 'a@b.co', 'refund', { invoice: 'in_2' });
  assert.equal((await entitlementsFor(env, 'a@b.co')).practitioner, false, 'the checkout grant behind the same invoice is out too');
  assert.deepEqual((await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_unknown' })).scope, '*');
  e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, []); assert.equal(e.revoked, true, 'a charge that matches nothing on record revokes the account, as before');
});

test('the ledger, not the history log, decides a refund: pre-ledger purchases and long histories survive, refunding everything leaves nothing', async () => {
  const env = { ACCESS_KV: kv() };
  const now = Date.UTC(2026, 8, 2);
  // An account whose first Part 3 purchase was written by the earlier schema and has
  // long since left the fifty-entry log: only its expiry in skus remains.
  await env.ACCESS_KV.put('purchase:a@b.co', JSON.stringify({ skus: { p3: now + 365 * 86400e3 }, history: [{ at: now, sku: 'p3', sessionId: 'cs_legacy', event: 'checkout' }] }));
  for (let i = 0; i < 55; i++) await grant(env, 'a@b.co', 'practitioner_month', { at: now + i * 1000, ref: `in_${i}`, invoice: `in_${i}`, until: now + 35 * 86400e3 });
  assert.ok(!JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co')).history.some((h) => h.sessionId), 'the legacy entry is gone from the log');
  await grant(env, 'a@b.co', 'p3', { at: now + 86400e3, ref: 'cs_p3b', paymentIntent: 'pi_3b' });
  assert.equal(JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co')).skus.p3, now + 730 * 86400e3);
  await grant(env, 'a@b.co', 'p3', { at: now + 2 * 86400e3, ref: 'cs_p3c', paymentIntent: 'pi_3c' });
  assert.equal(JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co')).skus.p3, now + 1095 * 86400e3);
  // The oldest ledger entry, and the newest, both refunded, in that order.
  await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_3b' });
  assert.equal(JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co')).skus.p3, now + 730 * 86400e3, 'the pre-ledger year and the third purchase stand');
  await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_3c' });
  assert.equal(JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co')).skus.p3, now + 365 * 86400e3, 'only the pre-ledger year is left');
  assert.equal((await entitlementsFor(env, 'a@b.co')).revoked, false, 'matched refunds never revoke the account');
  // A fifty-entry log does not hide a live grant from the refund.
  const env2 = { ACCESS_KV: kv() };
  await grant(env2, 'c@d.co', 'p1', { at: now, ref: 'cs_first', paymentIntent: 'pi_first' });
  for (let i = 0; i < 60; i++) await grant(env2, 'c@d.co', 'practitioner_month', { at: now + i * 1000, ref: `in_${i}`, invoice: `in_${i}`, until: now + 35 * 86400e3 });
  assert.deepEqual((await revoke(env2, 'c@d.co', 'refund', { paymentIntent: 'pi_first' })).scope, 'p1');
  const e2 = await entitlementsFor(env2, 'c@d.co');
  assert.deepEqual(e2.parts, []); assert.equal(e2.practitioner, true); assert.equal(e2.revoked, false);
});

test('a retried grant finishes lifting a revocation the purchase came after, and an old reference never lifts a later one', async () => {
  const env = { ACCESS_KV: kv() };
  const now = Date.UTC(2026, 8, 2);
  await grant(env, 'a@b.co', 'p3', { at: now, ref: 'cs_old' });
  await revoke(env, 'a@b.co', 'dispute');
  // The new purchase's record is saved, then the process dies before revoked: is cleared.
  const realDelete = env.ACCESS_KV.delete;
  let die = true;
  env.ACCESS_KV.delete = async (k) => { if (die && k.startsWith('revoked:')) { die = false; throw new Error('KV unavailable'); } return realDelete(k); };
  await assert.rejects(grant(env, 'a@b.co', 'p1', { at: now + 1000, ref: 'cs_new' }));
  assert.equal((await entitlementsFor(env, 'a@b.co')).revoked, true);
  const retry = await grant(env, 'a@b.co', 'p1', { at: now + 1000, ref: 'cs_new' });
  assert.equal(retry.applied, false);
  assert.equal((await entitlementsFor(env, 'a@b.co')).revoked, false, 'the retry finishes the job');
  assert.deepEqual((await entitlementsFor(env, 'a@b.co')).parts, [1]);
  await revoke(env, 'a@b.co', 'dispute');
  const stale = await grant(env, 'a@b.co', 'p3', { at: now, ref: 'cs_old' });
  assert.equal(stale.applied, false);
  assert.equal((await entitlementsFor(env, 'a@b.co')).revoked, true, 'replaying the pre-revocation reference does not lift the revocation');
});

test('a refund webhook delivered twice revokes once, and never touches a purchase made after it', async () => {
  const env = { ACCESS_KV: kv() };
  const now = Date.UTC(2026, 8, 2);
  await grant(env, 'a@b.co', 'p1', { at: now, ref: 'cs_p1', paymentIntent: 'pi_1' });
  await grant(env, 'a@b.co', 'p2', { at: now, ref: 'cs_p2', paymentIntent: 'pi_2' });
  assert.deepEqual(await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_1' }), { scope: 'p1' });
  assert.deepEqual(await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_1' }), { scope: 'p1', already: true }, 'the retry is a no-op');
  let e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, [2]); assert.equal(e.revoked, false, 'the retry did not fall through to a whole-account revocation');
  // An unmatched charge revokes the account; a later purchase lifts it; the retry of
  // that same unmatched charge leaves the later purchase alone.
  assert.equal((await revoke(env, 'a@b.co', 'dispute', { paymentIntent: 'pi_mystery' })).scope, '*');
  await grant(env, 'a@b.co', 'p3', { at: now + 1000, ref: 'cs_p3', paymentIntent: 'pi_3' });
  assert.deepEqual((await entitlementsFor(env, 'a@b.co')).parts, [3]);
  assert.deepEqual(await revoke(env, 'a@b.co', 'dispute', { paymentIntent: 'pi_mystery' }), { scope: '*', already: true });
  e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, [3]); assert.equal(e.revoked, false);
});

test('a pre-ledger account whose log names the charge loses that sku alone', async () => {
  const env = { ACCESS_KV: kv() };
  const now = Date.UTC(2026, 8, 2);
  await env.ACCESS_KV.put('purchase:a@b.co', JSON.stringify({ skus: { p1: now + 300 * 86400e3, p2: now + 300 * 86400e3 }, history: [
    { at: now, sku: 'p1', ref: 'cs_a', event: 'checkout', pi: 'pi_a' }, { at: now, sku: 'p2', ref: 'cs_b', event: 'checkout', pi: 'pi_b' },
  ] }));
  // A post-ledger purchase of the same part sits on top of the legacy one.
  await grant(env, 'a@b.co', 'p1', { at: now + 1000, ref: 'cs_c', paymentIntent: 'pi_c' });
  assert.equal(JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co')).skus.p1, now + 665 * 86400e3);
  assert.deepEqual(await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_a' }), { scope: 'p1' });
  let e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, [1, 2], 'the legacy year is gone; the newer Part 1 purchase and Part 2 stand'); assert.equal(e.revoked, false);
  assert.equal(JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co')).skus.p1, now + 1000 + 365 * 86400e3, 'refolded from the live ledger alone');
  assert.deepEqual(await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_a' }), { scope: 'p1', already: true });
  await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_c' });
  e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, [2]); assert.equal(e.revoked, false);
});

test('a grant that arrives after its own refund is not applied and does not lift a revocation', async () => {
  const env = { ACCESS_KV: kv() };
  const now = Date.UTC(2026, 8, 2);
  await grant(env, 'a@b.co', 'p1', { at: now, ref: 'cs_p1', paymentIntent: 'pi_1' });
  // The refund of a Part 2 checkout lands before the checkout itself: unmatched.
  assert.equal((await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_2' })).scope, '*');
  const late = await grant(env, 'a@b.co', 'p2', { at: now + 1000, ref: 'cs_p2', paymentIntent: 'pi_2' });
  assert.equal(late.applied, false); assert.equal(late.refunded, true);
  let e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, []); assert.equal(e.revoked, true, 'the late grant neither applies nor lifts the revocation');
  assert.equal(await env.ACCESS_KV.get('ref:cs_p2'), 'a@b.co', 'its reference is spent all the same');
  assert.deepEqual(await revoke(env, 'a@b.co', 'refund', { paymentIntent: 'pi_2' }), { scope: '*', already: true });
  // A genuinely new purchase still lifts it.
  await grant(env, 'a@b.co', 'p3', { at: now + 2000, ref: 'cs_p3', paymentIntent: 'pi_3' });
  e = await entitlementsFor(env, 'a@b.co');
  assert.deepEqual(e.parts, [3]); assert.equal(e.revoked, false);
});

test('a failed purchase write never leaves a Stripe reference marked spent', async () => {
  const env = { ACCESS_KV: kv() };
  const realPut = env.ACCESS_KV.put;
  let fail = true;
  env.ACCESS_KV.put = async (k, v) => { if (fail && k.startsWith('purchase:')) { fail = false; throw new Error('KV unavailable'); } return realPut(k, v); };
  await assert.rejects(grant(env, 'a@b.co', 'p3', { ref: 'cs_x' }));
  assert.equal(await env.ACCESS_KV.get('ref:cs_x'), null, 'the marker is written only after the purchase');
  const retry = await grant(env, 'a@b.co', 'p3', { ref: 'cs_x' });
  assert.equal(retry.applied, true, 'the webhook retry grants');
  assert.equal(await env.ACCESS_KV.get('ref:cs_x'), 'a@b.co');
});

test('a Stripe reference stays spent after it falls out of the fifty-entry history', async () => {
  const env = { ACCESS_KV: kv() };
  const now = Date.UTC(2026, 8, 2);
  await grant(env, 'a@b.co', 'p3', { at: now, ref: 'cs_first' });
  for (let i = 0; i < 60; i++) await grant(env, 'a@b.co', 'practitioner_month', { at: now + i * 1000, ref: `in_${i}`, until: now + 35 * 86400e3 });
  const p = JSON.parse(await env.ACCESS_KV.get('purchase:a@b.co'));
  assert.equal(p.history.length, 50); assert.ok(!p.history.some((h) => h.ref === 'cs_first'), 'the first reference is no longer in history');
  const replay = await grant(env, 'a@b.co', 'p3', { at: now + 1e9, ref: 'cs_first' });
  assert.equal(replay.applied, false, 'revisiting the old success URL grants nothing');
  assert.equal(replay.purchase.skus.p3, now + 365 * 86400e3);
});

test('entitlementsOf reports expiries as dates and ignores expired skus', () => {
  const now = Date.UTC(2026, 8, 2);
  const e = entitlementsOf({ skus: { p1: now + 86400e3, p2: now - 1 } }, false, now);
  assert.deepEqual(e.parts, [1]);
  assert.equal(e.expires.p1, '2026-09-03');
  assert.equal('p2' in e.expires, false);
});

test('the bank samples without repeats, across domains, and strips answers', () => {
  const c = counts();
  assert.equal(c.length, 3);
  assert.ok(c[2].questions > 500, 'Part 3 is a full multiple-choice bank');
  assert.ok(c[0].drills + c[1].drills > 900, 'Parts 1 and 2 are drills');
  const qs = sampleQuestions({ parts: [3], count: 50 });
  assert.equal(qs.length, 50);
  assert.equal(new Set(qs.map((q) => q.id)).size, 50);
  assert.ok(new Set(qs.map((q) => q.domain)).size >= 3, 'spread across domains');
  const pub = publicQuestion(qs[0]);
  assert.equal('answerIndex' in pub, false); assert.equal('explanation' in pub, false);
  assert.ok(questionById(qs[0].id).options.length === 4);
  const one = sampleQuestions({ parts: [3], count: 25, domain: '3.3' });
  assert.ok(one.every((q) => q.domain === '3.3'));
  const p2 = sampleQuestions({ parts: [2], count: 25 });
  assert.equal(p2.length, 25, 'Part 2 has a multiple-choice bank');
  assert.ok(p2.every((q) => q.part === 2 && q.options.length === 4));
  assert.ok(c[1].questions >= 350, 'three per Part 2 page');
  assert.equal(sampleQuestions({ parts: [1], count: 25 }).length, 25, 'Part 1 has some too');
  assert.equal(sampleDrills({ parts: [2], count: 10 }).length, 10);
});

test('the gate refuses when unconfigured, signed out, revoked, or under-entitled', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  const noCookie = new Request('https://s/api/x');
  assert.equal((await gate(noCookie, {})).response.status, 503);
  assert.equal((await gate(noCookie, env)).response.status, 401);
  const t = await sessionToken('a@b.co', SECRET);
  const req = new Request('https://s/api/x', { headers: { Cookie: setCookieHeader(t).split(';')[0] } });
  await grant(env, 'a@b.co', 'p3');
  const r402 = await gate(req, env, { parts: [1, 3] });
  assert.equal(r402.response.status, 402);
  assert.deepEqual((await r402.response.json()).needs, [1]);
  const ok = await gate(req, env, { parts: [3] });
  assert.equal(ok.email, 'a@b.co'); assert.deepEqual(ok.parts, [3]);
  await revoke(env, 'a@b.co', 'dispute');
  assert.equal((await gate(req, env)).response.status, 403);
});
