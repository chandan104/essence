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
    <section className="py-24 sm:py-32 bg-[#060A14] text-white relative overflow-hidden border-b border-white/10">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-champagne-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          dark
          eyebrow="Visual Evidence"
          title="SEE THE ESSENCE TRANSFORMATION"
          subtitle="Explore interactive before-and-after results. Drag the slider to observe how targeted studio care transforms strand texture, eye architecture, and brow symmetry."
          className="mb-12 sm:mb-16"
        />

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {beforeAfterTransformations.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-luxury transition-all cursor-pointer backdrop-blur-md border ${
                  isActive
                    ? "bg-champagne-500 text-[#040711] border-champagne-400 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    : "bg-white/5 text-slate-300 border-white/10 hover:border-champagne-400/40 hover:text-white"
                }`}
              >
                {item.serviceTitle}
              </button>
            );
          })}
        </div>

        {/* Transformation Showcase Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#090E1C]/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          {/* Slider Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <BeforeAfterSlider
                beforeImage={currentItem.beforeImage}
                afterImage={currentItem.afterImage}
                beforeLabel={currentItem.beforeLabel}
                afterLabel={currentItem.afterLabel}
              />
            </div>
            <p className="text-[11px] text-center text-slate-400 mt-3 font-light">
              ↔ Drag or swipe horizontally to inspect the transformation
            </p>
          </div>

          {/* Details & Actions Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-champagne-400 font-semibold drop-shadow-[0_0_6px_rgba(212,175,55,0.3)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentItem.category.toUpperCase()} Studio</span>
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl text-white font-semibold leading-snug">
              {currentItem.serviceTitle}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {currentItem.description}
            </p>

            {/* Note regarding real photography replacement */}
            <div className="p-3.5 bg-white/[0.04] border border-white/10 rounded-xl text-[11px] text-slate-300 leading-relaxed">
              <span className="text-champagne-400 font-semibold">Client Portfolio Note:</span> Detailed before/after consultation pictures for your specific hair or brow type are available during your in-person visit at Church Road.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenBooking(currentItem.serviceSlug)}
                className="px-6 py-3 rounded-full bg-champagne-500 hover:bg-champagne-400 text-[#040711] text-xs font-bold uppercase tracking-widest text-center transition-all shadow-[0_0_16px_rgba(212,175,55,0.35)] cursor-pointer"
              >
                Book This Result
              </button>
              <a
                href={buildWhatsAppLink(`Hi Essence Studio, I'm interested in the ${currentItem.serviceTitle} transformation. Could you share pricing and consultation slots?`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackWhatsAppClick(currentItem.serviceTitle, "transformation_slider")}
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider text-center border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <MessageCircle className="w-4 h-4 text-champagne-400" />
                <span>WhatsApp Query</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                to={`/services/${currentItem.serviceSlug}`}
                className="inline-flex items-center gap-1.5 text-xs text-champagne-400 hover:text-white uppercase tracking-widest transition-colors"
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
