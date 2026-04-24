import { Container } from "@/components/ui/Container";
import { stats } from "@/data/stats";
import { cn } from "@/lib/cn";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";

const accentClass: Record<string, string> = {
  blue: "text-brand-blue",
  teal: "text-brand-teal",
  white: "text-white",
};

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 md:py-28">
      {/* grid backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-pattern" style={{ backgroundSize: "80px 80px" }} />
      {/* gradient glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-[300px] w-[300px] rounded-full bg-brand-blue/30 blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[260px] w-[260px] rounded-full bg-brand-teal/20 blur-[90px]" />

      {/* mascot peeking in */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 top-4 hidden w-[120px] opacity-80 md:block lg:w-[150px]"
      >
        <EzuppMascot pose="celebrate" />
      </div>

      <Container className="relative px-6 md:px-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "reveal relative py-3 md:py-10",
                i !== stats.length - 1 && "md:border-r md:border-white/5",
                i !== 0 && "md:pl-10",
                i !== stats.length - 1 && "md:pr-10",
              )}
            >
              <div
                className={cn(
                  "text-[42px] font-extrabold leading-none tracking-[-0.04em] md:text-[56px]",
                  accentClass[s.accent],
                )}
              >
                {s.value}
              </div>
              <div className="mt-2 whitespace-pre-line text-[13px] font-medium leading-[1.4] text-white/40 md:mt-2.5 md:text-[14px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
