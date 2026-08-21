---
title: "Accumulated earnings tax"
code: "2.1.3.f"
part: 2
domain: "Business Entities"
section: "Corporations in general"
description: "The tax falls on one year's undistributed income, not on the accumulated balance. A company can hold far more than the credit and owe nothing if it earned nothing."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 531", title: "Imposition of accumulated earnings tax", url: "https://www.law.cornell.edu/uscode/text/26/531" }
  - { type: IRC, ref: "§ 532", title: "Corporations subject to accumulated earnings tax", url: "https://www.law.cornell.edu/uscode/text/26/532" }
  - { type: IRC, ref: "§ 533", title: "Evidence of purpose to avoid income tax", url: "https://www.law.cornell.edu/uscode/text/26/533" }
  - { type: IRC, ref: "§ 535", title: "Accumulated taxable income", url: "https://www.law.cornell.edu/uscode/text/26/535" }
  - { type: IRC, ref: "§ 537", title: "Reasonable needs of the business", url: "https://www.law.cornell.edu/uscode/text/26/537" }
  - { type: IRC, ref: "§ 561", title: "Definition of deduction for dividends paid", url: "https://www.law.cornell.edu/uscode/text/26/561" }
  - { type: IRC, ref: "§ 303", title: "Distributions in redemption of stock to pay death taxes", url: "https://www.law.cornell.edu/uscode/text/26/303" }
forms: []
related: ["2.1.3.b", "2.1.3.c", "2.1.3.d", "2.1.3.a", "2.1.4.e"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 531 rate and the fact that it applies to accumulated taxable income as defined in § 535 rather than to the accumulated balance of earnings and profits, the § 532 corporations reached and excepted, the § 533 evidentiary presumptions, the § 535(a) computation with the dividends paid deduction and the accumulated earnings credit, the § 535(c)(1) reasonable-needs credit and the § 535(c)(2) and (3) minimum credits including the reduced figure for listed service corporations and the denial of a reasonable-needs credit to a mere holding or investment company, and the § 537(a) meaning of reasonable needs." }
---

The accumulated earnings tax is aimed at a corporation that hoards profits to spare its shareholders the
tax they would pay on a dividend. It is a penalty tax rather than a revenue measure — nobody plans to pay
it, and its function is to make retention less attractive than distribution. The single most important
thing about it is what it is imposed on, because the intuitive answer is wrong: it falls on one year's
undistributed income, not on the accumulated pile.

## The rule

**The imposition.** {fig:aet.rate}

**On what.** {fig:aet.base}

**Which corporations.** {fig:aet.who}

**How the purpose is proved.** {fig:aet.presumption}

**The credit for the year.** {fig:aet.credit}

**And the floor beneath it.** {fig:aet.minimum_credit}

**What counts as a reasonable need.** {fig:aet.reasonable_needs}

**And what earnings and profits are.** {fig:ep.dividend_defined}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Rate | {fig:aet.rate} | IRC § 531 |
| Base | {fig:aet.base} | IRC § 535(a) |
| Reasonable needs credit | {fig:aet.credit} | IRC § 535(c)(1) |
| Minimum credit | {fig:aet.minimum_credit} | IRC § 535(c)(2), (3) |
| Corporations reached | {fig:aet.who} | IRC § 532 |
| Presumptions | {fig:aet.presumption} | IRC § 533 |

## How it works in practice

Start with the base, because it is the thing most often got wrong. IRC § 531 imposes the tax on
*accumulated taxable income*, which IRC § 535(a) defines as the year's taxable income, adjusted, less the
dividends paid deduction and less the accumulated earnings credit. It is a flow, not a stock. A corporation
sitting on a very large balance of accumulated earnings and profits owes nothing in a year in which it
earned nothing and distributed nothing, because there is no accumulated taxable income for that year. The
tax reaches the act of retaining this year's profits, not the fact of holding last year's.

That also explains why the minimum credit is drafted as it is. IRC § 535(c)(2)(A) gives a credit of the
amount by which the statutory figure *exceeds accumulated earnings and profits at the close of the
preceding year*. So the minimum credit is a lifetime allowance being used up, not an annual one: a
corporation whose accumulated earnings and profits already exceed the figure gets no minimum credit at
all, and must justify the whole of the current year's retention on reasonable needs.

The reasonable needs credit is the real defence and it is measured on the year, not on the balance.
IRC § 535(c)(1) gives credit for so much of the *year's* earnings and profits as are retained for the
reasonable needs of the business, retained meaning the excess of the year's earnings and profits over the
dividends paid deduction. So a corporation with a genuine plan — an expansion, a plant, a known
liability — shelters this year's retention by reference to it.

Two categories of corporation are treated more harshly. A mere holding or investment company gets only
the minimum credit under IRC § 535(c)(3), with no reasonable-needs credit at all, on the footing that such
a company has no business whose needs could justify retention. And a corporation whose principal function
is performing services in one of the eight listed fields has its minimum credit reduced. The list is
closed — health, law, engineering, architecture, accounting, actuarial science, performing arts,
consulting — and a service business outside it takes the higher figure.

On proof, the burden structure is unusual and worth being precise about. IRC § 532(a) requires a purpose
of avoiding shareholder-level tax. IRC § 533(a) then provides that accumulation beyond the reasonable
needs of the business is *determinative* of that purpose unless the corporation proves the contrary by the
preponderance of the evidence. So establishing unreasonable accumulation effectively establishes the
purpose, and the corporation carries the burden of displacing it. For a mere holding or investment
company, IRC § 533(b) makes that status prima facie evidence of the purpose without more.

The tax is not self-assessed. There is no line for it on the return; it arises on examination, and it is
imposed "in addition to other taxes imposed by this chapter" (IRC § 531). That gives
it a practical character quite unlike the rest of subchapter C — a corporation does not "file" accumulated
earnings tax, it is assessed it — and it is why contemporaneous documentation of a retention plan matters
so much more than the accounting treatment.

## Scenarios

<div class="scenario">
<h3>The large balance and the quiet year</h3>
<p>A corporation has accumulated earnings and profits of $9,000,000, built up over twenty years and held
in marketable securities with no documented plan for them. In 2026 it breaks even: no taxable income, no
distributions.</p>
<p>It owes no accumulated earnings tax for 2026. IRC § 531 imposes the tax on accumulated taxable income
as defined in IRC § 535(a), which begins with the year's taxable income — and there is none. The size of
the accumulated balance is irrelevant to the computation for the year, however indefensible it may be. The
exposure arises in a year in which the corporation earns and retains, and it is measured by that year's
retention. A corporation that stops earning stops accruing this tax while continuing to hold everything
it accumulated before.</p>
</div>

<div class="scenario">
<h3>The credit that had already been used up</h3>
<p>A profitable distribution business has accumulated earnings and profits of $2,400,000 at the close of
2025. In 2026 it has adjusted taxable income of $700,000, pays no dividends, and can document a genuine
plan to spend $500,000 on new warehouse capacity.</p>
<p>The minimum credit gives it nothing. IRC § 535(c)(2)(A) provides a credit equal to the amount by which
the statutory figure exceeds accumulated earnings and profits at the close of the preceding year, and
$2,400,000 already exceeds it — so the excess is nil. Its whole defence is the reasonable-needs credit
under IRC § 535(c)(1), which shelters the part of the year's earnings and profits retained for the
reasonable needs of the business. The documented $500,000 warehouse plan supports that much; the balance
is exposed. The lesson is that the minimum credit is spent once and never replenishes.</p>
</div>

<div class="scenario">
<h3>The consultancy and the manufacturer</h3>
<p>Two corporations each have accumulated earnings and profits of $120,000 at the close of the preceding
year and each retains $60,000 in the current year with no documented plan. One is a management consultancy;
the other manufactures packaging.</p>
<p>The manufacturer is comfortably inside its minimum credit, which is the excess of the general statutory
figure over its $120,000 of accumulated earnings and profits — far more than the $60,000 retained. The
consultancy is not: IRC § 535(c)(2)(B) substitutes a lower figure for a corporation whose principal
function is performing services in consulting, among seven other named fields, and against $120,000 of
accumulated earnings and profits its minimum credit is $30,000. Half of its retention is unsheltered
unless it can establish reasonable needs. Identical facts, different answers, on the strength of a closed
statutory list.</p>
</div>

<div class="scenario">
<h3>The holding company with a plan</h3>
<p>A corporation holds nothing but a portfolio of listed securities and a cash reserve. Its directors
minute a detailed five-year plan to acquire an operating business, supported by advisers' reports. It
retains its entire investment income for the year.</p>
<p>The plan does not give it a reasonable-needs credit. IRC § 535(c)(3) provides that in the case of a
mere holding or investment company the accumulated earnings credit is only the minimum credit — the excess
of the statutory figure over accumulated earnings and profits at the close of the preceding year — with no
credit for reasonable needs at all. And IRC § 533(b) makes its status prima facie evidence of the
prohibited purpose. Documentation that would protect an operating company protects this one much less,
because the statute denies it the credit that documentation supports rather than disbelieving the
documents.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>The tax is on the year, not on the balance.</strong> IRC § 535(a) starts from the year's
taxable income; the accumulated pile is not the base.</li>
<li><strong>The minimum credit is a lifetime allowance.</strong> It is the excess of the statutory figure
over accumulated earnings and profits at the close of the prior year, so it runs out.</li>
<li><strong>A holding or investment company gets no reasonable-needs credit.</strong> IRC § 535(c)(3)
allows it the minimum credit only.</li>
<li><strong>The service list is closed.</strong> Eight fields take the lower minimum credit; a service
business outside them takes the higher one.</li>
<li><strong>Unreasonable accumulation proves the purpose.</strong> IRC § 533(a) makes it determinative
unless the corporation displaces it by a preponderance of the evidence.</li>
<li><strong>The number of shareholders is irrelevant.</strong> IRC § 532(c) says so expressly — this is
not a closely-held-company tax.</li>
<li><strong>It is not self-assessed.</strong> There is no line on the return; it is raised on
examination.</li>
</ul>
</div>

## How this has changed

The rate is the item that has moved, and it moved for a structural reason rather than a policy one. The
accumulated earnings tax has historically been set at or near the top individual rate on dividends,
because its function is to make retention no cheaper than distribution. When qualified dividend income
became taxable at capital gain rates, the accumulated earnings tax was aligned to the same figure, and the
alignment has been maintained since. Material giving a graduated accumulated earnings tax, or a rate in
the high thirties, is describing the position before that alignment.

The provisions themselves have been stable for decades. The statutory minimum credit figures have not been
indexed and have not changed in a very long time — which means that in real terms the shelter they provide
has eroded steadily, and a corporation of a size that would once have been comfortably inside the minimum
credit may now exceed it many times over. That is not a change in the law, and no amendment note records
it, but it is the reason the tax reaches further than it used to.

The exception for personal holding companies in IRC § 532(b)(1) reflects the fact that such a company faces
its own penalty tax under a different part, and the two are mutually exclusive rather than cumulative.

## Exam focus

The reliable question gives an accumulated balance and asks for the tax, and the trap is to apply the rate
to the excess of that balance over the statutory figure. That is not the computation. The base is
accumulated taxable income for the year — taxable income adjusted, less dividends paid, less the credit.

Where the question gives accumulated earnings and profits at the close of the prior year, use them to
compute the *minimum credit*, which is the excess of the statutory figure over that balance and is nil
once the balance exceeds it.

Read for whether the corporation is a mere holding or investment company, which loses the reasonable-needs
credit entirely, and for whether it is in one of the eight listed service fields, which halves the minimum
figure. Both are decided by short phrases in the facts.

## Check yourself

**1.** A corporation has accumulated earnings and profits of $6,000,000 at the close of 2025 and has no
taxable income in 2026. What is its accumulated earnings tax for 2026?

*Answer: nil. IRC § 531 imposes the tax on accumulated taxable income as defined in IRC § 535(a), which
begins with the taxable income for the year. With no taxable income there is no accumulated taxable
income, whatever the size of the accumulated balance. The tax reaches this year's retention, not last
year's holdings.*

**2.** A manufacturing corporation had accumulated earnings and profits of $180,000 at the close of the
preceding year. What is its minimum accumulated earnings credit for the current year?

*Answer: the excess of $250,000 over $180,000, so $70,000. IRC § 535(c)(2)(A) sets the minimum credit as
the amount by which the statutory figure exceeds accumulated earnings and profits at the close of the
preceding taxable year. Had the balance been $260,000 the minimum credit would have been nil.*

**3.** An architecture firm operating as a C corporation had accumulated earnings and profits of $90,000
at the close of the preceding year. What is its minimum credit?

*Answer: $60,000. IRC § 535(c)(2)(B) substitutes $150,000 for $250,000 in the case of a corporation whose
principal function is performing services in architecture, among the other listed fields, so the credit is
the excess of $150,000 over the $90,000 balance.*

**4.** A corporation holding only a securities portfolio retains its investment income and documents a
plan to acquire an operating business. May it claim a reasonable-needs credit?

*Answer: no. IRC § 535(c)(3) provides that for a mere holding or investment company the accumulated
earnings credit is only the amount by which the statutory figure exceeds accumulated earnings and profits
at the close of the preceding year. There is no reasonable-needs credit available to it at all, and
IRC § 533(b) makes its status prima facie evidence of the purpose to avoid shareholder tax.*

**5.** A corporation with 4,000 shareholders is found to have accumulated beyond its reasonable needs. Can
the accumulated earnings tax apply?

*Answer: yes. IRC § 532(c) provides that the application of the tax is determined without regard to the
number of shareholders. It is not confined to closely held corporations, and the excepted categories in
IRC § 532(b) are personal holding companies, subchapter F exempt organisations and passive foreign
investment companies — none of which turns on shareholder count.*
