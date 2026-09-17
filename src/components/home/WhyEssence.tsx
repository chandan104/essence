import React from "react";
import { UserCheck, Sparkles, Wand2, Compass } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";

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
    <section className="py-20 sm:py-28 bg-studio-cream/30 border-t border-b border-studio-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Essence Standard"
          title="WHY CHOOSE ESSENCE STUDIO"
          subtitle="Built on four foundational pillars designed to give Dimapur an elevated, dependable salon experience."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-studio-ivory border border-studio-border p-8 flex flex-col justify-between hover:border-champagne-500 transition-colors group shadow-subtle"
            >
              <div>
                <div className="w-12 h-12 rounded-none bg-studio-cream border border-studio-border flex items-center justify-center mb-6 group-hover:bg-champagne-100 transition-colors">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest text-champagne-600 block mb-1">
                  PILLAR 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-studio-espresso font-medium mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-studio-taupe leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-studio-border/60 text-[11px] font-medium text-champagne-700">
                Church Road, Dimapur
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
