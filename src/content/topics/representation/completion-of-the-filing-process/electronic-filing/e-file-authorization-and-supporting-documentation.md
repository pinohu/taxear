---
title: "E-file authorization and supporting documentation"
code: "3.4.3.h"
part: 3
domain: "Completion of the Filing Process"
section: "Electronic filing"
description: "Forms 8879 and 8878 authorize an ERO to enter a taxpayer's PIN; Form 8453 transmits what cannot be filed electronically. When each is needed and how long to keep them."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "N. O."
authorities:
  - { type: Pub, ref: "1345", title: "Handbook for Authorized IRS e-file Providers of Individual Income Tax Returns (Rev. 12-2025)", url: "https://www.irs.gov/pub/irs-pdf/p1345.pdf" }
  - { type: Form, ref: "8879", title: "IRS e-file Signature Authorization" }
  - { type: Form, ref: "8878", title: "IRS e-file Authorization for Form 4868 or Form 2350" }
  - { type: Form, ref: "8453", title: "U.S. Individual Income Tax Transmittal for an IRS e-file Return" }
  - { type: IRC, ref: "§ 6061", title: "Signing of returns and other documents" }
forms: ["8453"]
related: ["3.4.3.d", "3.4.3.i", "3.4.3.c"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft against Publication 1345 (Rev. 12-2025)." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, typed the existing scenarios, added a baseline scenario, and marked one glossary term." }
---

<div class="plain-terms">
Filing a tax return online still needs a signature. Some documents still cannot go in online at
all. This page sorts out which form does which job for the {gloss:ero} handling your filing. One
form lets that preparer type in your PIN, but only after you have read the return and signed off
first. A different form is just a cover sheet. It gets mailed in for the rare document, like a
paper appraisal, that the system will not take. Mixing these two up is the most common mistake
preparers make. Getting the order right, and mailing the leftover paper on its own, decides if the
filing counts and if the IRS gets what it needs.
</div>

## The rule

Two different problems get solved by two different forms, and confusing them is the commonest error
in this area.

**Signature authorization** answers: how does the taxpayer sign an electronic return? A return must
be signed by the person required to make it (IRC § 6061), and there are two electronic signature
methods, both using a personal identification number to sign the return and the Declaration of
Taxpayer.

- The **Self-Select PIN method** requires the taxpayer to provide the prior year adjusted gross
  income amount or prior year PIN, which the IRS uses to authenticate them. This method **may be
  completely paperless** if the taxpayers enter their own PINs directly into the electronic return
  record using keystrokes after reviewing the completed return.
- The **Practitioner PIN method** does not require prior year AGI or PIN. Instead, taxpayers must
  **always** sign a completed signature authorization form — and Publication 1345 adds that they
  must do so *even if* they enter their own PINs by keystroke after reviewing the return.

The operative rule cuts across both: **any time an ERO enters the taxpayer's PIN on the electronic
return, the ERO must complete a signature authorization form, signed by the taxpayer, before the
return is submitted.** Form 8879 authorises an ERO to enter a taxpayer's PIN on an individual income
tax return. Form 8878 authorises an ERO to enter the PIN on Form 1040 extension forms — and is
needed for Form 4868 only where the taxpayer is authorising an electronic funds withdrawal and wants
the ERO to enter the PIN.

**Transmittal of paper** answers a different question: what happens to documents that cannot be
filed electronically? Form 8453, *U.S. Individual Income Tax Transmittal for an IRS e-file Return*,
is the cover sheet those documents travel under. It is not a signature form and it is not an
alternative to Form 8879.

## Current figures

| Item | Requirement |
| --- | --- |
| ERO retention of Forms 8878 and 8879 | {fig:efile.sig_auth_retention} |
| Ineligible to use the Self-Select PIN | {fig:efile.selfselect_pin_ineligible} |

EROs must **not** send Forms 8878 and 8879 to the IRS unless the IRS requests them.

## How it works in practice

**Sequence matters, and there is one permitted shortcut.** The ERO may enter the taxpayer's PIN in
the electronic return record *before* the taxpayer signs Form 8878 or 8879 — but the taxpayer must
sign and date the form **before the ERO originates the electronic submission**. The taxpayer signs
after reviewing the return and confirming that the tax return information on the authorization form
matches the return.

**Delivery of the signed form is flexible.** The taxpayer may return a completed Form 8878 or 8879
by hand delivery, U.S. mail, private delivery service, fax, e-mail or an internet website.

**Pre-signed authorizations exist, narrowly.** Only taxpayers who provide a **completed tax return**
to an ERO for electronic filing may sign the signature authorization without reviewing the return
the ERO originates. In that case the ERO must enter the line items from the paper return onto the
authorization form before the taxpayer signs and dates it, and may use the pre-signed authorization
as authority to input the PIN **only if** the electronic version agrees with the entries from the
paper return. Any discrepancy voids the shortcut.

**Electronic signatures on the authorization form are allowed, with conditions.** Taxpayers may sign
Forms 8878 and 8879 electronically where the software provides the capability, and no specific
technology is required. Publication 1345 lists acceptable methods: a handwritten signature on a
signature pad; a handwritten signature, mark or command entered on a display screen with a stylus; a
digitised image of a handwritten signature attached to an electronic record; a typed name; a shared
secret such as a code, password or PIN; a digital signature; and a mark captured as a scalable
graphic.

Where an electronic signature is used, the software must record: a digital image of the signed form;
the date and time of the signature; for remote transactions, the taxpayer's IP address and login
username; identity verification, being the taxpayer's passed knowledge-based authentication results
and, for in-person transactions, confirmation that government photo identification was verified; and
the method used to sign, or a system log or other audit trail showing the signer completed the
process. **The ERO must provide this information to the IRS on request** — which means a firm using
electronic signatures should know its software captures it, not assume so.

**Form 8453 carries what the system cannot.** IRS e-file returns must contain the same information
as a fully paper return, and forms with an electronic format must be submitted electronically unless
the IRS identifies an exception during the year. Where a form or document cannot be transmitted, the
IRS can accept it in PDF format if the software offers that; otherwise the ERO attaches it to Form
8453 and mails it, using the address on page 2 of the form. The documents on the list include Form
1098-C (or an equivalent contemporaneous written acknowledgment), **Form 2848 where an electronic
return is signed by an agent**, Form 3115, Form 3468 with its historic preservation certification,
Form 4136 with fuel credit certificates, Form 5713, Form 8283 Section A where a statement or
qualified appraisal is required or Section B with related attachments, Form 8332 (or the specified
pages of a pre-2009 divorce decree), Form 8858 and Form 8864.

**Ensuring the paper reaches the IRS is the ERO's job.** Publication 1345 makes EROs responsible for
submitting to the IRS all paper documents required to complete the filing of returns. An accepted
acknowledgment does not mean the Form 8453 package was mailed.

<div class="scenario" data-type="fails">
<h3>The signature that came after transmission</h3>

A busy office transmits Serafina Oduya-Lindqvist's return on Wednesday and posts her Form 8879 for
signature the same afternoon. She signs and returns it on Friday.

The order is wrong and it cannot be fixed retrospectively. The ERO may enter the PIN into the
electronic record before the form is signed, but the taxpayer must sign and date it **before the ERO
originates the electronic submission**. Transmitting first means the return was originated on an
authorization that did not exist. The correct workflow is to prepare, send for signature, receive
the signed form, and only then transmit — and where the client is slow, the pressure point is the
client, not the sequence.
</div>

<div class="scenario" data-type="interaction">
<h3>Practitioner PIN and the client who typed her own number</h3>

Under the Practitioner PIN method, Melchior Vandenbroucke's client reviews the completed return and
enters her own five-digit PIN by keystroke. The preparer concludes that no Form 8879 is needed,
since the client signed the return herself.

Publication 1345 forecloses this in terms: taxpayers who use the Practitioner PIN method must sign
the signature authorization form **even if** they enter their own PINs using keystrokes after
reviewing the return. The completely paperless option belongs to the Self-Select PIN method, which
carries its own price — the taxpayer must supply prior year AGI or PIN for authentication. Choosing
the Practitioner PIN method to avoid that authentication step means accepting the signed
authorization form that comes with it.
</div>

<div class="scenario" data-type="procedural">
<h3>The appraisal that never left the office</h3>

Hyacinth Baptiste-Nakamura claims a substantial non-cash charitable contribution requiring a
qualified appraisal. The return is prepared, Form 8283 Section B is completed, and the return is
transmitted and accepted. The appraisal stays in the file.

The acknowledgment says the electronic return was accepted; it says nothing about the appraisal.
Form 8283 Section B and its related attachments, including a qualified appraisal, are on the list of
documents to be attached to Form 8453 and mailed, and the ERO is responsible for submitting all
required paper documents to complete the filing. The practical safeguard is a checklist item at the
point of acceptance rather than at the point of preparation: which returns from this batch generate
a Form 8453 package, and has it gone?
</div>

<div class="scenario" data-type="baseline">
<h3>The client who types her own PIN</h3>

At the preparer's office, a taxpayer supplies her prior year adjusted gross income, reviews the
completed return on screen, and types her own five-digit PIN into the software by keystroke. She is
using the Self-Select PIN method.

No Form 8879 is required. The Self-Select PIN method may be completely paperless precisely because
she authenticated herself with prior year information and entered her own PIN by keystroke — the
ERO never signed on her behalf. The preparer transmits the return once she confirms it is correct.
This is the paperless route working exactly as the rule intends.
</div>

<div class="callout trap">
<strong>Form 8453 is a transmittal, not a signature.</strong> It carries documents that cannot be
filed electronically. The signature authorization is Form 8879, or Form 8878 for extensions.
Treating 8453 as the signature form, or thinking one substitutes for the other, is the classic error
here.
</div>

<div class="callout trap">
<strong>Only the Self-Select PIN method can be fully paperless.</strong> And only where the taxpayer
enters their own PIN by keystroke after reviewing the return. The Practitioner PIN method always
generates a signed authorization form.
</div>

<div class="callout trap">
<strong>Do not mail Forms 8878 and 8879 to the IRS.</strong> They are retained by the ERO and sent
only if the IRS asks. Mailing them unprompted is not a small courtesy; it puts client PINs in the
post for no purpose.
</div>

<div class="callout trap">
<strong>Form 8878 is narrower than it looks.</strong> It is needed for Form 4868 only where the
taxpayer is authorising an electronic funds withdrawal *and* wants the ERO to enter the PIN. An
extension with no payment does not generate one.
</div>

<div class="callout trap">
<strong>Electronic signature capability is a software question you must answer.</strong> The ERO
must be able to produce the digital image, timestamp, IP address, username, identity verification
results and audit trail on IRS request. If the software does not capture them, the firm cannot meet
the requirement — and finding that out when the request arrives is too late.
</div>

## How this has changed

The direction of travel has been toward eliminating paper at every point except the ones where
paper is unavoidable. The Self-Select PIN method made a fully paperless individual return possible;
electronic signature guidance for Forms 8878 and 8879 extended that to the authorization itself,
with an explicit statement that no specific technology is required and a list of acceptable methods
broad enough to include a typed name. The identity verification requirements that accompany
electronic signatures — knowledge-based authentication for remote transactions, government photo
identification for in-person ones, with a recorded audit trail — are the price of that flexibility
and are the newer part of the rules.

Form 8453's list has shrunk as more forms became transmittable and as PDF attachment became
available in most software. It has not disappeared, and the items that remain are the ones where the
IRS wants an original document: appraisals, certifications from other agencies, releases of a claim
to a dependent, and a power of attorney where an agent signs the return.

Publication 1345 is revised annually. The Form 8453 document list and the electronic signature
requirements are the parts most worth re-reading each season.

## Exam focus

Know which form does what: Form 8879 authorises an ERO to enter a taxpayer's PIN on an individual
return, Form 8878 does the same for a Form 1040 extension where an electronic funds withdrawal is
involved, and Form 8453 transmits supporting documents that cannot be filed electronically. Know
that only the Self-Select PIN method permits a completely paperless process, and that the
Practitioner PIN method always requires a signed authorization. Know that the taxpayer must sign
before the ERO originates the submission, that the ERO retains the authorization for three years
from the later of the due date or the IRS received date, and that the forms are not sent to the IRS
unless requested.

## Check yourself

**1. Which electronic signature method allows a completely paperless process?**

A. The Self-Select PIN method
B. The Practitioner PIN method
C. Both methods
D. Neither method

*Answer: A — where the taxpayer enters their own PIN by keystroke after reviewing the return. The
Practitioner PIN method always requires a signed authorization form.*

**2. When must a taxpayer sign Form 8879 relative to transmission?**

A. Within three days after the return is transmitted
B. Before the ERO originates the electronic submission of the return
C. At any time before the IRS acknowledges the return
D. Only if the IRS requests it

*Answer: B. The ERO may enter the PIN in the electronic record first, but the signature must precede
origination.*

**3. What does an ERO do with a signed Form 8879?**

A. Mail it to the IRS with the return
B. Attach it to Form 8453
C. Retain it for three years from the later of the return due date or the IRS received date, and
   send it to the IRS only on request
D. Destroy it once the return is accepted

*Answer: C.*

**4. A return claims a non-cash charitable contribution requiring a qualified appraisal that cannot
be transmitted electronically. What is the correct handling?**

A. Retain it in the client file; nothing is sent
B. Attach it to Form 8453 and mail it to the IRS, unless the software supports PDF attachment
C. Attach it to Form 8879
D. Mail it with a copy of the acknowledgment to the e-help Desk

*Answer: B. The ERO is responsible for submitting all paper documents required to complete the
filing.*

**5. Under the Practitioner PIN method, the taxpayer reviews the return and enters her own PIN by
keystroke. Is a signature authorization form required?**

A. No; entering her own PIN is the signature
B. No, provided the ERO documents that she entered it
C. Yes; the form is required even where the taxpayer enters her own PIN
D. Only if the return claims a refund

*Answer: C. The requirement is stated expressly and is what distinguishes the method from
Self-Select.*
