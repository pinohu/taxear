---
title: "Self-employment tax"
code: "1.2.4.a"
part: 1
domain: "Income and Assets"
section: "Adjustments to Income"
description: "Two halvings do different jobs: one shrinks the base before the tax is computed, the other is a deduction against income, and the additional Medicare tax gets neither."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 164", title: "Taxes", url: "https://www.law.cornell.edu/uscode/text/26/164" }
  - { type: IRC, ref: "§ 1401", title: "Rate of tax", url: "https://www.law.cornell.edu/uscode/text/26/1401" }
  - { type: IRC, ref: "§ 1402", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/1402" }
  - { type: IRC, ref: "§ 162", title: "Trade or business expenses", url: "https://www.law.cornell.edu/uscode/text/26/162" }
  - { type: IRC, ref: "§ 707", title: "Transactions between partner and partnership", url: "https://www.law.cornell.edu/uscode/text/26/707" }
forms: []
related: ["1.2.4.e", "1.2.4.b", "1.2.1.l", "1.2.4.d", "1.2.3.k", "1.2.4.c", "1.3.1.h"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 1401 rates including the additional hospital insurance tax and its unindexed thresholds, the § 1402(a) definition of net earnings with its rental, portfolio, capital gain and limited partner exclusions, the § 1402(b) ceiling and the $400 floor, and the two distinct halvings — the § 1402(a)(12) base reduction and the § 164(f) deduction — that are routinely confused." }
---

Two provisions each take half of something, and they do entirely different jobs. IRC § 1402(a)(12) shrinks
the **base** before the tax is computed, so the tax itself is smaller. IRC § 164(f) then allows a
**deduction** against income for half the tax that results. Neither applies to the additional hospital
insurance tax, which sits outside both. Getting the two confused produces a wrong answer in both
directions at once.

## The rule

**Three rates, in one section.** The tax on self-employment income is 12.4 percent for old-age, survivors
and disability insurance (IRC § 1401(a)), plus 2.9 percent for hospital insurance (§ 1401(b)(1)), plus an
additional 0.9 percent on self-employment income above a threshold (§ 1401(b)(2)(A)).

**The additional tax has its own thresholds, and they do not move.** They differ by filing status (IRC
§ 1401(b)(2)(A)(i)–(iii)) and are reduced, but not below zero, by wages taken into account for the
corresponding FICA tax (§ 1401(b)(2)(B)). None of the three carries an inflation adjustment; the amounts
are in the table below.

**Only the first component has a ceiling.** Self-employment income does not include, for the § 1401(a) tax,
net earnings in excess of the contribution and benefit base under section 230 of the Social Security Act
for the calendar year in which the taxable year begins, **minus wages paid to the individual during the
year** (IRC § 1402(b)(1)). The hospital insurance components have no ceiling at all.

**And a floor below which nothing is taxed.** Self-employment income does not include net earnings from
self-employment where those earnings for the year fall below a small statutory floor (IRC § 1402(b)(2)).

**Net earnings, and four exclusions.** Net earnings from self-employment are gross income from any trade
or business carried on by the individual, less the deductions attributable to it, plus the distributive
share of income or loss described in § 702(a)(8) from a partnership of which the individual is a member
(IRC § 1402(a)). From that are excluded: **rentals** from real estate and from personal property leased
with it, unless received in the course of a trade or business as a real estate dealer, and subject to a
material-participation exception for farm arrangements (§ 1402(a)(1)); **dividends and interest**, unless
received as a dealer in stocks or securities (§ 1402(a)(2)); and **gain or loss** treated as from a
capital asset, or from property that is neither inventory nor held primarily for sale to customers
(§ 1402(a)(3)).

**A limited partner's share is out.** The distributive share of any item of income or loss of a limited
partner, **as such**, is excluded — other than guaranteed payments under § 707(c) for services actually
rendered, to the extent established to be remuneration for those services (IRC § 1402(a)(13)).

**The first halving: the base shrinks.** In lieu of the § 164(f) deduction, net earnings are reduced by
the product of those earnings and **one-half of the sum of the § 1401(a) and (b)(1) rates**, determined
without regard to the additional rate under § 1401(b)(2) (IRC § 1402(a)(12)). Half of 15.3 percent is
7.65 percent, so the base is 92.35 percent of net earnings.

**The second halving: an income tax deduction.** In addition to the taxes described in § 164(a), a
deduction is allowed for one-half of the taxes imposed by § 1401 — **other than** the additional tax under
§ 1401(b)(2) — and the deduction is treated as attributable to a trade or business not consisting of
services as an employee (IRC § 164(f)(1), (2)). It reduces income tax, not self-employment tax.

**Employees and officeholders are not self-employed.** A trade or business has its § 162 meaning, except
that it does not include the functions of a public office — other than certain State fee-basis positions —
or the performance of service as an employee, subject to narrow exceptions (IRC § 1402(c)(1), (2)).

## Current figures

| Item | 2026 |
| --- | --- |
| Rates | {fig:se.rates} |
| Additional tax thresholds | {fig:se.additional_medicare_threshold} |
| Ceiling on the first component | {fig:se.wage_base} |
| Floor | {fig:se.floor} |
| Net earnings | {fig:se.net_earnings} |
| Exclusions | {fig:se.exclusions} |
| Limited partners | {fig:se.limited_partner} |
| Base reduction | {fig:se.base_reduction} |
| Deduction for half the tax | {fig:se.deduction} |
| Not a trade or business | {fig:se.not_a_trade_or_business} |

## How it works in practice

Work the computation in the statutory order and the two halvings stop competing. Start with net earnings
from the business. Apply the § 1402(a)(12) reduction to get the base — 92.35 percent of net earnings.
Apply 12.4 percent to so much of that base as fits under the ceiling after subtracting any wages, and
2.9 percent to all of it. Add the additional 0.9 percent on the excess over the threshold. Then, and only
then, take half of the first two components as a § 164(f) deduction in computing adjusted gross income.

The wage coordination in § 1402(b)(1) matters for anyone with both a job and a business. Wages consume the
ceiling first, so an employee earning above the base owes no old-age component on the side business at
all — but still owes the full 2.9 percent, and the additional 0.9 percent threshold in § 1401(b)(2)(B) is
reduced by those same wages, so the surtax bites sooner rather than later.

The exclusions are where classification arguments live. Rental income is out unless the taxpayer is a real
estate dealer; portfolio income is out unless the taxpayer is a securities dealer; gain on the sale of
business equipment is out because § 1402(a)(3)(C) excludes property that is neither inventory nor held
primarily for sale. A sole proprietor selling their delivery van has a § 1231 gain and no self-employment
tax on it.

<div class="scenario">
<h3>Scenario 1 — the second job that owed less than expected</h3>

Aditi earns wages well above the contribution and benefit base and also runs a consultancy with 60,000
dollars of net earnings.

Her base is 92.35 percent of 60,000, or 55,410 dollars, under IRC § 1402(a)(12). Because her wages have
already consumed the ceiling, § 1402(b)(1) leaves nothing for the 12.4 percent component: she owes none of
it. She does owe 2.9 percent on the whole 55,410 dollars, because the hospital insurance component has no
ceiling. Her § 164(f) deduction is half of that 2.9 percent tax. If her combined wages and self-employment
income exceed the § 1401(b)(2) threshold — reduced by her wages under subparagraph (B) — the additional
0.9 percent applies too, with no deduction for any part of it.
</div>

<div class="scenario">
<h3>Scenario 2 — the landlord who is not self-employed</h3>

Bram owns four rental houses, manages them himself, and nets 48,000 dollars. He is not a real estate
dealer and does not hold the properties for sale.

None of it is net earnings from self-employment. IRC § 1402(a)(1) excludes rentals from real estate,
together with the deductions attributable to them, unless received in the course of a trade or business as
a **real estate dealer**. The exclusion does not depend on how much work he does, and the material
participation exception in that paragraph reaches only farm arrangements. He owes income tax on the 48,000
dollars and no self-employment tax.
</div>

<div class="scenario">
<h3>Scenario 3 — the two halvings on one return</h3>

Chidinma has 100,000 dollars of net earnings from a sole proprietorship and no wages.

Her base is 92,350 dollars. The 12.4 percent component is 11,451 dollars and the 2.9 percent component is
2,678 dollars, a combined 14,129 dollars. Her income tax deduction under IRC § 164(f)(1) is half of that,
7,065 dollars, taken in computing adjusted gross income. The first halving reduced the amount the rates
were applied to; the second reduces her income, not her self-employment tax. Applying either one twice, or
substituting one for the other, is the characteristic error.
</div>

<div class="callout trap">

**The base reduction and the deduction are different provisions.** IRC § 1402(a)(12) is applied "in lieu
of the deduction provided by section 164(f)" **for purposes of computing net earnings**; § 164(f) then
operates on the income tax side.

**The additional hospital insurance tax gets neither.** Section 1402(a)(12)(B) disregards it in the base
reduction and § 164(f)(1) excludes it from the deduction.

**Wages consume the ceiling first**, and also reduce the additional-tax threshold under § 1401(b)(2)(B).

**Rental income is out regardless of effort.** The material participation exception in § 1402(a)(1)
applies to agricultural and horticultural arrangements, not to residential letting.
</div>

## How this has changed

**The additional hospital insurance tax was bolted on in 2013 and does not behave like the rest of the
section.** Section 1401(b)(2) applies only to taxable years beginning after 31 December 2012, has its own
thresholds, is excluded from the § 1402(a)(12) base reduction and from the § 164(f) deduction, and — like
the § 1411 thresholds and the § 86 base amounts — carries no inflation adjustment. Three unindexed
threshold sets now sit on the same return at the same two figures, and none of them moves.

**The limited partner exclusion has not changed and its boundary is contested.** Section 1402(a)(13)
excludes a limited partner's distributive share "as such", and the words are doing the work: the exclusion
is directed at the passive character of the interest, not at the label in the partnership agreement.
Guaranteed payments for services actually rendered are carved back in.

**The ceiling is set outside the Code.** Section 1402(b)(1) points at the contribution and benefit base
under section 230 of the Social Security Act, which is announced annually by the Social Security
Administration rather than by the IRS. Any tax table of it is a secondary report of a figure that lives
elsewhere, so check the year it is stated for: the amount in the current figures table above is the 2026
base as the IRS reports it.

**What has not changed is the structure of the two halvings**, in place since 1990, and it remains the
most reliable source of error on this topic — including in published material, which frequently describes
the 92.35 percent figure as "the deduction for half the self-employment tax" when it is a separate
provision doing a separate job.

## Exam focus

Expect the **order of the computation**: reduce the base, then apply the rates, then take the deduction.

Expect **wages in the facts**, testing whether you know they consume the ceiling and shrink the
additional-tax threshold.

Expect a **rental** or a **gain on business property**, both of which are excluded from net earnings.

Expect the **statutory floor**, which is measured on net earnings and is not prorated.

## Check yourself

**1.** A sole proprietor has 50,000 dollars of net earnings and no wages. What amount do the rates apply
to?

*Answer: 46,175 dollars. IRC § 1402(a)(12) reduces net earnings by the product of those earnings and
one-half of the combined § 1401(a) and (b)(1) rates — 7.65 percent — leaving 92.35 percent of 50,000.*

**2.** What is the income tax deduction, and which taxes does it cover?

*Answer: One-half of the taxes imposed by IRC § 1401 other than the additional tax under § 1401(b)(2),
allowed by § 164(f)(1) in computing adjusted gross income and treated as attributable to a trade or
business not consisting of services as an employee.*

**3.** A taxpayer's wages already exceed the contribution and benefit base. Do they owe any
self-employment tax on a side business?

*Answer: Yes — the hospital insurance components. IRC § 1402(b)(1) removes only the § 1401(a) tax to the
extent wages have consumed the base; the 2.9 percent tax has no ceiling and the additional 0.9 percent may
apply, with its threshold reduced by those wages under § 1401(b)(2)(B).*

**4.** A taxpayer nets 380 dollars from a small side activity. What is owed?

*Answer: Nothing. IRC § 1402(b)(2) excludes net earnings from self-employment where they fall below the
statutory floor of 400 dollars for the taxable year.*

**5.** A sole proprietor sells a delivery van used in the business at a gain. Is the gain subject to
self-employment tax?

*Answer: No. IRC § 1402(a)(3)(C) excludes gain from the disposition of property that is neither inventory
nor held primarily for sale to customers in the ordinary course of the trade or business.*
