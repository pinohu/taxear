---
title: "General business credits"
code: "2.2.2.m"
part: 2
domain: "Business Tax Preparation"
section: "Business expenses, deductions and credits"
description: "The general business credit is one credit made of many, capped by tax liability, and a credit for an expense generally means giving up the deduction for it."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 38", title: "General business credit", url: "https://www.law.cornell.edu/uscode/text/26/38" }
  - { type: IRC, ref: "§ 39", title: "Carryback and carryforward of unused credits", url: "https://www.law.cornell.edu/uscode/text/26/39" }
  - { type: IRC, ref: "§ 41", title: "Credit for increasing research activities", url: "https://www.law.cornell.edu/uscode/text/26/41" }
  - { type: IRC, ref: "§ 44", title: "Expenditures to provide access to disabled individuals", url: "https://www.law.cornell.edu/uscode/text/26/44" }
  - { type: IRC, ref: "§ 45R", title: "Employee health insurance expenses of small employers", url: "https://www.law.cornell.edu/uscode/text/26/45R" }
  - { type: IRC, ref: "§ 280C", title: "Certain expenses for which credits are allowable", url: "https://www.law.cornell.edu/uscode/text/26/280C" }
  - { type: IRC, ref: "§ 174A", title: "Domestic research or experimental expenditures", url: "https://www.law.cornell.edu/uscode/text/26/174A" }
  - { type: IRC, ref: "§ 174", title: "Foreign research or experimental expenditures", url: "https://www.law.cornell.edu/uscode/text/26/174" }
  - { type: IRC, ref: "§ 190", title: "Expenditures to remove architectural and transportation barriers", url: "https://www.law.cornell.edu/uscode/text/26/190" }
  - { type: IRC, ref: "§ 901", title: "Taxes of foreign countries and of possessions of United States", url: "https://www.law.cornell.edu/uscode/text/26/901" }
forms: []
related: ["2.2.2.c", "2.2.2.h", "2.2.2.i", "2.2.2.a", "2.2.1.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 38(a) structure and the IRC § 38(c)(1) limitation by reference to net income tax, the tentative minimum tax and a share of net regular tax liability above a floor, the IRC § 39(a)(1) one-year carryback and twenty-year carryforward, and three component credits — IRC § 44 disabled access, IRC § 41 research and IRC § 45R small employer health insurance. Records the IRC § 280C(c) rule that a research credit reduces the deduction for the same expenditure unless a reduced credit is elected, and that IRC § 280C(c)(1) now refers to IRC § 174A." }
---

The general business credit is not a credit. It is a container: a long list of separate credits,
each with its own eligibility rules, added together and then subjected to a single limitation and
a single carryover regime. Almost every question is either about one component or about the
container.

## The rule

**What it is.** {fig:gbc.components} (IRC § 38(a)). The current year business credit is itself the
sum of the credits listed in IRC § 38(b), which runs to dozens of paragraphs.

**The cap.** {fig:gbc.limit} (IRC § 38(c)(1)).

**What happens to the excess.** {fig:gbc.carryback_forward} (IRC § 39(a)(1)).

**Disabled access.** {fig:gbc.access_credit} (IRC § 44(a)), available to
{fig:gbc.access_eligible} (IRC § 44(b)).

**Research.** {fig:gbc.research_credit} (IRC § 41(a)), and
{fig:gbc.research_no_double} (IRC § 280C(c)).

**Small employer health insurance.** {fig:gbc.health_credit} (IRC § 45R(b)), available to
{fig:gbc.health_eligible} (IRC § 45R(d)(1)).

**The foreign tax credit is not in the container.** IRC § 901 sits in subpart A, and IRC § 38(c)(1)
computes net income tax after "the credits allowable under subparts A and B" — so the foreign tax
credit is taken first and reduces the room available for the general business credit.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| What the credit is | {fig:gbc.components} | IRC § 38(a) |
| The limitation | {fig:gbc.limit} | IRC § 38(c)(1) |
| Carryback and carryforward | {fig:gbc.carryback_forward} | IRC § 39(a)(1) |
| Disabled access credit | {fig:gbc.access_credit} | IRC § 44(a) |
| Who qualifies for it | {fig:gbc.access_eligible} | IRC § 44(b) |
| Research credit | {fig:gbc.research_credit} | IRC § 41(a) |
| No double benefit | {fig:gbc.research_no_double} | IRC § 280C(c) |
| Small employer health credit | {fig:gbc.health_credit} | IRC § 45R(b) |
| Who qualifies for it | {fig:gbc.health_eligible} | IRC § 45R(d)(1) |

## How it works in practice

**Compute the components, then the container.** Each credit in IRC § 38(b) has its own
computation, its own eligibility rules and often its own form. They are added together into the
current year business credit, and only then does IRC § 38(c)(1) test the total against tax
liability. A business with two credits does not test them separately.

**The limitation has a floor built into it.** {fig:gbc.limit}
(IRC § 38(c)(1)). Read the second limb carefully: the reduction bites only on net regular tax
liability **above** the statutory floor. The consequence is that a business with regular tax
liability at or below that floor can use the credit against the whole of it, and above it a
quarter of the excess is protected from the credit.

**Nothing is refundable.** The general business credit reduces tax to zero at most. That is why
IRC § 39 matters so much: {fig:gbc.carryback_forward} (IRC § 39(a)(1)). One year back, twenty
years forward, and the order in IRC § 39(a)(2) is earliest first.

**The disabled access credit is small, capped, and elective.**
{fig:gbc.access_credit} (IRC § 44(a)). Note the shape: spending below the lower figure gives
nothing and spending above the upper one gives nothing more, so the credit has a hard ceiling
however much is spent. And {fig:gbc.access_eligible} (IRC § 44(b)) confines it to a genuinely small
business, on either of two alternative tests, and requires an election.

**The research credit and the deduction are alternatives, not both.**
{fig:gbc.research_no_double} (IRC § 280C(c)). The default is that the deduction for the same
expenditure is reduced by the credit; the taxpayer may instead elect a reduced credit and keep the
full deduction. Which is better depends on the taxpayer's marginal rate, and the election is made
on a timely filed return.

**The small employer health insurance credit is narrow and hard to qualify for.**
{fig:gbc.health_eligible} (IRC § 45R(d)(1)) requires no more than 25 full-time equivalent
employees, average wages below a ceiling, and a qualifying arrangement, and IRC § 45R(c) phases the
credit out as either measure rises. It is also confined to a credit period, and to premiums for
qualified health plans offered through an Exchange — a condition that excludes most employer
plans as a practical matter.

**The foreign tax credit is a different animal.** It is not a component of the general business
credit at all. It sits in subpart A, is taken before the general business credit, and reduces the
net income tax figure against which IRC § 38(c)(1) measures. A business with a large foreign tax
credit therefore has less room for its general business credits, without either credit being
disallowed as such.

<div class="scenario">
<h3>Two credits, one limitation</h3>

A corporation has regular tax liability of $185,000, no tentative minimum tax exposure, and no
subpart A or B credits. It generates a $28,000 research credit and a $5,000 disabled access credit
in the same year.

The current year business credit is $33,000 — the two are added, not tested separately.

{fig:gbc.limit} (IRC § 38(c)(1)): net income tax is $185,000. The second limb is a quarter of the
excess of $185,000 over the statutory floor, a quarter of $160,000 — $40,000. The greater of the tentative minimum
tax (nil) and $40,000 is $40,000, so the limitation is $185,000 less $40,000, or $145,000.

The whole $33,000 is used. Note the structure: the limitation is generous for a profitable
business, and the $25,000 floor means a small business with modest liability faces no reduction at
all.

Reverse the facts: give the corporation regular tax liability of $18,000, below the floor. The
second limb is a quarter of nothing, so the limitation is the whole $18,000. The credit is used to that extent, and
{fig:gbc.carryback_forward} (IRC § 39(a)(1)) sends the remaining $15,000 back one year and then
forward for twenty.
</div>

<div class="scenario">
<h3>The ramp that cost twenty thousand</h3>

A café with gross receipts of $780,000 spends $20,000 installing an accessible entrance, an
accessible lavatory and induction loop equipment.

{fig:gbc.access_eligible} (IRC § 44(b)) is satisfied on the first alternative — gross receipts for
the preceding year did not exceed $1,000,000 — so the business need not count employees at all.
It elects the section.

{fig:gbc.access_credit} (IRC § 44(a)) gives half the expenditures within the statutory band, so
the credit is $5,000 — the maximum — and the rest of the spending generates no credit.

The rest is not wasted: the portion not taken into account for the credit is recovered under the
ordinary rules, as a deduction under IRC § 190 for architectural barrier removal to the extent
that section applies, or otherwise capitalised into the building and depreciated. IRC § 44(d)(7)
denies a double benefit for the amount that produced the credit.

Note how easily a business fails the eligibility test. Receipts of $1,100,000 with 40 full-time
employees fails both alternatives and gets no credit at all, on identical spending.
</div>

<div class="scenario">
<h3>Credit or deduction, on the same research</h3>

A software company has $600,000 of domestic research or experimental expenditures and computes a
$74,000 research credit under IRC § 41(a). Its marginal federal rate is 21 percent.

**Default treatment.** {fig:gbc.research_no_double} (IRC § 280C(c)(1)) reduces the deductible
expenditure by the credit: it deducts $526,000 rather than $600,000, and takes the full $74,000
credit. The lost deduction costs it 21 percent of $74,000, or $15,540, so the net benefit is
$58,460.

**Reduced credit election.** IRC § 280C(c)(2) lets it keep the full $600,000 deduction and take a
reduced credit instead. The reduction is calibrated so that the two routes are close to
equivalent at the corporate rate, which is why the election is usually made for administrative
convenience — one figure on the return instead of two — rather than for a material difference in
tax.

The election matters far more for a pass-through whose owners are at higher individual rates,
where the value of the forgone deduction and the size of the reduction do not match.

Note the drafting: IRC § 280C(c)(1) now speaks of "domestic research or experimental expenditures
(as defined in section 174A(b))," a section that did not exist before July 2025.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>It is one credit, not many.</strong> {fig:gbc.components} (IRC § 38(a)). The components
are added and the limitation is applied once to the total.</p>

<p><strong>None of it is refundable.</strong> The credit reduces tax, never below zero. An answer
offering a refund of an unused general business credit is wrong.</p>

<p><strong>The carryback is one year and the carryforward twenty.</strong>
{fig:gbc.carryback_forward} (IRC § 39(a)(1)). Not the indefinite carryforward that applies to net
operating losses.</p>

<p><strong>The disabled access credit is capped at a small figure.</strong>
{fig:gbc.access_credit} (IRC § 44(a)) — the expenditure band is narrow, so the credit has a low
ceiling whatever the spending.</p>

<p><strong>A credit for an expense costs the deduction.</strong> {fig:gbc.research_no_double}
(IRC § 280C(c)). The taxpayer may elect a reduced credit instead, but cannot have both in full.</p>

<p><strong>The foreign tax credit is not a general business credit.</strong> It is a subpart A
credit taken earlier, and it reduces the net income tax against which IRC § 38(c)(1) measures.</p>
</div>

## How this has changed

**The research credit's interaction with the deduction was rewritten in 2025 without changing the
credit.** IRC § 280C(c)(1) formerly reduced "the amount of research or experimental expenditures
otherwise taken into account"; it now reads "the domestic research or experimental expenditures
(as defined in section 174A(b))." That change followed Pub. L. 119-21 § 70302, which added
IRC § 174A allowing a current deduction for domestic research and left foreign research under
IRC § 174's capitalisation regime. The credit under IRC § 41 was untouched, but the expenditure it
reduces is now defined by a section that did not exist a year earlier.

**The credit limitation itself has not moved.** IRC § 38(c)(1) has read in its present form since
the alternative minimum tax provisions were rewritten in 2017, and the floor within it has never
been indexed — a figure that has stood since 1986 and whose real value has fallen sharply since.

**Two of the component credits on this page are frozen in the same way.** The IRC § 44 expenditure
band has never been indexed, so the maximum credit has been the same since the section was
enacted. The IRC § 45R average wage ceiling is indexed by cross-reference,
but the 25 full-time equivalent employee test is not, and the Exchange condition has confined the
credit to a small population since 2014.

The general lesson for a preparer is that the container is stable and the components move. The
question to ask each year is not how IRC § 38 works but whether the particular credit still exists
and on what terms — several of the paragraphs in IRC § 38(b) are for credits that have expired
and remain listed only because carryforwards survive them.

## Exam focus

Know the structure: components added, single limitation, one year back and twenty forward. Most
questions about "the general business credit" as such are testing one of those three.

Know that the limitation is expressed as net income tax less the greater of tentative minimum tax
and a share of net regular tax liability above a statutory floor, and that the floor means a small
liability is fully available.

For the component credits, learn the eligibility conditions rather than the arithmetic. The
disabled access credit turns on gross receipts or employee count and an election; the small
employer health credit turns on employee count, average wages and an Exchange plan.

Finally, expect a no-double-benefit question. A credit for an expenditure normally costs the
deduction for the same expenditure, with an election to take a reduced credit instead.

## Check yourself

**1.** A business has regular tax liability of $95,000, no tentative minimum tax and no other
credits. What is its general business credit limitation?

*Answer: $77,500. {fig:gbc.limit} (IRC § 38(c)(1)) — the second limb takes a quarter of the excess
of $95,000 over the statutory floor, a quarter of $70,000, or $17,500. Net income tax of $95,000
less the greater of nil and $17,500 leaves $77,500.*

**2.** A business spends $60,000 removing architectural barriers. Its gross receipts last year
were $850,000. What is the disabled access credit?

*Answer: The statutory maximum. {fig:gbc.access_credit} (IRC § 44(a)) — half the expenditures
within the band, and the band is narrow, so the credit is capped however much more is spent.
{fig:gbc.access_eligible} is satisfied on the gross receipts test.*

**3.** A corporation cannot use $40,000 of general business credit this year. What happens to it?

*Answer: {fig:gbc.carryback_forward} (IRC § 39(a)(1)) — it is carried back one year and then
forward to each of the twenty following years, taken into account in the order the earliest arose
under IRC § 39(a)(2). It is never refunded.*

**4.** A company takes a $50,000 research credit. What happens to its deduction for the same
research?

*Answer: It is reduced by $50,000, unless the company elects a reduced credit under
IRC § 280C(c)(2) and keeps the full deduction. {fig:gbc.research_no_double} — the default is the
reduction, and the election must be made on a timely filed return.*

**5.** Is the foreign tax credit part of the general business credit?

*Answer: No. IRC § 901 is in subpart A, and IRC § 38(c)(1) computes net income tax after the
credits allowable under subparts A and B. The foreign tax credit is therefore taken first and
reduces the amount of tax against which the general business credit is measured.*
