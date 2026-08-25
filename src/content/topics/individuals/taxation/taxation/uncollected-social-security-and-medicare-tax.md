---
title: "Uncollected Social Security and Medicare tax"
code: "1.4.1.k"
part: 1
domain: "Taxation"
section: "Taxation"
description: "Employment tax the employer could not withhold, so the employee pays it on their own return. Two situations produce it, and the reporting differs for each."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 3102", title: "Deduction of tax from wages", url: "https://www.law.cornell.edu/uscode/text/26/3102" }
  - { type: IRC, ref: "§ 6053", title: "Reporting of tips", url: "https://www.law.cornell.edu/uscode/text/26/6053" }
  - { type: IRC, ref: "§ 3121", title: "Definitions — FICA", url: "https://www.law.cornell.edu/uscode/text/26/3121" }
  - { type: IRC, ref: "§ 6652", title: "Failure to file certain information returns, registration statements, etc.", url: "https://www.law.cornell.edu/uscode/text/26/6652" }
  - { type: IRC, ref: "§ 79", title: "Group-term life insurance purchased for employees", url: "https://www.law.cornell.edu/uscode/text/26/79" }
forms: []
related: ["1.4.1.j", "1.4.1.e", "1.2.1.h", "1.4.1.d", "1.4.1.l"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 6053(a) tip reporting obligation, the § 3102(c)(1) limit on what an employer can collect, the § 6053(b) statement of the excess, the § 3121(a)(12)(B) monthly threshold and the treatment of unreported tips under § 3121(q), the § 6652(b) penalty, and uncollected tax on group-term life insurance for a former employee under § 79." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, two typed scenarios (baseline, fails) alongside the three existing ones now typed boundary/procedural/timing, and a decision diagram of the reported-versus-collected pathway." }
diagram:
  archetype: "decision"
  caption: "Does uncollected FICA on tips end up on the employee's own return?"
  tests:
    - { test: "Were the tips reported to the employer under § 6053(a)?", result: "Not reported — tax computed directly on Form 4137, plus possible § 6652(b) penalty", outcome: "fail" }
    - { test: "Reported — did the employer have enough non-tip wages to withhold from before the collection window closed?", result: "Enough wages, in time — withheld normally, nothing reaches the return", outcome: "pass" }
    - { test: "Not enough wages, or too late", result: "Uncollected — box 12 codes A/B, the employee pays it on the return", outcome: "fail" }
---

<div class="plain-terms">
This page covers Social Security and Medicare tax that an employer could not take out of an employee's pay. The worker ends up paying that tax on their own return instead. This mostly affects tipped workers. Now and then it affects a retired worker still covered by an old employer's life insurance plan. It explains how that unpaid tax lands on the return. It explains why this is not the same as self-employment tax. And it explains what happens when a worker never told their employer about tips at all.
</div>

Employment tax is normally the employer's problem to withhold and the employee's only in the sense that
it comes out of the pay. Two situations break that: the employer is willing to withhold and physically
cannot, or the employee never told the employer there was anything to withhold on. Both leave social
security and Medicare tax to be paid by the individual on their own return.

## The rule

**Tips are wages, and the employee must report them.** {fig:uncollected.tip_reporting} Cash tips of less
than the monthly threshold are outside wages altogether — {fig:uncollected.unreported_tips} — and tips
paid in any medium other than cash are never wages (IRC § 3121(a)(12)(A)).

**When tips are deemed paid.** Reported tips are deemed paid at the time the written statement is
furnished to the employer; where no statement is furnished, at the time the tips are received (IRC
§ 3121(q)). The timing matters because it starts the employer's collection window.

**The employer can only collect what it holds.** {fig:uncollected.collection_limit} A server whose
entire compensation is tips gives the employer nothing to withhold from. The employee may voluntarily
hand over funds to cover the shortfall (IRC § 3102(c)(2)), but nothing compels it.

**The employer reports what it could not collect.** {fig:uncollected.employer_statement}

**The employee pays it on the return.** The uncollected amounts shown on the Form W-2 are added to the
individual's tax as other taxes. Tips the employee never reported to the employer are a separate matter:
the tax on those is computed by the employee on Form 4137, which also serves to credit the earnings to
the employee's social security record.

**And there is a penalty for not reporting.** {fig:uncollected.tip_penalty} The reasonable cause defence
is available, and it is the only defence.

**Group-term life insurance for a former employee.** {fig:uncollected.group_term_life} The recipient is
no longer on a payroll, so there are no wages from which to withhold, and the same mechanism applies —
the employer reports the uncollected tax and the individual pays it.

**What this is not.** These amounts are not {gloss:self-employment-tax} and they are not withheld tax. They are
the employee's share of {gloss:fica} on wages, arriving on the return because the ordinary collection machinery
could not reach them.

## Current figures

| Item | Amount |
| --- | --- |
| Tip reporting | {fig:uncollected.tip_reporting} |
| Monthly threshold | {fig:uncollected.unreported_tips} |
| Employer's collection limit | {fig:uncollected.collection_limit} |
| Employer's statement | {fig:uncollected.employer_statement} |
| Penalty for not reporting | {fig:uncollected.tip_penalty} |
| Group-term life insurance | {fig:uncollected.group_term_life} |

## How it works in practice

**Read box 12 of the Form W-2 first.** Codes A and B are uncollected social security and Medicare tax on
tips; codes M and N are the same two taxes on group-term life insurance for a former employee. All four
are added to the individual's tax liability — they are not credits and not withholding.

**Then ask whether all the tips were reported.** If the client received cash tips of the monthly
threshold or more and did not furnish a statement to the employer, those tips are not on the Form W-2 at
all. They are still wages, they are still taxable, and the FICA on them is computed on Form 4137. So is
the § 6652(b) penalty exposure, which is the reason to raise it rather than let it lie.

**Then check the earnings record consequence.** Reporting the tips is what credits them to the client's
social security earnings record. A client who under-reports tips for a working lifetime reduces their
own benefit, which is often more persuasive than the tax argument.

**Then remember what the amounts are not.** They do not reduce the ordinary Medicare or social security
withholding shown in boxes 4 and 6, they are not deductible, and no part of them corresponds to the
employer's share — the employer pays its own half separately under § 3111.

<div class="scenario" data-type="baseline">
<h3>Reporting on time, nothing left uncollected</h3>

Marcus works the counter at a coffee shop. He receives $410 of cash tips in September and furnishes the
required written statement to his employer by 10 October, as § 6053(a) requires. His hourly wages for
the same period, before tips, come to $900.

Because his tips are deemed paid when the statement is furnished, and his employer has more than enough
non-tip wages under its control to withhold from before the § 3102(c)(1) collection window closes, the
full employee share of social security and Medicare tax on the tips is withheld from his ordinary
paycheck. Nothing reaches his Form W-2 in box 12, and nothing reaches his individual return — the
mechanism worked exactly as designed.
</div>

<div class="scenario" data-type="boundary">
<h3>Tips exceeding the wages available</h3>

Nnenna works a restaurant floor. In March she receives $2,400 of cash tips and reports all of them to
her employer by 10 April. Her hourly wages for the period, before tips, are $310.

Her employee-side social security and Medicare tax on the tips alone is about $184. Section 3102(c)(1)
lets the employer collect that only from wages under its control excluding tips — here $310, which is
enough, so the employer withholds it and nothing is uncollected. Had her wages for the period been $95,
the employer could have collected only that much, and the balance would have appeared on her Form W-2 as
codes A and B for her to pay with her return.
</div>

<div class="scenario" data-type="procedural">
<h3>The tips that were never reported</h3>

Dmitri receives roughly $180 a month in cash tips at a bar and never furnishes a statement to his
employer.

The tips are $20 or more in each month, so § 3121(a)(12)(B) does not exclude them and they are wages.
Because no statement was furnished, § 3121(q) deems them paid when received, and no employer collection
was ever possible. Dmitri owes the employee share of social security and Medicare tax on the full amount,
computed on Form 4137 and added to his tax. He is also exposed to the § 6652(b) addition of 50 percent of
that tax unless he can show reasonable cause. The income tax on the tips is due regardless — the reporting
failure is about the employment tax and the penalty.
</div>

<div class="scenario" data-type="timing">
<h3>Insurance after the employment ends</h3>

A retired employee remains covered under her former employer's group-term life policy at a level well
above $50,000 of coverage.

Section 79(a) includes the cost of the excess coverage in her gross income. She draws no wages from the
employer, so there is nothing to withhold from: the employer reports the cost as income and shows the
uncollected social security and Medicare tax as codes M and N in box 12. She adds those amounts to her
tax. Note the difference from a current employee in the same position, where the employer simply
withholds from the next pay run and nothing reaches the return.
</div>

<div class="scenario" data-type="fails">
<h3>Waiting past the window</h3>

A restaurant's payroll system is down for three weeks in October. By the time it is fixed, the employer
tries to withhold FICA on tips its server reported for September — tips that were deemed paid on 10
October when she furnished the statement — out of her mid-November paycheck, when plenty of non-tip
wages are available.

Too late. Section 3102(c)(1) lets the employer collect only up to the tenth day of the month after the
tips were deemed paid — 10 November here — and the attempted withholding falls outside that window.
Having enough wages later does not cure a collection attempt made after the deadline; the amount is
uncollected, reported to her under § 6053(b), and paid on her own return regardless of how much she
earned in November.
</div>

<div class="callout trap">

**These amounts increase tax; they are not withholding.** A preparer who enters box 12 codes A, B, M or
N as payments will understate the liability by twice the figure.

**Non-cash tips are never wages** (IRC § 3121(a)(12)(A)), so a share of concert tickets or a bottle of
wine produces income tax but no FICA.

**The monthly threshold is per employer, per month.** A worker with two jobs tests each separately.

**Unreported tips do not appear on the Form W-2.** They are found by asking the client, not by reading
the form, and the whole exposure — tax and penalty — follows from that conversation.

**The § 6652(b) addition is 50 percent of the tax, not of the tips.**

**Reporting tips builds the social security record.** Not reporting them reduces the client's own future
benefit.

**Codes M and N are about a former employee.** For a current employee the employer withholds and nothing
reaches the return.

**None of this is self-employment tax.** A tipped employee is an employee; the tips are wages, not net
earnings from self-employment.
</div>

## How this has changed

The mechanics on this page are long-settled and nothing in Pub. L. 119-21 amended §§ 3102, 6053, 6652(b)
or 79.

What changed for 2026 sits alongside them and should not be confused with them. The Act created a
deduction for qualified tips at IRC § 224, and that deduction reaches income tax only. It does not make
tips cease to be wages, does not remove them from social security and Medicare tax, and does not affect
the § 6053(a) reporting obligation or the § 6652(b) penalty. A tipped employee in 2026 may deduct
qualified tips in computing taxable income and still owe the full employee share of FICA on the same
dollars — including, where the employer could not collect it, on their own return. The interaction that
does exist is on the other side: § 199A(c)(4) excludes from qualified business income any amount for
which the § 224(a) deduction is allowable, which is covered at 1.3.1.h.

The monthly threshold in § 3121(a)(12)(B) has never been indexed. It has stood at the same figure since
tip reporting was brought into the employment tax system, which means it now catches essentially every
tipped worker — the opposite of the drift recorded for the § 1411 and § 3101(b)(2) thresholds, where
inaction widened the tax's reach at the top rather than the bottom.

## Exam focus

Know what box 12 codes A, B, M and N are and that they add to tax rather than reducing it. That is the
most likely question and the most consequential error in practice.

Know the two routes: tax the employer could not collect, which reaches the return through the Form W-2,
and tax on tips the employee never reported, which reaches it through Form 4137.

Know the monthly threshold, that it applies per employer, that non-cash tips are never wages, and that
the penalty for failing to report is half the tax rather than half the tips.

Know that a former employee's group-term life insurance above the § 79 exclusion produces the same
uncollected tax, and that a current employee's does not.

## Check yourself

**1.** A Form W-2 shows $310 in box 12 with code A. How is it treated?

*Answer: As an addition to tax. Code A is uncollected social security tax on tips — the employee's share
that the employer could not collect under IRC § 3102(c)(1) — and it is added to the individual's
liability, not credited as withholding.*

**2.** An employee receives $18 of cash tips in one month and $140 in the next. What is reportable?

*Answer: Only the second month's. IRC § 3121(a)(12)(B) excludes cash tips received in a calendar month
from wages unless they amount to $20 or more, so the $18 month is outside the employment tax system
entirely — though the income tax on it is still due.*

**3.** Why can an employer be unable to collect the tax on properly reported tips?

*Answer: Because IRC § 3102(c)(1) permits collection only from wages of the employee excluding tips that
are under the employer's control, and only within the period ending on the tenth day of the month
following the month the tips were deemed paid. A tipped worker with little or no hourly pay leaves
nothing to collect from.*

**4.** What is the consequence of not reporting tips to the employer at all?

*Answer: The employee owes the employee share of social security and Medicare tax on them directly,
computed on Form 4137, and is liable under IRC § 6652(b) for an additional 50 percent of that tax unless
the failure was due to reasonable cause and not wilful neglect.*

**5.** Does the new deduction for qualified tips remove them from social security and Medicare tax?

*Answer: No. The IRC § 224 deduction operates in computing taxable income only. Tips remain wages under
§ 3121(a) and (q), the § 6053(a) reporting obligation is unchanged, and the employee share of FICA is due
on the same dollars.*
