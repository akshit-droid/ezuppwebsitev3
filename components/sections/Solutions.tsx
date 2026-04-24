import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { solutions, type Solution } from "@/data/solutions";
import { cn } from "@/lib/cn";

function SolutionCard({ s, index }: { s: Solution; index: number }) {
  const delay = `d${(index % 3) + 1}` as const;
  const accentColor = s.accent === "blue" ? "#2B4EFF" : "#2ED8A0";

  const cardInner = (
    <>
      {/* accent bar */}
      <div
        aria-hidden
        className="absolute left-6 top-0 h-[3px] w-10 rounded-b-full opacity-0 transition group-hover:opacity-100"
        style={{ background: accentColor }}
      />

      <div className="flex h-full flex-col gap-4">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div
            className="absolute inset-0 rounded-2xl opacity-10 transition group-hover:opacity-20"
            style={{ background: accentColor }}
          />
          <s.Icon size={32} />
        </div>

        <div className="text-[11px] font-extrabold uppercase tracking-[.08em] text-brand-blue/70">
          {s.tag}
        </div>

        <h3 className="text-[18px] font-extrabold tracking-[-0.01em] text-brand-navy">
          {s.name}
        </h3>

        <p className="text-[14px] leading-[1.7] text-brand-gray">{s.desc}</p>

        <div className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[12px] font-bold text-brand-blue opacity-70 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
          {s.external ? "Visit Skytech" : "Learn more"}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            {s.external ? (
              <path
                d="M4 2h6v6M10 2L4 8M4 10H2V4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M2 6h7m0 0L6 3m3 3L6 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </div>
      </div>
    </>
  );

  const classes = cn(
    "group relative block rounded-2xl border border-transparent bg-white/50 p-6 transition-all duration-300",
    "hover:-translate-y-1 hover:border-black/5 hover:bg-white hover:shadow-card-hover",
    "reveal",
    delay,
  );

  if (s.external) {
    return (
      <a href={s.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {cardInner}
      </a>
    );
  }
  return (
    <Link href={s.href} className={classes}>
      {cardInner}
    </Link>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-white py-16 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern-light" />

      <Container className="relative px-6 md:px-16">
        <div className="reveal max-w-3xl">
          <SectionEyebrow>Solutions</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-brand-navy md:mt-5">
            Nine modules. One platform.
            <br />
            <span className="font-medium text-brand-gray">Zero silos.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-16 md:gap-6 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <SolutionCard key={s.id} s={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
