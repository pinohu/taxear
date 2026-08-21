---
title: "IRC Section 351 exchange"
code: "2.1.4.b"
part: 2
domain: "Business Entities"
section: "Forming a corporation"
description: "Control is tested immediately after the exchange and measured twice — voting power and share count. Services are not property, so a service provider cannot help."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 351", title: "Transfer to corporation controlled by transferor", url: "https://www.law.cornell.edu/uscode/text/26/351" }
  - { type: IRC, ref: "§ 368(c)", title: "Control defined", url: "https://www.law.cornell.edu/uscode/text/26/368" }
  - { type: IRC, ref: "§ 358", title: "Basis to distributees", url: "https://www.law.cornell.edu/uscode/text/26/358" }
  - { type: IRC, ref: "§ 362", title: "Basis to corporations", url: "https://www.law.cornell.edu/uscode/text/26/362" }
  - { type: IRC, ref: "§ 1032", title: "Exchange of stock for property", url: "https://www.law.cornell.edu/uscode/text/26/1032" }
  - { type: IRC, ref: "§ 267", title: "Losses, expenses and interest between related taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/267" }
  - { type: IRC, ref: "§ 311", title: "Taxability of corporation on distribution", url: "https://www.law.cornell.edu/uscode/text/26/311" }
  - { type: IRC, ref: "§ 721", title: "Nonrecognition on contribution to a partnership", url: "https://www.law.cornell.edu/uscode/text/26/721" }
  - { type: IRC, ref: "§ 357", title: "Assumption of liability", url: "https://www.law.cornell.edu/uscode/text/26/357" }
forms: []
related: ["2.1.4.a", "2.1.4.c", "2.1.4.d", "2.1.1.c", "2.1.4.f"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 351(a) nonrecognition conditions, the IRC § 368(c) definition of control with its two separate 80 percent tests, the § 351(d) exclusion of services and certain indebtedness from property, the § 358(a)(1) substituted basis in the stock received, the § 362(a) transferred basis in the corporation's hands with the § 362(e)(2) cap where aggregate bases would exceed fair market value, and the § 357(a) rule that an assumed liability is not boot." }
---

Section 351 is the corporate counterpart of the partnership contribution rules, and it is deliberately
harder to satisfy. A partnership takes property tax-free from anyone at any time; a corporation does so
only where the transferors, taken together, come out of the transaction in control of it. That single
condition generates most of the difficulty, because it is tested at a moment rather than over a period,
and because two things that look like contributions — services, and the corporation's own unsecured debt
— do not count toward it.

## The rule

**The nonrecognition.** {fig:s351.nonrecognition}

**What control means.** {fig:s351.control}

**What is not property.** {fig:s351.services}

**Money or other property received.** {fig:s351.boot}

**The transferor's basis.** {fig:s351.transferor_basis}

**The corporation's basis.** {fig:s351.corporate_basis}

**Capped where the property is worth less.** {fig:s351.built_in_loss}

**Liabilities.** {fig:s351.liabilities}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Nonrecognition | {fig:s351.nonrecognition} | IRC § 351(a) |
| Control | {fig:s351.control} | IRC § 368(c) |
| Services not property | {fig:s351.services} | IRC § 351(d) |
| Boot | {fig:s351.boot} | IRC § 351(b) |
| Transferor's basis | {fig:s351.transferor_basis} | IRC § 358(a)(1) |
| Corporation's basis | {fig:s351.corporate_basis} | IRC § 362(a) |
| Built-in loss cap | {fig:s351.built_in_loss} | IRC § 362(e)(2) |

## How it works in practice

Three conditions have to hold and each is exact. Property must be transferred — not services. It must be
transferred *solely* in exchange for stock, subject to the boot rule that handles anything else. And the
transferors as a group must be in control immediately after the exchange.

The control test is two tests, not one. IRC § 368(c) requires at least eighty percent of the total combined
voting power of all voting classes *and* at least eighty percent of the total number of shares of every
other class. A group holding ninety percent of the voting stock and seventy percent of the non-voting
preferred does not have control, and the second limb is counted in shares rather than by value — one of
the few places in the Code where a raw share count decides an outcome.

"Immediately after the exchange" means what it says, and it is a group test. Several transferors acting
together are aggregated, so a person contributing a small amount of property alongside a large transferor
is inside the transaction. That is the mechanism behind the common planning step of having an existing
shareholder contribute a modest amount of property alongside a new one, so that the new transferor's
shares are counted in the control group.

The services rule in IRC § 351(d) is what makes that step necessary and it cuts two ways. A person
receiving stock for services has compensation income measured by the value of the stock, and those shares
are not treated as issued for property — so they do not count toward the eighty percent. A founder
contributing cash and a co-founder contributing only work therefore risks the whole transaction: if the
service provider's shares are large enough, the property transferors fall below control and the cash
transferor recognises gain they never expected.

Boot is handled by ceiling rather than exclusion. Under IRC § 351(b) gain is recognised up to the money
plus the fair market value of other property received, and no loss is recognised at all. The asymmetry is
deliberate and it is the same one that runs through IRC § 311 and IRC § 267: losses do not come out of
these transactions.

The basis rules keep the gain alive on both sides. The transferor takes a substituted basis in the stock —
the basis of what they gave up, adjusted for boot and recognised gain (IRC § 358(a)(1)). The corporation
takes a transferred basis in the property, increased by any gain the transferor recognised
(IRC § 362(a)). And the corporation recognises nothing on issuing its own stock, under IRC § 1032.

IRC § 362(e)(2) is the anti-duplication rule and is easy to miss. Where the aggregate bases of the
transferred property would exceed its aggregate fair market value — a net built-in loss — the corporation's
aggregate basis is capped at fair market value, with the reduction allocated across the properties in
proportion to their built-in losses. Without it, a built-in loss would exist twice: once inside the
corporation and once in the shareholder's stock basis. There is an election to reduce the transferor's
stock basis instead, which is the better answer where the shareholder expects to hold and the corporation
expects to sell.

## Scenarios

<div class="scenario">
<h3>The co-founder who only worked</h3>
<p>Ottokar contributes equipment worth $700,000 with a basis of $120,000 to a new corporation for 750
shares. Wren, who has built the prototype, receives 250 shares for her services. Nobody else holds stock.</p>
<p>Ottokar recognises $580,000 of gain. Under IRC § 351(d)(1) stock issued for services is not considered
issued in return for property, so Wren's 250 shares are outside the control group. Ottokar alone holds 750
of 1,000 shares, which is 75 percent — below the 80 percent that IRC § 368(c) requires — so IRC § 351(a)
does not apply to his transfer at all and he recognises his entire built-in gain. Wren has $250,000 of
compensation income either way. Had Wren also contributed property of more than a nominal amount, her
shares would have counted and the transaction would have qualified.</p>
</div>

<div class="scenario">
<h3>The two classes that were counted separately</h3>
<p>A group of transferors contributes property to a corporation and receives all 9,000 of its voting
common shares. The corporation has 4,000 non-voting preferred shares outstanding, held by an unrelated
investor, of which the group receives none.</p>
<p>Control fails. IRC § 368(c) requires at least 80 percent of the total combined voting power of all
classes entitled to vote — satisfied, at 100 percent — <em>and</em> at least 80 percent of the total number
of shares of all other classes. The group holds none of the 4,000 preferred shares, so the second limb is
zero percent. Both limbs must be met, and the second is counted in shares rather than by value, so the
economic significance of the preferred is beside the point. The transaction is fully taxable to every
transferor.</p>
</div>

<div class="scenario">
<h3>The cash that came with the stock</h3>
<p>Perdita transfers land worth $900,000 with a basis of $300,000 to a corporation she will control,
receiving stock worth $750,000 and $150,000 in cash.</p>
<p>She recognises $150,000 of gain. IRC § 351(b)(1) recognises gain but not in excess of the money received
plus the fair market value of other property received, and her realised gain of $600,000 exceeds the
$150,000 of boot. Her basis in the stock under IRC § 358(a)(1) is $300,000, decreased by the $150,000 of
money received and increased by the $150,000 of gain recognised — so $300,000. The corporation's basis in
the land under IRC § 362(a) is $300,000 plus the $150,000 of gain she recognised, so $450,000. The
remaining $450,000 of gain survives in both places, which is the design.</p>
</div>

<div class="scenario">
<h3>The portfolio with a net built-in loss</h3>
<p>Aurelien transfers three assets to a corporation he controls. Their aggregate adjusted basis is
$2,000,000 and their aggregate fair market value is $1,400,000, the loss sitting mostly in one of the
three.</p>
<p>The corporation's aggregate basis is capped at $1,400,000. Under IRC § 362(e)(2)(A) the transferee's
aggregate adjusted bases may not exceed the fair market value of the property immediately after the
transaction where they otherwise would, and under subparagraph (B) the $600,000 reduction is allocated
among the properties in proportion to their built-in losses — so it falls almost entirely on the one
asset. Aurelien's own stock basis is unaffected and remains $2,000,000, which means the loss survives once
rather than twice. The alternative is an election to reduce his stock basis instead and leave the
corporation with carryover basis, which is the better answer if the corporation is the one likely to sell.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Control is two tests.</strong> Eighty percent of voting power <em>and</em> eighty percent of
the shares of every other class.</li>
<li><strong>The second limb counts shares, not value.</strong> IRC § 368(c) says "total number of
shares".</li>
<li><strong>Services are not property.</strong> IRC § 351(d)(1) keeps those shares out of the control
group and gives the recipient compensation income.</li>
<li><strong>Failing control taxes everyone.</strong> The transaction does not partly qualify; every
transferor recognises their full gain.</li>
<li><strong>Boot is a ceiling on gain, and no loss is ever recognised.</strong> IRC § 351(b)(2).</li>
<li><strong>Basis is preserved twice.</strong> Substituted in the stock, transferred in the property —
which is why IRC § 362(e)(2) exists to stop a built-in <em>loss</em> being duplicated.</li>
<li><strong>Liabilities are not boot.</strong> IRC § 357(a), subject to the tax avoidance and
excess-liability rules.</li>
</ul>
</div>

## How this has changed

IRC § 351 itself has been stable for a very long time. Its conditions, the definition of control it borrows
from IRC § 368(c), and the boot rule in subsection (b) are all as they have stood for decades.

The anti-duplication rule in IRC § 362(e)(2) is the meaningful addition, enacted in 2004. Before it, a
transferor could contribute property with a built-in loss to a controlled corporation and the loss would
exist in two places at once — inside the corporation on its transferred basis, and outside it in the
shareholder's substituted stock basis — so it could be recognised twice by selling first the property and
then the stock. The cap closed that, and the accompanying election to reduce stock basis instead gives the
parties a choice about where the single remaining loss sits. Material written before 2005 describes a
symmetrical carryover basis rule with no cap, which for a net built-in loss is no longer right.

The IRC § 351(e) exception for transfers to an investment company has the same purpose as its partnership
counterpart in IRC § 721(b) and has been in place throughout: a group of holders of different securities
cannot achieve diversification tax-free by dropping them into a common corporation.

## Exam focus

The control question is the reliable one. Compute the property transferors' holding immediately after the
exchange, exclude any shares issued for services, and test it against both limbs of IRC § 368(c).
Questions often set the figure at seventy-five or seventy-nine percent and offer nonrecognition as a
distractor.

The second reliable shape gives boot and asks for gain and basis. Gain is the lesser of realised gain and
boot. Stock basis is old basis, less money and other property received, plus gain recognised. Corporate
basis is old basis plus gain recognised. Working the three together is where the marks are.

Where a question mentions a service provider, check whether their shares are needed to reach control
before treating the transaction as qualifying — and remember they have compensation income regardless.

## Check yourself

**1.** Two people transfer property to a new corporation and receive 78 percent of its single class of
voting stock; the remaining 22 percent goes to a third person for services. Does IRC § 351(a) apply?

*Answer: no. IRC § 351(d)(1) provides that stock issued for services is not considered issued in return
for property, so the service provider's shares are outside the control group. The property transferors
hold 78 percent, below the 80 percent required by IRC § 368(c), and both property transferors recognise
their realised gain in full.*

**2.** A group receives all of a corporation's voting common but none of its outstanding non-voting
preferred. Is the control test satisfied?

*Answer: no. IRC § 368(c) requires at least 80 percent of the total combined voting power of all classes
entitled to vote and at least 80 percent of the total number of shares of all other classes. The first
limb is met and the second is not, and both are required. The second limb is measured in shares rather
than by value.*

**3.** A transferor with property worth $500,000 and a basis of $180,000 receives stock worth $440,000 and
$60,000 of cash in a qualifying exchange. What gain is recognised, and what is the stock basis?

*Answer: $60,000 of gain, and a stock basis of $180,000. Under IRC § 351(b)(1) gain is recognised but not
in excess of the money received, and the realised gain of $320,000 exceeds it. Under IRC § 358(a)(1) the
stock basis is the $180,000 old basis, decreased by the $60,000 of money received and increased by the
$60,000 of gain recognised.*

**4.** On the same facts, what is the corporation's basis in the property?

*Answer: $240,000. IRC § 362(a) gives the corporation the transferor's basis, increased by the gain
recognised to the transferor on the transfer — $180,000 plus $60,000. The corporation recognises nothing
on issuing its own stock under IRC § 1032.*

**5.** A transferor contributes assets with an aggregate basis of $900,000 and an aggregate fair market
value of $600,000 to a controlled corporation. What basis does the corporation take?

*Answer: $600,000. Under IRC § 362(e)(2)(A) the transferee's aggregate adjusted bases in property
transferred in a IRC § 351 transaction may not exceed its fair market value immediately after the
transaction, and the $300,000 reduction is allocated among the properties in proportion to their built-in
losses. The alternative is an election to reduce the transferor's stock basis instead.*
