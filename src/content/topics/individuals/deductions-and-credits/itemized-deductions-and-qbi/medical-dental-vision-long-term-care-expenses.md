---
title: "Medical, dental, vision and long-term care expenses"
code: "1.3.1.a"
part: 1
domain: "Deductions and Credits"
section: "Itemized deductions and QBI"
description: "The floor is a subtraction, not a threshold — clearing it does not make everything deductible. Over-the-counter medicine is out, and a tenant's ramp can be in."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 152", title: "Dependent defined", url: "https://www.law.cornell.edu/uscode/text/26/152" }
  - { type: IRC, ref: "§ 162", title: "Trade or business expenses", url: "https://www.law.cornell.edu/uscode/text/26/162" }
  - { type: IRC, ref: "§ 213", title: "Medical, dental, etc., expenses", url: "https://www.law.cornell.edu/uscode/text/26/213" }
  - { type: IRC, ref: "§ 2053", title: "Expenses, indebtedness, and taxes", url: "https://www.law.cornell.edu/uscode/text/26/2053" }
  - { type: IRC, ref: "§ 7702B", title: "Treatment of qualified long-term care insurance", url: "https://www.law.cornell.edu/uscode/text/26/7702B" }
  - { type: RevProc, ref: "2025-32", title: "Inflation adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.3.1.f", "1.2.4.e", "1.2.4.c", "1.3.1.b", "1.2.2.e", "1.3.1.c", "1.3.1.d", "1.3.1.e", "1.5.1.k"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 213(a) allowance and its 7.5 percent floor, the modified § 152 dependency test, the § 213(d)(1) definition of medical care with the § 213(b) prescription requirement, the § 213(d)(2) lodging rule and its per-night cap, the § 213(d)(9) cosmetic surgery exclusion, the § 213(d)(10) long-term care premium scale and the § 213(d)(11) related-provider rule, and the § 213(c) treatment of a decedent's expenses." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, four glossary marks, a threshold diagram of the AGI floor, and two typed scenarios (baseline, procedural) alongside the existing three." }
diagram:
  archetype: "threshold"
  caption: "The 7.5% AGI floor — below it, nothing; above it, only the excess"
  min: 0
  max: 15
  marks:
    - { figureKey: "medical.floor", value: 7.5, label: "7.5% of AGI — the floor", emphasis: true }
---

<div class="plain-terms">
This page is about deducting medical costs on your tax return. It only helps if you itemize, and
even then only part of your bill counts. You subtract a floor tied to your income first, and only
the amount left over is deductible. That trips people up: clearing the floor does not mean the whole
bill counts. Store-bought medicine does not count unless a doctor writes a prescription for it. Home
changes for a health need, like a ramp, can count in full if you rent rather than own. This page
decides what counts as a medical cost, and how much of it you can actually deduct.
</div>

The floor is a subtraction, not a gate. Expenses are deductible **to the extent that** they exceed
7.5 percent of adjusted gross income — so a taxpayer who clears the floor deducts only the excess, not the
whole amount. Two other features do most of the remaining work: an over-the-counter medicine is not
deductible however necessary it is, and a capital improvement to a home can be, even a rented one.

## The rule

**The allowance and the floor.** There is allowed as a deduction the expenses paid during the taxable
year, **not compensated for by insurance or otherwise**, for medical care of the taxpayer, spouse, or a
dependent, **to the extent that** those expenses exceed 7.5 percent of adjusted gross income (IRC
§ 213(a)).

**Whose expenses count.** A dependent within § 152, determined **without regard to** the gross income
test, the not-a-dependent-of-another test, and the joint return test (IRC § 213(a)). A person who is not
a dependent for exemption or credit purposes may therefore still have their medical expenses paid and
deducted.

**What medical care means.** Amounts paid for the diagnosis, cure, mitigation, treatment or prevention of
disease, or for the purpose of affecting any structure or function of the body; for transportation
primarily for and essential to that care; for qualified long-term care services within § 7702B(c); and for
insurance covering such care, including Medicare Part B premiums (IRC § 213(d)(1)(A)–(D)).

**Medicines must be prescribed.** An amount paid for medicine or a drug is taken into account only if it
is a **prescribed drug** or is **insulin** (IRC § 213(b)). This is a bright line and it is not a
question of medical necessity.

**Lodging, but not meals.** Lodging away from home, not lavish or extravagant, primarily for and essential
to medical care counts where the care is provided by a physician in a licensed hospital or an equivalent
facility, and there is **no significant element of personal pleasure, recreation or vacation** in the
travel (IRC § 213(d)(2)(A), (B)). The amount is capped per night per individual at the figure in the table
below. Meals away from home are not mentioned and are not included.

**Cosmetic surgery is out, with three exceptions.** Medical care does not include cosmetic surgery or
similar procedures unless necessary to ameliorate a deformity arising from or directly related to a
congenital abnormality, a personal injury resulting from accident or trauma, or a disfiguring disease (IRC
§ 213(d)(9)(A)). Cosmetic surgery means a procedure directed at improving appearance which does not
meaningfully promote the proper function of the body or prevent or treat illness (§ 213(d)(9)(B)).

**Long-term care premiums are capped by age.** For a qualified long-term care insurance contract, only
**eligible long-term care premiums** within § 213(d)(10) count, on a five-band scale by attained age
before the close of the year.

**And care from relatives usually does not count.** A payment for a qualified long-term care service is
treated as **not** paid for medical care where the service is provided by the individual's spouse or a
relative, unless they are a licensed professional, or by a related corporation or partnership (IRC
§ 213(d)(11)).

**A decedent's expenses have their own timing rule.** Expenses for the decedent's medical care paid out of
the estate within the **1-year period beginning the day after death** are treated as paid by the taxpayer
at the time incurred (IRC § 213(c)(1)) — unless the amount is allowed as a § 2053 estate tax deduction,
which requires a filed statement and waiver to avoid (§ 213(c)(2)).

## Current figures

| Item | 2026 |
| --- | --- |
| The floor | {fig:medical.floor} |
| Whose expenses | {fig:medical.whose_expenses} |
| Medical care | {fig:medical.definition} |
| Medicines | {fig:medical.drugs} |
| Lodging | {fig:medical.lodging} |
| Cosmetic surgery | {fig:medical.cosmetic} |
| Long-term care premiums | {fig:medical.long_term_care_premiums} |
| Long-term care premium scale | {fig:sehi.ltc_scale} |
| Care provided by relatives | {fig:medical.relatives} |
| A decedent's expenses | {fig:medical.decedent} |
| No double benefit | {fig:medical.no_double_benefit} |

## How it works in practice

Total the qualifying expenses first, then subtract the floor, and quote the difference. The most common
client misunderstanding is that clearing 7.5 percent makes the whole amount deductible; the statute says
"to the extent that", and the floor is subtracted from the total rather than being a qualifying condition.

Strip out what is compensated. Amounts reimbursed by insurance, paid from a health savings account, or
deducted under § 162(l) as self-employed health insurance are not available again here — the § 213(a)
phrase "not compensated for by insurance or otherwise" and the specific bar in § 162(l)(3) both bite. In
practice the largest single item on a client's list is often already covered.

Capital improvements are deductible to the extent the cost exceeds the increase in the value of the
property, and where the taxpayer does not own the property there is no value increase to subtract — so a
tenant's ramp or grab rails are deductible in full, subject to the floor. Improvements of a kind that
ordinarily do not increase value, such as a ramp or widened doorway, are commonly treated the same way.

For long-term care, two limits apply in sequence: § 213(d)(10) caps the premium by age band, and
§ 213(d)(11) may disqualify the service payments entirely where the carer is a family member. Both are
easily missed on a return that simply totals what was spent on care.

<div class="scenario" data-type="boundary">
<h3>Scenario 1 — clearing the floor and deducting almost nothing</h3>

Ruby has adjusted gross income of 96,000 dollars and 8,000 dollars of unreimbursed medical expenses. She
tells her preparer she has "cleared the threshold".

Her floor is 7,200 dollars, so 800 dollars is deductible under IRC § 213(a) — the statute allows the
expenses "to the extent that" they exceed the floor. And because her {gloss:itemized-deduction}s in total
may not exceed her {gloss:standard-deduction}, that 800 dollars may produce no benefit at all. Clearing the
floor and obtaining a deduction are different things, and this is the ordinary case rather than the
exception.
</div>

<div class="scenario" data-type="interaction">
<h3>Scenario 2 — the tenant's ramp</h3>

Sami uses a wheelchair, rents his home, has adjusted gross income of 35,000 dollars, and spends 1,500
dollars on a ramp to the front door plus 3,000 dollars of other unreimbursed medical costs.

The ramp is a capital expenditure whose purpose is to affect a structure or function of the body within
IRC § 213(d)(1)(A), and because Sami does not own the property there is no increase in the value of **his**
property to offset against it. The full 1,500 dollars therefore joins the 3,000 dollars, and the 4,500
dollar total is reduced by the 2,625-dollar floor, giving 1,875 dollars. Had he owned the house, the
deduction would have been reduced by any increase in its value — though a ramp is a modification that
usually adds none.
</div>

<div class="scenario" data-type="fails">
<h3>Scenario 3 — the daughter who gave up work</h3>

Tomas pays his daughter 40,000 dollars a year to provide full-time long-term care for him at home. She is
not a licensed care professional. He also pays 4,900 dollars in premiums on a qualified long-term care
insurance contract; he is 72.

The 40,000 dollars is treated as **not** paid for medical care by IRC § 213(d)(11), because the qualified
long-term care service is provided by a relative who is not a licensed professional. The premiums are
medical care, but only to the extent of the eligible long-term care premium for his age band under
§ 213(d)(10) — so part of the 4,900 dollars is excluded too. Engaging an agency rather than his daughter
would have made the care payments deductible; the family arrangement is what disqualifies them.
</div>

<div class="scenario" data-type="baseline">
<h3>Scenario 4 — the parent who isn't a dependent everywhere</h3>

Wei's mother lives with him. Her own income is too high for him to claim her as a {gloss:dependent} for
the credit for other dependents, so he doesn't. During 2026 he pays 5,700 dollars of her unreimbursed
medical bills, plus 1,300 dollars of his own unreimbursed dental work. His adjusted gross income is 60,000
dollars. He also uses his {gloss:health-savings-account} to pay 800 dollars toward his own annual physical.

Wei may still count his mother's bills: IRC § 213(a) tests whether she is a dependent within § 152 without
regard to the gross income test that keeps her off his return elsewhere. His combined total is 7,000
dollars, his floor is 4,500 dollars, and 2,500 dollars is deductible. The 800-dollar physical is not added
to the total at all — it was paid from the health savings account, and § 213(a) reaches only amounts not
compensated for by insurance or otherwise.
</div>

<div class="scenario" data-type="procedural">
<h3>Scenario 5 — the estate's choice on a decedent's bills</h3>

A taxpayer dies in March 2026, leaving 18,000 dollars of unpaid hospital bills. The executor pays them in
September 2026, within the one-year window, out of estate assets, and the estate could otherwise claim the
same amount as a § 2053 estate tax deduction.

Because payment fell within the one-year period beginning the day after death, IRC § 213(c)(1) treats the
18,000 dollars as paid by the decedent at the time it was incurred, so it can be deducted on the decedent's
final income tax return. But § 213(c)(2) blocks that route unless the estate first waives the § 2053
estate tax deduction for the same amount by filing the required statement — the executor must choose one
deduction or the other, and must file to get the income tax version.
</div>

<div class="callout trap">

**The floor is subtracted, not satisfied.** Section 213(a) allows the excess only.

**Prescribed or insulin.** Section 213(b) admits no medical-necessity argument for an over-the-counter
medicine.

**Lodging is capped and meals are absent.** Section 213(d)(2) caps lodging per night per person and says
nothing about meals away from home.

**Long-term care from a relative is generally not medical care** under § 213(d)(11), whatever the
qualifications or the amount paid.
</div>

## How this has changed

**The floor is now permanent at the lower figure.** It moved between 7.5 and 10 percent repeatedly
between 2013 and 2020 and was finally fixed by Pub. L. 116-260 § 101(a), which struck the alternative
entirely. The current § 213(a) carries a single rate and no sunset — which is unusual among the
provisions on this site, most of which now depend on a Revenue Procedure or a temporary extension.

**The alternative minimum tax difference disappeared with it.** Before 2017 the floor was higher for
minimum tax purposes than for regular tax, producing a separate computation; that distinction is gone.

**Over-the-counter medicines moved twice.** They were excluded from § 213(b) throughout, but the parallel
rules for reimbursement from health savings accounts and flexible spending arrangements were narrowed in
2010 and then reopened in 2020. The § 213(b) deduction rule itself never changed — which is why a client
whose HSA reimburses an over-the-counter purchase may reasonably think the deduction follows. It does not.

**Long-term care insurance came into the section in 1996** by Pub. L. 104-191, and the eligible premium
scale in § 213(d)(10) has been indexed ever since. Two provisions added at the same time cut in opposite
directions: the premiums became deductible within limits, and § 213(d)(11) removed most family-provided
care from the definition entirely.

## Exam focus

Expect an **arithmetic question** where the answer is the excess over the floor. Candidates who quote the
full expense have not read "to the extent that".

Expect an **over-the-counter medicine** among a list of otherwise deductible items.

Expect a **capital improvement**, with ownership as the variable — a tenant deducts the full cost, an
owner reduces it by any increase in value.

Expect **long-term care**, either as the age-banded premium cap or as the family-carer disqualification.

## Check yourself

**1.** A taxpayer with adjusted gross income of 80,000 dollars has 7,000 dollars of unreimbursed medical
expenses. What is deductible?

*Answer: 1,000 dollars. IRC § 213(a) allows the expenses to the extent they exceed 7.5 percent of adjusted
gross income, so 7,000 less the 6,000-dollar floor.*

**2.** Are non-prescription pain relievers deductible where a physician recommends them?

*Answer: No. IRC § 213(b) takes an amount paid for medicine or a drug into account only if it is a
prescribed drug or is insulin, and a recommendation is not a prescription for this purpose.*

**3.** A taxpayer stays four nights near a hospital while a spouse receives inpatient treatment. What is
deductible for the lodging?

*Answer: Up to the statutory cap per night per individual under IRC § 213(d)(2), provided the care is
given by a physician in a licensed hospital or equivalent and there is no significant element of personal
pleasure in the travel. Meals are not covered.*

**4.** A taxpayer pays their brother, who is not a licensed carer, to provide qualified long-term care
services. Is the payment medical care?

*Answer: No. IRC § 213(d)(11) treats a payment for qualified long-term care services as not paid for
medical care where the service is provided by a relative who is not a licensed professional.*

**5.** Medical expenses of a decedent are paid by the estate five months after death. Whose deduction are
they?

*Answer: The decedent's, treated as paid at the time incurred under IRC § 213(c)(1) because payment fell
within the one-year period beginning the day after death — unless allowed as an estate tax deduction under
§ 2053, which § 213(c)(2) requires be waived by a filed statement.*
