---
title: "Debt discharge"
code: "2.1.5.g"
part: 2
domain: "Business Entities"
section: "S corporations"
description: "Excluded discharge income stops at the corporation and never reaches a shareholder basis account, and the attribute it burns first is the suspended loss."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 108(a)", title: "Exclusion from gross income", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 108(b)", title: "Reduction of tax attributes", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 108(d)(7)", title: "Special rules for S corporation", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 108(e)(6)", title: "Indebtedness contributed to capital", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 1366", title: "Pass-thru of items to shareholders", url: "https://www.law.cornell.edu/uscode/text/26/1366" }
  - { type: IRC, ref: "§ 1367", title: "Adjustments to basis of stock of shareholders, etc.", url: "https://www.law.cornell.edu/uscode/text/26/1367" }
  - { type: IRC, ref: "§ 1363(c)", title: "Elections of the S corporation", url: "https://www.law.cornell.edu/uscode/text/26/1363" }
  - { type: IRC, ref: "§ 1371(b)", title: "No carryover between C year and S year", url: "https://www.law.cornell.edu/uscode/text/26/1371" }
  - { type: IRC, ref: "§ 703(b)", title: "Elections of the partnership", url: "https://www.law.cornell.edu/uscode/text/26/703" }
  - { type: IRC, ref: "§ 108(d)(6)", title: "Certain provisions to be applied at partner level", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 118", title: "Contributions to the capital of a corporation", url: "https://www.law.cornell.edu/uscode/text/26/118" }
  - { type: Case, ref: "Gitlitz v. Commissioner", title: "Supreme Court, 9 January 2001, reversing 182 F.3d 1143", url: "https://www.law.cornell.edu/supct/html/99-1295.ZS.html" }
  - { type: Reg, ref: "§ 1.1366-1(a)(2)(viii)", title: "Tax-exempt income", url: "https://www.law.cornell.edu/cfr/text/26/1.1366-1" }
forms: []
related: ["2.1.5.e", "2.1.5.c", "2.1.2.j", "2.1.5.d", "2.1.5.f", "2.2.1.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out IRC § 108(d)(7)(A), under which the exclusions and attribute reductions are applied at the corporate level and an excluded amount is not taken into account under IRC § 1366(a), the IRC § 108(d)(7)(B) rule treating a loss suspended under IRC § 1366(d)(1) as a net operating loss for attribute reduction, and IRC § 108(d)(7)(C) on debt basis for the purposes of IRC § 108(e)(6). Records that the words closing IRC § 108(d)(7)(A) were added by Pub. L. 107-147 § 402(a) to reverse Gitlitz v. Commissioner." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and two typed scenarios (boundary, procedural) so all five scenarios carry distinct types." }
---

<div class="plain-terms">
This page is about what happens when a lender forgives part of a debt owed by an S corporation.
Forgiven debt normally counts as income. But a corporation that cannot pay its bills may get to
leave some or all of it out of its taxable income. That test looks at the corporation's own
finances, not any one owner's bank account. It matters for S corporations in real money trouble,
not for healthy ones with no forgiven debt. This page decides where the tax break comes from and
what it costs. Leaving the debt out of income does not raise an owner's stake in the company. It
can also wipe out losses an owner was saving up to deduct later.
</div>

The general rules of IRC § 108 apply to an S corporation, but three special rules in
IRC § 108(d)(7) change where they operate and what they consume. All three exist because a
pass-through entity with an exclusion at one level and basis accounts at another can otherwise
produce a benefit nobody intended — and the Supreme Court once held that it did.

## The rule

**Everything happens at the corporation.** {fig:scod.corporate_level} (IRC § 108(d)(7)(A)). Two
consequences follow immediately. Insolvency is tested against the **corporation's** balance
sheet, not any shareholder's. And an amount excluded under IRC § 108(a) never enters
IRC § 1366(a), so it is not a separately stated item, it is not nonseparately computed income,
and it does not increase stock basis.

**Included discharge income behaves normally.** Where no exclusion applies, the discharge is
ordinary income of the corporation, passes through under IRC § 1366(a)(1)(B), and increases stock
basis under IRC § 1367(a)(1)(B) like any other income.

**What the exclusions are.** {fig:scod.exclusions} (IRC § 108(a)(1)), and
{fig:scod.precedence} (IRC § 108(a)(2)). {fig:scod.insolvency_cap} (IRC § 108(a)(3),
IRC § 108(d)(3)).

**What the exclusion costs.** {fig:scod.attribute_order} (IRC § 108(b)(2)), at
{fig:scod.attribute_rate} (IRC § 108(b)(3)), and {fig:scod.after_tax} (IRC § 108(b)(4)(A)).

**The S corporation's first attribute is the suspended loss.**
{fig:scod.suspended_as_nol} (IRC § 108(d)(7)(B)). This is the provision that makes the whole
scheme work, because IRC § 1371(b)(2) means an S corporation has no net operating losses of its
own to reduce.

**Debt contributed to capital.** {fig:scod.contributed_debt} (IRC § 108(e)(6)), and for that
purpose {fig:scod.debt_basis_ignored} (IRC § 108(d)(7)(C)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Applied at the corporate level | {fig:scod.corporate_level} | IRC § 108(d)(7)(A) |
| The exclusions | {fig:scod.exclusions} | IRC § 108(a)(1) |
| Which exclusion wins | {fig:scod.precedence} | IRC § 108(a)(2) |
| Insolvency, measured | {fig:scod.insolvency_cap} | IRC § 108(a)(3), § 108(d)(3) |
| Attributes reduced, in order | {fig:scod.attribute_order} | IRC § 108(b)(2) |
| Rate of reduction | {fig:scod.attribute_rate} | IRC § 108(b)(3) |
| When the reduction happens | {fig:scod.after_tax} | IRC § 108(b)(4)(A) |
| Election for depreciable property | {fig:scod.depreciable_election} | IRC § 108(b)(5) |
| Suspended loss as a net operating loss | {fig:scod.suspended_as_nol} | IRC § 108(d)(7)(B) |
| Debt contributed to capital | {fig:scod.contributed_debt} | IRC § 108(e)(6) |
| Debt basis for that purpose | {fig:scod.debt_basis_ignored} | IRC § 108(d)(7)(C) |
| Excluded income is not tax-exempt income | {fig:sc.tax_exempt_defined} | Reg. § 1.1366-1(a)(2)(viii) |
| No corporate carryovers | {fig:sc.no_carryover} | IRC § 1371(b) |

## How it works in practice

**Test insolvency at the corporation.** {fig:scod.corporate_level} (IRC § 108(d)(7)(A)). A
shareholder who is personally destitute cannot borrow the corporation's exclusion, and a
corporation that is balance-sheet insolvent gets the exclusion however wealthy its shareholders
are. The measurement is {fig:scod.insolvency_cap} (IRC § 108(a)(3), IRC § 108(d)(3)) — fair
market value of assets against liabilities, immediately before the discharge, so the discharged
debt itself is still in the liabilities column.

**Then trace what the exclusion consumes.** IRC § 1371(b)(2) prevents an S corporation from
generating a net operating loss carryover at the corporate level, so the first item on the
IRC § 108(b)(2) list would ordinarily be empty. IRC § 108(d)(7)(B) fills it:
{fig:scod.suspended_as_nol}. The economic effect is that the shareholders pay for the exclusion
with the losses they were unable to deduct for want of basis — which is exactly the right answer,
because those losses were funded by the debt that has now been forgiven.

**The election is the corporation's.** IRC § 1363(c)(1) makes every election affecting the
computation of items a corporate election, and the two exceptions in IRC § 1363(c)(2) are the
mining exploration election and the foreign tax credit election. So the IRC § 108(b)(5) election
to reduce the basis of depreciable property first is made on Form 1120-S by the corporation.
Contrast IRC § 703(b), which pushes the IRC § 108(b)(5) and IRC § 108(c)(3) elections down to each
partner individually. Two pass-through regimes, opposite answers.

**Excluded income is not tax-exempt income.** {fig:sc.tax_exempt_defined}
(Reg. § 1.1366-1(a)(2)(viii)). The regulation names IRC § 108 expressly as an example of income
that is excluded but not permanently excludible, so it does not qualify as tax-exempt income. This
is the same conclusion IRC § 108(d)(7)(A) reaches by a different route, and it matters for both
stock basis and the accumulated adjustments account.

**Watch what happens to the shareholder's loan.** Where the corporation's creditor is a
shareholder and the shareholder simply forgives the debt as a contribution to capital,
{fig:scod.contributed_debt} (IRC § 108(e)(6)). If the shareholder's basis in the note equals its
face amount there is no discharge income at all — the corporation is treated as having paid it in
full. And {fig:scod.debt_basis_ignored} (IRC § 108(d)(7)(C)), so the reductions that earlier
losses made to the shareholder's debt basis are ignored for this purpose. Without that rule the
shareholder's own suspended losses would manufacture discharge income for the corporation.

<div class="scenario" data-type="baseline">
<h3>The exclusion that bought nothing</h3>

Vane Fabrication Inc. is insolvent by $400,000. A lender forgives $250,000 of its debt. The sole
shareholder has zero stock basis, zero debt basis, and $310,000 of losses suspended under
IRC § 1366(d)(1).

The $250,000 is excluded under IRC § 108(a)(1)(B), capped at the $400,000 of {gloss:insolvency}, and
tested at the corporation under IRC § 108(d)(7)(A). Because it is excluded, it is not taken into
account under IRC § 1366(a): it does not appear on the Schedule K-1, and stock basis stays at
zero.

Attribute reduction then runs down the IRC § 108(b)(2) list. The corporation has no net operating
loss of its own, but IRC § 108(d)(7)(B) treats the shareholder's $310,000 of suspended losses as
one for this purpose, so $250,000 of them is extinguished. She keeps $60,000 of suspended losses
and gains nothing.

That is the intended result. Had the exclusion passed through and raised her basis, the same
$250,000 would have freed $250,000 of suspended losses instead of destroying them, and the
forgiveness would have produced a deduction out of nothing.
</div>

<div class="scenario" data-type="fails">
<h3>The solvent corporation with no exclusion</h3>

Ferrers Joinery Inc. is solvent throughout and not in bankruptcy. A supplier writes off $80,000
it is owed. The corporation's two equal shareholders each have stock basis of $15,000 and
suspended losses of $50,000.

No exclusion in IRC § 108(a)(1) applies. The $80,000 is ordinary {gloss:cancellation-of-debt-income}
of the corporation and passes through under IRC § 1366(a)(1)(B). Each shareholder takes $40,000,
and each increases stock basis by $40,000 under IRC § 1367(a)(1)(B), to $55,000.

The increased basis then frees suspended losses: each shareholder may now deduct her full $50,000.
Net, each reports $40,000 of income and $50,000 of loss. No attribute reduction occurs, because
IRC § 108(b) applies only to amounts excluded under IRC § 108(a).

Compare the first scenario. The corporation that could exclude the income is worse off than the
corporation that could not, because the exclusion is bought with attributes and inclusion is paid
for with basis. That inversion is a real feature of the regime, not an artefact of the facts.
</div>

<div class="scenario" data-type="interaction">
<h3>The shareholder who forgave her own loan</h3>

Threlkeld Marine Inc. owes its sole shareholder $200,000 on a written note. Earlier losses reduced
her basis in the note to $45,000. She contributes the note to the corporation's capital.

IRC § 108(e)(6) applies: IRC § 118 is switched off, and the corporation is treated as having
satisfied the $200,000 debt with money equal to her adjusted basis in it. The question is which
basis figure.

{fig:scod.debt_basis_ignored} (IRC § 108(d)(7)(C)). Her basis is therefore the $200,000 she
started with, not the $45,000 the loss adjustments left. The corporation is treated as paying
$200,000 on a $200,000 debt, and there is no discharge income at all.

Without IRC § 108(d)(7)(C) the corporation would have $155,000 of discharge income created purely
by her own inability to deduct losses — the same amount, taxed twice over in substance.
</div>

<div class="scenario" data-type="boundary">
<h3>Right at the insolvency line</h3>

Bellwether Cabinetry Inc. has assets of $310,000 and liabilities of $485,000 immediately before a
lender forgives $175,000 of a note — exactly the corporation's shortfall. The sole shareholder has
$60,000 of suspended losses.

The full $175,000 is excluded under IRC § 108(a)(1)(B): {fig:scod.insolvency_cap} measures
insolvency immediately before the discharge, and here the discharge equals the shortfall exactly,
so nothing spills over into ordinary income. Had the lender forgiven $176,000 instead, only
$175,000 would be excluded and the remaining $1,000 would be ordinary discharge income, passing
through and increasing stock basis under IRC § 1367(a)(1)(B) even though the other $175,000 does
not. On these facts the attribute reduction under IRC § 108(d)(7)(B) extinguishes the
shareholder's $60,000 of suspended losses first, and the balance of the $175,000 continues down
the IRC § 108(b)(2) list to whatever other attributes the corporation has.
</div>

<div class="scenario" data-type="procedural">
<h3>Filing the basis-first election</h3>

An insolvent {gloss:s-corporation} excludes $90,000 of discharge income and wants the attribute
reduction to hit the basis of its depreciable equipment before anything else, rather than working
down the standard IRC § 108(b)(2) order.

The corporation makes the IRC § 108(b)(5) election on its own Form 1120-S for the year of the
discharge — not through a shareholder vote and not on any shareholder's individual return.
IRC § 1363(c)(1) treats this as an election affecting the computation of items derived from the
corporation, and the only two exceptions in IRC § 1363(c)(2) are the mining exploration election
and the foreign tax credit election; the depreciable-property election is not one of them. A
shareholder who prefers a different ordering has no separate say, and no separate form to file —
the corporation's return is the only place this choice is made.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>Insolvency is the corporation's, not the shareholder's.</strong>
{fig:scod.corporate_level} (IRC § 108(d)(7)(A)). Facts about a shareholder's personal balance
sheet are always a distractor in an S corporation question.</p>

<p><strong>Excluded discharge income does not increase basis.</strong> The closing words of
IRC § 108(d)(7)(A) say so directly, and Reg. § 1.1366-1(a)(2)(viii) says the same thing by
excluding IRC § 108 amounts from the definition of tax-exempt income. <em>Included</em> discharge
income does increase basis, as ordinary income.</p>

<p><strong>The suspended loss is an attribute.</strong> {fig:scod.suspended_as_nol}
(IRC § 108(d)(7)(B)). It is easy to conclude that an S corporation has nothing on the
IRC § 108(b)(2) list because IRC § 1371(b)(2) denies it carryovers. The statute supplies the
missing attribute.</p>

<p><strong>The IRC § 108(b)(5) election belongs to the corporation.</strong> IRC § 1363(c)(1),
and the exceptions in IRC § 1363(c)(2) do not include it. Do not import the partnership answer
from IRC § 703(b).</p>

<p><strong>Measure insolvency immediately before the discharge.</strong> IRC § 108(d)(3). The
liability about to be forgiven is still counted, which is what makes the exclusion available at
all in most cases.</p>
</div>

## How this has changed

**The closing words of IRC § 108(d)(7)(A) were added to reverse a Supreme Court decision.** In
Gitlitz v. Commissioner, decided 9 January 2001 and reversing 182 F.3d 1143, the Court held two
things. First, that excluded discharge of indebtedness is an item of income that passes through
and increases shareholders' bases in the stock — the exclusion in IRC § 108(a) stops the amount
being included in gross income, but does not stop it being an item of income. Second, that the
pass-through happens **before** the attribute reduction, because IRC § 108(b)(4)(A) directs that
the reductions be made after the tax for the year of the discharge has been determined, and
determining that tax requires the basis adjustment and pass-through to have happened already. On
the facts, the shareholders' basis increase equalled their losses, so no suspended losses
survived to be reduced. Congress responded in Pub. L. 107-147 § 402(a), inserting into
IRC § 108(d)(7)(A) the words ", including by not taking into account under section 1366(a) any
amount excluded under subsection (a) of this section". The first of the Court's two holdings is
now displaced by statute, and the sequencing question the second answered no longer arises.

That history is worth keeping because the reasoning survives elsewhere. The Gitlitz problem was
never about discharge income as such; it was about the interaction of an exclusion with a basis
account in a pass-through entity. The partnership regime is built the other way round: IRC
§ 108(d)(6) provides that in the case of a partnership, IRC § 108(a), (b), (c) and (g) are applied
at the **partner** level. That is the mirror image of IRC § 108(d)(7)(A) and produces a different
answer on identical facts — see the partnership cancellation of debt topic.

**Two 2026 changes in IRC § 108 do not touch this topic but are worth knowing.** The exclusion in
IRC § 108(a)(1)(E) for qualified principal residence indebtedness applies only to a discharge
before 1 January 2026 or one made under a written arrangement entered into before that date, and
no later Act has moved the date. And Pub. L. 119-21 § 70119(a) amended IRC § 108(f)(5) generally
with effect for discharges after 31 December 2025. Both are individual provisions and neither
reaches a corporate discharge, but a reader working from a general summary of IRC § 108 will meet
them.

## Exam focus

The highest-yield fact in this topic is the level at which everything happens. Insolvency, the
exclusion and the attribute reduction are all corporate. Any question that offers a shareholder's
insolvency as a reason to exclude is testing exactly this.

The second is the basis consequence, and it is worth learning as a pair. Excluded discharge income
does not increase stock basis; included discharge income does. A great many questions turn on
nothing else.

The third is IRC § 108(d)(7)(B). Know that the shareholders' suspended losses stand in for the net
operating loss that an S corporation cannot have, and know why: IRC § 1371(b)(2).

Finally, keep the two pass-through regimes apart. Subchapter S applies IRC § 108 at the entity and
makes the IRC § 108(b)(5) election a corporate one; subchapter K applies it at the partner and
makes the election a partner's. Identical facts, opposite answers.

## Check yourself

**1.** An S corporation is insolvent by $90,000 when a creditor forgives $140,000. How much is
excluded, and what happens to the rest?

*Answer: $90,000 is excluded under IRC § 108(a)(1)(B), because {fig:scod.insolvency_cap}. The
remaining $50,000 is ordinary discharge income of the corporation, passes through under
IRC § 1366(a)(1)(B), and increases each shareholder's stock basis under IRC § 1367(a)(1)(B).*

**2.** Following that exclusion, the corporation has no net operating loss and no credit
carryovers. What is reduced?

*Answer: {fig:scod.suspended_as_nol} (IRC § 108(d)(7)(B)). The shareholders' losses disallowed for
the year of the discharge under IRC § 1366(d)(1) are treated as a net operating loss and reduced
first, dollar for dollar. If they are exhausted, the reduction moves down the IRC § 108(b)(2) list
to the basis of the corporation's property.*

**3.** A shareholder of an insolvent S corporation is personally solvent and wealthy. Does that
affect the corporation's exclusion?

*Answer: No. {fig:scod.corporate_level} (IRC § 108(d)(7)(A)). The exclusion and the insolvency
test are applied at the corporate level, and the shareholder's own balance sheet is irrelevant.
The answer would differ for a partnership, where IRC § 108(d)(6) applies the exclusions at the
partner level.*

**4.** May a shareholder who disagrees with the corporation's IRC § 108(b)(5) election make her
own?

*Answer: No. IRC § 1363(c)(1) makes any election affecting the computation of items derived from
an S corporation a corporate election, and the only exceptions in IRC § 1363(c)(2) are the mining
exploration and foreign tax credit elections. The contrast is IRC § 703(b), which does give the
choice to each partner.*

**5.** A shareholder whose debt basis in a $150,000 note has been reduced to zero forgives the
note as a contribution to capital. How much discharge income does the corporation have?

*Answer: None. {fig:scod.contributed_debt} (IRC § 108(e)(6)), and {fig:scod.debt_basis_ignored}
(IRC § 108(d)(7)(C)) — so the relevant basis is $150,000, ignoring the IRC § 1367(b)(2)
reductions. The corporation is treated as having satisfied the debt with $150,000 of money.*
