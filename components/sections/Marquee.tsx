import { integrations } from "@/data/integrations";
import { cn } from "@/lib/cn";

/**
 * Infinite marquee strip showing integration partner names. Doubled content
 * is used so the `translateX(-50%)` keyframe seamlessly loops.
 */
export function Marquee() {
  const items = [...integrations, ...integrations];
  return (
    <section className="relative overflow-hidden border-y border-black/5 py-8">
      <div className="marquee-mask">
        <div className="flex w-max animate-marquee gap-0 [animation-play-state:running] hover:[animation-play-state:paused]">
          {items.map((it, i) => (
            <div
              key={`${it.name}-${i}`}
              className={cn(
                "flex items-center gap-2.5 whitespace-nowrap px-8",
                "text-[14px] font-bold text-brand-navy/40 transition hover:text-brand-navy/80",
              )}
            >
              <span
                className={cn(
                  "inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full",
                  i % 3 === 1 ? "bg-brand-teal" : "bg-brand-blue",
                )}
              />
              {it.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
