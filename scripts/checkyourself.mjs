// Parses the "## Check yourself" block of a topic page's Markdown into questions.
// Pure: no I/O, no imports, so the same function serves the site (FAQPage structured
// data, via src/checkyourself.ts), the tests, and the Study importer.
//
// Two question forms and two option forms are in use across the 360 pages, and a page
// may mix them:
//
//   **1. Question text?**              **1.** Question text, possibly
//   (A) first (B) second (C) third      wrapping onto a second line?
//   (D) fourth
//   *Answer: B. One-line reason.*       A. first
//                                       B. second
//                                       C. third
//                                       D. fourth
//
//                                       *Answer: (B) One-line reason.*
//
// A few pages ask an open question ("Does he recognise gain?") whose answer line has
// no letter; those come back with an empty `answer` and the full text as `reason`.

export function checkYourself(markdown) {
  const block = String(markdown ?? '').split(/^##\s+Check yourself\s*$/m)[1];
  if (!block) return [];
  const chunks = block.split(/^(?=\*\*\s*\d+\.)/m).filter((c) => /^\*\*\s*\d+\./.test(c.trim()));
  const out = [];
  for (const chunk of chunks) {
    let question = '';
    let rest = chunk;
    // Form 1: the bold run spans the question text.
    const spanning = chunk.match(/^\*\*\s*\d+\.\s*([\s\S]*?)\*\*/);
    if (spanning && spanning[1].trim()) {
      question = spanning[1];
      rest = chunk.slice(spanning[0].length);
    } else {
      // Form 2: only the number is bold; the question runs to the first blank line,
      // the first option, or the answer line.
      const plain = chunk.match(/^\*\*\s*\d+\.\s*\*\*\s*([\s\S]*?)(?=\n[ \t]*\n|\n\(?[A-D][.)]\s|\n\*Answer:|$(?![\s\S]))/);
      question = plain?.[1] ?? '';
      rest = chunk.slice(plain?.[0].length ?? 0);
    }
    question = question.replace(/\s+/g, ' ').trim();
    if (!question) continue;

    const answerLine = chunk.match(/^\*Answer:\s*([\s\S]*?)\*[ \t]*$/m)?.[1]?.replace(/\s+/g, ' ').trim() ?? '';
    const lettered = answerLine.match(/^\(?([A-D])\)?[.):]?\s*(.*)$/);
    const answer = lettered ? lettered[1] : '';
    const reason = (lettered ? lettered[2] : answerLine).trim();

    let options = [];
    const inline = rest.match(/\(A\)[\s\S]*?(?=\n[ \t]*\n|\n\*Answer:|$(?![\s\S]))/);
    if (inline) {
      options = [...inline[0].matchAll(/\(([A-D])\)\s*([^(]+)/g)]
        .map((m) => ({ letter: m[1], text: m[2].trim().replace(/\s+/g, ' ') }));
    } else {
      options = [...rest.matchAll(/^([A-D])\.[ \t]+(.+)$/gm)]
        .map((m) => ({ letter: m[1], text: m[2].trim().replace(/\s+/g, ' ') }));
    }
    out.push({ question, options, answer, reason });
  }
  return out;
}
