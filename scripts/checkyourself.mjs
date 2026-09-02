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
    // A letter counts only with its delimiter — "B.", "(B)", "B:" — so an open answer
    // that happens to start "A corporation…" is not read as option A.
    // Delimiters in use on the pages: "B.", "(B)", "B:", "B —", "B –", "B,".
    const lettered = answerLine.match(/^(?:\(([A-D])\)|([A-D])\s*[.:,—–])\s*(.*)$/);
    const answer = lettered ? (lettered[1] || lettered[2]) : '';
    const reason = (lettered ? lettered[3] : answerLine).trim();

    let options = [];
    // Inline options start a line; "(A)" inside an answer's prose is not an option list.
    const inline = rest.match(/^\(A\)[\s\S]*?(?=\n[ \t]*\n|\n\*Answer:|$(?![\s\S]))/m);
    if (inline) {
      // An option runs to the next lettered marker, so a citation such as
      // "§ 10.22(a)" inside an option does not cut it short.
      options = [...inline[0].matchAll(/\(([A-D])\)\s*((?:(?!\([A-D]\))[\s\S])+)/g)]
        .map((m) => ({ letter: m[1], text: m[2].trim().replace(/\s+/g, ' ') }));
    } else {
      options = [...rest.matchAll(/^([A-D])\.[ \t]+(.+)$/gm)]
        .map((m) => ({ letter: m[1], text: m[2].trim().replace(/\s+/g, ' ') }));
    }
    out.push({ question, options, answer, reason });
  }
  return out;
}
