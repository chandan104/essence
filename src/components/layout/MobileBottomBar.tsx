import React from "react";
import { MessageCircle, Phone, CalendarCheck } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "../../config/siteConfig";
import { analytics } from "../../utils/analytics";

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-studio-ivory/95 backdrop-blur-md border-t border-studio-border/90 shadow-elevated px-3 py-2">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => analytics.trackWhatsAppClick(undefined, "mobile_bottom_bar")}
          className="flex flex-col items-center justify-center py-2 bg-studio-cream border border-studio-border text-studio-espresso active:bg-champagne-100 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-700" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">
            WhatsApp
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${siteConfig.contact.phoneNumber}`}
          onClick={() => analytics.trackCallClick("mobile_bottom_bar")}
          className="flex flex-col items-center justify-center py-2 bg-studio-cream border border-studio-border text-studio-espresso active:bg-champagne-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-champagne-700" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">
            Call
          </span>
        </a>

        {/* Book Button */}
        <button
          onClick={() => {
            analytics.trackBookingStart("mobile_bottom_bar");
            onOpenBooking();
          }}
          className="flex flex-col items-center justify-center py-2 bg-studio-espresso text-studio-ivory active:bg-champagne-600 active:text-studio-espresso transition-colors shadow-sm"
        >
          <CalendarCheck className="w-4 h-4 text-champagne-400" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">
            Book
          </span>
        </button>
      </div>
    </div>
  );
};
