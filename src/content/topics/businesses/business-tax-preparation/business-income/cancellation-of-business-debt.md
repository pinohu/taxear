---
title: "Cancellation of business debt"
code: "2.2.1.d"
part: 2
domain: "Business Tax Preparation"
section: "Business Income"
description: "Forgiven debt is income unless a provision says otherwise, and the exception a cash-basis business relies on is that paying it would have produced a deduction."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 61(a)(11)", title: "Income from discharge of indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: IRC, ref: "§ 108(a)", title: "Exclusion from gross income", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 108(b)", title: "Reduction of tax attributes", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 108(c)", title: "Treatment of discharge of qualified real property business indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 108(e)", title: "General rules for discharge of indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 108(g)", title: "Special rules for discharge of qualified farm indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 1017", title: "Discharge of indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/1017" }
  - { type: IRC, ref: "§ 108(d)(6)", title: "Certain provisions to be applied at partner level", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 6041", title: "Information at source", url: "https://www.law.cornell.edu/uscode/text/26/6041" }
  - { type: IRC, ref: "§ 6041A", title: "Returns regarding payments of remuneration for services and direct sales", url: "https://www.law.cornell.edu/uscode/text/26/6041A" }
  - { type: IRC, ref: "§ 6050P", title: "Returns relating to the cancellation of indebtedness by certain entities", url: "https://www.law.cornell.edu/uscode/text/26/6050P" }
forms: []
related: ["2.2.1.a", "2.2.1.c", "2.1.5.g", "2.1.2.j", "2.2.1.b", "2.2.2.d", "2.2.2.n"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out IRC § 61(a)(11) and the IRC § 108(a) exclusions with their order of precedence and the insolvency cap, the IRC § 108(b) attribute reduction and the IRC § 108(b)(5) election, and the four IRC § 108(e) rules a business meets most often — no other insolvency exception, the lost deduction rule, the related-party acquisition rule and the purchase price adjustment. Adds the elective IRC § 108(c) exclusion for qualified real property business indebtedness and the IRC § 108(g) farm rules." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of which exclusion applies and in what order, glossary marks, and a fourth typed scenario at the insolvency cap." }
diagram:
  archetype: "decision"
  caption: "Which exclusion applies to a business debt discharge, and in what order"
  tests:
    - { test: "Would paying the debt still produce a deduction?", result: "No income at all — IRC § 108(e)(2)", outcome: "pass" }
    - { test: "Discharge in a Title 11 case?", result: "Excluded in full", outcome: "pass" }
    - { test: "Insolvent immediately before the discharge?", result: "Excluded up to the insolvency", outcome: "pass" }
    - { test: "Qualified farm or real property business debt, and elected?", result: "Excluded within its own limits", outcome: "pass" }
    - { test: "None of the above?", result: "Ordinary income under IRC § 61(a)(11)", outcome: "fail" }
---

<div class="plain-terms">
When a business owes money it cannot pay, and the lender agrees to accept less, the
forgiven amount usually counts as income. This is true even though no cash changes hands. This page
covers the exceptions to that rule. Some businesses can leave part or all of the forgiven debt off
their tax return. It affects any business whose debt is cut or settled for less than it owes, whether
a company, a partnership, or one owner alone. It does not cover a person's forgiven home loan or credit
card debt, which follow other rules. This page decides whether the forgiven amount is taxed now, taxed
never, or left out of income. It also decides what a business gives up in exchange for leaving it out.
</div>

Every business that fails to pay a debt in full faces the same first question, and the answer is
almost always the same: forgiveness is income. The work is in the exceptions, and the one a
practitioner meets most often is not in IRC § 108(a) at all.

## The rule

**The starting point.** {fig:bcod.general} (IRC § 61(a)(11), IRC § 108(e)(1)).

**The exclusions.** {fig:scod.exclusions} (IRC § 108(a)(1)), ordered so that
{fig:scod.precedence} (IRC § 108(a)(2)), and capped so that {fig:scod.insolvency_cap}
(IRC § 108(a)(3), IRC § 108(d)(3)).

**The price of an exclusion.** {fig:scod.attribute_order} (IRC § 108(b)(2)), at
{fig:scod.attribute_rate} (IRC § 108(b)(3)), {fig:scod.after_tax} (IRC § 108(b)(4)(A)) — with
{fig:scod.depreciable_election} (IRC § 108(b)(5)).

**The rule that is not an exclusion at all.** {fig:bcod.lost_deduction} (IRC § 108(e)(2)). No
attribute reduction follows, because nothing was excluded under IRC § 108(a).

**Purchase price adjustment.** {fig:bcod.purchase_price} (IRC § 108(e)(5)).

**Related-party acquisition.** {fig:bcod.related_acquisition} (IRC § 108(e)(4)(A)).

**Real property used in a business.** {fig:bcod.qrpbi_defined} (IRC § 108(c)(3)), subject to
{fig:bcod.qrpbi_limits} (IRC § 108(c)(2)), and {fig:bcod.qrpbi_basis} (IRC § 108(c)(1)).

**Farming.** {fig:bcod.farm_defined} (IRC § 108(g)(1), (g)(2)), capped by {fig:bcod.farm_cap}
(IRC § 108(g)(3)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| The general rule | {fig:bcod.general} | IRC § 61(a)(11), § 108(e)(1) |
| The exclusions | {fig:scod.exclusions} | IRC § 108(a)(1) |
| Which exclusion wins | {fig:scod.precedence} | IRC § 108(a)(2) |
| Insolvency, measured | {fig:scod.insolvency_cap} | IRC § 108(a)(3), § 108(d)(3) |
| Attributes reduced, in order | {fig:scod.attribute_order} | IRC § 108(b)(2) |
| Rate of reduction | {fig:scod.attribute_rate} | IRC § 108(b)(3) |
| When the reduction happens | {fig:scod.after_tax} | IRC § 108(b)(4)(A) |
| Depreciable property election | {fig:scod.depreciable_election} | IRC § 108(b)(5) |
| Lost deduction rule | {fig:bcod.lost_deduction} | IRC § 108(e)(2) |
| Purchase price adjustment | {fig:bcod.purchase_price} | IRC § 108(e)(5) |
| Related-party acquisition | {fig:bcod.related_acquisition} | IRC § 108(e)(4)(A) |
| Business real property debt | {fig:bcod.qrpbi_defined} | IRC § 108(c)(3) |
| Its two limits | {fig:bcod.qrpbi_limits} | IRC § 108(c)(2) |
| Basis reduction | {fig:bcod.qrpbi_basis} | IRC § 108(c)(1) |
| Qualified farm indebtedness | {fig:bcod.farm_defined} | IRC § 108(g)(1), (g)(2) |
| Farm exclusion cap | {fig:bcod.farm_cap} | IRC § 108(g)(3) |
| Applied at the partner level | {fig:cod.partner_level} | IRC § 108(d)(6) |
| Applied at the corporate level | {fig:scod.corporate_level} | IRC § 108(d)(7)(A) |

## How it works in practice

**Take IRC § 108(e)(2) first, because it is not an exclusion.** {fig:bcod.lost_deduction}
(IRC § 108(e)(2)). A cash method business that never deducted an unpaid invoice has no income when
the supplier writes it off — not because a provision excludes the income, but because the statute
says none is realised. The consequence matters: there is nothing excluded under IRC § 108(a), so
IRC § 108(b) never engages and no attribute is reduced. The business simply has no item at all.

**And note where the rule does not reach.** An accrual method business has already deducted the
invoice, so payment would give rise to no further deduction and IRC § 108(e)(2) does nothing. The
forgiveness is ordinary income, and the business must look to IRC § 108(a) or pay tax. This is the
cleanest illustration in the Code of a method of accounting changing a substantive result.

**Then run IRC § 108(a) in order.** {fig:scod.precedence} (IRC § 108(a)(2)). Title 11 displaces
everything. Insolvency displaces the farm and real property exclusions to the extent of the
insolvency, and {fig:scod.insolvency_cap} — measured immediately before the discharge, so the
debt about to be forgiven is still counted as a liability.

**Every exclusion is bought with attributes.** {fig:scod.attribute_order} (IRC § 108(b)(2)). Net
operating losses go first, and for a business with a large carryforward the exclusion is often
economically worthless — it converts a deferred deduction into a permanent one. The
IRC § 108(b)(5) election reverses the order for depreciable property:
{fig:scod.depreciable_election}. That trade is usually worth making only where the property will
be held rather than sold, since a reduced basis becomes gain on disposition.

**Know the two elective business exclusions.** IRC § 108(c) is available to any taxpayer other
than a C corporation on {fig:bcod.qrpbi_defined} (IRC § 108(c)(3)). It is elective, it is limited
twice over by {fig:bcod.qrpbi_limits} (IRC § 108(c)(2)) — once to the amount by which the debt
exceeds the property's value and once to the aggregate basis of depreciable real property — and
the price is {fig:bcod.qrpbi_basis} (IRC § 108(c)(1)). IRC § 108(g) does the same job for
farmers: {fig:bcod.farm_defined}, capped by {fig:bcod.farm_cap}.

**A price cut is not a discharge.** {fig:bcod.purchase_price} (IRC § 108(e)(5)). Where the seller
of property reduces what the buyer owes on the purchase, and the buyer is neither bankrupt nor
insolvent, the reduction adjusts the purchase price and therefore the buyer's basis. No income,
no attribute reduction, and no election required.

**Buying your own debt through a relative does not work.**
{fig:bcod.related_acquisition} (IRC § 108(e)(4)(A)). The acquisition at a discount by a related
person is treated as an acquisition by the debtor, which produces discharge income to the extent
of the discount.

**The entity level question is settled by two adjacent paragraphs.**
{fig:cod.partner_level} (IRC § 108(d)(6)) and {fig:scod.corporate_level}
(IRC § 108(d)(7)(A)). Identical facts, opposite answers, and the difference decides whose
insolvency is measured.

<div class="scenario" data-type="interaction">
<h3>The same write-off, two methods</h3>

Two identical consultancies each owe a supplier $70,000 for services delivered in the prior year.
The supplier writes off both debts. Neither business is bankrupt or insolvent.

Fenwick Associates uses the cash method and has never deducted the invoice, because it has never
paid it. {fig:bcod.lost_deduction} (IRC § 108(e)(2)) — payment would have produced a $70,000
deduction, so no income is realised. There is no exclusion, no Form 982, and no attribute
reduction. The item simply does not exist.

Garsdale Partners uses the accrual method and deducted the $70,000 when the liability was fixed.
Payment now would give rise to no deduction, so IRC § 108(e)(2) gives it nothing. It has $70,000
of ordinary discharge income under IRC § 61(a)(11), and no IRC § 108(a) exclusion is available on
these facts.

The economic position of the two businesses is identical. The tax results differ by $70,000, and
the whole difference is the method of accounting.
</div>

<div class="scenario" data-type="baseline">
<h3>The exclusion that cost more than it saved</h3>

Ravenglass Foundry Inc. is insolvent by $900,000 when a lender forgives $600,000. It carries a
$2,100,000 {gloss:net-operating-loss} forward and expects to be profitable within two years.

The $600,000 is excluded under IRC § 108(a)(1)(B) — the {gloss:insolvency} exceeds it, so all of it
qualifies. But {fig:scod.attribute_order} (IRC § 108(b)(2)) puts the net operating loss first, and
{fig:scod.attribute_rate} makes the reduction dollar for dollar. The carryforward falls to
$1,500,000.

The company has converted a $600,000 deduction it expected to use into nothing. Had it been
solvent, it would have reported $600,000 of income and absorbed it against the same carryforward,
reaching the identical carryforward balance — with no exclusion, no Form 982 and no election.

That symmetry is the point of IRC § 108(b), and it is why an exclusion is not a benefit but a
deferral. The benefit appears only where the taxpayer has no attributes to lose.
</div>

<div class="scenario" data-type="procedural">
<h3>The landlord who elected</h3>

Threave Properties LLC, taxed as a partnership, owns a commercial building worth $1,800,000
against a $2,400,000 mortgage taken out to acquire it. The lender writes the loan down to
$1,950,000. The members are solvent and there is no bankruptcy. The aggregate adjusted basis of the
LLC's depreciable real property is $1,600,000.

{fig:cod.partner_level} (IRC § 108(d)(6)), so each member tests the exclusion on their own return.
IRC § 108(a)(1)(B) is unavailable because they are solvent. IRC § 108(a)(1)(D) is available on
election, because the debt is {fig:bcod.qrpbi_defined}.

The discharge is $450,000. {fig:bcod.qrpbi_limits} (IRC § 108(c)(2)): the first limit is
$2,400,000 less $1,800,000, or $600,000, which the discharge does not exceed. The second is the
$1,600,000 of depreciable real property basis, which it also does not exceed. So the whole
$450,000 may be excluded.

The price is {fig:bcod.qrpbi_basis}. Basis falls to $1,150,000, future depreciation falls with it,
and a later sale produces more gain. The exclusion has bought a deferral, not a forgiveness.
</div>

<div class="scenario" data-type="boundary">
<h3>Insolvent, but not enough</h3>

Harlech Millworks Ltd is not in bankruptcy. Immediately before a lender discharges $80,000 of a
working-capital loan, its liabilities exceed its assets by $50,000. None of the debt is farm or real
property business indebtedness.

Absent an exclusion, the discharge would be {gloss:cancellation-of-debt-income} in full.
{fig:scod.insolvency_cap} (IRC § 108(a)(3), IRC § 108(d)(3)) — the exclusion cannot exceed the amount
of the insolvency, measured immediately before the discharge. Only $50,000 is excluded under
IRC § 108(a)(1)(B); the remaining $30,000 is ordinary income under IRC § 61(a)(11), and the
IRC § 108(b) attribute reduction reaches only the $50,000 that was actually excluded.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>IRC § 108(e)(2) is not an exclusion.</strong> {fig:bcod.lost_deduction}. No income is
realised at all, so IRC § 108(b) never applies and no attribute is reduced. Answer choices that
attach attribute reduction to this rule are wrong.</p>

<p><strong>It reaches only a taxpayer who has not already deducted.</strong> An accrual method
business gets nothing from IRC § 108(e)(2), because payment would produce no further
deduction.</p>

<p><strong>Insolvency is measured immediately before the discharge.</strong> IRC § 108(d)(3). The
liability about to be forgiven counts, which is what makes the exclusion available in most
cases.</p>

<p><strong>The IRC § 108(c) exclusion is unavailable to a C corporation.</strong>
IRC § 108(a)(1)(D) applies only "in the case of a taxpayer other than a C corporation." It is also
elective, and it is not available for qualified farm indebtedness.</p>

<p><strong>A seller's price cut is not a discharge.</strong> {fig:bcod.purchase_price}
(IRC § 108(e)(5)) — but only where the debt runs to the seller and arose out of the purchase, and
only where the buyer is neither bankrupt nor insolvent.</p>

<p><strong>A Form 1099-C does not decide anything.</strong> IRC § 6050P imposes a reporting
obligation on certain entities. Whether the recipient has income is answered by IRC § 61(a)(11)
and IRC § 108, and a business can receive a form reporting an amount it does not have to
include.</p>
</div>

## How this has changed

The architecture of IRC § 108 has been stable for business debt since the Bankruptcy Tax Act of
1980, and none of the provisions on this page was amended by Pub. L. 119-21. The 2026 rules are
the 2025 rules.

Two changes elsewhere in the section are worth knowing because a reader working from a general
summary of IRC § 108 will meet them, and neither reaches a business discharge. **IRC § 108(a)(1)(E)
lapsed.** The exclusion for qualified principal residence indebtedness applies only to a discharge
occurring before 1 January 2026 or made under a written arrangement entered into before that date.
Pub. L. 116-260 § 114(a) set the date in December 2020 and no later Act moved it, so 2026 is the
first year in more than a decade without the exclusion. **IRC § 108(f)(5) was replaced.**
Pub. L. 119-21 § 70119(a) amended the student loan discharge paragraph generally, effective for
discharges after 31 December 2025; the prior paragraph, added by Pub. L. 117-2 § 9675(a), covered
discharges in 2021 through 2025. It is a different rule, not an extension of the old one.

The one live drafting point for a business is the reporting threshold. IRC § 6050P requires an
applicable entity to report a discharge, and the threshold there was not among the figures
Pub. L. 119-21 § 70433 raised — that section reached IRC § 6041 and IRC § 6041A. A business will
therefore see Forms 1099-C at the old level while receiving far fewer Forms 1099-NEC, which is a
combination that invites the wrong inference about which amounts are income.

## Exam focus

The single most productive habit is to ask whether the taxpayer ever got a deduction for the
liability. If not, IRC § 108(e)(2) answers the question before any exclusion is considered, and
answers it without attribute reduction.

Second, know the precedence in IRC § 108(a)(2) and know that insolvency is measured immediately
before the discharge and caps the exclusion at the amount of the insolvency.

Third, remember that an exclusion is paid for. Expect a question in which the excluded amount and
the attribute reduction are the same figure, and the point is that the taxpayer is no better off.

Finally, keep the entity rules straight — partner level under IRC § 108(d)(6), corporate level
under IRC § 108(d)(7)(A) — because they decide whose balance sheet is tested.

## Check yourself

**1.** A cash method landscaping business owes $18,000 for materials it has never paid for or
deducted. The supplier forgives the debt. What does the business report?

*Answer: Nothing. {fig:bcod.lost_deduction} (IRC § 108(e)(2)) — payment would have given rise to a
deduction, so no income is realised. There is no exclusion under IRC § 108(a), so IRC § 108(b) does
not apply and no attribute is reduced.*

**2.** The same facts, except the business uses the accrual method and deducted the $18,000 in the
year the liability was fixed. What changes?

*Answer: It has $18,000 of ordinary income under IRC § 61(a)(11). IRC § 108(e)(2) gives it nothing,
because payment would now produce no further deduction, and no IRC § 108(a) exclusion applies to a
solvent business outside bankruptcy.*

**3.** A solvent business buys equipment from a manufacturer, owes $200,000 on the purchase, and
persuades the manufacturer to accept $170,000 in full settlement. Is the $30,000 income?

*Answer: No. {fig:bcod.purchase_price} (IRC § 108(e)(5)) — the debt runs to the seller, arose out
of the purchase, and the buyer is neither in a title 11 case nor insolvent, so the reduction is a
purchase price adjustment. The buyer's basis in the equipment falls by $30,000 instead.*

**4.** A company insolvent by $400,000 excludes $250,000 of discharge income and holds a $180,000
net operating loss carryforward and $90,000 of general business credit carryovers. What is
reduced?

*Answer: The net operating loss first, in full — $180,000, dollar for dollar under
{fig:scod.attribute_rate}. The remaining $70,000 of exclusion then reduces the general business
credit carryover, but at 33⅓ cents per dollar, so the carryover falls by about $23,333. Anything
still unabsorbed moves down the IRC § 108(b)(2) list.*

**5.** May a C corporation elect to exclude a discharge of the mortgage on its office building
under IRC § 108(c)?

*Answer: No. IRC § 108(a)(1)(D) is confined to "a taxpayer other than a C corporation," so the
election is unavailable however clearly the debt meets the IRC § 108(c)(3) definition. The
corporation must look to bankruptcy or insolvency.*
