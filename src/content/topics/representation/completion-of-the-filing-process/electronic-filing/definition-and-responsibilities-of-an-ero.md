---
title: "Definition and responsibilities of an ERO"
code: "3.4.3.d"
part: 3
domain: "Completion of the Filing Process"
section: "Electronic filing"
description: "The Electronic Return Originator begins the electronic submission of a return. What the role obliges: origination, identity checks, copies, acknowledgments, records."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: Pub, ref: "1345", title: "Handbook for Authorized IRS e-file Providers of Individual Income Tax Returns (Rev. 12-2025)", url: "https://www.irs.gov/pub/irs-pdf/p1345.pdf" }
  - { type: Pub, ref: "3112", title: "IRS e-file Application and Participation (Rev. 11-2025)", url: "https://www.irs.gov/pub/irs-pdf/p3112.pdf" }
  - { type: IRC, ref: "§ 6695(g)", title: "Failure to be diligent in determining eligibility for certain tax benefits" }
  - { type: Form, ref: "8453", title: "U.S. Individual Income Tax Transmittal for an IRS e-file Return" }
forms: ["8453"]
related: ["3.4.3.a", "3.4.3.b", "3.1.4.c", "3.4.3.i"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft against Publications 1345 (Rev. 12-2025) and 3112 (Rev. 11-2025)." }
---

## The rule

An **Electronic Return Originator** is the Authorized IRS e-file Provider that *begins* the process
of the electronic submission of a return to the IRS. Publication 3112 adds the sentence that
explains why the role carries the obligations it does: the ERO is usually the first point of contact
for most taxpayers filing a return using IRS e-file.

Origination begins only after the taxpayer authorises the filing of the return via IRS e-file, and
an ERO may begin the electronic submission of **only** returns that the ERO either prepared or
collected from a taxpayer or another provider. Having originated, the ERO does one of three things:
sends the return to a transmitter, transmits it directly to the IRS if it also holds that provider
option, or provides it to an intermediate service provider for processing before transmission.

Publication 3112 lists the ERO's core responsibilities:

- Beginning the electronic submission of returns **timely**.
- Submitting any required supporting paper documents to the IRS.
- Providing copies to taxpayers.
- Retaining records and making them available to the IRS.
- Accepting returns only from taxpayers and providers.
- Reporting income derived from electronic filing activities properly — and specifically, the firm
  or sole proprietor listed on the e-file application must be the entity that reports that income.

Two of these are worth dwelling on. "Accepting returns only from taxpayers and providers" closes the
loop that would otherwise let an unauthorised intermediary route work through an authorised EFIN.
And the requirement that the entity on the application be the entity reporting the income is how the
IRS keeps the application matched to the business actually operating.

**Being an ERO and being a return preparer are different hats.** A practice usually wears both, and
the obligations stack rather than merge. Where the ERO is also a paid preparer, due diligence is
required on returns claiming head of household filing status or certain credits including the earned
income tax credit (IRC § 6695(g)), with all required worksheets completed and all record keeping
requirements met.

## Current figures

| Item | Value |
| --- | --- |
| Deadline to inform the taxpayer of a rejection the ERO cannot fix | {fig:efile.reject_notify} |
| New taxpayer declaration required if data changes by more than | {fig:efile.new_declaration.income} |
| Or by more than | {fig:efile.new_declaration.tax} |

Where a change after the taxpayer signed the Declaration of Taxpayer stays inside both thresholds,
rejected return data may be corrected and retransmitted without new signatures or authorisations.

## How it works in practice

**Verify identity before originating.** Publication 1345 directs an ERO to confirm the identities
and taxpayer identification numbers of taxpayers, spouses and dependents on returns its firm
prepares, and to ask taxpayers not known to it for **two forms of identification** — photo
identification preferred — showing the name and a current or recent address. Seeing Social Security
cards, ITIN letters and similar documents avoids putting incorrect numbers on the return in the
first place.

**Transcribe the Form W-2 number exactly.** The identification number entered for a Form W-2 in the
electronic record must be identical to the number on the version the taxpayer supplied. For a
taxpayer filing with an ITIN, the return itself carries the ITIN while the electronic Form W-2 record
carries the number shown on the employer's W-2, usually a social security number — a mismatch the
e-file system is built to accept. Publication 1345 warns EROs to check that their software does not
auto-populate the ITIN into the W-2 record, and to replace it with the number on the W-2 the
taxpayer provided if it does.

**Name Control causes more rejects than almost anything else.** A Name Control is the first four
significant letters of an individual's last name, or of a business name, as recorded by the Social
Security Administration or the IRS. The most common cause of a Name Control reject is the newly
married taxpayer who files under a married name that the SSA records do not yet show. Asking the
question at intake is faster than resubmitting.

**Watch for fraud, and do not transmit what looks like refund fraud.** EROs must be particularly
diligent as first contact. Publication 1345 names indicators — unsatisfactory answers to filing
status questions, multiple returns with the same address, missing or incomplete Schedule A and
Schedule C income and expense documentation — and instructs that returns must not be submitted where
there is a high likelihood the return is related to identity theft refund fraud. Providers must
cooperate with IRS investigations by making records available on request.

**Give the taxpayer a complete copy.** The ERO must provide a complete copy of the return, in any
medium acceptable to both parties, including electronically. A complete copy includes Form 8453 and
other documents the ERO cannot transmit electronically, together with the electronic portion. That
portion may be a replica of the official form or an unofficial form, but on an unofficial form the
ERO must reference each data entry to the line number or description on the official form. Where the
taxpayer supplied a completed paper return and the electronic portion is identical to it, no printout
of the electronic portion is required.

**Check the acknowledgments, and act on them.** The IRS acknowledges every transmission and each
return is accepted or rejected. An accepted return is considered *filed* as soon as it is signed
electronically or a paper signature is received; a rejected return is considered **not filed**. The
acknowledgment identifies the problem through business rules — which say why the return rejected —
and element names, which say which fields are involved. Publication 1345 directs the ERO to check
acknowledgment records regularly for returns needing follow-up and to take reasonable steps to
address what they show. At the taxpayer's request, the ERO must provide the Submission ID and the
date the IRS accepted the return, and may use Form 9325 for the purpose; if the transmitter provided
an electronic postmark, the ERO must supply that too on request.

**Tell the taxpayer within a day if a rejection cannot be fixed.** Where the IRS rejects the
electronic portion and the ERO cannot fix the reason, the ERO must take reasonable steps to inform
the taxpayer within the period in the figures table, and must give the taxpayer the business rules
with an explanation.

<div class="scenario">
<h3>The return that arrived from a third party</h3>

A bookkeeping service that is not an Authorized IRS e-file Provider offers to send Yolanda
Przybylski-Osei's firm completed returns for its own clients, for a fee per return, with the firm
transmitting under its EFIN.

The ERO may begin the electronic submission of only returns it prepared or collected from a taxpayer
or another provider, and must accept returns only from taxpayers and providers. The bookkeeping
service is neither the taxpayer nor a provider. Beyond that, the arrangement is close to the
EFIN-sharing conduct Publication 3112 says will be sanctioned. If the bookkeeping service wants to
route work this way it must apply and become a provider itself; if it wants the firm to be the
preparer, the firm must actually deal with the taxpayers.
</div>

<div class="scenario">
<h3>The corrected figure that needed a new signature</h3>

Kwame Halvorsen signs Form 8879 and the return is transmitted. It rejects on an unrelated business
rule. In fixing it the preparer notices a transposed figure and corrects total income upward by 90
dollars, which increases total tax by 22 dollars.

Both thresholds are breached — more than 50 dollars to total income and more than 14 dollars to
total tax — so Halvorsen must sign a new declaration before the corrected return is retransmitted.
Had the correction been an 18-dollar change to total income with no effect on tax, the return could
have been corrected and retransmitted on the existing signature. The test is mechanical and it is
worth building into the firm's correction checklist, because the temptation on a rejected return is
to fix and resend without going back to the client.
</div>

<div class="scenario">
<h3>The newly married client</h3>

Amara Sigurdsdóttir-Cole married in the autumn and files under her married surname with her correct
social security number. The return rejects.

This is the Name Control mismatch Publication 1345 identifies as the most common example: the SSA
records still hold her former surname, so the first four significant letters do not match. The fix
is not on the return. She updates her record with the Social Security Administration, and in the
meantime the return can be filed under the name the SSA holds. The ERO's contribution is
recognising the reject for what it is within minutes rather than resubmitting the same return twice
and then advising a paper filing.
</div>

<div class="callout trap">
<strong>A rejected return is not filed.</strong> Acknowledgment language is easy to skim. Accepted
returns are considered filed as soon as they are signed electronically or a paper signature is
received; rejected returns are considered not filed, full stop. A client told "it's been sent" has
been told something the IRS does not agree with.
</div>

<div class="callout trap">
<strong>ERO obligations and preparer obligations are cumulative.</strong> Providing a complete copy
of the return is an ERO obligation under Publication 1345 and separately a preparer obligation under
the Code. Due diligence on the credits and head of household status is a preparer obligation that
Publication 1345 restates for EROs. Satisfying one does not discharge the other.
</div>

<div class="callout trap">
<strong>The electronic W-2 record may legitimately differ from the return.</strong> For an ITIN
filer, the return carries the ITIN and the W-2 record carries the number on the employer's W-2. This
is correct and the system accepts it. Software that "helpfully" propagates the ITIN into the W-2
record is creating an error, and Publication 1345 makes checking for that the ERO's job.
</div>

<div class="callout trap">
<strong>Do not transmit a return you believe is refund fraud.</strong> The instruction is explicit:
returns must not be submitted where there is a high likelihood they relate to identity theft refund
fraud. Transmitting anyway, on the reasoning that the IRS will catch it, is a suitability problem
for the firm as well as a disservice to the real taxpayer whose identity is in play.
</div>

## How this has changed

The ERO role has been stable in outline since IRS e-file became the normal way to file, but the
weight inside it has shifted decisively toward identity verification and fraud detection. The
two-forms-of-identification guidance, the instructions on ITIN and W-2 number handling, the Name
Control explanation and the direction not to transmit likely identity theft refund fraud all reflect
a decade of refund fraud pressure, and they now occupy more of Publication 1345 than the mechanics
of transmission do.

The other durable change is the retirement of paper as the default channel for supporting material.
Form 8453 survives as a transmittal for the few documents that cannot be transmitted electronically,
and the "complete copy" the ERO must give the taxpayer expressly includes it — but the list of
documents needing it has shrunk steadily, and amended returns, which for years had to be filed on
paper, can be e-filed for tax years 2019 forward.

Publications 1345 and 3112 are both revised annually — the editions this page relies on are dated
December 2025 and November 2025. The thresholds for a new taxpayer declaration and the notification
periods are the items most worth re-checking each season.

## Exam focus

Know the definition: an ERO begins the process of the electronic submission of a return, and is
usually the taxpayer's first point of contact. Know that an ERO may originate only returns it
prepared or collected from a taxpayer or another provider, and may accept returns only from
taxpayers and providers. Know that an accepted return is filed and a rejected return is not, and
that where a rejection cannot be fixed the ERO must inform the taxpayer within 24 hours with the
business rules and an explanation. Know that the ERO must provide the taxpayer with a complete copy
of the return. The specific dollar thresholds for a new declaration are less likely to be tested
than the principle that a material change requires a new signature.

## Check yourself

**1. What defines an Electronic Return Originator?**

A. The provider that transmits return data directly to the IRS
B. The provider that begins the process of the electronic submission of a return
C. The provider that writes software to IRS specifications
D. Any paid preparer who signs a return

*Answer: B. Transmitting is the transmitter's role; an ERO may also be a transmitter but the roles
are distinct provider options.*

**2. From whom may an ERO accept returns for origination?**

A. Anyone willing to pay a per-return fee
B. Taxpayers and other Authorized IRS e-file Providers only
C. Any bookkeeping or payroll service
D. Any person holding a PTIN

*Answer: B. An ERO may originate only returns it prepared or collected from a taxpayer or another
provider.*

**3. The IRS rejects the electronic portion of a return and the ERO cannot fix the reason. What must
the ERO do?**

A. Nothing until the taxpayer asks
B. File a paper return on the taxpayer's behalf without further contact
C. Take reasonable steps to inform the taxpayer within 24 hours, with the business rules and an
   explanation
D. Resubmit the identical return up to three times

*Answer: C. A rejected return is considered not filed, so prompt notice is what preserves the
taxpayer's options.*

**4. After the taxpayer signs the declaration, the ERO corrects the return so that total income rises
by 90 dollars and total tax by 22 dollars. What is required?**

A. Nothing; corrections may always be made before transmission
B. A new signed declaration from the taxpayer before retransmission
C. A paper return
D. Notification to the e-help Desk

*Answer: B. Both stated thresholds are exceeded, so the existing declaration no longer covers the
return.*

**5. Which statement about providing a copy of the return is correct?**

A. A paper printout is always required
B. A complete copy must be provided, in any medium acceptable to both taxpayer and ERO
C. The copy may omit documents that could not be transmitted electronically
D. A copy is required only if the taxpayer requests one

*Answer: B. A complete copy includes Form 8453 and other untransmittable documents along with the
electronic portion.*
