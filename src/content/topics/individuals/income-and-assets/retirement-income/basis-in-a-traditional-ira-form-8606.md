---
title: "Basis in a traditional IRA"
code: "1.2.2.a"
part: 1
domain: "Income and Assets"
section: "Retirement income"
description: "Basis in an IRA is nondeductible contributions, and it comes back pro rata across every traditional IRA the taxpayer owns. Untracked basis is taxed twice."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 72", title: "Annuities; certain proceeds of endowment and life insurance contracts", url: "https://www.law.cornell.edu/uscode/text/26/72" }
  - { type: IRC, ref: "§ 219", title: "Retirement savings", url: "https://www.law.cornell.edu/uscode/text/26/219" }
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 408A", title: "Roth IRAs", url: "https://www.law.cornell.edu/uscode/text/26/408A" }
  - { type: IRC, ref: "§ 6693", title: "Failure to provide reports on certain tax-favored accounts or annuities", url: "https://www.law.cornell.edu/uscode/text/26/6693" }
  - { type: Notice, ref: "2025-67", title: "2026 amounts relating to retirement plans and IRAs", url: "https://www.irs.gov/pub/irs-drop/n-25-67.pdf" }
forms: []
related: ["1.2.2.b", "1.1.1.g", "1.2.1.c", "1.2.2.g", "1.2.2.c"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 408(d)(2) aggregation rule that produces pro-rata recovery of basis, the IRC § 408(o) definition of a designated nondeductible contribution, the reporting duty in § 408(o)(4) and its § 6693(b) penalties." }
---

Basis in a traditional IRA is money that has already been taxed once — contributions made without a
deduction. It matters because a distribution recovers basis **pro rata across every traditional IRA the
taxpayer owns**, not from the account the nondeductible contribution went into. Basis that is never
recorded is basis that gets taxed a second time, and the record has to survive decades.

## The rule

**Distributions are taxed under § 72.** Any amount paid or distributed out of an individual retirement
plan is included in gross income by the payee in the manner provided under § 72 (IRC § 408(d)(1)), which
recovers investment in the contract tax-free and taxes the rest.

**But § 72 is applied to a fiction.** For that purpose **all individual retirement plans are treated as
one contract**, **all distributions during a taxable year as one distribution**, and the value of the
contract, income on the contract and investment in the contract are computed **as of the close of the
calendar year in which the taxable year begins** — with the value increased by any distributions made
during that calendar year (IRC § 408(d)(2)(A)–(C)). That single subsection produces every result that
surprises taxpayers here: you cannot isolate an account, you cannot isolate a distribution, and you
cannot measure at the moment of withdrawal.

**Basis means designated nondeductible contributions.** Such contributions may be made to an individual
retirement plan (IRC § 408(o)(1)), limited to the **nondeductible limit** — the excess of the § 219
deduction computed *without regard to* § 219(g) over the deduction computed *with regard to* it (IRC
§ 408(o)(2)(B)(i)) — and increased where the taxpayer elects not to deduct an amount that would
otherwise be deductible (IRC § 408(o)(2)(B)(ii)). So basis arises either because the § 219(g)
active-participant phase-out denied the deduction, or because the taxpayer chose to forgo it.

**Reporting is mandatory, in both directions.** An individual who makes a designated nondeductible
contribution for a year, **or who receives any amount from any individual retirement plan for a year**,
must include the prescribed information on the return for that year and any succeeding year (IRC
§ 408(o)(4)(A)). The second limb is the one people miss: the reporting obligation is triggered by taking
a distribution, not only by making a contribution.

**Failure and overstatement each carry a penalty**, both excused on a showing of reasonable cause (IRC
§ 6693(b)(1), (2)).

**Roth accounts stay outside the computation.** Section 408(d)(2) is applied **separately** to Roth IRAs
and to other individual retirement plans (IRC § 408A(d)(4)(A)), so a Roth is never blended into the
traditional pro-rata fraction. That is a separation rule, not an absence of basis: a Roth contribution
is by definition not deductible (IRC § 408A(c)(1)), and Roth distributions have their own ordering rules
in § 408A(d)(4)(B).

## Current figures

| Item | 2026 |
| --- | --- |
| Aggregation for the § 72 computation | {fig:ira.aggregation_rule} |
| The nondeductible limit | {fig:ira.nondeductible_limit} |
| Reporting penalties | {fig:ira.form8606_penalties} |
| Roth accounts | {fig:ira.roth_aggregation} |
| IRA deduction limit | {fig:ira.deduction_limit} |
| Active-participant phase-out | {fig:ira.active_participant_phaseout} |

## How it works in practice

Reconstruct basis before computing anything. The figure is cumulative and personal: total designated
nondeductible contributions over the taxpayer's life, less basis already recovered. Prior-year returns
are the primary record, and where they are missing, contribution records and the plan's own annual
statements are the fallback. This is the one number in the topic that no third party keeps.

Then apply the fraction the statute requires rather than the one the client expects. The taxable portion
of the year's distributions is determined by comparing total basis with the aggregate value of **all**
traditional, SEP and SIMPLE IRAs at the close of the calendar year, increased by distributions taken
during it. A client who made a nondeductible contribution to a new account and immediately withdrew it
has not withdrawn basis — they have withdrawn a pro-rata slice of everything.

Say plainly what the year-end measurement means. Because the denominator is measured at 31 December
rather than at the date of the distribution, a rollover into an IRA late in the year enlarges it and
dilutes the basis recovered. That timing point is worth raising before a rollover, not after.

Where basis has never been reported, the fix is filing the missing forms rather than ignoring the
history. The alternative is paying tax again on money already taxed, and the § 6693(b) penalties are
small and excusable for reasonable cause — a far better outcome than a permanently lost basis.

<div class="scenario">
<h3>The contribution that could not be withdrawn</h3>

Nadia has $180,000 in a rollover IRA, all pre-tax. She contributes $7,500 to a new traditional IRA,
takes no deduction because the § 219(g) phase-out denies it, and withdraws the $7,500 a month later
expecting it to be tax-free.

It is almost entirely taxable. IRC § 408(d)(2)(A) treats all her individual retirement plans as one
contract, so the withdrawal is a distribution from a single notional account holding $187,500 of which
$7,500 is basis. Only four percent of the withdrawal is a recovery of basis; the rest is ordinary
income.

The unrecovered basis is not lost — it stays with her and reduces the taxable portion of future
distributions. But the plan of putting money in without a deduction and taking it straight back out
does not work, and it cannot be made to work by using a separate account.
</div>

<div class="scenario">
<h3>The year-end denominator</h3>

Tomas has $40,000 of traditional IRA value and $10,000 of basis. In March he withdraws $5,000. In
November he rolls a $300,000 former employer plan into the same IRA.

The rollover changes the March answer. Under IRC § 408(d)(2)(C) the value of the contract is computed
**as of the close of the calendar year**, increased by distributions made during the year — so the
denominator reflects the November rollover even though the withdrawal came eight months earlier.

Had he waited until January to roll the plan over, the denominator for the year of the withdrawal would
have been far smaller and a much larger share of the $5,000 would have been basis. The statute measures
at year end, so the sequence of transactions within a year is often less important than which side of
31 December they fall.
</div>

<div class="scenario">
<h3>Twenty years of unrecorded basis</h3>

Beatriz took her first IRA distribution this year. Over twenty years she made nondeductible
contributions totalling about $34,000, but never filed the form recording them and her returns show
nothing.

She should reconstruct and file rather than let it go. IRC § 408(o)(4)(A) required the information on the
return for each year a designated nondeductible contribution was made — and independently for any year
in which she received any amount from an individual retirement plan, which is this year. IRC
§ 6693(b)(2) sets a modest penalty for each failure to file, excused on a showing of reasonable cause.

The arithmetic makes the choice obvious. Without the record, the whole of every future distribution is
treated as taxable, so $34,000 of already-taxed money is taxed again. With it, the penalties are small
and may be waived. Contribution confirmations and the custodian's annual statements are usually enough
to rebuild the figure.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **Basis recovers pro rata across all traditional IRAs** (IRC § 408(d)(2)(A)) — never from a chosen
  account.
- **All distributions in a year are one distribution** (IRC § 408(d)(2)(B)), so taking two withdrawals
  changes nothing.
- **The denominator is measured at the close of the calendar year** (IRC § 408(d)(2)(C)), not at the
  date of the withdrawal — a late rollover dilutes basis recovery for the whole year.
- **SEP and SIMPLE IRAs are in the aggregation.** They are individual retirement plans.
- **Employer plan balances are not.** A 401(k) balance is outside § 408(d)(2), which is why moving it
  into an IRA changes the fraction.
- **A distribution triggers the reporting duty on its own** (IRC § 408(o)(4)(A)(ii)), whether or not a
  contribution was made that year.
- **Basis arises two ways** — a denied deduction under § 219(g), or an election not to deduct one that
  was available (IRC § 408(o)(2)(B)(ii)).
- **Roth IRAs are separated, not basis-free.** IRC § 408A(d)(4)(A) applies § 408(d)(2) separately, and
  Roth contributions are by definition non-deductible under § 408A(c)(1).
- **Unreported basis is taxed twice**, and the § 6693(b) penalties for putting it right are small and
  excusable.

</div>

## How this has changed

The mechanics here are old and stable — § 408(d)(2) has produced pro-rata recovery for decades — and the
movement is in the figures that feed it. The § 219 deduction limit and the § 219(g) active-participant
phase-out ranges are announced annually, so the *amount* of basis a taxpayer creates in a year changes
even though the rule creating it does not. A source giving those figures without a year attached is
right for one year only.

The § 6693(b) penalties are the opposite case: statutory, unindexed, and unchanged since enactment. So
in older material the deduction figures will be stale and the penalties will not — the same asymmetry
that runs through much of this outline, and worth knowing here because the penalties are the number
most likely to be quoted from memory.

The structural point worth watching is what feeds the denominator rather than the rule itself. Because
employer plan balances sit outside § 408(d)(2) until they are rolled over, every change that makes
rollovers easier or more common makes pro-rata dilution more common too. Nothing in § 408 has changed;
the population it bites has grown.

## Exam focus

Know § 408(d)(2) as three separate rules — one contract, one distribution, year-end measurement — and
be able to say what each one does. Almost every question in this area is testing one of them.

Expect a computation: total basis over aggregate year-end value plus distributions, applied to the
year's total distributions. Be ready for a fact pattern that puts a nondeductible contribution in a
separate account, because that is the trap the aggregation rule exists to close.

Know that the reporting obligation arises on receiving a distribution as well as on making a
nondeductible contribution, and that the penalties are per failure and excusable for reasonable cause.

Know that Roth accounts are aggregated separately rather than excluded from having basis at all.

## Check yourself

**1.** A taxpayer has $95,000 across two traditional IRAs at 31 December, of which $19,000 is basis, and
took $10,000 of distributions during the year. How much of the distribution is taxable?

*Answer: $8,190. Under IRC § 408(d)(2)(C) the denominator is the year-end value increased by
distributions during the year, so $95,000 plus $10,000 is $105,000. The basis fraction is $19,000 over
$105,000, or about 18.1 percent, making $1,810 of the distribution a recovery of basis and the remaining
$8,190 includible under IRC § 408(d)(1) and § 72.*

**2.** Does making a nondeductible contribution to a brand-new IRA and withdrawing it the following week
produce a tax-free distribution?

*Answer: no, unless the taxpayer has no other traditional IRA. IRC § 408(d)(2)(A) treats all individual
retirement plans as a single contract, so the withdrawal recovers basis only in the proportion that
total basis bears to the aggregate value of every traditional, SEP and SIMPLE IRA the taxpayer owns.
Using a separate account does not isolate the contribution.*

**3.** A taxpayer made no IRA contribution this year but took a $4,000 distribution. Is any reporting
required?

*Answer: yes. IRC § 408(o)(4)(A)(ii) requires an individual who **receives any amount from any
individual retirement plan** for a taxable year to include the prescribed information on that year's
return. The duty is independent of whether a designated nondeductible contribution was made, and IRC
§ 6693(b)(2) penalises each failure to file, excused on a showing of reasonable cause.*

**4.** Why does rolling a former employer plan into an IRA in December affect the tax on a distribution
taken in March of the same year?

*Answer: because IRC § 408(d)(2)(C) computes the value of the contract as of the close of the calendar
year in which the taxable year begins, increased by distributions made during that year. The December
rollover is therefore in the denominator for the whole year, diluting the proportion of the March
distribution treated as a recovery of basis. Deferring the rollover to January would have left the
earlier denominator intact.*
