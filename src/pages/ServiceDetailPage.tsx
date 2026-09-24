import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Tag,
  AlertCircle,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Calendar,
  MapPin,
  Search,
  Navigation,
} from "lucide-react";
import { useServices } from "../context/ServicesContext";
import { ServiceItem } from "../data/servicesData";
import { galleryItems } from "../data/galleryData";
import { SeoHead } from "../components/common/SeoHead";
import { SectionHeading } from "../components/common/SectionHeading";
import {
  generateServiceSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from "../utils/seo";
import { siteConfig, buildWhatsAppLink } from "../config/siteConfig";
import { analytics } from "../utils/analytics";
import { LiquidGlassButton } from "../components/ui/liquid-glass-button";

interface ServiceDetailPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const { services, getServiceBySlug } = useServices();

  const service: ServiceItem | undefined = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services in the same category (excluding current)
  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  // Local SEO Keywords (specific intent variations for Dimapur & Nagaland)
  const localKeywordsString = service.localKeywords && service.localKeywords.length > 0
    ? service.localKeywords.join(", ")
    : `${service.name.toLowerCase()} dimapur, ${service.name.toLowerCase()} nagaland, church road dimapur salon, best ${service.name.toLowerCase()} parlour`;

  const localSeoTitle = `${service.name} in Dimapur | Church Road Studio | Essence`;
  const localSeoDescription = `Book ${service.name} at Essence Hair and Makeup Studio on Church Road, Dimapur. ${service.shortDescription} Accessible from Chümoukedima and Kohima.`;

  // SEO Schemas
  const serviceSchema = generateServiceSchema(service);
  const faqSchema = generateFaqSchema(service.faqs);
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.categoryName, url: `/services/${service.category}` },
    { name: service.name, url: `/services/${service.slug}` },
  ]);

  return (
    <div className="animate-fadeIn bg-[#040711] text-white">
      <SeoHead
        title={localSeoTitle}
        description={localSeoDescription}
        keywords={localKeywordsString}
        canonicalPath={`/services/${service.slug}`}
        jsonLd={[serviceSchema, ...(faqSchema ? [faqSchema] : []), breadcrumbSchema, localBusinessSchema]}
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
          <Link to={`/services/${service.category}`} className="hover:text-champagne-300 transition-colors">
            {service.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-medium truncate">
            {service.name}
          </span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center bg-[#040711] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-champagne-500/5 blur-[140px] pointer-events-none" />

        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={service.image}
            alt={`${service.name} at Essence Studio Dimapur`}
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-[#040711]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-champagne-500/10 border border-champagne-500/20 text-champagne-400 text-xs font-semibold tracking-widest uppercase rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.categoryName} Studio • Church Road, Dimapur</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight">
              {service.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-light">
              {service.shortDescription}
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <LiquidGlassButton
                size="md"
                variant="champagne"
                onClick={() => {
                  analytics.trackBookingStart(service.name);
                  onOpenBooking(service.id);
                }}
              >
                <Calendar className="w-4 h-4 text-champagne-300" />
                <span>Book This Service</span>
              </LiquidGlassButton>

              <a
                href={buildWhatsAppLink(service.prefilledWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackWhatsAppClick(service.name, "service_hero")}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-champagne-400/40 text-xs font-semibold uppercase tracking-luxury transition-all rounded-xl inline-flex items-center gap-2 backdrop-blur-md"
              >
                <MessageCircle className="w-4 h-4 text-champagne-400" />
                <span>WhatsApp Query</span>
              </a>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-4 rounded-2xl bg-[#090E1C]/90 border border-white/10 p-6 sm:p-7 backdrop-blur-xl text-left space-y-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-xs uppercase font-bold tracking-luxury text-champagne-400">
                Treatment Snapshot
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Estimated Duration</span>
                  <span className="text-slate-400">{service.durationPlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Tag className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Pricing Model</span>
                  <span className="text-slate-400">{service.pricePlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Studio Location</span>
                  <span className="text-slate-400">Church Road, Dimapur, Nagaland</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Hygiene & Safety</span>
                  <span className="text-slate-400">Sterilized tools & single-use disposables</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitability Disclaimer if applicable */}
      {service.suitabilityDisclaimer && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 py-3.5 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3 text-xs text-amber-200 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>{service.suitabilityDisclaimer}</p>
          </div>
        </div>
      )}

      {/* 2. WHAT IS IT? & WHO IS IT FOR? */}
      <section className="py-20 sm:py-24 bg-[#060A14] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* What is it? */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-400 font-mono">
                <span className="w-4 h-px bg-champagne-400" />
                <span>The Treatment Essence</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white font-semibold tracking-tight">
                WHAT IS IT?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line font-light">
                {service.fullDescription}
              </p>

              {/* Sub-styles breakdown if present */}
              {service.subStyles && (
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                  <h3 className="font-heading text-lg text-white font-semibold">
                    Available Extension Styles:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.subStyles.map((style) => (
                      <div key={style.name} className="p-4 rounded-xl bg-[#090E1C]/80 border border-white/10 backdrop-blur-md">
                        <span className="font-semibold text-xs text-champagne-300 block mb-1">
                          {style.name}
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                          {style.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Who is it for? */}
            <div className="lg:col-span-5 rounded-2xl bg-[#090E1C]/90 border border-white/10 p-7 sm:p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <h3 className="font-heading text-xl text-white font-semibold mb-3 tracking-tight">
                WHO IS IT FOR?
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed font-light">
                This service is particularly suited for clients experiencing the following requirements:
              </p>
              <ul className="space-y-3.5 text-xs text-slate-200">
                {service.whoIsItFor.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-light">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                  Have unique preferences? We customize each step during your initial salon consultation on Church Road, Dimapur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT TO EXPECT — STEP BY STEP */}
      <section className="py-20 sm:py-24 bg-[#040711] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="The Appointment Journey"
            title="WHAT TO EXPECT AT ESSENCE"
            subtitle="Our structured 5-stage protocol engineered for comfort, precision results, and lasting aftercare."
            className="mb-14 text-center"
          />

          <div className="space-y-4">
            {service.whatToExpect.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl bg-[#090E1C]/80 border border-white/10 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-champagne-400/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-champagne-500/10 border border-champagne-500/20 text-champagne-400 font-mono text-base font-bold flex items-center justify-center flex-shrink-0">
                  0{step.step}
                </div>
                <div className="flex-1">
                  <h4 className="font-heading text-lg sm:text-xl text-white font-semibold">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DURATION & PRICING TRANSPARENCY */}
      <section className="py-16 sm:py-20 bg-[#060A14] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#090E1C]/90 border border-white/10 p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-champagne-400 block mb-1">
                Typical Appointment Length
              </span>
              <h4 className="font-heading text-2xl text-white font-semibold">
                Time Investment
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {service.durationPlaceholder}
              </p>
              <p className="text-[11px] text-slate-500 mt-2 font-light">
                Actual duration varies depending on natural density, length, and personalized design complexity.
              </p>
            </div>

            <div className="sm:border-l sm:border-white/10 sm:pl-8">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-champagne-400 block mb-1">
                Investment & Rates
              </span>
              <h4 className="font-heading text-2xl text-white font-semibold">
                Transparent Pricing
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-champagne-400 font-semibold leading-relaxed">
                {service.pricePlaceholder}
              </p>
              <p className="text-[11px] text-slate-500 mt-2 font-light">
                We believe in zero surprise add-ons. Exact cost breakdown is provided upfront following your assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCAL DIMAPUR STUDIO ACCESS & REGIONAL KEYWORD SIGNALS */}
      <section className="py-20 sm:py-24 bg-[#040711] border-b border-white/10 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-champagne-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Local Presence & Coverage"
            title={`DIMAPUR STUDIO ACCESS FOR ${service.name.toUpperCase()}`}
            subtitle={`Serving clients across Church Road, City Tower, Chümoukedima, Kohima, and surrounding Nagaland districts.`}
            className="mb-14 text-center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Col 1: Landmark Proximity & Transit Guide */}
            <div className="lg:col-span-6 rounded-2xl bg-[#090E1C]/80 border border-white/10 p-7 sm:p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/20 text-champagne-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Physical Salon Location</span>
                </div>

                <h3 className="font-heading text-xl text-white font-semibold mb-3">
                  Church Road, Dimapur, Nagaland 797112
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                  Essence Hair and Makeup Studio is centrally located along the bustling Church Road commercial hub. Our prime location ensures effortless travel from all key landmarks:
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Navigation className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span><strong>5 mins:</strong> Dimapur Railway Station & Hong Kong Market junction</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Navigation className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span><strong>7 mins:</strong> City Tower & Nyamo Lotha Road shopping district</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Navigation className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Direct Route:</strong> Quick connectivity from Chümoukedima via Asian Highway 1 / NH-29</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Navigation className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Parking:</strong> Dedicated vehicle parking and swift auto/cab drop-off</span>
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
                  <span>Open In Google Maps →</span>
                </a>

                <span className="text-[11px] text-slate-400 font-mono">PIN: 797112</span>
              </div>
            </div>

            {/* Col 2: High-Intent Local Search Tags Cloud */}
            <div className="lg:col-span-6 rounded-2xl bg-[#090E1C]/80 border border-white/10 p-7 sm:p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-500/10 border border-champagne-500/20 text-champagne-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <Search className="w-3.5 h-3.5" />
                  <span>Related Local Search Terms</span>
                </div>

                <h3 className="font-heading text-xl text-white font-semibold mb-2">
                  Popular Queries for this Service
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                  Clients across Dimapur and Nagaland regularly search for these local treatment variations:
                </p>

                {/* Local keyword pills */}
                <div className="flex flex-wrap gap-2">
                  {(service.localKeywords || [
                    `${service.name.toLowerCase()} dimapur`,
                    `${service.name.toLowerCase()} church road`,
                    `best ${service.name.toLowerCase()} nagaland`,
                    `${service.name.toLowerCase()} price dimapur`,
                    `parlour for ${service.name.toLowerCase()} dimapur`,
                    `${service.name.toLowerCase()} near me`,
                  ]).map((kw, i) => (
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
                  Looking for these specific treatments? Contact our front desk directly at{" "}
                  <a href={`tel:${siteConfig.contact.phoneNumber}`} className="text-champagne-400 hover:underline">
                    {siteConfig.contact.phoneDisplay}
                  </a>{" "}
                  for consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs FOR THIS SERVICE */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 sm:py-24 bg-[#060A14] border-b border-white/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Clear Guidance"
              title="FREQUENTLY ASKED QUESTIONS"
              subtitle={`Everything you should understand before scheduling your ${service.name.toLowerCase()} appointment.`}
              className="mb-12 text-center"
            />

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-[#090E1C]/80 border border-white/10 p-6 sm:p-7 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <h4 className="font-heading text-lg text-white font-semibold tracking-tight">
                    {faq.question}
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}

              {/* Local Appointment FAQ */}
              <div className="rounded-2xl bg-[#090E1C]/80 border border-white/10 p-6 sm:p-7 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <h4 className="font-heading text-lg text-white font-semibold tracking-tight">
                  Where is Essence Studio located in Dimapur and how do I schedule?
                </h4>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  We are conveniently situated on Church Road, Dimapur, Nagaland. You can schedule your {service.name} appointment directly online, call us at {siteConfig.contact.phoneDisplay}, or send an inquiry via WhatsApp for immediate confirmation.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. BOOK THIS SERVICE — HIGH INTENT CONVERSION STRIP */}
      <section className="py-20 sm:py-28 bg-[#040711] text-white text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs uppercase tracking-widest text-champagne-400 font-semibold mb-2">
            📍 Church Road, Dimapur
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold tracking-tight">
            BOOK YOUR {service.name.toUpperCase()}
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed font-light">
            Ready to experience elevated beauty care in Dimapur? Secure your preferred date and time via WhatsApp.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <LiquidGlassButton
              size="lg"
              variant="champagne"
              onClick={() => {
                analytics.trackBookingStart(service.name);
                onOpenBooking(service.id);
              }}
              className="w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4 text-champagne-300" />
              <span>Book Appointment Online</span>
            </LiquidGlassButton>

            <a
              href={buildWhatsAppLink(service.prefilledWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackWhatsAppClick(service.name, "service_bottom_cta")}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-champagne-400/40 text-xs font-semibold uppercase tracking-widest transition-all rounded-full inline-flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-champagne-400" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. RELATED SERVICES IN SAME CATEGORY */}
      {relatedServices.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#060A14] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-heading text-2xl text-white font-semibold tracking-tight">
                Related {service.categoryName} Services
              </h3>
              <Link
                to={`/services/${service.category}`}
                className="text-xs font-semibold uppercase tracking-luxury text-champagne-400 hover:text-champagne-300 transition-colors"
              >
                View all in {service.categoryName} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="group rounded-2xl bg-[#090E1C]/80 border border-white/10 p-5 hover:border-champagne-400/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] block overflow-hidden"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-black/40 mb-3.5">
                    <img
                      src={rel.image}
                      alt={`${rel.name} in Dimapur`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <h4 className="font-heading text-lg text-white group-hover:text-champagne-300 font-semibold tracking-tight transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1.5 font-light">
                    {rel.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
