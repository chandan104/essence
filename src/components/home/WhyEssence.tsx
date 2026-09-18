import React from "react";
import { UserCheck, Sparkles, Wand2, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../common/SectionHeading";

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

const pillarVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const WhyEssence: React.FC = () => {
  const pillars = [
    {
      icon: <UserCheck className="w-6 h-6 text-champagne-600" />,
      title: "PERSONALIZED",
      description:
        "Every appointment starts with an individualized consultation. We assess undertones, facial bone structure, lifestyle needs, and hair history rather than prescribing generic one-size-fits-all services.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-champagne-600" />,
      title: "DETAIL-DRIVEN",
      description:
        "From immaculate nail apex sculpting and 1:1 lash isolation to hair bond protection, we focus obsessively on the refined finishing touches that make beauty last.",
    },
    {
      icon: <Wand2 className="w-6 h-6 text-champagne-600" />,
      title: "CONTEMPORARY",
      description:
        "We bring progressive beauty techniques—such as Nanoplastia, manga doll-eye lashes, and powder ombré shading—directly to our discerning Dimapur clientele.",
    },
    {
      icon: <Compass className="w-6 h-6 text-champagne-600" />,
      title: "STUDIO EXPERIENCE",
      description:
        "An intentionally designed sanctuary on Church Road. Clean, calming, aesthetic surroundings where you can relax, unwind, and leave feeling confident.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#060A14] border-t border-b border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-champagne-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Essence Standard"
          title="WHY CHOOSE ESSENCE STUDIO"
          subtitle="Built on four foundational pillars designed to give Dimapur an elevated, dependable salon experience."
          className="mb-14 sm:mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              variants={pillarVariants}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
              className="relative rounded-2xl bg-[#090E1C]/80 backdrop-blur-xl border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-champagne-400/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle top specular shimmer */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-champagne-400/30 to-transparent" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-champagne-500/10 border border-champagne-500/20 flex items-center justify-center mb-6 group-hover:bg-champagne-500/20 group-hover:border-champagne-400/50 group-hover:scale-105 transition-all duration-300">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest text-champagne-400 block mb-1.5 uppercase font-mono">
                  PILLAR 0{idx + 1}
                </span>
                <h3 className="font-heading text-lg sm:text-xl text-white font-semibold mb-3 group-hover:text-champagne-200 transition-colors tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-medium text-champagne-400/80 flex items-center justify-between">
                <span>Church Road, Dimapur</span>
                <span className="text-white/30 text-xs group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
