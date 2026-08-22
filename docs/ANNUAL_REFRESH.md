# Annual refresh

Every figure on this site has a tax year and a verified date, so the site ages visibly.
This is the routine that keeps it current. Run it once each fall when the IRS publishes
the inflation adjustments, and again after any tax act.

Nothing here is optional: a page whose figures are stale is worse than a page that does
not exist, because a reader cannot tell.

## When

| Trigger | Typical timing | Scope |
|---|---|---|
| IRS inflation-adjustment revenue procedure for the coming year | Oct–Nov | Every figure with an inflation-adjusted value; bump `taxYear` |
| Annual per-diem, standard mileage, and retirement-limit notices | Nov–Dec | The figures those notices set |
| New tax legislation | Whenever enacted | Affected topics, changelogs, and `/changes/` |
| Filing-season form and instruction releases | Dec–Feb | Forms directory entries, procedural steps |
| Quarterly spot check | Jan, Apr, Jul, Oct | The ten highest-traffic pages |

## The refresh, step by step

### 1. Open the sources first

Work from the controlling document, not from a summary or from last year's page:

- The annual inflation revenue procedure (Rev. Proc.) for the coming tax year.
- The user-fee regulations and IRS pages behind any fee figure (for example
  Reg. § 300.1 for installment agreement fees).
- The statute for anything Congress set directly, since inflation indexing does not
  touch a fixed statutory number.
- The current form and its instructions for procedural figures.

If a source cannot be opened, the figure does not get a new verified date. Leave the old
value and old date in place rather than re-stamping something unchecked.

### 2. Update `src/data/figures.json`

One entry per figure, and every entry carries its provenance:

```json
"ia.setup_fee.online_directdebit": {
  "value": "$22",
  "taxYear": 2027,
  "source": "Reg. § 300.1(b)(1); IRS Payment Plans page",
  "verified": "2026-11-14"
}
```

Rules:

- `value` is a string, formatted the way it should read on the page.
- `source` names the controlling authority, specific enough to re-find in one step.
- `verified` is the date **you** opened that source. Never copy a previous date forward.
- Bump the file's top-level `taxYear` once every figure for the new year is in.
- A figure that did not change still gets a new `verified` date — confirming no change
  is the work.
- Never delete a key that pages still reference. If a figure is retired, update every
  page that used it in the same commit.

Any figure the new law or procedure has no equivalent for gets removed only after
`npm run verify` shows nothing references it.

### 3. Note what actually changed

For each material change, add a `changelog` entry to every affected page:

```yaml
changelog:
  - { date: "2026-11-14", summary: "2027 inflation adjustments: streamlined installment agreement threshold unchanged; user fees restated from Reg. § 300.1." }
```

These entries are what `/changes/` is assembled from, so write them for a practitioner
skimming what moved this year — the specific figure or rule, not "annual update."

### 4. Re-read the pages the change touches

A figure swap is rarely the whole story. Where a threshold moved, the prose around it,
the scenarios, and the practice questions may all now be wrong. Check:

- Scenario arithmetic that depends on the old number.
- "Check yourself" answers computed from the old number.
- The `How this has changed` section — add the new law or procedure with its effective date.
- `taxYear` and `lastReviewed` on the page, and `reviewedBy`.

### 5. Run the checks

```sh
npm run build          # content schema, tokens, 372+ pages
npm run verify         # template, figure provenance, link graph
npm run progress       # refresh docs/PROGRESS.md
```

`verify` fails a gated page whose figure has no `verified` date, which is the mechanical
backstop for step 2.

### 6. Commit in reviewable pieces

One commit for `figures.json`, then one per group of pages whose prose changed. A commit
that mixes a figure update with a rewrite cannot be reviewed for either.

## After new legislation

Inflation is the easy case. For an act:

1. Read the enacted text and its effective-date provisions, not the press coverage.
2. List every outline code the act touches. Work from `src/data/topics.json`, not memory.
3. For each page: update the rule statement and its citation, add the act to
   `authorities` where it now controls, and write the before/after into
   `How this has changed`.
4. Where a provision is effective for a later year, say so on the page rather than
   silently describing the future rule.
5. Where guidance is still pending, say that too, with the date checked.

## Quarterly spot check

Pull the ten highest-traffic pages from analytics and, for each:

- [ ] Every authority link still resolves.
- [ ] Every figure's `verified` date is inside the current cycle.
- [ ] No IRS procedural change since the last review (form revision, notice retired,
      new deadline).
- [ ] `lastReviewed` bumped when the page was actually re-read; left alone when it was not.

## What never happens in a refresh

- No page moves to `published` as part of a bulk update. Status changes are individual
  decisions made against `docs/VERIFICATION.md`.
- No figure gets a verified date because it "looks right" or matches last year.
- No `taxYear` bump on a page whose figures have not all been checked for that year.
