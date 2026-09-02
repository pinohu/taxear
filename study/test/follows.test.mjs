// Following, confirmation by mailbox, pending follows applied on subscription, the
// notify endpoint's per-recipient delivery record, and the two-step stop link. No email
// leaves: without RESEND_API_KEY a send is reported as failed, never faked.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { grant } from '../functions/_lib/entitlements.js';
import { addFollow, applyPending, listFollows, listPending, followersOf, removeAllFollows, isKnownCode, topicOf } from '../functions/_lib/follows.js';
import { sessionToken, setCookieHeader, signToken } from '../functions/_lib/cookie.js';
import * as follow from '../functions/api/follow.js';
import * as confirm from '../functions/api/follow/confirm.js';
import * as follows from '../functions/api/follows.js';
import * as notify from '../functions/api/notify.js';
import * as unfollowAll from '../functions/api/unfollow-all.js';

const SECRET = 'test-secret';
// KV stub with the list() the follower index relies on.
const kv = () => {
  const m = new Map();
  return {
    get: async (k) => m.get(k) ?? null, put: async (k, v) => { m.set(k, v); }, delete: async (k) => { m.delete(k); },
    list: async ({ prefix }) => ({ keys: [...m.keys()].filter((k) => k.startsWith(prefix)).map((name) => ({ name })), list_complete: true }),
    _m: m,
  };
};
const post = (path, body, headers = {}) => new Request(`https://study.taxear.com${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });
const asJson = async (res) => ({ status: res.status, body: await res.json(), headers: res.headers });
const cookieFor = async (email) => setCookieHeader(await sessionToken(email, SECRET)).split(';')[0];

test('the outline is known to the Functions, with page titles', () => {
  assert.equal(isKnownCode('3.3.1.c'), true);
  assert.equal(isKnownCode('9.9.9.z'), false);
  assert.match(topicOf('3.3.1.c').title, /Offer in compromise: grounds/);
  assert.equal(topicOf('2.2.3.a').title, 'Basis of business assets', 'the page title, not the outline wording');
});

test('follow: never enrols an address without proof; same answer for subscribers and strangers', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  const cors = { Origin: 'https://taxear.com' };
  let r = await asJson(await follow.onRequestPost({ request: post('/api/follow', { email: 'p@q.io', code: '3.3.1.c' }, cors), env }));
  assert.equal(r.status, 200); assert.equal(r.body.status, 'check_email');
  assert.equal(r.headers.get('Access-Control-Allow-Origin'), 'https://taxear.com');
  assert.deepEqual(await followersOf(env, '3.3.1.c'), [], 'a stranger is parked, not enrolled');
  assert.deepEqual(await listPending(env, 'p@q.io'), ['3.3.1.c']);
  await grant(env, 'p@q.io', 'practitioner_month');
  r = await asJson(await follow.onRequestPost({ request: post('/api/follow', { email: 'p@q.io', code: '3.2.6.a' }, cors), env }));
  assert.equal(r.body.status, 'check_email', 'a subscriber gets the same words; the proof is the emailed link');
  assert.deepEqual(await followersOf(env, '3.2.6.a'), [], 'still not enrolled until the link is used');
  assert.ok(await env.ACCESS_KV.get('follow-cooldown:p@q.io:3.2.6.a'), 'a confirmation was attempted');
  r = await asJson(await follow.onRequestPost({ request: post('/api/follow', { email: 'p@q.io', code: '3.2.6.b' }, cors), env }));
  assert.ok(await env.ACCESS_KV.get('follow-cooldown:p@q.io:3.2.6.b'), 'a second topic within the minute gets its own confirmation, since each link follows one topic');
  for (const code of ['3.1.1.a', '3.1.1.b', '3.1.2.a', '3.1.2.b', '3.1.2.c']) await follow.onRequestPost({ request: post('/api/follow', { email: 'p@q.io', code }, cors), env });
  assert.equal(await env.ACCESS_KV.get('follow-burst:p@q.io'), '5');
  assert.equal(await env.ACCESS_KV.get('follow-cooldown:p@q.io:3.1.2.b'), null, 'past the hourly cap no further confirmation is attempted');
  assert.equal(await env.ACCESS_KV.get('follow-cooldown:p@q.io:3.1.2.c'), null);
  assert.deepEqual((await listPending(env, 'p@q.io')).length, 8, 'the requests are still parked; only the emails are capped');
  // Signed in as that address on Study itself: applied at once.
  const cookie = await cookieFor('p@q.io');
  r = await asJson(await follow.onRequestPost({ request: post('/api/follow', { email: 'p@q.io', code: '3.2.6.b' }, { Cookie: cookie }), env }));
  assert.equal(r.body.status, 'following');
  assert.deepEqual(await followersOf(env, '3.2.6.b'), ['p@q.io']);
  const bad = await asJson(await follow.onRequestPost({ request: post('/api/follow', { email: 'p@q.io', code: 'x' }), env }));
  assert.equal(bad.status, 400);
  const evil = await follow.onRequestOptions({ request: new Request('https://s/api/follow', { method: 'OPTIONS', headers: { Origin: 'https://evil.example' } }) });
  assert.equal(evil.headers.get('Access-Control-Allow-Origin'), null);
});

test('confirm link: GET only shows the topic; POST follows that one topic, once, and signs the browser in', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  await grant(env, 'p@q.io', 'practitioner_month');
  await addFollow(env, 'p@q.io', '3.3.1.c', { pending: true });
  await addFollow(env, 'p@q.io', '3.2.6.a', { pending: true }); // parked by someone else during the link's life
  await env.ACCESS_KV.put('confirm:abc', JSON.stringify({ email: 'p@q.io', code: '3.3.1.c' }));
  const token = await signToken({ email: 'p@q.io', jti: 'abc', purpose: 'confirm-follow', exp: Date.now() + 1e6 }, SECRET);
  const scanner = await confirm.onRequestGet({ request: new Request(`https://s/api/follow/confirm?token=${encodeURIComponent(token)}`), env });
  assert.equal(scanner.status, 200); assert.match(await scanner.text(), /Offer in compromise/);
  assert.deepEqual(await followersOf(env, '3.3.1.c'), [], 'a GET, as a mail scanner would make, follows nothing');
  const res = await confirm.onRequestPost({ request: new Request('https://s/api/follow/confirm', { method: 'POST', body: new URLSearchParams({ token }) }), env });
  assert.equal(res.status, 303); assert.match(res.headers.get('Location'), /followed=1/); assert.match(res.headers.get('Set-Cookie'), /ta_access=/);
  assert.deepEqual(await followersOf(env, '3.3.1.c'), ['p@q.io']);
  assert.deepEqual(await followersOf(env, '3.2.6.a'), [], 'the link follows only the topic it was sent for');
  assert.deepEqual(await listPending(env, 'p@q.io'), ['3.2.6.a'], 'the other request stays pending');
  const again = await confirm.onRequestPost({ request: new Request('https://s/api/follow/confirm', { method: 'POST', body: new URLSearchParams({ token }) }), env });
  assert.equal(again.status, 400, 'one use');
  // A record written before links were bound to a topic still applies everything pending.
  await env.ACCESS_KV.put('confirm:old', 'p@q.io');
  const legacy = await signToken({ email: 'p@q.io', jti: 'old', purpose: 'confirm-follow', exp: Date.now() + 1e6 }, SECRET);
  const res2 = await confirm.onRequestPost({ request: new Request('https://s/api/follow/confirm', { method: 'POST', body: new URLSearchParams({ token: legacy }) }), env });
  assert.equal(res2.status, 303);
  assert.deepEqual(await followersOf(env, '3.2.6.a'), ['p@q.io'], 'the legacy link keeps its old promise');
  assert.deepEqual(await listPending(env, 'p@q.io'), []);
});

test('follow: the scripts-off form is parked server-side and redirected to the Practitioner page', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  const form = (fields) => new Request('https://study.taxear.com/api/follow', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', Origin: 'https://taxear.com' }, body: new URLSearchParams(fields) });
  const res = await follow.onRequestPost({ request: form({ email: 'Form@Q.io', code: '3.3.1.c' }), env });
  assert.equal(res.status, 303);
  assert.match(res.headers.get('Location'), /\/practitioner\/\?code=3\.3\.1\.c&email=form%40q\.io&parked=1/);
  assert.deepEqual(await listPending(env, 'form@q.io'), ['3.3.1.c']);
  const bad = await follow.onRequestPost({ request: form({ email: 'nope', code: '3.3.1.c' }), env });
  assert.match(bad.headers.get('Location'), /practitioner\/\?error=/);
  // Buying the subscription applies what was parked, whichever way it was parked.
  await grant(env, 'form@q.io', 'practitioner_month');
  await applyPending(env, 'form@q.io');
  assert.deepEqual(await followersOf(env, '3.3.1.c'), ['form@q.io']);
});

test('followers are independent keys, so concurrent follows do not overwrite each other', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  await Promise.all([addFollow(env, 'a@q.io', '3.3.1.c'), addFollow(env, 'b@q.io', '3.3.1.c'), addFollow(env, 'c@q.io', '3.3.1.c')]);
  assert.deepEqual((await followersOf(env, '3.3.1.c')).sort(), ['a@q.io', 'b@q.io', 'c@q.io']);
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

test('notify: authenticates, records delivery per recipient, retries only the owed, processes every change', async () => {
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
  assert.equal(r.status, 502, 'a failed send leaves the change incomplete and fails the calling workflow');
  const rep = r.body.report[0];
  assert.equal(rep.followers, 2); assert.equal(rep.notEntitled, 1); assert.equal(rep.failed, 1); assert.equal(rep.complete, false);
  assert.equal(await env.ACCESS_KV.get('alert:3.3.1.c:2026-10-15'), null, 'no topic marker while someone is still owed');
  // A retry attempts the owed recipient again rather than reporting "already sent".
  r = await asJson(await notify.onRequestPost({ request: post('/api/notify', { changes: [change] }, auth), env }));
  assert.equal(r.body.report[0].failed, 1); assert.equal(r.body.report[0].skipped, undefined);
  // Simulate a delivered recipient: the retry skips them and completes.
  await env.ACCESS_KV.put('sent:3.3.1.c:2026-10-15:live@q.io', '1');
  r = await asJson(await notify.onRequestPost({ request: post('/api/notify', { changes: [change] }, auth), env }));
  assert.equal(r.status, 200); assert.equal(r.body.report[0].already, 1); assert.equal(r.body.report[0].complete, true);
  r = await asJson(await notify.onRequestPost({ request: post('/api/notify', { changes: [change] }, auth), env }));
  assert.equal(r.body.report[0].skipped, 'already sent');
  // Every change in a large payload is processed.
  const many = Array.from({ length: 60 }, (_, i) => ({ code: '3.2.6.a', date: `2026-11-${String((i % 28) + 1).padStart(2, '0')}`, summary: 's' }));
  r = await asJson(await notify.onRequestPost({ request: post('/api/notify', { changes: many }, auth), env }));
  assert.equal(r.body.report.length, 60);
  r = await asJson(await notify.onRequestPost({ request: post('/api/notify', { changes: [{ code: 'x', date: 'nope', summary: '' }] }, auth), env }));
  assert.equal(r.body.report[0].skipped, 'malformed');
});

test('unfollow-all: GET only confirms; POST with the token stops everything; a bad token changes nothing', async () => {
  const env = { COOKIE_SECRET: SECRET, ACCESS_KV: kv() };
  await grant(env, 'p@q.io', 'practitioner_month');
  await addFollow(env, 'p@q.io', '3.3.1.c'); await addFollow(env, 'p@q.io', '3.2.6.a');
  const token = await signToken({ email: 'p@q.io', purpose: 'unfollow-all', exp: Date.now() + 1e9 }, SECRET);
  const scanner = await unfollowAll.onRequestGet({ request: new Request(`https://s/api/unfollow-all?token=${encodeURIComponent(token)}`), env });
  assert.equal(scanner.status, 200);
  assert.equal((await listFollows(env, 'p@q.io')).length, 2, 'a GET, as a mail scanner would make, changes nothing');
  const bad = await unfollowAll.onRequestPost({ request: new Request('https://s/api/unfollow-all', { method: 'POST', body: new URLSearchParams({ token: 'nope' }) }), env });
  assert.equal(bad.status, 400);
  const ok = await unfollowAll.onRequestPost({ request: new Request('https://s/api/unfollow-all', { method: 'POST', body: new URLSearchParams({ token }) }), env });
  assert.equal(ok.status, 200);
  assert.equal((await listFollows(env, 'p@q.io')).length, 0);
  assert.deepEqual(await followersOf(env, '3.3.1.c'), []);
  assert.equal(await removeAllFollows(env, 'p@q.io'), 0);
  assert.equal(await applyPending(env, 'p@q.io'), 0);
});
