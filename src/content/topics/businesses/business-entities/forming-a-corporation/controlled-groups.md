---
title: "Controlled groups"
code: "2.1.4.e"
part: 2
domain: "Business Entities"
section: "Forming a corporation"
description: "A parent-subsidiary group needs eighty percent of vote or value, so either test alone will do. Membership is fixed on one day in December and foreign members drop out."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 1563", title: "Definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/1563" }
  - { type: IRC, ref: "§ 1561", title: "Limitation on accumulated earnings credit in the case of certain controlled corporations", url: "https://www.law.cornell.edu/uscode/text/26/1561" }
  - { type: IRC, ref: "§ 535(c)", title: "Accumulated earnings credit", url: "https://www.law.cornell.edu/uscode/text/26/535" }
  - { type: IRC, ref: "§ 881", title: "Tax on income of foreign corporations not connected with United States business", url: "https://www.law.cornell.edu/uscode/text/26/881" }
  - { type: IRC, ref: "§ 6655(g)(2)", title: "Large corporation; controlled group aggregation", url: "https://www.law.cornell.edu/uscode/text/26/6655" }
  - { type: IRC, ref: "§ 501(a)", title: "Exemption from taxation", url: "https://www.law.cornell.edu/uscode/text/26/501" }
  - { type: IRC, ref: "§ 801", title: "Tax imposed on life insurance companies", url: "https://www.law.cornell.edu/uscode/text/26/801" }
  - { type: IRC, ref: "§ 1504(a)", title: "Affiliated group defined", url: "https://www.law.cornell.edu/uscode/text/26/1504" }
forms: []
related: ["2.1.4.f", "2.1.3.f", "2.1.3.g", "2.1.1.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 1563(a)(1) parent-subsidiary test at 80 percent of voting power or value, the § 1563(a)(2) brother-sister test at more than 50 percent held identically by five or fewer individuals, estates or trusts, the § 1563(a)(3) and (4) combined group and insurance company rules, the § 1563(b)(1) fixing of component membership on a 31 December with the § 1563(b)(2) excluded members including a foreign corporation subject to IRC § 881, and the § 1561(a) sharing of a single accumulated earnings credit among the component members." }
---

Controlled group status is a definition that does no work by itself: nothing follows from being in a
group until another provision says it does. What makes it worth knowing is how many provisions do —
the accumulated earnings credit, the large corporation test for estimated tax, and a long list of
thresholds elsewhere in the Code all treat the members as one. The definition itself has two limbs that
are frequently confused with the affiliated group test used for consolidated returns, and the difference
between them is a single word.

## The rule

**Parent-subsidiary.** {fig:cgroup.parent_subsidiary}

**Brother-sister.** {fig:cgroup.brother_sister}

**And combined.** {fig:cgroup.combined}

**Who is a member, and when.** {fig:cgroup.component_member}

**Who is not.** {fig:cgroup.excluded}

**What follows: one credit between them.** {fig:cgroup.shared_credit}

**The credit being shared.** {fig:aet.minimum_credit}

**And the estimated tax consequence.** {fig:est.large_corporation}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Parent-subsidiary | {fig:cgroup.parent_subsidiary} | IRC § 1563(a)(1) |
| Brother-sister | {fig:cgroup.brother_sister} | IRC § 1563(a)(2) |
| Component member | {fig:cgroup.component_member} | IRC § 1563(b)(1) |
| Excluded members | {fig:cgroup.excluded} | IRC § 1563(b)(2) |
| Shared credit | {fig:cgroup.shared_credit} | IRC § 1561(a) |

## How it works in practice

The word that separates this from the consolidated return rules is "or". A parent-subsidiary controlled
group under IRC § 1563(a)(1) requires stock possessing at least eighty percent of the total combined
voting power *or* at least eighty percent of the total value. The affiliated group definition in
IRC § 1504(a)(2), which governs consolidated returns and the hundred percent dividends received deduction,
requires eighty percent of voting power *and* eighty percent of value. So a corporation can be in a
controlled group on the strength of voting power alone while falling outside the affiliated group
definition entirely — and a practitioner who learns one test and applies it to the other will be wrong in
both directions.

The brother-sister test is the harder of the two to apply because of the word "identical". Five or fewer
persons who are individuals, estates or trusts must own more than fifty percent of each corporation, but
each person's ownership counts only to the extent it is *identical* with respect to each corporation. So
a shareholder holding sixty percent of one company and twenty percent of another contributes twenty
percent to the identical-ownership total, not sixty. Running the test means building a grid: each person
down the side, each corporation across the top, and the lowest figure in each row is what counts.

Note who can be counted in a brother-sister group — individuals, estates and trusts. A corporation cannot
be one of the five persons, which is why a structure held through a holding company is tested under the
parent-subsidiary limb instead.

Membership is fixed on a single day, the 31 December included in the taxable year (IRC § 1563(b)(1)), so a corporation that was in the group for eleven months and left in
November is not a component member for that year, while one that joined in December is. That is a
bright-line rule and it creates an obvious planning date, which IRC § 1563(b)(2)(A) partly answers by
excluding a corporation that was a member for less than half the days of the year preceding that
31 December.

The exclusions in IRC § 1563(b)(2) are worth learning as a list because they come up in questions. A
corporation is an excluded member if it was in the group for less than half the relevant days, is exempt
under IRC § 501(a) other than one taxed on unrelated business income, **is a foreign corporation subject
to tax under IRC § 881**, is an insurance company taxed under IRC § 801 outside a § 1563(a)(4) group, or is
a franchised corporation. The foreign corporation exclusion is the one most often tested, because a group
structure with an overseas subsidiary looks larger than it counts.

What follows from membership is the point of the definition. IRC § 1561(a) gives the component members
**one** accumulated earnings credit between them, divided equally unless regulations permit otherwise, and
reduced to the lower service-corporation figure if any member is a service corporation. Separately,
IRC § 6655(g)(2)(B)(ii) aggregates component members for the large corporation test, so a group whose
members are individually small can collectively cross the million-dollar threshold and lose the prior-year
estimated tax safe harbour for all of them.

## Scenarios

<div class="scenario">
<h3>Voting power without value</h3>
<p>A parent holds 100 percent of a subsidiary's voting common stock, which represents 30 percent of the
subsidiary's total value. The remaining 70 percent of value is non-voting preferred held by outside
investors.</p>
<p>There is a controlled group and there is no affiliated group. IRC § 1563(a)(1)(B) requires stock
possessing at least 80 percent of the total combined voting power of all voting classes <em>or</em> at
least 80 percent of the total value, and the voting limb is satisfied at 100 percent. IRC § 1504(a)(2),
which governs consolidated returns and the qualifying dividend for the 100 percent dividends received
deduction, requires both — so it fails on value. The parent and subsidiary share one accumulated earnings
credit under IRC § 1561(a) and are aggregated for the estimated tax large corporation test, but cannot
file a consolidated return.</p>
</div>

<div class="scenario">
<h3>The identical ownership grid</h3>
<p>Three individuals own two corporations. In Corporation X: Aurel 70 percent, Bernadette 20 percent,
Clemens 10 percent. In Corporation Y: Aurel 25 percent, Bernadette 60 percent, Clemens 15 percent.</p>
<p>Take the lower figure for each person: Aurel 25, Bernadette 20, Clemens 10 — an identical-ownership
total of 55 percent. That exceeds fifty percent, so IRC § 1563(a)(2) is satisfied and X and Y are a
brother-sister controlled group, provided the same five-or-fewer persons also own more than fifty percent
of each corporation on the ordinary reading, which they do at 100 percent each. Had Clemens held nothing
in Y, the identical total would have been 45 percent and there would be no group — a change in one
minority holding, in one company, deciding the status of both.</p>
</div>

<div class="scenario">
<h3>The subsidiaries that did not all count</h3>
<p>Corporation A holds voting interests as follows: Corporation B, 90 percent; Corporation C, 85 percent;
Corporation D, 75 percent; and Corporation E, 90 percent, E being a foreign corporation subject to tax
under IRC § 881.</p>
<p>Two subsidiaries qualify. B and C are inside the group, each meeting the 80 percent test in
IRC § 1563(a)(1). D is outside it at 75 percent — the threshold is a floor, not an approximation. And E,
though held at 90 percent, is an excluded member under IRC § 1563(b)(2)(C) as a foreign corporation
subject to tax under IRC § 881, so it is not a component member however the ownership looks. The group for
IRC § 1561 purposes is A, B and C, and the single accumulated earnings credit is divided among those
three.</p>
</div>

<div class="scenario">
<h3>Three small companies and one estimated tax problem</h3>
<p>An individual owns three corporations outright, each with taxable income of about $420,000 a year. Each
has always based its estimated tax instalments on the prior year's tax.</p>
<p>They cannot, beyond the first instalment. The three are a brother-sister controlled group under
IRC § 1563(a)(2) — one person, identical ownership of 100 percent in each, comfortably more than fifty
percent. IRC § 6655(g)(2)(B)(ii) aggregates component members of a controlled group for the large
corporation test, and $1,260,000 of combined taxable income exceeds the million-dollar threshold. Each
corporation is therefore a large corporation and loses the prior-year branch under IRC § 6655(d)(2)(A),
save for the first instalment. None of them is large on its own, and the owner is unlikely to have been
told.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Controlled group is "or"; affiliated group is "and".</strong> IRC § 1563(a)(1) takes voting
power or value; IRC § 1504(a)(2) requires both.</li>
<li><strong>Brother-sister counts identical ownership only.</strong> Take the lower figure for each person
across the corporations.</li>
<li><strong>Only individuals, estates and trusts count as the five persons.</strong> A corporate holder
puts the structure into the parent-subsidiary limb instead.</li>
<li><strong>Membership is tested on 31 December.</strong> Not throughout the year — with a partial answer
in the less-than-half-the-days exclusion.</li>
<li><strong>Foreign subsidiaries drop out.</strong> IRC § 1563(b)(2)(C) excludes a foreign corporation
subject to tax under IRC § 881.</li>
<li><strong>Eighty percent is a floor.</strong> Seventy-five percent is outside, however close it
looks.</li>
<li><strong>One credit between them.</strong> IRC § 1561(a), divided equally unless regulations allow
otherwise.</li>
</ul>
</div>

## How this has changed

IRC § 1563 has been stable in structure for decades. The significant movement has been in IRC § 1561,
which once limited a long list of multiple tax benefits — the graduated corporate rate brackets, the
alternative minimum tax exemption, and the accumulated earnings credit among them — and now limits only
the accumulated earnings credit.

The reason is that the benefits it used to ration have mostly disappeared. The graduated corporate rate
schedule was replaced by a single flat rate for taxable years beginning after 2017, so there are no
brackets to share; and the corporate alternative minimum tax that IRC § 1561 once addressed was repealed
and replaced by a book-income regime with a billion-dollar threshold that no small group approaches. The
section's heading and its remaining content are a good deal narrower than most descriptions of it, and
material listing the multiple benefits IRC § 1561 restricts is describing a provision that has been pared
back.

What has not narrowed is the reach of IRC § 1563 itself, because dozens of provisions outside part II
borrow the definition. The estimated tax large corporation test, the gross receipts test for the cash
method, the small business exemptions from inventory accounting and uniform capitalisation, and the
research credit rules all aggregate controlled group members. The definition matters more than the part
it sits in.

## Exam focus

The parent-subsidiary computation is the reliable question: check each subsidiary against eighty percent
of voting power or value, and then remove any excluded members. The foreign subsidiary is the most common
exclusion offered.

For brother-sister questions, build the grid and take the lower figure for each person. The distractor is
usually the total ownership rather than the identical ownership.

Where a question asks what follows from controlled group status, the answers within this section are the
single accumulated earnings credit and the aggregation for the estimated tax large corporation test.
Remember that a group cannot file a consolidated return on controlled group status alone — that needs the
affiliated group test.

## Check yourself

**1.** A parent owns stock possessing 85 percent of a subsidiary's voting power but only 40 percent of its
value. Is there a parent-subsidiary controlled group?

*Answer: yes. IRC § 1563(a)(1) requires stock possessing at least 80 percent of the total combined voting
power of all classes entitled to vote **or** at least 80 percent of the total value of all classes. The
voting limb is satisfied. The same facts would not create an affiliated group under IRC § 1504(a)(2),
which requires both tests.*

**2.** Two individuals own two corporations. In the first: Person A 80 percent, Person B 20 percent. In
the second: Person A 30 percent, Person B 70 percent. Is there a brother-sister group?

*Answer: yes. Identical ownership takes the lower figure for each person — 30 for A and 20 for B, a total
of 50 percent. That is not more than 50 percent, so on these figures there is **no** group. The margin is
exact and the test requires more than half, so 50 percent fails.*

**3.** A parent owns 90 percent of a foreign corporation subject to tax under IRC § 881. Is that
corporation a component member of the parent's controlled group?

*Answer: no. IRC § 1563(b)(2)(C) treats as an excluded member a corporation which is a foreign corporation
subject to tax under IRC § 881 for the taxable year. The ownership percentage is irrelevant once the
exclusion applies.*

**4.** Four corporations are component members of a controlled group, none of them a service corporation.
What accumulated earnings credit is available to each?

*Answer: one quarter of the single statutory amount each. IRC § 1561(a) limits the component members to
one $250,000 amount for computing the accumulated earnings credit under IRC § 535(c)(2) and (3), divided
equally among them unless regulations permit an unequal allocation. Had any member been a service
corporation described in IRC § 535(c)(2)(B), the shared amount would have been $150,000.*

**5.** Three corporations in a brother-sister controlled group each have taxable income of $500,000. Are
they large corporations for estimated tax purposes?

*Answer: yes. IRC § 6655(g)(2)(B)(ii) aggregates component members of a controlled group in applying the
large corporation test, and $1,500,000 exceeds the $1,000,000 threshold. Each therefore loses the
prior-year branch under IRC § 6655(d)(2)(A) except for the first instalment, even though none of them
reaches the threshold alone.*
