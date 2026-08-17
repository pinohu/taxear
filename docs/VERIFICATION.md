# Verification checklist

A page moves `draft → review → published` only when every box is checked. Record the result in the page's
`lastReviewed`, `reviewedBy`, and `taxYear`. `npm run verify` mechanically enforces the frontmatter parts.

## 1. Source check
- [ ] Every rule statement cites an authority in the frontmatter list, and that authority was opened and read.
- [ ] Citations are to the controlling source (Code or Regs), with IRS publications used only for procedure
      and plain-language confirmation.
- [ ] Links resolve.
- [ ] No text is copied from any commercial study material. Statute and regulation quotations are short and marked.

## 2. Currency check
- [ ] Every figure comes from `figures.json` and that entry has a `verified` date this cycle.
- [ ] Legislation since the last review has been checked (Public Law titles and effective dates noted in the
      change log where relevant).
- [ ] The tax year on the page is the tax year the figures apply to.

## 3. Editorial check
- [ ] The title is what a practitioner would search.
- [ ] Description is 150–170 chars and states what the page answers.
- [ ] Scenarios are original, realistic, and each teaches a distinct point.
- [ ] Traps section exists and is specific.
- [ ] Related topics and forms are linked both ways.

## 4. Test-case check (private)
- [ ] The private question bank items mapped to this topic code were run against the page: the page yields the
      right answer with the right reasoning, or the discrepancy is explained (page wrong → fix; bank dated →
      note in `private/discrepancies.md`).
- [ ] Nothing from the private bank appears on the page.
