---
title: "Length of time to retain returns and records"
code: "3.4.2.a"
part: 3
domain: "Completion of the Filing Process"
section: "Record maintenance"
description: "Retention runs with the limitations period, so the answer is never one number. The six taxpayer periods, the property rule, and the separate clocks a preparer carries."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "I. Ohu"
authorities:
  - { type: IRC, ref: "§ 6001", title: "Notice or regulations requiring records, statements, and special returns" }
  - { type: Reg, ref: "§ 1.6001-1", title: "Records", url: "https://www.law.cornell.edu/cfr/text/26/1.6001-1" }
  - { type: IRC, ref: "§ 6501(e)", title: "Substantial omission of items" }
  - { type: IRC, ref: "§ 6511", title: "Limitations on credit or refund" }
  - { type: IRC, ref: "§ 6107(b)", title: "Copy or list to be retained by tax return preparer" }
  - { type: IRC, ref: "§ 6038D", title: "Information with respect to foreign financial assets" }
  - { type: Pub, ref: "583", title: "Starting a Business and Keeping Records" }
forms: []
related: ["3.4.2.b", "3.3.1.m", "3.1.4.e", "3.2.6.a"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft." }
---

## The rule

There is no single retention period, and answering "three years" to a client is right about as often
as it is wrong. The governing principle is that records supporting an item of income, deduction or
credit are kept **until the period of limitations for that return runs out** — so retention is
derived from the limitations period rather than fixed independently of it. The IRS states the
principle that way, and the periods below are its application.

Underneath sits the record-keeping obligation itself. Every person liable for tax must keep such
records as the Secretary prescribes (IRC § 6001), and the regulation requires (Reg. § 1.6001-1(a))
{fig:records.6001_standard}. Reg. § 1.6001-1(e) then states the retention standard in terms that are
broader than any numbered period: records must be {fig:records.retention_standard}.

## Current figures

| Situation | Keep records for |
| --- | --- |
| Ordinary case, none of the below applying | {fig:records.keep.default} |
| Claim for credit or refund filed after the return | {fig:records.keep.claim} |
| Claim for a loss from worthless securities or a bad debt | {fig:records.keep.worthless} |
| Unreported income above the substantial omission threshold | {fig:records.keep.omission} |
| No return filed, or a fraudulent return filed | {fig:records.keep.indefinite} |
| Employment tax records | {fig:records.keep.employment} |
| Preparer's copy or list of returns prepared | {fig:preparer.records_retention_6107} |

Unless otherwise stated the years run from the date the return was filed, and a return filed before
the due date is treated as filed on the due date.

## How it works in practice

**The six-year period tracks IRC § 6501(e).** Records are kept for six years where income that should
have been reported was omitted and the omission exceeds twenty-five per cent of the gross income
shown on the return. That is the retention counterpart of the substantial omission rule, under which
the tax may be assessed within six years after the return was filed. Section 6501(e)(1)(A)(ii) adds a
second trigger for omissions above a stated amount attributable to assets reportable under IRC
§ 6038D — the foreign financial asset reporting provision — which the retention guidance does not
separately call out but which a client with foreign assets should be told about.

**"Indefinitely" means what it says, and it has two triggers.** No return filed, and a fraudulent
return filed. In both cases the assessment period never begins to run, so no retention period can
expire. This is the answer to the exam question about a record with no retention limit.

**Employment tax records are on their own clock.** At least four years after the date the tax becomes
due or is paid, whichever is later — a rule that does not correspond to any of the income tax
periods and is easy to overlook in a practice that files both.

**Property records outlive the year they were acquired in.** Records relating to property are kept
until the limitations period expires **for the year in which the property is disposed of**, because
they are needed to figure depreciation, amortisation or depletion and to compute gain or loss on
disposition. Where property was received in a nontaxable exchange, the basis carries over, so the
records on the **old** property must be kept alongside those on the new one until the limitations
period expires for the year the new property is disposed of. A client who bought a building in 2004,
exchanged it in 2016 and sells in 2031 needs the 2004 documents in 2031.

**A refund claim can extend the period past three years.** Where a claim for credit or refund is
filed after the return, records are kept for three years from the date the original return was filed
**or two years from the date the tax was paid, whichever is later** — the retention mirror of the
IRC § 6511 claim period. A client who paid an assessed balance late has a longer retention obligation
than the filing date alone would suggest.

**Non-tax reasons often govern.** The IRS's own guidance says that when records are no longer needed
for tax purposes they should not be discarded without checking whether they must be kept longer for
other purposes — an insurance company or a creditor may require it. Advising a client to destroy
records at the end of a tax period without that check is advice about tax that reads as advice about
records.

**The practitioner's own obligations are separate and stack.** A tax return preparer must retain a
completed copy of each return or claim, or a list of the taxpayer names and identifying numbers, for
{fig:preparer.records_retention_6107}. An ERO must retain Forms 8878 and 8879 for
{fig:efile.sig_auth_retention}. Neither period is derived from the client's limitations period, and
satisfying one does not satisfy the other.

<div class="scenario">
<h3>The like-kind exchange from a previous decade</h3>

Théophile Nakamura-Brennan sells a commercial building. His accountant asks for the acquisition
records and is told that everything before 2018 was shredded under a "seven-year rule" the firm
adopted years ago.

The building came into his hands through a nontaxable exchange in 2015, and the basis carried over
from a property acquired in 2003. Records relating to property are kept until the limitations period
expires for the year in which the property is disposed of, and where basis carried over from
relinquished property, the records on that old property must be kept too. Without them the basis has
to be reconstructed from whatever third-party evidence survives — county records, the closing file,
the exchange intermediary — and the gain is computed under a cloud. A blanket destruction schedule
expressed in years, applied to a file containing carried-over basis, is the mechanism that produced
this.
</div>

<div class="scenario">
<h3>The omission that changed the answer</h3>

Ludovica Achterberg-Sørensen's 2021 return shows gross income of about 180,000 dollars. In 2026 she
discovers that a brokerage account producing roughly 62,000 dollars of income was never reported. She
asks whether the year is "closed."

It is not. The omission exceeds twenty-five per cent of the gross income shown on the return, so the
assessment period is six years rather than three, and the records for that year should be retained
accordingly. The retention question and the exposure question have the same answer because they come
from the same statute. The right advice covers both: keep everything for that year, and address the
omission — a qualified amended return or other corrective route — rather than waiting out a period
that has not run.
</div>

<div class="scenario">
<h3>The year with no return</h3>

A new client has filed nothing for one year eleven years ago and assumes it is beyond reach.

Where no return is filed there is no assessment period, so nothing expires and records should be
kept indefinitely. The same is true of a fraudulent return. This is the practical reason the answer
to "how long must I keep records" cannot be given without asking what happened in the year — the
periods are consequences of the facts, not a schedule that applies regardless of them. Filing the
missing return is what starts a clock that can eventually run.
</div>

<div class="callout trap">
<strong>Retention is derived, not fixed.</strong> The question is always "what is the limitations
period for this return," and only then "so how long are the records kept." A firm policy stated as a
single number will be wrong for every omission year, every property file and every unfiled year.
</div>

<div class="callout trap">
<strong>Property records run to disposition, not to acquisition plus N.</strong> And where basis
carried over from a nontaxable exchange, the records on the relinquished property run to the
disposition of the replacement.
</div>

<div class="callout trap">
<strong>Employment tax records are four years from due or paid, whichever is later.</strong> Not
three, and not tied to the income tax periods. A practice filing both must run two schedules.
</div>

<div class="callout trap">
<strong>Preparer retention is not client retention.</strong> The preparer's three-year obligation
under IRC § 6107(b) runs from the close of the return period and exists regardless of what the client
does. The ERO's signature authorization retention is a third clock again. Do not collapse them.
</div>

<div class="callout trap">
<strong>Reg. § 1.6001-1(e) is broader than the tables.</strong> Records must be kept so long as their
contents may become material in the administration of any internal revenue law. Where a return item
has continuing effect — a carryover, a basis, an election — materiality outlasts the numbered period.
</div>

## How this has changed

The framework is old and stable: IRC § 6001 and Reg. § 1.6001-1 have carried the record-keeping
obligation and the materiality standard for decades, and the retention periods have tracked the
limitations periods throughout. The one substantive addition of recent decades is the second
substantial omission trigger in IRC § 6501(e)(1)(A)(ii), added by the Hiring Incentives to Restore
Employment Act in 2010, which extends the assessment period to six years for omissions above a stated
amount attributable to assets reportable under IRC § 6038D — regardless of the twenty-five per cent
test. A client with foreign financial assets can therefore be in a six-year period on a modest
omission that would not come close to the percentage threshold.

What has changed more visibly is the medium. Electronic records satisfy the obligation, and a
practice that keeps a client's file in a document management system is compliant — but the
materiality standard in Reg. § 1.6001-1(e) requires the records to remain **available for
inspection**, which puts a migration and readability obligation on the firm that a filing cabinet
never had.

## Exam focus

Learn the six taxpayer periods as a set: three years ordinarily; three years from filing or two from
payment, whichever is later, for a refund claim; seven years for worthless securities or a bad debt;
six years for an omission above twenty-five per cent of gross income shown; indefinitely for no
return or a fraudulent return; four years for employment tax records. The twenty-five per cent
threshold and the indefinite period for fraudulent or unfiled returns are the two most commonly
tested. Keep the preparer's three-year obligation under IRC § 6107(b) separate from all of these.

## Check yourself

**1. The retention period for a return increases from three years to six where omitted income exceeds
what proportion of the gross income shown on the return?**

A. 10 per cent
B. 15 per cent
C. 25 per cent
D. 40 per cent

*Answer: C. It mirrors the substantial omission rule that extends the assessment period to six years.*

**2. Which of these has no retention limit?**

A. An ordinary tax return
B. A fraudulent return
C. Employment and payroll tax records
D. None of these

*Answer: B. Records should also be kept indefinitely where no return was filed; in both cases no
assessment period ever begins to run.*

**3. How long must employment tax records be kept?**

A. Three years from the date the return was filed
B. At least four years after the date the tax becomes due or is paid, whichever is later
C. Six years from the end of the calendar year
D. Indefinitely

*Answer: B.*

**4. A taxpayer received a building in a nontaxable exchange and later sells it. Which records must be
retained until the limitations period for the year of sale expires?**

A. Records on the replacement property only
B. Records on the relinquished property only
C. Records on both the relinquished and the replacement property
D. Neither, once three years have passed since the exchange

*Answer: C. Basis carried over, so the old property's records are needed to compute gain or loss.*

**5. A taxpayer files a claim for refund two years after filing the original return and one year after
paying an assessed balance. How long should the supporting records be kept?**

A. Three years from the date the original return was filed
B. Two years from the date the tax was paid
C. The later of three years from filing the original return or two years from paying the tax
D. Seven years from the date of the claim

*Answer: C. The retention rule mirrors the claim period.*
