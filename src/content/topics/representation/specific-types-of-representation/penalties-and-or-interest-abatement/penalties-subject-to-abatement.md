---
title: "Which penalties can be abated"
code: "3.3.2.a"
part: 3
domain: "Specific Types of Representation"
section: "Penalties and/or interest abatement"
description: "The penalties a representative most often seeks to remove, the rates behind them, and which relief route reaches which penalty — including what first-time abate cannot."
status: review
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6651", title: "Failure to file tax return or to pay tax" }
  - { type: IRC, ref: "§ 6656", title: "Failure to make deposit of taxes" }
  - { type: IRC, ref: "§ 6662", title: "Imposition of accuracy-related penalty on underpayments" }
  - { type: IRC, ref: "§ 6663", title: "Imposition of fraud penalty" }
  - { type: IRC, ref: "§ 6404", title: "Abatements" }
  - { type: IRM, ref: "20.1.1", title: "Penalty Handbook, Introduction and Penalty Relief", url: "https://www.irs.gov/irm/part20/irm_20-001-001r" }
  - { type: RevProc, ref: "2025-32", title: "Inflation-adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: ["843"]
related: ["3.3.2.b", "3.2.6.a", "3.3.1.b", "3.1.4.b", "3.1.4.a"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication from IRC §§ 6651, 6656, 6662, 6663, 6404 and IRM 20.1.1." }
---

Abatement work starts with identifying the penalty precisely, because the relief routes are not interchangeable. The administrative waiver that clears a late-filing penalty does nothing for an accuracy-related penalty, and the statutory defence that answers an accuracy penalty is not the same test as the one in the late-filing statute.

## The rule

**Failure to file** adds {fig:penalty.ftf.rate} of the tax required to be shown, unless the failure is due to reasonable cause and not willful neglect (IRC § 6651(a)(1)). **Failure to pay** the amount shown adds {fig:penalty.ftp.rate}, on the same reasonable-cause condition (IRC § 6651(a)(2)).

For a return filed more than 60 days late, the failure-to-file addition **cannot be less than** {fig:penalty.ftf.minimum} (IRC § 6651(a) flush language). That floor is indexed under § 6651(j) and rounded down to a multiple of five dollars, and it is keyed to the calendar year in which the return is *required to be filed* rather than the tax year it reports.

Where both additions run for the same month, the failure-to-file amount is **reduced by** the failure-to-pay amount for that month, though never below the 60-day floor (IRC § 6651(c)(1)).

**Failure to deposit** employment and certain other taxes carries its own penalty (IRC § 6656). **Accuracy-related** underpayments add {fig:penalty.accuracy.rate} (IRC § 6662(a)); **fraud** adds {fig:penalty.fraud.rate} of the portion attributable to fraud (IRC § 6663(a)).

**The general abatement authority** lets the Secretary abate the unpaid portion of an assessment that is excessive in amount, assessed after the limitations period expired, or erroneously or illegally assessed (IRC § 6404(a)).

**First-time abate reaches three penalties and no others.** IRM 20.1.1.3.3.2.1 provides administrative relief from the failure-to-file penalty under § 6651(a)(1), § 6698(a)(1), or § 6699(a)(1); the failure-to-pay penalty under § 6651(a)(2) or (a)(3); and the failure-to-deposit penalty under § 6656. Accuracy-related and fraud penalties are outside it entirely.

**That waiver is being replaced.** The IRS is transitioning first-time abate to **Automatic Exemption from Penalty**, beginning summer 2026. It covers the same three penalties, but it operates before assessment rather than after: a taxpayer who files or pays late in the current year, having timely filed and paid for the three prior years — or twelve consecutive quarters for quarterly filers — is **not assessed** the penalty at all, and receives a notice saying the relief was applied. It reaches Forms 1040, 1065, and 1120, the 940, 941, 943, 944, and 945 series, and Form CT-1, starting with 2025 tax year returns and 2026 quarterly returns.

## Current figures

| Penalty | Amount |
|---|---|
| Failure to file | {fig:penalty.ftf.rate} |
| Failure to pay | {fig:penalty.ftp.rate} |
| Failure to file, minimum after 60 days | {fig:penalty.ftf.minimum} |
| Accuracy-related | {fig:penalty.accuracy.rate} |
| Fraud | {fig:penalty.fraud.rate} |

## How it works in practice

Read the notice and name the penalty before choosing an argument. A transcript showing a late return, a balance, and deposits missed in a quarter can carry three separate penalties with three separate answers.

The interaction in § 6651(c)(1) matters when estimating what relief is worth. In a month where both additions apply, the combined rate is not 5.5 percent — the failure-to-file penalty absorbs the failure-to-pay amount, so the pair runs at 5 percent while both are live. The exception is the 60-day floor, which is not reduced by the offset.

The 60-day minimum is where small cases turn painful. A return filed late showing a modest balance can attract a floor penalty far exceeding the percentage calculation, because the floor is the *lesser of* the indexed amount or 100 percent of the tax — so it bites hardest where the tax shown is itself small but not trivial.

For accuracy and fraud penalties, the route is the statutory defence rather than an administrative waiver. That distinction decides which page of argument to write, and it is the single most common misstep in penalty work.

Sequencing matters as much as selection. First-time abate is checked against a compliance history, so spending it on a small penalty in an early year can leave nothing for a larger penalty later — the waiver is available the first time a taxpayer is subject to one of the covered penalties, and a client with several open years is better served by identifying the largest exposure before requesting anything. Where both a waiver and a reasonable-cause argument are available, leading with reasonable cause preserves the waiver.

Nor does removing a penalty remove what accrued on it. Interest runs on tax, and abating a penalty leaves the underlying interest computation intact; interest has its own, much narrower abatement grounds and its own outline item. A client told their penalties have been abated will often read the next notice expecting a zero balance, so it is worth saying plainly what the abatement does and does not reach before the notice arrives.

<div class="scenario">
<h3>Three penalties, three answers</h3>
<p>A small employer files its 2024 return eight months late, pays the balance four months after that, and missed two payroll deposits during the year. The notice shows failure to file, failure to pay, and failure to deposit.</p>
<p><em>Analysis.</em> All three are within the scope of first-time abate under IRM 20.1.1.3.3.2.1, so a single administrative request may reach the lot if the compliance history qualifies. If it does not, each still has a reasonable-cause argument, but they are separate arguments: the reason the return was late is not automatically the reason the deposits were missed.</p>
</div>

<div class="scenario">
<h3>The waiver that could not help</h3>
<p>An examination concludes with an accuracy-related penalty for a substantial understatement. The client has a spotless ten-year filing history, and the representative requests first-time abate.</p>
<p><em>Analysis.</em> First-time abate covers failure to file, failure to pay, and failure to deposit. An accuracy-related penalty under § 6662 is not on that list, and a clean history does not bring it within one. The available argument is the § 6664(c) reasonable cause and good faith exception, which is a different test requiring different evidence.</p>
</div>

<div class="scenario">
<h3>Where the floor beats the percentage</h3>
<p>A taxpayer files a return four months late showing tax of $900, all unpaid.</p>
<p><em>Analysis.</em> The percentage calculation gives four months of failure to file at 5 percent, reduced by failure to pay for those months under § 6651(c)(1). Because the return is more than 60 days late, the addition cannot fall below the lesser of the indexed floor or 100 percent of the tax shown. On these numbers the floor governs, and the offset in § 6651(c)(1) does not reduce it. Clients told "it is only a few percent" are being misinformed.</p>
</div>

<div class="callout trap"><h4>Traps</h4>
<p><strong>First-time abate does not reach accuracy or fraud penalties.</strong> It covers failure to file, failure to pay, and failure to deposit.</p>
<p><strong>The 60-day floor is not reduced by the offset.</strong> Section 6651(c)(1) says so expressly.</p>
<p><strong>The floor is keyed to the filing year, not the tax year.</strong> It is indexed annually under § 6651(j), so the figure that applies is the one for the year the return was required to be filed.</p>
<p><strong>Both § 6651 additions running together do not stack to 5.5 percent.</strong> The failure-to-file amount absorbs the failure-to-pay amount for shared months.</p>
<p><strong>Interest is a separate question from penalties.</strong> Abating a penalty does not abate the interest on the tax, and interest abatement has its own narrow grounds.</p>
</div>

## How this has changed

The rate structure in § 6651 is long-standing; what has moved is the floor. It began as a small fixed dollar amount, was raised repeatedly by statute, and is now indexed: § 6651(j), added by the Taxpayer First Act in 2019, adjusts the statutory base amount for returns required to be filed in calendar years after 2020, rounding down to a multiple of five dollars. That is why a figure quoted in older material is almost certainly stale, and why the figure on this page carries the filing year it applies to. First-time abate itself is not statutory at all — it is an administrative waiver the IRS introduced in 2001 for tax periods ending after 31 December 2000, and it could in principle be changed without legislation.

## Exam focus

Know the four rates cold and the 60-day floor, including that it is the *lesser of* the indexed amount or 100 percent of the tax shown. The § 6651(c)(1) offset is regularly tested as an arithmetic trap. Above all, know which penalties first-time abate reaches — failure to file, failure to pay, failure to deposit — and that accuracy-related and fraud penalties require a statutory defence instead.

## Check yourself

**1. A return is filed three months late and the tax is paid late for the same months. For those months the combined § 6651 addition runs at:**
(A) 5.5 percent per month (B) 5 percent per month, the failure-to-file amount being reduced by the failure-to-pay amount (C) 0.5 percent per month (D) 25 percent immediately
*Answer: B. IRC § 6651(c)(1).*

**2. First-time abate is available for which penalty?**
(A) Accuracy-related under § 6662 (B) Fraud under § 6663 (C) Failure to deposit under § 6656 (D) All of these
*Answer: C. FTA reaches failure to file, failure to pay, and failure to deposit only.*

**3. The minimum failure-to-file addition for a return more than 60 days late is:**
(A) A fixed $435 (B) The greater of the indexed amount or 100 percent of the tax shown (C) The lesser of the indexed amount or 100 percent of the tax shown (D) 25 percent of the tax
*Answer: C, and the indexed amount depends on the year the return was required to be filed.*

**4. Which authority allows the Secretary to abate an assessment made after the limitations period expired?**
(A) IRC § 6651(a) (B) IRC § 6404(a) (C) IRC § 6664(c) (D) IRM 20.1.1
*Answer: B. Section 6404(a)(2).*
