---
title: "Disposition of property or assets"
code: "2.2.3.b"
part: 2
domain: "Business Tax Preparation"
section: "Business assets"
description: "Depreciation recapture is computed before the netting, so a profitable sale of equipment can be ordinary income while the building beside it is capital gain."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 1001", title: "Determination of amount of and recognition of gain or loss", url: "https://www.law.cornell.edu/uscode/text/26/1001" }
  - { type: IRC, ref: "§ 1231", title: "Property used in the trade or business and involuntary conversions", url: "https://www.law.cornell.edu/uscode/text/26/1231" }
  - { type: IRC, ref: "§ 1245", title: "Gain from dispositions of certain depreciable property", url: "https://www.law.cornell.edu/uscode/text/26/1245" }
  - { type: IRC, ref: "§ 1250", title: "Gain from dispositions of certain depreciable realty", url: "https://www.law.cornell.edu/uscode/text/26/1250" }
  - { type: IRC, ref: "§ 1(h)(6)", title: "Unrecaptured section 1250 gain", url: "https://www.law.cornell.edu/uscode/text/26/1" }
  - { type: IRC, ref: "§ 1221", title: "Capital asset defined", url: "https://www.law.cornell.edu/uscode/text/26/1221" }
  - { type: IRC, ref: "§ 164(d)", title: "Apportionment of taxes on real property between seller and purchaser", url: "https://www.law.cornell.edu/uscode/text/26/164" }
  - { type: IRC, ref: "§ 1016", title: "Adjustments to basis", url: "https://www.law.cornell.edu/uscode/text/26/1016" }
  - { type: IRC, ref: "§ 179", title: "Election to expense certain depreciable business assets", url: "https://www.law.cornell.edu/uscode/text/26/179" }
  - { type: IRC, ref: "§ 168", title: "Accelerated cost recovery system", url: "https://www.law.cornell.edu/uscode/text/26/168" }
  - { type: IRC, ref: "§ 461(l)", title: "Limitation on excess business losses of noncorporate taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/461" }
  - { type: IRC, ref: "§ 172", title: "Net operating loss deduction", url: "https://www.law.cornell.edu/uscode/text/26/172" }
forms: []
related: ["2.2.3.a", "2.2.3.c", "2.2.3.d", "2.2.2.k", "2.2.2.c", "2.2.3.e", "2.2.4.e"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 1001 computation of gain or loss and what enters the amount realised, the IRC § 1231(b) definition of property used in the trade or business and the IRC § 1231(a) netting that gives the best of both characters, the IRC § 1231(c) five-year lookback that recaptures earlier ordinary losses, and the IRC § 1245 and IRC § 1250 recapture rules with the IRC § 1(h)(6) unrecaptured gain that survives them." }
---

Selling a business asset raises two questions in a fixed order, and taking them in the wrong order
gives the wrong answer. How much gain, and what kind. The second is decided by three provisions
that operate in sequence, and the recapture rules run before the netting rather than after it.

## The rule

**The amount.** {fig:disp.gain_loss} (IRC § 1001(a)), where
{fig:disp.amount_realized} (IRC § 1001(b)).

**Recapture first.** {fig:disp.1245_recapture} (IRC § 1245(a)(1)) for
{fig:disp.1245_property} (IRC § 1245(a)(3)); and {fig:disp.1250_recapture}
(IRC § 1250(a)(1)(A)) for depreciable realty.

**Then the netting.** {fig:disp.1231_property} (IRC § 1231(b)(1)), and
{fig:disp.1231_netting} (IRC § 1231(a)).

**Then the lookback.** {fig:disp.1231_lookback} (IRC § 1231(c)).

**And a rate, not a character.** {fig:disp.unrecaptured_1250} (IRC § 1(h)(6)(A)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Gain or loss | {fig:disp.gain_loss} | IRC § 1001(a) |
| Amount realised | {fig:disp.amount_realized} | IRC § 1001(b) |
| IRC § 1245 property | {fig:disp.1245_property} | IRC § 1245(a)(3) |
| IRC § 1245 recapture | {fig:disp.1245_recapture} | IRC § 1245(a)(1) |
| IRC § 1250 recapture | {fig:disp.1250_recapture} | IRC § 1250(a)(1)(A) |
| Unrecaptured IRC § 1250 gain | {fig:disp.unrecaptured_1250} | IRC § 1(h)(6)(A) |
| Property used in the trade or business | {fig:disp.1231_property} | IRC § 1231(b)(1) |
| The netting rule | {fig:disp.1231_netting} | IRC § 1231(a) |
| Five-year lookback | {fig:disp.1231_lookback} | IRC § 1231(c) |
| Basis for the computation | {fig:assetbasis.adjustments} | IRC § 1016(a) |

## How it works in practice

**Compute the gain, then take the character in three steps.** Recapture under IRC § 1245 or
IRC § 1250 comes off first and is ordinary. Whatever is left is a IRC § 1231 gain and goes into
the netting. Whatever survives the netting as a net gain then meets the IRC § 1231(c) lookback.
Reversing any two of those changes the answer, and questions in this area are usually built on
exactly that.

**IRC § 1231 is a one-way bet, which is why it is policed.**
{fig:disp.1231_netting} (IRC § 1231(a)). A net gain is long-term capital gain; a net loss is
ordinary. The taxpayer gets the favourable rate on gains and the unlimited deduction on losses.
{fig:disp.1231_lookback} (IRC § 1231(c)) is the price: a net gain is ordinary to the extent of net
IRC § 1231 losses deducted in the five preceding years and not already recaptured.

**Note what the lookback does not do.** It does not disallow anything and it does not reach back
to amend earlier years. It changes the character of the current year's gain, and the pool of
recapturable losses is a rolling five-year window that empties as it is used.

**IRC § 1245 recaptures everything.** {fig:disp.1245_recapture}
(IRC § 1245(a)(1)). For personal property, all the depreciation ever taken comes back as ordinary
income to the extent of the gain. Because bonus depreciation and IRC § 179 now write most
equipment off immediately, adjusted basis is usually zero and the whole sale price is ordinary
income — the entire gain, not a portion of it.

**IRC § 1250 recaptures almost nothing.** {fig:disp.1250_recapture}
(IRC § 1250(a)(1)(A)) reaches only "additional depreciation," meaning the excess of accelerated
over straight line. Real property placed in service after 1986 is depreciated straight line under
IRC § 168, so there is no additional depreciation and IRC § 1250(a) recaptures nothing at all on
almost every building a business will sell.

**What fills the gap is a rate rather than a recapture.**
{fig:disp.unrecaptured_1250} (IRC § 1(h)(6)(A)). The straight line depreciation that IRC § 1250
does not recapture is still long-term capital gain, but it is taxed at its own rate rather than
at the general capital gains rate. For a non-corporate taxpayer this is where the depreciation on
a building comes home, and it is easy to miss because nothing on the face of IRC § 1250 produces
it.

**The definition of IRC § 1231 property excludes what a dealer holds.**
{fig:disp.1231_property} (IRC § 1231(b)(1)). Inventory and property held primarily for sale to
customers are out, as are self-created intangibles held by their creator. So a builder's houses
are ordinary income on sale however long they are held, and a landlord's building is IRC § 1231
property after a year.

**Amount realised is more than the cash.** {fig:disp.amount_realized}
(IRC § 1001(b)). Debt the buyer assumes or takes subject to is part of it, and the property tax
adjustments follow IRC § 164(d) rather than the contract — the same rule that governs the
purchaser's basis, read from the other side.

<div class="scenario">
<h3>Two assets, one sale, two characters</h3>

A manufacturer sells its site for $1,400,000, allocated $900,000 to the building and $500,000 to
the machinery inside it. Both have been held for years. The building cost $700,000 and has
$260,000 of straight line depreciation, so its adjusted basis is $440,000. The machinery cost
$620,000 and was fully expensed, so its adjusted basis is zero.

**The machinery.** Gain is $500,000. {fig:disp.1245_recapture} (IRC § 1245(a)(1)) — recomputed
basis is $620,000, the amount realised is $500,000, the lower is $500,000, and adjusted basis is
zero. The whole $500,000 is ordinary income and nothing reaches IRC § 1231.

**The building.** Gain is $460,000. {fig:disp.1250_recapture} (IRC § 1250(a)(1)(A)) recaptures the
applicable percentage of the **additional** depreciation, and there is none, because the building
was depreciated straight line. So IRC § 1250(a) produces nothing and the whole $460,000 is a
IRC § 1231 gain.

**The netting.** With no IRC § 1231 losses, {fig:disp.1231_netting} treats the $460,000 as
long-term capital gain — but {fig:disp.unrecaptured_1250} (IRC § 1(h)(6)(A)) carves out $260,000 of
it as unrecaptured IRC § 1250 gain, taxed at its own rate, leaving $200,000 at the general rate.

One sale, three different rates, and the split is decided entirely by which recapture provision
each asset falls under.
</div>

<div class="scenario">
<h3>The lookback that arrived four years late</h3>

A business had a net IRC § 1231 loss of $180,000 in 2023, deducted in full as ordinary. It had no
IRC § 1231 transactions in 2024 or 2025. In 2026 it sells land used in the business at a $300,000
gain, with no recapture because land is not depreciable.

{fig:disp.1231_netting} (IRC § 1231(a)(1)) would make the whole $300,000 long-term capital gain.

{fig:disp.1231_lookback} (IRC § 1231(c)) intervenes. The non-recaptured net IRC § 1231 losses of
the five preceding years are $180,000, none of it recaptured yet, so $180,000 of the 2026 gain is
ordinary income and only $120,000 is long-term capital gain.

The 2023 return is untouched. What has happened is that the character of the 2026 gain has been
adjusted to reflect the benefit already taken, and the pool is now empty.

Change one fact: move the 2023 loss to 2020. It would then be outside the five-year window in
2026, the pool would be nil, and the whole $300,000 would be capital gain. The window is the whole
provision, and a business that can defer a gain past the fifth year converts $180,000 of ordinary
income into capital gain by doing nothing.
</div>

<div class="scenario">
<h3>The equipment nobody expected to be ordinary</h3>

A consultancy bought a $90,000 vehicle fleet in 2024, expensed it in full under IRC § 179, and
sells it in 2026 for $52,000.

The owner expects a capital gain, because the fleet was business property held more than a year.

Adjusted basis is zero, so gain is $52,000. {fig:disp.1245_recapture} (IRC § 1245(a)(1)): recomputed
basis is the $90,000 cost plus the adjustments, the amount realised is $52,000, the lower of the
two is $52,000, and adjusted basis is nil. The entire $52,000 is ordinary income and it is
"recognised notwithstanding any other provision of this subtitle."

Nothing reaches IRC § 1231, so nothing is netted and nothing goes to the capital gains rates.

This is now the ordinary case rather than an exception. Because IRC § 179 and bonus depreciation
write off most business equipment in the year it is acquired, almost every subsequent sale of
equipment produces gain equal to the whole price, and all of it is ordinary. The immediate
deduction was not free — it converted a future capital gain into future ordinary income.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>Recapture is computed before the netting.</strong> IRC § 1245(a)(1) and
IRC § 1250(a)(1)(A) take their ordinary income first, and only the remainder is a IRC § 1231
item.</p>

<p><strong>IRC § 1250 recaptures nothing on a modern building.</strong>
{fig:disp.1250_recapture} reaches only additional depreciation, and post-1986 realty is
depreciated straight line.</p>

<p><strong>Unrecaptured IRC § 1250 gain is a rate, not a recapture.</strong>
{fig:disp.unrecaptured_1250} (IRC § 1(h)(6)(A)) — it remains long-term capital gain and is taxed at
its own rate. It is a non-corporate concept.</p>

<p><strong>A net IRC § 1231 loss is ordinary and a net gain is capital.</strong>
{fig:disp.1231_netting}. Answer choices that make both capital, or both ordinary, are wrong.</p>

<p><strong>The lookback is five years and rolling.</strong> {fig:disp.1231_lookback}
(IRC § 1231(c)(2)) — losses already recaptured come out of the pool, and losses older than five
years drop out of it.</p>

<p><strong>Inventory is never IRC § 1231 property.</strong> {fig:disp.1231_property}
(IRC § 1231(b)(1)(A), (B)) excludes it and property held primarily for sale to customers, however
long it is held.</p>
</div>

## How this has changed

None of IRC §§ 1001, 1231, 1245 or 1250 was amended by Pub. L. 119-21, so the 2026 rules are the
2025 rules. What has changed is how often each of them bites, and the change is entirely a
consequence of provisions on other pages.

**IRC § 1245 now reaches almost every equipment sale in full.** Before 2017, equipment was
depreciated over its recovery period and a sale part way through produced a mixture of recapture
and IRC § 1231 gain. Since Pub. L. 115-97 raised expensing and bonus depreciation, and
Pub. L. 119-21 § 70301 made the full bonus allowance permanent, adjusted basis is usually zero from
the first year. The consequence is that the whole sale price is ordinary income under
IRC § 1245(a)(1), and there is nothing left for IRC § 1231 to net.

That is worth stating plainly to a client, because it is the delayed cost of the immediate
deduction and it does not appear anywhere on the return in the year the deduction is taken.

**IRC § 1250 has been largely inoperative since 1986.** The Tax Reform Act of 1986 put real
property onto straight line recovery under IRC § 168, and IRC § 1250(a) reaches only the excess of
accelerated over straight line. The section remains in the Code and is regularly cited, but on a
building placed in service after 1986 it produces nothing. What people mean when they say
"IRC § 1250 recapture" is almost always the unrecaptured IRC § 1250 gain of IRC § 1(h)(6), which is
a different thing in a different section and applies only to non-corporate taxpayers.

**One live interaction to watch.** A net IRC § 1231 loss is ordinary, so it feeds into the
aggregate that IRC § 461(l) tests for a non-corporate taxpayer — and IRC § 461(l) became permanent
in July 2025. A year of large equipment disposals at a loss can therefore run into the excess
business loss limitation, and the loss that survives becomes a net operating loss subject to the
IRC § 172(a)(2) cap. The character rules on this page decide what enters that computation.

## Exam focus

Take the three steps in order and say them: recapture, netting, lookback. Most questions in this
area supply facts for all three and are testing the sequence.

Know that IRC § 1245 recaptures all depreciation to the extent of gain, and that IRC § 1250
recaptures only additional depreciation, which post-1986 realty does not have.

Know that unrecaptured IRC § 1250 gain is a rate applied to long-term capital gain, that it is
non-corporate, and that it is not produced by IRC § 1250 at all.

Finally, know the lookback as five years, rolling, and applying only to a net IRC § 1231 gain.

## Check yourself

**1.** A business sells fully expensed machinery for $70,000. What is the character of the gain?

*Answer: Ordinary income in full. {fig:disp.1245_recapture} (IRC § 1245(a)(1)) — adjusted basis is
nil, the lower of recomputed basis and the amount realised is $70,000, and the whole excess over
adjusted basis is ordinary. Nothing reaches IRC § 1231.*

**2.** A company sells a warehouse placed in service in 2005 at a $400,000 gain, having taken
$150,000 of straight line depreciation. How much does IRC § 1250 recapture?

*Answer: Nothing. {fig:disp.1250_recapture} (IRC § 1250(a)(1)(A)) reaches only additional
depreciation — the excess of accelerated over straight line — and a post-1986 building has none.
For a non-corporate seller, {fig:disp.unrecaptured_1250} would treat $150,000 of the gain as
unrecaptured IRC § 1250 gain taxed at its own rate.*

**3.** A business has $90,000 of IRC § 1231 gains and $140,000 of IRC § 1231 losses this year. How
are they treated?

*Answer: All as ordinary. {fig:disp.1231_netting} (IRC § 1231(a)(2)) — because the gains do not
exceed the losses, none of them is treated as long-term capital, so the $50,000 net loss is an
ordinary deduction.*

**4.** A business with a $200,000 net IRC § 1231 gain this year deducted a $75,000 net IRC § 1231
loss three years ago. What is the character?

*Answer: $75,000 ordinary and $125,000 long-term capital gain. {fig:disp.1231_lookback}
(IRC § 1231(c)) treats the net gain as ordinary to the extent of non-recaptured net IRC § 1231
losses from the five most recent preceding years.*

**5.** A property developer sells a house it built and held for three years. Is the gain a
IRC § 1231 gain?

*Answer: No. {fig:disp.1231_property} (IRC § 1231(b)(1)(B)) excludes property held primarily for
sale to customers in the ordinary course of the trade or business, so the gain is ordinary income
regardless of the holding period.*
