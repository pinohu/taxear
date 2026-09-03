# Revenue build — plan and architecture

Plan of record for making taxear.com pay without taking anything away from readers.
Decided on 2 September 2026 from the whole-site audit; `docs/BUILD_PLAN.md` remains the
plan for the reference content itself. Every reference page, the changes feed, the
directories and search stay free and indexed. What is sold is *experience, delivery and
currency* on top of that content.

## The three pieces

| Piece | What it is | Status |
|---|---|---|
| **1. Integrity, legal, governance** | The audit's blockers and one-line fixes on the main site: privacy, terms and refund pages; FAQ structured data on every topic page; share image and published date; dead and stale authority links; search readable in dark mode; a Content-Security-Policy; the plan of record brought back in line with the site. | This document's first pull request. |
| **2. TaxEar Study, rebuilt** | The paid practice product, rebuilt on the questions the 360 pages already carry. Questions stay free on their pages; Study sells the exam engine: timed mixed-part exams, scoring, weak-area review, history, and a link from every question back to the page that teaches it. Questions are served from a Function behind the access check, never embedded in HTML. | Second pull request. |
| **3. Practitioner tier** | A subscription that lets a practitioner follow the rules they care about and get an email when a followed page records a *material* change. The changes feed stays free; the subscription is the personalised delivery. Shares its sign-in with Study. | Third pull request. |

## Architecture

### Where things run

```
taxear.com  (Cloudflare Pages, static)         study.taxear.com  (Cloudflare Pages + Functions)
├─ 360 topic pages, forms, notices, search     ├─ landing, exam, results, account pages (static shell)
├─ privacy / terms / refunds                   ├─ functions/api/*  (all server-side logic)
├─ "Follow this rule" control ──POST──────────▶│   follow, exam/start, exam/grade, checkout,
├─ links to Study (EA-exam page, home, footer) │   verify-session, stripe-webhook, login, account
└─ .github/workflows/notify.yml ──POST────────▶│   notify  (secured by NOTIFY_SECRET)
                                               ├─ ACCESS_KV  (purchases, entitlements, follows,
                                               │              attempts, one-time tokens, sent-alerts)
                                               ├─ Stripe (Checkout, Prices, Tax, webhooks)
                                               └─ Resend (magic links, alerts)
```

The main site stays a pure static build with no Functions: rule 7 in CLAUDE.md is about
content, but keeping every server-side concern on one project also keeps one cookie
domain, one KV namespace, one Stripe account and one place to audit.

### Data, all in `ACCESS_KV`

| Key | Value | Written by |
|---|---|---|
| `purchase:<email>` | `{ skus: {p1?: exp, p2?: exp, p3?: exp, all?: exp, practitioner?: exp}, baseline: {key: exp}, grants: {key: [{ref, at, days\|until, pi?, inv?}]}, refunds: [{pi?, inv?, scope}], stripeCustomer, history: [...] }` — `grants` is the ledger of live purchases and each sku is the fold of its baseline and ledger; `refunds` are tombstones so a retried refund webhook is a no-op; `history` is a fifty-entry log | verify-session, stripe-webhook |
| `ref:<sessionOrInvoiceId>` | the email it granted to — idempotency for grants, kept as long as a Checkout Session can be replayed | verify-session, stripe-webhook |
| `revoked:<email>` | `{ at, reason }` — set when a refund or dispute cannot be matched to one purchase; a matched one only ends that sku | stripe-webhook |
| `login:<token>` | `{ email, exp }` — one-time magic-link token, 15 minutes | login (request) |
| `pending:<email>` / `confirm:<jti>` | follows asked for before proof; `{ email, code }` behind a confirmation link, one topic each | follow |
| `follows:<email>` | `["3.3.1.c", ...]` | follow |
| `followers:<code>` | `["a@b.com", ...]` — reverse index, maintained with the above | follow |
| `attempt:<email>:<id>` | `{ startedAt, parts, count, score, byDomain, questionIds }` | exam/grade |
| `alert:<code>:<date>` | `{ sentTo: n }` — idempotency for notify | notify |

Emails are the account key throughout. There are no passwords: the access cookie is set
by a verified Stripe session or by a magic link, both of which prove control of the
mailbox.

### The access cookie

`ta_access` on study.taxear.com, HttpOnly, Secure, SameSite=Lax, signed HMAC-SHA256
with `COOKIE_SECRET`. Payload `{ email, iat, exp }`, thirty days; `exp` is enforced.
Entitlements are *not* in the cookie: every gated request reads `purchase:<email>` and
`revoked:<email>` so a refund takes effect immediately.

### Study: questions and exams

- `study/scripts/import_questions.mjs` reads every published page in
  `../src/content/topics`, parses its "Check yourself" block with the shared parser
  (`scripts/checkyourself.mjs`, the same one the site uses for structured data), and
  writes `study/src/data/questions/part-<n>.json` plus the Functions' copy
  `study/functions/_lib/bank.data.js`. Four-option lettered questions become
  multiple-choice items; open questions with a worked answer (how most of Parts 1 and 2
  test themselves) become recall drills: prompt, reveal, self-grade. At import on
  2 September 2026: 657 multiple-choice (589 in Part 3, 68 in Part 1, none yet in
  Part 2) and 1,013 drills (523 in Part 1, 490 in Part 2). Later the same day every
  Part 2 page gained three multiple-choice questions, and on 3 September every Part 1
  page did too, so the bank now holds a multiple-choice item for every topic in every
  part with the drills unchanged. Each item carries `code`,
  `part`, `domain`, `section`, the page path and title. The landing page reads its
  counts from the bank, so it says exactly this.
- Questions never reach the browser in bulk. `POST /api/exam/start { parts, count }`
  samples questions server-side, stores the set in KV under an exam id, and returns
  stems and options only. `POST /api/exam/grade { examId, answers }` scores it, records
  the attempt, and returns per-question correct index, explanation and page link.
- `GET /api/sample` returns three fixed questions with answers for the landing page and
  needs no purchase.
- The exam UI: choose parts and length (25, 50, 100), optional timer at the SEE's 2.1
  minutes a question, flag for review, submit, results by domain with links back to the
  pages. In-progress state lives in the browser; results in KV.

### Study: money

- Prices are Stripe Price IDs in environment variables (`STRIPE_PRICE_P1`, `_P2`, `_P3`,
  `_ALL`, `STRIPE_PRICE_PRACTITIONER_MONTH`, `_YEAR`), never `price_data`. Checkout sets
  `automatic_tax`, `consent_collection.terms_of_service`, `customer_creation: always`,
  `metadata.sku`, and a `client_reference_id`.
- `POST /api/stripe-webhook` verifies `Stripe-Signature` with Web Crypto and handles
  `checkout.session.completed` (grant), `charge.refunded` and `charge.dispute.created`
  (revoke), `customer.subscription.deleted` and `invoice.payment_failed` (end the
  Practitioner entitlement).
- Access periods: one-time purchases unlock a part for twelve months from purchase; the
  Practitioner tier for the paid period. Both are stated on the landing page and in the
  terms; "lifetime" is gone.
- Suggested launch prices, owner's call: $29 per part, $59 for all three; Practitioner
  $15 a month or $120 a year.

### Practitioner tier

- A changelog entry gains an optional `material: true`. Editorial entries ("initial
  publication", "added plain-language summary") stay unflagged and never alert. Verify
  accepts the field; `/changes/` shows both but marks material ones.
- Topic pages carry a small "Follow this rule" form (email + code) that posts to
  `https://study.taxear.com/api/follow`; the response says whether the address has a
  Practitioner entitlement and, if not, links to checkout. CORS allows `https://taxear.com`.
- `.github/workflows/notify.yml` runs on every push to `main`, diffs the changelogs of
  the pushed commits for new `material` entries, and calls `POST /api/notify` with
  `NOTIFY_SECRET` and the list of `{ code, date, title, summary, path }`. The Function
  looks up followers, sends one email per follower per change through Resend, and
  records delivery per recipient so a re-run never sends twice; while anyone is still
  owed it answers 502, which fails the workflow so the re-run is not forgotten. Content is a reviewed
  commit; the alert only relays it. Rule 7 holds.

### Environment and secrets (owner sets, never committed)

| Where | Name | Purpose |
|---|---|---|
| Study Pages project | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | Stripe API and webhook verification |
| Study Pages project | `STRIPE_PRICE_P1`, `_P2`, `_P3`, `_ALL`, `STRIPE_PRICE_PRACTITIONER_MONTH`, `_YEAR` | Price IDs from the Stripe dashboard |
| Study Pages project | `COOKIE_SECRET` | signs the access cookie and login tokens |
| Study Pages project | `EMAILIT_API_KEY`, `MAIL_FROM` | transactional email |
| Study Pages project | `NOTIFY_SECRET` | shared with the GitHub Action |
| Study Pages project | KV binding `ACCESS_KV` | the store above |
| Main Pages project | `PUBLIC_CF_BEACON_TOKEN`, `PUBLIC_DIGEST_ENDPOINT` | analytics and the digest list |
| GitHub repo secrets | `NOTIFY_SECRET` | for the workflow |

Every Function degrades honestly when a variable is missing: it returns a clear error,
never a silent lock-out.

## Content work the import surfaced

- The import once surfaced Part 3 multiple-choice questions that answered with the
  letter and a citation only ("*Answer: B.*") or nothing at all. Comparing the final
  question bank against its pre-fix state: 152 answers across 50 pages were rewritten
  with a one-sentence, page-grounded reason. 4 short answers remain by design (each
  reads as a genuine terse reason on inspection, not a bare citation). No importer
  change was needed.
- Parts 1 and 2 keep their open questions as drills (523 and 490); every page in all
  three parts carries three or more four-option multiple-choice questions, so every
  part is complete in multiple-choice form with explanations throughout.

## Owner decisions recorded

- **Statutory rates and rule 3.** 331 inline percentages sit in editorial prose. Options:
  (a) tokenise them all, or (b) amend rule 3 to exempt rates fixed by statute, keeping
  the token requirement for anything inflation-adjusted. Until decided, verify keeps
  warning and nothing changes.
- **Copyright phrases.** Three overlaps with the private bank were flagged. The § 351
  question's invented numbers were changed so it no longer coincides with a bank item.
  The child-tax-credit scenario and the collection-standards stem read as generic;
  confirm or reword.
- **Governing law** in the terms is Pennsylvania. Change it if counsel prefers otherwise.
- **The EA-exam page** still lists three competitor review courses. Once Study is live it
  links Study first; whether the competitors stay is a positioning call.

## What is not in scope here

Continuing-education provider status (the best long-term margin; a separate application
and build), teaching packs for the other 359 topics, and firm licensing. All three build
on the same sign-in and entitlement store, so nothing here closes them off.
