import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowDown, Sparkles, Star, Heart } from "lucide-react";
import { Button } from "../common/Button";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-studio-espresso text-studio-ivory -mt-20 sm:-mt-24 pt-24 pb-16">
      {/* Editorial Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
          alt="Essence Studio Dimapur"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Subtle Vignette & Warm Golden Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-espresso via-studio-espresso/60 to-studio-espresso/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.18)_0%,transparent_65%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badges: Welcoming Live Status & Location */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 animate-fadeIn">
          {/* Welcoming Live Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-950/70 border border-emerald-500/40 rounded-full text-emerald-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open in Dimapur • Welcoming Walk-ins & Bookings</span>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-champagne-300 text-xs font-medium tracking-luxury uppercase">
            <MapPin className="w-3.5 h-3.5 text-champagne-400" />
            <span>Church Road, Dimapur</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.08] text-studio-ivory">
          <span className="block">YOUR BEAUTY.</span>
          <span className="block italic text-champagne-300">YOUR SIGNATURE.</span>
        </h1>

        {/* Subheadline Categories with subtle gold pill containers */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm tracking-luxury uppercase text-champagne-200/90 font-medium">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Hair</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Skin</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Nails</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Lashes</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">Brows</span>
        </div>

        {/* Supporting Copy */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-champagne-100/80 max-w-xl font-light leading-relaxed">
          A welcoming, modern luxury beauty studio in the heart of Church Road, Dimapur. Experience personalized hair transformations, glowing skin rituals, and artistic finishing touches.
        </p>

        {/* Social Proof / Warm Trust Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-champagne-300/90">
          <div className="flex items-center gap-0.5 text-champagne-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-champagne-400 text-champagne-400" />
            ))}
          </div>
          <span className="font-semibold text-white">4.9/5 Experience</span>
          <span className="text-champagne-500">•</span>
          <span className="text-champagne-200/70">Trusted by Women across Nagaland</span>
        </div>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            variant="champagne"
            size="lg"
            onClick={onOpenBooking}
            icon={<Sparkles className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-elevated rounded-full"
          >
            Book An Appointment
          </Button>
          <Button
            to="/services"
            variant="darkOutline"
            size="lg"
            className="w-full sm:w-auto rounded-full"
          >
            Explore Services
          </Button>
        </div>

        {/* Subtle Scroll Cue */}
        <a
          href="#brand-intro"
          className="mt-12 sm:mt-14 text-champagne-200/60 hover:text-champagne-300 transition-colors flex flex-col items-center gap-2 group"
          aria-label="Scroll down to brand introduction"
        >
          <span className="text-[10px] tracking-widest uppercase">Discover Essence</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
