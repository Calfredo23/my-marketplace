# PROJECT MEMORY — The Market

Framework Version: 1.22.1
Current Execution Mode: QUALITY
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

Airbnb-inspired marketplace system, not a Facebook clone. White canvas, warm soft-gray
footer, deep coral accent for primary actions and the mark, borderless 4:3 photo cards,
one-family system sans, 14px card radius, 20px detail/form radius, and a sticky seller
panel. Full contract in `docs/velitaxis/SPECS/DESIGN_PLAN.md`.

## Current state

The frontend has been refactored on the Airbnb-inspired system: borderless photo cards,
coral primary actions, one-family type, category tabs with icons, a one-column sell form,
on-blur field validation, detail facts, sticky seller panel, reduced-motion support, and
responsive category wrapping. Typecheck, lint, build, 16 unit tests, and all 6 Playwright
tests pass. axe passes at 390 and 1440; no horizontal scroll at 360, 768, 1440.

Submission screenshots were not overwritten. Temporary review captures are in `.review/`
(ignored). The public deployment is `https://my-marketplace-calfredo.vercel.app`; the
refactor is live and verified there with 6 listings, the detail page, the message form, the
sell form, correct canonical URL, and zero console errors. Next: owner review, final
screenshots, submission.

## Risks

- Public anonymous inserts are intentional for the no-login brief. The database checks
  fields, but there is no rate limit or moderation.
- Demo listings use external Unsplash images. Real listings use Supabase Storage.
- The E2E flow writes a listing and image; `supabase/cleanup-e2e.sql` removes them.
