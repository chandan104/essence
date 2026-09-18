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
  dark = true,
  className = "",
}) => {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3.5">
          <span className="w-8 h-px bg-gradient-to-r from-transparent to-champagne-400" />
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-champagne-400 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
            {eyebrow}
          </span>
          {align === "center" && <span className="w-8 h-px bg-gradient-to-l from-transparent to-champagne-400" />}
        </div>
      )}
      <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300/85 font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};
