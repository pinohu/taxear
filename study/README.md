# TaxEar Study

A separate, paid companion product to the free reference site at taxear.com: original
multiple-choice practice questions mapped to the IRS Special Enrollment Examination
outline. Lives in this same repository (under `study/`) but builds, deploys, and runs
completely independently of the root Astro site and its CI — nothing here is touched by
`npm ci`/`npm run build` at the repo root, and nothing at the root depends on this
directory either.

## Stack

- Astro (static) for the pages, same version as the main site.
- Cloudflare Pages Functions (`functions/api/*.js`) for the three server-side endpoints —
  no separate backend to run or host.
- Stripe Checkout for payment, called directly over `fetch` against Stripe's REST API
  (no SDK dependency).
- A signed, stateless cookie (HMAC-SHA256 via the Web Crypto API already built into the
  Workers/Pages runtime) grants access on the browser that completed the purchase.
- Cloudflare KV (optional but recommended) records each purchase by email, so a future
  cross-device restore-access feature has something to check against.

## What's built vs. what's deliberately deferred

**Built and working:** the sales landing page, Stripe Checkout, server-side payment
verification (never trusts the client), access-gated practice pages, and one pilot
question set (18 original questions, outline section 1.1.1 — Preliminary Work and
Taxpayer Data).

**Deliberately not built yet:** a "restore access on a new device" flow. Doing this
securely requires proving the requester actually controls the purchasing email address
(a magic link), which needs a transactional email provider (e.g. Resend or Postmark) —
another external account this repo has no path to create on your behalf. Shipping a
"just type the email you paid with" version instead would let anyone who *knows* a
customer's email address claim their paid access, since email addresses aren't secret.
Until an email provider is wired in, access is scoped to the browser that purchased it.

## Deploying this for the first time — steps only you can do

1. **Create a Stripe account** (if you don't have one) and get your **secret key**
   (`sk_live_...` for real payments, `sk_test_...` while testing).
2. **Create a new Cloudflare Pages project** from this same GitHub repo, with:
   - Build command: `cd study && npm ci && npm run build`
   - Output directory: `study/dist`
   - Root directory: leave as the repo root (the build command handles moving into `study/`)
3. **Attach the `study.taxear.com` custom domain** to that new Pages project (Cloudflare
   Pages → your new project → Custom domains), and point a CNAME for `study` at the
   Pages project's `.pages.dev` hostname in your DNS, the same way `taxear.com` and
   `www` were pointed at the main `taxear-web` project.
4. **Set these environment variables** on the new Pages project (Settings → Environment
   variables — mark `STRIPE_SECRET_KEY` and `COOKIE_SECRET` as *secret*, not plaintext):
   - `STRIPE_SECRET_KEY` — from step 1.
   - `COOKIE_SECRET` — any long random string (e.g. `openssl rand -hex 32`); used only to
     sign the access cookie, never sent to Stripe or anywhere else.
5. **(Recommended) Create a KV namespace** (Workers & Pages → KV → Create namespace,
   e.g. `taxear-study-access`) and bind it to the Pages project as `ACCESS_KV`
   (Settings → Functions → KV namespace bindings). Without this binding the purchase
   flow still works (the cookie is set regardless), but nothing is recorded server-side
   for a future restore-access feature to use.
6. Push/merge to this branch — Cloudflare's Git integration builds and deploys
   automatically from here, same as the main site.

## Adding the next domain of questions

Add a new file under `src/data/questions/`, following the same shape as
`individuals-preliminary-work.json` (`domain`, `domainTitle`, `outlineSection`,
`questions[]`). It's picked up automatically by both the domain-picker page and the
per-domain quiz route — no other file needs to change. Every question must be written
fresh for this product; never adapt or paraphrase anything from `private/questions.json`
or any commercial study guide, per the same rule that governs the main site.
