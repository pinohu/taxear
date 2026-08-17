---
title: "Statute of limitations: assessment, refund, and collection"
code: "3.2.6.a"
part: 3
domain: "Representation before the IRS"
section: "Related issues"
description: "The three federal tax limitations periods, how each is measured, when each is extended or suspended, and how practitioners use them in exams, refunds, and collection."
status: review
taxYear: 2026
lastReviewed: "2026-08-17"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6501", title: "Limitations on assessment and collection" }
  - { type: IRC, ref: "§ 6502", title: "Collection after assessment" }
  - { type: IRC, ref: "§ 6511", title: "Limitations on credit or refund" }
  - { type: IRC, ref: "§ 6513", title: "Time return deemed filed and tax considered paid" }
  - { type: IRC, ref: "§ 6503", title: "Suspension of running of period of limitation" }
  - { type: IRC, ref: "§ 6532", title: "Periods of limitation on suits" }
  - { type: Reg, ref: "301.6501(c)-1", title: "Exceptions to general period of limitations" }
  - { type: IRM, ref: "25.6.1", title: "Statute of Limitations Processes and Procedures", url: "https://www.irs.gov/irm/part25/irm_25-006-001" }
  - { type: Form, ref: "872", title: "Consent to Extend the Time to Assess Tax" }
  - { type: Form, ref: "1040-X", title: "Amended U.S. Individual Income Tax Return" }
forms: ["872", "1040-X", "843"]
related: ["3.3.1.b", "3.3.1.c", "3.3.3.a", "3.4.2.a"]
changelog:
  - { date: "2026-08-17", summary: "Initial draft from primary sources." }
---

Federal tax has three separate clocks, and most limitations mistakes come from mixing them up. The **assessment** clock limits how long the IRS has to determine and record additional tax. The **refund** clock limits how long a taxpayer has to claim money back. The **collection** clock limits how long the IRS has to collect tax once it is assessed. Each starts from a different event, each has its own extensions and suspensions, and a case can be open on one clock and closed on another.

## The rule

**Assessment.** The IRS must assess tax within three years after the return was filed (IRC § 6501(a)). A return filed before its due date is treated as filed on the due date (IRC § 6501(b)(1); § 6513(a)), so early filing never shortens the period; late filing pushes the start to the actual filing date. Two important exceptions extend it: where the return omits more than 25 percent of the gross income stated on it, the period is six years (IRC § 6501(e)(1)(A)); and where no return is filed, or the return is false or fraudulent with intent to evade tax, there is no limitations period at all (IRC § 6501(c)(1)–(3)). The three-year period is measured to the date the IRS records the assessment, not the date it sends a notice, and a statutory notice of deficiency issued before the period ends suspends it while the taxpayer can petition the Tax Court and for 60 days after (IRC § 6503(a)(1)).

**Refund.** A claim for credit or refund must be filed within three years from the time the return was filed or two years from the time the tax was paid, whichever is later; if no return was filed, the two-year rule applies (IRC § 6511(a)). Timely filing is only half of it. The amount refundable is capped by the *look-back*: for a claim filed within the three-year window, the refund cannot exceed tax paid within the three years (plus any extension period) immediately before the claim; for a claim under the two-year rule, only tax paid within the two years before the claim (IRC § 6511(b)(2)). Withholding and estimated payments are deemed paid on the original due date of the return (IRC § 6513(b)), which is why a taxpayer who files a delinquent return four years late usually gets nothing back even though the return itself is the "claim."

**Collection.** Once tax is assessed, the IRS has ten years to collect by levy or by a court proceeding (IRC § 6502(a)(1)). This is the collection statute expiration date, or CSED, and it can be suspended or extended by several events discussed below.

## Periods at a glance

| Clock | Period | Measured from | Authority |
|---|---|---|---|
| Assessment, general | {fig:sol.assessment.general} | Return filed (early = due date) | IRC § 6501(a), (b) |
| Assessment, substantial omission | {fig:sol.assessment.substantial_omission} | Same | IRC § 6501(e) |
| Assessment, fraud / no return | {fig:sol.assessment.fraud_no_return} | — | IRC § 6501(c) |
| Refund claim | {fig:sol.refund.general} | Filing or payment | IRC § 6511(a) |
| Collection | {fig:sol.collection} | Assessment date | IRC § 6502(a) |

## How it works in practice

The IRS tracks the assessment statute expiration date (ASED) on every return and will not open or continue an examination that cannot be closed before it runs, which is why an examiner working a return near the end of the third year will ask the taxpayer to sign Form 872, a consent that extends the assessment period to a specified date (IRC § 6501(c)(4)). The consent must be signed before the existing period expires; a consent signed afterward is void. Form 872-A is an open-ended version terminated by Form 872-T. A taxpayer may refuse; the practical result is that the IRS issues a notice of deficiency for whatever it can support at that point.

For refunds, the claim is normally the amended return, Form 1040-X for individuals, or Form 843 for penalties, interest, and certain other taxes. The two dates that matter are the postmark date of the claim and the dates the tax was paid. If the IRS disallows the claim, the taxpayer has two years from the notice of disallowance to sue in district court or the Court of Federal Claims (IRC § 6532(a)(1)); the taxpayer may also sue after six months if the IRS has not acted.

For collection, the CSED runs from each assessment separately, so a single tax year can have several CSEDs: the original assessment, a later exam assessment, and a penalty assessment each start their own ten years. The period is suspended while the IRS is legally barred from collecting and, in most of those situations, for a tail afterward: during a pending offer in compromise and 30 days after rejection (IRC § 6331(k); § 6503(f)... see IRM 25.6.1 for the current list); during a Collection Due Process hearing and any appeal (IRC § 6330(e)(1)); while the taxpayer is in bankruptcy and for six months after (IRC § 6503(h)); and while the taxpayer is outside the United States for a continuous period of at least six months (IRC § 6503(c)). An installment agreement does not by itself suspend the CSED, but the period is suspended while a proposed agreement is pending, for 30 days after rejection or termination, and during any appeal of the rejection (IRC § 6331(k)(2)-(3)). Voluntary extensions of the collection period are now limited to those made in connection with an installment agreement (IRC § 6502(a)(2)).

<div class="scenario">
<h3>An early return and a late claim</h3>
<p>Dana files her 2022 Form 1040 on February 10, 2023 (due date April 18, 2023), with $6,000 withheld and a $400 balance paid with the return. In March 2026 she discovers a missed credit worth $1,500 and files a 1040-X on March 20, 2026.</p>
<p><em>Analysis.</em> The return is deemed filed April 18, 2023, so the three-year refund window runs to April 18, 2026; the claim is timely. The look-back covers tax paid in the three years before March 20, 2026, i.e., on or after March 20, 2023. Withholding is deemed paid April 18, 2023, inside the window, so the entire $6,400 is available and the $1,500 refund is allowed. Had she filed the claim on April 30, 2026, the claim would be late unless the two-year-from-payment rule saved it, and it would not, because the last payment was April 18, 2023.</p>
</div>

<div class="scenario">
<h3>The delinquent filer who expects a refund</h3>
<p>Marcus never filed his 2021 return. He had $4,200 withheld and would have been due a $1,100 refund. He files the return on June 3, 2026.</p>
<p><em>Analysis.</em> The return is his claim, and it is filed within three years of... nothing, because no return was previously filed; the claim is timely under § 6511(a) as a claim filed within three years of the return it accompanies. But the look-back under § 6511(b)(2)(A) limits the refund to tax paid in the three years before June 3, 2026. His withholding was deemed paid April 18, 2022, more than three years earlier. Refund: zero. The assessment clock, by contrast, only starts now, so the IRS has until June 3, 2029 to assess any additional tax for 2021.</p>
</div>

<div class="scenario">
<h3>Six years, or forever?</h3>
<p>Priya reported $80,000 of gross income on her timely 2023 return but omitted a $30,000 consulting fee. Separately, she deducted a $12,000 expense she cannot substantiate.</p>
<p><em>Analysis.</em> The omitted $30,000 is 37.5 percent of the $80,000 stated on the return, over the 25 percent threshold, so the assessment period is six years from the April 2024 filing date (§ 6501(e)(1)(A)). The unsubstantiated deduction does not count toward the omission test, which looks only at omitted gross income; on its own it would leave the three-year period in place. Neither fact makes the period unlimited: § 6501(c)(1) requires fraud, which the IRS must prove, and a large omission alone is not proof of intent to evade.</p>
</div>

<div class="scenario">
<h3>Stacking suspensions on the CSED</h3>
<p>Leo's 2015 liability was assessed on June 1, 2017. He filed an offer in compromise on March 1, 2020 that the IRS rejected on November 1, 2020, and he did not appeal. He filed Chapter 7 bankruptcy on May 1, 2022 and was discharged September 1, 2022.</p>
<p><em>Analysis.</em> Start with the base CSED, June 1, 2027. The offer suspends the period from March 1 to November 1, 2020, plus 30 days: 275 days. The bankruptcy suspends it from May 1 to September 1, 2022, plus six months: 123 days plus 182 days. Roughly 580 days are added, moving the CSED to about January 2029. A practitioner should request the account transcripts and compute the CSED independently rather than accept a collector's date, because suspension arithmetic is a frequent source of IRS error.</p>
</div>

<div class="callout trap"><h4>Traps</h4>
<p><strong>The look-back is not the deadline.</strong> Practitioners often check only that a claim is within three years and miss that the refundable amount is limited to payments made in the look-back window. This is the rule that turns a timely delinquent return into a zero refund.</p>
<p><strong>Amended returns do not restart the assessment clock.</strong> An amended return showing additional tax filed within 60 days before the period expires gives the IRS 60 days from receipt to assess that additional amount (§ 6501(c)(7)), but otherwise the original return's date controls.</p>
<p><strong>"Two years from payment" can help a late payer.</strong> A taxpayer who paid an old liability last year can still claim a refund of that payment within two years, even though the three-year period from the return closed long ago; the look-back then limits the refund to that payment.</p>
<p><strong>Signing Form 872 has scope.</strong> A restricted consent limits the extension to specified issues; an unrestricted consent extends the whole return. Read what the examiner sends.</p>
</div>

## How this has changed

The three-year assessment rule and the ten-year collection rule are long-standing, but the collection period has been reshaped over time. Before 1990 the collection period was six years; the Omnibus Budget Reconciliation Act of 1990 made it ten. The IRS Restructuring and Reform Act of 1998 removed the IRS's practice of obtaining open-ended waivers of the collection period from taxpayers, restricting extensions to those tied to installment agreements, and added the Collection Due Process suspension. More recently, the Supreme Court in *United States v. Home Concrete & Supply, LLC* (2012) held that an overstatement of basis is not an "omission from gross income" for the six-year rule; Congress responded in the Surface Transportation and Veterans Health Care Choice Improvement Act of 2015 by amending § 6501(e)(1)(B) so that an overstatement of unrecovered cost or basis *is* an omission for this purpose. Any legislation after the tax year shown in the verification stamp has not been incorporated.

## Exam focus

Part 3 questions on this outline item almost always test one of four things: measuring the three-year assessment period from a return filed early or late; the six-year and unlimited exceptions and what triggers each; the refund rule with its look-back, especially the delinquent filer who gets nothing back; and events that suspend the ten-year collection period. Expect date arithmetic; write out the timeline before choosing an answer.

## Check yourself

**1. A taxpayer files a 2024 return on March 3, 2025. Absent an extension or exception, the last day for the IRS to assess additional tax is:**
(A) March 3, 2028 (B) April 15, 2028 (C) March 3, 2031 (D) April 15, 2031
*Answer: B. An early-filed return is deemed filed on the due date; three years from April 15, 2025.*

**2. A taxpayer files a 2021 return on May 1, 2026 with $3,000 of withholding and no other payments. The maximum refund is:**
(A) $3,000 (B) $2,000 (C) $0 (D) It depends on the tax due
*Answer: C. Withholding is deemed paid April 18, 2022, outside the three-year look-back from May 1, 2026.*

**3. Which event does NOT suspend the ten-year collection period?**
(A) A pending offer in compromise (B) An accepted installment agreement in good standing (C) A pending Collection Due Process hearing (D) The taxpayer's bankruptcy case
*Answer: B. An installment agreement suspends the period only while it is pending or being appealed after rejection, not while it is in effect.*
