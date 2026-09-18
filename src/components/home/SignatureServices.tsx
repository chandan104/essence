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
import { motion } from "framer-motion";
import { BorderBeam } from "../ui/border-beam";
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
    <section className="py-24 sm:py-32 bg-[#040711] text-white relative overflow-hidden border-b border-white/10">
      {/* Subtle warm ambient backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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
              className="px-4 py-2 bg-white/5 border border-white/15 text-xs font-semibold uppercase tracking-luxury text-slate-200 hover:bg-white/10 hover:text-white transition-colors flex items-center gap-2 rounded-full shadow-sm cursor-pointer backdrop-blur-md"
              title={isPaused ? "Resume auto-movement" : "Pause auto-movement"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-champagne-400 fill-champagne-400" />
                  <span>Resume Motion</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-champagne-400 fill-champagne-400" />
                  <span>Pause Motion</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleScrollLeft}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:border-champagne-400/50 hover:text-champagne-300 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleScrollRight}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 hover:border-champagne-400/50 hover:text-champagne-300 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-sm"
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
            <motion.div
              key={`${service.id}-${idx}`}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glow-card group relative flex-shrink-0 w-[290px] sm:w-[330px] aspect-[3/4] rounded-3xl overflow-hidden bg-[#090E1C] border border-white/10 hover:border-champagne-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500 flex flex-col justify-between"
            >
              {/* VengeanceUI BorderBeam on Card */}
              <BorderBeam size={180} duration={12} colorFrom="#E9DCBF" colorTo="#B8966C" borderWidth={1.2} />

              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover img-editorial opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-[#040711]/55 to-transparent" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Card Top: Category Badge */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-[#040711]/85 backdrop-blur-xl border border-white/15 text-[11px] font-semibold uppercase tracking-luxury text-champagne-300 flex items-center gap-1.5 shadow-md">
                  <Flame className="w-3.5 h-3.5 text-champagne-400" />
                  <span>{service.categoryName}</span>
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl text-[10px] uppercase font-bold text-slate-200">
                  Popular
                </span>
              </div>

              {/* Card Bottom: Content, Pricing, & Action Buttons */}
              <div className="relative z-10 p-6 pt-0 space-y-3">
                <div>
                  <h3 className="font-sans text-xl sm:text-2xl text-white font-semibold line-clamp-1 group-hover:text-champagne-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-300/85 line-clamp-2 mt-1 leading-relaxed font-light">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Pricing & Pill CTA Row */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-champagne-400/90 block font-semibold">
                      Starting From
                    </span>
                    <span className="text-sm font-bold text-white line-clamp-1">
                      {service.pricePlaceholder}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white uppercase tracking-wider transition-colors backdrop-blur-md"
                      title="View full service guide"
                    >
                      Info
                    </Link>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        analytics.trackBookingStart(service.name);
                        onOpenBooking(service.id);
                      }}
                      className="px-4 py-1.5 rounded-full bg-champagne-500 hover:bg-champagne-400 text-[#040711] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-[0_0_16px_rgba(212,175,55,0.4)] cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#040711]" />
                      <span>Book</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
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
