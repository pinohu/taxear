---
title: "State and local income tax refunds and other itemized deduction recoveries"
code: "1.2.1.n"
part: 1
domain: "Income and Assets"
section: "Income"
description: "A refund is income only to the extent the earlier deduction saved tax. The cap on state and local taxes changed for 2026, and it changes the answer here too."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 61", title: "Gross income defined", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: IRC, ref: "§ 63", title: "Taxable income defined", url: "https://www.law.cornell.edu/uscode/text/26/63" }
  - { type: IRC, ref: "§ 111", title: "Recovery of tax benefit items", url: "https://www.law.cornell.edu/uscode/text/26/111" }
  - { type: IRC, ref: "§ 164", title: "Taxes", url: "https://www.law.cornell.edu/uscode/text/26/164" }
  - { type: IRC, ref: "§ 6050E", title: "State and local income tax refunds", url: "https://www.law.cornell.edu/uscode/text/26/6050E" }
  - { type: Statute, ref: "Pub. L. 119-21", title: "An Act to provide for reconciliation, title VII" }
forms: []
related: ["1.2.1.h", "1.2.1.f", "1.1.1.h", "1.2.1.m", "1.2.1.o", "1.3.1.b"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Records the removal of the IRC § 164(b)(6) sunset and the new applicable limitation amount in IRC § 164(b)(7), with its income phasedown and its scheduled reversion after 2029, and the effect of both on the IRC § 111(a) recovery computation." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and two typed scenarios (timing, procedural) alongside the existing three." }
---

<div class="plain-terms">
This page is about a state tax refund you get after you already deducted that tax on last year's
federal return. Getting money back does not always mean you owe tax on it now. You only owe tax on the
part that actually lowered your tax bill last year. If you took the standard deduction instead of
listing deductions, none of the refund is taxed. If your state and local taxes were so high that part
of them could not be deducted at all, that part is not taxed when refunded either. This affects anyone
who itemizes deductions and later gets a state refund, a credit, or an offset. It does not affect
someone who never deducted the tax in the first place.
</div>

A refunded deduction is not automatically income. Section 111(a) excludes a recovery to the extent the
amount deducted in the earlier year **did not reduce the tax** for that year, so the question is always
what the deduction actually bought. For state and local taxes that question has become harder rather
than easier, because a cap sits on the deduction and the cap itself changed for 2026.

## The rule

**The tax benefit rule, stated exactly.** Gross income does not include income attributable to the
recovery during the taxable year of any amount deducted in any prior taxable year **to the extent such
amount did not reduce the amount of tax** imposed by chapter 1 (IRC § 111(a)). The exclusion is
measured by tax reduction, not by whether a deduction was claimed — so a deduction that was claimed but
produced no tax saving yields no income when it comes back.

**Three ways a deduction produces no benefit.** The taxpayer took the standard deduction rather than
itemizing (IRC § 63(b), (c)), so the state tax was never deducted at all. The taxpayer itemized but the
total was below what the standard deduction would have given. Or the deduction was disallowed by a
limitation — which for state and local taxes is now the usual case.

**The state and local tax limitation, as it now stands.** For an individual, foreign real property
taxes are not taken into account, and the aggregate of income, real property and personal property
taxes under § 164(a)(1)–(3) plus § 164(b)(5) may not exceed **the applicable limitation amount**, half
that for a married individual filing separately (IRC § 164(b)(6)). The limitation does not reach
foreign taxes described in § 164(a)(3), nor taxes under § 164(a)(1) and (2) paid or accrued in carrying
on a trade or business or a § 212 activity.

**The applicable limitation amount is now a schedule, not a number.** IRC § 164(b)(7)(A) sets a figure
for a taxable year beginning in 2025, a higher figure for 2026, then a small annual step-up for taxable
years beginning after 2026 and before 2030 — and a sharp reversion to the old figure for taxable years
beginning after calendar year 2029 (IRC § 164(b)(7)(A)(iv)).

**And it phases down.** For any taxable year beginning before 1 January 2030, the applicable limitation
amount is reduced by a percentage of the excess of modified adjusted gross income over a threshold
amount, halved for a married individual filing separately (IRC § 164(b)(7)(B)(i), (ii)) — but the
reduction may never bring the applicable limitation amount below the reversion figure (IRC
§ 164(b)(7)(B)(iii)). The current amounts are in the table below.

**Reporting is low and unchanged.** Every person making payments of refunds of State or local income
taxes, or allowing credits or offsets, aggregating a small figure or more for an individual in a
calendar year must file an information return (IRC § 6050E(a)).

## Current figures

| Item | 2026 |
| --- | --- |
| State and local tax limitation | {fig:salt.cap} |
| Phasedown of the limitation | {fig:salt.phasedown} |
| The tax benefit rule | {fig:recovery.tax_benefit_rule} |
| Refund reporting threshold | {fig:recovery.reporting_floor} |

## How it works in practice

Never treat a Form 1099-G figure as the answer. It reports what the state refunded; § 111(a) asks what
the earlier deduction did, and those are different questions. The recomputation is done on the prior
year's return, not on this one.

The method is to rework the earlier year twice. Compute that year's tax as filed, then recompute it
with the state and local tax deduction reduced by the refund. The difference in tax is the benefit, and
the includible amount is capped by it. Where the taxpayer took the standard deduction, the difference
is nil and so is the income. Where they itemized but only just, the includible amount is limited to the
excess of the itemized total over the standard deduction they could have taken.

The limitation adds a step that catches people out. Where a taxpayer's state and local taxes exceeded
the applicable limitation amount in the earlier year, the extra tax they paid produced no deduction, so
refunding it produces no income. In the years when the cap stood at ten thousand dollars this excluded
most refunds in high-tax states almost automatically. For 2026 the cap is far higher, so the arithmetic
has to be done again rather than assumed — a refund that would plainly have been excluded on a 2024
return may be includible on a 2026 one.

Two further points worth raising with clients. The phasedown means a high-income taxpayer's limitation
is not the headline figure, and its floor means it never falls below the old amount. And because the
schedule reverts after 2029, a payment made in one year rather than another can change the deduction
substantially — which makes the timing of a state estimated payment a live question in a way it has not
been for several years.

<div class="scenario" data-type="baseline">
<h3>The refund that was not income</h3>

Lucia received a $2,400 state income tax refund in 2026 for her 2025 return. She took the
{gloss:standard-deduction} for 2025.

None of it is income. IRC § 111(a) excludes a recovery to the extent the amount deducted in the prior
year did not reduce the tax for that year, and she deducted nothing — a taxpayer who takes the standard
deduction under IRC § 63(b) and (c) never deducts state income tax at all, so the refund cannot be a
recovery of a deducted amount.

The Form 1099-G will still arrive, because IRC § 6050E(a) requires the state to report refunds above a
low threshold regardless of the recipient's federal position. The form reports a payment; it does not
determine the tax treatment of one.
</div>

<div class="scenario" data-type="boundary">
<h3>Itemized, but only just</h3>

Owen chose to list each {gloss:itemized-deduction} for 2025 rather than take the standard amount. His
itemized total came to $34,100 against a standard deduction of $32,200 he could have taken instead. In
2026 he receives a $3,000 state income tax refund.

His benefit was $1,900, not $3,000 — the amount by which itemizing beat the standard deduction. Had the
refunded $3,000 not been deducted, his itemized total would have been $31,100, below the standard
deduction, and he would simply have taken the standard deduction instead.

So $1,900 is includible under IRC § 111(a) and the remaining $1,100 is not: to that extent the deducted
amount did not reduce his tax. The computation is done on the 2025 figures, and the 2026 return reports
only the result.
</div>

<div class="scenario" data-type="interaction">
<h3>The cap that changed the answer</h3>

Priya paid $46,000 of state and local taxes in 2026 — income tax, property tax and a vehicle tax
combined. Her modified adjusted gross income is well below the phasedown threshold. In 2027 the state
refunds $3,500 of income tax.

Under the 2026 limitation her deduction was capped at the applicable limitation amount, and her actual
taxes exceeded it. The refunded $3,500 came out of the portion above the cap, so it produced no
deduction and no tax reduction — IRC § 111(a) excludes the whole recovery.

The important part is what that reasoning depends on. Had the same facts arisen in a post-2029 year,
when IRC § 164(b)(7)(A)(iv) reverts the limitation to its old level, the excess above the cap would have
been far larger and the conclusion the same. Had her taxes been $38,000 against the 2026 limitation, they would
have been fully deducted and the refund fully includible. The cap does not decide the answer; the
relationship between the taxes paid and the cap does.
</div>

<div class="scenario" data-type="timing">
<h3>The same taxes, a different year, a different cap</h3>

Grace pays $28,000 of combined state and local taxes every year without fail. In 2025 the applicable
limitation amount was lower than her total, so part of her payment produced no deduction. In 2026 the
limitation rose, and her full $28,000 clears it.

Nothing about her taxes changed and nothing about § 111(a) changed. What changed is the applicable
limitation amount itself, which IRC § 164(b)(7)(A) sets year by year rather than as a single fixed
figure. A refund of part of her 2025 taxes and a refund of part of her 2026 taxes on identical facts can
have different tax consequences purely because the cap moved between the two years.
</div>

<div class="scenario" data-type="procedural">
<h3>The worksheet nobody skips</h3>

A preparer receives a client's Form 1099-G showing a $4,200 state refund and, without more, is tempted
to just add it to this year's income.

The correct procedure runs through the prior year's return, not this year's form. The preparer reworks
the earlier year's tax twice — once as filed, once with the state and local tax deduction reduced by
the refund — and the difference is the includible amount. No amended return is filed for the earlier
year; the recomputation is a worksheet exercise that produces a single number reported on the current
return.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **The test is tax reduction, not deduction** (IRC § 111(a)). A deduction claimed but wasted produces
  no income on recovery.
- **A Form 1099-G is not the includible amount.** It reports the refund; § 111 decides the income.
- **Standard deduction in the earlier year means no income**, whatever the refund.
- **Where itemizing barely beat the standard deduction**, the includible amount is limited to the
  excess.
- **Amounts above the state and local cap produced no deduction**, so refunding them produces no
  income — but this must be computed, not assumed.
- **The cap is no longer a single fixed figure.** IRC § 164(b)(7) sets a schedule, and the sunset in
  § 164(b)(6) was struck by Pub. L. 119-21 § 70120(a)(1).
- **The heading of § 164(b)(6) is now wrong.** It still reads "for taxable years 2018 through 2025"
  although the end date was removed from the text.
- **The limitation phases down on income** (IRC § 164(b)(7)(B)) and is halved on a separate return —
  but never falls below the reversion figure.
- **It reverts after 2029** (IRC § 164(b)(7)(A)(iv)), which makes payment timing consequential again.
- **Business and § 212 taxes are outside the limitation** entirely, as are foreign taxes under
  § 164(a)(3).
- **The rule is not confined to tax refunds.** IRC § 111(a) reaches the recovery of **any** amount
  deducted in a prior year — a refunded medical expense or a recovered bad debt is analysed the same
  way.

</div>

## How this has changed

**The state and local cap was made permanent and then rebuilt.** Pub. L. 119-21 § 70120(a)(1) struck
"and before January 1, 2026" from § 164(b)(6), so the limitation no longer expires. Section 70120(a)(2)
replaced the fixed dollar figures with a reference to "the applicable limitation amount", and
§ 70120(b) added § 164(b)(7) to define it — a year-by-year schedule with an income phasedown, a floor,
and a reversion after 2029.

Two consequences for this topic. First, **the arithmetic has to be done again**. In the years when the
cap stood at its old level, a taxpayer in a high-tax state almost always had taxes above it, so a refund
was almost always excluded under § 111(a) without much analysis. At the 2026 figure that shortcut fails,
and a refund that was plainly excluded on a 2024 return may be includible on a 2026 one.

Second, **timing matters again**. Because the applicable limitation amount rises modestly through 2029
and then falls back sharply, whether a state estimated payment lands in December or January can change
the deduction by a large amount — a planning question that had gone quiet while the cap was flat.

**A drafting artefact worth knowing.** Section 70120(a)(1) struck the end date from the text of
§ 164(b)(6) but left its **heading** reading "Limitation on individual deductions for taxable years 2018
through 2025". The heading is now inaccurate. This is the third instance of a Pub. L. 119-21 amendment
leaving stale text or a moved address behind, after the § 67(g) to § 67(h) redesignation and the rewrite
of § 199A(i).

## Exam focus

Answer every recovery question with § 111(a): income only to the extent the earlier deduction reduced
tax. Expect a fact pattern where the taxpayer took the standard deduction, and one where itemized
deductions exceeded the standard deduction by less than the refund.

Know that the state and local limitation is now a schedule under § 164(b)(7) rather than a fixed figure,
that it phases down on income with a floor, and that it reverts after 2029.

Know what the limitation does **not** reach — foreign taxes under § 164(a)(3), and income and property
taxes paid in carrying on a trade or business or a § 212 activity.

And know that the rule is general: § 111(a) applies to the recovery of any previously deducted amount,
not only to tax refunds.

## Check yourself

**1.** A taxpayer took the standard deduction for 2025 and receives a $1,800 state income tax refund in
2026. How much is includible?

*Answer: none. IRC § 111(a) excludes a recovery to the extent the amount deducted in a prior year did
not reduce the tax for that year. A taxpayer taking the standard deduction under IRC § 63(b) deducted no
state income tax, so no part of the refund is a recovery of a deducted amount. The Form 1099-G is still
issued under IRC § 6050E(a).*

**2.** A taxpayer itemized $33,000 against an available standard deduction of $32,200, and receives a
$2,500 refund. How much is includible?

*Answer: $800. The benefit of itemizing was the $800 excess over the standard deduction. Reducing the
earlier deduction by the full $2,500 would have put the itemized total below the standard deduction, at
which point the taxpayer would have taken the standard deduction instead — so only $800 of the deducted
amount actually reduced tax, and IRC § 111(a) excludes the rest.*

**3.** Why could a refund of state income tax be wholly excluded even where the taxpayer itemized and
had large deductions?

*Answer: because of the § 164(b)(6) limitation. Where the taxpayer's state and local taxes exceeded the
applicable limitation amount, the excess produced no deduction and so reduced no tax, and IRC § 111(a)
excludes a recovery to that extent. The analysis requires comparing the taxes paid with the applicable
limitation amount for that year — which under IRC § 164(b)(7) now differs from year to year.*

**4.** Does the tax benefit rule apply to anything other than tax refunds?

*Answer: yes. IRC § 111(a) is written generally — it excludes income attributable to the recovery of
**any amount deducted in any prior taxable year** to the extent that amount did not reduce tax. A
reimbursed medical expense, a recovered bad debt, or a refunded charitable contribution is analysed the
same way, by asking what the earlier deduction actually saved.*
