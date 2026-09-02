import { gate, recordAttempt, byDomainSummary } from '../../_lib/gate.js';
import { questionById } from '../../_lib/bank.js';
import { json, error, readJson } from '../../_lib/json.js';

// POST /api/exam/grade { examId, answers: { [questionId]: optionIndex } }
// Scores the exam started by this account, records the attempt, and returns each
// question's correct option, explanation and the page that teaches it.
export async function onRequestPost({ request, env }) {
  const g = await gate(request, env);
  if (g.response) return g.response;
  const { examId, answers } = await readJson(request);
  if (!examId || typeof examId !== 'string') return error('Missing examId.');
  const raw = await env.ACCESS_KV.get(`exam:${examId}`);
  if (!raw) return error('That exam has expired or was already graded.', 404);
  const exam = JSON.parse(raw);
  if (exam.email !== g.email) return error('That exam belongs to another account.', 403);

  const given = answers && typeof answers === 'object' ? answers : {};
  const items = exam.ids.map((id) => {
    const q = questionById(id);
    if (!q) return null;
    const chosen = Number.isInteger(given[id]) ? given[id] : null;
    return { id, code: q.code, part: q.part, domain: q.domain, domainTitle: q.domainTitle, stem: q.stem, options: q.options,
      chosen, answerIndex: q.answerIndex, correct: chosen === q.answerIndex, explanation: q.explanation, pagePath: q.pagePath, pageTitle: q.pageTitle };
  }).filter(Boolean);

  const score = items.filter((i) => i.correct).length;
  const attempt = {
    id: examId, kind: 'exam', at: Date.now(), parts: exam.parts, domain: exam.domain, timed: exam.timed,
    durationMs: Date.now() - exam.startedAt, score, total: items.length,
    byDomain: byDomainSummary(items),
    items: items.map((i) => ({ id: i.id, code: i.code, domain: i.domain, chosen: i.chosen, correct: i.correct })),
  };
  await recordAttempt(env, g.email, attempt);
  await env.ACCESS_KV.delete(`exam:${examId}`);
  return json({ examId, score, total: items.length, percent: Math.round((100 * score) / Math.max(1, items.length)), byDomain: attempt.byDomain, durationMs: attempt.durationMs, items });
}
