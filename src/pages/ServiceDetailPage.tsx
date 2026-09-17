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
} from "lucide-react";
import { servicesData, ServiceItem } from "../data/servicesData";
import { galleryItems } from "../data/galleryData";
import { SeoHead } from "../components/common/SeoHead";
import { SectionHeading } from "../components/common/SectionHeading";
import {
  generateServiceSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "../utils/seo";
import { siteConfig, buildWhatsAppLink } from "../config/siteConfig";
import { analytics } from "../utils/analytics";

interface ServiceDetailPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();

  const service: ServiceItem | undefined = servicesData.find(
    (s) => s.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services in the same category (excluding current)
  const relatedServices = servicesData
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  // SEO Schemas
  const serviceSchema = generateServiceSchema(service);
  const faqSchema = generateFaqSchema(service.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.categoryName, url: `/services/${service.category}` },
    { name: service.name, url: `/services/${service.slug}` },
  ]);

  return (
    <div className="animate-fadeIn">
      <SeoHead
        title={service.seoTitle}
        description={service.seoDescription}
        keywords={`${service.name.toLowerCase()} dimapur, ${service.name.toLowerCase()} nagaland, church road salon`}
        canonicalPath={`/services/${service.slug}`}
        jsonLd={[serviceSchema, ...(faqSchema ? [faqSchema] : []), breadcrumbSchema]}
      />

      {/* Breadcrumb Navigation Strip */}
      <div className="bg-studio-cream/50 border-b border-studio-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-studio-taupe">
          <Link to="/" className="hover:text-studio-espresso">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-studio-muted" />
          <Link to="/services" className="hover:text-studio-espresso">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-studio-muted" />
          <Link to={`/services/${service.category}`} className="hover:text-studio-espresso">
            {service.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-studio-muted" />
          <span className="text-studio-espresso font-semibold truncate">
            {service.name}
          </span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center bg-studio-espresso text-studio-ivory py-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-espresso via-studio-espresso/70 to-studio-espresso/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-champagne-300 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.categoryName} Studio • Church Road, Dimapur</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-studio-ivory font-medium tracking-tight">
              {service.name}
            </h1>

            <p className="text-sm sm:text-base text-champagne-100/80 max-w-2xl leading-relaxed font-light">
              {service.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <button
                onClick={() => {
                  analytics.trackBookingStart(service.name);
                  onOpenBooking(service.id);
                }}
                className="px-7 py-3.5 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service</span>
              </button>

              <a
                href={buildWhatsAppLink(service.prefilledWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackWhatsAppClick(service.name, "service_hero")}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-studio-ivory border border-white/20 text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-champagne-400" />
                <span>WhatsApp Query</span>
              </a>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 backdrop-blur-sm text-left space-y-4">
            <h3 className="text-xs uppercase font-bold tracking-luxury text-champagne-400">
              Treatment Snapshot
            </h3>

            <div className="space-y-3 text-xs text-champagne-100/90">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Estimated Duration</span>
                  <span className="text-white/70">{service.durationPlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Tag className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Pricing Model</span>
                  <span className="text-white/70">{service.pricePlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Hygiene & Safety</span>
                  <span className="text-white/70">Sterilized tools & single-use disposables</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitability Disclaimer if applicable */}
      {service.suitabilityDisclaimer && (
        <div className="bg-amber-50 border-b border-amber-200 py-3.5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p>{service.suitabilityDisclaimer}</p>
          </div>
        </div>
      )}

      {/* 2. WHAT IS IT? & WHO IS IT FOR? */}
      <section className="py-20 bg-studio-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* What is it? */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600">
                <span className="w-4 h-px bg-champagne-500" />
                <span>The Treatment Essence</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-studio-espresso font-medium">
                WHAT IS IT?
              </h2>
              <p className="text-sm sm:text-base text-studio-charcoal/80 leading-relaxed whitespace-pre-line">
                {service.fullDescription}
              </p>

              {/* Sub-styles breakdown if present (e.g. Eyelash extensions) */}
              {service.subStyles && (
                <div className="mt-6 pt-6 border-t border-studio-border space-y-4">
                  <h3 className="font-serif text-xl text-studio-espresso font-medium">
                    Available Extension Styles:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.subStyles.map((style) => (
                      <div key={style.name} className="p-3.5 bg-studio-cream/50 border border-studio-border">
                        <span className="font-semibold text-xs text-studio-espresso block mb-1">
                          {style.name}
                        </span>
                        <p className="text-[11px] text-studio-taupe leading-relaxed">
                          {style.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Who is it for? */}
            <div className="lg:col-span-5 bg-studio-cream/40 border border-studio-border p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-studio-espresso font-medium mb-4">
                WHO IS IT FOR?
              </h3>
              <p className="text-xs text-studio-taupe mb-6 leading-relaxed">
                This service is particularly suited for clients experiencing the following requirements:
              </p>
              <ul className="space-y-3.5 text-xs text-studio-charcoal">
                {service.whoIsItFor.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-champagne-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-studio-border">
                <p className="text-[11px] text-studio-taupe leading-relaxed">
                  Have unique preferences? We customize each step during your initial salon consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT TO EXPECT — STEP BY STEP */}
      <section className="py-20 bg-studio-cream/30 border-t border-b border-studio-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Appointment Journey"
            title="WHAT TO EXPECT AT ESSENCE"
            subtitle="Our structured 5-stage protocol engineered for comfort, precision results, and lasting aftercare."
            className="mb-14 text-center"
          />

          <div className="space-y-6">
            {service.whatToExpect.map((step) => (
              <div
                key={step.step}
                className="bg-studio-ivory border border-studio-border p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-champagne-500 transition-colors shadow-subtle"
              >
                <div className="w-12 h-12 rounded-none bg-studio-espresso text-champagne-300 font-serif text-xl font-semibold flex items-center justify-center flex-shrink-0">
                  0{step.step}
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-xl text-studio-espresso font-medium">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-studio-taupe mt-1.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DURATION & PRICING TRANSPARENCY */}
      <section className="py-16 bg-studio-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-studio-cream/40 border border-studio-border p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-champagne-600 block mb-1">
                Typical Appointment Length
              </span>
              <h4 className="font-serif text-2xl text-studio-espresso font-medium">
                Time Investment
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-studio-taupe leading-relaxed">
                {service.durationPlaceholder}
              </p>
              <p className="text-[11px] text-studio-muted mt-2">
                Actual duration varies depending on natural density, length, and personalized design complexity.
              </p>
            </div>

            <div className="sm:border-l sm:border-studio-border sm:pl-8">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-champagne-600 block mb-1">
                Investment & Rates
              </span>
              <h4 className="font-serif text-2xl text-studio-espresso font-medium">
                Transparent Pricing
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-champagne-700 font-semibold leading-relaxed">
                {service.pricePlaceholder}
              </p>
              <p className="text-[11px] text-studio-muted mt-2">
                We believe in zero surprise add-ons. Exact cost breakdown is provided upfront following your assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs FOR THIS SERVICE */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-studio-cream/30 border-t border-b border-studio-border/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Clear Guidance"
              title="FREQUENTLY ASKED QUESTIONS"
              subtitle={`Everything you should understand before scheduling your ${service.name.toLowerCase()} appointment.`}
              className="mb-12 text-center"
            />

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-studio-ivory border border-studio-border p-6 shadow-subtle">
                  <h4 className="font-serif text-lg text-studio-espresso font-medium">
                    {faq.question}
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-studio-taupe leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. BOOK THIS SERVICE — HIGH INTENT CONVERSION STRIP */}
      <section className="py-20 bg-studio-espresso text-studio-ivory text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs uppercase tracking-widest text-champagne-400 font-semibold mb-2">
            📍 Church Road, Dimapur
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight">
            BOOK YOUR {service.name.toUpperCase()}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-champagne-100/80 max-w-lg mx-auto leading-relaxed">
            Ready to experience personalized care at Essence? Secure your preferred date and time via WhatsApp.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                analytics.trackBookingStart(service.name);
                onOpenBooking(service.id);
              }}
              className="w-full sm:w-auto px-8 py-4 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>

            <a
              href={buildWhatsAppLink(service.prefilledWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackWhatsAppClick(service.name, "service_bottom_cta")}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-studio-ivory border border-white/20 text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-champagne-400" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. RELATED SERVICES IN SAME CATEGORY */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-studio-ivory border-t border-studio-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl text-studio-espresso font-medium">
                Related {service.categoryName} Services
              </h3>
              <Link
                to={`/services/${service.category}`}
                className="text-xs font-semibold uppercase tracking-luxury text-champagne-600 hover:text-studio-espresso"
              >
                View all in {service.categoryName} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="group bg-studio-cream/30 border border-studio-border p-4 hover:border-champagne-500 transition-colors block"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-studio-cream mb-3">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="font-serif text-lg text-studio-espresso group-hover:text-champagne-600 font-medium">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-studio-taupe line-clamp-2 mt-1">
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
