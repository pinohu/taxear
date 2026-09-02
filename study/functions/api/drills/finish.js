import { gate, recordAttempt, byDomainSummary } from '../../_lib/gate.js';
import { drillById } from '../../_lib/bank.js';
import { json, error, readJson } from '../../_lib/json.js';

// POST /api/drills/finish { drillId, results: { [id]: "got" | "missed" } }
// Records the self-graded outcome so drills feed the same weak-area view as exams.
export async function onRequestPost({ request, env }) {
  const g = await gate(request, env);
  if (g.response) return g.response;
  const { drillId, results } = await readJson(request);
  const raw = drillId ? await env.ACCESS_KV.get(`drill:${drillId}`) : null;
  if (!raw) return error('That drill set has expired.', 404);
  const set = JSON.parse(raw);
  if (set.email !== g.email) return error('That drill set belongs to another account.', 403);
  const marks = results && typeof results === 'object' ? results : {};
  const items = set.ids.map((id) => { const d = drillById(id); return d ? { id, code: d.code, part: d.part, domain: d.domain, domainTitle: d.domainTitle, correct: marks[id] === 'got', seen: id in marks } : null; }).filter(Boolean);
  const seen = items.filter((i) => i.seen);
  const attempt = {
    id: drillId, kind: 'drill', at: Date.now(), parts: set.parts, domain: set.domain, timed: false,
    durationMs: Date.now() - set.startedAt, score: seen.filter((i) => i.correct).length, total: seen.length,
    byDomain: byDomainSummary(seen), items: seen.map((i) => ({ id: i.id, code: i.code, domain: i.domain, correct: i.correct })),
  };
  await recordAttempt(env, g.email, attempt);
  await env.ACCESS_KV.delete(`drill:${drillId}`);
  return json({ score: attempt.score, total: attempt.total, byDomain: attempt.byDomain });
}
