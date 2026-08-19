---
title: "General financial health"
code: "3.2.3.b"
part: 3
domain: "Representation before the IRS"
section: "Taxpayer financial situation"
description: "Reading the whole balance sheet before advising: cash flow, competing creditors, garnishments, the valuation haircuts the IRS applies, and what insolvency means for tax."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRM, ref: "5.15.1.16", title: "Cash Flow Analysis", url: "https://www.irs.gov/irm/part5/irm_05-015-001" }
  - { type: IRM, ref: "5.15.1.21", title: "Determining Equity in Assets", url: "https://www.irs.gov/irm/part5/irm_05-015-001" }
  - { type: IRM, ref: "5.15.1.22", title: "Jointly Held Assets", url: "https://www.irs.gov/irm/part5/irm_05-015-001" }
  - { type: IRC, ref: "§ 108(a)(1)", title: "Income from discharge of indebtedness — exclusions" }
  - { type: IRC, ref: "§ 108(d)(3)", title: "Insolvent — definition" }
  - { type: IRC, ref: "§ 6334", title: "Property exempt from levy" }
  - { type: IRC, ref: "§ 6337", title: "Redemption of property" }
forms: ["433-A", "433-B"]
related: ["3.2.3.a", "3.2.3.d", "3.2.3.e", "3.2.3.c"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Notes that the qualified principal residence indebtedness exclusion in IRC § 108(a)(1)(E) reached discharges before 1 January 2026 and has not been extended." }
---

## The rule

A client's tax problem is rarely the only thing on their balance sheet, and a representative
who looks only at the tax will give confident advice that turns out to be wrong. "General
financial health" is the outline's name for the surrounding picture — bankruptcy exposure,
lawsuits, garnishments, cash flow, assets, insolvency — and the reason it appears in the
Representation part rather than the tax parts is that each of these items changes what the IRS
can actually collect and therefore what the practitioner should ask for.

Three ideas do most of the work.

**Value is not one number.** IRM 5.15.1.21 sets out how a revenue officer arrives at equity:
determine the value of the asset, the encumbrances against it, and the priority of the Notice
of Federal Tax Lien. Fair market value is the price between a willing and able buyer and seller
in an arm's-length transaction with full knowledge of the facts, influenced by market
conditions, age, condition, zoning, technology, demand and fitness for use. But the IRM then
provides three discounted measures, and knowing which one applies to a given posture is the
difference between an offer that is accepted and one that is returned.

**Cash flow is the business test, and it is forward-looking.** IRM 5.15.1.16 treats cash flow
projections as a forecast of whether a business can meet operating expenses and current taxes
*and* pay the delinquent balance. The IRM's own example is an installment agreement with
increasing payments as cash flow improves; it also contemplates temporarily suspending
collection where the business can meet current obligations and the projections show future
ability to pay. A business client with a bad quarter and a credible projection is in a different
position from one with a bad quarter and no plan.

**Insolvency is a defined term with a tax consequence.** Where a client's other creditors write
off debt, the write-off is generally income. IRC § 108(a)(1)(B) excludes discharge-of-indebtedness
income where the discharge occurs while the taxpayer is insolvent, and § 108(d)(3) defines
insolvent as "the excess of liabilities over the fair market value of assets," measured
immediately before the discharge. The exclusion is capped at the amount of the insolvency
(§ 108(a)(3)), and the excluded amount reduces tax attributes under § 108(b). A client
negotiating with credit card companies while owing the IRS is generating a future return
position, and someone should be watching.

## Current figures

| Valuation measure | When it applies | Amount |
| --- | --- | --- |
| Fair market value | The ordinary starting point | Willing buyer, willing seller, arm's length |
| Quick sale value | {fig:valuation.qsv_window} | {fig:valuation.qsv} |
| Forced sale value | A sale not made by a willing seller, such as foreclosure | {fig:valuation.fsv} |
| Reduced forced sale value | Administrative seizure, where redemption rights depress the price | {fig:valuation.rfsv} |

The reduced measure exists because property is less desirable in a distraint sale: the taxpayer
has a right to redeem real property under IRC § 6337(b)(1) where the sale results from an
administrative seizure, and no such right exists in a foreclosure. Forced sale value and reduced
forced sale value were added to the Financial Analysis Handbook in the 29 June 2026 revision.

## How it works in practice

**Ask what else is being collected.** A wage garnishment from a private judgment creditor reduces
the take-home pay a revenue officer will compute, but only if it appears on the statement and can
be substantiated. IRM 5.15.1.11 allows court-ordered payments where they are actually being made.
Conversely, a client who is quietly servicing an unsecured personal loan is spending money the IRS
will treat as available. The point of the question is not sympathy; it is that the numbers on the
Form 433 need to match the numbers on the bank statements, and undisclosed obligations always
surface.

**Lien priority decides who is really ahead.** Equity for collection purposes is value less
encumbrances, but only encumbrances that beat the federal tax lien. IRM 5.15.1.21 directs the
revenue officer to determine the priority of the Notice of Federal Tax Lien, and IRM 5.15.1.3
says the same thing from the other direction: determine priority when deciding whether to allow
or disallow payments to other creditors. A mortgage recorded before the lien notice reduces
collectible equity; an unsecured creditor who obtained a judgment afterwards does not.

**Joint ownership is split evenly unless proved otherwise.** Where assets are held jointly with
others, IRM 5.15.1.22 allocates equity equally between the owners unless the joint owners
demonstrate that their interests are different. The burden is on the taxpayer, and it is met with
documents — contribution records, a deed reciting unequal shares, a partnership agreement — not
with assertion.

**Some property is beyond levy regardless of health.** A defined list is exempt from levy
(IRC § 6334)
— wearing apparel and school books, fuel, provisions, furniture and personal effects up to a
statutory amount, books and tools of a trade, unemployment benefits, certain annuity and pension
payments, workers' compensation, judgments for the support of minor children, certain service-
connected disability payments, and a portion of wages. Exemption from levy is not exemption from
the lien, and it does not remove an asset from the equity calculation for offer purposes — but it
tells a client what cannot be taken while a resolution is negotiated.

**Watch for the 1099-C that follows a settlement.** Where a client settles other debts while
insolvent, the exclusion under § 108(a)(1)(B) is available up to the amount of the insolvency and
is claimed on Form 982, with a computation of assets and liabilities immediately before each
discharge. The exclusion is not automatic and is not a deduction: the excluded amount reduces tax
attributes — net operating losses, credits, basis and so forth — under § 108(b). A client who
excludes a large discharge on insolvency grounds may find a basis reduction waiting in the year
they sell the asset.

<div class="scenario">
<h3>The offer priced at the wrong value</h3>

Ilse Vandermeer's only substantial asset is a small commercial building. Her representative
prepares a doubt-as-to-collectibility offer using the fair market value from a recent appraisal,
reasoning that using the highest number is the conservative choice.

It is the wrong number and it costs the client money. The offer computation for a real estate
asset ordinarily uses quick sale value — a reduction from fair market value reflecting the
pressure to sell within a short period — not fair market value itself. Using the higher figure
inflated the reasonable collection potential and produced an offer amount Vandermeer could not
fund. The representative should have started from the appraisal, applied the quick sale
percentage, subtracted the mortgage balance to the extent it has priority over the tax lien, and
priced from there. "Conservative" is not a virtue when it means paying more than the standard
requires.
</div>

<div class="scenario">
<h3>The seasonal business and the increasing-payment plan</h3>

Oyelaran Fixtures is a small manufacturer with employment tax arrears. Revenue collapses each
first quarter and recovers by summer. A flat monthly installment amount set from the winter
figures is too small to retire the balance; one set from the summer figures will default in
January.

The representative prepares a twelve-month cash flow projection alongside the Form 433-B — the
IRM contemplates exactly this, treating projections as the tool for a business that cannot pay on
first contact or over a short period. The proposal is a graduated agreement: a low payment
December through March, stepping up April through November, retiring the balance inside the
collection statute. IRM 5.15.1.16 gives the revenue officer an example in the same shape, which
is the reason a graduated proposal supported by projections is received as an ordinary request
rather than a novel one.
</div>

<div class="scenario">
<h3>Settled with the card companies, taxed by the IRS</h3>

Bartholomew Ng settles about 41,000 dollars of credit card debt for a fraction of the balance
while working through a payment plan on an older income tax liability. In January three Forms
1099-C arrive. He assumes debt forgiveness is not income because he was broke.

He was broke, and that is the point — but it must be computed and claimed. Immediately before the
first discharge his liabilities exceeded the fair market value of his assets by about 26,000
dollars, so the exclusion covers that much and the remainder is income. The representative
prepares a schedule of assets and liabilities immediately before each discharge, in the order the
discharges occurred, because each one reduces liabilities and therefore reduces the insolvency
available for the next. Form 982 is filed with the return, and the excluded amount reduces his tax
attributes. Without the computation he would have reported nothing, received a notice, and had a
new balance on top of the old one.
</div>

<div class="callout trap">
<strong>Insolvency is measured immediately before each discharge, not for the year.</strong>
Section 108(d)(3) fixes the measurement point, and where there are several discharges in a year
the calculation is done separately for each in sequence. A client with three settlements may be
insolvent for the first, marginally insolvent for the second, and solvent by the third.
</div>

<div class="callout trap">
<strong>The principal residence exclusion has lapsed.</strong> IRC § 108(a)(1)(E) excluded
qualified principal residence indebtedness discharged before 1 January 2026, or under a written
arrangement entered into before that date. As the statute stands it has not been extended, so a
2026 discharge of mortgage debt turns on insolvency, a title 11 case, or one of the other
paragraphs of § 108(a)(1) — not on the residence exclusion. Check the statute before advising;
this provision has been extended repeatedly in the past and could be again.
</div>

<div class="callout trap">
<strong>Exempt from levy is not exempt from the lien.</strong> The IRC § 6334 list restricts what
a levy may reach. It does not release the lien, does not remove the asset from an offer
computation, and does not survive the taxpayer voluntarily selling the property — the lien follows
the proceeds. Clients hear "exempt" and understand "safe."
</div>

<div class="callout trap">
<strong>Discharge-of-indebtedness exclusions cost something later.</strong> Excluding income under
§ 108(a)(1)(A) or (B) reduces tax attributes under § 108(b) — losses, credits and basis go first.
The bill is deferred, not cancelled, and it usually arrives in the year the client sells the asset
whose basis was reduced.
</div>

## How this has changed

The 29 June 2026 revision of IRM 5.15.1 was the most substantial in some years for this topic. It
added forced sale value and reduced forced sale value to the equity analysis, giving revenue
officers a documented basis for a deeper discount than quick sale value where the posture is
seizure rather than a negotiated sale. It added an expectation that a taxpayer use equity in
assets toward the liability before other collection alternatives are considered. It expanded the
treatment of digital assets and directed employees to research peer-to-peer payment and online
gambling applications when reviewing bank statements. It noted that life insurance policies may be
sold to a third party and added guidance on valuing a policy as a life or viatical settlement — a
route that turns a whole life policy from a borrowing source into a realisable asset.

On the tax side, Public Law 119-21, enacted 4 July 2025, rewrote IRC § 108(f)(5) generally and,
effective for discharges after 31 December 2025, replaced the temporary 2021-through-2025 window
for student loan discharges with the death-and-disability provision now in the statute, including
a requirement that the taxpayer include a social security number on the return for the year. The
qualified principal residence indebtedness exclusion in § 108(a)(1)(E) was not extended alongside
it and by its terms reached discharges before 1 January 2026.

## Exam focus

This item is tested indirectly. Expect insolvency to appear as a discharge-of-indebtedness
question rather than a collection question: the definition in § 108(d)(3) — liabilities exceeding
the fair market value of assets, measured immediately before the discharge — and the cap limiting
the exclusion to the amount of the insolvency. On the collection side, know that equity is value
less encumbrances that have priority over the federal tax lien, that jointly held assets are split
equally unless the owners prove otherwise, and that exemption from levy under IRC § 6334 does not
release the lien. Percentages are unlikely to be tested; the concepts behind them are.

## Check yourself

**1. A taxpayer's liabilities immediately before a credit card settlement exceed the fair market
value of their assets by 12,000 dollars. The settlement discharges 20,000 dollars. How much may be
excluded from gross income on insolvency grounds?**

A. Nothing, because insolvency is not an exclusion
B. 12,000 dollars
C. 20,000 dollars
D. 8,000 dollars

*Answer: B. The exclusion may not exceed the amount by which the taxpayer is insolvent, measured
immediately before the discharge.*

**2. A taxpayer owns a rental property jointly with a sibling and cannot document their respective
contributions. How will the equity be allocated?**

A. Entirely to the taxpayer, as the liable party
B. Equally between the owners
C. Entirely to the non-liable owner
D. In proportion to the rental income each reports

*Answer: B. Equity in jointly held assets is allocated equally unless the joint owners demonstrate
that their interests are different.*

**3. Which statement about property exempt from levy is correct?**

A. The exemption releases the federal tax lien on that property
B. Exempt property is excluded from an offer in compromise computation
C. The exemption restricts levy but leaves the lien in place
D. Exempt property may never be sold while a balance is owed

*Answer: C. The statutory list limits what a levy may reach; it does not release the lien, and the
lien follows the proceeds on a voluntary sale.*

**4. A business cannot pay its delinquent balance now but projects improving revenue over the next
year. What does the Financial Analysis Handbook contemplate?**

A. Immediate enforced collection, because current ability to pay is absent
B. An installment agreement with increasing payments as cash flow improves
C. Automatic acceptance of an offer in compromise
D. Referral to bankruptcy counsel

*Answer: B. Cash flow projections are used precisely to decide whether a business can meet current
obligations and retire the arrears, and a graduated agreement is the IRM's own example.*

**5. A taxpayer excludes discharge-of-indebtedness income under the insolvency exclusion. What
follows?**

A. Nothing further; the amount is permanently forgiven for tax purposes
B. The excluded amount is added back over five years
C. The excluded amount reduces tax attributes such as losses, credits and basis
D. The taxpayer must file an amended return for the prior year

*Answer: C. The exclusion is applied to reduce tax attributes, so the benefit is deferred rather
than cancelled.*
