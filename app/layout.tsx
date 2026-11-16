import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-marketplace-calfredo.vercel.app";
const title = "The Market — buy, sell, pass it on";
const description =
  "A small marketplace built with Next.js, React, and Supabase. List something, browse by category, and message the seller.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "The Market",
  authors: [
    { name: "Cedrick Alfredo Catimbang", url: "https://calfredo.is-pinoy.dev" },
  ],
  creator: "Cedrick Alfredo Catimbang",
  keywords: [
    "marketplace",
    "classifieds",
    "React",
    "Next.js",
    "Supabase",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "The Market",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ff385c",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
