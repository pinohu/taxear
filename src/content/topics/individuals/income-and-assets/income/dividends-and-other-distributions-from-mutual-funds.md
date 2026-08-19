---
title: "Dividends and other distributions from mutual funds, corporations, and other entities"
code: "1.2.1.c"
part: 1
domain: "Income and Assets"
section: "Income"
description: "A distribution is only a dividend to the extent of earnings and profits, and only a qualified dividend if a holding period is met. Both tests are done for you badly."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 1", title: "Tax imposed", url: "https://www.law.cornell.edu/uscode/text/26/1" }
  - { type: IRC, ref: "§ 199A", title: "Qualified business income", url: "https://www.law.cornell.edu/uscode/text/26/199A" }
  - { type: IRC, ref: "§ 246", title: "Rules applying to deductions for dividends received", url: "https://www.law.cornell.edu/uscode/text/26/246" }
  - { type: IRC, ref: "§ 301", title: "Distributions of property", url: "https://www.law.cornell.edu/uscode/text/26/301" }
  - { type: IRC, ref: "§ 305", title: "Distributions of stock and stock rights", url: "https://www.law.cornell.edu/uscode/text/26/305" }
  - { type: IRC, ref: "§ 316", title: "Dividend defined", url: "https://www.law.cornell.edu/uscode/text/26/316" }
  - { type: IRC, ref: "§ 852", title: "Taxation of regulated investment companies and their shareholders", url: "https://www.law.cornell.edu/uscode/text/26/852" }
  - { type: IRC, ref: "§ 854", title: "Limitations applicable to dividends received from regulated investment company", url: "https://www.law.cornell.edu/uscode/text/26/854" }
  - { type: IRC, ref: "§ 1411", title: "Imposition of tax on net investment income", url: "https://www.law.cornell.edu/uscode/text/26/1411" }
  - { type: IRC, ref: "§ 6042", title: "Returns regarding payments of dividends and corporate earnings and profits", url: "https://www.law.cornell.edu/uscode/text/26/6042" }
  - { type: Pub, ref: "550", title: "Investment Income and Expenses", url: "https://www.irs.gov/pub/irs-pdf/p550.pdf" }
forms: []
related: ["1.2.1.b", "1.2.1.a", "1.1.1.f", "1.2.1.j", "1.2.1.i", "1.2.1.l"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 316 earnings and profits test, the IRC § 301(c) three-tier ordering, the IRC § 1(h)(11) qualified dividend holding period as it borrows from IRC § 246(c), and the treatment of regulated investment company and REIT distributions." }
---

Two questions decide the tax on a distribution, and the statements clients bring rarely answer either
one reliably. Is it a dividend at all — which depends on the payer's earnings and profits, not on what
the payment is called? And if it is, is it a **qualified** dividend — which depends on how long the
shareholder held the stock, something no payer can know. Both determinations are made by someone
without the facts, and both are worth checking.

## The rule

**A dividend is a distribution out of earnings and profits.** The term means any distribution of
property made by a corporation to its shareholders out of earnings and profits accumulated after
28 February 1913, or out of the earnings and profits of the taxable year computed at the close of that
year without reduction for distributions made during it (IRC § 316(a)(1), (2)). The section then adds a
presumption that carries most of the practical weight: except as otherwise provided, **every
distribution is made out of earnings and profits** to the extent of them, and from the most recently
accumulated.

**What is not a dividend falls through two more tiers.** The portion of a distribution that is a
dividend is included in gross income; the portion that is not is applied against and reduces the
adjusted basis of the stock; and any remainder is treated as gain from the sale or exchange of property
(IRC § 301(c)(1)–(3)). A distribution can therefore be partly ordinary income, partly a tax-free return
of capital, and partly capital gain in a single payment.

**Qualified dividend status is about the shareholder, not the payer.** Qualified dividend income means
dividends received from domestic corporations and qualified foreign corporations (IRC
§ 1(h)(11)(B)(i)), excluding dividends from § 501 and § 521 exempt organisations, § 591 amounts and
§ 404(k) dividends (IRC § 1(h)(11)(B)(ii)). The holding period is imported: the term excludes any
dividend on stock for which the § 246(c) requirements are not met, **substituting "60 days" for
"45 days" and "121-day period" for "91-day period"** (IRC § 1(h)(11)(B)(iii)(I)). Read together with
§ 246(c)(1)(A), that means the stock must be held for more than 60 days during the 121-day period
beginning 60 days before the ex-dividend date, counting the day of disposition but not the day of
acquisition (IRC § 246(c)(3)(A)). Preference stock with dividends attributable to a period exceeding
366 days uses a longer pair of figures (IRC § 246(c)(2)). Being under an obligation to make related
payments on substantially similar property also disqualifies (IRC § 1(h)(11)(B)(iii)(II)).

**Fund distributions are three different things.** A capital gain dividend is treated by shareholders
as gain from the sale or exchange of a capital asset held for more than one year (IRC § 852(b)(3)(B)),
and it is defined by what the company **reports** in written statements to shareholders (IRC
§ 852(b)(3)(C)(i)) — so the fund's designation controls. A capital gain dividend is expressly **not**
considered a dividend for § 1(h)(11) purposes (IRC § 854(a)). An exempt-interest dividend is excluded
from gross income but still reported, and carries its private activity share into the minimum tax.

**Stock dividends are usually not income.** Gross income does not include a distribution by a
corporation of its own stock to its shareholders with respect to its stock (IRC § 305(a)) — unless one
of the § 305(b) exceptions applies, the first of which is a distribution payable **at the election of
any shareholder** in stock or in property (IRC § 305(b)(1)), which brings § 301 into play. That is the
provision standing behind the treatment of dividend reinvestment plans.

**Two further layers sit on top.** Qualified REIT dividends are not qualified dividend income, but
twenty percent of them enters the combined qualified business income amount without any wage or
property limitation (IRC § 199A(b)(1)(B)). And dividends are net investment income, reached by a
separate tax on the lesser of net investment income or the excess of modified adjusted gross income
over an unindexed threshold (IRC § 1411(a)(1), (b)).

## Current figures

| Item | 2026 |
| --- | --- |
| Qualified dividend holding period | {fig:qdi.holding_period} |
| Net investment income tax | {fig:nii.tax} |
| Dividend reporting threshold | {fig:dividend.reporting_floor} |
| Qualified REIT dividends in the QBI computation | {fig:reit.qbi_share} |

## How it works in practice

Read the statement as a set of claims to be tested, not as an answer. The qualified dividend figure on
it is the payer's or broker's best guess: they know the ex-dividend dates but not whether the client
sold shortly after one. A client who trades around distributions will have a reported qualified figure
that is too high, and the correction is the client's to make.

Where the shares came from a corporation with no current or accumulated earnings and profits — a
closely held company after a bad year is the usual case — the § 301(c) tiers do real work. Test the
distribution against earnings and profits first, then run the excess against basis, then treat what is
left as gain. Getting this wrong in the client's favour understates income; getting it wrong the other
way taxes a return of capital.

For funds, keep the three categories apart. Ordinary dividends may or may not be qualified; capital
gain dividends are long-term regardless of how long the client held the fund shares, which is the
single most useful fact in this topic; exempt-interest dividends stay out of gross income but come back
for the minimum tax and for the social security formula.

Two administrative habits. Check whether a client participates in a reinvestment plan, because
reinvested dividends are taxed as received and each reinvestment starts a new lot with its own basis
and holding period — a records problem that compounds silently for years. And where a plan offers
shares at a discount, the discount is itself income, with basis taken at full fair market value.

<div class="scenario">
<h3>The distribution that was not a dividend</h3>

Kwame owns shares in a small operating company. It distributed $30,000 to him during a year in which it
had no current earnings and profits and accumulated earnings and profits of $12,000. His basis in the
shares is $9,000.

The distribution splits three ways under IRC § 301(c). The first $12,000 is a dividend out of
accumulated earnings and profits (IRC § 316(a)(1)) and is ordinary income. The next $9,000 is not a
dividend, so it is applied against and reduces his basis to zero (IRC § 301(c)(2)). The remaining
$9,000 exceeds his basis and is treated as gain from the sale or exchange of property (IRC
§ 301(c)(3)(A)).

The company's own statement is likely to report the whole $30,000 as an ordinary dividend, because the
earnings and profits computation is not one it makes for the payee. The character difference here is
worth several thousand dollars in tax.
</div>

<div class="scenario">
<h3>Sold too soon after the ex-dividend date</h3>

Ines bought 800 shares on 20 May. The ex-dividend date was 10 June and she received $1,400 of ordinary
dividends. She sold the whole position on 15 July, and her broker reports the full $1,400 as qualified.

It is not qualified. The 121-day period begins 60 days before the ex-dividend date, so it runs from
11 April, and within it she must hold the stock for **more than 60 days**. Counting the day of
disposition but not the day of acquisition (IRC § 246(c)(3)(A)), she held from 21 May to 15 July, which
is 56 days. Short by five.

Had she held to 20 July, giving 61 days, she would have been over the line and the whole $1,400 would have qualified.
The broker's figure is not wrong through carelessness — it simply cannot see her disposition against
each ex-dividend date, so the adjustment is hers.
</div>

<div class="scenario">
<h3>The reinvestment plan discount</h3>

Toma participates in a plan that lets him buy shares at $20 when the market price on the dividend
payment date is $22. He buys 100 shares.

He has $200 of income. The plan is within IRC § 305(b)(1) — a distribution payable at the election of a
shareholder in stock or in property — so § 301 applies rather than the § 305(a) exclusion, and the
discount is the measure of what he received. Publication 550 states the same result and adds the part
clients miss: **his basis is the full fair market value**, $2,200, not the $2,000 he paid.

Missing the basis point is the expensive half. A client who records basis at cost pays tax on the
discount now and pays tax on the same $200 again as gain when the shares are sold.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **Not every distribution is a dividend.** IRC § 316 limits the term to distributions out of earnings
  and profits, and IRC § 301(c) routes the rest to basis and then to gain.
- **The presumption runs the other way, though.** Every distribution is presumed made out of earnings
  and profits to the extent of them, from the most recently accumulated (IRC § 316(a)).
- **The reported qualified dividend figure is a guess about the payee.** Only the client's holding
  period settles it.
- **The holding period is "more than 60 days", not 60**, and the day of acquisition is not counted
  (IRC § 246(c)(3)(A)).
- **The 121-day period starts 60 days before the ex-dividend date**, so roughly half of it precedes
  the dividend.
- **Preference stock uses different figures** where the dividends are attributable to a period over
  366 days (IRC § 246(c)(2)).
- **A capital gain dividend is long-term however briefly the fund shares were held** (IRC
  § 852(b)(3)(B)), and is not a dividend for qualified dividend purposes (IRC § 854(a)).
- **The fund's written designation controls** what is a capital gain dividend (IRC § 852(b)(3)(C)(i)).
- **REIT dividends are generally not qualified dividends**, but they carry a share of the § 199A
  deduction (IRC § 199A(b)(1)(B)).
- **Reinvested dividends are taxed as received**, and each reinvestment is a new lot with its own basis
  and holding period.
- **A reinvestment plan discount is income and basis is full fair market value**, so recording basis at
  cost taxes the same amount twice.
- **The IRC § 1411 thresholds are not indexed**, so more clients cross them every year without any
  change in the law.

</div>

## How this has changed

The architecture here is old, and almost none of it moves annually. What repays attention is which
figures are frozen and which are not, because the pattern is the reverse of what the rest of the return
teaches. The § 246(c) day counts are statutory. The § 6042 reporting threshold is statutory. Most
importantly the § 1411 thresholds are statutory and **not** indexed, so the net investment income tax
reaches steadily further each year purely through nominal income growth — a change in effect with no
change in text.

The one moving part worth watching is the qualified dividend rate structure, which is not in this
section at all: qualified dividend income is folded into net capital gain by IRC § 1(h)(11)(A) and
taxed under the capital gain rate brackets, and those brackets are adjusted annually. So a client's
qualified dividends can change in tax without changing in character or amount.

Where currency does bite is in the interaction with § 199A. Qualified REIT dividends earn their share
of the deduction through § 199A(b)(1)(B), and the deduction's own thresholds and limitations are
adjusted each year — so the value of holding a REIT rather than an operating company through a fund is
an annual question rather than a settled one.

## Exam focus

Know the § 301(c) ordering cold: dividend to the extent of earnings and profits, then against basis,
then gain. Expect a question that supplies both earnings and profits and basis and asks for the
three-way split.

Know the qualified dividend holding period exactly, including that the window opens 60 days **before**
the ex-dividend date and that the requirement is more than 60 days within it. Expect the arithmetic to
be the whole question.

Know that a capital gain dividend from a fund is long-term regardless of the shareholder's holding
period, and that § 854(a) keeps it out of qualified dividend income.

Finally, know that § 305(a) excludes stock dividends but § 305(b)(1) pulls in anything electively
payable in stock or property — the provision behind reinvestment plans.

## Check yourself

**1.** A corporation with $20,000 of accumulated earnings and profits and no current earnings and
profits distributes $50,000 to a sole shareholder whose basis is $18,000. How is it characterised?

*Answer: $20,000 is a dividend included in gross income (IRC § 316(a)(1), § 301(c)(1)); $18,000 is
applied against and reduces basis to zero (IRC § 301(c)(2)); and the remaining $12,000 is treated as
gain from the sale or exchange of property (IRC § 301(c)(3)(A)).*

**2.** A shareholder buys stock on 1 March, the ex-dividend date is 20 March, and she sells on 10 May.
Are the dividends qualified?

*Answer: yes. The 121-day period begins 60 days before 20 March, so on 19 January. Counting from
2 March — the day of acquisition is excluded under IRC § 246(c)(3)(A) — to the 10 May disposition is
70 days, which is more than the 60 days required by IRC § 1(h)(11)(B)(iii)(I) as it applies § 246(c).*

**3.** A client bought fund shares in November and received a capital gain dividend in December. Is the
gain short-term?

*Answer: no. IRC § 852(b)(3)(B) provides that a capital gain dividend is treated by shareholders as
gain from the sale or exchange of a capital asset **held for more than one year**, whatever the
shareholder's actual holding period in the fund shares. IRC § 854(a) separately keeps it out of
qualified dividend income.*

**4.** Why can a taxpayer's own qualified dividend figure differ from the one the broker reports?

*Answer: because the test in IRC § 1(h)(11)(B)(iii) is applied to the shareholder's holding period
against each ex-dividend date, and the broker cannot always see whether a disposition broke it. The
reported figure is a starting point; where the client sold within the window the qualified amount must
be reduced on the return.*
