import React from "react";
import { MessageCircle, Phone, CalendarCheck } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "../../config/siteConfig";
import { analytics } from "../../utils/analytics";

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#040711]/90 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => analytics.trackWhatsAppClick(undefined, "mobile_bottom_bar")}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1 text-slate-200">
            WhatsApp
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${siteConfig.contact.phoneNumber}`}
          onClick={() => analytics.trackCallClick("mobile_bottom_bar")}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-champagne-400" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1 text-slate-200">
            Call
          </span>
        </a>

        {/* Book Button */}
        <button
          onClick={() => {
            analytics.trackBookingStart("mobile_bottom_bar");
            onOpenBooking();
          }}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-champagne-500 hover:bg-champagne-400 text-black active:scale-95 transition-all shadow-[0_4px_16px_rgba(200,169,126,0.35)]"
        >
          <CalendarCheck className="w-4 h-4 text-black" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider mt-1">
            Book
          </span>
        </button>
      </div>
    </div>
  );
};
