import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { beforeAfterTransformations } from "../../data/galleryData";
import { BeforeAfterSlider } from "../common/BeforeAfterSlider";
import { SectionHeading } from "../common/SectionHeading";
import { buildWhatsAppLink } from "../../config/siteConfig";
import { analytics } from "../../utils/analytics";

interface TransformationSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = beforeAfterTransformations[activeIndex];

  return (
    <section className="py-20 sm:py-28 bg-studio-espresso text-studio-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Visual Evidence"
          title="SEE THE ESSENCE TRANSFORMATION"
          subtitle="Explore interactive before-and-after results. Drag the slider to observe how targeted studio care transforms strand texture, eye architecture, and brow symmetry."
          className="mb-12 sm:mb-16"
        />

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {beforeAfterTransformations.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-luxury transition-all border ${
                  isActive
                    ? "bg-champagne-500 text-studio-espresso border-champagne-500 shadow-md"
                    : "bg-white/5 text-studio-ivory/70 border-white/10 hover:border-champagne-400 hover:text-studio-ivory"
                }`}
              >
                {item.serviceTitle}
              </button>
            );
          })}
        </div>

        {/* Transformation Showcase Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 p-4 sm:p-8">
          {/* Slider Column */}
          <div className="lg:col-span-7">
            <BeforeAfterSlider
              beforeImage={currentItem.beforeImage}
              afterImage={currentItem.afterImage}
              beforeLabel={currentItem.beforeLabel}
              afterLabel={currentItem.afterLabel}
            />
            <p className="text-[11px] text-center text-champagne-300/70 mt-3">
              ↔ Drag or swipe horizontally to inspect the transformation
            </p>
          </div>

          {/* Details & Actions Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-champagne-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentItem.category.toUpperCase()} Studio</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-studio-ivory font-medium">
              {currentItem.serviceTitle}
            </h3>

            <p className="text-xs sm:text-sm text-champagne-100/80 leading-relaxed">
              {currentItem.description}
            </p>

            {/* Note regarding real photography replacement */}
            <div className="p-3 bg-white/5 border border-white/10 text-[11px] text-champagne-200/60 leading-relaxed">
              <span className="text-champagne-300 font-semibold">Client Portfolio Note:</span> Our studio displays authentic client transformations. Detailed before/after consultation pictures for your specific hair or brow type are available during your in-person visit at Church Road.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenBooking(currentItem.serviceSlug)}
                className="px-5 py-3 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-luxury text-center transition-colors"
              >
                Book This Result
              </button>
              <a
                href={buildWhatsAppLink(`Hi Essence Studio, I'm interested in the ${currentItem.serviceTitle} transformation. Could you share pricing and consultation slots?`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackWhatsAppClick(currentItem.serviceTitle, "transformation_slider")}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-studio-ivory text-xs font-semibold uppercase tracking-luxury text-center border border-white/20 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-champagne-400" />
                <span>WhatsApp Query</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                to={`/services/${currentItem.serviceSlug}`}
                className="inline-flex items-center gap-1.5 text-xs text-champagne-400 hover:text-champagne-300 uppercase tracking-widest"
              >
                <span>Read in-depth service guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
