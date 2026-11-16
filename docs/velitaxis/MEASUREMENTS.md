# MEASUREMENTS

## Tests

- Vitest: 16 passing (listing validation, message validation, parsing, formatting, errors).
- Playwright: 7 passing with Supabase (shell, axe at 390/1440, console, responsive,
  create listing, detail, message, screenshots, and client-side filter/no-document-request).
- Client filtering: search and category changes make no document request; clearing search
  resets the category and shows all products.
- Visual review: Airbnb-inspired home/detail/sell at 1440 and 390. Temporary captures in
  `.review/`; submission screenshots intentionally not replaced yet.
- Live design check: `https://my-marketplace-calfredo.vercel.app` — 6 listings, canonical,
  category tabs, detail, message form, sell form, no overflow at 390, 0 console errors.
- axe: 0 violations at 390 and 1440.
- Responsive: no horizontal scroll at 360, 768, 1440.
- Form UX: one-column sell form, 48px inputs, 16px text, visible labels, on-blur validation.
- EmailJS: local route returned `{"sent":true}`; live Vercel route returned `{"sent":true}`
  after env vars were active. Real seller email delivery confirmed.
- Keyword search: covered by the create-listing E2E flow and live query behavior.

## Build

- Next.js 16.4.6 Turbopack production build: passes.
- TypeScript strict and ESLint: clean.
- Routes: `/`, `/sell`, `/listing/[id]`, `/icon.svg`, 404.

## Database

- `public.listings`: 6 demo rows; check constraints on title, description, price, email,
  category, and https image URL.
- `public.messages`: 0 rows; insert-only RLS, no public read.
- Storage: public `listing-images` bucket, 5 MB, JPEG/PNG/WebP.
- Security advisors: no findings. Performance: two new indexes unused (expected).
- E2E cleanup: removes the E2E listing and cascaded messages. Supabase blocks direct storage
  object deletes; the 1×1 E2E image remains as an orphan.
