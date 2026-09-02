// Shared entry check for gated endpoints: who is asking, what they may open, and
// whether the parts they asked for are covered. Returns either { email, ent, parts }
// or a Response to send straight back.
import { sessionEmail } from './cookie.js';
import { entitlementsFor } from './entitlements.js';
import { error } from './json.js';

export async function gate(request, env, { parts } = {}) {
  if (!env.COOKIE_SECRET || !env.ACCESS_KV) return { response: error('Access is not configured yet.', 503) };
  const email = await sessionEmail(request, env);
  if (!email) return { response: error('Sign in to continue.', 401) };
  const ent = await entitlementsFor(env, email);
  if (ent.revoked) return { response: error('Access to this account was withdrawn after a refund or dispute. Write to editor@taxear.com if that is a mistake.', 403) };
  if (parts) {
    const wanted = [...new Set(parts.map(Number).filter((n) => [1, 2, 3].includes(n)))];
    if (wanted.length === 0) return { response: error('Choose at least one part.') };
    const missing = wanted.filter((n) => !ent.parts.includes(n));
    if (missing.length) return { response: error(`Your purchase does not cover Part ${missing.join(' and ')}.`, 402, { needs: missing }) };
    return { email, ent, parts: wanted };
  }
  return { email, ent };
}

// Attempt history: full record under attempt:<email>:<id>, a compact index under
// attempts:<email> so the account page needs one read.
export async function recordAttempt(env, email, attempt) {
  await env.ACCESS_KV.put(`attempt:${email}:${attempt.id}`, JSON.stringify(attempt));
  const raw = await env.ACCESS_KV.get(`attempts:${email}`);
  const index = raw ? JSON.parse(raw) : [];
  index.unshift({ id: attempt.id, kind: attempt.kind, at: attempt.at, parts: attempt.parts, score: attempt.score, total: attempt.total, timed: attempt.timed, durationMs: attempt.durationMs });
  await env.ACCESS_KV.put(`attempts:${email}`, JSON.stringify(index.slice(0, 100)));
}

export function byDomainSummary(items) {
  const out = {};
  for (const it of items) {
    const d = (out[it.domain] ||= { domain: it.domain, title: it.domainTitle, part: it.part, correct: 0, total: 0 });
    d.total++; if (it.correct) d.correct++;
  }
  return Object.values(out).sort((a, b) => a.domain.localeCompare(b.domain, undefined, { numeric: true }));
}
