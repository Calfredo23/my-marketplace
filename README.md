# The Market

A small Facebook Marketplace-style app built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Supabase.

Live: https://the-market-calfredo.vercel.app

[Source](https://github.com/Calfredo23/my-marketplace)

List something with a photo and details, browse by category, open a listing, and message the seller. Listings and messages live in Supabase. Photos use Supabase Storage.

## What it does

- Create a listing with a photo, title, description, price, email, and category.
- Browse every listing, filter by category, search titles and descriptions, and switch between grid and list view.
- Open a listing to see the photo, full details, seller email, and a working **Message Seller** form.
- Messages save to Supabase. Sending a real email is not included.

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Run `supabase/storage.sql` to create the public `listing-images` bucket and policies.
4. Copy the project URL and publishable key into `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
# Legacy alternative: NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

5. Optional: run `supabase/demo-listings.sql` for six sample listings.
6. Restart `npm run dev`.

Do not commit keys. Use the same names in Vercel.

## Scripts

```bash
npm run dev
npm run build
npm start
npm run typecheck
npm run lint
npm test
npm run test:e2e
npm run verify
```

Playwright uses port 3213. The Supabase flow is skipped when the environment variables are missing. Run `supabase/cleanup-e2e.sql` after the real database tests to remove the E2E listing and its stored image.

## How it works

- `app/page.tsx` reads the latest listings on the server.
- `components/listings-view.tsx` owns the grid/list toggle.
- `components/sell-form.tsx` uploads the photo, then inserts the listing.
- `app/listing/[id]/page.tsx` renders a listing and the message form.
- `components/message-seller.tsx` inserts the buyer message.
- `lib/listings.ts` holds categories, validation, parsing, and formatting.
- `lib/images.ts` holds photo type and size rules.
- `supabase/schema.sql` creates `listings` and `messages`.
- `supabase/storage.sql` creates the public photo bucket.

There is no login. The listing and message forms are open to the public, with database checks on every field.

## License

MIT © Cedrick Alfredo Catimbang
