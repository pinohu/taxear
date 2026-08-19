---
title: "Foreign account and asset reporting"
code: "1.1.1.o"
part: 1
domain: "Preliminary Work and Taxpayer Data"
section: "Preliminary work to prepare tax returns"
description: "Two separate regimes that look like one: the FBAR filed with FinCEN and Form 8938 attached to the return, with different thresholds, dates and filers."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: Statute, ref: "31 U.S.C. § 5314", title: "Records and reports on foreign financial agency transactions", url: "https://www.law.cornell.edu/uscode/text/31/5314" }
  - { type: Reg, ref: "31 C.F.R. § 1010.350", title: "Reports of foreign financial accounts", url: "https://www.law.cornell.edu/cfr/text/31/1010.350" }
  - { type: IRC, ref: "§ 6038D", title: "Information with respect to specified foreign financial assets" }
  - { type: Reg, ref: "§ 1.6038D-2", title: "Requirement to report specified foreign financial assets", url: "https://www.law.cornell.edu/cfr/text/26/1.6038D-2" }
  - { type: IRC, ref: "§ 7701(b)", title: "Definition of resident alien and nonresident alien" }
  - { type: Form, ref: "8938", title: "Statement of Specified Foreign Financial Assets" }
forms: []
related: ["1.1.1.c", "1.1.1.m", "1.1.1.d", "1.1.1.n"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Records that 31 C.F.R. § 1010.306(c) still states a 30 June FBAR due date superseded in 2015." }
---

## The rule

There are two foreign reporting regimes and they are not variants of each other. They rest on
different statutes, are filed in different places, use different thresholds, and reach different
people. A client can be caught by one, the other, both or neither, and the preparer's first job is to
run both tests rather than one.

**The FBAR — FinCEN Form 114.** Its authority is not the Internal Revenue Code at all. Under 31 U.S.C.
§ 5314 the Secretary of the Treasury requires a resident or citizen of the United States, or a person
in and doing business in the United States, to keep records and file reports when they make a
transaction or maintain a relation with a foreign financial agency. The implementing regulation, 31
C.F.R. § 1010.350(a), requires each **United States person** having a **financial interest in, or
signature or other authority over**, a bank, securities or other financial account in a foreign
country to report that relationship for each year in which it exists.

"United States person" is defined for this purpose in § 1010.350(b) and includes a citizen, a resident
— being a resident alien under IRC § 7701(b) but using the Bank Secrecy Act's own definition of
"United States" — and an entity created or organised under the laws of the United States, a State, the
District of Columbia, the Territories and Insular Possessions, or the Indian Tribes.

The filing trigger is {fig:fbar.threshold}. The report is due {fig:fbar.due_date}, is filed
electronically through FinCEN's BSA E-Filing System, and — this is the point most often missed — **is
not filed with the federal tax return**.

**Form 8938 — specified foreign financial assets.** This one is in the Code. An individual holding any
interest in a **specified foreign financial asset** must attach the required information to their
income tax return where the aggregate value of all such assets exceeds the threshold
(IRC § 6038D(a)). Section 6038D(b) defines the asset class: any financial account maintained by a foreign
financial institution, and — where not held in an account maintained by a financial institution — any
stock or security issued by a non-United States person, any financial instrument or contract held for
investment with a non-United States issuer or counterparty, and any interest in a foreign entity.

The thresholds are four, not one, and Reg. § 1.6038D-2(a) sets each as a pair of tests measured on
different dates.

## Current figures

| Regime | Threshold |
| --- | --- |
| FBAR | {fig:fbar.threshold} |
| FBAR due date | {fig:fbar.due_date} |
| Form 8938 — unmarried, living in the United States | {fig:f8938.threshold_single} |
| Form 8938 — married filing jointly, living in the United States | {fig:f8938.threshold_joint} |
| Form 8938 — living abroad | {fig:f8938.threshold_abroad} |
| Form 8938 — married filing jointly, living abroad | {fig:f8938.threshold_joint_abroad} |
| Section 6038D penalty | {fig:f8938.penalty} |
| Accounts the IRS lists as not FBAR-reportable | {fig:fbar.exclusions} |

## How it works in practice

**Signature authority alone triggers the FBAR.** A client who has authority over an employer's foreign
account, or over a relative's, has an FBAR obligation even with no beneficial interest and no income.
Form 8938 has no equivalent — it reaches assets in which the individual holds an **interest**. This is
the single largest practical difference between the two and it catches corporate officers, treasurers
of foreign charities and adult children on a parent's account.

**The two thresholds are measured differently.** The FBAR tests aggregate value **at any time during
the year**, so a single day above the line is enough and an account emptied in December still counts.
Form 8938 tests two things — value on the **last day** of the year and the highest value **at any time**
during it — and either can trigger the filing. Running one test and assuming it answers both is the
usual error.

**Whether the account produced income is irrelevant.** The IRS states it directly for the FBAR: whether
the account produced taxable income has no effect on whether it is a foreign financial account for FBAR
purposes. A dormant account over the threshold is reportable.

**The exclusions are worth knowing because clients volunteer them as reasons not to file.** The IRS
lists the categories in the figures table — correspondent and Nostro accounts, government and
international-institution accounts, accounts on a United States military banking facility, and
accounts held inside an IRA or a retirement plan of which the person is owner, beneficiary or
participant. That last pair is the one clients most often have.

**Joint spousal accounts have a specific exception.** No FBAR is required from a spouse where all their
foreign accounts are jointly owned with the other spouse, the non-filing spouse has completed and
signed FinCEN Form 114a authorising the filing, and the filing spouse reports the jointly owned
accounts on a timely filed signed FBAR. The IRS notes that income tax filing status has no bearing on
this exception.

**Both regimes can apply to the same account.** There is no coordination that lets one filing satisfy
the other. A client with a single foreign brokerage account worth 120,000 dollars files an FBAR with
FinCEN **and** attaches Form 8938 to the return, reporting the same asset twice to two agencies.

**The § 6038D penalty escalates on notice.** It begins at the base amount, and where the failure
continues more than ninety days after the Secretary mails notice, it accrues per thirty-day period up
to the stated ceiling. The FBAR penalty regime is separate, sits in Title 31, and is materially harsher
for wilful failures.

<div class="scenario">
<h3>Signature authority and nothing else</h3>

Thaddeus Okonjo-Vasquez is the treasurer of a small charity that maintains an account in Ireland. He
has signing authority, no beneficial interest, and receives nothing from it. The balance runs around
90,000 euros. He also has no foreign assets of his own.

He has an FBAR obligation and no Form 8938 obligation. Regulation § 1010.350(a) reaches a United States
person with **signature or other authority over** a foreign financial account, whether or not they have
a financial interest in it. Section 6038D reaches assets in which the individual holds an *interest*,
and he holds none. So he files FinCEN Form 114 and attaches nothing to his return. Running only the
Form 8938 test would have produced a confident and wrong conclusion that he had no obligation at all.
</div>

<div class="scenario">
<h3>The account emptied in November</h3>

Rosalind Fitzwilliam-Adeyemi held about 46,000 dollars in a foreign account, transferred the whole
balance home in November, and ended the year with a zero balance. She has no other foreign assets.

She must file the FBAR: the test is aggregate value **at any time during the calendar year**, and the
account exceeded the threshold for most of it. She need not file Form 8938: the last-day value is zero
and the highest value during the year, 46,000 dollars, is below the any-time threshold for an
unmarried individual living in the United States. This is the clean case where one regime applies and
the other does not, and it is only visible if both tests are run against the year's high-water mark as
well as the closing balance.
</div>

<div class="scenario">
<h3>The regulation that states the wrong date</h3>

A practitioner researching the FBAR deadline reads 31 C.F.R. § 1010.306(c) and finds that reports
required by § 1010.350 "shall be filed with FinCEN on or before June 30 of each calendar year." He
diarises 30 June.

The regulation has not been updated. Congress changed the FBAR due date in 2015, and the IRS states
the current position plainly: the report is due 15 April following the calendar year reported, with an
automatic extension to 15 October that need not be requested. The June date in the regulation is
superseded. In this instance the automatic extension means a 30 June filing would still land inside
the extended period — but that is luck rather than compliance, and the practitioner who relies on the
regulation for the *deadline* will be wrong about it in every conversation with a client. Confirm dates
against the IRS and FinCEN pages, not against Title 31.
</div>

<div class="callout trap">
<strong>The FBAR is not a tax return and is not filed with one.</strong> It goes to FinCEN through the
BSA E-Filing System, on its own timetable, under Title 31. A client who assumes their preparer "handled
the foreign stuff" with the return may have nothing filed at all.
</div>

<div class="callout trap">
<strong>Signature authority triggers the FBAR but not Form 8938.</strong> The FBAR reaches authority
over an account; § 6038D reaches an interest in an asset. Officers, trustees and family signatories are
caught by one and not the other.
</div>

<div class="callout trap">
<strong>Form 8938 has two tests, and either one triggers it.</strong> Value on the last day of the year
**or** the highest value at any time during it. Checking only the year-end balance misses the client
who sold in December.
</div>

<div class="callout trap">
<strong>Retirement accounts are outside the FBAR list.</strong> Accounts held in an IRA or a retirement
plan of which the person is owner, beneficiary or participant are among the categories the IRS lists as
not reportable. Clients often mention these as their foreign accounts, and they are the ones that do
not count.
</div>

<div class="callout trap">
<strong>Income is irrelevant to both.</strong> A dormant, non-income-producing account over the
threshold is reportable. The IRS says so expressly for the FBAR, and § 6038D is drafted around value
rather than income.
</div>

## How this has changed

The FBAR is the older regime by decades — it descends from the Bank Secrecy Act of 1970 — and Form 8938
arrived with the Foreign Account Tax Compliance Act in the Hiring Incentives to Restore Employment Act
of 2010, which added IRC § 6038D. That is why the two overlap without coordinating: they were built
forty years apart for different purposes, one for financial-crime enforcement and one for tax
compliance.

Two changes matter for current practice. The **due date moved** in 2015: the FBAR was historically due
30 June with no extension available, and legislation aligned it with the income tax return at 15 April
and added an automatic six-month extension. **31 C.F.R. § 1010.306(c) has not been amended to match**
and still states 30 June — a stale regulation on a point where the date is the whole question. The
authoritative statement of the current deadline is on the IRS and FinCEN pages.

The regulation carries other artefacts of its age: § 1010.350(a) still names the form as "TD-F 90-22.1,
or any successor form," which has been FinCEN Form 114 since electronic filing became mandatory. This
is the same pattern seen elsewhere in the older regulations — Reg. § 301.7701(b)-1 still naming the
INS, Reg. § 601.106 still naming district directors. Read past the obsolete designations; the
substantive rules are live.

## Exam focus

Know that these are two separate regimes and be able to distinguish them on four axes: authority
(Title 31 versus the Internal Revenue Code), where filed (FinCEN versus attached to the return),
threshold, and who is caught. Know that **signature authority alone** triggers the FBAR. Know the FBAR
threshold and that it is measured at any time during the year. Know that Form 8938 has four threshold
pairs varying by filing status and residence abroad, and that each pair has a last-day test and an
any-time test. Know the current FBAR due date and its automatic extension.

## Check yourself

**1. A United States person has signature authority over a foreign account belonging to their employer,
with no financial interest in it. What must they file?**

A. Neither the FBAR nor Form 8938
B. The FBAR only
C. Form 8938 only
D. Both

*Answer: B. The FBAR reaches signature or other authority over an account; § 6038D reaches an interest
in an asset.*

**2. When is the FBAR due?**

A. 30 June, with no extension available
B. 15 April, with an automatic extension to 15 October that need not be requested
C. With the income tax return, including any extension
D. 31 December of the year reported

*Answer: B. The regulation at 31 C.F.R. § 1010.306(c) still states 30 June and is superseded.*

**3. An unmarried taxpayer living in the United States held foreign assets worth $72,000 in July and
$8,000 on 31 December. Is Form 8938 required?**

A. No; the last-day value is below the threshold
B. Yes; the any-time value exceeds $75,000
C. No; the any-time value is below $75,000 and the last-day value is below $50,000
D. Yes; any foreign asset must be reported

*Answer: C. Both tests are below their thresholds — $72,000 does not exceed $75,000, and $8,000 does
not exceed $50,000.*

**4. Which is not reportable on an FBAR?**

A. A foreign brokerage account producing no income
B. A foreign account emptied before year end
C. An account held in an IRA of which the taxpayer is the owner
D. A foreign account over which the taxpayer has only signature authority

*Answer: C. Accounts held in an IRA or a retirement plan of which the person is owner, beneficiary or
participant are among the categories the IRS lists as not reportable.*

**5. Where is the FBAR filed?**

A. Attached to the federal income tax return
B. With the IRS service centre for the taxpayer's district
C. Electronically with FinCEN through the BSA E-Filing System
D. With the Department of State

*Answer: C. It is not filed with the tax return.*
