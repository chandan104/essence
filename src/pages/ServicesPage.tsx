import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { useServices } from "../context/ServicesContext";
import { ServiceCategory } from "../data/servicesData";
import { SeoHead } from "../components/common/SeoHead";
import { SectionHeading } from "../components/common/SectionHeading";
import { generateBreadcrumbSchema } from "../utils/seo";
import { buildWhatsAppLink } from "../config/siteConfig";
import { analytics } from "../utils/analytics";

interface ServicesPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const { services, categories: serviceCategories } = useServices();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <div className="py-16 sm:py-24 bg-[#040711] text-white animate-fadeIn relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-champagne-500/5 blur-[140px] pointer-events-none" />

      <SeoHead
        title="All Services | Hair, Nails, Skin, Lashes & Brows"
        description="Explore the complete service menu at Essence Hair and Makeup Studio, Church Road, Dimapur. Restorative hair treatments, nail art, facials, lashes, and brow shaping."
        keywords="dimapur salon services, hair colour dimapur, nail extensions dimapur, hydra facial nagaland, lash extensions dimapur"
        canonicalPath="/services"
        jsonLd={breadcrumbsSchema}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-champagne-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-champagne-400 font-mono">
              Essence Treatment Menu
            </span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-champagne-400" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight">
            SERVICES
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
            From hair transformations to finishing touches, explore everything available at Essence Hair and Makeup Studio on Church Road, Dimapur.
          </p>
        </div>

        {/* Category Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-luxury transition-all rounded-full border ${
                selectedCategory === "all"
                  ? "bg-champagne-500 text-black border-champagne-500 font-bold shadow-[0_4px_16px_rgba(200,169,126,0.3)]"
                  : "bg-white/5 text-slate-300 border-white/10 hover:border-champagne-400/40 hover:text-white backdrop-blur-md"
              }`}
            >
              All ({services.length})
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-luxury transition-all rounded-full border ${
                  selectedCategory === cat.id
                    ? "bg-champagne-500 text-black border-champagne-500 font-bold shadow-[0_4px_16px_rgba(200,169,126,0.3)]"
                    : "bg-white/5 text-slate-300 border-white/10 hover:border-champagne-400/40 hover:text-white backdrop-blur-md"
                }`}
              >
                {cat.name} ({services.filter((s) => s.category === cat.id).length})
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#090E1C] border border-white/10 rounded-full pl-11 pr-5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-champagne-400 transition-colors backdrop-blur-md"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-[#090E1C]/80 border border-white/10 backdrop-blur-md">
            <p className="font-heading text-xl text-white font-semibold">No services match your search.</p>
            <p className="text-xs text-slate-400 mt-2">Try clearing filters or search for terms like "hair", "lashes", "hydra", or "nails".</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-5 px-6 py-2.5 rounded-full bg-champagne-500 hover:bg-champagne-400 text-black text-xs uppercase font-bold tracking-luxury transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl bg-[#090E1C]/80 backdrop-blur-xl border border-white/10 flex flex-col justify-between hover:border-champagne-400/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/10">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#040711]/90 backdrop-blur-md border border-white/15 text-[10px] uppercase font-semibold tracking-widest text-champagne-300">
                      {service.categoryName}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 sm:p-7">
                    <h3 className="font-heading text-xl sm:text-2xl text-white font-semibold group-hover:text-champagne-300 transition-colors tracking-tight">
                      <Link to={`/services/${service.slug}`}>{service.name}</Link>
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 font-light">
                      {service.shortDescription}
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/10 text-[11px] text-slate-400 space-y-1.5">
                      <p className="flex items-center justify-between">
                        <span>Duration:</span>
                        <span className="font-medium text-slate-200">Consultation based</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span>Pricing:</span>
                        <span className="font-medium text-champagne-400">Available on consultation</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer CTAs */}
                <div className="p-6 sm:p-7 pt-0 grid grid-cols-2 gap-3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="py-2.5 px-3 text-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-champagne-400/40 text-[11px] font-semibold uppercase tracking-luxury transition-all flex items-center justify-center gap-1.5 backdrop-blur-md"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3 text-champagne-400" />
                  </Link>
                  <button
                    onClick={() => {
                      analytics.trackBookingStart(service.name);
                      onOpenBooking(service.id);
                    }}
                    className="py-2.5 px-3 text-center rounded-xl bg-champagne-500 hover:bg-champagne-400 text-black text-[11px] font-bold uppercase tracking-luxury transition-all flex items-center justify-center gap-1.5 shadow-[0_4px_16px_rgba(200,169,126,0.3)]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-black" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Category Quick Links Footnote */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#090E1C]/80 backdrop-blur-xl border border-white/10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <h3 className="font-heading text-2xl sm:text-3xl text-white font-semibold mb-3 tracking-tight">
            Looking for a specific department?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8 font-light">
            Explore our five dedicated department pages for deep-dive information, FAQs, and specialized studio photos.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/services/${cat.id}`}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/15 hover:border-champagne-400/40 text-xs font-semibold uppercase tracking-luxury text-slate-200 hover:text-champagne-300 transition-all backdrop-blur-md"
              >
                {cat.name} Department →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
