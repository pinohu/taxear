# Go-live checklist — the steps only the owner can do

Everything in the three revenue pull requests is built, tested and merged. Nothing in
this list needs code. Each step names where the value goes; none of the values belong
in the repository.

## 1. Legal (already live, one read-through)

- [ ] Read `/privacy/`, `/terms/` and `/refunds/` once. Governing law is Pennsylvania;
      refund window is 14 days; access period is 12 months per part. Change any of those
      in the page and in `docs/REVENUE_BUILD.md` together.

## 2. Measurement (one hour, do first)

- [ ] Cloudflare → taxear.com zone → Web Analytics → enable → copy the token into the
      main Pages project as `PUBLIC_CF_BEACON_TOKEN`, redeploy.
- [ ] Pick the digest provider (Buttondown is the least work) and set
      `PUBLIC_DIGEST_ENDPOINT`. The form appears on every page once it is set. If it is
      not Buttondown, add its host to `form-action` in `public/_headers`.
- [ ] Google Search Console: URL-prefix property for `https://taxear.com`, HTML-file
      method, commit the file to `public/`, verify, submit `sitemap-index.xml`.

## 3. Stripe (an afternoon)

- [ ] Products and Prices: Part 1, Part 2, Part 3, All three (one-time); Practitioner
      monthly and yearly (recurring). Copy each `price_…` id.
- [ ] Enable Stripe Tax and set the business address.
- [ ] Customer portal: enable, so subscribers can cancel themselves (the account page
      links to it once `STRIPE_SECRET_KEY` is set).
- [ ] Webhook endpoint `https://study.taxear.com/api/stripe-webhook` with events
      `checkout.session.completed`, `invoice.paid`, `customer.subscription.deleted`,
      `charge.refunded`, `charge.dispute.created`. Copy the signing secret.
- [ ] Decide the prices. Defaults shown on the pages: $29 a part, $59 all three, $15 a
      month or $120 a year for alerts. Set `PUBLIC_PRICE_PART`, `PUBLIC_PRICE_ALL`,
      `PUBLIC_PRICE_PRACTITIONER_MONTH`, `PUBLIC_PRICE_PRACTITIONER_YEAR` to match.

## 4. Cloudflare Pages project for study.taxear.com (an hour)

- [ ] New Pages project from this repository: build command
      `cd study && npm ci && npm run build`, output `study/dist`, production branch `main`.
- [ ] Custom domain `study.taxear.com`.
- [ ] KV namespace, bound as `ACCESS_KV`.
- [ ] Environment variables from `study/.env.example`: `STRIPE_SECRET_KEY`,
      `STRIPE_WEBHOOK_SECRET`, the six `STRIPE_PRICE_*`, `COOKIE_SECRET`
      (`openssl rand -hex 32`), `RESEND_API_KEY`, `MAIL_FROM`, `NOTIFY_SECRET`, and the
      four `PUBLIC_PRICE_*`. Mark the secrets as secret.

## 5. Resend (half an hour)

- [ ] Verify the sending domain (SPF and DKIM records in the taxear.com zone).
- [ ] API key → `RESEND_API_KEY`; sender → `MAIL_FROM`, e.g. `TaxEar Study <study@taxear.com>`.

## 6. GitHub

- [ ] Repository → Settings → Secrets → Actions → `NOTIFY_SECRET`, the same value as on
      the Pages project. The notify workflow skips quietly until it exists.
- [ ] Default branch to `main` (still pending from `docs/LAUNCH.md` step 0).

## 7. First run

- [ ] Buy Part 3 yourself with a Stripe test card, sit a 10-question exam, refund it in
      the Dashboard, confirm the account page shows access withdrawn.
- [ ] Subscribe to alerts, follow a topic from its page, commit a changelog entry with
      `material: true` on that topic, push to `main`, and check the email arrives once.
- [ ] Ask for a sign-in link on a second device.

## 8. Decisions still open (recorded in `docs/REVENUE_BUILD.md`)

- Statutory rates and rule 3 (tokenise, or exempt in writing).
- The two remaining copyright phrases to eyeball.
- Whether the EA-exam page keeps the competitor links.
- Multiple-choice questions: every page in all three parts now carries them; the 75 Part 3 items that answer with a letter and citation only still want a one-sentence reason each.
