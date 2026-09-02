// Followed topics in KV. The person's own list is follows:<email> (a JSON array only
// that person's requests modify). The topic's followers are individual keys,
// follower:<code>:<email> = "1", listed by prefix, so two people following the same
// topic at once never overwrite each other. pending:<email> holds follows asked for
// before a subscription existed. Only published topics can be followed.
import { OUTLINE } from './outline.data.js';

const codeIndex = new Map(OUTLINE.map((t) => [t.code, t]));
export const isKnownCode = (code) => typeof code === 'string' && codeIndex.has(code) && codeIndex.get(code).published !== false;
export const topicOf = (code) => codeIndex.get(code) || null;

async function readList(env, key) {
  const raw = await env.ACCESS_KV.get(key);
  return raw ? JSON.parse(raw) : [];
}
async function writeList(env, key, list) {
  if (list.length === 0) await env.ACCESS_KV.delete(key);
  else await env.ACCESS_KV.put(key, JSON.stringify(list));
}
async function listKeys(env, prefix) {
  const out = [];
  let cursor;
  do {
    const page = await env.ACCESS_KV.list({ prefix, cursor });
    for (const k of page.keys) out.push(k.name);
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  return out;
}

export async function addFollow(env, email, code, { pending = false } = {}) {
  if (pending) {
    const list = await readList(env, `pending:${email}`);
    if (!list.includes(code)) list.push(code);
    await writeList(env, `pending:${email}`, list);
    return list.length;
  }
  const mine = await readList(env, `follows:${email}`);
  if (!mine.includes(code)) { mine.push(code); await writeList(env, `follows:${email}`, mine); }
  await env.ACCESS_KV.put(`follower:${code}:${email}`, '1');
  return mine.length;
}

export async function removeFollow(env, email, code) {
  const mine = (await readList(env, `follows:${email}`)).filter((c) => c !== code);
  await writeList(env, `follows:${email}`, mine);
  await env.ACCESS_KV.delete(`follower:${code}:${email}`);
  return mine.length;
}

export async function removeAllFollows(env, email) {
  const mine = await readList(env, `follows:${email}`);
  for (const code of mine) await env.ACCESS_KV.delete(`follower:${code}:${email}`);
  await writeList(env, `follows:${email}`, []);
  await writeList(env, `pending:${email}`, []);
  return mine.length;
}

export async function listFollows(env, email) {
  const codes = await readList(env, `follows:${email}`);
  return codes.map((code) => ({ code, ...(topicOf(code) || {}) }));
}

export async function listPending(env, email) {
  return readList(env, `pending:${email}`);
}

export async function followersOf(env, code) {
  const prefix = `follower:${code}:`;
  return (await listKeys(env, prefix)).map((k) => k.slice(prefix.length));
}

// Called when a Practitioner entitlement is granted, or a confirmation link is
// followed: pending follows become real.
export async function applyPending(env, email) {
  const pending = await readList(env, `pending:${email}`);
  for (const code of pending) await addFollow(env, email, code);
  await writeList(env, `pending:${email}`, []);
  return pending.length;
}
