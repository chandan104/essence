import React from "react";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "../common/SocialIcons";
import { siteConfig } from "../../config/siteConfig";
import { SectionHeading } from "../common/SectionHeading";
import { analytics } from "../../utils/analytics";

export const InstagramFeed: React.FC = () => {
  const instagramShowcase = [
    {
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
      caption: "Soft sun-kissed dimension for the festive season. #EssenceDimapur #HairGoals",
    },
    {
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800&auto=format&fit=crop",
      caption: "Fluffy volume lashes that frame the gaze effortlessly. #LashesOfInstagram",
    },
    {
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop",
      caption: "Minimalist glazed chrome over almond extensions. #NailArtistry",
    },
    {
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
      caption: "Restorative Hair Botox finish with mirror-like shine. #HairBotoxNagaland",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#040711] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[250px] bg-champagne-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <SectionHeading
            align="left"
            eyebrow="Social Proof & Artistry"
            title="FOLLOW THE ESSENCE"
            subtitle="Catch daily behind-the-scenes transformations, hair care rituals, and client stories on Instagram."
            className="max-w-xl"
          />
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.trackInstagramClick()}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-champagne-400/40 rounded-full backdrop-blur-md text-xs font-semibold uppercase tracking-luxury transition-all self-start sm:self-auto group shadow-sm"
          >
            <InstagramIcon className="w-4 h-4 text-champagne-400 group-hover:scale-110 transition-transform" />
            <span>{siteConfig.social.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-champagne-400" />
          </a>
        </div>

        {/* 4-Item Visual Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {instagramShowcase.map((post, idx) => (
            <a
              key={idx}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackInstagramClick()}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[#090E1C] border border-white/10 block shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <img
                src={post.image}
                alt="Instagram post preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#040711]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <InstagramIcon className="w-4 h-4 text-champagne-300" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-200 line-clamp-3 leading-relaxed font-light mb-3">
                    {post.caption}
                  </p>
                  <span className="text-[10px] tracking-widest uppercase text-champagne-400 font-semibold flex items-center gap-1">
                    View On Instagram <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
