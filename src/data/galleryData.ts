/**
 * Essence Hair and Makeup Studio - Visual Portfolio & Before/After Data
 * 
 * Clean structured data system allowing easy replacement with client's actual photography.
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: "hair" | "nails" | "skin" | "lashes" | "brows" | "makeup";
  categoryLabel: string;
  image: string;
  aspectRatio: "portrait" | "square" | "landscape";
  caption: string;
  serviceSlug?: string;
}

export interface BeforeAfterItem {
  id: string;
  serviceTitle: string;
  category: "hair" | "nails" | "skin" | "lashes" | "brows";
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  description: string;
  serviceSlug: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Dimensional Soft Balayage & Gloss",
    category: "hair",
    categoryLabel: "Hair",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "portrait",
    caption: "Sun-kissed lived-in dimensional balayage with high-shine toner finish.",
    serviceSlug: "hair-colour",
  },
  {
    id: "gal-2",
    title: "Fluffy Volume Lash Architecture",
    category: "lashes",
    categoryLabel: "Lashes",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "square",
    caption: "Bespoke volume bouquets hand-fanned for velvety fullness and optical eye lift.",
    serviceSlug: "volume-lashes",
  },
  {
    id: "gal-3",
    title: "Editorial Chrome & Gel Nail Art",
    category: "nails",
    categoryLabel: "Nails",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "portrait",
    caption: "Modern glazed chrome over sculpted almond gel extensions.",
    serviceSlug: "nail-art",
  },
  {
    id: "gal-4",
    title: "Glass Skin Post-Hydra Facial",
    category: "skin",
    categoryLabel: "Skin",
    image: "https://images.unsplash.com/photo-1512290900672-1f50ff5231b5?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "square",
    caption: "Instant plumpness, zero congestion, and dewy hydration.",
    serviceSlug: "hydra-facial",
  },
  {
    id: "gal-5",
    title: "Hyper-Realistic Microblading Strokes",
    category: "brows",
    categoryLabel: "Brows",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "portrait",
    caption: "Feathered hair-like strokes tailored to natural brow arch geometry.",
    serviceSlug: "microblading",
  },
  {
    id: "gal-6",
    title: "Silk Hair Smoothing & Realignment",
    category: "hair",
    categoryLabel: "Hair",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "portrait",
    caption: "Frizz-free silk press alignment with reflective glass sheen.",
    serviceSlug: "hair-smoothing",
  },
  {
    id: "gal-7",
    title: "Sculpted Nude Minimalist Acrylics",
    category: "nails",
    categoryLabel: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "landscape",
    caption: "Clean square-tapered nude acrylic extensions with high gloss finish.",
    serviceSlug: "acrylic-extensions",
  },
  {
    id: "gal-8",
    title: "Bridal Signature Glamour Finish",
    category: "makeup",
    categoryLabel: "Makeup",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "portrait",
    caption: "Flawless airbrushed base, refined eyes, and soft romantic styling.",
    serviceSlug: "hair-colour",
  },
  {
    id: "gal-9",
    title: "Manga & Anime Doll Spikes",
    category: "lashes",
    categoryLabel: "Lashes",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "portrait",
    caption: "Distinct textured peaks opening up the eye contour.",
    serviceSlug: "anime-lashes",
  },
];

export const beforeAfterTransformations: BeforeAfterItem[] = [
  {
    id: "trans-hair-botox",
    serviceTitle: "Hair Botox Revitalization",
    category: "hair",
    // Clean curated aesthetic comparison imagery with clear placeholder indication
    beforeImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    beforeLabel: "Before (Frizz & Porosity)",
    afterLabel: "After Essence Restorative Care",
    description: "Deep nutrient and protein replenishment eliminates surface friction, taming frizz while maintaining natural hair bounce.",
    serviceSlug: "hair-botox",
  },
  {
    id: "trans-lashes-hybrid",
    serviceTitle: "Hybrid Lash Architecture",
    category: "lashes",
    beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=1200&auto=format&fit=crop",
    beforeLabel: "Natural Straight Lashes",
    afterLabel: "Wispy Full Hybrid Set",
    description: "Artful combination of single silk strands and featherweight 3D volume fans for flattering eye elongation.",
    serviceSlug: "hybrid-lashes",
  },
  {
    id: "trans-microblading",
    serviceTitle: "Microblading Hair-Stroke Brows",
    category: "brows",
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop",
    beforeLabel: "Sparse Natural Brow",
    afterLabel: "Sculpted Hair-Stroke Definition",
    description: "Golden ratio facial mapping and microscopic mineral pigment strokes to create hyper-realistic fullness and symmetry.",
    serviceSlug: "microblading",
  },
];
