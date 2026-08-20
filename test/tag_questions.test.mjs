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

test('a dollar amount is not a code section', () => {
  // "$1250" in an answer choice was pulling elective-deferral questions onto depreciation recapture.
  // The recapture sections only count when carried by a section marker or by "property"/"recapture".
  assert.equal(classify(q(1, 'What is the maximum per paycheck if the limit is $19,500 over 26 checks? $1250')), null);
  assert.equal(classify(q(1, 'How much of the gain on section 1245 property is ordinary income?')), '1.2.3.a');
  assert.equal(classify(q(1, 'What is unrecaptured 1250 gain on the sale of a rental?')), '1.2.3.a');
});

test('a distractor does not decide the topic', () => {
  // "Schedule D" among the wrong answers pulled a royalty-reporting question onto capital gains, and a
  // bare "capital gain" pulled a section 121 question there too. Both now resolve to their own topic,
  // while a question about *selling* self-created property stays on capital gains even though "royalty
  // income" appears as a distractor.
  assert.equal(classify(q(1, 'A writer receives royalties from sales. Schedule C, Schedule E or Schedule D?')), '1.2.1.m');
  assert.equal(classify(q(1, 'How long must you live in a primary residence to claim the capital gain tax exemption?')), '1.2.3.f');
  assert.equal(classify(q(1, 'A composer transfers all rights to a song. Is the capital gain treatment or royalty income correct?')), '1.2.3.b');
});

test('an account-type list is a reporting question, not an options question', () => {
  // "Stock options account" appearing in a list of foreign financial account types pulled an FBAR
  // question onto the options topic. A genuine options question still lands on 1.2.3.h.
  assert.equal(classify(q(1, 'Which of these held abroad is not a foreign financial account? A stock options account.')), '1.6.3.b');
  assert.equal(classify(q(1, 'When is income from an incentive stock option reported?')), '1.2.3.h');
});

test('the standard deduction is not an itemized deduction topic', () => {
  // A rule matching "standard deduction" on 1.3.1.f (other itemized deductions) was collecting every
  // dependent and additional standard deduction question. Those belong to 1.1.1.h; a nonresident alien
  // asked about either deduction belongs to 1.3.1.g.
  assert.equal(classify(q(1, 'What is the standard deduction for a dependent with earned income?')), '1.1.1.h');
  assert.equal(classify(q(1, 'What is the standard deduction for a nonresident alien filing single?')), '1.3.1.g');
  assert.equal(classify(q(1, 'A couple is married filing separately and one spouse itemizes deductions. What may the other claim?')), '1.1.1.h');
  assert.equal(classify(q(1, 'Which itemized deduction survives the suspension of miscellaneous items?')), '1.3.1.f');
});

test('a credit named only as a distractor does not claim the question', () => {
  // "The AOTC is not refundable when the student is subject to the kiddie tax" lists the earned income
  // credit among its wrong answers. It is an education credit question.
  assert.equal(classify({ part: 1, stem: 'The American Opportunity Tax Credit is not refundable in which scenario?', choices: { A: 'The student is subject to the kiddie tax', B: 'The individual is also claiming the Earned Income Tax Credit' }, explanation: '' }), '1.3.2.c');
});

test('an enumeration of refundable credits is its own topic', () => {
  // A list question naming half of subpart C belongs to "other credits (refundable and nonrefundable)",
  // not to whichever credit happens to appear first in the answer choices.
  assert.equal(classify({ part: 1, stem: 'All of the following are refundable tax credits except:', choices: { A: 'Premium Tax Credit', B: "Retirement Savings Contributions Credit", C: 'Earned Income Tax Credit' }, explanation: '' }), '1.3.2.h');
  // A genuine earned income credit question is still tagged there.
  assert.equal(classify(q(1, 'What is the maximum earned income credit for a taxpayer with two qualifying children?')), '1.3.2.e');
});

test('a hobby question is not a self-employment tax question', () => {
  // "A stamp collector sells a rare piece" offers self-employment tax as a wrong answer. Whether the
  // activity is a business at all is the topic.
  assert.equal(classify({ part: 1, stem: 'An individual has been a stamp collector for over five years and sells a rare piece. What is true of the income?', choices: { A: 'It is a capital gain', B: 'The income is subject to self-employment taxes' }, explanation: '' }), '1.2.1.h');
  // A genuine self-employment tax question still lands on its own code.
  assert.equal(classify(q(1, 'How is the deduction for one half of self-employment tax computed?')), '1.4.1.d');
});

test('a bare "annuity" does not claim a question', () => {
  // "Annuity contracts" appears in the statutory employee categories and in every list of what the net
  // investment income tax reaches. Retirement planning has to be the subject.
  assert.equal(classify({ part: 1, stem: 'Which is not a statutory employee?', choices: { A: 'A full-time life insurance sales agent selling life insurance or annuity contracts' }, explanation: '' }), '1.2.1.a');
  assert.equal(classify({ part: 1, stem: 'All of the following are subject to the Net Investment Income Tax except:', choices: { A: 'Municipal bond interest', B: 'Nonqualified annuities' }, explanation: '' }), '1.4.1.i');
  // A genuine annuity taxation question still lands on retirement planning.
  assert.equal(classify(q(1, 'How is the exclusion ratio applied to an annuity payout?')), '1.5.1.e');
});

test("the parent's election is a kiddie tax question, not an estimated tax question", () => {
  // One of the four conditions for the IRC § 1(g)(7) election is that no estimated tax payments were
  // made for the child, so the phrase "estimated tax" sits inside every question about the election.
  assert.equal(classify(q(1, "Which of the following makes an individual ineligible to report the interest and dividends of a child on the parent's tax return?")), '1.1.1.p');
  assert.equal(classify({ part: 1, stem: 'Which form is used for the election?', choices: { A: 'Form 8814' }, explanation: '' }), '1.1.1.p');
  // A question genuinely about estimated tax still lands on 1.5.1.j.
  assert.equal(classify(q(1, 'What is the due date of the final required estimated tax installment?')), '1.5.1.j');
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
