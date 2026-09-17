import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Sparkles, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { useServices } from "../context/ServicesContext";
import { ServiceCategory } from "../data/servicesData";
import { galleryItems } from "../data/galleryData";
import { SeoHead } from "../components/common/SeoHead";
import { SectionHeading } from "../components/common/SectionHeading";
import { generateBreadcrumbSchema, generateFaqSchema } from "../utils/seo";
import { siteConfig, buildWhatsAppLink } from "../config/siteConfig";
import { analytics } from "../utils/analytics";

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
  const categoryFaqs = services.flatMap((s) => s.faqs).slice(0, 5);

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: category.name, url: `/services/${category.id}` },
  ]);

  const faqSchema = generateFaqSchema(categoryFaqs);

  return (
    <div className="animate-fadeIn">
      <SeoHead
        title={`${category.name} Salon Services in Dimapur | Essence Studio`}
        description={`Explore premium ${category.name.toLowerCase()} services at Essence Hair and Makeup Studio on Church Road, Dimapur. ${category.subheadline}. Book your appointment.`}
        keywords={`${category.name.toLowerCase()} salon dimapur, ${category.name.toLowerCase()} services nagaland, church road dimapur`}
        canonicalPath={`/services/${category.id}`}
        jsonLd={[breadcrumbsSchema, ...(faqSchema ? [faqSchema] : [])]}
      />

      {/* Category Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-studio-espresso text-studio-ivory py-16 -mt-20 sm:-mt-24 pt-28">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-espresso via-studio-espresso/70 to-studio-espresso/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-champagne-300 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Essence {category.name} Department</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-studio-ivory font-medium tracking-tight">
            {category.name.toUpperCase()}
          </h1>

          <p className="mt-2 text-xs sm:text-sm font-semibold tracking-luxury uppercase text-champagne-400">
            {category.subheadline}
          </p>

          <p className="mt-4 text-sm sm:text-base text-champagne-100/80 max-w-2xl mx-auto leading-relaxed font-light">
            {category.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking(services[0]?.id)}
              className="px-6 py-3 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Book {category.name} Appointment
            </button>
            <a
              href={buildWhatsAppLink(`Hi Essence Studio, I'd like to enquire about ${category.name} services at Church Road, Dimapur.`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.trackWhatsAppClick(category.name, "category_hero")}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-studio-ivory border border-white/20 text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-champagne-400" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services in this category */}
      <section className="py-20 sm:py-24 bg-studio-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`${category.name} Treatment Menu`}
            title={`ALL ${category.name.toUpperCase()} SERVICES`}
            subtitle={`Select an individual treatment below to view procedure steps, FAQs, and tailor-made aftercare guidance.`}
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-studio-ivory border border-studio-border flex flex-col justify-between hover:border-champagne-500 transition-all duration-300 shadow-subtle hover:shadow-elevated"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-studio-cream border-b border-studio-border">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover img-editorial"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl sm:text-2xl text-studio-espresso font-medium group-hover:text-champagne-600 transition-colors">
                      <Link to={`/services/${service.slug}`}>{service.name}</Link>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-studio-taupe leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <ul className="mt-4 space-y-1 text-xs text-studio-charcoal">
                      {service.whoIsItFor.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 flex-shrink-0 mt-0.5" />
                          <span className="text-studio-taupe line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-studio-border/50">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-luxury text-studio-espresso hover:text-champagne-600 transition-colors"
                  >
                    <span>Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-3 py-1.5 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-[11px] font-semibold uppercase tracking-luxury transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery for this Category */}
      {relatedGallery.length > 0 && (
        <section className="py-16 sm:py-20 bg-studio-cream/40 border-t border-b border-studio-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <SectionHeading
                align="left"
                eyebrow="Studio Work"
                title={`${category.name.toUpperCase()} GALLERY`}
                subtitle={`Recent looks and textures created at our Church Road studio.`}
              />
              <Link
                to="/gallery"
                className="text-xs font-semibold uppercase tracking-luxury text-studio-espresso hover:text-champagne-600 pb-1 border-b border-studio-espresso"
              >
                All Works →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedGallery.slice(0, 4).map((item) => (
                <div key={item.id} className="relative aspect-square overflow-hidden bg-studio-cream border border-studio-border group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-editorial"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-studio-dark/70 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-studio-ivory">
                    <p className="font-serif text-sm">{item.title}</p>
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
        <section className="py-20 bg-studio-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title={`${category.name.toUpperCase()} ADVICE & CARE`}
              subtitle={`Common questions regarding appointments, technique, and longevity.`}
              className="mb-12"
            />

            <div className="space-y-4">
              {categoryFaqs.map((faq, idx) => (
                <div key={idx} className="bg-studio-cream/30 border border-studio-border p-6">
                  <h4 className="font-serif text-lg text-studio-espresso font-medium">
                    {faq.question}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-studio-taupe leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location & Booking CTA Strip */}
      <section className="py-16 bg-studio-espresso text-studio-ivory text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs uppercase tracking-widest text-champagne-400 font-semibold mb-2">
            📍 Church Road, Dimapur, Nagaland
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium">
            Ready for your {category.name.toLowerCase()} appointment?
          </h2>
          <p className="text-xs sm:text-sm text-champagne-100/70 mt-3 max-w-lg mx-auto">
            Book online or chat with our team via WhatsApp to choose your perfect time slot.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenBooking(services[0]?.id)}
              className="px-6 py-3 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-widest"
            >
              Book {category.name} Service
            </button>
            <a
              href={buildWhatsAppLink(`Hi Essence Studio, I want to book a ${category.name} service.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-studio-ivory border border-white/20 text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2"
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
