# The Market

A small Facebook Marketplace-style app built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Supabase.

Live: https://my-marketplace-calfredo.vercel.app

[Source](https://github.com/Calfredo23/my-marketplace)

List something with a photo and details, browse by category, open a listing, and message the seller. Listings and messages live in Supabase. Photos use Supabase Storage.

## What it does

- Create a listing with a photo, title, description, price, email, and category.
- Browse every listing, filter by category, search titles and descriptions, and switch between grid and list view.
- Open a listing to see the photo, full details, seller email, and a working **Message Seller** form.
- Messages save to Supabase. Optional EmailJS notifications send the seller an email.

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

## Seller email notifications

Messages always save first. Email is an optional best-effort step through EmailJS.

1. Create an EmailJS account and connect the Gmail account that should send the mail.
2. In **Account → Security**, enable non-browser API calls and create the private key.
3. Create a template with:
   - **To Email:** `{{to_email}}`
   - **Reply-To:** `{{reply_to}}`
   - **From Name:** `{{from_name}}`
   - **Subject:** `New message about {{listing_title}}`
   - **Body:** use `{{buyer_name}}`, `{{buyer_email}}`, `{{listing_title}}`,
     `{{listing_url}}`, and `{{buyer_message}}`.
4. Add the service ID, template ID, public key, and private key to `.env.local` and Vercel:

```bash
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=
EMAILJS_PRIVATE_KEY=
```

If these are missing, the app skips email and still confirms the message was saved. The demo
listings use a non-deliverable `@themarket.test` seller address, so test email with a listing
you create using a real inbox.

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
- `components/message-seller.tsx` inserts the buyer message, then calls the seller email route.
- `app/api/notify-seller/route.ts` sends the optional EmailJS notification.
- `lib/listings.ts` holds categories, validation, parsing, and formatting.
- `lib/images.ts` holds photo type and size rules.
- `supabase/schema.sql` creates `listings` and `messages`.
- `supabase/storage.sql` creates the public photo bucket.

There is no login. The listing and message forms are open to the public, with database checks on every field.

## License

MIT © Cedrick Alfredo Catimbang
