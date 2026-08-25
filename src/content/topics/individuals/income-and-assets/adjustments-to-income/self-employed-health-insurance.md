---
title: "Self-employed health insurance"
code: "1.2.4.e"
part: 1
domain: "Income and Assets"
section: "Adjustments to Income"
description: "Eligibility for a spouse's employer plan destroys the deduction month by month, whether or not it is taken up — and the cap is one business's income, not all of them."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 62", title: "Adjusted gross income defined", url: "https://www.law.cornell.edu/uscode/text/26/62" }
  - { type: IRC, ref: "§ 162", title: "Trade or business expenses", url: "https://www.law.cornell.edu/uscode/text/26/162" }
  - { type: IRC, ref: "§ 213", title: "Medical, dental, etc., expenses", url: "https://www.law.cornell.edu/uscode/text/26/213" }
  - { type: IRC, ref: "§ 401", title: "Qualified pension, profit-sharing, and stock bonus plans", url: "https://www.law.cornell.edu/uscode/text/26/401" }
  - { type: IRC, ref: "§ 1372", title: "Partnership rules to apply for fringe benefit purposes", url: "https://www.law.cornell.edu/uscode/text/26/1372" }
  - { type: RevProc, ref: "2025-32", title: "Inflation adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.2.4.a", "1.2.4.c", "1.2.4.d", "1.2.4.b", "1.2.1.l", "1.3.1.a"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 162(l)(1) deduction and its four covered classes, the § 162(l)(2)(A) earned income cap measured against the business establishing the plan, the § 162(l)(2)(B) month-by-month bar for eligibility in a subsidised employer plan, the § 162(l)(2)(C) and § 213(d)(10) long-term care scale, and the § 162(l)(3), (4) and (5) rules on double counting, self-employment tax and S corporation shareholders." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the three gates that decide the deduction, glossary marks, and two typed scenarios." }
diagram:
  archetype: "decision"
  caption: "Three gates that decide whether a month's premium is deductible"
  tests:
    - { test: "Self-employed status", result: "An employee within § 401(c)(1) — genuinely self-employed", outcome: "pass" }
    - { test: "No other subsidised coverage", result: "Not eligible that month for a subsidised plan of the taxpayer, spouse, dependent, or a child under 27", outcome: "pass" }
    - { test: "Earned income from that business", result: "The business establishing the plan has earned income at least equal to the premium", outcome: "pass" }
---

<div class="plain-terms">
If you are self-employed and pay for your own health insurance, you may be able to deduct those premiums
from your income. This page explains when that deduction is allowed, and when it disappears. It affects
sole owners, partners, and small business owners who buy their own coverage. It does not apply if you or
a family member could get low-cost coverage through someone else's job. That is true even if the coverage
was turned down. It also stops at what your specific business actually earned. This page decides how much
of the premium, if any, you can deduct.
</div>

Two limitations do almost all the work here, and both are easy to state wrongly. The deduction is capped
by earned income from **the particular business with respect to which the plan is established** — not by
total self-employment income. And it is lost for any month in which the taxpayer is **eligible to
participate** in a subsidised employer plan of their own or a family member's employer, whether or not
they actually enrol. A spouse's declined employer coverage is the most common way the deduction quietly
disappears.

## The rule

**The deduction, and who it covers.** For a taxpayer who is an employee within the meaning of § 401(c)(1)
— that is, a self-employed individual — a deduction is allowed for amounts paid during the year for
insurance constituting medical care for the taxpayer, the taxpayer's spouse, the taxpayer's dependents,
and any child within § 152(f)(1) who has not attained **age 27** as of the end of the taxable year (IRC
§ 162(l)(1)(A)–(D)). The under-27 child need not be a dependent.

**Capped by one business's earned income.** No deduction is allowed to the extent it exceeds the
taxpayer's earned income within § 401(c) derived **from the trade or business with respect to which the
plan providing the medical care coverage is established** (IRC § 162(l)(2)(A)). A taxpayer with two
businesses cannot use the profits of one to support a policy established under the other.

**Destroyed month by month by other coverage.** Paragraph (1) does not apply for any calendar month for
which the taxpayer is **eligible to participate** in any subsidised health plan maintained by any employer
of the taxpayer, of the spouse, of a dependent, or of a child under 27 (IRC § 162(l)(2)(B)). Two features
are commonly missed: the test is **eligibility**, not enrolment, and it is applied **separately** for
plans that include qualified long-term care coverage and plans that do not (§ 162(l)(2)(B)(i), (ii)).

**Long-term care premiums are limited by an age scale.** For a qualified long-term care insurance
contract, only **eligible long-term care premiums** within § 213(d)(10) are taken into account (IRC
§ 162(l)(2)(C)), and those are capped on a scale by attained age before the close of the year.

**No double counting.** An amount paid for insurance to which paragraph (1) applies is not taken into
account in computing the itemized medical deduction under § 213(a) (IRC § 162(l)(3)).

**And it does not reduce self-employment tax.** The deduction allowable by reason of the subsection is not
taken into account in determining net earnings from self-employment within § 1402(a) (IRC § 162(l)(4)).
The provision reads oddly — it excludes the deduction for years beginning before 2010 or after 2010,
leaving a single year in which it was allowed — but the current effect is plain.

**S corporation shareholders are brought in.** The subsection applies to any individual treated as a
partner under § 1372(a), except that their **wages** from the S corporation are treated as their earned
income (IRC § 162(l)(5)(A)). The premiums must be included in those wages for the deduction to be
available against them.

**It reduces adjusted gross income.** The deduction is attributable to a trade or business not consisting
of the performance of services as an employee, so it is allowed in computing adjusted gross income (IRC
§ 62(a)(1)).

## Current figures

| Item | 2026 |
| --- | --- |
| The deduction | {fig:sehi.deduction} |
| Earned income cap | {fig:sehi.earned_income_cap} |
| Other coverage | {fig:sehi.other_coverage} |
| Long-term care | {fig:sehi.long_term_care} |
| Long-term care scale | {fig:sehi.ltc_scale} |
| Coordination with the medical deduction | {fig:sehi.no_double_counting} |
| Self-employment tax | {fig:sehi.not_against_se_tax} |
| S corporation shareholders | {fig:sehi.s_corporation} |
| Where it is taken | {fig:sehi.above_the_line} |

## How it works in practice

Ask the coverage question first, and ask it about the whole household. Eligibility to participate in a
subsidised employer plan — the taxpayer's own, a spouse's, a dependent's, or a child under 27's — kills
the deduction for that month even where the offer was refused. The practical work is establishing, month
by month, whether such an offer existed, and the answer often lies with a spouse's employer rather than
with the client.

Then match the policy to the business. Section 162(l)(2)(A) measures the cap by earned income from the
business **establishing** the plan. For a sole proprietor the plan can be in the individual's own name and
still be treated as established with respect to the business, but where a taxpayer runs two ventures the
allocation matters and the profitable one has to be the one the plan belongs to.

Remember what the deduction does not do. It does not reduce self-employment tax (§ 162(l)(4)), so it is
worth less than an ordinary business expense of the same size. And any premium it absorbs is unavailable
for the itemized medical deduction (§ 162(l)(3)), so there is no second bite for a taxpayer whose
remaining medical expenses clear the § 213 floor.

For an S corporation shareholder the mechanics are specific: the corporation pays or reimburses the
premiums, includes them in the shareholder's Form W-2 wages, and the shareholder then deducts under
§ 162(l) against those wages treated as earned income by § 162(l)(5)(A). Skipping the wage inclusion
removes the basis for the deduction.

<div class="scenario" data-type="fails">
<h3>Scenario 1 — the offer that was declined</h3>

Hana runs a design practice and pays 14,400 dollars a year for family health cover. Her husband's employer
offers a subsidised plan that would cover them both; he declines it because Hana's policy is better.

She gets no deduction for any month in which he was eligible. IRC § 162(l)(2)(B) denies the deduction for
any calendar month for which the taxpayer is **eligible to participate** in a subsidised plan maintained
by an employer of the spouse — and eligibility, not enrolment, is the test. The premiums are not lost
entirely: § 162(l)(3) only bars double counting of amounts actually deducted under paragraph (1), so
premiums that produce no § 162(l) deduction remain available as § 213 medical expenses.
</div>

<div class="scenario" data-type="boundary">
<h3>Scenario 2 — two businesses, one policy</h3>

Ivan runs a profitable consultancy and a loss-making pottery studio. His health policy is established with
respect to the pottery studio, which shows a 4,000-dollar loss. He pays 9,600 dollars in premiums.

The deduction is zero. IRC § 162(l)(2)(A) caps it at earned income from the trade or business with respect
to which the plan is established, and the pottery studio produced none. The consultancy's profits are
irrelevant. Establishing the plan with respect to the consultancy instead would have supported the full
9,600 dollars — a choice that has to be made when the policy is set up, not on the return.
</div>

<div class="scenario" data-type="procedural">
<h3>Scenario 3 — the shareholder and the W-2</h3>

Jonah owns 60 percent of an S corporation, which pays 11,000 dollars of premiums for his family. The
corporation deducts the premiums but does not include them in his wages.

He cannot deduct them. IRC § 162(l)(5)(A) treats his **wages** from the S corporation as his earned income
for this purpose, and the premiums must be run through those wages to support the deduction. Correcting
the Form W-2 to include the 11,000 dollars gives him earned income against which § 162(l)(1) operates,
and the amount is not subject to social security and Medicare tax under the fringe benefit rules that
§ 1372(a) engages.
</div>

<div class="scenario" data-type="interaction">
<h3>Scenario 4 — the deduction that did not touch the other tax</h3>

Farah, a sole proprietor, deducts 8,000 dollars of self-employed health insurance premiums and, expecting
it to work like an ordinary business expense, subtracts it from her net earnings before figuring her
self-employment tax.

She has overstated the reduction. IRC § 162(l)(4) keeps this deduction out of net earnings from
self-employment within § 1402(a) entirely — it lowers her income tax, through the adjusted gross income
computation, but it never touches the base her self-employment tax is figured on. The two taxes run on
separate tracks, and a deduction that shrinks one does not automatically shrink the other.
</div>

<div class="scenario" data-type="baseline">
<h3>Scenario 5 — the straightforward case</h3>

Tomas runs a single consulting business as an {gloss:independent-contractor}, has no other health coverage
available to him or his family, and pays 9,000 dollars a year for a policy in his own name. His practice
earns 60,000 dollars.

The full 9,000 dollars is deductible. He clears every gate: he is self-employed within § 401(c)(1), no
subsidised employer plan reaches him or a family member for any month, and his earned income from the
business comfortably exceeds the premium. The deduction comes off above the line, whether he takes the
{gloss:standard-deduction} or itemizes. This is the ordinary case the section is built around — the
harder facts on this page are what happens when one of those gates is not this clean.
</div>

<div class="callout trap">

**Eligibility, not enrolment.** A declined offer of subsidised employer coverage still denies the
deduction for that month.

**The cap is one business's income.** IRC § 162(l)(2)(A) points at the business with respect to which the
plan is established, not at aggregate self-employment income.

**Long-term care and other coverage are tested separately.** Section 162(l)(2)(B)(i) and (ii) split the
other-coverage test in two, so eligibility for a medical plan does not by itself deny long-term care
premiums.

**It does not reduce self-employment tax.** Section 162(l)(4) keeps the deduction out of net earnings from
self-employment.
</div>

## How this has changed

**Section 162(l)(4) preserves a one-year experiment in its text.** It denies the deduction against net
earnings from self-employment "for taxable years beginning before January 1, 2010, or after December 31,
2010" — leaving 2010 as the single year in which the deduction did reduce self-employment tax, under a
temporary provision that was never renewed. The current rule is clear, but the drafting is a fossil of
that year and reading the subsection quickly can suggest the opposite of what it means.

**Coverage for a child under 27 arrived with the Affordable Care Act** and is broader than it looks:
§ 162(l)(1)(D) reaches any child within § 152(f)(1) who has not attained age 27 by the end of the year,
**without** requiring that the child be a dependent. The same child's eligibility for their own employer's
subsidised plan is then a disqualifying event under § 162(l)(2)(B), so the widening cuts both ways.

**The long-term care limitation is indexed and moves every year.** Section 213(d)(10) caps eligible
premiums on a five-band age scale, adjusted annually — for 2026 by Rev. Proc. 2025-32 § 3.27. Only the
capped amount enters § 162(l), so a taxpayer over 70 paying a large long-term care premium deducts only
the banded figure here and may take the excess into § 213(a).

**The S corporation route has been stable but depends entirely on payroll mechanics.** Section
162(l)(5)(A) has treated a shareholder's wages as earned income since 1998, and the deduction stands or
falls on whether the premiums were included in those wages. It is an administrative failure, not a
statutory one, that most often destroys the deduction.

## Exam focus

Expect a **spouse's employer plan** in the facts, with the offer declined. The deduction is denied for
those months.

Expect **two businesses**, testing whether the cap is measured on the right one.

Expect the **interaction with § 213**, where the correct answer is that the two do not overlap but
premiums disallowed under § 162(l) remain available under § 213(a).

Expect **self-employment tax** offered as also reduced. It is not.

## Check yourself

**1.** A sole proprietor pays 10,000 dollars of premiums and has 6,500 dollars of earned income from the
business the plan is established under. How much is deductible under this provision?

*Answer: 6,500 dollars. IRC § 162(l)(2)(A) caps the deduction at earned income derived from the trade or
business with respect to which the plan is established; the remaining 3,500 dollars may be taken into
account under § 213(a).*

**2.** The taxpayer's spouse is offered subsidised coverage by their employer and declines it. What is the
effect?

*Answer: No deduction for any calendar month in which the spouse was eligible to participate. IRC
§ 162(l)(2)(B) applies to eligibility, not to enrolment.*

**3.** Does this deduction reduce self-employment tax?

*Answer: No. IRC § 162(l)(4) provides that the deduction is not taken into account in determining net
earnings from self-employment within § 1402(a).*

**4.** May premiums for a child aged 25 who is not a dependent be included?

*Answer: Yes. IRC § 162(l)(1)(D) covers any child within § 152(f)(1) who has not attained age 27 by the
end of the taxable year, with no dependency requirement.*

**5.** How does a more-than-2-percent S corporation shareholder qualify?

*Answer: Through IRC § 162(l)(5)(A), which applies the subsection to an individual treated as a partner
under § 1372(a) and treats their wages from the corporation as earned income — so the premiums must be
included in those wages.*
