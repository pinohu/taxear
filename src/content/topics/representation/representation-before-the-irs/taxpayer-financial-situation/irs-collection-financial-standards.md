---
title: "IRS Collection Financial Standards"
code: "3.2.3.e"
part: 3
domain: "Representation before the IRS"
section: "Taxpayer financial situation"
description: "The allowable living expense tables that decide what a taxpayer may keep — what is a national standard given without proof, what is a local ceiling, and what is neither."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "N. O."
authorities:
  - { type: IRM, ref: "5.15.1.8", title: "Allowable Expense Overview", url: "https://www.irs.gov/irm/part5/irm_05-015-001" }
  - { type: IRM, ref: "5.15.1.9", title: "National Standards", url: "https://www.irs.gov/irm/part5/irm_05-015-001" }
  - { type: IRM, ref: "5.15.1.10", title: "Local Standards", url: "https://www.irs.gov/irm/part5/irm_05-015-001" }
  - { type: IRM, ref: "5.14.1.4.1", title: "Six-Year Rule and One-Year Rule", url: "https://www.irs.gov/irm/part5/irm_05-014-001r" }
  - { type: IRC, ref: "§ 7122", title: "Compromises" }
forms: ["433-A", "433-F"]
related: ["3.3.1.b", "3.3.1.c", "3.3.1.k", "3.2.3.a", "3.2.3.b"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft against the standards effective 29 June 2026 and the 29 June 2026 revision of IRM 5.15.1." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a threshold diagram of the national standard by family size, glossary marks, and typed scenarios." }
diagram:
  archetype: "threshold"
  caption: "The national standard climbs with household size — given in full, no receipts needed"
  min: 0
  max: 2200
  marks:
    - { figureKey: "cfs.national.one_person", label: "1 person" }
    - { figureKey: "cfs.national.two_persons", label: "2 persons" }
    - { figureKey: "cfs.national.three_persons", label: "3 persons" }
    - { figureKey: "cfs.national.four_persons", label: "4 persons", emphasis: true }
---

<div class="plain-terms">
These are the IRS's own tables for everyday living costs — food, housing, transportation and health care. The IRS uses them to work out how much of a taxpayer's income is truly free to go toward a tax debt. They matter to anyone asking the IRS for a payment plan or a settlement of a tax debt. They do not apply to a business's own costs, only to a person's living expenses. What the tables decide is simple once you see the split: some costs are handed over at a set amount, no receipts needed. Others are a ceiling — the taxpayer gets the standard amount or what they actually spend, whichever is lower. Mixing up which is which is the single most common mistake made with these tables.
</div>

## The rule

The Collection Financial Standards are the tables the IRS uses to decide how much of a
delinquent taxpayer's monthly income is spoken for by living expenses and how much is
therefore available to pay the government. They are not law. No statute mentions them, no
regulation prescribes them, and no court is bound by them. They are administrative
guidelines, published on irs.gov and administered through IRM 5.15.1. But they decide
almost every collection alternative a representative will ever ask for, because the
"reasonable collection potential" underlying an offer in compromise (IRC § 7122) and the
monthly figure in a negotiated installment agreement are both computed from the residue
the standards leave behind.

The governing concept is the **necessary expense test**, which IRM 5.15.1.8 defines as
expenses "necessary to provide for a taxpayer's and his or her family's health and welfare
and/or production of income." Everything else follows from that sentence. The IRM sorts
allowable expenses into three types: allowable living expenses set by the national and
local standards; *other necessary expenses*, which meet the test and are normally allowed
in a reasonable amount; and *other conditional expenses*, which may not meet the test at
all but may still be allowed depending on the facts (IRM 5.15.1.8).

Within the first of those three, there is a further distinction that matters more than any
other on this topic, and it is the distinction the exam tests. **National standards** are
allowances the taxpayer receives in full, monthly, for the family size, *without questioning
the amount actually spent*. **Local standards** are ceilings: the taxpayer is normally
allowed the local standard or the amount actually paid, whichever is less. Two categories
are national — food, clothing and other items, and out-of-pocket health care. Two are
local — housing and utilities, and transportation.

The standards do not apply to entities. IRM 5.15.1.8 carries an explicit reminder that the
allowable living expense standards are not applicable to corporations, partnerships or
LLCs, or to any business expenses. A business's expenses are analysed on their own terms
under IRM 5.15.1.18.

## Current figures

The tables in force are {fig:cfs.effective_date} for purposes of federal tax administration.

| Standard | Basis | Allowance |
| --- | --- | --- |
| Food, clothing and other items — one person | National | {fig:cfs.national.one_person} |
| Food, clothing and other items — two persons | National | {fig:cfs.national.two_persons} |
| Food, clothing and other items — three persons | National | {fig:cfs.national.three_persons} |
| Food, clothing and other items — four persons | National | {fig:cfs.national.four_persons} |
| Each additional person | National | {fig:cfs.national.additional_person} |
| Out-of-pocket health care, under 65 | National | {fig:cfs.health.under_65} |
| Out-of-pocket health care, 65 and over | National | {fig:cfs.health.65_and_over} |
| Vehicle ownership cost, one car | Local (nationwide figure) | {fig:cfs.transport.ownership_one_car} |
| Vehicle ownership cost, two cars | Local (nationwide figure) | {fig:cfs.transport.ownership_two_cars} |
| Public transportation, no vehicle | Local (nationwide figure) | {fig:cfs.transport.public} |
| Housing and utilities | Local, by county and family size | Published table — {fig:cfs.housing_document_pages} |

Vehicle *operating* costs are published by Census region and metropolitan statistical area,
so there is no single national number. Housing and utilities are set for every county in
every state, which is why the printable version runs to the length shown above.

## How it works in practice

The analysis begins with a Collection Information Statement — Form 433-A or 433-F for
individuals, 433-B for businesses, and the (OIC) variants where an offer is contemplated.
The revenue officer or campus employee compares reported income against allowable expenses
and arrives at a monthly disposable figure. The order of operations is what a representative
should rehearse:

1. **Count the household.** The number of persons allowed for national standard expenses
   should generally match the dependents and taxpayers claimed on the current-year return
   (IRM 5.15.1.8). Reasonable exceptions exist — the IRM names foster children and pending
   adoptions — but they must be documented.
2. **Give the national standards in full.** No receipts, no questions. The IRM's own example
   makes the point in the taxpayer's favour: a taxpayer whose actual spending in the covered
   categories falls short of the national standard still receives the standard.
3. **Cap the local standards.** Housing and utilities, and transportation, are the lesser of
   actual and standard. If the taxpayer has a car but no car payment, the ownership component
   drops to zero and only the operating cost is allowed (IRM 5.15.1.10).
4. **Add other necessary expenses** in reasonable amounts — current taxes, court-ordered
   payments, health insurance, child care, and so on.
5. **Test the conditional expenses** against the six-year and one-year rules.

That last step is where practice diverges most from the tables. IRM 5.14.1.4.1 provides that
where a taxpayer can stay compliant and full-pay within six years and within the collection
statute, all expenses may be allowed if the amounts are reasonable, with no substantiation of
reasonable expenses required. Separately, a taxpayer who cannot full-pay within six years may
be given up to one year to modify or eliminate excessive necessary expenses — and the IRM says
in terms that the taxpayer does not have to qualify for the six-year rule in order to use the
one-year rule.

Deviation is available and under-used. The IRS's own disclaimer says that where the facts show
the standards are inadequate to provide for basic living expenses, actual expenses may be
allowed, provided the taxpayer documents it. What will not work is inconvenience: IRM 5.15.1.8
says a deviation from a local standard is not allowed merely because it is inconvenient for the
taxpayer to dispose of valued assets or reduce excessive necessary expenses.

<div class="scenario" data-type="boundary">
<h3>The paid-off car</h3>

Rosalind Achebe owes four years of income tax and asks for a streamlined-adjacent
{gloss:installment-agreement} that requires a financial statement. She drives a nine-year-old
sedan, paid off in 2023, and reports 340 dollars a month in fuel, insurance and repairs. Her
representative lists the full transportation standard — ownership plus operating — on the Form
433-A, the {gloss:collection-information-statement}.

The revenue officer strikes the ownership component. Because Achebe has no lease or loan
payment, the allowable ownership cost is zero; only the operating portion of the transportation
standard applies, and even that is capped at the lesser of her regional operating standard and
her actual 340 dollars. The listing error inflated her claimed expenses by several hundred
dollars a month and cost her credibility on the rest of the statement. The right move was to
claim the operating standard, note the vehicle's age in the remarks, and — if repairs were in
fact running above the regional figure — substantiate the excess and ask for a deviation.
</div>

<div class="scenario" data-type="baseline">
<h3>Spending less than the standard</h3>

Dmitri Vasquez lives frugally. His actual monthly outlay on food, housekeeping supplies,
clothing, personal care and miscellaneous comes to about 610 dollars for a household of one.
The campus employee reviewing his Form 433-F proposes to allow him 610 dollars, reasoning that
the IRS should not fund spending that is not happening.

That is wrong, and the IRM says so directly. Taxpayers are allowed the total national standard
amount monthly for their family size without questioning the amounts they actually spend
(IRM 5.15.1.9). Vasquez receives the one-person national standard set out in the
{gloss:irs-collection-financial-standards}, not his receipts. His representative should cite the
paragraph and the IRM's illustrative example, in
which a taxpayer whose actual expenditures total less than the national standard is nonetheless
allowed the standard. The difference — well over two hundred dollars a month — is the whole
margin between a payment plan Vasquez can sustain and one he will default on.
</div>

<div class="scenario" data-type="procedural">
<h3>The private school and the one-year rule</h3>

The Okonjo family owes a substantial balance and cannot full-pay within six years. Their
statement includes private school tuition of 1,150 dollars a month for two children. Tuition is
a classic conditional expense: it does not meet the necessary expense test on its own, because
public education is available.

The representative does not argue that tuition is necessary. Instead the request is framed on
IRM 5.14.1.4.1: give the family one year to modify or eliminate the expense, allowing the
tuition through the end of the current academic year and the next, with the installment payment
stepping up on a stated date once the children transfer. The IRM contemplates exactly this, and
notes that eliminating conditional expenses may bring a taxpayer inside the six-year limit and
so let them retain other conditional expenses. Framing the ask as a scheduled step-up rather
than an open-ended allowance is what makes it acceptable.
</div>

<div class="callout trap">
<strong>National means "given," local means "capped."</strong> This is the single most tested
distinction on this outline item, and it is easy to invert. Food, clothing and other items, and
out-of-pocket health care, are national — allowed in full for family size with no substantiation.
Housing and utilities, and transportation, are local — the lesser of standard and actual. A
representative who claims actual amounts in a national category has given away money; one who
claims the standard in a local category where actual spending is lower has invited a correction.
</div>

<div class="callout trap">
<strong>The IRS tables and the bankruptcy tables are not the same tables.</strong> Every
Collection Financial Standards page carries a disclaimer that the standards are for federal tax
administration only, and directs anyone computing a bankruptcy means test to the website of the
U.S. Trustee Program. The categories look alike and the numbers are related, but they are
maintained separately and are effective on different dates. Never pull an IRS figure into a
means-test calculation, or the reverse.
</div>

<div class="callout trap">
<strong>The tables move, and the page you printed is stale.</strong> The standards are revised
annually and the effective date is stamped at the top of every page. A Form 433 prepared against
last year's tables will be recomputed by the IRS against the current ones, usually to the
taxpayer's detriment if the analysis was tight. Re-pull the figures the day the statement is
signed.
</div>

<div class="callout trap">
<strong>The miscellaneous allowance is a tool, not padding.</strong> It is a percentage of the
other national categories and covers items with no standard of their own — credit card payments,
bank charges, school supplies, occupational expenses. It can also absorb the portion of an
expense that exceeds a standard and was not allowed as a deviation. But deviations from the
standard amount are not allowed for miscellaneous expenses themselves: the number is the number.
</div>

## How this has changed

The standards themselves are re-published annually; the tables cited here took effect on the
date shown in the figures section, and the corresponding revision of IRM 5.15.1 was transmitted
the same day. That revision made several changes a representative should know about. It
incorporated interim guidance on **International Collection Financial Standards**, which now
govern taxpayers residing outside the United States — collection employees are directed to use
the international calculator and specifically told not to substitute an arbitrarily selected
United States location as a starting point, with Puerto Rico residents continuing under the
regular housing and utility standards.

The same revision replaced the Consumer Price Index with the **Personal Consumption
Expenditures price index** as the inflation measure used to adjust the allowable living expense
standards, with a separate fuel-price adjustment drawn from Energy Information Administration
data. It also added forced sale value and reduced forced sale value guidance to the asset
analysis, expanded the digital assets section, and added an expectation that a taxpayer use
equity in assets toward the liability before other collection alternatives are considered — a
change that bears directly on how an offer or an agreement will be received.

The structural point has been stable for much longer. The national/local architecture, the
necessary expense test, and the three-way sort into living, other necessary and other
conditional expenses have all been in the IRM in recognisable form for over two decades. What
changes each year is the arithmetic.

## Exam focus

Expect a question that asks which standards are established locally rather than nationally, or
which of four listed categories is *not* a Collection Financial Standard. Learn the four
categories cold — food/clothing/other items, out-of-pocket health care, housing and utilities,
transportation — and learn which two are national and which two are local. Employment,
retirement contributions, and charitable giving are not among them; if an answer choice names
one, it is the distractor. A second, less common line of questioning tests the necessary expense
test itself: health and welfare *or* production of income, applied to the taxpayer and family.
Amounts are not tested, and should not be memorised.

## Check yourself

**1. A taxpayer with a household of three reports actual monthly spending of 1,400 dollars on
food, clothing, housekeeping supplies, personal care and miscellaneous. The three-person national
standard for those categories is higher than that. What amount is allowed?**

A. 1,400 dollars, because allowances are limited to amounts actually spent
B. The full three-person national standard
C. The average of actual spending and the standard
D. 1,400 dollars unless the taxpayer substantiates the difference

*Answer: B. National standards are allowed in full for the family size without questioning the
amounts actually spent, and the IRM's own example allows the standard where actual spending is
lower.*

**2. Which pair of Collection Financial Standards is established on a local rather than a
national basis?**

A. Food and clothing
B. Out-of-pocket health care and food
C. Housing and utilities, and transportation
D. Transportation and out-of-pocket health care

*Answer: C. Housing and utilities are set by county and family size; transportation operating
costs are set by Census region and metropolitan area. Both are ceilings, not entitlements.*

**3. A taxpayer owns a vehicle outright with no loan or lease payment. What transportation
allowance applies?**

A. Ownership plus operating costs, as for any vehicle owner
B. The operating cost portion only
C. The public transportation allowance only
D. Nothing, because there is no payment to allow

*Answer: B. With no lease or loan payment the allowable ownership cost is zero, and only the
operating component of the transportation standard is used.*

**4. A taxpayer cannot full-pay within six years and claims a conditional expense that does not
meet the necessary expense test. Which is correct?**

A. The expense must be disallowed immediately, because the six-year rule does not apply
B. The taxpayer may be given up to one year to modify or eliminate the expense
C. Conditional expenses are never allowed under any circumstances
D. The expense is allowed in full because the six-year rule was not met

*Answer: B. The one-year rule allows up to a year to modify or eliminate excessive necessary
expenses, and the taxpayer need not qualify for the six-year rule in order to use it.*

**5. Which of the following is not a category of Collection Financial Standard?**

A. Transportation
B. Out-of-pocket health care expenses
C. Employment
D. Housing and utilities

*Answer: C. The four categories are food/clothing/other items, out-of-pocket health care,
housing and utilities, and transportation. There is no employment standard.*
