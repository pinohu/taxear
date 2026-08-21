---
title: "Property sales"
code: "1.5.1.b"
part: 1
domain: "Advising the Individual Taxpayer"
section: "Advising the individual taxpayer"
description: "Advising on a sale means predicting the rate, and there are four of them. Which one applies is decided by the asset and by what depreciation was taken."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 1", title: "Tax imposed — maximum capital gains rate", url: "https://www.law.cornell.edu/uscode/text/26/1" }
  - { type: IRC, ref: "§ 1221", title: "Capital asset defined", url: "https://www.law.cornell.edu/uscode/text/26/1221" }
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts — definition of collectible", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 121", title: "Exclusion of gain from sale of principal residence", url: "https://www.law.cornell.edu/uscode/text/26/121" }
  - { type: IRC, ref: "§ 1411", title: "Imposition of tax on net investment income", url: "https://www.law.cornell.edu/uscode/text/26/1411" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32, § 3.03", title: "2026 maximum capital gains rate amounts", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.2.3.b", "1.2.3.f", "1.5.1.l", "1.5.1.a", "1.5.1.c", "1.5.1.d", "1.5.1.g"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the four long-term rates in IRC § 1(h) with the 2026 breakpoints from Rev. Proc. 2025-32 § 3.03, the § 1(h)(5) collectibles definition and its look-through for partnership interests, unrecaptured § 1250 gain, the interaction with the § 1411 net investment income tax, and the real versus personal property distinction." }
---

Advising on a sale is mostly a question of predicting the rate. There is no single long-term capital gain
rate: there are four, and which applies depends on the kind of asset and on what depreciation the
taxpayer took while they owned it. Getting that wrong by one tier is a difference of eight or thirteen
percentage points on the whole gain.

## The rule

**The ordinary long-term rates.** Section 1(h) applies zero, 15 and 20 percent to adjusted net capital
gain, by reference to where the taxpayer's taxable income falls. {fig:propsale.rate_breakpoints}

**Adjusted net capital gain is a residual.** It is net capital gain reduced by unrecaptured section 1250
gain and by 28-percent rate gain, plus qualified dividend income (IRC § 1(h)(3)). So the two special
categories are carved out first and only what is left gets the zero, 15 and 20 percent ladder.

**Collectibles.** {fig:propsale.collectibles_rate} A collectible takes the § 408(m) definition without
its paragraph (3), and § 1(h)(4) combines collectibles gain with § 1202 gain into "28-percent rate
gain", reduced by collectibles losses, net short-term capital loss and long-term capital loss carried
forward under § 1212(b)(1)(B).

**And collectibles look through an entity.** Gain on selling an interest in a partnership, S corporation
or trust that is attributable to unrealised appreciation in collectibles is itself collectibles gain,
with rules similar to § 751 applying (IRC § 1(h)(5)(B)). A client who holds art through a partnership
does not convert the rate by selling the interest instead of the art.

**Depreciated real property.** {fig:propsale.unrecaptured_1250}

**Real and personal property.** {fig:propsale.personal_property} The distinction matters for several
regimes at once — § 1031 now reaches only real property, § 1245 recapture attaches to personal property
used in a business, and the § 1250 rules apply to real property.

**The additional 3.8 percent.** A gain on the sale of property not held in a non-passive trade or
business is net investment income under § 1411(c)(1)(A)(iii). For a client above the threshold, every
rate quoted above is effectively 3.8 points higher, and the planning conversation should use the combined
figure rather than the headline one.

**And the residence exclusion sits on top.** Where the asset is a principal residence, § 121 may exclude
the gain entirely before any rate question arises — covered at 1.2.3.f.

## Current figures

| Item | Amount |
| --- | --- |
| Rate breakpoints | {fig:propsale.rate_breakpoints} |
| Collectibles | {fig:propsale.collectibles_rate} |
| Unrecaptured § 1250 gain | {fig:propsale.unrecaptured_1250} |
| Personal property | {fig:propsale.personal_property} |

## How it works in practice

**Classify the asset before quoting a rate.** Collectible, depreciated real property, business personal
property, or ordinary capital asset. The four answers are 28 percent, 25 percent on the depreciation
layer, ordinary income to the extent of § 1245 recapture, and the zero-15-20 ladder.

**Then locate the taxpayer on the ladder.** The breakpoints are taxable income figures, not gain figures,
and the gain itself pushes the taxpayer up them. A client who expects the zero rate because their salary
is modest may find the gain lifts them past the breakpoint, so that part of it is taxed at 15 percent.

**Then add the 3.8 percent where it applies**, and give the client the combined number. The commonest
complaint after a large sale is that the tax was higher than the adviser said, and the omitted net
investment income tax is usually why.

**Then look for the timing levers.** Holding past one year converts short-term to long-term. Splitting a
sale across two years can keep more of the gain in a lower band, though an instalment sale brings its own
rules. Harvesting losses in the same year reduces net capital gain directly, and a collectibles loss
reduces 28-percent rate gain specifically.

<div class="scenario">
<h3>Three rates in one sale</h3>

Beatriz sells a rental building for a $260,000 gain. She had claimed $70,000 of straight-line
depreciation. She is single with other taxable income of $120,000.

The $70,000 of depreciation is unrecaptured section 1250 gain and is taxed at 25 percent. The remaining
$190,000 is adjusted net capital gain: her taxable income is well above the zero rate breakpoint, so it
is taxed at 15 percent until her total taxable income passes the 15 percent ceiling and at 20 percent
above that. And because the rental was passive, the whole gain is net investment income, adding 3.8
percent to every layer. One sale, three rates before the surtax and four effective rates after it.
</div>

<div class="scenario">
<h3>The painting held through a partnership</h3>

Idris owns a 40 percent interest in a partnership whose principal asset is a collection of paintings.
He sells the interest at a $200,000 gain, of which $180,000 is attributable to unrealised appreciation
in the paintings.

Selling the interest rather than the art does not change the rate. Section 1(h)(5)(B) treats gain on the
sale of a partnership interest attributable to unrealised appreciation in collectibles as collectibles
gain, applying rules similar to § 751. So $180,000 is 28-percent rate gain and only $20,000 joins the
ordinary ladder. Advice that treats a partnership interest as a single undifferentiated capital asset
would have understated his tax by more than $23,000.
</div>

<div class="scenario">
<h3>The gain that moved the taxpayer</h3>

Priya is single with taxable income of $42,000 before any sale, and she sells shares held for three
years at a $30,000 gain. She has been told long-term gains are tax-free at her income level.

Her income before the gain is below the 2026 zero rate ceiling for a single filer, so part of the gain
is indeed taxed at zero — but only the part that fits below the ceiling. The gain itself lifts her
taxable income past it, and the excess is taxed at 15 percent. The zero rate is a band, not a status,
and the asset being sold is what fills the band.
</div>

<div class="callout trap">

**There is no single long-term rate.** Four categories, and the two special ones are carved out of the
base before the ladder applies.

**Collectibles are 28 percent, not 20.** And the definition comes from § 408(m), which is wider than
most people assume — metals, gems, stamps, coins and alcoholic beverages as well as art and antiques.

**A partnership interest does not launder a collectible.** Section 1(h)(5)(B) looks through.

**Unrecaptured § 1250 gain is 25 percent, not ordinary income.** It is the depreciation layer on real
property, and it is a maximum rate rather than an addition.

**The breakpoints are taxable income, not gain.** The gain fills the band from the bottom of whatever is
left.

**Add 3.8 percent for a client above the § 1411 threshold**, on the whole gain.

**Land is not personal property.** Nor is anything permanently affixed to it — the distinction runs
through § 1031, § 1245 and § 1250 alike.

**Section 121 comes first.** Where the asset is a principal residence, the exclusion is applied before
any rate question.
</div>

## How this has changed

The rate structure in § 1(h) is unchanged and Pub. L. 119-21 did not amend it. What moves annually are
the breakpoints, and they move by a route worth knowing: § 1(h) as printed refers to rates "below 25
percent" and "below 39.6 percent" that no longer exist in the rate tables, and the operative figures come
from § 1(j)(5) as indexed. This is the same structural point recorded at 1.2.3.b — **the section alone
gives the wrong answer, and the citation is incomplete without the adjusting instrument.** Rev. Proc.
2025-32 § 3.03 supplies the 2026 amounts under the heading "Maximum Capital Gains Rate (§ 1(h),
§ 1(j)(5))", naming both provisions for exactly this reason.

Two older changes still shape advice. Section 1031 has reached only real property since 2018, so a
client planning to exchange business equipment or artwork cannot defer the gain that way. And the
§ 1411 net investment income tax, in force since 2013 with thresholds that have never been indexed,
now reaches a much wider population than it did — so the combined rate rather than the headline rate is
increasingly the right number to quote.

## Exam focus

Know the four rates and what triggers each: 28 percent for collectibles, 25 percent for unrecaptured
§ 1250 gain, ordinary rates for § 1245 recapture, and the zero-15-20 ladder for everything else.

Know that adjusted net capital gain is a residual — the special categories come out first.

Know the collectibles look-through for partnership, S corporation and trust interests, because it is the
one point on this topic that is genuinely counter-intuitive.

Know that the breakpoints are taxable income thresholds and that the gain itself moves the taxpayer
along them, and know to add the net investment income tax where the threshold is crossed.

## Check yourself

**1.** Which of a copyright, a vehicle, land and a collectible is not personal property?

*Answer: Land. Personal property is all property other than real property, and real property is land and
what is permanently affixed to it. A copyright, a vehicle and a collectible are all personal property,
though they are taxed very differently from one another on sale.*

**2.** A taxpayer sells a coin collection held for six years at a $40,000 gain. What rate applies?

*Answer: 28 percent, as 28-percent rate gain. Coins are collectibles within IRC § 408(m) as applied by
§ 1(h)(5)(A), and § 1(h)(4) combines collectibles gain with § 1202 gain into a category taxed at a
maximum of 28 percent — reduced by collectibles losses, net short-term capital loss and long-term capital
loss carried forward.*

**3.** A rental property is sold at a gain after $85,000 of straight-line depreciation. How is that
$85,000 taxed?

*Answer: As unrecaptured section 1250 gain, at a maximum rate of 25 percent under IRC § 1(h)(1)(E) and
(6). It is not ordinary income — that is § 1245 recapture, which applies to personal property — and it
is not eligible for the zero, 15 or 20 percent rates.*

**4.** Does selling a partnership interest instead of the underlying artwork change the rate?

*Answer: No. IRC § 1(h)(5)(B) treats gain on the sale of an interest in a partnership, S corporation or
trust attributable to unrealised appreciation in collectibles as collectibles gain, applying rules
similar to § 751. The 28 percent rate follows the underlying asset.*

**5.** A single taxpayer with $42,000 of other taxable income realises a $30,000 long-term gain. Is the
whole gain taxed at zero?

*Answer: No. The zero rate applies only to so much of the adjusted net capital gain as fits below the
maximum zero rate amount for the filing status, measured by taxable income. The gain itself lifts the
taxpayer past that ceiling, and the excess is taxed at 15 percent.*
