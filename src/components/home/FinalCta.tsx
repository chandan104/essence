import React from "react";
import { MessageCircle, Sparkles, MapPin } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "../../config/siteConfig";
import { Button } from "../common/Button";
import { analytics } from "../../utils/analytics";

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 sm:py-32 bg-studio-espresso text-studio-ivory relative overflow-hidden text-center">
      {/* Subtle background radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-champagne-300 text-xs font-semibold tracking-widest uppercase mb-6">
          <MapPin className="w-3.5 h-3.5 text-champagne-400" />
          <span>Church Road, Dimapur, Nagaland</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-studio-ivory leading-tight">
          READY FOR YOUR <span className="italic text-champagne-300">NEXT LOOK?</span>
        </h2>

        <p className="mt-5 text-sm sm:text-base text-champagne-100/80 max-w-2xl mx-auto leading-relaxed font-light">
          Whether it’s a vibrant hair colour, restorative hair smoothing, fresh sculpted nails, defined brows, fluttery lashes, or a complete bridal transformation — your elevated appointment starts here.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="champagne"
            size="lg"
            onClick={onOpenBooking}
            icon={<Sparkles className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Book An Appointment
          </Button>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.trackWhatsAppClick(undefined, "final_cta")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-studio-ivory border border-white/20 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-champagne-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <p className="mt-8 text-xs text-champagne-200/50 uppercase tracking-widest">
          Personalized Consultations • Hygienic Protocols • Church Road Commercial Hub
        </p>
      </div>
    </section>
  );
};
