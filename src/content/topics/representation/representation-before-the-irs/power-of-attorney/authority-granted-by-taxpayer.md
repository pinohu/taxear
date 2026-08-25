---
title: "Authority granted by the taxpayer, and its boundaries"
code: "3.2.1.c"
part: 3
domain: "Representation before the IRS"
section: "Power of attorney"
description: "What a power of attorney authorises by default, which acts must be added expressly, how the grant is bounded by matter and period, and how it is revoked."
status: published
taxYear: 2026
lastReviewed: "2026-08-18"
reviewedBy: "I. Ohu"
authorities:
  - { type: Reg, ref: "601.503", title: "Requirements of power of attorney", url: "https://www.law.cornell.edu/cfr/text/26/601.503" }
  - { type: Reg, ref: "601.504", title: "Requirements for filing power of attorney", url: "https://www.law.cornell.edu/cfr/text/26/601.504" }
  - { type: Reg, ref: "601.505", title: "Revocation, change in representation and substitution or delegation of representative", url: "https://www.law.cornell.edu/cfr/text/26/601.505" }
  - { type: Circ230, ref: "§ 10.31", title: "Negotiation of taxpayer checks", url: "https://www.law.cornell.edu/cfr/text/31/10.31" }
  - { type: Form, ref: "2848", title: "Power of Attorney and Declaration of Representative", url: "https://www.irs.gov/forms-pubs/about-form-2848" }
forms: ["2848", "8821"]
related: ["3.2.1.a", "3.2.1.b", "3.2.1.d", "3.2.1.i", "3.2.1.j", "3.2.1.h", "3.2.1.e", "3.2.1.f"]
changelog:
  - { date: "2026-08-18", summary: "Initial publication from 26 CFR Part 601 Subpart E." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, typed scenarios, and glossary marks." }
---

<div class="plain-terms">
When someone signs a power of attorney naming a tax helper, what that helper can do
depends on what the form says. It affects anyone who lets an accountant, lawyer, or
enrolled agent deal with the IRS for them. Some things come with the job by default,
like letting the helper talk to the IRS and get your mail from them. Other things do
not come by default and must be spelled out, like letting the helper sign a deal that
binds you or moves a deadline. The form also sets which years and which taxes the
helper can act on. Naming a new helper for the same matter can quietly cancel the old
one.
</div>

The authority a representative holds is exactly what the taxpayer granted, read against the matters described. Two questions decide almost every dispute about it: what did the taxpayer say the representative may do, and for which matters and periods did they say it.

## The rule

**The grant is bounded by the description of matters.** A power of attorney must describe the matters for which representation is authorized, stating where applicable the type of tax, the federal tax form number, the specific years or periods, and in estate matters the decedent's date of death (Reg. § 601.503(a)(5)). It must also contain a clear expression of the taxpayer's intention concerning the scope of the authority granted (Reg. § 601.503(a)(6)). Those two elements together are the authority; nothing outside them was conferred.

**Ordinary representation comes with the grant.** Within the described matters, a representative may deal with the IRS on the taxpayer's behalf — receive and inspect confidential information, correspond, present arguments, attend conferences and meetings, and receive notices. Representation by correspondence is still representation: an individual who wants to represent a taxpayer through correspondence must submit a power of attorney and declaration of representative even though no personal appearance is contemplated (Reg. § 601.504(d)).

**Acts that bind the taxpayer must be added.** Signing a consent that extends the assessment period, or a closing agreement, commits the client to something the general grant does not reach; those are stated expressly on the form. So is authority to sign a return, which additionally requires one of the three circumstances in the return-signing regulation before it may be used at all.

**Some things cannot be granted.** A taxpayer cannot confer representation authority on someone Circular 230 does not permit to hold it — eligibility and authorisation are separate requirements. And a taxpayer cannot authorise a practitioner to endorse or otherwise negotiate a government refund check, including by directing payment into an account the practitioner or their firm controls; that prohibition runs against the practitioner and is not the client's to waive (Circular 230 § 10.31(a)).

**How the grant ends or changes.** A new power of attorney granted to another representative **for the same matter revokes the prior one**, unless the new document says it does not and has attached either a copy of the unrevoked prior power of attorney or a statement signed by the taxpayer listing the name and address of each representative authorized under it (Reg. § 601.505(a)(1)). A taxpayer may also revoke without naming anyone new, by filing a signed statement of revocation with the offices where the power of attorney was filed, indicating that the earlier authority is revoked (Reg. § 601.505(a)(2)).

## How it works in practice

Drafting scope is the whole job. "All years" invites a narrow reading or rejection; naming the tax type, the form, and each period gives authority that survives contact with a revenue agent. Where an engagement may expand — a carryover year, a related entity, an employment tax period — it is cheaper to authorise it at the start than to stop mid-examination.

The revocation rule catches firms during handovers. A client who signs a fresh Form 2848 for a new representative at the same firm, for the same matter, has revoked the old one by operation of Reg. § 601.505(a)(1) unless the non-revocation clause and attachment are used. If the departing representative was still handling a related period, that authority is gone and nobody notices until the IRS declines to speak to them.

<div class="scenario" data-type="interaction">
<h3>The second representative who erased the first</h3>
<p>A client under examination for 2022 and 2023 is represented by an enrolled agent on both years. The firm brings in a specialist for a valuation issue in 2023 and has the client sign a new {gloss:power-of-attorney} naming the specialist for 2023, with nothing else stated.</p>
<p><em>Analysis.</em> For 2023 — the same matter — the new power of attorney revokes the earlier one, so the original agent loses authority for that year while keeping 2022. If the intention was for both to act, the new form needed a clause stating it does not revoke the prior authority, with a copy of that authority or the taxpayer's signed list of existing representatives attached (Reg. § 601.505(a)(1)).</p>
</div>

<div class="scenario" data-type="boundary">
<h3>Authority that stops at the entity line</h3>
<p>A practitioner holds a power of attorney for an individual client covering Form 1040 for three years. The examination turns to the client's single-member LLC and its employment tax filings, and the agent asks the practitioner to produce the payroll records.</p>
<p><em>Analysis.</em> The described matters are the individual's income tax returns. Employment tax filings, and the entity as a taxpayer in its own right, are outside them. The practitioner may furnish information at the IRS's request as anyone may, but representing the entity on those periods requires its own authorization naming the form, the entity, and the periods.</p>
</div>

<div class="scenario" data-type="procedural">
<h3>Everything by correspondence</h3>
<p>A practitioner intends to resolve a matter entirely by letter and never to meet or telephone the IRS. He reasons that no power of attorney is needed because he will not appear.</p>
<p><em>Analysis.</em> Wrong. Representation through correspondence still requires a {gloss:power-of-attorney} and declaration of representative even though no personal appearance is contemplated (Reg. § 601.504(d)). Writing to the IRS on a taxpayer's behalf about their liabilities is representation, and the authorisation requirement does not turn on whether anyone meets face to face.</p>
</div>

<div class="callout trap"><h4>Traps</h4>
<p><strong>A new power of attorney for the same matter revokes the old one silently.</strong> The non-revocation clause plus the required attachment is the only way to keep both.</p>
<p><strong>Scope is read against the description, not the intention behind it.</strong> A related year that obviously belongs to the same dispute is still outside the grant if it is not named.</p>
<p><strong>No appearance does not mean no authorisation.</strong> Correspondence-only representation needs the same power of attorney.</p>
<p><strong>The taxpayer cannot authorise the unauthorised.</strong> Eligibility under Circular 230 is a separate requirement from the taxpayer's grant, and the client's wishes cannot supply it.</p>
<p><strong>The check prohibition is not waivable.</strong> An engagement letter directing refunds into the firm's account does not make it permissible.</p>
</div>

## How this has changed

The scope, filing, and revocation rules in Subpart E have been stable in substance since the early 1990s; what has moved around them is administration. Authorizations now post to the Centralized Authorization File and can be submitted through electronic channels the regulation does not describe, which changes how quickly a representative is recognised without changing what the document must contain or how it is revoked. The eligibility half has narrowed: a grant naming an unenrolled preparer that would once have conferred limited representation rights may now confer nothing, because those rights were restricted to Annual Filing Season Program participants for returns filed after 2015.

## Exam focus

Expect scope questions — a matter, year, entity, or tax type just outside the description — and revocation questions built on Reg. § 601.505(a)(1), where a second authorization for the same matter silently displaces the first. Know which acts need express authority (consents, closing agreements, signing returns) and which come with the grant (receiving information, corresponding, attending conferences). Remember that correspondence-only representation still requires the authorization, and that the refund-check prohibition binds the practitioner regardless of what the client agrees.

## Check yourself

**1. A taxpayer signs a new Form 2848 naming a second representative for the same year, saying nothing about the first. The effect on the first authorization is:**
(A) Both remain in force (B) The new one revokes it (C) Both are void for conflict (D) The first remains until the taxpayer files a statement of revocation
*Answer: B. Reg. § 601.505(a)(1) revokes the prior authority for the same matter unless the new document says otherwise and carries the required attachment.*

**2. Which act does NOT come with an ordinary grant of representation authority?**
(A) Receiving and inspecting confidential tax information for the listed periods (B) Signing a consent extending the assessment period (C) Attending a conference with the IRS (D) Corresponding with the IRS about the matter
*Answer: B. Binding the taxpayer by consent must be authorised expressly.*

**3. A practitioner will handle a matter entirely by letter. He must:**
(A) File nothing, since no appearance is contemplated (B) File Form 8821 only (C) Submit a power of attorney and declaration of representative (D) Obtain the examiner's permission
*Answer: C. Reg. § 601.504(d) requires it even where no personal appearance is contemplated.*

**4. A client instructs her practitioner in writing to have her refund deposited into the firm's account, net of fees. The practitioner may:**
(A) Do so, because the client instructed it in writing (B) Do so if the client is told the amount first (C) Not do so — Circular 230 § 10.31(a) prohibits it regardless of the client's consent (D) Do so if the firm holds it in trust
*Answer: C. The prohibition runs against the practitioner and is not the client's to waive.*
