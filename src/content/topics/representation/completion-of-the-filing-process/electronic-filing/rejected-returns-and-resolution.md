---
title: "Rejected returns and resolution"
code: "3.4.3.i"
part: 3
domain: "Completion of the Filing Process"
section: "Electronic filing"
description: "A rejected return is not filed. The perfection periods for individual and business returns, what a paper substitute must carry, and how a missing IP PIN causes a reject."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: Pub, ref: "1345", title: "Handbook for Authorized IRS e-file Providers of Individual Income Tax Returns (Rev. 12-2025)", url: "https://www.irs.gov/pub/irs-pdf/p1345.pdf" }
  - { type: Pub, ref: "4163", title: "Modernized e-File (MeF) Information for Authorized IRS e-file Providers for Business Returns", url: "https://www.irs.gov/pub/irs-pdf/p4163.pdf" }
  - { type: IRC, ref: "§ 7502", title: "Timely mailing treated as timely filing and paying" }
forms: []
related: ["3.4.3.d", "3.4.3.a", "3.2.6.i", "3.4.3.h"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft against Publications 1345 (Rev. 12-2025) and 4163." }
---

## The rule

The IRS acknowledges every transmission, and every return in it is either accepted or rejected. An
accepted return is considered **filed** as soon as it is signed electronically or the IRS receives a
paper signature. A rejected return does not meet the processing criteria and the IRS considers it
**not filed**. That single sentence generates everything else on this page, because a return that is
not filed cannot be timely unless something rescues it.

What rescues it is the **transmission perfection period** — a grace window during which a corrected
resubmission is treated as filed on the date of the original attempt. The window differs by return
type, and the two numbers are the most tested facts in this area.

For an **individual income tax return** submitted on or before the due date, Publication 1345
provides that the return will be considered timely filed if the taxpayer corrects the electronic
portion and resubmits it by {fig:efile.perfection.individual}. If the taxpayer chooses not to have
the electronic portion corrected and retransmitted, or the IRS cannot accept the return for
processing at all, a paper return must be filed — and to be timely it must be filed by
{fig:efile.perfection.individual_paper}.

For **business returns** filed through Modernized e-File, Publication 4163 sets the paper fallback
at a return {fig:efile.perfection.business}. Before filing on paper, corporations and partnerships
required to e-file must contact the e-help Desk to attempt to resolve the reject conditions, and
tax-exempt organizations must do the same — Forms 990, 990-EZ, 990-PF, 990-T and 4720 filed by a
private foundation must be e-filed, and a paper return will be sent back to the filer.

The ERO's duty runs alongside. Where the IRS rejects the electronic portion and the ERO cannot fix
the reason, the ERO must take reasonable steps to inform the taxpayer {fig:efile.reject_notify}, and
must provide the taxpayer with the business rules that caused the rejection together with an
explanation.

## Current figures

| Item | Period |
| --- | --- |
| Individual return — electronic resubmission | {fig:efile.perfection.individual} |
| Individual return — paper fallback | {fig:efile.perfection.individual_paper} |
| Business return — paper fallback | {fig:efile.perfection.business} |
| ERO must inform the taxpayer | {fig:efile.reject_notify} |
| New taxpayer declaration required if data changes by more than | {fig:efile.new_declaration.income} |
| Or by more than | {fig:efile.new_declaration.tax} |

## How it works in practice

A perfected return keeps its original filing date; a paper substitute mailed inside the window is
timely under the ordinary mailing rule (IRC § 7502).

**Read the acknowledgment, not the summary screen.** The acknowledgment identifies the problem
through a system of **business rules**, which say why the return rejected, and **element names** —
tag names — which say which fields of the electronic return data are involved. A representative who
reads the business rule usually knows the fix within a minute; one who reads only "rejected"
resubmits blindly.

**Most rejects are identity, not arithmetic.** Publication 1345 names the common causes: incorrect
taxpayer identification numbers, the same number used on more than one return, and the wrong name
associated with a number. The **Name Control** — the first four significant letters of a last name
or business name as recorded by the Social Security Administration or the IRS — is a large share of
them, most often because a newly married taxpayer files under a married name the SSA record does not
yet show.

**A missing or wrong IP PIN rejects the return.** An identity protection PIN is a six-digit number
known only to the taxpayer and the IRS, entered when the software prompts for it. The IRS states
that correct IP PINs must be entered on electronic **and paper** returns to avoid rejections and
delays, and that an incorrect or missing IP PIN will cause an e-filed return to be rejected or a
paper return to be delayed until it can be verified. The IP PIN is used on
{fig:idtheft.ippin_forms}, and it must be used on **any** federal return filed during the year,
including prior year returns. It is {fig:idtheft.ippin_online_window}.

**The IP PIN is annual.** It is valid for one calendar year and a new one is generated each year for
the account. A taxpayer the IRS enrolled as a confirmed identity theft victim receives a CP01A
notice with the new number each year; a taxpayer who opted in online must retrieve the number online
each year, because no CP01A is mailed. There is no fixed number of years after which the process
stops.

**A paper substitute for a rejected return has required contents.** Publication 4163 sets them out
for business returns, and the same discipline is right for individuals. After calling the e-help
Desk to report that the return was not accepted, the paper return should include:

1. An explanation of why the paper return is being filed after the due date.
2. A copy of the reject notification — the acknowledgment.
3. A brief history of the actions taken to correct the electronic return.
4. **REJECTED ELECTRONIC RETURN – [DATE]** written in red at the top of the first page, the date
   being the date of the first reject within the perfection window.
5. A signature. The PIN used on the rejected return **may not** be used on the paper return.

Publication 4163 separately *recommends* retaining a copy of the submission receipt, the rejected
transmission file and the rejected acknowledgment. Retaining the submission receipt is a
recommendation for the file, not a required element of the paper return.

**Correcting can require a new signature.** Rejected individual return data can be corrected and
retransmitted without new signatures or authorisations only where the changes stay within both
thresholds in the figures table. Cross that line and the taxpayer must sign a new declaration before
the corrected return goes out.

<div class="scenario">
<h3>Two days after the deadline</h3>

Ignatius Warmerdam's return is transmitted on 14 April and rejects the same evening on a dependent
identification number. The preparer resolves it and retransmits on 17 April.

The return is timely. It was submitted on or before the due date and the corrected version was
resubmitted within the perfection window, so it is treated as filed on the original submission date.
The client owes no late filing addition. What would have destroyed this is delay: the window runs
from the due date, not from when the office next opened the file, and a resubmission on the seventh
day is late even if the reject was the IRS's doing.
</div>

<div class="scenario">
<h3>The corporation that could not be perfected</h3>

Perpetual Ironworks, a corporation required to e-file, rejects on a schema error its software vendor
cannot resolve. The controller proposes to print the return and mail it immediately.

Not yet. Publication 4163 requires a corporation or partnership required to e-file to contact the
e-help Desk to attempt to resolve the reject conditions **before** filing on paper. Only after that
does the paper route open, and then the return must be postmarked by the later of the due date
including extensions or ten calendar days after the last rejection notification. The paper return
must carry the explanation, a copy of the reject acknowledgment, a brief history of what was tried,
the red "REJECTED ELECTRONIC RETURN" annotation with the date of the first reject, and a handwritten
signature — the PIN from the rejected return cannot be reused.
</div>

<div class="scenario">
<h3>The IP PIN nobody asked for</h3>

Rosalinde Achterberg was an identity theft victim three years ago. Her return rejects. Her preparer,
knowing the history, tells her the IP PIN programme "ran for three years and must have ended."

It did not. An IP PIN is valid for one calendar year and a new one is generated each year for the
account, with no fixed end. Achterberg was enrolled as a confirmed victim, so a CP01A notice with
the current year's number was mailed to her; she can also view it in her online account during the
months it is posted. The reject is a missing IP PIN, the fix is to obtain the current one and enter
it, and the return will then transmit. Telling her the programme expired would have sent her to a
paper return that would itself be delayed for verification.
</div>

<div class="callout trap">
<strong>An IP PIN does not last three years.</strong> It is valid for one calendar year and a new
one is generated each year. Material that describes a three-year IP PIN, or a fixed number of years
after an identity theft report, is wrong. The number changes annually and the enrolment does not
expire on a schedule.
</div>

<div class="callout trap">
<strong>The individual and business perfection periods are different numbers.</strong> Five calendar
days after the due date for an individual electronic resubmission; ten calendar days after the last
rejection notification for the paper fallback, individual or business. Questions in this area work
by offering both and asking about one return type.
</div>

<div class="callout trap">
<strong>The submission receipt is recommended, not required.</strong> The paper substitute must carry
the explanation, the reject notification, the history of actions taken, the red annotation with the
first reject date, and a signature. Retaining the submission receipt, the rejected transmission file
and the rejected acknowledgment is a recommendation about the firm's records.
</div>

<div class="callout trap">
<strong>Do not reuse the PIN from the rejected return.</strong> Publication 4163 says so expressly.
The paper return must be signed, and the electronic signature that accompanied the rejected
transmission is not a substitute.
</div>

<div class="callout trap">
<strong>The IP PIN goes on paper returns too.</strong> It is not an e-file artefact. A paper return
filed without the correct IP PIN is delayed until the IRS can verify it, which for a refund client
means months.
</div>

## How this has changed

The perfection period concept has been stable, but the surrounding practice has moved with the
mandate. When most returns were paper, a reject was an inconvenience; now that corporations,
partnerships and tax-exempt organizations above the thresholds must e-file, a reject that cannot be
perfected is a compliance problem, and the requirement to call the e-help Desk before printing
reflects that — a paper Form 990 from a filer required to e-file is simply sent back.

The identity layer is the part that has changed most. The IP PIN began as a remedial measure for
confirmed victims and is now open to anyone with a social security number or ITIN who can verify
their identity, as a proactive step. From 2024 returns the IRS also began accepting an e-filed
return claiming a dependent who has already been claimed on another return, provided the primary
taxpayer includes a valid IP PIN — turning what was previously an automatic reject followed by a
paper filing into a resolvable one.

## Exam focus

The two perfection periods are the reliable questions: five calendar days after the due date for an
individual electronic resubmission, ten calendar days for the paper fallback and for business
returns. Know that a rejected return is not filed. Know the required contents of the paper
substitute, and that the submission receipt is not among them. On the IP PIN, know that it is valid
for a single calendar year and that a new one is generated each year — a question offering "three
years" is testing exactly that error.

## Check yourself

**1. An individual return is transmitted on the due date and rejects. By when must the corrected
return be resubmitted electronically to be treated as timely?**

A. Two calendar days after the due date
B. Five calendar days after the due date
C. Ten calendar days after the due date
D. Thirty calendar days after the due date

*Answer: B. The return is then considered timely filed as of the original submission.*

**2. A corporation's e-filed return is rejected and cannot be corrected. When must the paper return
be filed to be timely?**

A. Within two days of the rejection
B. By the due date only, with no extension for the rejection
C. By the later of the due date including extensions, or ten calendar days after the last rejection
   notification
D. Within thirty days of the rejection

*Answer: C — and the filer must first contact the e-help Desk to attempt to resolve the reject.*

**3. Which is not a required element of a paper return filed to replace a rejected electronic
return?**

A. The rejected electronic return date written on the return
B. A copy of the rejection notification
C. A copy of the submission receipt
D. An explanation of why the return is being filed after the due date

*Answer: C. Retaining the submission receipt is a recommendation for the firm's records, not a
required element of the paper return.*

**4. How long is an identity protection PIN valid?**

A. For the taxpayer's lifetime
B. For one calendar year, with a new one generated each year
C. For three years following an identity theft report
D. Until the taxpayer changes address

*Answer: B. There is no fixed number of years after which the assignment stops.*

**5. What is the status of a return the IRS has rejected?**

A. Filed, with processing suspended
B. Filed, but subject to correction
C. Not filed
D. Filed as of the date the rejection is resolved, in all cases

*Answer: C. It is treated as filed on the original date only if it is perfected within the
applicable window.*
