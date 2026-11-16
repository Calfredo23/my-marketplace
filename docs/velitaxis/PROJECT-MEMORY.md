# PROJECT MEMORY — The Market

Framework Version: 1.22.1
Current Execution Mode: QUALITY
Project Status: SUBMISSION_READY
Lifecycle Stage: 10 — DELIVERY AND SUBMISSION
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

Airbnb-inspired marketplace system, not a Facebook clone. White canvas, warm soft-gray
footer, deep coral accent for primary actions and the mark, borderless 4:3 photo cards,
one-family system sans, 14px card radius, 20px detail/form radius, and a sticky seller
panel. Full contract in `docs/velitaxis/SPECS/DESIGN_PLAN.md`.

## Current state

The frontend has been refactored on the Airbnb-inspired system: borderless photo cards,
coral primary actions, a serif wordmark, a full-width search grid, client-side search and
category filtering, three balanced photo columns, a one-column sell form, on-blur field
validation, detail facts, sticky seller panel, reduced-motion support, and responsive
category wrapping. Search, category changes, and clearing the search no longer make a
document request. Typecheck, lint, build, 16 unit tests, and all 7 Playwright tests pass.
axe passes at 390 and 1440; no horizontal scroll at 320, 360, 768, 1440.

Seller email is implemented server-side through EmailJS in `app/api/notify-seller/route.ts`.
The message saves first; email is best-effort. The route only emails the seller address
stored on the listing. Local EmailJS test returned `{"sent":true}`; the live Vercel route
also returned `{"sent":true}` after the env vars were added. Live email delivery is
confirmed.

Submission screenshots were replaced with six live captures: home, detail, and sell at 1440
and 390. The public deployment is `https://my-marketplace-calfredo.vercel.app`; the refactor
is live and verified there with 6 listings, instant client-side filters, the detail page, the
message form, the sell form, working EmailJS delivery, correct canonical URL, and zero console
errors. The project is ready to submit.

## Risks

- Public anonymous inserts are intentional for the no-login brief. The database checks
  fields, but there is no rate limit or moderation.
- Demo listings use external Unsplash images. Real listings use Supabase Storage.
- The E2E flow writes a listing and image; `supabase/cleanup-e2e.sql` removes them.
