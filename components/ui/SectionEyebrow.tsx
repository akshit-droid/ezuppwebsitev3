import { cn } from "@/lib/cn";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "on-dark";
}

export function SectionEyebrow({ children, className, tone = "default" }: SectionEyebrowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 text-[12px] font-extrabold uppercase tracking-[.12em]",
        tone === "default" ? "text-brand-blue" : "text-white/80",
        className,
      )}
    >
      <span className="block h-[2px] w-7 rounded bg-gradient-to-r from-brand-blue to-brand-teal" />
      {children}
    </div>
  );
}
