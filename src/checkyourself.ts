// The "## Check yourself" parser lives in scripts/checkyourself.mjs (pure, shared with
// the tests and the Study importer); this file only types it for the site and adds the
// structured-data answer text.
import { checkYourself as parse } from '../scripts/checkyourself.mjs';

export interface CheckQuestion {
  question: string;
  options: { letter: string; text: string }[];
  answer: string; // letter, or '' for an open question
  reason: string;
}

export function checkYourself(markdown: string): CheckQuestion[] {
  return parse(markdown) as CheckQuestion[];
}

// Answer text for structured data: the winning option spelled out, then the reason,
// so the answer stands on its own without the lettered list for context.
export function answerText(q: CheckQuestion): string {
  const chosen = q.options.find(o => o.letter === q.answer);
  const head = chosen ? `${q.answer}. ${chosen.text}` : q.answer;
  if (!head) return q.reason;
  return q.reason ? `${head} — ${q.reason}` : head;
}
