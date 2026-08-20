---
title: "Household employees"
code: "1.4.1.b"
part: 1
domain: "Taxation"
section: "Taxation"
description: "Three separate thresholds, three different tests, and one schedule attached to a personal return. Whether the worker is an employee at all decides everything else."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 3121", title: "Definitions — FICA", url: "https://www.law.cornell.edu/uscode/text/26/3121" }
  - { type: IRC, ref: "§ 3306", title: "Definitions — FUTA", url: "https://www.law.cornell.edu/uscode/text/26/3306" }
  - { type: IRC, ref: "§ 3510", title: "Coordination of collection of domestic service employment taxes with collection of income taxes", url: "https://www.law.cornell.edu/uscode/text/26/3510" }
  - { type: IRC, ref: "§ 3402", title: "Income tax collected at source", url: "https://www.law.cornell.edu/uscode/text/26/3402" }
  - { type: Pub, ref: "IRS Topic no. 756", title: "Employment taxes for household employees", url: "https://www.irs.gov/taxtopics/tc756" }
forms: []
related: ["1.4.1.d", "1.4.1.j", "1.1.1.k", "1.4.1.a", "1.4.1.c"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the common law employee test for household workers, the IRC § 3121(a)(7)(B) and (x) cash wage threshold with the 2026 figure from IRS Topic 756, the § 3121(b)(3) family exclusions, the FUTA quarterly test and wage base, the absence of any income tax withholding obligation, and the § 3510 reporting of all three on Schedule H with the individual return." }
---

Everything on this topic follows from one question the statute does not answer directly: is the worker
an employee or an independent contractor? A household employee is someone whose work the payer controls
— not only what is done but how. A gardener who brings their own equipment, sets their own hours and
serves many households is running a business. The IRS puts it plainly at Topic 756: household workers
are employees if the payer can control both the work and how it is done, and repairmen, plumbers,
contractors and others providing services as independent contractors are not.

## The rule

**Who counts.** Housekeepers, maids, babysitters, gardeners and others who perform household work in or
around a private residence as the payer's employee. The category is defined by the relationship, not by
the number of hours or the regularity of the work — a nurse who comes once a week can be a household
employee, and a full-time worker can be an independent contractor.

**Social security and Medicare.** Cash remuneration for domestic service in a private home is excluded
from wages if it is less than the applicable dollar threshold for the year (IRC § 3121(a)(7)(B)), and
§ 3121(x) defines that threshold as {fig:household.threshold_mechanism}. For 2026 it is
{fig:household.fica_threshold}. Once the threshold is crossed, the tax applies to **all** cash wages
paid to that employee for the year, not merely the excess — the threshold is a switch, not an exclusion
of the first tranche.

The rate is {fig:household.fica_rate}. An employer who pays the employee's share out of their own funds
turns that payment into wages for the employee's income tax, but not into social security or Medicare
wages and not into FUTA wages.

**Non-cash wages are never covered.** Section 3121(a)(7)(A) excludes remuneration paid in any medium
other than cash for domestic service. Meals, lodging and similar in-kind compensation are outside the
tax whatever their value.

**Who is excluded by relationship or age.** {fig:household.excluded_workers}

**Federal unemployment tax.** {fig:household.futa} The quarterly test looks at total cash wages to all
household employees, while the wage base is applied per employee — two different denominators in the
same sentence. Wages paid to a spouse, a child under 21 or a parent are excluded from both tests.

**Income tax withholding.** {fig:household.income_tax_withholding} Section 3402(p) permits voluntary
withholding by agreement; nothing requires it here. A household employee who wants tax withheld gives
the employer a Form W-4, and one who does not may need to make estimated payments instead.

**Additional Medicare tax.** The employer must withhold the 0.9 percent additional Medicare tax from
wages above the statutory threshold for a single filer, without regard to the employee's actual filing
status — the reconciliation happens on the employee's own return.

**Reporting.** All three taxes go on Schedule H, filed with the employer's own Form 1040, 1040-SR,
1040-NR, 1040-SS or Form 1041 — the coordination that § 3510 provides. Someone not otherwise required
to file a return files Schedule H by itself. A sole proprietor already filing Form 940 and Form 941 or
944 for business employees may include the household employee there instead. The employee gets a Form
W-2, which means the employer needs an employer identification number.

## Current figures

| Item | Amount |
| --- | --- |
| Cash wage threshold | {fig:household.fica_threshold} |
| Withholding rate | {fig:household.fica_rate} |
| Federal unemployment tax | {fig:household.futa} |
| Excluded workers | {fig:household.excluded_workers} |
| Income tax withholding | {fig:household.income_tax_withholding} |

## How it works in practice

**Settle the status first.** If the worker is an independent contractor, none of this applies: no
Schedule H, no Form W-2, no employer tax. The worker reports the income on Schedule C and pays
self-employment tax. Getting this wrong in either direction is expensive, and the answer turns on
behavioural control rather than on titles, invoices or the worker's preference.

**Then run the three thresholds separately**, because they do not move together. The cash wage threshold
is per employee and per year, and it governs social security and Medicare. The FUTA threshold is
quarterly and aggregate across all household employees, and looks at the prior year as well as the
current one. The FUTA wage base is per employee. A family can easily be over one and under another.

**Then decide what is actually withheld.** Social security and Medicare, yes, once the threshold is met.
Federal income tax, only by agreement. Federal unemployment tax, never — it comes from the employer's
own pocket.

**Then plan the cash flow.** Schedule H tax is part of the employer's own income tax liability, so it
feeds the estimated tax and withholding rules. A household employer who does nothing all year and meets
the whole liability in April can owe an underpayment penalty on it. Increasing withholding on the
employer's own wages is usually the simplest fix.

<div class="scenario">
<h3>The babysitter with several families</h3>

The Ferraras pay a babysitter $4,600 over the year. She sits for four other families as well, sets her
own rates and hours, and turns down work she does not want.

She is not their household employee. The control that defines the relationship is absent: they do not
direct how she works, and she offers her services to the public. No Schedule H, no Form W-2, no employer
share of tax. She reports the income on Schedule C and pays self-employment tax on it. Had they
instead engaged a nanny who worked the hours they set, in their home, following their instructions,
the same $4,600 would be over the cash wage threshold and every part of this topic would apply.
</div>

<div class="scenario">
<h3>Over one threshold, under the other</h3>

The Nkemelus pay a housekeeper $3,400 for the year, spread evenly at roughly $850 a quarter, and pay no
other household worker.

The cash wages exceed the 2026 threshold, so social security and Medicare apply to the full $3,400 —
$260.10 withheld from her and $260.10 from them. But no calendar quarter exceeded $1,000 in cash wages
to household employees, and none did in the prior year either, so there is no federal unemployment tax.
They file Schedule H reporting FICA only. Paying the same total in three quarters instead of four would
have crossed the FUTA threshold and added the tax.
</div>

<div class="scenario">
<h3>The teenage helper</h3>

The Osei family pay their 17-year-old neighbour $3,900 across the year to mind the children after
school. She is a full-time student.

She is a household employee under their control, and the wages exceed the cash threshold. But no social
security or Medicare tax applies: an employee under 18 at any time during the year is excluded unless
household work is that employee's principal occupation, and the IRS states that a student's household
work is never their principal occupation. The exclusion is age-based and does not depend on the amount
paid. FUTA is a separate question, decided on the quarterly figures, and the age exclusion does not
apply to it.
</div>

<div class="callout trap">

**The cash wage threshold is a switch, not an exclusion.** Cross it and every dollar of cash wages to
that employee for the year is taxed, including the first.

**The FICA threshold is per employee; the FUTA threshold is aggregate and quarterly.** Two workers each
paid below the cash wage threshold produce no FICA and, if paid in the same quarter, can still produce
FUTA.

**The prior year counts for FUTA.** A quarter above the limit last year brings this year's wages into
the tax even if no quarter this year does.

**Income tax withholding is optional.** This is the most reliably tested point on the topic, and the
answer to "which taxes must be withheld" is social security and Medicare only.

**Federal unemployment tax is never withheld** from the employee. It is the employer's own liability.

**Non-cash wages are outside the tax entirely** under § 3121(a)(7)(A) — room, board and similar
compensation do not count and do not push the employee over the threshold.

**The family exclusions are not symmetrical.** A spouse and a child under 21 are excluded outright; a
parent only unless an exception applies; an employee under 18 only where household work is not their
principal occupation.

**Schedule H liability is the employer's own tax.** It is not separately paid and it exposes the
employer to the estimated tax rules.
</div>

## How this has changed

Nothing in Pub. L. 119-21 amended the household employment rules. The mechanics of this topic have been
stable for years; what changes is the cash wage threshold, and it changes by a mechanism that no revenue
procedure publishes: {fig:household.threshold_mechanism}.

Two consequences follow. The figure does not appear in the annual inflation revenue procedure alongside
the rest of an individual return's amounts, so it has to be sourced separately — IRS Topic 756 and
Publication 926 carry it. And because it rounds down, it can stand still for a year or more while the
underlying index rises.

The FUTA figures have not moved at all. The quarterly test, the wage base, the gross rate and the state
credit are all statutory and unindexed. The one variable is the credit reduction that applies to
employers in a state which has not repaid federal unemployment borrowings — that list changes annually
and must be checked against the Schedule H instructions for the year rather than assumed.

## Exam focus

The two questions that recur are which taxes must be withheld — social security and Medicare only,
income tax by agreement — and whether a particular worker is an employee at all. For the second, look
for control and for whether the worker serves the general public.

Know that crossing the cash wage threshold taxes all of that employee's cash wages, not just the excess.
Know that the FUTA test is quarterly, aggregate, and looks back a year. Know the four exclusions by
relationship and age, and that a student under 18 is always excluded.

Know that everything is reported on Schedule H attached to the employer's own return, that the employee
receives a Form W-2, and that the employer therefore needs an employer identification number.

## Check yourself

**1.** A family pays a housekeeper $3,050 in cash wages in 2026. On how much is social security and
Medicare tax due?

*Answer: On the whole $3,050. IRC § 3121(a)(7)(B) excludes the cash remuneration only where it is *less
than* the applicable dollar threshold for the year. Once the wages equal or exceed the threshold the
exclusion does not apply at all, so every dollar is taxed, not merely the excess.*

**2.** Which taxes must a household employer withhold from an employee's wages?

*Answer: Social security and Medicare, once the cash wage threshold is met, plus the additional Medicare
tax on wages above its own threshold. Federal income tax is withheld only if the employer and employee
agree, under IRC § 3402(p). Federal unemployment tax is never withheld — the employer pays it from their
own funds.*

**3.** A couple pay their 19-year-old daughter $5,000 to look after her younger siblings. What are the
employment tax consequences?

*Answer: None of the household employment taxes apply. A child under the age of 21 is excluded from
social security and Medicare withholding, and wages paid to a child under 21 are excluded from the FUTA
tests as well. The daughter still has taxable income to report.*

**4.** A family paid a gardener $700 in each of the four quarters of the prior year and $900 in the
first quarter of this year. Is federal unemployment tax due this year?

*Answer: No, on these facts. FUTA applies where cash wages to household employees exceeded $1,000 in any
calendar quarter of the current or prior year, and no quarter in either year did. Note that the test is
aggregate across household employees, so another worker paid in the same quarter could change the
answer.*

**5.** A household employer is not required to file an income tax return. How are the household
employment taxes reported?

*Answer: On Schedule H filed by itself. IRC § 3510 coordinates the collection of domestic service
employment taxes with the income tax by putting them on the individual return, and where there is no
return to attach it to, the schedule stands alone.*
