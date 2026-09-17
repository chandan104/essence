import React, { useEffect } from "react";
import { siteConfig } from "../../config/siteConfig";
import { analytics } from "../../utils/analytics";

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[] | null;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath = "",
  ogImage,
  jsonLd,
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.brand.name}`
    : `${siteConfig.brand.name} | Church Road, Dimapur, Nagaland`;

  const metaDescription = description || siteConfig.brand.shortDescription;
  const canonicalUrl = `${siteConfig.meta.siteUrl}${canonicalPath}`;
  const image = ogImage || siteConfig.meta.ogImage;

  useEffect(() => {
    // 1. Title
    document.title = fullTitle;

    // 2. Meta description
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement("meta");
      metaDescTag.setAttribute("name", "description");
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute("content", metaDescription);

    // 3. Keywords
    if (keywords) {
      let metaKwTag = document.querySelector('meta[name="keywords"]');
      if (!metaKwTag) {
        metaKwTag = document.createElement("meta");
        metaKwTag.setAttribute("name", "keywords");
        document.head.appendChild(metaKwTag);
      }
      metaKwTag.setAttribute("content", keywords);
    }

    // 4. OpenGraph tags
    const updateOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateOgTag("og:title", fullTitle);
    updateOgTag("og:description", metaDescription);
    updateOgTag("og:url", canonicalUrl);
    updateOgTag("og:image", image);

    // 5. Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 6. JSON-LD structured data injection
    const scriptId = "seo-json-ld-script";
    let existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // 7. Track page view
    analytics.trackPageView(canonicalPath || window.location.pathname, fullTitle);

    return () => {
      const script = document.getElementById(scriptId);
      if (script) script.remove();
    };
  }, [fullTitle, metaDescription, canonicalUrl, image, keywords, jsonLd, canonicalPath]);

  return null;
};
