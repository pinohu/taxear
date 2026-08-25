---
title: "Transfer of property subject to indebtedness"
code: "2.1.4.d"
part: 2
domain: "Business Entities"
section: "Forming a corporation"
description: "Debt assumed is not boot, but debt exceeding basis is gain — and it is gain even where the transferor has an overall loss. Deductible payables are left out of the count."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 357", title: "Assumption of liability", url: "https://www.law.cornell.edu/uscode/text/26/357" }
  - { type: IRC, ref: "§ 351", title: "Transfer to corporation controlled by transferor", url: "https://www.law.cornell.edu/uscode/text/26/351" }
  - { type: IRC, ref: "§ 358", title: "Basis to distributees", url: "https://www.law.cornell.edu/uscode/text/26/358" }
  - { type: IRC, ref: "§ 362(a)", title: "Basis to corporations", url: "https://www.law.cornell.edu/uscode/text/26/362" }
  - { type: IRC, ref: "§ 736(a)", title: "Payments considered as distributive share or guaranteed payment", url: "https://www.law.cornell.edu/uscode/text/26/736" }
forms: []
related: ["2.1.4.b", "2.1.4.c", "2.1.4.a", "2.1.2.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 357(a) rule that an assumed liability is not money or other property, the § 357(b) recharacterisation of the whole of the liabilities where the principal purpose was tax avoidance or was not a bona fide business purpose, the § 357(c)(1) treatment of liabilities exceeding the aggregate adjusted basis of the property transferred as gain, the § 357(c)(3) exclusion of liabilities whose payment would give rise to a deduction, and the § 358(d) treatment of an assumed liability as money received for basis purposes with its matching exception." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the three-step liability analysis, typed scenarios, and glossary marks." }
diagram:
  archetype: "decision"
  caption: "Whether an assumed liability produces gain on incorporation"
  tests:
    - { test: "Principal purpose of the assumption was tax avoidance, or lacked a bona fide business purpose (§ 357(b))", result: "The entire liability assumed is treated as money received", outcome: "pass" }
    - { test: "No, but liabilities assumed exceed the aggregate adjusted basis of the property transferred (§ 357(c))", result: "The excess over basis is gain, regardless of purpose", outcome: "pass" }
    - { test: "Neither applies", result: "The assumed liability is not boot — no gain from the debt alone (§ 357(a))", outcome: "fail" }
---

<div class="plain-terms">
When you incorporate a business, the corporation often takes over your debt on the property too —
a mortgage, say. Taking over that debt is usually not treated as extra pay to you. So it does not
create a tax bill by itself. This page explains two exceptions. It affects anyone who gives
property with debt on it to a corporation they control. It does not affect a transfer of property
with no debt. Gain can still happen two ways. If the main reason for the debt was to dodge tax,
the whole debt counts as pay. And if the debt is simply bigger than your basis in the property,
the extra amount is taxed as gain, no matter why the debt exists. Debts you could have deducted
anyway, like normal business bills, do not count toward this.
</div>

Liabilities are the reason an incorporation that should have been tax-free produces tax. Three provisions
apply in sequence and each does something different: IRC § 357(a) says an assumed liability is not boot,
IRC § 357(b) takes that away where the assumption was motivated by tax avoidance, and IRC § 357(c) taxes
the excess of liabilities over basis regardless of motive. The third is the one that catches ordinary
commercial transactions, because it operates on arithmetic rather than on intention.

## The rule

**Not boot.** {fig:debt.no_gain_ordinarily}

**Unless the purpose was wrong.** {fig:s351.tax_avoidance}

**And in any case, the excess over basis.** {fig:debt.excess_over_basis}

**With deductible liabilities left out.** {fig:debt.excluded_liabilities}

**What it does to basis.** {fig:debt.basis_effect}

**And to the corporation's basis.** {fig:s351.corporate_basis}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Assumption not boot | {fig:debt.no_gain_ordinarily} | IRC § 357(a) |
| Tax avoidance purpose | {fig:s351.tax_avoidance} | IRC § 357(b) |
| Liabilities over basis | {fig:debt.excess_over_basis} | IRC § 357(c)(1) |
| Excluded liabilities | {fig:debt.excluded_liabilities} | IRC § 357(c)(3) |
| Effect on stock basis | {fig:debt.basis_effect} | IRC § 358(d) |

## How it works in practice

Take the three provisions in order, because they are not alternatives — the second and third are
exceptions to the first, and the third can apply where the second does not.

**IRC § 357(a) is the general rule and it is generous.** A liability assumed by the corporation, or to
which the transferred property is subject, is not treated as money or other property (IRC § 357(a)). So contributing a
mortgaged building does not produce boot and does not disqualify the exchange, even though the transferor
has been relieved of a real economic burden. That is a deliberate concession: without it, almost no
business could be incorporated without tax.

**IRC § 357(b) is the anti-abuse provision and it is brutal when it applies.** Where, considering the
nature of the liability and the circumstances of the arrangement, the taxpayer's principal purpose with
respect to the assumption was to avoid federal income tax on the exchange, or was not a bona fide business
purpose, then *the total amount of the liabilities assumed* is treated as money received. Not the excess —
the whole amount. A transferor who borrows against property shortly before contributing it, and has the
corporation take the debt, is squarely in the provision's aim.

**IRC § 357(c) is the arithmetic rule and it is the one that catches honest people.** Where the sum of the
liabilities assumed exceeds the total adjusted basis of the property transferred, the excess is gain. No
purpose test, no defence. This happens routinely: a building held for twenty years has been depreciated
down while the mortgage has been refinanced up, and the two cross. The transferor recognises gain on an
incorporation from which they received nothing but stock.

The character of that gain follows the property: capital or ordinary "as the case may be", and where
several assets are transferred it is apportioned across them. And note that IRC § 357(c) applies even where
the transferor has an *overall economic loss* — the test is liabilities against basis, not value against
basis. A property worth less than its debt but with a very low basis produces gain on contribution.

**IRC § 357(c)(3) is the release valve** and it matters most for cash-basis businesses. A liability whose
payment would give rise to a deduction is excluded from the count. So a cash-basis sole proprietor
incorporating a business with accounts payable does not count those payables, because paying them would
have produced a deduction. Without this, every cash-basis service business would generate gain on
incorporation, since its receivables have no basis and its payables are real.

**Basis.** IRC § 358(d)(1) treats the assumed liability as money received for the purpose of computing the
stock basis — so the stock basis is reduced by the liability, which is what keeps the deferred gain in
place. IRC § 358(d)(2) excludes the same liabilities that IRC § 357(c)(3) excludes, so a cash-basis
transferor's payables do not reduce stock basis either. The two exclusions are deliberately matched.

The combined effect where liabilities exceed basis is worth stating: stock basis reduced to zero (it
cannot go below), gain recognised for the excess, and the corporation's basis in the property increased by
that gain under IRC § 362(a). The corporation ends up with basis equal to the liability it assumed, which
is the economically sensible answer.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The depreciated building and the refinanced mortgage</h3>
<p>Thaddeus has held an apartment building for twenty-two years. Its adjusted {gloss:basis} is now $310,000
after depreciation, its fair market value is $1,900,000, and it carries a $740,000 mortgage taken out in
stages to fund other property. He contributes it to a corporation he will wholly own, which takes the
building subject to the mortgage. He receives only stock.</p>
<p>He recognises $430,000 of gain. IRC § 357(a) means the mortgage is not boot, and IRC § 357(b) does not
apply because the borrowings were for genuine business reasons over many years. But IRC § 357(c)(1) taxes
the excess of the $740,000 of liabilities assumed over the $310,000 aggregate adjusted basis of the
property transferred, and there is no purpose test to argue about. His stock basis is $310,000, reduced by
the $740,000 treated as money received under IRC § 358(d)(1) — floored at zero — and increased by the
$430,000 of gain, so zero. The corporation's basis is $310,000 plus $430,000, so $740,000.</p>
</div>

<div class="scenario" data-type="fails">
<h3>The loan taken out the month before</h3>
<p>Ottilie owns land worth $1,200,000 with a basis of $900,000, unencumbered. In March she borrows
$500,000 against it and spends the proceeds on a house. In April she contributes the land to a new
corporation, which assumes the loan, and she receives all its stock.</p>
<p>The whole $500,000 is treated as money received. IRC § 357(b)(1) applies where, taking into account the
nature of the liability and the circumstances in which the arrangement for the assumption was made, the
taxpayer's principal purpose was to avoid federal income tax on the exchange or was not a bona fide
business purpose. A personal borrowing a month before an incorporation, with the debt pushed onto the
corporation, meets that description. Note what the provision does: the whole $500,000 is boot, not just the
excess over basis, so she recognises $300,000 — her full realised gain, capped by the boot. Under
IRC § 357(c) alone she would have recognised nothing, because $500,000 does not exceed her $900,000
basis.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The cash-basis practice with payables</h3>
<p>Genevieve incorporates her cash-basis consultancy. She transfers $38,000 of receivables with a zero
basis, office equipment with a basis of $14,000, and the corporation assumes $52,000 of accounts payable
for supplies and subcontractors.</p>
<p>She recognises nothing. Without IRC § 357(c)(3) she would have $52,000 of liabilities against $14,000
of aggregate basis and would recognise $38,000 of gain on incorporating a business that is nowhere near as
profitable as that sounds. But the payables are liabilities the payment of which would give rise to a
deduction, so IRC § 357(c)(3)(A)(i) excludes them from the liabilities counted. Her stock basis is
similarly protected: IRC § 358(d)(2) disapplies the money-received treatment for the same excluded
liabilities, so her basis is $14,000 rather than negative. The two exclusions are matched by design.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The property worth less than its debt</h3>
<p>Marek contributes a warehouse to a corporation. Its {gloss:fair-market-value} is $600,000, its adjusted
{gloss:basis} is $180,000, and it carries a $650,000 non-recourse mortgage. He is economically underwater
by $50,000.</p>
<p>He recognises $470,000 of gain. IRC § 357(c)(1) compares the liabilities assumed with the aggregate
adjusted basis of the property transferred — not with its value — so the fact that he has an overall
economic loss is irrelevant to the computation. $650,000 less $180,000 is $470,000, treated as gain from
the sale or exchange of the property, capital or ordinary as the case may be. This is the least intuitive
result in the section and it is a consequence of the section being written against basis rather than
against value.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>An assumed liability is not boot.</strong> IRC § 357(a) — so it does not by itself produce
gain and does not disqualify the exchange.</li>
<li><strong>IRC § 357(b) taxes the whole liability, not the excess.</strong> Where it applies, the total
amount assumed is treated as money received.</li>
<li><strong>IRC § 357(c) has no purpose test.</strong> Liabilities exceeding aggregate basis are gain
however commercial the borrowing was.</li>
<li><strong>It is basis, not value.</strong> A transferor economically underwater can still recognise
substantial gain.</li>
<li><strong>Deductible liabilities are excluded.</strong> IRC § 357(c)(3)(A)(i), which is what makes
cash-basis incorporations workable.</li>
<li><strong>The basis exclusion is matched.</strong> IRC § 358(d)(2) leaves the same liabilities out of
the stock basis computation.</li>
<li><strong>Stock basis floors at zero.</strong> The excess becomes gain rather than negative basis.</li>
</ul>
</div>

## How this has changed

IRC § 357 has been stable in structure since 1954, and the excess-over-basis rule in subsection (c) has
been in place throughout. The exclusion for deductible liabilities in IRC § 357(c)(3) is the significant
addition, and it resolved a long-running problem for cash-basis taxpayers whose incorporation would
otherwise have produced gain purely because their payables exceeded the basis of their assets. Material
predating it treats a cash-basis incorporation as a routine IRC § 357(c) exposure, which it no longer is.

What has moved around the section is the treatment of who "assumes" a liability. The Code now
distinguishes between a recourse liability, treated as assumed where the transferee has agreed to and is
expected to satisfy it, and a non-recourse liability, treated as assumed to the extent the property
transferred is subject to it — with an adjustment where other assets also secure the same debt. Those
rules were codified after a period of case law disagreement, and material that speaks simply of a
liability being "assumed" without distinguishing the two is describing the position before that
codification.

The interaction with IRC § 362(e)(2) matters here too. Where property carries both a built-in loss and
liabilities exceeding basis, the corporation's basis is increased by the IRC § 357(c) gain under
IRC § 362(a) and then tested against the § 362(e)(2) cap. Sequencing the two is not addressed in either
subsection and is the kind of point on which a practitioner should look for current guidance rather than
reason from the text.

## Exam focus

Almost every question is IRC § 357(c) arithmetic: total the liabilities assumed, total the adjusted bases
of the property transferred, and the excess is gain. The distractors substitute fair market value for
basis, or compare the liability with the value of the property.

Where a question describes a borrowing shortly before the incorporation, or a liability with no business
connection, it is testing IRC § 357(b) — and the answer is that the *whole* liability is treated as money
received, not the excess.

Where the transferor is on the cash basis and the liabilities are trade payables, check IRC § 357(c)(3)
before computing anything: those liabilities are excluded and the answer is usually that no gain arises.

## Check yourself

**1.** A transferor contributes property with an adjusted basis of $240,000 and a fair market value of
$900,000, subject to a $310,000 mortgage the corporation assumes. What gain is recognised?

*Answer: $70,000. IRC § 357(c)(1) treats as gain the excess of the liabilities assumed over the total
adjusted basis of the property transferred — $310,000 less $240,000. The fair market value is irrelevant,
and there is no purpose test to satisfy.*

**2.** On the same facts, what is the transferor's basis in the stock received?

*Answer: nil. Under IRC § 358(a)(1) the basis starts at the $240,000 adjusted basis, is decreased by the
$310,000 treated as money received under IRC § 358(d)(1) — floored at zero — and increased by the $70,000
of gain recognised. The corporation's basis in the property is $240,000 plus $70,000, so $310,000, equal
to the liability it took on.*

**3.** A transferor borrows $200,000 against unencumbered property for personal reasons two weeks before
contributing it to a controlled corporation that assumes the loan. The property has a basis of $600,000.
What is the consequence?

*Answer: the whole $200,000 is treated as money received. IRC § 357(b)(1) applies where the principal
purpose of the assumption was to avoid federal income tax on the exchange or was not a bona fide business
purpose, and it treats the total amount of the liabilities assumed as money received — not merely the
excess over basis. Under IRC § 357(c) alone nothing would have been recognised, since $200,000 is well
under the $600,000 basis.*

**4.** A cash-basis proprietor incorporates, transferring assets with an aggregate basis of $9,000 and
having the corporation assume $46,000 of trade accounts payable. What gain arises under IRC § 357(c)?

*Answer: none. IRC § 357(c)(3)(A)(i) excludes from the liabilities assumed any liability the payment of
which would give rise to a deduction, and trade payables of a cash-basis business are exactly that. With
the payables excluded there are no liabilities left to compare against the $9,000 of basis.*

**5.** A transferor contributes property with a basis of $150,000 and a fair market value of $400,000,
subject to $480,000 of debt. He is economically underwater. Does he recognise gain?

*Answer: yes, $330,000. IRC § 357(c)(1) measures the excess of liabilities assumed over the aggregate
adjusted basis of the property transferred, and does not look at fair market value at all. That the
transferor has an overall economic loss on the property does not affect the computation.*
