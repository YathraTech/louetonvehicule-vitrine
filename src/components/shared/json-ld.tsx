import { SITE } from "@/lib/constants";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Avenue des Transports",
      addressLocality: "Paris",
      postalCode: "75012",
      addressCountry: "FR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
