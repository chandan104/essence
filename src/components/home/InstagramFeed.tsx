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
    <section className="py-20 sm:py-28 bg-studio-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-studio-espresso text-studio-ivory hover:bg-champagne-600 hover:text-studio-espresso text-xs font-semibold uppercase tracking-luxury transition-colors self-start sm:self-auto group"
          >
            <InstagramIcon className="w-4 h-4 text-champagne-400 group-hover:text-studio-espresso" />
            <span>{siteConfig.social.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
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
              className="group relative aspect-square overflow-hidden bg-studio-cream border border-studio-border block"
            >
              <img
                src={post.image}
                alt="Instagram post preview"
                className="w-full h-full object-cover img-editorial"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-studio-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-studio-ivory">
                <div className="flex justify-end">
                  <InstagramIcon className="w-5 h-5 text-champagne-300" />
                </div>
                <p className="text-xs text-champagne-100/90 line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>
                <span className="text-[10px] tracking-widest uppercase text-champagne-400 font-semibold">
                  View On Instagram →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
