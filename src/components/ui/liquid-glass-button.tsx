import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface LiquidGlassButtonProps extends HTMLMotionProps<"button"> {
  variant?: "champagne" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  variant = "champagne",
  size = "md",
  children,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-4 py-2 text-[11px] gap-2",
    md: "px-7 py-3.5 text-xs gap-2.5",
    lg: "px-8 py-4 text-sm gap-3",
  }[size];

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className={cn(
        "relative group inline-flex items-center justify-center font-semibold uppercase tracking-widest rounded-full cursor-pointer overflow-hidden select-none transition-all duration-300",
        sizeStyles,
        // Base glass refraction & backdrop blur
        "backdrop-blur-xl",
        variant === "champagne" && [
          "text-studio-ivory shadow-[0_-2px_22px_rgba(212,175,55,0.32),0_0_36px_rgba(197,168,128,0.22),inset_0_1px_0_0_rgba(255,251,242,0.65)]",
          "hover:shadow-[0_-2px_28px_rgba(212,175,55,0.48),0_0_48px_rgba(197,168,128,0.32),inset_0_1px_0_0_rgba(255,255,255,0.85)]",
        ],
        variant === "dark" && [
          "text-champagne-200 shadow-[0_4px_24px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.2)]",
          "hover:shadow-[0_4px_32px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.35)]",
        ],
        variant === "outline" && [
          "text-studio-ivory border border-white/20 hover:border-champagne-400/50 hover:bg-white/10 shadow-sm",
        ],
        className
      )}
      style={{
        background:
          variant === "champagne"
            ? `
                linear-gradient(180deg, rgba(30, 24, 18, 0.45) 0%, rgba(20, 16, 12, 0.72) 78%, rgba(12, 9, 7, 0.88) 100%),
                linear-gradient(90deg, rgba(230, 195, 140, 0.35) 0%, rgba(212, 175, 55, 0.22) 28%, rgba(200, 160, 210, 0.12) 65%, rgba(180, 210, 240, 0.18) 100%),
                linear-gradient(90deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.18) 14%, rgba(255, 255, 255, 0.08) 32%, rgba(255, 255, 255, 0.04) 70%, rgba(255, 255, 255, 0.08) 100%)
              `
            : variant === "dark"
            ? `
                linear-gradient(180deg, rgba(25, 20, 16, 0.75) 0%, rgba(14, 10, 8, 0.92) 100%),
                linear-gradient(90deg, rgba(212, 175, 55, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%)
              `
            : undefined,
      }}
      {...props}
    >
      {/* Masked Specular Hairline Perimeter Border */}
      {variant !== "outline" && (
        <span
          className="absolute inset-0 rounded-full pointer-events-none p-[1.5px]"
          style={{
            background: `
              linear-gradient(180deg, rgba(255, 252, 246, 0.95) 0%, rgba(255, 252, 246, 0.25) 45%, rgba(255, 252, 246, 0) 80%),
              linear-gradient(90deg, rgba(255, 230, 185, 0.95) 0%, rgba(240, 215, 170, 0.75) 18%, rgba(255, 255, 255, 0.15) 45%, rgba(210, 190, 230, 0.6) 82%, rgba(190, 220, 245, 0.92) 100%)
            `,
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            maskComposite: "exclude",
          }}
          aria-hidden="true"
        />
      )}

      {/* Internal Shimmer / Glow beam on hover */}
      <span
        className="absolute -inset-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"
        aria-hidden="true"
      />

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
