import React from "react";
import { Sparkles } from "lucide-react";

export const MarqueeTicker: React.FC = () => {
  const items = [
    "HAIR BOTOX & NANOPLASTIA",
    "CHURCH ROAD, DIMAPUR",
    "HYDRA FACIAL & INSTANT GLASS GLOW",
    "SCULPTED NAIL EXTENSIONS & ART",
    "1:1 CLASSIC, HYBRID & ANIME LASHES",
    "MICROBLADING HAIR-STROKE BROWS",
    "LUXURY BRIDAL & PARTY FINISHES",
    "INDIVIDUALIZED BEAUTY CONSULTATIONS",
    "NAGALAND'S ELEVATED BEAUTY DESTINATION",
  ];

  return (
    <div className="bg-studio-espresso text-studio-ivory py-3.5 border-y border-champagne-500/30 overflow-hidden relative select-none">
      {/* Subtle edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-studio-espresso to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-studio-espresso to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-slow flex items-center gap-8">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 flex-shrink-0">
            <span className="text-[11px] sm:text-xs font-semibold tracking-luxury uppercase text-champagne-300">
              {item}
            </span>
            <Sparkles className="w-3 h-3 text-champagne-500 fill-champagne-500/30 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
