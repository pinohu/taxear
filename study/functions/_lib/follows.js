// Followed topics, kept both ways in KV: follows:<email> is the person's list,
// followers:<code> is the topic's, and pending:<email> holds follows asked for before
// a subscription existed. Every list is a JSON array of strings.
import { OUTLINE } from './outline.data.js';

const codeIndex = new Map(OUTLINE.map((t) => [t.code, t]));
export const isKnownCode = (code) => typeof code === 'string' && codeIndex.has(code);
export const topicOf = (code) => codeIndex.get(code) || null;

async function readList(env, key) {
  const raw = await env.ACCESS_KV.get(key);
  return raw ? JSON.parse(raw) : [];
}
async function writeList(env, key, list) {
  if (list.length === 0) await env.ACCESS_KV.delete(key);
  else await env.ACCESS_KV.put(key, JSON.stringify(list));
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
  const theirs = await readList(env, `followers:${code}`);
  if (!theirs.includes(email)) { theirs.push(email); await writeList(env, `followers:${code}`, theirs); }
  return mine.length;
}

export async function removeFollow(env, email, code) {
  const mine = (await readList(env, `follows:${email}`)).filter((c) => c !== code);
  await writeList(env, `follows:${email}`, mine);
  const theirs = (await readList(env, `followers:${code}`)).filter((e) => e !== email);
  await writeList(env, `followers:${code}`, theirs);
  return mine.length;
}

export async function removeAllFollows(env, email) {
  const mine = await readList(env, `follows:${email}`);
  for (const code of mine) {
    const theirs = (await readList(env, `followers:${code}`)).filter((e) => e !== email);
    await writeList(env, `followers:${code}`, theirs);
  }
  await writeList(env, `follows:${email}`, []);
  await writeList(env, `pending:${email}`, []);
  return mine.length;
}

export async function listFollows(env, email) {
  const codes = await readList(env, `follows:${email}`);
  return codes.map((code) => ({ code, ...(topicOf(code) || {}) }));
}

export async function followersOf(env, code) {
  return readList(env, `followers:${code}`);
}

// Called when a Practitioner entitlement is granted: pending follows become real.
export async function applyPending(env, email) {
  const pending = await readList(env, `pending:${email}`);
  for (const code of pending) await addFollow(env, email, code);
  await writeList(env, `pending:${email}`, []);
  return pending.length;
}
