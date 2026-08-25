---
title: "LLCs"
code: "2.1.1.e"
part: 2
domain: "Business Entities and Considerations"
section: "Business entities"
description: "State law makes the entity; federal tax law decides what it is. A single-member LLC is disregarded for income tax and an employer in its own name for payroll."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: Reg, ref: "§ 301.7701-1", title: "Classification of organizations for federal tax purposes", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-1" }
  - { type: Reg, ref: "§ 301.7701-2", title: "Business entities; definitions", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-2" }
  - { type: Reg, ref: "§ 301.7701-3", title: "Classification of certain business entities", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-3" }
  - { type: IRC, ref: "§ 7701(a)(3)", title: "Corporation defined", url: "https://www.law.cornell.edu/uscode/text/26/7701" }
  - { type: IRC, ref: "§ 1402(a)(13)", title: "Net earnings from self-employment; limited partner exclusion", url: "https://www.law.cornell.edu/uscode/text/26/1402" }
  - { type: IRC, ref: "§ 1361", title: "S corporation defined", url: "https://www.law.cornell.edu/uscode/text/26/1361" }
  - { type: IRC, ref: "§ 1362", title: "Election; revocation; termination", url: "https://www.law.cornell.edu/uscode/text/26/1362" }
forms: []
related: ["2.1.1.a", "2.1.1.b", "2.1.1.d", "2.1.1.g", "2.1.1.h", "2.1.5.b"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the Reg. § 301.7701-1(a)(1) rule that federal classification does not follow local law, the Reg. § 301.7701-2(b) list of per se corporations, the Reg. § 301.7701-3(b)(1) default classifications, the Form 8832 election with its 75-day and 12-month effective-date limits and the 60-month re-election bar, the Reg. § 301.7701-3(c)(1)(v)(C) deemed association election on a timely S corporation election, and the Reg. § 301.7701-2(c)(2)(iv) split under which a disregarded entity is a corporation for employment tax but still disregarded for the self-employment tax of its own owner." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a timeline diagram of the election effective-date window and the 60-month re-election bar, glossary marks, and typed scenarios." }
diagram:
  archetype: "timeline"
  caption: "Electing a new classification: how far the effective date can reach, and when the clock resets"
  events:
    - { when: "75 days before filing", what: "Earliest an effective date named on Form 8832 can reach back to" }
    - { when: "Filing date", what: "The effective date if none is specified on Form 8832" }
    - { when: "12 months after filing", what: "Latest an effective date named on Form 8832 can reach forward to" }
    - { when: "60 months after the effective date", what: "No further classification election allowed, unless more than half the ownership has since turned over" }
---

<div class="plain-terms">
A limited liability company, or LLC, is a business your state sets up. It shields your own money
from business debts. Tax law does not use that state label. It picks its own tax status for the
LLC. The pick depends mostly on how many owners the LLC has. It also depends on whether anyone
files a form asking for a different status. This matters to business owners and their accountants.
It does not affect people who just work as employees. It decides which tax form the business uses.
It decides if the owner pays tax like an employee or like someone who works for themselves. It also
decides if the business can later switch to a new tax status.
</div>

The limited liability company is the entity form the Internal Revenue Code does not mention: no subchapter,
no return of its own, no definition anywhere in the statute. What there is instead is a classification
regime that treats the LLC as raw material — State law creates something, and federal tax law then decides,
on its own terms, what that something is. Almost every mistake made about LLCs is a mistake about which of
those two systems is answering the question in front of you.

## The rule

**Federal classification does not follow local law.** {fig:llc.separate_entity}

That single sentence is the whole architecture. An LLC is unmistakably an entity in the State that
chartered it — it holds title, it can sue, its members are shielded from its debts — and none of that
decides anything for federal tax purposes.

**What is a corporation regardless.** {fig:llc.per_se_corporation}

An LLC is not on that list. It is not organised under a statute that calls it a corporation, so it falls outside the first
limb (Reg. § 301.7701-2(b)(1)), and every other limb is either about a different kind of entity or, in
the case of an association, about the classification election itself. That is precisely why an LLC has a
choice: it is an *eligible entity* under Reg. § 301.7701-3(a).

**What it is if nothing is done.** {fig:llc.default_classification}

**What may be elected.** {fig:llc.election}

**When the election takes effect.** {fig:llc.election_effective_date}

**The bar on changing again.** {fig:llc.sixty_month_limit}

**The S corporation shortcut.** {fig:llc.deemed_s_election}

**Employment tax is a separate question.** {fig:llc.employment_tax}

**Self-employment tax is not.** {fig:llc.owner_self_employment}

**The limited partner exclusion.** {fig:llc.limited_partner_exclusion}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Default classification | {fig:llc.default_classification} | Reg. § 301.7701-3(b)(1) |
| Effective date limits | {fig:llc.election_effective_date} | Reg. § 301.7701-3(c)(1)(iii) |
| Re-election bar | {fig:llc.sixty_month_limit} | Reg. § 301.7701-3(c)(1)(iv) |
| Deemed election on an S election | {fig:llc.deemed_s_election} | Reg. § 301.7701-3(c)(1)(v)(C) |
| Employment taxes | {fig:llc.employment_tax} | Reg. § 301.7701-2(c)(2)(iv)(B) |
| Owner's self-employment tax | {fig:llc.owner_self_employment} | Reg. § 301.7701-2(c)(2)(iv)(C)(2) |
| Limited partner exclusion | {fig:llc.limited_partner_exclusion} | IRC § 1402(a)(13) |

## How it works in practice

Start with the count of members, because that fixes the default and the default is what most LLCs live
under. Two or more members and no election: a partnership, filing Form 1065. One member and no election:
disregarded, and the activity goes on the owner's own return — Schedule C for an individual carrying on a
trade or business, Schedule E for rentals. The LLC itself files nothing for income tax purposes.

The word to hold onto is *default*. An LLC that has never filed Form 8832 has still been classified, by
the regulation rather than by its members. There is no such thing as a missing classification; the
question is only ever whether the classification in force is the one the client wanted.

The effective-date rule is where the practical work is. Both limits are self-correcting rather than
fatal: an election naming a date too far back is effective 75 days before filing, and one naming a date
too far forward is effective 12 months after. A client who formed an LLC in January and comes to you in
June wanting corporate treatment from the start of the year cannot have it under the regulation alone
(Reg. § 301.7701-3(c)(1)(iii)), and needs relief for a late election under separate administrative
authority.

The 60-month bar is a real constraint on planning and it is easy to overlook because of how it is
phrased. It bites on a change of classification, not on the first election, and it is measured from the
effective date of the election, not the filing date. An LLC that elects association status effective 1
January 2026 cannot elect back to partnership status effective any date before 1 January 2031, unless the
membership has turned over by more than half. A newly formed LLC electing association status effective on
the day it is formed has not made a change at all, so its clock has not started.

The deemed election removes what used to be a two-form trap (Reg. § 301.7701-3(c)(1)(v)(C)). An LLC that
wants to be an S corporation need not elect association status on Form 8832 first; a timely Form 2553 does
both, provided the entity meets the small business corporation requirements on the effective date. The S
election presupposes a corporation, and the regulation supplies the classification it needs.

The split between employment tax and self-employment tax produces the most real-world error, because the
same entity is treated two ways in the same year. For payroll the disregarded LLC is a corporation: its
own EIN, its own Forms 941 and 940, Forms W-2 in its own name. For the owner's own tax the disregard
holds: the LLC is not the owner's employer, the owner cannot be on that payroll, and the owner pays
self-employment tax on the LLC's net earnings. An owner who has been drawing a W-2 wage from their own
single-member LLC has a problem in both directions at once.

The limited partner exclusion is regularly stated too broadly (IRC § 1402(a)(13)). Note what the statute
turns on: the words are "limited partner, as such", which qualify the capacity rather than the label, and
guaranteed payments for services actually rendered are expressly carved back in. An LLC member who runs
the business is not obviously a limited partner "as such" — unsettled ground, not a rule to apply
confidently.

## Scenarios

<div class="scenario" data-type="boundary">
<h3>The election that reached the wrong January</h3>
<p>Bertrand organises a consulting {gloss:llc} in Delaware on 14 January 2026 and is its only member. His
accountant tells him in September that he would be better off as an {gloss:s-corporation}. On 20 September 2026
he files Form 2553 specifying an effective date of 1 January 2026.</p>
<p>The date he named is more than 75 days before the filing date, so on the face of the regulation it
cannot stand. What Bertrand needs is not a different reading of Reg. § 301.7701-3(c)(1)(iii) but relief for
a late election, which is administered separately and is available on a showing of reasonable cause. What
he does not need is a Form 8832: under Reg. § 301.7701-3(c)(1)(v)(C) a timely S election carries the
association classification with it. If the relief is denied, the LLC is a disregarded entity for 2026 and
Bertrand's consulting income belongs on Schedule C, with self-employment tax on the whole of it.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The owner on his own payroll</h3>
<p>Idris is the sole member of an LLC that operates two coffee shops and employs eleven people. The LLC
has an EIN, runs a payroll service, and files Forms 941 quarterly. Idris has himself on that payroll at
$5,000 a month, with income tax and FICA withheld, and a Form W-2 is issued to him each January. He has
never filed Form 8832 and has never heard of it. His return shows the W-2 wages and a Schedule C
reporting the shops' profit after deducting his own wages.</p>
<p>The eleven employees are correctly handled: under Reg. § 301.7701-2(c)(2)(iv)(B) the LLC is treated as a
corporation for subtitle C and is properly the employer, filing under its own name and EIN. Idris is not.
Under Reg. § 301.7701-2(c)(2)(iv)(C)(2) the entity is not a corporation for the purpose of employing its
own owner, and so is not his employer. His $60,000 is not wages, the Schedule C deduction for it is not
allowable, the FICA paid was not owed, and the self-employment tax he did not pay was.</p>
</div>

<div class="scenario" data-type="timing">
<h3>The members who changed their minds too soon</h3>
<p>An architecture LLC with four members elects association status effective 1 July 2027, having filed
Form 8832 in May of that year. The corporate rate treatment turns out to suit them badly once profits are
distributed, and in March 2029 they want to go back to {gloss:partnership-entity} treatment.</p>
<p>They cannot, on those facts. Reg. § 301.7701-3(c)(1)(iv) bars a further election during the 60 months
succeeding 1 July 2027 — so nothing before 1 July 2032. The one route out is the ownership test: the
Commissioner may permit the change if more than half the interests at the effective date of the new
election are held by people who held nothing on either the filing date or the effective date of the 2027
election. Two of the four selling out to newcomers is exactly half, and so not enough.</p>
</div>

<div class="scenario" data-type="baseline">
<h3>The second member who arrived quietly</h3>
<p>Wen has run a single-member LLC as a {gloss:disregarded-entity} since 2021, reporting on Schedule C. In August
2026 she gives a 20 percent membership interest to her brother in exchange for his working capital. No
form is filed and no election is made.</p>
<p>The classification changed on the day the interest was transferred, without anyone electing anything.
Under Reg. § 301.7701-3(b)(1)(i) a domestic eligible entity with two or more members is a partnership
unless it elects otherwise, so from August the LLC is a partnership and owes a Form 1065 for 2026 with
Schedules K-1 to both members; Wen's Schedule C covers the earlier part of the year. Because the default
rules did the work, no election has been made and no 60-month clock has started.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>An LLC is never a corporation by default.</strong> It is not in the Reg. § 301.7701-2(b) list,
and State-law limited liability does not put it there.</li>
<li><strong>There is no such thing as an unclassified LLC.</strong> Silence is a classification, supplied
by Reg. § 301.7701-3(b), not the absence of one.</li>
<li><strong>The 75-day reach-back is not a grace period.</strong> An election naming an earlier date is not
void; it is effective 75 days before filing, which is usually not what the client wanted.</li>
<li><strong>The 60-month bar runs from the effective date.</strong> Not from filing, and not for a newly
formed entity electing as of formation.</li>
<li><strong>Do not file Form 8832 before Form 2553.</strong> The S election carries the association
classification with it under Reg. § 301.7701-3(c)(1)(v)(C).</li>
<li><strong>The owner of a disregarded LLC cannot be its employee.</strong> The entity is an employer for
its staff and not for its owner, in the same year, under the same regulation.</li>
<li><strong>Adding or losing a member changes the classification by itself.</strong> No election is filed
and none is needed, but the return that is due changes.</li>
</ul>
</div>

## How this has changed

The classification regime itself is the change. Before 1997 an unincorporated entity was tested against
four corporate characteristics — continuity of life, centralised management, limited liability and free
transferability of interests — and was an association if it had more than two. State legislatures drafting
early LLC statutes wrote them to fail that test deliberately, which is why first-generation operating
agreements contain provisions whose only purpose was to defeat a regulation that no longer exists. The
check-the-box rules replaced the apparatus with an election and a default.

The employment tax rule is the more recent movement and the one still mis-stated in practice
(Reg. § 301.7701-2(c)(2)(iv)). When check-the-box first arrived, a disregarded entity was disregarded for
payroll too, so the owner filed employment tax returns under their own EIN. That was reversed: the entity
became the employer. The carve-back preserving the disregard for the owner's own self-employment tax came
with it, which is why the split exists at all. It is deliberate, not an anomaly.

## Exam focus

Expect the default classification to be the answer more often than the election. The recurring shapes are:
an LLC with a stated number of members and no election, where the answer is the return that is due; an LLC
whose membership changes during the year; a Form 8832 with an effective date outside the window; a client
with both a Form 8832 and a Form 2553 in mind, where the point is that the second is enough; and a
single-member LLC with employees, where the entity is an employer for its staff but not for its owner.

Read carefully for whether a question is asking about State law or federal tax law. Questions that offer
"the LLC is a separate legal entity" as an option are usually testing the classification rule
(Reg. § 301.7701-1(a)(1)), and the separate legal existence is true and beside the point. Where a question
asks which entities are formed under State law, note that S corporation status is a federal election
applied to a corporation formed under State law — the entity is a State creation, the S status is not.

## Check yourself

**1.** An LLC organised in Ohio has three members and has never filed Form 8832. What return does it file
for the year?

*Answer: Form 1065. Under Reg. § 301.7701-3(b)(1)(i) a domestic eligible entity with two or more members
is a partnership unless it elects otherwise, and an LLC is an eligible entity because it is not a
corporation under any limb of Reg. § 301.7701-2(b). No election was needed for that result and none is
needed to continue it.*

**2.** A single-member LLC files Form 8832 on 1 October 2026 electing association status and specifying
an effective date of 1 March 2026. From what date is the election effective?

*Answer: 18 July 2026 — 75 days before filing. Reg. § 301.7701-3(c)(1)(iii) provides that an election
specifying an effective date more than 75 days before the filing date is effective 75 days before it was
filed. The election is not invalid; it simply does not reach March.*

**3.** A domestic LLC with two members files a timely Form 2553 electing S corporation status and meets
every requirement of IRC § 1361(b). It does not file Form 8832. Is the S election effective?

*Answer: yes. Under Reg. § 301.7701-3(c)(1)(v)(C) an eligible entity that timely elects S status is treated
as having elected to be classified as an association, provided it meets the other small business
corporation requirements on the effective date. A separate Form 8832 would be redundant, and filing one
could start the 60-month clock unnecessarily.*

**4.** A single-member LLC has nine employees and pays its owner a monthly amount recorded as salary. Is
the owner's payment subject to FICA withholding?

*Answer: no. The LLC is treated as a corporation for subtitle C purposes as to its nine employees under
Reg. § 301.7701-2(c)(2)(iv)(B), but Reg. § 301.7701-2(c)(2)(iv)(C)(2) preserves the disregard for the
purpose of employing the owner. The entity is not the owner's employer, the payment is not wages, and the
owner's liability is self-employment tax on the entity's net earnings.*

**5.** An LLC that elected association status effective 1 April 2026, with no change in its membership,
wants to be classified as a partnership from 1 January 2029. May it elect?

*Answer: no. Reg. § 301.7701-3(c)(1)(iv) bars a further classification election during the 60 months
succeeding the effective date of the earlier one, so nothing is available before 1 April 2031, and the
ownership-change relief cannot help because the membership has not changed.*
