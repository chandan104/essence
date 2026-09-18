import React from "react";
import { MessageCircle, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig, buildWhatsAppLink } from "../../config/siteConfig";
import { analytics } from "../../utils/analytics";
import { BorderBeam } from "../ui/border-beam";

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 sm:py-32 bg-studio-espresso text-studio-ivory relative overflow-hidden text-center">
      {/* Subtle background radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.15)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Banner container with subtle BorderBeam */}
        <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-studio-charcoal/50 border border-studio-border/50 backdrop-blur-sm shadow-2xl">
          <BorderBeam size={260} duration={16} colorFrom="#E9DCBF" colorTo="#B8966C" borderWidth={1.5} />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-champagne-300 text-xs font-semibold tracking-widest uppercase mb-6 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-champagne-400" />
            <span>Church Road, Dimapur, Nagaland</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-studio-ivory leading-tight">
            READY FOR YOUR <span className="italic text-champagne-300">NEXT LOOK?</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-champagne-100/85 max-w-2xl mx-auto leading-relaxed font-light">
            Whether it’s a vibrant hair colour, restorative hair smoothing, fresh sculpted nails, defined brows, fluttery lashes, or a complete bridal transformation — your elevated appointment starts here.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2.5 rounded-full shadow-elevated cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-studio-espresso" />
              <span>Book An Appointment</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackWhatsAppClick(undefined, "final_cta")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-studio-ivory border border-white/20 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-champagne-400" />
              <span>WhatsApp Us Directly</span>
            </motion.a>
          </div>

          <p className="mt-8 text-xs text-champagne-200/50 uppercase tracking-widest">
            Personalized Consultations • Hygienic Protocols • Church Road Commercial Hub
          </p>
        </div>
      </motion.div>
    </section>
  );
};
