"use client";

import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, SparkleIcon } from "@/components/icons/SolutionIcons";
import HeroSceneDynamic from "@/components/three/HeroSceneDynamic";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}

const heroStats: { value: string; label: string }[] = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "9", label: "Native Modules" },
  { value: "99.9%", label: "Uptime SLA" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pb-16 pt-[108px] md:pb-28 md:pt-[148px]"
    >
      {/* background layers */}
      <div className="noise" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[480px] w-[480px] rounded-full bg-brand-blue/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 left-[28%] h-[320px] w-[320px] rounded-full bg-brand-teal/15 blur-[70px]" />

      <Container className="relative z-10 grid items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-16">
        {/* LEFT */}
        <div className="relative">
          <div className="reveal">
            <SectionEyebrow>
              One-Stop Enterprise Platform · By Electrovese Solutions
            </SectionEyebrow>
          </div>

          <h1 className="reveal d1 mt-6 text-[clamp(40px,5.5vw,76px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-brand-navy">
            One Platform.
            <br />
            <span className="grad-text">Every Business</span>
            <br />
            Need.
          </h1>

          <p className="reveal d2 mt-6 max-w-[480px] text-[16px] leading-[1.72] text-brand-gray md:text-[18px]">
            Ezupp unifies ERP, CRM, On-Demand operations, and WhatsApp
            Automation — a single intelligent layer for enterprise teams that
            refuse to operate in silos.
          </p>

          <div className="reveal d3 mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={() => scrollToId("contact")}>
              Book a Demo
              <ArrowRightIcon />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToId("solutions")}
            >
              Explore Solutions
            </Button>
            <div className="ml-1 flex w-full items-center gap-2 text-[13px] font-semibold text-brand-navy/55 sm:ml-2 sm:w-auto">
              <SparkleIcon className="text-brand-teal" />
              No credit card. Live in 2 weeks.
            </div>
          </div>

          <div className="reveal d4 mt-10 flex flex-wrap gap-8 md:mt-14 md:gap-12">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="text-[28px] font-extrabold tracking-[-0.03em] text-brand-navy md:text-[32px]">
                  {s.value.replace(/[0-9.%+]/g, "")
                    ? (
                      <>
                        {s.value.replace(/[+%]/g, "")}
                        <span className="text-brand-blue">
                          {s.value.match(/[+%]/)?.[0] ?? ""}
                        </span>
                      </>
                    ) : (
                      s.value
                    )}
                </div>
                <div className="mt-0.5 text-[12px] font-medium text-brand-gray">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — 3D globe scene */}
        <div className="reveal d2 relative h-[360px] w-full sm:h-[440px] md:h-[540px]">
          {/* glowing platform disc behind canvas */}
          <div className="pointer-events-none absolute inset-x-0 bottom-4 mx-auto h-32 w-[70%] rounded-full bg-gradient-brand opacity-10 blur-3xl" />

          <div className="absolute inset-0">
            <HeroSceneDynamic />
          </div>

          {/* small live-stats chip bottom-right, out of the globe's way */}
          <div className="pointer-events-none absolute bottom-3 right-3 hidden items-center gap-2.5 rounded-full bg-white/85 px-3 py-2 shadow-card backdrop-blur md:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-brand-teal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
            </span>
            <span className="text-[11px] font-extrabold text-brand-navy">
              2.4M&nbsp;txns / day
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
