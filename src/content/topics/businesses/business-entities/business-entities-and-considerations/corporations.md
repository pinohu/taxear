---
title: "Corporations"
code: "2.1.1.c"
part: 2
domain: "Business Entities and Considerations"
section: "Business entities"
description: "One flat rate, an April date rather than a March one, and a charitable deduction that from 2026 has a floor as well as a ceiling — the floor being the part nobody knows."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 11", title: "Tax imposed", url: "https://www.law.cornell.edu/uscode/text/26/11" }
  - { type: IRC, ref: "§ 6072", title: "Time for filing income tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6072" }
  - { type: IRC, ref: "§ 170", title: "Charitable, etc., contributions and gifts", url: "https://www.law.cornell.edu/uscode/text/26/170" }
  - { type: IRC, ref: "§ 59A", title: "Tax on base erosion payments of taxpayers with substantial gross receipts", url: "https://www.law.cornell.edu/uscode/text/26/59A" }
  - { type: IRC, ref: "§ 6655", title: "Failure by corporation to pay estimated income tax", url: "https://www.law.cornell.edu/uscode/text/26/6655" }
  - { type: IRC, ref: "§ 7701(a)(3)", title: "Corporation defined", url: "https://www.law.cornell.edu/uscode/text/26/7701" }
  - { type: IRC, ref: "§ 951", title: "Amounts included in gross income of United States shareholders", url: "https://www.law.cornell.edu/uscode/text/26/951" }
forms: []
related: ["2.1.1.a", "2.1.1.b", "2.1.1.d", "2.1.1.g", "1.6.3.e", "2.1.1.f", "2.1.1.i", "2.1.1.j"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the flat IRC § 11(b) rate, the § 6072(a) April filing date that distinguishes a C corporation from the § 6072(b) entities, the § 170(b)(2)(A) charitable limitation as rewritten by Pub. L. 119-21 § 70426 to add a 1 percent floor beneath the 10 percent ceiling for taxable years beginning after 2025, the § 170(d)(2) carryover rules that follow from it, and the § 59A base erosion tax at the 10.5 percent rate substituted by Pub. L. 119-21 § 70331." }
---

The C corporation is the only business form that pays income tax in its own right, and since 2018 it has
paid it at a single rate with no brackets. That makes the rate the least interesting thing about it. The
live questions are the ones where a corporation's rules diverge from an individual's — the filing date,
which sits where people do not expect it, and the charitable deduction, which from taxable years
beginning after 2025 has acquired a floor beneath its ceiling that nothing in prior practice prepares a
preparer for.

## The rule

**The tax.** {fig:corp.rate}

**The return.** {fig:corp.return_date} This is worth stating carefully, because the March date that
attaches to partnerships and S corporations is the one people remember and it is not this one.

**The charitable deduction, as it now stands.** {fig:corp.charitable_limits}

**What it replaced.** {fig:corp.charitable_superseded}

**And the carryover that follows.** {fig:corp.charitable_carryover}

**The base erosion tax.** {fig:corp.beat_rate} It reaches only
{fig:corp.beat_applicable_taxpayer}

**Capital gains and losses are not the individual rules.** {fig:corp.capital_losses} And
{fig:corp.capital_loss_carry} There is no preferential corporate rate: gains are taxed at the same flat
rate as ordinary income (IRC § 11(b)).

**Distributions change character on the way out.** {fig:corp.distribution_character} Rental income
earned by a corporation reaches the shareholder as a dividend, not as rent.

**Estimated tax.** {fig:corp.estimated_required} With
{fig:corp.estimated_de_minimis} and {fig:corp.estimated_large}

**At-risk amounts, for a closely held corporation.** {fig:corp.at_risk}

**And the foreign inclusion regime.** A corporation that is a United States shareholder of a controlled
foreign corporation has an inclusion under IRC § 951A — {fig:cfc.us_shareholder} — with the deduction at
{fig:cfc.section_250_deduction} That regime is covered at 1.6.3.e, and its vocabulary changed in 2025.

## Current figures

| Item | Rule |
| --- | --- |
| Rate | {fig:corp.rate} |
| Return due date | {fig:corp.return_date} |
| Charitable floor and ceiling | {fig:corp.charitable_limits} |
| Superseded charitable rule | {fig:corp.charitable_superseded} |
| Charitable carryover | {fig:corp.charitable_carryover} |
| Base erosion tax rate | {fig:corp.beat_rate} |
| Applicable taxpayer | {fig:corp.beat_applicable_taxpayer} |
| United States shareholder | {fig:cfc.us_shareholder} |
| Section 250 deduction | {fig:cfc.section_250_deduction} |
| Capital losses | {fig:corp.capital_losses} |
| Capital loss carryback and carryforward | {fig:corp.capital_loss_carry} |
| Character of distributions | {fig:corp.distribution_character} |
| Estimated tax installments | {fig:corp.estimated_required} |
| Estimated tax de minimis | {fig:corp.estimated_de_minimis} |
| Large corporations | {fig:corp.estimated_large} |
| Amounts at risk | {fig:corp.at_risk} |
| Partnership and S corporation date | {fig:ptr.due_date} |

## How it works in practice

**Fix the date first and separately.** A calendar-year C corporation files in April. A calendar-year
partnership or S corporation files in March. Practitioners who work mostly with pass-through entities
carry the March date into corporate work, and the mistake is easy because it feels like the
"business" date.

**Then re-learn the charitable deduction.** For taxable years beginning after 2025 a corporation gets no
deduction at all for the first 1 percent of taxable income given away, and none above 10 percent. A
corporation giving exactly 1 percent of its taxable income deducts nothing. That is a genuinely new
result and it inverts the advice that small corporate gifts are freely deductible.

**Follow the carryover rules carefully, because they distinguish the two limits.** Amounts disallowed by
the 10 percent ceiling carry forward five years. Amounts disallowed by the 1 percent floor carry forward
only from a year in which the ceiling was *also* exceeded — so a corporation that gives less than
1 percent in a year loses the deduction outright rather than banking it.

**Absorb current contributions first.** In a carryforward year, contributions made in that year are taken
into account before anything carried in, and the carryforward is first-in first-out with a five-year
life.

**Keep the base erosion tax in proportion.** It applies only where the taxpayer meets the tests in IRC
§ 59A(e)(1): {fig:corp.beat_applicable_taxpayer} It is not a rule about ordinary corporate clients, and its rate changed in 2025.

**And do not carry the individual rules across.** The corporate charitable limitation is computed on
taxable income, not on a contribution base; the corporate return date is not the individual date; and
the corporate rate is flat where the individual rates are graduated.

<div class="scenario">
<h3>The gift that deducted nothing</h3>

A corporation with taxable income of $2,000,000 gives $20,000 to a qualified charity in its 2026 year.
It has made no other contributions.

Its deduction is nil. Under IRC § 170(b)(2)(A) as amended, contributions are allowed only to the extent
the aggregate *exceeds* 1 percent of taxable income — here $20,000 — and $20,000 does not exceed
$20,000. Nor is the amount carried forward: § 170(d)(2)(C) allows amounts disallowed by the floor to be
carried forward only from a year in which the 10 percent ceiling was also exceeded, and this
corporation is nowhere near it. Under the rule that applied through 2025 the whole $20,000 would have
been deductible.

</div>

<div class="scenario">
<h3>The ceiling, the floor and the carryover</h3>

A corporation with taxable income of $1,000,000 gives $150,000 in its 2026 year.

The floor removes the first $10,000 and the ceiling caps the deduction at $100,000, so it deducts
$90,000. The excess over the ceiling — $50,000 — carries forward under § 170(d)(2)(A) and expires after
the fifth taxable year following this one. Because the ceiling was exceeded, the amount disallowed by
the floor is within the carryforward too. In the following year its own contributions are absorbed
first, and only then the carried amount.

</div>

<div class="scenario">
<h3>Two entities, two deadlines</h3>

A client owns a calendar-year C corporation and a calendar-year S corporation and asks the firm to file
both together in March.

Only one is due in March. IRC § 6072(b) sets the fifteenth day of the third month for partnership and S
corporation returns; the C corporation falls under the general rule in § 6072(a) and is due on the
fifteenth day of the fourth month. Filing them together in March is fine; treating April as the deadline
for both is not, and neither is assuming March for both.

</div>

<div class="scenario">
<h3>The base erosion tax that did not apply</h3>

A domestic corporation with $80,000,000 of gross receipts makes substantial deductible payments to a
foreign affiliate and its adviser raises the base erosion tax.

It is not an applicable taxpayer. Section 59A(e)(1)(B) requires average annual gross receipts of at
least $500,000,000 for the three-taxable-year period ending with the preceding year, and this
corporation is an order of magnitude below it. The base erosion percentage test never has to be reached.
The tax is a large-corporation provision and appears in exam material far more often than in practice.

</div>

<div class="callout trap">

**Using the March date for a C corporation.** That is IRC § 6072(b) and applies to partnerships and S
corporations. A C corporation is on the § 6072(a) April date.

**Applying a 25 percent corporate charitable limit.** That was a temporary rule for certain cash
contributions in 2020 and 2021 and has long since lapsed.

**Forgetting the new 1 percent floor.** For taxable years beginning after 2025 the first 1 percent of
taxable income given away produces no deduction at all.

**Assuming everything disallowed carries forward.** Amounts disallowed by the floor carry forward only
from a year in which the 10 percent ceiling was also exceeded.

**Absorbing carryforwards before current contributions.** Section 170(d)(2)(A) takes current-year
contributions into account first.

**Using the individual contribution base.** The corporate limitation is a percentage of taxable income.

**Quoting the base erosion tax at 10 percent, or expecting it to rise to 12.5 percent.** Pub. L. 119-21
substituted 10.5 percent and struck the paragraph that would have increased it after 2025.

**Treating the flat rate as new.** It has been flat since 2018; what changed in 2025 was the surrounding
international regime, not § 11(b).

</div>

## How this has changed

Two changes matter for a 2026 return and both come from Pub. L. 119-21.

The charitable limitation is the larger of the two for ordinary corporate clients. Section 70426(a)
amended § 170(b)(2)(A) generally, replacing a single 10 percent ceiling with a rule that allows the
deduction only to the extent contributions exceed 1 percent of taxable income and do not exceed
10 percent. Section 70426(b) rewrote the corporate carryover in § 170(d)(2) to match, adding the
five-year first-in first-out rule in subparagraph (B) and the restriction in subparagraph (C) on
carrying forward amounts disallowed by the floor. By § 70426(d) the amendments apply to taxable years
beginning after 31 December 2025 — so 2026 is the first year they operate, and no prior-year working
paper reflects them.

The second is the base erosion tax. Section 70331(a)(1) substituted 10.5 percent for 10 percent, and
§ 70331(a)(2) struck the paragraph that would have raised the rate for taxable years beginning after
2025. The scheduled step-up that commentary written before July 2025 describes will not happen.

The rate in § 11(b) has not moved since the 2017 Act made it flat, and Pub. L. 119-21 did not touch it.
What did change around it is the international regime at 1.6.3.e, where the § 951A inclusion was renamed
and its tangible-asset offset repealed.

## Exam focus

Expect the filing date as a discrimination question. C corporation: fifteenth day of the fourth month.
Partnership and S corporation: fifteenth day of the third month.

Expect a charitable contribution computation. For a 2026 year apply both limits — no deduction for the
first 1 percent of taxable income, nothing above 10 percent — and then the carryover rules, which treat
the two disallowances differently.

Know the flat 21 percent rate and that it has no brackets. For the base erosion tax, know that it is
confined to corporations with very large gross receipts and that the rate is now 10.5 percent with no
scheduled increase.

## Check yourself

**1.** When is a calendar-year C corporation's return due?

*Answer: The 15th day of April following the close of the calendar year, under the general rule in IRC
§ 6072(a). The 15 March date in § 6072(b) applies to partnerships and S corporations.*

**2.** A corporation with taxable income of $3,000,000 makes qualified charitable contributions of
$25,000 in a taxable year beginning in 2026. What is its deduction?

*Answer: Nil. Under IRC § 170(b)(2)(A) contributions are allowed only to the extent they exceed 1 percent
of taxable income, which is $30,000 here, and $25,000 does not exceed it.*

**3.** Same corporation, but the contributions are $400,000. What is deductible and what carries
forward?

*Answer: $300,000 is deductible — the 10 percent ceiling — and the excess carries forward under IRC
§ 170(d)(2)(A) for up to five taxable years on a first-in first-out basis. Because the ceiling was
exceeded, the amount disallowed by the 1 percent floor is within the carryforward.*

**4.** What is the corporate income tax rate?

*Answer: 21 percent of taxable income, flat, under IRC § 11(b).*

**5.** Which corporations can be applicable taxpayers for the base erosion tax?

*Answer: A corporation other than a regulated investment company, real estate investment trust or S
corporation, with average annual gross receipts of at least $500,000,000 for the 3 taxable years ending
with the preceding year and a base erosion percentage of 3 percent or higher — 2 percent for a bank or
securities dealer (IRC § 59A(e)(1)).*
