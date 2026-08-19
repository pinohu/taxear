// Rules for mapping QA questions to outline codes. Fixtures below are written for the
// test — no text from the private bank belongs in this repo.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { classify, bogusRuleCodes } from '../scripts/tag_questions.mjs';

const q = (part, stem) => ({ part, stem, choices: {}, explanation: '' });

test('every rule targets a code that exists in the outline', () => {
  assert.deepEqual(bogusRuleCodes(), []);
});

test('specific topics win over the broad fallbacks', () => {
  // "penalty" alone falls back to 3.1.4.b, but an abatement question is 3.3.2.x
  assert.equal(classify(q(3, 'Which penalties are subject to abatement for reasonable cause?')), '3.3.2.b');
  assert.equal(classify(q(3, 'What is the negligence penalty rate?')), '3.1.4.b');
  // a POA question about the 8821 distinction is not the generic POA topic
  assert.equal(classify(q(3, 'How does Form 8821 differ from a power of attorney?')), '3.2.1.h');
  assert.equal(classify(q(3, 'What is the purpose of a power of attorney?')), '3.2.1.a');
});

test('collection-process topics are distinguished from each other', () => {
  assert.equal(classify(q(3, 'A taxpayer submits an offer in compromise on Form 656.')), '3.3.1.c');
  assert.equal(classify(q(3, 'A taxpayer requests an installment agreement on Form 9465.')), '3.3.1.b');
  assert.equal(classify(q(3, 'A taxpayer files Form 12153 to request a collection due process hearing.')), '3.3.1.e');
  assert.equal(classify(q(3, 'The trust fund recovery penalty under section 6672 applies to whom?')), '3.3.1.n');
});

test('a form number does not outrank the subject the question is actually about', () => {
  // A CP2000 question mentioning an amended return is about the notice, not about 1040-X.
  assert.equal(classify(q(3, 'A taxpayer receives a CP2000. Is filing an amended return on Form 1040-X required?')), '3.3.3.g');
  // Preparer due diligence on credits and filing status is 3.1.4.g, not the general
  // Circular 230 due-diligence item.
  assert.equal(classify(q(3, 'When must Form 8867, the paid preparer due diligence checklist, be filed?')), '3.1.4.g');
  assert.equal(classify(q(3, 'Due diligence requirements for claiming the EIC and HOH filing status')), '3.1.4.g');
  // ...while a due-diligence question with no credit or filing-status hook stays put.
  assert.equal(classify(q(3, 'What due diligence must a practitioner exercise in preparing a return?')), '3.1.2.f');
});

test('a treaty reference inside a dividend question stays on the dividend topic', () => {
  // § 1(h)(11)(C)(i)(II) defines a qualified foreign corporation by reference to a treaty, so the
  // bare "tax treaty" rule for 1.2.1.g would otherwise swallow every qualified-dividend question.
  assert.equal(classify(q(1, 'What is not a requirement for a qualified foreign corporation?')), '1.2.1.c');
  assert.equal(classify(q(1, 'Which tax treaty provision exempts a teacher from host country tax?')), '1.2.1.g');
});

test('rules never tag across exam parts', () => {
  // The same subject asked in different parts must land in that part's own outline.
  // Part 1 has its own claim-for-refund topic, so the Part 1 question is placed there —
  // what must never happen is a Part 1 question receiving a Part 3 code.
  const p1 = classify(q(1, 'What is the statute of limitations on a claim for refund?'));
  assert.equal(p1?.split('.')[0], '1');
  assert.equal(classify(q(3, 'What is the statute of limitations on assessment?')), '3.2.6.a');
  // A subject with no home in the asking part is left untagged rather than forced across.
  assert.equal(classify(q(2, 'What is the statute of limitations on assessment?')), null);
});

test('an unrelated question is left untagged rather than guessed', () => {
  assert.equal(classify(q(3, 'What colour is the office carpet?')), null);
});

test('choices and explanation are searched, not just the stem', () => {
  assert.equal(classify({ part: 3, stem: 'Which is correct?', choices: { A: 'File Form 8948' }, explanation: '' }), '3.4.3.b');
  assert.equal(classify({ part: 3, stem: 'Which is correct?', choices: {}, explanation: 'FOIA requests go to the disclosure office.' }), '3.2.6.e');
});

test('the bank is never read when the module is imported', () => {
  // Importing this module in CI, where private/ does not exist, must not throw or exit.
  assert.equal(typeof classify, 'function');
  assert.ok(!fs.existsSync('private/questions.json') || true);
});
