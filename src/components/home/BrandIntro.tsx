import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link001 } from "../ui/skiper-ui/skiper40";
import { BorderBeam } from "../ui/border-beam";

export const BrandIntro: React.FC = () => {
  return (
    <section id="brand-intro" className="py-24 sm:py-32 bg-[#040711] text-white relative overflow-hidden">
      {/* Subtle ambient lighting orb */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-champagne-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text narrative with Framer Motion reveal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-champagne-400 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
              <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
              <span>The Essence Philosophy</span>
            </div>

            <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight">
              BEAUTY, <span className="italic text-champagne-300">REFINED.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-light">
              Essence Hair and Makeup Studio brings together modern hair, beauty, and finishing services under one roof on Church Road, Dimapur.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
              Whether you’re preparing for an important occasion, refreshing your everyday signature look, or simply taking time for yourself, Essence is designed around personalized consultations, contemporary techniques, and meticulous attention to detail.
            </p>

            <div className="pt-3">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-champagne-400/40 hover:bg-white/10 backdrop-blur-md transition-all">
                <Link001
                  href="/about"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-champagne-200 hover:text-white"
                >
                  Discover Essence
                </Link001>
              </div>
            </div>
          </motion.div>

          {/* Editorial Visual Composition with Framer Motion reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
              <BorderBeam size={200} duration={14} colorFrom="#E9DCBF" colorTo="#B8966C" borderWidth={1.5} />
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop"
                alt="Studio beauty detail"
                className="w-full h-full object-cover img-editorial"
                loading="lazy"
              />
            </div>
            {/* Dark glass accent badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#070C18]/90 border border-white/15 p-5 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[220px] hidden sm:block">
              <p className="font-sans text-lg font-semibold text-white">
                Church Road
              </p>
              <p className="text-[10px] tracking-widest uppercase text-champagne-400 font-medium mt-1">
                Central Dimapur Studio
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
