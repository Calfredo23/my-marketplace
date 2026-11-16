# MEASUREMENTS

## Tests

- Vitest: 16 passing (listing validation, message validation, parsing, formatting, errors).
- Playwright: 6 passing with Supabase (shell, axe at 390/1440, console, responsive,
  create listing, detail, message, screenshots).
- Manual visual review: home, detail, sell, and mobile screenshots.
- axe: 0 violations at 390 and 1440.
- Responsive: no horizontal scroll at 360, 768, 1440.

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
