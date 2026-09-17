/**
 * Essence Hair and Makeup Studio - SEO Structured Data (JSON-LD) Generators
 * 
 * Strict local schema for Dimapur, Nagaland local SEO.
 * Does not invent reviews, fake ratings, or unverified facts.
 */

import { siteConfig } from "../config/siteConfig";
import { ServiceItem } from "../data/servicesData";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon", "LocalBusiness"],
    "name": siteConfig.brand.name,
    "description": siteConfig.brand.shortDescription,
    "url": siteConfig.meta.siteUrl,
    "image": siteConfig.meta.ogImage,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.location.street,
      "addressLocality": siteConfig.location.city,
      "addressRegion": siteConfig.location.state,
      "postalCode": siteConfig.location.postalCodePlaceholder,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.9080",
      "longitude": "93.7214"
    },
    "areaServed": [
      { "@type": "City", "name": "Dimapur" },
      { "@type": "City", "name": "Chümoukedima" },
      { "@type": "AdministrativeArea", "name": "Nagaland" }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "18:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beauty & Hair Services",
      "itemListElement": [
        { "@type": "OfferCatalog", "name": "Hair Services" },
        { "@type": "OfferCatalog", "name": "Nail Services" },
        { "@type": "OfferCatalog", "name": "Skin Services" },
        { "@type": "OfferCatalog", "name": "Lash Services" },
        { "@type": "OfferCatalog", "name": "Brow Services" }
      ]
    }
  };
}

export function generateServiceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.shortDescription,
    "provider": {
      "@type": "BeautySalon",
      "name": siteConfig.brand.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.location.street,
        "addressLocality": siteConfig.location.city,
        "addressRegion": siteConfig.location.state,
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dimapur"
    },
    "serviceType": service.categoryName,
    "url": `${siteConfig.meta.siteUrl}/services/${service.slug}`
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteConfig.meta.siteUrl}${crumb.url}`
    }))
  };
}
