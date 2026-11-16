# LOG

## 2026-11-16 — Test 3 scaffolded

- Mode: BALANCED. Design direction: clean Facebook Marketplace, not a 2008 reskin.
- Created `marketplace/` with Next.js 16.4.6, React 19.3, TypeScript strict, Tailwind 4,
  and `@supabase/supabase-js` 2.119.0.
- Built home, sell, listing detail, and not-found routes; grid/list toggle, category tabs,
  search, photo preview, listing form, seller card, and message form.
- Added `supabase/schema.sql` for listings/messages, `storage.sql` for the public
  `listing-images` bucket, `demo-listings.sql` with six listings, and `cleanup-e2e.sql`.
- Added validation, parsing, photo rules, error mapping, and 16 unit tests.
- Added shell/axe/responsive/console E2E tests plus a gated full flow and screenshot capture.
- Fixed an axe contrast issue on setup/footer copy. Build passes without Supabase credentials.
- Next: owner Supabase setup and `.env.local`; then real flow, screenshots, repo, deploy.

## 2026-11-16 — Supabase MCP and database setup

- Added the official remote Supabase MCP in the workspace `opencode.json`. OAuth authenticated.
- Hit the two-project free limit. With owner approval, paused `Calfredo23's Project` and
  created `Marketplace` (`nzmhpfiyhjmxqntrbosq`, Singapore, $0/month).
- Applied `schema.sql` and `storage.sql`; seeded six demo listings. Verified 6 listings,
  0 messages, and the public `listing-images` bucket. Security advisors: no findings.
- Scoped the MCP URL to the Marketplace project ref. Next: add `.env.local` and run the
  real flow.

## 2026-11-16 — Full local flow and screenshots

- Added `.env.local`; ran all 6 Playwright tests against the live Supabase project: create
  listing with photo, browse/search/category, detail, real message insert, axe at 390/1440,
  responsive, console, screenshots.
- Removed the E2E listing and cascaded message. Supabase blocks direct storage deletes, so
  the 1×1 test image remains as an orphan.
- Fixed the leather-jacket demo title to match its image, wrapped mobile category tabs, and
  kept a visible `Sell` label on mobile.
- Added CI workflow. Next: public repo, Vercel, live verification, submit.

## 2026-11-16 — Public repo and CI

- Initialized git, ran the staged secret sweep (clean), committed, and created
  `https://github.com/Calfredo23/my-marketplace`.
- CI run `43833011349` passed both jobs. Next: Vercel import, env names, live verification.

## 2026-11-16 — Airbnb-inspired frontend refactor

- Switched the frontend pass to QUALITY mode and applied the looksmaxxing workflow with the
  Airbnb system: white canvas, coral action color, ink text, warm footer, one-family sans.
- Refactored the header/search, icon category tabs, borderless photo cards, 4-column
  adaptive grid, detail facts, sticky seller panel, one-column sell form, on-blur validation,
  input sizing, focus states, and reduced-motion behavior.
- Kept submission screenshots untouched. Captured temporary review shots in `.review/`.
- Verified: 16 unit, 6 Playwright, axe at 390/1440, no horizontal scroll at 360/768/1440.
- Next: Vercel URL, live verification, final screenshots, submit.

## 2026-11-16 — Live URL and canonical

- Found the Vercel production alias `https://my-marketplace-calfredo.vercel.app` from the
  GitHub deployment status. The old fallback `the-market-calfredo.vercel.app` returns 404.
- Updated the metadata fallback, README, and project state. Next: push, verify live, then
  final screenshots after approval.

## 2026-11-16 — Refactor deployed and verified

- Pushed `5038163`. Vercel deployment completed for `my-marketplace-calfredo`.
- Live check: 200, canonical `https://my-marketplace-calfredo.vercel.app`, 6 listings,
  category tabs, detail page, message form, sell form, no horizontal overflow at 390, zero
  console errors.
- Submission screenshots intentionally untouched. Next: owner review, final screenshots,
  submit.

## 2026-11-16 — EmailJS seller notifications

- Added `app/api/notify-seller/route.ts` with server-side EmailJS REST sending. The route
  looks up the seller email from the listing, validates the message, and never exposes the
  EmailJS private key to the browser.
- `MessageSeller` now saves first, then calls the route. The success state distinguishes
  email sent, not configured, and failed.
- Added the four EmailJS env names to `.env.example` and setup instructions to README.
  Added a Playwright assertion for the email status line.
- Verified with EmailJS unset: 16 unit and 6 Playwright pass; message still saves and the UI
  says notifications are not configured. Next: owner EmailJS setup + live email test.
