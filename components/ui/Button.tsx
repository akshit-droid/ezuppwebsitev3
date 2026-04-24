"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-dark hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(43,78,255,.5)]",
  outline:
    "bg-transparent border-[1.5px] border-black/10 text-brand-navy hover:border-brand-blue hover:text-brand-blue",
  ghost:
    "bg-transparent text-brand-navy/70 hover:text-brand-blue",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-[22px] py-[10px] text-[14px]",
  lg: "px-[30px] py-[13px] text-[15px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-bold",
          "transition-all duration-200",
          variants[variant],
          sizes[size],
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
