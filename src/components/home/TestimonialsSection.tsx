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
    <section className="py-20 sm:py-28 bg-studio-cream/30 border-t border-b border-studio-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Experiences"
          title="VOICES FROM THE CHAIR"
          subtitle="Real client perspectives from our Church Road studio. Transparently curated to reflect authentic beauty experiences."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewPlaceholders.map((rev) => (
            <div
              key={rev.id}
              className="bg-studio-ivory border border-studio-border p-8 flex flex-col justify-between relative shadow-subtle"
            >
              <Quote className="w-8 h-8 text-champagne-300 mb-4" />

              <div>
                {/* 5-Star indicator */}
                <div className="flex items-center gap-1 text-champagne-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="font-serif italic text-studio-charcoal text-base leading-relaxed mb-6">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 border-t border-studio-border/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-luxury text-studio-espresso">
                    {rev.clientName}
                  </h4>
                  <p className="text-[11px] text-champagne-700 font-medium">
                    {rev.serviceReceived}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-studio-taupe">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Notice */}
        <div className="mt-10 max-w-xl mx-auto text-center p-3 bg-studio-ivory border border-dashed border-studio-border text-[11px] text-studio-taupe">
          <span className="font-medium text-studio-espresso">Verified Feedback Policy:</span> Essence displays only authenticated customer reviews. As new Google reviews are received, they will populate this section automatically.
        </div>
      </div>
    </section>
  );
};
