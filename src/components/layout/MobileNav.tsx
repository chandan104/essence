import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronRight, MessageCircle, Phone, MapPin, Sparkles } from "lucide-react";
import { useServices } from "../../context/ServicesContext";
import { siteConfig, buildWhatsAppLink } from "../../config/siteConfig";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const { services: servicesData, categories: serviceCategories } = useServices();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleCategory = (catId: string) => {
    setExpandedCategory(expandedCategory === catId ? null : catId);
  };

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-[#040711]/95 backdrop-blur-2xl border-l border-white/10 h-full shadow-2xl flex flex-col z-10 overflow-y-auto text-white">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="font-heading text-2xl font-semibold tracking-tight text-white">
              ESSENCE
            </span>
            <p className="text-[10px] tracking-luxury uppercase text-champagne-400 font-medium">
              Church Road, Dimapur
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 px-5 py-4 space-y-3">
          <Link
            to="/"
            onClick={onClose}
            className="block text-sm font-semibold uppercase tracking-luxury text-slate-200 hover:text-champagne-300 py-2.5 border-b border-white/10 transition-colors"
          >
            Home
          </Link>

          {/* Services Accordion */}
          <div className="border-b border-white/10 pb-2">
            <div className="flex items-center justify-between py-2">
              <Link
                to="/services"
                onClick={onClose}
                className="text-sm font-semibold uppercase tracking-luxury text-slate-200 hover:text-champagne-300 transition-colors"
              >
                All Services
              </Link>
              <span className="text-[10px] uppercase font-semibold text-champagne-400 bg-champagne-500/10 border border-champagne-500/20 px-2 py-0.5 rounded-full">
                Categories
              </span>
            </div>

            <div className="space-y-1 mt-1 pl-2">
              {serviceCategories.map((cat) => {
                const isExpanded = expandedCategory === cat.id;
                const catServices = servicesData.filter((s) => s.category === cat.id);

                return (
                  <div key={cat.id} className="border-l-2 border-white/10 pl-3 my-1.5">
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full flex items-center justify-between py-1 text-xs font-semibold uppercase tracking-luxury text-slate-300 hover:text-champagne-300 transition-colors"
                    >
                      <span>{cat.name} ({catServices.length})</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-90 text-champagne-400" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="space-y-1.5 pt-1.5 pb-2 pl-2">
                        <Link
                          to={`/services/${cat.id}`}
                          onClick={onClose}
                          className="block text-[11px] font-semibold text-champagne-400 hover:text-champagne-300"
                        >
                          → Explore {cat.name} Hub
                        </Link>
                        {catServices.map((srv) => (
                          <Link
                            key={srv.id}
                            to={`/services/${srv.slug}`}
                            onClick={onClose}
                            className="block text-[11px] text-slate-400 hover:text-white py-0.5 transition-colors"
                          >
                            {srv.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <Link
            to="/gallery"
            onClick={onClose}
            className="block text-sm font-semibold uppercase tracking-luxury text-slate-200 hover:text-champagne-300 py-2.5 border-b border-white/10 transition-colors"
          >
            Visual Portfolio
          </Link>

          <Link
            to="/the-essence-edit"
            onClick={onClose}
            className="block text-sm font-semibold uppercase tracking-luxury text-slate-200 hover:text-champagne-300 py-2.5 border-b border-white/10 transition-colors"
          >
            The Essence Edit (Journal)
          </Link>

          <Link
            to="/about"
            onClick={onClose}
            className="block text-sm font-semibold uppercase tracking-luxury text-slate-200 hover:text-champagne-300 py-2.5 border-b border-white/10 transition-colors"
          >
            About The Studio
          </Link>

          <Link
            to="/contact"
            onClick={onClose}
            className="block text-sm font-semibold uppercase tracking-luxury text-slate-200 hover:text-champagne-300 py-2.5 border-b border-white/10 transition-colors"
          >
            Location & Contact
          </Link>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-5 border-t border-white/10 bg-[#090E1C]/80 space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full py-3 bg-champagne-500 hover:bg-champagne-400 text-black text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-xl shadow-[0_4px_20px_rgba(200,169,126,0.3)] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 rounded-xl backdrop-blur-md transition-all"
          >
            <MessageCircle className="w-4 h-4 text-champagne-400" />
            <span>WhatsApp Us Directly</span>
          </a>

          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-champagne-400" />
              Church Rd, Dimapur
            </span>
            <a href={`tel:${siteConfig.contact.phoneNumber}`} className="flex items-center gap-1 text-white font-semibold hover:text-champagne-300">
              <Phone className="w-3 h-3 text-champagne-400" />
              Call Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
