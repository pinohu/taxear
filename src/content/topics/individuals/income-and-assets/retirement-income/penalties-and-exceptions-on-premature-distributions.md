---
title: "Penalties and exceptions on premature distributions"
code: "1.2.2.e"
part: 1
domain: "Income and Assets"
section: "Retirement income"
description: "The additional tax reaches only the includible portion, and the exceptions divide into three groups — those for every plan, those barred to IRAs, and those only IRAs get."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 72", title: "Annuities; certain proceeds of endowment and life insurance contracts", url: "https://www.law.cornell.edu/uscode/text/26/72" }
  - { type: IRC, ref: "§ 402", title: "Taxability of beneficiary of employees' trust", url: "https://www.law.cornell.edu/uscode/text/26/402" }
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 408A", title: "Roth IRAs", url: "https://www.law.cornell.edu/uscode/text/26/408A" }
forms: []
related: ["1.2.2.b", "1.2.2.c", "1.2.2.d", "1.2.2.a", "1.2.2.f", "1.2.2.g", "1.2.2.h", "1.2.2.i", "1.2.2.k", "1.3.1.a"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 72(t)(1) charge on the includible portion only, the nine general exceptions in § 72(t)(2)(A), the two withheld from IRAs by § 72(t)(3)(A), the three drafted for IRAs alone, the newer capped exceptions, and the § 72(t)(4) recapture." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, a decision diagram of the general/IRA-only/plan-only exception paths, and two typed scenarios (boundary, fails) alongside the three existing ones." }
diagram:
  archetype: "decision"
  caption: "Does an exception to the 10% additional tax apply?"
  tests:
    - { test: "Age 59½ or older when distributed?", result: "No additional tax — done", outcome: "pass" }
    - { test: "From a plan, after separation from service at 55+?", result: "Exception applies to the plan only — lost if rolled to an IRA first", outcome: "pass" }
    - { test: "From an IRA, for education, first home, or unemployed health insurance?", result: "Exception applies to the IRA only — not a workplace plan", outcome: "pass" }
    - { test: "Death, disability, medical floor, SEPP, QDRO, levy, or a capped newer exception?", result: "Exception applies if its own conditions are met", outcome: "pass" }
    - { test: "None of the above fit the facts?", result: "10% additional tax on the includible portion", outcome: "fail" }
---

<div class="plain-terms">
Take money out of a retirement account too soon, and you often owe an extra ten percent tax on top of
the usual tax. This hits anyone who pulls money from an IRA or a work plan before the usual age. It
does not hit money that was never taxed to begin with, like your own Roth deposits coming back out. It
sorts out which early withdrawals dodge that extra ten percent, and which do not. Here is the twist:
some ways out work only for an IRA, and a few work only for a work plan, never both. Picking the wrong
account can turn a free withdrawal into a costly one.
</div>

The additional tax on an early distribution is 10 percent **of the portion which is includible in
gross income** (IRC § 72(t)(1)). That qualification does more work than the rate: money that was never
deductible comes back without tax and therefore without the additional tax, so a great many
"premature" withdrawals carry no penalty at all. Beyond that, the exceptions fall into three groups —
those available to every plan, those expressly withheld from IRAs, and those written for IRAs alone.

## The rule

**The charge.** Where a taxpayer receives any amount from a qualified retirement plan as defined in
§ 4974(c), the tax for the year of receipt is increased by 10 percent of the portion of that amount
**includible in gross income** (IRC § 72(t)(1)).

**Nine general exceptions.** Paragraph (1) does not apply to distributions made on or after age 59½;
to a beneficiary or the employee's estate on or after death; attributable to disability within
§ 72(m)(7); part of a series of substantially equal periodic payments made at least annually over a
life, life expectancy or joint lives; made to an employee **after separation from service after
attainment of age 55**; § 404(k) dividends; made on account of a § 6331 {gloss:levy}; certain federal
phased retirement annuities; and attributable to withdrawal of net income accompanying a § 408(d)(4)
corrective distribution (IRC § 72(t)(2)(A)(i)–(ix)).

**Two of those are withheld from IRAs.** Subparagraphs (A)(v) and (C) of paragraph (2) **do not apply
to distributions from an individual retirement plan** (IRC § 72(t)(3)(A)) — so neither the
separation-after-55 exception nor the qualified domestic relations order exception is available for an
IRA. This asymmetry is the single most common error in the topic.

**Three exceptions run the other way.** Distributions **from an individual retirement plan** are
excepted for health insurance premiums of an individual who has received unemployment compensation for
12 consecutive weeks following separation (IRC § 72(t)(2)(D)(i)), for higher education expenses (IRC
§ 72(t)(2)(E)), and for a first home purchase (IRC § 72(t)(2)(F)). Each is drafted to reach individual
retirement plans, so an employee cannot use them against a workplace plan.

**Newer exceptions come with caps.** Qualified birth or adoption distributions are limited per birth or
adoption; an emergency personal expense distribution is limited to the lesser of a small figure or the
interest above it, and to one per calendar year; a distribution to a domestic abuse victim is limited to
the lesser of a stated figure or half the nonforfeitable accrued benefit; and a terminal illness
exception applies where a physician certifies against an extended prognosis period.

**Two structural limits on the periodic payments exception.** For a § 401(a) trust or a
§ 72(e)(5)(D)(ii) contract, the series must **begin after separation from service** (IRC § 72(t)(3)(B))
— there is no such requirement for an IRA. And modifying the series, other than by death, disability or
a qualifying distribution, before the close of the five-year period beginning with the first payment
and after age 59½, or at any time before 59½, increases the tax for the year of modification by the
amount that would have applied **plus interest for the deferral period** (IRC § 72(t)(4)(A)).

**Two other exceptions worth keeping distinct.** The medical expense exception reaches distributions to
the extent they do not exceed the § 213 deduction amount, **determined without regard to whether the
employee itemizes** (IRC § 72(t)(2)(B)). And the QDRO exception covers any distribution to an alternate
payee under a § 414(p)(1) order (IRC § 72(t)(2)(C)) — for a plan, not an IRA.

## Current figures

| Item | 2026 |
| --- | --- |
| The charge | {fig:ira.early_distribution_tax} |
| General exceptions | {fig:earlydist.general_exceptions} |
| Not available for IRAs | {fig:earlydist.not_for_iras} |
| Available only for IRAs | {fig:earlydist.ira_only} |
| Newer capped exceptions | {fig:earlydist.newer_exceptions} |
| Periodic payments from a qualified plan | {fig:earlydist.qualified_plan_sepp} |
| Recapture on modification | {fig:earlydist.sepp_recapture} |
| First-time homebuyer limit | {fig:ira.first_time_homebuyer} |

## How it works in practice

Compute the includible portion first, because it may be nil. A Roth distribution reaches contributions
before earnings under § 408A(d)(4)(B), and contributions were never deducted — so a client who
withdraws less than their cumulative Roth contributions has no income and no additional tax, whatever
their age. The same logic reaches a traditional IRA to the extent of {gloss:basis}, though there it can never
be the whole distribution because § 408(d)(2) makes the recovery pro rata.

Then identify the plan type before looking for an exception, not after. The two asymmetries decide
most real cases: a 56-year-old who separates from service can take penalty-free distributions **from
the employer plan** but not from an IRA — so rolling the plan balance into an IRA first destroys the
exception. And a client wanting to use a retirement account for tuition or a first home must be taking
it from an IRA, not from a 401(k).

Where a client is committed to a series of substantially equal periodic payments, treat the § 72(t)(4)
recapture as the governing constraint. The series must run for the longer of five years or until age
59½, and modifying it early reimposes the tax for every year of the series with interest. That is a
long commitment for someone in their forties, and it is worth stating in years before the client
starts.

Finally, keep the medical exception's own quirk in mind: it is measured by the § 213 deduction amount
computed **without regard to whether the taxpayer itemizes**, so a client taking the standard deduction
still gets the exception to the extent their medical expenses exceed the § 213 floor.

<div class="scenario" data-type="interaction">
<h3>The rollover that destroyed an exception</h3>

Marcus separates from his employer at 56 and needs $40,000. His adviser suggests a {gloss:rollover} of
the 401(k) to an IRA first, "for better investment options", and then withdrawing.

Taking it from the plan would have been penalty-free. IRC § 72(t)(2)(A)(v) excepts a distribution made
to an employee after separation from service after attainment of age 55, and he meets both limbs.

Taking it from the IRA is not. IRC § 72(t)(3)(A) provides that subparagraphs (A)(v) and (C) of
paragraph (2) **do not apply to distributions from an individual retirement plan**. The rollover is
irreversible for this purpose, so the sequence costs him 10 percent of the includible amount. Where a
client separating after 55 may need funds, the withdrawal should come first and the rollover after.
</div>

<div class="scenario" data-type="baseline">
<h3>No penalty, and no exception needed</h3>

Leila is 41 and withdraws $22,000 from her Roth IRA, into which she has contributed $65,000 over the
years. She assumes she owes the additional tax and asks which exception might help.

She needs none. IRC § 408A(d)(4)(B) treats the distribution as made from contributions first, and her
$22,000 is well within her $65,000 of contributions, which were never deducted. Nothing is includible
in gross income — and IRC § 72(t)(1) increases the tax by a percentage **of the portion includible in
gross income**, so there is nothing for it to apply to.

The distinction matters for advice as well as arithmetic. She is not relying on an exception that
might be examined; there is simply no tax base. Had she withdrawn $70,000, the $5,000 above her
contributions would be earnings — includible, and exposed to the additional tax unless an exception
applied.
</div>

<div class="scenario" data-type="boundary">
<h3>Three months short of the birthday</h3>

Two colleagues are laid off in the same round on 1 June 2026. One turned 55 on 15 March 2026; the
other will not turn 55 until 15 September 2026. Each takes a full distribution from the plan in July
2026.

The March colleague separated from service **after** attaining age 55, so IRC § 72(t)(2)(A)(v) excepts
the July distribution outright. The September colleague separated in June, three months before the
actual birthday — separation did not occur after attainment of age 55, so the exception does not apply
to his July distribution even though it falls in the same calendar year he turns 55. The statute reads
on the birthday, not the year.
</div>

<div class="scenario" data-type="fails">
<h3>The second emergency in one year</h3>

A taxpayer takes a $900 emergency personal expense distribution from her IRA in March to cover a car
repair. In October the same year, a plumbing emergency prompts her to ask for another one.

The first distribution fit the exception. The second does not: the emergency personal expense
exception is limited to one distribution per calendar year, regardless of the size of either emergency
or how different they are. October's withdrawal is fully exposed to the additional tax on its
includible portion, and no other exception on these facts reaches it.
</div>

<div class="scenario" data-type="timing">
<h3>Five years, or fifty-nine and a half</h3>

Idris is 48 and starts a series of substantially equal periodic payments from his IRA to bridge to a
later pension. After three years his circumstances change and he takes an extra withdrawal.

The extra withdrawal modifies the series. Under IRC § 72(t)(4)(A)(ii)(II) a modification before the
employee attains age 59½ — other than by reason of death, disability, or a distribution to which
paragraph (10) applies — increases his tax for the year of modification by the amount that would have
been imposed but for the exception, **plus interest for the deferral period**.

So the penalty is not on the extra withdrawal alone: it reaches back across all three years of
payments. The series had to run until the later of five years from the first payment or age 59½, which
for him meant eleven and a half years. That commitment is the point to state before the first payment,
not after the third.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **The tax reaches only the includible portion** (IRC § 72(t)(1)), so returned Roth contributions and
  recovered basis escape it without needing an exception.
- **Separation after 55 does not work for an IRA** (IRC § 72(t)(3)(A)) — and a rollover into an IRA
  destroys it.
- **The QDRO exception does not work for an IRA either**, by the same subparagraph.
- **Higher education, first home and unemployed health insurance are IRA-only** (IRC § 72(t)(2)(D),
  (E), (F)) and cannot be used against a workplace plan.
- **Separation after 55 means after attaining 55**, not in the year of turning 55 by any other route.
- **Periodic payments from a qualified plan must begin after separation** (IRC § 72(t)(3)(B)); an IRA
  series has no such requirement.
- **Modification reaches back over the whole series** with interest (IRC § 72(t)(4)(A)), not just the
  offending payment.
- **The series must run the longer of five years or to age 59½** — for a taxpayer in their forties that
  is far more than five years.
- **The medical exception ignores whether the taxpayer itemizes** (IRC § 72(t)(2)(B)).
- **The newer exceptions are capped and some are once-a-year**, so they rarely solve a large need.
- **An exception removes the additional tax, not the income tax.** The distribution remains includible.

</div>

## How this has changed

The core of § 72(t) is old and unchanged — the rate, the nine general exceptions, the two IRA
carve-outs and the recapture rule have all been in place for decades. What has grown is the list of
special exceptions appended to paragraph (2), and that growth changes how the section should be read.

The additions share a shape: each is capped, several are limited to one distribution a year, and
several are defined by reference to circumstances the plan administrator must be satisfied about. That
makes them narrower in practice than their headings suggest — a birth or adoption, an emergency
expense, domestic abuse, terminal illness. A client hearing that "there is an exception for
emergencies" will be disappointed by the ceiling.

The practical consequence for research is that the older subparagraphs are stable and the newer ones
are not. Material written before the recent additions is reliable on the general exceptions and simply
silent on the rest, which is a much better failure mode than being wrong. The risk runs the other way:
a source that lists the exceptions **as a closed set** is now incomplete, and there is no way to tell
from the text whether it was written before or after an addition.

## Exam focus

Know the two asymmetries cold — separation after 55 and QDROs are unavailable for IRAs; higher
education, first home and unemployed health insurance are available **only** for IRAs. Expect a fact
pattern engineered around one of them, usually a rollover.

Know that the tax applies to the includible portion only, and be able to explain why a Roth
contribution withdrawal escapes without an exception.

Know the substantially equal periodic payments rules as a pair: the qualified plan series must begin
after separation, and any series must run the longer of five years or to age 59½ on pain of recapture
with interest.

Know that an exception removes the additional tax and not the income tax.

## Check yourself

**1.** A taxpayer separates from service at 57 and takes a distribution from the former employer's
401(k). Is the additional tax due?

*Answer: no. IRC § 72(t)(2)(A)(v) excepts a distribution made to an employee after separation from
service after attainment of age 55. Had the balance first been rolled into an IRA, the exception would
have been lost — IRC § 72(t)(3)(A) provides that § 72(t)(2)(A)(v) does not apply to distributions from
an individual retirement plan.*

**2.** A 35-year-old withdraws $12,000 from a Roth IRA holding $50,000 of contributions and $30,000 of
earnings. What additional tax applies?

*Answer: none. IRC § 408A(d)(4)(B) treats the distribution as coming from contributions first, so the
$12,000 is a return of amounts never deducted and nothing is includible in gross income. IRC § 72(t)(1)
increases the tax by 10 percent of the portion includible in gross income, and there is none.*

**3.** A taxpayer wants to use retirement savings for a child's college tuition without penalty. Which
account can do it?

*Answer: an individual retirement plan. IRC § 72(t)(2)(E) excepts distributions from an individual
retirement plan to the extent they do not exceed qualified higher education expenses. It does not reach
a workplace plan, so a 401(k) distribution for the same purpose would bear the additional tax unless
another exception applied.*

**4.** A 50-year-old begins substantially equal periodic payments and stops them after six years, aged
56. What happens?

*Answer: recapture. IRC § 72(t)(4)(A)(ii)(II) applies where the series is modified before the employee
attains age 59½, and stopping the payments is a modification. The tax for the year of modification is
increased by the amount that would have been imposed but for the exception across the whole series,
plus interest for the deferral period. Five years having passed does not help — the series must run to
the later of five years or age 59½.*
