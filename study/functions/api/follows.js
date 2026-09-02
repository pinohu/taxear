import { gate } from '../_lib/gate.js';
import { json, error, readJson } from '../_lib/json.js';
import { listFollows, removeFollow, addFollow, isKnownCode } from '../_lib/follows.js';

// GET /api/follows — the signed-in account's followed topics.
// POST /api/follows { code, action: "follow" | "unfollow" } — change one.
export async function onRequestGet({ request, env }) {
  const g = await gate(request, env);
  if (g.response) return g.response;
  return json({ practitioner: g.ent.practitioner, follows: await listFollows(env, g.email) });
}

export async function onRequestPost({ request, env }) {
  const g = await gate(request, env);
  if (g.response) return g.response;
  const { code, action } = await readJson(request);
  if (!isKnownCode(code)) return error('Unknown topic code.');
  if (action === 'unfollow') { await removeFollow(env, g.email, code); }
  else if (action === 'follow') {
    if (!g.ent.practitioner) return error('Alerts are part of the Practitioner subscription.', 402, { needs: ['practitioner'] });
    await addFollow(env, g.email, code);
  } else return error('action must be follow or unfollow.');
  return json({ practitioner: g.ent.practitioner, follows: await listFollows(env, g.email) });
}
