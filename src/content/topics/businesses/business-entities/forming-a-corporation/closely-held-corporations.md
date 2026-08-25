---
title: "Closely held corporations"
code: "2.1.4.f"
part: 2
domain: "Business Entities"
section: "Forming a corporation"
description: "Closely held means five or fewer individuals owning more than half the value at any time in the second half of the year. It is a burden with one real concession."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 465", title: "Deductions limited to amount at risk", url: "https://www.law.cornell.edu/uscode/text/26/465" }
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 542(a)(2)", title: "Personal holding company; stock ownership requirement", url: "https://www.law.cornell.edu/uscode/text/26/542" }
  - { type: IRC, ref: "§ 269A", title: "Personal service corporations formed or availed of to avoid or evade income tax", url: "https://www.law.cornell.edu/uscode/text/26/269A" }
  - { type: IRC, ref: "§ 318", title: "Constructive ownership of stock", url: "https://www.law.cornell.edu/uscode/text/26/318" }
  - { type: IRC, ref: "§ 535(c)(2)(B)", title: "Accumulated earnings credit; certain service corporations", url: "https://www.law.cornell.edu/uscode/text/26/535" }
forms: []
related: ["2.1.4.e", "2.1.3.f", "2.1.4.b", "2.1.1.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 542(a)(2) stock ownership test that IRC §§ 465(a)(1)(B) and 469(j)(1) both borrow, the § 469(a)(2) list of persons subject to the passive activity rules and the exclusion of widely held C corporations, the § 469(e)(2)(A) concession allowing a closely held C corporation other than a personal service corporation to deduct passive activity losses against net active income, the § 469(j)(2) and § 269A(b) definition of a personal service corporation, and the § 465(a) at-risk limitation." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed the four existing scenarios (boundary, interaction, fails, baseline)." }
---

<div class="plain-terms">
A company counts as closely held when just a few people own most of its stock. This page explains what
that label changes for tax purposes. It affects companies taxed on their own, not partnerships, and not
big firms with many spread-out owners. Being closely held usually brings extra limits on writing off
certain losses. It also brings one real perk. A closely held company can often use a loss from a side
deal to offset income from its main work. Almost no one else gets that perk. This page decides which
companies get the label, and what follows once they do.
</div>

"Closely held" is not a description in the Code; it is a defined term borrowed from the personal holding
company rules and used in two places that matter. A C corporation meeting the test is subject to the
at-risk rules and to the passive activity loss rules, both of which a widely held C corporation escapes
entirely. The definition itself has three features that decide most questions: it counts individuals
rather than shareholders, it measures value rather than votes, and it is satisfied by ownership at any
single moment in the second half of the year.

## The rule

**The definition.** {fig:closely.definition}

**Who is caught by the passive rules.** {fig:closely.passive_persons}

**And the concession they get.** {fig:closely.net_active_income}

**Personal service corporations, which do not.** {fig:closely.psc}

**Where that definition comes from.** {fig:closely.psc_source}

**The at-risk limitation.** {fig:closely.at_risk}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Definition | {fig:closely.definition} | IRC § 465(a)(1)(B), § 469(j)(1), § 542(a)(2) |
| Persons subject to passive rules | {fig:closely.passive_persons} | IRC § 469(a)(2) |
| Net active income offset | {fig:closely.net_active_income} | IRC § 469(e)(2)(A) |
| Personal service corporation | {fig:closely.psc_source} | IRC § 269A(b) |
| At-risk limitation | {fig:closely.at_risk} | IRC § 465(a) |

## How it works in practice

Read the definition word by word, because each phrase is doing work. *At any time during the last half of
the taxable year* — a single day is enough, and the first half of the year is irrelevant. *More than 50 percent in value* (IRC § 542(a)(2)) — not by vote, and not exactly half. *Of its outstanding stock* — the whole
class structure by value. *Owned, directly or indirectly, by or for not more than 5 individuals* —
individuals, so a corporate or partnership shareholder does not count as one of the five, though the
attribution rules can push its stock down to individuals behind it.

The consequence of "individuals" is often missed. A corporation whose stock is held entirely by three
partnerships is not thereby outside the test; the attribution rules look through to the individuals
behind them. Conversely, a corporation with eight individual shareholders can still be closely held if any
five of them hold more than half the value between them — which, in an evenly distributed eight-way split,
they do.

What follows from the status is two burdens and one concession.

*The at-risk rules.* IRC § 465(a)(1)(B) applies the at-risk limitation to a C corporation meeting the same
IRC § 542(a)(2) test, so a loss from a covered activity is allowed only up to the amount the corporation
is at risk at the close of the year. A widely held C corporation is not subject to IRC § 465 at all.

*The passive activity rules.* IRC § 469(a)(2) lists the persons caught: individuals, estates and trusts,
closely held C corporations, and personal service corporations. Again, a widely held C corporation is
outside the section entirely, which is one of the most significant structural differences between a
public company and a private one and is rarely presented as such.

*The concession.* IRC § 469(e)(2)(A) allows a closely held C corporation — but expressly *not* a personal
service corporation — to deduct its passive activity loss against **net active income**. No other
taxpayer subject to the passive loss rules can do that. An individual with a passive loss and a large
salary gets nothing; a closely held C corporation with the same passive loss and the same amount of
operating income deducts it. That single subsection is a genuine reason to hold loss-generating passive
investments inside a closely held C corporation rather than personally, and it is the one place where
closely held status is an advantage.

The exclusion of personal service corporations from the concession is deliberate and is why the two
definitions have to be kept apart. A personal service corporation under IRC § 469(j)(2) takes its meaning
from IRC § 269A(b)(1) — a corporation whose principal activity is the performance of personal services,
substantially performed by employee-owners — with the employee-owner threshold reduced from more than ten
percent to any ownership for this purpose. Most professional practices are both closely held *and*
personal service corporations, and the second characterisation costs them the concession the first would
have given.

Note finally that the same IRC § 542(a)(2) test appears in a third place, without the "closely held" label:
IRC § 535(c)(2)(B) reduces the accumulated earnings credit for a corporation whose principal function is
performing services in one of eight listed fields. That is a different test again — a closed list of
fields, not a general services test — and a corporation can be closely held, a personal service
corporation, and a § 535(c)(2)(B) service corporation, with three different consequences.

## Scenarios

<div class="scenario" data-type="boundary">
<h3>Eight shareholders and still closely held</h3>
<p>A corporation's stock is held by eight unrelated individuals in equal shares throughout the year. Its
adviser says it cannot be closely held because eight is more than five.</p>
<p>It is closely held. IRC § 542(a)(2) asks whether at any time during the last half of the taxable year
more than 50 percent in value of the outstanding stock is owned by or for **not more than 5 individuals**
— not whether there are five or fewer shareholders in total. Any five of these eight hold 62.5 percent
between them, comfortably more than half. The test is satisfied by the existence of a qualifying group of
five, and in any roughly even distribution of eight or fewer holders it will always be satisfied.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The passive loss the corporation could use</h3>
<p>Berengar owns all the stock of a closely held C corporation that manufactures components and separately
holds a rental property generating a $180,000 passive loss. The manufacturing business produces $650,000
of net active income. Berengar also holds an identical rental property personally, with an identical loss,
alongside a $650,000 salary.</p>
<p>The corporation deducts its $180,000; Berengar deducts nothing. Under IRC § 469(e)(2)(A) a closely held
C corporation other than a personal service corporation may allow its passive activity loss as a deduction
against net active income, and to that extent the loss is not disallowed under IRC § 469(a). Berengar
personally has no such rule: his salary is not passive income, and his loss is suspended under
IRC § 469(b) until he has passive income or disposes of the activity. Identical economics, opposite
answers, on the strength of one subsection.</p>
</div>

<div class="scenario" data-type="fails">
<h3>The practice that lost the concession</h3>
<p>A veterinary practice operates as a C corporation. Four veterinarians own it equally and perform
substantially all the services. It buys a minority interest in a commercial property partnership that
generates a passive loss, expecting to deduct it against practice income as a {gloss:closely-held-corporation}.</p>
<p>It cannot. The practice is closely held — four individuals hold 100 percent of the value — but it is
also a personal service corporation: its principal activity is the performance of personal services,
substantially performed by employee-owners, within IRC § 269A(b)(1) as applied by IRC § 469(j)(2). And
IRC § 469(e)(2)(A) is available to a closely held C corporation "other than a personal service
corporation". The passive loss is suspended under IRC § 469(a) and (b). The two characterisations point
in opposite directions and the second wins.</p>
</div>

<div class="scenario" data-type="baseline">
<h3>The public company that escapes both</h3>
<p>A listed manufacturer with tens of thousands of shareholders, none holding more than two percent, funds
a loss-making leasing venture in which it does not materially participate.</p>
<p>Neither limitation applies. It fails the IRC § 542(a)(2) test — no five individuals own more than half
the value — so it is not a closely held C corporation, and IRC § 469(a)(2) does not list a widely held C
corporation among the persons subject to the {gloss:passive-activity} rules. Nor is it within the {gloss:at-risk-rules},
since IRC § 465(a)(1)(B) reaches only a C corporation meeting the same § 542(a)(2) test. Its losses are
subject to the ordinary rules and to nothing else. That a public company is outside two of the principal
loss limitation regimes is worth stating plainly, because it is not how the sections are usually
described.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Five individuals, not five shareholders.</strong> A corporation with eight equal holders is
closely held, because five of them hold more than half.</li>
<li><strong>Value, not votes.</strong> IRC § 542(a)(2) measures more than 50 percent in value.</li>
<li><strong>Any single day in the second half.</strong> The first half of the year is irrelevant.</li>
<li><strong>Widely held C corporations are outside both regimes.</strong> Neither IRC § 465 nor IRC § 469
reaches them.</li>
<li><strong>The net active income offset is the one advantage.</strong> IRC § 469(e)(2)(A), and no other
taxpayer subject to the passive rules has it.</li>
<li><strong>A personal service corporation loses that advantage.</strong> The subsection says "other than
a personal service corporation".</li>
<li><strong>Three overlapping definitions.</strong> Closely held, personal service corporation, and the
IRC § 535(c)(2)(B) service corporation are three different tests with three different consequences.</li>
</ul>
</div>

## How this has changed

The definitions have been stable. IRC § 542(a)(2) has carried the same stock ownership test since the
personal holding company rules were written, and IRC §§ 465 and 469 have borrowed it since they were
enacted.

What has changed is the stack of limitations sitting above them. A closely held C corporation's loss must
now clear the at-risk rules and the passive activity rules, and a non-corporate owner's share of business
losses must additionally clear the excess business loss limitation, which was made permanent in 2025. The
sequencing has not changed but the list has grown, and material presenting IRC §§ 465 and 469 as the
operative constraints for a private business is describing a shorter list than the one that now applies.

The concession in IRC § 469(e)(2)(A) has not been amended and is worth watching precisely because it has
survived unchanged for so long. It is the only place in IRC § 469 where a category of taxpayer is allowed
to use passive losses against non-passive income without disposing of the activity, and its continued
existence is the main structural argument for holding passive investments inside an operating C
corporation — an argument that runs against the general preference for pass-through entities and is
therefore easy to overlook.

## Exam focus

The definition question is the reliable one and it is usually set to break one of the three elements: too
many individuals, exactly fifty percent rather than more, or ownership concentrated in the first half of
the year rather than the second. Read the facts for which element the question is testing.

Where a question asks what follows from closely held status, the answers are the at-risk rules, the passive
activity rules, and the net active income offset. Where it asks what a personal service corporation loses,
the answer is the offset.

And where a question describes a large public corporation with passive losses, the answer is usually that
IRC § 469 does not apply to it at all.

## Check yourself

**1.** A corporation has nine individual shareholders holding equal shares throughout the year. Is it a
closely held C corporation?

*Answer: yes. IRC § 542(a)(2) asks whether more than 50 percent in value of the outstanding stock is owned
by or for not more than 5 individuals at any time during the last half of the taxable year. Five of the
nine hold 55.6 percent between them, which is more than half. The number of shareholders in total does not
matter.*

**2.** Six individuals each own 16.67 percent of a corporation for the first six months of the year, after
which one of them sells to a widely dispersed group. Is the corporation closely held for that year?

*Answer: on those facts, probably not. The test looks only at the **last half** of the taxable year, and
after the sale no five individuals hold more than half the value. Concentrated ownership in the first half
of the year is irrelevant to IRC § 542(a)(2).*

**3.** A closely held C corporation that is not a personal service corporation has a $220,000 passive
activity loss and $500,000 of net active income. What may it deduct?

*Answer: the whole $220,000. IRC § 469(e)(2)(A) allows a closely held C corporation other than a personal
service corporation to take its passive activity loss as a deduction against net active income, and to
that extent the loss is not disallowed under IRC § 469(a). No individual, estate, trust or personal service
corporation has this rule.*

**4.** An architecture practice incorporated as a C corporation, owned equally by five architects who
perform substantially all the services, has a passive activity loss. May it deduct it against practice
income?

*Answer: no. It is a personal service corporation within IRC § 469(j)(2), which takes its meaning from
IRC § 269A(b)(1), and IRC § 469(e)(2)(A) is available only to a closely held C corporation "other than a
personal service corporation". The loss is suspended under IRC § 469(a) and carried forward by
IRC § 469(b).*

**5.** A widely held listed corporation has losses from an activity in which it does not materially
participate. Are they subject to IRC § 469?

*Answer: no. IRC § 469(a)(2) applies the passive activity rules to individuals, estates and trusts,
closely held C corporations and personal service corporations. A widely held C corporation is not among
them, and it is outside IRC § 465 for the same reason — that section reaches only a C corporation meeting
the IRC § 542(a)(2) test.*
