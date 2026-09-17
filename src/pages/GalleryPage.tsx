import React, { useState } from "react";
import { Sparkles, Maximize2, MessageCircle } from "lucide-react";
import { galleryItems, GalleryItem } from "../data/galleryData";
import { Lightbox } from "../components/common/Lightbox";
import { SeoHead } from "../components/common/SeoHead";
import { SectionHeading } from "../components/common/SectionHeading";
import { generateBreadcrumbSchema } from "../utils/seo";
import { buildWhatsAppLink } from "../config/siteConfig";
import { analytics } from "../utils/analytics";

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const filterCategories = [
    { id: "all", label: "All Works" },
    { id: "hair", label: "Hair" },
    { id: "nails", label: "Nails" },
    { id: "skin", label: "Skin" },
    { id: "lashes", label: "Lashes" },
    { id: "brows", label: "Brows" },
    { id: "makeup", label: "Makeup" },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const openLightboxForIndex = (indexInFiltered: number) => {
    // Find index in original galleryItems
    const originalItem = filteredItems[indexInFiltered];
    const originalIndex = galleryItems.findIndex((g) => g.id === originalItem.id);
    setCurrentImageIndex(originalIndex >= 0 ? originalIndex : 0);
    setLightboxOpen(true);
    analytics.trackGalleryView(originalItem.category);
  };

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Visual Portfolio", url: "/gallery" },
  ]);

  return (
    <div className="py-12 sm:py-16 bg-studio-ivory animate-fadeIn">
      <SeoHead
        title="Visual Portfolio & Hair Transformations | Essence Studio Dimapur"
        description="Explore the curated visual gallery of hair transformations, nail extensions, lash mapping, and skin radiance created at Essence Hair and Makeup Studio, Church Road, Dimapur."
        keywords="salon gallery dimapur, hair transformations nagaland, lash pictures dimapur, nail art gallery dimapur"
        canonicalPath="/gallery"
        jsonLd={breadcrumbsSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-champagne-500" />
            <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600">
              Curated Transformations
            </span>
            <span className="w-6 h-px bg-champagne-500" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-studio-espresso font-medium tracking-tight">
            VISUAL PORTFOLIO
          </h1>
          <p className="mt-4 text-sm sm:text-base text-studio-taupe leading-relaxed">
            Real artistry from our styling chairs on Church Road, Dimapur. Browse through our finishes across hair, nails, skin, lashes, and brows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  analytics.trackGalleryView(cat.id);
                }}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-luxury transition-all border ${
                  isActive
                    ? "bg-studio-espresso text-studio-ivory border-studio-espresso shadow-sm"
                    : "bg-white text-studio-charcoal border-studio-border hover:border-champagne-500"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry/Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightboxForIndex(idx)}
              className="group relative cursor-pointer overflow-hidden bg-studio-espresso border border-studio-border aspect-[4/5] shadow-subtle hover:shadow-elevated transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover img-editorial opacity-90 group-hover:opacity-100 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-studio-dark/90 via-studio-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 text-studio-ivory backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-champagne-400 block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-xl text-studio-ivory font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-champagne-100/80 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase font-semibold text-champagne-300">
                    <span>Click to inspect</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-16 p-8 bg-studio-cream/40 border border-studio-border text-center max-w-3xl mx-auto">
          <Sparkles className="w-6 h-6 text-champagne-600 mx-auto mb-3" />
          <h3 className="font-serif text-2xl text-studio-espresso font-medium">
            Have a specific style in mind?
          </h3>
          <p className="text-xs sm:text-sm text-studio-taupe mt-2 max-w-md mx-auto leading-relaxed">
            Send us your inspiration picture on WhatsApp. Our master stylists will confirm feasibility, recommended technique, and appointment duration.
          </p>
          <div className="mt-6">
            <a
              href={buildWhatsAppLink("Hi Essence Studio, I have an inspiration photo from your gallery/Instagram that I'd like to consult on.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-studio-espresso text-studio-ivory hover:bg-champagne-600 hover:text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-champagne-400" />
              <span>Share Inspiration via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        items={galleryItems}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setCurrentImageIndex(newIndex)}
      />
    </div>
  );
};
