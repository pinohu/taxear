---
title: "Transfer of property in or out of the business (e.g., contributed property, distributions)"
code: "2.2.5.h"
part: 2
domain: "Business Tax Preparation"
section: "Advising the business taxpayer"
description: "Property goes into a partnership more easily than into a corporation and comes out of one far more easily, which is the asymmetry that decides most of these questions."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 311", title: "Taxability of corporation on distribution", url: "https://www.law.cornell.edu/uscode/text/26/311" }
  - { type: IRC, ref: "§ 351", title: "Transfer to corporation controlled by transferor", url: "https://www.law.cornell.edu/uscode/text/26/351" }
  - { type: IRC, ref: "§ 357", title: "Assumption of liability", url: "https://www.law.cornell.edu/uscode/text/26/357" }
  - { type: IRC, ref: "§ 362", title: "Basis to corporations", url: "https://www.law.cornell.edu/uscode/text/26/362" }
  - { type: IRC, ref: "§ 368", title: "Definitions relating to corporate reorganizations", url: "https://www.law.cornell.edu/uscode/text/26/368" }
  - { type: IRC, ref: "§ 704", title: "Partner's distributive share", url: "https://www.law.cornell.edu/uscode/text/26/704" }
  - { type: IRC, ref: "§ 721", title: "Nonrecognition of gain or loss on contribution", url: "https://www.law.cornell.edu/uscode/text/26/721" }
  - { type: IRC, ref: "§ 723", title: "Basis of property contributed to partnership", url: "https://www.law.cornell.edu/uscode/text/26/723" }
  - { type: IRC, ref: "§ 731", title: "Extent of recognition of gain or loss on distribution", url: "https://www.law.cornell.edu/uscode/text/26/731" }
  - { type: IRC, ref: "§ 732", title: "Basis of distributed property other than money", url: "https://www.law.cornell.edu/uscode/text/26/732" }
  - { type: IRC, ref: "§ 752", title: "Treatment of certain liabilities", url: "https://www.law.cornell.edu/uscode/text/26/752" }
  - { type: IRC, ref: "§ 301", title: "Distributions of property", url: "https://www.law.cornell.edu/uscode/text/26/301" }
forms: []
related: ["2.2.5.e", "2.2.5.d", "2.2.5.i", "2.2.4.i", "2.2.3.a"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out IRC § 351 with its control requirement, boot rule and the IRC § 357(c) trap where liabilities exceed basis, against IRC § 721 with neither a control requirement nor a time limit; the carryover basis rules in IRC §§ 362 and 723; the IRC § 704(c) allocation of built-in gain and its seven-year distribution rule; and the exit asymmetry between IRC § 311(b) corporate gain recognition and the IRC §§ 731 and 732 partnership rules." }
---

Two questions decide every transfer: is there recognition now, and where does the built-in gain go.
The corporate and partnership answers differ at both ends, and the difference is much larger on the
way out than on the way in — which is why a structure chosen for its formation treatment often turns
out to have been chosen for the wrong reason.

## The rule

**Into a corporation.** {fig:xfer.351} (IRC § 351(a)), with {fig:xfer.351_boot}
(IRC § 351(b)). The corporation's basis: {fig:xfer.362} (IRC § 362(a)). And the trap that catches
real estate: {fig:xfer.357c} (IRC § 357(c)(1)).

**Into a partnership.** {fig:xfer.721} (IRC § 721(a)), with the partnership's basis
{fig:xfer.723} (IRC § 723). Notice the two requirements § 351 imposes that § 721 does not — control
immediately after, and the transfer being solely for stock.

**Where the built-in gain goes.** In a corporation it is simply in the corporation's basis and
surfaces when the corporation sells. In a partnership it is tracked to the contributor:
{fig:xfer.704c} (IRC § 704(c)(1)(A)), with an anti-abuse rule —
{fig:xfer.704c_seven} (IRC § 704(c)(1)(B)).

**Out of a corporation.** {fig:xfer.311b} (IRC § 311(a) and (b)(1)), and the shareholder is then
taxed on the distribution under IRC § 301(c) — {fig:rpt.constructive_dividend}. Two levels of tax on
one movement of property.

**Out of a partnership.** {fig:xfer.731} (IRC § 731(a)), with basis under
{fig:xfer.732} (IRC § 732(a)). No entity-level gain at all.

**And liabilities move basis in a partnership.** An increase in a partner's share of partnership
liabilities is a contribution of money under IRC § 752(a), a decrease is a distribution under
§ 752(b) — so encumbered property changes outside basis in both directions.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Into a corporation | {fig:xfer.351} | IRC § 351(a) |
| Liabilities over basis | {fig:xfer.357c} | IRC § 357(c)(1) |
| Into a partnership | {fig:xfer.721} | IRC § 721(a) |
| Built-in gain tracked | {fig:xfer.704c} | IRC § 704(c)(1)(A) |
| Seven-year rule | {fig:xfer.704c_seven} | IRC § 704(c)(1)(B) |
| Out of a corporation | {fig:xfer.311b} | IRC § 311(b)(1) |
| Out of a partnership | {fig:xfer.731} | IRC § 731(a) |

## How it works in practice

**On the way in, the corporate rule has conditions the partnership rule does not.** IRC § 721 asks
only that property be contributed for an interest. IRC § 351 asks additionally that the transfer be
solely for stock and that the transferors control the corporation immediately afterwards. A later
contribution by an existing minority shareholder therefore fails § 351 unless it is part of a larger
transaction that satisfies control, while the same contribution to a partnership is
straightforwardly non-recognition.

**Check basis against liabilities before contributing real property to a corporation.** IRC § 357(c)
recognises gain to the extent assumed liabilities exceed the total adjusted basis of the property
transferred, and depreciated real property with a refinanced mortgage is exactly the fact pattern
that produces it. There is no cash, no boot and no economic gain — and there is tax. A partnership
contribution has no equivalent, because IRC § 752 puts the liability into outside basis instead.

**The built-in gain is the real question, and the two regimes answer it differently.** A corporation
absorbs it: the property has a carryover basis and whoever bears the tax when it is sold is decided
by who owns the stock then. A partnership tracks it: IRC § 704(c)(1)(A) requires income, gain, loss
and deduction on contributed property to be allocated so as to take account of the variation at
contribution, so the contributor bears their own gain however the interests later change.

**Do not distribute appreciated property out of a corporation without pricing it.** IRC § 311(b)
recognises gain at the corporate level as if the property had been sold at fair market value, and
the shareholder is then taxed on the distribution. IRC § 311(a) denies the corporation a loss on
depreciated property, so the rule is one-way. A partnership distribution triggers no entity-level
gain at all and no partner-level gain unless money exceeds outside basis.

**Watch the seven-year window.** Distributing contributed property to a partner other than the
contributor within seven years accelerates the contributor's built-in gain under
IRC § 704(c)(1)(B), as though the property had been sold. This catches partnerships that reshuffle
assets among partners for perfectly ordinary commercial reasons, and it is easy to miss because
nothing has been sold and no cash has moved.

**Property is much easier to get out of a partnership than out of a corporation.** That asymmetry is
the single most useful planning point here. A business expecting to hold appreciating property and
later move it to the owners should think hard before putting it inside a corporation, because
IRC § 311(b) makes the exit expensive and nothing undoes it short of liquidation, which is worse.

## Scenarios

<div class="scenario">
<h3>The mortgage that produced gain</h3>

An owner contributes a rental building to a newly formed corporation in exchange for all its stock.
The building's adjusted basis is $310,000 after years of depreciation; it is subject to a mortgage
of $460,000 the corporation assumes.

IRC § 351 would apply — property, solely for stock, control immediately afterwards — but
IRC § 357(c)(1) recognises gain to the extent the liabilities assumed exceed the total adjusted
basis of the property transferred. That is $150,000 of gain, recognised on a transaction in which
the owner received no cash, no boot and no economic benefit at all.

Contributing the same building to a partnership produces nothing. IRC § 721(a) applies without any
liabilities exception, and IRC § 752 handles the mortgage by adjusting outside basis: the owner is
treated as having received a distribution of the share of the liability assumed by others and as
having contributed the share they bear. The corporate route taxes a refinancing that the partnership
route does not.
</div>

<div class="scenario">
<h3>The gain that stayed with its owner</h3>

Two partners form a partnership. One contributes cash of $500,000; the other contributes land with a
basis of $120,000 and a value of $500,000. Three years later the partnership sells the land for
$560,000.

The $380,000 of gain built in at contribution belongs to the contributor. IRC § 704(c)(1)(A)
requires income, gain, loss and deduction on contributed property to be shared so as to take account
of the variation between the partnership's basis and the property's value at contribution — so the
contributing partner is allocated the $380,000, and only the $60,000 of post-contribution
appreciation is split.

A corporation would answer differently. Under IRC § 362(a) the corporation takes the $120,000 basis
and the whole $440,000 gain is corporate income, borne by the shareholders in proportion to their
stock whoever contributed what. That is a materially different economic result from identical
facts, and it is a formation-stage decision.
</div>

<div class="scenario">
<h3>The building the company handed back</h3>

Trenance Foods, a C corporation, holds a warehouse with a basis of $400,000 and a value of
$1,100,000. Its shareholders want the warehouse held personally and the company to lease it back.

Distributing it costs twice. IRC § 311(b)(1) recognises $700,000 of gain to the corporation as if
the warehouse had been sold to the shareholders at fair market value, and IRC § 301(c) then taxes
the shareholders on a distribution measured by the warehouse's fair market value — a dividend to the
extent of earnings and profits, which the § 311(b) gain has just increased.

The same movement out of a partnership produces no entity-level gain under IRC § 731(a) and no
partner-level gain unless money distributed exceeds outside basis, with the property taking a basis
under IRC § 732(a). This is the clearest illustration of why the exit belongs in the entity decision:
the tax on getting the warehouse out is set by a choice made before the warehouse was bought.
</div>

## Traps

<div class="callout trap">

**IRC § 351 has two requirements IRC § 721 does not** — the transfer must be solely for stock, and
the transferors must control the corporation immediately afterwards. A contribution by an existing
minority shareholder fails on control; the same contribution to a partnership does not.

</div>

<div class="callout trap">

**IRC § 357(c) produces gain without cash.** Liabilities assumed in excess of the aggregate adjusted
basis of the property transferred are gain, so depreciated property with a refinanced mortgage is
taxable on contribution to a corporation and not on contribution to a partnership.

</div>

<div class="callout trap">

**IRC § 311 is one-way.** Gain is recognised on distributing appreciated property as if it were
sold; loss is not recognised on distributing depreciated property. Distributing a loss asset to
harvest the loss does not work.

</div>

<div class="callout trap">

**The IRC § 704(c)(1)(B) seven-year rule triggers on a distribution to *another* partner.** Nothing
is sold and no cash moves, so it is easy to miss when a partnership reallocates assets among its
partners for commercial reasons.

</div>

## How this has changed

The architecture is old and stable. IRC § 351 and § 721 date from the 1954 Code in substantially
their present form, and the divergence between them — control and solely-for-stock on the corporate
side, neither on the partnership side — has been there throughout.

The IRC § 704(c) rules have hardened. The remedial and traditional-with-curative allocation methods
were regularised by regulation in 1993, and the anti-abuse rule in § 704(c)(1)(B) was extended from
five years to seven for property contributed after 2 June 1997, which is the figure a candidate
should carry. Material quoting five years is describing pre-1997 law.

IRC § 311(b) is itself a change: before the repeal of the *General Utilities* doctrine in 1986 a
corporation could generally distribute appreciated property without recognising gain, which is why
older planning literature treats a corporate distribution of property as unremarkable. It has not
been unremarkable for forty years.

Nothing in the post-2024 legislation alters IRC §§ 351, 357, 362, 704(c), 721, 723, 731 or 732. The
indirect effect runs through basis: with bonus depreciation permanent at the full statutory rate,
property contributed to an entity is far more likely to carry a basis near zero, which makes
IRC § 357(c) easier to trigger and IRC § 704(c) allocations larger.

## Exam focus

Know the two additional IRC § 351 requirements by name, and that IRC § 721 has neither. Expect a
question in which an existing shareholder contributes property and the answer turns on control.

Know IRC § 357(c) precisely: liabilities assumed in excess of the aggregate adjusted basis of the
property transferred, treated as gain from the sale of the property. It is the most tested trap in
this area.

Keep the two basis provisions straight — IRC § 362(a) for the corporation, IRC § 723 for the
partnership — and note that both are carryover with an increase for gain recognised.

For IRC § 704(c), state the principle as an allocation requirement rather than a rate rule, and know
the seven-year window and that it is triggered by a distribution to a partner other than the
contributor.

Finally, contrast the exits. IRC § 311(b) recognises corporate gain on distributing appreciated
property and IRC § 311(a) denies loss; IRC § 731(a) recognises partner gain only where money exceeds
outside basis, and no entity gain at all.

## Check yourself

**1.** A person already owning 30 percent of a corporation contributes equipment worth $200,000 with
a basis of $80,000 in exchange for additional shares, after which they own 45 percent. Is the
transfer tax-free?

*Answer: No. IRC § 351(a) requires that the transferors be in control — within IRC § 368(c), at
least 80 percent of the voting power and of each other class — immediately after the exchange, and
45 percent is not control. The transferor recognises $120,000 of gain and the corporation takes a
cost basis. Had the same property been contributed to a partnership, IRC § 721(a) would have applied
with no control requirement at all, and the partnership would have taken the $80,000 carryover basis
under IRC § 723.*

**2.** A sole shareholder contributes land with a basis of $50,000 subject to a $180,000 mortgage to
a corporation in a transaction that otherwise qualifies under IRC § 351. What is recognised?

*Answer: $130,000 of gain, under IRC § 357(c)(1), being the excess of the liabilities assumed over
the total adjusted basis of the property transferred. The transaction still qualifies under
IRC § 351 — the excess is treated as gain from the sale of the property rather than disqualifying
the exchange — and the corporation's basis under IRC § 362(a) is the carryover basis increased by
the gain recognised. No cash changed hands and there was no boot.*

**3.** A partnership distributes property contributed six years earlier to a partner other than the
contributor. What happens?

*Answer: The contributing partner is treated as recognising the gain or loss that IRC § 704(c)(1)(A)
would have allocated on the variation had the property been sold at fair market value, under
IRC § 704(c)(1)(B), because the distribution occurred within seven years of the contribution. Nothing
has been sold and the contributor has received nothing, which is why the rule is missed. The
distributee's basis in the property and the contributor's outside basis are adjusted to prevent the
gain being counted twice.*

**4.** A C corporation distributes land worth $600,000 with a basis of $900,000 to its shareholder.
What does the corporation recognise?

*Answer: Nothing. IRC § 311(a) provides that no gain or loss is recognised to a corporation on a
distribution of property with respect to its stock, and § 311(b) creates an exception only for
appreciated property — where fair market value exceeds adjusted basis. Here the property is
depreciated, so the exception does not apply and the $300,000 loss is not recognised. The
shareholder takes the property at its fair market value and is taxed under IRC § 301(c) on that
amount, so the loss disappears entirely.*

**5.** Why does the entity choice matter more for property that will be held and later distributed
than for property that will be sold by the business?

*Answer: Because the exit rules diverge sharply while the sale rules do not. If the business sells
the property, both regimes recognise gain — one at the entity level and one allocated to the owners,
but the tax is triggered by an event that produces cash. If the property is distributed to the
owners instead, a corporation recognises gain under IRC § 311(b) as though it had sold at fair market
value and the shareholder is taxed again under IRC § 301(c), all without any cash arising; a
partnership recognises nothing under IRC § 731(a) and the property carries a basis under
IRC § 732(a). The choice made at formation therefore prices a transaction that may not happen for
twenty years.*
