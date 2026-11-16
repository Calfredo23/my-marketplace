import Link from "next/link";
import { PlusIcon, SearchIcon, TagIcon } from "@/components/icons";

export function SiteHeader({ query = "" }: { query?: string }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="The Market home">
          <span className="brand-mark">
            <TagIcon width={20} height={20} />
          </span>
          <span className="brand-name">
            the market
            <span className="brand-dot">.</span>
          </span>
        </Link>

        <form action="/" className="search-form" role="search">
          <SearchIcon className="search-icon" />
          <input
            type="search"
            name="q"
            data-testid="search-input"
            defaultValue={query}
            placeholder="Search listings"
            aria-label="Search listings"
            className="search-input"
          />
          <button type="submit" className="search-submit">
            Search
          </button>
        </form>

        <Link
          href="/sell"
          className="button button-primary header-sell"
          aria-label="Sell something"
        >
          <PlusIcon />
          <span className="header-sell-long">Sell something</span>
          <span className="header-sell-short">Sell</span>
        </Link>
      </div>
    </header>
  );
}
