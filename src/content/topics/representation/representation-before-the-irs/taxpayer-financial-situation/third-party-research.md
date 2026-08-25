---
title: "Third-party research"
code: "3.2.3.c"
part: 3
domain: "Representation before the IRS"
section: "Taxpayer financial situation"
description: "What the IRS finds about a client without asking — assessment rolls, vehicle records, credit bureaus, locator services — and why the representative looks first."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "N. O."
authorities:
  - { type: IRM, ref: "5.15.1.6", title: "Internal Sources and Online Research", url: "https://www.irs.gov/irm/part5/irm_05-015-001" }
  - { type: IRM, ref: "5.15.1.7", title: "External Sources", url: "https://www.irs.gov/irm/part5/irm_05-015-001" }
  - { type: IRC, ref: "§ 7602(c)", title: "Notice of contact of third parties" }
  - { type: IRC, ref: "§ 6103", title: "Confidentiality and disclosure of returns and return information" }
  - { type: Circ230, ref: "§ 10.22", title: "Diligence as to accuracy" }
forms: ["433-A", "433-B"]
related: ["3.2.3.a", "3.2.3.b", "3.2.6.d"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft against IRM 5.15.1.6 as revised 29 June 2026." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios." }
---

<div class="plain-terms">
This page explains where the IRS looks for facts about a taxpayer before it ever asks them
anything. It affects anyone under IRS collection action, and anyone who helps them prepare a
financial statement. It does not apply where no balance is owed, or once a case is closed. The
IRS checks public records first: property records, car registrations, credit reports, and online
search tools. It looks for homes, cars, and accounts a taxpayer did not list. Doing that same
check before filing changes the outcome. A gap found by the taxpayer's own side can be fixed. A
gap found first by the IRS reads as something hidden on purpose.
</div>

## The rule

A financial statement is not a self-report the IRS accepts at face value. IRM 5.15.1.6 instructs
the revenue officer to "verify as much of the financial statement as possible through internal
sources and online research," and to go to the taxpayer for documents only where internal locator
services are unavailable or a discrepancy is indicated. The order matters: the government looks
before it asks. A representative who prepares a Form 433 without doing the same research is
letting the revenue officer discover the omissions first, and every discovery costs credibility
on the items that were disclosed correctly.

This is also a Circular 230 obligation, not merely good tactics. Due diligence is required in
preparing and filing documents relating to IRS matters (Circular 230 § 10.22(a)(1)), and a
financial statement
signed under penalties of perjury is such a document. Section 10.22(b) permits reliance on the
work product of another person if reasonable care is used in engaging, supervising, training and
evaluating them — it does not permit uncritical acceptance of a client's list of what they own.

Third-party research also runs into two limits worth stating at the outset. IRC § 7602(c) requires
advance notice to the taxpayer before the IRS contacts third parties with respect to determining
or collecting a liability, with the statutory exceptions, and IRC § 6103 restricts what the IRS
may disclose in the course of making a contact. Neither limit binds the *representative*: nothing
stops a practitioner from pulling a county assessment roll, and a practitioner who does so learns
what the revenue officer already knows.

## How it works in practice

**Public records the IRS routinely searches.** IRM 5.15.1.6 lists them, and the list doubles as a
checklist for the representative:

- **Real estate records.** Courthouse records for grantor and grantee, mechanic's liens,
  mortgagee and mortgagor, divorce records, death certificates and registered wills — to identify
  real property titled to the taxpayer but not declared, and property held by a transferee,
  nominee or alter ego. The revision effective 29 June 2026 added an express consideration of
  visiting the courthouse to verify or complete online research.
- **State motor vehicle records.** Vehicles registered to the taxpayer but not declared, ownership
  in business names, and lien holders. The IRM notes, dryly and usefully, that ownership of a
  trailer may lead to additional assets such as boats or jet skis.
- **Credit bureau reports.** Past residences and employers, competing lien holders with balances
  and payment history, property not listed, other creditors as leads to undisclosed assets, and
  the financial institutions the taxpayer has dealt with past and present — including associations
  with foreign banks and corporations.
- **Online locator services.** Current, transferred and sold real property; vehicle ownership;
  interests in partnerships, corporations and other businesses; third parties residing with the
  taxpayer; and vessels and craft registered with the Federal Aviation Administration.
- **Other internet sources.** Income sources and assets on the taxpayer's own website, undisclosed
  business activity, industry financial data, and news coverage of high-profile taxpayers.

**Assessment records answer the value question cheaply.** Municipal and county property tax
assessment rolls are public, searchable in most jurisdictions, and give both an assessed value and
the owner of record. They are not fair market value — assessment ratios vary widely by state and
some jurisdictions assess at a fraction of market — but they establish ownership, they establish
the assessing authority's view, and they are the fastest way to find property held in a business
name. The IRM specifically directs checking for ownership in business names on tax assessment
records.

**State and local tax information is part of the picture.** A state income or sales tax liability
competes for the same disposable income; a state lien filed before the federal notice may have
priority; a delinquent local property tax may be an encumbrance that reduces equity. IRM 5.15.1.11
addresses allowable payments toward state tax liabilities, and the 2026 revision reformatted that
guidance into a longer sequence of paragraphs. None of this appears on a federal transcript, and
none of it will be allowed as an expense unless the representative produces it.

**Internal sources are not third-party research, but they set the baseline.** The same IRM section
directs comparison of the financial statement against the last filed return and the information
returns: Schedule A mortgage interest, Schedule B interest and dividends, Schedule C
self-employment, Schedule D capital gains, Schedule E rental and investment income, Schedule F
farm income, Schedule K-1 partnership and S corporation income. Information return data is used to
identify assets not reported on the statement — certificates of deposit, investment accounts,
virtual currency including cryptocurrency — to identify recently dissipated assets, and to pick up
Form 1099-K payment card and third-party network transactions. Much of this is available to the
representative through transcripts, which is the argument for pulling wage and income transcripts
before a financial statement rather than after.

**Foreign indicators trigger a separate track.** Where the taxpayer filed FinCEN Form 114, the IRM
directs research through the Financial Crimes Enforcement Network Query, and the filing itself
signals a financial interest in or signature authority over a foreign account with
{fig:fbar.filing_threshold}. Where there are indications of a foreign account, foreign assets, or
residence outside the United States, FATCA data research follows, checking whether Form 8938 was
filed and retrieving the return if so. A client with foreign accounts should be told this before
the statement is signed.

<div class="scenario" data-type="interaction">
<h3>The property in the LLC's name</h3>

Anselm Kirchhoff's Form 433-A lists no real property. He owns his home through a single-member
LLC formed years earlier on a lawyer's advice, and genuinely does not think of it as his.

Before submitting, his representative searches the county assessment roll by the LLC name as well
as by Kirchhoff's own — exactly what IRM 5.15.1.6 directs the revenue officer to do — and finds
the house. A single-member LLC is a {gloss:disregarded-entity} for federal tax purposes and the equity is
Kirchhoff's; had the statement gone in as drafted, the revenue officer would have found the
property in the ordinary course and the case would have proceeded on the assumption that the
omission was deliberate. Disclosing it, valuing it, and addressing the mortgage priority produced
a slower but survivable case. The five minutes of searching were the whole difference.
</div>

<div class="scenario" data-type="procedural">
<h3>The trailer that led to the boat</h3>

Wilhelmina Sørensen declares one vehicle. A state motor vehicle search by her representative turns
up a registered utility trailer as well. The trailer is worth very little and would not matter on
its own — but the IRM tells revenue officers precisely what to do with it: ownership of a trailer
may lead to additional assets such as boats or jet skis.

The representative asks the obvious follow-up question, and there is a boat, kept at a relative's
property and registered in a prior year. It is disclosed on the statement with a documented value.
The alternative — a revenue officer finding the trailer, asking the same question, and getting a
different answer than the statement gave — would have converted an ordinary collection case into
one worked on the assumption of concealment.
</div>

<div class="scenario" data-type="fails">
<h3>The state lien nobody mentioned</h3>

Fernão Oduya's business owes federal employment tax. His representative proposes an {gloss:installment-agreement}
computed from the federal balance alone. Two months in, the state revenue department
levies the operating account for an older sales tax liability, and the agreement defaults on the
first missed payment.

A search of the state's lien records at the outset would have found the filing, and it would have
changed the proposal in two ways: the state payment is an expense that has to appear on the Form
433-B for the federal analysis to be realistic, and the state lien's recording date determines
whether it has priority over the federal notice for the business's assets. Neither fact was on any
federal transcript. The lesson is that a representative who researches only what the IRS holds is
researching half the file.
</div>

<div class="callout trap">
<strong>Assessed value is not fair market value.</strong> Assessment rolls are excellent evidence
of ownership and useful evidence of a range. They are poor evidence of value, because assessment
ratios and reassessment cycles vary enormously between jurisdictions. Where value matters — an
offer computation, an equity determination — get an appraisal or a defensible comparable, and use
the assessment to confirm ownership and to find property you did not know about.
</div>

<div class="callout trap">
<strong>The client's list is not the file.</strong> A financial statement is signed under
penalties of perjury and the practitioner's diligence obligation under Circular 230 § 10.22
attaches to it. "The client told me that was everything" is not a defence where a search of public
records the IRS routinely runs would have shown otherwise. Do the searches, and document that you
did.
</div>

<div class="callout trap">
<strong>Do not research the third party into a disclosure problem.</strong> Third-party research
that consists of *asking people about the client* is a different activity from searching public
records, and it carries the representative's own confidentiality obligations to the client along
with the practical risk of alerting a creditor, a business partner or a former spouse. Public
records, credit reports the client authorises, and the client's own documents are the safe
perimeter. Interviewing the client's associates is not the representative's job.
</div>

<div class="callout trap">
<strong>Undisclosed accounts show themselves through payments.</strong> The IRM directs the
reviewer to compare expenses paid from the provided bank statements against the expenses claimed,
and to ask for proof of payment where a claimed expense is never paid from any disclosed account —
because it suggests an account that was not disclosed. A statement that claims a mortgage payment
no supplied account ever makes is a statement that will generate that question.
</div>

## How this has changed

The research inventory has expanded steadily with the data available, and the 29 June 2026
revision of IRM 5.15.1 continued the trend. It added the consideration of a courthouse visit to
verify or complete online real property research, and of field visits to view the condition of
vehicles, vessels, aircraft and real estate when determining their value — a move back toward
first-hand observation after two decades of moving away from it. It added guidance on analysing
digital assets and renamed the relevant section accordingly, with links to the Digital Assets
Knowledge Base. It also added an instruction to research peer-to-peer payment applications and
online gambling applications when reviewing bank statements, on the reasoning that repeated
incoming payments can indicate income activity and that balances may be held inside the
applications themselves.

The CDW Knowledge Graph Environment is the newer tool worth knowing about: it provides linked-data
analytics across employer identification numbers, social security numbers and preparer tax
identification numbers, surfacing relationships — power of attorney, shared bank accounts, spousal
and dependent connections — that are not visible in any single system. The IRM notes that the
underlying Compliance Data Warehouse is not an authoritative source and that the tool must be used
alongside production systems such as IDRS, which is a useful thing to know if a linkage is ever
asserted against a client.

## Exam focus

This outline item is tested lightly and conceptually. Know that the IRS verifies a Collection
Information Statement against internal and online sources before requesting documents from the
taxpayer, and that public records — property assessment rolls, motor vehicle registrations,
courthouse filings, credit bureau reports — are the routine sources. Know that the practitioner's
diligence obligation under Circular 230 § 10.22 extends to the financial statement. If a question
touches contacting third parties directly, that is IRC § 7602(c) territory and turns on the advance
notice requirement, not on this item.

## Check yourself

**1. According to the Financial Analysis Handbook, what does a revenue officer do before requesting
supporting documents from the taxpayer?**

A. Issue a summons to the taxpayer's bank
B. Verify as much of the statement as possible through internal sources and online research
C. Contact the taxpayer's employer for a wage verification
D. Refer the case for a field examination

*Answer: B. Documents are requested from the taxpayer where internal locator services are
unavailable or a discrepancy is indicated, not as the first step.*

**2. A representative finds the client's home titled to a single-member LLC on the county
assessment roll. What is the correct treatment on a Collection Information Statement?**

A. Omit it, because the LLC and not the client owns the property
B. Disclose it; a single-member LLC is disregarded and the equity belongs to the client
C. Disclose it only if the revenue officer asks
D. Disclose the LLC but not the property

*Answer: B. The IRM directs checking assessment records for ownership in business names precisely
because this arrangement is common, and omission reads as concealment.*

**3. Which is the best use of a municipal property tax assessment record?**

A. Establishing fair market value for an offer computation
B. Establishing ownership and locating undisclosed property
C. Establishing the priority of a federal tax lien
D. Establishing the taxpayer's monthly housing expense

*Answer: B. Assessment ratios vary too widely between jurisdictions for the assessed figure to
serve as value, but ownership of record is reliable.*

**4. A client's Form 433 claims a monthly mortgage payment, but none of the supplied bank
statements shows it being paid. What should the representative expect?**

A. The expense will be allowed because it is a local standard category
B. A request for proof of payment, on the view that an undisclosed account may exist
C. The statement will be accepted as filed
D. The mortgage will be treated as forgiven debt

*Answer: B. Comparing claimed expenses against payments actually made from disclosed accounts is
an express step, and an unexplained gap points to an undisclosed account.*

**5. A client filed FinCEN Form 114 for a prior year. What follows for the financial analysis?**

A. Nothing; the report is filed with FinCEN and is invisible to collection
B. Research through the Financial Crimes Enforcement Network Query, and FATCA research where
   foreign indicators exist
C. The foreign account is automatically excluded from the equity computation
D. The case is referred for criminal investigation

*Answer: B. The filing signals a reportable foreign financial interest, and the handbook directs
both FinCEN query research and FATCA research where indicators are present.*
