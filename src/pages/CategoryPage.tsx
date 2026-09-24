import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  MessageCircle,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Search,
  Navigation,
  Clock,
  Calendar,
} from "lucide-react";
import { useServices } from "../context/ServicesContext";
import { galleryItems } from "../data/galleryData";
import { SeoHead } from "../components/common/SeoHead";
import { SectionHeading } from "../components/common/SectionHeading";
import {
  generateBreadcrumbSchema,
  generateFaqSchema,
  generateCategorySchema,
  generateLocalBusinessSchema,
} from "../utils/seo";
import { siteConfig, buildWhatsAppLink } from "../config/siteConfig";
import { analytics } from "../utils/analytics";
import { LiquidGlassButton } from "../components/ui/liquid-glass-button";

interface CategoryPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ onOpenBooking }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { services: allServices, categories: serviceCategories } = useServices();

  const category = serviceCategories.find(
    (c) => c.id.toLowerCase() === categoryId?.toLowerCase()
  );

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const services = allServices.filter((s) => s.category === category.id);
  const relatedGallery = galleryItems.filter(
    (g) => g.category === category.id || (category.id === "hair" && g.category === "makeup")
  );

  // Compile top FAQs for this category
  const categoryFaqs = services.flatMap((s) => s.faqs).slice(0, 6);

  // Aggregate local keywords for this category
  const serviceKeywords = services.flatMap((s) => s.localKeywords || []);
  const defaultCategoryKeywords = [
    `${category.name.toLowerCase()} salon in dimapur`,
    `best ${category.name.toLowerCase()} parlour dimapur`,
    `${category.name.toLowerCase()} church road dimapur`,
    `${category.name.toLowerCase()} services nagaland`,
    `top ${category.name.toLowerCase()} studio near me`,
    `${category.name.toLowerCase()} price dimapur`,
    `${category.name.toLowerCase()} treatment chumoukedima`,
    `essence salon dimapur`,
  ];
  const combinedKeywords = Array.from(new Set([...defaultCategoryKeywords, ...serviceKeywords]));
  const categoryKeywordsString = combinedKeywords.slice(0, 16).join(", ");

  // Schema generation
  const categorySchema = generateCategorySchema(
    category.name,
    category.id,
    category.description,
    services
  );
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: category.name, url: `/services/${category.id}` },
  ]);
  const faqSchema = generateFaqSchema(categoryFaqs);

  return (
    <div className="animate-fadeIn bg-[#040711] text-white min-h-screen">
      <SeoHead
        title={`Best ${category.name} Salon Services in Dimapur | Essence Studio`}
        description={`Explore premium ${category.name.toLowerCase()} services at Essence Hair and Makeup Studio on Church Road, Dimapur. ${category.subheadline}. Certified specialists, transparent pricing.`}
        keywords={categoryKeywordsString}
        canonicalPath={`/services/${category.id}`}
        jsonLd={[categorySchema, ...(faqSchema ? [faqSchema] : []), breadcrumbsSchema, localBusinessSchema]}
      />

      {/* Breadcrumb Navigation Strip */}
      <div className="bg-[#060A14] border-b border-white/10 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-champagne-300 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/services" className="hover:text-champagne-300 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-medium truncate">
            {category.name}
          </span>
        </div>
      </div>

      {/* Category Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#040711] text-white py-20 overflow-hidden border-b border-white/10">
        {/* Ambient lighting glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne-500/5 blur-[140px] pointer-events-none" />

        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={category.image}
            alt={`${category.name} Studio Dimapur`}
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-[#040711]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-500/10 border border-champagne-500/20 text-champagne-400 text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Essence {category.name} Suite • Church Road, Dimapur</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl text-white font-semibold tracking-tight">
            {category.name.toUpperCase()}
          </h1>

          <p className="text-xs sm:text-sm font-semibold tracking-luxury uppercase text-champagne-400">
            {category.subheadline}
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {category.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <LiquidGlassButton
              size="md"
              variant="champagne"
              onClick={() => {
                analytics.trackBookingStart(category.name);
                onOpenBooking(services[0]?.id);
              }}
            >
              <Calendar className="w-4 h-4 text-champagne-300" />
              <span>Book {category.name} Appointment</span>
            </LiquidGlassButton>

            <a
              href={buildWhatsAppLink(`Hi Essence Studio, I'd like to enquire about ${category.name} services at Church Road, Dimapur.`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackWhatsAppClick(category.name, "category_hero")}
              className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-champagne-400/40 text-xs font-semibold uppercase tracking-widest transition-all rounded-full inline-flex items-center gap-2 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-champagne-400" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services in this category */}
      <section className="py-20 sm:py-28 bg-[#040711]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`${category.name} Treatment Menu`}
            title={`ALL ${category.name.toUpperCase()} SERVICES`}
            subtitle="Select an individual treatment below to view procedure steps, FAQs, transparent pricing, and tailor-made aftercare guidance."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl bg-[#090E1C]/80 border border-white/10 flex flex-col justify-between hover:border-champagne-500/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#060A14] border-b border-white/10">
                    <img
                      src={service.image}
                      alt={`${service.name} in Dimapur`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-[#040711]/80 backdrop-blur-md border border-white/15 text-champagne-300 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-champagne-400" />
                      <span>Church Road</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-xl sm:text-2xl text-white font-semibold group-hover:text-champagne-300 transition-colors">
                      <Link to={`/services/${service.slug}`}>{service.name}</Link>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 font-light">
                      {service.shortDescription}
                    </p>

                    <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                      {service.whoIsItFor.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/10">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-luxury text-champagne-400 hover:text-champagne-300 transition-colors"
                  >
                    <span>Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <LiquidGlassButton
                    size="sm"
                    variant="champagne"
                    onClick={() => {
                      analytics.trackBookingStart(service.name);
                      onOpenBooking(service.id);
                    }}
                  >
                    Book Now
                  </LiquidGlassButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL DIMAPUR STUDIO ACCESS & KEYWORD SIGNALS */}
      <section className="py-20 bg-[#060A14] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Local Search & Transit Guide"
            title={`DIMAPUR ${category.name.toUpperCase()} STUDIO ACCESS`}
            subtitle="Centrally located on Church Road, catering to clients throughout Dimapur, Chümoukedima, and across Nagaland."
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Col 1: Landmark Navigation */}
            <div className="lg:col-span-6 rounded-2xl bg-[#090E1C]/80 border border-white/10 p-7 sm:p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/20 text-champagne-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Central Dimapur Landmark Proximity</span>
                </div>

                <h3 className="font-heading text-xl text-white font-semibold mb-3">
                  Visiting Essence Studio for {category.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                  Our Church Road salon is Dimapur's premier destination for high-standard {category.name.toLowerCase()} treatments. Easy access with dedicated parking and rapid cab connectivity:
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-champagne-400 flex-shrink-0" />
                    <span><strong>5 mins:</strong> Dimapur Railway Station & Hong Kong Market junction</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-champagne-400 flex-shrink-0" />
                    <span><strong>7 mins:</strong> City Tower & Nyamo Lotha Road shopping district</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-champagne-400 flex-shrink-0" />
                    <span><strong>25-35 mins:</strong> Chümoukedima via Asian Highway 1 (AH1 / NH-29)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <a
                  href={siteConfig.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.trackDirectionClick()}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-champagne-400 hover:text-champagne-300 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Directions In Google Maps →</span>
                </a>

                <span className="text-[11px] text-slate-400 font-mono">PIN: 797112</span>
              </div>
            </div>

            {/* Col 2: Category Local Keyword Cloud */}
            <div className="lg:col-span-6 rounded-2xl bg-[#090E1C]/80 border border-white/10 p-7 sm:p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/20 text-champagne-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <Search className="w-3.5 h-3.5" />
                  <span>Trending Local Queries</span>
                </div>

                <h3 className="font-heading text-xl text-white font-semibold mb-2">
                  Popular Searches for {category.name} in Dimapur
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                  Visitors searching for top {category.name.toLowerCase()} parlours in Dimapur and Nagaland find Essence Studio via these queries:
                </p>

                {/* Local keyword pills */}
                <div className="flex flex-wrap gap-2">
                  {combinedKeywords.slice(0, 14).map((kw, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono hover:border-champagne-400/40 hover:text-white transition-colors"
                    >
                      #{kw.replace(/\s+/g, "_")}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Have questions about pricing, techniques, or availability? Call us at{" "}
                  <a href={`tel:${siteConfig.contact.phoneNumber}`} className="text-champagne-400 hover:underline">
                    {siteConfig.contact.phoneDisplay}
                  </a>{" "}
                  or message us on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery for this Category */}
      {relatedGallery.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#040711] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <SectionHeading
                align="left"
                eyebrow="Studio Work"
                title={`${category.name.toUpperCase()} GALLERY`}
                subtitle="Recent looks and textures created at our Church Road studio."
              />
              <Link
                to="/gallery"
                className="text-xs font-semibold uppercase tracking-luxury text-champagne-400 hover:text-champagne-300 pb-1 border-b border-champagne-400"
              >
                All Works →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedGallery.slice(0, 4).map((item) => (
                <div key={item.id} className="relative aspect-square overflow-hidden rounded-xl bg-[#060A14] border border-white/10 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#040711]/80 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                    <p className="font-heading text-sm font-semibold">{item.title}</p>
                    <p className="text-[10px] text-champagne-300 mt-0.5">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category FAQs */}
      {categoryFaqs.length > 0 && (
        <section className="py-20 bg-[#060A14] border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title={`${category.name.toUpperCase()} ADVICE & CARE`}
              subtitle="Common questions regarding appointments, technique, and longevity in Dimapur."
              className="mb-12"
            />

            <div className="space-y-4">
              {categoryFaqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-[#090E1C]/80 border border-white/10 p-6 sm:p-7 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <h4 className="font-heading text-lg text-white font-semibold">
                    {faq.question}
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location & Booking CTA Strip */}
      <section className="py-20 bg-[#040711] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <p className="text-xs uppercase tracking-widest text-champagne-400 font-semibold mb-2">
            📍 Church Road, Dimapur, Nagaland
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold">
            Ready for your {category.name.toLowerCase()} appointment?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-4 max-w-lg mx-auto font-light leading-relaxed">
            Book online or chat with our team via WhatsApp to choose your perfect time slot with our certified specialists.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LiquidGlassButton
              size="md"
              variant="champagne"
              onClick={() => {
                analytics.trackBookingStart(category.name);
                onOpenBooking(services[0]?.id);
              }}
            >
              <Calendar className="w-4 h-4 text-champagne-300" />
              <span>Book {category.name} Service</span>
            </LiquidGlassButton>

            <a
              href={buildWhatsAppLink(`Hi Essence Studio, I want to book a ${category.name} service on Church Road, Dimapur.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-champagne-400/40 text-xs font-semibold uppercase tracking-widest rounded-full inline-flex items-center gap-2 backdrop-blur-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-champagne-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
