---
title: "Excess Social Security withholding"
code: "1.4.1.e"
part: 1
domain: "Taxation"
section: "Taxation"
description: "A narrow provision that turns on one fact. Two employers and the excess is recovered on the return; one employer and it is not recoverable there at all."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 31", title: "Tax withheld on wages", url: "https://www.law.cornell.edu/uscode/text/26/31" }
  - { type: IRC, ref: "§ 6413", title: "Special rules applicable to certain employment taxes", url: "https://www.law.cornell.edu/uscode/text/26/6413" }
  - { type: IRC, ref: "§ 3101", title: "Rate of tax — employee FICA", url: "https://www.law.cornell.edu/uscode/text/26/3101" }
  - { type: IRC, ref: "§ 3201", title: "Rate of tax — railroad retirement", url: "https://www.law.cornell.edu/uscode/text/26/3201" }
  - { type: Pub, ref: "IRS Topic no. 751", title: "Social security and Medicare withholding rates and wage base", url: "https://www.irs.gov/taxtopics/tc751" }
forms: []
related: ["1.4.1.d", "1.4.1.j", "1.3.2.h", "1.4.1.b", "1.4.1.f", "1.4.1.k"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 6413(c)(1) special refund and its two-employer condition, the § 31(b)(1) treatment of the amount as tax withheld at source, the § 31(b)(2) year rule, the absence of any equivalent for the hospital insurance tax under § 3101(b), and the railroad retirement coordination. 2026 wage base from IRS Topic 751." }
---

This is one of the narrowest provisions on an individual return and one of the most reliably tested,
because the whole of it turns on a single fact. An employee whose combined wages from **two or more**
employers exceed the social security wage base has over-paid, and recovers the excess on their return.
An employee whose single employer over-withheld has also over-paid, and cannot recover it there.

## The rule

**The special refund.** Where by reason of receiving wages from more than one employer during a calendar
year an employee's wages exceed the contribution and benefit base, the employee is entitled to a credit
or refund of the § 3101(a) tax withheld above what the base would have produced (IRC § 6413(c)(1)). The
phrase "by reason of receiving wages from more than one employer" does the work: it is the reason for
the excess, not merely a description of the taxpayer's circumstances.

**The ceiling.** {fig:excess_ss.maximum} Each employer withholds against the base independently and has
no way of knowing what another paid, which is why the over-withholding happens at all and why it is the
employee rather than the employer who is put right.

**The condition.** {fig:excess_ss.two_employer_test}

**What the amount is.** {fig:excess_ss.character} It appears with the taxpayer's other payments rather
than among the credits, and a taxpayer with no liability at all still receives it.

**Which year.** {fig:excess_ss.year}

**Medicare has no equivalent.** {fig:excess_ss.medicare} A taxpayer who paid additional Medicare tax
through withholding on wages from two employers, neither of which alone exceeded the withholding
threshold, reconciles that on Form 8959 — a different mechanism with a different result.

**Railroad retirement.** {fig:excess_ss.rrta}

**Deemed separate employers.** Section 6413(c)(2) treats each head or designated agent of a federal
agency as a separate employer, and extends the rule to State employees covered by a section 218
agreement and to employees of certain foreign affiliates and of Guam, American Samoa and the District of
Columbia. So a taxpayer who worked for two federal agencies is in the same position as one who worked
for two unrelated companies.

## Current figures

| Item | Amount |
| --- | --- |
| Maximum per employer | {fig:excess_ss.maximum} |
| The condition | {fig:excess_ss.two_employer_test} |
| Character of the amount | {fig:excess_ss.character} |
| Year allowed | {fig:excess_ss.year} |
| Medicare | {fig:excess_ss.medicare} |
| Railroad retirement | {fig:excess_ss.rrta} |

## How it works in practice

**Count the employers first.** Everything follows from that. Two or more and the return is the right
place; one and it is not.

**Then total the social security tax withheld**, from box 4 of each Form W-2, and compare it to the
ceiling. The excess is the credit — there is no proration, no phase-out and no limitation.

**Then check what you are adding up.** Only the old-age, survivors and disability insurance tax counts.
Box 6 Medicare tax is not part of this computation at any income level, and a taxpayer who includes it
will produce a figure that does not reconcile.

**For the single-employer case, tell the client what to ask for.** The employer must refund the
over-withheld amount and furnish a corrected Form W-2. If the employer will not, the employee's route is
a claim on Form 843 supported by a statement that the employer refused — not a credit on the return.

One practical point: a taxpayer who changes jobs mid-year almost always has the second employer start
again at zero against the base, so this arises far more often from a job change than from holding two
jobs at once.

<div class="scenario">
<h3>Two employers, one ceiling</h3>

Mireille worked for one employer through July, earning $140,000, and for another from August, earning
$70,000. Each withheld social security tax at 6.2 percent on everything it paid her — $8,680 and $4,340.

Her combined wages of $210,000 exceed the 2026 contribution and benefit base. The most that should have
been withheld is 6.2 percent of that base, and the difference between the $13,020 actually withheld and
that ceiling is her special refund under § 6413(c)(1). It goes on her return as an amount treated as
withheld at source. Neither employer did anything wrong and neither owes her anything: both withheld
correctly on their own wages.
</div>

<div class="scenario">
<h3>One employer, no credit</h3>

Owen worked for a single company all year, earning $205,000, and its payroll system failed to stop
withholding at the base — it took 6.2 percent on the whole amount.

He has over-paid by the same arithmetic as Mireille, but § 6413(c)(1) gives a special refund only where
the excess arises by reason of wages from more than one employer. There is no § 31(b) credit for him.
The employer must repay him the over-withheld amount and issue a corrected Form W-2. Claiming it on the
return instead would be wrong, and the return would not reconcile against the Form W-2 the IRS holds.
</div>

<div class="scenario">
<h3>The Medicare amount that is not part of this</h3>

Sandeep has two employers and combined wages of $260,000. His two Forms W-2 show social security tax of
$11,439 and $4,650, and Medicare tax of $2,175 and $1,595.

The social security figures total more than the ceiling, so he has a special refund of the excess. The
Medicare figures are irrelevant to it: § 3101(b)(1) has no wage ceiling, so nothing about them is
excessive. Separately, each employer withheld the 0.9 percent additional Medicare tax only on what it
paid above the withholding threshold, and Sandeep reconciles his actual liability on Form 8959 — which
on these facts may leave him owing more, not less.
</div>

<div class="callout trap">

**One employer means no credit on the return.** This is the whole question, every time it is asked.

**Only social security tax counts, never Medicare.** Box 4, not box 6.

**It is a payment, not a credit.** Section 31(b)(1) treats it as withheld at source, so it is refundable
and is not limited by tax liability.

**Each employer withholds to the full base.** Neither is wrong to do so, and neither is required to
coordinate.

**A married couple filing jointly compute it separately.** The base applies to each individual, so one
spouse's under-use of the base does not offset the other's excess.

**Federal agencies are separate employers.** Section 6413(c)(2)(A) says so expressly, so working for two
of them creates the same excess as two private employers.

**Railroad tier 1 counts, but capped at the § 3101(a) rate.** Compensation under § 3231(e) is treated as
wages for this purpose.

**The year is the calendar year of the wages.** Section 31(b)(2) allocates the credit to the taxable
year beginning in that calendar year.
</div>

## How this has changed

Nothing about the mechanism has changed. Sections 31(b) and 6413(c) have stood in substantially their
present form for decades, and Pub. L. 119-21 did not touch them.

What changes every year is the ceiling, and it changes by an SSA mechanism rather than a Treasury one.
Section 6413(c)(1) points at the contribution and benefit base under section 230 of the Social Security
Act, which is announced by the Social Security Administration. {fig:excess_ss.maximum} The consequence
for currency is that this figure is never in the annual inflation revenue procedure — it has to be taken
from the SSA announcement or from the IRS pages that report it, and any table of it should be checked
for the year it belongs to before it is used.

The practical incidence of the provision has also drifted. Because the base rises each year while the
number of people holding two jobs has not fallen, this arises most often on a job change rather than on
concurrent employment, and it is a routine item on returns for taxpayers who would not describe
themselves as high earners.

## Exam focus

There is really only one question here and it is a classification question: given a taxpayer with excess
social security tax withheld, is the answer a credit on the return or a refund from the employer? Count
the employers.

Know that the amount is treated as tax withheld at source rather than as a nonrefundable credit, so it
is not limited by liability. Know that Medicare tax is never part of the computation. Know that the
ceiling is the wage base times the old-age rate, and that each spouse on a joint return has their own.

For the single-employer case, know the remedy: employer refund and corrected Form W-2, with Form 843 as
the fallback where the employer refuses.

## Check yourself

**1.** A taxpayer with two employers had a total of $12,900 of social security tax withheld for 2026.
What is the credit?

*Answer: The excess over 6.2 percent of the contribution and benefit base for the year — $12,900 less
$11,439, or $1,461. IRC § 6413(c)(1) gives the special refund and § 31(b)(1) treats it as an amount
withheld at source, so it is recovered whatever the taxpayer's liability.*

**2.** A taxpayer with one employer had social security tax withheld on wages above the base. May they
claim a credit?

*Answer: No. IRC § 6413(c)(1) applies only where the excess arises "by reason of an employee receiving
wages from more than one employer". The employer must refund the over-withheld amount and issue a
corrected Form W-2; if it refuses, the employee claims on Form 843 with a statement to that effect.*

**3.** Does Medicare tax withheld above any threshold generate a similar credit?

*Answer: No. IRC § 3101(b)(1) imposes the hospital insurance tax on all covered wages with no ceiling,
so there is no excess to recover. The separate 0.9 percent additional Medicare tax under § 3101(b)(2) is
reconciled on the taxpayer's own return on Form 8959, which can produce either a balance due or a
credit.*

**4.** A married couple file jointly. One spouse's wages were well below the base and the other's, from
two employers, well above. Can the couple net the two?

*Answer: No. The contribution and benefit base applies to each individual's own wages, so the spouse
with two employers computes the excess on their own figures and the other spouse's unused base is
irrelevant. The two amounts are computed separately and then reported on the joint return.*

**5.** A taxpayer worked for two different federal agencies during the year. Is that two employers for
this purpose?

*Answer: Yes. IRC § 6413(c)(2)(A) deems each head of a federal agency or instrumentality who makes a
return under § 3122, and each designated agent who does so, to be a separate employer for the purposes
of the special refund.*
