---
title: "Alternative minimum tax and credit for prior year"
code: "1.4.1.a"
part: 1
domain: "Taxation"
section: "Taxation"
description: "The exemption was made permanent for 2026 and then made harder to keep: the phase-out threshold dropped and the rate at which it phases out was doubled."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 55", title: "Alternative minimum tax imposed", url: "https://www.law.cornell.edu/uscode/text/26/55" }
  - { type: IRC, ref: "§ 56", title: "Adjustments in computing alternative minimum taxable income", url: "https://www.law.cornell.edu/uscode/text/26/56" }
  - { type: IRC, ref: "§ 57", title: "Items of tax preference", url: "https://www.law.cornell.edu/uscode/text/26/57" }
  - { type: IRC, ref: "§ 53", title: "Credit for prior year minimum tax liability", url: "https://www.law.cornell.edu/uscode/text/26/53" }
  - { type: IRC, ref: "§ 59", title: "Other definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/59" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32, § 3.10", title: "2026 AMT exemption amounts, rate breakpoint and phase-out", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
  - { type: Statute, ref: "Pub. L. 119-21, § 70107", title: "Permanent and modified alternative minimum tax exemption", url: "https://www.law.cornell.edu/uscode/text/26/55" }
forms: []
related: ["1.1.1.p", "1.2.3.h", "1.1.1.j", "1.3.1.b", "1.4.1.b", "1.4.1.c", "1.5.1.g"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 55(a) and (b)(1) computation with the 2026 rate breakpoint, the § 55(d)(4) exemption as made permanent and modified by Pub. L. 119-21 § 70107 — threshold reset to $1,000,000 and $500,000, re-indexed from 2025, phase-out rate doubled to 50 percent — the § 56(b) individual adjustments and § 57(a) preferences, and the § 53 minimum tax credit with its deferral-item restriction." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, two typed scenarios (fails, procedural), and a glossary mark." }
---

<div class="plain-terms">
This is a second tax system that runs next to the regular income tax. A taxpayer works out both and
pays whichever is higher. It mainly hits higher earners, biting hardest once income passes a set line
where a large tax-free amount starts to shrink away. Most ordinary returns never see it, since the
tax-free amount is generous below that line. This page decides which regular deductions, like state
taxes, get added back first. It also decides whether a taxpayer who paid this tax before can get some
back later, as a credit, once regular tax rises above this one.
</div>

The alternative minimum tax was made permanent for 2026 in the same breath as it was made harder to
escape. Pub. L. 119-21 § 70107 struck the sunset from IRC § 55(d)(4), so the large exemption enacted in
2017 no longer expires — and then reset the income at which that exemption starts disappearing, moved
its indexing base forward eight years, and doubled the rate at which it phases out. For a high-income
taxpayer the net effect of "permanence" is an increase.

## The rule

**The tax.** Section 55(a) imposes a tax equal to the excess of the tentative minimum tax over the
regular tax. So the alternative minimum tax is not an alternative the taxpayer chooses between — it is
an addition that brings total liability up to the tentative minimum. The taxpayer computes both and the
higher figure is what is paid, because the excess is added to the regular tax.

**The tentative minimum tax.** {fig:amt.rates} applied to the taxable excess, which is alternative
minimum taxable income over the exemption amount, reduced by the alternative minimum tax foreign tax
credit (IRC § 55(b)(1)(A), (B)). A married individual filing separately halves the rate breakpoint
(IRC § 55(b)(1)(C)).

**Alternative minimum taxable income.** Taxable income with the § 56 and § 58 adjustments and increased
by the § 57 preference items (IRC § 55(b)(1)(D)).

**The exemption.** {fig:amt.exemption} (IRC § 55(d)(1), as substituted by § 55(d)(4)(A)(i) and indexed).
It phases out: {fig:amt.phase_out}. The rate is {fig:amt.phase_out_rate}.

**The adjustments that matter to individuals.** Section 56(b)(1)(A) allows no deduction for any
miscellaneous itemized deduction within § 67(b), and none for taxes described in § 164(a)(1), (2) or (3)
— state and local income, real property and personal property taxes — unless allowable in computing
adjusted gross income. Section 56(b)(1)(D) disallows the standard deduction and the § 151 personal
exemption deduction; § 56(b)(1)(E) switches off § 68. Interest is recomputed under § 56(b)(1)(B), with
qualified housing interest replacing the regular tax's qualified residence interest. And § 56(b)(3)
turns off § 421 for stock acquired on the exercise of an incentive stock option, so the spread between
the exercise price and the fair market value at exercise enters alternative minimum taxable income in
the year of exercise.

**The preference items.** Excess depletion, excess intangible drilling costs above 65 percent of net oil
and gas income, and interest on specified private activity bonds — including the private activity
portion of an exempt-interest dividend from a mutual fund (IRC § 57(a)(1), (2), (5)(A), (B)).

**The credit for prior year minimum tax.** {fig:amt.credit} (IRC § 53). The restriction in § 53(d)(1)(B)
is the substance of the section: the credit is based on the *adjusted* net minimum tax, which excludes
the part of the minimum tax attributable to exclusion preferences. Disallowed taxes and the standard
deduction are exclusion items — money that is never deductible for alternative minimum tax purposes, so
no timing difference ever reverses. Depreciation and the incentive stock option spread are deferral
items: the same income or deduction turns up in the other system in a different year, and the credit
exists to prevent double taxation of it.

**A cross-reference that no longer operates.** Section 55(d)(4)(A)(iii) provides that § 59(j) — the
limit on the exemption for a child subject to the § 1(g) kiddie tax — "shall not apply" for any taxable
year to which § 55(d)(4) applies. With the sunset struck, that is now every year.

## Current figures

| Item | Amount |
| --- | --- |
| Exemption | {fig:amt.exemption} |
| Rates | {fig:amt.rates} |
| Phase-out | {fig:amt.phase_out} |
| Phase-out rate | {fig:amt.phase_out_rate} |
| Threshold reset | {fig:amt.threshold_reset} |
| Permanence | {fig:amt.permanence} |
| Minimum tax credit | {fig:amt.credit} |

## How it works in practice

Work it in five steps and the arithmetic stays tractable.

**One, start from taxable income** and add back what § 56(b) disallows — state and local taxes, the
standard deduction if taken, and any miscellaneous itemized deduction the regular tax allowed.

**Two, add the § 57 preferences**, which for most individual returns means private activity bond
interest and nothing else.

**Three, compute the exemption**, remembering that it is reduced by half of every dollar of alternative
minimum taxable income above the threshold. That 50 percent rate means the exemption disappears over a
band only twice its own width, so the range in which a taxpayer is partly exempt is now narrow.

**Four, apply the rates to the taxable excess** and compare the tentative minimum tax to the regular
tax. Any excess is the alternative minimum tax, reported on Form 6251 and added to the regular tax.

**Five, split what caused it.** Deferral items generate a § 53 credit for future years; exclusion items
do not. A taxpayer whose alternative minimum tax came entirely from disallowed state taxes gets no
credit and never will.

Two planning points follow directly. An incentive stock option exercise creates alternative minimum tax
in the year of exercise and a credit that can only be used in a year when regular tax exceeds tentative
minimum tax — often the year of sale, and sometimes much later. And because state and local taxes are an
exclusion item, a taxpayer in a high-tax state can be pushed into the alternative minimum tax by nothing
more than paying their property tax bill, with no credit to show for it.

<div class="scenario" data-type="timing">
<h3>The narrowed band</h3>

Devesh and Anna file jointly with alternative minimum taxable income of $1,180,000 in 2026.

Their income exceeds the $1,000,000 threshold by $180,000. At the 50 percent rate their exemption of
$140,200 is reduced by $90,000, leaving $50,200. Under the pre-2026 rule — a 25 percent rate and a
threshold above $1.2 million — they would have had the full exemption. The change costs them $90,000 of
exemption, taxed at 28 percent, or about $25,000 of additional tentative minimum tax on identical
income. Nothing about their return changed; the statute did.
</div>

<div class="scenario" data-type="baseline">
<h3>Two causes, one tax, one credit</h3>

Priya has alternative minimum tax of $14,000 for the year. Of it, $9,000 is attributable to the spread
on incentive stock options she exercised and held, and $5,000 to her disallowed state and local taxes.

Section 53(d)(1)(B) computes the adjusted net minimum tax by removing the part of the minimum tax that
would arise if only exclusion preferences were counted. The state tax disallowance is an exclusion item,
so $5,000 generates no credit and is simply a cost. The option spread is a deferral item — the same gain
will be taxed under the regular system when she sells — so $9,000 becomes a minimum tax credit carried
forward indefinitely.
</div>

<div class="scenario" data-type="boundary">
<h3>Using the credit, and what is left</h3>

Tomas carries a minimum tax credit of $1,200 into a year in which his regular tax liability is $2,500
and his tentative minimum tax is $2,000. He has no other nonrefundable credits.

Section 53(c) caps the credit at regular tax liability reduced by other allowable credits, less the
tentative minimum tax — $2,500 less $2,000, or $500. He uses $500 this year. The remaining $700 stays in
the carryforward, which § 53(b) computes as the adjusted net minimum tax for all prior years over the
amounts already allowed, with no expiry. In a year when his tentative minimum tax equals or exceeds his
regular tax, the limitation is zero and none of the credit is usable.
</div>

<div class="scenario" data-type="fails">
<h3>All exclusion, no credit</h3>

Marcus has minimum tax of $9,000 for the year, all traced to the {gloss:itemized-deduction} for state
and local taxes that the regular system allows but this one does not — no incentive stock options, no
private activity bonds. He expects the usual credit to follow.

None does. Section 53(d)(1)(B) measures the credit against the adjusted net minimum tax, which strips
out exclusion items entirely. The $9,000 is simply the cost of the year he paid it, with nothing carried
forward.
</div>

<div class="scenario" data-type="procedural">
<h3>Confirming there is nothing to file</h3>

Wei's return shows ordinary wages, the {gloss:standard-deduction}, and nothing unusual — no incentive
stock options, no private activity bonds.

Her preparer still works through the Form 6251 computation each year before concluding no alternative
minimum tax is due, because § 55(a) compares two full computations rather than offering a shortcut based
on how ordinary a return looks. Skipping the worksheet skips the determination itself.
</div>

<div class="callout trap">

**It is an addition, not an election.** Section 55(a) imposes the excess of the tentative minimum tax
over the regular tax. Describing it as "pay the higher of the two" gets the right number by the wrong
route, and the wrong route matters when credits are in play.

**Only deferral items generate the credit.** Disallowed state and local taxes, the standard deduction
and miscellaneous itemized deductions are exclusion items. This is the most frequently tested point on
the topic.

**The exemption phases out at 50 percent from 2026**, not 25. The band over which it disappears is
therefore half as wide as it used to be.

**The threshold went down, not up.** It was reset to the 2018 base and re-indexed from calendar year
2025, so the 2026 figure is lower than the 2025 one — the only headline inflation-adjusted amount on an
individual return that moved backwards this year.

**Incentive stock options create tax without cash.** The § 56(b)(3) adjustment applies on exercise, not
on sale, and only where the stock is held past year end.

**Private activity bond interest is a preference** even though it is tax-exempt for regular tax
purposes, and it reaches mutual fund shareholders through § 57(a)(5)(B).

**Section 59(j) does not apply.** Section 55(d)(4)(A)(iii) disapplies it for every year § 55(d)(4)
covers, which since Pub. L. 119-21 means every year.

**The credit is limited by the current year's spread**, not by the amount of the carryforward. A
carryforward can sit unused for years.
</div>

## How this has changed

Pub. L. 119-21 § 70107 made four amendments to § 55, all applying to taxable years beginning after 31
December 2025.

Subsection (a) struck the words limiting § 55(d)(4) to taxable years beginning before 2026, from the
heading and from the text of § 55(d)(4)(A). {fig:amt.permanence}

Subsection (b) changed the indexing. Section 55(d)(4)(B)(i) now carries a parenthetical starting the
adjustment of the threshold amount in 2026 rather than 2018, and § 55(d)(4)(B)(i)(II) substitutes
calendar year 2025 rather than calendar year 2017 as the base for it. {fig:amt.threshold_reset} The
exemption amounts themselves keep their 2017 base and their existing indexed values, so the two halves
of the provision now move on different schedules.

Subsection (c) added § 55(d)(4)(A)(ii)(IV), substituting 50 percent for 25 percent. That is the
phase-out rate, and doubling it is what makes the reduced threshold bite so quickly.

Taken together: the exemption survives, the income at which it begins to disappear falls back to the
original round figure on a joint return, and it disappears twice as fast. Anyone describing the 2025 Act as having
simply "made the AMT relief permanent" has described one of the four amendments.

A separate point of currency, which the page does not rely on: Rev. Proc. 2025-32 § 3.11 still publishes
a 2026 alternative minimum tax exemption limit for a child subject to the kiddie tax "under §§ 55(d) and
59(j)". Section 55(d)(4)(A)(iii) says § 59(j) shall not apply. The statute is the controlling authority
and the page follows it.

## Exam focus

Expect the § 53 credit to be tested more often than the tax itself, and in two forms. The definitional
question asks which item generates a credit — the answer is a deferral item, with depreciation and
incentive stock options the usual examples and state taxes, property taxes and mortgage interest the
usual distractors. The computational question gives a carryforward, a regular tax and a tentative
minimum tax, and asks what remains: the answer is the carryforward less the excess of regular tax over
tentative minimum tax.

Know the adjustments that create the tax for ordinary individuals: state and local taxes, the standard
deduction, and the incentive stock option spread. Know that private activity bond interest is a
preference. Know that the tax is the excess of the tentative minimum tax over the regular tax, computed
on Form 6251.

For 2026, know all three moving parts: permanent, lower threshold, faster phase-out.

## Check yourself

**1.** A taxpayer has a minimum tax credit carryforward of $1,200, regular tax liability of $2,500 and
tentative minimum tax of $2,000, with no other nonrefundable credits. How much carries to the next year?

*Answer: $700. IRC § 53(c) limits the credit to regular tax liability reduced by other allowable
credits, less the tentative minimum tax — $500 here. The unused $700 remains in the § 53(b)
carryforward, which has no expiry.*

**2.** Which of a property tax deduction, a state income tax deduction, a depreciation adjustment and
mortgage interest can produce a credit under § 53?

*Answer: The depreciation adjustment. It is a deferral item — the deduction is taken in a different year
under each system, so the difference reverses. The two tax deductions are exclusion items under
§ 56(b)(1)(A)(ii), permanently disallowed, and § 53(d)(1)(B) removes exclusion preferences from the
adjusted net minimum tax.*

**3.** A joint return shows alternative minimum taxable income of $1,100,000 for 2026. By how much is
the exemption reduced?

*Answer: By $50,000. Income exceeds the $1,000,000 threshold by $100,000, and IRC § 55(d)(4)(A)(ii)(IV)
sets the reduction at 50 percent of the excess for taxable years beginning after 31 December 2025. Under
the former 25 percent rate the reduction would have been $25,000.*

**4.** An employee exercises incentive stock options in November and holds the shares into the following
year. What happens for alternative minimum tax purposes?

*Answer: The spread between the exercise price and the fair market value at exercise is included in
alternative minimum taxable income for the year of exercise, because IRC § 56(b)(3) disapplies § 421 for
this purpose. Any resulting minimum tax is a deferral item and generates a § 53 credit.*

**5.** Is a taxpayer with tax-exempt interest from a municipal bond issued to build a public school
affected by § 57(a)(5)?

*Answer: Only if it is a specified private activity bond. Section 57(a)(5)(A) makes interest on such
bonds a preference item; ordinary governmental purpose bonds are not within it. A mutual fund's
exempt-interest dividend carries the preference through to the shareholder in proportion to the fund's
private activity bond interest under § 57(a)(5)(B).*

**6. For 2026 a taxpayer's regular tax is $31,000 and tentative minimum tax is $36,500. What is the alternative minimum tax reported on Form 6251?**
(A) $36,500 (B) $5,500 (C) $31,000 (D) Zero, because the regular tax was paid
*Answer: B. IRC § 55(a) imposes a tax equal to the excess of the tentative minimum tax over the regular tax — $5,500 — which is added to the regular tax rather than replacing it.*

**7. Which of the following was not among the changes Pub. L. 119-21 made to the alternative minimum tax for taxable years beginning after 31 December 2025?**
(A) The sunset on the enlarged exemption was struck (B) The phase-out threshold was reset and re-indexed from calendar year 2025 (C) The phase-out rate was doubled to 50 percent (D) The exemption amounts were increased and given a new indexing base
*Answer: D. Pub. L. 119-21 § 70107 struck the sunset, reset the threshold with a 2025 indexing base, and doubled the phase-out rate; the exemption amounts themselves kept their 2017 base and their existing indexed values.*

**8. A child subject to the § 1(g) kiddie tax has alternative minimum taxable income in 2026. Does the § 59(j) limit on the child's exemption apply?**
(A) Yes, as published in the annual revenue procedure (B) No; the statute disapplies § 59(j) for every year the permanent exemption rules cover (C) Only if the child's parents themselves owe alternative minimum tax (D) Only for a child under 18
*Answer: B. IRC § 55(d)(4)(A)(iii) provides that § 59(j) shall not apply for any taxable year to which § 55(d)(4) applies, and with the sunset struck by Pub. L. 119-21 that is now every year; the statute controls over the figure the revenue procedure still publishes.*
