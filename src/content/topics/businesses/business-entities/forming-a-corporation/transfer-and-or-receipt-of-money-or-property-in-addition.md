---
title: "Transfer and/or receipt of money or property in addition to corporate stock"
code: "2.1.4.c"
part: 2
domain: "Business Entities"
section: "Forming a corporation"
description: "Boot is a ceiling on gain, never a trigger for loss, and each asset is tested on its own. The holding period of the stock reaches back into the property given up."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 351(b)", title: "Receipt of property", url: "https://www.law.cornell.edu/uscode/text/26/351" }
  - { type: IRC, ref: "§ 358", title: "Basis to distributees", url: "https://www.law.cornell.edu/uscode/text/26/358" }
  - { type: IRC, ref: "§ 362(a)", title: "Basis to corporations", url: "https://www.law.cornell.edu/uscode/text/26/362" }
  - { type: IRC, ref: "§ 1223", title: "Holding period of property", url: "https://www.law.cornell.edu/uscode/text/26/1223" }
  - { type: IRC, ref: "§ 1032", title: "Exchange of stock for property", url: "https://www.law.cornell.edu/uscode/text/26/1032" }
  - { type: IRC, ref: "§ 1031", title: "Exchange of real property held for productive use or investment", url: "https://www.law.cornell.edu/uscode/text/26/1031" }
  - { type: IRC, ref: "§ 1231", title: "Property used in the trade or business and involuntary conversions", url: "https://www.law.cornell.edu/uscode/text/26/1231" }
  - { type: IRC, ref: "§ 362(e)(2)", title: "Limitation on transfer of built-in losses", url: "https://www.law.cornell.edu/uscode/text/26/362" }
  - { type: IRC, ref: "§ 368(c)", title: "Control defined", url: "https://www.law.cornell.edu/uscode/text/26/368" }
forms: []
related: ["2.1.4.b", "2.1.4.a", "2.1.4.d", "2.1.1.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 351(b) recognition of gain up to the money and fair market value of other property received with no recognition of loss, the § 358(a)(1) computation of stock basis through boot and recognised gain, the § 362(a) increase in the corporation's basis by the gain recognised, and the § 1223(1) and (2) holding period rules under which the shareholder tacks the holding period of the property given up and the corporation tacks the transferor's." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, typed scenarios, and glossary marks." }
---

<div class="plain-terms">
When you trade property for stock in a corporation, the trade is normally tax-free. This page
covers what happens if you also get cash or other property along with the stock — extra value
often called boot. It affects anyone forming or adding to a corporation who takes back more than
just stock, such as cash used to balance out unequal contributions among founders. It does not
change anything for a trade where only stock changes hands. Getting boot makes part of the gain
taxable right away, but only up to the value of the boot received, never more. A loss is never
allowed, no matter how much boot is involved. The basis in the new stock, and the basis the
corporation takes in the property, both shift to reflect what was taxed and what was received.
</div>

Boot is what turns a clean IRC § 351 exchange into an arithmetic problem. Nothing about it disqualifies
the transaction — the exchange still qualifies, control is still tested the same way — but the transferor
recognises gain, and three separate figures then move: the gain recognised, the basis of the stock, and
the basis the corporation takes in the property. Getting one of them right does not get the others right,
and the errors compound because each feeds the next.

## The rule

**Gain, capped.** {fig:s351.boot}

**The transferor's basis.** {fig:s351.transferor_basis}

**The corporation's basis.** {fig:s351.corporate_basis}

**The shareholder's holding period.** {fig:boot.holding_period_stock}

**And the corporation's.** {fig:boot.holding_period_corporation}

**Nothing to the corporation on its own stock.** A corporation recognises no gain or loss on the receipt
of money or other property in exchange for its own stock, including treasury stock (IRC § 1032(a)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Gain ceiling | {fig:s351.boot} | IRC § 351(b) |
| Stock basis | {fig:s351.transferor_basis} | IRC § 358(a)(1) |
| Corporation's basis | {fig:s351.corporate_basis} | IRC § 362(a) |
| Shareholder holding period | {fig:boot.holding_period_stock} | IRC § 1223(1) |
| Corporation holding period | {fig:boot.holding_period_corporation} | IRC § 1223(2) |

## How it works in practice

Work the three figures in a fixed order and the arithmetic falls out.

**Gain recognised** is the lesser of realised gain and boot received. Realised gain is the total value
received — stock plus money plus other property — less the basis of what was given up. Boot is the money
plus the fair market value of the other property. Whichever is smaller is what is recognised. Where
realised gain is the smaller, some boot escapes tax; where boot is the smaller, some gain is deferred.

**No loss, ever.** IRC § 351(b)(2) is absolute: a transferor with a realised loss recognises nothing, and
receiving boot does not change that. This is the trap that catches people who reason by analogy from
IRC § 1031, where the same asymmetry exists but is less often the point. Property with a built-in loss
should generally be sold rather than contributed — the loss is otherwise locked into two bases and, since
2004, capped in the corporation's hands by IRC § 362(e)(2).

**Stock basis** runs from the property given up: old basis, minus the money and the fair market value of
other property received, minus any loss recognised, plus any gain recognised and any amount treated as a
dividend. The mnemonic that makes it stick is that basis follows the tax — anything the transferor was
taxed on adds to basis, anything they took out reduces it.

**Corporate basis** is the transferor's old basis plus the gain the transferor recognised. Note that it is
*not* increased by the boot the corporation paid out. That asymmetry is deliberate: the corporation has
given up cash, and the property's basis reflects what was preserved rather than what was spent.

The result of the two basis rules together is that the deferred gain survives in two places. Whatever the
transferor realised and did not recognise remains — once in the stock basis being lower than the stock's
value, and once in the property's basis being lower than its value.
That duplication is the price of nonrecognition and it is the same design as in subchapter K.

**Multiple assets.** Where a transferor contributes more than one asset and receives boot, the analysis is
done asset by asset. Boot is allocated among the assets in proportion to their relative fair market
values, and gain is computed separately on each. That matters because an asset with a built-in loss
cannot absorb boot allocated to it — the loss is not recognised and the boot allocated to that asset
produces nothing — while an asset with a built-in gain recognises up to its share. A transferor
contributing one appreciated and one depreciated asset therefore recognises more gain than a net
computation would suggest.

**Holding period.** The stock takes the holding period of the property given up, provided that property
was a capital asset or IRC § 1231 property in the transferor's hands (IRC § 1223(1)). Contributing
inventory or a receivable therefore starts a fresh holding period in the stock, because the tacking rule
requires the exchanged property to have been of the right character. On the other side, the corporation
tacks the transferor's holding period in the property under IRC § 1223(2), because it takes a basis
determined by reference to the transferor's.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The three figures from one set of facts</h3>
<p>Ludovica transfers land worth $800,000 with an adjusted basis of $290,000 to a corporation she will
control, receiving stock worth $650,000 and $150,000 in cash.</p>
<p>Realised gain is $510,000 — $800,000 received less $290,000 basis. Boot is $150,000. Gain recognised is
the lesser, so $150,000 (IRC § 351(b)(1)). Her stock {gloss:basis} is $290,000, less the $150,000 of money
received, plus the $150,000 of gain recognised, so $290,000 (IRC § 358(a)(1)). The corporation's basis in
the land is $290,000 plus the $150,000 of gain she recognised, so $440,000 (IRC § 362(a)). The $360,000 of
gain still deferred sits in both places: her stock is worth $650,000 against a $290,000 basis, and the land
is worth $800,000 against a $440,000 basis.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The realised gain smaller than the boot</h3>
<p>Anselmo transfers equipment worth $400,000 with an adjusted basis of $370,000, receiving stock worth
$250,000 and $150,000 in cash.</p>
<p>Realised gain is $30,000 and {gloss:boot} is $150,000, so the gain recognised is $30,000 — the lesser of
the two under IRC § 351(b)(1). $120,000 of the cash is received tax-free, because there was no more gain to
recognise. His stock basis is $370,000 less $150,000 plus $30,000, so $250,000, which equals the value of
the stock — correctly, since all his gain has now been recognised. The corporation's basis is $370,000
plus $30,000, so $400,000, the property's full value. Nothing is deferred on either side, which is what
you should expect when the whole realised gain has been taxed.</p>
</div>

<div class="scenario" data-type="fails">
<h3>The loss that boot did not unlock</h3>
<p>Xiomara transfers a building worth $500,000 with an adjusted basis of $720,000, receiving stock worth
$400,000 and $100,000 in cash, in an exchange that otherwise qualifies.</p>
<p>She recognises nothing. IRC § 351(b)(2) provides that no loss is recognised to the recipient, and the
receipt of boot does not alter that — the subsection recognises gain up to boot and is silent as to loss
by design. Her stock basis is $720,000 less the $100,000 of money received, so $620,000, against stock
worth $400,000: the $220,000 loss is preserved in her stock. The corporation's basis would be $720,000
under IRC § 362(a), but because the transferred property carries a net built-in loss, IRC § 362(e)(2) caps
its aggregate basis at the $500,000 fair market value. She should have sold the building, recognised the
$220,000 loss, and contributed the proceeds.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>Two assets, one gain, one loss</h3>
<p>Casimir transfers two assets to a corporation he will control: shares worth $300,000 with a basis of
$100,000, and equipment worth $300,000 with a basis of $450,000. He receives stock worth $500,000 and
$100,000 in cash.</p>
<p>The boot is allocated between the assets by relative fair market value — $50,000 to each, the values
being equal. On the shares, realised gain is $200,000 and the allocated boot is $50,000, so he recognises
$50,000. On the equipment, there is a realised loss of $150,000 and IRC § 351(b)(2) recognises no loss, so
the $50,000 of boot allocated to it produces nothing. Total gain recognised is $50,000. A net computation
— $600,000 received against $550,000 of combined basis, giving $50,000 of net realised gain — happens to
reach the same figure here, but it does so by accident; had the appreciated asset been larger, the
asset-by-asset method would have produced more.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Gain is the lesser of realised gain and boot.</strong> Not the boot, and not the realised
gain.</li>
<li><strong>No loss, whatever the boot.</strong> IRC § 351(b)(2) is unqualified.</li>
<li><strong>Stock basis follows the tax.</strong> Down by what was received, up by what was recognised.</li>
<li><strong>Corporate basis rises by the gain, not by the boot.</strong> IRC § 362(a) increases it only by
the gain recognised to the transferor.</li>
<li><strong>Boot is allocated asset by asset.</strong> A built-in loss asset cannot absorb its share, so
the total recognised can exceed the net realised gain.</li>
<li><strong>Tacking needs the right character.</strong> IRC § 1223(1) tacks only where the property given
up was a capital asset or IRC § 1231 property.</li>
<li><strong>The corporation recognises nothing.</strong> IRC § 1032(a), on its own stock, including
treasury stock.</li>
</ul>
</div>

## How this has changed

The boot rules in IRC § 351(b) and the basis rules in IRC §§ 358 and 362(a) have been stable for decades
and have not been amended in a way that affects this topic.

What has changed around them is IRC § 362(e)(2), enacted in 2004, which caps the corporation's aggregate
basis at fair market value where the transferred property carries a net built-in loss. Before it, the
combination of IRC §§ 358 and 362(a) preserved a built-in loss in two places with no limit, so the same
economic loss could be recognised twice — by the corporation on selling the property and by the
shareholder on selling the stock. The cap closed the corporate side, with an election to reduce the
shareholder's stock basis instead.

The practical consequence for this topic is that the symmetry between the two basis rules, which used to
be exact, now holds only for property with a net built-in gain. For property with a net built-in loss the
two sides no longer mirror each other, and material describing IRC §§ 358 and 362 as a matched pair
without qualification is describing the position before 2005.

## Exam focus

Almost every question here is the same computation with different numbers, and the marks are in doing it
in order: realised gain, boot, gain recognised as the lesser of the two, then stock basis, then corporate
basis. Write the three figures out rather than trying to reach the answer directly.

Distractors are predictable. The full boot offered as the gain, where realised gain is smaller. The
realised gain offered, where boot is smaller. And the corporation's basis offered as the transferor's
basis plus the boot rather than plus the gain.

Where a question describes a realised loss, the answer is nil recognised — check whether any option offers
a loss, because that option is always wrong.

## Check yourself

**1.** A transferor gives property worth $600,000 with a basis of $200,000 and receives stock worth
$500,000 and $100,000 of cash. What gain is recognised?

*Answer: $100,000. Realised gain is $400,000 and boot is $100,000; IRC § 351(b)(1) recognises gain but not
in excess of the money received plus the fair market value of other property received, so the lesser
figure governs.*

**2.** On the same facts, what is the transferor's basis in the stock and the corporation's basis in the
property?

*Answer: $200,000 and $300,000. Under IRC § 358(a)(1) stock basis is the $200,000 old basis, decreased by
the $100,000 of money received and increased by the $100,000 of gain recognised. Under IRC § 362(a) the
corporation takes the $200,000 transferred basis increased by the $100,000 of gain recognised to the
transferor.*

**3.** A transferor gives property worth $250,000 with a basis of $230,000 and receives stock worth
$180,000 and $70,000 of cash. What gain is recognised?

*Answer: $20,000. Realised gain is $20,000 and boot is $70,000, and IRC § 351(b)(1) caps recognition at
the lesser. $50,000 of the cash is received without tax because no further gain exists to recognise.*

**4.** A transferor gives property worth $300,000 with a basis of $410,000 and receives stock worth
$260,000 and $40,000 of cash. What is recognised?

*Answer: nothing. IRC § 351(b)(2) provides that no loss is recognised to the recipient, and receiving boot
does not change that. The $110,000 loss is preserved in the stock basis, which is $410,000 less the
$40,000 of money received, so $370,000 — against stock worth $260,000.*

**5.** A transferor contributes shares held for six years and receives stock in the corporation. What is
the holding period of the stock received?

*Answer: it includes the six years. IRC § 1223(1) includes the period for which the property exchanged was
held where the property received takes the same basis in whole or in part, provided the property exchanged
was a capital asset or IRC § 1231 property at the time of the exchange. Shares held as an investment
qualify; inventory would not, and the stock's holding period would then begin afresh.*
