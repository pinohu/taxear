---
title: "Currently Not Collectable (e.g., reasons and reactivation)"
code: "3.3.1.k"
part: 3
domain: "Representation before the IRS"
section: "Representing a taxpayer in the collection process"
description: "What currently not collectible status is and is not, the hardship test that gets an account there, and why the collection statute keeps running throughout."
status: review
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRM, ref: "5.16.1", title: "Currently Not Collectible", url: "https://www.irs.gov/irm/part5/irm_05-016-001r" }
  - { type: IRC, ref: "§ 6343(e)", title: "Release of levy upon agreement that amount is uncollectible" }
  - { type: Reg, ref: "§ 301.6343-1(b)(4)", title: "Economic hardship", url: "https://www.law.cornell.edu/cfr/text/26/301.6343-1" }
  - { type: IRC, ref: "§ 6502", title: "Collection after assessment" }
forms: ["433-A", "433-B"]
related: ["3.3.1.m", "3.3.1.b", "3.3.1.j"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication from IRM 5.16.1 as revised 3 March 2025, IRC § 6343(e) and Reg. § 301.6343-1(b)(4)." }
---

Currently not collectible is a status, not a settlement. The liability survives, interest and penalties continue to run, and — critically — **the collection statute keeps running too**. That last point is why CNC is sometimes the best outcome available to a client and sometimes a trap: on an old assessment it lets the clock finish, and on a fresh one it parks a growing balance for a decade.

## The rule

**What it is.** An account is reported currently not collectible by transaction code 530, which must carry a **closing code** identifying the reason (IRM 5.16.1.2). CNC suspends active collection; it does not compromise, abate or forgive anything.

**Why an account gets there.** The closing codes describe the grounds. The commonly used ones include **inability to locate** the taxpayer or assets (cc 03); **inability to contact**, where the address is known but there is no means to enforce collection (cc 12); **expiration of the collection period**, partial or complete (cc 04, cc 05); **death** of an individual with no collection potential from the decedent or the estate (cc 08); accounts **below tolerance** (cc 09); defunct or liquidated **entities** (cc 07, cc 10); an **in-business entity** current on its obligations but unable to pay back taxes (cc 13); **combat zone** deployment of a key individual (cc 14); and **hardship** (IRM 5.16.1.2).

**The hardship test.** A hardship exists if the taxpayer is **unable to pay reasonable basic living expenses**. The determination rests on the financial condition shown on **Form 433-A** or **Form 433-B**, analysed under the Financial Analysis Handbook at IRM 5.15.1. These cases generally involve no income or assets, no equity in assets, or income insufficient to make any payment without causing hardship. **An account should not be reported CNC if the taxpayer has income or equity in assets and enforced collection would not cause hardship** (IRM 5.16.1.2.9).

**Hardship is limited by taxpayer type.** {fig:cnc.hardship_codes} (IRM 5.16.1.2.9). A corporation cannot be in hardship CNC; it reaches CNC, if at all, through the entity codes.

**Levy release follows.** Section 6343(e) **requires** release of a levy on salary or wages upon agreement with the taxpayer that the tax is currently not collectible, and the economic hardship standard the IRM applies derives from Reg. § 301.6343-1(b)(4)(ii) (IRM 5.16.1.1.2).

**A lien usually still gets filed.** {fig:cnc.nftl_threshold} (IRM 5.16.1.2), subject to the determination criteria in IRM 5.12.2. CNC status protects against levy, not against the notice of lien.

**Compliance is a condition.** Open filing requirements and delinquent return modules must generally be resolved before an account is reported CNC, and a compliance check is documented where the taxpayer is contacted — though not where the taxpayer cannot be contacted (IRM 5.16.1.2).

**Refunds are still taken.** A transaction code 130 is input for **refund offset** when an account goes CNC, so later overpayments are applied to the balance rather than paid out (IRM 5.16.1.3.4). And the IRM is explicit that **taxpayers must be advised that interest and penalties will continue to accrue** even though collection action is suspended, and that other options such as an offer in compromise should be discussed before an account is reported CNC (IRM 5.16.1.3.4). Case closing Letter 4223 goes to the taxpayer and any representative.

**Reactivation.** Only certain CNC cases reactivate systemically: **hardship, unable to locate, and unable to contact**. Unable-to-locate and unable-to-contact cases reactivate when a new levy source posts; hardship cases reactivate against income criteria, and some carry a **mandatory follow-up** date set at closing (IRM 5.16.1.2, 5.16.1.6).

## Current figures

| Item | Value |
|---|---|
| Hardship closing codes and eligible taxpayers | {fig:cnc.hardship_codes} |
| Lien filing on a CNC account | {fig:cnc.nftl_threshold} |
| Collection period while in CNC | {fig:csed.period} — it continues to run |

## How it works in practice

**The collection statute does not stop.** Nothing in CNC suspends § 6502, and that single fact decides whether CNC is a good outcome. A client whose collection statute expiration date is two years out and who genuinely cannot pay is well served by CNC: the balance becomes uncollectible on schedule and no payment is ever made. The same status on an assessment made last year parks a balance that accrues interest for the better part of a decade and then reactivates the moment income rises. The advice is identical in form and opposite in effect, and the difference is the date.

**Compare it honestly against the alternatives.** An offer in compromise resolves the liability; CNC only pauses it. A partial payment installment agreement makes payments that reduce it. CNC makes none. Where a client can pay something, CNC is not available on hardship grounds anyway — the IRM says an account should not be reported CNC where there is income or equity and enforced collection would not cause hardship.

**Expect the lien.** Clients hear "not collectible" and are surprised when a notice of federal tax lien follows. It is normal at or above the threshold, and it is a different question from levy: CNC stops enforced collection, not the recording of the government's priority. Where the notice itself is the client's real problem, the remedy is § 6323(j) withdrawal, not a complaint about the CNC determination.

**Reactivation is automatic in the cases that matter.** Hardship, unable to locate and unable to contact all reactivate systemically, so a client should be told plainly that the file will come back — on a new levy source for the location codes, on income for hardship. Presenting CNC as an ending, rather than a suspension with a trigger, sets up a client for an unpleasant letter.

<div class="scenario">
<h3>The date that made CNC the right answer</h3>
<p>A client owes on a 2016 assessment made in March 2017. He is on disability, has no equity in anything, and cannot pay. The collection statute expiration date is March 2027.</p>
<p><em>Analysis.</em> CNC on hardship grounds is the strongest available outcome. Section 6502 keeps running throughout, so if his circumstances do not improve the liability becomes uncollectible in March 2027 without a payment or an offer fee. An offer in compromise would cost money and, if it took a year to process, would suspend the collection period under § 6331(k)(3) and push the expiration date past the point where waiting would have worked.</p>
</div>

<div class="scenario">
<h3>The corporation that could not be in hardship</h3>
<p>A small operating company owes payroll taxes, is current on its deposits, and genuinely cannot pay the arrears. Its accountant asks for hardship CNC.</p>
<p><em>Analysis.</em> Wrong code. Hardship closing codes are restricted to individual and joint IMF assessments, sole proprietorships, partnerships where a general partner is personally liable, and LLCs where an individual owner is the liable taxpayer (IRM 5.16.1.2.9). A corporation in business, current, and unable to pay back taxes is closing code 13 — a different determination on different criteria. Asking for the wrong one invites a refusal that reads as a rejection of the facts.</p>
</div>

<div class="scenario">
<h3>The client who thought it was over</h3>
<p>A client is placed in hardship CNC in 2024. In 2026 she takes a much better job and, in 2027, receives a balance due notice with two more years of interest on it. She says she was told the debt was written off.</p>
<p><em>Analysis.</em> Nothing was written off. Hardship cases reactivate systemically against income criteria (IRM 5.16.1.2), and interest and penalties accrued throughout. The representative's failure was at the outset: CNC should be explained as a suspension with a trigger and a running clock, together with the collection statute expiration date, so the client can decide whether to resolve the liability while the option is cheap.</p>
</div>

<div class="callout trap"><h4>Traps</h4>
<p><strong>The collection statute keeps running.</strong> CNC does not suspend § 6502 — which is the whole reason it can be the best outcome.</p>
<p><strong>Interest and penalties keep accruing.</strong> Nothing is abated.</p>
<p><strong>Refunds are offset, not paid.</strong> A TC 130 is input so later overpayments go against the balance.</p>
<p><strong>Hardship is not available to every taxpayer.</strong> The hardship codes are limited by entity type.</p>
<p><strong>A lien usually still gets filed</strong> at or above the threshold. CNC stops levy, not the notice.</p>
<p><strong>It reactivates.</strong> Hardship, unable to locate and unable to contact all come back systemically.</p>
<p><strong>Ability to pay defeats it.</strong> Income or equity that could be collected without hardship means no hardship CNC.</p>
</div>

## How this has changed

IRM 5.16.1 was revised on **3 March 2025**, which is the version this page is written from. The economic hardship standard it applies has a longer pedigree: Reg. § 301.6343-1(b)(4)(ii) supplies the "unable to pay reasonable basic living expenses" test, and IRC § 6343(e) — added by the Restructuring and Reform Act of 1998 — makes release of a wage levy **mandatory** on agreement that the amount is currently not collectible, rather than discretionary. The 2025 revision also carries the treatment of restitution-based assessments, which may be closed CNC on hardship grounds and where court-ordered restitution payments count as an allowable expense.

## Exam focus

The definition — a status that suspends collection without touching the liability. That the collection statute continues to run, which is the single most testable consequence. The hardship test and its source in the taxpayer's Form 433-A or 433-B. That hardship codes are restricted by taxpayer type. That a notice of federal tax lien is normally filed anyway. That hardship, unable to locate and unable to contact reactivate systemically. Expect a comparison question against offers in compromise and installment agreements.

## Check yourself

**1. While an account is in currently not collectible status, the ten-year collection period:**
(A) Is suspended (B) Continues to run (C) Restarts (D) Is extended by agreement
*Answer: B. Nothing in CNC suspends IRC § 6502, which is why CNC can let an old liability expire.*

**2. The hardship standard for CNC is that the taxpayer:**
(A) Has filed for bankruptcy (B) Is unable to pay reasonable basic living expenses (C) Owes more than a set threshold (D) Has no assets of any kind
*Answer: B. IRM 5.16.1.2.9, from Reg. § 301.6343-1(b)(4)(ii).*

**3. A taxpayer placed in CNC on hardship grounds should be told that:**
(A) The debt is written off (B) The account will reactivate systemically if income rises, and interest continues to accrue (C) No lien can be filed (D) The collection period is suspended
*Answer: B.*

**4. A taxpayer in CNC status files a return showing a refund. The refund will:**
(A) Be paid, since collection is suspended (B) Be offset against the outstanding balance (C) Be held until the account reactivates (D) Be paid only on request
*Answer: B. A TC 130 refund offset is input when the account is reported CNC.*

**5. A client can make modest monthly payments without hardship. Hardship CNC is:**
(A) Available, since he cannot pay in full (B) Unavailable, because income that can be collected without hardship defeats the determination (C) Available if he requests it in writing (D) Available only with a Form 433-B
*Answer: B. IRM 5.16.1.2.9.*
