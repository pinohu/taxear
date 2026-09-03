---
title: "Residency status and citizenship"
code: "1.1.1.c"
part: 1
domain: "Preliminary Work and Taxpayer Data"
section: "Preliminary work to prepare tax returns"
description: "Who is taxed on worldwide income: the green card test that ends only three ways, the weighted day count, and the identifying numbers for people without one."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "N. O."
authorities:
  - { type: IRC, ref: "§ 7701(b)", title: "Definition of resident alien and nonresident alien" }
  - { type: Reg, ref: "§ 301.7701(b)-1", title: "Resident alien", url: "https://www.law.cornell.edu/cfr/text/26/301.7701(b)-1" }
  - { type: IRC, ref: "§ 6109", title: "Identifying numbers" }
  - { type: Pub, ref: "519", title: "U.S. Tax Guide for Aliens" }
  - { type: Form, ref: "W-7", title: "Application for IRS Individual Taxpayer Identification Number" }
  - { type: Form, ref: "W-7A", title: "Application for Taxpayer Identification Number for Pending U.S. Adoptions" }
forms: []
related: ["1.1.1.d", "1.1.1.e", "1.1.1.b", "1.1.1.i", "1.1.1.o", "1.1.1.n", "1.1.1.f", "1.1.1.g", "1.2.1.g", "1.3.2.d"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft." }
---

<div class="plain-terms">
This page answers one question: does the IRS tax you on income from around the world, or
only on income tied to the United States? A U.S. citizen is taxed on income from
everywhere, no matter where they live. A non-citizen is taxed that way only if they count
as a resident, based on a green card, enough days spent in the country, or a special
first-year choice. Everyone else pays tax only on U.S.-connected income instead. This
matters most for green card holders who move abroad, students and workers on visas, and
anyone who splits a year between countries. It matters less for a citizen who never
leaves. What this page decides is which test someone meets, when their status starts or
ends, and which ID number they need if they do not qualify for a social security number.
</div>

## The rule

Citizenship and residency decide the most consequential question on any individual return: whether
the taxpayer is taxed on **worldwide income** or only on income connected to the United States. A
United States citizen is taxed on worldwide income wherever they live. An alien individual is taxed
that way only if they are a **resident alien**, and an alien is treated as a resident for a calendar
year **if and only if** they meet one of three tests (IRC § 7701(b)(1)(A)):

1. **The green card test** — the individual is a lawful permanent resident of the United States at
   any time during the calendar year.
2. **The substantial presence test** of § 7701(b)(3).
3. **The first-year election** under § 7701(b)(4).

Anyone who is neither a citizen nor a resident under that subparagraph is a **nonresident alien**
(§ 7701(b)(1)(B)). There is no fourth category and no partial status: the year is divided by
residency starting and ending dates, not by degrees of connection.

**The green card test ends in exactly three ways.** Reg. § 301.7701(b)-1(b)(1) is emphatic:
"Resident status is deemed to continue unless it is rescinded or administratively or judicially
determined to have been abandoned." Rescission means a **final administrative or judicial order of
exclusion or deportation** — final meaning no longer subject to appeal. Abandonment may be initiated
**by the individual**, by the immigration authority, or by a consular officer; where the individual
initiates it, status ends when the application for abandonment or a letter stating the intent to
abandon, with the registration card enclosed, is filed. Nothing else works. In particular, **failing
the substantial presence test does not end green card status** — the two tests are alternative routes
into residency, not a single test with two halves.

**The substantial presence test is a weighted count.** Under § 7701(b)(3)(A) an individual meets it
for a calendar year if **both** conditions are satisfied: presence on {fig:residency.spt_current_year},
**and** a weighted total of {fig:residency.spt_weighted}.

**Two escape hatches.** The closer connection exception in § 7701(b)(3)(B) disapplies the test where
there is {fig:residency.closer_connection}. It does not apply where the individual had an application
for adjustment of status pending, or took other steps toward lawful permanent residence, during the
year. Separately, days of presence are simply **not counted** for an *exempt individual* —
{fig:residency.exempt_individuals}.

## Current figures

| Item | Requirement |
| --- | --- |
| Substantial presence — current year | {fig:residency.spt_current_year} |
| Substantial presence — weighted total | {fig:residency.spt_weighted} |
| Closer connection exception | {fig:residency.closer_connection} |
| Exempt individuals whose days are not counted | {fig:residency.exempt_individuals} |
| ATIN qualifications | {fig:atin.qualifications} |
| ATIN deactivation | {fig:atin.deactivation} |

## How it works in practice

**Do the arithmetic in the order the statute gives it.** Count the current year in full, add a third
of the first preceding year and a sixth of the second, and test the sum against 183 — but check the
31-day condition first, because an individual present for fewer than 31 days in the current year fails
regardless of how large the weighted total is. The most common error runs the other way: computing a
weighted total above 183 and stopping without confirming the current-year minimum.

**Working the test backwards is a standard exam move.** Given prior-year day counts, the minimum
current-year presence is 183 less the weighted contribution of the two preceding years. Ninety days
two years ago contributes fifteen; a hundred and twenty days last year contributes forty; the
remainder needed is a hundred and twenty-eight.

**Identify the residency starting date, not just the status.** Section 7701(b)(2)(A) treats a
first-year resident as a resident only for the portion of the year beginning on the residency
starting date — the first day of presence while a lawful permanent resident for green card cases,
the first day of presence in the year for substantial presence cases. That produces a **dual-status
year**, which is a different return from either a full-year resident or a full-year nonresident
return, and it is where the preparation work actually lies.

**Identifying numbers follow from status, and there are three.** A social security number is for
those eligible for one. An **ITIN** is a nine-digit number the IRS issues for federal tax purposes
only, to a resident or nonresident alien, or their spouse or dependent, who has a federal tax purpose
and is **not eligible for an SSN** — available regardless of immigration status. The IRS is explicit
about what an ITIN does not do: it does not qualify the holder for social security benefits or the
earned income tax credit, does not provide or change immigration status, does not authorise work, and
does not serve as identification outside the federal tax system.

**An ATIN is for a pending adoption and nothing else.** It is a temporary number for a child in a
**domestic** adoption where the adopting taxpayers cannot obtain the child's SSN. All five
qualifications in the figures table must be met. Note what is *not* among them: a completed adoption.
The number exists precisely because the adoption is pending — once it is final, the parents obtain an
SSN and notify the IRS, which deactivates the ATIN. Absent that notification the number deactivates
automatically at two years, with a reminder at eighteen months.

<div class="scenario" data-type="boundary">
<h3>Counting to the minimum</h3>

Anneliese Okonkwo-Batista was present in the United States for 90 days two years ago and 120 days
last year. Her adviser needs to know how many days of presence this year would make her a resident
alien.

Two years ago contributes a sixth of 90, which is 15. Last year contributes a third of 120, which is
40. The two preceding years therefore supply 55 of the 183 required, leaving 128 days needed in the
current year. That figure also clears the 31-day condition comfortably, so 128 is the answer. Had the
prior years supplied 160 of the 183, the remainder would have been 23 — and she still would not meet
the test, because the current-year minimum of 31 days is a separate requirement that the weighted
total cannot satisfy.
</div>

<div class="scenario" data-type="procedural">
<h3>The green card holder who moved home</h3>

Osvaldo Fitzwilliam-Adeyemi obtained a green card in 2019, moved back to his home country in 2023,
and has been present in the United States only a few days a year since. He has filed nothing since
2023, on the view that he plainly fails the substantial presence test.

He is still a resident alien and has been all along, taxed on worldwide income. Resident status is
deemed to continue unless rescinded or administratively or judicially determined to have been
abandoned, and none of those has happened — he simply left. The remedy is prospective and
procedural: file the outstanding returns, and if he intends to give up the status, file the
application for abandonment or send the letter with the card enclosed, which fixes the date the
status ends. Doing that in 2026 does not undo 2024 and 2025. This is the most expensive
misunderstanding in this topic and it is entirely avoidable at the point the client leaves.
</div>

<div class="scenario" data-type="interaction">
<h3>The graduate student who counted her days</h3>

Priyanka Vasquez-Lindholm has been in the United States on a student visa for three years, present
almost every day. Her weighted total is far above 183 and she prepares to file as a resident alien.

Her days may not count at all. A **student** is an exempt individual under § 7701(b)(5)(A)(iii), and
days on which an individual is an exempt individual are excluded from the substantial presence
count — which is why the exemption is worth checking before the arithmetic rather than after. The
exemption is not indefinite and has its own conditions, so the analysis is about how long she has been
present in that status and whether she continues to comply with its terms. Filing the wrong return
here changes not just the rate but the entire scope of income reported.
</div>

<div class="scenario" data-type="baseline">
<h3>The straightforward pending adoption</h3>

A couple is partway through adopting a child born in the United States. The adoption isn't final, the
birth parents won't provide the child's social security number, and the couple wants to claim the child
as a {gloss:dependent} this year.

This is exactly what an ATIN is for. Once the qualifications in the figures table are met, the IRS
issues the temporary number, and the couple claims the child as a dependent with it — nothing further
needed. Once the adoption is final, they get the child's own SSN and notify the IRS, retiring the ATIN.
</div>

<div class="scenario" data-type="fails">
<h3>The visitor who never came close</h3>

A businessman from abroad attends a twenty-day conference this year and was present eighteen days the
year before. He holds no green card.

He is a nonresident alien. The green card test fails outright. The substantial presence test fails too
— the 31-day current-year condition alone rules it out, regardless of how large the weighted total from
prior years might be. No first-year election helps without first meeting the substantial presence test
in a later year. He is taxed only on U.S.-connected income, not on what he earns at home.
</div>

<div class="scenario" data-type="timing">
<h3>The same year, two residency statuses</h3>

Marek Ionescu-Whitfield arrives on a work visa on May 1 and stays daily through year-end, easily
clearing the substantial presence test. He was barely present in the United States the year before.

He meets the test for the year, but § 7701(b)(2)(A) makes him resident only from his residency starting
date — his first day of presence in the qualifying year, here May 1. Months before that are a
nonresident return; months after, a resident return — both within one tax year. Same person, same year,
two filing postures split by a single date.
</div>

<div class="callout trap">
<strong>Failing the substantial presence test does not surrender a green card.</strong> The two are
alternative routes into resident status. Green card status ends only on rescission by a final order
of exclusion or deportation, or on an administrative or judicial determination of abandonment.
</div>

<div class="callout trap">
<strong>Thirty-one days is a separate condition.</strong> Both parts of § 7701(b)(3)(A) must be met.
A weighted total over 183 does not create residency for someone present fewer than 31 days in the
current year.
</div>

<div class="callout trap">
<strong>An ATIN is not for a completed adoption.</strong> It is for a pending one. A completed
adoption is the event that ends the ATIN, not a condition of obtaining it — and the number is for
domestic adoptions, or foreign adoptions where the child already holds a Permanent Resident Alien
Card or Certificate of Citizenship.
</div>

<div class="callout trap">
<strong>An ITIN is not an EITC ticket.</strong> The IRS states directly that an ITIN does not qualify
the holder for social security benefits or the earned income tax credit. It also does not authorise
work or affect immigration status, and it is issued regardless of immigration status.
</div>

<div class="callout trap">
<strong>The closer connection exception is forfeited by seeking a green card.</strong> Section
7701(b)(3)(C) withdraws it from anyone who, at any time during the year, had an application for
adjustment of status pending or otherwise took steps toward lawful permanent residence. A client
cannot claim closer ties abroad while applying to stay.
</div>

## How this has changed

The architecture of § 7701(b) dates to the Deficit Reduction Act of 1984, which replaced a
facts-and-circumstances residency inquiry with the objective green card and substantial presence
tests that are still in force. Neither the weighted multipliers nor the 31-day and 183-day thresholds
have moved since.

What has aged is the vocabulary of the regulations. Reg. § 301.7701(b)-1(b)(3) still refers to the
**Immigration and Naturalization Service**, an agency abolished in 2003 and succeeded for these
purposes by USCIS, and still cites the abandonment application as "INS Form I-407" and the
registration card as "Form I-151 or Form I-551." The regulation anticipates this and says so —
directing the reader to any replacement form number — but a practitioner meeting it for the first time
should read past the agency name rather than conclude the rule is obsolete. This is the same pattern
as the procedural rules governing Appeals, which still speak of district directors.

On the identifying number side the practical change has been administrative rather than statutory:
ITIN application and renewal procedures, the documentation the IRS will accept, and the expiration
regime have all been revised repeatedly. Confirm the current requirements on the IRS ITIN pages and in
the Form W-7 instructions before advising, rather than working from a remembered procedure.

## Exam focus

Know the three routes to resident alien status and that they are alternatives. Be able to compute the
substantial presence test both forwards and backwards — the weighted multipliers of one, one-third and
one-sixth, the 183-day total, and the separate 31-day current-year condition. Know that green card
status ends only by rescission or by an administrative or judicial determination of abandonment, and
that failing the substantial presence test is not one of them. Know the exempt individual categories
by name. On identifying numbers, know that an ATIN is for a **pending** domestic adoption and that a
completed adoption is not a qualification for it.

## Check yourself

**1. Which is not a means of ending lawful permanent resident status?**

A. A voluntary written statement of intent to abandon, filed with the registration card
B. Failing the substantial presence test
C. Administrative termination by the immigration authority
D. A final judicial order of exclusion or deportation

*Answer: B. Resident status is deemed to continue unless rescinded or administratively or judicially
determined to have been abandoned; the substantial presence test is a separate route into residency.*

**2. An individual was present 90 days two years ago and 120 days last year. What is the minimum
current-year presence that meets the substantial presence test?**

A. 32
B. 88
C. 100
D. 128

*Answer: D. The prior years contribute 15 and 40, leaving 128 of the 183 required — and 128 also
clears the separate 31-day condition.*

**3. Which is not a requirement for obtaining an adoption taxpayer identification number?**

A. The child is eligible to be claimed as a dependent
B. The child's SSN cannot be obtained from the birth parents despite reasonable attempts
C. A foreign adoption has a Permanent Resident Alien Card or Certificate of Citizenship
D. The adoption process has been completed

*Answer: D. The number exists for a pending adoption; completion is what ends it.*

**4. An individual is present in the United States for 40 days in the current year and has a weighted
three-year total of 200 days. What is the result?**

A. Resident alien, because the weighted total exceeds 183
B. Resident alien, because presence exceeded 31 days
C. Nonresident alien, unless the closer connection exception is claimed
D. Resident alien only if a first-year election is made

*Answer: B. Both conditions are met — 40 days exceeds the 31-day minimum and the weighted total
exceeds 183 — so the test is satisfied.*

**5. Which of these does an ITIN do?**

A. Authorise the holder to work in the United States
B. Qualify the holder for the earned income tax credit
C. Serve as identification outside the federal tax system
D. Provide a taxpayer identification number for federal tax purposes

*Answer: D. The IRS states that an ITIN does none of the other three.*

**6. Zara Mbeki-Sørensen meets the substantial presence test this year with 150 days of presence, keeps her tax home in Denmark and has a closer connection there, but in August filed an application for adjustment of status to lawful permanent resident. Can she use the closer connection exception?**
(A) Yes, because her tax home and closer connection are both in Denmark (B) Yes, provided the application is still pending at year-end (C) No, because taking steps toward lawful permanent residence during the year forfeits the exception (D) No, because the exception is available only to exempt individuals
*Answer: C. IRC § 7701(b)(3)(C) withdraws the closer connection exception from anyone who, at any time during the year, had an application for adjustment of status pending or otherwise took steps toward lawful permanent residence.*

**7. Lucía arrives on a work visa on 1 June, is present every day afterwards and meets the substantial presence test for the year. She holds no green card and was not present in the two prior years. For which part of the year is she a resident alien?**
(A) The entire calendar year, because the test is met for the year (B) From 1 June, her residency starting date, producing a dual-status year (C) From 1 January of the following year (D) From the day her weighted count reached 183
*Answer: B. IRC § 7701(b)(2)(A) treats a first-year resident as a resident only for the portion of the year beginning on the residency starting date — for a substantial presence case, the first day of presence in the year — which produces a dual-status year.*

**8. Kwame has been in the United States on a student visa for almost every day of the last three years and holds no green card. Before running the weighted day count, what must his adviser check?**
(A) Whether his weighted three-year total exceeds 183 (B) Whether he was present at least 31 days in the current year (C) Whether he is an exempt individual whose days are not counted at all (D) Whether he has made a first-year election
*Answer: C. A student is an exempt individual under IRC § 7701(b)(5)(A)(iii), and days on which an individual is an exempt individual are excluded from the substantial presence count, so the exemption is checked before the arithmetic rather than after.*
