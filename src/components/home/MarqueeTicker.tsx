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
    <div className="bg-[#060A14]/90 backdrop-blur-xl text-white py-4 border-y border-white/10 overflow-hidden relative select-none shadow-lg">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#040711] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#040711] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-slow flex items-center gap-10">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 flex-shrink-0">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-200 hover:text-champagne-300 transition-colors">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-champagne-400 drop-shadow-[0_0_6px_#D4AF37] flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
