# Work order

Step 5 is complete. This file is now the running work order: what was done and what the
next session picks up. Regenerate the numbers with `npm run progress`.

## Where the project stands (18 August 2026)

18 topic pages at `review`, 342 at `stub`, none at `published` — the owner moves pages to
`published`, no session does. 17 form entries and 7 notice entries at `review`. **All 63
keys in `figures.json` carry a `verified` date against a source opened that day**; there are
no unverified figures left, so no page is blocked on one.

| Section | Written |
|---|---|
| 3.1.1 Practice before the IRS | 2 / 2 |
| 3.1.3 Sanctionable acts | 2 / 4 |
| 3.1.4 Rules and penalties | 2 / 7 |
| 3.2.1 Power of attorney | 4 / 11 |
| 3.2.6 Related issues | 1 / 10 |
| 3.3.1 Collection process | 4 / 16 |
| 3.3.2 Penalties and interest abatement | 2 / 5 |
| 3.4.3 Electronic filing | 1 / 9 |

Untouched Part 3 sections: 3.1.2 (16), 3.2.2 (5), 3.2.3 (5), 3.2.4 (5), 3.2.5 (8),
3.3.3 (9), 3.3.4 (5), 3.4.1 (2), 3.4.2 (2). Parts 1 and 2 are entirely unwritten.

## What Step 5 delivered

| Codes | Page |
|---|---|
| 3.2.6.a | statute of limitations |
| 3.1.1.a, 3.1.1.b | practice before the IRS · who may practice |
| 3.2.1.a–d | power of attorney: purpose, signature authority, authority granted, limits on signing |
| 3.3.1.b–e | installment agreements · offer in compromise · collection appeals program · CDP |
| 3.3.2.a, 3.3.2.b | penalties subject to abatement · basis for abatement |
| 3.1.4.a, 3.1.4.b | preparer penalty assessment and appeal · types of penalties |
| 3.1.3.a, 3.1.3.b | incompetence and disreputable conduct · OPR sanctions |
| 3.4.3.b | e-file mandate and exceptions |

Forms: 2848, 8821, 1040-X, 843, 656, 9465, 12153, 9423, 6118, 8867, 8948, 8944, 8453,
433-A, 433-B, 433-F, 872. Notices: CP14, CP501, CP503, CP504, LT11/Letter 1058,
Letter 3172, CP2000.

**Form 872 is the one entry whose `irsUrl` is not a form page.** The IRS does not publish it
in the public catalogue — it is issued by the examiner — so the entry links IRM 25.6.22 and
says so in its body. Do not "fix" it to a guessed `about-form-872` URL; that page 404s.

## Next: finish the sections already opened

Prefer depth over breadth. Each of these sits beside a page that already exists, so the
`related[]` graph closes as you go and the authorities are largely already fetched and
cached.

| Codes | Why next |
|---|---|
| 3.1.3.c, 3.1.3.d | Completes sanctionable acts. § 6702 is already written up on 3.1.4.b; badges of fraud need IRM 25.1.2 |
| 3.1.4.c–g | Completes rules and penalties. § 6695(g) due diligence (3.1.4.g) is the heaviest and Form 8867 already has an entry |
| 3.3.1.i, 3.3.1.j, 3.3.1.m | Collection notice and NFTL, levy and seizure, collections statute — all three are already linked one-way from written pages, and all three notice entries point at them |
| 3.3.1.k, 3.3.1.o | Named as gaps in `private/discrepancies.md` against the statute of limitations page: currently not collectible, and amended returns' effect on the statute |
| 3.2.6.b | CP2000's notice entry points here and nothing answers it |
| 3.3.3.a | Same — the second CP2000 topic |

## Carried forward — content

Recorded in `private/discrepancies.md` when found; each needs a source opened before it goes
on a page.

- **Failure-to-pay accrual stops on payment** (bank P3E2Q562). Follows from § 6651(a)(2)'s
  "during which such failure continues" but 3.3.2.a and 3.3.2.b do not say it in terms.
- **Reasonable-cause worked examples** (bank P3E2Q599). IRM 20.1.1.3.3 carries accepted and
  rejected fact patterns; a short table with the IRM subsection for each would answer a
  question type the pages currently only gesture at.
- **CAP: whether Appeals considers collection alternatives.** Asserted in commercial
  material, not found in IRM 5.1.9 or 8.24, and deliberately omitted from 3.3.1.d. Either
  source it or leave it out.
- **Tagger rule.** "incompeten*" reaches 3.1.3.a from questions about a *durable* power of
  attorney, which is 3.2.1 material. Narrow the rule — do not retag the question — and pin
  it with a test, per the standing practice in `scripts/tag_questions.mjs`.

## Carried forward — site

| Item | State |
|---|---|
| Glossary at `/glossary/` | Not started, deliberately. Its value is sourced definitions; build it alongside pages so terms are lifted and linked both ways as they are written |
| `/ea-exam/` | Needs a sourced pass. Scored-question count, section and break structure, and carryover period are unverified against the current candidate bulletin, and the testing vendor changed during 2026 |
| Self-hosted fonts | `docs/LAUNCH.md` §7. Needs the woff2 files |
| Cloudflare, DNS, search console, analytics, email provider | Owner's accounts. `docs/LAUNCH.md` |
| Repository default branch | Still `claude/taxear-build-handoff-gdzo4x`, not `main` |

## Test cases per code (rule 6)

IDs only; the bank stays gitignored and unquoted. Regenerate with
`npm run tag -- --code <code>`. Results of every check run so far are in
`private/discrepancies.md`, including which bank questions are wrong on the law and must not
be used to "correct" a page.

| Code | Bank IDs |
|---|---|
| 3.1.1.a | P3E1Q401 P3E1Q402 P3E1Q403 P3E2Q573 |
| 3.1.1.b | P3E2Q501 P3E2Q502 |
| 3.1.3.a | P3E1Q433 — mis-tagged, see the log |
| 3.1.3.b | P3E1Q418 P3E1Q421 P3E1Q422 P3E1Q497 P3E1Q499 P3E2Q516 P3E2Q519 |
| 3.1.4.b | 19 questions — the broadest group; most are mis-tagged, read the log first |
| 3.2.1.a | P3E1Q431 P3E1Q490 P3E2Q531 P3E2Q533 P3E2Q535 P3E2Q571 |
| 3.2.1.h | P3E1Q435 P3E2Q534 P3E2Q536 |
| 3.3.1.b | P3E1Q440 P3E2Q540 — **both test the retired streamlined IA regime** |
| 3.3.1.c | P3E1Q500 P3E2Q597 |
| 3.3.1.e | P3E2Q581 |
| 3.3.2.a | P3E1Q463 P3E2Q562 P3E2Q563 |
| 3.3.2.b | P3E2Q564 P3E2Q599 |
| 3.4.3.b | P3E1Q483 P3E1Q487 P3E2Q591 |

Nothing is tagged to 3.2.6.a, 3.1.4.a, 3.2.1.b–d, or 3.3.1.d, and 3.1.4.a's subject is
untested by the bank in either part. That is a property of the tagger and of the bank, not a
reason to skip the check — run it, and record when the bank has nothing to say.

Expect mis-tags. Read the tags for a page before trusting them, and correct the rules rather
than the tags so the fix sticks.
