---
title: "Depreciation recovery (e.g., recapture, IRC Section 280F)"
code: "2.2.4.e"
part: 2
domain: "Business Tax Preparation"
section: "Analysis of financial records"
description: "Depreciation reduces basis whether or not it was claimed, so recapture on sale runs on what was allowable, and dropping below half business use recaptures it early."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 167", title: "Depreciation", url: "https://www.law.cornell.edu/uscode/text/26/167" }
  - { type: IRC, ref: "§ 168", title: "Accelerated cost recovery system", url: "https://www.law.cornell.edu/uscode/text/26/168" }
  - { type: IRC, ref: "§ 179", title: "Election to expense certain depreciable business assets", url: "https://www.law.cornell.edu/uscode/text/26/179" }
  - { type: IRC, ref: "§ 280F", title: "Limitation on depreciation for luxury automobiles and listed property", url: "https://www.law.cornell.edu/uscode/text/26/280F" }
  - { type: IRC, ref: "§ 1016", title: "Adjustments to basis", url: "https://www.law.cornell.edu/uscode/text/26/1016" }
  - { type: IRC, ref: "§ 1245", title: "Gain from dispositions of certain depreciable property", url: "https://www.law.cornell.edu/uscode/text/26/1245" }
  - { type: IRC, ref: "§ 1250", title: "Gain from dispositions of certain depreciable realty", url: "https://www.law.cornell.edu/uscode/text/26/1250" }
  - { type: IRC, ref: "§ 1231", title: "Property used in the trade or business and involuntary conversions", url: "https://www.law.cornell.edu/uscode/text/26/1231" }
  - { type: IRC, ref: "§ 1", title: "Tax imposed", url: "https://www.law.cornell.edu/uscode/text/26/1" }
  - { type: Reg, ref: "§ 1.179-1", title: "Election to expense certain depreciable assets", url: "https://www.law.cornell.edu/cfr/text/26/1.179-1" }
  - { type: RevProc, ref: "Rev. Proc. 2026-15", title: "Depreciation limitations for passenger automobiles placed in service in 2026", url: "https://www.irs.gov/pub/irs-drop/rp-26-15.pdf" }
  - { type: Notice, ref: "Notice 2026-10", title: "2026 standard mileage rates", url: "https://www.irs.gov/pub/irs-drop/n-26-10.pdf" }
forms: []
related: ["2.2.4.c", "2.2.3.b", "2.2.2.c", "2.2.2.f", "2.2.4.g"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 1016(a)(2) allowed-or-allowable rule and the IRC § 1245(a)(2) recomputed basis that follows from it, the IRC § 1245 and § 1250 recapture provisions with their different mechanics, the IRC § 280F(b) drop to the alternative depreciation system and its excess depreciation recapture when qualified business use falls to half or less, the Reg. § 1.179-1(e)(1) recapture of an expensing election, and the 2026 IRC § 280F(a) limitation tables from Rev. Proc. 2026-15." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed the existing scenarios." }
---

<div class="plain-terms">
When a business deducts part of an asset's cost each year, that deduction lowers the asset's basis.
Basis is what the asset is treated as having cost for tax purposes. Sell the asset later, and the
gain is measured against that lower basis. Part of the sale price the owner thought was tax-free
growth turns out to be the deduction coming back. It is usually taxed at regular rates, not the
lower rates for a long-term gain. This affects any business or person who owns property that has
been depreciated, such as equipment, a car, or a building. It does not matter whether they claimed
the deduction each year. It decides how much of a later sale counts as regular income instead of a
lower-taxed gain. It can also apply when business use drops, even with no sale at all.
</div>

Depreciation is a loan against the sale price. Every dollar reduces basis, and reduced basis means
more gain later — usually gain taxed at ordinary rates rather than capital ones. What makes the
topic difficult is that the loan is called in at three different moments by three different
mechanisms, and only one of them is a sale.

## The rule

**The basis falls whether you took the deduction or not.** {fig:recovery.allowed_allowable}
(IRC § 1016(a)(2)). This is the proposition everything else rests on. A taxpayer who forgot to
depreciate an asset does not have a higher basis on sale; it has the same basis and a lost
deduction.

**Recapture on sale, personal property.** {fig:disp.1245_recapture} (IRC § 1245(a)(1)), computed
against recomputed basis: {fig:recovery.recomputed_basis} (IRC § 1245(a)(2)). Note both extensions
there — allowed *or allowable*, and allowed to the taxpayer *or to any other person*, which is how
recapture follows property through a carryover-basis transfer. {fig:disp.1245_property}
(IRC § 1245(a)(3)).

**Recapture on sale, real property.** {fig:disp.1250_recapture} (IRC § 1250(a)(1)). Real property
has been on straight-line recovery since 1986, so additional depreciation is usually nil and § 1250
recaptures nothing — but the gain does not become ordinary capital gain either:
{fig:disp.unrecaptured_1250} (IRC § 1(h)(6)).

**What is left goes to section 1231.** {fig:disp.1231_property} (IRC § 1231(b)(1)),
{fig:disp.1231_netting} (IRC § 1231(a)(1)), subject to {fig:disp.1231_lookback}
(IRC § 1231(c)(1)).

**Recapture without a sale, listed property.** {fig:recovery.listed_property}
(IRC § 280F(d)(4)); the narrower category is {fig:recovery.passenger_auto}
(IRC § 280F(d)(5)(A)). The test that matters is {fig:recovery.qualified_business_use}
(IRC § 280F(d)(6)). Fall below the line and two things happen at once:
{fig:vehicle.280F_fifty_percent} (IRC § 280F(b)(1)) and {fig:vehicle.280F_recapture}
(IRC § 280F(b)(2)(A)), the amount being {fig:recovery.excess_depreciation}.

**Recapture without a sale, expensing.** {fig:recovery.179_recapture} (Reg. § 1.179-1(e)(1);
IRC § 179(d)(10)).

**And the annual ceiling on an automobile.** {fig:vehicle.280F_bonus_2026}
(Rev. Proc. 2026-15 Table 1); where no IRC § 168(k) deduction applies,
{fig:vehicle.280F_nobonus_2026} (Table 2). {fig:vehicle.280F_unrecovered}
(IRC § 280F(a)(1)(B)).

## Current figures

| Item | Figure | Authority |
| --- | --- | --- |
| Allowed or allowable | {fig:recovery.allowed_allowable} | IRC § 1016(a)(2) |
| Recomputed basis | {fig:recovery.recomputed_basis} | IRC § 1245(a)(2) |
| Qualified business use | {fig:recovery.qualified_business_use} | IRC § 280F(d)(6) |
| Excess depreciation | {fig:recovery.excess_depreciation} | IRC § 280F(b)(2)(B) |
| Expensing recapture | {fig:recovery.179_recapture} | Reg. § 1.179-1(e)(1) |
| 2026 automobile caps, with § 168(k) | {fig:vehicle.280F_bonus_2026} | Rev. Proc. 2026-15 Table 1 |
| 2026 automobile caps, without | {fig:vehicle.280F_nobonus_2026} | Rev. Proc. 2026-15 Table 2 |

## How it works in practice

**Recapture is a character rule, not an amount rule.** It never creates gain — it takes gain that
already exists and reclassifies it from capital to ordinary, up to the depreciation taken. That is
why an asset sold at a loss produces no recapture however much depreciation it absorbed, and why an
asset sold above original cost recaptures only up to the depreciation, the excess running to
§ 1231.

**Work a disposition in a fixed order.** Amount realised; adjusted basis, reduced by depreciation
allowed but not below the allowable floor; the difference. A loss stops there — § 1231 loss,
ordinary. A gain goes on: convert to ordinary income, under § 1245 or § 1250, as much as the
depreciation taken. Anything above that is § 1231 gain, which nets with the year's other § 1231
items and is recharacterised as ordinary to the extent of non-recaptured net § 1231 losses of the
previous five years.

**Section 1245 and section 1250 recapture different things.** Section 1245 recaptures *all*
depreciation, so on personal property the entire deduction comes back as ordinary income to the
extent of gain. Section 1250 recaptures only *additional* depreciation — the excess over straight
line — which for property placed in service after 1986 is normally zero. So a building sold at a
gain generates no § 1250 recapture and a large unrecaptured § 1250 gain instead, taxed at its own
rate.

**The listed property rules bite before any sale.** The § 280F(b) mechanism is the one candidates
most often miss, because nothing is disposed of. A vehicle that went into service well above the
line and drops below it in year three obliges the taxpayer to include the excess depreciation in
income in year three and to switch to the alternative depreciation system for that year and all
later ones. The comparison is against what the alternative system would have allowed from the start,
not against zero.

**The 5-percent owner exception makes use look worse than it is.** Qualified business use excludes
use leased to a 5-percent owner or provided as compensation to one, unless the value is included in
that person's income and withheld on. So an owner-manager driving a company car is *not* generating
qualified business use for the predominant-use test unless the personal use is run through payroll —
the fact pattern that pushes a vehicle below the line without anyone noticing.

**Expensing recapture is computed differently from listed property recapture.**
Reg. § 1.179-1(e)(1) compares what was expensed against what § 168 would have allowed had the
election never been made — through the year of recapture, not just the prior years. And it applies
whether or not the deduction actually reduced tax, so a taxpayer with losses in the year of the
election still recaptures in full.

**Read all of this off the balance sheet before it is a problem.** Accumulated depreciation, the
depreciation schedule and the asset accounts together show which assets carry a large ordinary
income exposure on sale, which listed property is drifting toward the line, and whether last year's
disposals had their gain computed at all.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The deduction that was never taken</h3>

Ferndale Printing bought a folder in year one for $90,000 and, through an oversight, claimed no
depreciation. It sells the machine in year five for $70,000, and the preparer computes a loss of
$20,000 against the $90,000 cost.

That is wrong. IRC § 1016(a)(2) reduces basis by depreciation allowed but *not less than the amount
allowable*, so the folder's basis has fallen by what Ferndale could have claimed even though it
claimed nothing. On a five-year MACRS schedule the allowable depreciation through year five runs to
most of the cost, so the sale produces a substantial gain rather than a loss.

Worse, the gain is ordinary. IRC § 1245(a)(2)(A) computes recomputed basis by adding back
{gloss:depreciation} *allowed or allowable*, and the relief in subparagraph (B) — adding back only
what was allowed — is available only where the taxpayer establishes by adequate records that less
was allowed than allowable. Ferndale can establish that, limiting the add-back; but it cannot undo
the basis reduction under § 1016(a)(2), which carries no such relief. The lost deduction stays lost
and the basis stays reduced.
</div>

<div class="scenario" data-type="boundary">
<h3>The car that crossed the line</h3>

Locke Surveying places a car — {gloss:listed-property} — in service in year one at 78 percent
qualified business use and takes depreciation accordingly. In year four the principal reduces her
driving and business use falls to 41 percent.

Two consequences arrive together in year four. IRC § 280F(b)(1) requires depreciation for year four
and every later year to be computed under the alternative depreciation system. And
IRC § 280F(b)(2)(A) requires the excess depreciation to be included in gross income in year four —
being, under subparagraph (B), the depreciation allowable for years one through three over what
would have been allowable had the car never been predominantly used in a qualified business use.

Note what the test is not: not whether business use fell relative to last year, and not a
proportional adjustment. It is a cliff at the halfway mark, and crossing it once triggers the full
catch-up. Note too that had the principal been a 5-percent owner using the car as compensation
without the value being included in her income, the use would never have counted as qualified at
all.
</div>

<div class="scenario" data-type="timing">
<h3>Two buildings, two answers</h3>

Ashcombe Estates sells two properties in one year. The first, an office building placed in service
in 1979 under an accelerated method, produces gain of $600,000 with additional depreciation of
$140,000. The second, a warehouse placed in service in 2011 and depreciated straight line, produces
gain of $450,000 with accumulated depreciation of $180,000.

The office building generates § 1250 {gloss:recapture}: additional depreciation exists because an
accelerated method was used, so the applicable percentage of the lower of that additional
depreciation or the gain is ordinary income.

The warehouse generates none, because straight-line depreciation produces no additional
depreciation. But the $180,000 is not ordinary capital gain either — it is unrecaptured section 1250
gain, the long-term capital gain that would have been ordinary had § 1250(b)(1) counted all
depreciation, and it carries its own rate. The remaining $270,000 is § 1231 gain. Same asset class,
same year, three different characters across two sales.
</div>

<div class="scenario" data-type="interaction">
<h3>The expensing election undone</h3>

Trenholm Design expenses a $60,000 machine under the {gloss:section-179-deduction} in year one, a
year in which a loss carryforward meant the election produced no current tax saving. In year three
the machine moves to the owner's personal workshop and ceases to be used predominantly in the
business.

Recapture applies in year three. Reg. § 1.179-1(e)(1) measures the benefit as the excess of the
amount expensed over what IRC § 168 would have allowed for years one and two *and* year three had
the election never been made, and says expressly that it applies regardless of whether that excess
reduced tax liability. The absence of a saving in year one is irrelevant.

The amount recaptured is added to basis, so the machine is not depreciated twice; only the timing
changes. And this is a separate mechanism from § 280F: the machine is not listed property, so
nothing here turns on the predominant-use cliff or on the alternative depreciation system.
</div>

## Traps

<div class="callout trap">

**Recapture cannot exceed gain, and cannot create it.** An asset sold at a loss produces no
recapture however much depreciation it absorbed. Both § 1245(a)(1) and § 1250(a)(1) take the *lower*
of the depreciation figure and the excess of amount realised over adjusted basis.

</div>

<div class="callout trap">

**Section 1250 recaptures additional depreciation, not all depreciation.** For property placed in
service after 1986 and depreciated straight line, the § 1250 recapture is normally nil. Treating a
building like § 1245 property overstates the ordinary income substantially.

</div>

<div class="callout trap">

**Unrecaptured section 1250 gain is not recapture.** It is long-term capital gain with its own rate,
computed under IRC § 1(h)(6), and it survives even where § 1250 itself recaptures nothing. The names
are close enough to be a reliable distractor.

</div>

<div class="callout trap">

**The § 280F(b) test is qualified business use, not total business use.** Use leased to or provided
as compensation to a 5-percent owner is excluded unless the value is included in income and withheld
on, so an owner's car can fail the predominant-use test at a business-use percentage that looks
comfortably above half.

</div>

<div class="callout trap">

**Section 179 recapture needs no sale and does not care whether the deduction saved tax.**
Reg. § 1.179-1(e)(1) triggers on the property ceasing to be used predominantly in a trade or
business, and reaches the whole benefit regardless of whether the excess reduced liability.

</div>

## How this has changed

The most consequential recent movement is not in the recapture provisions, which have been stable,
but in how much there is to recapture. Pub. L. 119-21 § 70301 made the IRC § 168(k) additional first
year depreciation permanent at the full statutory rate and repealed the phase-down, so an asset
acquired and placed in service after 19 January 2025 typically carries a basis of zero from its
first year. Every dollar of a later sale price is therefore gain, and on § 1245 property every
dollar up to original cost is ordinary income. The recapture rules did not change; the exposure they
create grew.

The interaction is visible on the automobile side. Rev. Proc. 2026-15 publishes two tables for cars
placed in service in 2026 that differ only in the first year, and only by
{fig:vehicle.280F_bonus_uplift} — and the revenue procedure states that Table 1 applies whether the
§ 168(k) deduction comes from the amended provision or from former § 168(k), whose applicable
percentage for property acquired before 20 January 2025 has phased down. Two statutory routes, one
table.

Section 1250 has been quietly emptying since 1986, when the Tax Reform Act put real property on
straight-line recovery. Additional depreciation can now arise only on property placed in service
before that change or on the narrow categories still eligible for accelerated methods, so the
practical question on almost every building is unrecaptured section 1250 gain rather than § 1250
recapture.

Nothing in the post-2024 legislation alters IRC § 280F(b), IRC § 1016(a)(2) or the § 1245 mechanics.

## Exam focus

Start every disposition question with IRC § 1016(a)(2). The allowed-or-allowable rule is the most
productive proposition here and appears constantly as a fact pattern in which the taxpayer
under-claimed or forgot to claim.

Know the order: amount realised, adjusted basis, gain or loss, recapture, § 1231 — and that
recapture is capped by gain and never creates it.

Keep § 1245 and § 1250 apart by what each recaptures — all depreciation against additional
depreciation — and keep unrecaptured section 1250 gain apart from both. Expect a question that
offers § 1250 recapture as a distractor on straight-line property.

For § 280F, memorise the three tests as a sequence: is it listed property, is it a passenger
automobile, and is more than half the use *qualified* business use. Be ready to explain that falling
below the line does two things at once — ADS prospectively and excess depreciation into income now —
and that excess depreciation is measured against the ADS amount, not against zero.

Finally, distinguish the two non-sale recaptures. Section 280F(b) applies to listed property on the
predominant-use cliff; Reg. § 1.179-1(e) applies to expensed property, computes its amount
differently, and operates whether or not the original deduction saved any tax.

## Check yourself

**1.** A machine costing $120,000 has accumulated depreciation of $85,000 and is sold for $150,000.
How is the gain characterised?

*Answer: Adjusted basis is $35,000, so the gain is $115,000. IRC § 1245(a)(1) makes ordinary the
excess of the lower of recomputed basis ($120,000) or amount realised ($150,000) over adjusted basis
— $120,000 less $35,000, giving $85,000 of ordinary income, exactly the depreciation taken. The
remaining $30,000 is gain above original cost, which § 1245 does not reach: IRC § 1231 gain, netting
with the year's other § 1231 items subject to the five-year lookback.*

**2.** A sole proprietor never depreciated a $40,000 trailer used in the business for six years, and
sells it for $18,000. Is there a loss?

*Answer: Almost certainly not. IRC § 1016(a)(2) reduces basis by depreciation allowed but not below
the amount allowable, so the trailer's basis has fallen by the MACRS depreciation that could have
been claimed regardless of the failure to claim it. Over six years on a five-year recovery period
that is the whole cost, leaving a basis near zero and a gain near $18,000. IRC § 1245(a)(2)(B) lets
the proprietor add back only what was actually allowed, if it can establish that by adequate
records — limiting recomputed basis and hence the ordinary income. The basis reduction itself is not
undone.*

**3.** A car is placed in service at 65 percent business use, of which 20 points consist of use by a
5-percent owner as compensation with no amount included in her income. Does the car qualify for
MACRS in year one?

*Answer: No. IRC § 280F(d)(6)(C) excludes from qualified business use any use of property provided
as compensation for services by a 5-percent owner unless an amount is included in that person's
gross income and, where required, withheld on. Stripping out those 20 points leaves qualified
business use below the halfway mark, so IRC § 280F(b)(1) puts the car on the alternative
depreciation system from year one. There is no excess depreciation to recapture: § 280F(b)(2)(A)
requires as its first condition that the property *was* predominantly used in a qualified business
use in the year it was placed in service, and it never was.*

**4.** A warehouse placed in service in 2012 and depreciated straight line is sold at a $500,000
gain, with $210,000 of accumulated depreciation. How much is recaptured under IRC § 1250?

*Answer: None. Section 1250 recaptures the applicable percentage of additional depreciation, meaning
the excess of depreciation taken over straight line, and a taxpayer that used straight line has no
additional depreciation. But the answer does not end there: $210,000 is unrecaptured section 1250
gain under IRC § 1(h)(6), long-term capital gain taxed at its own rate, and the remaining $290,000
is § 1231 gain. A response of "no recapture, all capital gain at the ordinary long-term rate" is the
mistake the question is testing for.*

**5.** Why does IRC § 1245(a)(2)(A) add back depreciation allowed to *any other person*?

*Answer: To stop recapture being washed out by a carryover-basis transfer. Where a taxpayer takes
property with a basis determined by reference to the transferor's — a gift, a contribution to a
controlled corporation, a like-kind exchange — the recapture potential built up in the transferor's
hands would otherwise disappear, since the transferee took none of that depreciation itself. Adding
back depreciation allowed or allowable to any other person makes recapture follow the property,
which is why a question can turn on the history of an asset the current owner never depreciated.*
