---
title: "Offer in compromise: grounds, payment terms, and the 24-month rule"
code: "3.3.1.c"
part: 3
domain: "Specific Types of Representation"
section: "Representing a taxpayer in the collection process"
description: "The three grounds for compromising a tax liability, what must accompany an offer, the low-income exemptions, and when an offer is deemed accepted by default."
status: published
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "I. Ohu"
authorities:
  - { type: IRC, ref: "§ 7122", title: "Compromises" }
  - { type: IRC, ref: "§ 6331", title: "Levy and distraint" }
  - { type: Reg, ref: "301.7122-1", title: "Compromises", url: "https://www.law.cornell.edu/cfr/text/26/301.7122-1" }
  - { type: Form, ref: "656", title: "Offer in Compromise", url: "https://www.irs.gov/forms-pubs/about-form-656" }
forms: ["656", "433-A", "433-B"]
related: ["3.3.1.b", "3.3.1.d", "3.2.6.a", "3.2.1.a", "3.2.3.e"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication from IRC § 7122, Reg. § 301.7122-1, and the current IRS offer in compromise guidance." }
  - { date: "2026-08-24", summary: "Added a plain-language summary, a threshold diagram of the payment and deadline figures, glossary marks, and typed scenarios." }
diagram:
  archetype: "threshold"
  caption: "What comes with a lump-sum offer, and how long the IRS has to answer"
  min: 0
  max: 30
  marks:
    - { figureKey: "oic.lump_sum_initial", value: 20, label: "20% down" }
    - { figureKey: "oic.deemed_accepted_months", value: 24, label: "24 months to answer", emphasis: true }
---

<div class="plain-terms">
An offer in compromise is a deal: you offer to pay less than you owe, and the IRS agrees to
call the debt settled. You can only ask for one of three reasons — you don't think you
actually owe it, you can't afford to pay it in full, or paying in full would be genuinely
unfair or create real hardship. If you pay in a lump sum, you send 20% up front. If you pay
over time, you send the first payment and then keep paying every month while the IRS
reviews your offer — miss a later payment and the offer can be treated as withdrawn. If the
IRS takes longer than 24 months to say yes or no, the law treats that silence as a yes.
</div>

An offer in compromise settles a tax liability for less than the amount owed. The Secretary may compromise any civil or criminal case arising under the internal revenue laws before it is referred to the Department of Justice (IRC § 7122(a)), but the discretion is structured: there are three grounds, a required payment with the submission, and a deadline that runs against the IRS rather than the taxpayer.

## The rule

**Three grounds, and only three** (Reg. § 301.7122-1(b)):

- **Doubt as to liability** — a genuine dispute exists as to the existence or amount of the correct liability under the law. It does not exist where a final court decision or judgment has established the liability.
- **Doubt as to collectibility** — the taxpayer's assets and income are less than the full amount of the liability.
- **Promote effective tax administration** — available where collection in full could be achieved but doing so would create economic hardship, or where compelling public policy or equity considerations provide sufficient basis.

**Something must accompany the offer.** A lump-sum offer — defined as any offer payable in {fig:oic.lump_sum_max_payments} installments — must be submitted with {fig:oic.lump_sum_initial} (IRC § 7122(c)(1)(A)). A periodic payment offer must be submitted with the amount of the first proposed installment, and the taxpayer must keep paying the proposed installments while the offer is under consideration; failing to make one, other than the first, may be treated as a withdrawal (IRC § 7122(c)(1)(B)). An application fee of {fig:oic.application_fee} is also required.

**Low-income certification removes all three.** A taxpayer meeting the low-income certification guidelines need not send the application fee, need not send the initial payment, and need not make the monthly installments while the offer is being reviewed.

**The 24-month rule runs against the IRS.** Any offer is **deemed accepted** if it is not rejected before the date {fig:oic.deemed_accepted_months} months after submission, excluding periods during which the liability is the subject of specified proceedings (IRC § 7122(f)).

**Evaluation is by published schedules.** The Secretary must publish guidelines, including national and local allowance schedules designed to leave taxpayers adequate means to provide for basic living expenses (IRC § 7122(d)(2)).

## Current figures

| Item | Amount |
|---|---|
| Application fee | {fig:oic.application_fee} |
| Lump-sum offer, payment with submission | {fig:oic.lump_sum_initial} |
| Lump-sum offer, maximum installments | {fig:oic.lump_sum_max_payments} |
| Deemed accepted if not rejected within | {fig:oic.deemed_accepted_months} months |

## How it works in practice

The application package is Form 656 with the financial statements the booklet requires; individual and business liabilities go on separate Forms 656. Offers can be submitted by mail to the designated sites or online through the taxpayer's individual online account. If the IRS cannot process an offer, it returns the application and the fee and applies any offer payment to the balance due — a return is not a rejection, and does not carry appeal rights.

The choice between lump sum and periodic payment is a cash-flow decision with legal consequences. A lump-sum offer needs 20 percent up front and clears in five or fewer payments. A periodic offer needs only the first installment up front but obliges the taxpayer to keep paying throughout the review, and a missed installment can be treated as withdrawal.

The collection period does not stand still. Levy is barred while an offer is pending and for 30 days after rejection, plus any appeal filed in those 30 days, and the collection period is suspended for the same span (IRC § 6331(k)(1), (k)(3)(B)). A long review therefore adds to the CSED, which matters when the offer fails.

<div class="scenario" data-type="timing">
<h3>The offer that succeeded by silence</h3>
<p>A taxpayer submits a processable offer on 4 March 2024 with the fee and 20 percent. Correspondence goes back and forth, the case moves between units, and no determination issues. On 10 April 2026 the taxpayer's representative asks about status.</p>
<p><em>Analysis.</em> More than 24 months have passed since submission. Unless a period is excluded because the liability was the subject of a proceeding described in § 7122(f), the offer is deemed accepted by operation of the statute — the IRS's silence is the decision. A representative should be tracking that date from the day the offer is submitted.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>Doubt as to liability, foreclosed</h3>
<p>A client lost in Tax Court on whether a payment was taxable, and the decision is final. She now wants to offer a reduced amount on the ground that the liability was wrongly determined.</p>
<p><em>Analysis.</em> {gloss:doubt-as-to-liability} does not exist where the liability has been established by a final court decision or judgment (Reg. § 301.7122-1(b)(1)). That ground is closed. If her assets and income are less than the liability, doubt as to collectibility remains available, and hardship may support effective tax administration — but the merits of the decided issue cannot be relitigated through an offer.</p>
</div>

<div class="scenario" data-type="fails">
<h3>The missed second installment</h3>
<p>A taxpayer submits a periodic payment offer with the first installment and pays the second on time. Cash flow tightens and he skips the third while the offer is under review.</p>
<p><em>Analysis.</em> Section 7122(c)(1)(B)(ii) lets the IRS treat a failure to make an installment other than the first as a withdrawal of the offer. Withdrawal is not rejection: there is no determination to appeal, the levy bar ends, and the money already paid is not returned. If cash flow is uncertain, a lump-sum structure with a larger up-front payment is often the safer election.</p>
</div>

<div class="scenario" data-type="baseline">
<h3>The straightforward doubt-as-to-collectibility offer</h3>
<p>A taxpayer owes $40,000. Her Form 433-A shows assets and future income that, added together, come to $9,000 — the IRS's {gloss:reasonable-collection-potential}. She proposes a lump-sum offer of $9,000, sends 20 percent with Form 656, and the case is assigned to an offer specialist.</p>
<p><em>Analysis.</em> This is doubt as to collectibility working as designed: the offer is pegged to what the IRS could actually collect, not to what she wishes she owed. Provided the financial statement holds up and the national and local allowance schedules are applied correctly, this is the offer most likely to be accepted on the merits.</p>
</div>

<div class="scenario" data-type="procedural">
<h3>The offer returned, not rejected</h3>
<p>A representative submits a Form 656 with a stale Form 433-A and no application fee attached, believing the client qualifies for low-income certification. The client does not meet the guidelines. The IRS sends the package back.</p>
<p><em>Analysis.</em> A non-processable offer is returned, not rejected — the fee and any offer payment come back with it, and there is nothing to appeal. The clock resets: nothing about the return date matters to the deemed-acceptance rule, which only starts running from a processable submission. Confirm the certification before relying on the fee waiver.</p>
</div>

<div class="callout trap"><h4>Traps</h4>
<p><strong>Returned is not rejected.</strong> A non-processable offer comes back with the fee and carries no appeal rights; only a rejection can be appealed.</p>
<p><strong>The 24-month clock is the taxpayer's friend and nobody tracks it.</strong> Diary the submission date; deemed acceptance is automatic, not something the IRS announces.</p>
<p><strong>A final judgment closes doubt as to liability.</strong> It does not close the other two grounds.</p>
<p><strong>Missing an installment on a periodic offer can end it without a decision.</strong> The first installment is the only one exempt from that treatment.</p>
<p><strong>Low-income certification waives the fee, the initial payment, and the installments during review.</strong> Check it before advising a client they cannot afford to apply.</p>
<p><strong>A pending offer lengthens the CSED.</strong> Time spent under review comes back onto the collection period if the offer fails.</p>
</div>

## How this has changed

The modern shape of § 7122 comes from the IRS Restructuring and Reform Act of 1998, which required the allowance schedules in subsection (d) and prohibited rejecting an offer from a low-income taxpayer solely on the amount offered. The submission requirements in subsection (c) and the deemed-acceptance rule in subsection (f) were added by the Tax Increase Prevention and Reconciliation Act of 2005, effective for offers submitted from mid-2006 — before that, nothing had to accompany an offer and no deadline ran against the IRS. Administratively the IRS has broadened low-income certification and now accepts offers through a taxpayer's online account, which changes the mechanics of filing but not the statutory tests.

## Exam focus

The three grounds are the backbone: know their definitions and that a final court decision forecloses doubt as to liability. Expect a computation or classification question on the payment that must accompany an offer — 20 percent for a lump sum, defined as five or fewer installments, versus the first proposed installment for a periodic offer. The 24-month deemed acceptance rule appears regularly, as does the low-income exemption from the fee, the initial payment, and the installments. Remember that a pending offer bars levy and suspends the collection period.

## Check yourself

**1. An offer is submitted and the IRS neither accepts nor rejects it. It is deemed accepted:**
(A) After 12 months (B) After 24 months from submission, excluding specified periods (C) After 24 months from the last correspondence (D) Never; silence is not acceptance
*Answer: B. IRC § 7122(f).*

**2. Which ground is unavailable where a final court judgment established the liability?**
(A) Doubt as to collectibility (B) Effective tax administration (C) Doubt as to liability (D) All three
*Answer: C. Reg. § 301.7122-1(b)(1) excludes it once the liability is established by final decision or judgment.*

**3. A lump-sum offer in compromise must be submitted with:**
(A) The first proposed installment (B) 20 percent of the total offer amount (C) The full offer amount (D) Nothing, if the fee is paid
*Answer: B. A lump-sum offer is one payable in five or fewer installments, and 20 percent accompanies it.*

**4. A taxpayer who meets the low-income certification guidelines need not:**
(A) File the required returns (B) Submit Form 656 (C) Send the application fee, the initial payment, or monthly installments during review (D) Disclose assets
*Answer: C. The certification waives those three; the application and compliance requirements remain.*
