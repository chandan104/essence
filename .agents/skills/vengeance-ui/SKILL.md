---
name: vengeance-ui
description: >-
  Use this skill whenever designing, building, or styling modern, animated web applications,
  landing pages, or components using VengeanceUI, Skiper UI (@skiper-ui/skiper40), Framer Motion,
  and Tailwind CSS. Provides production patterns for scroll reveals, micro-interactions, animated
  borders, bento grids, and interactive link components.
---

# VengeanceUI & Skiper UI Component Skill

A comprehensive guide and reference library for building high-converting, modern, animated web interfaces with **VengeanceUI**, **Skiper UI**, **Framer Motion**, and **Tailwind CSS**.

---

## 1. Core Stack Requirements

When starting a new project or adding motion to an existing one:

```bash
npm install framer-motion clsx tailwind-merge lucide-react
```

For shadcn integration (optional, component-based):
```bash
npx shadcn@latest init
npx shadcn add @skiper-ui/skiper40
```

---

## 2. Framer Motion Best Practices & Presets

### A. Viewport Scroll Reveal (`whileInView`)
Use for cards, grids, headings, and value propositions so elements enter smoothly as the user scrolls:

```tsx
import { motion } from "framer-motion";

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Luxury cubic bezier
      delay: custom * 0.1,
    },
  }),
};

// Usage in component:
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-60px" }}
  variants={fadeInUp}
  custom={index}
>
  {/* Content */}
</motion.div>
```

### B. Spring Hover & Click Micro-Interactions
Add tactile response to interactive buttons and cards:

```tsx
<motion.button
  whileHover={{ scale: 1.03, y: -2 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 400, damping: 20 }}
  className="..."
>
  Action
</motion.button>
```

### C. Staggered Container
For hero sections, lists, and grids:

```tsx
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};
```

---

## 3. High-Impact VengeanceUI Components

### A. Border Beam (`border-beam.tsx`)
Adds a travelling beam of light along an element's border. Perfect for hero badges, high-converting pricing cards, and featured treatments:

```tsx
import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#E6CA9E",
  colorTo = "#8B734B",
  delay = 0,
}) => {
  return (
    <div
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--anchor": "90deg",
          "--border-width": `${borderWidth}px`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)]",
        "after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1deg)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )}
    />
  );
};
```

### B. Skiper40 Animated Links (`@skiper-ui/skiper40`)
Provides 5 animated link styles:
- `Link000`: Minimal horizontal expanding underline from right to left on hover.
- `Link001`: Expanding underline with diagonal emerging arrow icon.
- `Link002`: Center-origin expanding underline with floating arrow.
- `Link003`: Center-origin expand without overflow shift.
- `Link004`: Inverted high-contrast pill backdrop fill on hover with difference blend.
- `Link005`: Smooth full-height mask expansion.

Usage:
```tsx
import { Link000, Link001, Link004 } from "@/components/ui/skiper-ui/skiper40";

// Navigation link
<Link000 href="/services" className="text-sm font-semibold tracking-wide">
  Services
</Link000>

// External / Action link with emerging arrow
<Link001 href="https://wa.me/..." className="text-sm text-champagne-400">
  WhatsApp Inquiry
</Link001>
```

---

## 4. Design Guidelines when applying to Luxury / Premium Websites

1. **Avoid Over-Animation**:
   - Keep durations between 0.4s and 0.8s.
   - Use subtle translations (`y: 16px` to `y: 24px`, never large jumps like `100px`).
   - Use custom luxury ease: `ease: [0.22, 1, 0.36, 1]` or smooth spring (`stiffness: 300, damping: 25`).
2. **Reduced Motion Support**:
   - Always respect `prefers-reduced-motion`:
     ```tsx
     import { useReducedMotion } from "framer-motion";
     const shouldReduceMotion = useReducedMotion();
     ```
3. **Contrast and Typography**:
   - Ensure text over animations remains legible (contrast > 4.5:1).
