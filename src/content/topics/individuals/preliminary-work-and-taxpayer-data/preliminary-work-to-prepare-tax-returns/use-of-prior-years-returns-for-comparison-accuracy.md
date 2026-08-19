---
title: "Use of prior years' returns for comparison, accuracy and carryovers"
code: "1.1.1.a"
part: 1
domain: "Preliminary Work and Taxpayer Data"
section: "Preliminary work to prepare tax returns"
description: "The prior return is a working document, not a filing copy: the carryovers it holds, the comparisons that catch omissions, and the one thing a preparer must confirm."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "I. Ohu"
authorities:
  - { type: Reg, ref: "§ 1.6694-1(e)(2)", title: "Verification of information on previously filed returns", url: "https://www.law.cornell.edu/cfr/text/26/1.6694-1" }
  - { type: Reg, ref: "§ 1.6694-2(e)", title: "Exception for reasonable cause and good faith", url: "https://www.law.cornell.edu/cfr/text/26/1.6694-2" }
  - { type: IRC, ref: "§ 172", title: "Net operating loss deduction" }
  - { type: IRC, ref: "§ 1212(b)", title: "Capital loss carrybacks and carryovers — other taxpayers" }
  - { type: IRC, ref: "§ 170(d)(1)", title: "Carryovers of excess contributions — individuals" }
  - { type: IRC, ref: "§ 469(b)", title: "Disallowed loss or credit carried to next year" }
  - { type: IRC, ref: "§ 53", title: "Credit for prior year minimum tax liability" }
forms: []
related: ["1.1.1.d", "1.1.1.e", "1.5.1.g", "1.1.1.l", "1.1.1.f", "1.1.1.k"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft." }
---

## The rule

The prior year's return is the single most useful document in a new engagement, and it does three
distinct jobs. It **carries balances forward** that no current-year document reports. It supplies a
**comparison** that catches what is missing this year. And it establishes the **history** — methods,
elections and positions — that the current return must either follow or consciously depart from.

**A preparer may rely on it, subject to one requirement that is easy to skip.** Reg. § 1.6694-1(e)(2)
permits a preparer to rely in good faith **without verification** upon a return previously prepared by
the taxpayer or another preparer and filed with the IRS — the regulation's own example being that a
preparer of an amended return need not verify the positions on the original. Three qualifications
follow. The preparer may not ignore the implications of information furnished or actually known; must
make reasonable inquiries if the information as furnished appears incorrect or incomplete; and **must
confirm that the position being relied upon has not been adjusted by examination or otherwise**. That
last requirement has no counterpart in the general reliance rule, and it is satisfied by a transcript
rather than by the client's file copy.

Reg. § 1.6694-2(e)(4) makes the same point from the penalty side: **a review of the prior year's
return** is one of the elements of the normal office practice that the reasonable cause and good faith
exception rewards.

## Current figures

| Carryover | Period and limit |
| --- | --- |
| Net operating loss | {fig:carryover.nol_period} |
| Net operating loss — annual limit | {fig:carryover.nol_limit} |
| Capital loss — annual deduction against ordinary income | {fig:carryover.capital_loss_annual} |
| Capital loss — carryforward | {fig:carryover.capital_loss_period} |
| Excess charitable contributions | {fig:carryover.charitable_period} |
| Disallowed passive activity loss or credit | {fig:carryover.passive} |
| Prior year minimum tax credit | {fig:carryover.amt_credit} |

## How it works in practice

**Inventory the carryovers first.** They are the items a new preparer will otherwise simply lose,
because nothing arriving in January reports them. Capital losses carry forward indefinitely, and the
short-term and long-term components carry separately and keep their character — a distinction that
changes the current-year netting and is destroyed by lumping them together. Charitable contributions
in excess of the percentage limit carry to the five succeeding years **in order of time**, so the
oldest is used first and an unused fifth-year amount simply expires. Passive losses carry to the next
year as a deduction allocable to **the same activity** (IRC § 469(b)), which means the carryforward
has to be tracked activity by activity rather than in a single pool. A minimum tax credit under § 53 can sit unused for
many years and is invisible without the prior return.

**The net operating loss rules changed shape and the vintage matters.** A loss arising in a taxable
year beginning after 2017 carries forward **indefinitely** but is subject to the eighty per cent
limitation in § 172(a)(2); a loss arising before 2018 has a twenty-year life and no such limitation.
Where a client has both, § 172(a)(2) absorbs the **older, pre-2018 losses first and in full**, and
applies the eighty per cent ceiling only to the post-2017 layer. A schedule that tracks the two
vintages separately is not optional bookkeeping; it is the only way to compute the deduction.

**Compare, line by line, and ask about the gaps.** The comparison is where omissions surface. An
interest or dividend payer that appeared last year and not this year is either a closed account, a
sold holding, or a missing document — and the client knows which. A Schedule C with materially
different revenue, a disappeared state tax refund, a rental that stopped reporting depreciation, a
dependent who is no longer listed: each is a question, and each takes seconds to ask at intake and
much longer to resolve after filing.

**Elections and methods bind.** Accounting method, depreciation conventions and lives, an election
to capitalise carrying charges, a mark-to-market election, the treatment of installment sales — these were set in an earlier year and continue. Reversing one silently is a
method change, not a fresh choice, and the prior return is where the practitioner learns which
choices are already made.

**Basis and depreciation live in the prior return.** Accumulated depreciation, the remaining basis
of every asset, the split between land and improvements, and any § 179 or bonus election are carried
forward on the depreciation schedule and nowhere else. Losing that schedule is how a client ends up
reconstructing basis from closing documents a decade later.

<div class="scenario">
<h3>The carryover that had been adjusted</h3>

A new client brings four years of returns showing a substantial net operating loss carryover. The
preparer takes the closing balance from the most recent return and carries it forward.

The account transcripts show that one of those years was examined and the loss reduced by nearly
half. Reg. § 1.6694-1(e)(2) permits good faith reliance on a previously filed return, but expressly
requires the preparer to confirm that the position relied upon **has not been adjusted by examination
or otherwise**. That confirmation is an affirmative step, not an assumption, and the client's own copy
of the return cannot supply it — only the account transcript shows what happened after filing.
Ordering transcripts at the start of every new engagement is what makes this automatic rather than a
matter of remembering.
</div>

<div class="scenario">
<h3>Two vintages of loss</h3>

Beatrix Sørensen-Adeyemi has a net operating loss carryforward built from a 2016 loss and a 2021
loss. Her preparer combines them into one figure and applies the eighty per cent limitation to the
whole.

That understates her deduction. Section 172(a)(2) allows the **aggregate** amount of losses arising
before 2018 in full, and applies the eighty per cent ceiling only to the post-2017 layer, measured
against taxable income computed without the NOL deduction and the § 199A and § 250 deductions. The
2016 loss is used first and without limitation; only the 2021 loss meets the ceiling. The
consequence of merging them is a smaller current deduction and a carryforward schedule that will stay
wrong for as long as it survives.
</div>

<div class="scenario">
<h3>The dividend that stopped</h3>

Comparing to the prior return, a preparer notices that a payer reporting several thousand dollars of
dividends last year appears nowhere this year. The client says nothing was sold.

The comparison has found a missing information return, which is the outcome this step exists to
produce. The account was moved to a different custodian mid-year and the year-end statement went to
an old address. Without the comparison the return would have been filed short by several thousand
dollars, and the correction would have arrived as an underreporting notice with an accuracy-related
penalty attached. A single question at intake, prompted by a line that changed, prevented all of it.
</div>

<div class="callout trap">
<strong>Confirm the position has not been adjusted.</strong> This requirement is specific to reliance
on prior returns. A file copy shows what was filed; only a transcript shows what the return became.
</div>

<div class="callout trap">
<strong>Capital loss carryovers keep their character.</strong> Short-term and long-term components
carry forward separately. Merging them changes the current-year netting and the rate at which the
loss is eventually used.
</div>

<div class="callout trap">
<strong>Charitable carryovers expire.</strong> Five succeeding years, used in order of time. An
amount that reaches the sixth year is simply lost, which makes the carryover schedule a planning
document rather than a record.
</div>

<div class="callout trap">
<strong>Passive losses are tracked per activity.</strong> Section 469(b) carries the disallowed loss
forward as a deduction allocable to **that activity**. A single pooled figure cannot support the
release of the suspended loss when one activity is disposed of.
</div>

<div class="callout trap">
<strong>Pre-2018 losses go first, and without the ceiling.</strong> Reversing the order, or applying
the eighty per cent limitation to the whole carryforward, understates the deduction. The two vintages
need separate columns on the schedule.
</div>

## How this has changed

The Tax Cuts and Jobs Act rewrote net operating losses in 2017, replacing a two-year carryback and
twenty-year carryforward with, for losses arising after 2017, no carryback for most taxpayers, an
indefinite carryforward, and the eighty per cent limitation. The CARES Act then suspended that
limitation and restored a five-year carryback for losses arising in 2018, 2019 and 2020, before the
limitation returned for taxable years beginning after 2020. The practical residue is that a client's
carryforward schedule may contain up to three layers with different rules, and the vintages must be
tracked separately — the arithmetic is not recoverable from a single combined figure.

The reliance rule itself arrived with the 2008 preparer penalty regulations, which for the first time
stated in terms that a preparer may rely on a previously filed return and attached the three
qualifications, including the requirement to confirm that a relied-upon position has not been
adjusted. Transcript access through e-Services has since made that requirement a matter of ordinary
diligence rather than an aspiration.

Everything else here is durable. Capital loss carryovers, the five-year charitable carryover, the
per-activity passive carryforward and the minimum tax credit have all worked the same way for
decades, and they are lost in practice through inattention rather than through changes in the law.

## Exam focus

Know which carryovers exist and their periods: capital losses indefinitely with character preserved
and the annual offset against ordinary income in the figures table; charitable contributions five
years in order of
time; net operating losses indefinitely for post-2017 vintages, subject to the eighty per cent
limitation; passive losses to the next year allocable to the same activity; and the minimum tax credit
under § 53. Know that a preparer may rely in good faith on a previously filed return but must confirm
the position has not been adjusted, and that a review of the prior year's return is an element of a
normal office practice.

## Check yourself

**1. A preparer relies on a carryover figure taken from a previously filed return. What must be
confirmed?**

A. That the client's copy matches the original as filed
B. That the position relied upon has not been adjusted by examination or otherwise
C. That the earlier preparer held a valid PTIN
D. Nothing; reliance on a filed return is unqualified

*Answer: B.*

**2. How long may an individual carry forward an unused excess charitable contribution?**

A. Indefinitely
B. Three succeeding years
C. Five succeeding years, in order of time
D. Twenty succeeding years

*Answer: C. An amount not used by the fifth succeeding year expires.*

**3. What happens to the character of a capital loss carried forward?**

A. All carryovers become short-term
B. All carryovers become long-term
C. Short-term and long-term components carry forward separately and retain their character
D. Character is redetermined each year by the taxpayer

*Answer: C.*

**4. A taxpayer has net operating losses from 2016 and from 2021. How is the deduction computed?**

A. The combined amount, limited to 80 percent of taxable income
B. The 2016 loss in full first, with the 80 percent limitation applied only to the 2021 layer
C. The 2021 loss first, because later losses take priority
D. Each layer limited to 80 percent separately

*Answer: B. Pre-2018 losses are allowed in full and are absorbed first.*

**5. A disallowed passive activity loss is carried forward. How is it treated?**

A. As a deduction against any income in the next year
B. As a capital loss in the next year
C. As a deduction or credit allocable to the same activity in the next taxable year
D. It expires after five years

*Answer: C — which is why suspended losses must be tracked activity by activity.*
