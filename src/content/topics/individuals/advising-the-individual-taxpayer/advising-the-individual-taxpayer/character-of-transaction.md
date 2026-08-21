---
title: "Character of transaction (e.g., use of capital gain rates versus ordinary income rates)"
code: "1.5.1.l"
part: 1
domain: "Advising the Individual Taxpayer"
section: "Advising the individual taxpayer"
description: "The rate difference is the largest single lever in individual planning, and it is decided by facts set long before the sale — asset class, holding period and use."
status: published
taxYear: 2026
lastReviewed: "2026-08-20"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 64", title: "Ordinary income defined", url: "https://www.law.cornell.edu/uscode/text/26/64" }
  - { type: IRC, ref: "§ 65", title: "Ordinary loss defined", url: "https://www.law.cornell.edu/uscode/text/26/65" }
  - { type: IRC, ref: "§ 1221", title: "Capital asset defined", url: "https://www.law.cornell.edu/uscode/text/26/1221" }
  - { type: IRC, ref: "§ 1222", title: "Other terms relating to capital gains and losses", url: "https://www.law.cornell.edu/uscode/text/26/1222" }
  - { type: IRC, ref: "§ 1231", title: "Property used in the trade or business and involuntary conversions", url: "https://www.law.cornell.edu/uscode/text/26/1231" }
  - { type: IRC, ref: "§ 1245", title: "Gain from dispositions of certain depreciable property", url: "https://www.law.cornell.edu/uscode/text/26/1245" }
  - { type: IRC, ref: "§ 1250", title: "Gain from dispositions of certain depreciable realty", url: "https://www.law.cornell.edu/uscode/text/26/1250" }
  - { type: IRC, ref: "§ 1202", title: "Partial exclusion for gain from certain small business stock", url: "https://www.law.cornell.edu/uscode/text/26/1202" }
  - { type: IRC, ref: "§ 1", title: "Tax imposed", url: "https://www.law.cornell.edu/uscode/text/26/1" }
forms: []
related: ["1.5.1.b", "1.5.1.k", "1.2.3.b", "1.2.3.c", "1.5.1.j"]
changelog:
  - { date: "2026-08-20", summary: "Initial draft. Sets out how character is determined and where it can be influenced — the IRC § 64 and § 65 definitions, the § 1221(a) capital asset exclusions, the § 1222 holding period, the § 1231 hotchpot with its five-year lookback in § 1231(c), depreciation recapture under §§ 1245 and 1250, the rate buckets in § 1(h), and the rewritten § 1202 exclusion with its three-year tiering and $15,000,000 per-issuer limit for stock acquired after 4 July 2025." }
---

The gap between the top ordinary rate and the top long-term capital gain rate is the largest single
number in individual planning. Nothing else a preparer can influence moves as much money. But character
is not chosen at the point of sale — it is the product of what the asset is, how long it was held, and
what it was used for, and most of those facts are fixed years earlier. The planning work is therefore
mostly about not destroying favourable character by accident, and about recognising the handful of
places where an election or a delay genuinely changes it.

## The rule

**The default is capital, and the exclusions do the work.** {fig:capgain.capital_asset} Everything that
is not excluded is a capital asset, so the analysis always runs through the exclusion list, not through
a positive definition.

**Ordinary is defined by reference to capital.** {fig:character.ordinary_income_defined}
{fig:character.ordinary_loss_defined} The second sentence of each section matters: a provision elsewhere
in the Code that labels something ordinary income makes it ordinary income for every purpose, which is
how recapture works.

**Holding period decides the rate, and the count is exact.** {fig:capgain.holding_period}

**Business property sits in its own category.** {fig:sec1231.trade_or_business_property} The netting is
what makes § 1231 valuable: {fig:disposition.1231_netting} That is the best of both worlds — long-term
capital treatment on a net gain, ordinary deduction on a net loss — and Congress bought it back with a
lookback: {fig:sec1231.lookback}

**Recapture converts gain back to ordinary.** {fig:recapture.1245} For real property,
{fig:recapture.1250} — but in practice {fig:recapture.1250_modern_property} What is left instead is a
rate bucket rather than ordinary income: {fig:recapture.unrecaptured_1250_gain}

**The rate buckets are not one rate.** {fig:capgain.rate_structure} Above the general buckets sit two
others: {fig:capgain.collectibles} and the 25 percent unrecaptured § 1250 gain above. The residue that
gets the 0, 15 and 20 percent rates is {fig:capgain.adjusted_net_capital_gain}

**Qualified small business stock can take the rate to zero.** {fig:qsbs.exclusion_tiers} The limit is
{fig:qsbs.per_issuer_limit} and the issuer test is {fig:qsbs.gross_assets}

## Current figures

| Item | Rule |
| --- | --- |
| Capital asset | {fig:capgain.capital_asset} |
| Ordinary income | {fig:character.ordinary_income_defined} |
| Ordinary loss | {fig:character.ordinary_loss_defined} |
| Holding period | {fig:capgain.holding_period} |
| Section 1231 property | {fig:sec1231.trade_or_business_property} |
| Section 1231 netting | {fig:disposition.1231_netting} |
| Section 1231 lookback | {fig:sec1231.lookback} |
| Section 1245 recapture | {fig:recapture.1245} |
| Section 1250 recapture in practice | {fig:recapture.1250_modern_property} |
| Unrecaptured section 1250 gain | {fig:recapture.unrecaptured_1250_gain} |
| Rate structure | {fig:capgain.rate_structure} |
| Zero rate amount | {fig:capgain.zero_rate_amount} |
| Fifteen percent rate amount | {fig:capgain.fifteen_rate_amount} |
| Collectibles and section 1202 gain | {fig:capgain.collectibles} |
| Small business stock exclusion | {fig:qsbs.exclusion_tiers} |
| Per-issuer limit | {fig:qsbs.per_issuer_limit} |
| Issuer gross assets test | {fig:qsbs.gross_assets} |
| Capital loss allowance | {fig:capgain.loss_limit} |

## How it works in practice

Character questions in practice fall into four groups.

**Assets whose character is already fixed.** Listed stock, a personal residence, a bond — these are
capital assets and the only variable is the holding period. The advice is short: check the acquisition
date before selling, and if the sale is close to the anniversary, wait. A single day changes the rate
bucket for the entire gain.

**Assets whose character depends on use, and where use can change.** The same building is § 1231
property in a landlord's hands and inventory in a developer's. A client who begins subdividing and
marketing raw land can convert what would have been capital gain into ordinary income, and the change is
gradual and unannounced. This is worth raising the first time a client mentions "developing" anything.

**Transactions where recapture is waiting.** Every depreciation deduction taken over the life of an
asset is a claim on its eventual sale. The client who has been happily deducting depreciation on
equipment for six years is holding an ordinary income liability, not a capital gain asset, up to the
amount of the depreciation. Model the sale before the client commits to a price.

**The lookback nobody remembers.** A client with a § 1231 loss two years ago and a § 1231 gain this year
does not get long-term capital treatment on the gain up to the earlier loss. The prior return has to be
looked at. This is the most common surprise in the topic, because the earlier loss was a *benefit* at
the time and clients do not associate it with a later cost.

**Where character genuinely can be planned.** Three levers are real. First, the holding period — a
deferral of days or weeks. Second, an installment sale under § 453, which does not change character but
spreads the gain across years and can keep a client inside a lower rate bucket. Third, § 1202 stock,
where the planning happens years earlier: the corporation has to be a qualified small business at
issuance, and the holding period now has tiers rather than a cliff.

<div class="scenario">
<h3>The anniversary that was three days away</h3>

A client bought 3,000 shares on 14 March of the prior year and wants to sell on 11 March. The gain is
$88,000 and his income puts him at the top rate.

Sold on 11 March the holding period is not more than one year, so the whole $88,000 is short-term and
taxed at ordinary rates. Sold on 15 March — the day after the anniversary of the day after acquisition —
it is long-term. Three days of market risk against the spread between the ordinary rate and the 20
percent rate on $88,000. Nothing else in the transaction changes.

</div>

<div class="scenario">
<h3>The equipment sale that was mostly ordinary</h3>

A client sells a piece of machinery for $70,000. She paid $95,000 for it, has taken $60,000 of
depreciation, and her adjusted basis is $35,000. She expects a $35,000 long-term capital gain.

She does not get one. Recomputed basis is $95,000, and § 1245 makes the gain ordinary income to the
extent of the lower of the recomputed basis or the amount realised, over the adjusted basis — the whole
$35,000 here, because the gain does not exceed the depreciation taken. There is no § 1231 gain at all,
and no capital gain rate applies to any part of it. Had she sold for $110,000, the first $60,000 would
be ordinary and the remaining $15,000 would be § 1231 gain.

</div>

<div class="scenario">
<h3>The lookback that ate the gain</h3>

A client sold a warehouse at a $40,000 § 1231 loss three years ago, which he deducted in full against
ordinary income. This year he sells equipment at a $52,000 § 1231 gain with no other § 1231 items.

Only $12,000 is long-term capital gain. Under § 1231(c) the net § 1231 gain is ordinary income to the
extent of non-recaptured net § 1231 losses from the five most recent preceding years, and the $40,000
loss is sitting there unrecaptured. He got an ordinary deduction three years ago and pays ordinary tax
on the same amount now. The netting rule is a timing benefit across years, not a permanent one.

</div>

<div class="scenario">
<h3>Four years, and the difference a tier makes</h3>

A client bought stock in a qualified small business in September 2025 — after the applicable date — and
is offered a buyout in late 2029, at which point she will have held it four years. Her gain would be
$4,000,000.

At four years the applicable percentage is 75 percent, so $3,000,000 is excluded and $1,000,000 is
taxable. Holding into September 2030 takes the percentage to 100 and the taxable gain to zero. Under the
pre-July-2025 regime she would have had nothing at all at four years — the old rule was a cliff at more
than five years — so the tiering has turned an all-or-nothing wait into a calculable one. Her whole gain
is inside the per-issuer limit either way.

</div>

<div class="callout trap">

**Counting the holding period from the purchase date.** The day of acquisition is excluded. Property
bought on 5 May first becomes long-term when sold on 6 May of the following year, not 5 May
(IRC § 1222).

**Assuming § 1231 always gives capital treatment.** It gives capital treatment on a net gain only. On a
net loss the same items are ordinary — which is favourable — and the lookback in § 1231(c) claws the
benefit back against later gains.

**Treating recapture as a rate.** Section 1245 recapture is ordinary income, not a 25 percent bucket.
The 25 percent figure belongs to unrecaptured § 1250 gain, which is a different thing arising on real
property (IRC § 1(h)(1)(D)).

**Expecting § 1250 recapture on a modern building.** {fig:recapture.1250_modern_property} The gain shows
up as unrecaptured § 1250 gain in the 25 percent bucket instead, and a client told to expect ordinary
income will be confused by a return that shows none.

**Forgetting that self-created property is not capital in the creator's hands.**
{fig:capgain.self_created}

**Reading § 1202 as a single rule.** Stock acquired on or before 4 July 2025 and stock acquired after it
are on different regimes — different holding periods, different percentages and different dollar limits
— and a client with two tranches has both (IRC § 1202(a)(6)).

**Assuming a capital loss is worth its face value.** {fig:capgain.loss_limit} A large capital loss
against ordinary income is released a little at a time.

</div>

## How this has changed

The structural rules here are old and stable. Sections 64, 65, 1221, 1222 and 1231 have not been
materially amended in decades, and Pub. L. 119-21 did not touch them.

What the 2025 Act did change, substantially, is § 1202. The regime it replaced was
{fig:qsbs.superseded_regime} Now {fig:qsbs.exclusion_tiers} The per-issuer limit is
{fig:qsbs.per_issuer_limit}, and the issuer test has risen to {fig:qsbs.gross_assets} The Act also
struck the § 57(a)(7) preference that used to apply to a portion of excluded gain. All of these run off
the applicable date — the enactment date, 4 July 2025 — so the practical effect is that any client
holding pre-July-2025 qualified small business stock is on the old rules for that tranche indefinitely.

The other change worth noting is not a change to character at all but to the environment around it: with
the rate buckets indexed and the zero rate amount at {fig:capgain.zero_rate_amount}, a client with
modest ordinary income has real room to realise long-term gain at no federal tax, which makes deliberate
gain harvesting worth considering in low-income years.

## Exam focus

The reliable questions are computational. Expect to be given a depreciable asset with its cost,
accumulated depreciation and sale price, and asked to split the gain between ordinary recapture and
§ 1231 gain — the discipline is to compute recomputed basis first, then take the lower of it or the
amount realised, then subtract adjusted basis.

Expect a holding period question where the answer turns on one day, and expect § 1231(c) to appear as a
prior-year loss buried in the facts. Know that collectibles sit at 28 percent and unrecaptured § 1250
gain at 25 percent, and that neither is the 20 percent rate.

For § 1202, know that the regime split on the applicable date and that the current tiers are 50 percent
at three years, 75 at four and 100 at five or more. Questions written before July 2025 will assume the
superseded regime — {fig:qsbs.superseded_regime}

## Check yourself

**1.** A taxpayer acquires stock on 2 February and sells it on 2 February of the following year. Is the
gain long-term?

*Answer: No. IRC § 1222 requires the property to be held for more than one year. The day of acquisition
is excluded from the count, so the holding period first exceeds one year on 3 February. A sale on
2 February produces short-term gain.*

**2.** A sole proprietor sells equipment for $48,000. Cost was $80,000 and depreciation taken was
$50,000. How is the $18,000 gain characterised?

*Answer: All ordinary income. Recomputed basis is $80,000, adjusted basis is $30,000, and IRC § 1245(a)
makes ordinary the excess over adjusted basis of the lower of recomputed basis ($80,000) or amount
realised ($48,000) — that is $18,000, the entire gain. Nothing is left for § 1231.*

**3.** A taxpayer has a net section 1231 gain of $25,000 this year and had a net section 1231 loss of
$18,000 two years ago that has not been recaptured. What is the character of this year's gain?

*Answer: $18,000 ordinary and $7,000 long-term capital. IRC § 1231(c)(1) treats net section 1231 gain as
ordinary income to the extent of non-recaptured net section 1231 losses from the five most recent
preceding taxable years.*

**4.** A collector sells an antique held for eleven years at a $40,000 gain. Her other income puts her
in the top bracket. What rate applies to the gain?

*Answer: 28 percent. Collectibles gain is taken out of the adjusted net capital gain that receives the
0, 15 and 20 percent rates and is taxed under the separate 28-percent rate gain rule in IRC § 1(h)(4).*

**5.** A taxpayer acquired qualified small business stock in 2023 and sells it after four years. How
much of the gain is excluded?

*Answer: None. The stock was acquired on or before the applicable date of 4 July 2025, so it is governed
by IRC § 1202(a)(1)(A), which requires a holding period of more than five years. The tiered percentages
in § 1202(a)(5) apply only to stock acquired after that date.*
