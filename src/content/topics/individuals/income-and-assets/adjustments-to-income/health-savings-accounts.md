---
title: "Health savings accounts"
code: "1.2.4.c"
part: 1
domain: "Income and Assets"
section: "Adjustments to Income"
description: "The limit is built a month at a time, and Medicare entitlement zeroes it from that month on. Two provisions added in 2025 widened who can hold an account at all."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 72", title: "Annuities; certain proceeds of endowment and life insurance contracts", url: "https://www.law.cornell.edu/uscode/text/26/72" }
  - { type: IRC, ref: "§ 213", title: "Medical, dental, etc., expenses", url: "https://www.law.cornell.edu/uscode/text/26/213" }
  - { type: IRC, ref: "§ 223", title: "Health savings accounts", url: "https://www.law.cornell.edu/uscode/text/26/223" }
  - { type: RevProc, ref: "2025-19", title: "Inflation adjusted amounts for health savings accounts", url: "https://www.irs.gov/pub/irs-drop/rp-25-19.pdf" }
  - { type: Statute, ref: "Pub. L. 119-21, §§ 71306-71308", title: "Health savings account amendments", url: "https://www.law.cornell.edu/uscode/text/26/223" }
forms: []
related: ["1.2.4.e", "1.2.4.d", "1.2.4.a", "1.2.4.b", "1.2.1.a", "1.3.1.a"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 223(c)(1) eligibility test, the § 223(b) monthly limitation with the married, Medicare and last-month rules, the § 223(d)(2) definition of qualified medical expenses, the § 223(f) distribution rules and the 20 percent additional tax with its three exceptions, and the § 223(c) amendments made by Pub. L. 119-21 §§ 71306 to 71308." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the monthly eligibility test, glossary marks, and two typed scenarios." }
diagram:
  archetype: "decision"
  caption: "The monthly eligibility test for an HSA contribution — miss any gate and that month contributes nothing"
  tests:
    - { test: "High-deductible coverage", result: "Covered by a qualifying HDHP on the first day of the month", outcome: "pass" }
    - { test: "No other disqualifying coverage", result: "Not also covered by a non-HDHP plan providing the same benefits", outcome: "pass" }
    - { test: "Not Medicare-entitled", result: "Not yet entitled to Medicare benefits", outcome: "pass" }
    - { test: "Not another's dependent", result: "No other taxpayer claims a § 151 deduction for this person", outcome: "pass" }
---

<div class="plain-terms">
A health savings account lets you save money for medical costs without paying tax on it. To use one,
you need a certain kind of health plan with a high deductible. This page explains how much you can put
in each year, and when you must stop. It matters most to self-employed people, early retirees, and
anyone who buys this kind of health plan on their own. It does not apply if you have regular
low-deductible coverage, or if you are on Medicare. The yearly limit builds up one month at a time. It
is not handed out all at once. Some events can cut off new contributions partway through the year, such
as picking up other health coverage or becoming eligible for Medicare.
</div>

The limit is not an annual allowance. It is the sum of **monthly** limitations for the months in which the
individual was eligible, and eligibility is tested on the first day of each month. Two consequences follow
that catch people out: entitlement to Medicare drops the limitation to zero from that month onward, and a
taxpayer who becomes eligible mid-year gets only the months they had — unless they use the last-month
rule, which comes with a testing period and a second penalty of its own.

## The rule

**The deduction.** An individual who is an eligible individual for any month during the year is allowed a
deduction equal to the aggregate amount paid in cash during the year to a health savings account of that
individual (IRC § 223(a)).

**Who is eligible.** An individual covered under a high deductible health plan as of the first day of the
month, and **not** also covered, while so covered, under any health plan which is not a high deductible
health plan and which provides coverage for any benefit covered under the high deductible plan (IRC
§ 223(c)(1)(A)(i), (ii)). Any other health coverage that overlaps disqualifies.

**The limit is monthly.** The deduction may not exceed the sum of the monthly limitations for the months
the individual was eligible, each being one twelfth of the applicable annual figure (IRC § 223(b)(1),
(2)). An individual aged 55 or over before the close of the year adds the catch-up amount (§ 223(b)(3)).

**Married couples share one family limit.** Where either spouse has family coverage, **both** are treated
as having only that family coverage — the one with the lowest annual deductible where they have different
plans — and the limit is divided **equally** between them unless they agree otherwise, with each spouse's
catch-up amount left outside the division (IRC § 223(b)(5)).

**Medicare entitlement zeroes it.** The monthly limitation is zero for the first month the individual is
**entitled** to benefits under title XVIII of the Social Security Act and for each month thereafter (IRC
§ 223(b)(7)). Entitlement, not merely reaching the age.

**Dependents cannot deduct.** No deduction is allowed to an individual for whom another taxpayer is
allowed a § 151 deduction for a taxable year beginning in the same calendar year (IRC § 223(b)(6)).

**The last-month rule, and its cost.** An individual who is an eligible individual during the **last
month** of the year is treated as eligible for every month of it (IRC § 223(b)(8)(A)). But if at any time
during the testing period they are not an eligible individual, the contributions that could not have been
made but for that rule are included in gross income, and the tax is increased by **10 percent** of that
amount (§ 223(b)(8)(B)(i)) — unless the failure is by death or disability (§ 223(b)(8)(B)(ii)).

**Distributions.** Amounts used exclusively to pay qualified medical expenses of any account beneficiary
are not includible in gross income (IRC § 223(f)(1)); anything else is included in the beneficiary's gross
income (§ 223(f)(2)), and the tax is increased by **20 percent** of the amount included (§ 223(f)(4)(A)).

**Three exceptions to the additional tax.** It does not apply where the distribution is made after the
beneficiary becomes disabled within § 72(m)(7), or dies (IRC § 223(f)(4)(B)), or after attaining the age
specified in section 1811 of the Social Security Act (§ 223(f)(4)(C)) — the statute points at the Medicare
age rather than naming a number.

**Qualified medical expenses, and one exclusion.** Amounts paid for medical care within § 213(d) for the
beneficiary, spouse and dependents, only to the extent not compensated by insurance or otherwise —
including menstrual care products — but **not** any payment for insurance (IRC § 223(d)(2)(A), (B)).

**Excess contributions can be undone.** An excess contribution withdrawn, with the net income attributable
to it, on or before the due date of the return including extensions escapes the inclusion rule
(IRC § 223(f)(3)(A)).

## Current figures

| Item | 2026 |
| --- | --- |
| Contribution limit | {fig:hsa.contribution_limit} |
| The plan | {fig:hsa.hdhp} |
| Eligibility | {fig:hsa.eligible_individual} |
| How the limit is built | {fig:hsa.monthly_limitation} |
| Married couples | {fig:hsa.married_rule} |
| Medicare | {fig:hsa.medicare_zero} |
| Last-month rule | {fig:hsa.last_month_rule} |
| Dependents | {fig:hsa.dependent_denied} |
| Qualified medical expenses | {fig:hsa.qualified_expenses} |
| Distributions | {fig:hsa.distributions} |
| Exceptions to the additional tax | {fig:hsa.penalty_exceptions} |
| Excess contributions | {fig:hsa.excess_returned} |
| New categories from 2025 | {fig:hsa.new_hdhp_categories} |
| Deductible safe harbours | {fig:hsa.deductible_safe_harbours} |

## How it works in practice

Count the eligible months before doing anything else. Eligibility is tested on the **first day** of each
month, so coverage beginning on 2 March produces no March month. Multiply the eligible months by one
twelfth of the annual figure, add the catch-up for a taxpayer 55 or over, and compare that to what was
actually contributed — including employer contributions, which count against the same limit.

The Medicare interaction is the most common real-world failure. Enrolment is often backdated by up to six
months when Social Security benefits are claimed after full retirement age, and § 223(b)(7) zeroes the
limitation from the first month of **entitlement**. Contributions made in those backdated months are
excess contributions discovered after the fact, and the fix is the § 223(f)(3) withdrawal by the extended
due date.

Treat the last-month rule as a financing decision with a condition attached, not a free allowance. It
converts a partial year into a full one, and the testing period runs to the end of the following calendar
year. A taxpayer who changes jobs, marries onto a spouse's non-qualifying plan, or reaches Medicare during
that period picks up both the inclusion and the 10 percent tax.

Distinguish the two additional taxes carefully: 10 percent for failing the last-month testing period under
§ 223(b)(8)(B)(i)(II), and 20 percent for a non-medical distribution under § 223(f)(4)(A). They arise from
different provisions and have different exceptions.

<div class="scenario" data-type="boundary">
<h3>Scenario 1 — the backdated enrolment</h3>

Dilnaz turns 68 in 2026, retires in September and claims Social Security. Her Medicare Part A entitlement
is backdated six months to March. She had contributed the full self-only amount plus the catch-up in
January.

IRC § 223(b)(7) makes her monthly limitation zero from March, the first month of entitlement. Her limit
for 2026 is two twelfths of the annual figure plus two twelfths of the catch-up. Everything above that is
an excess contribution, even though it was paid in January when she was eligible — the limitation is
computed at year end on the months that actually qualified. Withdrawing the excess with its allocable net
income by the extended due date of her return avoids the inclusion under § 223(f)(3)(A).
</div>

<div class="scenario" data-type="timing">
<h3>Scenario 2 — the last-month rule that cost more than it gave</h3>

Emeka becomes covered by a qualifying plan on 1 November 2026 and contributes the full family amount for
the year, relying on IRC § 223(b)(8)(A). In June 2027 he takes a job whose only plan is not a high
deductible plan.

He was not an eligible individual for every month of the testing period. Under § 223(b)(8)(B)(i) the
contributions he could not have made but for the last-month rule — ten twelfths of the family amount — are
included in his gross income for 2027, and his tax is increased by 10 percent of that figure. Had he
contributed only the two months he actually earned, nothing would have happened.
</div>

<div class="scenario" data-type="interaction">
<h3>Scenario 3 — one couple, one limit</h3>

Farida has family coverage under a qualifying plan; her husband Gerald has self-only coverage under a
different qualifying plan. Both are over 55. They each want to contribute the family maximum to their own
accounts.

They cannot. IRC § 223(b)(5)(A) treats **both** spouses as having only the family coverage, so there is a
single family limit between them, divided equally unless they agree otherwise (§ 223(b)(5)(B)(ii)). What
is not divided is the catch-up: § 223(b)(5)(B) computes the shared limit without regard to it, so each of
them adds their own catch-up amount to their own account. The catch-up cannot be doubled into one account.
</div>

<div class="scenario" data-type="baseline">
<h3>Scenario 4 — the full year, done right</h3>

Hassan has self-only coverage under a qualifying high-deductible health plan for all twelve months of
2026 and is 40 years old. He contributes, through payroll deduction, exactly the annual limit for
self-only coverage. His employer contributes nothing to the account.

This is the rule working exactly as designed. Twelve eligible months support the full annual figure
under IRC § 223(b)(1), there is no catch-up because he is under 55, and nothing here is close to a line.
The deduction reduces his {gloss:adjusted-gross-income} dollar for dollar, whether or not he itemizes —
worth seeing once, plainly, before the harder cases.
</div>

<div class="scenario" data-type="fails">
<h3>Scenario 5 — the dependent with her own coverage</h3>

Ines, age 22, is a full-time student claimed as a {gloss:dependent} on her parents' return. She has her
own job, her own qualifying high-deductible health plan, and opens an HSA in her own name, contributing
from her paycheck during the year.

None of it is deductible. IRC § 223(b)(6) denies the deduction to an individual for whom another taxpayer
is allowed a § 151 deduction for a taxable year beginning in the same calendar year — her own coverage
and her own eligibility do not matter once someone else can claim her. The fix, if there is one, lies
with whether her parents can still claim her at all, not with anything on her own return.
</div>

<div class="callout trap">

**Eligibility is tested on the first day of the month.** Coverage starting on the second produces nothing
for that month.

**Entitlement to Medicare, not age, ends contributions** — and enrolment is often backdated.

**The two additional taxes are different.** Ten percent for a last-month testing period failure, twenty
percent for a non-medical distribution.

**Insurance premiums are not qualified medical expenses.** IRC § 223(d)(2)(B) excludes any payment for
insurance from the definition, subject to the narrow categories elsewhere in the paragraph.
</div>

## How this has changed

**Pub. L. 119-21 widened the regime in three places in 2025.** Section 71307(a) added § 223(c)(2)(H),
which treats a **bronze or catastrophic plan** available as individual coverage through an Exchange as a
high deductible health plan — so a large group of Exchange enrollees became able to hold an account
without changing plans. Section 71308(a) added § 223(c)(1)(E), providing that a **direct primary care
service arrangement** is not a health plan that disqualifies the individual, and § 71308(b) added a
corresponding clause to the qualified medical expense definition. Section 71306(a) rewrote the telehealth
safe harbour in § 223(c)(2)(E), removing the time limitation that had previously confined it.

**The telehealth safe harbour is now permanent, after several temporary versions.** It began as pandemic
relief, was extended more than once, lapsed, and was restored. The current text is unqualified: a plan
does not fail to be a high deductible health plan by reason of failing to have a deductible for telehealth
and other remote care services. Material written between 2022 and 2025 describes windows that no longer
apply.

**Two other safe harbours sit alongside it** and are easy to miss: surprise billing under § 223(c)(2)(F)
and certain insulin products under § 223(c)(2)(G). Neither disqualifies a plan for providing benefits
before the deductible is met.

**The additional tax on non-medical distributions rose from 10 to 20 percent in 2010** and the exceptions
did not change with it. Note that § 223(f)(4)(C) never names an age: it points at section 1811 of the
Social Security Act, so the exception tracks Medicare eligibility rather than a fixed number in the Code.

## Exam focus

Expect a **partial year** of eligibility, testing whether you prorate by month or allow the annual figure.

Expect **Medicare**, and read for entitlement rather than age — backdated enrolment is the usual trap.

Expect a **married couple** with two plans, where the answer is one shared family limit and two separate
catch-ups.

Expect the **two rates** — 10 percent and 20 percent — offered against each other.

## Check yourself

**1.** A taxpayer is covered by a qualifying plan from 1 July. What is the contribution limit for the
year?

*Answer: Six twelfths of the applicable annual amount, plus six twelfths of the catch-up if aged 55 or
over, under IRC § 223(b)(1) and (2) — unless the last-month rule in § 223(b)(8)(A) is used.*

**2.** What happens if the last-month rule is used and eligibility is lost the following June?

*Answer: The contributions that could not have been made but for the rule are included in gross income for
the year of the failure and the tax is increased by 10 percent of that amount, under IRC
§ 223(b)(8)(B)(i), unless the failure was by death or disability.*

**3.** A 62-year-old withdraws 5,000 dollars from an account and uses it to pay a credit card bill. What
is the consequence?

*Answer: The 5,000 dollars is included in gross income under IRC § 223(f)(2) and the tax is increased by
20 percent of it under § 223(f)(4)(A). None of the § 223(f)(4)(B) or (C) exceptions applies at 62 absent
disability.*

**4.** A married couple each hold their own account and one spouse has family coverage. May each
contribute the family maximum?

*Answer: No. IRC § 223(b)(5)(A) treats both as having only the family coverage, giving one family limit
divided equally unless they agree otherwise — though each may add their own catch-up amount.*

**5.** May an account pay health insurance premiums?

*Answer: Not generally. IRC § 223(d)(2)(B) provides that the definition of qualified medical expenses does
not apply to any payment for insurance, subject only to the narrow categories listed elsewhere in that
paragraph.*

**6. Priyanka, aged 67, retires in October 2026 and claims Social Security; her Medicare Part A entitlement is backdated to April. She had self-only coverage under a qualifying plan all year and contributed the full annual amount in January. Her monthly limitation is zero from:**
(A) October, the month she enrolled (B) April, the first month of entitlement (C) January 2026, because she was already past 65 (D) January 2027, the year after enrolment
*Answer: B. IRC § 223(b)(7) makes the monthly limitation zero for the first month the individual is entitled to Medicare benefits and for each month thereafter — entitlement, not age or the enrolment date, controls, so nine twelfths of her January contribution is an excess.*

**7. In March 2027 Ola discovers a 2026 excess contribution. He extends his 2026 return to 15 October 2027 and withdraws the excess, with the net income attributable to it, in September 2027. The result is:**
(A) The excess is included in gross income and the tax is increased by 20 percent of it (B) The excess escapes the inclusion rule, because the withdrawal with its net income was made by the due date of the return including extensions (C) The excess escapes only if withdrawn by the unextended due date (D) The excess escapes inclusion but the 10 percent additional tax still applies
*Answer: B. IRC § 223(f)(3)(A): an excess contribution withdrawn with the net income attributable to it on or before the due date of the return, including extensions, escapes the inclusion rule.*

**8. Mira, aged 22, is claimed as a dependent on her parents' return. She has her own qualifying high deductible health plan through her job and contributes $2,000 to an HSA in her own name. Her deduction is:**
(A) $2,000, because she has her own qualifying coverage (B) $2,000 prorated for the months she was covered (C) Nothing, because another taxpayer is allowed a § 151 deduction for her (D) Nothing, unless her parents also contribute to the account
*Answer: C. IRC § 223(b)(6) allows no deduction to an individual for whom another taxpayer is allowed a § 151 deduction for a taxable year beginning in the same calendar year; her own coverage and eligibility do not matter.*
