import { gate } from '../../_lib/gate.js';
import { sampleQuestions, publicQuestion } from '../../_lib/bank.js';
import { json, error, readJson, randomId } from '../../_lib/json.js';

const SIZES = [10, 25, 50, 100];
const EXAM_TTL = 6 * 3600; // seconds an unfinished exam stays gradable

// POST /api/exam/start { parts: [1,3], count: 50, domain?: "3.3", timed?: true }
// Samples questions server-side, remembers the set under an exam id, and returns
// stems and options only. Answers come back from /api/exam/grade.
export async function onRequestPost({ request, env }) {
  const body = await readJson(request);
  const g = await gate(request, env, { parts: Array.isArray(body.parts) ? body.parts : [] });
  if (g.response) return g.response;
  const count = SIZES.includes(Number(body.count)) ? Number(body.count) : 25;
  const domain = typeof body.domain === 'string' && /^\d\.\d+$/.test(body.domain) ? body.domain : undefined;
  const questions = sampleQuestions({ parts: g.parts, count, domain });
  if (questions.length === 0) return error('No multiple-choice questions match that selection yet. Try the recall drills for this part.', 404);
  const examId = randomId();
  const startedAt = Date.now();
  await env.ACCESS_KV.put(`exam:${examId}`, JSON.stringify({ email: g.email, ids: questions.map((q) => q.id), parts: g.parts, domain, timed: !!body.timed, startedAt }), { expirationTtl: EXAM_TTL });
  return json({ examId, startedAt, timed: !!body.timed, secondsPerQuestion: 126, questions: questions.map(publicQuestion) });
}
