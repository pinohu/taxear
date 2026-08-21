---
title: "Employer and employee contributions"
code: "2.3.3.a"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Retirement plans"
description: "Two different ceilings apply to the same account in the same year, and confusing them is the single most common error in retirement plan contribution work."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 402", title: "Taxability of beneficiary of employees' trust", url: "https://www.law.cornell.edu/uscode/text/26/402" }
  - { type: IRC, ref: "§ 404", title: "Deduction for contributions of an employer to an employees' trust or annuity plan", url: "https://www.law.cornell.edu/uscode/text/26/404" }
  - { type: IRC, ref: "§ 414", title: "Definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/414" }
  - { type: IRC, ref: "§ 415", title: "Limitations on benefits and contribution under qualified plans", url: "https://www.law.cornell.edu/uscode/text/26/415" }
  - { type: IRC, ref: "§ 401", title: "Qualified pension, profit-sharing, and stock bonus plans", url: "https://www.law.cornell.edu/uscode/text/26/401" }
  - { type: IRC, ref: "§ 219", title: "Retirement savings", url: "https://www.law.cornell.edu/uscode/text/26/219" }
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 416", title: "Special rules for top-heavy plans", url: "https://www.law.cornell.edu/uscode/text/26/416" }
  - { type: IRC, ref: "§ 457", title: "Deferred compensation plans of State and local governments and tax-exempt organizations", url: "https://www.law.cornell.edu/uscode/text/26/457" }
  - { type: IRC, ref: "§ 4972", title: "Tax on nondeductible contributions to qualified employer plans", url: "https://www.law.cornell.edu/uscode/text/26/4972" }
  - { type: IRC, ref: "§ 3121", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/3121" }
  - { type: IRC, ref: "§ 402A", title: "Optional treatment of elective deferrals as Roth contributions", url: "https://www.law.cornell.edu/uscode/text/26/402A" }
  - { type: Notice, ref: "2025-67", title: "2026 amounts relating to retirement plans and IRAs, as adjusted for changes in cost-of-living", url: "https://www.irs.gov/pub/irs-drop/n-25-67.pdf" }
forms: []
related: ["2.3.3.c", "2.3.3.e", "2.3.3.f", "2.3.3.b"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Separates the IRC § 402(g) elective deferral limit, which follows the individual across every employer, from the IRC § 415(c) annual additions limit, which applies per employer, and sets both against the IRC § 401(a)(17) compensation cap and the IRC § 404 employer deduction ceiling. Carries the 2026 amounts from Notice 2025-67, including the IRC § 414(v)(7) Roth catch-up wage threshold of $150,000 of 2025 wages." }
---

An employee's deferral limit and the plan's annual additions limit are different numbers governed
by different sections, and the difference between them is not a technicality — it is what makes an
employer match possible at all. The deferral limit belongs to the person. The annual additions
limit belongs to the account.

## The rule

**The individual's deferral limit.** {fig:rc.deferral_statutory} {fig:rc.deferral_limit} This
limit is the individual's, not the plan's. Someone who works for two unrelated employers in the
same year and defers into both plans has one limit between them, and neither plan can police it —
only the individual can.

**Fixing an excess.** {fig:rc.excess_deferral} The 15 April date is not the filing deadline in
disguise; it is a hard statutory date, and an extension of time to file does not move it.

**The account's limit.** {fig:rc.annual_addition} {fig:rc.415c_limit} Note what the annual addition
includes: elective deferrals, employer contributions of every kind, employee after-tax
contributions and forfeitures reallocated to the account. Note what it excludes: rollovers, and —
by design — catch-up contributions.

**Defined benefit plans measure the benefit, not the contribution.** {fig:rc.415b_limit}

**Catch-ups sit outside both limits.** {fig:rc.catchup} {fig:rc.catchup_simple}
{fig:rc.catchup_cap} A participant aged 50 or over may therefore reach the deferral limit and the
catch-up on top, and the annual additions limit is applied without regard to the catch-up.

**And some catch-ups must be Roth** (IRC § 414(v)(7)). {fig:rc.roth_catchup} The threshold looks at
the prior calendar year's wages from the sponsoring employer, so a participant's first year with a
new employer is never caught by it.

**Compensation is capped before any of this is computed.** {fig:rc.comp_limit} A plan that promises
a percentage of pay cannot count compensation above the cap in the formula, which is what keeps the
IRC § 415(c) limit binding on high earners.

**Two more thresholds that drive plan design.** {fig:rc.hce} {fig:rc.sep_threshold}

**What the employer may deduct.** {fig:rc.employer_deduction} The deduction limit and the
IRC § 415(c) limit are separate constraints, and it is possible to be inside one and outside the
other. {fig:rc.deduction_timing} {fig:rc.4972}

**Self-employed compensation is different.** {fig:rc.selfemployed_comp}

**Individual retirement contributions run on their own scale.** {fig:rc.ira_limit}

**A newer account inside the plan.** {fig:rc.esa}

## Current figures

| Item | 2026 |
| --- | --- |
| Elective deferral limit | {fig:rc.deferral_limit} |
| Annual additions limit | {fig:rc.415c_limit} |
| Defined benefit limit | {fig:rc.415b_limit} |
| Catch-up, age 50 and over | {fig:rc.catchup} |
| Catch-up, SIMPLE plans | {fig:rc.catchup_simple} |
| Roth catch-up wage threshold | {fig:rc.roth_catchup} |
| Compensation limit | {fig:rc.comp_limit} |
| Highly compensated and key employee | {fig:rc.hce} |
| SIMPLE salary reduction limit | {fig:rc.simple_deferral} |
| IRA contribution limit | {fig:rc.ira_limit} |
| Employer deduction ceiling | {fig:rc.employer_deduction} |

## How it works in practice

Ask which limit the question is about before doing any arithmetic. If the facts involve one person
and more than one plan, it is the deferral limit and the answer aggregates. If the facts involve
one plan and more than one kind of contribution — deferrals, match, profit sharing, forfeitures —
it is the annual additions limit and the answer aggregates differently. Almost every wrong answer
in this area comes from applying one limit to the other's facts.

For the annual additions limit, remember that it applies per employer, or more precisely per
employer that is not aggregated under IRC § 414(b), (c), (m) or (o). Two genuinely unrelated
employers each have their own annual additions limit for the same participant, while a controlled
group has one. That is why the multiple-employer fact pattern always turns on whether the employers
are related — and if they are, the whole question changes.

When an excess deferral surfaces, act on the calendar rather than the return. The participant
allocates by 1 March and the plan distributes by 15 April. Miss it and the excess is taxed twice:
once in the year deferred and again when eventually distributed, with no basis recovery. That
outcome is entirely avoidable and entirely unforgiving.

On the employer side, check the deduction ceiling against the actual contribution before the return
is filed, because the contribution can still be made up to the extended due date and counted for the
prior year under IRC § 404(a)(6). An employer that over-contributes owes the IRC § 4972 excise tax
every year the excess remains in the plan, not merely in the year it went in.

<div class="scenario">

<h3>Two employers, one limit</h3>

A software engineer aged 44 works for one company from January to June and another, entirely
unrelated, from July to December. She defers $16,000 into the first employer's 401(k) and $14,000
into the second's. Each employer also makes a matching contribution: $6,000 and $5,000 respectively.
Neither plan flags anything.

Her deferrals total $30,000 against a limit of $24,500, so $5,500 is an excess deferral. Neither
plan did anything wrong — each was well inside the limit on its own, and no plan has visibility into
another employer's deferrals. The obligation is hers: allocate the $5,500 to one plan by 1 March
and have that plan distribute it, with allocable income, by 15 April. The annual additions limit is
not breached at all. Employer one's account received $22,000 and employer two's $19,000, each far
below $72,000, and the two are not aggregated because the employers are unrelated.

</div>

<div class="scenario">

<h3>The generous profit-sharing year</h3>

A dental practice sponsors a 401(k) with profit sharing. The owner-dentist is 58 and takes
compensation of $400,000. She defers the full elective limit plus the age-50 catch-up. The practice
makes a 3 percent safe harbour contribution and then a discretionary profit-sharing contribution of
15 percent. A departing employee's unvested balance of $2,000 is reallocated to participants, of
which $900 lands in her account.

Compensation is capped at $360,000 for every plan computation, so the safe harbour is $10,800 and
the profit-sharing contribution is $54,000, not the amounts a 3 percent and 15 percent formula on
$400,000 would produce. Her annual additions are the $24,500 deferral, the $10,800 safe harbour, the
$54,000 profit share and the $900 forfeiture — $90,200, well over the $72,000 ceiling, so the
employer contribution must be cut back. The $8,000 catch-up is excluded from the annual additions
test entirely, which is the whole point of it. Separately, the practice must test the total against
the IRC § 404(a)(3) deduction ceiling of 25 percent of covered compensation, which is a different
number again.

</div>

<div class="scenario">

<h3>The catch-up that had to be Roth</h3>

A hospital administrator turns 55 in 2026. His 2025 wages from the hospital were $162,000. He wants
to defer the full elective limit plus the age-50 catch-up into the hospital's 401(k), all
pre-tax, and the plan has never offered a designated Roth account.

His catch-up must be a designated Roth contribution, because his prior-year IRC § 3121(a) wages
from the sponsoring employer exceed $150,000. His ordinary $24,500 deferral is unaffected and can
remain pre-tax. The plan has a problem of its own: under IRC § 414(v)(7)(B), where the Roth
requirement applies to any participant for a plan year, the plan may not permit catch-ups at all
unless it lets every eligible participant make them as Roth contributions. So a plan with no Roth
feature cannot offer catch-ups to anyone once a single participant crosses the threshold.

</div>

<div class="callout trap">

**The deferral limit follows the person; the additions limit follows the account.** IRC § 402(g)
speaks of "the elective deferrals of any individual for any taxable year," while IRC § 415(c)
speaks of additions "to the participant's account." An answer that aggregates across unrelated
employers for the annual additions limit, or that refuses to aggregate for the deferral limit, has
them backwards.

</div>

<div class="callout trap">

**Catch-ups are outside the annual additions limit.** This is why a 50-year-old can exceed the
IRC § 415(c) dollar limit by the catch-up amount without any failure. It is also why a question
that adds the catch-up into the annual additions test and reports a violation is testing whether
you know the exclusion.

</div>

<div class="callout trap">

**The compensation cap applies before the formula, not after the result.** A plan formula of ten
percent of compensation gives a participant earning half a million dollars ten percent of the
capped figure, not ten percent of actual pay cut back afterwards. The difference matters when a
second contribution has to be layered on top.

</div>

<div class="callout trap">

**The Roth catch-up threshold looks backwards, and only at one employer.** It is the preceding
calendar year's IRC § 3121(a) wages from the employer sponsoring the plan. Self-employment earnings
are not wages, so a partner with no W-2 from the plan sponsor is outside the rule however large the
earnings, and an employee in a first year with an employer has no prior-year wages from that
employer to measure.

</div>

## How this has changed

The age 60 to 63 "super catch-up" at IRC § 414(v)(2)(E) came from the SECURE 2.0 Act, Division T of
Pub. L. 117-328, enacted 29 December 2022, and first applied for taxable years beginning after
31 December 2024. It is a higher catch-up for exactly four ages and reverts to the ordinary catch-up
at 64.

The Roth catch-up requirement at IRC § 414(v)(7) came from the same Act and was originally to apply
from 2024. Its effective date was administratively deferred, and for 2026 it is live at the indexed wage
threshold set out above. The drafting error in SECURE 2.0 that appeared to delete the
catch-up provision altogether was resolved administratively rather than by amendment.

Pension-linked emergency savings accounts at IRC § 402A(e) are also a SECURE 2.0 creation, available
for plan years beginning after 31 December 2023. They sit inside a defined contribution plan, are
funded with Roth contributions, and are capped well below the ordinary deferral limit.

The compensation cap has moved substantially in recent years, and the annual additions limit with
it. Any worked example carried forward from a prior
year's material will be wrong on both, which matters because the two interact in every profit-sharing
computation.

## Exam focus

The deferral limit against the annual additions limit is the whole topic. Know which one aggregates
across employers, know that catch-ups are outside the annual additions test, and know that the
compensation cap is applied inside the formula.

Know the 2026 numbers: the deferral limit, the annual additions limit, the ordinary catch-up, the
SIMPLE catch-up, the compensation cap and the IRA limit. Know that the highly compensated employee
threshold did not move for 2026 while the key employee threshold did.

Know the excess deferral timetable — allocate by 1 March, distribute by 15 April — and the
consequence of missing it. Know that the employer deduction ceiling for a profit-sharing plan is
25 percent of covered compensation and that an excess contribution draws the IRC § 4972 excise tax.

## Check yourself

**1.** A participant aged 52 defers $24,500 and her employer contributes a $15,000 profit share.
She also makes an $8,000 catch-up. Her compensation is $200,000. Is the IRC § 415(c) limit breached?

*Answer:* No. Annual additions are $24,500 plus $15,000, or $39,500, against a limit of the lesser
of $72,000 or 100 percent of compensation. The $8,000 catch-up is excluded from the annual additions
computation by IRC § 414(v), so it does not enter the test at all. Adding it in to reach $47,500
would still be under the limit here, but the principle is what the question is testing.

**2.** A partner in a law firm has self-employment earnings of $600,000 and no W-2 wages. She is 56
and wants to make a catch-up contribution to the firm's 401(k) on a pre-tax basis in 2026. May she?

*Answer:* Yes. IRC § 414(v)(7)(A) applies only where the participant's IRC § 3121(a) wages from the
sponsoring employer for the preceding calendar year exceed the threshold. Self-employment earnings
are not wages under IRC § 3121(a), so a partner with no W-2 from the firm has no prior-year wages to
measure and the Roth requirement does not reach her, however large her earnings.

**3.** An employer with a profit-sharing plan pays $1,200,000 of compensation to plan participants
and contributes $340,000 for the year. What is the consequence?

*Answer:* The IRC § 404(a)(3)(A)(i) ceiling is 25 percent of $1,200,000, or $300,000, so $40,000 is
nondeductible this year. It carries over and is deductible in later years subject to the same
ceiling, and meanwhile the employer owes the IRC § 4972 excise tax of 10 percent of the
nondeductible amount, determined as of the close of each taxable year it remains.

**4.** An employee defers $12,000 into a SIMPLE IRA at one employer and $14,000 into a 401(k) at
another unrelated employer. She is 45. Is there a problem?

*Answer:* Yes. IRC § 402(g) aggregates elective deferrals across all plans and all employers, and
$26,000 exceeds the $24,500 limit by $1,500. That the SIMPLE has a lower plan-level limit of
$17,000 is irrelevant to the aggregate test — she was inside each plan's own limit and outside her
own. She must allocate the excess by 1 March and have it distributed by 15 April.

**5.** A calendar-year employer wants to make a profit-sharing contribution for 2026 but has no cash
until spring 2027. It extends its return to 15 September 2027 and contributes on 1 September 2027.
Is the contribution deductible for 2026?

*Answer:* Yes. IRC § 404(a)(6) deems a payment made on the last day of the preceding taxable year if
it is on account of that year and made no later than the time prescribed for filing the return
including extensions. A timely extension moves that date to 15 September 2027, and the 1 September
payment is inside it. The employer must be able to show the contribution was on account of 2026.
