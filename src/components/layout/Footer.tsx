import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "../common/SocialIcons";
import { siteConfig, buildWhatsAppLink } from "../../config/siteConfig";
import { serviceCategories } from "../../data/servicesData";

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-studio-espresso text-studio-ivory pt-16 pb-24 lg:pb-16 border-t border-studio-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-medium tracking-tight text-studio-ivory">
                ESSENCE
              </span>
              <span className="block text-[10px] tracking-luxury uppercase text-champagne-400 font-medium">
                Hair & Makeup Studio
              </span>
            </Link>

            <p className="text-sm text-champagne-100/70 max-w-sm leading-relaxed">
              {siteConfig.brand.shortDescription}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-champagne-200">
              <MapPin className="w-4 h-4 text-champagne-400 flex-shrink-0" />
              <span>{siteConfig.location.fullDisplayAddress}</span>
            </div>

            {/* Social handles */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-champagne-500 hover:text-studio-espresso flex items-center justify-center transition-colors text-champagne-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-champagne-500 hover:text-studio-espresso flex items-center justify-center transition-colors text-champagne-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-champagne-500 hover:text-studio-espresso flex items-center justify-center transition-colors text-champagne-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-champagne-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs tracking-luxury uppercase">
              <li>
                <Link to="/" className="text-studio-ivory/70 hover:text-champagne-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-studio-ivory/70 hover:text-champagne-300 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-studio-ivory/70 hover:text-champagne-300 transition-colors">
                  Portfolio & Lightbox
                </Link>
              </li>
              <li>
                <Link to="/the-essence-edit" className="text-studio-ivory/70 hover:text-champagne-300 transition-colors">
                  The Essence Edit
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-studio-ivory/70 hover:text-champagne-300 transition-colors">
                  About Essence
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-studio-ivory/70 hover:text-champagne-300 transition-colors">
                  Find & Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-champagne-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs tracking-luxury uppercase">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/services/${cat.id}`}
                    className="text-studio-ivory/70 hover:text-champagne-300 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/services/hair-botox"
                  className="text-champagne-300/90 hover:text-champagne-200 transition-colors flex items-center gap-1"
                >
                  <span>Hair Botox</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  to="/services/hydra-facial"
                  className="text-champagne-300/90 hover:text-champagne-200 transition-colors flex items-center gap-1"
                >
                  <span>Hydra Facial</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Connect & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-champagne-400 mb-4">
              Studio Connect
            </h4>
            <div className="space-y-2 text-xs text-champagne-100/80">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-champagne-400" />
                <a href={`tel:${siteConfig.contact.phoneNumber}`} className="hover:text-champagne-300">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-champagne-400" />
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-champagne-300">
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </p>
            </div>

            <div className="pt-2 text-xs text-studio-ivory/60 space-y-1">
              <span className="block font-semibold uppercase tracking-wider text-champagne-300">Hours</span>
              <p>{siteConfig.hours.weekdays}</p>
              <p>{siteConfig.hours.sunday}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Citation & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-studio-ivory/50">
          <p>© 2026 Essence Hair and Makeup Studio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Church Road, Dimapur, Nagaland</span>
            <span>•</span>
            <span className="text-champagne-400/80">Premium Beauty & Finishing Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
