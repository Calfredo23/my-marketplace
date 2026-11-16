import Link from "next/link";
import { Photo } from "@/components/photo";
import {
  formatListedAt,
  formatPrice,
  listingPath,
  type Listing,
} from "@/lib/listings";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="listing-card" data-testid="listing-card">
      <Link
        href={listingPath(listing.id)}
        className="listing-image-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Photo
          src={listing.imageUrl}
          alt={listing.title}
          className="listing-image"
          loading="lazy"
        />
      </Link>
      <div className="listing-body">
        <p className="listing-price" data-testid="listing-price">
          {formatPrice(listing.price)}
        </p>
        <Link
          href={listingPath(listing.id)}
          className="listing-title"
          data-testid="listing-title"
        >
          {listing.title}
        </Link>
        <div className="listing-meta">
          <span className="category-chip">{listing.category}</span>
          <span className="listing-time">
            {formatListedAt(listing.createdAt)}
          </span>
        </div>
      </div>
    </article>
  );
}
