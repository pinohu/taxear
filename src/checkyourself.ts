// Parses the "## Check yourself" block out of a topic page's raw Markdown so the
// same questions the reader sees can be emitted as FAQPage structured data.
// Shape expected by docs/PAGE_TEMPLATE.md:
//
//   **1. Question text?**
//   (A) first (B) second (C) third (D) fourth
//   *Answer: B. One-line reason.*

export interface CheckQuestion {
  question: string;
  options: { letter: string; text: string }[];
  answer: string; // letter
  reason: string;
}

export function checkYourself(markdown: string): CheckQuestion[] {
  const block = markdown.split(/^##\s+Check yourself\s*$/m)[1];
  if (!block) return [];
  const out: CheckQuestion[] = [];
  // Each question starts at a bold, numbered line and runs to the next one.
  const chunks = block.split(/^(?=\*\*\d+\.)/m).filter(c => /^\*\*\d+\./.test(c.trim()));
  for (const chunk of chunks) {
    const question = chunk.match(/^\*\*\s*\d+\.\s*([\s\S]*?)\*\*/)?.[1]?.replace(/\s+/g, ' ').trim();
    if (!question) continue;
    const answerLine = chunk.match(/^\*Answer:\s*([\s\S]*?)\*\s*$/m)?.[1]?.replace(/\s+/g, ' ').trim() ?? '';
    const [, answer = '', reason = ''] = answerLine.match(/^\(?([A-D])\)?[.)]?\s*(.*)$/) ?? [];
    const optionLine = chunk.match(/^\((?:A)\)[\s\S]*?$/m)?.[0] ?? '';
    const options = [...optionLine.matchAll(/\(([A-D])\)\s*([^(]+)/g)]
      .map(m => ({ letter: m[1], text: m[2].trim().replace(/\s+/g, ' ') }));
    out.push({ question, options, answer, reason: reason.trim() });
  }
  return out;
}

// Answer text for structured data: the winning option spelled out, then the reason,
// so the answer stands on its own without the lettered list for context.
export function answerText(q: CheckQuestion): string {
  const chosen = q.options.find(o => o.letter === q.answer);
  const head = chosen ? `${q.answer}. ${chosen.text}` : q.answer;
  return q.reason ? `${head} — ${q.reason}` : head;
}
