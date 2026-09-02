import { gate } from '../_lib/gate.js';
import { json } from '../_lib/json.js';

// GET /api/attempts — this account's exam and drill history, newest first, with the
// weak-area roll-up across the last twenty attempts.
export async function onRequestGet({ request, env }) {
  const g = await gate(request, env);
  if (g.response) return g.response;
  const raw = await env.ACCESS_KV.get(`attempts:${g.email}`);
  const index = raw ? JSON.parse(raw) : [];
  const recent = index.slice(0, 20);
  const full = await Promise.all(recent.map((a) => env.ACCESS_KV.get(`attempt:${g.email}:${a.id}`)));
  const byDomain = {};
  for (const r of full) {
    if (!r) continue;
    for (const d of JSON.parse(r).byDomain || []) {
      const x = (byDomain[d.domain] ||= { domain: d.domain, title: d.title, part: d.part, correct: 0, total: 0 });
      x.correct += d.correct; x.total += d.total;
    }
  }
  const weak = Object.values(byDomain).filter((d) => d.total >= 5).map((d) => ({ ...d, percent: Math.round((100 * d.correct) / d.total) })).sort((a, b) => a.percent - b.percent);
  return json({ attempts: index, weakAreas: weak });
}
