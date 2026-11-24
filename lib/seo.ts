import { business, type Service } from "./site";

export const siteConfig = {
  name: "Nail Studio",
  url: "https://nailstudiopro.com",
  description:
    "Nail Studio offers a range of services for a relaxing manicure and pedicure experience in Gadsden, Alabama. Our capable team is here to cater to your needs.",
  ogImage: "/Images/contact/1.webp",
  twitterHandle: "",
} as const;

export function generateLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    "@id": `${siteConfig.url}#organization`,
    name: business.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/Images/logo/logo.jpg`,
    image: `${siteConfig.url}/Images/contact/1.webp`,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postal,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.9943662,
      longitude: -86.0077295,
    },
    hasMap: business.mapsUrl,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [],
    areaServed: {
      "@type": "City",
      name: "Gadsden",
      containedInPlace: {
        "@type": "State",
        name: "Alabama",
        containedInPlace: {
          "@type": "Country",
          name: "United States",
        },
      },
    },
  };
}

export function generateWebSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateWebPageSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}#webpage`,
    url: siteConfig.url,
    name: "Nail Studio — Manicure, Pedicure & Nail Art in Gadsden, AL",
    description: siteConfig.description,
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    about: {
      "@id": `${siteConfig.url}#organization`,
    },
    mainEntity: {
      "@id": `${siteConfig.url}#organization`,
    },
    breadcrumb: {
      "@id": `${siteConfig.url}#breadcrumb`,
    },
  };
}

export function generateBreadcrumbSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };
}

export function generateServiceSchema(service: Service): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}#service-${service.slug}`,
    name: service.title,
    description: service.copy,
    provider: {
      "@id": `${siteConfig.url}#organization`,
    },
    serviceType: service.title,
    areaServed: {
      "@type": "City",
      name: "Gadsden",
      containedInPlace: {
        "@type": "State",
        name: "Alabama",
      },
    },
    image: `${siteConfig.url}${service.image}`,
  };
}

export function generateAggregateRatingSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "9",
    bestRating: "5",
    worstRating: "1",
  };
}

export function generateReviewSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: "Customer",
    },
    datePublished: new Date().toISOString().split("T")[0],
    reviewBody: "Great service and friendly staff.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: {
      "@id": `${siteConfig.url}#organization`,
    },
  };
}

export function combineSchemas(...schemas: object[]): object {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}