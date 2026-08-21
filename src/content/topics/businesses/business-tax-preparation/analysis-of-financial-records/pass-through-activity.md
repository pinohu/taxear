---
title: "Pass-through activity (e.g., K-1, separately stated items, non-deductible expenses)"
code: "2.2.4.f"
part: 2
domain: "Business Tax Preparation"
section: "Analysis of financial records"
description: "Nondeductible expenses still reduce basis, and an item is separately stated whenever its character could give a different answer at owner level than inside the entity."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 702", title: "Income and credits of partner", url: "https://www.law.cornell.edu/uscode/text/26/702" }
  - { type: IRC, ref: "§ 703", title: "Partnership computations", url: "https://www.law.cornell.edu/uscode/text/26/703" }
  - { type: IRC, ref: "§ 704", title: "Partner's distributive share", url: "https://www.law.cornell.edu/uscode/text/26/704" }
  - { type: IRC, ref: "§ 705", title: "Determination of basis of partner's interest", url: "https://www.law.cornell.edu/uscode/text/26/705" }
  - { type: IRC, ref: "§ 1366", title: "Pass-thru of items to shareholders", url: "https://www.law.cornell.edu/uscode/text/26/1366" }
  - { type: IRC, ref: "§ 1367", title: "Adjustments to basis of shareholder's stock", url: "https://www.law.cornell.edu/uscode/text/26/1367" }
  - { type: IRC, ref: "§ 1368", title: "Distributions", url: "https://www.law.cornell.edu/uscode/text/26/1368" }
  - { type: IRC, ref: "§ 6222", title: "Partner's return must be consistent with partnership return", url: "https://www.law.cornell.edu/uscode/text/26/6222" }
  - { type: IRC, ref: "§ 6031", title: "Return of partnership income", url: "https://www.law.cornell.edu/uscode/text/26/6031" }
  - { type: IRC, ref: "§ 6037", title: "Return of S corporation", url: "https://www.law.cornell.edu/uscode/text/26/6037" }
  - { type: IRC, ref: "§ 6213", title: "Restrictions applicable to deficiencies; petition to Tax Court", url: "https://www.law.cornell.edu/uscode/text/26/6213" }
  - { type: IRC, ref: "§ 752", title: "Treatment of certain liabilities", url: "https://www.law.cornell.edu/uscode/text/26/752" }
  - { type: IRC, ref: "§ 170", title: "Charitable, etc., contributions and gifts", url: "https://www.law.cornell.edu/uscode/text/26/170" }
  - { type: IRC, ref: "§ 164", title: "Taxes", url: "https://www.law.cornell.edu/uscode/text/26/164" }
  - { type: IRC, ref: "§ 901", title: "Taxes of foreign countries and of possessions of the United States", url: "https://www.law.cornell.edu/uscode/text/26/901" }
  - { type: IRC, ref: "§ 199A", title: "Qualified business income", url: "https://www.law.cornell.edu/uscode/text/26/199A" }
  - { type: IRC, ref: "§ 163", title: "Interest", url: "https://www.law.cornell.edu/uscode/text/26/163" }
  - { type: IRC, ref: "§ 461", title: "General rule for taxable year of deduction", url: "https://www.law.cornell.edu/uscode/text/26/461" }
forms: []
related: ["2.2.4.b", "2.2.4.c", "2.2.4.g", "2.1.5.c", "2.1.2.a", "2.2.4.h", "2.2.4.i"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 702(a) and § 1366(a)(1) separately stated items with the test that decides which items qualify, the IRC § 703(a)(2) deductions a partnership may not take, the IRC § 705 and § 1367 basis adjustments including the reduction for nondeductible non-capital expenditures, the IRC § 704(d) and § 1366(d) loss limitations and the debt basis tier that only subchapter S provides, and the IRC § 6222 consistency requirement enforced by math error assessment." }
---

A Schedule K-1 is not a summary. It is a set of instructions telling the owner to redo, at owner
level, work the entity was forbidden to finish. Two questions decide almost every issue here: why is
this item on its own line, and what has it done to basis.

## The rule

**The entity computes, then unbundles.** {fig:k1.separately_stated_p} (IRC § 702(a)), and the
partnership is barred from taking certain deductions itself — {fig:k1.partnership_no_deduction}
(IRC § 703(a)(2)). Subchapter S states the same idea as a test rather than a list:
{fig:k1.separately_stated_s} (IRC § 1366(a)(1)). Everything not separately stated is the single
ordinary business income or loss figure.

**Why an item is stated separately.** {fig:k1.why_separate} (IRC § 702(a)(7);
IRC § 1366(a)(1)(A)).

**Basis moves with everything, including what is not deductible.** Up:
{fig:k1.basis_up_p} (IRC § 705(a)(1)). Down: {fig:k1.basis_down_p} (IRC § 705(a)(2)), and on the
S side {fig:k1.basis_down_s} (IRC § 1367(a)(2)). Note the phrase common to both — expenditures
*not deductible* and *not properly chargeable to capital account*. Tax-exempt income raises basis
and a nondeductible fine lowers it, because basis tracks economics rather than taxable income.

**Losses stop at basis, and the two regimes stop at different places.**
{fig:k1.loss_limit_p} (IRC § 704(d)), against {fig:k1.loss_limit_s} (IRC § 1366(d)).

**The owner is not free to disagree.** {fig:k1.consistency} (IRC § 6222).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Separately stated, partnership | {fig:k1.separately_stated_p} | IRC § 702(a) |
| Separately stated, S corporation | {fig:k1.separately_stated_s} | IRC § 1366(a)(1) |
| Deductions the partnership may not take | {fig:k1.partnership_no_deduction} | IRC § 703(a)(2) |
| Basis decreases | {fig:k1.basis_down_p} | IRC § 705(a)(2) |
| Loss limit, partnership | {fig:k1.loss_limit_p} | IRC § 704(d) |
| Loss limit, S corporation | {fig:k1.loss_limit_s} | IRC § 1366(d) |
| Consistency | {fig:k1.consistency} | IRC § 6222 |

## How it works in practice

**Ask why the item is on its own line, and the answer follows.** A charitable contribution is stated
separately because the owner's own percentage limitation applies to it, not the entity's. A capital
loss is stated separately because it nets against the owner's other capital transactions. Foreign
taxes are stated separately because the owner may take a credit or a deduction. In each case the
entity could not reach the right answer, because the right answer depends on facts the entity does
not have.

**Nondeductible expenses are the reliable trap.** A fine, the disallowed half of a business meal,
club dues, the premium on a corporate-owned life insurance policy — none reduces taxable income, and
every one reduces basis. The logic is that basis measures the owner's investment, and money that
left the entity is gone whether or not the Code allowed a deduction for it. The mirror image is
tax-exempt interest, which increases basis without increasing income.

**Order the adjustments before computing the loss limit.** Increase basis for income items first,
then decrease for distributions, then for losses and deductions. Running distributions after losses
overstates the loss allowed and can produce a negative basis, which neither § 705 nor § 1367 permits.

**Remember the second tier exists only in subchapter S.** A shareholder may deduct losses against
basis in direct shareholder debt as well as stock basis; a partner has no equivalent because
partnership liabilities are already in outside basis under § 752. That single structural difference
explains why an S corporation shareholder who lends the company money creates deductible capacity
and one who guarantees a bank loan usually does not.

**Consistency is enforced by an unusual mechanism.** An underpayment caused by treating a
partnership-related item differently from the partnership return is assessed as though it were a
mathematical or clerical error, and IRC § 6222(b) disapplies IRC § 6213(b)(2) — so the taxpayer does
not get the ordinary right to request abatement and force a deficiency notice. A partner who
disagrees must notify the Service under § 6222(c), not simply file differently.

## Scenarios

<div class="scenario">
<h3>The fine that reduced basis</h3>

Marchmont Freight LLC, taxed as a partnership, has ordinary business income of $300,000 before a
$40,000 civil penalty paid to a state regulator. Its two equal partners each start the year with
basis of $50,000 and take no distributions.

The penalty is not deductible, so ordinary business income stays at $300,000 and each partner takes
$150,000 into income. But IRC § 705(a)(2)(B) decreases basis by each partner's share of
expenditures not deductible in computing taxable income and not properly chargeable to capital
account, so each partner's basis rises by $150,000 and falls by $20,000, ending at $180,000 rather
than $200,000.

The $20,000 is not lost twice and not lost once — it never produced a deduction, and it reduces the
gain the partner will report on selling the interest. The item appears on the K-1 on its own line
precisely so the partner can make that adjustment.
</div>

<div class="scenario">
<h3>Two owners, two loss limits</h3>

Halstead Design has one owner, an ordinary loss of $90,000, stock or partnership basis of $55,000,
and $25,000 owed by the entity to the owner on a direct loan.

If Halstead is an S corporation, IRC § 1366(d)(1) allows the loss up to the sum of stock basis and
the basis of indebtedness of the corporation to the shareholder — $80,000 — leaving $10,000
suspended and carried forward indefinitely.

If Halstead is a partnership, IRC § 704(d) allows the loss only to the extent of the adjusted basis
of the partnership interest. The loan is not a separate tier; instead it is a partnership liability
that the partner has advanced, which raises outside basis under IRC § 752(a) to $80,000 and produces
the same $80,000 answer by a different route. Change the facts so that the owner merely *guarantees*
a bank loan and the two regimes diverge sharply: the guarantee gives the shareholder nothing, while
the partner may still take basis in the liability.
</div>

<div class="scenario">
<h3>The charitable contribution that could not be taken</h3>

Ardwick Partners makes a $60,000 cash gift to a public charity. Its preparer deducts it in computing
ordinary business income, reasoning that the partnership made the gift.

IRC § 703(a)(2)(C) forbids it: the deduction for charitable contributions provided in IRC § 170 is
one the partnership may not take. The gift is instead a separately stated item under
IRC § 702(a)(4), flowing to the partners in their distributive shares and tested against each
partner's own contribution base.

The reason is not formalism. A partner already at their percentage limitation gets nothing from the
gift this year; a partner well below it deducts in full; a partner who does not itemize deducts
nothing. Only the partner knows which case applies, so only the partner can compute it. The same
logic explains every other item on the § 703(a)(2) list.
</div>

## Traps

<div class="callout trap">

**Nondeductible expenses reduce basis; tax-exempt income increases it.** Both are counterintuitive
and both are express — IRC § 705(a)(1)(B) and (a)(2)(B), IRC § 1367(a)(1)(A) and (a)(2)(D). Basis
tracks economics, not taxable income.

</div>

<div class="callout trap">

**Distributions come off basis before losses.** Taking losses first inflates the deductible loss and
leaves distributions to produce gain that should not exist. Neither § 705 nor § 1367 lets basis go
below zero at any step.

</div>

<div class="callout trap">

**Only an S corporation shareholder has a debt basis tier**, and only for debt owed by the
corporation *to that shareholder*. A guarantee is not debt basis. A partner needs no second tier
because IRC § 752 already puts partnership liabilities into outside basis.

</div>

<div class="callout trap">

**"Separately stated" is a test, not a memorised list.** IRC § 1366(a)(1)(A) asks whether separate
treatment could affect any shareholder's liability. An item not on the § 702(a) list can still
require separate statement if its character or a limitation would change the owner-level answer.

</div>

## How this has changed

The architecture of §§ 702, 703, 705, 1366 and 1367 has been stable for decades. What has moved is
the population of separately stated items, and it has grown considerably. IRC § 199A required
partnerships and S corporations to report qualified business income, W-2 wages and unadjusted basis
immediately after acquisition, none of which existed before 2018; the section did not expire, since
Pub. L. 119-21 § 70105(b)(1) replaced the terminating subsection outright. IRC § 163(j) requires
excess business interest expense, excess taxable income and excess business interest income to be
reported separately, and § 70303(a) put that limitation back on an EBITDA base for taxable years
beginning after 31 December 2024, changing the amounts without changing the reporting.

The consistency rule in IRC § 6222 took its present form with the centralised partnership audit
regime, which replaced TEFRA for partnership taxable years beginning after 31 December 2017. The
math error assessment mechanism it carries is the most aggressive collection route in the subtitle,
and it applies to any partnership-related item.

Nothing in the post-2024 legislation alters the basis adjustment provisions or the loss limitations
in IRC § 704(d) and § 1366(d). What did change around them is IRC § 461(l), made permanent by
Pub. L. 119-21 § 70601(a): the excess business loss limitation now applies indefinitely and sits
after the basis and at-risk and passive activity limitations in the sequence, so a loss that clears
basis may still be deferred.

## Exam focus

Learn the § 702(a) list, then learn the test behind it. Questions often supply an item not on the
list and ask whether it is separately stated; the answer comes from whether its character or a
limitation would change the owner's result.

The § 703(a)(2) list of deductions the partnership may not take is worth memorising outright,
because it is short and because each item is a plausible distractor as an entity-level deduction.

Be able to run a basis computation in order and to state both directions of the nondeductible and
tax-exempt adjustments. Expect at least one question in which a nondeductible item is offered as
having no effect on basis.

Keep the two loss limitations apart. Partnership: basis in the interest, full stop, with liabilities
already inside it. S corporation: stock basis plus basis in direct shareholder debt, with a
guarantee giving nothing.

Finally, know that IRC § 6222 enforces consistency by math error assessment and that IRC § 6213(b)(2)
is disapplied, so the usual abatement request is unavailable.

## Check yourself

**1.** An S corporation has ordinary income of $200,000, tax-exempt interest of $8,000, a $12,000
nondeductible penalty, and makes a $30,000 distribution to its sole shareholder, whose opening stock
basis is $40,000. What is closing basis?

*Answer: $206,000. Increase for the items of income described in IRC § 1366(a)(1)(A), which
expressly include tax-exempt income, and for the nonseparately computed income: $40,000 plus
$200,000 plus $8,000 is $248,000. Then decrease under IRC § 1367(a)(2) — the $30,000 distribution
not includible in income under § 1368, and the $12,000 expense not deductible in computing taxable
income and not properly chargeable to capital account — giving $206,000. The penalty reduces basis
though it never reduced income, and the exempt interest raises it though it never was income.*

**2.** A partnership pays $18,000 of foreign taxes and deducts them in computing ordinary business
income. Is that right?

*Answer: No. IRC § 703(a)(2)(B) denies the partnership the IRC § 164(a) deduction for taxes
described in IRC § 901 paid or accrued to foreign countries and possessions, and IRC § 702(a)(6)
makes those taxes a separately stated item. The reason is that each partner may elect either a
credit or a deduction, and the entity cannot make that election for them — the choice depends on
facts, including other foreign income and limitation carryovers, that exist only at partner level.*

**3.** A shareholder guarantees the S corporation's $150,000 bank loan. The corporation has a
$120,000 loss and the shareholder's stock basis is $30,000. How much loss is allowed?

*Answer: $30,000. IRC § 1366(d)(1) limits losses to stock basis plus the shareholder's adjusted
basis in indebtedness *of the corporation to the shareholder*. A guarantee creates no such
indebtedness — the corporation owes the bank, not the shareholder — so there is no second tier. The
remaining $90,000 is suspended under § 1366(d)(2) and carried forward indefinitely, available if the
shareholder later contributes capital or makes an actual loan. A partner in the same position would
be treated very differently, because IRC § 752 can put a share of the liability into outside basis.*

**4.** A partner believes the partnership mis-characterised an item and reports it correctly on their
own return without notifying the Service. What follows?

*Answer: IRC § 6222(a) requires the partner to treat any partnership-related item consistently with
the partnership return, and § 6222(b) provides that an underpayment resulting from inconsistency is
assessed and collected as if it were a mathematical or clerical error — with IRC § 6213(b)(2)
expressly disapplied, so the partner cannot request abatement and force a statutory notice of
deficiency. The route the partner should have taken is the notification of inconsistent treatment
under § 6222(c). Being right on the merits does not help until that notice is filed.*

**5.** Why does a nondeductible expense reduce basis at all?

*Answer: Because basis measures the owner's economic investment, not the accumulation of taxable
income. Money the entity spent on a fine is gone, and the owner's interest is worth less by their
share of it, whether or not the Code allowed a deduction. If basis were left unreduced, the owner
would recover the same dollars a second time as a smaller gain on disposing of the interest. The
symmetry runs the other way with tax-exempt income, which increases basis under IRC § 705(a)(1)(B)
and IRC § 1367(a)(1)(A) so that the exemption is not clawed back on sale.*
