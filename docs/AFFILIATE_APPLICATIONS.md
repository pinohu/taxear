# Affiliate program application copy

Draft answers for Gleim, Surgent, and Fast Forward Academy's affiliate/partner sign-up
forms. Every program's form is worded slightly differently, so treat this as source
copy to paste from and trim, not a form to submit as-is — and fill in your own accounts
(business name/EIN if asked, payout details, social handles) yourself; none of that is
guessable or fabricatable on your behalf.

## The one blurb to reuse everywhere ("Tell us about your site")

> TaxEar (taxear.com) is a free reference on federal tax law and IRS procedure,
> structured on the IRS Special Enrollment Examination content outline — 360 topic
> pages, each citing the controlling Internal Revenue Code section, Treasury
> Regulation, or IRS guidance it's built from, with dated figures and original worked
> scenarios. It's used by EA candidates studying the outline, practitioners looking up
> a rule, and taxpayers trying to understand their own return. The audience is exactly
> the SEE candidate population your review course serves, and the content's citation
> discipline means readers already trust the site for accuracy before they ever see a
> recommendation on it.

## How traffic/promotion questions get answered right now

Most of these forms ask how you'll drive traffic or how much you currently get. Answer
honestly rather than inflating anything — these programs check analytics:

> TaxEar is newly launched and growing; current traffic is modest. The placement would
> be a permanent, contextual link on the site's dedicated EA-exam guide page
> (taxear.com/ea-exam/), which is exactly where a candidate lands when deciding how to
> study — not a banner or a one-off post. No paid or social promotion is planned; this
> is organic, on-site placement only.

## Per-program notes

**Gleim EA Review** — gleim.com. Gleim runs affiliate programs through the usual
affiliate networks (check their site's footer or a partnerships page for the current
one — ShareASale and Impact are common for exam-prep companies, but confirm rather than
guessing the exact network). Application typically asks for the site URL, a traffic
estimate, and a description of the audience — use the blurb above.

**Surgent EA Review** — surgent.com. Same approach; Surgent also serves CPA/CMA
candidates, so if their form asks about audience breadth, it's fair to note TaxEar's
current content also touches income tax topics relevant beyond just the EA population.

**Fast Forward Academy** — fastforwardacademy.com. FFA is EA-review-specific and
probably the closest audience match of the three; lead with the blurb above and mention
the `/ea-exam/` guide page as the exact placement.

## After approval

Once a program approves the application, you'll get a tracked/affiliate URL (and
usually an FTC-required disclosure line to include near the link). At that point:
tell me the tracked URLs and I'll swap them into `src/pages/ea-exam.astro` on the main
site — the exact spot is already marked with a code comment — and add the required
disclosure sentence right there. Don't send me the raw affiliate dashboard login; the
tracked link text is all that's needed.
