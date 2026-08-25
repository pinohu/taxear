---
title: "Estimated tax and penalty avoidance (mid-year estimated tax planning)"
code: "1.5.1.j"
part: 1
domain: "Advising the Individual Taxpayer"
section: "Advising the individual taxpayer"
description: "The penalty is avoided by hitting a safe harbour, not by paying the right tax. Withholding is deemed ratable whatever the date, which is the whole planning lever."
status: published
taxYear: 2026
lastReviewed: "2026-08-20"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6654", title: "Failure by individual to pay estimated income tax", url: "https://www.law.cornell.edu/uscode/text/26/6654" }
  - { type: IRC, ref: "§ 6402", title: "Authority to make credits or refunds", url: "https://www.law.cornell.edu/uscode/text/26/6402" }
  - { type: IRC, ref: "§ 31", title: "Tax withheld on wages", url: "https://www.law.cornell.edu/uscode/text/26/31" }
  - { type: IRC, ref: "§ 6315", title: "Payments of estimated income tax", url: "https://www.law.cornell.edu/uscode/text/26/6315" }
  - { type: IRC, ref: "§ 6621", title: "Determination of rate of interest", url: "https://www.law.cornell.edu/uscode/text/26/6621" }
  - { type: Form, ref: "Form 2210", title: "Underpayment of Estimated Tax by Individuals, Estates, and Trusts", url: "https://www.irs.gov/forms-pubs/about-form-2210" }
forms: []
related: ["1.4.1.c", "1.4.1.d", "1.5.1.e", "1.5.1.g", "1.5.1.k", "1.5.1.l"]
changelog:
  - { date: "2026-08-20", summary: "Initial draft. Covers estimated tax planning under IRC § 6654 from the avoidance side — the two safe harbours in § 6654(d)(1)(B) and (C), the ratable-withholding rule in § 6654(g), the annualised income installment method and its recapture in § 6654(d)(2), the January filing rule in § 6654(h), the farmer and fisherman substitutions in § 6654(i), the statutory exceptions in § 6654(e) and the § 6402(b) credit-forward election." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and a fifth typed scenario (comprehension layer)." }
---

<div class="plain-terms">
You are supposed to pay tax as you earn money during the year, not just when you file your return. If
you pay too little along the way, the IRS can charge you a penalty. This is true even if you pay every
dollar you owe by the filing deadline. This topic is about safe harbors. A safe harbor is a simple target
that, once you hit it, wipes out the penalty no matter what your final tax bill turns out to be. It
matters most to people whose pay is not fully covered by paycheck withholding: self-employed people,
retirees, investors, and anyone with a big one-time gain. It decides how much to pay, and by when, so you
avoid an extra charge for paying too slowly.
</div>

Estimated tax planning is not about predicting the year's tax correctly. It is about landing inside one
of two safe harbours, at least one of which is knowable in April with no forecasting at all. A client
who pays exactly the right amount of tax on 15 April of the following year can still owe an addition to
tax for every quarter of the year before; a client who pays far too little, in the right pattern, owes
nothing. The provision rewards timing, not accuracy.

## The rule

**The addition and the required annual payment.** IRC § 6654(a) imposes an addition to tax on any
underpaid installment. What must be paid is the required annual payment: {fig:estpen.required_annual_payment}.
It is split into {fig:estpen.installments}.

**Two harbours, one of them certain.** The 90 percent test depends on a year that has not happened yet.
The prior-year test depends on a return that is already filed. For any client whose income is volatile
— a new business, a large one-off gain, a first year of self-employment — the prior-year figure is the
only one that can be relied on in advance, and the planning question in April is simply which multiple
applies: the 100 percent figure, or the 110 percent figure if last year's adjusted gross income crossed
the threshold in {fig:estpen.required_annual_payment}.

**Withholding is deemed ratable.** This is the single most useful rule in the section, and the one most
often missed: {fig:estplan.withholding_ratable}. Estimated tax payments are credited when actually made
(IRC § 6315); withholding is not. A shortfall discovered in November can therefore be cured for the
whole year by increasing withholding in the last pay periods, or by taking a retirement plan
distribution with a large voluntary withholding election — the withheld amount is spread back over all
four due dates as though it had been paid on time.

**The annualised income installment method.** Where income arrives unevenly, § 6654(d)(2) lets each
installment be reduced to the amount that would be due if the year ended on the installment date:
{fig:estplan.annualization_percentages}. The trade is stated in the statute:
{fig:estplan.annualization_recapture}. Annualising defers; it does not forgive.

**The statutory exceptions.** Three sit in § 6654(e). {fig:estpen.de_minimis}
{fig:estpen.no_prior_liability} And {fig:estplan.disaster_waiver} A fourth, narrower relief covers the
newly retired and the newly disabled — {fig:estpen.retirement_waiver}

**The January filing rule.** {fig:estplan.january_filing_rule}

**Farmers and fishermen.** A separate regime entirely: {fig:estplan.farmer_fisherman} The test for who
qualifies is {fig:estplan.farmer_definition}.

**Crediting an overpayment forward.** {fig:estplan.overpayment_credit} An amount credited forward is
treated as an estimated tax payment, so it lands on the first installment date — which is why crediting
a refund forward rather than taking it is often the cleanest way to cover the first quarter of a year in
which income is expected to rise.

## Current figures

| Item | Rule |
| --- | --- |
| Required annual payment | {fig:estpen.required_annual_payment} |
| Installments | {fig:estpen.installments} |
| Withholding timing | {fig:estplan.withholding_ratable} |
| Annualisation percentages | {fig:estplan.annualization_percentages} |
| Annualisation recapture | {fig:estplan.annualization_recapture} |
| De minimis exception | {fig:estpen.de_minimis} |
| No prior-year liability | {fig:estpen.no_prior_liability} |
| Disaster and equity waiver | {fig:estplan.disaster_waiver} |
| Newly retired or disabled | {fig:estpen.retirement_waiver} |
| Return filed by 31 January | {fig:estplan.january_filing_rule} |
| Farmers and fishermen | {fig:estplan.farmer_fisherman} |
| Farmer or fisherman defined | {fig:estplan.farmer_definition} |
| Overpayment credited forward | {fig:estplan.overpayment_credit} |
| None of the § 6654 amounts is indexed | {fig:estpen.unindexed} |

## How it works in practice

The planning conversation runs in a fixed order.

**First, establish the prior-year number.** Take the tax shown on last year's return — the total tax,
before withholding and estimated payments but after credits (IRC § 6654(f)) — and multiply by the
applicable percentage. That figure is the ceiling on what the client ever needs to pay in during the
year, whatever happens to income. It requires no forecast and no revision.

**Second, decide how it will be paid.** For a client with wages, the answer is usually withholding, for
the timing reason above: a Form W-4 adjustment covers the whole year no matter when in the year it is
made. For a client with no wages, four vouchers on Form 1040-ES.

**Third, revisit at mid-year only if the client wants to pay less than the harbour.** The current-year
90 percent test is worth using when the year is clearly going to be worse than the last one — a business
that has lost a major customer, a retiree whose final year of wages has ended. The saving is real, but
the safety is gone: if the year recovers, the harbour was missed for every installment already paid.

**Fourth, if income was genuinely lumpy, annualise on filing.** The annualised income installment method
is applied on Schedule AI of Form 2210 after the year has ended, not by paying differently during it. A
client who sold a business in October and paid nothing in April, June or September does not owe an
addition on the first three installments, because on the annualised computation almost nothing was due
then. The mistake is to assume this is automatic: Form 2210 must be filed with Schedule AI completed, or
the IRS computes the addition on the straight quarterly basis.

**Fifth, watch for the client whose exposure disappears entirely.** A taxpayer who had no liability at
all last year, was a citizen or resident throughout, and whose prior year was a full twelve months owes
no addition this year regardless of what this year's tax turns out to be. This is the single most
valuable planning fact for a client whose first profitable year is under way.

<div class="scenario" data-type="timing">
<h3>The November rescue</h3>

A client with $210,000 of wages and a $95,000 long-term {gloss:capital-gain} realised in March made no
estimated payments and comes in on 3 November. Her prior-year tax was $41,000 and her prior-year
{gloss:adjusted-gross-income} was above the threshold, so her harbour is 110 percent of $41,000, or
$45,100. Withholding to date is $33,000, and her remaining pay periods would add $6,000.

Paying $6,100 of estimated tax on 15 January will not fix the first three installments — an estimated
payment is credited on the day it is made, so the April, June and September installments stay short.
Increasing withholding on her remaining paychecks by $6,100 does fix them: under § 6654(g)(1) the full
$45,100 of withholding is deemed paid $11,275 on each of the four due dates. Same money, same month, no
addition to tax.

</div>

<div class="scenario" data-type="baseline">
<h3>The consultant who sold in October</h3>

A self-employed consultant expected a quiet year and paid $2,000 per quarter against a prior-year
harbour of $8,000. In October he sold a building and his tax for the year came to $61,000. He pays the
balance with the return.

He owes no addition. He met the prior-year harbour with four equal installments, and the harbour is
tested against the tax shown on the preceding year's return, not against what the year turned out to be.
The gain in October changes what he owes on 15 April; it does not retroactively enlarge his required
installments. Had he instead skipped the prior-year harbour and paid on a 90 percent forecast made in
March, every installment would have been short.

</div>

<div class="scenario" data-type="procedural">
<h3>Annualising, and paying for it later</h3>

A photographer earns nothing until a July commission of $120,000 and nothing after. Her prior-year tax
was $19,000, so the flat harbour would require $4,750 on 15 April — before she has been paid anything.

She annualises instead. Through 31 March her income is zero, so the first annualised installment is
zero; the same is true through 31 May. By 31 August the July commission is on the books, and the third
installment, at 67.5 percent of the annualised tax, is large. She pays nothing in April or June without
penalty. What she cannot do is treat the April and June reductions as forgiven: § 6654(d)(2)(A)(ii)
recaptures them by enlarging the September installment, which is what her third payment reflects.

</div>

<div class="scenario" data-type="boundary">
<h3>The retired client and the waiver that is not automatic</h3>

A client retired in March at 64, badly misjudged the tax on his first year of pension and IRA income,
and underpaid every installment. He asks whether the retirement waiver removes the addition.

It may, but nothing about it is automatic. The waiver requires the Secretary to determine both that he
retired after attaining age 62 in the year payments were due or the year before — he did — and that the
underpayment was due to reasonable cause and not willful neglect, which he must establish. The request
is made on Form 2210 with a statement attached. If it is not requested, it is not granted.

</div>

<div class="scenario" data-type="fails">
<h3>The forecast that guessed wrong</h3>

A consultant expects a quiet year and elects the current-year 90 percent test rather than the higher
prior-year harbour, paying $1,500 in April, June and September. In November a client pays a large
deferred invoice, and her tax for the year comes to $52,000 instead of the $22,000 she had projected.

She owes an {gloss:underpayment-penalty} on all three earlier installments. The 90 percent test is
measured against the tax actually due for the year once it is known, not against a reasonable forecast
made at the time — there is no good-faith exception for a current-year election that turns out wrong.
Had she stayed on the prior-year harbour instead, the amount due each quarter would have been fixed in
April and immune to what happened in November.

</div>

<div class="callout trap">

**"I'll just pay it all with the return."** Paying the correct tax on time on 15 April does nothing for
the four installments that were due during the year. The addition under § 6654 runs from each
installment date to the date paid, and filing on time does not reach back.

**Treating an estimated payment and withholding as interchangeable.** They are credited under different
rules — § 6315 for estimated payments, § 6654(g)(1) for withholding. A late estimated payment is late; a
late withholding is not.

**Assuming the 110 percent rule keys off this year's income.** It keys off the adjusted gross income
shown on the *preceding* year's return (IRC § 6654(d)(1)(C)(i)). A client whose income collapses this
year still uses last year's figure to decide which multiple applies.

**Forgetting Schedule AI.** The annualised income installment method is elected by completing it. The
IRS does not annualise for the taxpayer, and Form 2210 filed without it produces the flat computation.

**Thinking the January filing rule saves the year.** It reaches the fourth installment only
(IRC § 6654(h)). The first three are untouched.

**Reading the farmer rule as merely a lower percentage.** It changes the number of installments, the due
date, the percentage, the availability of the 110 percent rule and the filing date, all at once
(IRC § 6654(i)).

</div>

## How this has changed

The structure of § 6654 as it now stands dates from the Revenue Reconciliation Act of 1993, which
introduced the higher prior-year percentage for taxpayers above the adjusted gross income threshold.
That threshold has never been indexed: {fig:estpen.unindexed}

Nothing in Pub. L. 119-21 amended § 6654. What the 2025 Act does change is the input — a client whose
2025 tax was computed with the new deductions for tips, overtime and car loan interest, or with the
higher state and local tax limitation, has a different prior-year figure to work from, and a client who
lost a lapsed provision has a higher current-year tax to forecast. The safe harbour arithmetic is
unchanged; the numbers going into it are not.

The one genuinely recent operational change is in the interest rate the addition is computed at, which
moves quarterly under IRC § 6621 and is covered at 1.4.1.c. A given dollar of underpayment costs
materially more than it did in the years when the rate sat at 3 percent, which has made the safe harbour
conversation worth having with clients who used to shrug at it.

## Exam focus

Questions on this topic reward knowing which figure is fixed and which is forecast. Expect to be asked
for the required annual payment given a prior-year tax and a prior-year adjusted gross income, where the
work is choosing between the 100 and 110 percent multiples on the *prior* year's income. Expect the
final installment due date — 15 January of the following year, not 31 December. Expect the de minimis
threshold, tested against tax reduced by withholding rather than gross tax.

The subtler items are the three conditions of the no-prior-year-liability exception, which are
cumulative and are frequently offered as an "all of the above" list, and the ratable withholding rule,
which is usually tested as a scenario about a December withholding increase. Distinguish the discretion
in § 6654(e)(3) — casualty, disaster and the newly retired — from the mechanical exceptions in
§ 6654(e)(1) and (2), which apply on their own terms.

## Check yourself

**1.** A taxpayer's preceding year showed tax of $30,000 and adjusted gross income of $190,000. Her
current-year tax is $26,000. What is her required annual payment?

*Answer: $33,000. Because the preceding year's adjusted gross income exceeded $150,000, IRC
§ 6654(d)(1)(C)(i) substitutes 110 percent for 100 percent, giving $33,000 on the prior-year branch. The
current-year branch is 90 percent of $26,000, or $23,400, and the required annual payment is the lesser
of the two — but the taxpayer must know the current year's tax to rely on it, which she does not until
the year ends.*

**2.** A client with no estimated tax payments increases his withholding sharply in December, ending the
year with total withholding equal to his prior-year tax. Has he underpaid any installment?

*Answer: No. Under IRC § 6654(g)(1) the credit allowed under § 31 is deemed a payment of estimated tax
paid in equal parts on each due date, unless the taxpayer establishes the actual dates. The December
withholding is treated as one quarter paid in April, one in June, one in September and one in January.*

**3.** A taxpayer files her return and pays the balance in full on 28 January. Which installments does
that protect?

*Answer: The fourth only. IRC § 6654(h) removes the addition with respect to an underpayment of the
fourth required installment where the return is filed and paid in full on or before 31 January. Any
shortfall in the first three installments is unaffected.*

**4.** A farmer's gross income from farming is 70 percent of his total gross income. How many
installments must he make, and when?

*Answer: One, due 15 January of the following year. IRC § 6654(i)(1) allows a single required
installment for a farmer or fisherman — defined in § 6654(i)(2) as one whose farming or fishing gross
income is at least 66⅔ percent of gross income from all sources for the year or the preceding year —
computed by substituting 66⅔ percent for 90 percent and disregarding the 110 percent rule.*

**5.** A taxpayer annualises and pays nothing for the first installment. What happens to the amount he
did not pay?

*Answer: It is recaptured. IRC § 6654(d)(2)(A)(ii) increases the next required installment determined
under the flat method by the amount of the reduction, and increases later installments to the extent it
has not yet been recaptured. Annualising changes when the money is due, not how much is due for the
year.*
