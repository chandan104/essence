import React from "react";
import { MapPin, Navigation, Phone, MessageCircle, Clock, Sparkles } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "../../config/siteConfig";
import { SectionHeading } from "../common/SectionHeading";
import { analytics } from "../../utils/analytics";

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#040711] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-champagne-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Central Dimapur Presence"
          title="FIND YOUR WAY TO ESSENCE"
          subtitle="Conveniently situated along the bustling Church Road hub, easily accessible from all corners of Dimapur and Chümoukedima."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Column */}
          <div className="lg:col-span-7 rounded-2xl bg-[#090E1C]/80 backdrop-blur-xl border border-white/10 overflow-hidden min-h-[380px] sm:min-h-[460px] relative flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <iframe
              title="Essence Studio Location on Church Road, Dimapur"
              src={siteConfig.location.googleMapsEmbedUrl}
              className="w-full h-full flex-1 border-0 min-h-[360px] grayscale-[30%] contrast-[110%] invert-[90%] hue-rotate-180"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#040711]/90 backdrop-blur-md border border-white/15 text-white p-4 rounded-xl text-xs shadow-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="font-semibold text-champagne-300">
                  Church Road, Dimapur, Nagaland
                </p>
              </div>
              <p className="text-[11px] text-slate-300">
                Central commercial location with dedicated parking & easy cab access
              </p>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 rounded-2xl bg-[#090E1C]/90 backdrop-blur-xl border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Subtle top specular shimmer */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-champagne-400/30 to-transparent" />

            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-400 block mb-1">
                  Physical Studio Address
                </span>
                <h3 className="font-heading text-2xl text-white font-semibold tracking-tight">
                  Essence Hair & Makeup Studio
                </h3>
                <p className="text-sm text-slate-300 mt-2 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.location.fullDisplayAddress}</span>
                </p>
              </div>

              {/* Hours */}
              <div className="border-t border-white/10 pt-4">
                <span className="text-xs font-semibold tracking-luxury uppercase text-white flex items-center gap-2 mb-3">
                  <Clock className="w-3.5 h-3.5 text-champagne-400" />
                  Studio Hours
                </span>
                <div className="space-y-2 text-xs text-slate-300">
                  <p className="flex justify-between py-1 border-b border-white/5">
                    <span>Tuesday – Saturday:</span>
                    <span className="font-medium text-white">10:00 AM – 7:00 PM</span>
                  </p>
                  <p className="flex justify-between py-1 border-b border-white/5">
                    <span>Sunday:</span>
                    <span className="font-medium text-white">11:00 AM – 6:00 PM (By Appt)</span>
                  </p>
                  <p className="flex justify-between text-champagne-400 font-medium pt-1">
                    <span>Monday:</span>
                    <span>Sanitation & Education Day</span>
                  </p>
                </div>
              </div>

              {/* Contact numbers */}
              <div className="border-t border-white/10 pt-4 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Direct Appointments:</span>
                  <a
                    href={`tel:${siteConfig.contact.phoneNumber}`}
                    onClick={() => analytics.trackCallClick("location_section")}
                    className="font-semibold text-white hover:text-champagne-300 transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Studio WhatsApp:</span>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => analytics.trackWhatsAppClick(undefined, "location_section")}
                    className="font-semibold text-champagne-400 hover:text-champagne-300 transition-colors"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <a
                href={siteConfig.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackDirectionClick()}
                className="w-full py-3 bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-champagne-400/40 text-xs font-semibold uppercase tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-2 rounded-xl backdrop-blur-md"
              >
                <Navigation className="w-3.5 h-3.5 text-champagne-400" />
                <span>Get Google Maps Directions</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={buildWhatsAppLink("Hi Essence Studio, I would like directions or assistance reaching your Church Road location.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.trackWhatsAppClick(undefined, "location_section_whatsapp")}
                  className="py-2.5 bg-champagne-500 hover:bg-champagne-400 text-black text-[11px] font-bold uppercase tracking-luxury text-center transition-all rounded-xl flex items-center justify-center gap-1.5 shadow-[0_4px_20px_rgba(200,169,126,0.3)]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
                <button
                  onClick={onOpenBooking}
                  className="py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-champagne-400/40 text-[11px] font-semibold uppercase tracking-luxury text-center transition-all rounded-xl flex items-center justify-center gap-1.5 backdrop-blur-md"
                >
                  <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
