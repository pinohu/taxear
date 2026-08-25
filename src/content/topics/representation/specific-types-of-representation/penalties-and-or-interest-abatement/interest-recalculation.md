---
title: "Interest recalculation"
code: "3.3.2.d"
part: 3
domain: "Specific Types of Representation"
section: "Penalties and/or Interest Abatement"
description: "Interest runs from the unextended due date at the IRC 6621 rate, compounds daily under 6622, and is recalculated whenever the underlying tax or the period changes."
status: published
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "N. O."
authorities:
  - { type: IRC, ref: "§ 6601", title: "Interest on underpayment, nonpayment, or extensions of time for payment of tax", url: "https://www.law.cornell.edu/uscode/text/26/6601" }
  - { type: IRC, ref: "§ 6621", title: "Determination of rate of interest", url: "https://www.law.cornell.edu/uscode/text/26/6621" }
  - { type: IRC, ref: "§ 6622", title: "Interest compounded daily", url: "https://www.law.cornell.edu/uscode/text/26/6622" }
  - { type: IRC, ref: "§ 6404", title: "Abatements", url: "https://www.law.cornell.edu/uscode/text/26/6404" }
  - { type: IRC, ref: "§ 6159", title: "Agreements for payment of tax liability in installments", url: "https://www.law.cornell.edu/uscode/text/26/6159" }
  - { type: IRC, ref: "§ 6213", title: "Restrictions applicable to deficiencies; petition to Tax Court", url: "https://www.law.cornell.edu/uscode/text/26/6213" }
forms:
  - "843"
related: ["3.3.2.c", "3.3.2.a", "3.3.1.a", "3.3.2.e"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication from IRC §§ 6601, 6621 and 6622 and the IRS quarterly interest rates page." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, typed scenarios, and a glossary mark." }
---

<div class="plain-terms">
Interest on unpaid tax is simple math, but the inputs shift. It starts running from the
tax's original due date, even if you got an extension to file or pay, or you are on a
payment plan. None of those move the start date. The rate itself resets every few months,
so a bill sitting for years does not sit at one rate the whole time. And interest builds
on interest, adding a bit more each day rather than once a year. This affects anyone with
unpaid tax, a payment plan, or a case working through appeal. It rarely changes because
the rule was wrong. It changes because the tax owed changed, a payment date changed, or
the rate for that quarter changed.
</div>

Interest is arithmetic, and recalculation follows from three variables: the **rate**, which changes quarterly; the **period**, which starts at the unextended due date and is unaffected by extensions or installment agreements; and the **balance**, which compounds daily. Most interest disputes are really disputes about one of those inputs rather than about interest itself.

## The rule

**When interest runs** (IRC § 6601(a)). If any amount of tax is not paid **on or before the last date prescribed for payment**, interest at the **underpayment rate established under § 6621** is paid **from that last date to the date paid**.

**What "the last date prescribed" means** (IRC § 6601(b)). It is determined under chapter 62, with two rules that do most of the damage. **Extensions of time are disregarded** (§ 6601(b)(1)): the last date is fixed **without regard to any extension of time for payment** or **any installment agreement under § 6159**, so an extension to file, an extension to pay, or a payment plan does not move the date interest starts. And **jeopardy** is disregarded (§ 6601(b)(2)): a notice and demand issued by reason of jeopardy before the last date otherwise prescribed does not fix it either.

**The rate** (IRC § 6621(a)). The **underpayment rate** is the **federal short-term rate plus 3 percentage points**. The **overpayment rate** is the same, or **plus 2 points for a corporation** — reduced to **plus 0.5 point** on the part of a corporate overpayment above the threshold in the figures table, the GATT rate. For a **large corporate underpayment**, § 6621(c)(1) substitutes **5 percentage points** for 3.

The rate is **not annual**. Under § 6621(b) the Secretary determines the federal short-term rate for the **first month of each calendar quarter**, and it applies during the **first calendar quarter beginning after** that month.

**Daily compounding** (IRC § 6622(a)). Interest is **compounded daily** — with one exception: § 6622(b) disapplies compounding for computing the addition to tax under § 6654 for failure to pay estimated tax.

**The large corporate underpayment applicable date** (IRC § 6621(c)(2)(A)). The higher rate applies for periods **after the applicable date**, which is the **30th day after the earlier of** the date the **first letter of proposed deficiency allowing an opportunity for Appeals review** is sent, or the date the **§ 6212 notice of deficiency** is sent — applied **without regard to any such letter or notice that is withdrawn**.

**Grace period after notice and demand** (IRC § 6601(e)(3)). Where notice and demand is made and the amount is paid within the window in the figures table, **interest is not imposed for the period after the date of the notice and demand** on the amount so paid.

**Suspension after a waiver** (IRC § 6601(c)). For a deficiency in income, estate, gift or certain excise taxes, where a **§ 6213(d) waiver of restrictions on assessment** has been filed and notice and demand is **not made within 30 days** after the filing, interest is **not imposed** for the period **beginning immediately after that 30th day and ending with the date of notice and demand**.

**Carrybacks do not rewrite history** (IRC § 6601(d)(1)). Where tax is reduced by a **carryback of a net operating loss or net capital loss**, the reduction **does not affect the computation of interest for the period ending with the filing date for the year in which the loss arises**. Section 6601(d)(2) applies a parallel rule to foreign tax credit carrybacks.

**Netting** (IRC §§ 6601(f), 6621(d)). Where tax is satisfied by **credit of an overpayment**, no interest is imposed for any period during which interest would have been allowable on that overpayment; and § 6621(d) sets the **net rate at zero** to the extent interest is payable and allowable on **equivalent** underpayments and overpayments **by the same taxpayer** for the same period.

**Assessment, collection and exclusions.** Interest may be **assessed and collected at any time** during the period within which the underlying tax may be collected (§ 6601(g)) — it is not separately time-barred. Section 6601 does **not** apply to a failure to pay **estimated tax** under § 6654 or § 6655, nor to the **federal unemployment tax** under § 3301 (§ 6601(h), (i)).

## Current figures

| Item | Rate or rule | Authority |
| --- | --- | --- |
| Current quarter rates | {fig:interest.rates_q3_2026} | IRS, Quarterly interest rates |
| Rate formula | {fig:interest.rate_formula} | IRC § 6621(a), (c)(1) |
| Notice-and-demand grace | {fig:interest.notice_demand_grace} | IRC § 6601(e)(3) |
| Short-window threshold | {fig:interest.short_window_threshold} | IRC § 6601(e)(3) |
| GATT threshold | {fig:interest.gatt_threshold} | IRC § 6621(a)(1) |
| Compounding | Daily, except the § 6654 estimated tax addition | IRC § 6622 |
| Rate resets | Quarterly, from the federal short-term rate for the first month of the prior quarter | IRC § 6621(b) |

## How it works in practice

**The single most useful fact is that extensions do not stop interest.** An extension of time to **file** was never a extension of time to **pay**, and § 6601(b)(1) goes further: even a genuine extension of time to **pay**, and even an **installment agreement under § 6159**, is disregarded in fixing the date interest starts. A taxpayer who properly extends and pays in October still owes interest from April. This is the most common misconception a practitioner has to correct, and the statute is explicit about it.

**Recalculation is mostly a consequence, not a remedy.** Interest recomputes automatically whenever an input changes — the tax is reduced on reconsideration or appeal, a payment is applied to an earlier date, or a penalty is abated so the balance it accrued on disappears. That last point matters: **abating a penalty removes the interest that ran on it**, because interest on a penalty is computed on the penalty. Practitioners sometimes ask for interest abatement when what they need is penalty abatement, which delivers the interest relief as a by-product.

**The rate changes under a taxpayer's feet.** Because § 6621(b) resets quarterly, a liability outstanding across several years accrues at a series of rates and any recomputation has to walk the quarters — the current schedule is in the figures table. A recalculation applying a single rate across a multi-year period will be wrong. And under § 6622 the balance compounds **daily**, so interest on a five-year-old liability is materially more than the nominal rate times the years. The one carve-out is the § 6654 estimated-tax addition.

**The two suspension rules reward attention to IRS timing.** Section 6601(c) is the cleaner: file a § 6213(d) waiver, and if the IRS does not issue notice and demand within **30 days**, interest stops for the gap between that 30th day and the eventual notice. Section 6601(e)(3) then gives a payment window after notice and demand — and note both halves: the shorter window applies where the amount **equals or exceeds** the threshold, and is measured in **business** days rather than calendar days.

**Carrybacks are the classic trap.** A net operating loss carried back to an earlier year reduces that year's tax, but § 6601(d)(1) preserves interest for the period ending with the **filing date for the year the loss arose**. The taxpayer owed the money in the interim and the carryback does not pretend otherwise. Expect a question that offers "interest is recomputed from the original due date" as a distractor.

**Netting is narrow.** Section 6621(d) zeroes the net rate only for **equivalent** underpayments and overpayments of the **same taxpayer** for the **same period** — not a general right to offset a refund in one year against a balance in another. And under § 6601(g) interest may be assessed and collected at any time within the collection period for the underlying tax, so no separate interest statute runs.

<div class="scenario" data-type="baseline">
<h3>The extension that did not help</h3>
<p>Marisol files a valid extension for her 2025 return, files in September 2026 and pays the $18,000 balance with the return. She argues no interest is due because she filed within the extended period.</p>
<p><em>Analysis.</em> Interest runs from the unextended due date. IRC § 6601(a) charges interest from the last date prescribed for payment, and § 6601(b)(1) requires that date to be determined <em>without regard to any extension of time for payment</em>. An extension to file has never extended the time to pay, and even an extension to pay would not move the interest start date. She owes interest from April to September, compounded daily at the applicable quarterly rates.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>Paying at exactly $100,000</h3>
<p>Amir receives notice and demand for $100,000 on 3 June. He pays in full 15 calendar days later, having read that a 21-day window applies.</p>
<p><em>Analysis.</em> He misses the window. IRC § 6601(e)(3) gives 21 <em>calendar</em> days generally, but <strong>10 business days where the amount equals or exceeds $100,000</strong>. At exactly $100,000 the short window applies, and 15 calendar days will ordinarily exceed 10 business days. Interest is imposed for the period after the notice and demand on the amount paid.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The loss carried back</h3>
<p>Hollis owes tax for 2023 that he does not pay. His 2025 return generates a {gloss:net-operating-loss} which, carried back, eliminates the 2023 liability entirely. He asks for all the 2023 interest to be removed.</p>
<p><em>Analysis.</em> No. IRC § 6601(d)(1) provides that where tax is reduced by a carryback of a net operating loss, the reduction does not affect the computation of interest for the period ending with the <em>filing date for the taxable year in which the loss arises</em> — here, the 2025 filing date. Hollis had the government's money from the 2023 due date until then, and interest is charged for that period notwithstanding that the tax was ultimately eliminated.</p>
</div>

<div class="scenario" data-type="timing">
<h3>The waiver and the silence</h3>
<p>A corporation signs a Form 870 waiver of restrictions on assessment on 8 February. The IRS issues notice and demand on 20 May.</p>
<p><em>Analysis.</em> Interest is suspended for part of the gap. IRC § 6601(c): where a § 6213(d) waiver has been filed and notice and demand is not made within 30 days, interest is not imposed for the period beginning immediately after that 30th day and ending with the notice and demand. Interest runs to 10 March, stops, and resumes on 20 May.</p>
</div>

<div class="callout trap">

**Extensions and installment agreements are disregarded.** IRC § 6601(b)(1) fixes the interest start date without regard to either. Interest runs from the unextended due date.

</div>

<div class="callout trap">

**"Equals or exceeds," and business days.** The § 6601(e)(3) short window applies at exactly the threshold, and is measured in **business** days; the ordinary 21-day window is **calendar** days.

</div>

<div class="callout trap">

**A carryback does not undo past interest.** Section 6601(d)(1) preserves interest through the filing date for the year the loss arose, however completely the carryback eliminates the tax.

</div>

<div class="callout trap">

**Abating the penalty abates its interest.** Interest on a penalty is computed on the penalty, so removing the penalty removes that interest.

</div>

## How this has changed

The architecture is old and stable — §§ 6601 and 6621 both trace to the 1954 Code, § 6621's rate mechanism substantially rewritten in 1986 — but three parts move.

**The rate moves every quarter**, and only the current quarter's figures belong on a page. The IRS publishes them on its quarterly interest rates page, sourced to a numbered Internal Revenue Bulletin for each quarter; the figures table records both. Any page carrying a rate without a quarter attached is unreliable by construction.

**Two thresholds are fixed and not indexed.** The short notice-and-demand trigger in § 6601(e)(3) and the GATT threshold in § 6621(a)(1) — both in the figures table — have never been adjusted for inflation, so both catch more taxpayers each year in real terms.

**The large corporate underpayment date turns on Appeals.** Section 6621(c)(2)(A)(i) is keyed to the first letter of proposed deficiency **allowing an opportunity for administrative review in the IRS Independent Office of Appeals** — wording reflecting the renaming of Appeals by the Taxpayer First Act of 2019. Older material says "Office of Appeals" or "30-day letter"; the mechanism is unchanged.

## Exam focus

Know that **interest runs from the unextended due date** and that **extensions of time to pay and installment agreements are disregarded** under IRC § 6601(b)(1).

Know the **rate formula** — federal short-term plus **3** points for underpayments, plus **2** for a corporate overpayment falling to **0.5** above the GATT threshold, plus **5** for a large corporate underpayment — and that the rate is **reset quarterly**, not annually.

Know that interest **compounds daily** under § 6622, except the § 6654 estimated-tax addition.

Know the two windows: **30 days** after a § 6213(d) waiver before § 6601(c) suspension begins, and **21 calendar days**, or **10 business days** at or above the § 6601(e)(3) threshold.

Know that a **carryback** does not remove interest for the period ending with the filing date of the loss year, and that interest may be **assessed and collected at any time** the underlying tax may be.

## Check yourself

**1. A taxpayer obtains a valid extension of time to pay and pays five months after the original due date. From when does interest run?**
(A) From the extended payment date (B) From the original unextended due date (C) From the date of notice and demand (D) No interest is due
*Answer: B. IRC § 6601(b)(1) determines the last date prescribed for payment without regard to any extension of time for payment or any § 6159 installment agreement.*

**2. What is the underpayment rate under IRC § 6621(a)(2)?**
(A) The federal short-term rate (B) The federal short-term rate plus 2 percentage points (C) The federal short-term rate plus 3 percentage points (D) The federal short-term rate plus 5 percentage points
*Answer: C. Five points applies only to a large corporate underpayment under § 6621(c)(1); two points is the corporate overpayment rate.*

**3. Notice and demand is made for an amount exactly equal to the § 6601(e)(3) threshold. What payment window avoids interest for the period after the notice?**
(A) 21 calendar days (B) 10 business days (C) 30 days (D) 10 calendar days
*Answer: B. The statute applies the shorter window where the amount "equals or exceeds" the threshold, and measures it in business days.*

**4. A net operating loss carried back eliminates an earlier year's tax entirely. What happens to the interest already accrued on that year?**
(A) It is eliminated with the tax (B) It is recomputed from the original due date (C) It is preserved for the period ending with the filing date for the year the loss arose (D) It is abated under § 6404(e)
*Answer: C. IRC § 6601(d)(1). The taxpayer had the use of the money in the interim.*

**5. How often is the interest rate redetermined?**
(A) Annually (B) Quarterly, from the federal short-term rate for the first month of each calendar quarter (C) Monthly (D) Whenever the IRS issues a revenue ruling
*Answer: B. IRC § 6621(b) — and the rate so determined applies during the first calendar quarter beginning after that month, so a multi-year balance accrues at a series of rates.*
