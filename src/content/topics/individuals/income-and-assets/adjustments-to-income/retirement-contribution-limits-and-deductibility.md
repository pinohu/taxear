---
title: "Retirement contribution limits and deductibility"
code: "1.2.4.b"
part: 1
domain: "Income and Assets"
section: "Adjustments to Income"
description: "Four limits operate at once and only one is the headline figure. The compensation test binds first, and the IRA deadline is the one that ignores an extension."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 219", title: "Retirement savings", url: "https://www.law.cornell.edu/uscode/text/26/219" }
  - { type: IRC, ref: "§ 401", title: "Qualified pension, profit-sharing, and stock bonus plans", url: "https://www.law.cornell.edu/uscode/text/26/401" }
  - { type: IRC, ref: "§ 402", title: "Taxability of beneficiary of employees' trust", url: "https://www.law.cornell.edu/uscode/text/26/402" }
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 414", title: "Definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/414" }
  - { type: IRC, ref: "§ 415", title: "Limitations on benefits and contribution under qualified plans", url: "https://www.law.cornell.edu/uscode/text/26/415" }
  - { type: Notice, ref: "2025-67", title: "2026 amounts relating to retirement plans and IRAs", url: "https://www.irs.gov/pub/irs-drop/n-25-67.pdf" }
forms: []
related: ["1.2.2.a", "1.2.2.d", "1.2.4.a", "1.2.4.e", "1.2.2.b", "1.2.4.c", "1.2.4.d", "1.3.2.h", "1.5.1.e"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 219(b)(1) compensation test and § 219(f)(3) timing rule, the § 219(g) active participant phase-out, the § 402(g)(1) elective deferral limit and the § 414(v) catch-up amounts including the age 60 to 63 tier and the § 414(v)(7) Roth catch-up wage threshold, the § 415(c) annual addition limit, and the § 408(p) SIMPLE and § 408(k) SEP figures, all as adjusted for 2026 by Notice 2025-67." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the order the IRA limits bind, glossary marks, and two typed scenarios." }
diagram:
  archetype: "decision"
  caption: "The order an IRA deduction is tested, before the dollar limit even matters"
  tests:
    - { test: "Compensation", result: "Deduction capped at compensation includible in gross income for the year", outcome: "pass" }
    - { test: "Dollar limit", result: "Then capped at the statutory dollar amount, plus catch-up if 50 or over", outcome: "pass" }
    - { test: "Active participant phase-out", result: "Then reduced proportionally if the taxpayer or spouse was an active participant in an employer plan", outcome: "pass" }
---

<div class="plain-terms">
Saving for retirement runs into more than one limit at the same time, and people often mix them up. One
limit caps how much you can put into your own paycheck deferral, across every job you hold in a year. A
separate, larger limit caps everything that lands in one workplace account, including money your employer
puts in. A third limit applies only to an IRA, and it can never be more than what you actually earned
that year. This page shows which limit binds in a given case, and why hitting one does not mean you have
hit them all.
</div>

Four limits operate on the same taxpayer at once, and confusing them is the characteristic error. The
**elective deferral** limit is per person across all plans. The **annual addition** limit is per employer
and counts everything that lands in the account. The **IRA** limit is separate again and is capped by
compensation. And a **compensation cap** limits the pay any plan may take into account. Only the first is
the figure people quote.

## The rule

**The IRA deduction is capped by earnings, not just by the dollar figure.** The deduction may not exceed
the lesser of the deductible amount or the **compensation includible in the individual's gross income**
for the year (IRC § 219(b)(1)(A), (B)). A taxpayer with 3,000 dollars of earnings may contribute 3,000
dollars, whatever the annual limit says.

**And the deadline ignores extensions.** A contribution made on account of a taxable year is deemed made
on the last day of that year if it is made not later than the time prescribed by law for filing the return
for that year — **not including extensions** (IRC § 219(f)(3)). This is the one retirement deadline that
an extension does not move.

**Active participation shrinks the deduction, not the contribution.** Where the individual or their spouse
is an active participant in an employer plan for any part of a plan year ending with or within the taxable
year, the dollar limitations are reduced proportionately across a phase-out range (IRC § 219(g)(1), (2)).
Note what triggers it: any part of a plan year, so a single month of coverage counts for the whole year.

**Employer SEP contributions are outside § 219 entirely.** The section does not apply to an employer
contribution to a simplified employee pension (IRC § 219(b)(2)), so such a contribution neither consumes
nor is measured by the individual's IRA limit.

**Elective deferrals are limited per person.** Section 402(g)(1) caps the exclusion for elective deferrals
for the individual's taxable year across every plan they participate in — the limit belongs to the person,
not to the employer, which is why two jobs in one year can produce an excess that neither payroll system
sees.

**Catch-up contributions come in three tiers now.** The ordinary age 50 amount under § 414(v)(2)(B), a
higher amount for individuals attaining age **60, 61, 62 or 63** during the year under § 414(v)(2)(E), and
separate, smaller figures throughout for SIMPLE arrangements.

**And above a wage threshold the catch-up must be Roth.** Section 414(v)(7)(A) requires catch-up
contributions to an applicable employer plan — other than a plan described in § 408(k) or (p) — to be
designated Roth contributions where the individual's wages from the employer for the **preceding** calendar
year exceeded the threshold.

**The annual addition limit is per employer and counts everything.** Contributions and other additions may
not exceed the lesser of the dollar figure or 100 percent of the participant's compensation (IRC
§ 415(c)(1)), an annual addition being the sum of employer contributions, employee contributions and
forfeitures (§ 415(c)(2)).

**A compensation cap sits over all of it.** Only a limited amount of annual compensation may be taken into
account under §§ 401(a)(17), 404(l), 408(k)(3)(C) and 408(k)(6)(D)(ii) — which caps a percentage-based
employer contribution regardless of actual pay.

## Current figures

| Item | 2026 |
| --- | --- |
| IRA deduction limit | {fig:ira.deduction_limit} |
| Compensation test | {fig:contrib.ira_compensation_test} |
| Contribution deadline | {fig:contrib.ira_timing} |
| Active participant phase-out | {fig:ira.active_participant_phaseout} |
| Spousal IRA | {fig:ira.spousal_limit} |
| Employer SEP contributions | {fig:contrib.sep_not_under_219} |
| Elective deferral limit | {fig:contrib.elective_deferral_limit} |
| Catch-up at 50 | {fig:contrib.catchup_50} |
| Catch-up at 60 to 63 | {fig:contrib.catchup_60_63} |
| Roth catch-up threshold | {fig:contrib.roth_catchup_threshold} |
| Annual addition limit | {fig:contrib.annual_addition} |
| SIMPLE limits | {fig:contrib.simple_limit} |
| Compensation cap | {fig:contrib.compensation_cap} |
| SEP coverage threshold | {fig:contrib.sep_threshold} |

## How it works in practice

Take the limits in the order they bind. For an IRA, compensation first, then the dollar limit, then the
§ 219(g) phase-out if anyone in the couple is an active participant. A non-working spouse is reached
through the spousal rule, which borrows the working spouse's compensation but not their limit.

For an employer plan, the deferral limit and the annual addition limit answer different questions. A
participant who defers the maximum has not exhausted the annual addition limit — employer matching,
profit-sharing and forfeitures all count toward the larger figure, and the two ceilings can both be live
in the same account. Catch-up contributions sit outside the annual addition limit, which is why a
participant aged 50 or over can exceed it by the catch-up amount.

Watch two things in 2026 specifically. The catch-up tier for ages 60 to 63 is measured by the age
**attained during the year**, so it appears and disappears without the participant doing anything. And the
Roth catch-up requirement in § 414(v)(7)(A) looks at the **preceding** year's wages from that employer, so
a high earner in 2025 loses the pre-tax catch-up in 2026 even if 2026 pay is lower.

Finally, remember that the § 219(f)(3) deadline is unique. Every other funding decision on this page can
be made up to the extended due date or later; the IRA contribution cannot.

<div class="scenario" data-type="timing">
<h3>Scenario 1 — the extension that did not help</h3>

Omar files Form 4868 and extends his 2026 return to 15 October 2027. On 1 July 2027 he contributes to a
traditional IRA and designates it for 2026.

It does not count for 2026. IRC § 219(f)(3) deems a contribution made on the last day of the preceding
taxable year only if it is made by the time prescribed for filing that year's return **not including
extensions** — 15 April 2027 here. The July contribution is a 2027 contribution. Every other retirement
funding deadline he is used to, including his SEP contribution as the owner of a
{gloss:sole-proprietorship}, does move with the extension; this one does not.
</div>

<div class="scenario" data-type="interaction">
<h3>Scenario 2 — two employers, one limit</h3>

Priti works for two unrelated companies during 2026 and defers the full annual amount into each plan.
Neither payroll system knows about the other.

She has an excess deferral. The IRC § 402(g)(1) limit applies to the **individual** for their taxable year
across all plans, not to each plan separately, so half of what she deferred is over the limit. Each
employer's plan is within the § 415(c) annual addition limit on its own, so neither plan has failed —
which is precisely why nothing flags it. The correction runs through the notification and distribution
mechanism in the § 402(g) regulations, and it is on her to start it.
</div>

<div class="scenario" data-type="boundary">
<h3>Scenario 3 — the deferral maximum that was not the maximum</h3>

Quentin, aged 58, earns 200,000 dollars and defers the full elective amount plus the age 50 catch-up. His
employer matches 6 percent of pay and makes a 3 percent profit-sharing contribution.

He has not reached the annual addition limit. IRC § 415(c)(2) counts employer contributions, employee
contributions and forfeitures together, and his deferral plus 18,000 dollars of employer money is still
below the 2026 figure — so the employer contributions are permitted. Separately, the catch-up amount is
not an annual addition at all, so it sits above the § 415(c) ceiling rather than inside it. Two limits, and
the one he had in mind was not the binding one.
</div>

<div class="scenario" data-type="baseline">
<h3>Scenario 4 — the ordinary case, working as designed</h3>

Sana, 34, earns 70,000 dollars at one job with a 401(k), defers a modest amount well under the annual
dollar limit, and her employer matches 4 percent of pay. She has no other job and no IRA contribution this
year.

Nothing here is close to any line. Her deferral is comfortably under the § 402(g)(1) limit, the employer
match is ordinary and comfortably inside the § 415(c) annual addition limit, and there is no catch-up and
no second job to create the kind of conflict the other scenarios on this page turn on. This is what saving
for retirement looks like on the vast majority of returns — the harder cases here are the exceptions, not
the rule.
</div>

<div class="scenario" data-type="fails">
<h3>Scenario 5 — married, separately, and boxed in</h3>

Wen and her husband file {gloss:married-filing-separately} for the year, and Wen is an active participant
in her employer's 401(k). She earns 95,000 dollars and wants to deduct a traditional IRA contribution.

She gets nothing. The § 219(g) phase-out range for a married active participant filing separately runs
from zero to a small, unindexed figure, and 95,000 dollars is well above the top of it. Filing jointly
would not have changed her own active-participant status, but the joint range for an active participant
is far higher — high enough that her 95,000 dollars would sit entirely below it, preserving her full
deduction. It is the separate-filing range itself, narrow and never adjusted, that boxes her in, not her
income and not her active-participant status by itself.
</div>

<div class="callout trap">

**The IRA deadline ignores extensions.** IRC § 219(f)(3) says "not including extensions thereof", and it
is the only retirement deadline on this page that behaves that way.

**Active participant status is tested over any part of a plan year.** One month of coverage engages
§ 219(g) for the whole taxable year.

**The deferral limit is the person's, not the plan's.** Two jobs produce an excess that neither plan can
detect.

**Catch-ups are outside the annual addition limit**, so exhausting § 415(c) does not prevent them.
</div>

## How this has changed

**Catch-up contributions acquired an age band and a Roth requirement.** Section 414(v)(2)(E) gives a
higher amount to individuals attaining age 60, 61, 62 or 63 during the year — a four-year window that
opens and closes automatically — and § 414(v)(7)(A) requires the catch-up to be a designated Roth
contribution where the previous year's wages from that employer exceeded the threshold, except in a
§ 408(k) or (p) arrangement. Neither existed before SECURE 2.0, and material predating it describes a
single catch-up figure available pre-tax to everyone.

**The 2026 adjustments moved most figures but not all of them.** Notice 2025-67 increased the elective
deferral limit, the age 50 catch-up, the annual addition limit, the SIMPLE limits, the compensation cap
and the SEP threshold, while the age 60 to 63 catch-up amounts — for both ordinary plans and SIMPLE
arrangements — **remained unchanged**. A table that assumes everything rose will be wrong in two places.

**The statutory text is unusable on its own, more so here than almost anywhere.** Sections 415(c)(1)(A)
and 415(b)(1)(A) still carry the figures enacted decades ago, as does § 402(g)(1). Every operative number
on this topic comes from the annual Notice, and the Code supplies only the mechanism and the rounding
rules.

**The § 219(g) phase-out ranges are indexed and the two spouses are treated differently.** Where one
spouse is an active participant and the other is not, separate and much higher ranges apply to the
non-participant — a distinction that survives every recent amendment and is still commonly missed.

## Exam focus

Expect the **compensation test** with a low-earning taxpayer, where the answer is their earnings rather
than the dollar limit.

Expect the **contribution deadline** with an extended return in the facts. The extension does not help.

Expect **two employers** and the deferral limit, or one employer and the annual addition limit, testing
whether you know which is which.

Expect a **catch-up** question turning on age attained during the year, or on the previous year's wages
for the Roth requirement.

## Check yourself

**1.** A taxpayer with 4,000 dollars of wages and no other earnings wants to contribute the full IRA
amount. May they?

*Answer: No. IRC § 219(b)(1)(B) caps the deduction at the compensation includible in gross income, so
4,000 dollars is the maximum regardless of the annual dollar limit.*

**2.** A taxpayer extends their return to October. Until when may an IRA contribution be made for the
prior year?

*Answer: The unextended due date. IRC § 219(f)(3) deems a contribution made on the last day of the
preceding year only if made by the time prescribed for filing that year's return, not including
extensions.*

**3.** An employee defers the maximum into a 401(k). May the employer still make a matching contribution?

*Answer: Yes, up to the IRC § 415(c) annual addition limit, which counts employer contributions, employee
contributions and forfeitures together and is a separate and larger ceiling than the § 402(g) deferral
limit.*

**4.** An individual turns 64 during 2026. Which catch-up figure applies?

*Answer: The ordinary age 50 amount. IRC § 414(v)(2)(E) applies only to an individual who attains age 60,
61, 62 or 63 during the taxable year, so the higher tier is unavailable from the year age 64 is reached.*

**5.** Does an employer's SEP contribution reduce the amount an individual may contribute to their own
IRA?

*Answer: No. IRC § 219(b)(2) provides that the section does not apply to an employer contribution to a
simplified employee pension, so it neither consumes nor is limited by the individual's own IRA limit —
though active participant status under § 219(g) may still reduce the deduction.*

**6. Lars, single, was an active participant in his employer's plan for January 2026 only and then left the job. His modified adjusted gross income is far above the active participant phase-out range. His traditional IRA deduction for 2026 is:**
(A) The full amount, because he was covered for only one month (B) Nothing, because active participation for any part of the plan year engages the § 219(g) phase-out and his income is above the range (C) The full amount reduced by one twelfth (D) Nothing, because an active participant may not contribute to an IRA at all
*Answer: B. IRC § 219(g)(1), (2) applies the phase-out where the individual was an active participant for any part of a plan year ending with or within the taxable year — a single month counts for the whole year, and above the range the deduction is gone; the contribution itself remains permitted.*

**7. Meret, aged 52, had wages of $190,000 from her employer in 2025, above the Roth catch-up wage threshold, and expects $120,000 in 2026, below it. Her 2026 catch-up contribution to that employer's 401(k) plan must be:**
(A) Pre-tax, because her 2026 wages are below the threshold (B) A designated Roth contribution, because her 2025 wages from that employer exceeded the threshold (C) Forgone, because the catch-up is unavailable above the threshold (D) Split equally between pre-tax and Roth
*Answer: B. IRC § 414(v)(7)(A) requires catch-up contributions to an applicable employer plan to be designated Roth contributions where the individual's wages from the employer for the preceding calendar year exceeded the threshold — the test looks at 2025 pay, not 2026.*

**8. Yusra works for two unrelated employers in 2026 and defers $15,000 into each plan, so that her total deferrals exceed the annual elective deferral limit. Which is correct?**
(A) There is no excess, because each plan is under the limit (B) She has an excess deferral, because the § 402(g)(1) limit applies to the individual across all plans (C) There is an excess only if the two employers are related (D) Each plan has failed the § 415(c) annual addition limit
*Answer: B. IRC § 402(g)(1) caps the exclusion for elective deferrals for the individual's taxable year across every plan they participate in; each plan is within § 415(c) on its own, which is why neither payroll flags the excess.*
