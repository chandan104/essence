import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useServices } from "../../context/ServicesContext";
import { SectionHeading } from "../common/SectionHeading";
import { BorderBeam } from "../ui/border-beam";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const CategoryGrid: React.FC = () => {
  const { services, categories } = useServices();

  return (
    <section className="py-20 sm:py-28 bg-studio-cream/40 relative border-t border-b border-studio-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialized Studios"
          title="THE FIVE ESSENCE DISCIPLINES"
          subtitle="Precision artistry across hair, nails, skin, lashes, and brows under one refined roof in Dimapur."
          className="mb-14 sm:mb-16"
        />

        {/* Categories Grid with Framer Motion Staggered Scroll Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {categories.map((cat, idx) => {
            const isFeatured = idx === 0;
            const liveServiceCount = services.filter((s) => s.category === cat.id).length;

            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={isFeatured ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <Link
                  to={`/services/${cat.id}`}
                  className={`glow-card group relative block overflow-hidden rounded-2xl bg-studio-espresso border border-studio-border/80 shadow-elevated transition-all duration-500 w-full ${
                    isFeatured ? "aspect-[16/10]" : "aspect-[4/5]"
                  }`}
                >
                  {/* Subtle BorderBeam on the main featured card */}
                  {isFeatured && (
                    <BorderBeam size={220} duration={14} colorFrom="#E9DCBF" colorTo="#C5A880" borderWidth={1.5} />
                  )}

                  {/* Background Image with Hover Scale */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-espresso via-studio-espresso/45 to-transparent" />

                  {/* Top Badge with Dynamic Count */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-studio-espresso/80 backdrop-blur-md text-[11px] font-semibold tracking-luxury uppercase text-champagne-300 border border-white/10 flex items-center gap-1.5 shadow-sm">
                      <Sparkles className="w-3 h-3 text-champagne-400" />
                      <span>{liveServiceCount} Specialized Services</span>
                    </span>
                  </div>

                  {/* Category Details Card Overlay */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                    <div className="space-y-2">
                      <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-champagne-300 block">
                        {cat.subheadline}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-studio-ivory font-medium group-hover:translate-x-1 transition-transform">
                        {cat.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-champagne-100/80 max-w-md line-clamp-2">
                        {cat.description}
                      </p>

                      <div className="pt-3 flex items-center gap-2 text-xs font-semibold tracking-luxury uppercase text-champagne-400 group-hover:text-champagne-300">
                        <span>Explore {cat.name} Studio</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
