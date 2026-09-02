---
title: "Mixed used property/vacation home"
code: "2.3.5.c"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Rental property"
description: "One extra night of personal use can move a vacation home between three regimes, and the middle one caps deductions at gross rental income with a carryforward."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 280A", title: "Disallowance of certain expenses in connection with business use of home, rental of vacation homes, etc.", url: "https://www.law.cornell.edu/uscode/text/26/280A" }
  - { type: IRC, ref: "§ 183", title: "Activities not engaged in for profit", url: "https://www.law.cornell.edu/uscode/text/26/183" }
  - { type: IRC, ref: "§ 267", title: "Losses, expenses, and interest with respect to transactions between related taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/267" }
  - { type: IRC, ref: "§ 61", title: "Gross income defined", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: IRC, ref: "§ 163", title: "Interest", url: "https://www.law.cornell.edu/uscode/text/26/163" }
  - { type: IRC, ref: "§ 164", title: "Taxes", url: "https://www.law.cornell.edu/uscode/text/26/164" }
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 119", title: "Meals or lodging furnished for the convenience of the employer", url: "https://www.law.cornell.edu/uscode/text/26/119" }
forms: []
related: ["2.3.5.f", "2.3.5.e", "2.3.5.b", "2.3.5.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the three regimes a mixed-use dwelling can fall into — the IRC § 280A(g) exclusion below 15 rental days, the IRC § 280A(c)(5) gross income cap where the unit is used as a residence, and ordinary rental treatment where it is not — with the IRC § 280A(d)(1) greater-of-14-days-or-10-percent test, the IRC § 280A(d)(2) personal use rules including the family and reciprocal use provisions, and the IRC § 280A(e) day-count allocation." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the three regimes, a glossary mark, and typed scenarios." }
diagram:
  archetype: "decision"
  caption: "Which of the three regimes a mixed-use dwelling falls into"
  tests:
    - { test: "Rented fewer than 15 days in the year, and used by the taxpayer as a residence?", result: "Rent excluded from income entirely, no rental deductions allowed", outcome: "pass" }
    - { test: "Rented 15 days or more, and personal use exceeds the greater of 14 days or 10% of fair-rental days?", result: "Used as a residence — deductions capped at gross rental income, excess carried forward", outcome: "fail" }
    - { test: "Rented 15 days or more, and personal use at or under that threshold?", result: "Ordinary rental — a full loss is allowed, subject to the passive activity rules", outcome: "pass" }
---

<div class="plain-terms">
This page explains what happens when you both live in and rent out the same home, such as a
vacation house. It matters for anyone who owns a second home and rents it out for at least part of
the year. It does not apply to a rental property nobody in the family ever stays in. The number of
nights the owner or family uses the place, compared with the nights it is rented out, decides
everything. Cross one line and the rent is not even taxed. Cross another line and the owner can still
deduct expenses, but only up to the rent collected, with the rest saved for a later year. The page
decides which of three very different tax outcomes applies.
</div>

A dwelling that is both lived in and let sits in one of three regimes, and the boundary between them
is measured in nights. Cross one line and the rent disappears from income entirely. Cross the other
and losses become unavailable, with deductions capped at the rent and the excess carried forward
indefinitely. Counting days accurately is the whole of the work.

## The rule

**The starting prohibition** (IRC § 280A(a), (b)). {fig:vh.general} {fig:vh.dwelling_unit_def}

**The line that matters.** {fig:vh.residence_test} It is the *greater* of the two, so a unit rented
300 days at fair rental tolerates 30 days of personal use, while one rented 40 days tolerates only
14.

**What counts as personal use.** {fig:vh.personal_use} {fig:vh.repair_days} A day the owner's
brother stays free is personal use. A day the owner's brother pays market rent is still personal use,
because subparagraph (A) reaches family members regardless of what they pay — unlike subparagraph
(C), which turns on fair rental.

**Except when it is someone's home.** {fig:vh.family_principal_residence}

**Two separate limits, applied in order.** {fig:vh.allocation} {fig:vh.gross_income_limit} The
first apportions expenses by days; the second caps what survives at the rental income. Both can
apply to the same year, and only the second produces a carryforward.

**And the escape at the bottom.** {fig:vh.15_day} This is the only provision in the Code that makes
income disappear because expenses are disallowed. It applies only where the unit *is* used as a
residence and is rented fewer than 15 days.

**A different limit for a different problem.** {fig:vh.183} IRC § 183 addresses an activity with no
profit motive; IRC § 280A addresses a dwelling with personal use. A property can be caught by either
or both, and IRC § 280A(g) displaces IRC § 183 where it applies.

## Current figures

| Item | 2026 |
| --- | --- |
| Use as a residence | {fig:vh.residence_test} |
| Personal use days | {fig:vh.personal_use} |
| Repair days | {fig:vh.repair_days} |
| Rental to a family member as a home | {fig:vh.family_principal_residence} |
| Day-count allocation | {fig:vh.allocation} |
| Gross income cap | {fig:vh.gross_income_limit} |
| Fewer than 15 rental days | {fig:vh.15_day} |
| Dwelling unit | {fig:vh.dwelling_unit_def} |
| Not for profit | {fig:vh.183} |

## How it works in practice

Build a day calendar before anything else, marking each day as rented at fair rental, personal, or
neither. Days the property sits vacant and available are in neither column: they do not count as
personal use, and they do not count as rental days for the IRC § 280A(e) fraction, whose denominator
is days the unit is *used* rather than days in the year. Getting the denominator wrong is the single
most common computational error in this area.

Then apply the residence test on the greater-of formula and see which regime the year falls into.
Below 15 rental days with residence use, IRC § 280A(g) removes both the income and the deductions.
Above that, with personal use over the threshold, deductions are apportioned and then capped at the
rent. Above that with personal use under the threshold, it is an ordinary rental — a loss is possible,
subject to IRC § 469.

Order the deductions correctly under the cap. IRC § 280A(c)(5) subtracts the deductions allowable
whether or not the unit was rented before anything else, so mortgage interest and property tax
allocable to the rental use come off the gross income first. What is left is available for operating
expenses, and only after those is any depreciation allowed. Depreciation is therefore the item that
is disallowed and carried forward, which is why a property under the cap year after year builds a
suspended depreciation balance rather than losing the deduction outright.

Watch the family use rules in both directions. A week's stay by the owner's daughter is personal use
even at full market rent, unless the property is her principal residence for that period under
IRC § 280A(d)(3)(A). Conversely, days the owner spends there working substantially full time on
repairs are not personal use, and the presence of non-working family members on those days does not
change that.

<div class="scenario" data-type="boundary">

<h3>Fourteen nights and one</h3>

An owner lets a lake cabin for 120 days at fair rental during 2026. Gross rent is $36,000. Allocable
expenses for the year are $14,000 of mortgage interest and property tax, $11,000 of operating costs
and $9,000 of depreciation, before any apportionment. In the first version of the facts she stays
there 12 nights; in the second, 15.

Twelve nights is under the threshold. The greater of 14 days or 10 percent of 120 rental days is 14,
and 12 does not exceed it, so the cabin is not used as a residence. IRC § 280A(c)(5) does not apply
and a loss is available, subject to the {gloss:passive-activity} rules. Expenses are still apportioned under
IRC § 280A(e) by days used — 120 rented out of 132 used, or 90.9 percent — so about $30,900 of the
$34,000 is deductible against $36,000 of rent, and the balance of the interest and tax goes to
Schedule A if it qualifies.

Fifteen nights changes the regime. Now personal use exceeds 14, the cabin is used as a residence, and
the gross income cap applies. Rent of $36,000 less the apportioned interest and tax comes first, then
operating expenses, then depreciation only to the extent anything remains. On these figures the
deductions happen to fit, so nothing is suspended — but the loss that was available at 12 nights is
not available at 15, and one night made the difference.

</div>

<div class="scenario" data-type="fails">

<h3>The daughter who paid market rent</h3>

An owner's holiday flat is rented to unrelated holidaymakers for 90 days during 2026 at fair rates.
His adult daughter stays for three weeks in September and pays the full advertised weekly rate, a
total of $4,200. The owner uses it himself for 5 days.

The daughter's 21 days are personal use. IRC § 280A(d)(2)(A) treats a day as personal use if the unit
is used by a member of the family of the taxpayer as defined in IRC § 267(c)(4), and it says nothing
about what she paid — the fair rental qualification in subparagraph (C) applies to *other*
individuals, not to family. So personal use is 26 days against a rental-at-fair-rental figure that
excludes her 21 days, leaving 90. The greater of 14 days or 10 percent of 90, which is 9, is 14, and
26 exceeds it. The flat is used as a residence and the gross income cap applies. The relief in
IRC § 280A(d)(3)(A) does not help because the flat is not her principal residence.

</div>

<div class="scenario" data-type="baseline">

<h3>The fortnight at the tournament</h3>

An owner's house sits beside a golf course that hosts a major tournament each summer. She lets the
house for the 12 days of the tournament for $28,000 and lives there the rest of the year. She spends
nothing on the letting beyond $900 of cleaning.

Nothing is reported. IRC § 280A(g) applies because the house is used by her as a residence and is
actually rented for fewer than 15 days in the year: no deduction on account of the rental use is
allowed, and the $28,000 is excluded from gross income under IRC § 61 entirely. The $900 of cleaning
is not deductible, which is a small price. Her mortgage interest and property tax remain fully
deductible on Schedule A to the extent they otherwise qualify, because IRC § 280A(b) never disallowed
them. Note the sharpness of the boundary: a thirteenth rented day would put the whole $28,000 into
income and open the apportionment and cap machinery.

</div>

<div class="callout trap">

**It is the greater of the two, not the lesser.** IRC § 280A(d)(1) allows the greater of 14 days or
10 percent of fair-rental days. A heavily rented property tolerates more personal use, not less. The
10 percent limb only ever helps.

</div>

<div class="callout trap">

**Family use is personal use however much they pay.** IRC § 280A(d)(2)(A) reaches the taxpayer's
family as defined in IRC § 267(c)(4) — brothers and sisters, spouse, ancestors and lineal descendants
— without any fair rental qualification. The only escape is IRC § 280A(d)(3)(A), which requires the
unit to be that person's principal residence.

</div>

<div class="callout trap">

**The allocation denominator is days used, not days in the year.** IRC § 280A(e) compares days rented
at fair rental to the total days the unit is used. Vacant days available for rent are in neither
figure. Using 365 as the denominator understates the rental fraction, sometimes dramatically for a
seasonal property.

</div>

<div class="callout trap">

**The 15-day rule cuts both ways and is not elective.** IRC § 280A(g) excludes the income *and*
disallows the deductions, and it applies by its terms rather than by choice. A taxpayer who would
prefer to report the income and claim expenses cannot opt in.

</div>

## How this has changed

IRC § 280A was added by the Tax Reform Act of 1976 in response to widely marketed schemes treating
holiday homes as rental businesses. Its structure — a general disallowance, a set of exceptions and a
gross income cap — has been stable since, with the significant later amendments directed at the home
office rules in subsection (c)(1) rather than at vacation homes.

The one open question the statute never resolved is the allocation of mortgage interest and property
tax between rental and personal use. The Service's position, reflected in the instructions to
Schedule E, allocates by rental days over total days used, consistent with IRC § 280A(e). The Ninth
and Tenth Circuits held in *Bolton* and *McKinney* that interest and taxes should instead be
allocated over the whole year, which leaves more of them in the rental column and more room under the
cap for operating expenses and depreciation. The conflict has never been resolved by statute or by
the Supreme Court, and the choice of method can change the result materially.

The Tax Cuts and Jobs Act changed the value of the *personal* half of the allocation without touching
IRC § 280A itself. Capping the state and local tax deduction and limiting qualified residence
interest to two residences made the personal share of those costs worth less, which increases the
attraction of the court-approved allocation method for taxpayers within those circuits.

Short-term letting platforms have made the day-counting question far more common than it was, and
have also raised a separate issue the section does not address: where substantial services are
provided, the activity may be a trade or business outside the rental definition in IRC § 469
altogether, reported on Schedule C and subject to self-employment tax.

## Exam focus

Know the residence test as the greater of 14 days or 10 percent of fair-rental days, and be ready to
compute it. Expect a fact pattern that sits one day either side of the line.

Know that family use is personal use regardless of rent paid, subject only to the principal residence
exception, and that a day is personal use if the unit is so used for any part of it.

Know the three regimes and their consequences: below 15 rental days, income excluded and deductions
denied; residence use above that, apportionment then a gross income cap with a carryforward; no
residence use, ordinary rental subject to IRC § 469. Know that depreciation is the last deduction
under the cap and therefore the one suspended.

## Check yourself

**1.** A cottage is rented at fair rental for 200 days and used personally for 19 days. Is it used as
a residence?

*Answer:* No. The threshold is the greater of 14 days or 10 percent of 200 fair-rental days, which is
20. Personal use of 19 days does not exceed 20, so the cottage is not used as a residence, the
IRC § 280A(c)(5) cap does not apply, and a rental loss is available subject to the passive activity
rules. Expenses are still apportioned under IRC § 280A(e).

**2.** An owner rents her flat to her brother for a month at full market rent. He has his own home
elsewhere. Is that personal use?

*Answer:* Yes. IRC § 280A(d)(2)(A) treats use by a member of the taxpayer's family, as defined in
IRC § 267(c)(4), as personal use, and brothers and sisters are within that definition. The rent paid
is irrelevant to subparagraph (A). IRC § 280A(d)(3)(A) would rescue it only if the flat were his
principal residence for the period, which it is not.

**3.** A property is rented 100 days, used personally 30 days, and vacant and advertised the rest of
the year. What fraction of expenses is allocable to the rental under IRC § 280A(e)?

*Answer:* 100/130, or about 76.9 percent. The denominator is the total number of days the unit is
*used*, which is 130, not 365 and not 235. The vacant days are in neither the numerator nor the
denominator. Note that the *Bolton* line of cases would allocate interest and taxes over 365 days
instead, which is a different question from this one.

**4.** A residence is rented for 14 days for $22,000. What is reported?

*Answer:* Nothing. IRC § 280A(g) applies where a dwelling unit used by the taxpayer as a residence is
actually rented for fewer than 15 days: the rental income is excluded from gross income and no
deduction attributable to the rental use is allowed. Fourteen is fewer than fifteen. A fifteenth day
would bring the entire amount into income.

**5.** A vacation home under the gross income cap has $18,000 of rent, $12,000 of allocable interest
and tax, $9,000 of operating expenses and $7,000 of allocable depreciation. What is deductible?

*Answer:* $12,000 of interest and tax first, leaving $6,000. Then operating expenses up to that
amount, so $6,000 of the $9,000. Nothing remains, so none of the depreciation is allowed and no
further operating expense is either. The disallowed $3,000 of operating expense and $7,000 of
depreciation carry forward under IRC § 280A(c)(5) to the succeeding year, where the same cap applies
again.

**6. A beach house is rented at fair rental for 300 days in 2026 and used personally by the owner for 29 days. Is it used as a residence?**
(A) Yes, because 29 days exceeds 14 days (B) No, because the threshold is the greater of 14 days or 10 percent of 300 fair-rental days, which is 30, and 29 does not exceed it (C) Yes, because the threshold is the lesser of 14 days or 10 percent of fair-rental days (D) No, because personal use under 30 days is always disregarded whatever the rental days
*Answer: B. IRC § 280A(d)(1) sets the residence test at the greater of 14 days or 10 percent of days rented at fair rental; a heavily rented property tolerates more personal use, so the gross income cap does not apply and a loss is available subject to IRC § 469.*

**7. A taxpayer rents her home for 10 days during 2026 for $9,000 and spends $2,500 on cleaning for the letting. She would rather report the rent and deduct the cost. What is the result?**
(A) She may elect to report the $9,000 and deduct the $2,500 (B) The $9,000 is excluded from gross income and the $2,500 is not deductible, and she cannot opt in (C) The $9,000 is reported and the $2,500 is deductible up to gross rental income with a carryforward (D) The $9,000 is excluded but the $2,500 is deductible on Schedule A
*Answer: B. IRC § 280A(g) applies by its terms rather than by choice where a dwelling used as a residence is rented for fewer than 15 days: the income is excluded and the deductions on account of the rental use are disallowed.*

**8. An owner rents a flat at fair rental to her adult son, who uses it as his principal residence for the whole year. Are those days personal use by the owner?**
(A) Yes, because use by a lineal descendant is always personal use (B) Yes, unless the son pays more than fair rental (C) No, because a unit rented at fair rental for use as a family member's principal residence is not personal use (D) No, because a son is not within the family definition
*Answer: C. IRC § 280A(d)(3)(A) is the only escape from the family use rule in IRC § 280A(d)(2)(A), and it requires the unit to be that person's principal residence; without it a son, as a lineal descendant within IRC § 267(c)(4), would be personal use at any rent.*
