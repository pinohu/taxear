---
title: "Reporting requirements"
code: "2.3.3.b"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Retirement plans"
description: "Plan reporting runs on a plan-year calendar rather than a tax-year one, and the penalty for missing it was multiplied by ten for filings due after 2019."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6058", title: "Information required in connection with certain plans of deferred compensation", url: "https://www.law.cornell.edu/uscode/text/26/6058" }
  - { type: IRC, ref: "§ 6057", title: "Annual registration, etc.", url: "https://www.law.cornell.edu/uscode/text/26/6057" }
  - { type: IRC, ref: "§ 6047", title: "Information relating to certain trusts and annuity plans", url: "https://www.law.cornell.edu/uscode/text/26/6047" }
  - { type: IRC, ref: "§ 6652", title: "Failure to file certain information returns, registration statements, etc.", url: "https://www.law.cornell.edu/uscode/text/26/6652" }
  - { type: IRC, ref: "§ 6693", title: "Failure to provide reports on certain tax-favored accounts or annuities", url: "https://www.law.cornell.edu/uscode/text/26/6693" }
  - { type: IRC, ref: "§ 414", title: "Definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/414" }
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 1372", title: "Partnership rules to apply for fringe benefit purposes", url: "https://www.law.cornell.edu/uscode/text/26/1372" }
  - { type: Reg, ref: "§ 301.6058-2", title: "Electronic filing of returns filed under section 6058", url: "https://www.law.cornell.edu/cfr/text/26/301.6058-2" }
  - { type: Pub, ref: "Form 5500 corner", title: "IRS, Form 5500 corner", url: "https://www.irs.gov/retirement-plans/form-5500-corner" }
forms: ["5500", "5500-SF", "5500-EZ", "5558", "8955-SSA"]
related: ["2.3.3.a", "2.3.3.d", "2.3.3.e", "2.3.3.c", "2.3.3.f"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 6058(a) annual return and which of Form 5500, Form 5500-SF and Form 5500-EZ applies, the one-participant plan definition, the last-day-of-the-seventh-month due date and the Form 5558 extension, the Treas. Reg. § 301.6058-2 ten-return electronic filing threshold with its IRC § 414(b)-(o) aggregation, the IRC § 6057(a) registration statement on Form 8955-SSA, and the IRC § 6652(d) and (e) penalties as increased by SECURE Act § 403 for filings due after 2019." }
---

Plan reporting is where an otherwise well-run plan gets into trouble, because the deadlines run off
the plan year rather than the employer's tax year and nothing on the business return prompts them.
A sponsor that files its own return perfectly can still be accruing a daily penalty on a plan return
nobody remembered.

## The rule

**The annual return** (IRC § 6058(a)). {fig:rr.6058} That return is the Form 5500 series.
{fig:rr.which_5500}

**One-participant plans.** {fig:rr.one_participant} The definition is narrower than "small plan."
A single employee outside the owner-and-spouse group takes the plan out of Form 5500-EZ entirely.

**When.** {fig:rr.5500_due} {fig:rr.5558} Note the change of vehicle for one form:
Form 5558 no longer extends Form 5330, which now goes on Form 8868.

**How.** {fig:rr.efast2} {fig:rr.efile_threshold} The ten-return count is not a count of plan
returns. It sweeps in Forms W-2, Forms 1099, income tax returns, employment tax returns and excise
tax returns, so almost any employer with a handful of staff is over it.

**The registration statement.** {fig:rr.8955ssa} It is a separate filing with the same due date, and
the two are extended together on a single Form 5558.

**Distribution reporting.** {fig:rr.distribution_reporting} That is the statutory basis for
Form 1099-R, and the aggregation floor is the reason a trivial distribution generates no form.
{fig:rr.6693}

**What a miss costs.** {fig:rr.penalty_5500} {fig:rr.penalty_8955ssa} {fig:rr.secure_penalties}

**Getting out of it.** {fig:rr.relief}

**A plan adopted after the year ended.** {fig:rr.retroactive_adoption}

## Current figures

| Item | 2026 |
| --- | --- |
| Which return | {fig:rr.which_5500} |
| One-participant plan | {fig:rr.one_participant} |
| Due date | {fig:rr.5500_due} |
| Extension | {fig:rr.5558} |
| Electronic filing threshold | {fig:rr.efile_threshold} |
| Registration statement | {fig:rr.8955ssa} |
| Form 5500 penalty | {fig:rr.penalty_5500} |
| Form 8955-SSA penalty | {fig:rr.penalty_8955ssa} |
| Relief | {fig:rr.relief} |

## How it works in practice

Start from the plan year, not the tax year. A plan year need not match the sponsor's taxable year,
and where they differ the Form 5500 deadline moves with the plan and the contribution deduction
deadline moves with the sponsor. Two calendars, two diary entries, and confusing them is how a plan
that was funded on time gets reported late.

Establish the participant count before choosing a form, because the count decides the form and the
form decides the audit requirement. Fewer than 100 participants opens the door to Form 5500-SF and
to the small plan audit waiver; the owner-and-spouse test is different again and opens the door to
Form 5500-EZ. A plan that adds one non-owner employee mid-year has changed category, and the change
is not obvious from the accounts.

Assume electronic filing. The ten-return threshold in Treas. Reg. § 301.6058-2 counts every return
of every type across the controlled group, which in practice means any employer with employees is
mandatory-electronic. The rare paper filer is a one-participant plan whose sponsor files fewer than
ten returns of any kind in the year — an owner-only professional practice, and not many of those.

When a filing has been missed, identify the right relief programme before doing anything else,
because they are not interchangeable. A delinquent Form 5500 or Form 5500-SF goes through the
Department of Labor's Delinquent Filer Voluntary Compliance Program, which the Service honours for
its own penalties. A delinquent Form 5500-EZ cannot use that programme at all and must go through
the Service's own penalty relief procedure or reasonable cause. Filing the late return outside a
programme, without more, starts the correspondence rather than ending it.

<div class="scenario">

<h3>The plan that stopped being a one-participant plan</h3>

An architect operates through an S corporation and has maintained a solo 401(k) for eleven years,
filing Form 5500-EZ each July. In March she hires a full-time draughtsman, who becomes eligible
under the plan's terms in September of the same year. Her adviser files Form 5500-EZ as usual the
following July.

The plan ceased to be a one-participant plan the moment it covered someone other than the owner and
the owner's spouse, and it became subject to ERISA Title I reporting at the same time. The correct
filing for that plan year was Form 5500-SF, filed electronically through EFAST2 with the additional
schedules a Title I plan requires. Filing Form 5500-EZ is not a return "in the manner prescribed,"
so the IRC § 6652(e) penalty runs from 31 July at the daily rate. Because the plan is now a Title I
plan, the Department of Labor programme is available to correct it — which it would not have been
had the plan remained a one-participant plan.

</div>

<div class="scenario">

<h3>The paper filer who could not file on paper</h3>

A dentist with no employees other than his spouse sponsors a solo 401(k). The practice files four
Forms 1099-NEC to contract hygienists, two Forms W-2 for himself and his spouse, four quarterly
Forms 941, an annual Form 940 and the corporation's Form 1120-S. His adviser mails a paper
Form 5500-EZ to Ogden.

Count the returns: four Forms 1099-NEC, two Forms W-2, four Forms 941, one Form 940 and one
Form 1120-S is twelve returns of any type in the calendar year that includes the first day of the
plan year. Twelve is at least ten, so Treas. Reg. § 301.6058-2 makes electronic filing through
EFAST2 mandatory notwithstanding that this is a one-participant plan. The paper return is not a
filing in the prescribed manner. The Service may waive the electronic requirement year by year for
undue hardship, but the burden is on the filer to document it, and "we have always mailed it" is not
hardship.

</div>

<div class="scenario">

<h3>Two returns, one extension, one missed</h3>

A manufacturer's 401(k) has a plan year ending 30 September. Three participants separated during the
year with deferred vested benefits. The plan administrator files a single Form 5558 in April
extending the Form 5500, and files the Form 5500 within the extension. No Form 8955-SSA is ever
filed.

The Form 5500 is fine. The Form 8955-SSA was separately required by IRC § 6057(a), was due on
30 April — the last day of the seventh month after a 30 September plan year end — and could have
been extended on the very same Form 5558 the administrator filed, had it been checked. The penalty
is $10 for each of the three participants for each day the failure continues, so $30 a day, running
until the statement is filed and capped at $50,000 for the plan year. Nothing about the correctness
of the Form 5500 mitigates it, because the two filings answer to different statutes.

</div>

<div class="callout trap">

**"Small plan" and "one-participant plan" are different tests.** Fewer than 100 participants gets a
plan to Form 5500-SF. Only the owner, the owner's spouse, partners and their spouses gets it to
Form 5500-EZ. A four-employee plan is small and is not a one-participant plan.

</div>

<div class="callout trap">

**The ten-return threshold counts every return, not plan returns.** Treas. Reg. § 301.6058-2(d)(3)
counts information returns, income tax returns, employment tax returns and excise tax returns
together, and aggregates across a controlled group under IRC § 414(b), (c), (m) and (o). Reading it
as "ten Forms 5500" gets the answer backwards for essentially every employer.

</div>

<div class="callout trap">

**The DOL programme does not reach Form 5500-EZ.** It is the standard answer for a delinquent
Form 5500 or Form 5500-SF and it is unavailable for a one-participant plan. The Service's own
programme under Rev. Proc. 2015-32 is that plan's route, and an adviser who sends a Form 5500-EZ
filer to the Department of Labor has sent them nowhere.

</div>

<div class="callout trap">

**Form 5558 no longer extends Form 5330.** The excise tax return for prohibited transactions and
other plan excise taxes is now extended on Form 8868 — the same form used for exempt organisation
returns. Material written before the change routes it to Form 5558.

</div>

## How this has changed

Penalties for plan reporting were multiplied roughly tenfold by § 403 of the SECURE Act,
Division O of Pub. L. 116-94, for returns, statements and notifications required to be filed after
31 December 2019. All three amounts moved at once — the IRC § 6058 daily penalty and its cap, the
IRC § 6057(a) per-participant registration penalty and its cap, and the IRC § 6057(b)
change-of-status notification penalty and its cap, each set out above. Any calculation using the
pre-2020 amounts understates the exposure by an order of magnitude.

Electronic filing arrived in stages and is now near-universal. Form 5500 and Form 5500-SF have gone
through EFAST2 for years; a one-participant or foreign plan gained the option to use EFAST2 from
1 January 2021 and lost the option to use Form 5500-SF as a substitute for Form 5500-EZ at the same
time. Treas. Reg. § 301.6058-2 then made electronic filing mandatory for filers over the ten-return
threshold.

Form 5558 itself became electronically filable through EFAST2 from 1 January 2025, and stopped
serving as the extension request for Form 5330 — a small change that catches out advisers working
from a prior year's checklist.

SECURE Act § 201 changed when a plan can come into existence, allowing adoption by the due date of
the employer's return including extensions with retroactive effect for the prior tax year. The
reporting consequence is counter-intuitive: there is no Form 5500 series return for the retroactive
year at all, and a Form 5558 filed for such a plan does not create one.

## Exam focus

Know which return goes with which plan: Form 5500 for an ERISA plan generally, Form 5500-SF for one
with fewer than 100 participants, Form 5500-EZ for a one-participant or foreign plan. Know the
owner-and-spouse definition precisely, including the treatment of a 2 percent S corporation
shareholder as a partner.

Know the due date as the last day of the seventh month after the plan year ends, that Form 5558
extends it, and that one Form 5558 can cover both the Form 5500 and the Form 8955-SSA for the same
plan.

Know the current penalty amounts and that they date from filings due after 2019. Know that
Form 8955-SSA is a separate obligation under IRC § 6057(a) with a per-participant penalty, and that
the Department of Labor's voluntary compliance programme is closed to Form 5500-EZ filers.

## Check yourself

**1.** A plan year ends 31 March. When is the Form 5500 due, and when if extended?

*Answer:* 31 October — the last day of the seventh month after the plan year ends. Form 5558
extends it by two and a half months to 15 January. Note that neither date has anything to do with
the sponsor's tax year; a calendar-year sponsor with a 31 March plan year has one deadline in
October and an unrelated one in April.

**2.** A married couple own a business jointly and employ their adult son, who participates in the
plan. May the plan file Form 5500-EZ?

*Answer:* No. A one-participant plan covers only the owner and the owner's spouse, or partners and
their spouses. A son is neither, so the plan benefits someone outside the group, is subject to
ERISA Title I reporting, and files Form 5500-SF or Form 5500 depending on participant count.

**3.** A plan administrator files the Form 5500 forty days late without a valid extension. The plan
has 60 participants. What is the exposure?

*Answer:* Under IRC § 6652(e) the penalty is $250 for each day the failure continues, so $10,000
for forty days, against a cap of $150,000 for the return. The participant count is irrelevant to
this penalty — it drives the
Form 8955-SSA penalty, not this one. Reasonable cause is a defence, and if the plan is a Title I
plan the Department of Labor programme will usually produce a far better result than arguing it.

**4.** An owner-only plan's sponsor files five returns of all types during the relevant calendar
year. May it file Form 5500-EZ on paper?

*Answer:* Yes. Treas. Reg. § 301.6058-2 mandates electronic filing only for a filer required to file
at least ten returns of any type during the calendar year that includes the first day of the plan
year, counting across the controlled group. At five returns the sponsor is under the threshold, so
the paper Form 5500-EZ to Ogden remains available.

**5.** A retirement plan distributes $8 to a former participant with a residual balance and issues
no Form 1099-R. Is that a failure?

*Answer:* No. IRC § 6047(d)(1) provides that no return or report may be required as to distributions
to a person during a year unless they aggregate $10 or more. At $8 there is nothing to report. Had
a second $5 distribution gone to the same person in the same year, the aggregate would clear the
floor and a form would be required for the total.
