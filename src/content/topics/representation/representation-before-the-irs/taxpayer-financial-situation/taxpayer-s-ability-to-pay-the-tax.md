---
title: "Taxpayer's ability to pay the tax"
code: "3.2.3.a"
part: 3
domain: "Representation before the IRS"
section: "Taxpayer financial situation"
description: "How disposable income and equity in assets are computed from a Collection Information Statement, and how those two numbers choose between agreement, offer and hardship."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRM, ref: "5.15.1.3", title: "Analyzing Financial Information", url: "https://www.irs.gov/irm/part5/irm_05-015-001" }
  - { type: IRM, ref: "5.15.1.4", title: "Verifying Financial Information", url: "https://www.irs.gov/irm/part5/irm_05-015-001" }
  - { type: IRM, ref: "5.14.1.4.1", title: "Six-Year Rule and One-Year Rule", url: "https://www.irs.gov/irm/part5/irm_05-014-001r" }
  - { type: IRC, ref: "§ 6159", title: "Agreements for payment of tax liability in installments" }
  - { type: IRC, ref: "§ 7122", title: "Compromises" }
  - { type: IRC, ref: "§ 6331(k)", title: "No levy while certain offers pending or installment agreement pending or in effect" }
  - { type: IRC, ref: "§ 6503", title: "Suspension of running of period of limitation" }
forms: ["433-A", "433-F", "656"]
related: ["3.2.3.e", "3.3.1.k", "3.3.1.m", "3.2.3.d", "3.2.3.b", "3.2.3.c"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft against IRM 5.15.1 as revised 29 June 2026." }
---

## The rule

"Ability to pay" is not a mood or an argument. It is an arithmetic output, and IRM 5.15.1.3
states the formula in a sentence: analyse income and expenses to determine the amount of
**disposable income — gross income less all allowable expenses — available to apply toward
the outstanding tax liability**. Everything a representative does in a collection case is
either an input to that subtraction or an argument about one of its terms.

There is a second number, and taxpayers consistently forget it. Disposable income answers
what the taxpayer can pay *going forward*. Equity in assets answers what the taxpayer can
pay *now*. IRM 5.15.1.3 directs the collection employee through an escalating sequence:
request immediate payment if the taxpayer has cash or liquid assets equal to the total
liability; request full payment if equity in assets equals or exceeds the liability and the
asset can be sold or borrowed against without causing a hardship; request partial payment
where liquid assets or equity in non-liquid assets can reduce the liability "to the maximum
extent achievable given the taxpayer's circumstance." The 29 June 2026 revision of the IRM
sharpened this further, adding an express expectation that a taxpayer use equity in assets
toward the liability before other collection alternatives are considered.

Those two numbers then select the resolution. Where disposable income can retire the balance
within the statute, the answer is an installment agreement (IRC § 6159). Where neither income
nor equity can — and the taxpayer's reasonable collection potential is genuinely less than the
liability — the answer is an offer in compromise on doubt as to collectibility (IRC § 7122).
Where allowable expenses equal or exceed income and there is no reachable equity, the answer
is currently not collectible status. The representative's job is to compute the numbers
honestly first and pick the label second, not the reverse.

The financial statement is the vehicle. Individuals file Form 433-A, or the shorter Form 433-F
where the case is worked at a campus; businesses file Form 433-B; the (OIC) variants apply
where an offer is contemplated. A simple installment agreement for an aggregate unpaid balance
of {fig:ia.simple.threshold} generally requires no statement at all, which is why the threshold
question in every collection case is whether a financial statement is needed before it is
whether it is favourable.

## Current figures

| Item | Amount |
| --- | --- |
| Simple installment agreement — no financial statement | {fig:ia.simple.threshold} |
| Short-term payment plan — maximum term | {fig:ia.short_term.max_days} days |
| Offer in compromise application fee | {fig:oic.application_fee} |
| Lump sum offer — payment due with the application | {fig:oic.lump_sum_initial} |
| Offer deemed accepted if not rejected within | {fig:oic.deemed_accepted_months} months |
| Lien filing threshold on an account reported not collectible | {fig:cnc.nftl_threshold} |

The allowable-expense side of the subtraction is set by the Collection Financial Standards,
which are covered separately.

## How it works in practice

**Verification comes before analysis.** IRM 5.15.1.4 sets the documentation review a collection
employee performs, which tells a representative what to assemble before filing rather than after
being asked. Wage statements for the prior three months, or a current year-to-date figure, with
average earnings compared against the statement and withholding checked for adequacy. Cancelled
checks and credit card statements for the last three months, to verify the amount and frequency of
declared expenses and reconcile them against returns and invoices. Bank statements, reviewed for
repeated incoming payments that suggest unreported income. Retirement, brokerage and other
investment account statements.

Three months is the ordinary review window, but it is not a fixed rule. Where either the taxpayer
or the IRS believes three months of expenses are not representative of actual annual expenditure,
additional months up to one year may be reviewed (IRM 5.15.1.8). That door opens in both
directions: it is the correct answer to a quarter distorted by a one-off medical event, and it is
also how the IRS responds to a taxpayer who front-loads expenses into the review period.

**Smoothing is required, not optional.** Necessary living expenses that are not paid in equal
monthly increments must be averaged over twelve months (IRM 5.15.1.3). Car insurance paid
quarterly, a semi-annual property tax bill, an annual professional licence — total the year and
divide by twelve. A statement that shows the actual cash outflow of a heavy month will be
recomputed.

**The interview is substantive.** IRM 5.15.1.4 lists the questions a revenue officer is expected
to ask individual taxpayers: sources of income; real property, including property outside the
United States; personal assets such as vehicles and boats; investments including retirement
accounts; whether mortgage or rent obligations are being met and how necessary expenses are paid;
and whether they own any digital assets. Business taxpayers face a parallel list about how income
is generated, whether customers recur, foreign-source income, whether virtual currency is accepted
as compensation, and internet presence. Absent a safety concern, an appointment to visit a business
taxpayer **must** now be made to observe the physical layout, the number of employees, and the
condition of business assets.

**Certain expenses are allowed on conditions worth knowing.** IRM 5.15.1.11's table is the working
list. Representation fees are allowable where they are for representation before the IRS or
otherwise meet the necessary expense test, in a reasonable amount — but fees related to business
operations reported on Schedule C are not personal expenses. Charitable contributions are allowed
only where giving is a condition of employment or independently meets the test. Court-ordered
alimony and child support are allowable if actually being paid, with non-payment excused only for
temporary job loss or illness. Life insurance is allowable if it is a term policy on the taxpayer's
life alone; whole life policies are reviewed as an asset to borrow against or liquidate. Credit
cards are treated as a method of payment rather than an expense.

<div class="scenario">
<h3>Equity the client did not think counted</h3>

Marisol Etxeberria owes a balance she cannot pay from income. Her Form 433-A shows disposable
income of about 90 dollars a month and she asks her representative to prepare an offer in
compromise. The statement also lists a rental duplex, inherited from a parent, with a mortgage
against it — she describes it as "underwater in a bad market."

The representative pulls the county assessment and a payoff statement and finds roughly 74,000
dollars of equity. IRM 5.15.1.3 requires that equity to be addressed first: can the property be
sold or borrowed against without causing a hardship? It can — Etxeberria does not live there and
the rental income is not supporting her household. An offer premised on the duplex being valueless
would be recomputed and rejected, costing her the application fee and months of delay. The correct
advice is to liquidate or refinance and pay, or to price an offer that includes the equity.
</div>

<div class="scenario">
<h3>Three months that were not typical</h3>

Ade Onwuachi is self-employed and had emergency dental surgery in the review quarter. His last
three months of credit card statements show medical outlays far above his ordinary spending, and
his representative is tempted to let the favourable quarter stand.

The representative instead volunteers the distortion: does a three-month window reflect his
*actual* annual expenditure? It does not, and IRM 5.15.1.8 allows additional months up to one year
to be reviewed where either party thinks three months are unrepresentative. On a twelve-month view
Onwuachi's disposable income is higher than the quarter suggests — but his self-employment income
also dipped during his recovery. Raising it first cost him a small increase in the monthly payment
and bought a statement the revenue officer did not have to reconstruct.
</div>

<div class="scenario">
<h3>The tithe and the employment contract</h3>

Grace Lindqvist gives about 640 dollars a month to her congregation and lists it as a necessary
expense. The revenue officer disallows it. Her representative does not argue that charitable
giving is generally necessary — it is not — but produces her employment agreement with a religious
school, which requires her to tithe as a condition of employment.

That is precisely the exception IRM 5.15.1.11 contemplates, and the IRM directs the employee to
review the contract. The expense is allowed. The representative also confirms that no other
charitable contributions were claimed, because the same paragraph directs that any giving not
independently necessary be disallowed — leaving the additional amounts on the statement would
have invited scrutiny of the one item that was defensible.
</div>

<div class="callout trap">
<strong>Currently not collectible does not stop the clock.</strong> Hardship status suspends
collection activity; it does not suspend the collection statute expiration date. Bankruptcy does
(IRC § 6503(h), for the period the Secretary is prohibited from collecting plus six months); a
continuous absence from the United States of at least six months does (IRC § 6503(c)); a pending
collection due process hearing does. Not-collectible status has no such provision, which is why
it is often the better outcome for a taxpayer near the end of the statute — the clock keeps
running while the account sits.
</div>

<div class="callout trap">
<strong>Pending suspends; in effect does not.</strong> IRC § 6331(k) prohibits levy while an offer
in compromise or an installment agreement proposal is pending, for thirty days after a rejection,
during any appeal of that rejection, while an agreement is in effect, and for thirty days after a
termination plus any appeal. Paragraph (3) then applies a suspension of the collection period to
those levy prohibitions — but expressly **except** for paragraph (2)(C), the period during which
an agreement is in effect. A pending proposal freezes the statute; a live agreement does not.
</div>

<div class="callout trap">
<strong>Interest and penalties keep accruing in hardship status.</strong> Reporting an account
not collectible restrains levy on assets and wages, but it does not stop the account growing, and
the IRS will still offset refunds against the balance. A client told that hardship status "stops
everything" will be surprised by the next notice. Where the aggregate unpaid balance reaches the
threshold in the figures table, a Notice of Federal Tax Lien should generally be filed on the
account as well.
</div>

<div class="callout trap">
<strong>Do not claim credit card payments as an expense.</strong> Credit cards are a payment
method. The necessary living expenses charged to them are already inside the national and local
standards, and the miscellaneous component of the national standard is the allowance the IRM
points to for servicing the debt. Listing the minimum payment as a separate line double-counts,
and it signals to the reviewer that the rest of the statement has not been prepared carefully.
</div>

## How this has changed

The analytical framework — disposable income plus equity, verified against three months of
documents, measured against standardised allowable expenses — has been stable since the Collection
Financial Standards were introduced in the 1990s and the IRM's Financial Analysis Handbook took its
present shape. What the 29 June 2026 revision changed is emphasis, and the emphasis moved toward
assets and toward observation.

The revision added an express expectation that a taxpayer use equity in assets toward satisfying
the liability before other collection alternatives are considered, and added forced sale value and
reduced forced sale value guidance to the asset analysis. It expanded the digital assets section
and added digital asset ownership to the questions asked of individual taxpayers. It directed
employees to research peer-to-peer payment and online gambling applications when reviewing bank
statements, since repeated incoming payments can indicate income activity and balances may be
parked in the applications themselves. It made a field visit mandatory for business taxpayers
absent a safety concern, and added field visits to view the condition of vehicles, vessels,
aircraft and real estate when valuing them.

Together these point one way: the 2026 handbook expects more independent verification and less
reliance on the taxpayer's own presentation of what an asset is worth.

## Exam focus

The SEE tests this outline item procedurally rather than numerically. Expect a question on how many
months of income and spending documentation a Collection Information Statement is supported by —
three is the ordinary answer — and a question on which events suspend the collection statute, where
currently not collectible status is the distractor that does not. Know that hardship status stops
levy but not accrual, offset, or the clock. Know the escalating asset sequence: immediate payment
from liquid assets, full payment from equity, partial payment to the maximum extent achievable.
And know that the resolution is chosen by the arithmetic, not the other way round.

## Check yourself

**1. A Collection Information Statement is ordinarily supported by income and spending
documentation covering what period?**

A. The prior three months
B. The prior six months
C. The prior twelve months in every case
D. The full period since the balance arose

*Answer: A. Wage statements for the prior three months and cancelled checks and credit card
statements for the last three months are the ordinary review, though additional months up to one
year may be reviewed where three are not representative.*

**2. Which of the following does not suspend the collection statute expiration date?**

A. A bankruptcy case
B. A pending collection due process hearing
C. Currently not collectible status
D. A continuous absence from the United States of at least six months

*Answer: C. Hardship status halts collection activity but has no statutory suspension provision;
the clock continues to run while the account sits.*

**3. A taxpayer has an installment agreement in effect and is making payments on time. What is the
effect on the collection period?**

A. It is suspended for as long as the agreement is in effect
B. It continues to run
C. It is suspended for the first year only
D. It is extended by the length of the agreement automatically

*Answer: B. Levy is prohibited while an agreement is in effect, but the statutory suspension that
accompanies the other levy prohibitions is expressly withheld from that one period.*

**4. A taxpayer pays car insurance twice a year. How is it entered on the financial statement?**

A. In the months the premium is actually paid
B. Only if the vehicle is required for employment
C. Averaged over twelve months
D. It is covered by the transportation standard and not listed

*Answer: C. Necessary living expenses with varying monthly payments are totalled for the year and
divided by twelve.*

**5. A taxpayer with almost no disposable income owns unencumbered land she does not use, worth
more than the balance owed. What should the representative expect?**

A. An offer in compromise will be accepted because monthly income is insufficient
B. The equity will have to be addressed before other collection alternatives are considered
C. The land is disregarded because it produces no income
D. Hardship status follows automatically from the low disposable income

*Answer: B. Where equity in assets equals or exceeds the liability and the asset can be sold or
borrowed against without hardship, full payment is requested before alternatives are considered.*
