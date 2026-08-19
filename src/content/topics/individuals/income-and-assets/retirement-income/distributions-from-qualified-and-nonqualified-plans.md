---
title: "Distributions from qualified and nonqualified plans"
code: "1.2.2.c"
part: 1
domain: "Income and Assets"
section: "Retirement income"
description: "A plan distribution is taxed under IRC 72, and the questions that matter are whether it can be rolled over and whether the taxpayer has after-tax money in the plan."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 72", title: "Annuities; certain proceeds of endowment and life insurance contracts", url: "https://www.law.cornell.edu/uscode/text/26/72" }
  - { type: IRC, ref: "§ 219", title: "Retirement savings", url: "https://www.law.cornell.edu/uscode/text/26/219" }
  - { type: IRC, ref: "§ 402", title: "Taxability of beneficiary of employees' trust", url: "https://www.law.cornell.edu/uscode/text/26/402" }
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 3405", title: "Special rules for pensions, annuities, and certain other deferred income", url: "https://www.law.cornell.edu/uscode/text/26/3405" }
  - { type: Notice, ref: "2025-67", title: "2026 amounts relating to retirement plans and IRAs", url: "https://www.irs.gov/pub/irs-drop/n-25-67.pdf" }
forms: []
related: ["1.2.2.b", "1.2.2.a", "1.2.1.i", "1.2.2.k", "1.2.2.d", "1.2.2.e", "1.2.2.f", "1.2.2.g"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 402(a) charging rule, the IRC § 402(c)(4) definition of an eligible rollover distribution with its three exclusions, the IRC § 3405(c) mandatory withholding and its direct-transfer exception, and the IRC § 72(d) simplified method." }
---

Any amount actually distributed by an employees' trust described in § 401(a) and exempt under § 501(a)
is taxable to the distributee in the year distributed, **under § 72** (IRC § 402(a)). That single
sentence carries the topic: everything else is about which part of the distribution is a return of
after-tax money, and whether the taxpayer can defer the rest by moving it somewhere else.

## The rule

**Not every distribution can be rolled over.** An eligible rollover distribution means any distribution
of all or any portion of the balance to the employee's credit, **except** a distribution that is one of
a series of substantially equal periodic payments made at least annually over a life or joint lives or
for a specified period of ten years or more; any amount required under § 401(a)(9); and any hardship
distribution (IRC § 402(c)(4)(A)–(C)). Those three exclusions decide most rollover questions before any
arithmetic starts.

**Sixty days, with a safety valve.** The rollover treatment does not apply to a transfer made after the
60th day following the day the distributee received the property (IRC § 402(c)(3)(A)) — but the
Secretary may waive that requirement where enforcing it would be against equity or good conscience,
including in cases of casualty or disaster (IRC § 402(c)(3)(B)).

**Twenty percent leaves the plan unless the transfer is direct.** For a designated distribution that is
an eligible rollover distribution, the ordinary elective withholding rules do not apply and the payor
**must withhold twenty percent** (IRC § 3405(c)(1)(A), (B)) — unless the distributee elects under
§ 401(a)(31)(A) to have it paid directly to an eligible retirement plan (IRC § 3405(c)(2)). This is the
single most expensive trap in the topic, because a taxpayer who takes the cheque and intends to roll it
over must replace the withheld amount from other funds within the sixty days or be taxed on it.

**After-tax money comes out last on a rollover.** Where a distribution is transferred under § 402(c),
the amount transferred is treated as consisting **first of the portion includible in gross income**
(IRC § 402(c)(2), closing sentence). So a partial rollover moves the taxable money and leaves the
after-tax basis behind, which is usually what the taxpayer wants.

**Annuity payments use a table, not a ratio.** For an amount received as an annuity under a qualified
employer retirement plan, § 72(b) does not apply; instead the investment in the contract is recovered
by dividing it, as of the annuity starting date, by a **number of anticipated payments** taken from a
statutory table keyed to the annuitant's age at that date (IRC § 72(d)(1)(A), (B)(i), (iii)). A
commercial annuity outside a qualified plan still uses the general exclusion ratio.

**Nonqualified plans are a different regime.** A nonqualified deferred compensation arrangement is
governed by § 409A rather than by § 402, and the consequence of failure falls on the participant. There
is no rollover, and no § 3405(c) withholding question, because there is nowhere for the money to go.

**Two IRA-side rules travel with this topic.** A qualified charitable distribution is excluded up to an
annual limit, reduced by post-70½ § 219 deductions (IRC § 408(d)(8)(A)); and the spousal IRA in
§ 219(c) gives a non-earning spouse **their own** limit computed from the couple's combined
compensation — not a joint limit on a shared account.

## Current figures

| Item | 2026 |
| --- | --- |
| Rollover window | {fig:plan.rollover_window} |
| Mandatory withholding | {fig:plan.mandatory_withholding} |
| Not eligible for rollover | {fig:plan.not_eligible_rollover} |
| Simplified method | {fig:plan.simplified_method} |
| Qualified charitable distribution limit | {fig:ira.qcd_limit} |
| Spousal IRA | {fig:ira.spousal_limit} |
| Additional tax on early distributions | {fig:ira.early_distribution_tax} |

## How it works in practice

Ask how the money is moving before anything else. A direct trustee-to-trustee transfer avoids the
twenty percent withholding entirely and removes the sixty-day risk; a distribution paid to the taxpayer
does neither. The difference costs nothing to arrange and is often not explained to the client by the
plan, so it is worth raising the moment a rollover is mentioned rather than after the cheque arrives.

Where a cheque has already been issued, do the arithmetic out loud. To roll over the full balance the
taxpayer must deposit the net amount received **plus** the withheld twenty percent, found from other
resources, within sixty days. Rolling over only the net leaves the withheld portion treated as
distributed — taxable, and exposed to the § 72(t) additional tax if no exception applies. The withheld
money is not lost; it appears as a payment on the return, but that is a refund next April rather than
funds in the account.

Establish whether the plan holds after-tax contributions. Older plans frequently do, and the ordering
rule in § 402(c)(2) means a partial rollover carries the taxable money first — so basis can be isolated
deliberately rather than diluted. The plan's own records are the only source for that figure and are
worth requesting before the distribution rather than after.

For a client already receiving annuity payments, check which method applies. The § 72(d) simplified
method is mandatory for a qualified employer plan, and the divisor comes from the taxpayer's age at the
annuity starting date — a fact fixed years ago that has to be carried forward on every return
thereafter.

<div class="scenario">
<h3>The eighty percent cheque</h3>

Dmitri, aged 45, leaves an employer and asks for his $100,000 plan balance so he can move it to an IRA
himself. The plan sends $80,000 and withholds $20,000.

To defer the whole balance he must deposit $100,000 into the IRA within sixty days — the $80,000 he
received plus $20,000 from his own resources (IRC § 402(c)(3)(A); IRC § 3405(c)(1)(B)). If he deposits
only the $80,000, the $20,000 is a distribution: includible under § 402(a) and § 72, and exposed to the
§ 72(t) additional tax because he is under 59½ and no exception applies.

The withheld $20,000 is not gone — it is a payment credited on his return. But that is a refund the
following spring, not money in the retirement account, and the tax and additional tax on it are
permanent. Electing a direct payment to the IRA under § 401(a)(31)(A) would have avoided the withholding
altogether (IRC § 3405(c)(2)).
</div>

<div class="scenario">
<h3>Three distributions that cannot be rolled</h3>

Amara, aged 74, receives three payments from her former employer's plan in the same year: a required
minimum distribution, a hardship withdrawal she took earlier in the year from a different plan, and the
fifth of a series of equal annual payments running for fifteen years.

None of the three is an eligible rollover distribution. IRC § 402(c)(4)(B) excludes any distribution to
the extent required under § 401(a)(9); § 402(c)(4)(C) excludes a hardship distribution; and
§ 402(c)(4)(A)(ii) excludes a payment in a series of substantially equal periodic payments for a
specified period of ten years or more.

The practical consequence runs the other way as well: because none is an eligible rollover distribution,
none is subject to the twenty percent mandatory withholding in IRC § 3405(c), which applies only to
eligible rollover distributions. The elective withholding rules in § 3405(a) and (b) govern instead.
</div>

<div class="scenario">
<h3>Basis left behind on purpose</h3>

Yusuf's plan balance is $400,000, of which $50,000 is after-tax contributions he made in the 1990s. He
wants to move most of the balance to an IRA but take some cash now.

The ordering rule works in his favour. Where a distribution is transferred under IRC § 402(c), the
amount transferred is treated as consisting **first** of the portion includible in gross income. So a
$350,000 direct rollover carries taxable money only, and the $50,000 he takes in cash is his after-tax
basis — received tax-free.

Reversing the order would be much worse: taking $350,000 in cash and rolling $50,000 would leave him
with a large taxable distribution. The plan's records of his after-tax contributions are what make this
possible, and they are worth obtaining before the distribution is requested.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **Twenty percent withholding is mandatory** on an eligible rollover distribution paid to the taxpayer
  (IRC § 3405(c)(1)(B)), and only a direct transfer avoids it.
- **A full rollover of a net cheque requires outside funds** to replace the withholding within sixty
  days.
- **Three categories can never be rolled over** — substantially equal periodic payments over ten years
  or more, § 401(a)(9) required amounts, and hardship distributions (IRC § 402(c)(4)).
- **Those same three are outside the mandatory withholding**, because § 3405(c) applies only to eligible
  rollover distributions.
- **The sixty-day period runs from receipt**, not from the plan's cheque date (IRC § 402(c)(3)(A)).
- **A hardship waiver exists** (IRC § 402(c)(3)(B)) — a missed deadline is not automatically fatal.
- **A rollover carries taxable money first** (IRC § 402(c)(2)), so basis can be isolated deliberately.
- **The § 72(d) simplified method is mandatory for a qualified employer plan** and displaces the
  § 72(b) exclusion ratio.
- **The divisor is fixed by age at the annuity starting date**, so it never changes afterwards.
- **The spousal IRA is a separate limit, not a joint one** (IRC § 219(c)) — each spouse has their own.
- **The § 408(d)(8)(A) charitable limit is indexed**, so the figure printed in the statute understates
  it.

</div>

## How this has changed

The architecture here is settled, and the movement is in figures announced annually — the § 219(b)(5)
contribution limit, the § 219(g) phase-out ranges, and the qualified charitable distribution limit.

That last one is worth stating carefully because the statute misleads. IRC § 408(d)(8)(A) still prints
its original unindexed figure, and § 408(d)(8)(G) indexes it for taxable years beginning after 2023 — so
the amount in the subparagraph has been wrong as a statement of the current limit every year since. Anyone reading the
subparagraph without the adjustment will understate the exclusion.

The twenty percent withholding rule and the sixty-day period are statutory and have not moved, which
makes older material reliable on the mechanics even where its figures are stale. The one thing that has
changed around them is practice rather than law: direct trustee-to-trustee transfers are now routine
where they once were not, so the population of taxpayers who receive a cheque and face the withholding
problem has shrunk — but the consequence for those who still do is unchanged.

For nonqualified arrangements the change of substance was the arrival of § 409A, which is covered on the
constructive receipt page. Material written before it understates the consequences of a failed deferral
badly, and this topic attracts such material because § 402 itself is unchanged.

## Exam focus

Know the three exclusions from the definition of an eligible rollover distribution, and that they do
double duty — they take a distribution outside the rollover rules **and** outside the mandatory
withholding.

Know that the withholding is twenty percent, that it is mandatory, and that the only way to avoid it is
a direct payment to an eligible retirement plan under § 401(a)(31)(A). Expect a computation asking what
must be deposited to defer the whole balance.

Know the § 402(c)(2) ordering rule — taxable money moves first — and be able to say why that helps a
taxpayer with after-tax basis.

Know that the § 72(d) simplified method applies to qualified employer plans and uses a table of
anticipated payments keyed to age at the annuity starting date.

## Check yourself

**1.** A taxpayer receives a $50,000 eligible rollover distribution paid directly to them. What must
they deposit to defer tax on the whole amount, and by when?

*Answer: $50,000, within 60 days of receipt. IRC § 3405(c)(1)(B) requires the payor to withhold 20
percent, so the taxpayer receives $40,000 and must make up the $10,000 from other funds. IRC
§ 402(c)(3)(A) sets the 60-day limit, running from the day the distributee received the property, with a
possible waiver under § 402(c)(3)(B).*

**2.** Is a required minimum distribution subject to the 20 percent mandatory withholding?

*Answer: no. IRC § 3405(c) applies only to an eligible rollover distribution, and IRC § 402(c)(4)(B)
excludes from that term any distribution to the extent required under § 401(a)(9). The elective
withholding rules in § 3405(a) and (b) apply instead, so the taxpayer may choose the amount withheld or
elect out.*

**3.** A plan balance of $300,000 includes $40,000 of after-tax contributions. The taxpayer rolls
$260,000 to an IRA and takes $40,000 in cash. What is includible?

*Answer: nothing from the cash. Where a distribution is transferred under IRC § 402(c), the amount
transferred is treated as consisting first of the portion includible in gross income — so the $260,000
rollover absorbs all of the taxable money, and the $40,000 retained is the after-tax basis, received
tax-free.*

**4.** Which method recovers investment in the contract for annuity payments from a qualified employer
plan?

*Answer: the simplified method. IRC § 72(d)(1)(A) disapplies § 72(b) for an amount received as an annuity
under a qualified employer retirement plan, and § 72(d)(1)(B)(i) recovers the investment by dividing it,
as of the annuity starting date, by the number of anticipated payments from the table in clause (iii),
which is keyed to the annuitant's age at that date. The general exclusion ratio still governs a
commercial annuity outside such a plan.*
