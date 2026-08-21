---
title: "Reconciliation of tax versus books (e.g., M-1, M-2, M-3)"
code: "2.2.4.g"
part: 2
domain: "Business Tax Preparation"
section: "Analysis of financial records"
description: "Schedule M-1 ends at taxable income for a C corporation and at Schedule K income for a pass-through, and the Schedule M-3 trigger is total assets rather than receipts."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 446", title: "General rule for methods of accounting", url: "https://www.law.cornell.edu/uscode/text/26/446" }
  - { type: IRC, ref: "§ 6001", title: "Notice or regulations requiring records, statements, and special returns", url: "https://www.law.cornell.edu/uscode/text/26/6001" }
  - { type: IRC, ref: "§ 531", title: "Imposition of accumulated earnings tax", url: "https://www.law.cornell.edu/uscode/text/26/531" }
  - { type: IRC, ref: "§ 1368", title: "Distributions", url: "https://www.law.cornell.edu/uscode/text/26/1368" }
  - { type: IRC, ref: "§ 461", title: "General rule for taxable year of deduction", url: "https://www.law.cornell.edu/uscode/text/26/461" }
  - { type: IRC, ref: "§ 274", title: "Disallowance of certain entertainment, etc., expenses", url: "https://www.law.cornell.edu/uscode/text/26/274" }
  - { type: IRC, ref: "§ 163", title: "Interest", url: "https://www.law.cornell.edu/uscode/text/26/163" }
  - { type: Reg, ref: "§ 1.446-1", title: "General rule for methods of accounting", url: "https://www.law.cornell.edu/cfr/text/26/1.446-1" }
  - { type: IRM, ref: "4.10.3.8", title: "Analyzing Schedules M-1, M-2 and M-3", url: "https://www.irs.gov/irm/part4/irm_04-010-003" }
  - { type: IRM, ref: "4.10.3.8.1", title: "Schedule M-1", url: "https://www.irs.gov/irm/part4/irm_04-010-003" }
  - { type: IRM, ref: "4.10.3.8.2", title: "Schedule M-2", url: "https://www.irs.gov/irm/part4/irm_04-010-003" }
  - { type: IRM, ref: "4.10.4.2.4.2", title: "Schedules M-1, M-2 and M-3", url: "https://www.irs.gov/irm/part4/irm_04-010-004" }
  - { type: Form, ref: "Form 1120 instructions", title: "Schedule L and Schedule M-1", url: "https://www.irs.gov/instructions/i1120" }
  - { type: Form, ref: "Form 1065 instructions", title: "Item J and Schedule B question 4", url: "https://www.irs.gov/instructions/i1065" }
forms: []
related: ["2.2.4.b", "2.2.4.c", "2.2.4.f", "2.2.4.d", "2.2.4.a", "2.2.4.e"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRM 4.10.3.8.1 statement of what Schedule M-1 reconciles and the different endpoint it has for a C corporation and for a pass-through, the Schedule M-3 triggers for corporations and partnerships including the partnership receipts test the corporate rule lacks, the partial relief for entities between $10 million and $50 million of assets, the three different things Schedule M-2 reports depending on the return, and the IRM audit techniques including the netting check and the prior and subsequent year comparison." }
---

Every book-to-tax difference is a story about either timing or law: the same amount counted in a
different year, or an amount one system counts and the other never will. Schedules M-1 and M-3 make
the taxpayer write that story down. Schedule M-2 does something different, and confusing the two is
the fastest way to lose marks here.

## The rule

**What Schedule M-1 is for.** {fig:m1.purpose} (IRM 4.10.3.8.1).

**And it ends in a different place depending on the return.** {fig:m1.c_corp}, against
{fig:m1.passthrough} (IRM 4.10.3.8.1). That difference follows from the returns themselves: a
C corporation has taxable income, a pass-through does not.

**When Schedule M-3 replaces it.** {fig:m3.corp_trigger} (Instructions for Form 1120, Schedule L).
The partnership rule is broader: {fig:m3.partnership_trigger} (Instructions for Form 1065, Item J).
And there is middle ground: {fig:m3.partial_relief} (IRM 4.10.3.8).

**When a partnership escapes M-1 altogether.** {fig:m1.1065_exception} (Instructions for Form 1065,
Schedule B question 4). The receipts figure in that test is defined:
{fig:m1.1065_receipts}.

**Schedule M-2 is three different schedules wearing one name.** {fig:m2.c_corp}
(IRM 4.10.3.8.2 and 4.10.3.8.2.1). For an S corporation, {fig:m2.s_corp}. For a partnership,
{fig:m2.partnership}.

**What an examiner does with them.** {fig:m1.netting} (IRM 4.10.3.8.1.1), and
{fig:m1.year_comparison}. The structural weakness that makes both worth doing:
{fig:bs.omitted_m1} (IRM 4.10.4.2.4.2).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| What M-1 reconciles, C corporation | {fig:m1.c_corp} | IRM 4.10.3.8.1 |
| What M-1 reconciles, pass-through | {fig:m1.passthrough} | IRM 4.10.3.8.1 |
| M-3 trigger, corporation | {fig:m3.corp_trigger} | Form 1120 instructions |
| M-3 trigger, partnership | {fig:m3.partnership_trigger} | Form 1065 instructions |
| Partial relief | {fig:m3.partial_relief} | IRM 4.10.3.8 |
| Partnership M-1 exception | {fig:m1.1065_exception} | Form 1065 instructions |
| Schedule M-2, S corporation | {fig:m2.s_corp} | IRM 4.10.3.8.2 |

## How it works in practice

**Sort every difference into one of two boxes before doing anything else.** A temporary difference
reverses: book depreciation against tax depreciation, an accrued expense not yet paid, a deferred
revenue item. A permanent difference never does: tax-exempt interest, the disallowed half of a
business meal, a fine, the excess of a life insurance premium over its deductible portion. Schedule
M-1 does not distinguish them on its face, which is why Schedule M-3 was built to.

**Read M-1 in the direction it runs.** It begins at net income per books and adds back the things
tax counts that books did not, then subtracts the things books counted that tax does not. Federal
income tax expense is the first add-back for a C corporation, and it is the one most often
mismatched: IRM 4.10.3.8.2.1 directs the examiner to reconcile line 2 against the amount on the
books including both current and deferred amounts.

**Do not net offsetting adjustments.** A large add-back and a nearly equal subtraction presented as
a small net figure look immaterial and are not. The IRM instructs examiners to look for exactly
that, and a preparer who nets has made a large issue invisible to their own review as well as to the
examiner's.

**Compare across years, in both directions.** An adjustment that appeared last year and not this
year needs a reason. An adjustment that appears next year raises the question whether it should have
appeared in the year under examination. This is the horizontal analysis of the reconciliation rather
than of the return, and it is where reversing temporary differences either show up or fail to.

**Keep M-2 separate in your head.** M-1 reconciles income; M-2 analyses an equity account. For a
C corporation it tracks unappropriated retained earnings, its line 2 equalling M-1 line 1 or M-3
line 11 — the point at which the two schedules touch. For an S corporation it tracks four distinct
accounts whose interaction decides how a distribution is taxed under IRC § 1368. For a partnership
it tracks partners' capital. Three jobs, one schedule number.

**Use the asymmetry.** Schedule M-1 adjustments live outside the double-entry system, so they never
touch a balance sheet account. That makes the balance sheet the place to find an M-1 item that was
omitted, and the liabilities the most productive part of it.

## Scenarios

<div class="scenario">
<h3>The receipts that did not decide it</h3>

Bramford Tooling, a C corporation, has gross receipts of $50,000,000 and total assets at year end of
$6,200,000. Its preparer files Schedule M-3, reasoning that a company of that size must.

That is the wrong test. For a Form 1120 filer the trigger is total assets on the last day of the tax
year — a balance sheet figure, not an income statement one — and Bramford's assets are well under
the threshold, so Schedule M-1 is the correct schedule.

The confusion is understandable, because the partnership rule *does* include a receipts test: a
Form 1065 filer is pushed onto Schedule M-3 by its receipts as well as by the asset tests and the
reportable entity partner test. Had Bramford been a partnership, its receipts alone would have
required M-3. The entity type decides which list applies.
</div>

<div class="scenario">
<h3>Four conditions, not three</h3>

Loxley Interiors LLP has total receipts of $180,000, total assets of $740,000, and files its
Schedules K-1 with the return and furnishes them to the partners on the extended due date. Its
preparer omits Schedules L, M-1 and M-2, and separately notes that book and taxable income happen to
be identical this year.

The omission is correct, but not for the reason the preparer gave. The Form 1065 exception depends
on answering Yes to Schedule B question 4, which requires all four of its conditions —
{fig:m1.1065_exception}. Loxley meets all four.

That book and tax income coincide is irrelevant. It is not one of the conditions, and a partnership
with no differences at all still completes Schedule M-1 if it fails any of the four — while a
partnership with substantial differences omits the schedule if it meets them all.
</div>

<div class="scenario">
<h3>The two adjustments that cancelled</h3>

Kesteven Machining's Schedule M-1 shows a single net adjustment of $30,000. The workpapers behind it
reveal a $520,000 add-back for accrued bonuses unpaid within the required period and a $490,000
subtraction for the reversal of a prior year's accrual.

Nothing on the face of the schedule suggests an issue, which is precisely the problem.
IRM 4.10.3.8.1.1 directs examiners to check that large adjustments running in opposite directions
have not been netted into an apparently immaterial figure, and this is that pattern exactly.

Both halves need testing on their own. The add-back turns on whether the bonuses met the
IRC § 461(h) economic performance rules and the recurring item exception; the subtraction turns on
whether the prior year accrual was correctly disallowed in the first place. Either could be wrong
without the net figure moving much, and the netted presentation guarantees neither gets looked at.
</div>

## Traps

<div class="callout trap">

**The corporate Schedule M-3 test is assets, not receipts** — total assets on the last day of the
tax year. A large-revenue corporation with a small balance sheet stays on Schedule M-1; a
partnership in the same position does not, because the Form 1065 rule adds a receipts test.

</div>

<div class="callout trap">

**Schedule M-1 ends in a different place for a pass-through.** For a C corporation it reconciles to
taxable income before the net operating loss and special deductions. For an S corporation or
partnership it reconciles to income per Schedule K, after all separately stated items. Using the
corporate description for a partnership question misstates the endpoint.

</div>

<div class="callout trap">

**Schedule M-2 is not a reconciliation of income.** It analyses an equity account — retained
earnings, partners' capital, or the four S corporation accounts. Its only fixed link to M-1 is that
the C corporation version's line 2 should equal M-1 line 1 or M-3 line 11.

</div>

<div class="callout trap">

**The partnership M-1 exception has four conditions and they are conjunctive.** Receipts, assets,
timely filed and furnished K-1s, and no Schedule M-3 requirement. The absence of book-to-tax
differences is not one of them and does not substitute for any of them.

</div>

## How this has changed

Schedule M-3 arrived for corporations for tax years ending on or after 31 December 2004 and was
extended to partnerships for tax year 2006 returns. Its purpose was the one Schedule M-1 could not
serve: separating temporary from permanent differences and requiring each material item to be
identified rather than aggregated. Schedule M-1 survives underneath it for smaller entities, and the
two now coexist by size rather than by entity type.

The relief in the middle came for tax years ending 31 December 2014 and later, when entities in the
band described above were permitted to file Schedule M-1 in place of Schedule M-3 Parts II and III.
Part I stayed compulsory for everyone above the lower threshold, which is why an entity in that band
files both schedule numbers.

The substance of what gets reconciled has moved with the underlying law rather than with the
schedules. IRC § 274(o) first bites in 2026, so the employer-convenience meal add-back appears on
Schedule M-1 for the first time this year. IRC § 163(j) returned to an EBITDA base for taxable years
beginning after 31 December 2024, changing the size of the interest adjustment. And bonus
depreciation permanent at the full statutory rate widens the depreciation difference in the year of
acquisition and narrows it in every year after, which is exactly the pattern the IRM's
prior-and-subsequent-year comparison is designed to surface.

## Exam focus

Memorise the two Schedule M-3 triggers separately. A corporation is tested on total assets alone; a
partnership on any of four tests, one of which is total receipts. Questions in this area frequently
supply a receipts figure for a corporation, which decides nothing.

Know both endpoints of Schedule M-1 and which entity gets which. Know that the partnership M-1
exception has four conjunctive conditions and be able to list them.

Be able to place a given difference as temporary or permanent, because that classification is the
substance behind every M-1 line. Depreciation, accruals and deferred revenue are temporary;
tax-exempt interest, fines, the disallowed portion of meals, and non-deductible life insurance
premiums are permanent.

For Schedule M-2, remember what each version analyses and that the S corporation version carries the
accumulated adjustments account, previously taxed income, accumulated earnings and profits, and the
other adjustments account — the four accounts that decide the taxation of a distribution under
IRC § 1368.

Finally, remember the audit techniques: no netting of offsetting adjustments, compare with prior and
subsequent years in both directions, and look on the balance sheet for what M-1 omitted.

## Check yourself

**1.** A partnership has total assets of $4,000,000 and total receipts of $38,000,000. Which
reconciliation schedule does it file?

*Answer: Schedule M-3. The Form 1065 rule requires it if *any* of four conditions is met, and the
total receipts test is one of them — whether the asset tests are satisfied is beside the point once
a single trigger is hit. An identical corporation would file Schedule M-1, because the Form 1120
trigger is total assets and nothing else. Note also that this partnership cannot use the Schedule B
question 4 exception, since one of its four conditions is that the partnership is not required to
file Schedule M-3.*

**2.** A C corporation's Schedule M-1 line 1 shows $840,000 and its Schedule M-2 line 2 shows
$795,000. What does that tell you?

*Answer: That something is unreconciled. IRM 4.10.3.8.2.1 states that Schedule M-2 line 2 equals
Schedule M-1 line 1 or Schedule M-3 line 11, so a $45,000 gap means either an entry was posted
directly to retained earnings that is not reflected in book net income, or one of the two figures is
wrong. It is not itself an adjustment to income — it is a signal that the preparer's own two
schedules disagree about the same number, which the examiner will ask about before looking at
anything substantive.*

**3.** Which of these is a permanent difference: accrued vacation pay unpaid at year end, the
disallowed portion of a business meal, or the excess of book depreciation over tax depreciation?

*Answer: The disallowed portion of the meal. It is never deductible, so the book and tax figures
never converge. The accrued vacation pay is temporary — the deduction arrives when the economic
performance and recurring item rules are satisfied, typically on payment. Book depreciation
exceeding tax depreciation is temporary in the opposite direction: over the asset's life the two
totals must agree, so the difference reverses. The classification matters because Schedule M-3
requires it and Schedule M-1 does not, which is the reason M-3 exists.*

**4.** Why does the IRM tell examiners to look for omitted Schedule M-1 items in the balance sheet
accounts?

*Answer: Because Schedule M-1 adjustments are made on the return and are not part of the taxpayer's
double-entry system, so no normal accounting control catches an error on them and they leave no
trace in the balance sheet accounts. A liability that moved without a corresponding effect on the
income statement therefore cannot have been absorbed by an M-1 adjustment and points to an item
reported in one place and not the other. The same absence of controls is why the IRM warns that
errors on Schedule M-1 — double deductions, transpositions, netted lines — are frequent.*

**5.** A partnership with receipts of $210,000 and assets of $860,000 furnishes its Schedules K-1
three weeks after the extended due date. May it omit Schedules L, M-1 and M-2?

*Answer: No. The exception requires all four conditions in Schedule B question 4, and one of them is
that the Schedules K-1 are filed with the return and furnished to the partners on or before the due
date *including extensions*. Missing that date by any margin defeats the exception even though the
receipts and asset tests are comfortably met, so all three schedules must be completed. The
condition is doing real work: it is the price of the exemption, not a formality.*
