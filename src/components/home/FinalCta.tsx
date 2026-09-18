import React from "react";
import { MessageCircle, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig, buildWhatsAppLink } from "../../config/siteConfig";
import { analytics } from "../../utils/analytics";
import { BorderBeam } from "../ui/border-beam";
import { LiquidGlassButton } from "../ui/liquid-glass-button";

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 sm:py-32 bg-studio-espresso text-studio-ivory relative overflow-hidden text-center">
      {/* Subtle background radial lighting and ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-champagne-500/10 blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Liquid Glass Banner Container */}
        <div
          className="relative overflow-hidden p-8 sm:p-14 rounded-3xl backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          style={{
            background: `
              linear-gradient(180deg, rgba(35, 28, 22, 0.65) 0%, rgba(20, 16, 12, 0.85) 100%),
              linear-gradient(90deg, rgba(230, 195, 140, 0.12) 0%, rgba(200, 160, 210, 0.08) 50%, rgba(180, 210, 240, 0.12) 100%)
            `,
          }}
        >
          {/* Masked Specular Perimeter */}
          <span
            className="absolute inset-0 rounded-3xl pointer-events-none p-[1.5px]"
            style={{
              background: `
                linear-gradient(180deg, rgba(255, 252, 246, 0.7) 0%, rgba(255, 252, 246, 0.15) 50%, rgba(255, 252, 246, 0) 90%),
                linear-gradient(90deg, rgba(255, 228, 182, 0.7) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(200, 228, 250, 0.7) 100%)
              `,
              WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              maskComposite: "exclude",
            }}
            aria-hidden="true"
          />

          <BorderBeam size={260} duration={14} colorFrom="#E9DCBF" colorTo="#B8966C" borderWidth={1.5} />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-champagne-300 text-xs font-semibold tracking-widest uppercase mb-6 rounded-full border border-white/15 backdrop-blur-md">
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
            <LiquidGlassButton
              size="lg"
              variant="champagne"
              onClick={onOpenBooking}
              className="w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4 text-champagne-300" />
              <span>Book An Appointment</span>
            </LiquidGlassButton>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackWhatsAppClick(undefined, "final_cta")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/15 text-studio-ivory border border-white/20 hover:border-champagne-400/40 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer backdrop-blur-md shadow-sm"
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
