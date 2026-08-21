---
title: "Non-cash distributions"
code: "2.1.5.h"
part: 2
domain: "Business Entities"
section: "S corporations"
description: "Distributing appreciated property is a deemed sale that passes gain through to the shareholders, and distributing depreciated property destroys the loss outright."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 311", title: "Taxability of corporation on distribution", url: "https://www.law.cornell.edu/uscode/text/26/311" }
  - { type: IRC, ref: "§ 301", title: "Distributions of property", url: "https://www.law.cornell.edu/uscode/text/26/301" }
  - { type: IRC, ref: "§ 336(b)", title: "Treatment of liabilities", url: "https://www.law.cornell.edu/uscode/text/26/336" }
  - { type: IRC, ref: "§ 1371(a)", title: "Application of subchapter C rules", url: "https://www.law.cornell.edu/uscode/text/26/1371" }
  - { type: IRC, ref: "§ 1368", title: "Distributions", url: "https://www.law.cornell.edu/uscode/text/26/1368" }
  - { type: IRC, ref: "§ 1366", title: "Pass-thru of items to shareholders", url: "https://www.law.cornell.edu/uscode/text/26/1366" }
  - { type: IRC, ref: "§ 1367", title: "Adjustments to basis of stock of shareholders, etc.", url: "https://www.law.cornell.edu/uscode/text/26/1367" }
  - { type: IRC, ref: "§ 1374", title: "Tax imposed on certain built-in gains", url: "https://www.law.cornell.edu/uscode/text/26/1374" }
  - { type: Reg, ref: "§ 1.1368-2", title: "Accumulated adjustments account (AAA)", url: "https://www.law.cornell.edu/cfr/text/26/1.1368-2" }
forms: []
related: ["2.1.5.d", "2.1.5.c", "2.1.5.e", "2.1.3.c", "2.1.5.f"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the route by which IRC § 1371(a) brings IRC § 311 to bear on an S corporation distribution of property: gain recognised under IRC § 311(b)(1) as if the property were sold at fair market value and passed through under IRC § 1366, no loss recognised under IRC § 311(a), the amount of the distribution measured under IRC § 301(b) with the reduction for liabilities and the IRC § 336(b) floor, and the shareholder's fair market value basis under IRC § 301(d)." }
---

A distribution of property runs through two separate provisions in sequence, and reversing them
is the commonest way to get the answer wrong. First the corporation is treated as having sold the
property. Only then is the distribution itself measured and characterised.

## The rule

**Subchapter C reaches an S corporation.** {fig:sc.subchapter_c} (IRC § 1371(a)). Nothing in
subchapter S displaces IRC § 311, so it applies in full.

**Appreciated property is a deemed sale.** {fig:noncash.gain_recognized} (IRC § 311(b)(1)). The
gain is an item of the corporation, so it passes through under IRC § 1366(a) and increases stock
basis under IRC § 1367(a)(1) like any other gain — and it is characterised at the corporate level
under IRC § 1366(b) by the nature of the property in the corporation's hands.

**Depreciated property is not.** {fig:noncash.no_loss} (IRC § 311(a)). The loss is not deferred,
not suspended and not carried over. It is gone.

**The amount of the distribution.** {fig:noncash.amount} (IRC § 301(b)(1), (b)(3)), and
{fig:noncash.liabilities} (IRC § 301(b)(2)). Where a liability is involved there is a floor:
{fig:noncash.liability_floor} (IRC § 336(b), applied by IRC § 311(b)(2)).

**Then characterise it.** The net amount is a distribution to which IRC § 1368 applies:
{fig:dist.sc_no_ep} (IRC § 1368(b)) or {fig:sc.aaa_ordering} (IRC § 1368(c)).

**The shareholder's basis in what they received.** {fig:noncash.shareholder_basis}
(IRC § 301(d)) — the full fair market value, undiminished by any liability that reduced the
amount of the distribution.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Subchapter C applies | {fig:sc.subchapter_c} | IRC § 1371(a) |
| Gain on appreciated property | {fig:noncash.gain_recognized} | IRC § 311(b)(1) |
| No loss on depreciated property | {fig:noncash.no_loss} | IRC § 311(a) |
| Amount of the distribution | {fig:noncash.amount} | IRC § 301(b)(1), (b)(3) |
| Reduction for liabilities | {fig:noncash.liabilities} | IRC § 301(b)(2) |
| Liability floor on value | {fig:noncash.liability_floor} | IRC § 336(b), § 311(b)(2) |
| Shareholder's basis | {fig:noncash.shareholder_basis} | IRC § 301(d) |
| Characterisation, no earnings | {fig:dist.sc_no_ep} | IRC § 1368(b) |
| Characterisation, with earnings | {fig:sc.aaa_ordering} | IRC § 1368(c) |
| Increases to stock basis | {fig:sc.basis_increases} | IRC § 1367(a)(1) |
| Order of adjustments to the account | {fig:dist.aaa_order} | Reg. § 1.1368-2(a)(5) |

## How it works in practice

**Take the two steps in order.** The deemed sale under IRC § 311(b)(1) comes first, and its
consequences are complete before the distribution is characterised. That sequence is what makes
the arithmetic work: the gain increases stock basis under IRC § 1367(a)(1) and increases the
accumulated adjustments account under Reg. § 1.1368-2(a)(2), and only then is the distribution
measured against those larger figures under Reg. § 1.1368-2(a)(5). A candidate who characterises
the distribution first will understate basis and the account by the amount of the gain and reach
a different answer.

**The gain is real but usually costless.** In a corporation with no accumulated earnings and
profits, the deemed sale produces gain that the shareholders report, basis that rises by the same
amount, and a distribution that is then a tax-free recovery of that enlarged basis. The net effect
is a single layer of tax on the appreciation — which is the point of subchapter S. The tax is not
avoided; it is accelerated to the year of the distribution rather than the year of an eventual
sale.

**The loss disallowance has no such symmetry.** {fig:noncash.no_loss} (IRC § 311(a)). Distributing
property worth less than its basis gives the corporation no deduction, gives the shareholders no
pass-through loss, and resets the shareholder's basis in the property to the lower fair market
value under IRC § 301(d). The built-in loss is destroyed at both levels. Where the corporation
wants the loss, the answer is to sell the property to a third party and distribute the proceeds.

**Liabilities cut the amount, not the basis.** {fig:noncash.liabilities} (IRC § 301(b)(2)) reduces
what the shareholder is treated as having received, while {fig:noncash.shareholder_basis}
(IRC § 301(d)) gives them basis equal to the whole fair market value. The two are not
inconsistent: the shareholder has taken on the debt, so they have paid for the difference.

**And the liability sets a floor on value.** {fig:noncash.liability_floor} (IRC § 336(b), applied
by IRC § 311(b)(2)). Where the debt exceeds the property's worth, the corporation may not use the
real value to compute the IRC § 311(b) gain — the liability amount is substituted. This prevents
a corporation from stripping an over-encumbered asset out at no tax cost.

**Watch the built-in gains tax.** {fig:sc.built_in_gains} (IRC § 1374). A corporation still inside
its recognition period converts a IRC § 311(b) deemed sale into a recognised built-in gain, and
the entity-level tax follows. {fig:sc.entity_tax_as_loss} (IRC § 1366(f)(2)) then feeds that tax
back through the allocation.

<div class="scenario">
<h3>The warehouse distributed at a gain</h3>

Pemberton Storage Inc., an S corporation with no accumulated earnings and profits and one
shareholder, distributes a warehouse worth $500,000 with an adjusted basis of $180,000. The
shareholder's stock basis before anything happens is $260,000.

Step one is IRC § 311(b)(1): the corporation is treated as having sold the warehouse at $500,000,
recognising $320,000 of gain. That gain passes through under IRC § 1366(a) and increases her stock
basis under IRC § 1367(a)(1)(A) to $580,000. It also increases the accumulated adjustments account
by $320,000.

Step two is IRC § 1368(b). The amount of the distribution is $500,000, the fair market value of
the property. Basis of $580,000 exceeds it, so nothing is included in gross income and her basis
falls to $80,000.

She reports $320,000 of gain, characterised by the warehouse's character in the corporation's
hands, and takes the warehouse with a basis of $500,000 under IRC § 301(d). Had she instead
characterised the distribution before the deemed sale, she would have started from $260,000 of
basis and reported $240,000 of additional gain that the statute does not produce.
</div>

<div class="scenario">
<h3>The equipment distributed at a loss</h3>

Halloran Plant Co. distributes machinery worth $30,000 with an adjusted basis of $95,000 to its
sole shareholder, whose stock basis is $120,000.

IRC § 311(a) recognises nothing. The corporation gets no deduction for the $65,000 of built-in
loss and there is no pass-through item. The amount of the distribution is $30,000, which reduces
her stock basis to $90,000 under IRC § 1368(b)(1) and IRC § 1367(a)(2)(A).

Her basis in the machinery is $30,000 under IRC § 301(d) — the fair market value, not the
corporation's $95,000. So the $65,000 of loss has disappeared from the corporation and has not
appeared anywhere else.

Compare the alternative. Had the corporation sold the machinery to an unrelated buyer for $30,000
and distributed the cash, it would have recognised a $65,000 loss, passed it through, and the
shareholder would have had a deduction and the same $30,000 in hand. The two routes differ by
$65,000 of deduction and by nothing else.
</div>

<div class="scenario">
<h3>The building that came with its mortgage</h3>

Ravensworth Estates Inc. distributes a building worth $700,000, with an adjusted basis of
$450,000, subject to a mortgage of $520,000 that the shareholder takes subject to. His stock basis
is $300,000.

The deemed sale under IRC § 311(b)(1) uses the full fair market value: $700,000 less $450,000, or
$250,000 of gain. The liability does not reduce the deemed sale price, and the IRC § 336(b) floor
is not needed here because the value exceeds the debt. His stock basis rises to $550,000.

The amount of the distribution is then measured under IRC § 301(b): $700,000 reduced by the
$520,000 mortgage, or $180,000. That reduces his stock basis to $370,000, and nothing is included
in income.

His basis in the building is $700,000 under IRC § 301(d), not $180,000. He received a $700,000
asset and assumed $520,000 of debt; the fair market value basis is the correct measure of what he
holds.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>The deemed sale happens first.</strong> Compute the IRC § 311(b)(1) gain, pass it
through, and adjust basis and the accumulated adjustments account before characterising the
distribution under IRC § 1368. Reversing the two steps overstates the taxable amount.</p>

<p><strong>Losses are never recognised on a distribution.</strong> {fig:noncash.no_loss}
(IRC § 311(a)). There is no deferral and no carryover, and the shareholder's IRC § 301(d) basis
is the lower fair market value, so the loss vanishes at both levels.</p>

<p><strong>A liability reduces the amount of the distribution but not the shareholder's
basis.</strong> IRC § 301(b)(2) against IRC § 301(d). Answer choices that give the shareholder a
net-of-debt basis are wrong.</p>

<p><strong>The liability floor applies to the corporation's gain, not to the shareholder's
amount.</strong> {fig:noncash.liability_floor} (IRC § 336(b), § 311(b)(2)). It substitutes the
debt for a lower value in computing the deemed sale gain.</p>

<p><strong>A distribution of the corporation's own obligation is outside IRC § 311(b).</strong>
The parenthesis in IRC § 311(b)(1)(A) excludes "an obligation of such corporation," so a
corporation that distributes its own note recognises nothing on it.</p>
</div>

## How this has changed

The structure here is old and stable. Pub. L. 99-514 amended IRC § 311 generally in 1986,
substituting the present provisions on distributions of appreciated property for provisions that
had dealt only with LIFO inventory, liabilities in excess of basis, and appreciated property used
to redeem stock. The deemed sale rule in its current form dates from that amendment, and the only
changes since were the technical corrections made by Pub. L. 100-647 in 1988. What has changed is
the population of corporations to which it matters most: as subchapter S has absorbed more closely
held businesses, the provision is most often met not as the corporate-level tax it was designed to
impose but as a pass-through gain that lands on the shareholders' own returns and is immediately
offset by the basis increase it produces.

Two current interactions are worth stating because a reader will otherwise assume the deemed sale
is neutral. The first is the built-in gains tax of IRC § 1374, which is a genuine entity-level
tax and does bite on a IRC § 311(b) gain within the recognition period. The second is the effect
on the accumulated adjustments account: the deemed sale gain increases the account under
Reg. § 1.1368-2(a)(2) before the distribution reduces it under Reg. § 1.1368-2(a)(5)(iii), so a
corporation with accumulated earnings and profits can distribute appreciated property without
reaching the dividend tier where a cash distribution of the same value would have reached it.
That is a live planning point, and it follows entirely from the ordering.

Nothing in Pub. L. 119-21 amended IRC § 311, IRC § 301 or IRC § 1368, so the 2026 rules are the
2025 rules.

## Exam focus

Learn the sequence and say it out loud: deemed sale, pass-through, basis and account adjustment,
then characterise the distribution. Most questions in this area supply a fair market value, an
adjusted basis and a stock basis, and the whole answer is in the order of operations.

Learn the asymmetry between gain and loss. IRC § 311(b) recognises gain; IRC § 311(a) recognises
no loss. The commonest wrong answer on a depreciated-property question is a pass-through loss.

Learn what a liability does and does not do: it reduces the amount of the distribution under
IRC § 301(b)(2), it does not reduce the shareholder's basis under IRC § 301(d), and it can raise
the deemed sale price under IRC § 336(b) where it exceeds value.

Finally, remember that IRC § 1371(a) is the doorway. Questions sometimes ask why a subchapter C
provision applies to an S corporation at all; the answer is always that subchapter C applies
except as displaced, and subchapter S does not displace IRC § 311.

## Check yourself

**1.** An S corporation with no accumulated earnings and profits distributes land worth $200,000
with a basis of $75,000. The sole shareholder's stock basis is $50,000. What does she report?

*Answer: $125,000 of gain from the deemed sale under IRC § 311(b)(1), passed through under
IRC § 1366(a), which raises her stock basis to $175,000. The $200,000 distribution then exceeds
that basis by $25,000, which is gain under IRC § 1368(b)(2). She reports $125,000 plus $25,000,
and her basis in the land is $200,000 under IRC § 301(d).*

**2.** The same corporation distributes equipment worth $40,000 with a basis of $110,000. What
loss is recognised?

*Answer: None. {fig:noncash.no_loss} (IRC § 311(a)). The corporation recognises nothing, no loss
passes through, and the shareholder's basis in the equipment is $40,000 under IRC § 301(d), so
the $70,000 of built-in loss is permanently lost.*

**3.** Property worth $150,000 with a basis of $60,000 is distributed subject to a $190,000
mortgage. What gain does the corporation recognise?

*Answer: $130,000. {fig:noncash.liability_floor} (IRC § 336(b), applied by IRC § 311(b)(2)) treats
the fair market value as not less than the $190,000 liability, so the deemed sale price is
$190,000 and the gain is $190,000 less the $60,000 basis.*

**4.** A corporation with accumulated earnings and profits distributes appreciated property. Why
might that produce less dividend income than distributing the same value in cash?

*Answer: Because the IRC § 311(b)(1) gain is an item of income that increases the accumulated
adjustments account under Reg. § 1.1368-2(a)(2) before the distribution reduces it under
Reg. § 1.1368-2(a)(5)(iii). The larger account absorbs more of the distribution in the first tier
of IRC § 1368(c), leaving less to be a dividend in the second.*

**5.** An S corporation distributes its own promissory note to a shareholder. Does IRC § 311(b)
apply?

*Answer: No. IRC § 311(b)(1)(A) applies to a distribution of "property (other than an obligation
of such corporation)," so a corporation's own obligation is outside the deemed sale rule and no
gain is recognised on it.*
