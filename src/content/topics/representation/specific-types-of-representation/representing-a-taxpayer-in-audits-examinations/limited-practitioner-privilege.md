---
title: "Limited practitioner privilege (e.g., IRC Section 7525)"
code: "3.3.3.b"
part: 3
domain: "Specific Types of Representation"
section: "Representing a Taxpayer in Audits/Examinations"
description: "IRC § 7525 extends the attorney-client privilege to federally authorized practitioners, but only for tax advice, only in noncriminal matters, never for shelters."
status: published
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "I. Ohu"
authorities:
  - { type: IRC, ref: "§ 7525", title: "Confidentiality privileges relating to taxpayer communications", url: "https://www.law.cornell.edu/uscode/text/26/7525" }
  - { type: IRC, ref: "§ 6662", title: "Imposition of accuracy-related penalty — tax shelter definition at (d)(2)(C)(ii)", url: "https://www.law.cornell.edu/uscode/text/26/6662" }
  - { type: IRC, ref: "§ 7521", title: "Procedures involving taxpayer interviews", url: "https://www.law.cornell.edu/uscode/text/26/7521" }
  - { type: Statute, ref: "31 U.S.C. § 330", title: "Practice before the Department of the Treasury", url: "https://www.law.cornell.edu/uscode/text/31/330" }
forms: []
related: ["3.3.3.a", "3.3.3.e", "3.1.2.a", "3.3.3.d", "3.2.2.b"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication from IRC §§ 7525, 6662(d)(2)(C)(ii), 7521 and 31 U.S.C. § 330, each opened at source." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the three gates on the privilege, glossary marks, and typed scenarios." }
diagram:
  archetype: "decision"
  caption: "Whether a client communication is protected"
  tests:
    - { test: "Is it tax advice, within the practitioner's own authority to practice?", result: "No — no privilege at all", outcome: "fail" }
    - { test: "Is the matter noncriminal, and raised only before the IRS or in federal court?", result: "No — the privilege doesn't reach that forum", outcome: "fail" }
    - { test: "Is it written material promoting a tax shelter?", result: "Yes — the shelter exception removes it, no exceptions", outcome: "fail" }
    - { test: "Passes all three gates", result: "Privileged, exactly as far as an attorney's advice would be", outcome: "pass" }
---

<div class="plain-terms">
Normally, what you tell your lawyer stays private. This rule gives some of that same privacy to talks with a tax pro, such as an {gloss:enrolled-agent}, when they give you tax advice. But the {gloss:privilege} only works in two spots: in front of the IRS, or in federal court. And it only works for civil problems, never criminal ones. It also goes away for written material used to sell a tax shelter. It is not a brand new shield. It only covers what a lawyer's own privilege would have covered. This page shows exactly where that shield reaches, and where it runs out.
</div>

The § 7525 privilege is defined by what it is **not**. It is not a new privilege — it borrows the attorney-client privilege wholesale. It is not available to everyone, not available for everything a practitioner does, not available everywhere, and not available at all for tax shelters. Getting the topic right means getting each of those four limits right.

## The rule

**The borrowing.** "With respect to tax advice, the **same common law protections of confidentiality** which apply to a communication between a taxpayer and an attorney shall also apply to a communication between a taxpayer and any federally authorized tax practitioner **to the extent the communication would be considered a privileged communication if it were between a taxpayer and an attorney**" (IRC § 7525(a)(1)).

Read that twice. The statute creates **no independent protection**. It transplants the common-law attorney-client privilege, with all of its own conditions and exceptions, into the practitioner relationship — and only so far as that privilege would have reached had the practitioner been an attorney. Anything the attorney-client privilege would not have covered is not covered here either.

**Who holds it.** A **federally authorized tax practitioner** is "any individual who is authorized under Federal law to practice before the Internal Revenue Service if such practice is **subject to Federal regulation under section 330 of title 31**, United States Code" (IRC § 7525(a)(3)(A)). That statute is the one authorising the Secretary of the Treasury to "regulate the practice of representatives of persons before the Department of the Treasury" — the source of Circular 230.

**What it covers.** Only **tax advice**, meaning "advice given by an individual with respect to a matter which is **within the scope of the individual's authority to practice**" as just defined (IRC § 7525(a)(3)(B)). The scope of the privilege is therefore bounded by the scope of the person's own practice authority.

**Where it may be asserted.** See the figures table. The statute lists **two** forums and no others (IRC § 7525(a)(2)).

**The tax-shelter exception.** See the figures table. The exception is absolute — it does not balance, and it has no reasonable-cause escape (IRC § 7525(b)). "Tax shelter" takes the accuracy-related-penalty definition at IRC § 6662(d)(2)(C)(ii), also in the figures table.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Where the privilege may be asserted | {fig:privilege.7525_forums} | IRC § 7525(a)(2) |
| Tax-shelter exception | {fig:privilege.7525_shelter_exception} | IRC § 7525(b) |
| "Tax shelter" | {fig:privilege.tax_shelter_definition} | IRC § 6662(d)(2)(C)(ii) |

## How it works in practice

**It is the attorney-client privilege, not a tax-practitioner privilege.** Every limitation of the common-law privilege travels with it. A communication made in the presence of a third party is not privileged. A communication whose purpose is the preparation of a return, rather than the giving of legal advice, is generally not privileged — courts have consistently held that return preparation is not legal advice, and § 7525 does nothing to change that. The **crime-fraud exception** applies. Waiver rules apply. The privilege belongs to the **taxpayer**, so the taxpayer waives it, not the practitioner.

**"Noncriminal" is a status that can change under you.** The privilege may be asserted in a noncriminal matter before the IRS and in a noncriminal Federal court proceeding brought by or against the United States. A matter that becomes criminal — a referral to Criminal Investigation, a grand jury subpoena — is outside the statute entirely. This is the single most consequential practical point in the topic: a representative who has been giving advice on the assumption of privilege has no protection the moment the matter turns criminal, and the communications are already in existence.

Where criminal exposure is a real possibility, the answer is not to rely on § 7525. Note where the noncriminal limitation sits: it is in § 7525(a)(2), a restriction Congress placed on the **borrowed** privilege, not a feature of the attorney-client privilege it borrows from. Practitioners accordingly work through counsel in that situation — the taxpayer engages an attorney, and the attorney engages the practitioner — so that the engagement rests on the attorney's own privilege rather than on the narrower statutory one.

**"Before the IRS" does not mean "before any agency."** The forums are the IRS and Federal court in a noncriminal tax proceeding brought by or against the United States. **State taxing authorities are not covered**, and neither are other Federal agencies. A state department of revenue conducting its own examination is not bound by § 7525, and whether anything is protected there depends on that state's own law.

**The privilege travels with the practitioner's authority, not the practitioner's title.** Because "tax advice" is bounded by "the scope of the individual's authority to practice," an enrolled agent's privileged zone is the zone in which an enrolled agent may practise. Business advice, investment advice and accounting work that is not tax advice fall outside it — as does anything outside the practitioner's own practice authority, however competently given.

**The tax-shelter exception is broader than it looks, and got broader in 2004.** It reaches **written** communications only, but on the promotion side it now reaches communications with **any person** and that person's officers, employees, agents, representatives and capital- or profits-interest holders. The trigger is **promotion** of participation, not participation itself — advising a client on whether to enter an arrangement they brought to you is different from promoting it, and the distinction is where the fights are.

**Nothing here displaces § 7521.** The interview safeguards — the right to suspend an interview to consult a representative, the representative's right to appear alone — operate independently of whether any communication is privileged. A representative should not conflate the two.

<div class="scenario" data-type="fails">
<h3>The state examination</h3>
<p>An enrolled agent has advised a client at length, in writing, on the treatment of a series of intercompany charges. The client's state revenue department opens its own examination and issues a document request that reaches the agent's advice memoranda. The client asks the agent to assert the § 7525 privilege.</p>
<p><em>Analysis.</em> There is nothing to assert. IRC § 7525(a)(2) permits the privilege to be raised in a noncriminal tax matter <em>before the Internal Revenue Service</em> and in a noncriminal tax proceeding in <em>Federal</em> court brought by or against the United States. A state taxing authority is neither. Whether the memoranda are protected is a question of that state's law, and the agent should say so rather than assert a Federal privilege that does not reach the forum.</p>
</div>

<div class="scenario" data-type="timing">
<h3>The matter that turned criminal</h3>
<p>An enrolled agent represents a restaurant owner in an examination of unreported cash receipts. Over four months the agent and the client exchange candid emails about the gaps in the till records. The examiner then makes a fraud referral, and Criminal Investigation issues a summons for the correspondence.</p>
<p><em>Analysis.</em> The § 7525 privilege is unavailable. It may only be asserted in a <em>noncriminal</em> tax matter before the IRS or a <em>noncriminal</em> Federal court proceeding; a criminal investigation is outside the statute. The correspondence already exists and the privilege never attached in a way that survives the change in posture. The right step, taken four months earlier, would have been to have the client engage counsel and to work under the attorney's privilege.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The promotion memorandum</h3>
<p>An enrolled agent prepares a written analysis of a partnership structure whose principal attraction is a large timing benefit, and sends it to the sponsor's marketing director for use in approaching investors. Two years later the IRS examines an investor and requests the analysis.</p>
<p><em>Analysis.</em> The tax-shelter exception applies. IRC § 7525(b) removes the privilege from any <em>written</em> communication between a federally authorized tax practitioner and a person — or that person's officers, employees, agents or representatives — in connection with the <strong>promotion</strong> of that person's direct or indirect participation in a tax shelter. A plan or arrangement a significant purpose of which is the avoidance of Federal income tax is a tax shelter for this purpose. That the agent was giving honest technical analysis does not matter; the exception has no good-faith carve-out.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The return that was prepared</h3>
<p>During an examination the revenue agent asks the enrolled agent for the workpapers and the client's written answers to the preparer's organiser questions. The enrolled agent asserts § 7525.</p>
<p><em>Analysis.</em> Weak ground. Section 7525 extends the common-law attorney-client privilege only "to the extent the communication would be considered a privileged communication if it were between a taxpayer and an attorney," and communications for the purpose of <em>preparing a return</em> are generally not privileged even as between a taxpayer and an attorney, because return preparation is not legal advice. The privilege borrows the attorney-client privilege's limits along with its protection.</p>
</div>

<div class="callout trap">

**Section 7525 does not reach state taxing agencies or other Federal agencies.** Only a noncriminal tax matter before the IRS, and a noncriminal tax proceeding in Federal court brought by or against the United States.

</div>

<div class="callout trap">

**It does not reach criminal matters at all** — not a criminal investigation, and not a criminal proceeding. The privilege is limited to **noncriminal** matters in both forums.

</div>

<div class="callout trap">

**It creates no new protection.** It applies only "to the extent the communication would be considered a privileged communication if it were between a taxpayer and an attorney." Return preparation, third-party presence, crime-fraud and waiver all cut it down exactly as they cut down the attorney-client privilege.

</div>

<div class="callout trap">

**The tax-shelter exception has no exceptions.** It applies to written communications in connection with the promotion of participation in a tax shelter, with no good-faith or reasonable-cause escape.

</div>

## How this has changed

**Enacted in 1998.** Section 7525 was added by the IRS Restructuring and Reform Act of 1998, applying to communications made **on or after 22 July 1998**. Before it, a taxpayer's candid communications with a non-attorney practitioner had no Federal privilege at all. The statutory grant is narrow by design: Congress extended the attorney-client privilege rather than writing a new one, which is why every limitation of the older privilege was inherited rather than reconsidered.

**Broadened in 2004 — the tax-shelter exception.** As enacted, subsection (b) removed the privilege only from written communications between a practitioner and "a director, shareholder, officer, or employee, agent, or representative of a **corporation**" in connection with the promotion of **that corporation's** participation in a tax shelter, and it used the tax-shelter definition then at IRC § 6662(d)(2)(C)(**iii**). The American Jobs Creation Act of 2004 rewrote it generally, effective for communications made **on or after 22 October 2004**: the exception now reaches **any person**, not only corporations, and picks up capital- and profits-interest holders. Material written before 2004 that describes the exception as a corporate-shelter rule is describing the repealed version.

**The definitional cross-reference moved.** The current text points to IRC § 6662(d)(2)(C)(**ii**), not clause (iii). A citation to clause (iii) is a reliable sign of pre-2004 material.

## Exam focus

Know that § 7525 applies **only before the IRS and in Federal court**, and **not** to state taxing agencies or other Federal agencies. This is the most commonly tested point in the topic.

Know that it applies **only in noncriminal matters** — both the IRS matter and the Federal court proceeding must be noncriminal.

Know that it covers **tax advice only**, bounded by **the scope of the practitioner's own authority to practise**, and that it borrows the attorney-client privilege rather than creating a new one.

Know that it is unavailable for **written communications promoting participation in a tax shelter**, and that a tax shelter here is any entity, plan or arrangement a **significant purpose** of which is the avoidance or evasion of Federal income tax.

Know that a **federally authorized tax practitioner** is anyone authorised to practise before the IRS whose practice is subject to **31 U.S.C. § 330** — the statute behind Circular 230.

## Check yourself

**1. Before which of the following may the § 7525 privilege be asserted?**
(A) The IRS only (B) The IRS and state taxing agencies (C) All Federal agencies (D) State taxing agencies only
*Answer: A. Of the choices offered, only the IRS. The statute also reaches a noncriminal tax proceeding in Federal court brought by or against the United States, but it does not extend to state taxing agencies or to Federal agencies generally.*

**2. An enrolled agent's client becomes the subject of an IRS criminal investigation. What protection does § 7525 give the earlier written advice?**
(A) Full protection, because the advice was given while the matter was civil (B) None — the privilege may only be asserted in noncriminal matters (C) Protection unless the IRS shows fraud (D) Protection only in Federal court
*Answer: B. Both forums in IRC § 7525(a)(2) are limited to noncriminal matters.*

**3. Which best describes what § 7525 protects?**
(A) A new statutory privilege for all practitioner communications (B) Any communication between a practitioner and a client (C) Tax advice, to the extent it would be privileged if the practitioner were an attorney (D) All working papers created during an engagement
*Answer: C. The statute borrows the common-law attorney-client privilege and applies it "to the extent the communication would be considered a privileged communication if it were between a taxpayer and an attorney."*

**4. A practitioner writes a memorandum used to market a partnership whose significant purpose is Federal income tax avoidance. Is the memorandum privileged under § 7525?**
(A) Yes, if the analysis was given in good faith (B) Yes, unless the IRS proves a significant purpose of avoidance (C) No — the tax-shelter exception removes the privilege (D) Yes, because the client is a partnership rather than a corporation
*Answer: C. IRC § 7525(b) removes the privilege from written communications in connection with the promotion of participation in a tax shelter, and since 2004 it reaches any person, not only corporations.*

**5. Who is a "federally authorized tax practitioner"?**
(A) Any return preparer with a PTIN (B) Attorneys and CPAs only (C) Anyone authorised under Federal law to practise before the IRS where that practice is subject to 31 U.S.C. § 330 (D) Enrolled agents only
*Answer: C. That is the definition in IRC § 7525(a)(3)(A) — the statute behind Circular 230.*
