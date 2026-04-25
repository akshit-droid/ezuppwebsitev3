"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, SparkleIcon } from "@/components/icons/SolutionIcons";
import HeroSceneDynamic from "@/components/three/HeroSceneDynamic";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}

const heroStats: { value: string; label: string }[] = [
  { value: "100+", label: "Enterprise Clients" },
  { value: "9", label: "Native Modules" },
  { value: "99.9%", label: "Uptime SLA" },
];

/** Tiny live-activity chips — slow rotation so it feels alive, not anxious. */
const pulseChips = [
  { text: "New distributor onboarded · Pune", dot: "#2ED8A0" },
  { text: "WhatsApp campaign · 14k sent", dot: "#2B4EFF" },
  { text: "Warranty activated · Order #48219", dot: "#2ED8A0" },
  { text: "Fleet rerouted · 12 min saved", dot: "#2B4EFF" },
  { text: "NPS feedback · 9/10", dot: "#2ED8A0" },
];

export function Hero() {
  const [chipIdx, setChipIdx] = useState(0);

  useEffect(() => {
    const c = setInterval(
      () => setChipIdx((i) => (i + 1) % pulseChips.length),
      5200,
    );
    return () => clearInterval(c);
  }, []);

  const chip = pulseChips[chipIdx];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pb-14 pt-[92px] md:pb-28 md:pt-[148px]"
    >
      {/* background layers */}
      <div className="noise" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand-blue/10 blur-[80px] md:h-[520px] md:w-[520px]" />
      <div className="pointer-events-none absolute bottom-0 left-[18%] h-[300px] w-[300px] rounded-full bg-brand-teal/15 blur-[70px] md:h-[360px] md:w-[360px]" />

      {/* ----------------------------------------------------------------- *
       * DESKTOP 3D — bleeds generously across the right but stays inside the
       * viewport so orbit chips never clip off-screen. (Mobile 3D is
       * rendered inline inside the copy column below.)
       * ----------------------------------------------------------------- */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[60%] md:block lg:w-[58%] xl:w-[56%]"
        aria-hidden
      >
        <div className="relative h-full w-full">
          {/* inner wrapper — gives the canvas extra room beyond the visible area
              so orbiting chips wrap smoothly instead of being cropped at the edge */}
          <div className="absolute -right-[4%] -top-[2%] h-[104%] w-[108%]">
            <HeroSceneDynamic />
          </div>
          {/* soft fade on the left so the copy column stays legible */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/60 to-transparent" />
          {/* gentle right-edge feather — catches any chip that briefly swings past */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/85 to-transparent" />
        </div>
      </div>

      <Container className="relative z-10 grid items-center gap-6 px-5 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-16">
        {/* LEFT — copy column. On mobile, eyebrow + headline render FIRST so
            the page reads like a normal hero, the 3D block sits between the
            headline and the description, then CTAs + stats below. */}
        <div className="relative">
          <div className="reveal">
            <SectionEyebrow>
              One-Stop Enterprise Platform · By Electrovese Solutions
            </SectionEyebrow>
          </div>

          <h1 className="reveal d1 mt-4 text-[clamp(34px,8.6vw,76px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-brand-navy md:mt-6">
            One Platform.
            <br />
            <span className="grad-text">Every Business</span>
            <br />
            Need.
          </h1>

          {/* ----------------------------------------------------------- *
           * MOBILE 3D — sits between the headline and the description so
           * the page reads naturally on mobile. Tightened to 290px so the
           * page doesn't feel mostly-empty. Mascot + live-txns chip live
           * inside this block so they always anchor to the 3D scene.
           * ----------------------------------------------------------- */}
          <div
            className="relative z-0 mx-auto mt-5 h-[290px] w-full sm:h-[340px] md:hidden"
            aria-hidden
          >
            <div className="absolute inset-x-0 top-0 h-full">
              <HeroSceneDynamic compact />
            </div>

            {/* live txns chip — top-right of 3D block */}
            <div className="pointer-events-none absolute right-1 top-1 inline-flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1.5 shadow-card backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-brand-teal opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal" />
              </span>
              <span className="text-[10px] font-extrabold text-brand-navy">
                1000+ txns / day
              </span>
            </div>

            {/* Ezzy mascot — bottom-left of 3D block, visible but compact */}
            <div className="pointer-events-none absolute -bottom-1 left-0 z-10 flex items-end gap-2">
              <EzuppMascot
                pose="wave"
                size={80}
                className="drop-shadow-[0_10px_22px_rgba(43,78,255,0.25)]"
              />
              <div className="mb-7 whitespace-nowrap rounded-2xl bg-white px-2.5 py-1.5 text-[10.5px] font-extrabold text-brand-navy shadow-card">
                <span
                  aria-hidden
                  className="mr-1 inline-block origin-[70%_80%] animate-wave"
                >
                  👋
                </span>
                Hi, I&apos;m Ezzy
              </div>
            </div>

            {/* fade into the white page below */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-white/0 to-white" />
          </div>

          <p className="reveal d2 mt-5 max-w-[480px] text-[15px] leading-[1.65] text-brand-gray md:mt-6 md:text-[18px] md:leading-[1.72]">
            Ezupp unifies ERP, CRM, On-Demand operations, and WhatsApp
            Automation — a single intelligent layer for enterprise teams that
            refuse to operate in silos.
          </p>

          <div className="reveal d3 mt-6 flex flex-wrap items-center gap-2.5 md:mt-8 md:gap-3">
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
            <div className="mt-1 flex w-full items-center gap-2 text-[12px] font-semibold text-brand-navy/55 sm:mt-0 sm:ml-2 sm:w-auto md:text-[13px]">
              <SparkleIcon className="text-brand-teal" />
              No credit card. Live in 2 weeks.
            </div>
          </div>

          {/* live activity chip — sits below the CTAs */}
          <div
            key={chip.text}
            className="reveal d3 mt-5 inline-flex animate-word-swap items-center gap-2 rounded-full border border-black/5 bg-white/90 px-3 py-1.5 shadow-card backdrop-blur md:mt-6"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full opacity-70"
                style={{ background: chip.dot }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: chip.dot }}
              />
            </span>
            <span className="text-[11.5px] font-bold tracking-tight text-brand-navy md:text-[12px]">
              {chip.text}
            </span>
          </div>

          <div className="reveal d4 mt-7 grid grid-cols-3 gap-3 md:mt-14 md:flex md:flex-wrap md:gap-12">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="text-[22px] font-extrabold tracking-[-0.03em] text-brand-navy md:text-[32px]">
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
                <div className="mt-0.5 text-[11px] font-medium text-brand-gray md:text-[12px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — on desktop, this is just a spacer that holds mascot in the bleed zone */}
        <div className="relative hidden h-[560px] md:block">
          {/* Ezzy mascot — bottom of the bleed zone, with speech bubble */}
          <div className="pointer-events-none absolute -bottom-2 left-0 z-10 flex items-end gap-3">
            <EzuppMascot
              pose="wave"
              size={132}
              className="drop-shadow-[0_14px_28px_rgba(43,78,255,0.25)]"
            />
            <div className="mb-14 whitespace-nowrap rounded-2xl bg-white px-3.5 py-2 text-[12px] font-extrabold tracking-tight text-brand-navy shadow-card">
              <span
                aria-hidden
                className="mr-1.5 inline-block origin-[70%_80%] animate-wave"
              >
                👋
              </span>
              Hi, I&apos;m Ezzy
            </div>
          </div>

          {/* live transactions chip top-right corner of bleed */}
          <div className="pointer-events-none absolute right-2 top-3 inline-flex items-center gap-2.5 rounded-full bg-white/85 px-3 py-2 shadow-card backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-brand-teal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
            </span>
            <span className="text-[11px] font-extrabold text-brand-navy">
              1000+&nbsp;txns / day
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
