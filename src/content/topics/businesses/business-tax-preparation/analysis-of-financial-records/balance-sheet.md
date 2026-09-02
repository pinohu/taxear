---
title: "Balance sheet (e.g., proofing beginning and ending balances, relationship to income statement and depreciation)"
code: "2.2.4.c"
part: 2
domain: "Business Tax Preparation"
section: "Analysis of financial records"
description: "Assets equal liabilities plus equity, so equity is a residue rather than a component of assets, and the first question about any balance sheet is whether it is tax based."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 446", title: "General rule for methods of accounting", url: "https://www.law.cornell.edu/uscode/text/26/446" }
  - { type: IRC, ref: "§ 6001", title: "Notice or regulations requiring records, statements, and special returns", url: "https://www.law.cornell.edu/uscode/text/26/6001" }
  - { type: IRC, ref: "§ 7872", title: "Treatment of loans with below-market interest rates", url: "https://www.law.cornell.edu/uscode/text/26/7872" }
  - { type: IRC, ref: "§ 1272", title: "Current inclusion in income of original issue discount", url: "https://www.law.cornell.edu/uscode/text/26/1272" }
  - { type: IRC, ref: "§ 263A", title: "Capitalization and inclusion in inventory costs of certain expenses", url: "https://www.law.cornell.edu/uscode/text/26/263A" }
  - { type: IRC, ref: "§ 1245", title: "Gain from dispositions of certain depreciable property", url: "https://www.law.cornell.edu/uscode/text/26/1245" }
  - { type: Reg, ref: "§ 1.6001-1", title: "Records", url: "https://www.law.cornell.edu/cfr/text/26/1.6001-1" }
  - { type: Reg, ref: "§ 1.446-1", title: "General rule for methods of accounting", url: "https://www.law.cornell.edu/cfr/text/26/1.446-1" }
  - { type: IRM, ref: "4.10.3.10.1", title: "Balance sheet definitions", url: "https://www.irs.gov/irm/part4/irm_04-010-003" }
  - { type: IRM, ref: "4.10.3.10.2", title: "Step 1: determine balance sheet basis", url: "https://www.irs.gov/irm/part4/irm_04-010-003" }
  - { type: IRM, ref: "4.10.3.10.3", title: "Step 2: identify accounts for in-depth analysis", url: "https://www.irs.gov/irm/part4/irm_04-010-003" }
  - { type: IRM, ref: "4.10.4.2.4.2", title: "Schedules M-1, M-2 and M-3", url: "https://www.irs.gov/irm/part4/irm_04-010-004" }
  - { type: Form, ref: "Form 1120 instructions", title: "Schedule L, Balance Sheets per Books", url: "https://www.irs.gov/instructions/i1120" }
forms: []
related: ["2.2.4.a", "2.2.4.b", "2.2.4.g", "2.2.4.e", "2.2.4.i", "2.2.4.d", "2.2.4.f", "2.2.4.h"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRM 4.10.3.10.1 accounting equation and definitions, the Schedule L requirement that the balance sheet agree with the books and the under-$250,000 exception, the IRM 4.10.3.10.2 first step of determining whether a balance sheet is tax based or book based with its three proofs, the IRM 4.10.3.10.3 criteria for selecting accounts, and the depreciation roll-forward and liability-account techniques that find omitted income and omitted Schedule M-1 items." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed the existing scenarios." }
---

<div class="plain-terms">
A balance sheet is a snapshot of what a business owns and owes on one day. It always balances. What
the business owns equals what it owes to others, plus what belongs to its owners. That last figure
is just what is left over. Anyone who prepares or checks a business tax return needs to read one. It
shows whether the year's numbers add up. It can also reveal income that the main tax return left
out. A mismatch between the balance sheet and the rest of the return does not always mean something
is wrong. But it always means something needs an explanation before the return can be trusted.
</div>

An income statement can be wrong on its own. A balance sheet cannot: every error has a counterparty,
usually in a different account and often in a different year. That is what makes the balance sheet
the more productive document to analyse, and why the IRM makes its analysis part of the minimum
income probes rather than an optional refinement.

## The rule

**What it is.** {fig:bs.definition} (IRM 4.10.3.10.1). And it reduces to one identity:
{fig:bs.equation}.

**What the return requires.** {fig:bs.schedule_l} (Instructions for Form 1120, Schedule L). Note
what that sentence does not say: it does not require agreement with the return. There is a size
exception — {fig:bs.schedule_l_exception} — and a size escalation:
{fig:bs.m3_threshold}.

**The first question is which basis you are looking at.** {fig:bs.first_step}
(IRM 4.10.3.10.2). The tell is a mismatch that ought not to exist:
{fig:bs.tax_based_signal}.

**Three proofs on a tax based balance sheet.** {fig:bs.proof_steps} (IRM 4.10.3.10.2). The last of
those is a substantive test, not a formality: IRC § 446(b) allows the Commissioner to compute
taxable income under a method that does clearly reflect income where the taxpayer's does not.

**Which accounts get looked at.** {fig:bs.luq_signals} (IRM 4.10.3.10.3). None of the four is about
the size of the balance.

**The depreciation tie.** {fig:bs.depreciation_tie} (IRM 4.10.3.10.4). This is the
beginning-to-ending proof that gives the topic its name: the prior year's closing schedule is the
current year's opening schedule, anything appearing in between must be explained by an acquisition,
and anything disappearing by a disposition with a computed gain or loss.

**Where omissions surface.** {fig:bs.receivable_credit} (IRM 4.10.3.10.4). And the liability side
carries a structural advantage: {fig:bs.omitted_m1} (IRM 4.10.4.2.4.2).

**The records behind it.** Reg. § 1.6001-1(a) requires books sufficient to establish the amounts on
the return, and Reg. § 1.446-1(a)(4) includes within accounting records the data supporting the
entries — which is why a detailed schedule behind a balance sheet line is not an optional extra.

## Current figures

| Item | Figure | Authority |
| --- | --- | --- |
| Balance sheet | {fig:bs.definition} | IRM 4.10.3.10.1 |
| The identity | {fig:bs.equation} | IRM 4.10.3.10.1 |
| Schedule L standard | {fig:bs.schedule_l} | Form 1120 instructions |
| Schedule L exception | {fig:bs.schedule_l_exception} | Form 1120 instructions |
| Schedule M-3 threshold | {fig:bs.m3_threshold} | Form 1120 instructions |
| Selection criteria | {fig:bs.luq_signals} | IRM 4.10.3.10.3 |
| Depreciation tie | {fig:bs.depreciation_tie} | IRM 4.10.3.10.4 |

## How it works in practice

**Get the direction of the identity right first.** Assets are what the entity has; liabilities and
equity together are the claims against them. Equity is derived — total assets less total liabilities
— and no item of equity is ever a liability. The commonest test gives a total for two terms and asks
for the third; the commonest error is treating an unfamiliar asset as a liability.

**Then ask what basis the sheet is on.** A tax basis balance sheet is built from the tax treatment of
each item, so its retained earnings figure carries the accumulated *tax* result rather than the book
result — convenient for the preparer and awkward on examination, because the net income per books
figure that should feed Schedule M-1 line 1 no longer matches. Where a partnership has revalued
assets to support its allocations, the sheet is neither book nor tax in the usual sense.

**Proof beginning to ending, account by account.** Opening balance, plus what came in, less what
went out, equals closing balance. Where the arithmetic works and the detail supports each movement,
the account is done. Where it does not, the difference is either an unrecorded transaction or an
entry made directly to the account — and direct entries with no counterpart in a journal are exactly
the "unusual entries" the selection criteria point at.

**The depreciation roll-forward is the highest-yield version of that proof.** Accumulated
depreciation at the start, plus the year's deduction, less the accumulated depreciation removed on
disposals, should equal accumulated depreciation at the end. When it does not, one of three things
has happened: an asset was disposed of without a gain or loss computed, depreciation was claimed on
an asset already fully depreciated or expensed, or an asset was written up. The IRM's direction to
compare prior-year-acquired assets against the preceding return catches the second directly.

**Work the liabilities when you suspect the income statement.** Because Schedule M-1 adjustments
change the income side and leave the balance sheet accounts alone, a liability that moved without a
matching income statement effect is an unreconciled item by construction. An accrued liability that
appears and disappears, a loan account that grows without documented advances, a customer deposit
sitting in receivables as a credit balance — each is a question about income found on the balance
sheet.

**The smallest returns have no balance sheet at all.** Where the Schedule L exception applies,
Schedules M-1 and M-2 go with it and this analysis has no material to work on — which is not an
invitation to skip the reconciliation, since Reg. § 1.6001-1(a) is unaffected by whether a schedule
is filed.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The third term</h3>

Arbor Fabrication's balance sheet shows accounts payable of $84,000, wages payable of $19,000,
long-term debt of $310,000, accrued interest payable of $7,000 and shareholder equity of $460,000.
Its bookkeeper is asked for total assets and answers $880,000.

The answer is right, because equity is a claim against assets rather than an asset itself.
Liabilities total $420,000; adding the $460,000 of equity gives the $880,000 the identity requires.

The trap in questions of this shape is a term that looks out of place. Insert inventory of $95,000
into the same list and ask which item is not a liability: the answer is inventory — an asset, part
of the $880,000 rather than of the $420,000. The arithmetic does not change; the classification of
one line does.
</div>

<div class="scenario" data-type="boundary">
<h3>The balance sheet that could not be reconciled</h3>

Kelmscott Tool files a Form 1120 showing net income per books on Schedule M-1 line 1 of $312,000.
Its balance sheet shows retained earnings rising by $290,000 with no distributions and no other
equity movement.

The $22,000 gap is the question. On a book basis balance sheet the two figures should tie, so either
an equity entry was made that the return does not disclose or the balance sheet is tax based — in
which case, as IRM 4.10.3.10.2 puts it, not all of the Schedule M adjustments have been disclosed
on the return.

The examiner's step is not to adjust but to ask for a reconciling schedule, which is what the IRM
directs where net income per books does not agree to Schedule M-1 line 1. Kelmscott's preparer
should have it already: Reg. § 1.446-1(a)(4) names such a reconciliation as part of the required
accounting records.
</div>

<div class="scenario" data-type="interaction">
<h3>Two roll-forwards that do not agree</h3>

Draycott Haulage reports accumulated {gloss:depreciation} of $1,340,000 at the start of the year and
$1,610,000 at the end, with a depreciation deduction of $305,000. It sold two trailers during the
year, reporting sale proceeds but no gain or loss.

The roll-forward does not close: $1,340,000 plus $305,000 is $1,645,000, exceeding the closing
figure by $35,000. That $35,000 is accumulated depreciation removed from the account, and it can
only have gone on the disposal of the trailers.

The balance sheet has therefore recorded a disposal the return has not. The gain or loss is missing,
and because the trailers were depreciable business property the missing amount is very likely
IRC § 1245 {gloss:recapture} taxed as ordinary income. The whole finding came from three numbers, two
of them on the face of the return.
</div>

<div class="scenario" data-type="procedural">
<h3>The credit balance in receivables</h3>

Netherby Systems shows accounts receivable of $412,000. The detailed ageing behind it contains four
customer accounts with credit balances totalling $56,000, so the gross debit balances are $468,000.

Credit balances in receivables are not receivables. They are money the entity holds — deposits,
advance payments or overpayments — and IRM 4.10.3.10.4 flags them because each points somewhere
different. A deposit received by a cash basis taxpayer is income when received. An advance payment
may be income now or deferrable depending on the method adopted. An overpayment may be a refund
owed, or a sale recorded as a receipt but never as revenue.

The preparer's answer is documentary: identify each of the four and say which it is. What cannot be
defended is netting them against the debit balances and presenting one figure, because that
presentation conceals the question.
</div>

## Traps

<div class="callout trap">

**Equity is not a liability, and assets are not the sum of liabilities.** Assets equal liabilities
*plus* equity. A question that lists debt items and asks which is not a liability is testing the
classification of one line, not the equation.

</div>

<div class="callout trap">

**Schedule L reports balances per books, not per tax return.** The instruction is that the balance
sheets agree with the corporation's books and records. A preparer who "corrects" Schedule L toward
the return destroys the reconciliation the schedule exists to support.

</div>

<div class="callout trap">

**A tax basis balance sheet is not an error, but it changes what ties to what.** Net income per
books will not agree to Schedule M-1 line 1, and the IRM reads that mismatch as an indication that
Schedule M adjustments were not fully disclosed rather than as a bookkeeping quirk.

</div>

<div class="callout trap">

**The Schedule L exception is a two-part test on two different figures.** Total receipts, computed
from the specified lines, *and* total assets at year end, each under the threshold — and the
schedules are omitted only if the corresponding question is answered affirmatively on Schedule K.

</div>

<div class="callout trap">

**Accounts are selected for their behaviour, not their size.** Unusual titles, unusual entries, many
adjusting journal entries, or a concentration of large entries in one month. A large but perfectly
ordinary account may never be examined; a small one with a strange title very likely will be.

</div>

## How this has changed

The accounting identity has not changed and will not. What has changed around it is the reporting
structure sitting on top. Schedule M-3 was introduced at the asset threshold now stated in the
Form 1120 instructions, first for Form 1120 filers for taxable years ending on or after 31 December
2004 and then extended to Form 1120-S, 1120-L and 1120-PC filers for years ending on or after
31 December 2006. It demands a far more granular reconciliation than Schedule M-1, split between
temporary and permanent differences, and it made the balance sheet's role in that reconciliation
explicit rather than implied.

The examination material has moved the same way. IRM 4.10.3.10 was rewritten in 2023 to state that
balance sheet analysis forms part of the minimum income probes, and IRM 4.10.3.10.2 was updated in
2016 to add the direction about partnerships carrying assets at fair market value to match their
allocations — a recognition that a growing share of the balance sheets examiners see are neither
straightforwardly book nor straightforwardly tax.

Nothing in the post-2024 legislation changes the balance sheet rules. The indirect effect runs
through the accounts: with bonus depreciation permanent at the full statutory rate, accumulated
depreciation moves faster relative to gross asset cost than during the phase-down years, making the
roll-forward proof both easier to fail and more informative when it does.

## Exam focus

Know the identity in the direction the question runs. Given liabilities and equity, add for assets;
given assets and liabilities, subtract for equity. Expect at least one question that is really a
classification test wearing an arithmetic disguise.

Name the three elements as the IRM defines them — resources owned and future benefits controlled,
debts owed and obligations to transfer, and the residual interest.

For the return, remember Schedule L reports book balances, that the size exception has two limbs and
takes M-1 and M-2 with it, and that the Schedule M-3 threshold is separate.

The proofing material is most likely to appear as a computation. Practise the depreciation
roll-forward until it is automatic — opening accumulated depreciation, plus the year's deduction,
less accumulated depreciation on disposals, equals closing — and know what each failure mode
implies.

Finally, keep the direction of inference in mind: balance sheet accounts are not adjusted by
Schedule M-1, so they are where an omitted Schedule M-1 item can be found. That is why the IRM
directs examiners to look at the liabilities when they suspect the income statement.

## Check yourself

**1.** A balance sheet shows liabilities of $55,000 and shareholder equity of $100,000. What are
total assets, and what would change if $12,000 of the equity were reclassified as a note payable to
the shareholder?

*Answer: Total assets are $155,000 — assets equal liabilities plus equity. Reclassifying $12,000
from equity to a note payable changes nothing about total assets: liabilities become $67,000, equity
$88,000, and the sum is still $155,000. What changes is everything else — the payment becomes
interest rather than a distribution, IRC § 7872 applies if the note is below-market, and the
shareholder's basis moves. The identity is indifferent; the tax result is not.*

**2.** A corporation's Schedule L shows retained earnings rising by $180,000 while Schedule M-1 line
1 reports net income per books of $205,000, and no distributions were made. What should the preparer
be able to explain?

*Answer: The $25,000 difference. On a book basis balance sheet with no distributions the two should
move together, so either an entry was posted directly to retained earnings — a prior period
adjustment, a correction, an equity transaction — or the balance sheet is on a tax basis, which
IRM 4.10.3.10.2 treats as an indication that not all Schedule M adjustments have been disclosed. The
required response is a reconciling schedule, which Reg. § 1.446-1(a)(4) already obliges the taxpayer
to maintain.*

**3.** Accumulated depreciation opens at $880,000 and closes at $1,020,000. The depreciation
deduction is $190,000 and the return reports no dispositions. What has happened?

*Answer: $50,000 of accumulated depreciation has left the account — $880,000 plus $190,000 is
$1,070,000 against a closing figure of $1,020,000 — and the only ordinary way for accumulated
depreciation to decrease is a disposal. Since the return reports none, either a disposal went
unreported, in which case the gain or loss and any IRC § 1245 recapture are missing, or an asset was
written down or removed by a direct entry. Either way the roll-forward has identified an item the
income statement does not contain.*

**4.** Why does the IRM direct examiners to look for omitted Schedule M-1 items in the balance sheet
accounts, and why especially in the liabilities?

*Answer: Because Schedule M-1 adjustments are made on the return and are not part of the taxpayer's
double-entry system, so they do not touch the balance sheet accounts at all. A liability that moved
without a corresponding income statement effect cannot have been absorbed by an M-1 adjustment, and
points to an item reported in one place and not the other. The IRM adds that because Schedule M-1
sits outside the normal accounting controls, errors on it — double deductions, transpositions,
netted line items — are frequent.*

**5.** A partnership's balance sheet carries its real property at appraised value. What should the
preparer expect an examiner to ask for, and why does it matter?

*Answer: A tax basis balance sheet, which IRM 4.10.3.10.2 directs the examiner to solicit where a
partnership has booked assets at fair market value to coincide with the allocation rules. It matters
because a balance sheet on appraised values cannot support any of the three proofs: retained
earnings will not tie, the depreciation roll-forward will run on a basis the return does not use,
and total assets will not agree to the books in the tax sense. The revaluation may be entirely
proper for allocation purposes and still leave the return's schedules unverifiable without a second
version.*

**6. A bookkeeper lists accounts payable of $40,000, accrued wages of $12,000, inventory of $75,000 and a note payable of $150,000 as the liabilities of the business. Which item does not belong in that total?**
(A) Accrued wages, because they are not yet due (B) Inventory, because it is an asset (C) The note payable, because long-term debt is equity (D) Accounts payable, because they are offset by receivables
*Answer: B. IRM 4.10.3.10.1 defines assets as the resources owned and liabilities as the debts owed, and the identity is assets equal liabilities plus equity; inventory is a resource owned, so it sits on the asset side and the liabilities total $202,000.*

**7. Renshaw Products Inc. has total receipts of $90,000 for the year and total assets of $600,000 at year end. Must it complete Schedule L on Form 1120?**
(A) No, because total receipts are under the exception threshold (B) No, provided the Schedule K question is answered affirmatively (C) Yes, because the exception requires both total receipts and total assets to be under the threshold (D) Yes, and it must file Schedule M-3 in place of Schedule M-1
*Answer: C. The Instructions for Form 1120, Schedule L, set a two-part test on two different figures, total receipts and total assets at year end, each under the threshold; failing either limb means Schedules L, M-1 and M-2 are all required.*

**8. An examiner reviewing a balance sheet under IRM 4.10.3.10.3 must choose accounts for in-depth analysis. Which account is most likely to be selected?**
(A) The largest account on the balance sheet, because size drives risk (B) A small account with an unusual title and many adjusting journal entries (C) The cash account, because it is always examined first (D) Any account whose balance changed during the year
*Answer: B. IRM 4.10.3.10.3 selects accounts for their behaviour, not their size: unusual titles, unusual entries, many adjusting journal entries, or a concentration of large entries in one month, so a large but ordinary account may never be examined.*
