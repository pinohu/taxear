---
title: "Partnership level audit and opt-out"
code: "2.1.2.k"
part: 2
domain: "Business Entities"
section: "Partnerships"
description: "Tax on a partnership adjustment is now assessed against the partnership, in a later year, at the highest rate. Electing out has to be done every year on a timely return."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6221", title: "Determination at partnership level; election out", url: "https://www.law.cornell.edu/uscode/text/26/6221" }
  - { type: IRC, ref: "§ 6222", title: "Partner's return must be consistent with partnership return", url: "https://www.law.cornell.edu/uscode/text/26/6222" }
  - { type: IRC, ref: "§ 6223", title: "Partners bound by actions of partnership", url: "https://www.law.cornell.edu/uscode/text/26/6223" }
  - { type: IRC, ref: "§ 6225", title: "Partnership adjustment by Secretary", url: "https://www.law.cornell.edu/uscode/text/26/6225" }
  - { type: IRC, ref: "§ 6226", title: "Alternative to payment of imputed underpayment by partnership", url: "https://www.law.cornell.edu/uscode/text/26/6226" }
  - { type: IRC, ref: "§ 6227", title: "Administrative adjustment request by partnership", url: "https://www.law.cornell.edu/uscode/text/26/6227" }
  - { type: IRC, ref: "§ 6031(b)", title: "Copies to partners", url: "https://www.law.cornell.edu/uscode/text/26/6031" }
  - { type: IRC, ref: "§ 6037(b)", title: "S corporation statements to shareholders", url: "https://www.law.cornell.edu/uscode/text/26/6037" }
forms: []
related: ["2.1.2.i", "2.1.2.a", "2.1.1.d", "2.1.2.h"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 6221(a) rule that partnership-related adjustments, the tax attributable to them and any related penalties are determined at the partnership level; the § 6221(b) election out with its five conditions, its 100-statement limit and its eligible-partner list, and the § 6221(b)(2)(A) treatment of S corporation partners; the § 6225 imputed underpayment computed by netting adjustments and applying the highest rate for the reviewed year, payable by the partnership in the adjustment year; the § 6225(c) modification procedures; the § 6226 push-out election within 45 days of the notice of final partnership adjustment; and the § 6227 administrative adjustment request." }
---

The centralised audit regime moved the payment of tax on a partnership adjustment from the partners to
the partnership. That single change carries all the consequences: the partnership pays, the partners who
were there in the year adjusted may no longer be there in the year the bill arrives, the rate applied is
not any actual partner's rate, and the only reliable way to avoid all of it is to elect out — annually, on
a timely return, and only if every partner qualifies.

## The rule

**Everything happens at the partnership.** {fig:bba.partnership_level}

**Unless the partnership elects out.** {fig:bba.election_out}

**With a special count for S corporation partners.** {fig:bba.scorp_partner}

**What the partnership pays.** {fig:bba.imputed_underpayment}

**How that can be reduced.** {fig:bba.modification}

**Or pushed out to the partners.** {fig:bba.pushout}

**Correcting a return.** {fig:bba.aar}

**Who acts for the partnership.** {fig:ptrfile.representative}

**And consistency.** {fig:ptrfile.consistency}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Election out conditions | {fig:bba.election_out} | IRC § 6221(b)(1) |
| S corporation partners | {fig:bba.scorp_partner} | IRC § 6221(b)(2)(A) |
| Imputed underpayment | {fig:bba.imputed_underpayment} | IRC § 6225(a), (b) |
| Modification | {fig:bba.modification} | IRC § 6225(c) |
| Push-out election | {fig:bba.pushout} | IRC § 6226(a) |

## How it works in practice

Two years matter and they are not the same year. The *reviewed year* is the year whose items are adjusted.
The *adjustment year* is the year in which the adjustment becomes final and the partnership pays. The
imputed underpayment is computed by netting the adjustments for the reviewed year and applying the highest
rate of tax in effect for that year — and it is paid by the partnership out of adjustment-year money, borne
economically by whoever holds the interests then.

That produces the mismatch that dominates the topic. A partner who sold their interest in the reviewed
year has no exposure; a partner who bought in afterwards bears an adjustment for a year they had nothing to
do with. Nothing in the statute fixes this. It is fixed, if at all, in the purchase agreement, by
indemnities and by pricing — which is why partnership interest sale documents now routinely address it.

The highest rate is a deliberate default and it is nearly always too high. Applying the top individual rate
to adjustments that were in fact allocated to tax-exempt partners, corporate partners, or individuals in
lower brackets overstates the tax. IRC § 6225(c) exists to correct that, and its central mechanism is
partner participation: if reviewed-year partners file returns taking their allocable adjustments into
account and pay the resulting tax, the imputed underpayment is computed without that portion. The relief
is real but it costs cooperation from people who may have left.

The push-out election under IRC § 6226 is the other route and the one most often chosen where the partner
group has changed. Within 45 days of the notice of final partnership adjustment, the partnership elects and
furnishes statements to each reviewed-year partner and to the Secretary. IRC § 6225 then does not apply,
and — the language is emphatic — no assessment, levy or court proceeding for collection of that
underpayment may be brought against the partnership. The adjustment lands on the partners who were
actually there. The 45 days is short, the election is revocable only with the Secretary's consent, and
missing the window leaves the partnership paying.

The election out under IRC § 6221(b) is the cleanest answer and the most easily lost. Five conditions must
all hold: the election is made, the partnership furnishes 100 or fewer statements under IRC § 6031(b),
every partner is an eligible type, the election is made on a *timely filed* return with each partner's
name and taxpayer identification number disclosed, and every partner is notified. Two of those are where
elections fail. A late return kills the election for that year outright — there is no reasonable cause
relief in the subsection. And the eligible-partner list is exhaustive: individuals, C corporations, foreign
entities that would be C corporations if domestic, S corporations, and estates of deceased partners.
A partnership partner, a trust partner, a disregarded entity partner, or a single-member LLC holding an
interest all disqualify the election.

The S corporation rule adds a trap on top. Where a partner is an S corporation, the partnership must also
disclose every person to whom that S corporation furnishes a statement, and *those statements count toward
the 100 limit*. A partnership with twelve partners, one of which is an S corporation with ninety-five
shareholders, is over the limit.

The election is annual. There is no continuing election, so a partnership that qualifies must make it
again every year on a timely return, and a partnership whose ownership changes mid-year may qualify in one
year and not the next.

## Scenarios

<div class="scenario">
<h3>The buyer who paid for someone else's adjustment</h3>
<p>A partnership's 2024 return is examined and adjusted in 2027, producing an imputed underpayment of
$800,000 payable in 2027. Two of the four partners in 2024 sold their interests in 2025 to new investors,
who have held them since.</p>
<p>The partnership pays the $800,000 in 2027 out of 2027 money, and it is borne by the partners holding
interests then — including the two who arrived in 2025 and had nothing to do with 2024. Under
IRC § 6225(a)(1) the partnership pays the imputed underpayment in the adjustment year, and nothing in the
subchapter allocates it to reviewed-year partners. The remedies are commercial rather than statutory: a
IRC § 6226 push-out election, which puts the adjustment onto the 2024 partners, or an indemnity in the
2025 purchase agreement. If neither exists and the 45 days pass, the new partners simply bear it.</p>
</div>

<div class="scenario">
<h3>The rate that was too high</h3>
<p>A partnership's adjustments for a reviewed year total $2,000,000. Of that, 60 percent was allocable to
a tax-exempt pension fund partner and 30 percent to a C corporation partner, with the balance to two
individuals in middle brackets.</p>
<p>The default imputed underpayment applies the highest rate of tax in effect for the reviewed year to the
netted adjustments (IRC § 6225(b)(1)(B)), which produces a figure far above the tax anybody would actually
have paid. IRC § 6225(c) is the answer, and the most direct route is IRC § 6225(c)(2)(A): if the
reviewed-year partners file returns taking their allocable adjustments into account, with payment of any
tax due, the imputed underpayment is determined without regard to the portion so taken into account. For
the pension fund the tax due may be nil, which removes 60 percent of the base. The cost is that former
partners must be persuaded to file.</p>
</div>

<div class="scenario">
<h3>The election that one partner destroyed</h3>
<p>A partnership with nine partners has elected out under IRC § 6221(b) for several years. In 2026 one
partner transfers her interest to her family trust for estate planning reasons. The partnership makes the
election again on its timely filed 2026 return.</p>
<p>The election is invalid for 2026. IRC § 6221(b)(1)(C) lists the permitted partner types exhaustively —
individuals, C corporations, foreign entities that would be C corporations if domestic, S corporations,
and estates of deceased partners — and a trust is not among them. Nor is the estate exception any help: it
covers the estate of a deceased partner, not an inter vivos trust. The partnership is subject to the
centralised regime for 2026 whether or not it filed the election, and should designate a partnership
representative accordingly. A single transfer, made for reasons having nothing to do with tax procedure,
changed the audit regime for the whole firm.</p>
</div>

<div class="scenario">
<h3>The S corporation that used up the count</h3>
<p>A partnership has eleven partners: ten individuals and one S corporation. The S corporation has ninety
shareholders. The partnership wishes to elect out of the centralised regime.</p>
<p>It cannot. Under IRC § 6221(b)(2)(A)(ii) the statements the S corporation is required to furnish under
IRC § 6037(b) are treated as statements furnished by the partnership for the purpose of the
100-statement test. Ten individual partners plus ninety shareholder statements is one hundred, plus the
statement to the S corporation itself. The partnership is over the limit despite having eleven partners on
its own books. It must also, if it were otherwise eligible, disclose the name and taxpayer identification
number of every one of those ninety shareholders.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Two different years.</strong> The reviewed year supplies the adjustments and the rate; the
adjustment year is when the partnership pays.</li>
<li><strong>The current partners bear it.</strong> Unless a push-out election is made, an adjustment for
an old year is economically borne by whoever holds interests now.</li>
<li><strong>The default rate is the highest one.</strong> IRC § 6225(b) applies it regardless of who the
partners actually were.</li>
<li><strong>45 days.</strong> The IRC § 6226 election runs from the notice of final partnership adjustment
and is revocable only with the Secretary's consent.</li>
<li><strong>The election out is annual and needs a timely return.</strong> A late return loses it for the
year, with no relief provision in the subsection.</li>
<li><strong>The eligible-partner list is exhaustive.</strong> A trust, a partnership, or a disregarded
entity as partner disqualifies the election.</li>
<li><strong>S corporation shareholders count toward 100.</strong> IRC § 6221(b)(2)(A)(ii) treats their
statements as the partnership's.</li>
</ul>
</div>

## How this has changed

This regime replaced its predecessor for returns filed for partnership taxable years beginning after
31 December 2017, and the change is best understood as three separate reversals.

*Who pays.* Under the prior regime adjustments were determined at the partnership level but the tax was
assessed against the partners. Now the partnership pays the imputed underpayment itself unless it elects
to push the adjustment out, which is why the identity of the partners at the adjustment date matters so
much more than it used to.

*Who is covered.* The prior regime applied only to partnerships above a size threshold, with small
partnerships outside it automatically. Now every partnership is inside the regime unless it affirmatively
elects out, and the election has conditions that the old automatic exception did not.

*Who is heard.* The prior regime gave partners statutory notice of proceedings and rights to participate.
Those provisions were repealed. The partnership representative acts alone and binds every partner.

The practical drafting consequence of all three is that partnership agreements written before 2016 are
silent on questions that now determine substantial economic outcomes: who may be the partnership
representative and on what terms, whether a push-out election must be made, whether the election out must
be preserved by restricting transfers to eligible partner types, and who indemnifies whom for an
adjustment relating to a period before a partner arrived.

## Exam focus

Learn the election-out conditions as a checklist, because that is how they are tested. One hundred or
fewer statements; every partner an individual, a C corporation, a foreign entity that would be a C
corporation, an S corporation, or the estate of a deceased partner; election on a timely filed return with
names and taxpayer identification numbers; and notice to every partner. Questions typically break exactly
one of these, most often by introducing a trust or a partnership as a partner.

The second recurring shape asks who pays an adjustment. The default is the partnership, in the adjustment
year, at the highest rate for the reviewed year. The alternatives are IRC § 6225(c) modification, which
reduces the imputed underpayment, and the IRC § 6226 push-out, which moves it to the reviewed-year
partners.

Remember the 45-day period for the push-out election, and remember that it runs from the notice of final
partnership adjustment rather than from the start of the examination.

## Check yourself

**1.** A partnership with 40 partners, all individuals, files its return three weeks late and includes the
election out under IRC § 6221(b) with all required disclosures. Is the election effective?

*Answer: no. IRC § 6221(b)(1)(D)(i) requires the election to be made with a timely filed return for the
taxable year. A late return defeats it, and the subsection contains no reasonable cause provision. The
partnership is within the centralised regime for that year.*

**2.** A partnership has 30 partners: 29 individuals and one family trust. May it elect out?

*Answer: no. IRC § 6221(b)(1)(C) requires each partner to be an individual, a C corporation, a foreign
entity that would be treated as a C corporation were it domestic, an S corporation, or an estate of a
deceased partner. A trust is not on the list, and the estate exception covers only the estate of a
deceased partner.*

**3.** A partnership's 2023 return is adjusted, with the adjustment becoming final in 2027. Which year's
tax rate applies, and who pays?

*Answer: the highest rate in effect for 2023, and the partnership pays in 2027. IRC § 6225(b)(1) computes
the imputed underpayment by netting the adjustments for the reviewed year and applying the highest rate of
tax in effect for that year, and IRC § 6225(a)(1) makes the partnership liable in the adjustment year.*

**4.** A partnership receives a notice of final partnership adjustment on 1 March. By when must it make
the push-out election, and what is the effect?

*Answer: by 15 April — 45 days after the notice. Under IRC § 6226(a), if the partnership elects within
that period and furnishes each reviewed-year partner and the Secretary with a statement of that partner's
share of the adjustments, IRC § 6225 does not apply, no assessment or collection proceeding may be brought
against the partnership for the underpayment, and each partner takes the adjustment into account. The
election is revocable only with the Secretary's consent.*

**5.** A partnership with 15 individual partners also has one S corporation partner with 88 shareholders.
May it elect out?

*Answer: no. Under IRC § 6221(b)(2)(A)(ii) the statements the S corporation must furnish under
IRC § 6037(b) are treated as statements furnished by the partnership for the 100-statement test. Fifteen
individuals plus the S corporation plus its 88 shareholder statements exceeds 100. The partnership would
also have to disclose the name and taxpayer identification number of each of those shareholders.*
