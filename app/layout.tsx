import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Best Art Café in Vadodara`,
  description: `${siteConfig.name} — Vadodara's premier art café. Indulge in artfully crafted coffees, signature pasta, craft sandwiches, and desserts in an enchanting black & white baroque setting opposite Galleria Mall, Akota.`,
  keywords: ["Tulip Touch Cafe", "Art Cafe Vadodara", "Best Cafe in Akota", "Pasta Vadodara", "Coffee Vadodara", "Vadodara Cafes"],
  openGraph: {
    title: `${siteConfig.name} | Best Art Café in Vadodara`,
    description: "Where Art Meets Flavour. Rated 4.5★ on Google with 2,040+ reviews.",
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": siteConfig.name,
    "image": "https://tuliptouchcafe.com/images/hero.png",
    "telephone": siteConfig.phone,
    "priceRange": siteConfig.priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.area,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.pincode,
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.rating,
      "reviewCount": siteConfig.reviewsCount
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "11:00",
      "closes": "23:00"
    },
    "servesCuisine": ["Coffee", "Artisan Pasta", "Sandwiches", "Desserts", "Continental"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
