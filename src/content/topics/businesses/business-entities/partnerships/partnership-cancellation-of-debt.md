---
title: "Partnership cancellation of debt"
code: "2.1.2.j"
part: 2
domain: "Business Entities"
section: "Partnerships"
description: "Discharge income is computed by the partnership and excluded by the partner. Whether a partnership loan is forgiven or repaid, the partner's basis falls either way."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 61(a)(11)", title: "Income from discharge of indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: IRC, ref: "§ 108", title: "Income from discharge of indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 752", title: "Treatment of certain liabilities", url: "https://www.law.cornell.edu/uscode/text/26/752" }
  - { type: IRC, ref: "§ 705", title: "Determination of basis of partner's interest", url: "https://www.law.cornell.edu/uscode/text/26/705" }
  - { type: IRC, ref: "§ 702", title: "Income and credits of partner", url: "https://www.law.cornell.edu/uscode/text/26/702" }
  - { type: IRC, ref: "§ 703(b)", title: "Elections of the partnership", url: "https://www.law.cornell.edu/uscode/text/26/703" }
  - { type: IRC, ref: "§ 731", title: "Extent of recognition of gain or loss on distribution", url: "https://www.law.cornell.edu/uscode/text/26/731" }
  - { type: IRC, ref: "§ 1366(a)", title: "Pass-thru of items to shareholders", url: "https://www.law.cornell.edu/uscode/text/26/1366" }
forms: []
related: ["2.1.2.a", "2.1.2.e", "2.1.2.c", "2.1.1.d", "2.1.5.g", "2.2.1.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 61(a)(11) inclusion of discharge income, the IRC § 108(a)(1) exclusions, the § 108(b) attribute reduction order, and the § 108(d)(6) rule that the exclusions and attribute reductions are applied at the partner level — contrasted with the § 108(d)(7)(A) corporate-level treatment for an S corporation, under which no basis increase reaches the shareholder. Explains the interaction with § 752, under which the discharge also reduces the partner's share of liabilities, and with § 703(b), under which the § 108(b)(5) and (c)(3) elections belong to each partner rather than to the partnership." }
---

Cancellation of partnership debt is where two systems that are individually straightforward produce a
result neither of them describes. The partnership computes the discharge income and allocates it. Each
partner then decides, on their own facts, whether any of it is excluded. And running alongside both, the
disappearance of the debt reduces every partner's share of partnership liabilities, which is a deemed cash
distribution. The same event therefore increases a partner's basis through the income allocation and
decreases it through the liability shift, and the order in which those happen decides whether there is
tax.

## The rule

**The income.** {fig:ptrcod.cod_income}

**The exclusions.** {fig:ptrcod.exclusions}

**And where they are applied.** {fig:ptrcod.partner_level}

**Compared with an S corporation.** {fig:ptrcod.scorp_contrast}

**What an exclusion costs.** {fig:ptrcod.attribute_order}

**Who makes the elections.** {fig:ptr.elections}

**The liability side.** {fig:ptr.liabilities}

**Basis effects.** {fig:ptr.outside_basis}

**And the floor.** {fig:ptr.distribution_gain}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Exclusions | {fig:ptrcod.exclusions} | IRC § 108(a)(1) |
| Applied at partner level | {fig:ptrcod.partner_level} | IRC § 108(d)(6) |
| S corporation contrast | {fig:ptrcod.scorp_contrast} | IRC § 108(d)(7)(A) |
| Attribute reduction order | {fig:ptrcod.attribute_order} | IRC § 108(b)(2) |
| Liability shift | {fig:ptr.liabilities} | IRC § 752 |

## How it works in practice

The division of labour is the whole subject. The partnership determines that a discharge has occurred and
how much income it produces, and reports each partner's share as a separately stated item. It does not
apply IRC § 108. Each partner then tests their own position: were *they* in a title 11 case, were *they*
insolvent, and by how much. One partner may exclude the whole of their share and another none of it, on
identical facts about the debt, because the test is about the partner.

Insolvency is the exclusion that most often applies and is the one where the partner-level rule bites
hardest. A partner's insolvency is measured by their own liabilities against their own assets immediately
before the discharge, and their share of partnership liabilities counts among their liabilities. A partner
whose personal balance sheet is comfortable cannot borrow the partnership's insolvency, however deeply
underwater the partnership is.

The contrast with an S corporation is the sharpest structural point in this topic. For an S corporation
IRC § 108 is applied at the entity level, and the excluded amount is not taken into account in the
pass-through (IRC § 108(d)(7)(A)) — so nothing flows out and the shareholders get no basis increase.
For a partnership, the income flows out under IRC § 702, increases each partner's basis under IRC § 705(a),
and only then may be excluded by the partner. The partner keeps the basis; the S corporation shareholder
does not. That difference can decide which entity form a distressed business should have been in, and it
is decided years earlier than the discharge.

Exclusion is not forgiveness. Under IRC § 108(b) an amount excluded under the title 11, insolvency or
qualified farm heads reduces the taxpayer's attributes in a fixed order — net operating losses first, then
credit carryovers, then the minimum tax credit, then capital losses, then the basis of property, then
passive activity carryovers, then foreign tax credit carryovers. And because IRC § 108(d)(6) puts this at
the partner level, it is the *partner's* attributes that are reduced, including the partner's basis in
their own property, not the partnership's.

The two elections that could change that outcome — reducing basis first under IRC § 108(b)(5), and the
qualified real property business indebtedness election under IRC § 108(c)(3) — are among the very few that
IRC § 703(b) removes from the partnership and gives to each partner individually. Partners in the same
partnership may elect differently.

Finally, the liability side, which is where the arithmetic goes wrong. The discharge of a partnership debt
reduces every partner's share of partnership liabilities, and IRC § 752(b) treats that as a distribution of
money. Basis therefore moves twice: up by the allocated discharge income under IRC § 705(a)(1)(A), and down
by the deemed distribution. Where the income is *excluded*, only the downward movement happens — the
partner has no income to increase basis with, and a deemed distribution that may exceed what basis remains,
producing gain under IRC § 731(a)(1). The exclusion can therefore convert ordinary discharge income into
capital gain rather than eliminating tax altogether.

## Scenarios

<div class="scenario">
<h3>Two partners, one exclusion</h3>
<p>A partnership settles a $600,000 trade debt for $200,000 in 2026, producing $400,000 of discharge
income allocated equally between its two partners. Hyacinth is personally insolvent by $500,000
immediately before the discharge, counting her share of partnership liabilities. Casimiro has substantial
net assets.</p>
<p>Each is allocated $200,000, and the outcomes diverge completely. Under IRC § 108(d)(6) the exclusions
are applied at the partner level, so Hyacinth excludes her whole $200,000 under IRC § 108(a)(1)(B) —
her insolvency exceeds it — and reduces her own tax attributes in the IRC § 108(b)(2) order, beginning
with her net operating losses and reaching the basis of her own property if the earlier attributes run
out. Casimiro is not insolvent and has no other exclusion available, so his $200,000 is ordinary income
in full. Nothing about the partnership's own solvency enters either analysis.</p>
</div>

<div class="scenario">
<h3>The exclusion that produced a capital gain</h3>
<p>Emeric holds a 40 percent interest with an outside basis of $30,000, of which $28,000 is his share of
partnership liabilities. The partnership's lender forgives $250,000 of recourse debt. Emeric's share of
the resulting discharge income is $100,000, and he is insolvent by $400,000 immediately before the
discharge.</p>
<p>He excludes the $100,000 under IRC § 108(a)(1)(B), so it never enters his income and never increases
his basis. But his share of partnership liabilities falls by $100,000, and IRC § 752(b) treats that as a
distribution of money to him. Against an outside basis of $30,000, that is a deemed distribution of
$100,000: basis falls to zero and $70,000 is gain under IRC § 731(a)(1), treated as gain from the sale or
exchange of his partnership interest. The exclusion converted $100,000 of ordinary income into $70,000 of
capital gain rather than removing the tax. Had he not been insolvent, the $100,000 of income would have
raised his basis first and no IRC § 731 gain would have arisen at all.</p>
</div>

<div class="scenario">
<h3>The same facts in an S corporation</h3>
<p>The same business is instead an S corporation with the same two owners, and the same $400,000 of debt
is forgiven while one shareholder is insolvent.</p>
<p>The analysis is entirely different. Under IRC § 108(d)(7)(A) the exclusions are applied at the
corporate level, so the corporation's own solvency is what matters and the shareholders' personal
positions are irrelevant. If the corporation qualifies for an exclusion, the excluded amount is not taken
into account under IRC § 1366(a) — it does not flow through, and no shareholder gets a basis increase for
it. If the corporation does not qualify, the whole $400,000 flows through as income to both shareholders,
and the insolvent one cannot exclude their share. Either way the partnership answer and the S corporation
answer diverge, and neither is generally better: the partnership route preserves basis where the exclusion
applies, and the S corporation route lets a solvent shareholder benefit from an insolvent entity.</p>
</div>

<div class="scenario">
<h3>The election only one partner made</h3>
<p>A partnership holding commercial real estate has $800,000 of qualified real property business
indebtedness discharged. Its three partners are all solvent and outside title 11. Two want to exclude the
income and reduce the basis of their depreciable real property; the third would rather take the income
now, having large expiring losses to absorb it.</p>
<p>They may each do as they wish. IRC § 108(d)(6) applies the qualified real property business
indebtedness rules at the partner level, and IRC § 703(b)(1) removes the IRC § 108(c)(3) election from the
partnership and gives it to each partner. The two who elect exclude their shares and reduce their basis in
depreciable real property; the third reports the income and uses the losses. This is one of only three
elections that subchapter K takes away from the partnership, and it exists precisely because the
consequences depend on facts the partnership does not know.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>The partnership does not apply IRC § 108.</strong> It computes and allocates the income; each
partner tests their own exclusion.</li>
<li><strong>Insolvency is the partner's, not the partnership's.</strong> A solvent partner in an insolvent
partnership excludes nothing.</li>
<li><strong>The S corporation rule is the opposite.</strong> Entity-level exclusion, and the excluded
amount never reaches the shareholders under IRC § 1366(a).</li>
<li><strong>Exclusion costs attributes.</strong> IRC § 108(b) reduces the partner's own losses, credits
and property basis in a fixed order.</li>
<li><strong>The discharge is also a liability shift.</strong> IRC § 752(b) makes it a deemed cash
distribution to every partner.</li>
<li><strong>Excluding the income can create gain.</strong> Without income to raise basis, the deemed
distribution may exceed it and produce IRC § 731(a)(1) gain.</li>
<li><strong>The IRC § 108 elections belong to the partners.</strong> IRC § 703(b) is explicit, and
partners may elect differently.</li>
</ul>
</div>

## How this has changed

The structural rules have been stable. IRC § 108(d)(6) has applied the exclusions at the partner level
since the modern discharge rules were enacted, and IRC § 703(b)(1) has carved the IRC § 108 elections out
of the partnership's control for as long.

The exclusion that has moved is qualified principal residence indebtedness, which by its own terms in
IRC § 108(a)(1)(E) reaches only a discharge occurring before 1 January 2026, or one made under a written
arrangement entered into before that date. It is rarely relevant to a partnership, since the debt must
relate to a principal residence, but it is worth noting as the one head of IRC § 108(a)(1) with a live
expiry written into the statute rather than an indexed figure — and as of the current year, the primary
window has closed.

The area to watch is not the statute but the arithmetic that surrounds it. Because the discharge is
simultaneously an income event under IRC § 61(a)(11) and a liability event under IRC § 752(b), the
sequencing determines the answer, and the sequencing is not stated in either section. Where the income is
taxed, basis rises before the deemed distribution reduces it and the two largely offset. Where the income
is excluded, only the reduction happens. That asymmetry is a consequence of how the provisions interact
rather than of any rule about discharge income, and it is the single most valuable thing to understand
about this topic.

## Exam focus

The reliable question gives a partnership discharge and two partners in different personal positions, and
asks how much each includes. The answer turns entirely on IRC § 108(d)(6): compute and allocate at the
partnership, exclude at the partner, and never let one partner's insolvency help another.

The second shape asks for the difference between a partnership and an S corporation on the same facts.
Two points carry it: the S corporation applies IRC § 108 at the entity level, and the excluded amount is
not taken into account under IRC § 1366(a), so no basis increase reaches the shareholder.

Where a question gives a partner's outside basis alongside a discharge, check for the IRC § 752
consequence. If the income is excluded, expect IRC § 731(a)(1) gain; if it is taxed, expect the basis
movements to offset.

## Check yourself

**1.** A partnership's debt is forgiven, producing $300,000 of discharge income allocated equally to three
partners. One is insolvent by $250,000. Who may exclude what?

*Answer: only the insolvent partner, and only up to her insolvency. IRC § 108(d)(6) applies the exclusions
at the partner level, so her $100,000 share is excluded under IRC § 108(a)(1)(B) because her insolvency
exceeds it. The other two include $100,000 each. The partnership's own solvency is irrelevant to all
three.*

**2.** How does the answer change if the entity is an S corporation?

*Answer: entirely. Under IRC § 108(d)(7)(A) the exclusions are applied at the corporate level, so the
corporation's own insolvency is what is tested, and the shareholders' personal positions do not matter.
Any amount excluded is not taken into account under IRC § 1366(a), so it does not pass through and gives
the shareholders no basis increase.*

**3.** A partner excludes $80,000 of discharge income on the ground of insolvency. What happens next?

*Answer: attribute reduction under IRC § 108(b). The excluded amount reduces the partner's own tax
attributes in order — net operating loss for the year and any carryover, general business credit
carryovers, the minimum tax credit, capital losses and carryovers, the basis of the partner's property,
passive activity loss and credit carryovers, and foreign tax credit carryovers. It is the partner's
attributes, not the partnership's, because IRC § 108(d)(6) applies subsection (b) at the partner level.*

**4.** A partner with an outside basis of $15,000 has $90,000 of discharge income allocated to him, all of
which he excludes as insolvent. His share of partnership liabilities falls by $90,000. What does he
report?

*Answer: $75,000 of gain. The excluded income does not increase his basis, but the $90,000 reduction in
his share of partnership liabilities is a deemed distribution of money under IRC § 752(b). Basis falls to
zero and the excess is gain under IRC § 731(a)(1), treated as gain from the sale or exchange of the
partnership interest. The exclusion converted ordinary income into capital gain.*

**5.** May a partnership make the IRC § 108(c)(3) election to exclude qualified real property business
indebtedness on behalf of all its partners?

*Answer: no. IRC § 703(b)(1) removes the IRC § 108(b)(5) and (c)(3) elections from the general rule that
elections affecting partnership taxable income are made by the partnership, and gives them to each partner
separately. Partners in the same partnership may elect differently on the same discharge.*
