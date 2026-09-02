import { gate } from '../../_lib/gate.js';
import { drillById } from '../../_lib/bank.js';
import { json, error, readJson } from '../../_lib/json.js';

// POST /api/drills/answer { drillId, id } — the worked answer for one drill in a set
// this account started. One at a time, so the bank is never served in bulk.
export async function onRequestPost({ request, env }) {
  const g = await gate(request, env);
  if (g.response) return g.response;
  const { drillId, id } = await readJson(request);
  const raw = drillId ? await env.ACCESS_KV.get(`drill:${drillId}`) : null;
  if (!raw) return error('That drill set has expired.', 404);
  const set = JSON.parse(raw);
  if (set.email !== g.email) return error('That drill set belongs to another account.', 403);
  if (!set.ids.includes(id)) return error('That question is not in this set.', 400);
  const d = drillById(id);
  if (!d) return error('Unknown drill.', 404);
  return json({ id, answer: d.answer, pagePath: d.pagePath, pageTitle: d.pageTitle });
}
