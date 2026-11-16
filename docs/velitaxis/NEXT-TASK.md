# NEXT TASK

## Task ID

TASK-0001

## Title

The Market — Test 3 build

## Objective

Build, connect to Supabase, test, deploy, and package a Facebook Marketplace-style app that
satisfies Test 3 on a public Vercel URL.

## Status

Local implementation, Supabase project, real flow, tests, screenshots, public repo, and CI
are complete. The Vercel deployment remains.

## Next action

1. Import `Calfredo23/my-marketplace` to Vercel and add the Supabase URL/publishable key
   env names.
2. Deploy, verify the live create → browse → detail → message flow, update the live URL,
   submit.

## Acceptance criteria

1. A visitor can create a listing with a photo, title, description, price, email, and
   category, saved in Supabase.
2. The home page shows all listings with category tabs.
3. Each listing has its own page with photo and full details.
4. Message Seller saves the buyer message in Supabase.
5. Typecheck, lint, unit, build, and Playwright pass.
6. Public repo and Vercel production URL.
