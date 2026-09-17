import React from "react";
import { Link } from "react-router-dom";

export type ButtonVariant = "primary" | "champagne" | "outline" | "darkOutline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  to?: never;
  href?: never;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  to: string;
  href?: never;
  onClick?: () => void;
}

interface ButtonAsExternalLinkProps extends ButtonBaseProps {
  href: string;
  to?: never;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps | ButtonAsExternalLinkProps;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...rest
}) => {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-medium tracking-luxury",
    md: "px-6 py-3 text-xs sm:text-sm font-medium tracking-luxury",
    lg: "px-8 py-4 text-sm font-semibold tracking-widest",
  }[size];

  const variantStyles = {
    primary:
      "bg-studio-espresso text-studio-ivory hover:bg-champagne-600 hover:text-studio-espresso border border-studio-espresso hover:border-champagne-600 shadow-sm",
    champagne:
      "bg-champagne-500 text-studio-espresso hover:bg-champagne-400 border border-champagne-500 hover:border-champagne-400 font-semibold shadow-sm",
    outline:
      "bg-transparent text-studio-espresso border border-studio-charcoal/30 hover:border-studio-espresso hover:bg-studio-espresso hover:text-studio-ivory",
    darkOutline:
      "bg-transparent text-studio-ivory border border-studio-ivory/40 hover:border-studio-ivory hover:bg-studio-ivory hover:text-studio-espresso",
    ghost:
      "bg-transparent text-studio-espresso hover:text-champagne-600 underline-offset-4 hover:underline p-0",
  }[variant];

  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 transition-all duration-300 uppercase select-none rounded-none cursor-pointer text-center";

  const fullClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-block transition-transform duration-300">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if ("to" in rest && rest.to) {
    return (
      <Link to={rest.to} className={`group ${fullClasses}`} onClick={rest.onClick}>
        {content}
      </Link>
    );
  }

  if ("href" in rest && rest.href) {
    return (
      <a
        href={rest.href}
        target={rest.target || "_blank"}
        rel={rest.rel || "noopener noreferrer"}
        className={`group ${fullClasses}`}
        onClick={rest.onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`group ${fullClasses}`}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};
