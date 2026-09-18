import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, User, Phone, MessageSquare, Sparkles, Send } from "lucide-react";
import { useServices } from "../../context/ServicesContext";
import { ServiceItem } from "../../data/servicesData";
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
  const { services } = useServices();
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

  const currentServiceObj: ServiceItem | undefined = services.find(
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#090E1C]/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] rounded-3xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top specular shimmer */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-champagne-400/40 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white transition-colors"
          aria-label="Close booking form"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest text-champagne-400 uppercase mb-1.5 bg-champagne-500/10 border border-champagne-500/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Church Road, Dimapur</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl text-white font-semibold tracking-tight">
            Reserve Your Experience
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-sm mx-auto font-light">
            Select your desired service and preferred timing. We will seamlessly connect you via WhatsApp to finalize your slot.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-luxury text-slate-300 mb-1.5">
              Service Requested *
            </label>
            <select
              required
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#040711] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-champagne-400 transition-colors"
            >
              <option value="" className="bg-[#040711] text-slate-400">Select a service...</option>
              <optgroup label="Hair Studio" className="bg-[#090E1C] text-champagne-300">
                {services
                  .filter((s) => s.category === "hair")
                  .map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#040711] text-white">
                      {s.name}
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Nail Lounge" className="bg-[#090E1C] text-champagne-300">
                {services
                  .filter((s) => s.category === "nails")
                  .map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#040711] text-white">
                      {s.name}
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Skin & Facials" className="bg-[#090E1C] text-champagne-300">
                {services
                  .filter((s) => s.category === "skin")
                  .map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#040711] text-white">
                      {s.name}
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Lash Bar" className="bg-[#090E1C] text-champagne-300">
                {services
                  .filter((s) => s.category === "lashes")
                  .map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#040711] text-white">
                      {s.name}
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Brow Studio" className="bg-[#090E1C] text-champagne-300">
                {services
                  .filter((s) => s.category === "brows")
                  .map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#040711] text-white">
                      {s.name}
                    </option>
                  ))}
              </optgroup>
            </select>
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-luxury text-slate-300 mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-champagne-400" />
                  Preferred Date
                </span>
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-[#040711] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-champagne-400 transition-colors scheme-dark"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-luxury text-slate-300 mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-champagne-400" />
                  Preferred Time
                </span>
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-[#040711] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-champagne-400 transition-colors"
              >
                <option value="" className="bg-[#040711] text-slate-400">Any time slot...</option>
                <option value="Morning (10:00 AM - 1:00 PM)" className="bg-[#040711] text-white">Morning (10:00 AM – 1:00 PM)</option>
                <option value="Afternoon (1:00 PM - 4:00 PM)" className="bg-[#040711] text-white">Afternoon (1:00 PM – 4:00 PM)</option>
                <option value="Evening (4:00 PM - 7:00 PM)" className="bg-[#040711] text-white">Evening (4:00 PM – 7:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Name & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-luxury text-slate-300 mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-champagne-400" />
                  Your Name *
                </span>
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#040711] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-champagne-400 placeholder:text-slate-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-luxury text-slate-300 mb-1.5">
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-champagne-400" />
                  Phone / WhatsApp
                </span>
              </label>
              <input
                type="tel"
                placeholder="+91 Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#040711] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-champagne-400 placeholder:text-slate-600 transition-colors"
              />
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-luxury text-slate-300 mb-1.5">
              <span className="inline-flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-champagne-400" />
                Notes or Specific Concerns (Optional)
              </span>
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Bringing inspiration photo, first time getting lashes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#040711] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-champagne-400 placeholder:text-slate-600 transition-colors resize-none"
            />
          </div>

          {/* Verification Notice */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-[11px] text-slate-300 leading-relaxed backdrop-blur-md">
            <span className="font-semibold text-champagne-400">Transparent Booking:</span> Submitting will direct you straight to WhatsApp with your pre-filled inquiry. Our studio front desk at Church Road will confirm exact slot availability and provide consultation instructions.
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-champagne-500 hover:bg-champagne-400 text-black text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 rounded-xl shadow-[0_4px_20px_rgba(200,169,126,0.35)] active:scale-98"
          >
            <Send className="w-4 h-4 text-black" />
            <span>{isSubmitting ? "Connecting to WhatsApp..." : "Confirm via WhatsApp"}</span>
          </button>
        </form>

        {/* Quick Contact alternative */}
        <div className="mt-5 pt-3 border-t border-white/10 text-center text-xs text-slate-400">
          Prefer calling directly?{" "}
          <a
            href={`tel:${siteConfig.contact.phoneNumber}`}
            className="text-champagne-400 font-semibold underline underline-offset-2 hover:text-champagne-300"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};
