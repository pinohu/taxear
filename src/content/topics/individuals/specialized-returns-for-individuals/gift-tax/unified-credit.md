---
title: "Unified credit"
code: "1.6.2.c"
part: 1
domain: "Specialized Returns for Individuals"
section: "Gift tax"
description: "There is one credit, not two. Every dollar of it used against a lifetime gift is a dollar not available at death, and the gift tax is cumulative from 1932 onwards."
status: review
taxYear: 2026
lastReviewed: "2026-08-20"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 2505", title: "Unified credit against gift tax", url: "https://www.law.cornell.edu/uscode/text/26/2505" }
  - { type: IRC, ref: "§ 2502", title: "Rate of tax", url: "https://www.law.cornell.edu/uscode/text/26/2502" }
  - { type: IRC, ref: "§ 2501", title: "Imposition of tax", url: "https://www.law.cornell.edu/uscode/text/26/2501" }
  - { type: IRC, ref: "§ 2010", title: "Unified credit against estate tax", url: "https://www.law.cornell.edu/uscode/text/26/2010" }
  - { type: IRC, ref: "§ 2001", title: "Imposition and rate of tax", url: "https://www.law.cornell.edu/uscode/text/26/2001" }
  - { type: IRC, ref: "§ 2503", title: "Taxable gifts", url: "https://www.law.cornell.edu/uscode/text/26/2503" }
forms: []
related: ["1.6.2.a", "1.6.2.b", "1.6.2.d", "1.6.2.e", "1.6.1.a"]
changelog:
  - { date: "2026-08-20", summary: "Initial draft. Sets out the IRC § 2505 credit as one credit shared between the two taxes — its measurement by reference to § 2010(c), the reduction for credit allowed in preceding calendar periods, the § 2505(c) ceiling at the year's tax, and the denial to a nonresident who is not a citizen — together with the cumulative computation in § 2502(a) and the recomputation at death rates required by § 2001(g)(1)." }
---

The gift tax and the estate tax share one credit, and the word "unified" is the whole point. A gift made
in 2026 that exceeds the annual exclusion does not produce a tax bill for most clients, and the reason
is not that gifts are exempt — it is that the credit absorbs the tax, and the same credit will not be
there at death. Understanding what the credit is, rather than treating it as an allowance that gifts
consume, is what makes the rest of the transfer tax system make sense.

## The rule

**Where the credit comes from.** {fig:giftcredit.amount} There is no separate gift tax exclusion figure:
the number is {fig:estate.basic_exclusion}, borrowed from the estate tax and applied through the gift tax
rates.

**Used once, gone once.** The reduction for credit allowable in preceding calendar periods
(IRC § 2505(a)(2)) is what makes the credit cumulative. It is not an annual allowance.

**And the earlier years are re-priced.** {fig:giftcredit.recomputation}

**A ceiling, not a refund.** {fig:giftcredit.ceiling}

**Not everyone gets it.** {fig:giftcredit.citizenship}

**The tax it is credited against is cumulative too.** {fig:gifttax.cumulative_computation} That is why
a client who used the whole credit twenty years ago pays gift tax at the top rate on the next dollar —
the bracket is determined by the running total, not by this year's gift.

**And the imposition itself.** {fig:gifttax.imposition}

**At death, the whole thing is recomputed.** {fig:gifttax.death_recomputation} And where the exclusion
amount has moved between the gift and the death, {fig:gifttax.exclusion_difference_regs}

## Current figures

| Item | Rule |
| --- | --- |
| Basic exclusion amount | {fig:estate.basic_exclusion} |
| Credit amount | {fig:giftcredit.amount} |
| Applicable credit amount | {fig:estate.applicable_credit} |
| Recomputation of prior periods | {fig:giftcredit.recomputation} |
| Ceiling on the credit | {fig:giftcredit.ceiling} |
| Citizenship requirement | {fig:giftcredit.citizenship} |
| Cumulative computation | {fig:gifttax.cumulative_computation} |
| Imposition of tax | {fig:gifttax.imposition} |
| Rates | {fig:estate.top_rate} |
| Annual exclusion | {fig:estate.annual_exclusion} |
| Recomputation at death | {fig:gifttax.death_recomputation} |
| Exclusion difference regulations | {fig:gifttax.exclusion_difference_regs} |
| Estate tax computation | {fig:estate.tax_computation} |
| Portability | {fig:portability.dsue_definition} |

## How it works in practice

**Explain what the credit is before anything else.** Clients arrive believing there is a lifetime
allowance that gifts eat into. The mechanics are different and the difference matters: taxable gifts
enlarge the base on which tax is computed, and a single credit — measured by the tax on the exclusion
amount — is applied against the resulting tax. The two descriptions give the same answer only because
the top bracket is flat, which it is for every client this arises for.

**Work the computation in the statutory order** (IRC § 2502(a)). Aggregate this year's taxable gifts
with all preceding calendar periods, compute a tentative tax on the total, subtract a tentative tax on the preceding
periods alone, then apply the § 2505 credit as reduced by credit already used. Skipping the aggregation
step gives the right answer only for a client with no gift history.

**Ask about gift history before advising on a large gift.** The credit reduction in § 2505(a)(2) reaches
back to every prior calendar period. A client who made substantial gifts in the 2010s may have far less
credit remaining than the current exclusion amount suggests, and only the prior Forms 709 will show it.

**Do not treat unused credit as wasted.** Section 2505(c) caps the credit at the year's tax, but the
excess is not lost — it simply has not been used, and remains available for later gifts and ultimately
at death. There is nothing to elect and nothing to carry forward.

**Remember the non-resident alien.** A nonresident who is not a citizen has no unified credit against
gift tax. The annual exclusion is still available, but the first taxable dollar is taxed. This catches
advisers who assume the exclusion amount travels with the taxpayer.

**And keep the estate tax in view.** {fig:estate.tax_computation} Gifts made during life reappear in the
estate tax base as adjusted taxable gifts; the gift tax already paid or notionally payable is subtracted;
and the credit is applied once. Using the credit during life is a timing decision about which tax it
shelters, not a way to double it.

<div class="scenario">
<h3>The credit that had already been spent</h3>

A client made taxable gifts of $9,000,000 in 2019 and paid no gift tax, the credit having absorbed it.
In 2026 he wants to give another $8,000,000 and assumes the current exclusion amount covers it.

It does not, because the credit is reduced under § 2505(a)(2) by the credit allowable for preceding
calendar periods. His remaining credit corresponds to roughly $6,000,000 of exclusion, so around
$2,000,000 of the new gift is exposed, and it is exposed at the top rate — the cumulative computation in
§ 2502(a) puts the whole of this year's gift above the bracket thresholds. The current exclusion amount
describes the total he may shelter across his life, not the amount available today.

</div>

<div class="scenario">
<h3>The nonresident donor</h3>

A citizen of another country, not resident in the United States, gives United States real property worth
$900,000 to her nephew.

The gift is subject to United States gift tax under § 2501(a)(1) — the tax reaches transfers by any
individual, resident or nonresident, and the exception in § 2501(a)(2) covers only intangible property.
She may use the annual exclusion, but she has no unified credit: § 2505(a) allows it only to a citizen
or resident. The tax is payable on essentially the whole gift, which is a result no domestic client ever
encounters.

</div>

<div class="scenario">
<h3>The year with more credit than tax</h3>

A client with no gift history makes a taxable gift of $400,000. The tentative tax on it is well below
the credit available to her.

She pays no gift tax, and § 2505(c) limits the credit to the tax imposed for the year — so the credit
"allowed" for this year is the amount of that tax and no more. The rest is not refunded, not carried
forward as a separate item, and not lost: it is simply still there, because next year's credit is
computed afresh under § 2505(a)(1) and reduced only by what was actually allowed.

</div>

<div class="scenario">
<h3>The rates that changed after the gift</h3>

A client made large taxable gifts in the early 1990s, when the top gift tax rate was materially higher
than it is now. He dies in 2026 and his executor computes the estate tax.

The subtraction for gift tax payable is not the tax he actually paid. Section 2001(g)(1) requires the
rates in effect at death to be used in place of the rates in force at the time of the gifts, for both
the chapter 12 tax and the § 2505 credit against it. The executor must recompute, and the recomputed
figure will differ from every number on the original Forms 709.

</div>

<div class="callout trap">

**Calling it a lifetime exemption that gifts reduce.** Taxable gifts are added to the estate tax base
under § 2001(b)(1)(B); the credit is applied once at the end. The shortcut agrees only because the top
bracket is flat.

**Treating the credit as available afresh each year.** Section 2505(a)(2) reduces it by everything
allowable in preceding calendar periods.

**Forgetting the cumulative rate computation.** Section 2502(a) stacks this year's gifts on top of every
preceding period, so the marginal rate reflects a lifetime total, not one year.

**Assuming a nonresident alien donor has a credit.** Section 2505(a) allows it only to a citizen or
resident. The annual exclusion is separate and still applies.

**Thinking unused credit is forfeited.** Section 2505(c) is a ceiling on what is allowed for the year,
not a use-it-or-lose-it rule.

**Using the gift tax actually paid in the estate computation.** Section 2001(g)(1) requires
recomputation at the rates in effect at death.

**Expecting a separate gift tax exclusion figure.** There is none. Section 2505(a)(1) points at the
applicable credit amount under § 2010(c), which is an estate tax provision.

</div>

## How this has changed

Unification is the historical fact that explains this topic. Before 1977 the gift tax and the estate tax
had separate exemptions and separate rate schedules, and gifts were taxed at rates that were lower than
the estate tax rates by design. The Tax Reform Act of 1976 merged them into a single rate schedule with a
single credit, which is why the gift tax credit provision has to point at an estate tax provision to
find its own amount (IRC § 2505(a)(1)).

Since then the credit has moved with the exclusion. Pub. L. 119-21 § 70106 did not amend § 2505 at all —
it raised the basic exclusion amount in § 2010(c)(3), and § 2505 picked the change up automatically. The
exclusion is now {fig:estate.basic_exclusion} and permanent, having previously been scheduled to fall by
half after 2025.

That scheduled reversion produced the one live question this topic still carries. Section 2001(g)(2)
directs the Secretary to prescribe regulations dealing with any difference between the basic exclusion
amount at death and the amount applicable to gifts already made — the "clawback" problem, which arises
whenever a client uses a larger exclusion during life than is available at death. With the higher figure
now permanent, the problem has receded rather than disappeared: the statutory direction stands, the
exclusion is still indexed, and a future reduction would revive it immediately.

## Exam focus

Expect a computation with a gift history. Aggregate all periods, compute the tentative tax on the total,
subtract the tentative tax on the prior periods, then apply the credit net of what was used. The
distinguishing feature of a well-prepared candidate is doing the aggregation rather than treating the
current year in isolation.

Know that there is one credit shared with the estate tax, that § 2505(a)(1) measures it by reference to
§ 2010(c), and that § 2505(c) caps it at the year's tax.

The reliable trap is the nonresident alien donor, who has an annual exclusion but no unified credit.
Expect it as an "all of the following except" item.

## Check yourself

**1.** A donor used credit corresponding to $5,000,000 of exclusion on gifts in prior years. How much
credit is available this year?

*Answer: The applicable credit amount that would apply under IRC § 2010(c) if she died at the end of
this year, reduced by the credit allowable for all preceding calendar periods (§ 2505(a)) — so the credit
corresponding to the current basic exclusion amount less the $5,000,000 already used.*

**2.** A nonresident who is not a citizen of the United States gives United States real property to a
friend. Is a unified credit available?

*Answer: No. IRC § 2505(a) allows the credit to a citizen or resident of the United States only. The
annual exclusion under § 2503(b) remains available.*

**3.** In a year in which the credit exceeds the gift tax, what happens to the excess?

*Answer: Nothing is refunded or carried forward as a separate item. IRC § 2505(c) limits the credit
allowed to the tax imposed for the year; the unused exclusion simply remains available, because each
year's credit is computed afresh and reduced only by amounts actually allowed.*

**4.** How is this year's gift tax rate determined for a donor with substantial prior gifts?

*Answer: By the cumulative total. IRC § 2502(a) computes a tentative tax on the aggregate of this year's
taxable gifts and all preceding calendar periods and subtracts a tentative tax on the preceding periods
alone, so this year's gifts are taxed at the marginal rates the running total has reached.*

**5.** An executor is computing the subtraction for gift tax payable on gifts made when rates were
higher. Which rates apply?

*Answer: The rates in effect at the decedent's death. IRC § 2001(g)(1) substitutes them for the rates in
force when the gifts were made, both for the chapter 12 tax and for the § 2505 credit against it.*
