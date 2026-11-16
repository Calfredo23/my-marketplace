import Link from "next/link";
import { browseHref, CATEGORIES, type Category } from "@/lib/listings";

export function CategoryTabs({
  active,
  query,
}: {
  active: Category | null;
  query: string;
}) {
  return (
    <nav className="category-tabs" aria-label="Listing categories">
      <Link
        href={browseHref(null, query)}
        className={active ? "category-tab" : "category-tab category-tab-active"}
        aria-current={active ? undefined : "page"}
      >
        All
      </Link>
      {CATEGORIES.map((category) => {
        const isActive = active === category;
        return (
          <Link
            key={category}
            href={browseHref(category, query)}
            className={
              isActive ? "category-tab category-tab-active" : "category-tab"
            }
            aria-current={isActive ? "page" : undefined}
          >
            {category}
          </Link>
        );
      })}
    </nav>
  );
}
