# TaxEar Study

The paid companion to the free reference site at taxear.com: timed practice exams and
recall drills for the IRS Special Enrollment Examination, built from the original
questions on every TaxEar page. Lives in this repository under `study/` but builds,
deploys and runs independently of the root site; nothing at the root depends on it.

The design is in `docs/REVENUE_BUILD.md`. The short version: questions stay free on
their pages; Study sells the exam around them.

## Stack

- Astro (static) for the pages, same version and design tokens as the main site.
- Cloudflare Pages Functions (`functions/api/**`) for everything server-side. No SDKs:
  Stripe is called over `fetch`, signatures and tokens use Web Crypto.
- Cloudflare KV (`ACCESS_KV`) for purchases, entitlements, sign-in tokens, exams in
  progress and attempt history. Email is the account key; there are no passwords.
- Stripe Checkout with Dashboard Prices, Stripe Tax, and a webhook that grants on
  payment and revokes on refund or dispute.
- Resend for the two kinds of email that exist: sign-in links and change alerts.

## The bank

`npm run import` reads every published page in `../src/content/topics`, parses its
"Check yourself" block with the site's own parser (`../scripts/checkyourself.mjs`),
and writes:

- `src/data/questions/part-{1,2,3}.json` — multiple-choice questions and recall drills,
  each tagged with outline code, domain, section and the page it came from. The landing
  page reads only the counts and three sample items from these.
- `functions/_lib/bank.data.js` — the same bank as an ES module for the Functions.
  Answers and explanations leave this module one graded attempt at a time.

Hand-written questions under `src/data/handwritten/` are merged in. Root CI regenerates
the bank and fails if the committed files differ, so a page edit never leaves the bank
stale. `npm run verify` checks the bank's shape; `npm test` runs the Functions' logic
against a stubbed KV.

## Endpoints

| Route | Does |
|---|---|
| `POST /api/checkout` | Stripe Checkout Session for a `sku` (`p1` `p2` `p3` `all` `practitioner_month` `practitioner_year`) |
| `POST /api/verify-session` | Re-reads the session from Stripe, grants, sets the cookie |
| `POST /api/stripe-webhook` | Grants on checkout and paid invoices; a refund or dispute ends the purchase its charge paid for; ends cancelled subscriptions |
| `GET /api/me` | Signed-in email and entitlements |
| `POST /api/login`, `GET /api/login/verify` | Magic-link sign-in, one use, 15 minutes |
| `POST /api/logout` | Clears the cookie |
| `POST /api/exam/start`, `POST /api/exam/grade` | Sample without answers; grade and record |
| `POST /api/drills/start`, `/answer`, `/finish` | Prompts; one worked answer at a time; self-graded record |
| `GET /api/attempts` | History and weak areas |
| `POST /api/follow` | From "Follow this rule" on taxear.com (CORS): parks a pending follow and, for a subscriber, emails a confirmation link; applied at once only when signed in as that address |
| `GET/POST /api/follow/confirm` | The confirmation link: GET shows the one topic and a button; POST follows it and signs in |
| `POST /api/checkout-redirect` | Form-encoded checkout for the scripts-off path; redirects to Stripe |
| `GET/POST /api/follows` | The account's followed topics; follow or unfollow one |
| `POST /api/notify` | Called by `.github/workflows/notify.yml` with `NOTIFY_SECRET`; emails followers once per material change; 502 while anyone is still owed, so the workflow fails and a re-run finishes the job |
| `GET /api/unfollow-all` | One-click stop link from every alert email |
| `POST /api/portal` | Stripe customer-portal session: cancel, change card, invoices |

## Practitioner alerts

A changelog entry on a topic page marked `material: true` is the whole trigger. On a
push to `main`, `scripts/material_changes.mjs` lists entries that are new since the
previous commit and the workflow posts them to `/api/notify`. The Function emails each
follower who holds a live Practitioner entitlement, records `alert:<code>:<date>` so a
re-run never sends twice, and reports counts. Set `NOTIFY_SECRET` on both the Pages
project and the GitHub repository (Settings → Secrets → Actions).

## Deploying — the owner's steps

1. Stripe: create Products and Prices for each sku (one-time for the parts, recurring
   for the Practitioner tier), enable Stripe Tax, add the webhook endpoint with the five
   events listed in `.env.example`, and copy the secret key, webhook secret and Price IDs.
2. Cloudflare Pages: a project from this repo with build command
   `cd study && npm ci && npm run build`, output `study/dist`, custom domain
   `study.taxear.com`. Bind a KV namespace as `ACCESS_KV`. Set every variable in
   `.env.example`.
3. Resend: verify the sending domain, create an API key, set `MAIL_FROM`.
4. Push to `main`; the Git integration deploys.

Every Function reports a clear error when a variable it needs is missing. Nothing is
silently locked or silently open.

## Rules that carry over

Every question must be written fresh, on its page, under CLAUDE.md rule 2; never adapt
anything from `private/questions.json` or any commercial study guide. The page is the
source of truth: fix a question on the page, re-import, commit both.
