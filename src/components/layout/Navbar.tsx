import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../../config/siteConfig";
import { serviceCategories } from "../../data/servicesData";
import { Button } from "../common/Button";
import { Link000 } from "../ui/skiper-ui/skiper40";
import { LiquidGlassButton } from "../ui/liquid-glass-button";

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "The Edit", path: "/the-essence-edit" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#040711]/90 backdrop-blur-xl shadow-2xl py-3.5 border-b border-white/10"
            : "bg-[#040711]/70 backdrop-blur-md py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand identity */}
          <Link to="/" className="group flex flex-col">
            <span className="font-sans text-2xl sm:text-3xl font-bold tracking-widest text-white group-hover:text-champagne-300 transition-colors">
              ESSENCE
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-luxury uppercase text-slate-400 font-medium -mt-1 flex items-center gap-1.5">
              <span>Hair & Makeup Studio</span>
              <span className="inline-block w-1 h-1 rounded-full bg-champagne-400 shadow-[0_0_8px_#D4AF37]" />
              <span className="text-champagne-400/90 hidden sm:inline">Church Road, Dimapur</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link000
              href="/"
              className={`text-xs font-semibold uppercase tracking-luxury py-1 transition-colors ${
                location.pathname === "/"
                  ? "text-champagne-400 font-bold before:scale-x-100"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              Home
            </Link000>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-luxury transition-colors py-2 ${
                  location.pathname.startsWith("/services")
                    ? "text-champagne-400 font-bold"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-champagne-400" : ""
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu with Framer Motion */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-[#070C18]/98 border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.85)] p-5 grid grid-cols-2 gap-4 rounded-2xl backdrop-blur-2xl"
                  >
                    <div className="col-span-2 pb-2 border-b border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-luxury text-slate-400">
                        Explore Categories
                      </span>
                      <Link
                        to="/services"
                        className="text-[11px] font-semibold uppercase tracking-luxury text-champagne-400 hover:text-white transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>

                    {serviceCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/services/${cat.id}`}
                        className="group p-2.5 hover:bg-white/[0.06] rounded-xl border border-transparent hover:border-white/10 transition-all flex items-start gap-3"
                      >
                        <div className="w-10 h-10 overflow-hidden flex-shrink-0 rounded-lg border border-white/10">
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <h4 className="font-sans text-sm text-white group-hover:text-champagne-300 font-medium">
                            {cat.name}
                          </h4>
                          <p className="text-[11px] text-slate-400 line-clamp-1">
                            {cat.subheadline}
                          </p>
                        </div>
                      </Link>
                    ))}

                    <div className="col-span-2 pt-2 border-t border-white/10 bg-white/[0.03] p-2.5 rounded-lg flex items-center justify-between">
                      <span className="text-[11px] text-slate-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
                        Personalized consultations available
                      </span>
                      <button
                        onClick={() => onOpenBooking()}
                        className="text-xs font-semibold text-champagne-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Book Free Consultation
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((item) => (
              <Link000
                key={item.path}
                href={item.path}
                className={`text-xs font-semibold uppercase tracking-luxury py-1 transition-colors ${
                  location.pathname === item.path
                    ? "text-champagne-400 font-bold before:scale-x-100"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {item.name}
              </Link000>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LiquidGlassButton
              variant="champagne"
              size="sm"
              onClick={() => onOpenBooking()}
            >
              Book Appointment
            </LiquidGlassButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <LiquidGlassButton
              variant="champagne"
              size="sm"
              onClick={() => onOpenBooking()}
              className="py-1.5 px-3.5 text-[11px]"
            >
              Book
            </LiquidGlassButton>
            <button
              onClick={onOpenMobileMenu}
              className="p-2 text-studio-espresso hover:text-champagne-600 transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      {/* Spacer so content doesn't get clipped under fixed navbar */}
      <div className="h-20 sm:h-24" />
    </>
  );
};
