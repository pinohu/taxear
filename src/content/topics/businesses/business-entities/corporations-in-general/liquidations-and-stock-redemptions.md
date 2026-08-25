---
title: "Liquidations and stock redemptions"
code: "2.1.3.e"
part: 2
domain: "Business Entities"
section: "Corporations in general"
description: "A redemption is a dividend unless it clears one of five tests, and the shareholder is treated as owning their family's stock while working out whether it does."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 302", title: "Distributions in redemption of stock", url: "https://www.law.cornell.edu/uscode/text/26/302" }
  - { type: IRC, ref: "§ 318", title: "Constructive ownership of stock", url: "https://www.law.cornell.edu/uscode/text/26/318" }
  - { type: IRC, ref: "§ 331", title: "Gain or loss to shareholders in corporate liquidations", url: "https://www.law.cornell.edu/uscode/text/26/331" }
  - { type: IRC, ref: "§ 332", title: "Complete liquidations of subsidiaries", url: "https://www.law.cornell.edu/uscode/text/26/332" }
  - { type: IRC, ref: "§ 334", title: "Basis of property received in liquidations", url: "https://www.law.cornell.edu/uscode/text/26/334" }
  - { type: IRC, ref: "§ 336", title: "Gain or loss recognized on property distributed in complete liquidation", url: "https://www.law.cornell.edu/uscode/text/26/336" }
  - { type: IRC, ref: "§ 337", title: "Nonrecognition for property distributed to parent in liquidation of subsidiary", url: "https://www.law.cornell.edu/uscode/text/26/337" }
  - { type: IRC, ref: "§ 346", title: "Definition and special rule", url: "https://www.law.cornell.edu/uscode/text/26/346" }
  - { type: IRC, ref: "§ 301", title: "Distributions of property", url: "https://www.law.cornell.edu/uscode/text/26/301" }
  - { type: IRC, ref: "§ 311", title: "Taxability of corporation on distribution", url: "https://www.law.cornell.edu/uscode/text/26/311" }
  - { type: IRC, ref: "§ 1504(a)(2)", title: "Affiliated group; 80-percent voting and value test", url: "https://www.law.cornell.edu/uscode/text/26/1504" }
forms: []
related: ["2.1.3.c", "2.1.3.b", "2.1.3.a", "2.1.3.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 302(a) exchange treatment conditional on one of the five § 302(b) tests, the § 302(b)(1) meaningful reduction test, the § 302(b)(2) substantially disproportionate test with its two 80 percent ratios and 50 percent voting limitation, the § 302(b)(3) complete termination with the § 302(c)(2) family attribution waiver and its ten-year condition, the § 318(a) attribution rules that decide most redemption questions, and on the liquidation side the § 331 and § 336 double recognition, the § 334(a) fair market value basis, and the § 332 and § 337 nonrecognition for a subsidiary liquidating into an 80-percent distributee." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios." }
---

<div class="plain-terms">
This topic covers what happens, tax-wise, when a company buys back its own stock from an owner. It also
covers what happens when a company shuts down and hands out everything it owns. It affects the owners of a
company and the company itself. The answer often turns on family ties an owner might not think mattered.
It decides whether a stock buyback is taxed gently, like a sale, or harshly, like a dividend. It also
decides whether closing the business triggers one round of tax or two. An owner whose family still holds
stock afterward is often treated as still holding it too.
</div>

A {gloss:stock-redemption} looks like a sale and the Code starts from the opposite assumption. A corporation buying back
its own stock is, by default, distributing its earnings — so IRC § 301 applies and the shareholder has a
dividend, with no recovery of basis. Exchange treatment is the exception, available only if the redemption
clears one of the five tests in IRC § 302(b), and every one of those tests is applied after attributing to
the shareholder the stock owned by their family and by entities they are connected to. In a closely held
corporation that attribution usually decides the answer before the arithmetic starts.

## The rule

**What is at stake.** {fig:redeem.exchange_treatment}

**Test one.** {fig:redeem.not_equivalent}

**Test two.** {fig:redeem.disproportionate}

**Test three.** {fig:redeem.termination}

**And the waiver that makes test three usable.** {fig:redeem.family_waiver}

**Whose stock you are treated as owning.** {fig:redeem.attribution}

**Complete liquidation defined.** {fig:liq.complete}

**The shareholder side.** {fig:liq.shareholder}

**The corporate side.** {fig:liq.corporate}

**The recipient's basis.** {fig:liq.distributee_basis}

**And the exception for a subsidiary.** {fig:liq.subsidiary_nonrecognition}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Exchange treatment | {fig:redeem.exchange_treatment} | IRC § 302(a) |
| Substantially disproportionate | {fig:redeem.disproportionate} | IRC § 302(b)(2) |
| Complete termination waiver | {fig:redeem.family_waiver} | IRC § 302(c)(2) |
| Attribution | {fig:redeem.attribution} | IRC § 318(a) |
| Basis on liquidation | {fig:liq.distributee_basis} | IRC § 334(a) |
| Subsidiary liquidation | {fig:liq.subsidiary_nonrecognition} | IRC § 337(a) |

## How it works in practice

Attribute first. Before any test in IRC § 302(b) can be applied, work out what the shareholder is treated
as owning: their own stock, plus stock owned by spouse, children, grandchildren and parents, plus
proportionate shares of stock held by partnerships, estates and trusts they are connected to, plus stock
held by corporations in which they have a large enough interest. Note the asymmetry in the family rule —
it reaches *down* to children and grandchildren and *up* to parents, but there is no attribution between
siblings and none from grandchildren to grandparents.

The substantially disproportionate test is arithmetic and is the one to reach for first because it is
objective. Two conditions, both required. The shareholder must own less than half the voting power
immediately after the redemption, and their percentage of voting stock afterwards must be under
four-fifths of their percentage before. The second condition also has to be met for common stock, voting or
not. A shareholder going from sixty to fifty-two fails on both limbs; one going from sixty to forty-five passes
the voting limitation and needs forty-eight or less to pass the ratio.

The complete termination test is simpler and, in a family company, usually unavailable without the waiver.
A parent redeeming their entire holding still constructively owns the stock held by their children, so
nothing has terminated. IRC § 302(c)(2) allows the family attribution to be waived, on three conditions
that have to be read exactly: no retained interest of any kind other than as a creditor — expressly
including officer, director or employee — no acquisition of such an interest for ten years except by
bequest or inheritance, and a filed agreement to notify the Secretary. The condition that catches people
is the second word of "officer, director, or employee": a retiring founder who stays on the board, or
consults, has retained an interest and cannot waive.

The "not essentially equivalent to a dividend" test is the fallback and it is genuinely a facts test,
requiring a meaningful reduction in the shareholder's proportionate interest. It is the only route for a
redemption that is neither large enough to be disproportionate nor complete, and it works best for a small
minority holder with no control to lose.

{gloss:liquidation}s are simpler because both sides recognise. The shareholder is treated as receiving full
payment in exchange for the stock (IRC § 331(a)) and the corporation recognises gain or loss as if it had
sold each asset to the distributee at {gloss:fair-market-value} (IRC § 336(a)). The distributee takes fair market
value as basis (IRC § 334(a)). Two levels of tax, which is the ordinary consequence of a C corporation
ceasing to exist.

The exception is a subsidiary liquidating into a parent whose stock meets the IRC § 1504(a)(2) test.
There IRC § 332(a) gives the parent nonrecognition on receipt and IRC § 337(a) gives the subsidiary
nonrecognition on distribution — the two provisions are a matched pair, and the parent takes a carryover
basis rather than fair market value under IRC § 334(b). Nothing is taxed because nothing has left the
group.

## Scenarios

<div class="scenario" data-type="fails">
<h3>The founder who stayed on the board</h3>
<p>Cordelia owns 40 percent of a family manufacturing company; her two adult children own 30 percent each.
She has the company redeem her entire holding for cash, intending capital gain treatment. She agrees to
remain a non-executive director for continuity.</p>
<p>She has a dividend. Under IRC § 318(a)(1)(A)(ii) she is treated as owning the stock owned by her
children, so after the redemption she constructively owns 100 percent of the company and nothing has been
terminated for the purpose of IRC § 302(b)(3). The waiver in IRC § 302(c)(2) would solve that, but it
requires that immediately after the distribution she has no interest in the corporation "including an
interest as officer, director, or employee" other than as a creditor — and the directorship defeats it.
Had she resigned from the board and filed the agreement, the redemption would have been an exchange.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The arithmetic of substantially disproportionate</h3>
<p>Bartolomeu owns 6,000 of a corporation's 10,000 voting shares, with no attribution from anyone. The
corporation redeems 2,500 of his shares.</p>
<p>Before: 60 percent. After: 3,500 of 7,500, which is 46.67 percent. Both conditions of IRC § 302(b)(2)
are tested. He owns less than 50 percent of the voting power immediately afterwards, so the limitation in
subparagraph (B) is satisfied. And 46.67 percent is less than 80 percent of 60 percent, which is 48
percent, so the ratio test in subparagraph (C) is satisfied. The redemption is substantially
disproportionate and is treated as an exchange. Had the corporation redeemed only 2,000 shares, he would
have held 4,000 of 8,000 — exactly 50 percent — and would have failed the limitation outright, however
large the reduction looked.</p>
</div>

<div class="scenario" data-type="baseline">
<h3>The liquidation taxed twice</h3>
<p>A C corporation with a single individual shareholder liquidates. Its assets are worth $3,000,000 with
an aggregate adjusted basis of $1,100,000. The shareholder's stock basis is $400,000.</p>
<p>Both levels are taxed. Under IRC § 336(a) the corporation recognises gain as if it had sold each asset
to the shareholder at fair market value, so $1,900,000 of corporate gain, on which corporate tax is
payable. The shareholder is then treated under IRC § 331(a) as receiving full payment in exchange for the
stock, so the net distributed after corporate tax is measured against the $400,000 stock basis and the
excess is capital gain. The shareholder takes the assets at fair market value under IRC § 334(a). This is
the double tax in its plainest form, and it is why a C corporation with appreciated assets is expensive to
unwind and why the choice of entity at formation matters so much.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The subsidiary that folded into its parent</h3>
<p>A parent corporation owns 100 percent of a subsidiary whose assets are worth $5,000,000 against an
adjusted basis of $1,800,000. The subsidiary is liquidated into the parent under a plan of liquidation.</p>
<p>Nothing is recognised on either side. IRC § 332(a) gives the parent nonrecognition on the receipt of
property distributed in complete liquidation of the subsidiary, provided it holds stock meeting the
IRC § 1504(a)(2) test, and IRC § 337(a) gives the subsidiary nonrecognition on the distribution to the
80-percent distributee. The parent takes a carryover basis of $1,800,000 under IRC § 334(b) rather than
fair market value — which is the price of the nonrecognition, since the $3,200,000 of appreciation remains
inside the group and will be taxed when the assets are eventually sold. Contrast the previous scenario:
the same economics between unrelated parties produce two immediate taxes.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>A redemption is a dividend by default.</strong> IRC § 302(a) applies only if one of the five
tests in IRC § 302(b) is met.</li>
<li><strong>Attribute before you compute.</strong> Family, entity and option attribution under IRC § 318
apply to every test.</li>
<li><strong>No sibling attribution.</strong> The family rule reaches spouse, children, grandchildren and
parents — not brothers and sisters, and not upward from grandchildren.</li>
<li><strong>Substantially disproportionate needs both limbs.</strong> Under 50 percent of the voting power
<em>and</em> under 80 percent of the prior ratio.</li>
<li><strong>Exactly half fails.</strong> The limitation requires the shareholder to hold <em>less
than</em> half the voting power.</li>
<li><strong>A directorship defeats the waiver.</strong> IRC § 302(c)(2) excludes any interest including as
officer, director or employee.</li>
<li><strong>A liquidation is taxed twice.</strong> IRC §§ 331 and 336 both operate, unless the parent-
subsidiary exception applies.</li>
<li><strong>The subsidiary exception costs basis.</strong> IRC § 334(b) carryover, not fair market
value.</li>
</ul>
</div>

## How this has changed

The corporate-level recognition on liquidation is the reversal that shapes this topic. Before 1986 a
liquidating corporation generally recognised no gain on distributing appreciated assets, so a C
corporation could be unwound at one level of tax. IRC § 336(a) now requires recognition as if each asset
had been sold to the distributee at fair market value, which — together with the matching rule for
non-liquidating distributions in IRC § 311(b) — produced the modern double tax on getting appreciated
property out of a corporation. Material describing corporate liquidations as a single-tax event is
pre-1987, and the change is the single strongest argument for choosing a pass-through at formation.

The IRC § 302 tests themselves have not moved. The eighty percent ratios, the fifty percent voting
limitation and the ten-year waiver period are all as enacted, and the attribution rules in IRC § 318 have
been stable for decades.

What has changed around them is the rate environment. When dividends were taxed as ordinary income and
capital gains were not, the difference between exchange and dividend treatment on a redemption was the
whole of the planning. With qualified dividend income taxed at capital gain rates, the rate difference has
narrowed sharply and what remains is the recovery of basis — a redemption treated as an exchange lets the
shareholder recover stock basis before recognising anything, while a dividend does not. That is now the
main prize, and it is a larger one for a shareholder with high basis than the rate difference ever was.

## Exam focus

Every redemption question is answered in the same order. Attribute the stock. Compute the before and after
percentages on the attributed figures. Test substantially disproportionate first, because it is objective.
If it fails, consider complete termination and whether the waiver is available. If neither, ask whether
there has been a meaningful reduction.

Two arithmetic points recur. The denominator changes: redeemed shares come out of the total as well as out
of the shareholder's holding. And exactly fifty percent fails the limitation, so a question that lands
precisely on it is testing the word "less".

On liquidations, expect a question that asks how many levels of tax there are. Two, unless the distributee
is an eighty percent corporate parent, in which case none — and then the follow-up is usually the basis,
which is carryover rather than fair market value.

## Check yourself

**1.** A shareholder owns 500 of a corporation's 1,000 voting shares. Her son owns 200. The corporation
redeems 100 of her shares. Does IRC § 302(b)(2) apply?

*Answer: no. Under IRC § 318(a)(1)(A)(ii) she is treated as owning her son's 200 shares, so before the
redemption she owns 700 of 1,000, or 70 percent. After it she owns 600 of 900, or 66.67 percent. That is
not less than 80 percent of 70 percent, which is 56 percent, and she still owns more than half the voting
power. Both limbs fail.*

**2.** A shareholder's percentage of voting stock falls from 40 percent to 31 percent on a redemption, and
there is no attribution. Is the redemption substantially disproportionate?

*Answer: yes. She owns less than 50 percent of the voting power immediately after, satisfying
IRC § 302(b)(2)(B). And 31 percent is less than 80 percent of 40 percent, which is 32 percent, satisfying
the ratio test in subparagraph (C). The margin is one percentage point, which is why these questions are
worth computing rather than estimating.*

**3.** A father has his entire holding redeemed and immediately becomes a paid consultant to the company.
His daughter remains a shareholder. Can he waive family attribution?

*Answer: no. IRC § 302(c)(2)(A)(i) requires that immediately after the distribution the distributee has no
interest in the corporation, "including an interest as officer, director, or employee", other than an
interest as a creditor. A consultancy is the kind of continuing interest the provision excludes. Without
the waiver he constructively owns his daughter's stock and nothing has been terminated.*

**4.** A C corporation liquidates, distributing assets worth $2,000,000 with a basis of $600,000 to an
individual shareholder whose stock basis is $250,000. How many levels of tax arise?

*Answer: two. The corporation recognises $1,400,000 of gain under IRC § 336(a) as if it had sold the
assets to the shareholder at fair market value. The shareholder is treated under IRC § 331(a) as receiving
full payment in exchange for the stock and recognises capital gain to the extent the amount received
exceeds the $250,000 basis. The shareholder takes the assets at fair market value under IRC § 334(a).*

**5.** A subsidiary wholly owned by a corporate parent liquidates into it. What does each recognise, and
what basis does the parent take?

*Answer: neither recognises anything, and the parent takes a carryover basis. IRC § 332(a) gives the parent
nonrecognition on the receipt and IRC § 337(a) gives the subsidiary nonrecognition on the distribution to
the 80-percent distributee. IRC § 334(b) gives the parent the subsidiary's basis rather than fair market
value, so the appreciation is preserved inside the group rather than eliminated.*
