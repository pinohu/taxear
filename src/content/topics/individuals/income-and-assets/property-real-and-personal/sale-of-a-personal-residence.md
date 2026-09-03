---
title: "Sale of a personal residence"
code: "1.2.3.f"
part: 1
domain: "Income and Assets"
section: "Property, real and personal"
description: "Depreciation comes out of the exclusion first, then nonqualified use is allocated against the rest. Failing the two-year test does not always mean losing the exclusion."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 121", title: "Exclusion of gain from sale of principal residence", url: "https://www.law.cornell.edu/uscode/text/26/121" }
  - { type: IRC, ref: "§ 1031", title: "Exchange of real property held for productive use or investment", url: "https://www.law.cornell.edu/uscode/text/26/1031" }
  - { type: IRC, ref: "§ 1041", title: "Transfers of property between spouses or incident to divorce", url: "https://www.law.cornell.edu/uscode/text/26/1041" }
  - { type: IRC, ref: "§ 1250", title: "Gain from dispositions of certain depreciable realty", url: "https://www.law.cornell.edu/uscode/text/26/1250" }
  - { type: Reg, ref: "§ 1.121-3", title: "Reduced maximum exclusion for taxpayers failing to meet certain requirements", url: "https://www.law.cornell.edu/cfr/text/26/1.121-3" }
forms: []
related: ["1.2.3.a", "1.2.3.b", "1.2.3.c", "1.2.3.i", "1.2.3.e", "1.2.3.g", "1.4.1.g", "1.4.1.l", "1.5.1.b"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 121(a) ownership and use tests and the § 121(b) limits including the joint, surviving spouse and frequency rules, the § 121(c) reduced exclusion with the Treas. Reg. § 1.121-3(e)(2) safe harbours, the § 121(b)(5) nonqualified use allocation and the § 121(b)(5)(D) ordering against § 121(d)(6) depreciation, and the § 121(d) rules for divorce, extended duty and § 1031 property." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the ownership/use/frequency tests, glossary marks, and a fails scenario rounding out the scenario taxonomy. No threshold diagram: the exclusion figure bundles the single and joint amounts into one string that a number-line parser would garble, so the eligibility tests are diagrammed instead." }
diagram:
  archetype: "decision"
  caption: "Do you qualify for the full home-sale exclusion?"
  tests:
    - { test: "Ownership", result: "Owned the home for 2 of the last 5 years", outcome: "pass" }
    - { test: "Use", result: "Lived in it as a main home for 2 of the last 5 years (the two periods don't have to match)", outcome: "pass" }
    - { test: "Frequency", result: "No other sale excluded under this rule in the last 2 years", outcome: "pass" }
---

<div class="plain-terms">
This page is about selling the home someone lives in, and how much of the profit can go tax-free.
An owner who has owned and lived in the home long enough can skip tax on a large chunk of gain.
That amount doubles for a married couple filing together. It decides how much of the profit is
protected, and how that shrinks if the home was ever rented out. Any depreciation claimed while
renting the home is never protected, and gets taxed on its own. Selling too soon after a past
tax-free sale, or too soon after buying the home, can cut or wipe out the benefit. Some hardship
cases still get partial relief even then. This mainly affects people selling their main home, not
landlords selling a straight rental.
</div>

Two orderings decide most § 121 computations and both run against the taxpayer. Depreciation taken since
May 1997 comes out of the exclusion **first**, before anything else is measured. Then gain allocated to
periods of nonqualified use is stripped out of what remains. Only what survives both is excluded, and a
taxpayer who converted a rental into a home is often left with far less exclusion than the headline figure.

## The rule

**The exclusion and its two tests.** Gross income does not include gain from the sale or exchange of
property if, during the 5-year period ending on the date of sale, the property was **owned and used** by
the taxpayer as their principal residence for periods aggregating 2 years or more (IRC § 121(a)). The two
tests run independently: they must each be satisfied for two years within the five, but not for the same
two years.

**The limits.** The amount excluded may not exceed a fixed ceiling, doubled on a joint return where
**either** spouse meets the ownership test, **both** meet the use test, and neither is barred by the
frequency rule (IRC § 121(b)(1), (b)(2)(A)); the amounts are in the table below. Where those conditions
are not met, the limit is the sum of what each spouse would have had if unmarried, with each treated as
owning the property during any period either of them owned it (§ 121(b)(2)(B)) — so one qualifying spouse
still produces a full single exclusion.

**Once every two years.** The exclusion does not apply where, during the 2-year period ending on the date
of sale, there was any other sale by the taxpayer to which it applied (IRC § 121(b)(3)).

**A surviving spouse keeps the joint figure for two years.** An unmarried individual whose spouse is
deceased applies the joint limit on a sale not later than 2 years after the date of death, where the joint
conditions were met immediately before that date (IRC § 121(b)(4)).

**Failing the tests does not always mean losing the exclusion.** Where the sale is by reason of a change in
place of employment, health, or unforeseen circumstances, the ownership, use and frequency requirements
are switched off and the **dollar limit is prorated** instead — by the shorter of the qualifying period or
the time since the last excluded sale, over two years (IRC § 121(c)(1), (2)). The regulation supplies safe
harbours that are deemed unforeseen: involuntary conversion; natural or man-made disaster; and, for a
qualified individual, death, divorce or legal separation, multiple births from a single pregnancy,
cessation of employment leaving them eligible for unemployment compensation, and a change in employment
leaving them unable to pay housing and reasonable basic living expenses (Treas. Reg. § 1.121-3(e)(2)).

**Depreciation is carved out first.** The exclusion does not apply to gain up to the depreciation
adjustments, as defined in § 1250(b)(3), attributable to periods after 6 May 1997 (IRC § 121(d)(6)). That
gain is unrecaptured section 1250 gain and carries its own rate.

**Then nonqualified use is allocated out.** The exclusion does not apply to gain allocated to periods of
nonqualified use, allocated on the ratio of aggregate nonqualified use during ownership to the whole
period of ownership (IRC § 121(b)(5)(A), (B)). Nonqualified use means any period the property is not the
principal residence of the taxpayer or their spouse or former spouse, **other than periods before
1 January 2009** (§ 121(b)(5)(C)(i)). And the ordering is explicit: § 121(b)(5)(A) is applied **after**
§ 121(d)(6), and the allocation in (B) is computed without regard to the depreciation gain
(§ 121(b)(5)(D)).

**Three periods are not nonqualified use.** Any portion of the five-year period **after** the last date of
use as a principal residence; up to an aggregate 10 years of qualified official extended duty; and up to
an aggregate 2 years of temporary absence for a change of employment, health, or unforeseen circumstances
(IRC § 121(b)(5)(C)(ii)(I)–(III)). The first is the important one: moving out and renting the house before
selling it does not create nonqualified use, but renting it before moving in does.

**Divorce.** A transferee under § 1041(a) tacks the transferor's ownership period, and an individual is
treated as using the property as a principal residence during any period of ownership while a spouse or
former spouse is granted its use under a divorce or separation instrument (IRC § 121(d)(3)(A), (B)).

**Extended duty suspends the clock.** At the individual's election, the five-year period is suspended
while they or their spouse serve on qualified official extended duty in the uniformed services, Foreign
Service or intelligence community — a duty station at least 50 miles from the property, or Government
quarters under orders — but by no more than 10 years (IRC § 121(d)(9)(A), (B), (C)(i)).

**Property from a like-kind exchange is barred for five years.** Where the property was acquired in an
exchange on which gain was not recognised under § 1031(a) or (b), the exclusion does not apply to a sale
during the 5-year period beginning on acquisition — and the bar follows anyone taking a carryover basis
(IRC § 121(d)(10)).

## Current figures

| Item | 2026 |
| --- | --- |
| The exclusion | {fig:sec121.exclusion} |
| Ownership and use | {fig:sec121.ownership_use} |
| Once every two years | {fig:sec121.frequency} |
| Joint returns not meeting the test | {fig:sec121.joint_not_qualifying} |
| Surviving spouse | {fig:sec121.surviving_spouse} |
| Reduced exclusion | {fig:sec121.reduced_exclusion} |
| Unforeseen circumstances | {fig:sec121.unforeseen_safe_harbours} |
| Depreciation | {fig:sec121.depreciation} |
| Nonqualified use | {fig:sec121.nonqualified_use} |
| What is not nonqualified use | {fig:sec121.nonqualified_use_exceptions} |
| Divorce | {fig:sec121.divorce} |
| Extended duty | {fig:sec121.suspension} |
| Property from a § 1031 exchange | {fig:sec121.like_kind_bar} |

## How it works in practice

Compute in the order the statute sets. Start with total gain. Subtract the post-May-1997 depreciation as
gain that cannot be excluded under § 121(d)(6). Take what is left and split it between qualified and
nonqualified use on the ownership-period ratio in § 121(b)(5)(B) — computed, as (D)(ii) directs, without
regard to the depreciation gain. Only the qualified-use portion is eligible, and it is then capped by the
dollar limit.

The direction of the conversion decides everything. A house lived in and then rented before sale generates
**no** nonqualified use, because § 121(b)(5)(C)(ii)(I) excludes any part of the five-year period after the
last date of principal residence use. A house rented and then moved into generates nonqualified use for
the whole rental period from 2009 forward. Identical properties, identical years, very different answers.

Where the two-year tests fail, do not stop. Section 121(c) is a proration, not a denial, and the safe
harbours in Reg. § 1.121-3(e)(2) are broader than most clients expect — a job loss with unemployment
eligibility is a listed safe harbour, not an argument that has to be made.

<div class="scenario" data-type="interaction">
<h3>Scenario 1 — the rental that became a home</h3>

Ines bought a house in January 2016 and rented it out for six years, then moved in and used it as her
principal residence from January 2022 until she sold it in January 2026 for a 300,000-dollar gain. She
took 66,000 dollars of depreciation during the rental years.

First, IRC § 121(d)(6) removes the 66,000 dollars of post-1997 depreciation from the exclusion, leaving
234,000 dollars. Then § 121(b)(5)(B) allocates that remainder on ownership: six of her ten years were
nonqualified use, none of them before 2009, so 60 percent — 140,400 dollars — is not excludable. The
remaining 93,600 dollars falls under the dollar limit and is excluded. She reports 66,000 dollars of
unrecaptured section 1250 gain — {gloss:recapture} territory — and 140,400 dollars of {gloss:capital-gain}.
</div>

<div class="scenario" data-type="baseline">
<h3>Scenario 2 — the same years, the other way round</h3>

Jonah bought an identical house in January 2016, lived in it as his principal residence until January
2022, then rented it out and sold it in January 2026 for the same 300,000-dollar gain, having taken the
same 66,000 dollars of depreciation.

The depreciation carve-out is the same: 66,000 dollars cannot be excluded. But the four rental years fall
**after** the last date the property was his principal residence, so § 121(b)(5)(C)(ii)(I) takes them out
of nonqualified use entirely. There is no allocation. The whole remaining 234,000 dollars is eligible and
is within the single-filer limit, so all of it is excluded. He fails neither the ownership nor the use
test, because both were satisfied within the five years ending on the sale — just. (A
{gloss:like-kind-exchange} into replacement rental property instead would fall under a different provision
entirely.)
</div>

<div class="scenario" data-type="boundary">
<h3>Scenario 3 — eighteen months and a redundancy</h3>

Kwame, filing single, buys a house and sells it eighteen months later after losing his job, in
circumstances leaving him eligible for unemployment compensation. His gain is 90,000 dollars.

He fails the two-year tests, but IRC § 121(c)(2)(B) reaches a sale by reason of unforeseen circumstances,
and Treas. Reg. § 1.121-3(e)(2)(iii)(B) makes cessation of employment with eligibility for unemployment
compensation a specific-event safe harbour. So § 121(c)(1) waives the ownership, use and frequency
requirements and prorates the limit instead: eighteen months over twenty-four, three quarters of the
single-filer figure. His whole 90,000-dollar gain is comfortably within that prorated limit and is
excluded.
</div>

<div class="scenario" data-type="fails">
<h3>Scenario 4 — the second sale too soon</h3>

A taxpayer excludes gain on a 2024 home sale. In 2026 she sells a second home, meeting the ownership and
use tests, simply because she wants more space — no job change, no health issue, nothing unforeseen.

IRC § 121(b)(3) blocks the exclusion once another sale was excluded within the prior two years. A
preference for a different home is not a safe harbour; Treas. Reg. § 1.121-3(e)(1) rules it out expressly.
The exclusion is unavailable this time, regardless of the other tests.
</div>

<div class="callout trap">

**Ordering is statutory, not conventional.** Section 121(b)(5)(D) puts § 121(d)(6) first and computes the
nonqualified use ratio without regard to the depreciation gain.

**Renting after moving out is not nonqualified use.** Section 121(b)(5)(C)(ii)(I) carves out any part of
the five-year period after the last date of principal residence use.

**Nonqualified use starts in 2009.** Periods before 1 January 2009 are excluded from the numerator by
§ 121(b)(5)(C)(i), so a long-held property can have rental years that never count.

**One qualifying spouse still gives a full single exclusion.** Section 121(b)(2)(B) sums what each spouse
would have had unmarried, rather than denying the exclusion outright.
</div>

## How this has changed

**The nonqualified use rule was added prospectively and its start date is still doing work.** Periods
before 1 January 2009 are outside the definition (IRC § 121(b)(5)(C)(i)), so for a property held since the
1990s a substantial rental history may generate no allocation at all. Any worked example that allocates
across the whole ownership period without checking the 2009 line will overstate the taxable portion.

**The depreciation carve-out has a date of its own** — 6 May 1997, the effective date of the modern § 121
(IRC § 121(d)(6)). Depreciation before that date is not carved out, which matters for a rental converted
in the mid-1990s and still held.

**Section 121(d)(11) was repealed in 2010** by Pub. L. 111-312 § 301(a), and the paragraph number is now
vacant in the statute. Citations to § 121(d)(11) point at nothing; the like-kind exchange bar is
§ 121(d)(10).

**The reduced exclusion moved from a discretionary standard to a list.** Section 121(c)(2)(B) refers to
unforeseen circumstances "to the extent provided in regulations", and Treas. Reg. § 1.121-3(e)(2) supplies
specific-event safe harbours that are deemed to qualify. Where a safe harbour applies there is no facts
and circumstances argument to make, and where none does, § 1.121-3(e)(1) still allows the general test —
but expressly not where the primary reason is a preference for a different residence or an improvement in
financial circumstances.

## Exam focus

Expect the **conversion direction** to be the whole question. Rental first then residence produces
nonqualified use; residence first then rental does not.

Expect the **ordering** with both depreciation and nonqualified use in the facts. Depreciation first,
then allocate the remainder.

Expect a **failed two-year test** with a sympathetic reason, testing whether you know § 121(c) prorates
rather than denies, and whether the reason is one of the regulation's safe harbours.

Expect a **joint return** where only one spouse qualifies. The answer is the single-filer amount, not
nothing.

## Check yourself

**1.** A single taxpayer owned and lived in a home for three of the last five years and sells at a
400,000-dollar gain, with no depreciation and no nonqualified use. How much is excluded?

*Answer: 250,000 dollars, the limit in IRC § 121(b)(1). The ownership and use tests in § 121(a) are met,
and the remaining 150,000 dollars is long-term capital gain.*

**2.** A married couple file jointly. Both have lived in the home for three years but only one owns it.
What is the limit?

*Answer: 500,000 dollars. IRC § 121(b)(2)(A) requires only that **either** spouse meet the ownership
test, while both must meet the use test.*

**3.** A home was rented from 2010 to 2018 and used as a principal residence from 2018 until sale in 2026.
What fraction of the gain is allocated to nonqualified use?

*Answer: Eight of the sixteen ownership years, so one half, under IRC § 121(b)(5)(B) — all eight rental
years fall after 1 January 2009 and so count under § 121(b)(5)(C)(i).*

**4.** The same property produced 40,000 dollars of depreciation after May 1997. Is that included in the
allocation?

*Answer: No. IRC § 121(b)(5)(D) applies § 121(d)(6) first, so the 40,000 dollars is excluded from the
exclusion at the outset, and the nonqualified use ratio is then applied to the remaining gain without
regard to it.*

**5.** A taxpayer acquired a house in a § 1031 exchange three years ago and has lived in it for two of
those years. May the exclusion be claimed on a sale now?

*Answer: No. IRC § 121(d)(10) denies the exclusion for the 5-year period beginning on the date the
property was acquired in an exchange on which gain was not recognised under § 1031(a) or (b), regardless
of the ownership and use tests being met.*

**6. Paulo and his wife owned and lived in their home for many years and met every joint condition. She died in March 2025. Paulo, who has not remarried, sells the home in January 2027 at a gain. Which dollar limit applies to his exclusion?**
(A) The single-filer limit, because he now files as a single taxpayer (B) The joint-return limit, because the sale is not later than 2 years after the date of death and the joint conditions were met immediately before it (C) No exclusion at all, because he no longer meets the joint use test (D) The joint-return limit, but only if the sale closes in the same taxable year as the death
*Answer: B. IRC § 121(b)(4): an unmarried individual whose spouse is deceased applies the joint limit on a sale not later than 2 years after the date of death, where the joint conditions were met immediately before that date. January 2027 is within 2 years of March 2025.*

**7. Greta bought a house in January 2004 and rented it out until January 2012, then lived in it as her principal residence until she sold it in January 2026. Ignoring depreciation, what fraction of the gain is allocated to nonqualified use?**
(A) Eight of twenty-two years, the whole rental period (B) Three of twenty-two years, the rental period after 1 January 2009 (C) None, because she lived in the house for two of the last five years (D) Eight of fourteen years, measured from 2012
*Answer: B. IRC § 121(b)(5)(C)(i) excludes periods before 1 January 2009 from nonqualified use, so only the three rental years from January 2009 to January 2012 count, and § 121(b)(5)(B) allocates them over the whole twenty-two-year period of ownership.*

**8. Under their divorce decree, Nadine's former husband was granted use of the home they still co-own. He lived there for four years while she lived elsewhere, and she then sold her interest at a gain. Does Nadine meet the use test?**
(A) No, because she did not personally live in the home during the five years before the sale (B) Yes, because she is treated as using the home during any period of ownership while a former spouse is granted its use under a divorce instrument (C) Only if she qualifies for a reduced exclusion by reason of the divorce (D) Only if the home is sold within 2 years of the divorce
*Answer: B. IRC § 121(d)(3)(B): an individual is treated as using the property as a principal residence during any period of ownership while a spouse or former spouse is granted its use under a divorce or separation instrument.*
