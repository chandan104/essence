import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  Navigation,
  Send,
  Sparkles,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "../components/common/SocialIcons";
import { siteConfig, buildWhatsAppLink } from "../config/siteConfig";
import { SeoHead } from "../components/common/SeoHead";
import { SectionHeading } from "../components/common/SectionHeading";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "../utils/seo";
import { analytics } from "../utils/analytics";

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analytics.trackContactFormSubmit(formData.service);

    const whatsappText = `✨ *INQUIRY FROM ESSENCE WEBSITE* ✨
Name: ${formData.name}
Phone: ${formData.phone}
Interested Service: ${formData.service || "General Inquiry"}
Message: ${formData.message || "None"}
-----------------------------------------
Hi Essence Studio, I would like more information on this.`;

    window.open(buildWhatsAppLink(whatsappText), "_blank");
    setIsSubmitted(true);
  };

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <div className="py-12 sm:py-16 bg-studio-ivory animate-fadeIn">
      <SeoHead
        title="Contact & Location | Church Road, Dimapur | Essence Studio"
        description="Connect with Essence Hair and Makeup Studio on Church Road, Dimapur, Nagaland. Studio opening hours, Google Maps directions, direct phone, and WhatsApp appointments."
        keywords="contact essence salon dimapur, beauty parlour church road dimapur, hair studio phone dimapur"
        canonicalPath="/contact"
        jsonLd={[breadcrumbsSchema, localBusinessSchema]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-champagne-500" />
            <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600">
              Get In Touch
            </span>
            <span className="w-6 h-px bg-champagne-500" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-studio-espresso font-medium tracking-tight">
            FIND & CONNECT WITH ESSENCE
          </h1>
          <p className="mt-4 text-sm sm:text-base text-studio-taupe leading-relaxed">
            Conveniently situated along Church Road in central Dimapur. We welcome inquiries for hair transformations, bridal consultations, and everyday beauty rituals.
          </p>
        </div>

        {/* 2-Column Info & Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-studio-cream/40 border border-studio-border p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-studio-espresso text-champagne-300 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-studio-espresso font-medium">
                    Studio Location
                  </h3>
                  <p className="text-sm text-studio-taupe mt-1 leading-relaxed">
                    {siteConfig.location.fullDisplayAddress}
                  </p>
                  <a
                    href={siteConfig.location.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => analytics.trackDirectionClick()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-luxury text-champagne-700 hover:text-studio-espresso mt-3"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Driving Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="bg-studio-cream/40 border border-studio-border p-6 sm:p-7 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-studio-espresso text-champagne-300 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-studio-espresso font-medium">
                    Phone & Call
                  </h3>
                  <p className="text-xs text-studio-taupe mt-0.5">
                    For bookings and same-day inquiries:
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phoneNumber}`}
                    onClick={() => analytics.trackCallClick("contact_page")}
                    className="text-sm font-semibold text-studio-espresso hover:text-champagne-600 block mt-1"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-studio-border/60">
                <div className="w-10 h-10 bg-champagne-500 text-studio-espresso flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-studio-espresso font-medium">
                    WhatsApp Chat
                  </h3>
                  <p className="text-xs text-studio-taupe mt-0.5">
                    Fast response, inspiration photo sharing & quotes:
                  </p>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => analytics.trackWhatsAppClick(undefined, "contact_page")}
                    className="text-sm font-semibold text-champagne-700 hover:text-champagne-600 block mt-1"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-studio-border/60">
                <div className="w-10 h-10 bg-studio-espresso text-champagne-300 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-studio-espresso font-medium">
                    Email Inquiry
                  </h3>
                  <p className="text-xs text-studio-taupe mt-0.5">
                    Bridal packages & commercial inquiries:
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-semibold text-studio-espresso hover:text-champagne-600 block mt-1"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-studio-cream/40 border border-studio-border p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-studio-espresso text-champagne-300 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-studio-espresso font-medium mb-2">
                    Studio Hours
                  </h3>
                  <div className="space-y-1 text-xs text-studio-taupe">
                    <p className="flex justify-between">
                      <span>Tuesday – Saturday:</span>
                      <span className="font-semibold text-studio-espresso">10:00 AM – 7:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold text-studio-espresso">11:00 AM – 6:00 PM (By Appt)</span>
                    </p>
                    <p className="flex justify-between text-champagne-700 font-medium pt-1">
                      <span>Monday:</span>
                      <span>Closed for Sanitation & Training</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-white border border-studio-border hover:border-champagne-500 text-xs font-semibold uppercase tracking-luxury text-studio-espresso flex items-center justify-center gap-2 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-champagne-600" />
                <span>Instagram</span>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-white border border-studio-border hover:border-champagne-500 text-xs font-semibold uppercase tracking-luxury text-studio-espresso flex items-center justify-center gap-2 transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-champagne-600" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message / WhatsApp Form */}
          <div className="lg:col-span-7 bg-white border border-studio-border p-8 sm:p-10 shadow-elevated">
            <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600 block mb-1">
              Direct Contact
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-studio-espresso font-medium">
              SEND A MESSAGE TO THE STUDIO
            </h2>
            <p className="text-xs sm:text-sm text-studio-taupe mt-2 leading-relaxed">
              Have a question about a treatment, bridal consultation, or pricing? Fill out the brief form below to connect instantly with our Church Road team on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-luxury text-studio-charcoal mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-studio-ivory border border-studio-border px-4 py-2.5 text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-luxury text-studio-charcoal mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-studio-ivory border border-studio-border px-4 py-2.5 text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-luxury text-studio-charcoal mb-1.5">
                    Service of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hair Botox, Hydra Facial..."
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-studio-ivory border border-studio-border px-4 py-2.5 text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-luxury text-studio-charcoal mb-1.5">
                  Your Message or Question
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your hair, preferred appointment date, or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-studio-ivory border border-studio-border px-4 py-2.5 text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-studio-espresso text-studio-ivory hover:bg-champagne-600 hover:text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-studio-espresso hover:border-champagne-600"
              >
                <Send className="w-4 h-4 text-champagne-400" />
                <span>Submit & Dispatch via WhatsApp</span>
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-studio-border flex items-center justify-between">
              <span className="text-xs text-studio-taupe">Prefer direct booking?</span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold uppercase tracking-wider text-champagne-700 hover:text-studio-espresso flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open Appointment Modal →</span>
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Google Map Section */}
        <div className="bg-studio-cream border border-studio-border overflow-hidden">
          <div className="p-4 bg-studio-espresso text-studio-ivory flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-champagne-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-champagne-300">
                Interactive Map: Church Road, Dimapur
              </span>
            </div>
            <a
              href={siteConfig.location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-studio-ivory hover:text-champagne-300 underline underline-offset-2"
            >
              Open Full Google Maps App ↗
            </a>
          </div>
          <div className="h-[420px] w-full">
            <iframe
              title="Essence Studio Dimapur Map"
              src={siteConfig.location.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
