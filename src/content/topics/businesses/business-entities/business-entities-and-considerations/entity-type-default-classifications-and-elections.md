---
title: "Entity type default classifications and elections"
code: "2.1.1.g"
part: 2
domain: "Business Entities and Considerations"
section: "Business entities"
description: "An election is not a change of form. The regulation deems a contribution or a liquidation the day before it takes effect, and the step transaction doctrine applies."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: Reg, ref: "§ 301.7701-1", title: "Classification of organizations for federal tax purposes", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-1" }
  - { type: Reg, ref: "§ 301.7701-2", title: "Business entities; definitions", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-2" }
  - { type: Reg, ref: "§ 301.7701-3", title: "Classification of certain business entities", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-3" }
  - { type: IRC, ref: "§ 331", title: "Gain or loss to shareholders in corporate liquidations", url: "https://www.law.cornell.edu/uscode/text/26/331" }
  - { type: IRC, ref: "§ 332", title: "Complete liquidations of subsidiaries", url: "https://www.law.cornell.edu/uscode/text/26/332" }
  - { type: IRC, ref: "§ 336", title: "Gain or loss recognized on property distributed in complete liquidation", url: "https://www.law.cornell.edu/uscode/text/26/336" }
  - { type: IRC, ref: "§ 351", title: "Transfer to corporation controlled by transferor", url: "https://www.law.cornell.edu/uscode/text/26/351" }
  - { type: IRC, ref: "§ 357", title: "Assumption of liability", url: "https://www.law.cornell.edu/uscode/text/26/357" }
  - { type: IRC, ref: "§ 1504(a)(2)", title: "Affiliated group; 80-percent voting and value test", url: "https://www.law.cornell.edu/uscode/text/26/1504" }
  - { type: IRC, ref: "§ 7701(a)(3)", title: "Corporation defined", url: "https://www.law.cornell.edu/uscode/text/26/7701" }
forms: []
related: ["2.1.1.a", "2.1.1.b", "2.1.1.c", "2.1.1.d", "2.1.1.e", "2.1.1.f", "2.1.1.h"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the Reg. § 301.7701-3(b) default classifications for domestic and foreign eligible entities, the Reg. § 301.7701-3(c)(2) signature requirements including the rule that former owners must sign a retroactive or changing election, the Reg. § 301.7701-3(d) relevance rules for foreign entities and the 60-month lapse, and the Reg. § 301.7701-3(g) deemed transactions on an elective change of classification with their timing, the Reg. § 301.7701-3(g)(2)(ii) deemed adoption of a plan of liquidation for IRC § 332, and the ordering rule for tiered entities." }
---

The classification election is described in practice as though it were a switch: file the form, change the
box, become a corporation. The regulation does not work that way. Every elective change of classification
is accompanied by a set of transactions the regulation deems to occur — a contribution, a liquidation, or
both — and those transactions have real tax consequences that are determined under the ordinary rules,
including the step transaction doctrine. The election is not what the client thinks it is. It is a
disposition dressed as a filing.

## The rule

**What an entity is if nothing is filed, domestically.** {fig:llc.default_classification}

**What it is if nothing is filed, and it is foreign.** {fig:classify.foreign_default}

**What may be elected.** {fig:llc.election}

**Who has to sign.** {fig:classify.signatures}

**When the election takes effect.** {fig:llc.election_effective_date}

**The bar on electing again.** {fig:llc.sixty_month_limit}

**When a foreign entity's classification matters at all.** {fig:classify.relevance}

**And when the question reopens.** {fig:classify.relevance_lapse}

**What the change is deemed to be.** {fig:classify.deemed_transactions}

**And what follows from that.** {fig:classify.step_transaction}

**The plan of liquidation.** {fig:classify.plan_of_liquidation}

**When the deemed transactions happen.** {fig:classify.timing}

**Tiered entities.** {fig:classify.tiered_order}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Domestic default | {fig:llc.default_classification} | Reg. § 301.7701-3(b)(1) |
| Foreign default | {fig:classify.foreign_default} | Reg. § 301.7701-3(b)(2) |
| Effective date limits | {fig:llc.election_effective_date} | Reg. § 301.7701-3(c)(1)(iii) |
| Re-election bar | {fig:llc.sixty_month_limit} | Reg. § 301.7701-3(c)(1)(iv) |
| Relevance lapse | {fig:classify.relevance_lapse} | Reg. § 301.7701-3(d)(3) |
| Deemed transactions | {fig:classify.deemed_transactions} | Reg. § 301.7701-3(g)(1) |
| Timing of the deemed transactions | {fig:classify.timing} | Reg. § 301.7701-3(g)(3)(i) |

## How it works in practice

Take the four deemed transactions one at a time, because each produces a different exposure and the
symmetry of the list conceals that.

*Partnership electing association status.* The partnership is deemed to contribute everything to the
association for stock and then liquidate. Ordinarily the contribution qualifies as a transfer to a
controlled corporation and nothing is recognised (IRC § 351(a)), but liabilities matter: where the
liabilities assumed exceed the total adjusted basis of the property transferred, the excess is gain from
the sale or exchange of property (IRC § 357(c)(1)). A partnership that has been financing itself with debt and taking
depreciation is precisely the entity that trips this, and the election that was supposed to save
self-employment tax generates a taxable event instead.

*Association electing partnership status.* This is the expensive one, and clients almost never expect it.
The association is deemed to liquidate, and gain or loss is recognised to it as if the property were sold
to the distributee at fair market value (IRC § 336(a)), while the shareholders are treated as receiving
full payment in exchange for their stock (IRC § 331(a)). There is no
relief provision for a corporation that decides it would rather be a partnership. The same is true of an
association electing to be disregarded, except that a corporate parent owning stock meeting the
IRC § 1504(a)(2) test may reach nonrecognition on the receipt of the property (IRC § 332(a), (b)(1)) — which is why the regulation supplies the deemed adoption
of a plan of liquidation.

*Disregarded entity electing association status.* The owner is deemed to contribute the assets and
liabilities for stock. This is generally the cheapest of the four, subject to the same IRC § 357(c)
exposure on excess liabilities.

The timing rule is the detail that decides which return the consequences land on. The election takes
effect at the start of its effective day; the deemed transactions occur immediately before the close of
the day *before*. So a change effective 1 January puts every consequence in the preceding taxable year.
The old entity's final return covers a year ending 31 December and the new classification's first year
begins 1 January. Practitioners who diary the consequences to the year of the election have them a year
late.

The signature rule at Reg. § 301.7701-3(c)(2) is easy to miss and hard to fix afterwards. A retroactive
election needs signatures from people who have since ceased to be owners, and a changing election needs
signatures from anyone who was an owner on the date the deemed transactions occurred. Those people are
sometimes departed partners with no remaining interest in cooperating, and their consent has to be
obtained before the form goes in.

Relevance is a foreign-entity concept with no domestic counterpart, and it exists because a foreign entity
may have no contact with the federal tax system for years at a time. Its classification is fixed when the
classification first matters — when someone must file a return or statement that depends on it — and if it
then stops mattering for 60 consecutive months, the determination is made afresh the next time it does.
A foreign entity can therefore change classification without an election, simply by going quiet and
changing its membership or its members' liability in the interval.

## Scenarios

<div class="scenario">
<h3>The election that produced a gain from nothing</h3>
<p>A three-member LLC taxed as a partnership owns equipment with an adjusted basis of $210,000, subject to
$340,000 of acquisition debt. Its members elect association status on Form 8832 effective 1 January 2027,
on advice that corporate treatment will reduce their self-employment tax.</p>
<p>Under Reg. § 301.7701-3(g)(1)(i) the partnership is deemed to contribute all its assets and liabilities
to the association in exchange for stock, and then to liquidate. The contribution is an IRC § 351
exchange, but liabilities assumed exceed the aggregate basis of the property transferred by $130,000, and
IRC § 357(c) treats that excess as gain from the sale of property. The election generates $130,000 of gain
in the 2026 tax year, because Reg. § 301.7701-3(g)(3)(i) puts the deemed transactions immediately before
the close of 31 December 2026. Nothing about this appears on Form 8832, and nothing about it was in the
advice.</p>
</div>

<div class="scenario">
<h3>Changing back</h3>
<p>The same LLC finds corporate treatment unhelpful and, in 2033, elects to be classified as a partnership
again. The 60-month bar has expired, so the election is available. The entity's assets are now worth
$900,000 against a basis of $250,000.</p>
<p>Reg. § 301.7701-3(g)(1)(ii) deems the association to distribute all its assets and liabilities to its
shareholders in liquidation, and the shareholders to contribute them immediately to a new partnership.
The deemed liquidation is a corporate liquidation: the association recognises gain as though it sold every
asset at fair market value, and the shareholders recognise gain or loss on the exchange of their stock.
That is roughly $650,000 of corporate-level gain and a second layer at shareholder level. There is no
provision that relieves it. The contribution to the new partnership is tax-free, which is the only
comforting part of the sequence and by far the smallest.</p>
</div>

<div class="scenario">
<h3>The partner who had already left</h3>
<p>An LLC with four members wants to elect association status effective 1 July 2026. It files Form 8832 in
August 2026. One member, Halina, sold her interest to the other three on 15 July 2026 and has no further
involvement.</p>
<p>The election changes the entity's classification, so the deemed transactions occur immediately before
the close of 30 June 2026 — a date on which Halina was an owner. Under Reg. § 301.7701-3(c)(2)(iii) she is
a person who was an owner on the date the deemed transactions are treated as occurring and who is not an
owner when the election is filed, and she must therefore sign it. The remaining members cannot make the
election without her. The lesson is procedural rather than substantive: check who was an owner on the
deemed-transaction date, not on the filing date.</p>
</div>

<div class="scenario">
<h3>The foreign entity that reclassified itself by waiting</h3>
<p>A U.S. person acquires a 15 percent interest in an entity organised in a country whose law gives all
members limited liability, and files Form 5471 for 2019. She disposes of the interest in 2020 and no
further U.S. filing obligation touches the entity. In 2026 a different U.S. person acquires an interest.
By then the entity's governing documents have been amended so that one class of member has personal
liability for its debts.</p>
<p>The classification was relevant in 2019 and was determined then as an association, all members having
limited liability. It ceased to be relevant in 2020. More than 60 consecutive months have passed, so under
Reg. § 301.7701-3(d)(3) the classification is determined afresh when it next becomes relevant in 2026 —
and on the amended documents at least one member lacks limited liability, so the default under
Reg. § 301.7701-3(b)(2)(i)(A) is a partnership. The entity has changed its federal classification without
filing anything at all.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>An election is a disposition.</strong> Reg. § 301.7701-3(g)(1) deems a contribution, a
liquidation, or both, and general tax law applies to them.</li>
<li><strong>Corporate to partnership is the expensive direction.</strong> The deemed liquidation is taxable
at both levels, and there is no relief provision.</li>
<li><strong>The consequences land in the earlier year.</strong> The deemed transactions occur immediately
before the close of the day before the effective date.</li>
<li><strong>Excess liabilities produce gain going in.</strong> The IRC § 351 exchange is not automatically
tax-free; IRC § 357(c) applies to the deemed contribution.</li>
<li><strong>Former owners may have to sign.</strong> Anyone who was an owner on the deemed-transaction date
and is not an owner at filing must sign the election.</li>
<li><strong>The step transaction doctrine applies.</strong> An election embedded in a larger plan is
analysed with the rest of it, not in isolation.</li>
<li><strong>A foreign entity's classification can change with no election.</strong> Sixty months of
irrelevance reopens the default determination.</li>
</ul>
</div>

## How this has changed

The current regime replaced the corporate-characteristics test in 1997, and the deemed-transaction rules
in Reg. § 301.7701-3(g) came two years later, applying to elections filed on or after 29 November 1999.
Before those rules existed the tax consequences of an elective change were genuinely unsettled — the
regulation supplied an election but said nothing about what the change *was* — and practitioners
constructed the answer from first principles with varying results. Paragraph (g) settled it by specifying
the transactions, which had the practical effect of making the cost visible. Material written before it
that treats the election as consequence-free is describing a gap that has been closed for a quarter of a
century.

The deemed adoption of a plan of liquidation for IRC § 332 purposes came later still, applying to elections
filed on or after 17 December 2001, and it fixed a trap of the regulation's own making: a corporate parent
electing to disregard its subsidiary was deemed to receive a liquidation but had adopted no plan, which is
a condition of IRC § 332. The regulation now supplies the plan.

The relevance rules for foreign entities were extended in 2003 to add deemed relevance on the filing of
Form 8832, so that a foreign entity electing a classification has a relevant classification on the
effective date even if nothing else makes it relevant.

## Exam focus

Expect the defaults far more often than the deemed transactions, because the defaults are the mechanical
answer. The recurring shape is an entity with a stated number of members and no Form 8832 on file, where
the answer is partnership for two or more and disregarded for one. Learn the foreign defaults as a
separate list — they turn on limited liability rather than on the count alone, and the single-owner foreign
entity is disregarded only if that owner *lacks* limited liability, which is the reverse of the intuition.

For the election itself, three numbers do most of the work: 75 days back, 12 months forward, 60 months
before another change. Where a question asks how long before a second election, the answer is the 60-month
bar expressed as five years. Where a question describes a change and asks about consequences, identify
which of the four deemed transactions applies before reaching for a Code section.

## Check yourself

**1.** A domestic LLC with five members files no classification election. What is it for federal tax
purposes?

*Answer: a partnership. Reg. § 301.7701-3(b)(1)(i) classifies a domestic eligible entity with two or more
members as a partnership unless it elects otherwise. The number of members beyond two is irrelevant, and
so is limited liability, which matters only for foreign entities.*

**2.** A partnership elects association status on Form 8832 in year three of its operations. What is the
earliest a further classification election may be effective?

*Answer: 60 months — five years — after the effective date of the first election. Reg. §
301.7701-3(c)(1)(iv) bars a further election during the 60 months succeeding the effective date. The
Commissioner may permit an earlier one only where more than half the ownership interests have passed to
people who held none at the earlier election's filing or effective date.*

**3.** An eligible entity classified as an association elects to be classified as a partnership effective
1 January 2027. On what date are the deemed transactions treated as occurring, and what are they?

*Answer: immediately before the close of 31 December 2026. Under Reg. § 301.7701-3(g)(1)(ii) the
association is deemed to distribute all its assets and liabilities to its shareholders in liquidation, and
the shareholders immediately to contribute them to a newly formed partnership. Under
Reg. § 301.7701-3(g)(3)(i) that falls in the 2026 tax year, and 31 December 2026 is the last day of the
association's taxable year.*

**4.** A foreign eligible entity has three members, all of whom have limited liability under the law of
the country where it is organised, and it files no election. How is it classified?

*Answer: as an association. Reg. § 301.7701-3(b)(2)(i)(B) classifies a foreign eligible entity as an
association if all members have limited liability. The two-or-more-members partnership default applies to
foreign entities only where at least one member does not have limited liability.*

**5.** An LLC files a Form 8832 in September 2026 changing its classification with effect from 1 August
2026. A member who sold out on 10 August 2026 refuses to sign. Is the election valid?

*Answer: no. The deemed transactions occur immediately before the close of 31 July 2026, when that person
was an owner, and they are not an owner when the election is filed. Reg. § 301.7701-3(c)(2)(iii) requires
them to sign, and without the signature the election is not properly made.*
