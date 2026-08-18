---
title: "Amended returns and claims for refund (e.g., Form 1040X, Form 843, effect on statute of limitations)"
code: "3.3.1.o"
part: 3
domain: "Representation before the IRS"
section: "Representing a taxpayer in the collection process"
description: "The two-part refund rule under IRC 6511, the special periods for bad debts, carrybacks and foreign taxes, and why a timely claim can still recover nothing."
status: review
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6511", title: "Limitations on credit or refund" }
  - { type: IRC, ref: "§ 6513", title: "Time return deemed filed and tax considered paid" }
  - { type: IRC, ref: "§ 6501(c)(7)", title: "Special rule for certain amended returns" }
  - { type: IRC, ref: "§ 6501(c)(4)", title: "Extension by agreement" }
forms: ["1040-X", "843", "872"]
related: ["3.2.6.a", "3.3.1.m", "3.3.2.b", "3.2.6.b", "3.3.3.g", "3.3.1.f", "3.3.1.g"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication from IRC §§ 6511, 6513 and 6501(c)(4), (c)(7)." }
---

Refund claims fail on timing far more often than on substance, and the reason is that § 6511 imposes **two** limits rather than one. The first says when a claim may be filed. The second says how much may be refunded once it is. A claim can clear the first and recover nothing under the second, which is the single most common disappointment in this area and the one clients least expect.

## The rule

**When a claim may be filed.** A claim for credit or refund of an overpayment must be filed {fig:refund.claim_period} (IRC § 6511(a)). The two periods run in parallel and the later one governs.

**How much may be refunded — the look-back.** If the claim is filed within the **three-year** period, the refund may not exceed {fig:refund.lookback.three_year} (IRC § 6511(b)(2)(A)). If it is filed outside that period but within the two-year one, the refund may not exceed {fig:refund.lookback.two_year} (IRC § 6511(b)(2)(B)). **No credit or refund is allowed at all** after the § 6511(a) period unless a claim was filed within it (IRC § 6511(b)(1)).

**When payment is deemed made.** For § 6511 purposes, a return filed **before** the last day prescribed is treated as filed **on** that day, and payment made before the last day prescribed for payment is treated as made on that day — in both cases determined **without regard to extensions** (IRC § 6513(a)). **Withholding** is deemed paid on the 15th day of the fourth month following the close of the taxable year, and **estimated tax** on the last day prescribed for filing the return (IRC § 6513(b)).

**Four special periods** replace the three years:

- **Bad debts and worthless securities** — {fig:refund.baddebt_period} (IRC § 6511(d)(1)).
- **Net operating loss and capital loss carrybacks** — {fig:refund.nol_period} (IRC § 6511(d)(2)(A)).
- **Foreign tax credit** — {fig:refund.ftc_period} (IRC § 6511(d)(3)(A)).
- **Where a § 6501(c)(4) consent was executed** within the claim period, the claim period does not expire {fig:refund.consent_tail} (IRC § 6511(c)(1)).

In each of the first three the amount may **exceed** the ordinary look-back limit, which is the point of them.

**Financial disability suspends the clock.** The periods in § 6511(a), (b) and (c) are {fig:refund.disability_suspension}, on proof furnished as the Secretary requires. The suspension does **not** apply for any period during which someone else was authorised to act on the individual's behalf in financial matters (IRC § 6511(h)).

**The amended return's effect on assessment.** {fig:amended.assessment_tail} (IRC § 6501(c)(7)). Filing an amended return **does not otherwise extend** the assessment period, and it does not restart it.

## Current figures

| Item | Period |
|---|---|
| Filing a claim | {fig:refund.claim_period} |
| Look-back, claim within 3 years | {fig:refund.lookback.three_year} |
| Look-back, claim within 2 years only | {fig:refund.lookback.two_year} |
| Bad debts and worthless securities | {fig:refund.baddebt_period} |
| NOL and capital loss carrybacks | {fig:refund.nol_period} |
| Foreign tax credit | {fig:refund.ftc_period} |
| After a § 6501(c)(4) consent | {fig:refund.consent_tail} |
| Amended return in the last 60 days | {fig:amended.assessment_tail} |

## How it works in practice

**Run both tests, in order.** Is the claim timely under § 6511(a)? Then, separately, how much was paid inside the applicable look-back? A taxpayer who filed a return three years late and then claims a refund a month afterwards is inside the three-year period — the claim is timely — but the look-back reaches only tax paid in the three years before the claim, and withholding on a long-past year was deemed paid on the original due date. The claim is good and the recovery is zero.

**Section 6513(a) is what makes that happen**, and it is where the arithmetic actually lives. Withholding does not count as paid when the employer remitted it; it is deemed paid on the fourth-month date following the year's close. An early-filed return is deemed filed on the due date, without regard to extensions. Both rules move payment dates *earlier*, and earlier payment dates are what fall outside a look-back.

**The special periods are the practitioner's real value.** A client with a worthless security three years back is out of time on the general rule and comfortably inside the seven-year rule, and the amount is not limited by the ordinary look-back. Same for a carryback measured from the loss year rather than the year being amended, and for foreign taxes at ten years. Missing one of these is missing the claim entirely.

**The § 6501(c)(7) rule surprises people in both directions.** An amended return showing additional tax, filed in the last sixty days of the assessment period, gives the IRS sixty days from receipt to assess **that additional amount** — not a fresh three years, and not a reopening of the original return. Practitioners sometimes advise clients that amending "restarts the statute"; it does not. Equally, filing on day fifty-nine to run out the clock does not work.

**Which form.** Form 1040-X amends an individual income tax return and is the vehicle for most income tax refund claims. Form 843 claims a refund or requests abatement of **certain taxes, interest, penalties, fees and additions to tax** — not income tax the taxpayer reported on a return. Choosing the wrong one produces a rejection that costs the time the deadline may not have.

<div class="scenario">
<h3>The timely claim that recovered nothing</h3>
<p>A client never filed for 2021. In February 2026 she files the 2021 return showing a $4,200 overpayment made up entirely of wage withholding, and claims the refund.</p>
<p><em>Analysis.</em> No return had been filed, so the § 6511(a) period is two years from payment. Under § 6513(b)(1) the withholding is deemed paid on 15 April 2022. Two years from then expired in April 2024, so the claim is out of time and nothing is recoverable — and even on the three-year branch, the look-back would reach only tax paid in the three years before February 2026. The client's money was lost in 2024, not in 2026, and there was a window in which filing would have recovered all of it.</p>
</div>

<div class="scenario">
<h3>The security that was worthless in 2019</h3>
<p>In 2026 a client establishes that a holding became worthless in 2019. The 2019 return was filed on time in April 2020. He asks whether anything can be done.</p>
<p><em>Analysis.</em> The general three-year period expired in April 2023. But § 6511(d)(1) gives <strong>seven years</strong> from the date prescribed for filing the 2019 return for a claim relating to worthlessness of a security under § 165(g) — so April 2027. The claim is in time, and § 6511(d)(1) also allows the amount to exceed the ordinary look-back limit. Applying the general rule here would have cost the client the entire refund.</p>
</div>

<div class="scenario">
<h3>The amendment filed on day fifty-five</h3>
<p>A client's 2022 assessment period expires on 15 April 2026. On 20 February 2026 he files an amended return showing $18,000 of additional tax, hoping the IRS will not process it in time.</p>
<p><em>Analysis.</em> The document was received within the 60-day period ending on the assessment deadline, so under § 6501(c)(7) the period for assessing <strong>that additional amount</strong> does not expire before 60 days after receipt — around 21 April 2026. The strategy fails. Note the limit as well: the extension reaches only the additional amount shown, not the rest of the return, and the ordinary period still governs everything else.</p>
</div>

<div class="callout trap"><h4>Traps</h4>
<p><strong>Two tests, not one.</strong> Timeliness under § 6511(a), then the look-back under § 6511(b)(2).</p>
<p><strong>Withholding is deemed paid on the fourth-month date</strong>, not when the employer remitted it.</p>
<p><strong>Extensions do not move the § 6513(a) deemed dates</strong>, though they do extend the § 6511(b)(2)(A) look-back.</p>
<p><strong>Amending does not restart the assessment period.</strong> Section 6501(c)(7) adds 60 days for the additional amount shown, and nothing more.</p>
<p><strong>The special periods allow more than the look-back.</strong> That is what distinguishes them.</p>
<p><strong>Form 843 is not for income tax reported on a return.</strong> Use Form 1040-X.</p>
</div>

## How this has changed

Section 6511(h), suspending the periods while an individual is financially disabled, was added by the Restructuring and Reform Act of 1998 in response to cases where seriously ill taxpayers lost refunds to the statute. Its exception is as important as the rule: no suspension for any period during which another person was authorised to act on the individual's behalf in financial matters, so a taxpayer with a functioning power of attorney in place does not get the benefit. The foreign tax credit period in § 6511(d)(3)(A) is the ten-year rule as it now reads; earlier practice under the same subsection was the subject of extended dispute about whether the ten years applied to the credit alone or to the whole overpayment, and the current text should be read rather than recalled.

## Exam focus

The two-part structure is the whole topic. Learn § 6511(a)'s later-of test and the two look-back limits in § 6511(b)(2), and be able to apply them to a fact pattern where the answer is "timely but nothing recoverable". Know the § 6513 deemed payment dates cold, especially withholding. Learn the four special periods and that each permits recovery beyond the ordinary look-back. Know that § 6501(c)(7) adds sixty days for the additional amount shown and does not restart anything. Expect Form 1040-X and Form 843 to be distinguished.

## Check yourself

**1. A taxpayer filed his 2022 return on the due date and paid in full. The last day to claim a refund of 2022 tax is generally:**
(A) Two years from the due date (B) Three years from the time the return was filed, or two years from payment, whichever is later (C) Ten years from assessment (D) There is no deadline
*Answer: B. IRC § 6511(a).*

**2. A claim is filed within the two-year period but outside the three-year period. The refund is limited to:**
(A) Tax paid in the three years before the claim (B) Tax paid in the two years immediately preceding the claim (C) The full overpayment (D) Nothing
*Answer: B. IRC § 6511(b)(2)(B).*

**3. For IRC 6511 purposes, income tax withheld from wages during 2025 is deemed paid:**
(A) When the employer remitted it (B) On 15 April 2026 (C) On 31 December 2025 (D) When the return is filed
*Answer: B. IRC § 6513(b)(1) — the 15th day of the fourth month following the close of the taxable year.*

**4. A claim relating to a security that became worthless must be filed within:**
(A) Three years of filing the return (B) Seven years from the date prescribed for filing the return for the year concerned (C) Ten years (D) Two years of payment
*Answer: B. IRC § 6511(d)(1).*

**5. A taxpayer files an amended return showing additional tax 40 days before the assessment period expires. The IRS may assess that amount:**
(A) Only before the original deadline (B) Within 60 days after receiving the amended return (C) Within three years of the amended return (D) At any time
*Answer: B. IRC § 6501(c)(7), and only as to the additional amount shown.*
