---
title: "Taxpayer biographical information"
code: "1.1.1.b"
part: 1
domain: "Preliminary Work and Taxpayer Data"
section: "Preliminary work to prepare tax returns"
description: "The intake facts that decide the return: identifying numbers the Code actually requires, the IP PIN, and what a preparer should verify but is not obliged to collect."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6109(a)", title: "Supplying of identifying numbers" }
  - { type: IRC, ref: "§ 151(e)", title: "Identifying information required" }
  - { type: IRC, ref: "§ 24(h)(7)", title: "Child tax credit — social security number required" }
  - { type: IRC, ref: "§ 32(m)", title: "Earned income credit — identification numbers" }
  - { type: Pub, ref: "1345", title: "Handbook for Authorized IRS e-file Providers of Individual Income Tax Returns (Rev. 12-2025)", url: "https://www.irs.gov/pub/irs-pdf/p1345.pdf" }
forms: []
related: ["1.1.1.c", "1.1.1.i", "1.1.1.e"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Records that Pub. L. 119-21 § 70104(b) rewrote IRC § 24(h)(7) to require the taxpayer's own social security number in addition to the child's." }
---

## The rule

Biographical intake is not clerical work. Each fact collected decides something: date of birth drives
the age tests and the additional standard deduction, marital status on the last day of the year
decides filing status, residency and citizenship decide whether worldwide income is reported, and the
identifying numbers decide whether credits are allowable at all.

**Identifying numbers are a statutory requirement.** IRC § 6109(a) requires a person making a return
to include the identifying number prescribed for securing proper identification, to furnish their
number to a person who must show it on another return, and to request and include the number of
another person about whom they are making a return. Section 151(e) adds that
{fig:exemption.tin_required}.

**Two credits impose stricter number rules than § 6109 does**, and the difference is where returns
are actually lost:

- **Child tax credit.** No credit is allowed with respect to a qualifying child unless the return
  includes {fig:ctc.ssn_required} (IRC § 24(h)(7)(A)). The definition in subparagraph (B) narrows it
  further: the number must have been issued by the Social Security Administration to a citizen, or
  under the provisions relating to lawful admission for employment.
- **Earned income credit.** Under IRC § 32(m) the identification number must be
  {fig:eitc.tin_required}. Two conditions are doing work there: a number issued **solely for non-work
  purposes** does not count, and the number must exist **on or before the due date** — obtaining it
  later does not retroactively qualify the year.

An ITIN satisfies neither of these. It is a valid identifying number for filing under § 6109 and for
claiming a dependent, but it does not support the child tax credit or the earned income credit.

## Current figures

| Item | Requirement |
| --- | --- |
| Exemption / dependent claim | {fig:exemption.tin_required} |
| Child tax credit | {fig:ctc.ssn_required} |
| Earned income credit | {fig:eitc.tin_required} |
| Identity protection PIN validity | {fig:idtheft.ippin_validity} |
| IP PIN — forms it is entered on | {fig:idtheft.ippin_forms} |
| IP PIN — online availability | {fig:idtheft.ippin_online_window} |

## How it works in practice

**Collect the facts that change the return, and know which ones the Code compels.** The minimum a
return itself requires is the taxpayer's legal name, identifying number, filing status and address,
together with the name and identifying number of every dependent claimed. Everything else on a
practitioner's intake sheet — date of birth, marital status, residency, citizenship — is collected
because it determines the answers, not because the return has a box demanding it.

**A social security card is not required; the number is.** This distinction is worth being precise
about because it is easy to overstate in either direction. Nothing in § 6109 or § 151(e) requires the
taxpayer to produce the physical card, and the number may be supplied verbally or in writing. What is
required is that the correct number appear on the return.

**But asking to see documents is good practice, and a separate rule.** Publication 1345 directs an ERO
to confirm identities and taxpayer identification numbers, and says an ERO **should** ask taxpayers
not known to them to provide **two forms of identification** — photo identification preferred —
showing the name and a current or recent address. That is guidance addressed to the *preparer* as a
fraud safeguard, and it is a "should" rather than a "must". It is not a condition of filing, and
describing it as one confuses a professional standard with a statutory requirement.

**Transcribe the number exactly as the source document shows it.** Publication 1345 warns that
incorrect numbers, the same number used on more than one return, and the wrong name associated with a
number are among the most common causes of rejected returns. The **Name Control** — the first four
significant letters of the surname as the Social Security Administration records it — causes a large
share of them, most often for a newly married taxpayer whose SSA record has not been updated.

**The identity protection PIN belongs in the intake file.** An IP PIN is a six-digit number known only
to the taxpayer and the IRS. It is {fig:idtheft.ippin_validity}. It is used on
{fig:idtheft.ippin_forms}, must be used on **any** federal return filed during the year including
prior year returns, and is {fig:idtheft.ippin_online_window}. A missing or incorrect IP PIN rejects an
e-filed return and delays a paper one. The programme is now open to anyone who can verify their
identity, as a protective step rather than a remedy — which makes recommending it a reasonable part of
intake for any client.

**Date of birth does more than the age tests.** It drives the additional standard deduction for the
aged, the new deduction for seniors, the retirement distribution rules, and the qualifying child age
test. A birthday falling on 1 January is the classic trap: a person is treated as reaching a given age
on the day before their birthday, so someone born on 1 January is 65 for a year in which their
birthday falls on the first day of the following one.

<div class="scenario">
<h3>The card that was never produced</h3>

A long-standing client telephones her figures through and gives her new grandson's social security
number verbally so that he can be claimed as a dependent. The preparer hesitates, believing the card
must be seen.

The Code requires the number on the return, not the card in the file. Section 6109 obliges the
taxpayer to furnish the number and the preparer to include it; § 151(e) denies the claim if it is
absent. Nothing requires the physical document. What Publication 1345 recommends — sight of the card
or similar documents, and two forms of identification for a taxpayer not known to the ERO — is a fraud
safeguard aimed at getting the number *right*, and it earns its place for that reason rather than as a
legal condition. The practical answer is to ask for a copy because transcription errors reject
returns, while being clear that the requirement is accuracy, not documentation.
</div>

<div class="scenario">
<h3>The ITIN that could not carry the credit</h3>

Esperanza Villanueva-Achebe files with an ITIN and claims her two children, who each hold an ITIN as
well. She expects the child tax credit.

The dependency claims are fine — an ITIN is a valid identifying number for that purpose. The credit is
not. Section 24(h)(7) requires the **social security number** of the qualifying child, and since the
2025 amendment it also requires the taxpayer's own social security number, or that of at least one
spouse on a joint return. ITINs satisfy neither leg. The same result follows for the earned income
credit under § 32(m). This has to be explained at intake, because the alternative is a client who
budgets around a refund that will not arrive.
</div>

<div class="scenario">
<h3>The number that arrived in June</h3>

Kwabena Lindqvist-Osei's daughter's social security number was applied for late and issued in June,
after the April due date. He filed an extension and now files in September claiming the earned income
credit.

The credit is unavailable for that year. Section 32(m) requires the number to have been issued **on or
before the due date for filing the return** for the taxable year, and an extension does not move that
date for this purpose. The number is valid going forward, so the following year is unaffected. Where a
practitioner learns of a pending application before the due date, the advice is about the application
timeline rather than about the return — which is why this is an intake question, not a filing-season
one.
</div>

<div class="callout trap">
<strong>The number is required; the card is not.</strong> Sight of documents is a preparer safeguard
recommended by Publication 1345, not a statutory condition of filing. Do not describe it as a filing
requirement — and do not conclude from that it is unimportant, because transcription errors are among
the leading causes of rejected returns.
</div>

<div class="callout trap">
<strong>An ITIN files a return but does not carry the credits.</strong> Valid for filing and for
claiming a dependent; insufficient for the child tax credit under § 24(h)(7) or the earned income
credit under § 32(m).
</div>

<div class="callout trap">
<strong>The child tax credit now needs the taxpayer's number too.</strong> Section 24(h)(7) formerly
required only the qualifying child's social security number. As rewritten it also requires the
taxpayer's, or at least one spouse's on a joint return. Material describing the child's number as the
only requirement predates the 2025 amendment.
</div>

<div class="callout trap">
<strong>An earned income credit number must predate the due date.</strong> Section 32(m) fixes the
deadline at the due date for filing the return for the taxable year. Obtaining the number afterwards
does not rescue the year, and an extension does not help.
</div>

<div class="callout trap">
<strong>The IP PIN goes on paper returns as well.</strong> It is not an e-file artefact. A paper
return filed without the correct IP PIN is delayed until the IRS can verify it, which for a refund
client means months.
</div>

## How this has changed

Public Law 119-21, enacted 4 July 2025, made three changes to the child tax credit that bear on intake,
and the identifying-number change is the one that belongs here. Section 70104(b) **amended § 24(h)(7)
generally**; before the amendment the paragraph allowed the credit if the taxpayer included the social
security number of the qualifying child, and it now requires the taxpayer's own number — or at least
one spouse's on a joint return — **in addition**. A preparer working from a remembered rule will
collect one number where two are needed.

The same Act made the § 24(h) regime permanent by striking the 1 January 2026 sunset, and raised the
credit. Those figures belong to the child tax credit topic rather than this one, but they are recorded
here because they were verified in the same reading: the maximum credit for 2026 is 2,200 dollars and
the refundable portion is 1,700 dollars, per Rev. Proc. 2025-32 § 3.05.

On the identity side the direction has been steadily toward verification. The IP PIN began as a
remedial measure for confirmed identity theft victims and is now available to anyone who can verify
their identity; the ERO identity-checking guidance in Publication 1345 has expanded with each revision;
and from 2024 returns the IRS began accepting an e-filed return claiming an already-claimed dependent
where the primary taxpayer includes a valid IP PIN.

## Exam focus

Know that the identifying **number** is required on the return and the physical card is not, and that
the two-forms-of-identification guidance is a preparer recommendation from Publication 1345 rather than
a filing requirement. Know that an ITIN supports filing and dependency claims but not the child tax
credit or the earned income credit. Know that the earned income credit number must be issued on or
before the due date. Expect date of birth, marital status and residency to appear as facts that
determine some other answer rather than as topics in themselves.

## Check yourself

**1. Which is not a minimum requirement for filing a return?**

A. Providing a social security card
B. The taxpayer's date of birth as an intake fact
C. The identifying number of each dependent claimed
D. The taxpayer's filing status

*Answer: A. The number must appear on the return; the physical card need not be produced and may be
supplied verbally or in writing.*

**2. A taxpayer and both children hold ITINs. Which is available?**

A. The child tax credit
B. The earned income credit
C. A dependency claim for each child
D. All of these

*Answer: C. An ITIN is a valid identifying number for filing and for claiming a dependent, but
§ 24(h)(7) and § 32(m) each require a social security number.*

**3. What does IRC § 24(h)(7) require on the return as rewritten?**

A. The qualifying child's social security number only
B. The taxpayer's social security number only
C. The taxpayer's social security number — or one spouse's on a joint return — and the child's
D. An ITIN for either the taxpayer or the child

*Answer: C.*

**4. A qualifying child's social security number is issued two months after the return's due date. What
is the effect on the earned income credit for that year?**

A. The credit is allowed once the number is obtained
B. The credit is allowed if an extension was filed
C. The credit is not allowed for that taxable year
D. The credit is allowed at half the amount

*Answer: C. Section 32(m) requires the number to be issued on or before the due date for filing the
return for the taxable year.*

**5. Publication 1345 says an ERO should ask a taxpayer not known to them for two forms of
identification. What is the status of that guidance?**

A. A statutory condition of filing a return
B. A preparer safeguard against identity theft refund fraud
C. A requirement only for paper returns
D. A condition of claiming any refundable credit

*Answer: B. It is addressed to the provider as a fraud safeguard, not to the taxpayer as a filing
requirement.*
