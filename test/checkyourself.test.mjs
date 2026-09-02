// The "Check yourself" parser feeds FAQPage structured data and the Study question
// import, so a silent parsing failure would publish nothing while looking fine. These
// fixtures are written here, not lifted from any page or question bank.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkYourself, answerText } from '../src/checkyourself.ts';
import { checkYourself as parseShared } from '../scripts/checkyourself.mjs';

const PAGE = `
Some body text.

## Check yourself

**1. A representative is asked to sign a consent extending the assessment period. Which form is used?**
(A) Form 2848 (B) Form 872 (C) Form 8821 (D) Form 843
*Answer: B. Form 872 is the consent to extend the time to assess tax.*

**2. Which authorization does not permit representation at an examination?**
(A) Form 2848 (B) Form 872 (C) Form 8821 (D) None of these
*Answer: C. A tax information authorization allows inspection only.*
`;

// The form most of the newer pages use: only the number is bold, the stem may wrap,
// options are lettered lines, and the answer letter may be parenthesised.
const PAGE_B = `
## Check yourself

**1.** A taxpayer's spouse died in 2024. For which years may the taxpayer file as a qualifying
surviving spouse, assuming a dependent child in the home and no remarriage?

A. 2024 only
B. 2024 and 2025
C. 2025 and 2026
D. 2025 through 2027

*Answer: C. A joint return is available for the year of death itself; surviving spouse status covers
the two taxable years after it.*

**2. When is marital status determined?**

A. On the first day of the taxable year
B. On the last day of the taxable year, or at the time of death if a spouse dies during the year
C. By the number of months married during the year
D. On the date the return is filed

*Answer: (B) IRC § 7703(a).*

**3.** A transferor contributes property with a basis of $210,000 subject to $575,000 of debt.
Does he recognise gain?

*Answer: yes, $365,000. IRC § 357(c)(1) measures the excess of liabilities over basis.*
`;

test('parses each question with its options, answer, and reason', () => {
  const qs = checkYourself(PAGE);
  assert.equal(qs.length, 2);
  assert.equal(qs[0].question, 'A representative is asked to sign a consent extending the assessment period. Which form is used?');
  assert.deepEqual(qs[0].options.map(o => o.letter), ['A', 'B', 'C', 'D']);
  assert.equal(qs[0].options[1].text, 'Form 872');
  assert.equal(qs[0].answer, 'B');
  assert.match(qs[0].reason, /^Form 872 is the consent/);
  assert.equal(qs[1].answer, 'C');
});

test('the question number is stripped from the question text', () => {
  for (const q of checkYourself(PAGE)) assert.doesNotMatch(q.question, /^\d+\./);
});

test('answerText spells out the winning option and the reason', () => {
  const [first] = checkYourself(PAGE);
  assert.equal(answerText(first), 'B. Form 872 — Form 872 is the consent to extend the time to assess tax.');
});

test('a page with no Check yourself section yields nothing', () => {
  assert.deepEqual(checkYourself('## The rule\n\nText only.\n'), []);
});

test('a question missing its answer line still parses without throwing', () => {
  const qs = checkYourself('## Check yourself\n\n**1. Unfinished question?**\n(A) yes (B) no\n');
  assert.equal(qs.length, 1);
  assert.equal(qs[0].answer, '');
  assert.equal(answerText(qs[0]), '');
});

test('multi-line question text is collapsed to one line', () => {
  const qs = checkYourself('## Check yourself\n\n**1. A question that wraps\nacross two lines?**\n(A) a (B) b\n*Answer: A. Because.*\n');
  assert.equal(qs[0].question, 'A question that wraps across two lines?');
});

test('bold-number questions, lettered option lines, wrapped stems, and a mixed page', () => {
  const qs = checkYourself(PAGE_B);
  assert.equal(qs.length, 3);
  assert.match(qs[0].question, /^A taxpayer's spouse died in 2024\. For which years .* no remarriage\?$/);
  assert.equal(qs[0].options.length, 4);
  assert.equal(qs[0].options[2].text, '2025 and 2026');
  assert.equal(qs[0].answer, 'C');
  assert.match(qs[0].reason, /^A joint return is available/);
  assert.equal(qs[1].question, 'When is marital status determined?');
  assert.equal(qs[1].answer, 'B');
  assert.equal(qs[1].reason, 'IRC § 7703(a).');
});

test('an open question keeps its whole answer as the reason and has no letter', () => {
  const q = checkYourself(PAGE_B)[2];
  assert.equal(q.options.length, 0);
  assert.equal(q.answer, '');
  assert.match(q.reason, /^yes, \$365,000\./);
  assert.equal(answerText(q), q.reason);
});

test('answer letters with a dash or comma delimiter are still letters', () => {
  const md = '## Check yourself\n\n**1. Q?**\n(A) a (B) b (C) c (D) d\n*Answer: B — because.*\n\n**2. Q?**\n(A) a (B) b (C) c (D) d\n*Answer: C, since.*\n\n**3.** Open?\n\n*Answer: A corporation is not a person here.*\n';
  const qs = checkYourself(md);
  assert.equal(qs[0].answer, 'B'); assert.equal(qs[0].reason, 'because.');
  assert.equal(qs[1].answer, 'C'); assert.equal(qs[1].reason, 'since.');
  assert.equal(qs[2].answer, ''); assert.match(qs[2].reason, /^A corporation/);
});

test('the site wrapper and the shared parser agree', () => {
  assert.deepEqual(checkYourself(PAGE_B), parseShared(PAGE_B));
});
