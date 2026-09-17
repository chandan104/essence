import React from "react";
import { useParams, Link } from "react-router-dom";
import { Sparkles, CheckCircle2, MessageCircle, MapPin, Calendar, Clock, ShieldCheck } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "../config/siteConfig";
import { SeoHead } from "../components/common/SeoHead";
import { analytics } from "../utils/analytics";

interface OfferCampaign {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroImage: string;
  valuePoints: string[];
  serviceSlug: string;
  whatsappPrefill: string;
}

const campaigns: Record<string, OfferCampaign> = {
  "hair-botox": {
    slug: "hair-botox",
    title: "Hair Botox Revitalization",
    subtitle: "Eliminate stubborn humidity frizz, restore depleted keratin proteins, and achieve mirror-gloss hair on Church Road, Dimapur.",
    badge: "Exclusive In-Salon Package",
    heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
    valuePoints: [
      "In-depth strand diagnostic & elasticity check",
      "Formaldehyde-free intensive protein & lipid infusion",
      "Zero flattening—preserves natural hair body and bounce",
      "Finished with signature glass blowout & post-care advice",
    ],
    serviceSlug: "hair-botox",
    whatsappPrefill: "Hi Essence Studio, I'm reaching out through the Hair Botox special page to check availability and package rates at Church Road, Dimapur.",
  },
  "hair-colour": {
    slug: "hair-colour",
    title: "Bespoke Balayage & Colour",
    subtitle: "Customized dimensional tones and low-maintenance lived-in colour mapped to your natural complexion undertones.",
    badge: "Signature Colour Session",
    heroImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1400&auto=format&fit=crop",
    valuePoints: [
      "Face-contouring balayage and babylight placement",
      "Bond-protecting conditioning additive included",
      "Custom toner gloss to banish brassy reflections",
      "Signature blow dry styling & aftercare regimen",
    ],
    serviceSlug: "hair-colour",
    whatsappPrefill: "Hi Essence Studio, I'd like to book a Hair Colour / Balayage consultation via your campaign page.",
  },
  "nail-extensions": {
    slug: "nail-extensions",
    title: "Sculpted Nail Extensions & Art",
    subtitle: "Durable acrylic or lightweight gel extensions sculpted to perfection with personalized high-shine gel nail art.",
    badge: "Full Set Experience",
    heroImage: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1400&auto=format&fit=crop",
    valuePoints: [
      "Meticulous dry cuticle prep & nail strengthening base",
      "Choice of almond, square, coffin, or oval architecture",
      "Chip-resistant high-gloss gel top coat",
      "Complimentary nourishing cuticle oil treatment",
    ],
    serviceSlug: "acrylic-extensions",
    whatsappPrefill: "Hi Essence Studio, I want to book a Nail Extensions appointment from your special offer page.",
  },
  "lash-extensions": {
    slug: "lash-extensions",
    title: "Weightless Eyelash Extensions",
    subtitle: "Wake up with effortlessly captivating eyes. Classic, Hybrid, or Volume sets isolated with medical-grade precision.",
    badge: "New Client Lash Set",
    heroImage: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=1400&auto=format&fit=crop",
    valuePoints: [
      "Custom eye-mapping tailored to eyelid and bone structure",
      "Featherweight silk extensions that preserve natural lashes",
      "Soothing collagen hydrogel under-eye pads during service",
      "Complimentary lash cleansing spoolie and aftercare guide",
    ],
    serviceSlug: "eyelash-extensions",
    whatsappPrefill: "Hi Essence Studio, I'm interested in booking Eyelash Extensions from your campaign page.",
  },
  "bridal": {
    slug: "bridal",
    title: "The Essence Bridal Transformation",
    subtitle: "Comprehensive bridal preparation across hair styling, makeup, sculpted nails, lashes, and pre-wedding facials under one roof.",
    badge: "Bridal Suite Experience",
    heroImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1400&auto=format&fit=crop",
    valuePoints: [
      "Comprehensive pre-wedding consultation and look trials",
      "Synchronized schedule for hair, nails, skin, and lash perfection",
      "Dedicated senior styling artists on your wedding week",
      "Private studio lounge experience on Church Road",
    ],
    serviceSlug: "hair-colour",
    whatsappPrefill: "Hi Essence Studio, I would like to consult on Bridal Packages and dates for my wedding preparation.",
  },
};

interface CampaignOfferPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const CampaignOfferPage: React.FC<CampaignOfferPageProps> = ({ onOpenBooking }) => {
  const { campaignSlug } = useParams<{ campaignSlug: string }>();

  const campaign = campaigns[campaignSlug || "hair-botox"] || campaigns["hair-botox"];

  return (
    <div className="bg-studio-ivory min-h-screen animate-fadeIn">
      <SeoHead
        title={`${campaign.title} in Dimapur | Essence Studio`}
        description={campaign.subtitle}
        canonicalPath={`/offers/${campaign.slug}`}
      />

      {/* Distraction-free Top Bar */}
      <div className="bg-studio-espresso text-studio-ivory py-3 border-b border-studio-border/30">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg tracking-wider text-studio-ivory">ESSENCE</span>
            <span className="text-champagne-400 hidden sm:inline">| Church Road, Dimapur</span>
          </div>
          <a
            href={buildWhatsAppLink(campaign.whatsappPrefill)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.trackWhatsAppClick(campaign.title, "offer_top_bar")}
            className="text-champagne-300 font-semibold uppercase tracking-wider flex items-center gap-1 hover:text-white"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Hero Ad Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center space-y-4 mb-8">
          <span className="inline-block px-3 py-1 bg-champagne-100 text-champagne-800 text-xs font-bold uppercase tracking-widest border border-champagne-200">
            {campaign.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-studio-espresso font-medium leading-tight">
            {campaign.title}
          </h1>
          <p className="text-sm sm:text-base text-studio-taupe max-w-xl mx-auto leading-relaxed">
            {campaign.subtitle}
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-studio-cream border border-studio-border shadow-elevated mb-10">
          <img
            src={campaign.heroImage}
            alt={campaign.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* What is included card */}
        <div className="bg-studio-cream/40 border border-studio-border p-6 sm:p-8 mb-10 shadow-subtle">
          <h3 className="font-serif text-xl sm:text-2xl text-studio-espresso font-medium mb-4">
            What Is Included in Your Appointment:
          </h3>
          <ul className="space-y-3 text-sm text-studio-charcoal">
            {campaign.valuePoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-champagne-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-studio-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-studio-taupe">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-champagne-600" />
              Church Road, Dimapur, Nagaland
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-champagne-600" />
              100% Sanitized Tools & Disposable Liners
            </span>
          </div>
        </div>

        {/* Dual Conversion Trigger */}
        <div className="space-y-3 max-w-md mx-auto">
          <button
            onClick={() => {
              analytics.trackBookingStart(campaign.title);
              onOpenBooking(campaign.serviceSlug);
            }}
            className="w-full py-4 bg-studio-espresso text-studio-ivory hover:bg-champagne-600 hover:text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 border border-studio-espresso hover:border-champagne-600"
          >
            <Calendar className="w-4 h-4" />
            <span>Select Date & Book Slot</span>
          </button>

          <a
            href={buildWhatsAppLink(campaign.whatsappPrefill)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.trackWhatsAppClick(campaign.title, "offer_main_btn")}
            className="w-full py-3.5 bg-champagne-500 hover:bg-champagne-400 text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire Package Rates on WhatsApp</span>
          </a>

          <p className="text-center text-[11px] text-studio-muted pt-1">
            No upfront payment required to hold your consultation slot.
          </p>
        </div>

        {/* Back to main website link */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="text-xs uppercase tracking-luxury text-studio-taupe hover:text-studio-espresso border-b border-studio-border pb-0.5"
          >
            ← Return to Essence Main Website
          </Link>
        </div>
      </div>
    </div>
  );
};
