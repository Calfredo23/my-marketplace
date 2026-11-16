import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@/components/icons";
import { MessageSeller } from "@/components/message-seller";
import { Photo } from "@/components/photo";
import { SetupNotice } from "@/components/setup-notice";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  formatListedAt,
  formatPrice,
  initialsFromEmail,
  parseListing,
} from "@/lib/listings";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type ListingPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ListingPage({ params }: ListingPageProps) {
  const { id } = await params;
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return (
      <div className="site-shell">
        <SiteHeader />
        <main className="site-main container form-page">
          <SetupNotice />
        </main>
        <SiteFooter />
      </div>
    );
  }

  const { data, error } = await supabase
    .from("listings")
    .select("id,title,description,price,email,category,image_url,created_at")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Supabase listing fetch failed:", error.message);
  }

  const listing = parseListing(data);
  if (!listing) {
    notFound();
  }

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main container detail-page">
        <Link href="/" className="back-link">
          <ArrowLeftIcon />
          Back to listings
        </Link>

        <div className="detail-layout">
          <div className="detail-main">
            <div className="detail-photo">
              <Photo
                src={listing.imageUrl}
                alt={listing.title}
                data-testid="listing-detail-image"
                loading="eager"
              />
            </div>
            <div className="detail-copy">
              <h1>{listing.title}</h1>
              <p className="detail-price">{formatPrice(listing.price)}</p>
              <p className="detail-description">{listing.description}</p>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="seller-card">
              <div className="seller-avatar">
                {initialsFromEmail(listing.email)}
              </div>
              <div className="seller-meta">
                <p className="seller-label">Seller</p>
                <a href={`mailto:${listing.email}`} className="seller-email">
                  {listing.email}
                </a>
              </div>
            </div>
            <div className="detail-facts">
              <div className="detail-fact">
                <span>Category</span>
                <strong>{listing.category}</strong>
              </div>
              <div className="detail-fact">
                <span>Listed</span>
                <strong>{formatListedAt(listing.createdAt)}</strong>
              </div>
            </div>
            <MessageSeller listingId={listing.id} />
            <p className="safety-note">
              Meet in a public place and check the item before paying.
            </p>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
