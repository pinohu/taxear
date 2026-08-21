---
title: "Requirements to qualify (e.g., qualifying shareholders)"
code: "2.1.5.a"
part: 2
domain: "Business Entities"
section: "S corporations"
description: "Five conditions, each of which must hold on every day the election is in force. The shareholder ceiling is the loosest of them once the family rule is applied."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 1361", title: "S corporation defined", url: "https://www.law.cornell.edu/uscode/text/26/1361" }
  - { type: IRC, ref: "§ 1362", title: "Election; revocation; termination", url: "https://www.law.cornell.edu/uscode/text/26/1362" }
  - { type: IRC, ref: "§ 1504(a)(4)", title: "Stock not taken into account", url: "https://www.law.cornell.edu/uscode/text/26/1504" }
forms: []
related: ["2.1.5.b", "2.1.5.f", "2.1.1.d", "2.1.5.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the five conditions in IRC § 1361(b)(1) — domestic corporation, not an ineligible corporation, no more than 100 shareholders, only permitted shareholders, one class of stock — with the § 1361(c)(1) family aggregation rule, the § 1361(c)(2)(A) list of eligible trusts, and the § 1361(c)(4) rule that differences in voting rights alone do not create a second class." }
---

The conditions for S status are five in number, they are cumulative, and each must hold on every day the
election is in force rather than merely on the day it was made. That last point is what turns a definition
into a compliance obligation: a corporation does not qualify once, it qualifies continuously, and a single
transfer to the wrong holder ends the election on the day it happens.

## The rule

**The five conditions.** {fig:scorp.eligibility}

**How shareholders are counted.** {fig:scorp.family_aggregation}

**Which trusts may hold the stock.** {fig:scorp.trusts}

**Voting differences do not count.** Differences in voting rights among shares of common stock are
disregarded in determining whether a corporation has more than one class of stock (IRC § 1361(c)(4)).

**And a safe harbour for debt.** Straight debt held by an individual, an estate, certain trusts or a
person actively and regularly engaged in the business of lending money is not treated as a second class
of stock (IRC § 1361(c)(5)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| The five conditions | {fig:scorp.eligibility} | IRC § 1361(b)(1) |
| Family aggregation | {fig:scorp.family_aggregation} | IRC § 1361(c)(1) |
| Eligible trusts | {fig:scorp.trusts} | IRC § 1361(c)(2)(A) |

## How it works in practice

Take the conditions in the order that produces answers fastest, which is not the order the statute lists
them.

**One class of stock** is the condition most often broken by accident, because it is about economics
rather than about certificates. What matters is that all outstanding shares confer identical rights to
distribution and liquidation proceeds. Differences in voting power are expressly disregarded
(IRC § 1361(c)(4)), so a corporation can have voting and non-voting common without difficulty. What
creates a second class is unequal economic treatment: distributions made to one shareholder and not
another, a buy-sell agreement fixing different prices, or a shareholder loan on terms that make it look
like equity. The straight debt safe harbour in IRC § 1361(c)(5) exists precisely because the last of
those was a recurring problem.

**Permitted shareholders** is a closed list and the exclusions matter more than the inclusions. An
individual, an estate, certain trusts and certain exempt organisations may hold. A partnership may not. A
corporation may not. A non-resident alien may not. That last one is the trap in a family company: a
child who marries a non-resident alien and puts shares into the spouse's name terminates the election on
the day of the transfer.

**The hundred-shareholder ceiling** sounds binding and is in practice the loosest of the five, because of
IRC § 1361(c)(1). A husband and wife and their estates count as one, and all members of a family and
their estates count as one — a family being a common ancestor, that ancestor's lineal descendants, and
the spouses and former spouses of either, with the common ancestor no more than six generations removed
from the youngest generation of shareholders. There is no election to make; a qualifying family simply is
one shareholder. A company with two hundred natural persons on its register can be well inside the limit.

**Domestic corporation** and **not an ineligible corporation** are usually satisfied without thought, but
the second is a defined term rather than a general standard: it reaches certain financial institutions,
insurance companies and DISCs. A corporation that changes its business into one of those categories loses
its election.

The point to carry away is the continuity requirement. Each of the five conditions is drafted as a
present-tense description of the corporation, so failing any of them at any moment terminates the election
under IRC § 1362(d)(2) on the date of cessation — not at the end of the year, and not on discovery.

## Scenarios

<div class="scenario">
<h3>The share certificate issued to a partnership</h3>
<p>A profitable S corporation with six individual shareholders admits a new investor. For administrative
convenience the investor takes the shares in the name of a two-person general partnership he controls with
his brother. The transfer is registered on 14 May.</p>
<p>The election terminates on 14 May. IRC § 1361(b)(1)(B) permits shareholders who are individuals,
estates, certain trusts and certain exempt organisations; a partnership is not among them. Under
IRC § 1362(d)(2)(B) the termination is effective on and after the date of cessation, so the corporation has
a short S year to 13 May and a short C year from 14 May. Nothing about the investor's own status helps —
the disqualification is in the identity of the registered holder. Relief for an inadvertent termination
under IRC § 1362(f) is available if the Secretary is satisfied the circumstances were inadvertent and the
position is corrected, which is the practical answer here.</p>
</div>

<div class="scenario">
<h3>Two hundred cousins and one shareholder</h3>
<p>A vineyard incorporated in 1974 by Bartholomea has been passed down through four generations. There are
now 187 registered holders: her descendants, their spouses, and the estates of several who have died. The
company's adviser believes it is close to the shareholder limit.</p>
<p>It has one shareholder for this purpose. IRC § 1361(c)(1) treats all members of a family and their
estates as a single shareholder, a family being a common ancestor, that ancestor's lineal descendants, and
the spouses and former spouses of either. Bartholomea is the common ancestor and she is within six
generations of the youngest generation of shareholders. There is no election to make and no form to file.
The condition this company should actually be watching is the permitted-shareholder rule: a great-
grandchild marrying a non-resident alien and transferring shares would end the election immediately.</p>
</div>

<div class="scenario">
<h3>The distribution that made a second class</h3>
<p>Two shareholders own an S corporation equally. One takes $200,000 out of the company during the year
and the other takes nothing, by informal agreement, because the first has a personal cash need. Both hold
identical shares issued under one certificate class.</p>
<p>The corporation is at risk of having a second class of stock. IRC § 1361(b)(1)(D) is not about
certificates but about the rights the outstanding shares confer to distribution and liquidation proceeds,
and a consistent pattern of disproportionate distributions is evidence that the shares do not in fact
confer identical rights. A single year's timing difference that is corrected is usually survivable; a
settled practice is not. Note how differently the voting rule works: the same two shareholders could hold
voting and non-voting shares without any difficulty at all, because IRC § 1361(c)(4) disregards voting
differences entirely.</p>
</div>

<div class="scenario">
<h3>The shareholder loan on soft terms</h3>
<p>A shareholder lends her S corporation $400,000. The written note has no fixed maturity, carries interest
payable only if the company is profitable, and is subordinated to all other creditors.</p>
<p>It is unlikely to be within the straight debt safe harbour. IRC § 1361(c)(5) protects a written
unconditional promise to pay on demand or on a specified date a sum certain in money, where the interest
rate and payment dates are not contingent on profits, the borrower's discretion or similar factors, where
it is not convertible into stock, and where the creditor is an individual, estate, certain trust, or a
person actively and regularly engaged in the business of lending money. Interest contingent on profits
takes this note outside the safe harbour, and it must then be tested on general principles to see whether
it is in substance a second class of stock. Redrafting the interest terms is cheap; losing the election is
not.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>All five conditions, every day.</strong> Failing one at any moment terminates the election on
that date under IRC § 1362(d)(2).</li>
<li><strong>Voting differences are not a second class.</strong> IRC § 1361(c)(4) disregards them
entirely.</li>
<li><strong>Economics are.</strong> Disproportionate distributions and equity-flavoured shareholder debt
can create a second class without any new certificate.</li>
<li><strong>Partnerships and corporations cannot hold.</strong> The permitted list is closed.</li>
<li><strong>Nor can a non-resident alien.</strong> This is the commonest accidental termination in a
family company.</li>
<li><strong>The family rule is automatic.</strong> No election, no form — a qualifying family is one
shareholder.</li>
<li><strong>Six generations, measured from the youngest.</strong> The common ancestor may be no more than
that far removed from the youngest generation of shareholders.</li>
</ul>
</div>

## How this has changed

The conditions have been liberalised steadily and the direction has been one way. The shareholder ceiling
has risen from ten at the outset through several increases to its present figure; the family aggregation
rule was added, and its formulation was changed from a narrower generational test to the current six-
generation one; the range of permitted trusts has widened; and the safe harbour for straight debt was
enacted to stop routine shareholder lending from destroying elections.

Two consequences follow for anyone reading older material. Any source describing a three-generation family
test is describing pre-2005 law. And any source describing a shareholder ceiling below the current figure
is describing a limit that has been raised more than once — the number is the single most frequently
updated figure in subchapter S and the one most likely to be wrong in a secondary source.

The conditions themselves have not been relaxed in one respect: the permitted shareholder list still
excludes partnerships, corporations and non-resident aliens, and no amendment has softened the immediate
termination that follows a transfer to one of them. The relief route in IRC § 1362(f) for inadvertent
terminations is the practical answer and has itself become more generously administered over time, but it
is discretionary and it is not a substitute for the conditions being met.

## Exam focus

The standard question lists four propositions about eligibility and asks which is not a requirement. The
answer is nearly always the one that misstates the class-of-stock rule — "two classes designated A and B",
"different voting rights permitted", and similar. One class is the requirement; voting differences are the
exception to it.

The second reliable shape counts shareholders. Read for family relationships before counting names, and
remember that spouses and their estates count as one and that a family counts as one.

Where a question describes a transfer to a partnership, a corporation or a non-resident alien, the answer
is that the election terminates on the date of the transfer.

## Check yourself

**1.** Which of these prevents a corporation from qualifying: 100 shareholders; two classes of stock
differing only in voting rights; a non-resident alien shareholder; a domestic corporation?

*Answer: the non-resident alien. IRC § 1361(b)(1)(C) excludes a corporation having a non-resident alien as
a shareholder. One hundred shareholders is within the ceiling, which is "not more than 100"; classes
differing only in voting rights are permitted by IRC § 1361(c)(4); and being domestic is a requirement
rather than a disqualification.*

**2.** A corporation has 118 registered shareholders. Ninety-two of them are descendants of one common
ancestor, four generations back, together with their spouses. How many shareholders does it have for the
100-shareholder test?

*Answer: 27. Under IRC § 1361(c)(1) all members of a family and their estates are treated as one
shareholder, so the 92 count as one and the remaining 26 count individually. The common ancestor is four
generations from the youngest generation of shareholders, within the six-generation limit.*

**3.** An S corporation's shares are held equally by two shareholders, one holding voting common and the
other non-voting common with identical distribution and liquidation rights. Is there a second class of
stock?

*Answer: no. IRC § 1361(c)(4) provides that a difference in voting rights among shares of common stock is
disregarded in determining whether a corporation has more than one class of stock. What creates a second
class is a difference in the rights to distribution and liquidation proceeds.*

**4.** On 3 August a shareholder transfers her shares to a limited partnership she controls. When does the
election terminate?

*Answer: on 3 August. A partnership is not a permitted shareholder under IRC § 1361(b)(1)(B), so the
corporation ceases to be a small business corporation on that date, and IRC § 1362(d)(2)(B) makes the
termination effective on and after the date of cessation. Relief may be available under IRC § 1362(f) if
the circumstances were inadvertent and are corrected.*

**5.** A shareholder lends the corporation money on a written note repayable on a fixed date at a fixed
rate, not convertible into stock. Does this create a second class of stock?

*Answer: no. IRC § 1361(c)(5) provides that straight debt is not treated as a second class of stock where
it is a written unconditional promise to pay a sum certain on demand or on a specified date, the interest
rate and payment dates are not contingent on profits or the borrower's discretion, it is not convertible
into stock, and the creditor is an individual, an estate, certain trusts, or a person actively and
regularly engaged in the business of lending money.*
