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
    <section id="location" className="py-20 sm:py-28 bg-studio-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Central Dimapur Presence"
          title="FIND YOUR WAY TO ESSENCE"
          subtitle="Conveniently situated along the bustling Church Road hub, easily accessible from all corners of Dimapur and Chümoukedima."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Column */}
          <div className="lg:col-span-7 bg-studio-cream border border-studio-border overflow-hidden min-h-[380px] sm:min-h-[460px] relative flex flex-col">
            <iframe
              title="Essence Studio Location on Church Road, Dimapur"
              src={siteConfig.location.googleMapsEmbedUrl}
              className="w-full h-full flex-1 border-0 min-h-[360px]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-studio-espresso/90 backdrop-blur-md border border-white/10 text-studio-ivory p-3 text-xs shadow-elevated">
              <p className="font-semibold text-champagne-300">
                Church Road, Dimapur, Nagaland
              </p>
              <p className="text-[11px] text-white/70">
                Central commercial location with easy parking & cab access
              </p>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 bg-studio-cream/40 border border-studio-border p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-champagne-600 block mb-1">
                  Physical Studio Address
                </span>
                <h3 className="font-serif text-2xl text-studio-espresso font-medium">
                  Essence Hair & Makeup Studio
                </h3>
                <p className="text-sm text-studio-taupe mt-1.5 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-champagne-600 flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.location.fullDisplayAddress}</span>
                </p>
              </div>

              {/* Hours */}
              <div className="border-t border-studio-border pt-4">
                <span className="text-xs font-semibold tracking-luxury uppercase text-studio-espresso flex items-center gap-2 mb-2">
                  <Clock className="w-3.5 h-3.5 text-champagne-600" />
                  Studio Hours
                </span>
                <div className="space-y-1 text-xs text-studio-taupe">
                  <p className="flex justify-between">
                    <span>Tuesday – Saturday:</span>
                    <span className="font-medium text-studio-espresso">10:00 AM – 7:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-studio-espresso">11:00 AM – 6:00 PM (By Appt)</span>
                  </p>
                  <p className="flex justify-between text-champagne-700 font-medium pt-1">
                    <span>Monday:</span>
                    <span>Sanitation & Training Day</span>
                  </p>
                </div>
              </div>

              {/* Contact numbers */}
              <div className="border-t border-studio-border pt-4 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-studio-taupe">Direct Appointments:</span>
                  <a
                    href={`tel:${siteConfig.contact.phoneNumber}`}
                    onClick={() => analytics.trackCallClick("location_section")}
                    className="font-semibold text-studio-espresso hover:text-champagne-600"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-studio-taupe">Studio WhatsApp:</span>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => analytics.trackWhatsAppClick(undefined, "location_section")}
                    className="font-semibold text-champagne-700 hover:text-champagne-600"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="mt-8 pt-6 border-t border-studio-border space-y-2.5">
              <a
                href={siteConfig.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackDirectionClick()}
                className="w-full py-3 bg-studio-espresso text-studio-ivory hover:bg-champagne-600 hover:text-studio-espresso text-xs font-semibold uppercase tracking-widest text-center transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-champagne-300" />
                <span>Get Google Maps Directions</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={buildWhatsAppLink("Hi Essence Studio, I would like directions or assistance reaching your Church Road location.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.trackWhatsAppClick(undefined, "location_section_whatsapp")}
                  className="py-2.5 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-[11px] font-semibold uppercase tracking-luxury text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
                <button
                  onClick={onOpenBooking}
                  className="py-2.5 bg-studio-ivory hover:bg-white text-studio-espresso border border-studio-border text-[11px] font-semibold uppercase tracking-luxury text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-champagne-600" />
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
