import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";

export interface ReviewItem {
  id: string;
  clientName: string;
  serviceReceived: string;
  reviewText: string;
  date: string;
  isVerifiedPlaceholder: boolean;
}

export const reviewPlaceholders: ReviewItem[] = [
  {
    id: "rev-1",
    clientName: "Client Review Pending",
    serviceReceived: "Hair Botox Treatment",
    reviewText:
      "Client testimonial will appear here once verified Google Reviews or in-salon feedback are connected to the live website.",
    date: "Dimapur Client",
    isVerifiedPlaceholder: true,
  },
  {
    id: "rev-2",
    clientName: "Client Review Pending",
    serviceReceived: "Volume Eyelash Extensions",
    reviewText:
      "Client testimonial will appear here once verified Google Reviews or in-salon feedback are connected to the live website.",
    date: "Dimapur Client",
    isVerifiedPlaceholder: true,
  },
  {
    id: "rev-3",
    clientName: "Client Review Pending",
    serviceReceived: "Hydra Facial & Glow Care",
    reviewText:
      "Client testimonial will appear here once verified Google Reviews or in-salon feedback are connected to the live website.",
    date: "Dimapur Client",
    isVerifiedPlaceholder: true,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#060A14] border-t border-b border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-champagne-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Experiences"
          title="VOICES FROM THE CHAIR"
          subtitle="Real client perspectives from our Church Road studio. Transparently curated to reflect authentic beauty experiences."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviewPlaceholders.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl bg-[#090E1C]/80 backdrop-blur-xl border border-white/10 p-7 sm:p-8 flex flex-col justify-between relative shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-champagne-400/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle top specular shimmer */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-champagne-400/30 to-transparent" />

              <div>
                <Quote className="w-8 h-8 text-champagne-400/30 mb-4 group-hover:text-champagne-400/60 transition-colors" />

                {/* 5-Star indicator */}
                <div className="flex items-center gap-1 text-champagne-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="font-sans italic text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-6">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-luxury text-white">
                    {rev.clientName}
                  </h4>
                  <p className="text-[11px] text-champagne-400 font-medium">
                    {rev.serviceReceived}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Notice */}
        <div className="mt-12 max-w-xl mx-auto text-center p-3.5 rounded-xl bg-white/5 border border-dashed border-white/15 text-[11px] text-slate-400 backdrop-blur-md">
          <span className="font-semibold text-white">Verified Feedback Policy:</span> Essence displays only authenticated customer reviews. As new Google reviews are received, they will populate this section automatically.
        </div>
      </div>
    </section>
  );
};
