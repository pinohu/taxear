---
title: "Qualified business income"
code: "2.2.2.l"
part: 2
domain: "Business Tax Preparation"
section: "Business expenses, deductions and credits"
description: "The deduction no longer expires after 2025, the phase-in range is half as wide again, and a small active business now has a floor beneath its deduction."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 199A", title: "Qualified business income", url: "https://www.law.cornell.edu/uscode/text/26/199A" }
  - { type: IRC, ref: "§ 1202(e)(3)(A)", title: "Qualified trade or business", url: "https://www.law.cornell.edu/uscode/text/26/1202" }
  - { type: IRC, ref: "§ 469(h)", title: "Material participation defined", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 68", title: "Overall limitation on itemized deductions", url: "https://www.law.cornell.edu/uscode/text/26/68" }
  - { type: IRC, ref: "§ 179", title: "Election to expense certain depreciable business assets", url: "https://www.law.cornell.edu/uscode/text/26/179" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32", title: "Inflation adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["2.2.2.a", "2.2.2.c", "2.2.1.c", "2.2.1.a", "2.1.2.a", "2.2.2.n", "2.2.5.j"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 199A(a) computation and the IRC § 199A(b)(2) wage and property limitation with the IRC § 199A(b)(3) threshold and phase-in, the IRC § 199A(d)(2) definition of a specified service trade or business, and the IRC § 199A(b)(6) definition of qualified property. Records three changes made by Pub. L. 119-21 § 70105: the deduction is permanent, the phase-in range widened from $50,000 and $100,000 to $75,000 and $150,000, and a new IRC § 199A(i) gives a minimum deduction to a taxpayer with active qualified business income above a floor." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the specified-service gates, glossary marks, and two typed scenarios (interaction, timing) alongside the three existing ones now typed boundary/baseline/fails." }
diagram:
  archetype: "decision"
  caption: "Does the specified-service exclusion take away this business's deduction?"
  tests:
    - { test: "Not on the § 1202(e)(3)(A) list (engineering and architecture are expressly excluded)", result: "Not an SSTB — the wage/property limitation is the only test that can apply", outcome: "pass" }
    - { test: "On the list, but taxable income at or below the threshold amount", result: "Treated like any other business — full 20% of QBI, no wage test", outcome: "pass" }
    - { test: "On the list, taxable income inside the phase-in range", result: "SSTB percentage phases down ratably as income rises through the range", outcome: "pass" }
    - { test: "On the list, taxable income above the top of the phase-in range", result: "Excluded entirely — no qualified business income, no deduction", outcome: "fail" }
---

<div class="plain-terms">
Owners of a small or family business often get to deduct a slice of the business profit — the
{gloss:qualified-business-income-deduction} — before it is taxed. This page decides how big that
slice is. Below a certain income level, almost every business gets the full deduction, with no other
rules attached. Above that level, two things start to matter. One is how much the business pays in
wages. The other is whether the business is in a list of fields, like law or medicine, where the
owner's own skill is the main asset. A new rule also gives a small minimum deduction to a busy owner
whose business barely turns a profit.
</div>

Three things about this deduction changed in July 2025, and the first of them is that it did not
expire. A reader working from material written before then will believe the section stopped
applying after 2025, will use a phase-in range a third narrower than the real one, and will not
know that a small active business now has a floor beneath its deduction.

## The rule

**The deduction.** {fig:qbi.deduction} (IRC § 199A(a)), where the first limb is
{fig:qbi.combined} (IRC § 199A(b)(1)).

**Per business.** {fig:qbi.per_business} (IRC § 199A(b)(2)).

**Unless income is low enough.** {fig:qbi.below_threshold} (IRC § 199A(b)(3)(A)). The threshold is
{fig:qbi.threshold_2026} (Rev. Proc. 2025-32 § 3.26), and the limitation phases in fully by
{fig:qbi.phasein_2026}.

**Specified service businesses.** {fig:qbi.sstb} (IRC § 199A(d)(2)). Below the threshold they are
treated like any other business; above the phase-in range they are excluded entirely.

**Qualified property.** {fig:qbi.qualified_property} (IRC § 199A(b)(6)(A)).

**The floor.** {fig:qbi.minimum} (IRC § 199A(i)), where an active business means
{fig:qbi.active} (IRC § 199A(i)(2)(B)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| The deduction | {fig:qbi.deduction} | IRC § 199A(a) |
| Combined amount | {fig:qbi.combined} | IRC § 199A(b)(1) |
| Per trade or business | {fig:qbi.per_business} | IRC § 199A(b)(2) |
| Below the threshold | {fig:qbi.below_threshold} | IRC § 199A(b)(3)(A) |
| Threshold, 2026 | {fig:qbi.threshold_2026} | Rev. Proc. 2025-32 § 3.26 |
| Top of the phase-in range, 2026 | {fig:qbi.phasein_2026} | Rev. Proc. 2025-32 § 3.26 |
| The range, widened | {fig:qbi.phasein_widened} | Pub. L. 119-21 § 70105(a) |
| Specified service trade or business | {fig:qbi.sstb} | IRC § 199A(d)(2) |
| Qualified property | {fig:qbi.qualified_property} | IRC § 199A(b)(6)(A) |
| Now permanent | {fig:qbi.permanent} | Pub. L. 119-21 § 70105(b)(1) |
| Minimum deduction | {fig:qbi.minimum} | IRC § 199A(i) |
| Active business | {fig:qbi.active} | IRC § 199A(i)(2)(B) |

## How it works in practice

**Work from taxable income, and ask which of three bands the taxpayer is in.** Below the
threshold, {fig:qbi.below_threshold} (IRC § 199A(b)(3)(A)) — no wage test, no property test, and a
specified service business is treated like any other. Above the top of the phase-in range, the
wage and property limitation applies in full and a specified service business gets nothing at all.
Between the two, both effects phase in ratably.

**The threshold is measured on taxable income, not on business income.** IRC § 199A(e)(2) defines
the threshold amount by reference to the taxpayer's taxable income computed without the section's
own deduction. So a taxpayer with modest business profits but large investment income can be above
the threshold, and one with a large business and large deductions elsewhere can be below it.

**Above the range, the limitation is the greater of two figures, not the lesser.**
{fig:qbi.per_business} (IRC § 199A(b)(2)). The wage-only test and the wage-plus-property test are
alternatives, and the taxpayer takes whichever is larger. That is why a capital-intensive business
with few employees can still get a deduction: the second test brings in a share of the unadjusted
basis of qualified property.

**"Unadjusted basis immediately after acquisition" means before depreciation.**
{fig:qbi.qualified_property} (IRC § 199A(b)(6)(A)) requires the property still to be held and
available for use at the close of the year, to have been used during the year in producing
qualified business income, and to be inside its depreciable period. But the figure taken into
account is the original cost, undiminished by depreciation — including where the cost was expensed
in full under IRC § 179 or through bonus depreciation.

**A specified service business is defined by cross-reference, and the cross-reference has a
carve-out.** {fig:qbi.sstb} (IRC § 199A(d)(2)). The list in IRC § 1202(e)(3)(A) covers health, law,
accounting, actuarial science, performing arts, consulting, athletics, financial services and
brokerage services, plus any business whose principal asset is the reputation or skill of one or
more of its employees or owners — and IRC § 199A(d)(2)(A) applies it "without regard to the words
'engineering, architecture,'". Engineers and architects are therefore **not** specified service
businesses, which is the single most useful thing to know about the list.

**Below the threshold, none of that matters.** A doctor with taxable income under the threshold
gets the full deduction. The specified service exclusion is not a disqualification from the
section; it is a rule that operates only as income rises.

**And now there is a floor.** {fig:qbi.minimum} (IRC § 199A(i)). It reaches a taxpayer whose
aggregate qualified business income from **active** businesses clears a small floor, and it gives
the greater of the ordinary computation or a fixed amount. {fig:qbi.active}
(IRC § 199A(i)(2)(B)) — material participation, so a passive investor in a business does not
qualify. Both figures are indexed for taxable years beginning after 2026.

<div class="scenario" data-type="boundary">
<h3>Three consultants, three answers</h3>

Three unmarried consultants each have $300,000 of qualified business income from a consulting
practice, which is a specified service trade or business. Each pays $60,000 of W-2 wages and holds
no qualified property. They differ only in taxable income.

**Taxable income of $180,000.** Below {fig:qbi.threshold_2026}. {fig:qbi.below_threshold}
(IRC § 199A(b)(3)(A)) — the wage limitation is disregarded and the specified service status is
irrelevant. The deduction is 20 percent of $300,000, capped by 20 percent of taxable income less
net capital gain — $36,000.

**Taxable income of $320,000.** Above the top of the phase-in range for a single filer. The
practice is a specified service trade or business and is excluded entirely: no qualified business
income, no deduction.

**Taxable income of $230,000.** Inside the range. The applicable percentage of the qualified
business income is taken into account, reducing ratably as income rises through the range, and the
wage limitation phases in over the same span. Neither effect is all-or-nothing.

The middle band did not exist in this width until 2025. {fig:qbi.phasein_widened} — before then
the third consultant would have been excluded entirely at $230,000 of taxable income.
</div>

<div class="scenario" data-type="baseline">
<h3>The property-rich business with two employees</h3>

A haulage business has $900,000 of qualified business income, pays $140,000 of W-2 wages, and owns
tractors and trailers with an unadjusted basis immediately after acquisition of $6,400,000, all
within their depreciable periods. The owner's taxable income is well above the top of the phase-in
range.

{fig:qbi.per_business} (IRC § 199A(b)(2)) gives 20 percent of $900,000, or $180,000, capped by the
greater of two figures.

The wage-only test gives 50 percent of $140,000 — $70,000.

The wage-and-property test gives 25 percent of $140,000 plus 2.5 percent of $6,400,000 — $35,000
plus $160,000, or $195,000.

The greater is $195,000, which exceeds the $180,000, so the limitation does not bite and the
deduction is $180,000.

Note two things. The property figure is the **unadjusted** basis, so it is unaffected by the
depreciation the business has taken — including bonus depreciation that wrote the whole cost off
in year one. And had the business only had the wage test available, it would have lost $110,000 of
deduction. The second alternative exists for exactly this kind of business.
</div>

<div class="scenario" data-type="fails">
<h3>The side business that now gets something</h3>

A salaried employee runs a small repair business at weekends in which she materially participates.
It produces $3,200 of qualified business income. Her taxable income, mostly salary, is $140,000.

Under the ordinary computation the deduction is 20 percent of $3,200, or $640 — below the
threshold, so no wage or property test applies.

{fig:qbi.minimum} (IRC § 199A(i)) gives the greater of that and the fixed minimum. Here the
ordinary computation wins, so the floor does nothing.

Change the facts: suppose the business produced $1,400 of qualified business income. The ordinary
computation gives $280. The floor applies because the aggregate active qualified business income
clears the $1,000 mark, and the deduction becomes the fixed amount instead — more than double.

Change them again: make her a passive investor in the business rather than a participant.
{fig:qbi.active} (IRC § 199A(i)(2)(B)) requires {gloss:material-participation} within IRC § 469(h), so
the floor is unavailable and the deduction returns to $280.
</div>

<div class="scenario" data-type="interaction">
<h3>The property test that bonus depreciation didn't shrink</h3>

An equipment-leasing business buys $4,000,000 of qualified property in 2026 and elects full
{gloss:bonus-depreciation}, writing the entire cost off in year one. It pays
$50,000 of W-2 wages, has $700,000 of qualified business income, and the owner's taxable income is
above the top of the phase-in range.

{fig:qbi.per_business} takes the greater of two figures: 50 percent of wages, or $25,000, against 25
percent of wages plus 2.5 percent of unadjusted basis, or $12,500 plus $100,000, which is $112,500.
The greater is $112,500, and the deduction is the lesser of that and 20 percent of $700,000, so the
limitation does not bite and the deduction is $112,500.

{fig:qbi.qualified_property} counts the property at its unadjusted basis immediately after
acquisition — before any depreciation. The bonus depreciation deduction wrote the property's
depreciable basis down to nothing, but the $4,000,000 figure feeding the wage-and-property test is
untouched by that. The two provisions measure different things from the same purchase.
</div>

<div class="scenario" data-type="timing">
<h3>The same consultant, a year apart</h3>

A single consultant runs a specified service practice with taxable income $60,000 above the 2026
threshold amount, {fig:qbi.threshold_2026}. Under the current, widened range she is $60,000 into a
corridor that now runs a full $75,000 for an unmarried filer, {fig:qbi.phasein_widened} — so she sits
inside the phase-in range and keeps a partial deduction, reduced ratably but not eliminated.

Had the identical $60,000 gap arisen under the range as it stood before the widening, it would have
exceeded the old $50,000 span outright. {fig:qbi.phasein_widened} records that earlier width for an
unmarried filer, and a $60,000 excess carries past it entirely — putting her above the whole range,
where a specified service business receives nothing at all. The identical income, tested against the
same threshold, gives an opposite answer depending only on which year's range applies.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>The section did not expire.</strong> {fig:qbi.permanent}. Its former subsection (i) read
"This section shall not apply to taxable years beginning after December 31, 2025," and
Pub. L. 119-21 § 70105(b)(1) replaced that sentence entirely.</p>

<p><strong>The wage and property tests are alternatives, and the taxpayer takes the
greater.</strong> {fig:qbi.per_business} (IRC § 199A(b)(2)(B)). An answer that applies only the
wage test is incomplete.</p>

<p><strong>Unadjusted basis is before depreciation.</strong> {fig:qbi.qualified_property}. Property
fully expensed under IRC § 179 still counts at its original cost while its depreciable period
runs.</p>

<p><strong>Engineering and architecture are not specified service businesses.</strong>
{fig:qbi.sstb} (IRC § 199A(d)(2)(A)) applies IRC § 1202(e)(3)(A) "without regard to the words
'engineering, architecture,'".</p>

<p><strong>Specified service status is irrelevant below the threshold.</strong>
{fig:qbi.below_threshold} (IRC § 199A(b)(3)(A)). A doctor under the threshold gets the full
deduction.</p>

<p><strong>The threshold is taxable income, not business income.</strong> IRC § 199A(e)(2). Large
investment income can push a small business owner above it.</p>
</div>

## How this has changed

**Three changes in one section of one Act, and all three take effect for 2026.**
Pub. L. 119-21 § 70105 did the following.

*It made the deduction permanent.* {fig:qbi.permanent}. IRC § 199A(i) previously consisted of a
single sentence terminating the section after 2025. Section 70105(b)(1) amended that subsection
generally, and § 70105(b)(2) inserted "except as provided in subsection (i)," into IRC § 199A(a) so
that the new subsection could operate as a floor rather than a termination. The termination is
gone; there is no successor date.

*It widened the phase-in range by half.* {fig:qbi.phasein_widened}. Section 70105(a)(1) made the
substitution in IRC § 199A(b)(3)(B), which governs the wage and property limitation, and
§ 70105(a)(2) made it in IRC § 199A(d)(3), which governs the specified service exclusion. Both
ranges widened together, so a specified service business now keeps some deduction over a span half
as long again as before. For 2026 the range runs from {fig:qbi.threshold_2026} to
{fig:qbi.phasein_2026}.

*It added a minimum deduction.* {fig:qbi.minimum} (IRC § 199A(i)). This is new law with no
predecessor, and it is directed at the smallest businesses — the ordinary computation beats it
once qualified business income passes a modest level. IRC § 199A(i)(3) indexes both of its figures
from a 2025 base for taxable years beginning after 2026, so 2026 is the only year in which they
are the statutory amounts.

**A fourth change, from a different section, is easy to miss.** Pub. L. 119-21 § 70111(b) inserted
references to IRC § 68 into IRC § 199A(e)(1) and IRC § 199A(g)(2)(B), so that taxable income for
those purposes is computed without regard to the overall limitation on itemized deductions. That
conforming amendment was needed because the same Act rewrote IRC § 68 and brought it back into
operation for taxable years beginning after 2025 — so the two provisions became live in the same
year and had to be told about each other.

## Exam focus

Place the taxpayer in one of three bands first: below the threshold, inside the range, or above
it. Almost every question turns on which, and the facts always supply taxable income.

Below the threshold, the computation is simple and specified service status is irrelevant. Above
the range, apply the wage and property limitation and exclude a specified service business
entirely. Inside, both phase in.

Learn the wage and property test as "the greater of," and learn that qualified property is counted
at unadjusted basis.

For 2026 specifically, know the three changes: permanence, the wider range, and the new minimum
deduction for an active business. Material written before July 2025 is wrong on all three.

## Check yourself

**1.** An unmarried architect has $400,000 of qualified business income and taxable income of
$600,000, pays $90,000 of W-2 wages and holds no qualified property. Is she excluded as a
specified service business?

*Answer: No. {fig:qbi.sstb} (IRC § 199A(d)(2)(A)) applies IRC § 1202(e)(3)(A) without regard to the
words "engineering, architecture," so architecture is not a specified service trade or business.
She is above the range, so the wage limitation applies in full: her deduction is limited to 50
percent of $90,000, or $45,000, against 20 percent of $400,000.*

**2.** A business has $500,000 of qualified business income, pays no wages, and holds qualified
property with an unadjusted basis of $3,000,000. The owner is above the range. What is the
limitation?

*Answer: $75,000. {fig:qbi.per_business} (IRC § 199A(b)(2)(B)) takes the greater of 50 percent of
W-2 wages — nil — and 25 percent of wages plus 2.5 percent of unadjusted basis, which is nil plus
$75,000. The deduction is the lesser of that and 20 percent of $500,000, so $75,000.*

**3.** A dentist has taxable income below the threshold amount. Does the specified service
exclusion reduce his deduction?

*Answer: No. {fig:qbi.below_threshold} (IRC § 199A(b)(3)(A)) and IRC § 199A(d)(3) both operate only
above the threshold. Below it he is treated like any other business and takes 20 percent of
qualified business income, subject to the overall taxable income cap in IRC § 199A(a)(2).*

**4.** Does IRC § 199A apply to a taxable year beginning in 2026?

*Answer: Yes. {fig:qbi.permanent} — the former IRC § 199A(i), which terminated the section after
2025, was replaced in its entirety by Pub. L. 119-21 § 70105(b)(1), and the new subsection (i) is a
minimum deduction rule rather than a termination.*

**5.** A taxpayer materially participates in one business producing $1,500 of qualified business
income and has no other business. What is her deduction?

*Answer: The fixed minimum under {fig:qbi.minimum} (IRC § 199A(i)), because it exceeds the ordinary
computation of 20 percent of $1,500, or $300, and her aggregate active qualified business income
clears the floor. {fig:qbi.active} is satisfied by her material participation.*
