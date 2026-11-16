import { CategoryTabs } from "@/components/category-tabs";
import { ListingsView } from "@/components/listings-view";
import { SetupNotice } from "@/components/setup-notice";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  browseHref,
  categoryFromParam,
  LISTING_LIMIT,
  parseListing,
  searchFromParam,
  type Listing,
} from "@/lib/listings";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type HomeProps = {
  searchParams: Promise<{ category?: string; q?: string }>;
};

export default async function HomePage({ searchParams }: HomeProps) {
  const params = await searchParams;
  const activeCategory = categoryFromParam(params.category);
  const query = searchFromParam(params.q);
  const supabase = getSupabaseServerClient();

  const intro = (
    <section className="page-intro">
      <h1>
        {query
          ? `Results for “${query}”`
          : activeCategory
            ? activeCategory
            : "Find something good."}
      </h1>
      <p className="page-copy">
        Buy from people nearby, sell what you no longer need, and keep good
        things moving.
      </p>
    </section>
  );

  if (!supabase) {
    return (
      <div className="site-shell">
        <SiteHeader />
        <main className="site-main container">
          {intro}
          <SetupNotice />
        </main>
        <SiteFooter />
      </div>
    );
  }

  let request = supabase
    .from("listings")
    .select("id,title,description,price,email,category,image_url,created_at")
    .order("created_at", { ascending: false })
    .limit(LISTING_LIMIT);

  if (activeCategory) {
    request = request.eq("category", activeCategory);
  }
  if (query) {
    const safeQuery = query.replace(/[%_,()]/g, " ").trim();
    if (safeQuery) {
      request = request.or(
        `title.ilike.%${safeQuery}%,description.ilike.%${safeQuery}%`,
      );
    }
  }

  const { data, error } = await request;
  if (error) {
    console.error("Supabase listings fetch failed:", error.message);
  }

  const listings = (data ?? [])
    .map(parseListing)
    .filter((listing): listing is Listing => listing !== null);

  return (
    <div className="site-shell">
      <SiteHeader query={query} />
      <main className="site-main container">
        {intro}
        <CategoryTabs active={activeCategory} query={query} />
        {error ? (
          <div className="error-panel" role="alert">
            <p className="error-panel-title">The marketplace could not load.</p>
            <p className="error-panel-copy">
              Check the Supabase tables and policies, then refresh.
            </p>
          </div>
        ) : (
          <ListingsView
            listings={listings}
            resetHref={browseHref(null, "")}
            filtered={Boolean(activeCategory || query)}
          />
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
