import { gate } from '../../_lib/gate.js';
import { sampleDrills, publicDrill } from '../../_lib/bank.js';
import { json, error, readJson, randomId } from '../../_lib/json.js';

const SIZES = [10, 20, 40];

// POST /api/drills/start { parts, count, domain? } — recall drills: an open question
// with a worked answer, revealed one at a time by /api/drills/answer and self-graded.
export async function onRequestPost({ request, env }) {
  const body = await readJson(request);
  const g = await gate(request, env, { parts: Array.isArray(body.parts) ? body.parts : [] });
  if (g.response) return g.response;
  const count = SIZES.includes(Number(body.count)) ? Number(body.count) : 20;
  const domain = typeof body.domain === 'string' && /^\d\.\d+$/.test(body.domain) ? body.domain : undefined;
  const drills = sampleDrills({ parts: g.parts, count, domain });
  if (drills.length === 0) return error('No drills match that selection.', 404);
  const drillId = randomId();
  await env.ACCESS_KV.put(`drill:${drillId}`, JSON.stringify({ email: g.email, ids: drills.map((d) => d.id), parts: g.parts, domain, startedAt: Date.now() }), { expirationTtl: 6 * 3600 });
  return json({ drillId, items: drills.map(publicDrill) });
}
