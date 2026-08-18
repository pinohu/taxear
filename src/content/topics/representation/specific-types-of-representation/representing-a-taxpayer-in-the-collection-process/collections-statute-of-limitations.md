---
title: "Collections statute of limitations"
code: "3.3.1.m"
part: 3
domain: "Representation before the IRS"
section: "Representing a taxpayer in the collection process"
description: "The ten-year collection period under IRC 6502, what suspends it, why the remedies clients ask for extend it, and how to compute a collection statute expiration date."
status: review
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6502", title: "Collection after assessment" }
  - { type: IRC, ref: "§ 6503", title: "Suspension of running of period of limitation" }
  - { type: IRC, ref: "§ 6330(e)", title: "Suspension of collections and statute of limitations" }
  - { type: IRC, ref: "§ 6331(i)(5)", title: "Suspension of collection period during divisible tax proceedings" }
  - { type: IRC, ref: "§ 6331(k)(3)", title: "Suspension while offer or agreement pending" }
  - { type: IRC, ref: "§ 7122(f)", title: "Deemed acceptance of offer not rejected within certain period" }
forms: ["12153", "9465", "656"]
related: ["3.2.6.a", "3.3.1.j", "3.3.1.i", "3.3.1.k", "3.3.1.o", "3.3.1.n"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication from IRC §§ 6502, 6503, 6330(e), 6331(i), 6331(k) and 7122(f)." }
---

The collection statute expiration date is the single most useful number in a collection file, and it is almost never the assessment date plus ten years. Every remedy a client asks for — an offer, an installment agreement, a hearing, a bankruptcy — stops the clock while it is pending. Advising on collection without computing the date first is advising in the dark, because the same facts point to opposite strategies depending on whether the date is two years away or twelve.

## The rule

**The period.** Where the tax was assessed within the applicable assessment period, it may be collected **by levy or by a proceeding in court, but only if the levy is made or the proceeding begun within** {fig:csed.period} (IRC § 6502(a)(1)). The clock runs from **assessment**, not from the return, the due date, or the notice.

**Two written extensions survive.** The period may run longer where there is an **installment agreement** and a written agreed collection period — then until 90 days after that period expires — or where there is a **release of levy under § 6343 after the ten years**, then until the written agreed period expires (IRC § 6502(a)(2)).

**A timely court proceeding removes the deadline.** If a proceeding in court for collection is commenced in time, the period for collection by levy is extended **until the liability, or a judgment arising from it, is satisfied or becomes unenforceable** (IRC § 6502(a), flush language).

**When a levy counts as made.** The date of a levy is **the date the notice of seizure under § 6335(a) is given** (IRC § 6502(b)). A levy served before the date but seizing afterwards is measured by that notice.

**What suspends the running:**

- A **notice of deficiency**, for the period the IRS is barred from collecting, and if a Tax Court petition is filed, until the decision is final — **plus 60 days** (IRC § 6503(a)(1)).
- The taxpayer's **assets in the control or custody of a court** — {fig:csed.custody_tail} (IRC § 6503(b)).
- The taxpayer **outside the United States** — {fig:csed.abroad} (IRC § 6503(c)).
- A **bankruptcy case**, while collection is barred — {fig:csed.bankruptcy_tail} (IRC § 6503(h)(2)).
- A **collection due process hearing** requested under § 6330(a)(3)(B), while the hearing and any appeals are pending — {fig:csed.cdp_tail} (IRC § 6330(e)(1)).
- A **pending offer in compromise or installment agreement**, for the periods in which § 6331(k) bars levy, by operation of § 6331(k)(3).
- A **refund proceeding on a divisible tax**, for the period levy is barred under § 6331(i), plus the tail in § 6331(i)(5).
- Certain **extensions of time to pay** estate tax and other specified liabilities (IRC § 6503(d), (e), (i)).

**And one deemed acceptance.** An offer in compromise **not rejected within 24 months** of submission is **deemed accepted**, disregarding any period during which the liability is in dispute in a judicial proceeding (IRC § 7122(f)).

## Current figures

| Item | Value |
|---|---|
| Collection period | {fig:csed.period} |
| CDP suspension and tail | {fig:csed.cdp_tail} |
| Taxpayer outside the United States | {fig:csed.abroad} |
| Bankruptcy | {fig:csed.bankruptcy_tail} |
| Assets in court custody | {fig:csed.custody_tail} |

## How it works in practice

**Compute the date before doing anything else.** Each assessment has its own collection statute expiration date, so a client with four years of liabilities has four dates, not one. A balance from an old assessment may be within months of expiring while a recent one has most of a decade to run, and the right advice for the two is opposite: wait out the first, resolve the second.

**Every protective remedy costs time.** This is the point clients find hardest. Requesting a CDP hearing suspends the collection period for as long as it and any appeal take, and the period cannot expire before the ninetieth day after the final determination. Submitting an offer suspends it while the offer is pending and through the § 6331(k) tails. A client three months from expiration who files an offer has traded the certainty of expiry for a chance at compromise, and has extended the government's reach by however long the offer takes plus the tail. That may still be the right call — but it must be a decision, not a side effect.

**Suspension is not tolling from zero.** Time already run is not lost; the clock stops and restarts. The arithmetic is additive, which is why a long file can carry a date well past the naive ten years and why the IRS transcript's stated date should be checked rather than accepted. Errors in both directions are common, and a suspension the IRS failed to record works in the client's favour only if someone notices.

**Section 7122(f) cuts the other way** and is worth watching on a slow offer. An offer not rejected within twenty-four months of submission is deemed accepted by operation of statute, with judicial dispute periods excluded. It is rare, but it is a hard rule rather than a discretionary one, and the twenty-four months should be diarised whenever an offer goes in.

<div class="scenario">
<h3>The offer that bought the government four years</h3>
<p>A client owes on a 2016 assessment made in June 2017. In March 2026 he submits an offer in compromise, which is rejected in November 2026; he appeals, and the appeal concludes in April 2027.</p>
<p><em>Analysis.</em> The naive expiration was June 2027. Section 6331(k)(1) bars levy while the offer is pending, for 30 days after rejection and during the appeal, and § 6331(k)(3) suspends the collection period for those same periods. Roughly thirteen months are added, pushing the date into mid-2028. Had the client simply waited, the liability would have become uncollectible in June 2027. Whether the offer was worth making depends entirely on its prospects — but nobody should learn about the trade after the fact.</p>
</div>

<div class="scenario">
<h3>Four assessments, four dates</h3>
<p>A client owes for 2015, 2019, 2022 and 2024, assessed in 2016, 2020, 2023 and 2025 respectively. She asks whether to propose an installment agreement covering everything.</p>
<p><em>Analysis.</em> Each assessment carries its own § 6502 period, so the 2016 assessment expires in 2026 and the 2025 one in 2035. An agreement covering all four applies payments across liabilities that are not equally collectible, and the § 6331(k)(2) protection that comes with it does not distinguish between them. Sequencing matters: the oldest balance may be better left to expire while the others are resolved, and the representative's first output should be four dates, not one proposal.</p>
</div>

<div class="scenario">
<h3>The transcript that was wrong</h3>
<p>A transcript shows a collection statute expiration date three years later than the representative's own computation. The file shows one CDP hearing, concluded years ago, and no bankruptcy, no absence abroad and no offer.</p>
<p><em>Analysis.</em> Worth challenging. The § 6330(e)(1) suspension runs only while the hearing and appeals were pending, plus the 90-day floor after the final determination — not for years afterwards. An IRS-computed date is an administrative figure, not a determination, and it can be recomputed. Getting it corrected can be the whole of the representation, because a liability past its date is uncollectible whatever the transcript says.</p>
</div>

<div class="callout trap"><h4>Traps</h4>
<p><strong>The clock runs from assessment</strong>, not from the return or its due date.</p>
<p><strong>Each assessment has its own date.</strong> Never speak of "the" collection statute on a multi-year file.</p>
<p><strong>Protective remedies extend the period.</strong> CDP, offers and installment agreement requests all suspend it.</p>
<p><strong>The CDP tail has a floor.</strong> The period cannot expire before the 90th day after the final determination.</p>
<p><strong>A timely court proceeding removes the deadline entirely</strong> until the liability or judgment is satisfied or unenforceable.</p>
<p><strong>An offer not rejected within 24 months is deemed accepted.</strong> IRC § 7122(f).</p>
</div>

## How this has changed

The ten-year period is itself a change: before the Revenue Act of 1990 it was six years, and assessments made before 6 November 1990 were governed by the shorter period as extended by transitional rules. The Restructuring and Reform Act of 1998 added the § 6330(e) suspension with its ninety-day floor, the § 6331(k) suspensions during pending offers and agreements, and § 7122(f)'s deemed acceptance. The 1998 Act also curtailed the practice of obtaining open-ended written extensions of the collection period: waivers are now available only in the two narrow situations preserved in § 6502(a)(2), tied to an installment agreement or to a levy release after the ten years.

## Exam focus

Ten years from assessment, and know that it is assessment rather than filing. Be able to list the suspensions: deficiency notice plus 60 days, court custody plus 6 months, absence abroad with its 6-month floor, bankruptcy plus 6 months, CDP with its 90-day floor, and pending offers and agreements. Know that a levy is made when the § 6335(a) notice of seizure is given. Know the two surviving written extensions in § 6502(a)(2). Expect a computation question adding suspension periods, and expect § 7122(f) as a discrete fact.

## Check yourself

**1. The ten-year collection period runs from:**
(A) The due date of the return (B) The date of assessment (C) The date the return was filed (D) The date of the first collection notice
*Answer: B. IRC § 6502(a)(1).*

**2. A taxpayer requests a CDP hearing. The collection period:**
(A) Is unaffected (B) Is suspended while the hearing and appeals are pending, and cannot expire before the 90th day after the final determination (C) Restarts at ten years (D) Is suspended for a flat 12 months
*Answer: B. IRC § 6330(e)(1).*

**3. A taxpayer is outside the United States for eight continuous months. The collection period:**
(A) Is unaffected (B) Is suspended for that period, and will not expire before six months after his return (C) Is suspended only if he was avoiding collection (D) Restarts on his return
*Answer: B. IRC § 6503(c).*

**4. For purposes of the collection period, a levy is considered made on:**
(A) The date the notice of intent to levy is sent (B) The date the notice of seizure under § 6335(a) is given (C) The date the property is sold (D) The date the levy is approved internally
*Answer: B. IRC § 6502(b).*

**5. An offer in compromise submitted on 1 May 2024 has not been rejected by 1 May 2026, and no judicial proceeding is pending on the liability. The offer is:**
(A) Deemed rejected (B) Deemed accepted (C) Still pending indefinitely (D) Returned as unprocessable
*Answer: B. IRC § 7122(f).*
