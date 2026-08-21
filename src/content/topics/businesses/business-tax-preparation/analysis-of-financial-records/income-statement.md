---
title: "Income statement"
code: "2.2.4.b"
part: 2
domain: "Business Tax Preparation"
section: "Analysis of financial records"
description: "An income statement is not a tax return: gross income begins after cost of goods sold, and an examiner reconciles the two by duplicating the steps the preparer took."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 61", title: "Gross income defined", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: IRC, ref: "§ 162", title: "Trade or business expenses", url: "https://www.law.cornell.edu/uscode/text/26/162" }
  - { type: IRC, ref: "§ 446", title: "General rule for methods of accounting", url: "https://www.law.cornell.edu/uscode/text/26/446" }
  - { type: IRC, ref: "§ 471", title: "General rule for inventories", url: "https://www.law.cornell.edu/uscode/text/26/471" }
  - { type: IRC, ref: "§ 6001", title: "Notice or regulations requiring records, statements, and special returns", url: "https://www.law.cornell.edu/uscode/text/26/6001" }
  - { type: Reg, ref: "§ 1.61-3", title: "Gross income derived from business", url: "https://www.law.cornell.edu/cfr/text/26/1.61-3" }
  - { type: Reg, ref: "§ 1.446-1", title: "General rule for methods of accounting", url: "https://www.law.cornell.edu/cfr/text/26/1.446-1" }
  - { type: Reg, ref: "§ 1.6001-1", title: "Records", url: "https://www.law.cornell.edu/cfr/text/26/1.6001-1" }
  - { type: IRM, ref: "4.10.3.7.6", title: "Reconciling the taxpayer's books and records to the tax return", url: "https://www.irs.gov/irm/part4/irm_04-010-003" }
  - { type: IRM, ref: "4.10.3.11.1", title: "Gross profit ratio test", url: "https://www.irs.gov/irm/part4/irm_04-010-003" }
  - { type: IRM, ref: "4.10.4.2.3.5", title: "Reconciliation of income per books to income reported on the return", url: "https://www.irs.gov/irm/part4/irm_04-010-004" }
  - { type: IRM, ref: "4.10.4.2.3.6", title: "Testing gross receipts", url: "https://www.irs.gov/irm/part4/irm_04-010-004" }
forms: []
related: ["2.2.4.a", "2.2.4.c", "2.2.4.g", "2.2.1.a", "2.2.1.b", "2.2.4.d", "2.2.4.f", "2.2.4.h"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRM 4.10.3.7.6 definition of the profit and loss statement and the document chain from general ledger to return, the Reg. § 1.6001-1(a) and Reg. § 1.446-1(a)(4) records requirements, the Reg. § 1.61-3(a) definition of gross income from a business as sales less cost of goods sold, the limits on what cost of goods sold may absorb, and the IRM 4.10.4.2.3.5 and 4.10.4.2.3.6 reconciliation and gross receipts tests with the gross profit ratio." }
---

Every business return begins life as an income statement, and the two are never the same document.
The statement measures a period the way accounting measures it; the return measures a taxable year
the way the Code measures it. Reading one against the other — knowing which lines are supposed to
differ and which are not — is the whole of this topic.

## The rule

**What an income statement is.** {fig:pl.definition} (IRM 4.10.3.7.6). Nothing turns on which of
the three names a taxpayer uses.

**The Code does not require an income statement. It requires records.** IRC § 6001 directs every
person liable for tax to keep records, and Reg. § 1.6001-1(a) states the standard:
{fig:pl.records}. IRC § 446(a) computes taxable income under the method the taxpayer regularly uses
in keeping its books, and Reg. § 1.446-1(a)(4) defines the corpus: {fig:pl.accounting_records}. The
reconciliation is therefore not a courtesy — the regulation names it as a required record.

**Gross income is not the top line.** {fig:pl.gross_income_business} (Reg. § 1.61-3(a)). Cost of
goods sold is not a deduction; it is a subtraction made before gross income exists. That single
structural point drives more of this topic than any other, because it means an amount denied as a
deduction cannot be rescued by moving it into inventory. The regulation says so directly:
{fig:pl.cogs_limits}.

**Revenue means all of it.** IRC § 61(a) defines gross income as all income from whatever source
derived and lists, without limiting, compensation, gross income derived from business, gains from
dealings in property, interest, rents, royalties and dividends. A statement that separates operating
from non-operating revenue is making a presentational distinction; the return takes both.

**How an examiner ties the two together.** {fig:pl.reconciliation} (IRM 4.10.4.2.3.5). The route
runs through documents in a fixed order: {fig:pl.trail} (IRM 4.10.3.7.6).

**Testing the top line.** {fig:pl.receipts_tests} (IRM 4.10.4.2.3.6). Where goods are involved a
ratio does the first pass: {fig:pl.gross_profit_ratio} (IRM 4.10.3.11.1), and
{fig:pl.gross_profit_use}.

**What a weak set of records does and does not permit.** {fig:pl.indirect_test}
(IRM 4.10.4.2.3.5). Irregularities in the books or inconsistent reporting may indicate unreported
income; the mere fact that the books were written up after the year closed does not.

## Current figures

| Item | Figure | Authority |
| --- | --- | --- |
| Income statement | {fig:pl.definition} | IRM 4.10.3.7.6 |
| Records standard | {fig:pl.records} | Reg. § 1.6001-1(a) |
| Accounting records | {fig:pl.accounting_records} | Reg. § 1.446-1(a)(4) |
| Gross income from business | {fig:pl.gross_income_business} | Reg. § 1.61-3(a) |
| Limits on cost of goods sold | {fig:pl.cogs_limits} | Reg. § 1.61-3(a) |
| Gross profit ratio | {fig:pl.gross_profit_ratio} | IRM 4.10.3.11.1 |
| Test for an indirect method | {fig:pl.indirect_test} | IRM 4.10.4.2.3.5 |

## How it works in practice

**Read the statement in the order the return is built.** Revenue, cost of goods sold, gross profit,
operating expenses, then the non-operating items. The return does the same under different names,
and the correspondence is close enough that a line-by-line map is usually possible — which is what
the grouping papers the IRM describes are for.

**Expect four kinds of difference and name each.** Timing, where book period and taxable year
recognise the same item at different moments. Permanent, where the item counts for one purpose and
never for the other. Classification, where the same amount sits in a different place. And errors.
The first three belong on the reconciliation; the fourth belongs in an amended return.

**Cost of goods sold is where analysis pays.** Because it is a subtraction rather than a deduction,
items buried in it escape the deduction rules by presentation rather than by law. The regulation
closes that route for selling expenses, losses and the IRC § 162(c), (f) and (g) categories, so the
habit should be to ask what a cost is before asking where it goes.

**The gross profit ratio is computed on the selling price.** An item bought for four fifths of what
it sells for carries a margin of a fifth of the selling price — but a markup of a quarter of cost.
Both figures describe the same profit, and confusing them produces a reconstructed sales figure that
is wrong by a predictable amount. Where inventories matter, an examiner computes the ratio, compares
it with prior years and with the industry, and asks about the gap before asking for anything else.

**Test receipts in both directions.** Tracing from the books to source documents finds entries with
no support. Tracing from source documents to the books finds sales that never reached the ledger —
the direction that matters when income is understated. Sequenced documents make the second test far
stronger: a numbered series with gaps is a question the taxpayer must answer.

**Reconstructed books are not fatal.** The IRM's own example is a taxpayer who wrote up the year's
books afterwards from bank statements and cancelled cheques, and its stated conclusion is that this
does not by itself permit a formal indirect method. The threshold is a reasonable indication of a
likelihood of unreported income — a fact about the income, not about the bookkeeping. A preparer
whose client has thin records should document how each figure was derived rather than apologise for
the records.

## Scenarios

<div class="scenario">
<h3>The fine that went into inventory</h3>

Ashfield Millwork pays a $70,000 penalty to a state regulator over a workplace violation. Its
controller, knowing the penalty is not deductible, records it in manufacturing overhead, where it is
absorbed into finished goods and reaches the return through cost of goods sold.

That does not work. Reg. § 1.61-3(a) provides that cost of goods sold may not include amounts a
deduction for which would be disallowed under IRC § 162(c), (f) or (g), and a fine paid to a
government for violation of law is squarely within § 162(f). The character of the payment, not the
account it was posted to, decides the outcome.

The significance is timing as well as amount: absorbed into inventory, the penalty would have
reduced income only as the goods sold, spreading a permanently disallowed item across years and
making it far harder to find. That is why the regulation names the categories.
</div>

<div class="scenario">
<h3>Margin and markup</h3>

Sennett Supply reports gross receipts of $1,400,000 and cost of goods sold of $1,050,000. Under
examination the owner says the firm marks everything up 33 percent over cost.

The two statements are consistent, and a preparer who thinks otherwise will concede an adjustment
that is not owed. A 33.3 percent markup on cost produces a 25 percent margin on the selling price:
goods costing $1,050,000 marked up by a third sell for about $1,400,000, and the gross profit of
$350,000 is a quarter of that.

Had the owner instead said the firm takes a 33 percent *margin*, the same cost of goods sold would
imply receipts near $1,570,000, and the $170,000 difference would be a genuine question. The IRM
supplies the rule that resolves it — margin is computed on the selling price — and Exhibit 4.10.3-4
tabulates the conversion.
</div>

<div class="scenario">
<h3>Books written up in March</h3>

Corliss Landscaping keeps no contemporaneous ledger. In March its bookkeeper builds the prior year's
accounts from bank statements, deposit slips and cancelled cheques, and the return is prepared from
them. The examiner reconciles the return to the books without discrepancy, and the deposits tie.

The examiner may not move to a formal indirect method on these facts alone. The IRM's own example is
this example, and its conclusion is that non-contemporaneous preparation does not per se justify one
— the test is a reasonable indication of a likelihood of unreported income.

What would change the answer is a fact about the income rather than the timing of the bookkeeping:
cash receipts that never reached a deposit, an observed income-producing asset appearing nowhere, a
numbered invoice series with gaps. Corliss's exposure is not that its books were late — it is that
records built from deposits capture only what was deposited.
</div>

<div class="scenario">
<h3>Two statements, one return</h3>

Ledbury Instruments hands its preparer an income statement showing revenue of $6,200,000 and net
income of $410,000. The return reports gross receipts of $6,050,000 and taxable income of $455,000.

Nothing here is necessarily wrong, and the preparer should be able to name each gap. The $150,000
revenue difference is a gain on an equipment sale, shown as non-operating revenue on the statement
and reported in the return's gain-or-loss computation on a different basis. The income difference
nets several items: book depreciation exceeding tax depreciation, an accrued bonus unpaid within the
required period, and meals allowed in part for book and disallowed for tax.

Each is a timing or permanent difference belonging on the reconciliation. What the preparer cannot
do is present the return figures without being able to say which category each difference falls
into — that explanation is the reconciliation Reg. § 1.446-1(a)(4) names as a required record.
</div>

## Traps

<div class="callout trap">

**Cost of goods sold is not a deduction.** It is subtracted in arriving at gross income under
Reg. § 1.61-3(a). Treating it as a deduction misplaces it in every limitation operating on gross
income or on deductions, and invites the idea that a disallowed cost can be sheltered by
inventorying it.

</div>

<div class="callout trap">

**"Non-operating" is a presentation, not an exclusion.** IRC § 61(a) takes income from whatever
source derived. Interest, rents and gains sitting below an operating-income subtotal on the
statement are income on the return just as the top line is.

</div>

<div class="callout trap">

**Margin and markup are different percentages of the same dollars.** Margin is computed on the
selling price; markup on cost is larger for the same profit. Reconstructions that mix them are wrong
by a predictable and material amount.

</div>

<div class="callout trap">

**Late books are not, by themselves, grounds for an indirect method.** The IRM's stated test is a
reasonable indication of a likelihood of unreported income. Conceding an indirect method because the
records were reconstructed gives away a position the IRM does not require.

</div>

<div class="callout trap">

**The book-to-return reconciliation is a required record, not a working paper.**
Reg. § 1.446-1(a)(4) names it as part of the accounting records a taxpayer must maintain, which is
why it is requested at the start of an examination rather than during it.

</div>

## How this has changed

The records regulations are among the oldest in the Code and have moved very little; what has moved
is the form the records take. The IRM's examination material now assumes electronic books and treats
e-commerce and internet activity probes as part of the minimum requirement rather than a specialised
exercise. The standard in Reg. § 1.6001-1(a) — records sufficient to establish the amounts shown on
the return — is unchanged.

The most consequential recent change to the income statement's relationship with the return is on
the inventory side. The small business taxpayer exception now written into IRC § 471(c) and picked
up in Reg. § 1.446-1(a)(4)(i) allows a qualifying taxpayer to escape the general rule that
merchandise on hand must be taken into account, which for those taxpayers detaches the return's cost
of goods sold from the inventory accounting on the books. The gross receipts ceiling for that
exception is indexed and rises each year.

Nothing in the post-2024 legislation alters the definition of gross income from a business or the
limits on cost of goods sold. IRC § 162(f) was rewritten in 2017 to distinguish restitution and
remediation payments from ordinary fines, narrowing what falls into the category Reg. § 1.61-3(a)
keeps out of cost of goods sold without changing the mechanism.

## Exam focus

The single most tested proposition is that cost of goods sold reduces gross income rather than being
deducted from it. Expect it framed as a computation, and expect at least one distractor that treats
it as a deduction.

Compute in both directions: receipts less cost of goods sold gives gross profit, and gross profit
over receipts gives the margin. Margin is on the selling price; markup on cost is the larger figure
for the same dollars.

Know the names — profit and loss statement, income statement, statement of operations are one
document — and where it sits in the chain from general ledger through trial balance and adjusting
entries to the Schedule M adjustments and the return.

For the examination material, remember two limits: testing gross receipts runs in both directions,
and reconstructed books alone do not justify a formal indirect method.

Finally, keep the four categories of book-to-tax difference available by name — timing, permanent,
classification and error. Questions about the income statement frequently resolve into asking which
category a stated difference belongs to.

## Check yourself

**1.** A retailer's statement shows sales of $900,000, cost of goods sold of $540,000, operating
expenses of $210,000, interest income of $6,000 and a gain on a delivery van of $9,000. What is its
gross income from the business, and what enters the return?

*Answer: Gross income under Reg. § 1.61-3(a) is total sales less cost of goods sold plus income
from investments and incidental or outside operations — $900,000 less $540,000, plus $6,000 and
$9,000, giving $375,000. The $210,000 of operating expenses is an IRC § 162 deduction taken after
gross income, not before it. Every item enters the return; the operating and non-operating labels
affect presentation, not inclusion.*

**2.** A manufacturer pays a $40,000 fine to a state agency and absorbs it into manufacturing
overhead. Its preparer argues the amount is not being deducted, so § 162(f) is irrelevant. Is that
right?

*Answer: No. Reg. § 1.61-3(a) determines cost of goods sold without amounts of a type for which a
deduction would be disallowed under IRC § 162(c), (f) or (g). The regulation anticipates this
argument and forecloses it: the disallowance follows the character of the payment, not the account
it was posted to. Inventorying it would otherwise spread a permanently disallowed item across years
as the goods sold.*

**3.** An examiner traces every entry in a taxpayer's sales journal to a supporting invoice and finds
no exceptions. Is the gross receipts test complete?

*Answer: No — that is one of the two directions. IRM 4.10.4.2.3.6 also requires tracing original
sales documents forward to the corresponding book entries, the direction that finds sales never
recorded. Tracing only from the books can never detect an omission, because an omitted sale
generates no entry to trace. Where the documents are numbered, the examiner must also account for
missing numbers in the sequence.*

**4.** A wholesaler's records were assembled after year end from bank statements. The return
reconciles to those records and the deposits tie. May the examiner use a formal indirect method?

*Answer: Not on those facts. IRM 4.10.4.2.3.5 states that books not prepared contemporaneously do
not per se permit a formal indirect method, and gives this fact pattern as its example. The test is
a reasonable indication of a likelihood of unreported income — a proposition about the income, not
the bookkeeping. Something more is needed: receipts that never became deposits, an income-producing
asset unaccounted for, or gaps in a sequenced series.*

**5.** Why does the IRM ask for a taxpayer's grouping papers at the beginning of an examination
rather than later?

*Answer: Because they are the map from the book accounts to the return lines, and without them the
examiner cannot duplicate the steps the preparer took — which is what IRM 4.10.4.2.3.5 directs be
done. They are also not a discretionary courtesy: Reg. § 1.446-1(a)(4) treats a reconciliation of
differences between the books and the return as part of the accounting records the taxpayer is
required to maintain, so a taxpayer who cannot produce one has a records problem before any
substantive issue is reached.*
