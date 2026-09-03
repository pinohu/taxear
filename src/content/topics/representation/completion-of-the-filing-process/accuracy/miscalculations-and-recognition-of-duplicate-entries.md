---
title: "Miscalculations and recognition of duplicate entries"
code: "3.4.1.b"
part: 3
domain: "Completion of the Filing Process"
section: "Accuracy"
description: "Finding errors before the IRS does: what a math error notice can and cannot do, how duplicates arise, and the office practice the regulation expects a firm to run."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "N. O."
authorities:
  - { type: IRC, ref: "§ 6213(b)", title: "Exceptions to restrictions on assessment — mathematical or clerical errors" }
  - { type: IRC, ref: "§ 6213(g)(2)", title: "Mathematical or clerical error defined" }
  - { type: Reg, ref: "§ 1.6694-2(e)", title: "Exception for reasonable cause and good faith", url: "https://www.law.cornell.edu/cfr/text/26/1.6694-2" }
  - { type: Circ230, ref: "§ 10.22", title: "Diligence as to accuracy" }
  - { type: Pub, ref: "1345", title: "Handbook for Authorized IRS e-file Providers of Individual Income Tax Returns (Rev. 12-2025)", url: "https://www.irs.gov/pub/irs-pdf/p1345.pdf" }
forms: []
related: ["3.4.1.a", "3.4.3.i", "3.1.2.b"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, typed scenarios, and glossary marks (comprehension layer)." }
---

<div class="plain-terms">
A math error notice is how the IRS fixes an obvious mistake on a tax return, like a wrong
entry or a missing ID number, without treating it as a real dispute. This page covers two
things. One is what counts as that kind of mistake. The other is how the same item ends up
entered or claimed twice on a return — the most common mistake a good review should catch
before filing. It matters to anyone who prepares returns for pay, and to any taxpayer who
gets one of these notices. The key thing it decides is which path a taxpayer is on. A math
error notice carries no right to fight it in Tax Court. The only way to push back is a quick
written request asking the IRS to cancel the extra tax, sent before a short deadline passes.
</div>

## The rule

A miscalculation is not a small version of a bad position; it is a different kind of problem with a
different procedure attached, and a practitioner who does not know the difference will give the wrong
advice about a notice.

**On the IRS's side.** Where the IRS notifies a taxpayer that, on account of a mathematical or
clerical error appearing on the return, an amount of tax in excess of that shown is due and has been
or will be assessed, that notice is **expressly not a notice of deficiency** (IRC § 6213(b)(1)). The
taxpayer has no right to petition the Tax Court on it, the ordinary bar on assessment does not apply,
and the IRS may assess and collect. The notice must set forth the error alleged and an explanation of
it. The taxpayer's remedy is a **request for abatement** within the statutory window under IRC
§ 6213(b)(2), which forces the Service back into ordinary deficiency procedures if it wishes to
persist — with the notice of deficiency and the Tax Court petition right that come with them.

Section 6213(g)(2) defines what counts. It reaches more than arithmetic: an error in addition,
subtraction, multiplication or division shown on the return; an incorrect use of an IRS table where
the incorrectness is apparent from other information on the return; an entry inconsistent with
another entry on the same or another schedule; an omission of information required to substantiate an
entry; a deduction or credit exceeding a statutory limit expressed as a specified monetary amount,
percentage, ratio or fraction where the items entering the limit appear on the return; and — the
categories that matter most in practice — omitted or incorrect taxpayer identification numbers where
the Code requires them.

**On the preparer's side.** Reg. § 1.6694-2(e) supplies the framework for whether an error attracts a
penalty. Its factors are set out in the figures table, and three of them speak directly to
miscalculation: the **nature** of the error, the **frequency** of errors, and the **materiality** of
errors. An isolated error — the regulation's own example is "an inadvertent mathematical or clerical
error" — generally qualifies for the reasonable cause and good faith exception. It does not qualify
where the isolated error is **so obvious, flagrant, or material that it should have been discovered
during a review** of the return, and the exception falls away entirely where there is a pattern of
errors on a return even though any one error in isolation would have qualified.

## Current figures

| Item | Content |
| --- | --- |
| Reasonable cause and good faith factors | {fig:preparer.reasonable_cause_factors} |
| What a normal office practice must be | {fig:preparer.office_practice_elements} |
| New taxpayer declaration required if data changes by more than | {fig:efile.new_declaration.income} |
| Or by more than | {fig:efile.new_declaration.tax} |

## How it works in practice

**Duplicates have three recurring sources, and each has its own check.**

1. **The same document entered twice.** A Form 1099 arrives by post and again in a client portal
   upload, or a spouse and a preparer each enter a brokerage statement. The check is a reconciliation
   against a document count, not a scan for unfamiliar entries — a duplicate looks entirely familiar.
2. **The same item claimed in two places.** A vehicle expense taken both on Schedule C and as an
   unreimbursed employee cost; a payroll deduction claimed on the business return and again
   personally; a state tax payment counted both as an itemised deduction and as a business expense.
   Publication 1345 flags the underlying discipline for EROs reviewing wage statements: identify
   payroll deductions to ensure the expense is necessary and **not claimed again** on the statement,
   and identify deductions to ensure an expense is claimed **once, for personal or business, not
   both**.
3. **The same person counted twice.** A dependent claimed on two returns, most often after a
   separation. This one the IRS catches by identification number, and it is squarely within the math
   error categories in § 6213(g)(2).

**Rolling forward last year's file is the most productive duplicate generator there is.** A carried
schedule that already contains an item, plus this year's document entered fresh, produces a duplicate
in a file that otherwise looks correct. Reg. § 1.6694-2(e)(4) names **a review of the prior year's
return** as an element of a normal office practice — its function is not only to catch what is
missing but to catch what was carried.

**Test the output against expectation.** The reviews that catch computational errors are comparative
rather than arithmetic: does the effective rate fit this income, does the refund track last year
adjusted for what actually changed, does a phase-out that should have bitten appear to have bitten,
does a total tie to the underlying schedules. A preparer who only checks that entries match source
documents will confirm a return that is internally consistent and substantively wrong.

**Correcting after the client has signed has a threshold.** Where a return has been rejected and the
correction changes the data by more than the amounts in the figures table, the taxpayer must sign a
**new declaration** before retransmission. Inside both thresholds, the correction can go out on the
existing signature. This is where a discovered miscalculation most often collides with process, and
the temptation to fix and resend without going back to the client is exactly what the thresholds
exist to control.

**Advise on a math error notice correctly.** The client's instinct is that a notice means an audit
and the Tax Court. It does not. There is no petition right on a math error notice, the assessment is
not blocked, and the route is the abatement request within the statutory window — which, if made, puts
the Service to deficiency procedures. Missing that window converts a correctable notice into an
assessed balance.

<div class="scenario" data-type="baseline">
<h3>The brokerage statement that arrived twice</h3>

Anneke Lindqvist-Baptiste uploads her documents to her preparer's portal in February and posts the
paper originals in March, worried the upload failed. Two people at the firm process the two batches.
The return reports her brokerage income twice.

The error is invisible on review of the entries — each one matches a real document. What catches it is
a count: the client has one brokerage account and the return carries two of its statements. The
office practice element that would have prevented it is the "methods for obtaining necessary
information from the taxpayer" that Reg. § 1.6694-2(e)(4) names — a single intake channel with a
document log, rather than two people working two batches. The error overstates income, so it costs
the client money rather than exposing her, which is why nobody would have found it in an examination
either.
</div>

<div class="scenario" data-type="fails">
<h3>The vehicle claimed twice</h3>

Emmerich Sørensen-Achebe runs a consultancy and also has employment income. His vehicle costs are
entered on Schedule C from his mileage log and again, by a different staff member working from his
employer's reimbursement summary, as a separate cost.

This is the "claimed once, for personal or business, not both" problem Publication 1345 directs
{gloss:ero}s to look for when reviewing wage statements and payroll deductions. On the preparer penalty side it is
not obviously an isolated inadvertent error: it is a duplicate deduction that a review comparing the
Schedule C to the employment records would have surfaced, which brings it close to the "should have
been discovered during a review" exclusion. The fix is structural — one person owns the expense
schedule for a client with both income types, and a cross-check against the other schedule is a
standing item.
</div>

<div class="scenario" data-type="procedural">
<h3>The math error notice the client wanted to appeal</h3>

Perpetua Vandermeer receives a notice stating that an entry on her return was inconsistent with
another entry and that additional tax has been assessed. She instructs her enrolled agent to appeal
to the Tax Court.

That route does not exist on this {gloss:math-error-notice}. It is expressly not a notice of
deficiency, there is no Tax Court petition right on it, and the assessment is not barred. What she can
do is request {gloss:abatement} within the statutory window, which obliges the Service to proceed by
deficiency procedures if it maintains the position — producing a real notice of deficiency, and with it
the petition right she thought she already had. The advice that matters is about the window, and it is
short enough that the conversation has to happen the week the notice arrives.
</div>

<div class="callout trap">
<strong>"Mathematical or clerical error" is broader than arithmetic.</strong> Section 6213(g)(2)
reaches inconsistent entries, omitted substantiating information, deductions exceeding a statutory
limit computable from the return, incorrect use of an IRS table, and missing or incorrect
identification numbers. Many notices clients describe as audits are math error notices.
</div>

<div class="callout trap">
<strong>A math error notice carries no Tax Court petition right.</strong> And no bar on assessment.
The remedy is abatement within the statutory window, which then forces deficiency procedures. Getting
this wrong loses the window.
</div>

<div class="callout trap">
<strong>An isolated error is not automatically excused.</strong> The reasonable cause exception is
withheld where the isolated error is so obvious, flagrant or material that it should have been
discovered during a review — and withheld entirely where there is a pattern, even if each error alone
would have qualified.
</div>

<div class="callout trap">
<strong>A checklist that is not followed is worse than none.</strong> The normal office practice
factor gives weight only where the practice indicates the error would occur rarely **and the practice
was followed** on this return. A documented procedure that was skipped establishes that the firm knew
what it should have done.
</div>

<div class="callout trap">
<strong>Duplicates that overstate income are still errors.</strong> They cost the client and no
examination will find them, because the IRS is not looking for tax the taxpayer overpaid. The only
control is the firm's own review.
</div>

## How this has changed

The math error authority has expanded steadily and quietly. It began as a narrow power to correct
arithmetic and now reaches, under § 6213(g)(2), inconsistent entries, omitted substantiating
information, limits computable from the face of the return, and — the category added and broadened
repeatedly since the 1990s — omitted or incorrect taxpayer identification numbers where the Code
requires one for a credit or a dependent. Each expansion moved a class of case out of deficiency
procedure and into a notice with no petition right, which is why understanding the abatement request
matters more now than it did.

On the preparer side, the six reasonable cause factors took their current form in the 2008 preparer
penalty regulations, which also supplied the description of a normal office practice that this topic
leans on. The description has aged well precisely because it is about process rather than
technology: checklists, methods for obtaining information from the taxpayer, review of the prior
year's return, and review procedures describe what a firm does, not what its software does.

## Exam focus

Know that a mathematical or clerical error notice is not a notice of deficiency, carries no Tax Court
petition right, and does not bar assessment, and that the taxpayer's remedy is a request for
abatement within the statutory window which puts the Service to deficiency procedures. Know that the
statutory definition reaches more than arithmetic — inconsistent entries, omitted substantiating
information, limits computable from the return, and identification number problems. On the preparer
side, know that an isolated inadvertent mathematical or clerical error generally qualifies for the
reasonable cause exception, but not where it should have been discovered on review, and not where
there is a pattern.

## Check yourself

**1. A taxpayer receives a notice assessing additional tax because of a clerical error on the return.
What may the taxpayer do?**

A. Petition the Tax Court within 90 days
B. Request abatement within the statutory window, which puts the Service to deficiency procedures
C. Nothing; the assessment is final on issuance
D. Request an Appeals conference as of right before assessment

*Answer: B. The notice is expressly not a notice of deficiency, so no petition right attaches to it.*

**2. Which is not within the statutory definition of a mathematical or clerical error?**

A. An entry inconsistent with another entry on the same schedule
B. An omission of information required to substantiate an entry
C. A disputed valuation of donated property
D. A deduction exceeding a statutory limit expressed as a specified monetary amount, where the items
   entering the limit appear on the return

*Answer: C. A valuation dispute is a substantive disagreement requiring deficiency procedures.*

**3. A preparer makes one inadvertent arithmetic error that is obvious on the face of the return. Does
the reasonable cause and good faith exception apply?**

A. Yes; isolated errors always qualify
B. Yes, provided the understatement is small
C. No, if the error is so obvious, flagrant or material that it should have been discovered during a
   review
D. No; the exception never applies to arithmetic

*Answer: C. An isolated arithmetic error generally qualifies for the exception, but that protection
withdraws where the error is obvious enough that a general review should have caught it.*

**4. What does the regulation describe as a normal office practice?**

A. Owning current tax preparation software
B. A system for promoting accuracy and consistency, generally including checklists, methods for
   obtaining information from the taxpayer, review of the prior year's return, and review procedures
C. Employing at least one credentialed practitioner
D. Retaining returns for three years

*Answer: B — and the factor helps only where the practice was actually followed on the return in
question.*

**5. A duplicate entry causes a client's income to be overstated. What is the practical consequence?**

A. The IRS will identify and correct it through a math error notice
B. The error is immaterial because no tax was understated
C. The client overpays, and only the firm's own review will find it
D. The reasonable cause exception makes it irrelevant

*Answer: C. Examination looks for understatements; nobody outside the firm is looking for this one.*
