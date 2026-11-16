# BRIEF — The Market

## L0

- What: Test 3 mini-marketplace. Next.js App Router + Supabase Postgres/Storage + Vercel.
- Entry: `app/page.tsx`; sell flow in `components/sell-form.tsx`; detail in
  `app/listing/[id]/page.tsx`; messages in `components/message-seller.tsx`.
- Run: `npm run dev` on port 3000. E2E server uses 3213.
- Verify: `npm run verify`; full E2E `npm run test:e2e` (Supabase tests need `.env.local`).
- Must not edit: `.env*`, `node_modules`, `.next`.
- Data: `public.listings`, `public.messages`, storage bucket `listing-images`.
- Setup: `supabase/schema.sql`, `supabase/storage.sql`, `supabase/demo-listings.sql`.
- Cleanup: `supabase/cleanup-e2e.sql` after database E2E.
