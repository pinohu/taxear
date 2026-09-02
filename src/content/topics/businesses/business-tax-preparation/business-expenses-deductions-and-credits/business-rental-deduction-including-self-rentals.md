---
title: "Business rental deduction, including self-rentals"
code: "2.2.2.b"
part: 2
domain: "Business Tax Preparation"
section: "Business expenses, deductions and credits"
description: "Rent paid for property the business does not own is deductible, but renting your own building to your own company turns the income non-passive and not the loss."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 162(a)(3)", title: "Rentals or other payments for use of property", url: "https://www.law.cornell.edu/uscode/text/26/162" }
  - { type: IRC, ref: "§ 178", title: "Amortization of cost of acquiring a lease", url: "https://www.law.cornell.edu/uscode/text/26/178" }
  - { type: IRC, ref: "§ 267(a)(2)", title: "Matching of deduction and payee income item", url: "https://www.law.cornell.edu/uscode/text/26/267" }
  - { type: IRC, ref: "§ 280A(c)(6)", title: "Treatment of rental to employer", url: "https://www.law.cornell.edu/uscode/text/26/280A" }
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 461(l)", title: "Limitation on excess business losses of noncorporate taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/461" }
  - { type: Reg, ref: "§ 1.469-2(f)(6)", title: "Property rented to a nonpassive activity", url: "https://www.law.cornell.edu/cfr/text/26/1.469-2" }
forms: []
related: ["2.2.2.a", "2.2.1.c", "2.2.2.o", "2.2.2.c", "2.2.1.a", "2.2.2.e", "2.2.2.f", "2.2.2.g"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 162(a)(3) rental deduction and its two conditions on title and equity, the IRC § 178 rule treating renewal options as part of the lease term where less than 75 percent of the acquisition cost is attributable to the remaining term, the IRC § 267(a)(2) matching rule for rent accrued to a related cash method landlord, and the Reg. § 1.469-2(f)(6) self-rental rule that recharacterises net rental income as non-passive without doing the same for a loss." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the self-rental test, glossary marks, and two typed scenarios (baseline, fails) rounding the scenario set out to five types." }
diagram:
  archetype: "decision"
  caption: "The self-rental test, and why income and losses land on different sides of it"
  tests:
    - { test: "Property rented for use in a trade or business activity", result: "Condition met", outcome: "pass" }
    - { test: "Taxpayer materially participates in that activity", result: "Condition met — self-rental rule can apply", outcome: "pass" }
    - { test: "Does the rental produce net income this year?", result: "Yes — recharacterised as non-passive, can't absorb passive losses", outcome: "fail" }
    - { test: "Or does it produce a net loss instead?", result: "Rule doesn't apply — loss stays passive, suspended without passive income elsewhere", outcome: "pass" }
---

<div class="plain-terms">
This page covers deducting rent a business pays for space or gear it does not own. It also covers
a trap that hits when the landlord and the tenant are really the same person. It affects any
business that pays rent, and especially an owner who rents out property to their own company. It
decides if rent counts as a cost at all, and if rent paid to yourself can offset your other income.
Here is the catch: if you work in the business that rents from you, profit from that rent no
longer counts as passive income, so it cannot be offset by passive losses from other deals. A loss
on that same setup does not get the same trade-off in return.
</div>

Rent is one of the simplest deductions in the Code and one of the easiest to lose. The deduction
itself turns on two conditions in a single clause of IRC § 162(a); everything difficult comes from
the taxpayer's relationship to the landlord, and from a regulation that treats income and losses
from the same lease differently.

## The rule

**The deduction.** {fig:rent.deduction} (IRC § 162(a)(3)). Two conditions, both negative: the
taxpayer must not be taking title, and must have no equity in the property.

**Acquiring a lease.** {fig:rent.lease_acquisition} (IRC § 178(a)), and in measuring the
remaining term, no period for which the lessee may itself renew is counted (IRC § 178(b)).

**Renting from a related landlord.** {fig:comp.related_timing} (IRC § 267(a)(2)). Rent is an
expense within the matching rule like any other.

**Renting to yourself.** {fig:rent.self_rental} (Reg. § 1.469-2(f)(6)). Note what the rule
recharacterises and what it leaves alone.

**Renting your home to your employer.** {fig:rent.employer_rental} (IRC § 280A(c)(6)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| The deduction | {fig:rent.deduction} | IRC § 162(a)(3) |
| Cost of acquiring a lease | {fig:rent.lease_acquisition} | IRC § 178(a) |
| Related landlord, timing | {fig:comp.related_timing} | IRC § 267(a)(2) |
| Self-rental recharacterisation | {fig:rent.self_rental} | Reg. § 1.469-2(f)(6) |
| Rental to an employer | {fig:rent.employer_rental} | IRC § 280A(c)(6) |
| Rental activities are passive | {fig:loss.pal_defined} | IRC § 469(c)(2) |
| Passive carryover | {fig:loss.pal_carryover} | IRC § 469(b) |

## How it works in practice

**Read the two conditions in IRC § 162(a)(3) as anti-purchase rules.**
{fig:rent.deduction}. The clause denies a deduction where the payments are really instalments of
a purchase price, and it does so twice over: once by asking whether the taxpayer is taking title,
and once by asking whether the taxpayer has equity. A lease with a bargain purchase option, or one
under which the payments build toward ownership, fails on the second condition even if title never
formally passes during the term. The substance of the arrangement decides it, not its label.

**Amortise a lease acquisition cost over a term that may be longer than the lease.**
{fig:rent.lease_acquisition} (IRC § 178(a)). The rule exists because a taxpayer who pays a large
premium for a lease with a short remaining term and long renewal options is buying the renewals.
IRC § 178(b) then closes the obvious response: in working out how much term is left, a period the
lessee can bring about by exercising its own option does not count.

**Rent to a related landlord runs into the matching rule.**
{fig:comp.related_timing} (IRC § 267(a)(2)). An accrual method operating company that accrues rent
to its owner at the year end and pays it in the following March deducts it in the following year.
This is the same provision that governs an accrued bonus, and it catches rent just as readily,
because IRC § 267(a)(2) speaks of "expenses and interest" without limiting the kind of expense.

**Then the self-rental rule, which is the point of this topic.**
{fig:rent.self_rental} (Reg. § 1.469-2(f)(6)). Read it carefully, because it is asymmetric in a
way that is easy to state wrongly:

- Where the arrangement produces **net rental income**, that income is recharacterised as
  non-passive. It therefore cannot be used to absorb passive losses from anything else.
- Where the arrangement produces a **net rental loss**, the rule does not apply — its own words
  recharacterise "an amount of the taxpayer's gross rental activity income ... equal to the net
  rental activity income," and there is no net rental activity income in a loss year. The loss
  stays passive and is suspended under IRC § 469(b) unless the taxpayer has passive income
  elsewhere.

The practical consequence is a one-way street. A taxpayer who owns the building and the operating
business is taxed on the rent as non-passive income when the building makes money, and cannot
deduct the rental loss against the operating income when it does not.

**The rule has three conditions and all must hold.** The property must be rented for use in a
trade or business activity; the taxpayer must materially participate in that activity for the
year; and the property must not be described in Reg. § 1.469-2T(f)(5). Rent a building to a
business you do **not** materially participate in and the rule does not apply — the income stays
passive and is available to absorb passive losses.

**Renting a home to an employer is a dead end.** {fig:rent.employer_rental}
(IRC § 280A(c)(6)). The employer deducts the rent, the employee reports it as rental income, and
the employee gets no deduction for the expenses of the space. The provision exists precisely to
stop an employee converting a disallowed home office into a deductible rental.

<div class="scenario" data-type="timing">
<h3>The building that made money, and then did not</h3>

Ilkeston Fabrication Inc. is an S corporation in which Tresham materially participates. He
personally owns the factory and leases it to the company for $180,000 a year. His costs —
mortgage interest, tax, insurance and depreciation — are $140,000.

In 2026 the lease produces $40,000 of net rental income. {fig:rent.self_rental}
(Reg. § 1.469-2(f)(6)) recharacterises it as non-passive. Tresham has $80,000 of suspended passive
losses from an unrelated investment and cannot use a dollar of them against this income, because
it is no longer passive income.

In 2027 a roof replacement pushes his costs to $215,000 and the lease produces a $35,000 net
loss. The regulation does not reach it: it operates on gross rental activity income up to the
amount of net rental activity income, and there is none. The $35,000 is a passive loss, he has no
passive income, and it is suspended under IRC § 469(b).

Across the two years he has reported $40,000 of income that could not be sheltered and $35,000 of
loss that could not be deducted, on a single lease of a single building. That asymmetry is the
whole of the self-rental rule.
</div>

<div class="scenario" data-type="boundary">
<h3>The lease that was a purchase</h3>

Wrenbury Haulage signs a five-year "lease" of a tractor unit at $3,200 a month, with an option to
buy at the end for $1. The unit is worth $150,000 new.

The total payments of $192,000 exceed the value of the unit, and the $1 option means Wrenbury will
certainly acquire it. {fig:rent.deduction} (IRC § 162(a)(3)) allows a deduction only for payments
on property "to which the taxpayer has not taken and is not taking title or in which he has no
equity," and Wrenbury fails both limbs: it is taking title, and each payment builds equity toward
an ownership it is certain to acquire.

The payments are instalments of a purchase price. Wrenbury capitalises the unit and recovers the
cost through depreciation, and the interest element of the payments is deductible separately.

Change the option price to $45,000, a realistic residual, and remove any obligation to exercise
it. Now Wrenbury is neither taking title nor building equity, and the payments are deductible rent
as they are made.
</div>

<div class="scenario" data-type="interaction">
<h3>The two landlords who look identical</h3>

Marbeck holds equal interests in two office buildings. She leases the first to a consultancy she
owns and in which she works full time. She leases the second, on identical terms, to an unrelated
tenant. Each produces $22,000 of net rental income. She has $50,000 of suspended passive losses.

The first is caught by {fig:rent.self_rental}. She materially participates in the consultancy, it
is a trade or business activity, and so $22,000 of the rental income is treated as non-passive. It
cannot absorb any of her suspended losses.

The second is not. {fig:loss.pal_defined} (IRC § 469(c)(2)) — a rental activity is a
{gloss:passive-activity}, and nothing recharacterises this one. Its $22,000 is passive income, and
$22,000 of her suspended losses is freed.

Same buildings, same rent, same landlord. The only difference is who the tenant is and whether she
works in the tenant's business, and it is worth $22,000 of deductions.
</div>

<div class="scenario" data-type="baseline">
<h3>The straightforward self-rental</h3>

A dentist owns her own dental building outright and leases it to her professional corporation, in
which she works full time as the sole dentist. The lease is at a fair market rent and produces net
rental income of $28,000 for the year. She has no suspended passive losses from anywhere else.

This is a textbook {gloss:self-rental}: all three conditions of {fig:rent.self_rental}
(Reg. § 1.469-2(f)(6)) are met — the building is rented for use in a trade or business activity,
she materially participates in that activity, and nothing takes the property outside the rule. The
$28,000 is recharacterised as non-passive income. In her case that changes nothing practical this
year — she has no passive losses waiting to absorb it — but the classification still matters,
because it means this income can never be used to soak up a passive loss she might have in a later
year, from this activity or another.
</div>

<div class="scenario" data-type="fails">
<h3>The landlord who doesn't work in the tenant's business</h3>

An investor owns a retail building and leases it to a restaurant chain in which she holds a
minority stake but does not work — she is a passive investor only, contributing no services. The
lease produces $19,000 of net rental income for the year, and she has $19,000 of suspended passive
losses from an unrelated rental property.

{fig:rent.self_rental} (Reg. § 1.469-2(f)(6)) requires that the taxpayer materially participate in
the tenant's trade or business activity. She does not — holding a stake without working in the
business is not {gloss:material-participation}. The self-rental rule fails to apply for want of
that condition, so the $19,000 stays ordinary rental income, which is passive under
{fig:loss.pal_defined} (IRC § 469(c)(2)). Her suspended losses can absorb it in full. The building
and the tenant relationship look identical to a self-rental case on paper; the missing hours of
work are what keep it out of the rule.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>The self-rental rule is one-way.</strong> {fig:rent.self_rental}. Net income becomes
non-passive; a net loss stays passive. An answer choice that lets a self-rental loss offset the
operating business's income is wrong.</p>

<p><strong>It depends on material participation in the tenant's business, not the
landlord's.</strong> Reg. § 1.469-2(f)(6)(i) asks whether the taxpayer materially participates in
the trade or business activity the property is rented for use in.</p>

<p><strong>IRC § 162(a)(3) has two conditions, and equity is the harder one.</strong>
{fig:rent.deduction}. A lease under which no title passes during the term can still fail if the
payments build equity toward a certain acquisition.</p>

<p><strong>Rent is within IRC § 267(a)(2) like any other expense.</strong> An accrual method
tenant accruing rent to a related cash method landlord waits for the deduction.</p>

<p><strong>Renting space in your home to your own employer produces no deduction for the
space.</strong> {fig:rent.employer_rental} (IRC § 280A(c)(6)). The rent is income to the employee
and the expenses of the space are not deductible against it.</p>
</div>

## How this has changed

None of the provisions on this page was amended by Pub. L. 119-21, so the 2026 rules are the 2025
rules. Two points of history are worth knowing because they explain why the material a reader
finds elsewhere is inconsistent.

**The self-rental rule is a regulation, and it was litigated for a decade.** Reg. § 1.469-2(f)(6)
recharacterises income rather than disallowing anything, which is an unusual technique, and
taxpayers argued through the 1990s that the Secretary had no authority to write it. The courts of
appeals upheld it, and it has been settled law since. Material that presents the point as open is
describing a controversy that ended.

**IRC § 280A(c)(6) closed a route that had been open.** Before it was enacted an employee could
rent a room to their employer and deduct the expenses of the room against the rent, converting a
home office that failed the convenience-of-the-employer test into a rental. The paragraph switches
off IRC § 280A(c)(1) and (c)(3) for exactly that arrangement. The rent remains income and the
expenses remain non-deductible, so the arrangement now costs the employee money.

The live change to watch is not in these provisions but in IRC § 469 generally: because
IRC § 461(l) became permanent in July 2025, a taxpayer who clears the passive activity rules can
still be stopped by the excess business loss limitation immediately afterwards. A self-rental loss
that escapes IRC § 469 in a year with passive income then joins the aggregate that IRC § 461(l)
tests. The two limitations are sequential, and the second one no longer expires.

## Exam focus

The reliable question in this topic is the self-rental rule, and it is reliably tested on the
asymmetry. Know that net income is recharacterised as non-passive and a net loss is not, and be
ready to reject the answer that lets the loss offset business income.

Know the three conditions in Reg. § 1.469-2(f)(6) and in particular that material participation is
measured in the **tenant's** activity. A landlord who does not work in the tenant's business is
outside the rule.

For the deduction itself, read IRC § 162(a)(3) as two negative conditions and treat a bargain
purchase option as the signal that both fail.

Finally, do not forget IRC § 267(a)(2). A related-party rent accrual is one of the most common
ways a deduction moves a year in these facts.

## Check yourself

**1.** A taxpayer materially participates in a manufacturing S corporation and leases it a
warehouse he owns personally, producing $30,000 of net rental income. He has $60,000 of suspended
passive losses. How much can he free?

*Answer: None. {fig:rent.self_rental} (Reg. § 1.469-2(f)(6)) treats the $30,000 as non-passive
because he materially participates in the tenant's business, so it is not passive income and
cannot absorb a passive loss.*

**2.** The following year the same lease produces a $30,000 net rental loss. May he deduct it
against the corporation's income?

*Answer: No. The regulation recharacterises gross rental income up to the amount of net rental
activity income, and there is none in a loss year, so the rule does not apply. The loss is passive
and is suspended under {fig:loss.pal_carryover} (IRC § 469(b)) unless he has passive income
elsewhere.*

**3.** A company leases equipment for four years at $2,000 a month with an option to purchase at
the end for $10. Is the rent deductible?

*Answer: No. {fig:rent.deduction} (IRC § 162(a)(3)) allows a deduction only where the taxpayer is
not taking title and has no equity, and a nominal purchase option means both conditions fail. The
payments are instalments of a purchase price: the company capitalises the equipment and deducts
the interest element separately.*

**4.** A taxpayer pays $90,000 to acquire a lease with three years remaining and two five-year
renewal options exercisable by the lessee. Over what period is the cost amortised?

*Answer: Over the term including the renewal options, unless at least 75 percent of the $90,000 is
attributable to the three years remaining. {fig:rent.lease_acquisition} (IRC § 178(a)), and by
IRC § 178(b) the renewal periods do not count toward the remaining term when that percentage is
tested.*

**5.** An employee rents a spare room to her employer for $400 a month and uses it to work from
home. May she deduct the room's expenses against the rent?

*Answer: No. {fig:rent.employer_rental} (IRC § 280A(c)(6)) switches off IRC § 280A(c)(1) and (c)(3)
for exactly this arrangement. She reports the rent as income and gets no deduction for the
expenses of the space.*

**6. Pemberton owns a warehouse and leases it to a distribution partnership in which she holds a 10 percent interest but does no work. The lease produces $15,000 of net rental income and she has $15,000 of suspended passive losses from another property. How much of the losses can she use?**
(A) None, because the rental income is recharacterised as non-passive (B) All $15,000, because she does not materially participate in the tenant's business so the income stays passive (C) $1,500, in proportion to her 10 percent interest (D) All $15,000, but only if the tenant is a C corporation
*Answer: B. Reg. § 1.469-2(f)(6) applies only where the taxpayer materially participates in the trade or business activity the property is rented for use in; she does not, so the income stays passive under IRC § 469(c)(2) and absorbs the suspended losses.*

**7. An accrual method corporation accrues $24,000 of rent owed to its sole shareholder, a cash method individual, on 31 December 2026 and pays it on 15 March 2027. In which year does the corporation deduct the rent?**
(A) 2026, when it was accrued (B) 2027, when the shareholder includes it in income (C) 2026, because it was paid within two and a half months of year end (D) Neither year, because rent paid to a related party is not deductible
*Answer: B. IRC § 267(a)(2) matches the deduction to the related cash method payee's inclusion, and it speaks of "expenses and interest" without limiting the kind of expense, so rent is caught just as an accrued bonus would be.*

**8. A taxpayer's self-rental loss is fully absorbed by passive income from an unrelated activity, so IRC § 469 does not suspend it. Which limitation can still stop the loss?**
(A) None, because clearing the passive activity rules is the final test (B) The excess business loss limitation of IRC § 461(l), which is applied after IRC § 469 (C) The matching rule of IRC § 267(a)(2) (D) The employer rental rule of IRC § 280A(c)(6)
*Answer: B. IRC § 461(l) became permanent in July 2025, and a self-rental loss that escapes IRC § 469 in a year with passive income then joins the aggregate that IRC § 461(l) tests; the two limitations are sequential.*
