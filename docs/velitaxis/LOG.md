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
