---
title: "Business entity supporting documents"
code: "3.2.4.e"
part: 3
domain: "Representation before the IRS"
section: "Supporting documentation"
description: "The partnership agreement, the bylaws and the election forms decide how an entity is taxed. What each document controls, and what happens when nobody produces one."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "N. O."
authorities:
  - { type: Reg, ref: "§ 301.7701-3", title: "Classification of certain business entities", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-3" }
  - { type: IRC, ref: "§ 704(b)", title: "Determination of distributive share" }
  - { type: IRC, ref: "§ 1362", title: "Election; revocation; termination" }
  - { type: IRC, ref: "§ 6001", title: "Notice or regulations requiring records, statements, and special returns" }
  - { type: Form, ref: "8832", title: "Entity Classification Election" }
forms: []
related: ["3.2.4.d", "3.2.4.a", "3.2.4.c"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, typed scenarios, and glossary marks." }
---

<div class="plain-terms">
A firm is not taxed just the way its owners hope. Its own paperwork — the forms filed at start-up,
the owner agreement, the election it sent to the IRS — is what decides how the IRS treats it, not
what a lawyer once wrote or a client once assumed. This matters to anyone who advises a partnership,
an LLC, or a small corporation, above all where the paperwork and the tax filings do not match. It
matters less where one person owns the whole thing and no separate firm was ever set up. What it
settles is plain: does the firm file as its own return, or not at all, and does the profit split
among owners the way the return claims?
</div>

## The rule

For an entity, the governing documents are not background. They determine the federal tax
classification, the allocation of income among owners, and whether particular payments are what the
return says they are. A representative asked to defend an entity return without them is arguing about
consequences while the causes sit in a drawer.

**Classification.** Under the entity classification regulations, an eligible entity that files no
election is {fig:entity.default_domestic}. A foreign eligible entity that files no election is
{fig:entity.default_foreign}. An eligible entity may elect a different classification, or change one,
by filing **Form 8832** with the designated service center — and the regulation adds that an election
will not be accepted unless all of the information the form and instructions require, **including the
entity's taxpayer identifying number**, is provided. So the first question about any limited liability
company is not what the operating agreement says about taxes; it is whether a Form 8832 was ever filed,
and whether it was complete.

**Allocation.** A partner's distributive share is determined **in accordance with the partner's
interest in the partnership** (IRC § 704(b)), taking into account all facts and circumstances, if
either the partnership agreement does not provide for the share, or the allocation under the agreement
**does not have substantial economic effect**. The agreement therefore controls only within limits, and
the practical consequence is that an allocation nobody can locate in a written agreement will be
recomputed by reference to the partners' actual interests — which is frequently not what the K-1s
reported.

**S corporations.** The election under IRC § 1362 and the shareholder consents that accompany it are the
documents that make the return a Form 1120-S rather than a Form 1120. The corporate records also
determine whether the single-class-of-stock requirement is satisfied, which turns on the governing
provisions conferring rights to distribution and liquidation proceeds.

Everything else — bylaws, operating agreements, buy-sell agreements, capital account schedules, stock
ledgers, board and member resolutions — is general-regime evidence under IRC § 6001, and its weight
depends on whether it says what happened and when.

## Current figures

| Situation | Default classification |
| --- | --- |
| Domestic eligible entity, no election filed | {fig:entity.default_domestic} |
| Foreign eligible entity, no election filed | {fig:entity.default_foreign} |

An eligible entity elects a different classification by filing Form 8832, which is not accepted unless
complete, including the entity's taxpayer identifying number.

## How it works in practice

**Ask for the formation documents at the first meeting.** Articles of organization or incorporation,
the operating agreement or partnership agreement, bylaws, and every amendment. Then ask separately for
the election forms — Form 8832, Form 2553, and their acceptance letters — because clients reliably
believe that the operating agreement's recital that "the Company shall be taxed as an S corporation"
accomplished something. It did not. Classification comes from the election, and the election is a
filing.

**Read the partnership agreement for the allocation provisions and the capital account rules.** Section
704(b) respects an allocation with substantial economic effect, and the regulations under it build that
concept around properly maintained capital accounts, liquidation in accordance with those accounts, and
a deficit restoration obligation or a qualified income offset. An agreement silent on capital accounts,
or one whose economics were never followed in practice, will not support the allocations the returns
have been making. Where the agreement and the K-1s disagree, the K-1s lose.

**Check whether the entity did what its documents say.** This is the recurring failure. A special
allocation in the agreement that the capital accounts never reflected; a distribution provision the
entity has ignored for years; a management fee to a member that no resolution authorises; a buy-sell
price mechanism that a redemption did not follow. Each of these is a place where the return reports a
result the documents do not produce, and an examiner reading both will notice.

**Stock ledgers and membership registers answer who owned what, when.** Ownership percentages drive
allocation, at-risk and basis computations, related-party tests, and the S corporation eligibility
rules. A ledger maintained contemporaneously settles the question; a spreadsheet reconstructed at
examination invites the next one.

**Minutes and resolutions supply purpose.** A payment's character frequently depends on what the entity
decided it was. Compensation, loans to and from owners, accountable plan reimbursements, and
distributions all benefit from a resolution made at the time. This is the same discipline that applies
to any contemporaneous document, and it is cheapest in the year the decision is made.

**Where documents are genuinely missing, say so and work from conduct.** An entity with no written
agreement is not without evidence — the pattern of distributions, the capital contributed, the tax
returns as filed, and the parties' correspondence all bear on what the arrangement was. Section 704(b)
itself contemplates the situation, directing that the share be determined by the partner's interest
taking into account all facts and circumstances. The representative's task is to assemble those facts
honestly rather than to produce an agreement after the event.

<div class="scenario" data-type="fails">
<h3>The LLC that thought it was an S corporation</h3>

Marisol Kasprzak-Achebe forms a single-member LLC and her attorney's operating agreement recites that
the company will be taxed as an {gloss:s-corporation}. She files Forms 1120-S for three years. There is
no Form 2553 and no Form 8832 in the file.

The recital did nothing. A domestic eligible entity with a single owner that files no election is a
{gloss:disregarded-entity}, separate from its owner, so the activity belonged on her Form 1040 and the
Forms 1120-S were returns the company was not entitled to file. The remediation runs through the late
election relief procedures rather than through the operating agreement, and the analysis starts with
whether the entity in fact met the S corporation requirements throughout and whether reasonable cause
for the late election can be shown. The representative's first act, before anything else, is to
establish what was actually filed with the IRS — not what the documents say was intended.
</div>

<div class="scenario" data-type="boundary">
<h3>The special allocation the books never reflected</h3>

A three-partner partnership agreement allocates all of the depreciation from one property to one
partner. The K-1s have followed that allocation for six years. On examination the capital accounts are
requested and turn out never to have been maintained; the partners' balances were tracked as simple
percentages of contributions.

The allocation is at risk. Section 704(b) respects an allocation under the agreement only where it has
substantial economic effect, and where it does not, the distributive share is determined by the
partner's interest in the partnership taking into account all facts and circumstances. Without capital
accounts reflecting the allocation, and without liquidation following those accounts, the economic
effect is difficult to establish. Six years of K-1s are exposed, and the partner who received the
depreciation is the one with the problem. The fix belonged in the accounting, in year one.
</div>

<div class="scenario" data-type="interaction">
<h3>The management fee nobody authorised</h3>

A closely held corporation deducts an annual management fee paid to its majority shareholder's separate
consulting company. There is no written services agreement, no resolution, no invoices describing the
services, and no evidence of what was actually done.

The deduction is not foreclosed — this is a general-track reasonableness question — but everything that
would normally support it is absent, and the examiner's alternative characterisation as a distribution
is available. The representative assembles what exists: the shareholder's actual activities, comparable
arrangements, the corporation's need for the services, and any correspondence. The documents that would
have settled it — a services agreement and a resolution setting the fee — take an hour to prepare in
the year the arrangement begins, and cannot be prepared now without dating them honestly, which sharply
reduces their weight.
</div>

<div class="callout trap">
<strong>An operating agreement does not make an election.</strong> Classification comes from a filed
Form 8832, or from Form 2553 for an S corporation, or from the default rules. A recital in the
governing documents accomplishes nothing by itself, and clients believe otherwise almost universally.
</div>

<div class="callout trap">
<strong>An incomplete Form 8832 is not accepted.</strong> The regulation says an election will not be
accepted unless all required information, including the entity's taxpayer identifying number, is
provided. A form filed without an EIN is not a late election problem; it is no election at all.
</div>

<div class="callout trap">
<strong>The agreement controls the allocation only if the allocation has substantial economic
effect.</strong> Otherwise the distributive share is determined by the partner's interest in the
partnership on all the facts. Capital accounts that were never maintained are the usual reason.
</div>

<div class="callout trap">
<strong>Conduct that departs from the documents is evidence against the documents.</strong> Where the
entity has consistently ignored a provision, that provision supports the return less than the client
expects. Consistency between the papers and the behaviour is what gives the papers their weight.
</div>

<div class="callout trap">
<strong>Foreign entities default differently.</strong> The domestic default turns on the number of
members; the foreign default turns on limited liability. An entity with two foreign members who both
have limited liability defaults to an **association**, not a partnership — which is a corporate return
nobody filed.
</div>

## How this has changed

The check-the-box regulations took effect on 1 January 1997 and replaced the four-factor corporate
resemblance test of the prior regulations with an elective system and a default. That change is the
reason the documents matter in the way they do now: before it, classification was determined by what
the governing documents said about continuity of life, centralisation of management, limited liability
and free transferability; after it, classification is determined by what was filed, with the documents
relevant chiefly to whether the entity is eligible and, for foreign entities, whether members have
limited liability.

The partnership allocation rules under § 704(b) have been stable since the 1984 regulations built
substantial economic effect around capital account maintenance, and the practical failure has been
stable too: agreements that provide for allocations the books never implement.

Two more recent shifts affect what documents a representative needs. The centralised partnership audit
regime enacted by the Bipartisan Budget Act of 2015 made the **partnership representative** designation
a document that must exist and be current, because that person binds the partnership and its partners.
And the capital account reporting requirements on Schedule K-1 have pushed partnerships toward
maintaining tax basis capital accounts, which has surfaced a great many agreements whose economics were
never tracked.

## Exam focus

Know the default classifications: a domestic eligible entity with two or more members is a partnership
and one with a single owner is disregarded, unless an election is filed. Know that the election is made
on Form 8832 and is not accepted unless complete. Know that under § 704(b) an allocation in the
partnership agreement governs only if it has substantial economic effect, and otherwise the share is
determined by the partner's interest in the partnership on all the facts and circumstances. Know that
governing documents evidence eligibility and intent but do not themselves make elections.

## Check yourself

**1. A domestic limited liability company with two members files no classification election. How is it
classified?**

A. As a corporation
B. As a partnership
C. As disregarded from its owners
D. It may not operate until an election is filed

*Answer: B. A single-owner domestic eligible entity that files no election is disregarded.*

**2. An operating agreement states that the company will be taxed as a corporation. No Form 8832 is
filed. What is the classification?**

A. A corporation, as the agreement provides
B. The default classification for the entity, because the agreement does not make an election
C. Undetermined until the IRS rules
D. A partnership in every case

*Answer: B. Classification comes from a filed election or the default rules.*

**3. A partnership agreement allocates depreciation entirely to one partner, but capital accounts were
never maintained. How is the distributive share determined?**

A. As the agreement provides, in all cases
B. Equally among the partners
C. In accordance with the partner's interest in the partnership, taking into account all facts and
   circumstances
D. By the partnership representative's election

*Answer: C. An allocation under the agreement governs only if it has substantial economic effect.*

**4. A Form 8832 is filed without the entity's taxpayer identifying number. What is the effect?**

A. The election is effective when the number is later supplied
B. The election will not be accepted
C. The election is effective but subject to penalty
D. The IRS assigns a number and processes the election

*Answer: B. The regulation conditions acceptance on all required information being provided.*

**5. A foreign eligible entity has two members, both of whom have limited liability, and files no
election. How is it classified?**

A. As a partnership
B. As an association
C. As disregarded from its owners
D. It has no classification until an election is filed

*Answer: B. The foreign default turns on limited liability rather than on the number of members.*
