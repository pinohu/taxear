---
title: "Tax-exempt entities and associations"
code: "2.1.1.f"
part: 2
domain: "Business Entities and Considerations"
section: "Business entities"
description: "Exemption is a status the organisation applies for, keeps by filing, and loses after three missed years. The tax on unrelated business income never went away."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 501", title: "Exemption from tax on corporations, certain trusts, etc.", url: "https://www.law.cornell.edu/uscode/text/26/501" }
  - { type: IRC, ref: "§ 508", title: "Special rules with respect to section 501(c)(3) organizations", url: "https://www.law.cornell.edu/uscode/text/26/508" }
  - { type: IRC, ref: "§ 511", title: "Imposition of tax on unrelated business income", url: "https://www.law.cornell.edu/uscode/text/26/511" }
  - { type: IRC, ref: "§ 512", title: "Unrelated business taxable income", url: "https://www.law.cornell.edu/uscode/text/26/512" }
  - { type: IRC, ref: "§ 513", title: "Unrelated trade or business", url: "https://www.law.cornell.edu/uscode/text/26/513" }
  - { type: IRC, ref: "§ 6033", title: "Returns by exempt organizations", url: "https://www.law.cornell.edu/uscode/text/26/6033" }
  - { type: Pub, ref: "Form 990 series", title: "Which forms do exempt organizations file", url: "https://www.irs.gov/charities-non-profits/form-990-series-which-forms-do-exempt-organizations-file-filing-phase-in" }
  - { type: Pub, ref: "Form 990-N", title: "Annual electronic filing requirement for small exempt organizations", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" }
forms: ["990", "990-EZ", "990-N", "990-PF"]
related: ["2.1.1.c", "2.1.1.g", "2.1.1.k", "2.1.1.h", "2.3.2.a", "2.3.2.b", "2.3.2.c", "2.3.2.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 501(a) grant of exemption and the § 501(b) carve-out for unrelated business income, the § 501(c)(3) organisational and operational conditions with the inurement, lobbying and campaign prohibitions, the neighbouring § 501(c)(4) and (c)(7) categories, the § 508(a) notice requirement and § 508(b) private foundation presumption, the § 6033 annual return with its church and small-receipts exceptions, the § 6033(i) electronic notice and § 6033(j) automatic revocation after three consecutive missed years, and the §§ 511 to 513 unrelated business income tax including the § 512(a)(6) separate computation and the § 512(b)(12) specific deduction." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a timeline diagram of automatic revocation, glossary marks, and typed scenarios." }
diagram:
  archetype: "timeline"
  caption: "Automatic revocation: what three consecutive missed years cost a small exempt organization"
  events:
    - { when: "Year 1 missed", what: "No annual return or e-Postcard filed — no penalty and no notice yet" }
    - { when: "Year 2 missed", what: "The Secretary notifies the organization of the failure to file" }
    - { when: "Year 3 missed — due date of the third return or notice", what: "Exempt status is revoked automatically, effective that date, and the organization is added to the published list" }
---

<div class="plain-terms">
A tax-exempt group, like a charity, pays no income tax on money it raises for its mission. But it
must first ask the IRS for that status. It must also file a report each year to keep it. Miss that
report three years running and the status is taken away. This happens even if the group never owed
any tax at all. This matters to nonprofits, their board members, and anyone who gives to one. It does
not mean the group pays no tax ever. Money from a side business that has nothing to do with its
mission can still be taxed. That can happen even while the rest of the group stays tax-exempt.
</div>

Exempt organisations are the one part of the business entity outline where tax status is granted rather
than chosen. A corporation is a corporation because of how it was formed; an exempt organisation is exempt
because it satisfies a set of conditions and told the Service so. The half people forget is that exemption
is conditional on continuing to file — a return nobody owes tax on, missed three times, ends the exemption
by operation of statute.

## The rule

**The grant, and what it does not cover.** {fig:exempt.501a}

**The charitable category.** {fig:exempt.501c3}

Read that as four conditions rather than one. The organisation must be organised *and* operated
exclusively for a listed purpose; no part of the net earnings may inure to a private shareholder or
individual; no substantial part of the activities may be lobbying; and campaign intervention is
prohibited outright. Only the lobbying condition is a matter of degree. Inurement and campaign
intervention have no threshold at all.

**Two neighbouring categories.** {fig:exempt.501c4}

{fig:exempt.501c7}

**The notice a new organisation must give.** {fig:exempt.508_notice}

**The private foundation presumption.** {fig:exempt.508_presumption}

**The annual return.** {fig:exempt.6033_filing}

**Which return.** {fig:exempt.990_series}

**What "normally" means for the smallest organisations.** {fig:exempt.990n_normally}

**When it is due.** {fig:exempt.990n_due_date}

**The electronic notice.** {fig:exempt.epostcard}

**Automatic revocation.** {fig:exempt.auto_revocation}

**The tax that survives exemption.** {fig:ubit.tax}

**What is taxed.** {fig:ubit.ubti}

**What counts as unrelated.** {fig:ubit.unrelated_trade}

**One computation per business.** {fig:ubit.silo}

**The specific deduction.** {fig:ubit.specific_deduction}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Which Form 990 | {fig:exempt.990_series} | IRS, Form 990 series |
| Gross receipts "normally" | {fig:exempt.990n_normally} | IRS, Form 990-N |
| Due date | {fig:exempt.990n_due_date} | IRS, Form 990-N |
| Small-receipts filing exception | {fig:exempt.508_presumption} | IRC § 508(c)(1) |
| Automatic revocation | {fig:exempt.auto_revocation} | IRC § 6033(j)(1) |
| Specific deduction | {fig:ubit.specific_deduction} | IRC § 512(b)(12) |
| Separate computation | {fig:ubit.silo} | IRC § 512(a)(6) |

## How it works in practice

Exemption is not self-executing for a charity. The notice is a condition of being treated as described in
IRC § 501(c)(3) at all (IRC § 508(a)), and it operates prospectively: an organisation that gives notice
late is not described in § 501(c)(3) for the period before it. That is why the recognition letter carries
an effective date, and why the date matters to donors, whose deduction depends on the status having
existed when the gift was made. Churches are outside the requirement entirely — exempt without ever
applying, and filing nothing annually.

The presumption runs the other way from what people expect (IRC § 508(b)): a § 501(c)(3) organisation is
presumed to be a private foundation unless it tells the Service otherwise. Public charity status is
established, not assumed. The significance is on the deduction side and in the private foundation excise
tax regime, neither of which is where a new organisation's attention naturally goes.

The filing hierarchy is a set of two thresholds rather than three forms. Gross receipts alone put the
smallest organisations into Form 990-N. Above that a *pair* of tests decides between Form 990-EZ and the
full Form 990, and the pair is asymmetric: Form 990-EZ requires receipts under the receipts threshold
**and** assets under the asset threshold, while either one met or exceeded forces the full return. An
organisation with modest receipts and a large endowment files Form 990. Private foundations file
Form 990-PF whatever their size.

Automatic revocation under IRC § 6033(j) is the provision that produces the most client damage, because
the organisations it catches are precisely the ones that believed they had nothing to file. Form 990-N
carries no late penalty, which creates the impression that it does not matter. Three consecutive years of
nothing — three e-Postcards, or any mixture of missed 990, 990-EZ and 990-N — and exemption is revoked as
of the due date of the third one. The statute directs the Secretary to publish the list, so the revocation
is public. Reinstatement requires a fresh application; the status is not restored by catching up.

The unrelated business income tax exists because exemption in IRC § 501(a) is expressly qualified by
§ 501(b). The test in IRC § 513(a) has three elements that must all be present — a trade or business,
regularly carried on, not substantially related to the exempt purpose — and the word doing the most work
is *substantially related*. The statute forecloses the intuitive argument: the need for income and the use
made of the profits are expressly excluded from the relatedness enquiry. A museum that runs a car park to
fund acquisitions cannot point to the acquisitions.

The three statutory exceptions are narrow. Substantially all the work performed without compensation takes
volunteer-run activities out; the convenience exception covers a hospital cafeteria or a university
bookshop serving students, but not the same shop selling to the public; and the donated merchandise
exception keeps thrift shops outside the tax, provided substantially all the goods arrived as gifts.

The separate computation in IRC § 512(a)(6) removed a planning technique that was standard practice
before it: losses from one unrelated business no longer shelter income from another. Each activity is
computed on its own, floored at zero, and only then are the results added. The single specific deduction
is subtracted once at the end, not once per activity.

## Scenarios

<div class="scenario" data-type="procedural">
<h3>The literacy charity that filed nothing</h3>
<p>A small volunteer literacy charity received its determination letter in 2019. Its {gloss:gross-receipts} have
never exceeded about $18,000. The treasurer who filed the first two e-Postcards moved away in 2021, and
nobody filed for the tax years 2022, 2023 or 2024. In 2026 a grant application is rejected because the
funder's search shows the organisation is not exempt.</p>
<p>The exemption was revoked automatically under IRC § 6033(j)(1)(B) on the due date for the 2024 notice —
15 May 2025 — and the organisation is on the published list. Nothing about the size of its receipts
protects it: the small-receipts exception in IRC § 6033(a)(3)(A)(ii) relieves it of the annual *return*
but IRC § 6033(i) still requires the annual electronic notice, and § 6033(j) counts a missed notice
exactly as it counts a missed return. Filing the three outstanding e-Postcards now does not restore
anything. The organisation must apply again, and gifts made in the interval were not gifts to a
§ 501(c)(3) organisation.</p>
</div>

<div class="scenario" data-type="baseline">
<h3>The museum with three side businesses</h3>
<p>A regional art museum has, alongside its exempt activities, three revenue streams the Service treats as
unrelated: a public car park, advertising sold in its quarterly magazine, and a licensing arrangement.
For the year the car park produces $52,000 of net income, the advertising produces a $31,000 loss, and the
licensing produces $9,000 of net income.</p>
<p>Under IRC § 512(a)(6) each is computed separately and none may be less than zero, so the advertising
loss does not reduce anything. The museum's unrelated business taxable income is $52,000 plus $9,000,
which is $61,000, less a single specific deduction under IRC § 512(b)(12). The advertising loss is carried
forward against future advertising income only. Before the separate computation was enacted the same facts
would have produced $30,000 of unrelated business taxable income, and pre-2018 material describing that
result is describing repealed law.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The hospital shop and the same shop's second counter</h3>
<p>A tax-exempt hospital operates a gift shop inside the building. It sells flowers, toiletries and
magazines to patients and visitors. In 2026 it opens a second counter at the street entrance selling the
same goods, deliberately positioned and advertised to catch passing pedestrian trade that has no
connection to the hospital.</p>
<p>The inside shop falls within the convenience exception of IRC § 513(a)(2): it is carried on primarily
for the convenience of patients and visitors. The street counter is a harder case and probably falls
outside it, because the exception turns on whom the activity is carried on for, and this one was
established to serve the general public. The hospital's answer that both counters fund patient care is
foreclosed by the opening words of IRC § 513(a), which exclude the use made of the profits from the
relatedness question. If the goods sold at the street counter had been donated, the separate exception in
IRC § 513(a)(3) would apply and the analysis would stop there.</p>
</div>

<div class="scenario" data-type="fails">
<h3>The social club that wanted charitable status</h3>
<p>A cycling club incorporated as a nonprofit in 2025 wants a determination that it is described in
IRC § 501(c)(3) so that member subscriptions become deductible {gloss:charitable-contribution}s. Its activities are group rides, a monthly
supper and an annual race for members. It has a bank balance of about $9,000 and receipts of roughly
$21,000 a year.</p>
<p>It is not a § 501(c)(3) organisation: none of its activities serves a purpose in the § 501(c)(3) list,
group rides for members being neither charitable nor educational, and the exclusivity requirement is not
softened by good intentions. What it is, on these facts, is a club organised for pleasure and recreation
within IRC § 501(c)(7) — exempt, but conferring no deduction on the members. The distinction that matters
to the client is not exemption but deductibility, and it should be made plainly before the club spends
money on an application.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Exempt does not mean untaxed.</strong> IRC § 501(b) subjects an exempt organisation to the tax
on unrelated business income and certain other activities.</li>
<li><strong>Form 990-N has no penalty but has teeth.</strong> Three consecutive missed notices revoke the
exemption under IRC § 6033(j) exactly as three missed returns would.</li>
<li><strong>Catching up does not reinstate.</strong> Revocation requires a fresh application; late filings
do not undo it.</li>
<li><strong>A § 501(c)(3) organisation is presumed to be a private foundation.</strong> Public charity
status must be established (IRC § 508(b)).</li>
<li><strong>The Form 990-EZ test is a conjunction, the Form 990 test a disjunction.</strong> Either
threshold met forces the full return.</li>
<li><strong>The use of the profits is irrelevant to relatedness.</strong> IRC § 513(a) says so in its
opening words.</li>
<li><strong>Losses no longer cross between unrelated businesses.</strong> IRC § 512(a)(6) floors each at
zero, and the specific deduction is allowed once, not once per activity.</li>
<li><strong>Churches are outside both requirements.</strong> No application under IRC § 508(c)(1)(A) and
no annual return under IRC § 6033(a)(3)(A)(i).</li>
</ul>
</div>

## How this has changed

The separate computation for each unrelated trade or business is the significant recent change and it is
the one most often mis-stated. Before it, an exempt organisation aggregated all its unrelated activities
into a single computation, so a loss-making activity reduced the tax on a profitable one. IRC § 512(a)(6)
ended that: each business stands alone, cannot go below zero, and carries its own losses forward. Any
worked example that nets one unrelated activity against another is pre-2018.

Automatic revocation is newer than the profession's habits suggest. Before it, no mechanism existed by
which an inactive exempt organisation lost its status, and the Service's records accumulated organisations
not heard from in decades. The annual electronic notice and the revocation were introduced together as two
halves of one design (IRC § 6033(i), (j)): the notice exists so that the smallest organisations have
something to miss.

The § 501(c)(3) political campaign prohibition has attracted repeated proposals to soften or repeal it,
none enacted. The text as read today still prohibits participation or intervention in any political
campaign for or against any candidate, without qualification and without a materiality threshold. Advice
given on the footing that a small amount of campaign activity is tolerated has no support in the section.

## Exam focus

Expect the filing and revocation rules more often than the substantive exemption conditions, because they
are where the mechanical answers live. The recurring shapes are: an organisation with stated gross receipts
and assets, where the answer is which Form 990 is due; an organisation that has missed filings, where the
answer is the date of revocation and that reinstatement requires reapplication; an activity described in
some detail, where the answer is whether it is an unrelated trade or business; and a computation with more
than one unrelated activity, where the point is that the loss does not cross.

Where a question describes an activity, run the three elements of IRC § 513(a) in order and then check the
three exceptions before concluding. Volunteer labour, convenience and donated goods dispose of a large
share of fact patterns on their own. And read carefully whether a question is about exemption or about
deductibility — an organisation can be squarely exempt while contributions to it are not deductible at all.

## Check yourself

**1.** An exempt organisation has gross receipts of $140,000 and total assets of $760,000. Which annual
return does it file?

*Answer: Form 990. The Form 990-EZ threshold requires gross receipts under $200,000 **and** total assets
under $500,000. Receipts are under the first threshold but assets are at or above the second, and either
one on its own forces the full return.*

**2.** A § 501(c)(3) organisation with gross receipts of about $11,000 a year filed Form 990-N for 2021
and 2022, filed nothing for 2023, 2024 or 2025, and now wishes to regularise. What is its status?

*Answer: revoked. Under IRC § 6033(j)(1)(B) an organisation that fails to file the required return or
notice for three consecutive years loses its exempt status on the due date set for the third one — here
the 2025 notice. Its small size does not help: IRC § 6033(i) required the electronic notice even though
IRC § 6033(a)(3)(A)(ii) relieved it of the return. It must apply for recognition again.*

**3.** A tax-exempt symphony orchestra operates a car park used by concert-goers and by office workers
during the day, and uses all the profit to fund free schools concerts. Is the car park an unrelated trade
or business?

*Answer: yes, as to the daytime use. IRC § 513(a) excludes from the relatedness enquiry both the need for
income and the use made of the profits, so funding the schools concerts is not an answer. Parking for
office workers is not substantially related to performing music, and none of the three statutory
exceptions applies unless the attendants are unpaid volunteers.*

**4.** An exempt organisation has two unrelated businesses. One produces $40,000 of net income, the other
a $46,000 loss. What is its unrelated business taxable income?

*Answer: $40,000 less the specific deduction, so $39,000. Under IRC § 512(a)(6) each business is computed
separately and neither may be less than zero, so the loss does not reduce the profitable activity; it
carries forward against that same activity. IRC § 512(b)(12) allows one specific deduction, not one per
business.*

**5.** A charity organised in 2026 applies for recognition of exempt status but says nothing about whether
it is a private foundation. How is it classified?

*Answer: as a private foundation. IRC § 508(b) presumes any § 501(c)(3) organisation to be a private
foundation unless it notifies the Secretary that it is not. Public charity status is established, not
assumed, and the presumption applies whatever the organisation's actual sources of support.*
