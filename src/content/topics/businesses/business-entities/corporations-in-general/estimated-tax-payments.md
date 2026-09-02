---
title: "Estimated tax payments"
code: "2.1.3.g"
part: 2
domain: "Business Entities"
section: "Corporations in general"
description: "The fourth corporate instalment falls in December, not January, and a corporation that earned a million once in three years may not look back at last year's tax."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 6655", title: "Failure by corporation to pay estimated income tax", url: "https://www.law.cornell.edu/uscode/text/26/6655" }
  - { type: IRC, ref: "§ 6621", title: "Determination of rate of interest", url: "https://www.law.cornell.edu/uscode/text/26/6621" }
  - { type: IRC, ref: "§ 11", title: "Tax imposed on corporations", url: "https://www.law.cornell.edu/uscode/text/26/11" }
  - { type: IRC, ref: "§ 59A", title: "Tax on base erosion payments", url: "https://www.law.cornell.edu/uscode/text/26/59A" }
  - { type: IRC, ref: "§ 56A", title: "Adjusted financial statement income", url: "https://www.law.cornell.edu/uscode/text/26/56A" }
forms: []
related: ["2.1.3.a", "2.1.1.c", "2.1.3.h", "2.1.3.d", "2.1.4.e"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 6655(a) addition to tax computed at the § 6621 underpayment rate, the § 6655(b) measurement of the underpayment and the period running to the fifteenth day of the fourth month after the year end, the § 6655(c) four instalments with the December fourth date, the § 6655(d) required annual payment at the lesser of the current or prior year figure, the § 6655(g)(2) definition of a large corporation by reference to $1,000,000 of taxable income in any of the three preceding years and the § 6655(d)(2) denial of the prior-year branch with the first-instalment exception and its recapture, the § 6655(e) annualised income and adjusted seasonal installments with their own recapture, the § 6655(f) de minimis rule, and the § 6655(g)(1) definition of tax." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios." }
---

<div class="plain-terms">
Estimated tax payments are the four payments a company sends the government during the year. They replace
waiting to pay everything when the return is filed. Every company that expects to owe tax must make them.
The schedule is not the one used by individuals. The rules set how big each payment must be. They also
decide whether a company can base its payments on last year's tax bill instead of guessing at this year's.
Big companies lose that shortcut for three years straight after just one very profitable year. That is
true even if income drops right back down after.
</div>

Corporate estimated tax is a mechanical topic with two features worth committing to memory, because both
differ from the individual rules that practitioners use far more often. The instalment dates are not the
same — the fourth falls in December, closing the year rather than following it. And the safe harbour based
on last year's tax is withdrawn from corporations of any size, on a test that looks back three years and
that a corporation can fail once and be caught by for three.

## The rule

**The addition to tax.** {fig:est.addition}

**How it is measured.** {fig:est.underpayment_period}

**The instalments.** {fig:est.installment_dates}

**How much each must be.** {fig:corp.estimated_required}

**What "tax" means here.** {fig:est.tax_defined}

**Large corporations.** {fig:est.large_corporation}

**And what they lose.** {fig:corp.estimated_large}

**The alternative computations.** {fig:est.annualized}

**The de minimis rule.** {fig:corp.estimated_de_minimis}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Instalment dates | {fig:est.installment_dates} | IRC § 6655(c) |
| Required installment | {fig:corp.estimated_required} | IRC § 6655(d)(1) |
| Large corporation | {fig:est.large_corporation} | IRC § 6655(g)(2) |
| Prior-year branch denied | {fig:corp.estimated_large} | IRC § 6655(d)(2) |
| Annualised and seasonal | {fig:est.annualized} | IRC § 6655(e) |
| De minimis | {fig:corp.estimated_de_minimis} | IRC § 6655(f) |

## How it works in practice

The dates first, because they are the item most often carried over wrongly from individual practice. For a
calendar-year corporation the four instalments fall on 15 April, 15 June, 15 September and 15 December.
The individual schedule has its fourth payment in the following January; the corporate one closes inside
the taxable year. A corporation on a fiscal year takes the same pattern by month — the fifteenth day of
the fourth, sixth, ninth and twelfth months of its year.

Each instalment is a quarter of the required annual payment, and the required annual payment is the lesser
of this year's tax or last year's (IRC § 6655(d)(1)). That "lesser of" is the safe harbour, and it is the reason a corporation
with a volatile year can pay on last year's figure and be safe from the addition to tax even if this year
turns out much better.

The large corporation rule takes that away, and the test deserves care. A corporation is large if it — or
any predecessor — had taxable income of a million dollars or more in *any* of the three taxable years
immediately preceding the year in question, computed without regard to {gloss:net-operating-loss} or capital loss
carryovers. So a single exceptional year taints the following three, and a corporation currently earning
very little may still be a large corporation. Members of a {gloss:controlled-group} are aggregated for the test.

What a large corporation loses is the prior-year branch, with one exception that is really a deferral. It
may use last year's tax to compute the *first* instalment, but any resulting reduction is recaptured by
increasing the second. The net effect is that a large corporation must fund the current year's tax by the
second instalment, with the first available on the old basis. Practitioners who remember only that "large
corporations cannot use the prior year" overstate the rule by a quarter.

The annualised income and adjusted seasonal instalment methods are the release valve for a corporation
whose income is not earned evenly. Both let a corporation pay less early in the year and both carry a
recapture: whatever the reduction, it is added to the next required instalment, and to later ones until
the reduction has been recovered. So the methods shift the timing of the funding rather than reducing the
total, and using them makes each subsequent instalment larger than the flat quarter.

Two definitional points affect the arithmetic. "Tax" for this purpose includes the corporate income tax,
the corporate {gloss:alternative-minimum-tax} and the base erosion tax, less the credits allowed under part IV of
subchapter A — so a corporation with a base erosion liability must fund it through instalments like
anything else. And the addition to tax is computed at the underpayment rate, applied to the shortfall for
the period, which makes it an interest charge in substance rather than a fixed penalty. There is no
reasonable cause defence to it in the way there is for a failure to file.

The period of the underpayment ends at the fifteenth day of the fourth month after the close of the year —
that is, the unextended return date — or when the shortfall is paid, whichever is earlier. Extending the
return does not extend the running of the addition.

## Scenarios

<div class="scenario" data-type="fails">
<h3>The single exceptional year</h3>
<p>A corporation earned taxable income of $1,300,000 in 2023 after a large one-off contract, then
$180,000 in 2024 and $210,000 in 2025. For 2026 it expects around $250,000 and plans to base its
instalments on the 2025 tax.</p>
<p>It cannot, beyond the first instalment. IRC § 6655(g)(2)(A) makes it a large corporation because it had
taxable income of $1,000,000 or more in a taxable year during the testing period, and IRC § 6655(g)(2)(B)(i)
defines that period as the three taxable years immediately preceding 2026 — which includes 2023. Under
IRC § 6655(d)(2)(A) the prior-year branch is unavailable, save that the first instalment may be computed on
the 2025 tax with the reduction recaptured in the second. The corporation is small by any commercial
measure and is nonetheless funding its current-year tax from the June instalment onward. It stops being a
large corporation for 2027 only if 2024, 2025 and 2026 are all under the threshold.</p>
</div>

<div class="scenario" data-type="procedural">
<h3>The December date that was diaried for January</h3>
<p>A calendar-year corporation's controller sets up the estimated tax calendar by copying the schedule she
uses for the shareholders' personal payments: 15 April, 15 June, 15 September and 15 January.</p>
<p>The fourth date is wrong by a month. IRC § 6655(c)(2) fixes the corporate instalments at 15 April,
15 June, 15 September and 15 December, so the December payment is a month late before it is made. The
addition to tax under IRC § 6655(a) then runs at the IRC § 6621 underpayment rate from 15 December until
the payment is made or until the fifteenth day of the fourth month after the year end, whichever is
earlier. The error is small in amount and reliably recurring, and it is one of the few in this area with
no defence: the addition is an interest charge and reasonable cause does not answer it.</p>
</div>

<div class="scenario" data-type="timing">
<h3>The seasonal business that paid less in April</h3>
<p>A corporation earns almost all its income in the fourth quarter. Its expected annual tax is $400,000, so
a flat instalment would be $100,000 each. It uses the annualised income method and computes a first
instalment of $15,000.</p>
<p>That is permitted and it is not a saving. IRC § 6655(e)(1)(A) allows the required instalment to be the
annualised income instalment where the corporation establishes it is lower — but IRC § 6655(e)(1)(B)
recaptures the reduction by increasing the next required instalment by the amount of it, and later
instalments to the extent it has not been recaptured. The $85,000 shortfall in April is added to the June
instalment, which becomes $185,000 rather than $100,000. The corporation has moved the funding, not
reduced it, and if its fourth quarter disappoints it will have paid too much rather than too little.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The corporation that owed almost nothing</h3>
<p>A small corporation makes no estimated tax payments at all during 2026. Its return shows tax of
$420.</p>
<p>There is no addition to tax. IRC § 6655(f) provides that no addition is imposed where the tax shown on
the return for the taxable year — or the tax for the year if no return is filed — is less than $500. At
$420 the corporation is inside the de minimis rule and the four missed instalments produce nothing. Had
the tax been $520, the addition would run on each unpaid instalment from its own due date, and the small
absolute amounts would not change that.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>The fourth instalment is 15 December.</strong> Not the following January — that is the
individual schedule.</li>
<li><strong>One big year taints three.</strong> The large corporation test looks at any year in the
three-year testing period.</li>
<li><strong>Large corporations keep the first instalment.</strong> IRC § 6655(d)(2)(B) preserves the
prior-year basis for it, with recapture in the second.</li>
<li><strong>Carryovers are ignored in the test.</strong> Taxable income for the million-dollar test is
computed without net operating loss or capital loss carryovers.</li>
<li><strong>Annualising is recaptured.</strong> The reduction is added to the next instalment; it defers
funding rather than reducing it.</li>
<li><strong>"Tax" is wider than the income tax.</strong> IRC § 6655(g)(1) includes the corporate
alternative minimum tax and the base erosion tax.</li>
<li><strong>No reasonable cause.</strong> The addition is computed at the underpayment rate for the
period and is an interest charge in substance.</li>
<li><strong>Extending the return does not help.</strong> The period runs to the unextended date.</li>
</ul>
</div>

## How this has changed

The structure of IRC § 6655 has been stable for decades. The instalment dates, the quarter-of-the-required-
annual-payment default, the large corporation rule and its first-instalment exception are all as they have
been since the modern version of the section was settled.

The definition of "tax" in IRC § 6655(g)(1) is where the movement has been, and it moves whenever a new
corporate-level tax is enacted. It now reaches the corporate alternative minimum tax and the base erosion
tax, and the annualisation rules in IRC § 6655(e)(2) were amended to require adjusted financial statement
income to be annualised alongside taxable income. A corporation subject to the corporate alternative
minimum tax therefore has to project a second income measure quarterly, which is a real compliance burden
that older material on this section does not mention at all.

The million-dollar threshold in IRC § 6655(g)(2) is not indexed and has not moved. As with the accumulated
earnings tax credit, that means the provision reaches steadily further in real terms without any amendment
ever being made — a corporation that would once have been comfortably outside the large corporation
definition may now cross it in an ordinary year.

## Exam focus

Two questions recur. The first asks for the instalment dates, and the answer is the fifteenth day of the
fourth, sixth, ninth and twelfth months. Any option ending in the following January is the individual
schedule offered as a distractor.

The second gives three years of taxable income and asks whether the corporation may base its instalments
on the prior year. Scan the three preceding years for a single figure at or above a million dollars; one
is enough. If the corporation is large, remember that the first instalment may still use the prior year,
with recapture in the second.

Where a question gives a small tax figure, check the de minimis rule before computing anything.

## Check yourself

**1.** A calendar-year corporation's third estimated tax instalment for 2026 is due on what date?

*Answer: 15 September 2026. IRC § 6655(c)(2) sets the four required instalments at 15 April, 15 June,
15 September and 15 December for a calendar-year corporation. A fiscal-year corporation uses the fifteenth
day of the fourth, sixth, ninth and twelfth months of its own year.*

**2.** A corporation had taxable income of $1,050,000 in 2024, $300,000 in 2025 and expects $340,000 in
2026. May it base its 2026 instalments on its 2025 tax?

*Answer: only the first. It is a large corporation under IRC § 6655(g)(2), because it had taxable income of
$1,000,000 or more in a year during the three-year testing period. IRC § 6655(d)(2)(A) denies it the
prior-year branch, but IRC § 6655(d)(2)(B) allows the first instalment to be computed on the prior year's
tax, with the reduction recaptured by increasing the second instalment.*

**3.** A corporation uses the annualised income instalment method and pays $20,000 rather than the
$90,000 flat instalment in April. What happens to the $70,000?

*Answer: it is recaptured in June. IRC § 6655(e)(1)(B) provides that any reduction in a required
instalment from using the annualised income or adjusted seasonal method is recaptured by increasing the
next required instalment by the amount of the reduction, and later instalments to the extent it has not
been recaptured. The June instalment becomes $160,000.*

**4.** A corporation makes no estimated payments and its return for the year shows tax of $460. What is
the addition to tax?

*Answer: nil. IRC § 6655(f) provides that no addition is imposed where the tax shown on the return for the
taxable year is less than $500. The de minimis rule is tested against the tax for the year, not against
each instalment.*

**5.** A corporation underpays its June instalment and pays the shortfall when it files its extended
return in October of the following year. Until when does the addition run?

*Answer: until the fifteenth day of the fourth month after the close of the taxable year. IRC § 6655(b)(2)
ends the period of the underpayment at the earlier of that date or the date the portion is paid, and the
extension of time to file does not extend it. The addition stops accruing at the unextended return date
even though the money was not paid until later.*

**6. A calendar-year corporation that is not a large corporation earns its income evenly through the year and expects 2026 tax of $200,000; its 2025 tax was $120,000. What is the smallest instalment it can pay on 15 April 2026 without an addition to tax?**
(A) $50,000 (B) $30,000 (C) $20,000 (D) $80,000
*Answer: B. IRC § 6655(d)(1): each instalment is a quarter of the required annual payment, and the required annual payment is the lesser of this year's tax or last year's — a quarter of $120,000.*

**7. A corporation's 2024 taxable income was $1,200,000 before a net operating loss carryover and $700,000 after it. Its 2023 and 2025 taxable income were each under $400,000. Is it a large corporation for 2026?**
(A) No, because taxable income after the carryover was under a million (B) Yes, because the test is applied without regard to net operating loss carryovers (C) No, because the test requires a million in each of the three preceding years (D) Yes, but only if it is a member of a controlled group
*Answer: B. IRC § 6655(g)(2) makes a corporation large if it had taxable income of a million dollars or more in any of the three preceding years, computed without regard to net operating loss or capital loss carryovers; one year is enough.*

**8. A calendar-year corporation's controller was in hospital in December 2026 and the fourth instalment was paid three weeks late. What relief from the IRC § 6655(a) addition is available?**
(A) Full abatement for reasonable cause, as for a late return (B) None; the addition runs at the underpayment rate from 15 December until payment and has no reasonable cause defence (C) Abatement, provided the corporation is not a large corporation (D) Abatement, because the extended return date has not yet passed
*Answer: B. IRC § 6655(a) computes the addition at the IRC § 6621 underpayment rate on the shortfall for the period, making it an interest charge in substance; there is no reasonable cause defence as there is for a failure to file.*
