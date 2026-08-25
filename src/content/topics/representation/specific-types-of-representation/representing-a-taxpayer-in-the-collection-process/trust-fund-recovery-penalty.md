---
title: "Trust fund recovery penalty"
code: "3.3.1.n"
part: 3
domain: "Representation before the IRS"
section: "Representing a taxpayer in the collection process"
description: "The two elements of IRC 6672 liability, what the IRS means by responsibility and willfulness, the 60-day letter, and the bond route that stays collection."
status: published
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "I. Ohu"
authorities:
  - { type: IRC, ref: "§ 6672", title: "Failure to collect and pay over tax, or attempt to evade or defeat tax" }
  - { type: IRC, ref: "§ 6671(b)", title: "Person defined" }
  - { type: IRM, ref: "5.7.3", title: "Establishing Responsibility and Willfulness for the Trust Fund Recovery Penalty", url: "https://www.irs.gov/irm/part5/irm_05-007-003r" }
  - { type: IRM, ref: "5.7.4", title: "Investigation and Recommendation of the TFRP", url: "https://www.irs.gov/irm/part5/irm_05-007-004r" }
  - { type: IRC, ref: "§ 6331(i)", title: "No levy during pendency of proceedings for refund of divisible tax" }
forms: []
related: ["3.3.1.j", "3.3.1.m", "3.3.1.d", "3.3.1.l"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication from IRC § 6672 and IRM 5.7.3 and 5.7.4 as revised June and July 2025." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the two-element test, glossary marks, and two typed scenarios covering the Form 4180 interview pause and the divisible-tax refund route." }
diagram:
  archetype: "decision"
  caption: "The two elements the IRS must establish before the penalty attaches"
  tests:
    - { test: "Responsible person: duty to perform, power to direct collection, and authority to decide which creditors are paid", result: "First element established", outcome: "pass" }
    - { test: "Willful: aware or should have been aware, and disregarded the law or was plainly indifferent — no bad motive required", result: "Second element established", outcome: "pass" }
    - { test: "Either element missing, or the unpaid volunteer board member exception applies", result: "No trust fund recovery penalty", outcome: "fail" }
---

<div class="plain-terms">
The trust fund recovery penalty lets the IRS collect unpaid payroll taxes from a person
instead of just the business. It targets withheld amounts: the part of an employee's
paycheck a business held back to send to the government but never sent. It can reach
owners, officers, bookkeepers, or anyone else with real control over which bills got
paid. Simply being on the payroll is not enough by itself. The IRS has to prove two
separate things before this penalty can apply. First, that the person truly had the power
to decide the tax got paid. Second, that the person knew, or should have known, about the
unpaid tax and let it slide anyway. Both must be true, not just one.
</div>

The trust fund recovery penalty is not really a penalty. It is a device for collecting withheld employment taxes from individuals when the employer cannot pay, and it reaches people who never thought of themselves as taxpayers on the liability. Two elements have to be established, both of them, and the defence almost always lies in the second.

## The rule

**The liability.** Any person **required to collect, truthfully account for, and pay over** any tax who **willfully fails** to do so, or willfully attempts to evade or defeat the tax or its payment, is liable for a penalty equal to {fig:tfrp.amount} (IRC § 6672(a)). It is imposed **in addition to other penalties**, though no § 6653 or subchapter A chapter 68 penalty applies to conduct § 6672 covers.

**Two elements, both required.** The IRS must establish that the person was **responsible** and that the failure was **willful**. Neither alone suffices.

**Who is a "person".** For this subchapter the term **includes an officer or employee of a corporation, or a member or employee of a partnership, who as such is under a duty to perform the act** in respect of which the violation occurs (IRC § 6671(b)). The liability is individual: the employing entity owes the underlying tax directly and is not the target of § 6672.

**Responsibility is status, duty and authority**, determined on the facts of each case (IRM 5.7.3.4.1). A responsible person has a **duty to perform**, the **power to direct** the act of collecting trust fund taxes, **accountability for and authority to pay** them, and **authority to determine which creditors will or will not be paid**. The IRM's indicators are practical: who is an officer, director or shareholder; who hires and fires; who exercises authority over which creditors get paid; who signs and files the Form 941; who controls payroll and disbursements; who controls the voting stock; who makes the federal tax deposits. The potentially responsible population is wide — officers and employees of a corporation, partners and employees of a partnership, LLC members and managers, another corporation, a surety lender, a payroll service provider or professional employer organisation and persons within it, and persons entirely outside the delinquent business.

**Willfulness needs no bad motive.** It means **intentional, deliberate, voluntary, reckless, knowing — as opposed to accidental**, and "no evil intent or bad motive is required" (IRM 5.7.3.4.2). The government must generally show the responsible person **was aware, or should have been aware,** of the outstanding taxes and either **intentionally disregarded the law or was plainly indifferent** to its requirements. And the IRM is explicit that **failure to investigate or correct mismanagement after being notified** that withholding taxes have not been paid satisfies the element.

**The volunteer exception.** No penalty is imposed on an unpaid, volunteer member of the board of a tax-exempt organisation who is **solely serving in an honorary capacity**, **does not participate in day-to-day or financial operations**, and **does not have actual knowledge** of the failure — unless applying the exception would leave **no person liable** (IRC § 6672(e)).

**The preliminary notice.** No penalty may be imposed unless the IRS first notifies the person in writing, by mail to the § 6212(b) address or in person, that they will be subject to assessment (IRC § 6672(b)(1)). That notice — Letter 1153, with Form 2751 proposing the assessment — {fig:tfrp.preliminary_notice} (IRC § 6672(b)(2)). In practice the IRS waits {fig:tfrp.restriction_period} before issuing notice and demand (IRM 5.7.4.7). **Jeopardy dispenses with the requirement** (IRC § 6672(b)(4)).

**The assessment period tail.** Where the preliminary notice is given before the § 6501 period expires, the period does not expire {fig:tfrp.assessment_tail} (IRC § 6672(b)(3)).

**Signing Form 2751 does not give up the appeal.** The IRM directs that a signed waiver not be treated as conclusive until the restriction period expires, "as a responsible person may change their mind," and states plainly that **a signature on Form 2751 does not extinguish appeal rights** (IRM 5.7.4.2.4).

**The bond route.** Within 30 days of notice and demand, a person who does three things — {fig:tfrp.bond_stay} — stops levy and court collection of the remainder until a proceeding is finally resolved (IRC § 6672(c)(1)). Failing to sue within 30 days of denial of the refund claim ends the protection (IRC § 6672(c)(2)).

**Contribution.** Where more than one person is liable, a person who paid may **recover from the others** the excess over their proportionate share — but only in a **separate proceeding**, not joined or consolidated with the government's collection action (IRC § 6672(d)).

## Current figures

| Item | Value |
|---|---|
| Amount of the penalty | {fig:tfrp.amount} |
| Preliminary notice before notice and demand | {fig:tfrp.preliminary_notice} |
| Restriction period in practice | {fig:tfrp.restriction_period} |
| Assessment period tail | {fig:tfrp.assessment_tail} |
| Bond route to stay collection | {fig:tfrp.bond_stay} |

## How it works in practice

**Fight willfulness, not responsibility.** Responsibility is usually easy for the government to establish — cheque-signing authority alone gets most of the way there — and arguing about it burns credibility. Willfulness is where the facts differ between people who look alike on an organisation chart. The controlling question is what the person knew and when, and what they did after they knew.

**"Should have been aware" is the trap.** The standard is not actual knowledge. A responsible person who was told the taxes were unpaid and did not investigate has satisfied willfulness by the IRM's own terms. So has one who kept paying suppliers to keep the doors open. Preferring other creditors after learning of the delinquency is the classic willful act, and clients describe it as trying to save the business, which is true and irrelevant.

**The Form 4180 interview is the case.** It is the record of what the person knew, when, and what authority they had, and it is used against every other potentially responsible person too. A client should not attend one unprepared, and the IRM confirms that an interview is suspended if the person says they wish to consult a representative.

**Signing Form 2751 to make it go away is common and usually a mistake** — though not a fatal one. The IRM preserves appeal rights notwithstanding the signature and does not treat the waiver as conclusive until the restriction period runs. A client who signed at the kitchen table still has the protest.

**The divisible tax point is worth knowing.** The TFRP is a divisible tax for § 6331(i) purposes, so paying the tax attributable to a single employee for one quarter and suing for refund can put the whole liability before a district court while barring levy during the proceeding. That is a cheaper route to a judicial forum than the bond in § 6672(c), and it is why practitioners talk about paying "one employee, one quarter".

<div class="scenario" data-type="fails">
<h3>The bookkeeper with signature authority</h3>
<p>A bookkeeper signs cheques on the company account under the owner's direction. She has no authority to decide which bills get paid, does not hire or fire, and holds no shares. When the payroll taxes go unpaid she is issued a Letter 1153.</p>
<p><em>Analysis.</em> Cheque-signing authority is one indicator, not the test. The IRM asks who has the duty to perform, the power to direct collection, accountability and authority to pay, and — decisively here — <strong>authority to determine which creditors will or will not be paid</strong>. A signatory executing instructions has none of that, so she is not a {gloss:responsible-person}. The protest goes to responsibility, which is the rarer of the two arguments and the right one on these facts.</p>
</div>

<div class="scenario" data-type="baseline">
<h3>Keeping the doors open</h3>
<p>An owner learns in March that two quarters of withholding were not deposited. He decides to pay the suppliers first so the business survives long enough to earn the money, intending to catch up. It does not survive.</p>
<p><em>Analysis.</em> {gloss:willful}. He was aware of the outstanding taxes and preferred other creditors, which is intentional disregard by the IRM's standard, and no evil intent is required. The commercial logic is real and makes no difference. Had he brought the problem to a representative in March, the available moves — deposits going forward, a designated payment allocation, an installment agreement for the employer — were all still open.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The honorary trustee</h3>
<p>A retired academic sits on the board of a small charity. She attends two meetings a year, has no role in operations or finances, is unpaid, and first hears about unpaid withholding when the Letter 1153 arrives. Two paid officers ran the organisation.</p>
<p><em>Analysis.</em> Section 6672(e) protects her: unpaid volunteer board member, solely honorary, no participation in day-to-day or financial operations, no actual knowledge. The exception has a sting — it does not apply if it would leave no person liable — but here the two paid officers are available, so it operates. The IRM adds that where the exception is in play the IRS may need to show <em>actual knowledge</em>, which is a higher bar than the ordinary "should have been aware".</p>
</div>

<div class="scenario" data-type="procedural">
<h3>The interview that gets paused</h3>
<p>A revenue officer schedules a Form 4180 interview with a former controller who may be a responsible person. Asked who decided which bills got paid during the delinquent quarters, she says she wants to consult a representative first.</p>
<p><em>Analysis.</em> The interview stops there. IRM procedure suspends a Form 4180 interview once the person says they wish to consult a representative, rather than pressing on. Everything said in that interview becomes part of the record used to weigh both her own responsibility and willfulness and, potentially, everyone else's at the company — which is exactly why having a representative present before answering matters more than answering quickly.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>Paying one employee, one quarter</h3>
<p>A responsible person is assessed the full {gloss:trust-fund-recovery-penalty} covering eight quarters and three employees. Rather than posting the § 6672(c) bond, her representative has her pay the tax attributable to a single employee for a single quarter and file a claim for refund.</p>
<p><em>Analysis.</em> Because the TFRP is a divisible tax, that partial payment is enough to sue for refund in district court over the whole assessment, and § 6331(i) bars levy on the remainder while that proceeding is pending. It reaches the same practical protection as the § 6672(c) bond route, but by combining the divisibility rule with the levy-bar provision instead of using either alone — cheaper up front, and worth knowing as an alternative when a bond is hard to obtain.</p>
</div>

<div class="callout trap"><h4>Traps</h4>
<p><strong>Two elements, and willfulness is where cases are won.</strong> Responsibility is usually conceded.</p>
<p><strong>No bad motive is required.</strong> Reckless or plainly indifferent is enough.</p>
<p><strong>Paying other creditors after learning of the delinquency is the classic willful act.</strong></p>
<p><strong>Signing Form 2751 does not extinguish appeal rights.</strong> IRM 5.7.4.2.4 says so.</p>
<p><strong>The penalty is the trust fund portion only</strong> — not the employer's share, and not the employer's penalties and interest.</p>
<p><strong>It is a divisible tax.</strong> One employee, one quarter, paid and claimed, opens a district court forum and bars levy under § 6331(i).</p>
</div>

## How this has changed

Section 6672 acquired most of its taxpayer protections in the 1990s. The **preliminary notice requirement** in § 6672(b) and the **right of contribution** in § 6672(d) came from the Taxpayer Bill of Rights 2 (Pub. L. 104-168, 1996), along with the **volunteer board member exception** in § 6672(e); before then, a person could be assessed with no advance warning and had no statutory route to recover from co-liable persons. The Restructuring and Reform Act of 1998 added "or in person" to the notice provision, permitting hand delivery. The IRM has moved much more recently: **IRM 5.7.3 was revised 6 June 2025 and IRM 5.7.4 on 1 July 2025**, and it is those versions that carry the current interview, notification and restriction-period procedures.

## Exam focus

The two elements and their definitions — status, duty and authority for responsibility; intentional, deliberate, voluntary, reckless or knowing for willfulness, with no bad motive required. That the penalty equals the trust fund portion. The preliminary notice and its 60-day minimum before notice and demand. The volunteer board member exception and its three conditions plus the no-one-liable proviso. The right of contribution and that it must be a separate proceeding. Expect a fact pattern asking who is responsible among several people at one company.

## Check yourself

**1. The trust fund recovery penalty equals:**
(A) The full employment tax liability including the employer's share (B) The trust fund portion — the tax not collected, or not accounted for and paid over (C) 75 percent of the unpaid tax (D) The unpaid tax plus penalties and interest
*Answer: B. IRC § 6672(a).*

**2. Willfulness under IRC 6672 requires:**
(A) An evil motive or intent to defraud (B) Intentional, deliberate, voluntary, reckless or knowing conduct — no bad motive needed (C) A criminal conviction (D) Actual knowledge in every case
*Answer: B. IRM 5.7.3.4.2.*

**3. An unpaid volunteer director of a tax-exempt organisation escapes the penalty if she serves solely honorarily, takes no part in operations, and lacks actual knowledge — unless:**
(A) The organisation is small (B) Applying the exception would leave no person liable for the penalty (C) She signed any cheque (D) The failure exceeded one quarter
*Answer: B. IRC § 6672(e).*

**4. A responsible person who signs Form 2751 agreeing to the assessment:**
(A) Waives the right to appeal (B) Retains appeal rights; the IRS does not treat the waiver as conclusive until the restriction period expires (C) Must pay within 10 days (D) Cannot later claim a refund
*Answer: B. IRM 5.7.4.2.4.*

**5. One of three liable persons pays the whole penalty. To recover the others' shares he must:**
(A) Raise it as a defence in the government's collection action (B) Bring a separate proceeding, not joined or consolidated with the collection action (C) Ask the IRS to reallocate (D) Nothing; there is no right of contribution
*Answer: B. IRC § 6672(d).*
