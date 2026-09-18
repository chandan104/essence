import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowDown, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { BorderBeam } from "../ui/border-beam";
import { Link001 } from "../ui/skiper-ui/skiper40";
import { LiquidGlassButton } from "../ui/liquid-glass-button";

interface HeroProps {
  onOpenBooking: () => void;
}

// Stagger container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

// Luxury ease reveal
const itemFadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-studio-espresso text-studio-ivory -mt-20 sm:-mt-24 pt-24 pb-16">
      {/* Editorial Background Image with Cinematic Overlay & Atmospheric Video */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1.03, opacity: 0.32 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
          alt="Essence Studio Dimapur"
          className="w-full h-full object-cover object-center"
        />

        {/* Atmospheric Looping Video Layer (from Neural Pathway & motionsites) */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen pointer-events-none select-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4"
        />

        {/* Atmospheric Veil Lighting */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(140% 60% at 50% 40%, rgba(18, 14, 11, 0.45) 0%, rgba(18, 14, 11, 0.20) 50%, transparent 100%),
              linear-gradient(180deg, rgba(18, 14, 11, 0.15) 0%, rgba(18, 14, 11, 0.65) 65%, rgba(18, 14, 11, 0.95) 100%)
            `,
          }}
        />
      </motion.div>

      {/* Hero Content Container with Framer Motion Stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Top Badges: Welcoming Live Status with VengeanceUI BorderBeam */}
        <motion.div
          variants={itemFadeUp}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
        >
          {/* Welcoming Live Badge with BorderBeam */}
          <div className="relative overflow-hidden inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-950/80 border border-emerald-500/40 rounded-full text-emerald-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
            <BorderBeam size={80} duration={8} colorFrom="#34D399" colorTo="#059669" borderWidth={1} />
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open in Dimapur • Welcoming Walk-ins & Bookings</span>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-champagne-300 text-xs font-medium tracking-luxury uppercase">
            <MapPin className="w-3.5 h-3.5 text-champagne-400" />
            <span>Church Road, Dimapur</span>
          </div>
        </motion.div>

        {/* Main Headline with Typographic Reveal Wipe */}
        <motion.h1
          initial={{ clipPath: "inset(-0.78em 0 100% 0)", opacity: 0, y: 16 }}
          animate={{ clipPath: "inset(-0.78em 0 -0.78em 0)", opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] as const, delay: 0.25 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.08] text-studio-ivory"
        >
          <span className="block">YOUR BEAUTY.</span>
          <span className="block italic text-champagne-300">YOUR SIGNATURE.</span>
        </motion.h1>

        {/* Subheadline Categories with subtle gold pill containers */}
        <motion.div
          variants={itemFadeUp}
          className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm tracking-luxury uppercase text-champagne-200/90 font-medium"
        >
          {["Hair", "Skin", "Nails", "Lashes", "Brows"].map((discipline) => (
            <motion.span
              key={discipline}
              whileHover={{ scale: 1.08, borderColor: "#C5A880", backgroundColor: "rgba(255,255,255,0.12)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full cursor-default transition-colors"
            >
              {discipline}
            </motion.span>
          ))}
        </motion.div>

        {/* Supporting Copy */}
        <motion.p
          variants={itemFadeUp}
          className="mt-4 sm:mt-5 text-sm sm:text-base text-champagne-100/85 max-w-xl font-light leading-relaxed"
        >
          A welcoming, modern luxury beauty studio in the heart of Church Road, Dimapur. Experience personalized hair transformations, glowing skin rituals, and artistic finishing touches.
        </motion.p>

        {/* Social Proof / Warm Trust Badge */}
        <motion.div
          variants={itemFadeUp}
          className="mt-6 flex items-center justify-center gap-2 text-xs text-champagne-300/90"
        >
          <div className="flex items-center gap-0.5 text-champagne-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-champagne-400 text-champagne-400" />
            ))}
          </div>
          <span className="font-semibold text-white">4.9/5 Experience</span>
          <span className="text-champagne-500">•</span>
          <span className="text-champagne-200/70">Trusted by Women across Nagaland</span>
        </motion.div>

        {/* Interactive Liquid Glass CTAs */}
        <motion.div
          variants={itemFadeUp}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <LiquidGlassButton
            onClick={onOpenBooking}
            size="lg"
            variant="champagne"
            className="w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4 text-champagne-300" />
            <span>Book An Appointment</span>
          </LiquidGlassButton>

          {/* Skiper40 Animated Link inside Frosted Glass Pill */}
          <div className="px-6 py-3.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-colors">
            <Link001
              href="/services"
              className="text-xs font-semibold uppercase tracking-widest text-champagne-200 hover:text-champagne-100"
            >
              Explore All Services
            </Link001>
          </div>
        </motion.div>

        {/* Subtle Scroll Cue with smooth hover bounce */}
        <motion.a
          variants={itemFadeUp}
          href="#brand-intro"
          whileHover={{ y: 3 }}
          className="mt-12 sm:mt-14 text-champagne-200/60 hover:text-champagne-300 transition-colors flex flex-col items-center gap-2 group cursor-pointer"
          aria-label="Scroll down to brand introduction"
        >
          <span className="text-[10px] tracking-widest uppercase">Discover Essence</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
};
