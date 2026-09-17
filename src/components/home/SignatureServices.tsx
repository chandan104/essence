import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  Flame,
} from "lucide-react";
import { useServices } from "../../context/ServicesContext";
import { ServiceItem } from "../../data/servicesData";
import { SectionHeading } from "../common/SectionHeading";
import { analytics } from "../../utils/analytics";

interface SignatureServicesProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const SignatureServices: React.FC<SignatureServicesProps> = ({ onOpenBooking }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { services } = useServices();

  const featuredServices = services.filter((s) => s.featured);
  const featuredList: ServiceItem[] =
    featuredServices.length > 0 ? featuredServices : services.slice(0, 10);


  // Manual scroll controls for user convenience
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-studio-ivory relative overflow-hidden">
      {/* Subtle warm ambient backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            align="left"
            eyebrow="Constantly Moving Showcase"
            title="SIGNATURE EXPERIENCES IN MOTION"
            subtitle="Explore our most sought-after studio treatments gliding across our Church Road floor. Hover over any card to pause and inspect."
            className="max-w-2xl"
          />

          {/* Interactive Play/Pause & Arrow Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-3.5 py-2 bg-studio-cream border border-studio-border text-xs font-semibold uppercase tracking-luxury text-studio-espresso hover:bg-champagne-100 transition-colors flex items-center gap-1.5 rounded-full shadow-sm"
              title={isPaused ? "Resume auto-movement" : "Pause auto-movement"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-champagne-700 fill-champagne-700" />
                  <span>Resume Motion</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-champagne-700 fill-champagne-700" />
                  <span>Pause Motion</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleScrollLeft}
                className="w-9 h-9 rounded-full bg-white border border-studio-border hover:border-champagne-500 hover:text-champagne-700 text-studio-espresso flex items-center justify-center transition-colors shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleScrollRight}
                className="w-9 h-9 rounded-full bg-white border border-studio-border hover:border-champagne-500 hover:text-champagne-700 text-studio-espresso flex items-center justify-center transition-colors shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUOUS AUTO-MOVING CARDS TRACK (Matching user's reference image) */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar relative py-4 select-none"
      >
        {/* Infinite conveyor belt row */}
        <div
          className={`flex items-center gap-6 px-4 sm:px-8 ${
            isPaused ? "marquee-paused" : "animate-marquee-slow"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Duplicate list twice to create seamless continuous looping without jumps */}
          {[...featuredList, ...featuredList].map((service, idx) => (
            <div
              key={`${service.id}-${idx}`}
              className="glow-card group relative flex-shrink-0 w-[280px] sm:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden bg-studio-espresso border border-studio-border/90 shadow-elevated transition-all duration-500 flex flex-col justify-between"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover img-editorial opacity-85 group-hover:opacity-95"
                  loading="lazy"
                />
                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-espresso via-studio-espresso/45 to-transparent" />
                <div className="absolute inset-0 bg-studio-dark/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Card Top: Category Badge (Matching reference image's 'RC Car' badge) */}
              <div className="relative z-10 p-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-studio-espresso/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-luxury text-champagne-300 flex items-center gap-1.5 shadow-sm">
                  <Flame className="w-3 h-3 text-champagne-400" />
                  <span>{service.categoryName}</span>
                </span>

                <span className="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-[10px] uppercase font-bold text-white/90">
                  Popular
                </span>
              </div>

              {/* Card Bottom: Content, Pricing, & Action Buttons */}
              <div className="relative z-10 p-5 pt-0 space-y-3">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-studio-ivory font-medium line-clamp-1 group-hover:text-champagne-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-champagne-100/80 line-clamp-2 mt-1 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Pricing & Pill CTA Row (Matching reference image's price & purple pill) */}
                <div className="pt-2 border-t border-white/15 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-champagne-300 block font-semibold">
                      Starting From
                    </span>
                    <span className="text-xs font-bold text-white">
                      ₹[PRICE] / Consult
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Link
                      to={`/services/${service.slug}`}
                      className="px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-studio-ivory uppercase tracking-wider transition-colors"
                      title="View full service guide"
                    >
                      Info
                    </Link>

                    <button
                      onClick={() => {
                        analytics.trackBookingStart(service.name);
                        onOpenBooking(service.id);
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-bold uppercase tracking-luxury transition-all shadow-md flex items-center gap-1 active:scale-95"
                    >
                      <Sparkles className="w-3 h-3 text-studio-espresso" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-strip with navigation link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-studio-taupe">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live Studio Schedule • Church Road, Dimapur</span>
        </div>

        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 font-semibold text-studio-espresso hover:text-champagne-600 uppercase tracking-luxury"
        >
          <span>Explore All 24+ Services in Full Menu</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
