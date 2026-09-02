// The HTTP handlers end to end with a stubbed KV and no Stripe or email: sign-in state,
// the exam and drill round trips, history, and the failure paths a browser can hit.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sessionToken, setCookieHeader } from '../functions/_lib/cookie.js';
import { grant } from '../functions/_lib/entitlements.js';
import * as me from '../functions/api/me.js';
import * as logout from '../functions/api/logout.js';
import * as login from '../functions/api/login.js';
import * as examStart from '../functions/api/exam/start.js';
import * as examGrade from '../functions/api/exam/grade.js';
import * as drillStart from '../functions/api/drills/start.js';
import * as drillAnswer from '../functions/api/drills/answer.js';
import * as drillFinish from '../functions/api/drills/finish.js';
import * as attempts from '../functions/api/attempts.js';
import * as checkout from '../functions/api/checkout.js';
import * as webhook from '../functions/api/stripe-webhook.js';

const SECRET = 'test-secret';
const kv = () => { const m = new Map(); return { get: async (k) => m.get(k) ?? null, put: async (k, v) => { m.set(k, v); }, delete: async (k) => { m.delete(k); }, _m: m }; };
const post = (path, body, cookie) => new Request(`https://study.taxear.com${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(cookie ? { Cookie: cookie } : {}) }, body: JSON.stringify(body) });
const get = (path, cookie) => new Request(`https://study.taxear.com${path}`, { headers: cookie ? { Cookie: cookie } : {} });
const asJson = async (res) => ({ status: res.status, body: await res.json(), headers: res.headers });

async function signedIn(env, email = 'a@b.co') {
  const t = await sessionToken(email, SECRET);
  return setCookieHeader(t).split(';')[0];
}

test('me: signed out, then signed in with entitlements', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  let r = await asJson(await me.onRequestGet({ request: get('/api/me'), env }));
  assert.equal(r.body.email, null); assert.deepEqual(r.body.entitlements.parts, []);
  await grant(env, 'a@b.co', 'p3');
  r = await asJson(await me.onRequestGet({ request: get('/api/me', await signedIn(env)), env }));
  assert.equal(r.body.email, 'a@b.co'); assert.deepEqual(r.body.entitlements.parts, [3]);
  const out = await logout.onRequestPost({});
  assert.match(out.headers.get('Set-Cookie'), /Max-Age=0/);
});

test('exam: start returns no answers, grade scores and records, exam is single-use', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  await grant(env, 'a@b.co', 'p3');
  const cookie = await signedIn(env);
  const refused = await asJson(await examStart.onRequestPost({ request: post('/api/exam/start', { parts: [1], count: 25 }, cookie), env }));
  assert.equal(refused.status, 402); assert.deepEqual(refused.body.needs, [1]);
  const s = await asJson(await examStart.onRequestPost({ request: post('/api/exam/start', { parts: [3], count: 10, timed: true }, cookie), env }));
  assert.equal(s.status, 200); assert.equal(s.body.questions.length, 10);
  assert.ok(s.body.questions.every((q) => !('answerIndex' in q) && !('explanation' in q) && q.options.length === 4));
  const answers = Object.fromEntries(s.body.questions.map((q) => [q.id, 0]));
  const g = await asJson(await examGrade.onRequestPost({ request: post('/api/exam/grade', { examId: s.body.examId, answers }, cookie), env }));
  assert.equal(g.status, 200); assert.equal(g.body.total, 10);
  assert.equal(g.body.items.filter((i) => i.chosen === i.answerIndex).length, g.body.score);
  assert.ok(g.body.items.every((i) => typeof i.explanation === 'string' && i.pagePath.startsWith('/')));
  const again = await asJson(await examGrade.onRequestPost({ request: post('/api/exam/grade', { examId: s.body.examId, answers }, cookie), env }));
  assert.equal(again.status, 404);
  const other = await asJson(await examGrade.onRequestPost({ request: post('/api/exam/grade', { examId: 'nope', answers }, await signedIn(env, 'c@d.co')), env }));
  assert.equal(other.status, 404);
  const h = await asJson(await attempts.onRequestGet({ request: get('/api/attempts', cookie), env }));
  assert.equal(h.body.attempts.length, 1); assert.equal(h.body.attempts[0].total, 10); assert.equal(h.body.attempts[0].timed, true);
});

test('drills: one answer at a time, only for a set this account started', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  await grant(env, 'a@b.co', 'all');
  const cookie = await signedIn(env);
  const s = await asJson(await drillStart.onRequestPost({ request: post('/api/drills/start', { parts: [2], count: 10 }, cookie), env }));
  assert.equal(s.status, 200); assert.equal(s.body.items.length, 10);
  assert.ok(s.body.items.every((d) => !('answer' in d)));
  const id = s.body.items[0].id;
  const a = await asJson(await drillAnswer.onRequestPost({ request: post('/api/drills/answer', { drillId: s.body.drillId, id }, cookie), env }));
  assert.equal(a.status, 200); assert.ok(a.body.answer.length > 20);
  const stranger = await asJson(await drillAnswer.onRequestPost({ request: post('/api/drills/answer', { drillId: s.body.drillId, id }, await signedIn(env, 'c@d.co')), env }));
  assert.equal(stranger.status, 403);
  const notInSet = await asJson(await drillAnswer.onRequestPost({ request: post('/api/drills/answer', { drillId: s.body.drillId, id: '9.9.9.z-d1' }, cookie), env }));
  assert.equal(notInSet.status, 400);
  const f = await asJson(await drillFinish.onRequestPost({ request: post('/api/drills/finish', { drillId: s.body.drillId, results: { [id]: 'got', [s.body.items[1].id]: 'missed' } }, cookie), env }));
  assert.equal(f.status, 200); assert.equal(f.body.score, 1); assert.equal(f.body.total, 2);
});

test('login: same answer for unknown and known addresses; known address without email config is a clear 502', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  const unknown = await asJson(await login.onRequestPost({ request: post('/api/login', { email: 'nobody@x.io' }), env }));
  assert.equal(unknown.status, 200); assert.match(unknown.body.message, /If that address/);
  await grant(env, 'a@b.co', 'p1');
  const known = await asJson(await login.onRequestPost({ request: post('/api/login', { email: 'A@B.co ' }), env }));
  assert.equal(known.status, 502); assert.match(known.body.error, /not configured/);
  const bad = await asJson(await login.onRequestPost({ request: post('/api/login', { email: 'not an address' }), env }));
  assert.equal(bad.status, 400);
});

test('portal: signed out, unconfigured, and no customer on record each get a clear answer', async () => {
  const { onRequestPost } = await import('../functions/api/portal.js');
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  assert.equal((await asJson(await onRequestPost({ request: post('/api/portal', {}), env }))).status, 401);
  await grant(env, 'a@b.co', 'practitioner_month');
  const cookie = await signedIn(env);
  assert.equal((await asJson(await onRequestPost({ request: post('/api/portal', {}, cookie), env }))).status, 503);
  const r = await asJson(await onRequestPost({ request: post('/api/portal', {}, cookie), env: { ...env, STRIPE_SECRET_KEY: 'sk_test' } }));
  assert.equal(r.status, 404); assert.match(r.body.error, /No billing record/);
  // A revoked account still reaches the portal: cancelling the subscription is the point.
  const { revoke } = await import('../functions/_lib/entitlements.js');
  await grant(env, 'a@b.co', 'practitioner_month', { ref: 'cs_s', stripeCustomer: 'cus_1' });
  await revoke(env, 'a@b.co', 'dispute');
  const realFetch = globalThis.fetch; let sent = '';
  globalThis.fetch = async (url, init) => { sent = String(init?.body || ''); return new Response(JSON.stringify({ url: 'https://billing.stripe.com/s/x' }), { status: 200 }); };
  try {
    const revoked = await asJson(await onRequestPost({ request: post('/api/portal', {}, cookie), env: { ...env, STRIPE_SECRET_KEY: 'sk_test' } }));
    assert.equal(revoked.status, 200, 'not gated on entitlement');
    assert.match(sent, /cus_1/, 'opens the recorded customer');
    assert.match(revoked.body.url, /billing\.stripe\.com/);
  } finally { globalThis.fetch = realFetch; }
});

test('checkout and webhook refuse cleanly when unconfigured', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  const c = await asJson(await checkout.onRequestPost({ request: post('/api/checkout', { sku: 'p3' }), env }));
  assert.equal(c.status, 503);
  const c2 = await asJson(await checkout.onRequestPost({ request: post('/api/checkout', { sku: 'p3' }), env: { ...env, STRIPE_SECRET_KEY: 'sk_test' } }));
  assert.equal(c2.status, 503); assert.match(c2.body.error, /No price/);
  const c3 = await asJson(await checkout.onRequestPost({ request: post('/api/checkout', { sku: 'gold' }), env: { ...env, STRIPE_SECRET_KEY: 'sk_test' } }));
  assert.equal(c3.status, 400);
  const w = await asJson(await webhook.onRequestPost({ request: post('/api/stripe-webhook', {}), env: { ...env, STRIPE_SECRET_KEY: 'sk', STRIPE_WEBHOOK_SECRET: 'whsec' } }));
  assert.equal(w.status, 400, 'no signature header');
});
