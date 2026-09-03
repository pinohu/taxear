---
title: "Signing returns and furnishing identifying numbers"
code: "3.1.4.d"
part: 3
domain: "Practices and Procedures"
section: "Rules and penalties"
description: "Who must sign a prepared return and when, whose PTIN and EIN must appear on it, and the two separate IRC 6695 penalties that answer a failure to do either one."
status: published
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "N. O."
authorities:
  - { type: IRC, ref: "§ 6109(a)(4)", title: "Furnishing identifying number of tax return preparer" }
  - { type: IRC, ref: "§ 6695(b)", title: "Failure to sign return" }
  - { type: IRC, ref: "§ 6695(c)", title: "Failure to furnish identifying number" }
  - { type: Reg, ref: "§ 1.6695-1(b)", title: "Failure to sign return", url: "https://www.law.cornell.edu/cfr/text/26/1.6695-1" }
  - { type: Reg, ref: "§ 1.6109-2", title: "Tax return preparers furnishing identifying numbers for returns or claims for refund", url: "https://www.law.cornell.edu/cfr/text/26/1.6109-2" }
forms: []
related: ["3.1.4.c", "3.1.4.e", "3.1.4.f", "3.1.4.b", "3.1.2.o"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication from IRC §§ 6109(a)(4), 6695(b), 6695(c) and Regs. §§ 1.6695-1(b), 1.6109-2." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios." }
---

<div class="plain-terms">
This page is about two small but separate duties for a paid tax preparer: signing the return,
and putting the right ID numbers on it. It matters to preparers and their firms, not to
clients filing their own return. For a paper return, the preparer signs after the return is
done and before the client signs it. An e-filed return works a bit differently. There, the
preparer signs once the client's e-file form comes back signed. The filed return must also
carry the preparer's own ID number. It must carry the employer's number too, if the preparer
works for someone else. Missing the signature, or missing a number, is its own separate
problem. So one return can trigger both at once.
</div>

Two obligations that travel together and are penalised separately. One person signs, and that same person's identifying number goes on the return — plus, where there is an employment arrangement, the firm's. The rules sound mechanical until an e-filed return, a preparer on leave, or a firm structure gets in the way, and each of those is where the exam looks.

## The rule

**Who signs, and when.** The **signing tax return preparer** must sign a paper return **after it is completed and before it is presented to the taxpayer for signature** (Reg. § 1.6695-1(b)(1)). If that preparer is unavailable, **another preparer must review the entire preparation** of the return and then sign it. Reviewing part of it is not enough.

**Electronically signed returns are different.** The signing preparer **need not sign before presenting the copy to the taxpayer**, but must furnish all the information that will be transmitted as the electronically signed return **contemporaneously with the Form 8879** or other e-file signature form (Reg. § 1.6695-1(b)(2)). The preparer then signs electronically in the manner the Commissioner prescribes.

**Whose number goes on the return.** Every filed return or claim prepared by a preparer must carry the **identifying number of the preparer required to sign it** (Reg. § 1.6109-2(a)(1); IRC § 6109(a)(4)). Where there is an **employment arrangement or association** between that individual and another person, **that other person's identifying number must also appear** — and for an employing or associated person, whether individual or entity, the number is the **employer identification number** (Reg. § 1.6109-2(a)(3)).

**Which number.** For returns filed after 31 December 2010, an individual preparer's identifying number is the **preparer tax identification number** (Reg. § 1.6109-2(a)(2)(ii)). Before that it was the social security number. **All preparers must have a PTIN**, applied for and received in the prescribed manner including payment of a user fee (Reg. § 1.6109-2(d)). The current fee is {fig:ptin.fee}.

**Two penalties, not one.** Failure to sign costs {fig:preparer.6695.per_failure} (IRC § 6695(b)); failure to furnish the identifying number costs the same again (IRC § 6695(c)). Each carries its own **calendar-year** cap, and each yields to **reasonable cause and not willful neglect** — for which the IRS will require a **written statement**, reasonable cause being cause arising despite ordinary care and prudence exercised by the individual preparer (Reg. § 1.6695-1(b)(3)).

**And a third consequence.** Willfully failing to sign a return the practitioner prepared where signature is required, and willfully preparing or signing without a current valid PTIN, are both **disreputable conduct** under Circular 230 § 10.51(a)(14) and (a)(17).

## Current figures

| Item | Value |
|---|---|
| Failure to sign — § 6695(b) | {fig:preparer.6695.per_failure} |
| Failure to furnish identifying number — § 6695(c) | {fig:preparer.6695.per_failure} |
| PTIN application or renewal fee | {fig:ptin.fee} |

## How it works in practice

The paper sequence is exact and often reversed in practice: **complete, sign, then present to the taxpayer**. A firm that has the client sign first and the preparer sign later has the order wrong, and the regulation is written in that order deliberately — the taxpayer is meant to see a return that a named professional has already stood behind.

The unavailability rule is the one that costs firms money. When the assigned preparer is out, a colleague may sign — but only after reviewing **the entire preparation**, not merely the output. A reviewer who signs on a quick scan has both signed a return they did not review and, if the return proves defective, acquired the signing preparer's exposure under § 6694. The rule is a burden, not a convenience.

On identifying numbers, the doubling is what gets missed. An employed preparer's return carries **two** numbers: the individual's PTIN and the employer's EIN. A sole practitioner who is not employed by another preparer supplies only their own. The trigger for the second number is an employment arrangement or association, not the size of the firm.

Because the two penalties are independent, a single return prepared by an unsigned, un-numbered preparer draws both — and each has its own annual cap, so the exposures do not merge. That is worth saying to a firm whose software profile is misconfigured, because the arithmetic is twice what they expect.

<div class="scenario" data-type="fails">
<h3>The colleague who signed on a glance</h3>
<p>A preparer is hospitalised the week returns are due. A colleague signs eleven of her returns after checking that the figures tie to the source documents, without working through the preparation.</p>
<p><em>Analysis.</em> Reg. § 1.6695-1(b)(1) permits another preparer to sign when the signing preparer is unavailable, but only after reviewing <em>the entire preparation</em> of the return. Tying figures to source documents is not that. The colleague is exposed under § 6695(b) on each return, and — more seriously — has become the signing preparer for § 6694 purposes on eleven returns whose positions they have not evaluated.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The firm number that was never entered</h3>
<p>An employed preparer's software profile carries her {gloss:ptin} but the firm's EIN field was left blank when the practice reorganised. Four hundred returns go out that season showing only her number.</p>
<p><em>Analysis.</em> Reg. § 1.6109-2(a)(1) requires the employing or associated person's identifying number to appear as well, and § 1.6109-2(a)(3) makes that the EIN. Every affected return is a § 6695(c) failure. The {gloss:reasonable-cause-defense} defence would have to show cause arising despite ordinary care and prudence; a profile field nobody checked after a reorganisation is unlikely to meet it, and the IRS will want the claim in writing.</p>
</div>

<div class="scenario" data-type="baseline">
<h3>Signing an e-filed return</h3>
<p>A preparer completes a return, sends the client the full electronic copy with the Form 8879 for signature, receives the signed 8879, and only then applies her electronic signature and transmits.</p>
<p><em>Analysis.</em> Correct. Reg. § 1.6695-1(b)(2) expressly relieves the preparer of signing before presenting the copy for electronically signed returns — the requirement is that all the information to be transmitted goes to the taxpayer <em>contemporaneously</em> with the Form 8879. The paper sequence does not apply, and applying it would be harmless but unnecessary.</p>
</div>

<div class="callout trap"><h4>Traps</h4>
<p><strong>Paper order: complete, sign, then present.</strong> The preparer signs before the taxpayer sees it.</p>
<p><strong>E-file is the exception.</strong> No pre-presentation signature is required; the full transmitted information goes with the Form 8879.</p>
<p><strong>A substitute signer must review the entire preparation.</strong> Not the figures, the preparation.</p>
<p><strong>Two numbers, not one.</strong> The individual's PTIN and, where employed or associated, the other person's EIN.</p>
<p><strong>Sections 6695(b) and 6695(c) are separate penalties with separate caps.</strong> One return can draw both.</p>
<p><strong>Willful failure is also a Circular 230 matter.</strong> Section 10.51(a)(14) for signature, (a)(17) for PTIN.</p>
</div>

## How this has changed

The identifying number regime changed at the end of 2010. For returns filed on or before 31 December 2010 an individual preparer's number was the social security number; for returns filed after that date it is the **PTIN** (Reg. § 1.6109-2(a)(2)). The same amendment required every preparer to hold a PTIN obtained in the prescribed manner and on payment of a user fee (Reg. § 1.6109-2(d)). The registered tax return preparer category that regulation contemplates did not survive later litigation, but the PTIN requirement itself was never disturbed and applies to every preparer today. The § 6695(b) and (c) amounts, flat when enacted, are indexed under § 6695(h) and move annually.

## Exam focus

The paper signing sequence and the e-file exception. The "entire preparation" standard for a substitute signer. Which numbers appear on a filed return, and that the employing person's number is an EIN. That the PTIN replaced the social security number for returns filed after 31 December 2010. That § 6695(b) and § 6695(c) are separate penalties with separate annual caps, and that both yield to reasonable cause substantiated in writing. Expect the Circular 230 § 10.51(a)(14) and (a)(17) overlay as a second-half answer.

## Check yourself

**1. For a paper return, the signing tax return preparer must sign:**
(A) After the taxpayer signs (B) After the return is completed and before it is presented to the taxpayer for signature (C) At any time before filing (D) Only if the taxpayer requests it
*Answer: B. Reg. § 1.6695-1(b)(1) fixes the signature to the window between completion and presentation for the taxpayer's signature, not to whenever is convenient before filing.*

**2. The assigned preparer is unavailable. Another preparer may sign:**
(A) Immediately, as a matter of firm convenience (B) After reviewing the entire preparation of the return (C) Only with the taxpayer's written consent (D) Never; the return must wait
*Answer: B. Reg. § 1.6695-1(b)(1): a substitute signer may sign only after reviewing the entire preparation of the return, not merely the output.*

**3. A preparer employed by a firm prepares a client's return. The filed return must carry:**
(A) The preparer's PTIN only (B) The preparer's PTIN and the firm's EIN (C) The firm's EIN only (D) The preparer's social security number
*Answer: B. Reg. § 1.6109-2(a)(1) and (a)(3) require both the individual preparer's own identifying number and, where the preparer is employed by or a partner in a firm, the firm's EIN.*

**4. A single return is filed unsigned and without any preparer identifying number. The exposure is:**
(A) One penalty, the failures being related (B) Two separate penalties under § 6695(b) and § 6695(c), each with its own annual cap (C) A single penalty at double the rate (D) No penalty absent willfulness
*Answer: B. IRC §§ 6695(b) and 6695(c) are independent penalties, each with its own calendar-year cap, so a single return failing both draws both.*

**5. For an electronically signed return, the preparer must:**
(A) Sign before presenting the copy, as for paper (B) Furnish all information to be transmitted contemporaneously with the Form 8879, then sign electronically (C) Sign only after the IRS accepts the return (D) Obtain a paper signature as well
*Answer: B. Reg. § 1.6695-1(b)(2) ties the electronic signature to furnishing the information to be transmitted, contemporaneously with the Form 8879, rather than to the paper-return sequence of signing before presentation.*
