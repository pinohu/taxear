---
title: "Traditional and Roth IRAs compared, and their distributions"
code: "1.2.2.b"
part: 1
domain: "Income and Assets"
section: "Retirement income"
description: "The two accounts differ on when tax is paid, who may contribute, and how a distribution is taxed. The five-year clock is the rule most often stated wrongly."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 72", title: "Annuities; certain proceeds of endowment and life insurance contracts", url: "https://www.law.cornell.edu/uscode/text/26/72" }
  - { type: IRC, ref: "§ 219", title: "Retirement savings", url: "https://www.law.cornell.edu/uscode/text/26/219" }
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 408A", title: "Roth IRAs", url: "https://www.law.cornell.edu/uscode/text/26/408A" }
  - { type: Notice, ref: "2025-67", title: "2026 amounts relating to retirement plans and IRAs", url: "https://www.irs.gov/pub/irs-drop/n-25-67.pdf" }
forms: []
related: ["1.2.2.a", "1.1.1.g", "1.2.2.g", "1.2.2.e", "1.2.2.c", "1.2.2.d", "1.2.2.h", "1.2.2.j", "1.2.2.k"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 408A(d)(2) two-part qualified distribution test with its 5-taxable-year period, the IRC § 408A(d)(4)(B) ordering rules, the IRC § 408A(c)(3) contribution phase-out and the IRC § 408A(c)(4) exemption from lifetime required distributions." }
---

The two accounts differ on three axes: when tax is paid, who may contribute, and how a distribution is
taxed. Only the third produces real difficulty, and within it one rule accounts for most errors — the
five-taxable-year period, which is a **second and independent** condition on a qualified distribution
rather than an alternative to reaching age 59½.

## The rule

**Deduction now or exclusion later.** A contribution to a traditional IRA may be deductible under § 219,
subject to the § 219(g) active-participant phase-out, and distributions are then taxed under § 72 (IRC
§ 408(d)(1)). **No deduction is allowed under § 219 for a contribution to a Roth IRA** (IRC
§ 408A(c)(1)), and a qualified distribution from a Roth IRA is **not includible in gross income** (IRC
§ 408A(d)(1)).

**Who may contribute differs.** The Roth contribution limit is the § 219 maximum computed without regard
to § 219(g), less contributions to all other individual retirement plans (IRC § 408A(c)(2)) — but it is
then **reduced by reference to adjusted gross income** above an applicable dollar amount (IRC
§ 408A(c)(3)(A), (B)). So a traditional contribution is always permitted and the *deduction* phases out;
a Roth **contribution itself** phases out.

**A qualified distribution needs two things, not one.** It must be made on or after the individual
attains age 59½, on or after death, on account of disability within § 72(m)(7), or as a qualified
special purpose distribution (IRC § 408A(d)(2)(A)(i)–(iv)) — **and** it must not fall within the
5-taxable-year period beginning with the first taxable year for which the individual made a contribution
to a Roth IRA (IRC § 408A(d)(2)(B)). Both limbs are required. A distribution at seventy within four
years of the first contribution is not qualified.

**The clock is personal, not per account.** The period begins with the first taxable year for which the
individual — or their spouse, or an employer in the case of a SIMPLE or simplified employee pension —
made a contribution to a Roth IRA established for that individual (IRC § 408A(d)(2)(B)). Opening a
second Roth twenty years later does not restart it.

**The qualified special purpose distribution is the first-time homebuyer one.** It means any
distribution to which § 72(t)(2)(F) applies (IRC § 408A(d)(2)(C)) — a distribution used within 120 days
for qualified acquisition costs of a principal residence of the individual, a spouse, or a child,
grandchild or ancestor of either (IRC § 72(t)(8)(A)), subject to a lifetime dollar limitation (IRC
§ 72(t)(8)(B)).

**A non-qualified Roth distribution is not automatically taxable.** Ordering rules treat it as made
first from contributions to the extent of aggregate contributions — regular contributions before
qualified rollover contributions, and those first-in first-out (IRC § 408A(d)(4)(B)(i), (ii)). Because
contributions were never deducted, that part comes out tax-free; only earnings, reached last, are
includible.

**Lifetime required distributions apply to one and not the other.** Notwithstanding § 408(a)(6) and
(b)(3), § 401(a)(9)(A) and the incidental death benefit requirements **do not apply to a Roth IRA** (IRC
§ 408A(c)(4)(A), (B)) — before death only. A traditional IRA is subject to them.

**The early distribution tax sits underneath both.** An amount received from a qualified retirement plan
increases the tax by a percentage of the portion **includible in gross income** (IRC § 72(t)(1)),
subject to the § 72(t)(2) exceptions. Because a Roth's returned contributions are not includible, they
attract no additional tax even when the distribution is not qualified.

## Current figures

| Item | 2026 |
| --- | --- |
| Roth contribution phase-out | {fig:roth.contribution_phaseout} |
| Traditional deduction phase-out | {fig:ira.active_participant_phaseout} |
| Contribution limit | {fig:ira.deduction_limit} |
| Qualified distribution | {fig:roth.qualified_distribution} |
| Ordering of a Roth distribution | {fig:roth.ordering} |
| First-time homebuyer distribution | {fig:ira.first_time_homebuyer} |
| Additional tax on early distributions | {fig:ira.early_distribution_tax} |
| Lifetime required distributions | {fig:roth.no_lifetime_rmd} |

## How it works in practice

Establish the five-year clock at intake and record it, because it is a fact about the client rather
than about any account and no custodian statement will show it reliably. The earliest Roth contribution
year is the whole of it. For a client who has held a Roth for decades the point is trivial; for one who
opened a first Roth recently it decides the answer, and it decides it independently of their age.

Then read a non-qualified distribution through the ordering rules rather than treating it as taxable.
A client who withdraws less than their cumulative contributions before the clock has run has withdrawn
contributions, and contributions were taxed on the way in — so nothing is includible, and the § 72(t)
additional tax, which applies only to the includible portion, does not bite either. Only when
withdrawals exceed cumulative contributions do earnings come out.

For the contribution decision, keep the two phase-outs apart. A high-income client who is not an active
participant may deduct a full traditional contribution while being barred from any Roth contribution —
the tests are different in kind, not just in amount. And a client above the Roth range can still make a
non-deductible traditional contribution, which is permitted at any income.

Finally, treat the lifetime distribution difference as a planning fact rather than a compliance one. A
traditional IRA forces withdrawals in the owner's lifetime; a Roth does not, which changes what the
account is for.

<div class="scenario">
<h3>Old enough, and still not qualified</h3>

Hélène is 71. She has never had a Roth, and in year one she converts part of a traditional IRA into a
new Roth. In year three she withdraws $20,000, all of it earnings, assuming her age settles the matter.

It does not. IRC § 408A(d)(2) requires **both** limbs: a triggering event and the passing of the
5-taxable-year period beginning with the first taxable year for which she made a contribution to a Roth
IRA. She satisfies § 408A(d)(2)(A)(i) on age, and fails § 408A(d)(2)(B) on time.

So the earnings are includible. Note what is *not* a consequence: at 71 she is well past 59½, so the
§ 72(t) additional tax does not apply — § 72(t)(2)(A)(i) excepts distributions made on or after that
age. Failing the five-year test costs her the exclusion, not the penalty.
</div>

<div class="scenario">
<h3>Taking back what was put in</h3>

Ravi, aged 34, has contributed $48,000 to his Roth over eleven years and the account is now worth
$79,000. He withdraws $18,000 for a car.

Nothing is taxable. The distribution is not qualified — he is under 59½ and none of the other triggering
events applies — but IRC § 408A(d)(4)(B) treats it as made from contributions first, to the extent of
aggregate contributions. His $18,000 comes entirely out of $48,000 of contributions, which were never
deducted.

The additional tax follows the same logic. IRC § 72(t)(1) increases the tax by a percentage of the
portion **includible in gross income**, and none of this is includible, so there is nothing for it to
apply to. Had he withdrawn $55,000, the $7,000 above his contributions would have been earnings —
includible, and exposed to § 72(t) unless an exception applied.
</div>

<div class="scenario">
<h3>Barred from one, allowed the other</h3>

Sofia and Daniel file jointly with adjusted gross income of $265,000. Neither is covered by a plan at
work. They want to save in IRAs.

They may each deduct a full traditional contribution. The § 219(g) phase-out applies only to an active
participant or the spouse of one, and neither is — so their income is irrelevant to the deduction.

Neither may contribute to a Roth at all. IRC § 408A(c)(3) reduces the Roth contribution limit by
reference to adjusted gross income above the applicable dollar amount, and $265,000 is above the top of
the joint range. The two provisions are testing different things: one asks whether a *deduction* is
available, the other whether a *contribution* is.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **The five-year test is a second condition, not an alternative** (IRC § 408A(d)(2)(A) and (B)). Age
  alone never makes a distribution qualified.
- **The clock is per taxpayer, not per account**, and starts with the first taxable year for which any
  Roth contribution was made (IRC § 408A(d)(2)(B)).
- **A spouse's or employer's contribution can start it** (IRC § 408A(d)(2)(B)).
- **Failing the five-year test costs the exclusion, not the penalty.** IRC § 72(t) has its own
  exceptions, including age 59½.
- **A non-qualified Roth distribution is often wholly tax-free**, because IRC § 408A(d)(4)(B) reaches
  contributions first.
- **The additional tax applies only to the includible portion** (IRC § 72(t)(1)), so returned
  contributions escape it.
- **The Roth phase-out limits the contribution; the § 219(g) phase-out limits the deduction.** A
  traditional contribution is always permitted.
- **A married individual filing separately has an unindexed Roth range** starting at zero.
- **Roth IRAs are exempt from lifetime required distributions** (IRC § 408A(c)(4)) — but only before
  death.
- **Conversions have their own ordering position**, after regular contributions and first-in
  first-out (IRC § 408A(d)(4)(B)(ii)).

</div>

## How this has changed

The architecture of § 408A has been stable, and what moves each year is the two sets of income figures —
the § 408A(c)(3) Roth contribution phase-out and the § 219(g) traditional deduction phase-out — both
announced annually. They are different numbers doing different jobs, and material that presents "the IRA
income limit" as a single figure is conflating them.

Two amounts in this topic do not move, which is worth knowing because they are the ones most often
recited from memory. The § 72(t)(8)(B) first-time homebuyer lifetime limit is statutory and has never
been adjusted, so its real value has eroded to the point where it rarely covers a deposit. And the
threshold for a married individual filing separately is expressly not subject to cost-of-living
adjustment, so it stays where it is while every neighbouring figure rises.

The larger change is what the Roth is now used for. The § 408A(c)(4) exemption from lifetime required
distributions, combined with the annually rising traditional deduction phase-out, has moved the Roth
from a savings vehicle toward an estate-planning one for many taxpayers — which makes the conversion
rules, rather than the contribution rules, the ones most often engaged. Nothing in the section changed
to bring that about.

## Exam focus

The reliable question is the two-part qualified distribution test. Expect facts satisfying the age limb
and failing the time limb, or the reverse, and know that both are required.

Know that the five-year period runs from the first taxable year for which **any** Roth contribution was
made by the individual, their spouse, or an employer — not from the opening of the account in question.

Know the ordering rules well enough to say that a non-qualified distribution is frequently untaxed, and
that IRC § 72(t) reaches only the includible portion.

Distinguish the two phase-outs. Roth: the contribution is limited. Traditional: the deduction is
limited, and only for an active participant or their spouse.

## Check yourself

**1.** A 65-year-old made their first Roth contribution three years ago and now withdraws earnings. Is
the distribution qualified?

*Answer: no. IRC § 408A(d)(2)(B) provides that a distribution within the 5-taxable-year period beginning
with the first taxable year for which the individual made a contribution to a Roth IRA is not a
qualified distribution, whatever § 408A(d)(2)(A) limb is satisfied. The earnings are includible. The
IRC § 72(t) additional tax does not apply, because the taxpayer is over 59½.*

**2.** A 40-year-old has contributed $52,000 to a Roth over many years and withdraws $30,000. What is
the tax?

*Answer: none. The distribution is not qualified, but IRC § 408A(d)(4)(B)(i) treats it as made from
contributions to the extent that the distribution, added to all previous distributions, does not exceed
aggregate contributions — and $30,000 is well within $52,000. Contributions were never deducted, so
nothing is includible, and IRC § 72(t)(1) applies only to the portion includible in gross income.*

**3.** A married couple filing jointly with adjusted gross income of $280,000, neither covered by a
workplace plan, ask whether they can use IRAs.

*Answer: they may each make a fully deductible traditional contribution, and neither may contribute to a
Roth. The IRC § 219(g) phase-out applies only where the individual or their spouse is an active
participant, which neither is, so income is irrelevant to the deduction. IRC § 408A(c)(3) reduces the
Roth contribution limit by reference to adjusted gross income, and $280,000 exceeds the top of the joint
range.*

**4.** Does a Roth IRA owner have to take required minimum distributions during their lifetime?

*Answer: no. IRC § 408A(c)(4) provides that, notwithstanding § 408(a)(6) and (b)(3), § 401(a)(9)(A) and
the incidental death benefit requirements of § 401(a) do not apply to a Roth IRA. The heading confines
this to the period before death, so distributions to beneficiaries after the owner's death are governed
by the ordinary rules.*
