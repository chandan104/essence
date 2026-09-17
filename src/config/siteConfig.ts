/**
 * Essence Hair and Makeup Studio - Site Configuration
 * 
 * Church Road, Dimapur, Nagaland, India
 */

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    subTagline: string;
    shortDescription: string;
    foundedYear: string;
  };
  location: {
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
    postalCodePlaceholder: string;
    landmarkPlaceholder: string;
    fullDisplayAddress: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDisplay: string;
    phoneNumber: string;
    phoneDisplay: string;
    email: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    note: string;
  };
  social: {
    instagram: string;
    instagramHandle: string;
    facebook: string;
  };
  meta: {
    siteUrl: string;
    ogImage: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Essence Hair & Makeup Studio",
    tagline: "Your Beauty. Your Signature.",
    subTagline: "Hair • Nails • Skin • Lashes • Brows",
    shortDescription:
      "A modern luxury beauty studio on Church Road, Dimapur, created for elevated transformations that feel uniquely yours.",
    foundedYear: "2024",
  },
  location: {
    street: "Church Road",
    area: "Central Dimapur",
    city: "Dimapur",
    state: "Nagaland",
    country: "India",
    postalCodePlaceholder: "797112",
    landmarkPlaceholder: "Near Church Road commercial district",
    fullDisplayAddress: "Church Road, Dimapur, Nagaland 797112, India",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14349.532398516155!2d93.72145395!3d25.9080277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374601bfda3039d9%3A0x6b4db3b839aa640!2sChurch%20Rd%2C%20Dimapur%2C%20Nagaland!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl:
      "https://maps.google.com/?q=Church+Road+Dimapur+Nagaland",
  },
  contact: {
    whatsappNumber: "916002435804",
    whatsappDisplay: "+91 60024 35804 (Studio WhatsApp)",
    phoneNumber: "+916002435804",
    phoneDisplay: "+91 60024 35804 (Appointments)",
    email: "appointments@essencedimapur.com",
  },
  hours: {
    weekdays: "Tuesday – Saturday: 10:00 AM – 7:00 PM",
    saturday: "Saturday: 10:00 AM – 7:30 PM",
    sunday: "Sunday: 11:00 AM – 6:00 PM (By Appointment)",
    note: "Mondays closed for deep sanitation & staff training (Placeholder)",
  },
  social: {
    instagram: "https://instagram.com/essence_studio_dimapur",
    instagramHandle: "@essence_studio_dimapur",
    facebook: "https://facebook.com/essencedimapur",
  },
  meta: {
    siteUrl: "https://essencedimapur.com",
    ogImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop",
  },
};

export function buildWhatsAppLink(customMessage?: string): string {
  const defaultMessage =
    "Hi Essence Hair and Makeup Studio, I would like to enquire about booking an appointment at your Church Road studio in Dimapur.";
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
