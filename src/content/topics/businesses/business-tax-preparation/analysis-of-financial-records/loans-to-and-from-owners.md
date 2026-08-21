---
title: "Loans to and from owners"
code: "2.2.4.i"
part: 2
domain: "Business Tax Preparation"
section: "Analysis of financial records"
description: "A loan out of an S corporation reduces debt basis before it is repaid, so a repayment made while that basis is reduced produces gain the shareholder did not expect."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 7872", title: "Treatment of loans with below-market interest rates", url: "https://www.law.cornell.edu/uscode/text/26/7872" }
  - { type: IRC, ref: "§ 1366", title: "Pass-thru of items to shareholders", url: "https://www.law.cornell.edu/uscode/text/26/1366" }
  - { type: IRC, ref: "§ 1367", title: "Adjustments to basis of shareholder's stock", url: "https://www.law.cornell.edu/uscode/text/26/1367" }
  - { type: IRC, ref: "§ 1368", title: "Distributions", url: "https://www.law.cornell.edu/uscode/text/26/1368" }
  - { type: IRC, ref: "§ 752", title: "Treatment of certain liabilities", url: "https://www.law.cornell.edu/uscode/text/26/752" }
  - { type: IRC, ref: "§ 704", title: "Partner's distributive share", url: "https://www.law.cornell.edu/uscode/text/26/704" }
  - { type: IRC, ref: "§ 267", title: "Losses, expenses, and interest with respect to transactions between related taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/267" }
  - { type: IRC, ref: "§ 1272", title: "Current inclusion in income of original issue discount", url: "https://www.law.cornell.edu/uscode/text/26/1272" }
  - { type: IRC, ref: "§ 1273", title: "Determination of amount of original issue discount", url: "https://www.law.cornell.edu/uscode/text/26/1273" }
  - { type: Reg, ref: "§ 1.1367-2", title: "Adjustments to basis of indebtedness to shareholder", url: "https://www.law.cornell.edu/cfr/text/26/1.1367-2" }
  - { type: IRM, ref: "4.10.3.10.4", title: "Balance sheet examination techniques — accounts receivable", url: "https://www.irs.gov/irm/part4/irm_04-010-003" }
forms: []
related: ["2.2.4.h", "2.2.4.c", "2.2.4.f", "2.1.5.e", "2.2.4.b", "2.2.5.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 7872 treatment of below-market gift, compensation-related and corporation-shareholder loans with the two $10,000 de minimis exceptions and the $100,000 net investment income cap on gift loans, the IRC § 1367(b)(2) reduction and restoration of an S corporation shareholder's debt basis with the Reg. § 1.1367-2 open account debt rule, and the IRM 4.10.3.10.4 examination technique for related party balances in receivables." }
---

Money moving between an owner and the business is the most examined item on a small company's
balance sheet, and for a good reason: whether it is a loan decides whether it is compensation, a
distribution, or a contribution to capital — and the answer usually turns on documents nobody
created at the time.

## The rule

**A loan at the wrong rate is recharacterised.** {fig:loan.below_market} (IRC § 7872(e)(1)), the
amount being {fig:loan.forgone_interest} (IRC § 7872(e)(2)). {fig:rp.7872} (IRC § 7872(a)) — a
deemed transfer and a deemed retransfer, both on the last day of the calendar year.

**Which loans are caught.** {fig:loan.categories} (IRC § 7872(c)(1)). Note that the
corporation-shareholder category runs in both directions.

**Two de minimis exceptions, both at the same figure.** {fig:loan.de_minimis}
(IRC § 7872(c)(3)), and for gift loans {fig:loan.gift_de_minimis} (IRC § 7872(c)(2)). A further
ceiling applies above that: {fig:loan.gift_100k} (IRC § 7872(d)(1)).

**On the S corporation side, a loan from the shareholder is basis.** It is the second tier of
IRC § 1366(d)(1), and it is consumed before it is repaid:
{fig:loan.debt_basis_reduction} (IRC § 1367(b)(2)(A); Reg. § 1.1367-2(b)(1)). Recovery is ordered:
{fig:loan.debt_basis_restore} (IRC § 1367(b)(2)(B); Reg. § 1.1367-2(c)). And there is a timing
trap: {fig:loan.not_held_at_close} (Reg. § 1.1367-2(b)(1)).

**Informal advances have their own regime.** {fig:loan.open_account}
(Reg. § 1.1367-2(a)(2)(i)).

**A partner is in a different position entirely.** A loan from a partner is a partnership liability,
and IRC § 752(a) treats an increase in a partner's share of liabilities as a contribution of money —
so it reaches outside basis directly, with no second tier and no separate debt basis account.

**And on examination.** {fig:bs.receivable_credit}, with IRM 4.10.3.10.4 directing the examiner to
test a related party loan in receivables for adequate stated interest under IRC § 7872 and for
original issue discount under IRC § 1272 and § 1273 — the latter accruing into the lender's income
even where the lender is on the cash method.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Below-market loan | {fig:loan.below_market} | IRC § 7872(e)(1) |
| Categories caught | {fig:loan.categories} | IRC § 7872(c)(1) |
| De minimis, compensation and shareholder | {fig:loan.de_minimis} | IRC § 7872(c)(3) |
| De minimis, gift loans | {fig:loan.gift_de_minimis} | IRC § 7872(c)(2) |
| Gift loan ceiling | {fig:loan.gift_100k} | IRC § 7872(d)(1) |
| Debt basis reduction | {fig:loan.debt_basis_reduction} | IRC § 1367(b)(2)(A) |
| Open account debt | {fig:loan.open_account} | Reg. § 1.1367-2(a)(2)(i) |

## How it works in practice

**Ask first whether it is debt at all.** A genuine loan needs a note, a rate at or above the
applicable federal rate, a maturity, and a pattern of actual payments. Without those, an advance
from the corporation to the shareholder is a distribution and one from the shareholder to the
corporation is a contribution to capital. Neither is neutral: the first is taxable under IRC § 1368
to the extent it exceeds basis, and the second gives stock basis where the shareholder wanted debt
basis.

**A shareholder loan is used up before it is repaid.** This is the mechanic most often missed.
Losses in excess of stock basis reduce debt basis under IRC § 1367(b)(2)(A). The note still shows
its face amount on the balance sheet, but its tax basis has fallen, so a repayment at face produces
gain equal to the difference. The gain is capital where the debt is evidenced by a note and ordinary
where it is an open account advance, which is why the paperwork matters after the fact as well as
before it.

**Restoration has an order and it favours the repaid note.** Under Reg. § 1.1367-2(c) a later net
increase restores first the basis in indebtedness repaid during the year, to the extent needed to
offset gain that would otherwise arise on the repayment, then the remaining outstanding debts in
proportion to their unrestored reductions, and only then stock basis. A profitable year can
therefore neutralise a repayment made in the same year.

**Watch the year-end date.** Debt reduced under § 1367(b)(2)(A) is only debt *held by the
shareholder at the close of the corporation's taxable year*. A note satisfied, disposed of or
forgiven during the year escapes reduction entirely — a fact that cuts both ways and is easy to
manipulate accidentally.

**A shareholder guarantee is nothing.** It creates no indebtedness of the corporation to the
shareholder, so it produces no debt basis and no loss capacity. Only an actual economic outlay by
the shareholder does. This is the single largest divergence from partnership treatment, where
IRC § 752 can put a share of an entity-level liability into a partner's outside basis without any
outlay at all.

**Run IRC § 7872 and IRC § 267 together on an interest accrual.** An accrual method corporation
accruing interest to a cash basis shareholder has its deduction deferred by IRC § 267(a)(2) to the
shareholder's year of inclusion; if the loan is also below-market, § 7872 manufactures interest that
never moves in cash. Both can operate on the same arrangement in the same year.

## Scenarios

<div class="scenario">
<h3>The repayment that produced gain</h3>

Alderton Metals is an S corporation. Its sole shareholder lent it $150,000 on a written note. Losses
over two years exhausted her stock basis and reduced her debt basis to $60,000. In year three the
company, now profitable, repays $100,000 of the note.

The repayment is not tax-free. The note's basis is $60,000 against a face of $150,000, so two thirds
of the basis attaches to the $100,000 repaid — $40,000 — and the shareholder recognises $60,000 of
gain. Because the debt is evidenced by a written note, the gain is capital.

Whether that outcome survives depends on year three's results. Reg. § 1.1367-2(c) applies any net
increase first to restore basis in indebtedness repaid during the year, to the extent needed to
offset gain that would otherwise be realised. If year three's income restores the note's basis
before the repayment is measured, the gain disappears. The order of the rules, not the order of the
cheques, decides it.
</div>

<div class="scenario">
<h3>The advance that was never a loan</h3>

Kirkham Joinery's shareholder draws $8,000 a month from the company, recorded as "loan to
shareholder". There is no note, no stated interest, no maturity and no repayment in four years. The
balance stands at $384,000.

An examiner will treat it as a distribution, and the label on the account will not prevent that. The
consequence under IRC § 1368 is that it is tax-free to the extent of the accumulated adjustments
account and of stock basis, then gain from the sale of stock — and since four years of drawings have
almost certainly outrun basis, most of it is gain.

Note what does *not* save the position. Adding a note now does not make the earlier advances a loan.
Nor does the § 7872 de minimis exception help, since the balance is far above the figure — and
§ 7872 only applies to something that is a loan in the first place. If it is not debt, the
below-market interest analysis never begins.
</div>

<div class="scenario">
<h3>The interest that only existed on paper</h3>

Fenwick Tooling, a C corporation, lends its sole shareholder $250,000 interest-free on a written
demand note that everyone treats as genuine and that the shareholder services on request.

The loan is real, so IRC § 7872 governs rather than the distribution rules. It is a
corporation-shareholder loan under § 7872(c)(1)(C), it is below-market because a demand loan bearing
no interest is below the applicable federal rate, and the aggregate is far above the de minimis
figure.

The consequence is two deemed transfers on the last day of each calendar year: the forgone interest
is treated as transferred from Fenwick to the shareholder, and retransferred by the shareholder to
Fenwick as interest. Fenwick has interest income it never received; the shareholder has a deemed
distribution and an interest payment whose deductibility depends on what the borrowed money was used
for. No cash moves and both parties have tax consequences.
</div>

## Traps

<div class="callout trap">

**Debt basis is reduced before the note is repaid.** IRC § 1367(b)(2)(A) applies losses in excess of
stock basis against debt basis in the year they arise. A repayment at face value later produces gain
equal to the unrestored reduction, and the balance sheet gives no warning because the face amount
never changed.

</div>

<div class="callout trap">

**A guarantee is not debt basis.** Only indebtedness of the corporation *to the shareholder* counts
under IRC § 1366(d)(1)(B), and only an actual economic outlay creates it. A partner in the same
position may take basis in an entity-level liability under IRC § 752 without any outlay.

</div>

<div class="callout trap">

**The de minimis exception has a hole in it.** It does not apply to a gift loan directly
attributable to the purchase or carrying of income-producing assets, and it does not apply to any
loan a principal purpose of whose interest arrangements is the avoidance of federal tax.

</div>

<div class="callout trap">

**Section 7872 presupposes a loan.** If the advance is not debt in substance, the analysis is
IRC § 1368 or compensation, not forgone interest. Reaching for the below-market rules on an
undocumented drawing concedes the very point that is in issue.

</div>

## How this has changed

IRC § 7872 was enacted in 1984 to answer *Dickman*, in which the Supreme Court held that an
interest-free demand loan between family members was a taxable gift of the use of the money. Congress
generalised the principle across income tax as well as gift tax, and built the deemed-transfer
mechanism that still operates. The dollar figures in § 7872 — the two de minimis thresholds and the
gift loan ceiling — were fixed in 1984 and have never been indexed, so they have eroded steadily in
real terms and now catch arrangements Congress would probably have exempted at the time.

The subchapter S debt basis rules have moved more recently and in the taxpayer's favour. The open
account debt regime in Reg. § 1.1367-2(a)(2) was introduced in 2008 to stop the impossible
bookkeeping of tracking every informal advance and repayment separately, netting them into a single
indebtedness up to the stated ceiling. That ceiling has not been indexed either.

The most consequential recent movement is indirect. Bonus depreciation permanent at the full
statutory rate means far more S corporations generate large early losses, which means far more
shareholders reach beyond stock basis into debt basis — so the repayment trap that used to be
occasional is now routine. Nothing in the post-2024 legislation changes IRC § 7872, § 1367 or the
regulation.

## Exam focus

Know the four things a shareholder loan must have to be respected: a note, an adequate stated rate, a
maturity, and actual payments. Questions in this area usually supply an advance missing three of the
four and ask for the consequence, which is IRC § 1368 treatment rather than § 7872 treatment.

Memorise the § 7872 categories and both de minimis figures, and be ready to say that the exception
fails on a gift loan attributable to income-producing assets or where tax avoidance is a principal
purpose of the interest arrangements.

Be able to run the debt basis mechanic in order: losses reduce stock basis first, then debt basis; a
later net increase restores debt basis before stock basis, and within debt basis restores a repaid
note first. Know that a repayment while basis is reduced produces gain, capital on a note and
ordinary on an open account advance.

Keep the two entity regimes apart. S corporation: only direct shareholder debt, only on an actual
outlay, guarantee worthless. Partnership: IRC § 752 puts liabilities into outside basis without any
separate tier.

Finally, remember that a related party loan can trigger IRC § 267(a)(2) and IRC § 7872 at once, and
that original issue discount under IRC § 1272 accrues into a cash basis lender's income.

## Check yourself

**1.** A shareholder lends her S corporation $80,000 on a note. Losses reduce her stock basis to zero
and her debt basis to $30,000. The corporation repays the note in full while she has no other income
from it. What does she recognise?

*Answer: $50,000 of gain. The note's basis is $30,000 against a face amount of $80,000, and full
repayment realises the difference. Because the debt is evidenced by a written note the gain is
capital; had the advances been open account debt the gain would be ordinary. The trap is that the
balance sheet shows an $80,000 note throughout — the basis reduction under IRC § 1367(b)(2)(A)
happened in the loss years and left no trace on the face of the accounts.*

**2.** A corporation lends its shareholder $9,000 interest-free for six months. Does IRC § 7872
apply?

*Answer: No, on those facts. IRC § 7872(c)(3) disapplies the section to any day on which the
aggregate outstanding loans between the borrower and lender do not exceed $10,000, and this is a
corporation-shareholder loan within § 7872(c)(1)(C). Two qualifications: the test is on *aggregate*
loans, so a second advance pushing the total over the figure brings the whole arrangement into the
section for those days, and the exception fails altogether if a principal purpose of the interest
arrangements is the avoidance of federal tax.*

**3.** A shareholder personally guarantees the corporation's $200,000 bank borrowing and the
corporation defaults on nothing. How much debt basis does the guarantee create?

*Answer: None. IRC § 1366(d)(1)(B) counts only the shareholder's adjusted basis in indebtedness *of
the corporation to the shareholder*, and a guarantee creates an obligation to the bank, not to the
shareholder. Debt basis would arise only on an actual economic outlay — if the shareholder were
called on the guarantee and paid, or lent the money to the corporation directly so it could repay
the bank. A partner guaranteeing a partnership recourse liability may, by contrast, take a share of
it into outside basis under IRC § 752 without paying anything.*

**4.** Why does a repayment of shareholder debt sometimes produce ordinary income and sometimes
capital gain?

*Answer: Because the character follows the form of the debt. Repayment of a debt evidenced by a
written instrument is treated as a disposition of that instrument, producing capital gain to the
extent the repayment exceeds the debt's basis. An open account advance under Reg. § 1.1367-2(a)(2)
is not evidenced by a separate written instrument, so its repayment produces ordinary income
instead. The same economic transaction is taxed at different rates depending on whether anyone wrote
a note, which is a strong practical argument for documenting advances even where the parties see no
commercial need.*

**5.** A partner and an S corporation shareholder each lend their entity $100,000, and each entity
allocates them a $140,000 loss against zero equity basis. How much loss can each deduct?

*Answer: $100,000 each, by different routes. The shareholder deducts against the second tier in
IRC § 1366(d)(1)(B), the basis of indebtedness of the corporation to them, with the remaining
$40,000 suspended indefinitely under § 1366(d)(2). The partner has no second tier: instead
IRC § 752(a) treats the increase in their share of partnership liabilities as a contribution of
money, raising outside basis by $100,000, and IRC § 704(d) then allows the loss to that extent. The
answers coincide here, but they diverge as soon as the borrowing is from a third party rather than
from the owner.*
