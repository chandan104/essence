import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { servicesData, serviceCategories, ServiceCategory } from "../data/servicesData";
import { SeoHead } from "../components/common/SeoHead";
import { SectionHeading } from "../components/common/SectionHeading";
import { generateBreadcrumbSchema } from "../utils/seo";
import { buildWhatsAppLink } from "../config/siteConfig";
import { analytics } from "../utils/analytics";

interface ServicesPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = servicesData.filter((service) => {
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
    <div className="py-12 sm:py-16 bg-studio-ivory animate-fadeIn">
      <SeoHead
        title="All Services | Hair, Nails, Skin, Lashes & Brows"
        description="Explore the complete service menu at Essence Hair and Makeup Studio, Church Road, Dimapur. Restorative hair treatments, nail art, facials, lashes, and brow shaping."
        keywords="dimapur salon services, hair colour dimapur, nail extensions dimapur, hydra facial nagaland, lash extensions dimapur"
        canonicalPath="/services"
        jsonLd={breadcrumbsSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-champagne-500" />
            <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600">
              Essence Treatment Menu
            </span>
            <span className="w-6 h-px bg-champagne-500" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-studio-espresso font-medium tracking-tight">
            SERVICES
          </h1>
          <p className="mt-4 text-sm sm:text-base text-studio-taupe leading-relaxed">
            From hair transformations to finishing touches, explore everything available at Essence Hair and Makeup Studio on Church Road, Dimapur.
          </p>
        </div>

        {/* Category Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-studio-border mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-luxury transition-all border ${
                selectedCategory === "all"
                  ? "bg-studio-espresso text-studio-ivory border-studio-espresso"
                  : "bg-white text-studio-charcoal border-studio-border hover:border-champagne-500"
              }`}
            >
              All ({servicesData.length})
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-luxury transition-all border ${
                  selectedCategory === cat.id
                    ? "bg-studio-espresso text-studio-ivory border-studio-espresso"
                    : "bg-white text-studio-charcoal border-studio-border hover:border-champagne-500"
                }`}
              >
                {cat.name} ({servicesData.filter((s) => s.category === cat.id).length})
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-studio-taupe" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-studio-border pl-10 pr-4 py-2 text-xs sm:text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 transition-colors"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-studio-cream/40 border border-studio-border">
            <p className="font-serif text-xl text-studio-espresso">No services match your search.</p>
            <p className="text-xs text-studio-taupe mt-1">Try clearing filters or search for terms like "hair", "lashes", "hydra", or "nails".</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-studio-espresso text-studio-ivory text-xs uppercase font-semibold tracking-luxury"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-studio-ivory border border-studio-border flex flex-col justify-between hover:border-champagne-500 transition-all duration-300 shadow-subtle hover:shadow-elevated"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-studio-cream border-b border-studio-border">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover img-editorial"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-studio-espresso/85 backdrop-blur-sm text-[10px] uppercase font-semibold tracking-widest text-champagne-300">
                      {service.categoryName}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl sm:text-2xl text-studio-espresso font-medium group-hover:text-champagne-600 transition-colors">
                      <Link to={`/services/${service.slug}`}>{service.name}</Link>
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-studio-taupe leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 pt-4 border-t border-studio-border/60 text-[11px] text-studio-taupe space-y-1">
                      <p className="flex items-center justify-between">
                        <span>Duration:</span>
                        <span className="font-medium text-studio-charcoal">Consultation based</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span>Pricing:</span>
                        <span className="font-medium text-champagne-700">Available on consultation</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer CTAs */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="py-2.5 px-3 text-center border border-studio-espresso/30 text-studio-espresso hover:border-studio-espresso hover:bg-studio-espresso hover:text-studio-ivory text-[11px] font-semibold uppercase tracking-luxury transition-all flex items-center justify-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <button
                    onClick={() => {
                      analytics.trackBookingStart(service.name);
                      onOpenBooking(service.id);
                    }}
                    className="py-2.5 px-3 text-center bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-[11px] font-semibold uppercase tracking-luxury transition-all flex items-center justify-center gap-1"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Category Quick Links Footnote */}
        <div className="mt-16 p-8 bg-studio-cream/40 border border-studio-border text-center">
          <h3 className="font-serif text-2xl text-studio-espresso font-medium mb-2">
            Looking for a specific department?
          </h3>
          <p className="text-xs sm:text-sm text-studio-taupe max-w-xl mx-auto mb-6">
            Explore our five dedicated department pages for deep-dive information, FAQs, and specialized studio photos.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/services/${cat.id}`}
                className="px-4 py-2 bg-studio-ivory border border-studio-border hover:border-champagne-500 text-xs font-semibold uppercase tracking-luxury text-studio-espresso hover:text-champagne-600 transition-colors"
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
