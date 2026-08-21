---
title: "Proper business type, and the use of classification codes and year to year comparison"
code: "2.2.4.a"
part: 2
domain: "Business Tax Preparation"
section: "Analysis of financial records"
description: "Classification decides which return an entity files, the six-digit activity code decides which industry it is measured against, and the examiner compares three years."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 7701", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/7701" }
  - { type: IRC, ref: "§ 6012", title: "Persons required to make returns of income", url: "https://www.law.cornell.edu/uscode/text/26/6012" }
  - { type: IRC, ref: "§ 6031", title: "Return of partnership income", url: "https://www.law.cornell.edu/uscode/text/26/6031" }
  - { type: IRC, ref: "§ 6037", title: "Return of S corporation", url: "https://www.law.cornell.edu/uscode/text/26/6037" }
  - { type: IRC, ref: "§ 761", title: "Terms defined", url: "https://www.law.cornell.edu/uscode/text/26/761" }
  - { type: Reg, ref: "§ 301.7701-1", title: "Classification of organizations for federal tax purposes", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-1" }
  - { type: Reg, ref: "§ 301.7701-2", title: "Business entities; definitions", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-2" }
  - { type: Reg, ref: "§ 301.7701-3", title: "Classification of certain business entities", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-3" }
  - { type: IRM, ref: "4.10.4.2.3.8", title: "Business ratio analyses (individual business returns)", url: "https://www.irs.gov/irm/part4/irm_04-010-004" }
  - { type: IRM, ref: "4.10.4.2.4.8", title: "Business ratio analyses (corporations and other business returns)", url: "https://www.irs.gov/irm/part4/irm_04-010-004" }
  - { type: Form, ref: "Form 8832", title: "Entity Classification Election", url: "https://www.irs.gov/forms-pubs/about-form-8832" }
  - { type: Form, ref: "Form 1120-S instructions", title: "Principal Business Activity Codes", url: "https://www.irs.gov/instructions/i1120s" }
forms: []
related: ["2.2.4.b", "2.2.4.c", "2.2.4.g", "2.1.1.a", "2.2.1.a"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the Reg. § 301.7701-2(b) per se corporation list and the Reg. § 301.7701-3(b) default classifications, the Form 8832 election with its 75-day and 12-month effective-date window and the 60-month limitation, the disregarded entity rule and its employment tax exception, the six-digit NAICS-based principal business activity code chosen by largest percentage of total receipts, and the IRM 4.10.4 horizontal and vertical ratio analyses with their 5 percent and 10 percent thresholds." }
---

Three questions hide inside this topic, asked in a fixed order. What kind of entity is this for
federal tax purposes? Which return does that answer require? And once the return is filed, what is
it compared against — its own prior years, or the industry the activity code assigns it to? Get the
first wrong and you file the wrong form; get the third wrong and you are surprised by an examination
that started with arithmetic anyone could have done.

## The rule

**Classification comes before the return.** Reg. § 301.7701-1(a)(1) treats the existence of a
separate entity as a question of federal tax law, not state law, and Reg. § 301.7701-2(a) sorts
every business entity into a corporation, a partnership or a disregarded entity. State law supplies
the facts; the federal regulations supply the answer.

**Some entities have no choice.** {fig:bizclass.per_se} (Reg. § 301.7701-2(b)). Everything else is
an *eligible entity* and may elect (Reg. § 301.7701-3(a)).

**Silence has a result.** {fig:bizclass.default_domestic} (Reg. § 301.7701-3(b)(1)). For a foreign
eligible entity the defaults turn on limited liability instead: {fig:bizclass.default_foreign}
(Reg. § 301.7701-3(b)(2)(i)).

**Electing otherwise.** {fig:bizclass.election} (Reg. § 301.7701-3(c)(1)(i) and (ii)). The window on
the effective date is narrow in both directions: {fig:bizclass.election_effective}
(Reg. § 301.7701-3(c)(1)(iii)). And an election is not freely reversible:
{fig:bizclass.sixty_month} (Reg. § 301.7701-3(c)(1)(iv)).

**Disregarded is not absent.** {fig:bizclass.disregarded} (Reg. § 301.7701-2(c)(2)(i) and (iii)).
The exception that catches preparers is employment tax: {fig:bizclass.disregarded_employment}
(Reg. § 301.7701-2(c)(2)(iv)).

**The classification selects the return.** A corporation files under IRC § 6012(a)(2); a
partnership — any business entity that is not a corporation and has at least two members
(Reg. § 301.7701-2(c)(1)) — files under IRC § 6031(a) and furnishes each partner a statement under
IRC § 6031(b); an S corporation files under IRC § 6037(a). A disregarded entity's business is
reported on its owner's return.

**The activity code.** {fig:bizclass.code} (Instructions for Form 1120-S, Principal Business
Activity Codes). The receipts base is defined for this purpose and is broader than the top line:
{fig:bizclass.total_receipts}. One rule catches out contract producers:
{fig:bizclass.manufacturer}.

**Year to year comparison is not optional inside an examination.** {fig:bizclass.horizontal}
(IRM 4.10.4.2.3.8; IRM 4.10.4.2.4.8). The trigger is quantified:
{fig:bizclass.horizontal_threshold}. The second comparison runs sideways rather than backwards:
{fig:bizclass.vertical}, with its own threshold — {fig:bizclass.vertical_threshold}.

## Current figures

| Item | Figure | Authority |
| --- | --- | --- |
| Default, domestic eligible entity | {fig:bizclass.default_domestic} | Reg. § 301.7701-3(b)(1) |
| Election effective-date window | {fig:bizclass.election_effective} | Reg. § 301.7701-3(c)(1)(iii) |
| Limitation on re-electing | {fig:bizclass.sixty_month} | Reg. § 301.7701-3(c)(1)(iv) |
| Activity code | {fig:bizclass.code} | Form 1120-S instructions |
| Receipts base for the code | {fig:bizclass.total_receipts} | Form 1120-S instructions |
| Horizontal analysis trigger | {fig:bizclass.horizontal_threshold} | IRM 4.10.4.2.3.8 |
| Vertical analysis trigger | {fig:bizclass.vertical_threshold} | IRM 4.10.4.2.3.8 |

## How it works in practice

**Start from the regulation, not the operating agreement.** A document calling itself the operating
agreement of a limited liability company tells you the entity is an LLC under state law. It does not
tell you what the LLC is federally. Count the members, check the per se list, and ask whether a
Form 8832 or Form 2553 was ever filed. Only then do you know which return is due.

**The commonest live error is the single-member LLC.** Its default is to be disregarded, so its
trade or business goes on the owner's Schedule C, E or F — but it keeps its own EIN for payroll,
files its own Forms 941 and W-2 in its own name, and remains liable for its own back taxes from any
period when it was not disregarded. Preparers who reason "disregarded means it does not exist" file
the payroll returns under the owner's number and create a matching problem that takes years to
unwind.

**The activity code is substantive, not a formality.** It is chosen by revenue, not self-description:
the activity producing the largest share of the defined total receipts wins, even where the owner
would describe the business differently. A firm that thinks of itself as a design studio but earns
most of its receipts from printing is a printer here. Because the code is the key to the industry
data the return is compared against, a careless code either exposes an ordinary return to a
mismatched benchmark or hides a genuine outlier.

**Horizontal analysis is arithmetic, done before anyone calls.** The examiner puts the year under
audit beside the prior and subsequent year, across every schedule reporting financial activity, and
looks for movement — particularly in expenses that ought to vary with volume. Receipts up a tenth
with cost of goods sold flat is a question; so is officer compensation halving in a year profit
doubled. The most useful defensive habit is being able to explain each swing before it is asked
about.

**Vertical analysis compares the taxpayer with its industry**, expenses as a percentage of gross
receipts. It is weaker evidence and the IRM says so. Note the lag too: published industry data is
typically several years behind the year under audit, so a business that changed materially in the
interval looks anomalous for reasons unrelated to its return. Both comparisons are screening tools
that select which items get examined, so the answer to a variance is a documented explanation, not
an adjustment.

## Scenarios

<div class="scenario">
<h3>The election nobody could make</h3>

Two founders form Braddock Analytics LLC in March and in November decide they would rather be taxed
as a corporation. Their preparer files Form 8832 on 14 November specifying an effective date of
1 January of that year.

The specified date is more than 75 days before the filing date, so under
Reg. § 301.7701-3(c)(1)(iii) the election does not fail — it takes effect 75 days before filing,
31 August. Braddock files a partnership return for the period to 30 August and a corporate return
for the balance of the year, which is not what anyone intended.

Had the preparer specified a date in the following January the election would have been valid as
specified, a date up to 12 months after filing being allowed. The window is asymmetric: 75 days
back, twelve months forward.
</div>

<div class="scenario">
<h3>Disregarded, except where it isn't</h3>

Meridian Coating LLC has one member, an individual, has never filed Form 8832, and employs nine
people. Its preparer reports the business on the member's Schedule C and — reasoning that the LLC is
disregarded — files the quarterly employment tax returns under the member's social security number.

The Schedule C treatment is right; the payroll treatment is wrong.
Reg. § 301.7701-2(c)(2)(iv)(A) and (B) switch the disregarded-entity rule off for the Subtitle C
employment taxes and treat the LLC as a corporation for them, so Meridian files in its own name
under its own EIN.

The damage is not the classification but the matching: Forms W-2 issued under one identifying number
will not reconcile to Forms 941 filed under another, and the correspondence that follows is slower
to resolve than the error was to make.
</div>

<div class="scenario">
<h3>The code that invited the letter</h3>

Calloway Trading buys finished goods and resells them, and separately runs a small consulting
practice. Receipts are $2,900,000 from resale and $310,000 from consulting. Its preparer, thinking
of the owner as a consultant, enters a professional services code.

The instruction is to enter the code for the activity generating the largest percentage of total
receipts, which is unambiguously the resale business. The consequence shows up in a vertical
analysis: a professional services firm reporting cost of goods sold near ninety percent of receipts
is a striking outlier, where a wholesaler reporting the same figure is ordinary.

The wrong code did not create an issue — it manufactured the appearance of one, and the preparer
will spend the first hour of any examination explaining a discrepancy that never existed.
</div>

<div class="scenario">
<h3>What the three-year comparison actually finds</h3>

An examiner lines Tilden Fabrication's year two return up against years one and three. Gross
receipts run $4,100,000, $4,600,000 and $4,700,000; cost of goods sold $2,500,000, $2,520,000 and
$2,880,000; officer compensation $180,000, $95,000 and $190,000.

Receipts move about eleven percent between years one and two while cost of goods sold moves under
one percent — a variation far beyond the level the IRM directs be discussed, in exactly the kind of
expense that should vary with volume. Officer compensation halving in the middle year and returning
is a second flag.

Neither observation is an adjustment. Each is a question, and both may have clean answers — a
one-off inventory write-down, a year the owner deferred salary to fund equipment. The point is that
they were visible from three return summaries before any record was requested.
</div>

## Traps

<div class="callout trap">

**State law names the entity; federal law classifies it.** "LLC" is not a federal tax classification
and there is no LLC return. Every question about which form to file runs through
Reg. §§ 301.7701-2 and 301.7701-3 first.

</div>

<div class="callout trap">

**The 60-month limitation runs from the effective date, not the filing date**, and applies only to
an election that *changes* classification — an election by a newly formed entity effective on
formation is not a change and does not start the clock.

</div>

<div class="callout trap">

**Disregarded status does not extend to employment taxes** — nor, under
Reg. § 301.7701-2(c)(2)(v), to certain excise taxes. The entity files those in its own name with its
own EIN even though its income appears on its owner's return.

</div>

<div class="callout trap">

**The receipts base for choosing the activity code is not the gross receipts line.** It sweeps in
other income and the Schedule K and Form 8825 income and net gain items, so an entity whose rental
or investment activity dwarfs its operating receipts may not have the code its owner assumes.

</div>

<div class="callout trap">

**Horizontal analysis is mandatory in the case file; vertical analysis is not.** Reversing the two
misstates both the IRM and the weight each carries, since the IRM expressly declines to let an
industry-norm gap alone drive an indirect method.

</div>

## How this has changed

The elective regime replaced the four-factor *Kintner* analysis, under which an unincorporated
entity was tested for continuity of life, centralised management, limited liability and free
transferability, and taxed as a corporation if it had a preponderance of them. That regime rewarded
drafting: an agreement could be tuned to fail two factors and secure partnership treatment.
Reg. §§ 301.7701-1 through 301.7701-3, effective 1 January 1997, discarded the factors for a default
plus an election — which is why the effective-date floor in Reg. § 301.7701-3(c)(1)(iii) is that same
date.

The regulations have been stable in substance since, the per se list in Reg. § 301.7701-2(b)(8)
being amended periodically as foreign entity forms change. The relief route for a missed election
has moved: what once required a private letter ruling is now largely handled by revenue procedure,
and a late S election and a late classification election are often made together.

The examination side has moved further. The IRM's income probes now mandate a documented horizontal
analysis on every business return and treat e-commerce probes as standard rather than exceptional.
Nothing in the post-2024 legislation changes the classification rules or the activity code
instruction; what changed is how routinely the comparison runs before a return is selected.

## Exam focus

Know the three-step order cold: is the entity a per se corporation, what is its default if not, and
was an election filed. Most questions are answerable from step one or two alone, and candidates lose
points by reaching for the election before checking eligibility.

Memorise the domestic defaults — two or more members, partnership; one member, disregarded — and
distinguish the foreign defaults, which turn on limited liability rather than member count. The
75-day and 12-month window and the 60-month limitation are favourite short-answer material.

The disregarded-entity employment tax exception is heavily tested because it is counterintuitive.
State it as a rule: disregarded for income tax, a corporation for Subtitle C.

For the activity code, remember it is six digits, NAICS-based, chosen by largest share of a total
receipts figure broader than gross receipts, and that a contract producer retaining title uses a
manufacturing code.

Keep the two comparisons straight by direction — horizontal moves through time and is required in
the case file; vertical moves across an industry and is not. Both percentage thresholds are worth
memorising, with the limit the IRM places on acting on the vertical one.

## Check yourself

**1.** A domestic LLC has one member, has never filed Form 8832, and pays wages. Which returns does
it file, and in whose name?

*Answer: Its trade or business income is reported on the member's return — the default under
Reg. § 301.7701-3(b)(1)(ii) is that a single-owner domestic eligible entity is disregarded. But
Reg. § 301.7701-2(c)(2)(iv) switches that off for the Subtitle C employment taxes and treats the LLC
as a corporation for them, so the employment tax returns and the Forms W-2 are filed in the LLC's
own name under its own EIN. One entity, two identities, by design.*

**2.** An eligible entity elects on 1 June of year one to be classified as an association, effective
that day. In year three the members wish to revert to partnership treatment. May they?

*Answer: Not by election, absent relief. Reg. § 301.7701-3(c)(1)(iv) bars a further election during
the 60 months succeeding the effective date of the earlier one, running to 1 June of year six. The
exception is ownership turnover: if more than 50 percent of the interests at the effective date of
the new election are held by persons who owned none on the filing or effective date of the first,
the Commissioner may permit it. Note the bar applies because year one's election changed the
classification; an election by a newly formed entity effective on formation would not start it.*

**3.** A company's receipts are $1,200,000 from retail sales, $400,000 of rental income reported on
Form 8825, and $90,000 of interest. Which figures enter the choice of activity code?

*Answer: All of them. The base is gross receipts or sales plus all other income plus the income and
net gain items on Schedule K and Form 8825, so the comparison runs across the full $1,690,000 rather
than the operating line alone. Retail still produces the largest percentage and supplies the code —
but a taxpayer with $1,200,000 of rental income against $900,000 of retail would take its code from
the rental activity even though its owner would call it a shop.*

**4.** An examiner finds a business's supplies expense rose 4 percent while receipts rose 30 percent,
and that its net margin is 9 points below the published industry figure. What does the IRM direct?

*Answer: The 4 percent movement is below the level the IRM identifies as suggesting a change in
business or reporting practice — though a variance that small against a 30 percent receipts rise is
itself worth raising. The margin gap belongs to the vertical analysis, and the IRM is explicit that
a discrepancy against industry norms alone does not justify a formal indirect method unless the
taxpayer is uncooperative or nonresponsive. Resolve it with the taxpayer's assistance.*

**5.** Why can two businesses with identical financial statements draw very different examination
attention?

*Answer: Because the vertical analysis measures each against the industry its activity code assigns
it to, and the horizontal analysis measures each against its own prior and subsequent years.
Identical statements in a single year say nothing about either: one business may be steady across
three years and typical for its code, the other may have swung past the IRM's threshold or sit far
off its industry's expense percentages. The code and the adjacent years drive the arithmetic.*
