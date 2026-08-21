---
title: "Interest expense"
code: "2.2.2.g"
part: 2
domain: "Business Tax Preparation"
section: "Business expenses, deductions and credits"
description: "Interest follows what the money bought, and the cap on business interest is thirty percent of adjusted taxable income, not the fifty percent of the pandemic years."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 163(a)", title: "Interest — general rule", url: "https://www.law.cornell.edu/uscode/text/26/163" }
  - { type: IRC, ref: "§ 163(j)", title: "Limitation on business interest", url: "https://www.law.cornell.edu/uscode/text/26/163" }
  - { type: IRC, ref: "§ 448(c)", title: "Gross receipts test", url: "https://www.law.cornell.edu/uscode/text/26/448" }
  - { type: IRC, ref: "§ 263A(f)", title: "Special rules for allocation of interest to property produced by the taxpayer", url: "https://www.law.cornell.edu/uscode/text/26/263A" }
  - { type: IRC, ref: "§ 267(a)(2)", title: "Matching of deduction and payee income item", url: "https://www.law.cornell.edu/uscode/text/26/267" }
  - { type: IRC, ref: "§ 461(l)", title: "Limitation on excess business losses of noncorporate taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/461" }
  - { type: Reg, ref: "§ 1.163-8T", title: "Allocation of interest expense among expenditures", url: "https://www.law.cornell.edu/cfr/text/26/1.163-8T" }
forms: []
related: ["2.2.2.c", "2.2.1.c", "2.2.2.a", "2.2.2.b", "2.2.1.b"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the Reg. § 1.163-8T tracing rule that allocates interest by the use of the borrowed funds, the IRC § 163(j)(1) limitation and its three components, the IRC § 163(j)(2) indefinite carryforward, the IRC § 163(j)(3) small business exemption keyed to IRC § 448(c), and the IRC § 163(j)(8) definition of adjusted taxable income. Records that Pub. L. 119-21 § 70303(a) restored the depreciation, amortization and depletion add-back permanently for taxable years beginning after 31 December 2024." }
---

Two questions decide an interest deduction and they are asked in order. Which activity does the
interest belong to, and is the resulting business interest capped? The first is answered by
tracing, and it is answered without reference to what secures the loan.

## The rule

**Allocation.** {fig:bint.tracing} (Reg. § 1.163-8T(a)(3), (c)(1)). The security for the debt is
irrelevant; the use of the proceeds is everything.

**The cap.** {fig:bint.limit} (IRC § 163(j)(1)). Three components, and the middle one is
{fig:bint.ati} (IRC § 163(j)(8)(A)).

**What is not capped.** {fig:bint.small_exemption} (IRC § 163(j)(3)), keyed to
{fig:method.gross_receipts_2026} (IRC § 448(c)(1)).

**What happens to the excess.** {fig:bint.carryforward} (IRC § 163(j)(2)).

**Partnerships.** {fig:bint.partnership} (IRC § 163(j)(4)(A)).

**Related lenders.** {fig:comp.related_timing} (IRC § 267(a)(2)), which reaches interest as
expressly as it reaches any other expense.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Tracing | {fig:bint.tracing} | Reg. § 1.163-8T(a)(3), (c)(1) |
| The limitation | {fig:bint.limit} | IRC § 163(j)(1) |
| Adjusted taxable income | {fig:bint.ati} | IRC § 163(j)(8)(A) |
| The add-back, restored | {fig:bint.ebitda_restored} | Pub. L. 119-21 § 70303 |
| Small business exemption | {fig:bint.small_exemption} | IRC § 163(j)(3) |
| Gross receipts test, 2026 | {fig:method.gross_receipts_2026} | IRC § 448(c)(1) |
| Carryforward | {fig:bint.carryforward} | IRC § 163(j)(2) |
| Partnerships | {fig:bint.partnership} | IRC § 163(j)(4)(A) |
| Capitalized interest excluded | {fig:bint.capitalized_excluded} | IRC § 163(j)(5) |
| Related lender timing | {fig:comp.related_timing} | IRC § 267(a)(2) |

## How it works in practice

**Trace the money, not the collateral.** {fig:bint.tracing} (Reg. § 1.163-8T(a)(3)). Interest is
allocated in the same manner as the debt, and the debt is allocated by tracing disbursements of
the proceeds to specific expenditures. A loan secured on the owner's house but spent on stock in
trade produces business interest; a loan secured on business premises but spent on a holiday
produces non-deductible personal interest. This is the single most useful thing to know in the
topic and it disposes of most questions.

**A mixed-use loan is split.** Where one borrowing funds more than one kind of expenditure, the
interest is apportioned in the same proportions. There is no de minimis rule and no
predominant-use shortcut.

**Then ask whether the business is exempt from the cap at all.**
{fig:bint.small_exemption} (IRC § 163(j)(3)). The test is the same IRC § 448(c) gross receipts test
that governs the inventory and uniform capitalization exemptions, so a business either is a small
business for all three or for none. Most businesses a preparer meets never reach IRC § 163(j)(1).

**If it is not exempt, the cap has three components and one of them is usually zero.**
{fig:bint.limit} (IRC § 163(j)(1)). Business interest income is rarely material outside financial
businesses. Floor plan financing interest belongs to vehicle and equipment dealers. For everyone
else the cap is effectively the percentage of adjusted taxable income, and IRC § 163(j)(1) provides
that that component is never less than zero — so a business with negative adjusted taxable income
gets no allowance from it rather than a negative one.

**Adjusted taxable income is a defined term and not a line on any return.**
{fig:bint.ati} (IRC § 163(j)(8)(A)). Six add-backs and exclusions, and the fifth of them —
depreciation, amortization and depletion — is the one that moves the number most.

**Disallowed interest is deferred, not lost.** {fig:bint.carryforward}
(IRC § 163(j)(2)). It becomes business interest of the next year and is tested again there, so a
business with a strong year can absorb several years of disallowance.

**In a partnership the limitation runs at the entity.**
{fig:bint.partnership} (IRC § 163(j)(4)(A)). That is the opposite of the excess business loss rule
in IRC § 461(l)(4), which runs at the partner, and the two are easily confused because both appear
in the same computation.

**And interest to a related lender meets the matching rule.**
{fig:comp.related_timing} (IRC § 267(a)(2)) — the subsection is headed "Matching of deduction and
payee income item in the case of **expenses and interest**," so an accrual method borrower
accruing interest to a related cash method lender waits for the deduction until the lender
includes it.

<div class="scenario">
<h3>One loan, three uses</h3>

A sole proprietor borrows $10,000 on a single business loan and pays $800 of interest for the
year. He spends $7,000 on supplies for the business and $3,000 on a truck he uses only for
personal purposes.

{fig:bint.tracing} (Reg. § 1.163-8T(a)(3), (c)(1)) traces the proceeds. Seven-tenths went to a
business expenditure and three-tenths to a personal one, so $560 of the interest is business
interest and $240 is personal interest.

The $240 is not deductible anywhere. Personal interest is disallowed by IRC § 163(h) and no
provision restores it for a truck used privately, whatever the loan was called when it was taken
out.

Note what plays no part in the analysis. The loan was documented as a business loan, and that is
irrelevant. Had it been secured on business assets, that would also have been irrelevant. Only the
disbursement of the proceeds matters.
</div>

<div class="scenario">
<h3>The company that is over the line</h3>

Fitzharding Logistics has average annual gross receipts for the three years ending with 2025 of
$140,000,000, so it fails the IRC § 448(c) test and IRC § 163(j) applies to it for 2026. For 2026
it has business interest expense of $9,000,000, business interest income of $400,000, no floor
plan financing interest, and adjusted taxable income of $22,000,000.

{fig:bint.limit} (IRC § 163(j)(1)) allows business interest income of $400,000 plus the statutory
share of $22,000,000, or $6,600,000 — $7,000,000 in all. The remaining $2,000,000 is disallowed for 2026.

{fig:bint.carryforward} (IRC § 163(j)(2)) treats that $2,000,000 as business interest paid in 2027,
where it is tested again against 2027's limitation.

Two things would change the answer materially. If the company had been below the IRC § 448(c)
threshold, {fig:bint.small_exemption} would have taken it out of the limitation entirely. And the
$22,000,000 of adjusted taxable income is computed **after** adding back depreciation — the
restoration of that add-back is worth more to a capital-intensive business than any other change
in this topic.
</div>

<div class="scenario">
<h3>The add-back that came back</h3>

Sheldwich Manufacturing has taxable income of $4,000,000 before interest, depreciation of
$6,000,000, business interest expense of $3,400,000 and no business interest income. It is above
the IRC § 448(c) threshold.

For a taxable year beginning in 2024 or earlier under the pre-amendment rule, adjusted taxable
income would have been computed **without** adding depreciation back, giving $4,000,000 and a
limitation of $1,200,000. Business interest of $2,200,000 would have been disallowed.

{fig:bint.ebitda_restored}. So adjusted taxable income is $4,000,000 plus $6,000,000, or
$10,000,000, and the limitation is $3,000,000. Only $400,000 is disallowed.

The company's economics have not changed at all. The disallowance falls from $2,200,000 to
$400,000 because one clause in IRC § 163(j)(8)(A)(v) lost its date restriction, and the change
reaches back to taxable years beginning after 31 December 2024. A capital-intensive business
working from material written before July 2025 will compute this wrongly by a wide margin.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>Tracing, not security.</strong> {fig:bint.tracing} (Reg. § 1.163-8T(a)(3)). What the
loan is called and what secures it are both irrelevant.</p>

<p><strong>The percentage in the statute has not moved.</strong> {fig:bint.limit}
(IRC § 163(j)(1)(B)). The higher figure in circulation was a temporary rule for 2019 and 2020 under
the CARES Act and has not applied since.</p>

<p><strong>The limitation has three components.</strong> Business interest income and floor plan
financing interest are added to the percentage of adjusted taxable income. An answer that gives
only the percentage is incomplete.</p>

<p><strong>Most businesses are exempt.</strong> {fig:bint.small_exemption} (IRC § 163(j)(3)). If
the facts do not tell you the gross receipts, the limitation may not be in issue at all.</p>

<p><strong>Adjusted taxable income is not taxable income.</strong> {fig:bint.ati}
(IRC § 163(j)(8)(A)). Six adjustments, and the depreciation add-back is the one that matters.</p>

<p><strong>IRC § 163(j) runs at the partnership; IRC § 461(l) runs at the partner.</strong>
{fig:bint.partnership} (IRC § 163(j)(4)(A)). The two limitations sit next to each other in the
same computation and apply at different levels.</p>
</div>

## How this has changed

**The depreciation add-back was restored, permanently, and it reaches back to 2025.**
{fig:bint.ebitda_restored}. As enacted in 2017, IRC § 163(j)(8)(A)(v) added back depreciation,
amortization and depletion only "in the case of taxable years beginning before January 1, 2022,"
so from 2022 adjusted taxable income was computed on an earnings-before-interest-and-tax basis
rather than an earnings-before-interest-tax-depreciation-and-amortization basis. Pub. L. 119-21
§ 70303(a) struck that restriction, and § 70303(c)(1) applies the amendment to taxable years
beginning after 31 December 2024 — a year before most of the Act's other business provisions.
For a capital-intensive business this is the largest single change in the topic.

**The percentage never went back up.** Pub. L. 116-136 § 2306 raised the share of adjusted
taxable income in IRC § 163(j)(1)(B), but only for taxable years beginning in 2019 and 2020,
through the special rule now at IRC § 163(j)(10). The figure in IRC § 163(j)(1)(B) itself was never
changed. Material giving the higher share is describing two pandemic years.

**Two 2026 changes narrow the base.** Pub. L. 119-21 § 70341(b) added a sentence to
IRC § 163(j)(5) providing that business interest "shall not include any interest which is
capitalized under section 263(g) or 263A(f)" — {fig:bint.capitalized_excluded} — and § 70342(a)
added IRC § 163(j)(8)(A)(vi), removing certain foreign inclusions and their related deductions
from adjusted taxable income. Both apply to taxable years beginning after 31 December 2025, so
2026 is the first year for each.

## Exam focus

Trace first. Most questions in this topic can be answered by asking what the borrowed money
bought, and the facts always supply it. Reject any answer that turns on the security or on the
label of the loan.

Then ask whether IRC § 163(j) applies at all. The IRC § 448(c) exemption takes most businesses
out, and a question that gives you a gross receipts figure is telling you which side of the line
the taxpayer is on.

Learn the three components of the cap and learn the statutory share as it reads in
IRC § 163(j)(1)(B). The higher figure in circulation is a repealed temporary rule.

Finally, know that adjusted taxable income adds back depreciation again, and that the restoration
applies to taxable years beginning after 31 December 2024 — so it is already in effect for the
return in front of you.

## Check yourself

**1.** A taxpayer borrows $50,000 secured on business premises and spends all of it on a family
holiday. Is the interest deductible?

*Answer: No. {fig:bint.tracing} (Reg. § 1.163-8T(a)(3), (c)(1)) allocates the interest by tracing
the proceeds to the expenditure, and the expenditure is personal. What secures the loan does not
enter the analysis.*

**2.** A business with $60,000,000 of average annual gross receipts has $5,000,000 of business
interest expense, $200,000 of business interest income and $9,000,000 of adjusted taxable income.
What is disallowed?

*Answer: $2,100,000. {fig:bint.limit} (IRC § 163(j)(1)) allows $200,000 plus the statutory share
of $9,000,000, or $2,700,000 — $2,900,000 in all. The rest is disallowed and becomes business interest
of the following year under {fig:bint.carryforward}.*

**3.** Does a business with average annual gross receipts below the IRC § 448(c) figure ever have
to compute adjusted taxable income?

*Answer: Not for this purpose. {fig:bint.small_exemption} (IRC § 163(j)(3)) disapplies
IRC § 163(j)(1) entirely, so the limitation and its computation never arise — unless the business
is a tax shelter prohibited from using the cash method under IRC § 448(a)(3).*

**4.** A manufacturer has $3,000,000 of taxable income before interest and $5,000,000 of
depreciation. What is its adjusted taxable income for 2026?

*Answer: $8,000,000, subject to the other adjustments. {fig:bint.ati} (IRC § 163(j)(8)(A)) adds
back any deduction allowable for depreciation, amortization or depletion, and
{fig:bint.ebitda_restored} — the restriction confining that add-back to years before 2022 was
struck with effect for taxable years beginning after 31 December 2024.*

**5.** An accrual method corporation accrues interest on a loan from its controlling shareholder,
who reports on the cash method, and pays it four months after the year end. When is it deductible?

*Answer: In the year of payment. {fig:comp.related_timing} (IRC § 267(a)(2)) is headed "Matching of
deduction and payee income item in the case of expenses **and interest**," so the deduction moves
to the day the amount is includible in the lender's gross income.*
