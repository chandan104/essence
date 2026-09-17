import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { GalleryItem } from "../../data/galleryData";
import { buildWhatsAppLink } from "../../config/siteConfig";
import { analytics } from "../../utils/analytics";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  const whatsappMessage = `Hi Essence Studio, I love this look from your gallery: "${currentItem.title}". Could you please share availability and pricing for a similar service?`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-studio-dark/95 backdrop-blur-xl animate-fadeIn p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2 text-studio-ivory/80 hover:text-champagne-300 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-7 h-7" />
      </button>

      {/* Navigation - Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 text-studio-ivory/70 hover:text-champagne-300 hover:bg-studio-espresso/60 rounded-full transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Navigation - Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 text-studio-ivory/70 hover:text-champagne-300 hover:bg-studio-espresso/60 rounded-full transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Content Container */}
      <div
        className="relative max-w-4xl max-h-[88vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[70vh] overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto object-contain mx-auto shadow-2xl border border-studio-ivory/10"
          />
        </div>

        {/* Caption & Booking CTA */}
        <div className="mt-4 text-center max-w-xl px-4">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-400">
            {currentItem.categoryLabel} • {currentIndex + 1} of {items.length}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-studio-ivory mt-1">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-champagne-100/70 mt-1">
            {currentItem.caption}
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackWhatsAppClick(currentItem.title, "lightbox")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-luxury transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire About This Look</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
