---
title: "Deductions and credits for tax planning (e.g., timing of income and expenses, NOL, depreciation versus IRC Section 179 versus bonus depreciation)"
code: "2.2.5.l"
part: 2
domain: "Business Tax Preparation"
section: "Advising the business taxpayer"
description: "Accelerating a deduction is only worth doing if the deduction has somewhere to go, and the limitations that decide that run in a fixed order the taxpayer cannot alter."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 168", title: "Accelerated cost recovery system", url: "https://www.law.cornell.edu/uscode/text/26/168" }
  - { type: IRC, ref: "§ 172", title: "Net operating loss deduction", url: "https://www.law.cornell.edu/uscode/text/26/172" }
  - { type: IRC, ref: "§ 179", title: "Election to expense certain depreciable business assets", url: "https://www.law.cornell.edu/uscode/text/26/179" }
  - { type: IRC, ref: "§ 199A", title: "Qualified business income", url: "https://www.law.cornell.edu/uscode/text/26/199A" }
  - { type: IRC, ref: "§ 250", title: "Foreign-derived deduction eligible income and global intangible low-taxed income", url: "https://www.law.cornell.edu/uscode/text/26/250" }
  - { type: IRC, ref: "§ 461", title: "General rule for taxable year of deduction", url: "https://www.law.cornell.edu/uscode/text/26/461" }
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 465", title: "Deductions limited to amount at risk", url: "https://www.law.cornell.edu/uscode/text/26/465" }
  - { type: IRC, ref: "§ 704", title: "Partner's distributive share", url: "https://www.law.cornell.edu/uscode/text/26/704" }
  - { type: IRC, ref: "§ 1366", title: "Pass-thru of items to shareholders", url: "https://www.law.cornell.edu/uscode/text/26/1366" }
  - { type: IRC, ref: "§ 38", title: "General business credit", url: "https://www.law.cornell.edu/uscode/text/26/38" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32", title: "Inflation-adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["2.2.5.g", "2.2.2.c", "2.2.2.n", "2.2.5.j", "2.2.5.k"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the order in which the loss limitations operate — basis, at-risk, passive activity, then IRC § 461(l) — and the three ways to recover asset cost with the reasons to prefer each, together with the IRC § 172 carryforward and 80 percent rules with their ordering, the IRC § 179(b)(3) income limitation, the IRC § 168(k)(7) election out, and the IRC § 38 credit ordering and carryover." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and a fourth typed scenario on timing a purchase across a loss year and a profitable one." }
---

<div class="plain-terms">
This page is about timing choices at tax time. When should a business deduct a cost? How fast
should it write off new equipment? It covers three ways to write off equipment costs. It covers
what happens to a loss a business cannot use right away. And it covers the order in which several
rules can block a deduction. It matters to any business that is doing well, or growing, and is
deciding whether to write something off now or spread it into later years. It does not change the
rules themselves. It decides which choice actually helps, given where the business stands this year.
</div>

Most planning advice in this area is arithmetic in the wrong order. The useful questions are whether
a deduction has anywhere to go this year, whether the taxpayer will be in a higher or lower position
later, and which of the several limitations will stop it — because they operate in a sequence the
taxpayer cannot rearrange.

## The rule

**Three ways to recover the cost of an asset, and they are not alternatives in the way clients
assume.** IRC § 168(k) applies first and automatically unless elected out —
{fig:depr.bonus_rate} and {fig:depr.bonus_permanent}, with {fig:plan.bonus_election_out}
(IRC § 168(k)(7)). IRC § 179 is elective and capped — {fig:depr.179_limit_2026} and
{fig:depr.179_phaseout_2026} (Rev. Proc. 2025-32 § 3.24) — and has an income ceiling the others do
not: {fig:plan.179_income_limit} (IRC § 179(b)(3)). Ordinary MACRS takes what is left.

**Losses carry forward but do not shelter everything.** {fig:plan.nol_carryforward}
(IRC § 172(b)(1)(A)(ii)(II)), subject to {fig:plan.nol_eighty} (IRC § 172(a)(2)), applied in the
order {fig:plan.nol_ordering}.

**The limitations run in a fixed sequence.** Basis first — {fig:k1.loss_limit_p} (IRC § 704(d)) or
{fig:k1.loss_limit_s} (IRC § 1366(d)); then at-risk under IRC § 465; then passive activity under
IRC § 469; then IRC § 461(l). A deduction that clears one may be stopped by the next.

**Timing is governed, not chosen.** {fig:method.economic_performance} (IRC § 461(h)), relaxed by
{fig:method.recurring_item} (IRC § 461(h)(3)) — so year-end acceleration works only where the
statute allows it.

**Credits have their own ordering and their own carryovers.** The general business credit under
IRC § 38 is limited by tax liability, with unused amounts carried back one year and forward twenty,
and the components are taken in a prescribed order.

## Current figures

| Item | Figure | Authority |
| --- | --- | --- |
| Bonus depreciation | {fig:depr.bonus_rate} | IRC § 168(k)(1) |
| Election out | {fig:plan.bonus_election_out} | IRC § 168(k)(7) |
| Section 179 limit, 2026 | {fig:depr.179_limit_2026} | Rev. Proc. 2025-32 § 3.24 |
| Section 179 phase-out, 2026 | {fig:depr.179_phaseout_2026} | Rev. Proc. 2025-32 § 3.24 |
| Section 179 income limit | {fig:plan.179_income_limit} | IRC § 179(b)(3) |
| NOL carryforward | {fig:plan.nol_carryforward} | IRC § 172(b)(1)(A) |
| The 80 percent rule | {fig:plan.nol_eighty} | IRC § 172(a)(2) |

## How it works in practice

**Ask where the deduction goes before accelerating it.** A business with a loss gains nothing from
expensing an asset — the deduction simply increases a carryforward that the 80 percent rule will
release slowly. In that position ordinary MACRS, or an election out of bonus depreciation, produces
deductions in years when there is income to absorb them, which is worth more than the same deduction
now.

**Know why a client would ever choose IRC § 179 over bonus depreciation.** Bonus is automatic,
uncapped and applies class by class; § 179 requires an election, is capped, phases out on total
purchases and cannot create a loss. Its advantages are precision and reach: it can be applied to
individual assets rather than a whole class, so a taxpayer can expense exactly enough to reach a
target, and it covers qualified real property — roofs, HVAC, fire protection, alarm and security
systems on non-residential buildings — that § 168(k) does not.

**The election out of bonus depreciation is class-wide and effectively final.** IRC § 168(k)(7)
applies to a whole class of property for the year and may be revoked only with the Secretary's
consent. A taxpayer who wants some assets expensed and others not should use § 179 for the ones it
wants, not try to fine-tune the bonus election.

**Run the loss limitations in order and stop at the first one that binds.** Basis, at-risk, passive,
then IRC § 461(l). A partner with ample basis may still be stopped at at-risk by non-recourse
financing; a taxpayer past both may be stopped by passive activity treatment; and a taxpayer past
all three may still find IRC § 461(l) deferring the excess. Advising on the first limitation while
the third is the binding one produces recommendations that change nothing.

**Year-end acceleration is narrower than clients think.** An accrual taxpayer cannot deduct a
liability before economic performance, and the recurring item exception has its own conditions.
Prepaying an expense does not help either, because Reg. § 1.263(a)-4(f) capitalises a prepayment
reaching beyond the 12-month window whatever the method. What does work is paying amounts already
incurred, and completing services or receiving property before year end.

**Credits are usually worth more than deductions and are more often wasted.** A credit reduces tax
directly, but the IRC § 38 limitation ties it to the year's liability and the carryback is a single
year. A business planning a large credit should plan the liability to absorb it — which sometimes
means *not* accelerating deductions, since a deduction that reduces liability to nothing strands the
credit for up to twenty years.

## Scenarios

<div class="scenario" data-type="fails">
<h3>The expensing that did nothing</h3>

Norbury Plastics buys $900,000 of equipment in a year in which it already expects an operating loss
of $400,000. Its preparer expenses the whole $900,000 under IRC § 168(k), producing a $1,300,000
loss.

The deduction has gone somewhere useless. There is no current tax to save, and the loss becomes a
carryforward that IRC § 172(a)(2) releases at only 80 percent of taxable income in each later year —
so Norbury will pay tax in every profitable year until the carryforward is exhausted, and the
equipment's cost will be recovered more slowly than MACRS would have recovered it.

Electing out of {gloss:bonus-depreciation} for the class under IRC § 168(k)(7) would have left the
equipment on ordinary MACRS, spreading deductions into the profitable years ahead where they offset income
directly rather than passing through the 80 percent filter. The election is class-wide and hard to
reverse, which is a reason to make it deliberately rather than to discover it later.
</div>

<div class="scenario" data-type="baseline">
<h3>The roof that section 179 could reach</h3>

Ambleside Retail spends $340,000 replacing the roof on its store and $180,000 on shelving and
fittings. It wants the whole amount deducted this year and has ample taxable income.

The two items take different routes. The shelving and fittings are qualified property for
IRC § 168(k) and are expensed automatically. The roof is a structural component of non-residential
real property, so § 168(k) does not reach it — but IRC § 179(e) treats qualified real property,
including a roof on non-residential real property placed in service after the building was, as
property eligible for the {gloss:section-179-deduction}.

So the answer is § 179 for the roof and § 168(k) for the rest, with the § 179 election made only to
the extent needed. Two checks remain: the total spend against the § 179 phase-out threshold, and the
§ 179(b)(3) income limitation, which caps the deduction at the aggregate taxable income from the
active conduct of a trade or business and carries the excess forward.
</div>

<div class="scenario" data-type="interaction">
<h3>The credit that was stranded</h3>

Ravenglass Instruments qualifies for $220,000 of general business credits and expects tax liability
of $260,000. Late in the year its preparer proposes expensing $700,000 of new equipment, which would
reduce the liability to near zero.

The deductions and the credit compete for the same liability. Taking the full expensing wastes most
of the credit, which under IRC § 38 can be carried back only one year and forward twenty — so the
benefit is deferred by years, and the equipment deduction merely accelerates something that would
have been recovered anyway.

The better order is to compute the liability first, take enough deduction to be efficient, and leave
room for the credit. IRC § 179 is the right instrument for this because it is elective and can be
made for exactly the amount wanted; bonus depreciation is not, because it applies automatically to
the whole class unless the taxpayer elects out of all of it.
</div>

<div class="scenario" data-type="timing">
<h3>The purchase moved by six weeks</h3>

Kestrel Millwork plans to buy $60,000 of shop equipment. In November it is running a loss for the
year; by mid-January it expects to be solidly profitable. Its preparer is asked whether buying in
December or waiting until January changes the outcome.

The cost-recovery mechanics barely move — bonus depreciation is permanent at the full rate whichever
month the purchase falls in, and the § 179 dollar limit and phase-out reset each January but
Kestrel's purchase is nowhere near either ceiling either way. What changes entirely is what the
deduction is worth. Bought in the loss year, the deduction adds to a {gloss:net-operating-loss}
carryforward that IRC § 172(a)(2) will release at only 80 percent of income in later years. Bought
after the turn into a profitable year, the same deduction offsets income directly, dollar for dollar,
in the year it is taken. Same equipment, same invoice, six weeks apart — and one purchase date wastes
most of the deduction's value while the other uses all of it immediately.
</div>

## Traps

<div class="callout trap">

**The IRC § 168(k) election out is class-wide.** It cannot be applied asset by asset, and it can be
revoked only with the Secretary's consent. Precision comes from IRC § 179, which is asset by asset.

</div>

<div class="callout trap">

**IRC § 179 cannot create a loss; bonus depreciation can.** The § 179(b)(3) income limitation caps
the deduction at aggregate taxable income from the active conduct of a trade or business, carrying
the excess forward — which is exactly the difference that matters in a marginal year.

</div>

<div class="callout trap">

**The 80 percent rule means a company with losses still pays tax.** Post-2017 losses can offset only
80 percent of the relevant taxable income, so a profitable year always produces some liability
however large the carryforward.

</div>

<div class="callout trap">

**The loss limitations are sequential and the binding one may not be the first.** Basis, at-risk,
passive activity, then IRC § 461(l). Clearing basis says nothing about whether the deduction is
allowed.

</div>

## How this has changed

The planning landscape moved twice, in opposite directions. Pub. L. 115-97 made net operating losses
carry forward indefinitely but removed the carryback and imposed the 80 percent limitation, turning
losses from a source of immediate refunds into a slow-release asset. It also raised bonus
depreciation to the full rate with a scheduled phase-down, so for several years the question was
whether to accelerate before the rate fell.

Pub. L. 119-21 removed that second pressure. Section 70301(b)(1)(A) substituted the full percentage
for the applicable percentage, § 70301(b)(1)(B) repealed the phase-down provisions, and § 70301(a)(1)
struck the placed-in-service deadline — so bonus depreciation is permanent at the full rate and
there is no longer any reason to accelerate a purchase for rate reasons alone. The one-year
transition election in IRC § 168(k)(10) applies only to the first taxable year ending after
19 January 2025.

Two limitations became permanent at the same time. IRC § 461(l) lost its expiry under § 70601(a) and
is indexed for the first time in 2026, so the excess business loss limitation is now a standing part
of the sequence rather than a temporary overlay. And IRC § 199A no longer expires, which changes the
value of a deduction that reduces qualified business income — accelerating a deduction now reduces
the section 199A deduction as well, which is a second-order cost worth quantifying.

## Exam focus

Know the order of the three cost recovery routes and what distinguishes them: bonus is automatic,
uncapped, class-wide and can create a loss; § 179 is elective, capped, phased out, asset by asset,
cannot create a loss, and reaches qualified real property.

Know the IRC § 179(b)(3) income limitation precisely — aggregate taxable income from the active
conduct of a trade or business, with the excess carried forward.

For net operating losses, know the indefinite carryforward for post-2017 losses, the absence of a
carryback outside the preserved categories, the 80 percent limitation and the ordering that uses
pre-2018 losses first and without the limitation.

Memorise the loss limitation sequence and be ready to identify which one binds on given facts.

Finally, remember that credits and deductions compete for the same liability, and that the IRC § 38
carryback is one year against a twenty-year carryforward — so a wasted credit is a long deferral.

## Check yourself

**1.** A sole proprietor with $60,000 of business income buys $200,000 of equipment. May the whole
cost be expensed under IRC § 179?

*Answer: No. The dollar limitation and the phase-out are satisfied, but IRC § 179(b)(3) caps the
deduction at the aggregate taxable income derived from the active conduct of a trade or business —
$60,000 here — with the disallowed $140,000 carried forward to later years. Bonus depreciation under
IRC § 168(k) has no such ceiling and would deduct the whole $200,000, creating a loss. Which is
better depends on whether the proprietor has other income for the loss to offset, and on what the
carryforward would be worth.*

**2.** A corporation has $500,000 of taxable income before any net operating loss deduction, a
$200,000 loss from 2016 and a $600,000 loss from 2022. How much may it deduct?

*Answer: $440,000. IRC § 172(a)(2)(A) applies the pre-2018 loss first and without limitation, using
the whole $200,000 and leaving $300,000. Then § 172(a)(2)(B) allows the lesser of the post-2017
losses carried to the year or 80 percent of that remaining $300,000 — so $240,000. Total deduction
$440,000, taxable income $60,000, and $360,000 of the 2022 loss carries forward indefinitely. The
corporation pays tax despite having losses far exceeding its income.*

**3.** Why might a preparer advise electing out of bonus depreciation?

*Answer: Because the deduction has nowhere useful to go. A business already in a loss position, or
one expecting materially higher rates or income later, gains more from ordinary MACRS deductions
spread into profitable years than from a large current deduction that becomes a carryforward
released at 80 percent of income. Two cautions: the election under IRC § 168(k)(7) applies to a
whole class of property for the year, not asset by asset, and may be revoked only with the
Secretary's consent — so it needs to be made deliberately.*

**4.** A partner has $90,000 of basis, is at risk for $40,000, and is allocated a $70,000 loss from a
passive activity with no other passive income. How much is deductible?

*Answer: None of it this year, and identifying why matters. IRC § 704(d) allows the loss up to basis,
which $90,000 covers. IRC § 465 then limits it to the amount at risk, $40,000, suspending $30,000.
IRC § 469 then disallows the remaining $40,000 because it is a passive loss with no passive income
to absorb it. So the binding limitation is the third, not the first — and advice aimed at increasing
basis would have changed nothing.*

**5.** Why does accelerating a deduction now cost more than it used to for a pass-through owner?

*Answer: Because it reduces the section 199A deduction as well as taxable income. Qualified business
income is computed after the business's deductions, so expensing an asset reduces QBI and therefore
reduces the 20 percent deduction built on it — an additional cost of roughly a fifth of the
acceleration for a taxpayer getting the full deduction. That cost used to be temporary, since
section 199A was scheduled to expire; Pub. L. 119-21 § 70105(b)(1) made it permanent, so it now
applies to every year of the analysis rather than only to the next few.*
