import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}) => {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-px bg-champagne-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600">
            {eyebrow}
          </span>
          {align === "center" && <span className="w-6 h-px bg-champagne-500" />}
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight ${
          dark ? "text-studio-ivory" : "text-studio-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            dark ? "text-champagne-100/80" : "text-studio-taupe"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
