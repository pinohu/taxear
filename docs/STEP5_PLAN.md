# Step 5 execution plan — first ten Part 3 pages

The ten pages are blocked on one thing: no primary source is reachable from the build
environment (see "Blocked" below). Everything that does not require opening a source is
done, so this file is the work order for the session that has access.

**These authority lists are search directions, not findings.** They say where to look
first for each outline item. Nothing here has been read or confirmed, and a page's
`authorities[]` gets only what was actually opened. Where the list is wrong, the source
wins.

## Blocked

`irs.gov`, `law.cornell.edu`, `ecfr.gov`, `uscode.house.gov`, `govinfo.gov`, `gpo.gov`,
`federalregister.gov`, and `congress.gov` are all refused by the environment's egress
policy; only GitHub, npm, and PyPI resolve. Rules 2 and 3 of the project cannot be met
from here: no rule statement can cite an authority that was opened, and no figure can be
given a `verified` date. All 28 keys in `figures.json` still carry `verified: null`, and
`npm run verify` correctly refuses to pass any gated page that references them.

Unblock by allowing those hosts for the environment, then work this list.

## The ten

| # | Codes | Page | Open first | Needs |
|---|---|---|---|---|
| 1 | 3.2.6.a | `representation/.../related-issues/statute-of-limitations` — exists at `review` | IRC §§ 6501, 6502, 6511, 6513, 6503, 6532; **§ 6511(d), §§ 7508, 7508A**; Reg. § 301.6501(c)-1; IRM 25.6.1, 5.16.1 | Re-verify every citation; confirm the § 6501(e)(1)(B) basis-overstatement amendment; 5 figure keys. **Three content gaps found by the §4 check — see `private/discrepancies.md`**: the § 6511(d) special refund periods are missing entirely, currently-not-collectible is never mentioned, and the § 6330(e)(1) tail may be missing |
| 2 | 3.1.1.a, 3.1.1.b | practice before the IRS · who may practice | Circular 230 §§ 10.2, 10.3, 10.7, 10.8; Pub. 947 | Confirm current AFSP limits on unenrolled preparers |
| 3 | 3.2.1.a–d | power of attorney: purpose, signature authority, authority granted, limits on signing | IRC §§ 6061, 6064, 6012; Reg. § 1.6012-1(a)(5); Circular 230 § 10.3(e); Form 2848 and its instructions; Pub. 947 | 3.2.1.a as hub. Form 2848 vs 8821 must be crisp; 8821 grants inspection only |
| 4 | 3.3.1.b | installment agreements | IRC § 6159; Reg. § 300.1; IRM 5.14.1, 5.14.5; Form 9465 | 6 fee/threshold figure keys, all unverified |
| 5 | 3.3.1.c | offer in compromise | IRC § 7122; Reg. § 301.7122-1; IRM 5.8.1; Form 656 booklet | Application fee and low-income waiver figures; three OIC bases |
| 6 | 3.3.1.d, 3.3.1.e | collection appeals program · collection due process | IRC §§ 6320, 6330, 6331; Reg. §§ 301.6320-1, 301.6330-1; IRM 5.1.9, 8.22; Forms 12153, 9423 | Two pages. CDP vs CAP vs equivalent hearing, and which preserves Tax Court review |
| 7 | 3.3.2.a, 3.3.2.b | penalties subject to abatement · basis for abatement | IRC §§ 6651, 6656, 6662, 6664(c), 6404; IRM 20.1.1 (esp. first-time abate) and 20.1.1.3.2 | First-time abate is administrative, not statutory — say so |
| 8 | 3.1.4.b, 3.1.4.a | types of penalties · preparer penalty assessment and appeal | IRC §§ 6694, 6695, 6662, 6701, 6696; Reg. §§ 1.6694-1 to -3, 1.6695-1; Circular 230 § 10.34 | §§ 6694(a)/(b) amounts are inflation-adjusted; both figure keys unverified |
| 9 | 3.1.3.a, 3.1.3.b | incompetence and disreputable conduct · OPR sanctions | Circular 230 §§ 10.50–10.53, 10.60–10.62, 10.79, 10.82; IRM 4.11.55 | Censure, suspension, disbarment, monetary penalty — and who decides each |
| 10 | 3.4.3.b | e-file mandate and exceptions | IRC § 6011(e)(3); Reg. § 301.6011-7; Form 8948 and instructions; Pub. 4163 | The 11-return threshold figure key is unverified |

## Directory entries these ten reference

Forms — all needed before any of the ten can go to `published`, since `verify` treats a
missing form page as an error at that status: **2848** (draft exists), **8821**, **9465**,
**433-A**, **433-B**, **433-F**, **656**, **12153**, **843**, **8948**, **872**, **1040-X**.

Notices: **CP2000** (draft exists), **CP14**, **CP501**, **CP503**, **CP504**,
**LT11 / Letter 1058**, **Letter 3172**.

Each needs its official title and current `irsUrl` confirmed on irs.gov — which is exactly
what cannot be done from here. Form 843's official title could not even be checked.

## Test cases per code (rule 6)

IDs only; the bank stays gitignored and unquoted. Regenerate with
`npm run tag -- --code <code>`.

| Code | Bank IDs |
|---|---|
| 3.1.1.a | P3E1Q401 P3E1Q402 P3E1Q403 P3E2Q573 |
| 3.1.1.b | P3E2Q501 P3E2Q502 |
| 3.1.3.a | P3E1Q433 |
| 3.1.3.b | P3E1Q418 P3E1Q421 P3E1Q422 P3E1Q497 P3E1Q499 P3E2Q516 P3E2Q519 |
| 3.1.4.b | 19 questions — the broadest group; re-read the tags before relying on them |
| 3.2.1.a | P3E1Q431 P3E1Q490 P3E2Q531 P3E2Q533 P3E2Q535 P3E2Q571 |
| 3.2.1.h | P3E1Q435 P3E2Q534 P3E2Q536 |
| 3.3.1.b | P3E1Q440 P3E2Q540 |
| 3.3.1.c | P3E1Q500 P3E2Q597 |
| 3.3.1.e | P3E2Q581 |
| 3.3.2.a | P3E1Q463 P3E2Q562 P3E2Q563 |
| 3.3.2.b | P3E2Q564 P3E2Q599 |
| 3.4.3.b | P3E1Q483 P3E1Q487 P3E2Q591 |

Nothing is tagged to 3.2.6.a, 3.1.4.a, 3.2.1.b–d, or 3.3.1.d. That is a property of the
tagger, not of the bank: more specific rules claim the questions first. The statute of
limitations page should be checked against **P3E2Q543, P3E2Q544** (tagged 3.3.1.m),
**P3E1Q453, P3E2Q598** (tagged 3.3.1.o), and the Part 1 refund-period questions
**P1E1Q001, P1E1Q017, P1E1Q097, P1E2Q101, P1E2Q102** — the tagger never assigns a Part 3
code to a Part 1 question, but the subject is the same and the page has to answer them.

The §4 check has been run for 3.2.6.a; results, page gaps, bank problems, and two
corrected mis-tags are in `private/discrepancies.md` (gitignored). The remaining nine
pages get the same treatment as each is written.

Two mis-tags surfaced during that check, both caused by a rule matching a form number
instead of the question's subject: a CP2000 question landed on the amended-return topic,
and the Form 8867 question landed on general Circular 230 due diligence. Rules reordered
and pinned with tests. Expect more of this — read the tags for a page before trusting
them, and correct the rules rather than the tags so the fix sticks.

## Still open after this pass

Everything that does not need a source is done. What is left, and why:

| Item | Blocked on | Where |
|---|---|---|
| The ten pages, and every page after them | Source access | This document |
| `figures.json` — 28 keys, all `verified: null` | Source access | `docs/ANNUAL_REFRESH.md` §2 for the procedure |
| Form and notice directory entries | Source access — official titles and URLs | Above |
| §4 test-case checks for the other nine pages | Nothing — the bank is readable; do it as each page is written | IDs listed above; log to `private/discrepancies.md` |
| Glossary at `/glossary/` (Step 6) | Source access — the definitions are the page | Not started; no empty page was created |
| Self-hosted fonts | Cannot fetch woff2 files from here | `docs/LAUNCH.md` §7 |
| `/ea-exam/` format details | Source access — current candidate bulletin | Below |
| Cloudflare, DNS, search console, analytics, email provider | Owner's accounts | `docs/LAUNCH.md` |

The glossary was left unstarted rather than scaffolded empty: its value is entirely in
sourced definitions, and a linked page with no terms is worse than no page. Build it in
the same session as the first batch, so terms can be lifted from pages as they are
written and linked both ways.

## Notes for the review gate

- The Step 5 brief has 3.1.4.a and 3.1.4.b the other way round: in the outline `.a` is
  *assessment and appeal procedures for preparer penalties* and `.b` is *types of
  penalties*. §§ 6694/6695 belong with both.
- The brief's "CDP and collection appeals (3.3.1.d and the CDP item)" resolves to
  3.3.1.d (collection appeals program) and 3.3.1.e (collection appeals and due process).
- The exemplar's `related[]` points at 3.3.1.b, 3.3.1.c, 3.3.3.a, 3.4.2.a. Given the real
  outline, 3.3.1.m (collections statute) and 3.3.1.o (amended returns and claims, effect
  on the statute) are the stronger links and should probably replace 3.3.3.a.
- `/ea-exam/` still needs a sourced pass: the scored-question count, section and break
  structure, and carryover period are unverified against the current candidate bulletin,
  and the testing vendor changed during 2026.
