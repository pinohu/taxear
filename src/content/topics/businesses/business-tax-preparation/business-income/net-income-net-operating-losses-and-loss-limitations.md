---
title: "Net income, net operating losses, and loss limitations"
code: "2.2.1.c"
part: 2
domain: "Business Tax Preparation"
section: "Business Income"
description: "Four limitations apply in a fixed order — basis, at-risk, passive activity, then excess business loss — and a loss must clear every one to be deductible."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 172", title: "Net operating loss deduction", url: "https://www.law.cornell.edu/uscode/text/26/172" }
  - { type: IRC, ref: "§ 461(l)", title: "Limitation on excess business losses of noncorporate taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/461" }
  - { type: IRC, ref: "§ 465", title: "Deductions limited to amount at risk", url: "https://www.law.cornell.edu/uscode/text/26/465" }
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 704(d)", title: "Limitation on allowance of losses", url: "https://www.law.cornell.edu/uscode/text/26/704" }
  - { type: IRC, ref: "§ 1366(d)", title: "Special rules for losses and deductions", url: "https://www.law.cornell.edu/uscode/text/26/1366" }
  - { type: IRC, ref: "§ 752", title: "Treatment of certain liabilities", url: "https://www.law.cornell.edu/uscode/text/26/752" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32", title: "Inflation adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["2.2.1.a", "2.2.1.b", "2.2.1.d", "2.1.5.e", "2.1.2.e"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the four loss limitations in the order they apply — basis under IRC § 704(d) or IRC § 1366(d), amount at risk under IRC § 465, passive activity under IRC § 469, and excess business loss under IRC § 461(l) — with the IRC § 172 carryforward rules and the IRC § 172(a)(2) cap. Records that Pub. L. 119-21 § 70601(a) struck the expiry date from IRC § 461(l)(1), making the excess business loss limitation permanent, and that the rendered statutory text at LII is two amendments stale on that point." }
---

A business loss must survive four separate limitations before it reduces taxable income, and they
apply in a fixed order. Each has its own carryover rule, and a loss stopped by one of them is not
the same animal as a loss stopped by another. Getting the order right is most of the work.

## The rule

**First, basis.** A partner's distributive share of loss is allowed only to the extent of the
adjusted basis of their interest (IRC § 704(d)), and a shareholder's is limited by
{fig:basis.sc_loss_limit} (IRC § 1366(d)(1)). A sole proprietor has no separate basis limitation.

**Second, amount at risk.** {fig:loss.atrisk_who} (IRC § 465(a)(1)). What counts is
{fig:loss.atrisk_amounts} (IRC § 465(b)(1), (b)(2)), and {fig:loss.atrisk_related}
(IRC § 465(b)(3)(A)). {fig:loss.atrisk_carryover} (IRC § 465(a)(2)).

**Third, passive activity.** {fig:loss.pal_who} (IRC § 469(a)). {fig:loss.pal_defined}
(IRC § 469(c)(1), (c)(2)), and {fig:loss.pal_material} (IRC § 469(h)(1)).
{fig:loss.pal_carryover} (IRC § 469(b)).

**Fourth, excess business loss.** {fig:loss.ebl_defined} (IRC § 461(l)(3)(A)), where the threshold
is {fig:loss.ebl_threshold_2026} (Rev. Proc. 2025-32 § 3.31). {fig:loss.ebl_entity_level}
(IRC § 461(l)(4)), and {fig:loss.ebl_carryover} (IRC § 461(l)(2)).

**What survives becomes a net operating loss.** {fig:loss.nol_carryforward}
(IRC § 172(b)(1)(A)(ii)), used subject to {fig:loss.nol_80_percent} (IRC § 172(a)(2)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Shareholder basis limitation | {fig:basis.sc_loss_limit} | IRC § 1366(d)(1) |
| At-risk: who | {fig:loss.atrisk_who} | IRC § 465(a)(1) |
| At-risk: what counts | {fig:loss.atrisk_amounts} | IRC § 465(b)(1), (b)(2) |
| At-risk: related-party borrowing | {fig:loss.atrisk_related} | IRC § 465(b)(3)(A) |
| At-risk: carryover | {fig:loss.atrisk_carryover} | IRC § 465(a)(2) |
| Passive: who | {fig:loss.pal_who} | IRC § 469(a) |
| Passive activity defined | {fig:loss.pal_defined} | IRC § 469(c)(1), (c)(2) |
| Material participation | {fig:loss.pal_material} | IRC § 469(h)(1) |
| Passive: carryover | {fig:loss.pal_carryover} | IRC § 469(b) |
| Excess business loss defined | {fig:loss.ebl_defined} | IRC § 461(l)(3)(A) |
| Threshold, 2026 | {fig:loss.ebl_threshold_2026} | Rev. Proc. 2025-32 § 3.31 |
| Capital gains and losses | {fig:loss.ebl_capital} | IRC § 461(l)(3)(B) |
| Applied at the owner level | {fig:loss.ebl_entity_level} | IRC § 461(l)(4) |
| Excess business loss: carryover | {fig:loss.ebl_carryover} | IRC § 461(l)(2) |
| Now permanent | {fig:loss.ebl_permanent} | Pub. L. 119-21 § 70601(a) |
| NOL carryforward | {fig:loss.nol_carryforward} | IRC § 172(b)(1)(A)(ii) |
| The cap on the deduction | {fig:loss.nol_80_percent} | IRC § 172(a)(2) |
| Farming loss carryback | {fig:loss.nol_farming_carryback} | IRC § 172(b)(1)(B)(i) |

## How it works in practice

**The order is not a convention; it is built into the statutes.** IRC § 465(a)(1) limits "any loss
from such activity," presupposing a loss already allowed by the entity rules. IRC § 461(l)(3)(A)(i)
aggregates trade or business deductions "determined without regard to whether or not such
deductions are disallowed for such taxable year under paragraph (1)" — without regard to the
excess business loss limitation itself, but after the earlier screens have done their work. Basis,
at risk, passive, excess business loss.

**Each stop has its own carryover, and they behave differently.** A basis-limited loss waits for
basis. An at-risk loss becomes {fig:loss.atrisk_carryover} (IRC § 465(a)(2)) — allocable to that
activity next year, so it waits for at-risk amount in the same activity. A passive loss is
{fig:loss.pal_carryover} (IRC § 469(b)) — it waits for passive income, or for the disposition of
the activity. An excess business loss does something different in kind:
{fig:loss.ebl_carryover} (IRC § 461(l)(2)). It is converted into a net operating loss and joins the
IRC § 172 pool, which means it is no longer tied to any activity but picks up the cap in
IRC § 172(a)(2)(B)(ii).

**At risk means personally on the hook.** {fig:loss.atrisk_amounts} (IRC § 465(b)(1), (b)(2)).
Non-recourse debt is not at risk, because the taxpayer is not personally liable and has pledged
only property used in the activity. This is where the at-risk and basis rules part company for a
partner: IRC § 752 gives a partner outside basis for a share of non-recourse liabilities, and
IRC § 465 gives no at-risk amount for the same debt. A partner can therefore have basis and still
be stopped.

**Material participation is a facts test with a statutory floor.**
{fig:loss.pal_material} (IRC § 469(h)(1)) — regular, continuous and substantial. And note the
sting in {fig:loss.pal_defined} (IRC § 469(c)(1), (c)(2)): a rental activity is passive whether or
not the owner materially participates, so the participation question does not even arise for most
rentals.

**The excess business loss limitation is now permanent.** {fig:loss.ebl_permanent}. It is also
the one limitation that ignores the activity entirely: it aggregates every trade or business the
taxpayer has, nets them, and disallows the amount by which the aggregate loss exceeds
{fig:loss.ebl_threshold_2026}. Two features catch people. {fig:loss.ebl_capital}
(IRC § 461(l)(3)(B)) keeps capital losses out of the deduction side. And wages are excluded
entirely — the computation is made "without regard to any deductions, gross income, or gains
attributable to any trade or business of performing services as an employee," so a large salary
does not absorb a business loss at this stage.

**Then IRC § 172 governs what is left.** {fig:loss.nol_carryforward}
(IRC § 172(b)(1)(A)(ii)) — no expiry, and no carryback for most losses.
{fig:loss.nol_80_percent} (IRC § 172(a)(2)). Pre-2018 losses are used first and are uncapped, so a
taxpayer with both vintages must track them separately. The only general carryback left is
{fig:loss.nol_farming_carryback} (IRC § 172(b)(1)(B)(i)).

<div class="scenario">
<h3>The partner stopped twice</h3>

Ingoldsby holds a 30 percent interest in a trading partnership. His outside basis at the year end
is $180,000, of which $110,000 comes from his share of the partnership's non-recourse bank debt
under IRC § 752. His share of the year's loss is $150,000. He materially participates.

IRC § 704(d) allows the loss to the extent of basis, and $180,000 exceeds $150,000, so basis is
not the stop.

IRC § 465 is. His at-risk amount is $70,000 — the money and property he actually contributed. The
non-recourse debt gives him no at-risk amount, because he is not personally liable for it and has
pledged nothing outside the activity. {fig:loss.atrisk_amounts}. So $70,000 is allowed and
$80,000 is suspended.

IRC § 469 does not bite, because he materially participates and the activity is not a rental. The
$70,000 that got through is then aggregated with his other business results for the
IRC § 461(l) test.

The $80,000 suspended by IRC § 465 stays with the activity: {fig:loss.atrisk_carryover}. It does
not become a net operating loss, and it is not freed by income from anything else.
</div>

<div class="scenario">
<h3>Two businesses, one threshold, and a salary that does not help</h3>

Marchmont files a joint return. She has a consultancy that made $90,000 and a manufacturing
business that lost $940,000. Her husband earned $400,000 in wages. Neither business is passive and
both are fully at risk.

Aggregate trade or business deductions exceed aggregate trade or business income by $850,000. The
wages are outside the computation entirely, because IRC § 461(l)(3)(A) is applied without regard
to items attributable to the trade or business of performing services as an employee.

The threshold on a joint return is {fig:loss.ebl_threshold_2026}. The excess business loss is
$850,000 less $512,000, or $338,000, and that amount is disallowed for the year.

The $512,000 that is allowed offsets the wages. The $338,000 disallowed becomes a net operating
loss under IRC § 461(l)(2), carried forward indefinitely under IRC § 172(b)(1)(A)(ii) and usable
next year only within {fig:loss.nol_80_percent}.

Note the shape of the result: a couple with $400,000 of wages and an $850,000 net business loss
still has taxable income, and carries the balance forward. Before 2018 the whole loss would have
been deductible in the year.
</div>

<div class="scenario">
<h3>The rental that could not be rescued</h3>

Trewithen owns a small apartment building outright, manages it himself, spends 900 hours a year on
it, and loses $40,000. He has $220,000 of consultancy income.

Basis is ample and he is fully at risk. But {fig:loss.pal_defined} — a rental activity is a
passive activity whether or not the taxpayer materially participates, so his 900 hours are beside
the point. The $40,000 is a passive loss, he has no passive income, and IRC § 469(a) disallows it.

{fig:loss.pal_carryover} (IRC § 469(b)). The loss waits for passive income from the activity or
for its disposition.

Two things would change the answer, neither of which is material participation as such: qualifying
as a real estate professional under IRC § 469(c)(7), which takes the rental out of the automatic
category, or the IRC § 469(i) allowance for active participation in rental real estate. Both are
separate regimes with their own conditions, and neither follows from the hours alone.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>The four limitations are sequential, not alternative.</strong> A loss must clear all
of them. An answer choice that applies only the one the facts emphasise is usually wrong.</p>

<p><strong>Basis and at-risk are different amounts.</strong> A partner's share of non-recourse
debt gives outside basis under IRC § 752 but no at-risk amount under IRC § 465(b)(2). The same
loss can pass the first test and fail the second.</p>

<p><strong>Rental activities are passive by definition.</strong> {fig:loss.pal_defined}
(IRC § 469(c)(2)). Hours of work do not change that; only a separate provision does.</p>

<p><strong>Wages are outside the excess business loss computation.</strong> IRC § 461(l)(3)(A),
closing sentence. A taxpayer cannot enlarge the offset by pointing to employment income, though
the allowed portion of the loss does offset it.</p>

<p><strong>An excess business loss changes character.</strong> {fig:loss.ebl_carryover}
(IRC § 461(l)(2)) turns it into a net operating loss, so it leaves the activity behind and picks
up the IRC § 172(a)(2) cap. The at-risk and passive carryovers do not.</p>

<p><strong>The statutory text on the LII page is stale on the expiry date.</strong> The rendered
IRC § 461(l)(1) still reads "and before January 1, 2027." The amendment notes on the same page
record the 2021 change to 2027, the 2022 change to 2029, and the 2025 strike. Read the notes.</p>
</div>

## How this has changed

**IRC § 461(l) is permanent, and the published text does not say so.**
{fig:loss.ebl_permanent}. The section was enacted by Pub. L. 115-97 with an end date of 1 January
2026; Pub. L. 117-2 moved it to 2027; Pub. L. 117-169 moved it to 2029; and Pub. L. 119-21
§ 70601(a) struck the phrase from both subparagraphs of IRC § 461(l)(1) altogether. The rendered
statutory text at law.cornell.edu still shows "before January 1, 2027" — two amendments behind —
while the amendment notes on the same page record all three changes. Where a rendered body and its
amendment notes disagree, the notes are the reliable record.

**The threshold is indexed from 2026, on a new base year.** Pub. L. 119-21 § 70601(b)(1)
substituted 31 December 2025 for 31 December 2018 in the opening words of IRC § 461(l)(3)(C), and
§ 70601(b)(2) substituted 2024 for 2017 in the cost-of-living clause. So the indexing restarts:
the statutory figure in IRC § 461(l)(3)(A)(ii)(II) is adjusted for the first time for taxable
years beginning in 2026, measured from a 2024 base. The 2026 amount is
{fig:loss.ebl_threshold_2026}.

**The net operating loss rules have been through three regimes since 2017.** Losses from years
beginning before 2018 carry forward 20 years with no percentage cap. Losses arising in 2018, 2019
and 2020 were given a five-year carryback and freed from the cap by Pub. L. 116-136 § 2303, a
relief that has now run out. Losses from years beginning after 2020 carry forward indefinitely,
have no general carryback, and are capped: {fig:loss.nol_80_percent}. A taxpayer with losses from
more than one of those periods must apply them in the order IRC § 172(a)(2) sets, oldest vintage
first and outside the cap.

## Exam focus

Learn the order and be able to say why each limitation comes where it does. Almost every question
in this area gives facts that trip one specific limitation, and the distractors are the answers
you would reach by applying a different one.

Learn the carryover attached to each stop. Basis waits for basis; at-risk waits for at-risk amount
in the same activity; passive waits for passive income or disposition; excess business loss becomes
a net operating loss. The last is the one candidates most often state wrongly.

Know the two facts about IRC § 461(l) that changed in 2025: it is permanent, and its threshold is
indexed for the first time in 2026.

For IRC § 172, know that the indefinite carryforward and the percentage cap arrived together and
apply to the same losses, that pre-2018 losses are used first and are uncapped, and that the
farming carryback is the survivor.

## Check yourself

**1.** A sole proprietor has a $700,000 loss from her single business and $60,000 of interest
income. She is single, fully at risk, and materially participates. How much of the loss is
allowed?

*Answer: $256,000. {fig:loss.ebl_threshold_2026} — the threshold for a single filer in 2026. The
interest income is not trade or business income, so it does not enter the IRC § 461(l)(3)(A)(ii)
side. The disallowed $444,000 becomes a net operating loss under IRC § 461(l)(2).*

**2.** A partner has $95,000 of outside basis, of which $60,000 is his share of non-recourse
partnership debt, and a $90,000 share of loss. How much is allowed before the passive rules are
considered?

*Answer: $35,000. IRC § 704(d) allows the loss to the extent of the $95,000 basis, but
IRC § 465(a)(1) then limits it to the amount at risk, and {fig:loss.atrisk_amounts} excludes
non-recourse debt for which he is not personally liable. The other $55,000 is suspended under
IRC § 465(a)(2) and stays with the activity.*

**3.** A taxpayer works 1,200 hours a year managing rental houses she owns. She has a $30,000
rental loss and $150,000 of wages. Is the loss deductible?

*Answer: Not on these facts. {fig:loss.pal_defined} — a rental activity is passive whether or not
the taxpayer materially participates, so the hours do not answer the question. The loss is
suspended under IRC § 469(a) and carried forward under IRC § 469(b) unless a separate provision,
such as the real estate professional rules or the active participation allowance, applies.*

**4.** A corporation has a $2,000,000 net operating loss from 2027 and taxable income of
$1,500,000 in 2028 before the deduction. How much may it deduct?

*Answer: $1,200,000. {fig:loss.nol_80_percent} — the loss arose after 2017, so the deduction is
capped by reference to taxable income computed without the IRC § 172, § 199A and § 250 deductions.
The remaining $800,000 carries forward indefinitely under {fig:loss.nol_carryforward}.*

**5.** Why is an excess business loss carryover treated differently from an at-risk carryover?

*Answer: Because {fig:loss.ebl_carryover} converts it into a net operating loss, so it leaves the
activity and enters the IRC § 172 pool, where it is available against any income but subject to the cap in
IRC § 172(a)(2). {fig:loss.atrisk_carryover} keeps an at-risk loss tied to the activity that
generated it, where it waits for the taxpayer to put more at risk.*
