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
    <div className="py-16 sm:py-24 bg-[#040711] text-white animate-fadeIn relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-champagne-500/5 blur-[140px] pointer-events-none" />

      <SeoHead
        title="Visual Portfolio & Hair Transformations | Essence Studio Dimapur"
        description="Explore the curated visual gallery of hair transformations, nail extensions, lash mapping, and skin radiance created at Essence Hair and Makeup Studio, Church Road, Dimapur."
        keywords="salon gallery dimapur, hair transformations nagaland, lash pictures dimapur, nail art gallery dimapur"
        canonicalPath="/gallery"
        jsonLd={breadcrumbsSchema}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-champagne-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-champagne-400 font-mono">
              Curated Transformations
            </span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-champagne-400" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight">
            VISUAL PORTFOLIO
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
            Real artistry from our styling chairs on Church Road, Dimapur. Browse through our finishes across hair, nails, skin, lashes, and brows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  analytics.trackGalleryView(cat.id);
                }}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-luxury transition-all rounded-full border ${
                  isActive
                    ? "bg-champagne-500 text-black border-champagne-500 font-bold shadow-[0_4px_16px_rgba(200,169,126,0.3)]"
                    : "bg-white/5 text-slate-300 border-white/10 hover:border-champagne-400/40 hover:text-white backdrop-blur-md"
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
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#090E1C] border border-white/10 aspect-[4/5] shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-champagne-400/40 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040711]/95 via-[#040711]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/15">
                    <Maximize2 className="w-4 h-4 text-champagne-300" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-champagne-400 block mb-1 font-mono">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-heading text-xl text-white font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase font-semibold text-champagne-400">
                    <span>Click to inspect →</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#090E1C]/80 backdrop-blur-xl border border-white/10 text-center max-w-3xl mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="w-12 h-12 rounded-xl bg-champagne-500/10 border border-champagne-500/20 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-champagne-400" />
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl text-white font-semibold tracking-tight">
            Have a specific style in mind?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed font-light">
            Send us your inspiration picture on WhatsApp. Our master stylists will confirm feasibility, recommended technique, and appointment duration.
          </p>
          <div className="mt-8">
            <a
              href={buildWhatsAppLink("Hi Essence Studio, I have an inspiration photo from your gallery/Instagram that I'd like to consult on.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-champagne-500 hover:bg-champagne-400 text-black text-xs font-bold uppercase tracking-widest shadow-[0_4px_16px_rgba(200,169,126,0.3)] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-black" />
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
