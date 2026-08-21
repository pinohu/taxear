---
title: "Plans for self-employed persons (e.g., SEP and SIMPLE)"
code: "2.3.3.c"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Retirement plans"
description: "A SEP is funded by the employer alone and a SIMPLE by both, which is why the two have entirely different eligibility tests and entirely different ceilings."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 401", title: "Qualified pension, profit-sharing, and stock bonus plans", url: "https://www.law.cornell.edu/uscode/text/26/401" }
  - { type: IRC, ref: "§ 404", title: "Deduction for contributions of an employer to an employees' trust or annuity plan", url: "https://www.law.cornell.edu/uscode/text/26/404" }
  - { type: IRC, ref: "§ 415", title: "Limitations on benefits and contribution under qualified plans", url: "https://www.law.cornell.edu/uscode/text/26/415" }
  - { type: IRC, ref: "§ 414", title: "Definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/414" }
  - { type: IRC, ref: "§ 410", title: "Minimum participation standards", url: "https://www.law.cornell.edu/uscode/text/26/410" }
  - { type: IRC, ref: "§ 1402", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/1402" }
  - { type: IRC, ref: "§ 164", title: "Taxes", url: "https://www.law.cornell.edu/uscode/text/26/164" }
  - { type: IRC, ref: "§ 6051", title: "Receipts for employees", url: "https://www.law.cornell.edu/uscode/text/26/6051" }
  - { type: Notice, ref: "2025-67", title: "2026 amounts relating to retirement plans and IRAs, as adjusted for changes in cost-of-living", url: "https://www.irs.gov/pub/irs-drop/n-25-67.pdf" }
forms: []
related: ["2.3.3.a", "2.3.3.b", "2.3.3.e", "2.3.3.f", "2.3.3.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Separates the SEP under IRC § 408(k), which is employer-funded with a three-of-five-years eligibility test and immediate vesting through the withdrawal rule of IRC § 408(k)(4), from the SIMPLE under IRC § 408(p), which is salary-reduction based with a two-preceding-years eligibility test, a required 3 percent match or elected 2 percent nonelective contribution, and the exclusive plan requirement. Carries the 2026 amounts from Notice 2025-67 and the SECURE 2.0 additions at IRC § 408(p)(2)(A)(iv) and the 4 percent applicable percentage for electing larger employers." }
---

Both plans exist because a small employer will not run a 401(k), and both are built on individual
retirement accounts rather than a trust. That is where the similarity ends. A SEP takes only
employer money and the employee has no election at all; a SIMPLE is built on the employee's salary
reduction election and the employer's obligation to match it. Every eligibility, timing and ceiling
difference follows from that one fact.

## The rule

**Who must be covered in a SEP** (IRC § 408(k)(2)). {fig:se.sep_eligibility} {fig:se.sep_comp} The three-of-five test
counts any service in a year, not a full year of service, so a seasonal worker who appears for three
consecutive summers has satisfied it.

**How much, and to whom.** {fig:se.sep_uniform} {fig:se.sep_limit} The employee makes no
contribution and has no election. There is no salary reduction in a SEP, so an employee who wants to
save more must use a separate IRA of their own.

**Vesting in a SEP is not a schedule.** {fig:se.sep_vesting} Because the money goes into the
employee's own IRA and the employer may not restrict withdrawals, vesting is immediate as a
structural matter rather than as a plan term.

**Who may sponsor a SIMPLE.** {fig:se.simple_eligible_employer} {fig:se.simple_exclusive}

**Who must be covered in a SIMPLE.** {fig:se.simple_participation} Note how different this is from
the SEP test: two preceding years at the statutory dollar floor and a reasonable expectation for the
current year, against three of five years at a much lower indexed amount and an age floor.

**The employer's obligation.** {fig:se.simple_match} {fig:se.simple_nonelective} The difference in
mechanics matters. The match is dollar for dollar on what the employee actually defers and stops at
the applicable percentage; the nonelective contribution goes to every eligible employee whether they
defer or not.

**And an optional extra.** {fig:se.simple_extra}

**Employee limits.** {fig:rc.simple_deferral} {fig:rc.catchup_simple}

**Vesting and timing.** {fig:se.simple_vesting} {fig:se.simple_timing}

**The SIMPLE 401(k).** {fig:se.simple_401k} It carries the same contribution pattern and the same
immediate vesting, but it is a qualified plan, so it files a Form 5500 where the SIMPLE IRA files
nothing.

**For the self-employed person, compensation is the hard part.**
{fig:se.simple_compensation} {fig:se.earned_income} {fig:se.404a8} Earned income is computed after
the plan contribution and after half the self-employment tax, which makes it circular — the
contribution reduces the base on which the contribution is computed.

## Current figures

| Item | 2026 |
| --- | --- |
| SEP eligibility | {fig:se.sep_eligibility} |
| SEP compensation threshold | {fig:se.sep_comp} |
| SEP ceiling | {fig:se.sep_limit} |
| SIMPLE eligible employer | {fig:se.simple_eligible_employer} |
| SIMPLE participation | {fig:se.simple_participation} |
| SIMPLE match | {fig:se.simple_match} |
| SIMPLE nonelective | {fig:se.simple_nonelective} |
| SIMPLE deferral limit | {fig:rc.simple_deferral} |
| SIMPLE catch-up | {fig:rc.catchup_simple} |
| Compensation limit | {fig:rc.comp_limit} |

## How it works in practice

Decide first which plan the facts describe, because the two eligibility tests share no elements. A
SEP question turns on age 21, three of the last five years, and a small compensation floor. A
SIMPLE question turns on the statutory dollar floor in each of two preceding years and a reasonable
expectation of the same this year, with no age test at all. Answering a SEP question with the SIMPLE test is the most common
error in this area and it is easy to make because both plans feel like "the small employer plan."

For the employer contribution, be precise about which of the two SIMPLE options is in play. The
match is capped at the applicable percentage of compensation and is dollar for dollar within
that cap, so an employee deferring less than the percentage gets less than the full amount and an
employee deferring more gets no more (IRC § 408(p)(2)(A)(iii)). The nonelective contribution is a
flat percentage of compensation paid regardless of the employee's own deferral, including to
employees who defer nothing. Substituting one calculation for the other produces a wrong number every time.

For a SEP maintained by a sole proprietor, do the circular computation properly rather than applying
the deduction ceiling to gross self-employment income. Net earnings from self-employment are reduced
by half the self-employment tax, and earned income for plan purposes is then reduced by the
contribution itself. The practical effect is that the headline SEP percentage for an unincorporated owner works out to a
smaller fraction of the pre-contribution figure.

Remember that a SIMPLE must be the employer's only plan for the year. An employer that already has a
401(k), even a dormant one to which no contributions were made but under which benefits accrued,
cannot maintain a SIMPLE for the same year. That single sentence disposes of a surprising number of
"which plan should this client adopt" questions.

<div class="scenario">

<h3>The seasonal groundskeeper</h3>

A landscaping company has maintained a SEP for six years. It employs one full-time office manager
and, each summer from May to September, three groundskeepers. One of them, aged 34, has worked every
summer for the last four years and earns about $14,000 a season. The owner has never made a SEP
contribution for the groundskeepers, reasoning that they are seasonal and not really employees of
the business year-round.

The groundskeeper must be covered. IRC § 408(k)(2) asks whether the employee has attained age 21,
has performed service for the employer during at least three of the immediately preceding five years,
and received at least the threshold compensation for the year. Four summers is service in four of the
preceding five years — the statute counts years in which service was performed, not full-time years —
and $14,000 is far above the compensation floor. Seasonal status is not an exclusion; the only
exclusions IRC § 408(k)(2) recognises are collectively bargained employees and certain non-resident
aliens. Because contributions must bear a uniform relationship to compensation, the omission is also
a discrimination failure, not merely a shortfall for one person.

</div>

<div class="scenario">

<h3>Match against nonelective</h3>

A design studio with eleven employees sponsors a SIMPLE IRA and has elected the 3 percent match. Of
its employees, one earning $80,000 defers 8 percent, one earning $52,000 defers 1 percent, and one
earning $61,000 defers nothing. The owner asks what the studio will pay, and then asks what would
change under the 2 percent nonelective election.

Under the match, the studio pays 3 percent of $80,000, or $2,400, to the first employee — the match
stops at the applicable percentage however much more the employee defers. It pays 1 percent of
$52,000, or $520, to the second, because the match is dollar for dollar on what was actually deferred
and that is less than the cap. It pays nothing to the third. Total: $2,920. Under the 2 percent
nonelective election the studio pays 2 percent of each eligible employee's compensation regardless of
deferral — $1,600, $1,040 and $1,220 respectively, plus the same for every other eligible employee.
Total for these three: $3,860. Which is cheaper depends entirely on the participation rate, which is
why the election is worth revisiting each year during the notice period.

</div>

<div class="scenario">

<h3>The consultant's own SEP</h3>

An independent consultant with no employees has net profit from Schedule C of $120,000. Her
self-employment tax for the year is $16,955, of which half is $8,478 deductible under IRC § 164(f).
She wants to make the largest SEP contribution she can and has been told it is "25 percent of
$120,000."

It is not. Earned income under IRC § 401(c)(2) starts from net earnings from self-employment,
computed with regard to the IRC § 164(f) deduction and with regard to the IRC § 404 deduction itself.
So the base before the contribution is $120,000 less $8,478, or $111,522, and the contribution is
25 percent of *that figure reduced by the contribution*. Solving the circularity gives 20 percent of
$111,522, or $22,304. The IRC § 415(c) annual additions limit is not reached and the compensation cap
is not reached, so the answer is driven entirely by the circular computation. A contribution of
$30,000 — 25 percent of the Schedule C profit — would exceed the ceiling by a wide margin.

</div>

<div class="callout trap">

**A SEP has no employee contribution and no employee election.** Every answer choice offering a
salary reduction, an opt-out, or a minimum employee contribution as a condition of SEP participation
is wrong. The employee's only involvement is owning the IRA that receives the money.

</div>

<div class="callout trap">

**The two eligibility tests share nothing.** SEP: age 21, three of the last five years, the indexed
compensation floor. SIMPLE: the statutory dollar floor in each of two preceding years and a
reasonable expectation of the same this year, no age requirement. Answers that import the SEP age test into a SIMPLE question,
or the SIMPLE dollar test into a SEP question, are the standard distractors.

</div>

<div class="callout trap">

**Match and nonelective are computed differently, not merely at different rates.** The match tracks
the employee's own deferral up to the applicable percentage and pays nothing to a non-deferrer. The
nonelective contribution pays every eligible employee the flat percentage whatever they do.
Treating it as a match at the lower rate produces the wrong figure for anyone who defers less than
that rate or nothing at all.

</div>

<div class="callout trap">

**SIMPLE IRA and SIMPLE 401(k) differ on reporting.** They share contribution limits, catch-ups,
immediate vesting and the employer contribution structure. The SIMPLE 401(k) is a qualified plan and
files the Form 5500 series; the SIMPLE IRA has no annual return. An answer saying "neither has an
annual filing requirement" is wrong on the 401(k) side.

</div>

## How this has changed

SECURE 2.0, Division T of Pub. L. 117-328, reworked the SIMPLE in three ways. It added
IRC § 408(p)(2)(A)(iv), letting the employer make an additional uniform nonelective contribution
capped both as a percentage of compensation and in dollars per employee, on top of the required
match or the flat nonelective election. It added the IRC § 408(p)(2)(E)(i)(II) election under which a larger employer, as the statute
defines one, may use higher deferral limits, with the applicable percentage for the match rising
from three to four percent for that employer. And it raised the deferral and catch-up limits for
smaller employers.

The same Act ended the rule that a SEP or SIMPLE could not accept Roth contributions. Designated Roth
treatment is now available for both, which matters because the traditional analysis — deduct now,
tax later — is no longer the only shape these plans take.

The compensation figures move annually: both the SEP participation threshold and the SIMPLE deferral
limit rose for 2026, and both are set out in the figures above. The statutory dollar figures inside
IRC § 408(p) — the eligible employer test, the participation test and the cap on the additional
nonelective contribution — are not indexed and have not moved.

## Exam focus

Know the two eligibility tests separately and precisely, and know that a SEP is employer-funded only.
Expect a question that describes a part-time or seasonal employee and asks whether the employer may
exclude them; the answer for a SEP is almost always no.

Know the SIMPLE employer options and how each is computed: a dollar-for-dollar match up to the
applicable percentage, or the lower flat nonelective contribution to everyone eligible. Be able to run both
calculations on the same facts.

Know that the SIMPLE must be the employer's only plan for the year, that both SIMPLE forms vest
immediately, and that the SIMPLE 401(k) files a Form 5500 while the SIMPLE IRA does not. For a
self-employed owner, know that the contribution base is earned income after half the self-employment
tax and after the contribution itself.

## Check yourself

**1.** An employer's SEP covers its three full-time staff. A part-time bookkeeper, aged 45, has
worked ten hours a week for the last four years and earned $9,000 last year. Must the employer
contribute for her?

*Answer:* Yes. IRC § 408(k)(2) sets no hours requirement. She is over 21, has performed service in
at least three of the immediately preceding five years, and her compensation is far above the
threshold. Part-time status is not one of the permitted exclusions, and omitting her would also
breach the uniform relationship requirement of IRC § 408(k)(3)(C).

**2.** A SIMPLE IRA sponsor elects the 3 percent match. An employee earning $50,000 defers
5 percent. What goes into the account for the year?

*Answer:* $4,000. The employee's own deferral is 5 percent of $50,000, or $2,500. The match is
dollar for dollar on what she defers but stops at 3 percent of compensation, so $1,500. The match
does not track the full 5 percent, and it is not reduced because she deferred more than the cap.

**3.** The same sponsor instead elects the 2 percent nonelective contribution. An employee earning
$60,000 defers 1 percent. What goes into the account?

*Answer:* $1,800. The nonelective contribution is 2 percent of $60,000, or $1,200, paid regardless of
what the employee defers, plus her own 1 percent deferral of $600. Note the contrast with the match:
under the match this employee would have received only $600 of employer money.

**4.** An employer has maintained a profit-sharing plan for years, with contributions made for the
current year. It now wants to add a SIMPLE IRA for a newly acquired division. May it?

*Answer:* No. IRC § 408(p)(2)(D) provides that an arrangement is not a qualified salary reduction
arrangement for a year if the employer or a predecessor maintained a qualified plan under which
contributions were made or benefits accrued for service in that year. The SIMPLE must be the
employer's only plan. The division would have to be brought into the existing plan, or the
profit-sharing plan frozen for a full year first.

**5.** A sole proprietor with $80,000 of Schedule C profit and no employees is told her maximum SEP
contribution is $20,000. Is that right?

*Answer:* No, it is too high. Twenty-five percent of $80,000 is $20,000, but earned income under
IRC § 401(c)(2) is computed after the IRC § 164(f) deduction for half of self-employment tax and
after the IRC § 404 contribution itself. Reducing the profit by roughly $5,652 of deductible
self-employment tax gives about $74,348, and 20 percent of that — the equivalent of 25 percent of
the post-contribution figure — is about $14,870.
