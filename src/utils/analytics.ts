/**
 * Essence Hair and Makeup Studio - Analytics & Conversion Tracking Abstraction
 * 
 * Future-ready event pipeline connecting to Google Analytics (GA4),
 * Meta Pixel (Facebook Ads), and Google Ads conversions.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export type ConversionEvent =
  | "page_view"
  | "service_view"
  | "gallery_view"
  | "whatsapp_click"
  | "call_click"
  | "booking_start"
  | "booking_submit"
  | "direction_click"
  | "instagram_click"
  | "contact_form_submit";

export interface EventProperties {
  serviceId?: string;
  serviceName?: string;
  category?: string;
  sourceLocation?: string;
  bookingDetails?: {
    service?: string;
    preferredDate?: string;
    preferredTime?: string;
  };
  [key: string]: unknown;
}

/**
 * Universal tracking function that distributes events to active tracking scripts
 * without throwing errors if tracking scripts are not yet connected.
 */
export function trackEvent(eventName: ConversionEvent, properties: EventProperties = {}): void {
  // Developer logging in non-production or for verification
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event] "${eventName}":`, properties);
  }

  // Google Tag (GA4 / Google Ads)
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, properties);
  }

  // Meta Pixel (Facebook Ads)
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (eventName === "booking_submit") {
      window.fbq("track", "Schedule", properties);
    } else if (eventName === "whatsapp_click" || eventName === "call_click") {
      window.fbq("track", "Contact", properties);
    } else if (eventName === "service_view") {
      window.fbq("track", "ViewContent", properties);
    } else {
      window.fbq("trackCustom", eventName, properties);
    }
  }

  // GTM dataLayer push
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...properties,
      timestamp: new Date().toISOString(),
    });
  }
}

export const analytics = {
  trackPageView: (pagePath: string, pageTitle: string) => {
    trackEvent("page_view", { pagePath, pageTitle });
  },
  trackServiceView: (serviceId: string, serviceName: string, category: string) => {
    trackEvent("service_view", { serviceId, serviceName, category });
  },
  trackGalleryView: (category: string) => {
    trackEvent("gallery_view", { category });
  },
  trackWhatsAppClick: (serviceName?: string, sourceLocation: string = "general") => {
    trackEvent("whatsapp_click", { serviceName, sourceLocation });
  },
  trackCallClick: (sourceLocation: string = "general") => {
    trackEvent("call_click", { sourceLocation });
  },
  trackBookingStart: (serviceName?: string) => {
    trackEvent("booking_start", { serviceName });
  },
  trackBookingSubmit: (bookingDetails: EventProperties["bookingDetails"]) => {
    trackEvent("booking_submit", { bookingDetails });
  },
  trackDirectionClick: () => {
    trackEvent("direction_click", { destination: "Church Road, Dimapur" });
  },
  trackInstagramClick: () => {
    trackEvent("instagram_click", { channel: "Instagram" });
  },
  trackContactFormSubmit: (serviceName?: string) => {
    trackEvent("contact_form_submit", { serviceName });
  }
};
