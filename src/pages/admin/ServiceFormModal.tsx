import React, { useState, useEffect } from "react";
import {
  X,
  Plus,
  Trash2,
  Sparkles,
  Image as ImageIcon,
  HelpCircle,
  ListOrdered,
  DollarSign,
  Clock,
  Check,
} from "lucide-react";
import { ServiceItem, ServiceCategory, ServiceStep, ServiceFAQ } from "../../data/servicesData";

interface ServiceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (serviceData: Partial<ServiceItem>) => void;
  initialService?: ServiceItem | null;
}

const LUXURY_PRESET_IMAGES = [
  { label: "Hair Balayage / Colour", url: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop" },
  { label: "Hair Styling / Wash", url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop" },
  { label: "Nail Extensions & Art", url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop" },
  { label: "Gel Manicure / Nails", url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop" },
  { label: "Hydra Facial / Glow", url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop" },
  { label: "Skin Treatment / Spa", url: "https://images.unsplash.com/photo-1512290900672-1f4a95e7c2a1?q=80&w=1200&auto=format&fit=crop" },
  { label: "Lash Extensions", url: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=1200&auto=format&fit=crop" },
  { label: "Brow Mapping / Microblading", url: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop" },
];

export function ServiceFormModal({
  isOpen,
  onClose,
  onSave,
  initialService,
}: ServiceFormModalProps) {
  const [activeTab, setActiveTab] = useState<"general" | "journey" | "faqs">("general");

  // Form states
  const [name, setName] = useState("");
  const [category, setCategory] = useState<ServiceCategory>("hair");
  const [slug, setSlug] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [pricePlaceholder, setPricePlaceholder] = useState("");
  const [durationPlaceholder, setDurationPlaceholder] = useState("");
  const [image, setImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [whoIsItFor, setWhoIsItFor] = useState<string[]>([""]);
  const [whatToExpect, setWhatToExpect] = useState<ServiceStep[]>([
    { step: 1, title: "", description: "" },
  ]);
  const [faqs, setFaqs] = useState<ServiceFAQ[]>([{ question: "", answer: "" }]);
  const [prefilledWhatsAppMessage, setPrefilledWhatsAppMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setName(initialService.name);
      setCategory(initialService.category);
      setSlug(initialService.slug);
      setShortDescription(initialService.shortDescription);
      setFullDescription(initialService.fullDescription);
      setPricePlaceholder(initialService.pricePlaceholder);
      setDurationPlaceholder(initialService.durationPlaceholder);
      setImage(initialService.image);
      setFeatured(initialService.featured);
      setWhoIsItFor(
        initialService.whoIsItFor && initialService.whoIsItFor.length > 0
          ? initialService.whoIsItFor
          : [""]
      );
      setWhatToExpect(
        initialService.whatToExpect && initialService.whatToExpect.length > 0
          ? initialService.whatToExpect
          : [{ step: 1, title: "", description: "" }]
      );
      setFaqs(
        initialService.faqs && initialService.faqs.length > 0
          ? initialService.faqs
          : [{ question: "", answer: "" }]
      );
      setPrefilledWhatsAppMessage(initialService.prefilledWhatsAppMessage);
    } else {
      // Reset for new service
      setName("");
      setCategory("hair");
      setSlug("");
      setShortDescription("");
      setFullDescription("");
      setPricePlaceholder("Starting from ₹[PRICE] / Price upon consultation");
      setDurationPlaceholder("Approx. 60 mins");
      setImage("https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop");
      setFeatured(true);
      setWhoIsItFor([""]);
      setWhatToExpect([
        { step: 1, title: "Initial Consultation", description: "In-depth strand & style assessment with our master stylist." },
        { step: 2, title: "Custom Treatment Application", description: "Formulation and application using premium salon-grade products." },
        { step: 3, title: "Finishing & Styling", description: "Thermal blowout and aftercare guidance for prolonged radiance." },
      ]);
      setFaqs([
        { question: "How should I prepare for this service?", answer: "Arrive with clean hair or skin, and feel free to bring reference photos." },
      ]);
      setPrefilledWhatsAppMessage("");
    }
  }, [initialService, isOpen]);

  // Auto-generate slug when name changes (for new service)
  const handleNameChange = (newName: string) => {
    setName(newName);
    if (!initialService) {
      const generated = newName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      setSlug(generated);
      if (!prefilledWhatsAppMessage) {
        setPrefilledWhatsAppMessage(
          `Hi Essence Hair and Makeup Studio, I'm interested in booking ${newName} at Church Road, Dimapur.`
        );
      }
    }
  };

  // Who is it for handlers
  const handleAddWhoFor = () => setWhoIsItFor([...whoIsItFor, ""]);
  const handleUpdateWhoFor = (index: number, val: string) => {
    const updated = [...whoIsItFor];
    updated[index] = val;
    setWhoIsItFor(updated);
  };
  const handleRemoveWhoFor = (index: number) => {
    setWhoIsItFor(whoIsItFor.filter((_, i) => i !== index));
  };

  // What to Expect handlers
  const handleAddStep = () => {
    setWhatToExpect([
      ...whatToExpect,
      { step: whatToExpect.length + 1, title: "", description: "" },
    ]);
  };
  const handleUpdateStep = (index: number, field: "title" | "description", val: string) => {
    const updated = [...whatToExpect];
    updated[index] = { ...updated[index], [field]: val };
    setWhatToExpect(updated);
  };
  const handleRemoveStep = (index: number) => {
    const filtered = whatToExpect.filter((_, i) => i !== index);
    // Re-index steps
    setWhatToExpect(filtered.map((s, idx) => ({ ...s, step: idx + 1 })));
  };

  // FAQs handlers
  const handleAddFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const handleUpdateFaq = (index: number, field: "question" | "answer", val: string) => {
    const updated = [...faqs];
    updated[index] = { ...updated[index], [field]: val };
    setFaqs(updated);
  };
  const handleRemoveFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedWhoIsItFor = whoIsItFor.map((s) => s.trim()).filter(Boolean);
    const cleanedWhatToExpect = whatToExpect
      .filter((s) => s.title.trim() || s.description.trim())
      .map((s, idx) => ({ ...s, step: idx + 1 }));
    const cleanedFaqs = faqs.filter((f) => f.question.trim() && f.answer.trim());

    onSave({
      name: name.trim(),
      category,
      slug: slug.trim() || name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      shortDescription: shortDescription.trim(),
      fullDescription: fullDescription.trim() || shortDescription.trim(),
      pricePlaceholder: pricePlaceholder.trim(),
      durationPlaceholder: durationPlaceholder.trim(),
      image: image.trim(),
      featured,
      whoIsItFor: cleanedWhoIsItFor,
      whatToExpect: cleanedWhatToExpect,
      faqs: cleanedFaqs,
      prefilledWhatsAppMessage:
        prefilledWhatsAppMessage.trim() ||
        `Hi Essence Hair and Makeup Studio, I'm interested in ${name.trim()} at your Church Road studio.`,
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl bg-studio-ivory text-studio-charcoal rounded-sm shadow-2xl border border-studio-border my-8 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-studio-border bg-studio-cream/60">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne-700 block">
              {initialService ? "Edit Service" : "Add New Service"}
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-studio-espresso font-medium">
              {name ? name : initialService ? "Update Treatment" : "New Treatment / Service"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-studio-taupe hover:text-studio-espresso transition-colors rounded-full hover:bg-studio-cream"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-studio-border bg-studio-ivory px-6 gap-6 text-xs font-semibold uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setActiveTab("general")}
            className={`py-3.5 border-b-2 transition-all ${
              activeTab === "general"
                ? "border-champagne-600 text-studio-espresso"
                : "border-transparent text-studio-taupe hover:text-studio-espresso"
            }`}
          >
            General & Pricing
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("journey")}
            className={`py-3.5 border-b-2 transition-all ${
              activeTab === "journey"
                ? "border-champagne-600 text-studio-espresso"
                : "border-transparent text-studio-taupe hover:text-studio-espresso"
            }`}
          >
            Client Journey & Expectations
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("faqs")}
            className={`py-3.5 border-b-2 transition-all ${
              activeTab === "faqs"
                ? "border-champagne-600 text-studio-espresso"
                : "border-transparent text-studio-taupe hover:text-studio-espresso"
            }`}
          >
            FAQs & WhatsApp Query
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === "general" && (
            <div className="space-y-6 animate-fade-in">
              {/* Row 1: Name & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-studio-espresso mb-1.5">
                    Service Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="e.g. Keratin Silk Infusion"
                    className="w-full bg-white border border-studio-border px-3.5 py-2.5 text-sm text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-studio-espresso mb-1.5">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ServiceCategory)}
                    className="w-full bg-white border border-studio-border px-3.5 py-2.5 text-sm text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                  >
                    <option value="hair">Hair</option>
                    <option value="nails">Nails</option>
                    <option value="skin">Skin</option>
                    <option value="lashes">Lashes</option>
                    <option value="brows">Brows</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Slug & Featured Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-studio-espresso mb-1.5">
                    URL Slug
                  </label>
                  <div className="flex items-center bg-white border border-studio-border px-3 py-2 text-xs text-studio-taupe rounded-sm">
                    <span>/services/</span>
                    <input
                      type="text"
                      required
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="service-slug"
                      className="flex-1 bg-transparent text-studio-espresso focus:outline-none pl-1"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 sm:pt-6">
                  <label className="relative flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      className="w-4 h-4 text-champagne-600 rounded border-studio-border focus:ring-champagne-500"
                    />
                    <span className="text-xs font-semibold text-studio-espresso">
                      Feature on Home Carousel
                    </span>
                  </label>
                  <span className="text-[11px] text-studio-taupe">
                    (Shows in the continuous moving marquee)
                  </span>
                </div>
              </div>

              {/* Row 3: Pricing & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-studio-espresso mb-1.5 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-champagne-700" />
                    Price Display *
                  </label>
                  <input
                    type="text"
                    required
                    value={pricePlaceholder}
                    onChange={(e) => setPricePlaceholder(e.target.value)}
                    placeholder="e.g. Starting from ₹2,500 / Price on consultation"
                    className="w-full bg-white border border-studio-border px-3.5 py-2.5 text-sm text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                  />
                  <p className="text-[11px] text-studio-taupe mt-1">
                    Transparent pricing displayed on cards and details.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-studio-espresso mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-champagne-700" />
                    Duration Estimate *
                  </label>
                  <input
                    type="text"
                    required
                    value={durationPlaceholder}
                    onChange={(e) => setDurationPlaceholder(e.target.value)}
                    placeholder="e.g. 60 – 90 mins / ~2 hours"
                    className="w-full bg-white border border-studio-border px-3.5 py-2.5 text-sm text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                  />
                  <p className="text-[11px] text-studio-taupe mt-1">
                    Help clients plan their studio visit.
                  </p>
                </div>
              </div>

              {/* Row 4: Image URL & Luxury Presets */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-studio-espresso mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-champagne-700" />
                    Service Photo URL *
                  </span>
                  <span className="text-[11px] font-normal text-studio-taupe">
                    High-res Unsplash or studio image link
                  </span>
                </label>

                <div className="flex gap-4 items-start">
                  <div className="flex-1">
                    <input
                      type="url"
                      required
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="https://images.unsplash.com/photo-..."
                      className="w-full bg-white border border-studio-border px-3.5 py-2.5 text-xs text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                    />
                  </div>
                  {image && (
                    <div className="w-16 h-12 rounded border border-studio-border overflow-hidden flex-shrink-0 bg-studio-cream">
                      <img
                        src={image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=300&auto=format&fit=crop";
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Quick Luxury Presets Selector */}
                <div>
                  <span className="text-[11px] text-studio-taupe font-medium block mb-1.5">
                    Or select a curated luxury photo:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {LUXURY_PRESET_IMAGES.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setImage(preset.url)}
                        className={`text-[11px] px-2.5 py-1 rounded border transition-colors ${
                          image === preset.url
                            ? "bg-champagne-600 text-white border-champagne-700 font-semibold"
                            : "bg-white border-studio-border text-studio-taupe hover:text-studio-espresso hover:border-champagne-400"
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 5: Descriptions */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-studio-espresso mb-1.5">
                    Short Teaser Description (Card View) *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    placeholder="Brief 1-2 sentence preview for grid and marquee cards..."
                    className="w-full bg-white border border-studio-border px-3.5 py-2 text-sm text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-studio-espresso mb-1.5">
                    Full In-Depth Description (Dedicated Page) *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={fullDescription}
                    onChange={(e) => setFullDescription(e.target.value)}
                    placeholder="Comprehensive description outlining bespoke techniques, premium formulations, and finishes..."
                    className="w-full bg-white border border-studio-border px-3.5 py-2 text-sm text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "journey" && (
            <div className="space-y-6 animate-fade-in">
              {/* Who is it for */}
              <div className="bg-studio-cream/40 border border-studio-border p-5 rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-studio-espresso">
                      Who is This Service For?
                    </h3>
                    <p className="text-[11px] text-studio-taupe">
                      Client profiles, hair/skin conditions, or goals that suit this treatment.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddWhoFor}
                    className="inline-flex items-center gap-1 text-xs text-champagne-700 font-semibold hover:text-champagne-800"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Item</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {whoIsItFor.map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleUpdateWhoFor(idx, e.target.value)}
                        placeholder={`e.g. Clients seeking low-maintenance dimension or strand revitalization...`}
                        className="flex-1 bg-white border border-studio-border px-3 py-2 text-xs text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                      />
                      {whoIsItFor.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveWhoFor(idx)}
                          className="p-1.5 text-red-500 hover:text-red-700"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* What To Expect (Steps) */}
              <div className="bg-studio-cream/40 border border-studio-border p-5 rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-studio-espresso flex items-center gap-1.5">
                      <ListOrdered className="w-4 h-4 text-champagne-700" />
                      What To Expect: Step-by-Step Experience
                    </h3>
                    <p className="text-[11px] text-studio-taupe">
                      Walk clients through the luxury consultation, treatment steps, and finishing.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddStep}
                    className="inline-flex items-center gap-1 text-xs text-champagne-700 font-semibold hover:text-champagne-800"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Step</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {whatToExpect.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-studio-border p-4 rounded-sm space-y-2 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-champagne-700 uppercase tracking-wider">
                          Step {idx + 1}
                        </span>
                        {whatToExpect.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveStep(idx)}
                            className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        value={step.title}
                        onChange={(e) => handleUpdateStep(idx, "title", e.target.value)}
                        placeholder="Step Title (e.g. In-Depth Consultation & Formulation)"
                        className="w-full bg-studio-cream/20 border border-studio-border px-3 py-1.5 text-xs font-semibold text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                      />
                      <textarea
                        rows={2}
                        value={step.description}
                        onChange={(e) => handleUpdateStep(idx, "description", e.target.value)}
                        placeholder="Step Description detailing what happens during this stage..."
                        className="w-full bg-studio-cream/20 border border-studio-border px-3 py-1.5 text-xs text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "faqs" && (
            <div className="space-y-6 animate-fade-in">
              {/* WhatsApp Message Template */}
              <div className="bg-studio-cream/40 border border-studio-border p-5 rounded-sm space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-studio-espresso">
                  WhatsApp Inquiry Prefill Message
                </label>
                <p className="text-[11px] text-studio-taupe">
                  The message automatically populated when a visitor taps "WhatsApp Query" for this treatment.
                </p>
                <textarea
                  rows={2}
                  value={prefilledWhatsAppMessage}
                  onChange={(e) => setPrefilledWhatsAppMessage(e.target.value)}
                  placeholder={`Hi Essence Hair and Makeup Studio, I'm interested in ${name || "this service"} at your Church Road studio...`}
                  className="w-full bg-white border border-studio-border px-3.5 py-2 text-xs text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                />
              </div>

              {/* FAQs */}
              <div className="bg-studio-cream/40 border border-studio-border p-5 rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-studio-espresso flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-champagne-700" />
                      Frequently Asked Questions
                    </h3>
                    <p className="text-[11px] text-studio-taupe">
                      Answer common client inquiries regarding longevity, preparation, and maintenance.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddFaq}
                    className="inline-flex items-center gap-1 text-xs text-champagne-700 font-semibold hover:text-champagne-800"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add FAQ</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-studio-border p-4 rounded-sm space-y-2 relative"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-champagne-700 uppercase tracking-wider">
                          FAQ #{idx + 1}
                        </span>
                        {faqs.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveFaq(idx)}
                            className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => handleUpdateFaq(idx, "question", e.target.value)}
                        placeholder="Question (e.g. How long does the result last?)"
                        className="w-full bg-studio-cream/20 border border-studio-border px-3 py-1.5 text-xs font-semibold text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                      />
                      <textarea
                        rows={2}
                        value={faq.answer}
                        onChange={(e) => handleUpdateFaq(idx, "answer", e.target.value)}
                        placeholder="Answer detailing duration, proper care, or consultation guidelines..."
                        className="w-full bg-studio-cream/20 border border-studio-border px-3 py-1.5 text-xs text-studio-espresso focus:outline-none focus:border-champagne-600 rounded-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Footer Controls */}
          <div className="pt-4 border-t border-studio-border flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-studio-taupe hover:text-studio-espresso transition-colors"
            >
              Cancel
            </button>
            <div className="flex items-center gap-3">
              {activeTab !== "faqs" && (
                <button
                  type="button"
                  onClick={() => setActiveTab(activeTab === "general" ? "journey" : "faqs")}
                  className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-champagne-800 bg-champagne-100 hover:bg-champagne-200 transition-colors"
                >
                  Next Tab →
                </button>
              )}
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white bg-champagne-700 hover:bg-champagne-800 shadow transition-colors"
              >
                <Check className="w-4 h-4" />
                <span>{initialService ? "Save Changes" : "Publish Service"}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
