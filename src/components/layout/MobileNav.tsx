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
        className="fixed inset-0 bg-studio-dark/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-studio-ivory h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Header */}
        <div className="p-5 border-b border-studio-border flex items-center justify-between">
          <div>
            <span className="font-serif text-2xl font-medium text-studio-espresso">
              ESSENCE
            </span>
            <p className="text-[10px] tracking-luxury uppercase text-champagne-700 font-medium">
              Church Road, Dimapur
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-studio-charcoal hover:text-champagne-600 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 px-5 py-4 space-y-4">
          <Link
            to="/"
            onClick={onClose}
            className="block text-sm font-semibold uppercase tracking-luxury text-studio-espresso py-2 border-b border-studio-border/50"
          >
            Home
          </Link>

          {/* Services Accordion */}
          <div className="border-b border-studio-border/50 pb-2">
            <div className="flex items-center justify-between py-2">
              <Link
                to="/services"
                onClick={onClose}
                className="text-sm font-semibold uppercase tracking-luxury text-studio-espresso"
              >
                All Services
              </Link>
              <span className="text-[10px] uppercase font-bold text-champagne-600 bg-champagne-100 px-2 py-0.5">
                Categories
              </span>
            </div>

            <div className="space-y-1 mt-1 pl-2">
              {serviceCategories.map((cat) => {
                const isExpanded = expandedCategory === cat.id;
                const catServices = servicesData.filter((s) => s.category === cat.id);

                return (
                  <div key={cat.id} className="border-l-2 border-studio-border/60 pl-3 my-1.5">
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full flex items-center justify-between py-1 text-xs font-semibold uppercase tracking-luxury text-studio-charcoal hover:text-champagne-600"
                    >
                      <span>{cat.name} ({catServices.length})</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-90 text-champagne-600" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="space-y-1.5 pt-1.5 pb-2 pl-2">
                        <Link
                          to={`/services/${cat.id}`}
                          onClick={onClose}
                          className="block text-[11px] font-semibold text-champagne-700 hover:text-studio-espresso"
                        >
                          → Explore {cat.name} Hub
                        </Link>
                        {catServices.map((srv) => (
                          <Link
                            key={srv.id}
                            to={`/services/${srv.slug}`}
                            onClick={onClose}
                            className="block text-[11px] text-studio-taupe hover:text-studio-espresso py-0.5"
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
            className="block text-sm font-semibold uppercase tracking-luxury text-studio-espresso py-2 border-b border-studio-border/50"
          >
            Visual Portfolio
          </Link>

          <Link
            to="/the-essence-edit"
            onClick={onClose}
            className="block text-sm font-semibold uppercase tracking-luxury text-studio-espresso py-2 border-b border-studio-border/50"
          >
            The Essence Edit (Journal)
          </Link>

          <Link
            to="/about"
            onClick={onClose}
            className="block text-sm font-semibold uppercase tracking-luxury text-studio-espresso py-2 border-b border-studio-border/50"
          >
            About The Studio
          </Link>

          <Link
            to="/contact"
            onClick={onClose}
            className="block text-sm font-semibold uppercase tracking-luxury text-studio-espresso py-2 border-b border-studio-border/50"
          >
            Location & Contact
          </Link>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-5 border-t border-studio-border bg-studio-cream/40 space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full py-3 bg-studio-espresso text-studio-ivory hover:bg-champagne-600 hover:text-studio-espresso text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
            <span>Book Appointment</span>
          </button>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us Directly</span>
          </a>

          <div className="pt-2 flex items-center justify-between text-[11px] text-studio-taupe">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-champagne-600" />
              Church Rd, Dimapur
            </span>
            <a href={`tel:${siteConfig.contact.phoneNumber}`} className="flex items-center gap-1 text-studio-espresso font-semibold">
              <Phone className="w-3 h-3 text-champagne-600" />
              Call Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
