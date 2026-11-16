# PROJECT MEMORY — The Market

Framework Version: 1.22.1
Current Execution Mode: BALANCED
Project Status: FEATURE_DEVELOPMENT
Lifecycle Stage: 6 — IMPLEMENTATION
Owner: Cedrick Alfredo Catimbang (Calfredo)

## What this is

Test 3 for the SUpost / CapM application: a Facebook Marketplace-style app using React,
Next.js, Supabase Postgres, Supabase Storage, and Vercel. A visitor can create a listing
with a photo, title, description, price, email, and category; browse and filter listings;
open a detail page; and send a message to the seller. There is no login.

## Scope

- Required: create listing, save in Supabase, photo upload, browse, category tabs, detail
  page, Message Seller saved in Supabase.
- Included extras: search, grid/list toggle, specific failure reasons, responsive layout.
- Out of scope: authentication, editing/deleting, real email delivery, payments.

## Stack

Next.js 16.4.6 (App Router), React 19.3, TypeScript strict, Tailwind 4,
@supabase/supabase-js 2.119.0, Vitest, Playwright, axe-core.

## Design direction

Clean Facebook Marketplace feel, not a 2008 reskin. White surfaces, soft gray page,
one strong blue accent, rounded cards, large photos, and a compact seller panel on the
detail page. Full contract in `docs/velitaxis/SPECS/DESIGN_PLAN.md`.

## Current state

The app is implemented and verified locally against the live Supabase project. Typecheck,
lint, build, 16 unit tests, and 6 Playwright tests pass. The tests cover create listing with
photo, home browse/search/category tabs, detail page, real Message Seller insert, axe at
390/1440, responsive widths, console errors, and screenshots. The public deployment and repo
are the remaining steps. Screenshots are in `submission/screenshots/` (PNGs ignored by git).

Supabase project `Marketplace` (`nzmhpfiyhjmxqntrbosq`, Singapore, $0) has 6 demo listings,
0 messages, and a public `listing-images` bucket. Security advisors show no findings. The old
`Calfredo23's Project` was paused to free a free-tier slot.

Next: create the public repo, push, import to Vercel, add the Supabase env names, deploy,
verify the live flow, then submit.

## Risks

- Public anonymous inserts are intentional for the no-login brief. The database checks
  fields, but there is no rate limit or moderation.
- Demo listings use external Unsplash images. Real listings use Supabase Storage.
- The E2E flow writes a listing and image; `supabase/cleanup-e2e.sql` removes them.
