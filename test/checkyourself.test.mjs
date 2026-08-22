// The "Check yourself" parser feeds FAQPage structured data, so a silent parsing
// failure would publish nothing while looking fine. These fixtures are written here,
// not lifted from any page or question bank.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkYourself, answerText } from '../src/checkyourself.ts';

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
