---
title: "Income, expenses and separately stated items"
code: "2.1.5.c"
part: 2
domain: "Business Entities"
section: "S corporations"
description: "What an S corporation separately states, what it folds into ordinary income, and why a shareholder fringe benefit is measured by the partnership rules instead."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 1363", title: "Effect of election on corporation", url: "https://www.law.cornell.edu/uscode/text/26/1363" }
  - { type: IRC, ref: "§ 1366", title: "Pass-thru of items to shareholders", url: "https://www.law.cornell.edu/uscode/text/26/1366" }
  - { type: IRC, ref: "§ 1372", title: "Partnership rules to apply for fringe benefit purposes", url: "https://www.law.cornell.edu/uscode/text/26/1372" }
  - { type: IRC, ref: "§ 1377", title: "Definitions and special rule", url: "https://www.law.cornell.edu/uscode/text/26/1377" }
  - { type: IRC, ref: "§ 702", title: "Income and credits of partner", url: "https://www.law.cornell.edu/uscode/text/26/702" }
  - { type: IRC, ref: "§ 703", title: "Partnership computations", url: "https://www.law.cornell.edu/uscode/text/26/703" }
  - { type: IRC, ref: "§ 67", title: "2-percent floor on miscellaneous itemized deductions", url: "https://www.law.cornell.edu/uscode/text/26/67" }
  - { type: IRC, ref: "§ 68", title: "Overall limitation on itemized deductions", url: "https://www.law.cornell.edu/uscode/text/26/68" }
  - { type: IRC, ref: "§ 106", title: "Contributions by employer to accident and health plans", url: "https://www.law.cornell.edu/uscode/text/26/106" }
  - { type: IRC, ref: "§ 318", title: "Constructive ownership of stock", url: "https://www.law.cornell.edu/uscode/text/26/318" }
  - { type: IRC, ref: "§ 248", title: "Organizational expenditures", url: "https://www.law.cornell.edu/uscode/text/26/248" }
  - { type: IRC, ref: "§ 291", title: "Special rules relating to corporate preference items", url: "https://www.law.cornell.edu/uscode/text/26/291" }
  - { type: IRC, ref: "§ 901", title: "Taxes of foreign countries and of possessions of United States", url: "https://www.law.cornell.edu/uscode/text/26/901" }
  - { type: IRC, ref: "§ 704(e)", title: "Partnership interests created by gift", url: "https://www.law.cornell.edu/uscode/text/26/704" }
  - { type: Reg, ref: "§ 1.1366-1", title: "Shareholder's share of items of an S corporation", url: "https://www.law.cornell.edu/cfr/text/26/1.1366-1" }
forms: []
related: ["2.1.5.a", "2.1.5.b", "2.1.5.d", "2.1.5.e", "2.1.2.a", "2.1.5.f", "2.1.5.g", "2.1.5.h", "2.2.2.a", "2.2.4.f"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out IRC § 1363(a) and (b) on the corporation's own computation, the deductions denied to it through IRC § 703(a)(2), the IRC § 1366(a) split between separately stated and nonseparately computed items with the character and gross-income rules of § 1366(b) and (c), the working list in Reg. § 1.1366-1(a)(2), the per-day allocation and terminating election of IRC § 1377(a), and the IRC § 1372 fringe benefit rule. Records the general amendment of IRC § 68 by Pub. L. 119-21 § 70111, which first operates in taxable years beginning after 31 December 2025." }
---

An S corporation computes one year of trading and hands it to its shareholders in pieces. Almost
every question here is a sorting question: does this item travel on its own, or disappear into a
single ordinary figure? The statute answers with a principle, and the principle is worth more
than any list.

## The rule

**No entity-level tax.** {fig:sc.no_entity_tax} (IRC § 1363(a)).

**The corporation computes as an individual.** {fig:sc.taxable_income} (IRC § 1363(b)) — not as a
C corporation would, so no dividends-received deduction, no corporate charitable ceiling, no
corporate rate schedule behind its numbers. IRC § 1363(b) reaches back for only two corporate
provisions: the organizational expenditure rules of IRC § 248, and IRC § 291 where the
corporation or a predecessor was a C corporation in any of the three immediately preceding
taxable years.

**What the corporation may not deduct.** By IRC § 1363(b)(2) the deductions listed in
IRC § 703(a)(2) are denied to it: {fig:sc.denied_deductions}. They are denied here because they
belong to the shareholders, who apply their own limits.

**The split.** A shareholder takes into account their pro rata share of
{fig:sc.separately_stated_definition} (IRC § 1366(a)(1)(A)), and of the remainder, which the
statute calls nonseparately computed income or loss: {fig:sc.nonseparately_computed}
(IRC § 1366(a)(2)). Every dollar falls into one bucket or the other; nothing stays behind.

**Character is fixed at the corporate level.** An item is characterised as if the shareholder had
realised it directly from the source from which the corporation realised it, or incurred it as
the corporation incurred it (IRC § 1366(b)). And where a provision needs a shareholder's gross
income, {fig:sc.gross_income} (IRC § 1366(c)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Entity-level tax | {fig:sc.no_entity_tax} | IRC § 1363(a) |
| The corporation's computation | {fig:sc.taxable_income} | IRC § 1363(b) |
| Deductions denied to the corporation | {fig:sc.denied_deductions} | IRC § 703(a)(2), § 1363(b)(2) |
| Separately stated items | {fig:sc.separately_stated_definition} | IRC § 1366(a)(1)(A) |
| Nonseparately computed income or loss | {fig:sc.nonseparately_computed} | IRC § 1366(a)(2) |
| Shareholder's gross income | {fig:sc.gross_income} | IRC § 1366(c) |
| Who makes an election | {fig:sc.entity_elections} | IRC § 1363(c) |
| Allocation among shareholders | {fig:sc.per_day} | IRC § 1377(a)(1) |
| Election to close the books | {fig:sc.terminating_election} | IRC § 1377(a)(2)(A) |
| Affected shareholders | {fig:sc.affected_shareholders} | IRC § 1377(a)(2)(B) |
| Fringe benefits | {fig:sc.fringe_partner} | IRC § 1372(a) |
| 2-percent shareholder | {fig:sc.two_percent_shareholder} | IRC § 1372(b) |
| Reporting by activity | {fig:sc.separate_activities} | Reg. § 1.1366-1(a)(4) |
| Aggregation for a limit | {fig:sc.aggregate_for_limits} | Reg. § 1.1366-1(a)(5)(i) |
| Tax-exempt income | {fig:sc.tax_exempt_defined} | Reg. § 1.1366-1(a)(2)(viii) |
| Entity-level tax passed through | {fig:sc.entity_tax_as_loss} | IRC § 1366(f)(2), (f)(3) |

## How it works in practice

**Read the regulation's list, then throw it away.** Reg. § 1.1366-1(a)(2) gives a working list:
net capital gain or loss and net gain or loss on trade or business property, each grouped by
holding period and applicable rate; charitable contributions, grouped by the percentage
limitations; the foreign taxes described in IRC § 901; each item entering a credit; the
expensing election and the other itemized deductions of individuals, including any to which
IRC § 67 or IRC § 68 applies; portfolio income and its related expenses; tax-exempt income; and
the alternative minimum tax adjustments and preference items. It is expressly not exhaustive.

The unifying test is that the item meets a limit, a rate or a character rule *on the
shareholder's return* that cannot be applied inside the corporation. Capital gain, because the
shareholder's own rate applies; charitable contributions, because the ceiling is measured against
the shareholder's contribution base; foreign taxes, because the shareholder chooses between the
credit and the deduction. State the reason and you can place an item the regulation never
mentions.

**The two-step on charitable gifts.** IRC § 1363(b)(2) denies the corporation the deduction, and
the flush sentence of IRC § 1366(a)(1) then pulls the IRC § 702(a)(4) charitable contribution
into the separately stated list. The item is not lost; it is moved. Foreign taxes take the same
route through IRC § 702(a)(6).

**Elections belong to the corporation.** {fig:sc.entity_elections} (IRC § 1363(c)). The
accounting method, the inventory method, the expensing election and the discharge-of-indebtedness
basis reduction election are all made on Form 1120-S. Compare IRC § 703(b), which pushes the
discharge elections down to each partner — subchapter K and subchapter S part company there.

**Allocate by day, then by share.** {fig:sc.per_day} (IRC § 1377(a)(1)). There is no special
allocation in subchapter S: the single-class-of-stock requirement and this mechanical rule make
the arithmetic follow ownership and nothing else. The one relief valve is IRC § 1377(a)(2), under
which {fig:sc.terminating_election}. {fig:sc.affected_shareholders} — the corporation and every
affected shareholder must agree.

**Report by activity, and aggregate before applying a limit.**
{fig:sc.separate_activities} (Reg. § 1.1366-1(a)(4)); {fig:sc.aggregate_for_limits}
(Reg. § 1.1366-1(a)(5)(i)).

**Fringe benefits go to the partnership rules.** {fig:sc.fringe_partner} (IRC § 1372(a)), and a
2-percent shareholder means {fig:sc.two_percent_shareholder} (IRC § 1372(b)). Two features trip
people: ownership is tested **on any day** during the year, so a mid-year sale does not undo the
status, and IRC § 318 applies, so a spouse, child, grandchild or parent owning nothing directly
can still qualify (IRC § 318(a)(1)(A)).

**Entity-level taxes come back as pass-through adjustments.** {fig:sc.entity_tax_as_loss}
(IRC § 1366(f)(2), (f)(3)) — each surviving tax is fed back into the allocation so shareholders
bear it once, not twice.

<div class="scenario">
<h3>A single year, sorted into its pieces</h3>

Harborlight Rigging Inc., a calendar-year S corporation with two equal shareholders, has gross
receipts of $940,000, cost of goods sold of $410,000, wages and rent of $302,000, a long-term
capital gain of $46,000 on an investment parcel, a $9,000 cash gift to a public charity, and
$1,300 of interest on a state bond.

Ordinary business income is the nonseparately computed figure of IRC § 1366(a)(2): gross income
less deductions allowed, excluding everything separately stated — $940,000 less $410,000 less
$302,000, or $228,000, of which each shareholder takes $114,000.

The capital gain is separated because the shareholder's own rate will apply; each takes $23,000.
The charitable gift is denied to the corporation by IRC § 1363(b)(2) and separated by the flush
sentence of IRC § 1366(a)(1); each takes $4,500 and applies their own ceiling. The bond interest
is tax-exempt income within {fig:sc.tax_exempt_defined}; each takes $650 and increases stock
basis by it. The Schedule K-1 is the sorting, not a summary of it.
</div>

<div class="scenario">
<h3>The shareholder who leaves in June</h3>

Delacroix Survey Co. has three equal shareholders. On 30 June one of them sells her entire
holding to an unrelated buyer. The corporation earns $60,000 in the first half of the year and
loses $150,000 in the second, ending with a $90,000 loss.

Under the default rule of IRC § 1377(a)(1) the year's single net figure is spread over 365 days
and then over the shares outstanding each day. The departing shareholder is charged with roughly
half of one-third of a $90,000 loss — about $15,000 — even though the business was profitable
throughout her ownership and the loss arrived after she left.

If she, the buyer and the corporation all agree, the IRC § 1377(a)(2) election applies the
per-day rule to the affected shareholders as if the year were two years ending 30 June and
31 December. She is allocated one-third of the first period's $60,000, or $20,000, and none of
the loss. The two answers differ by $35,000 and by their sign. Note who must agree:
{fig:sc.affected_shareholders}. The shareholder who neither bought nor sold is not an affected
shareholder here — but the corporation's agreement is still required.
</div>

<div class="scenario">
<h3>The premium that is not a fringe benefit</h3>

Ostrander Design Inc. pays the health insurance premiums of all fourteen of its employees. One
owns 3 percent of the stock; another owns nothing but is the daughter of a 40 percent
shareholder.

For twelve of the fourteen the premium is excluded from gross income by IRC § 106(a) and nothing
appears on the Form W-2. For the 3-percent owner, IRC § 1372(a) treats the corporation as a
partnership and her as a partner, so IRC § 106(a) — written for an employee — does not reach
her. The corporation still deducts the premium, but as compensation: it goes into her Box 1
wages, and she takes the self-employed health insurance deduction instead.

The daughter is the trap. She owns no stock, but IRC § 1372(b) applies IRC § 318, and
IRC § 318(a)(1)(A) attributes a parent's stock to a child. She is a 2-percent shareholder, treated
exactly as the 3-percent owner is. Nothing on the payroll record signals this; only the ownership
chart does.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>"The corporation gets no deduction for the charitable gift" is only half the
sentence.</strong> IRC § 1363(b)(2) denies the deduction <em>to the corporation</em>; the gift is
then separately stated and deducted by the shareholders under their own ceilings. An answer
choice reading "the contribution is not deductible" tests whether you stopped reading there.</p>

<p><strong>Discharge of indebtedness income is not tax-exempt income.</strong>
{fig:sc.tax_exempt_defined} (Reg. § 1.1366-1(a)(2)(viii)). The distinction is not academic:
tax-exempt income increases stock basis and excluded discharge income does not.</p>

<p><strong>"On any day during the taxable year."</strong> A shareholder who sells out on 2
January was a 2-percent shareholder for that year. Testing ownership at year end is wrong.</p>

<p><strong>The IRC § 1377(a)(2) election does not close the corporation's year.</strong> One
return, one taxable year: the statute applies the per-day rule to the affected shareholders
<em>as if</em> the year consisted of two. Anything turning on the corporation's own taxable year
— its due date, its accounting period — is untouched.</p>

<p><strong>A separately stated item is not necessarily a deductible one.</strong> Items to which
IRC § 67 applies still pass through and still appear on the Schedule K-1; what happens next is a
question for the shareholder's return, where {fig:misc.suspension}.</p>
</div>

## How this has changed

**The overall limitation on itemized deductions was rewritten, and 2026 is the first year it
operates.** Reg. § 1.1366-1(a)(2)(vi) requires separate statement of any itemized deduction to
which IRC § 67 or IRC § 68 applies. From 2018 through 2025 the reference to IRC § 68 was inert:
the former IRC § 68(f) suspended the section for taxable years beginning after 31 December 2017
and before 1 January 2026. Pub. L. 119-21 § 70111(a), enacted 4 July 2025, amended IRC § 68
generally, replacing the old adjusted-gross-income phase-out with a different mechanism —
{fig:itemized.haircut} — and § 70111(c) applies it to taxable years beginning after 31 December
2025. A separately stated itemized deduction worth its face amount to a shareholder in 2025 may
be worth less in 2026, on an identical Schedule K-1. The change sits entirely on the
shareholder's side of the line.

**Miscellaneous itemized deductions are permanently gone, and the subsection moved.**
Pub. L. 119-21 § 70110(a) made the suspension permanent, and § 70110(b)(2) redesignated it from
IRC § 67(g) to IRC § 67(h), putting a new provision on educator expenses at IRC § 67(g). A source
citing "IRC § 67(g)" for the suspension is citing a subsection that now says something else.

**The family-group cross-reference was conformed; the partnership regulation was not.**
{fig:sc.family_group} (IRC § 1366(e)). Pub. L. 114-74 § 1102 renumbered IRC § 704(e), and
Pub. L. 115-141 § 401(a)(192) then substituted "section 704(e)(2)" for "section 704(e)(3)" in
IRC § 1366(e) so the reference still lands on the definition of family. The corresponding
partnership regulation was never conformed — see the family partnerships topic.

## Exam focus

Questions here are almost always sorting questions: given a list, which items are separately
stated and which fall into ordinary business income. Do not memorise the regulation's list — ask
whether the item meets a rate, a limit or a character rule on the shareholder's return.

The second pattern is the mid-year change in ownership: the default is per-day and per-share, the
IRC § 1377(a)(2) election requires the agreement of the corporation and all affected
shareholders, and "affected shareholders" expands to every shareholder when the transfer is to
the corporation itself.

The third is the 2-percent shareholder, where the answer often turns on attribution under
IRC § 318 or on the "any day during the taxable year" measuring period rather than on the
percentage. Throughout, keep the two levels straight: the corporation's computation, its denied
deductions and its elections are one question, what the shareholder may then do is another. Many
wrong answers are true statements about the wrong level.

## Check yourself

**1.** An S corporation pays $12,000 of foreign income tax on income earned through a branch.
How is that amount reported, and why?

*Answer: It is a separately stated item. IRC § 1363(b)(2) denies the corporation the deduction
because IRC § 703(a)(2)(B) is on the denied list, and the flush sentence of IRC § 1366(a)(1)
pulls the IRC § 702(a)(6) foreign taxes into the separately stated items — because each
shareholder chooses independently between the credit and the deduction.*

**2.** A shareholder owns 1.5 percent of an S corporation. Her husband owns 6 percent. The
corporation pays her group-term life insurance premium. Is she a 2-percent shareholder?

*Answer: Yes. IRC § 1372(b) applies IRC § 318, and IRC § 318(a)(1)(A)(i) attributes a spouse's
stock, so her ownership for this purpose is 7.5 percent and the premium is measured under the
partnership rules rather than excluded as an employee fringe benefit.*

**3.** An S corporation has a $40,000 loss for the year. One shareholder sold half of his shares
to another existing shareholder on 1 September. No election is made. How is the loss allocated
to him?

*Answer: Per day and per share under IRC § 1377(a)(1) — an equal portion of the $40,000 to each
day, then divided among the shares outstanding that day, so he takes the loss on all his shares
before the sale and on his retained shares after it. The IRC § 1377(a)(2) election is unavailable
in any event, because he did not terminate his entire interest.*

**4.** The corporation excludes $80,000 of discharge of indebtedness income. Is that a
separately stated item of tax-exempt income?

*Answer: No. Reg. § 1.1366-1(a)(2)(viii) defines tax-exempt income as income permanently
excludible in all circumstances in which the provision applies, and names discharge of
indebtedness income as an example that does not qualify. It matters because tax-exempt income
increases stock basis and excluded discharge income does not.*

**5.** A shareholder buys $600,000 of equipment for her own sole proprietorship in the same year
her S corporation makes an expensing election and passes her a $200,000 share. May she claim
both amounts in full?

*Answer: Not automatically. Reg. § 1.1366-1(a)(5)(i) makes her aggregate her own deduction with
her share of the corporation's and apply the annual ceiling to the combined figure on her own
return, even though the corporation applied the limits at its own level first.*
