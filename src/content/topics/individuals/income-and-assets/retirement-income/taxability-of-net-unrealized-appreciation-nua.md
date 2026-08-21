---
title: "Taxability of net unrealized appreciation (NUA)"
code: "1.2.2.k"
part: 1
domain: "Income and Assets"
section: "Retirement income"
description: "The appreciation is left out of income and out of basis, and it is long term whenever it is sold. Rolling the shares to an IRA destroys all of that, permanently."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 72", title: "Annuities; certain proceeds of endowment and life insurance contracts", url: "https://www.law.cornell.edu/uscode/text/26/72" }
  - { type: IRC, ref: "§ 402", title: "Taxability of beneficiary of employees' trust", url: "https://www.law.cornell.edu/uscode/text/26/402" }
  - { type: IRC, ref: "§ 424", title: "Definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/424" }
  - { type: IRC, ref: "§ 1222", title: "Other terms relating to capital gains and losses", url: "https://www.law.cornell.edu/uscode/text/26/1222" }
  - { type: Reg, ref: "§ 1.402(a)-1", title: "Taxability of beneficiary under a trust which meets the requirements of section 401(a)", url: "https://www.law.cornell.edu/cfr/text/26/1.402(a)-1" }
forms: []
related: ["1.2.2.c", "1.2.2.e", "1.2.2.i", "1.2.2.b", "1.2.2.a", "1.2.2.l"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 402(e)(4)(B) exclusion of net unrealized appreciation on a lump sum distribution of employer securities, the § 402(e)(4)(D) definition of a lump sum distribution and its aggregation rule, the Treas. Reg. § 1.402(a)-1(b) computation and basis consequence, and the long-term character on a later sale. Records that the governing regulation still measures long term as more than six months." }
---

The treatment turns on a single sentence in IRC § 402(e)(4)(B): on a lump sum distribution that includes
employer securities, the appreciation in those securities is **excluded from gross income**. What is taxed
now is only what the trust paid for the shares. The appreciation is taxed later, as capital gain, when the
shares are sold — and if they are never sold in the owner's lifetime, it may never be taxed as ordinary
income at all. The whole thing is destroyed by a single ordinary act: rolling the shares into an IRA.

## The rule

**The exclusion.** In the case of any lump sum distribution which includes securities of the employer
corporation, there shall be excluded from gross income the net unrealized appreciation attributable to
that part of the distribution which consists of employer securities (IRC § 402(e)(4)(B)). The taxpayer may
elect, on the return on which the lump sum distribution must be included, **not** to have the subparagraph
apply — which is the only election in the provision. There is nothing to elect into.

**What the appreciation is.** It is the excess of the market value of the securities at the time of
distribution over their cost or other basis **to the trust**. Where a distribution contains both
appreciated and depreciated shares, the figure is the net increase across all of them, and two
distributions to the same distributee in one taxable year are treated as one (Reg. § 1.402(a)-1(b)(2)(i)).

**What a lump sum distribution is.** The distribution or payment, within one taxable year of the
recipient, of the **balance to the credit** of the employee, becoming payable on the employee's death,
after the employee attains age 59½, on separation from service, or after the employee becomes disabled
within § 72(m)(7) — from a trust forming part of a § 401(a) plan and exempt under § 501, or from a
§ 403(a) plan (IRC § 402(e)(4)(D)(i)). Separation from service is available only to a common-law employee;
disability only to a self-employed individual within § 401(c)(1).

**The balance is measured across plans, not accounts.** All trusts in a plan are one trust; all pension
plans of the employer are one plan; all profit-sharing plans one plan; all stock bonus plans one plan
(IRC § 402(e)(4)(D)(ii)(I)). Leaving a dollar behind in a second profit-sharing plan of the same employer
defeats the whole distribution.

**Which securities count.** Only shares of stock and bonds or debentures issued by a corporation with
interest coupons or in registered form (IRC § 402(e)(4)(E)(i)), including securities of a parent or
subsidiary corporation as defined in § 424(e) and (f) (§ 402(e)(4)(E)(ii)).

**Basis, and the consequence of leaving the appreciation out of it.** The excluded appreciation is **not
included in the distributee's basis** in the securities. Basis is the trust's cost — the same figure that
was taxed as ordinary income in the year of distribution. When the shares are later sold, the excluded
appreciation is treated as gain from the sale or exchange of a capital asset held long term, **whatever
the distributee's actual holding period**; any further gain above that figure is long or short term
depending on how long the distributee held the shares (Reg. § 1.402(a)-1(b)(1)(i)).

**Outside a lump sum, almost nothing is excluded.** On a distribution that is not a lump sum, only the
appreciation attributable to amounts contributed **by the employee** is left out, and even that does not
apply where the distribution is rolled over under § 402(c) (IRC § 402(e)(4)(A)).

## Current figures

| Item | 2026 |
| --- | --- |
| The exclusion | {fig:nua.exclusion} |
| How it is measured | {fig:nua.definition} |
| Lump sum distribution | {fig:nua.lump_sum} |
| Balance to the credit | {fig:nua.aggregation} |
| Eligible plans | {fig:nua.eligible_plans} |
| Employer securities | {fig:nua.securities} |
| Basis in the shares | {fig:nua.basis} |
| Character on a later sale | {fig:nua.character} |
| The only election | {fig:nua.election_out} |
| Outside a lump sum | {fig:nua.non_lump_sum} |
| Additional tax on early distributions | {fig:ira.early_distribution_tax} |

## How it works in practice

The sequence at the plan is specific and cannot be reassembled afterwards. The employer securities are
distributed **in kind** to a taxable brokerage account; everything else in the balance goes wherever it is
going, including by rollover; and all of it happens within one taxable year of the recipient. The moment
the shares themselves are rolled into an IRA, they cease to be a distribution of securities and become an
IRA balance — and every dollar of appreciation that would have been capital gain becomes ordinary income
on the way out of the IRA. There is no correction for this and no election that recovers it.

The economics are a straightforward comparison and are not always favourable. The cost basis is taxed at
ordinary rates **now**, in a single year, and if the participant is under 59½ it also carries the
additional tax on early distributions — measured on the basis, not on the excluded appreciation, because
only the basis is includible. Against that, the appreciation escapes ordinary rates and defers until sale.
The higher the ratio of appreciation to cost, the better the arithmetic works.

One more feature is easy to overlook: the excluded appreciation is income in respect of a decedent, so
the shares get no step-up in basis at death to the extent of it. That is a reason to decide during life,
not an argument for holding indefinitely.

<div class="scenario">
<h3>Scenario 1 — the two ways to take the same shares</h3>

Marisol retires at 61. Her 401(k) holds 800,000 dollars, of which employer stock is worth 300,000 dollars
against a trust cost of 45,000 dollars. She distributes the whole balance in one calendar year, taking the
shares in kind to a brokerage account and rolling the remaining 500,000 dollars to an IRA.

She includes 45,000 dollars in ordinary income for the year — the trust's cost. The 255,000 dollars of
appreciation is excluded by IRC § 402(e)(4)(B), left out of her basis, and taxed as long-term capital gain
only when she sells. Had she instead rolled the shares into the IRA with everything else, she would have
reported nothing that year and the entire 300,000 dollars, appreciation included, would have come out as
ordinary income later.
</div>

<div class="scenario">
<h3>Scenario 2 — the dollar left behind</h3>

Terrence separates from service and directs his employer to distribute the whole of his profit-sharing
plan account, taking employer stock in kind. He forgets a second profit-sharing plan account from an
earlier subsidiary of the same employer, holding 1,900 dollars, which stays put.

Under IRC § 402(e)(4)(D)(ii)(I) all profit-sharing plans maintained by the employer are treated as a
single plan, so the balance to his credit was not distributed within one taxable year and there is no
lump sum distribution. The exclusion in § 402(e)(4)(B) does not apply; the full fair market value of the
shares is ordinary income. The 1,900 dollars decided the treatment of the entire distribution.
</div>

<div class="scenario">
<h3>Scenario 3 — selling in two pieces</h3>

Yusuf takes a qualifying distribution of employer shares worth 120,000 dollars against a trust cost of
20,000 dollars, so 100,000 dollars is excluded. Eight months later he sells half the shares for 70,000
dollars; two years after that he sells the rest for 40,000 dollars.

On the first sale his basis is half the trust cost, 10,000 dollars. Of the 60,000 dollars of gain, 50,000
— half the excluded appreciation — is long-term capital gain regardless of his eight-month holding period,
and the remaining 10,000 dollars is short-term because that is his actual holding period for the excess
(Reg. § 1.402(a)-1(b)(1)(i)). On the second sale, everything is long term: both the allocated appreciation
and the gain above it.
</div>

<div class="callout trap">

**There is no election to use this treatment.** IRC § 402(e)(4)(B) applies by its own force to a
qualifying distribution; the statute's only election is an election **out**. A question framed as
"electing NUA treatment" has the mechanism backwards.

**No IRA can produce it.** The lump sum definition reaches a § 401(a) trust and a § 403(a) plan and
nothing else. Employer shares sitting in an IRA — however they got there — carry no exclusion.

**The additional tax on early distributions falls on the cost, not the appreciation.** Only the basis is
includible in gross income, so that is the measure; the excluded appreciation is not exposed to it.

**Depreciated shares net against appreciated ones** in the same distribution (Reg.
§ 1.402(a)-1(b)(2)(i)) — the figure is net unrealized appreciation, not the sum of the winners.
</div>

## How this has changed

**The statutory text has been stable for decades; the regulation around it has not been conformed.**
Treas. Reg. § 1.402(a)-1(b)(1)(i) still describes the excluded appreciation, on a subsequent taxable
transaction, as "a gain from the sale or exchange of a capital asset held for more than six months." Six
months has not been the long-term holding period since 1976; IRC § 1222 has required more than one year
for the whole of the modern era. The regulation's rule is nonetheless the operative one and its **effect**
is unchanged — the appreciation is long term either way — but the number in the text is wrong, and it is a
useful reminder that a live regulation is not the same as a current one.

**The same paragraph still refers to the repealed capital gains treatment for total distributions.** Its
opening cross-references paragraph (a)(6) of the section, the pre-1996 rule under which the whole of a
total distribution above employee contributions was capital gain. IRC § 402(e)(5) was repealed in 1996,
and only the ten-year averaging transition for participants born before 1936 survived it. Read
paragraph (b) for the appreciation rule and ignore what it says about the surrounding regime.

**Two provisions widened the definition without changing the exclusion.** IRC § 402(e)(4)(D)(v) excludes
from the balance to the credit any amount payable to an alternate payee under a qualified domestic
relations order, and clause (vii) lets a spouse or former spouse alternate payee have their own lump sum
distribution. Neither is intuitive from the operative sentence, and both change who can qualify.

## Exam focus

Expect the **destroyed opportunity** to be the tested point: a fact pattern where the shares are rolled
into an IRA and the question asks what treatment is available. The answer is none, and it cannot be
restored.

Expect the **balance to the credit** aggregation. Any residual left in a plan of the same category
defeats the lump sum, and the facts will usually mention the leftover account in passing.

Expect the character question, in two parts: the appreciation is long term whatever the holding period,
and only the **excess** over it follows the distributee's own period.

Do not read the provision as an election in. And check the plan type before anything else — a § 401(a)
trust or a § 403(a) plan qualifies; a § 403(b) arrangement, a § 457(b) plan and every IRA do not.

## Check yourself

**1.** A participant takes a qualifying lump sum distribution including employer stock worth 90,000
dollars that cost the trust 15,000 dollars. What is included in gross income for the year?

*Answer: 15,000 dollars, the trust's cost. The 75,000 dollars of net unrealized appreciation is excluded
from gross income by IRC § 402(e)(4)(B) and is not included in the distributee's basis.*

**2.** The same participant is 52 years old. What is the additional tax on early distributions measured
on?

*Answer: The 15,000 dollars actually included in gross income. The excluded appreciation is not
includible, so it is not part of the measure.*

**3.** Six weeks after the distribution the participant sells all the shares for 96,000 dollars. How is
the 81,000 dollars of gain characterised?

*Answer: 75,000 dollars is long-term capital gain notwithstanding the six-week holding period, and the
remaining 6,000 dollars is short-term because it exceeds the excluded appreciation and follows the
distributee's own holding period (Reg. § 1.402(a)-1(b)(1)(i)).*

**4.** A client rolled employer shares from a 401(k) into a traditional IRA in 2024 and now asks to use
this treatment on them. Can she?

*Answer: No. IRC § 402(e)(4)(D)(i) confines a lump sum distribution to a § 401(a) exempt trust or a
§ 403(a) plan, so an IRA cannot produce the exclusion, and the appreciation will be ordinary income when
distributed from the IRA.*

**5.** Is the exclusion something the taxpayer elects?

*Answer: No. It applies automatically to a qualifying distribution. The second sentence of IRC
§ 402(e)(4)(B) provides only an election **not** to have it apply, made on the return on which the lump
sum distribution must be included.*
