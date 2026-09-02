---
title: "Corporate minimum tax credit"
code: "2.1.3.h"
part: 2
domain: "Business Entities"
section: "Corporations in general"
description: "Almost no corporation pays the corporate minimum tax, and the ones that do carry the credit forever. Everyone else has a tentative minimum tax of exactly zero."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 53", title: "Credit for prior year minimum tax liability", url: "https://www.law.cornell.edu/uscode/text/26/53" }
  - { type: IRC, ref: "§ 55", title: "Alternative minimum tax imposed", url: "https://www.law.cornell.edu/uscode/text/26/55" }
  - { type: IRC, ref: "§ 56A", title: "Adjusted financial statement income", url: "https://www.law.cornell.edu/uscode/text/26/56A" }
  - { type: IRC, ref: "§ 59(k)", title: "Applicable corporation", url: "https://www.law.cornell.edu/uscode/text/26/59" }
  - { type: IRC, ref: "§ 59A", title: "Tax on base erosion payments", url: "https://www.law.cornell.edu/uscode/text/26/59A" }
  - { type: IRC, ref: "§ 6655", title: "Failure by corporation to pay estimated income tax", url: "https://www.law.cornell.edu/uscode/text/26/6655" }
  - { type: IRC, ref: "§ 11", title: "Tax imposed on corporations", url: "https://www.law.cornell.edu/uscode/text/26/11" }
forms: []
related: ["2.1.3.g", "2.1.3.d", "2.1.3.a", "2.1.1.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 53(a) and (b) minimum tax credit as the excess of prior years' minimum tax over credits already taken, the § 53(c) limitation to the excess of regular tax over tentative minimum tax, the § 53(e) modifications for corporations substituting years beginning after 2022 and adding the § 59A tax to the regular tax figure, the § 55(a) imposition and the § 55(b)(2) tentative minimum tax at 15 percent of adjusted financial statement income for an applicable corporation and zero for every other corporation, and the § 59(k)(1) definition of an applicable corporation with the billion-dollar three-year average test and the fact that the status once acquired is not re-tested from scratch." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios." }
---

<div class="plain-terms">
This credit lets a huge company get back money it once paid under a separate minimum tax. It only matters
once regular tax catches back up to that older payment. It applies only to companies with roughly a
billion dollars or more in yearly book income. Almost every other company can skip this topic entirely.
Once a company crosses that line, it tends to stay classified that way, even if its income later drops.
The credit sets how much of that old payment a company can use to cut this year's bill. It carries forward
for as long as it takes.
</div>

The corporate minimum tax credit exists to make the corporate {gloss:alternative-minimum-tax} a timing provision
rather than a permanent one: a corporation that pays minimum tax in a year when its book income exceeds
its taxable income gets the money back in a later year when the relationship reverses. Almost no
{gloss:c-corporation} is inside the regime — the entry threshold is a billion dollars of book income — but the
credit machinery is examinable because it explains what the minimum tax is *for*, and because the
provision that produces it now has two entirely different versions living in the same section.

## The rule

**The credit.** {fig:mtc.credit}

**Its ceiling.** {fig:mtc.limitation}

**The corporate version.** {fig:mtc.corporate_application}

**The tax that generates it.** {fig:camt.imposition}

**What the tentative minimum tax is.** {fig:camt.rate}

**Who is inside the regime.** {fig:camt.applicable_corporation}

**And why leaving is hard.** {fig:camt.sticky}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Credit | {fig:mtc.credit} | IRC § 53(a), (b) |
| Limitation | {fig:mtc.limitation} | IRC § 53(c) |
| Corporate modifications | {fig:mtc.corporate_application} | IRC § 53(e) |
| Tentative minimum tax | {fig:camt.rate} | IRC § 55(b)(2) |
| Applicable corporation | {fig:camt.applicable_corporation} | IRC § 59(k)(1) |

## How it works in practice

Begin with the sentence that disposes of almost every corporation: for a corporation that is not an
applicable corporation, the tentative minimum tax for the year is **zero**. Not a small number, not a
computation that usually produces nothing — zero, by statute. That has two consequences. Such a
corporation can never owe minimum tax, because IRC § 55(a) imposes the tax only on the excess of the
tentative minimum tax over the regular tax. And the IRC § 53(c) limitation, which caps the credit at the
excess of regular tax over tentative minimum tax, is unconstrained for it.

Getting inside the regime requires the average annual adjusted financial statement income test: more than
a billion dollars of average adjusted financial statement income over the three-year period ending with
the year in question. Note the two things that make this test harder to escape than to meet. It is
measured on *book* income, computed under IRC § 56A rather than under the ordinary tax rules. And under
IRC § 59(k)(1)(A) a corporation is an applicable corporation if it met the test for *one or more taxable
years prior to* the year in question ending after 31 December 2021 — so the status is acquired once and
carried forward, rather than re-tested from scratch each year. A corporation whose book income falls
below the threshold does not automatically leave the regime.

The credit itself is straightforward once the tax exists. Minimum tax paid in earlier years accumulates,
and in a later year the corporation may claim it against its regular tax to the extent the regular tax
exceeds that year's tentative minimum tax. There is no expiry: the credit carries forward indefinitely until used
(IRC § 53(b)). So the minimum tax is, over the life of the corporation, a prepayment rather than an
additional charge — provided the corporation eventually has years in which regular tax exceeds tentative
minimum tax.

IRC § 53(e) makes two adjustments for corporations that repay careful reading. First, it substitutes "the
net minimum tax for all prior taxable years beginning after 2022" for the general reference to years
beginning after 1986. That date is the start of the current corporate regime, and it means a corporation's
credit pool under the current rules begins in 2023 — pre-2018 corporate minimum tax credits belong to a
different regime that was refunded and closed out. Second, the regular tax figure in the limitation is
increased by the base erosion tax for the year, which enlarges the room available for the credit.

Note what the credit is *not*. It is not a credit against the minimum tax; it is a credit against the
regular tax in a later year. And it does not reduce the minimum tax when paid — the corporation pays in
full and recovers later, which is why the provision is a timing measure and why a corporation permanently
in a book-over-tax position never recovers anything.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The corporation that could not owe it</h3>
<p>A profitable manufacturing corporation with annual revenues of $180,000,000 and financial statement
income of about $22,000,000 asks whether it should be modelling the corporate alternative minimum tax
alongside its regular tax.</p>
<p>No. Its adjusted financial statement income is nowhere near the billion-dollar threshold, so it is not
an applicable corporation under IRC § 59(k)(1), and IRC § 55(b)(2)(B) provides that the tentative minimum
tax for a corporation which is not an applicable corporation is zero. IRC § 55(a) imposes tax only on the
excess of the tentative minimum tax over the regular tax, and nothing exceeds a positive regular tax by
zero. The provision does not apply and no modelling is needed — which is the correct answer for the
overwhelming majority of corporations and worth stating plainly, because the regime's existence generates
a good deal of unnecessary anxiety.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The year the credit could be used</h3>
<p>An applicable corporation paid corporate alternative minimum tax of $40,000,000 across three earlier
years, none of which has yet been recovered. In the current year its regular tax is $95,000,000 and its
tentative minimum tax is $70,000,000. It has no base erosion tax.</p>
<p>It may use $25,000,000 of the credit this year. IRC § 53(c) caps the credit at the excess of the regular
tax liability, reduced by the specified credits, over the tentative minimum tax for the year — here
$95,000,000 less $70,000,000. The remaining $15,000,000 of credit is not lost: IRC § 53(b) carries it
forward without limit, and it is available in any later year in which the same excess arises. Had the
corporation also had a base erosion tax, IRC § 53(e)(2) would have increased the regular tax figure by that
amount and enlarged the room available.</p>
</div>

<div class="scenario" data-type="timing">
<h3>The corporation that shrank and stayed inside</h3>
<p>A corporation met the average annual adjusted financial statement income test for its 2023 and 2024
years. In 2025 and 2026 its book income falls sharply following a disposal, and its three-year average is
now well under the threshold.</p>
<p>It remains an applicable corporation. IRC § 59(k)(1)(A) defines the term by reference to a corporation
that meets the income test "for one or more taxable years which are prior to such taxable year and end
after December 31, 2021" — so the status attaches on first meeting the test and is not re-tested afresh
each year. Falling below the threshold does not by itself take a corporation out. That asymmetry is
deliberate: the regime is easy to enter and, by design, not easy to leave, which is why the entry test is
worth watching before it is crossed rather than after.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The credit pool that started in 2023</h3>
<p>A large corporation has records showing minimum tax credit carryforwards generated in 2015 and 2016
under the earlier corporate alternative minimum tax, which its accounting system has continued to track.
It becomes an applicable corporation for 2024 and pays minimum tax. In 2027 it wishes to claim the whole
accumulated pool.</p>
<p>Only the post-2022 amounts are in the pool. IRC § 53(e)(1) provides that in the case of a corporation,
IRC § 53(b)(1) is applied by substituting "the net minimum tax for all prior taxable years beginning after
2022" for the general reference to prior years beginning after 1986. The 2015 and 2016 credits belong to
the earlier regime, which was repealed and whose credits were dealt with separately at the time. The
accounting system is tracking something the current section does not recognise, and the substitution in
IRC § 53(e)(1) is the whole reason.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Zero, by statute.</strong> IRC § 55(b)(2)(B) sets the tentative minimum tax of a
non-applicable corporation at zero, so it can never owe the tax.</li>
<li><strong>The threshold is book income, not taxable income.</strong> Adjusted financial statement income
under IRC § 56A.</li>
<li><strong>Applicable corporation status sticks.</strong> IRC § 59(k)(1)(A) looks at any prior year
ending after 2021, so falling below the threshold does not by itself get you out.</li>
<li><strong>The credit is against regular tax.</strong> Not against the minimum tax, and not in the year
the minimum tax is paid.</li>
<li><strong>The corporate pool starts in 2023.</strong> IRC § 53(e)(1) substitutes years beginning after
2022 for the general 1986 date.</li>
<li><strong>The base erosion tax enlarges the room.</strong> IRC § 53(e)(2) adds it to the regular tax
figure in the limitation.</li>
<li><strong>The credit never expires.</strong> But it is only ever recovered in a year when regular tax
exceeds tentative minimum tax.</li>
</ul>
</div>

## How this has changed

There have been two corporate alternative minimum taxes and they have almost nothing in common except the
section number.

The first ran from 1987 and was built on tax-based adjustments and preferences — accelerated depreciation,
percentage depletion, and an adjustment by reference to adjusted current earnings. It was repealed for
taxable years beginning after 2017, and the credits it had generated were made refundable over a
transitional period and then closed out. Material describing corporate minimum tax by reference to
adjusted current earnings or to a list of preference items is describing that repealed regime.

The current one applies for taxable years beginning after 2022 and is built on something else entirely:
financial statement income, at the rate in IRC § 55(b)(2)(A), for corporations averaging more than a
billion dollars of book income over three years. It is a book-income tax wearing the old name, and the substitution in
IRC § 53(e)(1) — the credit pool starting in 2023 rather than 1986 — is the seam between the two regimes
showing in the statute.

The practical significance for most corporations is that this topic went from something every large-ish
corporation had to compute to something almost none of them do. But the compliance consequence recorded
under estimated tax remains: IRC § 6655(g)(1) includes the IRC § 55 tax in the definition of tax for
estimated payment purposes, and IRC § 6655(e)(2) requires adjusted financial statement income to be
annualised, so an applicable corporation projects a book-income measure quarterly.

## Exam focus

The single most useful fact is that the tentative minimum tax of a corporation which is not an applicable
corporation is zero. Where a question describes an ordinary corporation and asks about the alternative
minimum tax, the answer is that it does not apply.

Where the corporation is inside the regime, the credit computation is mechanical: prior minimum tax paid,
less credits already taken, capped at the excess of regular tax over this year's tentative minimum tax,
carried forward indefinitely.

Watch for two dates. The applicable corporation test looks at years ending after 31 December 2021; the
credit pool under IRC § 53(e)(1) begins with years beginning after 2022. They are not the same date and
they are doing different jobs.

## Check yourself

**1.** A corporation with $60,000,000 of adjusted financial statement income computes its regular tax and
asks what its tentative minimum tax is.

*Answer: zero. IRC § 55(b)(2)(B) provides that in the case of any corporation which is not an applicable
corporation the tentative minimum tax for the taxable year is zero, and the corporation is far below the
billion-dollar average annual adjusted financial statement income test in IRC § 59(k)(1)(B). It cannot owe
tax under IRC § 55(a).*

**2.** An applicable corporation has a minimum tax credit carryforward of $30,000,000. Its regular tax for
the year is $52,000,000 and its tentative minimum tax is $45,000,000. How much may it use?

*Answer: $7,000,000. IRC § 53(c) limits the credit to the excess of the regular tax liability, reduced by
the credits allowable under the specified subparts, over the tentative minimum tax for the year. The
unused $23,000,000 carries forward indefinitely under IRC § 53(b).*

**3.** A corporation met the average annual adjusted financial statement income test for 2023 but has not
met it since. Is it an applicable corporation for 2026?

*Answer: yes, on the face of IRC § 59(k)(1)(A), which defines an applicable corporation as one meeting the
income test for one or more taxable years prior to the year in question that end after 31 December 2021.
The status attaches on first meeting the test and is not re-tested annually from scratch; a fall in book
income does not by itself remove it.*

**4.** What rate applies to an applicable corporation's adjusted financial statement income in computing
its tentative minimum tax?

*Answer: 15 percent. IRC § 55(b)(2)(A) makes the tentative minimum tax of an applicable corporation the
excess of 15 percent of adjusted financial statement income for the year, determined under IRC § 56A, over
the corporate alternative minimum tax foreign tax credit.*

**5.** A corporation carries forward minimum tax credits generated in 2016 under the previous corporate
alternative minimum tax. May they be used against its current regular tax under IRC § 53?

*Answer: no. IRC § 53(e)(1) applies IRC § 53(b)(1) to a corporation by substituting "the net minimum tax
for all prior taxable years beginning after 2022" for the general reference to years beginning after 1986.
Credits from the earlier regime, which was repealed for years beginning after 2017, are outside the pool
the current section recognises.*

**6. An applicable corporation pays $12,000,000 of corporate alternative minimum tax for 2026. Against what, and when, may the resulting credit be used?**
(A) Against the 2026 minimum tax itself, reducing the amount paid (B) Against regular tax in a later year in which regular tax exceeds tentative minimum tax (C) Against regular tax in 2026 only, with no carryforward (D) Against tentative minimum tax in the next year in which minimum tax is again owed
*Answer: B. IRC § 53(a) and (b) allow prior years' minimum tax as a credit against regular tax in a later year, limited by IRC § 53(c) to the excess of regular tax over tentative minimum tax and carried forward indefinitely; it does not reduce the minimum tax when paid.*

**7. An applicable corporation has a $50,000,000 minimum tax credit carryforward. This year its regular tax is $80,000,000, its tentative minimum tax is $75,000,000, and it owes $10,000,000 of base erosion tax. How much of the credit may it use?**
(A) $5,000,000 (B) $15,000,000 (C) $50,000,000 (D) Nil, because a base erosion tax suspends the credit
*Answer: B. IRC § 53(e)(2) increases the regular tax figure in the IRC § 53(c) limitation by the base erosion tax, so the room is $90,000,000 less $75,000,000; the remaining $35,000,000 carries forward under IRC § 53(b).*

**8. A corporation's taxable income has averaged $1,400,000,000 over the last three years, but its adjusted financial statement income has averaged $800,000,000 and has never crossed a billion in any period. Is it an applicable corporation?**
(A) Yes, because taxable income exceeds the billion-dollar threshold (B) Yes, because either measure over a billion suffices (C) No, because the test is measured on adjusted financial statement income under IRC § 56A, not taxable income (D) No, because the test looks only at the current year
*Answer: C. IRC § 59(k)(1) applies the average annual adjusted financial statement income test, and that income is computed under IRC § 56A — book income rather than taxable income — so a corporation under the threshold on book income is outside the regime whatever its taxable income.*
