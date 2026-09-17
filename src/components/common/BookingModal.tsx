import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, User, Phone, MessageSquare, Sparkles, Send } from "lucide-react";
import { servicesData, ServiceItem } from "../../data/servicesData";
import { siteConfig, buildWhatsAppLink } from "../../config/siteConfig";
import { analytics } from "../../utils/analytics";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [selectedService, setSelectedService] = useState<string>(preselectedServiceId || "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedService(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (isOpen) {
      analytics.trackBookingStart(selectedService);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, selectedService]);

  if (!isOpen) return null;

  const currentServiceObj: ServiceItem | undefined = servicesData.find(
    (s) => s.id === selectedService || s.slug === selectedService
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceName = currentServiceObj ? currentServiceObj.name : selectedService || "General Beauty Service";

    // Format professional WhatsApp booking request
    const message = `✨ *APPOINTMENT INQUIRY — ESSENCE STUDIO* ✨
-----------------------------------------
📍 *Location:* Church Road, Dimapur
💅 *Service:* ${serviceName}
🗓 *Preferred Date:* ${preferredDate || "Earliest Available"}
⏰ *Preferred Time:* ${preferredTime || "Flexible"}
👤 *Client Name:* ${name || "Client"}
📞 *Contact:* ${phone || "Via WhatsApp"}
${notes ? `📝 *Notes:* ${notes}` : ""}
-----------------------------------------
Hi Essence Hair & Makeup Studio, I would like to confirm availability for this appointment. Please let me know the open slots and consultation requirements.`;

    analytics.trackBookingSubmit({
      service: serviceName,
      preferredDate,
      preferredTime,
    });

    const targetUrl = buildWhatsAppLink(message);

    // Open WhatsApp
    setTimeout(() => {
      window.open(targetUrl, "_blank");
      setIsSubmitting(false);
      onClose();
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-studio-dark/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-studio-ivory border border-studio-border shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-studio-taupe hover:text-studio-espresso transition-colors"
          aria-label="Close booking form"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest text-champagne-600 uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Church Road, Dimapur</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-studio-espresso font-medium">
            Reserve Your Experience
          </h3>
          <p className="text-xs sm:text-sm text-studio-taupe mt-1.5 max-w-sm mx-auto">
            Select your desired service and preferred timing. We will seamlessly connect you via WhatsApp to finalize your slot.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-luxury text-studio-charcoal mb-1.5">
              Service Requested *
            </label>
            <select
              required
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-white border border-studio-border px-3.5 py-2.5 text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 transition-colors"
            >
              <option value="">Select a service...</option>
              <optgroup label="Hair Studio">
                {servicesData
                  .filter((s) => s.category === "hair")
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Nail Lounge">
                {servicesData
                  .filter((s) => s.category === "nails")
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Skin & Facials">
                {servicesData
                  .filter((s) => s.category === "skin")
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Lash Bar">
                {servicesData
                  .filter((s) => s.category === "lashes")
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Brow Studio">
                {servicesData
                  .filter((s) => s.category === "brows")
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
              </optgroup>
            </select>
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-luxury text-studio-charcoal mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-champagne-600" />
                  Preferred Date
                </span>
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-white border border-studio-border px-3.5 py-2 text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-luxury text-studio-charcoal mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-champagne-600" />
                  Preferred Time
                </span>
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-white border border-studio-border px-3.5 py-2 text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 transition-colors"
              >
                <option value="">Any time slot...</option>
                <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Name & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-luxury text-studio-charcoal mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-champagne-600" />
                  Your Name *
                </span>
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-studio-border px-3.5 py-2 text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 placeholder:text-studio-muted transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-luxury text-studio-charcoal mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-champagne-600" />
                  Phone / WhatsApp
                </span>
              </label>
              <input
                type="tel"
                placeholder="+91 Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-studio-border px-3.5 py-2 text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 placeholder:text-studio-muted transition-colors"
              />
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-luxury text-studio-charcoal mb-1.5">
              <span className="inline-flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-champagne-600" />
                Notes or Specific Concerns (Optional)
              </span>
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Bringing inspiration photo, first time getting lashes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-white border border-studio-border px-3.5 py-2 text-sm text-studio-espresso focus:outline-none focus:border-champagne-500 placeholder:text-studio-muted transition-colors resize-none"
            />
          </div>

          {/* Verification Notice */}
          <div className="bg-studio-cream/60 border border-studio-border/80 p-3 text-[11px] text-studio-taupe leading-relaxed">
            <span className="font-medium text-studio-espresso">Transparent Booking:</span> Submitting will direct you straight to WhatsApp with your pre-filled inquiry. Our studio front desk at Church Road will confirm exact slot availability and provide consultation instructions.
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-studio-espresso text-studio-ivory hover:bg-champagne-600 hover:text-studio-espresso text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-studio-espresso hover:border-champagne-600"
          >
            <Send className="w-4 h-4 text-champagne-400" />
            <span>{isSubmitting ? "Connecting to WhatsApp..." : "Confirm via WhatsApp"}</span>
          </button>
        </form>

        {/* Quick Contact alternative */}
        <div className="mt-4 pt-3 border-t border-studio-border text-center text-xs text-studio-taupe">
          Prefer calling directly?{" "}
          <a
            href={`tel:${siteConfig.contact.phoneNumber}`}
            className="text-studio-espresso font-semibold underline underline-offset-2 hover:text-champagne-600"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};
