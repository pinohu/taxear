// Following, pending follows applied on subscription, the notify endpoint's
// once-per-change guarantee, and the one-click stop link. No email leaves: the notify
// test runs without RESEND_API_KEY and counts the failures it reports.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { grant } from '../functions/_lib/entitlements.js';
import { addFollow, applyPending, listFollows, followersOf, removeAllFollows, isKnownCode } from '../functions/_lib/follows.js';
import { sessionToken, setCookieHeader, signToken } from '../functions/_lib/cookie.js';
import * as follow from '../functions/api/follow.js';
import * as follows from '../functions/api/follows.js';
import * as notify from '../functions/api/notify.js';
import * as unfollowAll from '../functions/api/unfollow-all.js';

const SECRET = 'test-secret';
const kv = () => { const m = new Map(); return { get: async (k) => m.get(k) ?? null, put: async (k, v) => { m.set(k, v); }, delete: async (k) => { m.delete(k); }, _m: m }; };
const post = (path, body, headers = {}) => new Request(`https://study.taxear.com${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });
const asJson = async (res) => ({ status: res.status, body: await res.json(), headers: res.headers });
const cookieFor = async (email) => setCookieHeader(await sessionToken(email, SECRET)).split(';')[0];

test('the outline is known to the Functions', () => {
  assert.equal(isKnownCode('3.3.1.c'), true);
  assert.equal(isKnownCode('9.9.9.z'), false);
});

test('follow: non-subscriber is parked as pending and pointed at the subscription; subscriber follows', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  const cors = { Origin: 'https://taxear.com' };
  let r = await asJson(await follow.onRequestPost({ request: post('/api/follow', { email: 'p@q.io', code: '3.3.1.c' }, cors), env }));
  assert.equal(r.status, 200); assert.equal(r.body.status, 'needs_subscription');
  assert.match(r.body.subscribeUrl, /practitioner\/\?code=3\.3\.1\.c/);
  assert.equal(r.headers.get('Access-Control-Allow-Origin'), 'https://taxear.com');
  assert.deepEqual(await followersOf(env, '3.3.1.c'), []);
  await grant(env, 'p@q.io', 'practitioner_month');
  assert.equal(await applyPending(env, 'p@q.io'), 1);
  assert.deepEqual(await followersOf(env, '3.3.1.c'), ['p@q.io']);
  r = await asJson(await follow.onRequestPost({ request: post('/api/follow', { email: 'p@q.io', code: '3.2.6.a' }), env }));
  assert.equal(r.body.status, 'following'); assert.equal(r.body.count, 2);
  const bad = await asJson(await follow.onRequestPost({ request: post('/api/follow', { email: 'p@q.io', code: 'x' }), env }));
  assert.equal(bad.status, 400);
  const evil = await follow.onRequestOptions({ request: new Request('https://s/api/follow', { method: 'OPTIONS', headers: { Origin: 'https://evil.example' } }) });
  assert.equal(evil.headers.get('Access-Control-Allow-Origin'), null);
});

test('follows: list and unfollow from the account', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  await grant(env, 'p@q.io', 'practitioner_year');
  await addFollow(env, 'p@q.io', '3.3.1.c');
  const cookie = await cookieFor('p@q.io');
  let r = await asJson(await follows.onRequestGet({ request: new Request('https://s/api/follows', { headers: { Cookie: cookie } }), env }));
  assert.equal(r.body.follows.length, 1); assert.equal(r.body.follows[0].title.length > 5, true);
  r = await asJson(await follows.onRequestPost({ request: post('/api/follows', { code: '3.3.1.c', action: 'unfollow' }, { Cookie: cookie }), env }));
  assert.equal(r.body.follows.length, 0);
  assert.deepEqual(await followersOf(env, '3.3.1.c'), []);
  const notSub = await cookieFor('n@o.io');
  await grant(env, 'n@o.io', 'p3');
  r = await asJson(await follows.onRequestPost({ request: post('/api/follows', { code: '3.3.1.c', action: 'follow' }, { Cookie: notSub }), env }));
  assert.equal(r.status, 402);
});

test('notify: authenticates, sends once per (code, date), skips lapsed subscribers, reports honestly', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv(), NOTIFY_SECRET: 'n0t1fy' };
  await grant(env, 'live@q.io', 'practitioner_month');
  await addFollow(env, 'live@q.io', '3.3.1.c');
  await grant(env, 'lapsed@q.io', 'practitioner_month', { at: Date.UTC(2020, 0, 1) });
  await addFollow(env, 'lapsed@q.io', '3.3.1.c');
  const change = { code: '3.3.1.c', date: '2026-10-15', summary: 'The lump-sum down payment rate changed.' };
  let r = await asJson(await notify.onRequestPost({ request: post('/api/notify', { changes: [change] }), env }));
  assert.equal(r.status, 401);
  const auth = { Authorization: 'Bearer n0t1fy' };
  r = await asJson(await notify.onRequestPost({ request: post('/api/notify', { changes: [change] }, auth), env }));
  assert.equal(r.status, 200);
  const rep = r.body.report[0];
  assert.equal(rep.followers, 2); assert.equal(rep.notEntitled, 1);
  assert.equal(rep.sent + rep.failed, 1, 'the live subscriber is attempted; without an email key it is reported as failed, never faked');
  assert.equal(rep.failed, 1);
  r = await asJson(await notify.onRequestPost({ request: post('/api/notify', { changes: [change] }, auth), env }));
  assert.equal(r.body.report[0].skipped, 'already sent');
  r = await asJson(await notify.onRequestPost({ request: post('/api/notify', { changes: [{ code: 'x', date: 'nope', summary: '' }] }, auth), env }));
  assert.equal(r.body.report[0].skipped, 'malformed');
});

test('unfollow-all: a signed link stops everything; a bad link changes nothing', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  await grant(env, 'p@q.io', 'practitioner_month');
  await addFollow(env, 'p@q.io', '3.3.1.c'); await addFollow(env, 'p@q.io', '3.2.6.a');
  const token = await signToken({ email: 'p@q.io', purpose: 'unfollow-all', exp: Date.now() + 1e9 }, SECRET);
  const bad = await unfollowAll.onRequestGet({ request: new Request('https://s/api/unfollow-all?token=nope'), env });
  assert.equal(bad.status, 400);
  assert.equal((await listFollows(env, 'p@q.io')).length, 2);
  const ok = await unfollowAll.onRequestGet({ request: new Request(`https://s/api/unfollow-all?token=${encodeURIComponent(token)}`), env });
  assert.equal(ok.status, 200);
  assert.equal((await listFollows(env, 'p@q.io')).length, 0);
  assert.deepEqual(await followersOf(env, '3.3.1.c'), []);
  assert.equal(await removeAllFollows(env, 'p@q.io'), 0);
});
