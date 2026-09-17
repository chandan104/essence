/**
 * Essence Hair and Makeup Studio - Comprehensive Services Directory
 * 
 * Strict compliance:
 * - All services requested by user are present without omissions or renames.
 * - Professional cosmetic wording; no medical cures or guaranteed claims.
 * - Pricing & exact durations are represented as configurable placeholders.
 */

export type ServiceCategory = "hair" | "nails" | "skin" | "lashes" | "brows";

export interface ServiceStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryName: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  whoIsItFor: string[];
  whatToExpect: ServiceStep[];
  durationPlaceholder: string;
  pricePlaceholder: string;
  faqs: ServiceFAQ[];
  prefilledWhatsAppMessage: string;
  image: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  suitabilityDisclaimer?: string;
  subStyles?: { name: string; description: string }[];
}

export const servicesData: ServiceItem[] = [
  // ==========================================
  // HAIR
  // ==========================================
  {
    id: "hair-colour",
    name: "Hair Colour",
    category: "hair",
    categoryName: "Hair",
    slug: "hair-colour",
    shortDescription: "Bespoke hair colour, balayage, highlights, and tone refinement customized to your skin tone and signature style.",
    fullDescription: "From soft dimensional balayage and sun-kissed babylights to rich global hues and tonal glossing, our colour appointments begin with an in-depth shade consultation. We analyze your hair history, texture, and natural undertones to achieve radiant, long-lasting color while maintaining strand integrity.",
    whoIsItFor: [
      "Anyone seeking a subtle dimensional refresh, root touch-up, or full tonal transformation.",
      "Clients desiring low-maintenance lived-in blonde, rich mocha, or vibrant bespoke hues.",
      "Individuals wanting to neutralize brassiness or revive dull, oxidized colour."
    ],
    whatToExpect: [
      { step: 1, title: "Colour Consultation & Strand Assessment", description: "Evaluating your natural base, hair health, porosity, and discussing your inspiration photos." },
      { step: 2, title: "Custom Formulation & Sectioning", description: "Precision blending of professional pigments with protective bond-shielding additives." },
      { step: 3, title: "Artisanal Application", description: "Technique-driven hand painting, foiling, or global saturation tailored to your desired depth." },
      { step: 4, title: "Toning & Nourishing Rinse", description: "Gloss glaze neutralization followed by an intensive post-colour moisture lock." },
      { step: 5, title: "Signature Blowout & Aftercare Guidance", description: "Thermal styling plus personalized recommendations for color-safe home maintenance." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~2.5 - 4 hours]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "How do I choose the right hair colour for my skin tone?", answer: "During your consultation at Essence, we evaluate warm, cool, and neutral undertones to blend a custom formula that naturally illuminates your complexion." },
      { question: "Will colouring cause dryness or damage?", answer: "We formulate with conditioning agents and bond builders to help preserve moisture and strength throughout the process." },
      { question: "How often will I need a touch-up?", answer: "Balayage and lived-in techniques typically require refreshes every 10–14 weeks, while global color or grey coverage usually benefits from root maintenance every 4–6 weeks." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Hair Colour. I'd like to know the available options, pricing and appointment availability at Church Road, Dimapur.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    seoTitle: "Hair Colour in Dimapur | Essence Hair & Makeup Studio Church Road",
    seoDescription: "Discover bespoke hair colouring, balayage, and highlights at Essence Hair and Makeup Studio on Church Road, Dimapur. Personalized shades and healthy hair focus."
  },
  {
    id: "hair-extension",
    name: "Hair Extension",
    category: "hair",
    categoryName: "Hair",
    slug: "hair-extensions",
    shortDescription: "Seamless volume, length, and dimensional thickness using premium hair extensions tailored to your natural flow.",
    fullDescription: "Designed for clients who desire natural-looking fullness, instant length, or enhanced density. Our hair extension specialists assess your scalp health, hair density, and lifestyle to recommend the ideal attachment method for seamless blending.",
    whoIsItFor: [
      "Clients with fine or thinning hair desiring instant fullness and bounce.",
      "Brides and event guests looking for dramatic length and styling versatility.",
      "Anyone growing out a haircut or seeking chemical-free highlight placement."
    ],
    whatToExpect: [
      { step: 1, title: "Texture & Color Matching Consultation", description: "Assessing natural density, wave pattern, and exact multi-tonal colour balance." },
      { step: 2, title: "Hair Preparation & Cleansing", description: "Deep clarifying wash to remove residue and ensure optimal grip and longevity." },
      { step: 3, title: "Precision Sectioning & Installation", description: "Strategic placement respecting natural hair movement and comfort." },
      { step: 4, title: "Seamless Blending Cut", description: "Custom razor and scissor trimming to merge the extensions invisibly with your natural length." },
      { step: 5, title: "Styling & Home Maintenance Plan", description: "Brushing, washing, and sleeping care guide for maximum hair longevity." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~2 - 3.5 hours]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Can I wash and heat-style my hair extensions?", answer: "Yes, our premium extensions can be washed, blow-dried, and heat-styled using appropriate thermal protection." },
      { question: "Are hair extensions damaging to natural hair?", answer: "When professionally installed with calibrated tension and cared for with gentle brushing, your natural hair remains protected." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Hair Extensions. Could you please share available methods, pricing and consultation slots?",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    seoTitle: "Hair Extensions in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Premium hair extensions at Essence Hair and Makeup Studio, Church Road, Dimapur. Natural blending, lush volume, and custom styling."
  },
  {
    id: "hair-smoothing",
    name: "Hair Smoothing / Straightening",
    category: "hair",
    categoryName: "Hair",
    slug: "hair-smoothing",
    shortDescription: "Silky, manageable, frizz-free hair with sleek alignment and mirror-like luminous shine.",
    fullDescription: "A professional smoothing and realignment service designed to tame unruly frizz, calm excessive volume, and dramatically cut down daily blow-dry time. Customized formulas provide sleek softness while maintaining touchable movement.",
    whoIsItFor: [
      "Clients struggling with humidity-induced frizz, coarseness, or unruly curls.",
      "Busy professionals seeking effortless, low-maintenance wash-and-wear hair.",
      "Anyone desiring glass-like shine and sleek strand alignment."
    ],
    whatToExpect: [
      { step: 1, title: "Scalp & Hair Assessment", description: "Determining curl resilience, previous chemical treatments, and strength." },
      { step: 2, title: "Deep Purifying Wash", description: "Opening the cuticle layer gently for even product absorption." },
      { step: 3, title: "Careful Smoothing Saturation", description: "Meticulous section-by-section application from roots to tips." },
      { step: 4, title: "Thermic Sealing", description: "Precision temperature-calibrated flat ironing to lock in the smooth alignment." },
      { step: 5, title: "Neutralizing Treatment & Mask", description: "Final nourishing seal followed by a blowout and post-care briefing." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~3 - 4.5 hours]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "How long does hair smoothing last?", answer: "Depending on hair texture, growth rate, and use of sulfate-free aftercare, results typically last 3 to 6 months." },
      { question: "How soon can I wash my hair after the service?", answer: "Your stylist will advise the exact window (typically 48 to 72 hours) to allow the smoothing bonds to fully set." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Hair Smoothing / Straightening. Could you share details, pricing and availability?",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Hair Smoothing & Straightening in Dimapur | Essence Studio",
    seoDescription: "Professional hair smoothing and straightening at Essence Hair and Makeup Studio, Church Road, Dimapur. Long-lasting frizz control and mirror shine."
  },
  {
    id: "hair-botox",
    name: "Hair Botox",
    category: "hair",
    categoryName: "Hair",
    slug: "hair-botox",
    shortDescription: "Deep restorative conditioning, gloss enhancement, and anti-frizz revival for tired or heat-stressed hair.",
    fullDescription: "Despite its name, Hair Botox contains zero botulinum toxin; it is an intensive, non-chemical deep conditioning treatment packed with proteins, amino acids, and essential lipids that fill in microscopic gaps in damaged hair cuticles. The result is velvety softness, reduced frizz, and renewed vitality without flattening your natural body.",
    whoIsItFor: [
      "Hair weakened by heat styling, environmental stress, or colour processing.",
      "Clients wanting frizz reduction while retaining their natural body and waves.",
      "Anyone experiencing dullness, dryness, and split-end brittleness."
    ],
    whatToExpect: [
      { step: 1, title: "Hair Health Diagnostic", description: "Assessing strand elasticity, dryness levels, and cuticle condition." },
      { step: 2, title: "Clarifying Cleansing", description: "Purifying the hair shaft of environmental build-up and silicones." },
      { step: 3, title: "Nutrient-Rich Infusion", description: "Applying the concentrated protein and vitamin complex strand by strand." },
      { step: 4, title: "Heat-Activated Absorption", description: "Gentle heat activation allows restorative actives to deeply penetrate the cortex." },
      { step: 5, title: "Rinse, Seal & Silk Finish Blowout", description: "Light sealing followed by a blowout showcasing weightless gloss." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~2 - 3 hours]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "What is the difference between Hair Botox and Keratin?", answer: "Hair Botox is primarily a deep restorative conditioning treatment that rejuvenates texture without altering the natural curl pattern, whereas traditional keratin primarily straightens." },
      { question: "Does Hair Botox make hair completely straight?", answer: "No, it softens frizz and increases shine while keeping your hair's natural bounce and movement intact." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in booking a Hair Botox appointment. Could you please share availability and pricing for Church Road?",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    seoTitle: "Hair Botox Treatment in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Revitalize stressed hair with Hair Botox at Essence Hair and Makeup Studio, Church Road, Dimapur. Deep restoration, frizz reduction, and radiant gloss."
  },
  {
    id: "nanoplastia",
    name: "Nanoplastia",
    category: "hair",
    categoryName: "Hair",
    slug: "nanoplastia",
    shortDescription: "Advanced organic amino-acid hair realignment for silky straightness, deep nourishment, and luminous shine.",
    fullDescription: "Nanoplastia is an innovative, formaldehyde-free hair restoration and straightening methodology powered by amino acids, collagen, and organic bio-actives. It works from the inside out, infusing nutrients into the hair cortex to realign texture, tame stubborn frizz, and impart a glass-hair gloss.",
    whoIsItFor: [
      "Clients seeking long-lasting straightness and high shine with organic formulation philosophy.",
      "Thick, coarse, or resistant hair types needing structural smoothing.",
      "Individuals sensitive to harsh chemical fumes looking for a comfortable treatment experience."
    ],
    whatToExpect: [
      { step: 1, title: "Strand Porosity Consultation", description: "Examining hair resistance and determining ideal heat calibration." },
      { step: 2, title: "Shampoo Preparation", description: "Thorough wash to prime the cuticle for amino-acid penetration." },
      { step: 3, title: "Bio-Active Saturation", description: "Carefully coating fine sections with the nutrient-rich nanoplastia formulation." },
      { step: 4, title: "Development & Thermal Infusion", description: "Allowing bio-actives to interact, followed by micro-iron thermal sealing." },
      { step: 5, title: "Final Hydration Rinse & Gloss Blowout", description: "Neutralizing rinse and blowout revealing silky, reflective alignment." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~3.5 - 5 hours]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Is Nanoplastia safe for coloured hair?", answer: "Yes, though it may lighten artificial cosmetic colour by half a shade due to the amino-acid infusion, which our stylists account for during consultation." },
      { question: "How long do Nanoplastia results endure?", answer: "With recommended sulfate-free and salon-prescribed care, results typically last between 4 to 6 months." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Nanoplastia. Could you please share treatment details, pricing and next available dates?",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    seoTitle: "Nanoplastia Treatment in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Experience revolutionary Nanoplastia hair realignment at Essence Studio, Church Road, Dimapur. Formaldehyde-free straightening, high shine, and frizz control."
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    category: "hair",
    categoryName: "Hair",
    slug: "hair-spa",
    shortDescription: "A relaxing, deeply nourishing ritual to replenish dry strands, boost luster, and melt away daily tension.",
    fullDescription: "Our signature Hair Spa is a sensory wellness experience combining intensive botanical creme masks, targeted scalp stimulation, gentle steaming, and rhythmic head massage. It revitalizes dull hair, locks in essential hydration, and improves manageability.",
    whoIsItFor: [
      "Anyone needing regular monthly hair and scalp maintenance.",
      "Dry, dehydrated, or pollution-exposed hair seeking replenishment.",
      "Clients wanting to unwind with an indulgent therapeutic head massage."
    ],
    whatToExpect: [
      { step: 1, title: "Scalp & Hair Type Selection", description: "Choosing the ideal treatment mask (moisture, repair, or colour brilliance)." },
      { step: 2, title: "Aromatherapy Shampoo", description: "Gentle cleansing to lift dirt and invigorate hair follicles." },
      { step: 3, title: "Cream Massage Application", description: "Rhythmic acupressure massage across crown, temples, and neck." },
      { step: 4, title: "Warm Micro-Mist Steaming", description: "Soft vapor opens the hair scales allowing nutrients to sink deep." },
      { step: 5, title: "Cool Conditioning Rinse & Dry", description: "Sealing the cuticle followed by a gentle, bouncy salon finish." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~60 - 75 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "How often should I indulge in a Hair Spa?", answer: "For optimal scalp health and strand vitality, a monthly or bi-weekly session is ideal." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I would like to book a relaxing Hair Spa appointment. Please share available time slots.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Luxury Hair Spa in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Pamper your hair with our restorative Hair Spa at Essence Hair and Makeup Studio, Church Road, Dimapur. Deep conditioning and relaxing massage."
  },
  {
    id: "scalp-treatment",
    name: "Scalp Treatment / Massage",
    category: "hair",
    categoryName: "Hair",
    slug: "scalp-treatment",
    shortDescription: "Purifying scalp therapy with soothing acupressure massage to foster a balanced, healthy foundation for hair growth.",
    fullDescription: "A healthy mane begins at the root. Our specialized Scalp Treatment addresses flakiness, excess sebum, tightness, or product buildup through gentle exfoliation, clarifying serums, and therapeutic head-and-neck massage designed to relieve tension and support microcirculation.",
    whoIsItFor: [
      "Clients experiencing dry, flaky, or congested scalps.",
      "Those who suffer from stress-induced head and neck stiffness.",
      "Anyone desiring an invigorating reset for healthier hair density."
    ],
    whatToExpect: [
      { step: 1, title: "Scalp Diagnostic Check", description: "Analyzing sebum levels, flakiness, and sensitivity." },
      { step: 2, title: "Exfoliating Scalp Scrub / Detox", description: "Removing micro-impurities and dead skin cells gently." },
      { step: 3, title: "Balancing Tonic Infusion", description: "Applying soothing botanicals targeted to your specific scalp profile." },
      { step: 4, title: "Acupressure & Lymphatic Massage", description: "Focused massage targeting tension nodes in the head, neck, and shoulders." },
      { step: 5, title: "Cooling Rinse & Refreshing Blowout", description: "Leaving your scalp feeling light, cool, and clean." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~60 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Can a scalp treatment help with dandruff?", answer: "Yes, our purifying exfoliation and balancing tonics help cleanse flakes and soothe dryness in a cosmetic, comforting environment." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in the Scalp Treatment & Massage. Could you share details and available slots?",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Scalp Treatment & Massage in Dimapur | Essence Studio",
    seoDescription: "Purifying scalp therapies and relaxing massages at Essence Hair and Makeup Studio, Church Road, Dimapur. Healthy roots, refreshed mind."
  },
  {
    id: "perming",
    name: "Perming / Curly",
    category: "hair",
    categoryName: "Hair",
    slug: "perming",
    shortDescription: "Custom curl texturizing, from soft beachy waves to bouncy defined curls with lasting shape.",
    fullDescription: "Whether you crave effortless, undone French-girl waves, bouncy modern curls, or structured corkscrews, our perming and texturizing services are customized using modern, milder lotion systems designed to deliver touchable movement without brittle crunch.",
    whoIsItFor: [
      "Clients with straight or limp hair desiring continuous body, volume, and texture.",
      "Those looking to enhance or re-define loose, uneven natural curl patterns.",
      "Style lovers seeking effortless wake-up-and-go wavy looks."
    ],
    whatToExpect: [
      { step: 1, title: "Curl Pattern Consultation", description: "Selecting rod sizes and wave geometry to match your aesthetic." },
      { step: 2, title: "Pre-Perm Conditioning", description: "Equalizing porosity to ensure uniform wave formation." },
      { step: 3, title: "Architectural Rod Winding", description: "Precision wrapping respecting your natural hair parting and facial features." },
      { step: 4, title: "Processing & Neutralization", description: "Carefully timed wave activation followed by an antioxidant neutralizer." },
      { step: 5, title: "Diffuser Styling & Curl Routine", description: "Learning scrunching, drying, and curl-friendly product techniques." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~2.5 - 3.5 hours]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "How long does a modern perm last?", answer: "Most clients enjoy their waves for 3 to 6 months as the texture softly relaxes over time." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Perming / Curly texturizing. Could you please share options and appointment availability?",
    image: "https://images.unsplash.com/photo-1584297091622-af8e5fd397d9?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Hair Perming & Curly Hair Styling in Dimapur | Essence Studio",
    seoDescription: "Modern perming, beach waves, and curl texturizing at Essence Hair and Makeup Studio on Church Road, Dimapur. Lasting bounce and shape."
  },

  // ==========================================
  // NAILS
  // ==========================================
  {
    id: "gel-paint-nail-art",
    name: "Gel Paint / Nail Art",
    category: "nails",
    categoryName: "Nails",
    slug: "nail-art",
    shortDescription: "Flawless chip-resistant gel polish and editorial nail art customized to your aesthetic.",
    fullDescription: "Express your signature style through high-shine gel manicures, French tips, chrome glazes, ombré gradients, and intricate hand-painted nail artistry. We use durable, professional gel lacquers cured under gentle LED lights for weeks of chip-free wear.",
    whoIsItFor: [
      "Anyone wanting glossy, chip-resistant nails that last for weeks.",
      "Clients desiring creative hand-painted designs, chrome finishes, or minimalist accents.",
      "Brides and party-goers wanting coordinated custom nail aesthetics."
    ],
    whatToExpect: [
      { step: 1, title: "Cuticle Care & Nail Shaping", description: "Almond, square, coffin, or squoval shaping with gentle cuticle refinement." },
      { step: 2, title: "Dehydration & Primer Application", description: "Preparing the nail plate for maximum gel adhesion without damage." },
      { step: 3, title: "Base & Pigment Layers", description: "Thin, even coats of high-pigment gel with LED curing between layers." },
      { step: 4, title: "Hand-Painted Art / Chrome Accents", description: "Precision design execution according to your inspiration." },
      { step: 5, title: "High-Gloss Top Coat & Cuticle Oil", description: "Mirror-shine sealing and nourishing botanical oil massage." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~45 - 75 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "How long does gel polish stay flawless?", answer: "Typically 2 to 3 weeks with zero chipping when maintained with regular cuticle hydration." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'd like to book a Gel Paint / Nail Art appointment. Could you please share available slots and designs?",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    seoTitle: "Gel Paint & Nail Art in Dimapur | Essence Studio Church Road",
    seoDescription: "Artisanal nail art, chrome finishes, and long-lasting gel polish at Essence Hair and Makeup Studio, Church Road, Dimapur."
  },
  {
    id: "nail-extensions-acrylic",
    name: "Nail Extensions — Acrylic",
    category: "nails",
    categoryName: "Nails",
    slug: "acrylic-extensions",
    shortDescription: "Strong, sculpted acrylic extensions engineered for dramatic length, flawless shape, and long-lasting durability.",
    fullDescription: "Our acrylic nail extensions are hand-sculpted using premium liquid monomer and powder polymers to achieve your dream length and silhouette—whether coffin, stiletto, almond, or classic square. Exceptional strength makes them ideal for clients with active lifestyles.",
    whoIsItFor: [
      "Clients with short, brittle, or bitten nails wanting instant length and strength.",
      "Those who love long, dramatic nail architectures with limitless art possibilities.",
      "Anyone needing sturdy nails for special events or everyday glamour."
    ],
    whatToExpect: [
      { step: 1, title: "Nail Prep & Tip Placement", description: "Gentle buffing, cuticle prep, and precision tip or form placement." },
      { step: 2, title: "Acrylic Sculpting", description: "Meticulous apex building and curvature sculpting for natural balance." },
      { step: 3, title: "Filing & Contouring", description: "Machine and hand e-file refinement for crisp edges and smooth arches." },
      { step: 4, title: "Color & Art Application", description: "Applying desired gel color, encapsulation, or decorative designs." },
      { step: 5, title: "Gloss Finish & Hand Hydration", description: "Non-wipe top coat curing and soothing hand cream application." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~90 - 120 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "How often do acrylic extensions need infills?", answer: "Infill appointments are recommended every 2 to 3 weeks to keep up with natural nail growth." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Acrylic Nail Extensions. Could you please share pricing and availability?",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    seoTitle: "Acrylic Nail Extensions in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Expert acrylic nail extensions, shaping, and fills at Essence Hair and Makeup Studio on Church Road, Dimapur. Durable, sculpted beauty."
  },
  {
    id: "nail-extensions-gel",
    name: "Nail Extensions — Gel",
    category: "nails",
    categoryName: "Nails",
    slug: "gel-extensions",
    shortDescription: "Lightweight, flexible, and natural-feeling gel extensions with crystal clarity and comfortable wear.",
    fullDescription: "Crafted with hard builder gel or soft-gel extensions, this service offers an ultra-lightweight, odor-free alternative to acrylics. Gel extensions flex naturally with your own nails while providing beautiful length, glass-like clarity, and an organic feel.",
    whoIsItFor: [
      "Clients who prefer a lightweight, flexible feel over rigid extensions.",
      "Those sensitive to strong monomer scents.",
      "Individuals wanting a crystal-clear look or soft natural enhancement."
    ],
    whatToExpect: [
      { step: 1, title: "Dry Manicure Preparation", description: "Sanitizing, cuticle lifting, and light nail surface preparation." },
      { step: 2, title: "Form / Gel Tip Fitment", description: "Matching each nail with the ideal curvature and sizing." },
      { step: 3, title: "Builder Gel Layering & LED Cure", description: "Building structural apex and curing under cool-setting LED lights." },
      { step: 4, title: "Edge Sharpening & Gel Colour", description: "Fine shaping followed by your preferred gel shades or french tips." },
      { step: 5, title: "Glass Top Seal & Cuticle Care", description: "High-shine scratch-resistant top coat and botanical oil." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~75 - 105 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Are gel extensions gentler on natural nails?", answer: "Yes, gel extensions offer natural flexibility and soak off gently during removal without aggressive filing." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Gel Nail Extensions. Could you share details, pricing and booking availability?",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Gel Nail Extensions in Dimapur | Essence Studio Church Road",
    seoDescription: "Lightweight, natural-looking gel nail extensions at Essence Hair and Makeup Studio, Church Road, Dimapur. Odorless and high-shine."
  },
  {
    id: "manicure",
    name: "Manicure",
    category: "nails",
    categoryName: "Nails",
    slug: "manicure",
    shortDescription: "Restorative hand ritual including nail shaping, meticulous cuticle work, hand exfoliation, and relaxing massage.",
    fullDescription: "Treat your hands to our rejuvenating manicure ritual. Designed to restore moisture to hardworking hands, refine rough cuticles, and leave your natural nails buffed to a high gloss or coated with your chosen polish.",
    whoIsItFor: [
      "Anyone wanting neat, clean, and elegant natural hands.",
      "Clients suffering from dry cuticles, brittle nails, or rough skin.",
      "Perfect quick self-care appointment for professionals and brides alike."
    ],
    whatToExpect: [
      { step: 1, title: "Hand Soak & Aromatherapy Cleanse", description: "Warm softening bath enriched with essential oils." },
      { step: 2, title: "Precision Cuticle Detailing", description: "Gentle pushing and tidy trimming of excess dry skin." },
      { step: 3, title: "Smoothing Hand Scrub", description: "Botanical exfoliation to buff away dull skin cells." },
      { step: 4, title: "Hand & Arm Pressure Point Massage", description: "Hydrating lotion massage relieving wrist and hand fatigue." },
      { step: 5, title: "Buff or Polish Finish", description: "Natural high-shine buffing or application of long-wear polish." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~45 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Can I add gel polish to this manicure?", answer: "Absolutely, you can upgrade to long-wearing gel polish during your appointment." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'd like to book a classic or spa Manicure appointment at Church Road, Dimapur.",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Professional Manicure in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Pampering manicures, cuticle care, and hand massages at Essence Studio, Church Road, Dimapur. Clean, polished elegance."
  },
  {
    id: "pedicure",
    name: "Pedicure",
    category: "nails",
    categoryName: "Nails",
    slug: "pedicure",
    shortDescription: "Indulgent foot spa therapy with soothing soak, callus smoothing, invigorating scrub, and tension-relieving massage.",
    fullDescription: "Step into pure relaxation with our signature pedicure. We address rough heels, tired arches, and neglected toenails through botanical foot baths, gentle callus smoothing, deep exfoliation, and a restorative leg-and-foot massage, followed by pristine polish.",
    whoIsItFor: [
      "Anyone experiencing dry, cracked heels or tired, aching feet.",
      "Those preparing for sandals, vacations, or wedding celebrations.",
      "Anyone looking for a deeply grounding relaxation ritual."
    ],
    whatToExpect: [
      { step: 1, title: "Warm Mineral Foot Soak", description: "Detoxifying foot bath with softening salts and aromatics." },
      { step: 2, title: "Toenail Shaping & Cuticle Tidy", description: "Straight precision clipping and gentle cuticle clearing." },
      { step: 3, title: "Callus Smoothing & Scrub", description: "Gentle buffing of heels followed by a sugar or salt scrub." },
      { step: 4, title: "Calf & Foot Acupressure Massage", description: "Stimulating circulation and easing muscle stiffness." },
      { step: 5, title: "Cleanse, Moisturize & Polish", description: "Nail dehydration, base coat, and chosen lacquer application." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~60 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Is your pedicure equipment sanitized?", answer: "Yes, we adhere to strict hygiene protocols with hospital-grade sanitization and disposable single-use liners where appropriate." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'd like to book a Pedicure appointment. Please share available times.",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Luxury Pedicure in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Relaxing foot spa rituals and pedicures at Essence Hair and Makeup Studio on Church Road, Dimapur. Soft feet, refined polish."
  },
  {
    id: "toe-nail-extensions",
    name: "Toe Nail Extensions",
    category: "nails",
    categoryName: "Nails",
    slug: "toe-nail-extensions",
    shortDescription: "Precision reconstruction and aesthetic extensions for damaged, uneven, or short toenails.",
    fullDescription: "Ideal for clients who have broken, uneven, or naturally small toenails. Using specialized hygienic gel or acrylic techniques, we sculpt uniform, aesthetically balanced toenails that pair seamlessly with your pedicure and open-toe footwear.",
    whoIsItFor: [
      "Clients with chipped, damaged, or uneven toenails wanting a uniform look.",
      "Brides wanting picture-perfect feet for ceremonies and footwear.",
      "Anyone who wants symmetrical, elegant toenails for summer or holidays."
    ],
    whatToExpect: [
      { step: 1, title: "Antiseptic Cleanse & Prep", description: "Detailed hygienic cleansing and nail surface preparation." },
      { step: 2, title: "Custom Sizing & Sculpting", description: "Carefully applying thin acrylic or hard gel to rebuild missing sections." },
      { step: 3, title: "Flush Contouring", description: "Filing flush with the natural bed for zero discomfort in shoes." },
      { step: 4, title: "Gel Polish Application", description: "Applying matching or bespoke gel color." },
      { step: 5, title: "High-Shine Curing & Hydration", description: "Sealing with durable gloss and conditioning the nail folds." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~45 - 60 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Will toe nail extensions hurt inside closed shoes?", answer: "No, our specialists sculpt them thin and flush to natural curvature so they remain completely comfortable." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Toe Nail Extensions. Could you please provide details and booking slots?",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Toe Nail Extensions in Dimapur | Essence Studio Church Road",
    seoDescription: "Flawless toe nail extensions and reconstruction at Essence Hair and Makeup Studio, Church Road, Dimapur. Symmetrical, elegant beauty."
  },

  // ==========================================
  // SKIN (Cosmetic language, no medical claims)
  // ==========================================
  {
    id: "facial-cleanup",
    name: "Facial / Clean Up",
    category: "skin",
    categoryName: "Skin",
    slug: "facial-cleanup",
    shortDescription: "A gentle, deeply purifying facial cleanse to clear surface impurities, refine pores, and restore natural glow.",
    fullDescription: "An essential skin maintenance treatment designed to remove accumulated dirt, surface sebum, and dead skin cells. Combining mild double-cleansing, gentle steam, light manual extraction where needed, and a soothing botanical pack, this service leaves your complexion clean, breathable, and rested.",
    whoIsItFor: [
      "Anyone seeking a regular monthly skin refresh.",
      "Individuals with dull skin from city dust and daily fatigue.",
      "Clients wanting an instant clean canvas before makeup or events."
    ],
    whatToExpect: [
      { step: 1, title: "Skin Assessment & Double Cleanse", description: "Gently dissolving makeup and surface grime with botanical cleansers." },
      { step: 2, title: "Gentle Steam & Exfoliation", description: "Warm mist loosens dead skin while a gentle scrub refines texture." },
      { step: 3, title: "Light T-Zone Extraction", description: "Careful removal of superficial blackheads." },
      { step: 4, title: "Calming Face Massage & Pack", description: "Cooling mask to soothe pores and restore balanced hydration." },
      { step: 5, title: "Moisturizer & Broad-Spectrum Sun Shield", description: "Finishing with barrier-protecting hydration and sunscreen." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~45 - 60 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "What is the difference between a Clean Up and a Full Facial?", answer: "A clean up focuses primarily on deep cleansing and clearing pores in a shorter timeframe, while a full facial includes extended massage, multi-layer masks, and targeted serums." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'd like to book a Facial / Clean Up appointment at Church Road, Dimapur.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Facial & Clean Up in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Deeply purifying facials and clean-up treatments at Essence Hair and Makeup Studio, Church Road, Dimapur. Refreshed, clear skin."
  },
  {
    id: "gold-facial",
    name: "Gold Facial",
    category: "skin",
    categoryName: "Skin",
    slug: "gold-facial",
    shortDescription: "A luxurious radiance-boosting facial enriched with shimmering gold-infused creams for an opulent party-ready glow.",
    fullDescription: "Our Gold Facial is a celebratory ritual favored for weddings and grand festivities. Infused with fine colloidal gold particles and nourishing botanical oils, this multi-step facial stimulates microcirculation, enhances suppleness, and leaves your skin with a luminous, candlelit sheen.",
    whoIsItFor: [
      "Brides, bridesmaids, and event attendees wanting an unmistakable golden glow.",
      "Skin that appears tired, lacklustre, or lacking festive radiance.",
      "Anyone desiring a pampering, opulent skincare experience."
    ],
    whatToExpect: [
      { step: 1, title: "Purifying Gold Cleanser", description: "Cleansing away impurities while prepping skin for active infusion." },
      { step: 2, title: "Luminescent Scrub Exfoliation", description: "Micro-exfoliation to reveal fresh, receptive skin cells." },
      { step: 3, title: "Revitalizing Gold Gel & Cream Massage", description: "Extended upward facial sculpting massage enhancing circulation." },
      { step: 4, title: "Gold Peel-Off Mask", description: "Locking in moisture and plumping skin with reflective gold actives." },
      { step: 5, title: "Illuminating Serum & Hydration Shield", description: "Finishing with light-diffusing hydrators for an all-day glow." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~75 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "When should I get a Gold Facial before a wedding?", answer: "We suggest booking your Gold Facial 2 to 3 days prior to your primary event so your skin reaches peak luminosity." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in the Gold Facial for an upcoming event. Could you share details and slots?",
    image: "https://images.unsplash.com/photo-1512290900672-1f50ff5231b5?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    seoTitle: "Gold Facial in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Luminous Gold Facial treatments at Essence Studio on Church Road, Dimapur. Bridal glow and festive skin radiance."
  },
  {
    id: "brightening-facial",
    name: "Whitening / Brightening Facial",
    category: "skin",
    categoryName: "Skin",
    slug: "brightening-facial",
    shortDescription: "Skin-illuminating facial designed to even out sun-tan, diminish dullness, and reveal an energized, radiant complexion.",
    fullDescription: "Crafted with cosmetic brightening botanicals, vitamin-rich complexes, and fruit enzymes, this facial helps clarify uneven skin tone and counteract environmental dullness. It gently accelerates cell turnover to unveil a brighter, refreshed glow without harsh bleaching agents.",
    whoIsItFor: [
      "Skin affected by sun exposure, seasonal tanning, or uneven pigmentation.",
      "Clients desiring a clean, luminous, uniform complexion.",
      "Those who want to revive tired skin before photoshoots and celebrations."
    ],
    whatToExpect: [
      { step: 1, title: "Antioxidant Clarifying Cleanse", description: "Washing away oxidized surface sebum and pollution debris." },
      { step: 2, title: "Enzymatic Brightening Exfoliation", description: "Dissolving dead surface cells to soften skin texture." },
      { step: 3, title: "Active Vitamin C / Botanical Infusion", description: "Targeted concentrate applied to areas of visible sun tan or uneven tone." },
      { step: 4, title: "De-Tanning Radiance Mask", description: "Cooling mask formulated to soothe heat and boost clarity." },
      { step: 5, title: "Sun-Protection Moisture Lock", description: "Shielding fresh skin with broad-spectrum SPF protection." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~60 - 75 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Does this facial contain harsh chemical bleaches?", answer: "No, our brightening facial relies on cosmetic botanicals, enzymes, and antioxidants to naturally illuminate and revive skin tone safely." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in the Brightening Facial. Please share details and appointment slots.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Brightening & De-Tan Facial in Dimapur | Essence Studio",
    seoDescription: "Revitalize uneven skin tone with our Brightening Facial at Essence Hair and Makeup Studio, Church Road, Dimapur. Safe, glowing results."
  },
  {
    id: "anti-aging-facial",
    name: "Anti-Aging Facial",
    category: "skin",
    categoryName: "Skin",
    slug: "anti-aging-facial",
    shortDescription: "Rejuvenating, peptide-enriched facial with targeted lifting massage to promote firmness, suppleness, and youthful bounce.",
    fullDescription: "A deeply nourishing facial engineered to support mature or fatigued skin. Formulated with cosmetic peptides, hyaluronic hydrators, and collagen-supporting plant extracts, paired with lifting lymphatic massage techniques that firm contours and smooth the appearance of fine lines.",
    whoIsItFor: [
      "Clients noticing loss of firmness, elasticity, or dehydration lines.",
      "Mature skin in need of intensive lipid replenishment and barrier care.",
      "Anyone seeking preventive anti-stress skin wellness."
    ],
    whatToExpect: [
      { step: 1, title: "Gentle Cream Cleansing", description: "Preserving delicate lipid barriers while refreshing skin." },
      { step: 2, title: "Micro-Dermabrasion / Gentle Peel", description: "Promoting cell renewal and smoothing fine surface texture." },
      { step: 3, title: "Firming Peptide Concentrate", description: "Deeply patting restorative youth complexes into the dermis." },
      { step: 4, title: "Lifting & Sculpting Facial Massage", description: "Specialized upward strokes stimulating facial muscles and tone." },
      { step: 5, title: "Collagen-Infused Firming Mask", description: "Plumping skin to leave it supple, dewy, and revitalized." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~75 - 90 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "At what age should one begin anti-aging facials?", answer: "Preventive facials can be started in your late twenties to support hydration and skin resilience, though it offers visible firming benefits at any age." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'd like to enquire about the Anti-Aging Facial. Could you please share options and availability?",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Anti-Aging Facial in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Firming and rejuvenating anti-aging facials at Essence Hair and Makeup Studio, Church Road, Dimapur. Youthful bounce and hydration."
  },
  {
    id: "hydra-facial",
    name: "Hydra Facial",
    category: "skin",
    categoryName: "Skin",
    slug: "hydra-facial",
    shortDescription: "The gold-standard vortex deep-cleansing, exfoliation, painless extraction, and intense hydration infusion.",
    fullDescription: "A premier non-invasive multi-step aesthetic facial that utilizes vortex suction technology to cleanse, exfoliate, extract impurities, and hydrate simultaneously. We saturate the skin with nourishing serums packed with antioxidants, peptides, and hyaluronic acid for an instant, red-carpet glass glow with zero downtime.",
    whoIsItFor: [
      "Congested, dull, or dehydrated skin seeking a comprehensive overhaul.",
      "Clients wanting immediate visible radiance for a wedding or event that very day.",
      "Anyone desiring clean pores without the redness of manual extractions."
    ],
    whatToExpect: [
      { step: 1, title: "Vortex Cleansing & Gentle Peeling", description: "Loosening dead skin cells and clearing surface sebum." },
      { step: 2, title: "Painless Vacuum Extraction", description: "Vortex suction whisks away deep debris from pores comfortably." },
      { step: 3, title: "Hydration Saturation", description: "Infusing targeted hyaluronic acid and antioxidant cocktails." },
      { step: 4, title: "LED Light Therapy / Cold Hammer", description: "Calming skin, tightening pores, and sealing in active serums." },
      { step: 5, title: "Dewy Moisture Barrier Shield", description: "Finishing with light hydration leaving an undeniable instant glass glow." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~60 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Is there any downtime after a Hydra Facial?", answer: "Zero downtime! Your skin will look instantly plump, clean, and radiant, making it perfect right before an event." },
      { question: "How frequently can I get a Hydra Facial?", answer: "A monthly session is recommended to maintain long-term skin clarity, hydration, and smooth texture." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in booking a Hydra Facial. Could you please share available slots and pricing for Church Road?",
    image: "https://images.unsplash.com/photo-1512290900672-1f50ff5231b5?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    seoTitle: "Hydra Facial in Dimapur | Essence Hair & Makeup Studio Church Road",
    seoDescription: "Experience instant glass skin with our Hydra Facial at Essence Hair and Makeup Studio on Church Road, Dimapur. Deep vortex cleanse and intense hydration."
  },
  {
    id: "acne-treatment",
    name: "Acne Treatment",
    category: "skin",
    categoryName: "Skin",
    slug: "acne-treatment",
    shortDescription: "Clarifying, antibacterial cosmetic skincare ritual to soothe active congestion, balance oil, and calm redness.",
    fullDescription: "A gentle, non-medical cosmetic facial engineered specifically for breakout-prone and congested skin. Combining deep salicylic/tea tree pore cleansing, gentle soothing mist, calming clay masks, and high-frequency antibacterial care, it helps balance sebum and reduce visible irritation without over-drying.",
    suitabilityDisclaimer: "Note: This is a professional cosmetic aesthetic treatment designed for general skin balancing and hygiene. It does not replace medical dermatological care or promise guaranteed permanent acne cures.",
    whoIsItFor: [
      "Skin experiencing blackheads, excess oiliness, or surface blemishes.",
      "Individuals wanting professional, hygienic pore clearing to prevent scarring.",
      "Clients seeking balanced hydration that won't clog delicate pores."
    ],
    whatToExpect: [
      { step: 1, title: "Clarifying Antiseptic Cleanse", description: "Deeply dissolving surface bacteria and excessive oil without stripping." },
      { step: 2, title: "Enzyme / Mild Beta-Hydroxy Exfoliation", description: "Clearing pore blockages gently." },
      { step: 3, title: "Hygienic Extraction & Calming High-Frequency", description: "Careful clearing under sterile conditions followed by antibacterial wand care." },
      { step: 4, title: "Soothing Anti-Inflammatory Mask", description: "Zinc, green tea, or aloe pack to cool redness and soothe irritation." },
      { step: 5, title: "Non-Comedogenic Barrier Shield", description: "Oil-free hydrator and mineral SPF protection." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~60 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Will my face be red after the acne treatment?", answer: "Minor temporary flushness may occur due to pore clearing, but our soothing masks quickly calm the skin before you leave the studio." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I would like to consult on an Acne Skincare Treatment appointment. Please share availability.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Clarifying Acne Treatment in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Gentle cosmetic acne balancing facials at Essence Hair and Makeup Studio, Church Road, Dimapur. Clarifying care and soothing pore hygiene."
  },

  // ==========================================
  // LASHES
  // ==========================================
  {
    id: "eyelash-extensions",
    name: "Eyelash Extensions",
    category: "lashes",
    categoryName: "Lashes",
    slug: "eyelash-extensions",
    shortDescription: "Custom lash styling crafted to your eye shape—available in Classic, Hybrid, Volume, Anime, and Bespoke designs.",
    fullDescription: "Wake up with effortless, captivating eyes every morning. Our master lash artists isolate individual natural lashes, bonding ultra-lightweight synthetic silk or cashmere fibers with medical-grade adhesive. Choose from our curated styles: subtle Classic, textured Hybrid, plush Volume, spiky Anime/Manga, or a fully Customized eye-map.",
    whoIsItFor: [
      "Anyone tired of daily mascara smudges, curlers, or strip lash hassles.",
      "Brides and party-goers desiring expressive, photogenic eyes from all angles.",
      "Clients wanting to lift and elongate hooded, downturned, or almond eyes."
    ],
    subStyles: [
      { name: "Classic (1:1)", description: "One delicate extension per natural lash for clean, mascara-like natural elegance." },
      { name: "Hybrid", description: "A balanced blend of classic singles and fluffy volume fans for textured, wispy dimension." },
      { name: "Volume", description: "Handmade lightweight bouquets of 3-6 ultra-fine lashes for full, velvety drama." },
      { name: "Anime / Manga", description: "Distinct pointed spikes interspersed with shorter feather-light fans for doll-eye intrigue." },
      { name: "Customized", description: "Bespoke eye-mapping tailored to cat-eye, doll-eye, or open-eye optical lift." }
    ],
    whatToExpect: [
      { step: 1, title: "Eye Shape Consultation & Mapping", description: "Discussing preferred length, curl (C, D, L), and density suitable for your natural lashes." },
      { step: 2, title: "Lash Cleansing & Hydrogel Eye Pads", description: "Degreasing the lash line and securing lower lashes with soothing cooling pads." },
      { step: 3, title: "Meticulous 1:1 Isolation & Bonding", description: "Gentle, relaxing application while you rest in our plush reclining loungers." },
      { step: 4, title: "Curing & Fan Drying", description: "Gentle misting to cure adhesive bonds without stinging or fume sensitivity." },
      { step: 5, title: "Spoolie Grooming & Care Kit", description: "Brushing and reviewing 48-hour moisture rules and daily spoolie techniques." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~90 - 150 mins depending on style]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Will lash extensions harm my natural eyelashes?", answer: "Not when applied by trained specialists who respect natural lash weight and safe isolation. Your natural eyelashes will shed naturally and regrow on their healthy cycle." },
      { question: "How long do lash extensions stay full?", answer: "Because natural lashes naturally shed, infill appointments every 2 to 3 weeks keep your set looking seamlessly plush." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Eyelash Extensions. Could you please share the available styles, pricing and appointment availability?",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    seoTitle: "Eyelash Extensions in Dimapur | Classic, Hybrid, Volume | Essence Studio",
    seoDescription: "Exquisite eyelash extensions on Church Road, Dimapur. Classic, Hybrid, Volume, and Anime lash styles at Essence Hair and Makeup Studio."
  },
  {
    id: "classic-lashes",
    name: "Classic Lashes",
    category: "lashes",
    categoryName: "Lashes",
    slug: "classic-lashes",
    shortDescription: "Timeless 1:1 lash placement for understated, clean definition that mimics the perfect coat of luxury mascara.",
    fullDescription: "Our Classic Lash set attaches a single silk extension to each healthy natural eyelash. This technique enhances your existing lash line by adding length, curl, and darkness while remaining entirely natural, lightweight, and breathable.",
    whoIsItFor: [
      "Clients trying lash extensions for the very first time.",
      "Those blessed with good natural lash density wanting length and curl.",
      "Workplaces and everyday settings requiring polished minimalism."
    ],
    whatToExpect: [
      { step: 1, title: "Curl & Length Selection", description: "Choosing natural J, B, or C curls calibrated to your natural lash strength." },
      { step: 2, title: "Lash Bath & Priming", description: "Thoroughly purifying the eye area for maximum bond retention." },
      { step: 3, title: "Single Strand Attachment", description: "Calibrated 1:1 placement with precision micro-tweezers." },
      { step: 4, title: "Sealant Application", description: "Applying a flexible bonding coat for weather and humidity resistance." },
      { step: 5, title: "Grooming & Spoolie Handover", description: "Gentle brushing and home maintenance review." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~90 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Can I wear mascara on classic lashes?", answer: "Extensions eliminate the need for mascara. We recommend avoiding mascara as oil-based cosmetics compromise the adhesive." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in booking a Classic Lashes appointment at Church Road, Dimapur.",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Classic Lash Extensions in Dimapur | Essence Studio",
    seoDescription: "Clean, natural 1:1 classic lash extensions at Essence Hair and Makeup Studio, Church Road, Dimapur. Lightweight and elegant."
  },
  {
    id: "hybrid-lashes",
    name: "Hybrid Lashes",
    category: "lashes",
    categoryName: "Lashes",
    slug: "hybrid-lashes",
    shortDescription: "A textured combination of classic singles and fluffy volume fans for a wispy, multidimensional finish.",
    fullDescription: "Hybrid lashes strike the ideal balance between natural definition and fluffy density. By artfully alternating individual classic extensions with lightweight hand-crafted volume fans, our artists create a wispy, textured appearance with flattering depth.",
    whoIsItFor: [
      "Clients desiring more volume than Classic, but less uniform fullness than Volume.",
      "Those with sporadic gaps in their natural lash line wanting soft camouflage.",
      "Anyone who loves textured, Kim-K inspired wispy lash aesthetics."
    ],
    whatToExpect: [
      { step: 1, title: "Custom Texture Mapping", description: "Designing an alternating pattern of lengths and fans." },
      { step: 2, title: "Lash Cleansing & Shielding", description: "Hygiene prep with soothing under-eye collagen pads." },
      { step: 3, title: "Mixed Technique Bonding", description: "Strategic integration of single lashes and 3D volume bouquets." },
      { step: 4, title: "Bond Misting", description: "Micro-mist polymerizes adhesive for reduced sensitivity." },
      { step: 5, title: "Fluff & Shape Reveal", description: "Brushing to reveal textured, dimensional fullness." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~105 - 120 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Are hybrid lashes heavy?", answer: "Not at all. We use ultra-fine diameter lashes for the volume fans so your natural lashes feel completely weightless." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Hybrid Lashes. Could you please share pricing and appointment options?",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Hybrid Lash Extensions in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Wispy, textured Hybrid lash extensions at Essence Studio, Church Road, Dimapur. The perfect blend of classic and volume."
  },
  {
    id: "volume-lashes",
    name: "Volume Lashes",
    category: "lashes",
    categoryName: "Lashes",
    slug: "volume-lashes",
    shortDescription: "Dense, dramatic, and velvety lash sets made with hand-crafted fans for captivating glamor.",
    fullDescription: "Volume lashes use ultra-fine extensions (0.03 to 0.07mm) fanned out into delicate 3D to 6D bouquets and applied to a single natural lash. This yields a lavish, dark lash line with plush density and a velvety softness that feels as light as a feather.",
    whoIsItFor: [
      "Clients who love bold, expressive, glamorous eye looks.",
      "Those with naturally sparse eyelashes who need optical density.",
      "Brides and performers wanting standout eyes that show vividly in photography."
    ],
    whatToExpect: [
      { step: 1, title: "Density Mapping", description: "Calibrating fan weight to the natural resilience of your lashes." },
      { step: 2, title: "Deep Purifying Lash Bath", description: "Eliminating oils for superior bond grip." },
      { step: 3, title: "Handmade Fan Creation & Placement", description: "Crafting lightweight fans on the spot for seamless contouring." },
      { step: 4, title: "Nano-Mist Polymerization", description: "Instantly locking bonds for water resistance." },
      { step: 5, title: "Velvet Fluffing", description: "Final spoolie detailing revealing full, dramatic volume." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~120 - 150 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "How are volume lashes different from cluster lashes?", answer: "Volume lashes are custom hand-fanned using microscopic, safe weights isolated onto a single natural lash, whereas cluster lashes are heavy, glued over multiple lashes, and risk damage." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Volume Lashes. Could you please share booking slots and pricing?",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Volume Lash Extensions in Dimapur | Essence Studio Church Road",
    seoDescription: "Plush, velvety Volume lash extensions at Essence Hair and Makeup Studio on Church Road, Dimapur. Fluffy fullness and dramatic eyes."
  },
  {
    id: "anime-lashes",
    name: "Anime / Manga Lashes",
    category: "lashes",
    categoryName: "Lashes",
    slug: "anime-lashes",
    shortDescription: "Trendy pointed spikes and staggered feathery fans inspired by modern manga doll-eye aesthetics.",
    fullDescription: "Inspired by modern East Asian beauty trends, Anime/Manga lashes feature distinct, prominent spiky peaks surrounded by shorter, wispy fans. This creates a captivating doll-eyed optical illusion that opens up the eyes with youthful, playful elegance.",
    whoIsItFor: [
      "Trend-conscious beauty enthusiasts who love distinct, statement eye aesthetics.",
      "Clients with monolid, almond, or hooded eyes wanting vertical enlargement.",
      "Anyone seeking an editorial, camera-ready signature style."
    ],
    whatToExpect: [
      { step: 1, title: "Spike Geometry Consultation", description: "Calculating spike height and distribution across the pupil." },
      { step: 2, title: "Preparation & Taping", description: "Securing lashes for precision layer isolation." },
      { step: 3, title: "Spike Anchor Attachment", description: "Bonding closed fans to form crisp, defined spikes." },
      { step: 4, title: "Feather Soft Infill", description: "Filling intermediate layers with ultra-light wispy extensions." },
      { step: 5, title: "Sculpted Finishing", description: "Setting with transparent sealant for structured doll spikes." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~120 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "How do I maintain the spikes between appointments?", answer: "We provide an aftercare guide and recommend applying a clear lash coating serum to keep the spikes sharply defined." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Anime / Manga Lashes. Could you please share details and availability?",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Anime & Manga Lash Extensions in Dimapur | Essence Studio",
    seoDescription: "Trendy Anime and Manga doll-eye eyelash extensions at Essence Hair and Makeup Studio, Church Road, Dimapur. Spiky peaks and open-eye lift."
  },
  {
    id: "custom-lashes",
    name: "Customized Lashes",
    category: "lashes",
    categoryName: "Lashes",
    slug: "custom-lashes",
    shortDescription: "Bespoke eye-mapping tailored exclusively to your facial bone structure, eye curvature, and personal aesthetic.",
    fullDescription: "No two pairs of eyes are identical. Our Customized Lash service is an artisanal experience where your lash master assesses eyelid depth, brow bone prominence, and eye angle to blend curls (C, CC, D, L, M) and lengths into an exclusive contour designed specifically for you.",
    whoIsItFor: [
      "Discerning clients who want an individualized, haute-couture lash map.",
      "Unique eye shapes (deep-set, asymmetric, downturned) needing optical balancing.",
      "Brides desiring bespoke harmony with their wedding veil and makeup."
    ],
    whatToExpect: [
      { step: 1, title: "Artistic Facial & Eye Analysis", description: "Mapping brow height, tilt, and iris color for ideal optical harmony." },
      { step: 2, title: "Custom Lash Recipe Formulation", description: "Combining multi-curl and multi-thickness fibres." },
      { step: 3, title: "Layer-by-Layer Sculpting", description: "Applying extensions with varied angles for fluid transition." },
      { step: 4, title: "Bespoke Curing Ritual", description: "Anti-humidity sealing for extended retention." },
      { step: 5, title: "Mirror Reveal & Maintenance Kit", description: "Viewing your bespoke set with luxury aftercare accessories." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~120 - 150 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Can I combine colored or glitter accents in a custom set?", answer: "Yes! Custom sets allow for subtle brown ombré tones, coloured outer corners, or bespoke lash gems upon request." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'd like to book a Customized Lash appointment tailored to my eye shape. Please share availability.",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Custom Eyelash Extensions in Dimapur | Essence Studio",
    seoDescription: "Bespoke eye-mapped lash extensions at Essence Hair and Makeup Studio, Church Road, Dimapur. Precision styling for your unique eye shape."
  },
  {
    id: "lash-lift",
    name: "Eyelash Lifting / Perming",
    category: "lashes",
    categoryName: "Lashes",
    slug: "lash-lift",
    shortDescription: "Semi-permanent upward curl and tint for your natural lashes, creating an awake, eye-opening look with zero maintenance.",
    fullDescription: "The ultimate low-maintenance beauty enhancement. An Eyelash Lift gently perms your natural lashes from the root using specialized curved silicone shields and nourishing keratin solutions. It creates the optical illusion of longer, thicker lashes with a lasting upward sweep.",
    whoIsItFor: [
      "Clients blessed with straight or downward-pointing natural lashes.",
      "Those wanting an effortless, zero-maintenance morning routine without extensions.",
      "Gym enthusiasts, swimmers, and active travelers."
    ],
    whatToExpect: [
      { step: 1, title: "Shield Sizing & Cleanse", description: "Selecting the ideal silicone rod curve (S, M, L) according to natural lash length." },
      { step: 2, title: "Lash Adhesion & Isolation", description: "Aligning lashes straight upward onto the shield with water-soluble adhesive." },
      { step: 3, title: "Lifting Solution Application", description: "Softening natural disulfide bonds to take on the curved shield shape." },
      { step: 4, title: "Setting & Deep Tinting", description: "Neutralizing the curve and applying a rich black gloss tint." },
      { step: 5, title: "Keratin Nourishing Seal", description: "Infusing lashes with conditioning peptides to strengthen and gloss." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~60 mins]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "How long does an eyelash lift last?", answer: "A lash lift typically lasts 6 to 8 weeks, mirroring your natural eyelash growth and shedding cycle." },
      { question: "Can I wear mascara after a lash lift?", answer: "Yes! After the first 24 hours of keeping them dry, you can wear mascara, though most clients find they no longer need it." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in the Eyelash Lifting / Perming service. Could you please share pricing and available slots?",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Eyelash Lift & Tint in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Natural eyelash lifting and perming at Essence Hair and Makeup Studio on Church Road, Dimapur. Semi-permanent curl, zero maintenance."
  },

  // ==========================================
  // BROWS
  // ==========================================
  {
    id: "microblading",
    name: "Microblading — Hair Strokes",
    category: "brows",
    categoryName: "Brows",
    slug: "microblading",
    shortDescription: "Ultra-precise semi-permanent hair-like strokes tattooed into the superficial dermis for hyper-realistic brow fullness.",
    fullDescription: "Microblading is an artisanal semi-permanent brow enhancement technique where a sterile micro-blade deposits cosmetic mineral pigments into the upper layer of the dermis, mimicking individual brow hairs. Designed for natural symmetry and realistic density, it elevates sparse, over-plucked, or uneven brows.",
    suitabilityDisclaimer: "Important Suitability Notice: Microblading involves superficial skin penetration. A thorough pre-procedure consultation and patch test are conducted. Not suitable during pregnancy, active skin conditions on the brow, or certain medical situations. Professional cosmetic procedure.",
    whoIsItFor: [
      "Clients with sparse, patchy, or over-plucked eyebrows wanting natural fullness.",
      "Anyone wanting to wake up with symmetrical, beautifully framed brows every day.",
      "Individuals with normal to dry skin types seeking realistic hair-stroke realism."
    ],
    whatToExpect: [
      { step: 1, title: "Facial Symmetry Brow Mapping", description: "Using golden ratio calipers to measure and sketch your ideal brow architecture." },
      { step: 2, title: "Color Matching & Approval", description: "Custom blending pigments to complement your hair and skin undertones." },
      { step: 3, title: "Topical Comfort Numbing", description: "Applying a high-grade topical aesthetic cream for a relaxed, comfortable session." },
      { step: 4, title: "Artisanal Hair-Stroke Inscription", description: "Etching fine, crisp micro-strokes following your natural hair growth direction." },
      { step: 5, title: "Pigment Mask & Aftercare Kit", description: "Allowing pigment to absorb, followed by healing ointment and aftercare instructions." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~2 - 2.5 hours]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "Does microblading hurt?", answer: "A topical numbing cream is applied prior to and during the procedure, making the sensation feel like light scratching." },
      { question: "How long does microblading last?", answer: "Results typically last 12 to 18 months depending on skin type, lifestyle, and adherence to aftercare, after which an annual color boost is recommended." },
      { question: "Is a touch-up session necessary?", answer: "Yes, a perfecting touch-up is typically scheduled 4 to 6 weeks after the initial session to reinforce color and stroke retention." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Microblading (Hair Strokes). Could you please share consultation details, suitability guidance and pricing?",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    seoTitle: "Microblading Eyebrows in Dimapur | Essence Hair & Makeup Studio",
    seoDescription: "Hyper-realistic microblading hair-stroke brows at Essence Hair and Makeup Studio, Church Road, Dimapur. Symmetrical, natural definition."
  },
  {
    id: "microshading",
    name: "Microshading",
    category: "brows",
    categoryName: "Brows",
    slug: "microshading",
    shortDescription: "Soft, ombré powder effect semi-permanent brow shading for a velvety filled-in look suitable for all skin types.",
    fullDescription: "Microshading (often called powder or ombré brows) uses a specialized cosmetic stippling technique to deposit pin-point dots of pigment throughout the brow. It delivers a soft, gradient powdered finish—lighter at the bulb and gently saturated toward the tail—creating the look of expertly applied brow powder.",
    suitabilityDisclaimer: "Important Suitability Notice: Microshading involves superficial skin pigment deposit. A comprehensive consultation and allergy test are performed. Disclaimers regarding health history apply.",
    whoIsItFor: [
      "Clients with oily, combination, or sensitive skin where microblading strokes may blur.",
      "Anyone who prefers the soft makeup-ready 'powdered' eyebrow aesthetic.",
      "Brows needing overall density without distinct individual hair strokes."
    ],
    whatToExpect: [
      { step: 1, title: "Ombré Gradient Mapping", description: "Precision design mapping out the gradient density from head to arch." },
      { step: 2, title: "Topical Comfort Preparation", description: "Ensuring maximum relaxation and comfort throughout the treatment." },
      { step: 3, title: "Precision Stipple Shading", description: "Applying micro-dots of pigment with calibrated depth control." },
      { step: 4, title: "Symmetry Inspection & Layering", description: "Checking opacity under studio lighting for seamless transition." },
      { step: 5, title: "Soothing Seal & Healing Protocol", description: "Reviewing the 10-day dry-healing guidelines and providing aftercare balm." }
    ],
    durationPlaceholder: "Typical appointment: [Duration advised upon consultation / ~2 - 2.5 hours]",
    pricePlaceholder: "Starting from ₹[PRICE] / Price available on consultation",
    faqs: [
      { question: "How does Microshading differ from Microblading?", answer: "Microblading creates individual simulated hair strokes ideal for dry/normal skin, whereas Microshading creates a soft, misty powdered effect that lasts exceptionally well across all skin types, including oily skin." }
    ],
    prefilledWhatsAppMessage: "Hi Essence Hair and Makeup Studio, I'm interested in Microshading (Powder/Ombré Brows). Could you please share details, pricing and consultation availability?",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    seoTitle: "Microshading Ombré Brows in Dimapur | Essence Studio",
    seoDescription: "Velvety ombré powder microshading at Essence Hair and Makeup Studio, Church Road, Dimapur. Long-lasting, defined brow beauty."
  }
];

export const serviceCategories = [
  {
    id: "hair" as ServiceCategory,
    name: "Hair",
    subheadline: "Colour • Extensions • Treatments • Smoothing • Styling",
    description: "From transformative balayage and restorative Hair Botox to Nanoplastia and perming, our hair studio is dedicated to strand health, modern techniques, and radiant finishes.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop",
    servicesCount: 8,
  },
  {
    id: "nails" as ServiceCategory,
    name: "Nails",
    subheadline: "Extensions • Gel • Acrylic • Art • Manicures • Pedicures",
    description: "Artisanal nail architectures, sculpted acrylics, feather-light gels, and restorative hand-and-foot spa rituals designed with meticulous hygiene and chic finishes.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
    servicesCount: 6,
  },
  {
    id: "skin" as ServiceCategory,
    name: "Skin",
    subheadline: "Hydra Facial • Gold Facial • Brightening • Anti-Aging • Care",
    description: "Gentle, non-medical aesthetic skincare rituals designed to cleanse, illuminate, and deeply hydrate your complexion for healthy, radiant confidence.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    servicesCount: 6,
  },
  {
    id: "lashes" as ServiceCategory,
    name: "Lashes",
    subheadline: "Classic • Hybrid • Volume • Anime • Customized • Lash Lift",
    description: "Expressive, weightless lash artistry isolated onto individual lashes. Bespoke curls, lengths, and textures curated to frame and elevate your eye shape.",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=1200&auto=format&fit=crop",
    servicesCount: 7,
  },
  {
    id: "brows" as ServiceCategory,
    name: "Brows",
    subheadline: "Microblading Hair Strokes • Microshading Ombré Definition",
    description: "Artisanal semi-permanent brow enhancements sculpted using precise mapping, natural pigments, and gentle techniques for effortless daily symmetry.",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop",
    servicesCount: 2,
  },
];
