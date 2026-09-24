/**
 * Essence Hair and Makeup Studio - SEO Structured Data (JSON-LD) Generators
 * 
 * Production local schema for Church Road, Dimapur, Nagaland local SEO.
 * Fully compliant with Google Rich Results & Local Business guidelines.
 */

import { siteConfig } from "../config/siteConfig";
import { ServiceItem } from "../data/servicesData";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon", "LocalBusiness"],
    "@id": `${siteConfig.meta.siteUrl}/#localbusiness`,
    "name": siteConfig.brand.name,
    "alternateName": [
      "Essence Studio Dimapur",
      "Essence Hair and Makeup Studio Church Road",
      "Essence Beauty Parlour Dimapur"
    ],
    "description": "Premier luxury hair, nail, skin, eyelash, and brow beauty studio located on Church Road, Dimapur, Nagaland. Specializing in Hair Botox, Nanoplastia, sculpted nails, Hydra Facials, volume lashes, and microblading.",
    "url": siteConfig.meta.siteUrl,
    "image": [
      siteConfig.meta.ogImage,
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop"
    ],
    "telephone": siteConfig.contact.phoneNumber,
    "email": siteConfig.contact.email,
    "hasMap": siteConfig.location.googleMapsDirectionsUrl,
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
      "latitude": 25.9080,
      "longitude": 93.7214
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dimapur",
        "containedInPlace": { "@type": "AdministrativeArea", "name": "Nagaland" }
      },
      {
        "@type": "City",
        "name": "Chümoukedima",
        "containedInPlace": { "@type": "AdministrativeArea", "name": "Nagaland" }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Nagaland"
      }
    ],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
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
    "sameAs": [
      siteConfig.social.instagram,
      siteConfig.social.facebook
    ],
    "knowsAbout": [
      "Hair Botox Treatment Dimapur",
      "Nanoplastia Hair Treatment Nagaland",
      "Hair Colour and Balayage Church Road",
      "Hair Extensions Installation",
      "Hydra Facial and Skin Rejuvenation",
      "Gel and Acrylic Nail Extensions",
      "Classic and Volume Eyelash Extensions",
      "Microblading and Microshading Brows",
      "Bridal Hair and Makeup Artistry"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Essence Beauty & Hair Treatments Directory",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Hair Studio Services",
          "url": `${siteConfig.meta.siteUrl}/services/hair`
        },
        {
          "@type": "OfferCatalog",
          "name": "Nail Lounge Services",
          "url": `${siteConfig.meta.siteUrl}/services/nails`
        },
        {
          "@type": "OfferCatalog",
          "name": "Skin & Facials Services",
          "url": `${siteConfig.meta.siteUrl}/services/skin`
        },
        {
          "@type": "OfferCatalog",
          "name": "Lash Bar Services",
          "url": `${siteConfig.meta.siteUrl}/services/lashes`
        },
        {
          "@type": "OfferCatalog",
          "name": "Brow Studio Services",
          "url": `${siteConfig.meta.siteUrl}/services/brows`
        }
      ]
    }
  };
}

export function generateServiceSchema(service: ServiceItem) {
  const keywordsList = service.localKeywords && service.localKeywords.length > 0
    ? service.localKeywords.join(", ")
    : `${service.name} dimapur, ${service.name} nagaland, ${service.name} church road`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.meta.siteUrl}/services/${service.slug}#service`,
    "name": `${service.name} in Dimapur | Essence Studio`,
    "serviceType": service.categoryName,
    "description": service.fullDescription || service.shortDescription,
    "category": service.categoryName,
    "keywords": keywordsList,
    "provider": {
      "@type": "BeautySalon",
      "@id": `${siteConfig.meta.siteUrl}/#localbusiness`,
      "name": siteConfig.brand.name,
      "telephone": siteConfig.contact.phoneNumber,
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
        "latitude": 25.9080,
        "longitude": 93.7214
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Dimapur" },
      { "@type": "City", "name": "Chümoukedima" },
      { "@type": "AdministrativeArea", "name": "Nagaland" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "url": `${siteConfig.meta.siteUrl}/services/${service.slug}`
    },
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

export function generateCategorySchema(
  categoryName: string,
  categoryId: string,
  categoryDescription: string,
  services: ServiceItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryName} Salon Services in Dimapur, Nagaland | Essence Studio`,
    "description": categoryDescription,
    "url": `${siteConfig.meta.siteUrl}/services/${categoryId}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": services.length,
      "itemListElement": services.map((s, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": s.name,
        "url": `${siteConfig.meta.siteUrl}/services/${s.slug}`,
        "description": s.shortDescription
      }))
    }
  };
}

