import Link from "next/link";
import {
  BooksIcon,
  ClothingIcon,
  ElectronicsIcon,
  FurnitureIcon,
  GridIcon,
  OtherIcon,
  SportsIcon,
} from "@/components/icons";
import { browseHref, CATEGORIES, type Category } from "@/lib/listings";

function CategoryIcon({ category }: { category: Category | null }) {
  switch (category) {
    case "Electronics":
      return <ElectronicsIcon className="category-icon" />;
    case "Furniture":
      return <FurnitureIcon className="category-icon" />;
    case "Clothing":
      return <ClothingIcon className="category-icon" />;
    case "Books":
      return <BooksIcon className="category-icon" />;
    case "Sports":
      return <SportsIcon className="category-icon" />;
    case "Other":
      return <OtherIcon className="category-icon" />;
    default:
      return <GridIcon className="category-icon" />;
  }
}

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
        <CategoryIcon category={null} />
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
            <CategoryIcon category={category} />
            {category}
          </Link>
        );
      })}
    </nav>
  );
}
