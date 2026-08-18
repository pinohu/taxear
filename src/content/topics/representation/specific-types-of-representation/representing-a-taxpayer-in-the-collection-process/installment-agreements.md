---
title: "Installment agreements: simple payment plans and the CSED"
code: "3.3.1.b"
part: 3
domain: "Specific Types of Representation"
section: "Representing a taxpayer in the collection process"
description: "How installment agreements are authorised and terminated, the current setup fees, and why the IRS replaced streamlined agreements with simple payment plans."
status: review
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6159", title: "Agreements for payment of tax liability in installments" }
  - { type: IRC, ref: "§ 6331", title: "Levy and distraint" }
  - { type: Reg, ref: "300.1", title: "Installment agreement fee", url: "https://www.law.cornell.edu/cfr/text/26/300.1" }
  - { type: IRM, ref: "5.14.5", title: "Simple Payment Plans", url: "https://www.irs.gov/irm/part5/irm_05-014-005" }
  - { type: Form, ref: "9465", title: "Installment Agreement Request", url: "https://www.irs.gov/forms-pubs/about-form-9465" }
forms: ["9465", "433-A", "433-B", "433-F"]
related: ["3.3.1.c", "3.3.1.d", "3.3.1.e", "3.3.2.a", "3.2.6.a", "3.2.1.a", "3.3.1.j", "3.3.1.k", "3.3.1.p", "3.3.1.a"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication. Records the replacement of streamlined installment agreements by simple payment plans, and the removal of the 72-month rule." }
---

An installment agreement is the ordinary way a taxpayer who cannot pay resolves a balance. The statute is short and the discretion is broad; almost everything a practitioner needs to know sits in the administrative rules, and those changed materially in the last two years.

## The rule

The Secretary is **authorized** — not required — to enter into written agreements allowing payment in installments if satisfied that the agreement will facilitate **full or partial** collection of the liability (IRC § 6159(a)). An agreement remains in effect for its term, subject to the grounds in § 6159(b) for altering, modifying, or terminating it, including inadequate or inaccurate information, jeopardy, and later failure to pay or to provide requested financial information.

**Levy and the collection clock behave differently from each other.** No levy may be made while a proposed agreement is pending, for 30 days after a rejection, during any appeal of that rejection, while an agreement is in effect, and for 30 days after termination plus any appeal (IRC § 6331(k)(2)). The suspension of the collection period, however, does not track all of that: § 6331(k)(3)(B) applies rules similar to § 6331(i)(5) **except** for paragraph (2)(C), the period an agreement is in effect. So a pending request stops the collection clock; an agreement in good standing does not.

## Current figures

| Item | Amount |
|---|---|
| Long-term plan, direct debit, applied online | {fig:ia.setup_fee.online_directdebit} |
| Long-term plan, direct debit, by phone, mail, or in person | {fig:ia.setup_fee.phone_mail_directdebit} |
| Long-term plan, not direct debit, applied online | {fig:ia.setup_fee.online_other} |
| Long-term plan, not direct debit, by phone, mail, or in person | {fig:ia.setup_fee.phone_mail_other} |
| Low-income taxpayer | {fig:ia.setup_fee.lowincome} |
| Short-term plan, up to {fig:ia.short_term.max_days} days | {fig:ia.short_term.fee} |
| Simple payment plan ceiling | {fig:ia.simple.threshold} |

## How it works in practice

Requests are made online, by phone, by mail, or on Form 9465. The fee depends on two things only: whether payment is by direct debit, and whether the taxpayer applied online. Low-income status — adjusted gross income at or below 250 percent of the applicable federal poverty level — waives the fee entirely for a direct debit agreement, and otherwise produces a reduced fee that is reimbursed when the agreement is completed. Form 13844 is the route if the IRS has not already identified the taxpayer as low income.

**Simple payment plans replaced streamlined installment agreements.** Under IRM 5.14.5.2, a simple payment plan may be granted where the aggregate unpaid balance of assessment is {fig:ia.simple.threshold} — tax, assessed penalties, interest, and other assessments, but not accrued unassessed penalties and interest. A payment made before the agreement is entered can bring a taxpayer under the ceiling, and pre-assessed liabilities count toward it. Individual accounts, out-of-business sole proprietors, and business accounts that are not trust fund all qualify.

The controlling constraint is no longer a term of months. The IRM requires the payment to be calculated so that everything, **including accrued penalties and interest, is paid in full by the collection statute expiration date**, with the calculation documented in the case history. Monthly amounts may rise or fall over the life of the plan provided that remains true. A practitioner proposing a figure should therefore work backwards from the CSED rather than dividing the balance by 72.

<div class="scenario">
<h3>The payment that buys eligibility</h3>
<p>A client owes an assessed balance of $54,000. He can pay $6,000 now from savings and wants the simplest possible resolution without financial disclosure.</p>
<p><em>Analysis.</em> The ceiling is measured on the aggregate unpaid balance of assessment, and the IRM expressly permits a payment that reduces the balance before the agreement is entered. Paying the $6,000 first brings him to $48,000 and within reach of a simple payment plan; requesting the agreement first and paying afterwards does not.</p>
</div>

<div class="scenario">
<h3>Two clocks, one agreement</h3>
<p>A representative files a request for an installment agreement on 3 March. The IRS rejects it on 20 June. The client does not appeal, and an agreement is later accepted in September and paid on time for two years.</p>
<p><em>Analysis.</em> The collection period is suspended from 3 March while the request is pending, and for the 30 days after the 20 June rejection. Once the September agreement is in effect, the period runs again — § 6331(k)(3)(B) carves out the in-effect period from the suspension rule. Levy is barred throughout, which is a different question from whether the CSED is moving.</p>
</div>

<div class="scenario">
<h3>The fee nobody needed to pay</h3>
<p>A client with income just above the poverty line asks her preparer to set up a plan by telephone, paying monthly by cheque. The fee charged is the phone, non-direct-debit amount.</p>
<p><em>Analysis.</em> Two choices cost her money. Applying online and agreeing to direct debit reduces the fee substantially, and if her adjusted gross income is at or below 250 percent of the federal poverty level, direct debit waives it entirely. If she is low income but cannot use direct debit, the reduced fee is reimbursed on completion. Checking low-income status before submitting is worth more than the call saves.</p>
</div>

<div class="callout trap"><h4>Traps</h4>
<p><strong>An agreement in effect does not suspend the collection period.</strong> A pending request does, and so do the 30 days after rejection or termination. The in-effect period is expressly carved out by § 6331(k)(3)(B).</p>
<p><strong>The 72-month rule is gone.</strong> IRM 5.14.5 was rewritten to remove it along with the old two-band balance split; the test is full payment by the CSED.</p>
<p><strong>The ceiling counts assessed amounts only.</strong> Accrued but unassessed penalties and interest do not count toward the threshold — though they must still be paid by the CSED under the calculation.</p>
<p><strong>Partial collection is permitted.</strong> Section 6159(a) allows an agreement facilitating full <em>or partial</em> collection, which is what makes a partial payment installment agreement possible at all.</p>
<p><strong>The fee turns on how you apply, not just how you pay.</strong> Online and direct debit are separate reductions and they compound.</p>
</div>

## How this has changed

This area moved twice in quick succession. Interim guidance to field collection in March 2025 introduced simple payment plans for individual accounts at the current ceiling, and further guidance in January 2026 extended the approach; the current IRM 5.14.5, revised 21 July 2026, renames the subsection from Streamlined Installment Agreements to Simple Payment Plans, removes the previous two-band balance structure and the 72-month minimum payment rule, drops the direct debit and collection information statement requirements that used to attach at the upper band, extends eligibility to business accounts that are not trust fund, and requires the payment to be calculated to full pay by the CSED. Material published before 2025 describing a "streamlined" agreement with a 72-month term is describing a regime that no longer exists. The user fees also sit below the amounts in Reg. § 300.1(b), which the IRS has reduced administratively; the regulation is the ceiling, and the current published fees are what is actually charged.

## Exam focus

Know that § 6159 authorises rather than requires an agreement, and that it reaches partial as well as full collection. The levy-versus-CSED distinction is heavily tested: a pending request suspends the collection period, an agreement in effect does not, and levy is barred through both. On figures, expect the fee grid rather than a single number — direct debit and online application each reduce it, and low-income status waives or reimburses it. Treat any question or source referring to a 72-month streamlined agreement with suspicion.

## Check yourself

**1. While an accepted installment agreement is in effect and being paid on time, the ten-year collection period:**
(A) Is suspended for the life of the agreement (B) Continues to run (C) Is extended by 30 days per year (D) Restarts
*Answer: B. Section 6331(k)(3)(B) carves the in-effect period out of the suspension rule.*

**2. Under the current IRM, the constraint on a simple payment plan's monthly amount is:**
(A) A 72-month maximum term (B) Full payment of all balances, including accrued penalties and interest, by the CSED (C) A minimum of 10 percent of the balance annually (D) The taxpayer's disposable income on Form 433-A
*Answer: B. The 72-month rule was removed when the subsection was rewritten.*

**3. Which combination produces the lowest setup fee for a long-term plan, ignoring low-income status?**
(A) Apply by phone, pay by cheque (B) Apply online, pay by cheque (C) Apply by phone, pay by direct debit (D) Apply online, pay by direct debit
*Answer: D. The online and direct debit reductions compound.*

**4. A taxpayer's assessed balance is $52,000, with a further $3,000 of accrued but unassessed interest. For the simple payment plan ceiling, the relevant amount is:**
(A) $55,000, so he does not qualify (B) $52,000, so he does not qualify without paying it down (C) $3,000 (D) Whatever remains after the CSED calculation
*Answer: B. The ceiling counts the unpaid balance of assessment and excludes accrued unassessed amounts — and $52,000 is over it.*
