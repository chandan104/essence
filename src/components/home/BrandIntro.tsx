import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link001 } from "../ui/skiper-ui/skiper40";

export const BrandIntro: React.FC = () => {
  return (
    <section id="brand-intro" className="py-20 sm:py-28 bg-studio-ivory relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text narrative with Framer Motion reveal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Essence Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-studio-espresso font-medium leading-tight">
              BEAUTY, <span className="italic text-champagne-600">REFINED.</span>
            </h2>

            <p className="text-sm sm:text-base text-studio-taupe leading-relaxed">
              Essence Hair and Makeup Studio brings together modern hair, beauty, and finishing services under one roof in Church Road, Dimapur.
            </p>

            <p className="text-sm sm:text-base text-studio-taupe leading-relaxed">
              Whether you’re preparing for an important occasion, refreshing your everyday signature look, or simply taking time for yourself, Essence is designed around personalized consultations, contemporary techniques, and meticulous attention to detail.
            </p>

            <div className="pt-2">
              <Link001
                href="/about"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-luxury text-studio-espresso hover:text-champagne-700"
              >
                Discover Essence
              </Link001>
            </div>
          </motion.div>

          {/* Editorial Visual Composition with Framer Motion reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-studio-border shadow-elevated rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop"
                alt="Studio beauty detail"
                className="w-full h-full object-cover img-editorial"
                loading="lazy"
              />
            </div>
            {/* Subtle accent badge */}
            <div className="absolute -bottom-5 -left-5 bg-studio-cream border border-studio-border p-4 shadow-subtle max-w-[200px] hidden sm:block">
              <p className="font-serif text-lg font-medium text-studio-espresso">
                Church Road
              </p>
              <p className="text-[10px] tracking-luxury uppercase text-studio-taupe mt-0.5">
                Central Dimapur Studio
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
