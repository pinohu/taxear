---
title: "Selection of business entity (e.g., benefits and detriments)"
code: "2.2.5.e"
part: 2
domain: "Business Tax Preparation"
section: "Advising the business taxpayer"
description: "Entity choice is not one decision but four — one tax or two, self-employment tax exposure, the section 199A computation, and how easily an owner can be bought out."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 11", title: "Tax imposed", url: "https://www.law.cornell.edu/uscode/text/26/11" }
  - { type: IRC, ref: "§ 199A", title: "Qualified business income", url: "https://www.law.cornell.edu/uscode/text/26/199A" }
  - { type: IRC, ref: "§ 301", title: "Distributions of property", url: "https://www.law.cornell.edu/uscode/text/26/301" }
  - { type: IRC, ref: "§ 704", title: "Partner's distributive share", url: "https://www.law.cornell.edu/uscode/text/26/704" }
  - { type: IRC, ref: "§ 754", title: "Manner of electing optional adjustment to basis of partnership property", url: "https://www.law.cornell.edu/uscode/text/26/754" }
  - { type: IRC, ref: "§ 1361", title: "S corporation defined", url: "https://www.law.cornell.edu/uscode/text/26/1361" }
  - { type: IRC, ref: "§ 1402", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/1402" }
  - { type: IRC, ref: "§ 1374", title: "Tax imposed on certain built-in gains", url: "https://www.law.cornell.edu/uscode/text/26/1374" }
  - { type: IRC, ref: "§ 752", title: "Treatment of certain liabilities", url: "https://www.law.cornell.edu/uscode/text/26/752" }
  - { type: IRC, ref: "§ 1363", title: "Effect of election on corporation", url: "https://www.law.cornell.edu/uscode/text/26/1363" }
  - { type: IRC, ref: "§ 1375", title: "Tax imposed when passive investment income of corporation having accumulated earnings and profits exceeds 25 percent of gross receipts", url: "https://www.law.cornell.edu/uscode/text/26/1375" }
  - { type: IRC, ref: "§ 1245", title: "Gain from dispositions of certain depreciable property", url: "https://www.law.cornell.edu/uscode/text/26/1245" }
  - { type: IRC, ref: "§ 743", title: "Special rules where section 754 election or substantial built-in loss", url: "https://www.law.cornell.edu/uscode/text/26/743" }
  - { type: IRC, ref: "§ 707", title: "Transactions between partner and partnership", url: "https://www.law.cornell.edu/uscode/text/26/707" }
  - { type: Reg, ref: "§ 301.7701-3", title: "Classification of certain business entities", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-3" }
forms: []
related: ["2.2.5.d", "2.2.4.a", "2.2.5.i", "2.2.5.j", "2.2.5.f", "2.2.5.h"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the four axes on which entity choice actually turns — the IRC § 11(b) corporate rate against single-level taxation, the IRC § 1402 self-employment tax treatment of each form, the IRC § 199A computation and its different mechanics by entity, and the flexibility differences in allocation, basis and exit — together with the IRC § 1361(b) eligibility limits that decide whether the S election is available at all." }
---

Entity choice is usually presented as a comparison of tax rates, which is the least useful way to
think about it. The rate comparison is one input among four, it is the input most likely to change
before the business matures, and it is the only one a client can revisit later. The others are
harder to unwind.

## The rule

**The first axis: one level of tax or two.** A C corporation pays {fig:sel.corp_rate}
(IRC § 11(b)), and a distribution to the shareholder is taxed again under IRC § 301(c). A
partnership and an S corporation pay no entity-level tax on operating income — {fig:sc.no_entity_tax}
(IRC § 1363(a)) — with the S corporation's exceptions in IRC § 1374 and § 1375.

**The second axis: self-employment tax.** {fig:sel.sole_prop_se} (IRC § 1402(a)), against
{fig:sel.limited_partner_se} (IRC § 1402(a)(13)). An S corporation shareholder's pro rata share is
not net earnings from self-employment at all, which is the source of both the planning and the
reasonable compensation exposure.

**The third axis: whether the S election is even available.** {fig:sel.s_eligibility}
(IRC § 1361(b)(1)), and {fig:sel.ineligible} (IRC § 1361(b)(2)).

**The fourth axis: flexibility.** A partnership may allocate items other than in proportion to
capital, provided the allocation has substantial economic effect under IRC § 704(b); an S
corporation must allocate strictly per share per day. A partner takes outside basis in entity-level
liabilities under IRC § 752; an S corporation shareholder does not. A partnership may elect under
IRC § 754 to adjust the basis of its property on a transfer of an interest; an S corporation has no
equivalent.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Corporate rate | {fig:sel.corp_rate} | IRC § 11(b) |
| No entity tax on a pass-through | {fig:sc.no_entity_tax} | IRC § 1363(a) |
| Self-employment, proprietor and general partner | {fig:sel.sole_prop_se} | IRC § 1402(a) |
| Self-employment, limited partner | {fig:sel.limited_partner_se} | IRC § 1402(a)(13) |
| S corporation eligibility | {fig:sel.s_eligibility} | IRC § 1361(b)(1) |
| Ineligible corporations | {fig:sel.ineligible} | IRC § 1361(b)(2) |
| Section 199A | {fig:qbi.deduction} | IRC § 199A(a) |

## How it works in practice

**Ask what the owners intend to do with the money.** A business that distributes everything is
badly served by a C corporation, because every dollar bears the entity rate and then the dividend
rate. A business that reinvests for years and expects to be sold as stock may do very well out of
one, particularly where qualified small business stock is in view. The rate comparison is only
meaningful once the distribution policy is known.

**Then ask who the owners are.** The IRC § 1361(b) limits are absolute: more than a hundred
shareholders, a corporate or partnership shareholder, a non-resident alien, or a second class of
stock each defeat the election outright. Venture financing that requires preferred stock is
incompatible with S status for that reason alone, and a business expecting outside investment
should not choose the entity that forecloses it.

**The self-employment comparison is the most misunderstood.** A sole proprietor and a general
partner pay self-employment tax on the whole of their business income. A limited partner is
excluded from it under IRC § 1402(a)(13), other than guaranteed payments for services. An S
corporation shareholder pays employment tax only on wages actually paid — which is the whole
attraction, and is exactly why reasonable compensation is examined.

**Do not treat section 199A as a tiebreaker until you have computed it.** The deduction is available
to a partnership and an S corporation and not to a C corporation, but its mechanics differ by
entity above the threshold, because the wage and property limitations depend on what the entity
pays and owns. An S corporation's owner wages count toward its own W-2 wage limitation; a
partnership's guaranteed payments do not. That can reverse the answer for a service business near
the threshold.

**Weigh the exit at the start.** Selling a partnership interest gives the buyer an outside basis
step-up, and an IRC § 754 election passes it inside to the assets. Selling S corporation stock does
not, and there is no § 754 equivalent, so a buyer wanting basis must buy assets — which the seller
may resist. A C corporation adds a second layer on an asset sale that often makes it impossible.
The structure that is easiest to form is frequently the hardest to leave.

**Remember the conversion is not symmetric.** Electing S status for an existing C corporation
carries the IRC § 1374 built-in gains tax for the recognition period and the IRC § 1375 passive
income tax where accumulated earnings and profits survive. Going the other way — revoking S status
— starts a five-year bar on re-electing without consent. Neither direction is free, which is a
reason to get the first choice approximately right.

## Scenarios

<div class="scenario">
<h3>The preferred stock that ended the question</h3>

Marlowe Analytics is formed by three founders who want S corporation treatment for the
self-employment tax profile. Eighteen months later an investor offers $2,000,000 for preferred stock
carrying a liquidation preference and a fixed return.

The investment terminates the S election. IRC § 1361(b)(1)(D) denies small business corporation
status to a corporation with more than one class of stock, and preferred stock carrying different
rights to distribution and liquidation proceeds is a second class. The founders must choose between
the money and the election.

Nothing salvages it within subchapter S. Had the business been formed as an LLC taxed as a
partnership, the same economics could have been delivered as a preferred partnership interest with
no eligibility problem at all — and the founders could still have elected S treatment later if the
investment never came. The lesson is that the S election forecloses a financing structure the
partnership form accommodates.
</div>

<div class="scenario">
<h3>Two owners, the same profit, different tax</h3>

Two consultants each earn $180,000 of business profit. One operates as a sole proprietor. The other
operates through an S corporation, pays herself a defensible salary of $110,000 and takes the
remaining $70,000 as a distribution.

The proprietor pays self-employment tax on the whole $180,000, subject to the wage base on the
social security component and with the Medicare component uncapped. The S corporation shareholder
pays employment tax on $110,000 only; the $70,000 distribution is not net earnings from
self-employment and carries no employment tax.

Two qualifications matter. The saving depends entirely on the salary being defensible — a nominal
salary invites recharacterisation of the distributions into wages. And it is not free: the
S corporation must run payroll, file employment tax returns, and comply with the IRC § 1361(b)
eligibility limits for as long as the election lasts.
</div>

<div class="scenario">
<h3>The buyer who wanted basis</h3>

Havering Fabrication's owner wants to sell for $6,000,000. The company holds machinery with a low
adjusted basis. The buyer wants a depreciable basis in the assets equal to what it is paying.

If Havering is an S corporation, a stock sale gives the buyer no inside basis step-up and there is
no IRC § 754 equivalent to pass one through. The buyer will want an asset purchase, on which the
S corporation recognises gain that passes to the seller — much of it ordinary through IRC § 1245
recapture — so the seller resists.

If Havering were a partnership, a sale of the interest would give the buyer outside basis at cost,
and an IRC § 754 election would push a corresponding adjustment inside to the assets under IRC § 743
— giving the buyer the depreciable basis it wants without the seller having to sell assets. The
entity chosen at formation determines how much of the sale price survives the transaction, which is
why the exit belongs in the analysis at the start.
</div>

## Traps

<div class="callout trap">

**The one class of stock rule is about rights, not labels.** Differences in voting power alone are
permitted; differences in rights to distribution or liquidation proceeds are not. A
profits-interest-style arrangement that works in a partnership can be fatal in an S corporation.

</div>

<div class="callout trap">

**A limited partner's exclusion from self-employment tax does not cover guaranteed payments for
services.** IRC § 1402(a)(13) excludes the distributive share "as such", and expressly carves out
IRC § 707(c) payments established to be remuneration for services actually rendered.

</div>

<div class="callout trap">

**Section 199A is not simply "available to pass-throughs".** Above the threshold the wage and
property limitations turn on entity-level facts, and guaranteed payments do not count as W-2 wages
while S corporation owner wages do — so two identically profitable businesses can get different
deductions.

</div>

<div class="callout trap">

**Electing S status for an existing C corporation carries baggage.** The IRC § 1374 built-in gains
tax and the IRC § 1375 passive investment income tax both apply where accumulated earnings and
profits survive the conversion, and neither exists for a corporation that was always an S
corporation.

</div>

## How this has changed

The comparison was transformed in 2017 and has settled since. Pub. L. 115-97 cut the corporate rate
to a flat figure with no brackets and made it permanent, while giving pass-throughs the section 199A
deduction with a scheduled expiry — so for eight years the standard advice carried an asymmetry: the
corporate advantage was permanent and the pass-through offset was temporary. Pub. L. 119-21
§ 70105(b)(1) removed that asymmetry by replacing the terminating subsection outright, so
section 199A no longer expires and the two regimes are now compared on equal footing.

The same Act widened the section 199A phase-in range by half and added a minimum deduction for
taxpayers with a modest amount of active qualified business income, both of which push the
comparison further toward the pass-through for smaller service businesses.

The eligibility rules in IRC § 1361 have loosened steadily over decades — the shareholder ceiling
has risen repeatedly, electing small business trusts and qualified subchapter S trusts became
permitted shareholders, and family members are now counted as one shareholder — but the four core
limits in § 1361(b)(1) have not moved, and the one class of stock requirement remains the most
common reason a growing business leaves subchapter S.

## Exam focus

Learn the four axes rather than a table of conclusions: number of tax levels, self-employment tax,
section 199A, and flexibility on allocation, basis and exit. Questions are usually built by varying
one of them.

Memorise the IRC § 1361(b)(1) limits exactly — the shareholder ceiling, the permitted shareholder
categories, the non-resident alien bar and the one class of stock rule — and know the three
ineligible corporation categories.

Know the self-employment treatment of each form: whole profit for a proprietor and a general
partner, excluded distributive share for a limited partner other than guaranteed payments for
services, and wages only for an S corporation shareholder.

Be ready to explain why section 199A can differ between a partnership and an S corporation above
the threshold, and why a C corporation gets none of it.

Finally, know what only a partnership offers: special allocations with substantial economic effect,
outside basis in entity liabilities under IRC § 752, and the IRC § 754 election on a transfer of an
interest.

## Check yourself

**1.** A corporation has 90 shareholders, one of which is a single-member LLC owned by a US
individual. May it elect S status?

*Answer: It depends on the LLC's classification, and the analysis has to go through
Reg. § 301.7701-3 first. IRC § 1361(b)(1)(B) bars a shareholder that is not an individual, other
than a permitted estate, trust or organisation. A single-member LLC that has made no election is
disregarded, so its owner — an individual — is treated as the shareholder and the election is fine.
Had the LLC elected to be classified as an association, it would be a corporation, an ineligible
shareholder, and the election would fail. The shareholder count of 90 is inside the ceiling either
way.*

**2.** A limited partner in a partnership receives a $60,000 distributive share and a $40,000
guaranteed payment for managing a project. What is subject to self-employment tax?

*Answer: The $40,000. IRC § 1402(a)(13) excludes a limited partner's distributive share "as such"
from net earnings from self-employment, but expressly carves out IRC § 707(c) guaranteed payments
made to that partner for services actually rendered, to the extent established to be remuneration
for those services. So the distributive share is out and the guaranteed payment is in. Note the
words "as such": a partner who is a limited partner in form but works in the business full time may
find the exclusion contested.*

**3.** A profitable service business near the section 199A threshold is choosing between an LLC
taxed as a partnership and an S corporation. Why might the entity choice change the deduction?

*Answer: Because above the threshold the deduction is limited by reference to W-2 wages paid by the
business, and the two entities generate them differently. An S corporation pays its owner-employee
wages, which count toward its own W-2 wage limitation. A partnership pays its working partners
guaranteed payments, which are not W-2 wages and do not count. Two businesses with identical profits
and identical owner remuneration can therefore reach different section 199A deductions — and for a
specified service trade or business above the phase-in range, neither gets one.*

**4.** An existing C corporation with substantial appreciated inventory and accumulated earnings and
profits elects S status. What follows it into the new regime?

*Answer: Two entity-level taxes that a corporation which had always been an S corporation would
never face. IRC § 1374 taxes net recognised built-in gain during the recognition period, so selling
the appreciated inventory soon after the conversion produces corporate-level tax as well as
pass-through income. And IRC § 1375 taxes excess net passive investment income while accumulated
earnings and profits from the C years remain — which can also terminate the election if it persists.
Neither is a reason not to convert, but both belong in the advice.*

**5.** Why does the exit belong in an entity selection discussion at formation?

*Answer: Because the entity determines how much of a sale price survives the transaction, and it
cannot be changed cheaply once value has accrued. A partnership interest sold gives the buyer
outside basis at cost, and an IRC § 754 election pushes the adjustment inside under IRC § 743, so
the buyer gets depreciable basis without the seller selling assets. S corporation stock gives the
buyer no inside step-up and has no § 754 equivalent, so buyer and seller are pushed into opposite
structures. A C corporation adds a second layer on an asset sale. The choice made when the business
was worth nothing decides the negotiation when it is worth a great deal.*
