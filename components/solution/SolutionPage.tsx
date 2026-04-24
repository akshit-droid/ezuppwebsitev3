"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { LeadForm } from "@/components/ui/LeadForm";
import { RevealProvider } from "@/components/ui/Reveal";
import { EzuppMascot, type MascotPose } from "@/components/mascot/EzuppMascot";
import { ArrowRightIcon } from "@/components/icons/SolutionIcons";

export interface SolutionFeature {
  title: string;
  desc: string;
  /** Optional emoji or tiny glyph shown above the card title. */
  glyph?: string;
}

export interface SolutionBenefit {
  stat: string;
  label: string;
}

export interface SolutionPageProps {
  /** Short tag above the title — e.g. "Retention". */
  eyebrow: string;
  /** Page headline — main product name. */
  title: ReactNode;
  /** One-line tagline displayed directly under the title. */
  tagline: string;
  /** Longer paragraph giving the pitch. */
  description: string;
  /** Custom hero graphic — rendered inside the hero art slot. */
  hero: ReactNode;
  /** Mascot pose beside the heading. */
  mascotPose?: MascotPose;
  /** Feature grid content (cards). */
  features: SolutionFeature[];
  /** Optional outcome stats / benefits row. */
  benefits?: SolutionBenefit[];
  /** "How it works" ordered steps. Optional. */
  howItWorks?: { title: string; desc: string }[];
  /** Source tag appended to the lead payload. */
  leadSource: string;
  /** Product interest tag appended to the lead payload. */
  leadInterest: string;
}

/**
 * Shared layout for every /solutions/<module> subpage.
 *
 * Keeps design language identical while letting each page supply its own
 * graphic and copy. The form is the same lead form used on the home page.
 */
export function SolutionPage({
  eyebrow,
  title,
  tagline,
  description,
  hero,
  mascotPose = "wave",
  features,
  benefits,
  howItWorks,
  leadSource,
  leadInterest,
}: SolutionPageProps) {
  return (
    <RevealProvider>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-white pb-16 pt-[108px] md:pb-24 md:pt-[148px]">
          <div className="noise" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-[480px] w-[480px] rounded-full bg-brand-blue/10 blur-[80px]" />
          <div className="pointer-events-none absolute bottom-0 left-[28%] h-[320px] w-[320px] rounded-full bg-brand-teal/15 blur-[70px]" />

          <Container className="relative z-10 grid items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-16">
            <div className="relative">
              <div className="reveal">
                <Link
                  href="/#solutions"
                  className="mb-4 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[.08em] text-brand-blue/70 transition hover:text-brand-blue"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M10 6H3m0 0l3-3m-3 3l3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  All Solutions
                </Link>
                <SectionEyebrow>{eyebrow}</SectionEyebrow>
              </div>

              <h1 className="reveal d1 mt-5 text-[clamp(34px,4.8vw,60px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-brand-navy">
                {title}
              </h1>

              <p className="reveal d2 mt-5 max-w-[520px] text-[17px] font-semibold leading-[1.55] text-brand-navy/80 md:text-[19px]">
                {tagline}
              </p>

              <p className="reveal d2 mt-4 max-w-[520px] text-[15px] leading-[1.75] text-brand-gray md:text-[16px]">
                {description}
              </p>

              <div className="reveal d3 mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" onClick={() => scrollToId("lead")}>
                  Book a Demo
                  <ArrowRightIcon />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToId("features")}>
                  See Features
                </Button>
              </div>
            </div>

            {/* HERO ART */}
            <div className="reveal d2 relative">
              <div className="pointer-events-none absolute inset-x-0 bottom-4 mx-auto h-32 w-[70%] rounded-full bg-gradient-brand opacity-10 blur-3xl" />
              <div className="relative">
                {hero}
                {/* floating mascot in corner */}
                <div className="pointer-events-none absolute -bottom-4 -left-2 md:-left-6">
                  <EzuppMascot
                    pose={mascotPose}
                    size={110}
                    className="drop-shadow-[0_10px_22px_rgba(43,78,255,0.22)]"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* BENEFIT STRIP (optional) */}
        {benefits && benefits.length > 0 && (
          <section className="relative overflow-hidden bg-white py-10 md:py-14">
            <Container className="px-6 md:px-16">
              <div className="grid grid-cols-2 gap-8 rounded-3xl border border-black/5 bg-gradient-brand-soft px-6 py-8 md:grid-cols-4 md:gap-4 md:px-10">
                {benefits.map((b) => (
                  <div key={b.label} className="text-center">
                    <div className="text-[28px] font-extrabold tracking-[-0.02em] text-brand-navy md:text-[36px]">
                      {b.stat}
                    </div>
                    <div className="mt-1 text-[12px] font-medium text-brand-gray">
                      {b.label}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* FEATURES */}
        <section id="features" className="relative overflow-hidden bg-white py-16 md:py-28">
          <div className="pointer-events-none absolute inset-0 grid-pattern-light" />
          <Container className="relative px-6 md:px-16">
            <div className="reveal max-w-3xl">
              <SectionEyebrow>What&apos;s inside</SectionEyebrow>
              <h2 className="mt-4 text-[clamp(26px,3.4vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy md:mt-5">
                Built to be <span className="grad-text">simple</span> where it
                matters, <span className="grad-text">powerful</span> where it
                counts.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal ${["d1", "d2", "d3"][i % 3]} group rounded-2xl border border-black/5 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-card-hover`}
                >
                  {f.glyph && (
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-[22px]">
                      {f.glyph}
                    </div>
                  )}
                  <h3 className="text-[17px] font-extrabold tracking-[-0.01em] text-brand-navy">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.72] text-brand-gray">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* HOW IT WORKS (optional) */}
        {howItWorks && howItWorks.length > 0 && (
          <section className="relative overflow-hidden bg-brand-light-gray py-16 md:py-28">
            <Container className="px-6 md:px-16">
              <div className="reveal max-w-3xl">
                <SectionEyebrow>How it works</SectionEyebrow>
                <h2 className="mt-4 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy md:mt-5">
                  From setup to scale — in{" "}
                  <span className="grad-text">weeks, not months.</span>
                </h2>
              </div>

              <ol className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
                {howItWorks.map((step, i) => (
                  <li
                    key={step.title}
                    className={`reveal ${["d1", "d2", "d3"][i % 3]} relative rounded-2xl border border-black/5 bg-white p-6`}
                  >
                    <div className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-[14px] font-extrabold text-white shadow-[0_8px_20px_-4px_rgba(43,78,255,.45)]">
                      {i + 1}
                    </div>
                    <h3 className="mt-2 text-[16px] font-extrabold tracking-[-0.01em] text-brand-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.72] text-brand-gray">
                      {step.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </Container>
          </section>
        )}

        {/* LEAD FORM */}
        <section id="lead" className="relative overflow-hidden py-16 md:py-28">
          <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-[90px]" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-teal/10 blur-[100px]" />

          <Container className="relative px-6 md:px-16">
            <div className="grid items-start gap-12 md:grid-cols-2 md:gap-24">
              <div className="reveal">
                <SectionEyebrow>Get Started</SectionEyebrow>
                <h2 className="mt-5 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy">
                  Ready to explore {leadInterest}?
                </h2>
                <p className="mt-5 text-[16px] leading-[1.78] text-brand-gray">
                  Talk to our enterprise team and get a live demo tailored to
                  your industry, team size, and specific workflows.
                </p>

                <div className="mt-10 flex items-end gap-3">
                  <EzuppMascot pose="wave" size={130} />
                  <div className="mb-3 max-w-[220px] rounded-2xl bg-white p-4 shadow-card">
                    <div className="text-[13px] font-bold text-brand-navy">
                      Hi, I&apos;m Ezzy 👋
                    </div>
                    <div className="mt-1 text-[12px] leading-[1.55] text-brand-gray">
                      Drop your details and I&apos;ll route you to the right
                      enterprise lead.
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal d2">
                <LeadForm
                  source={leadSource}
                  interest={leadInterest}
                  title="Book a Demo"
                  subtitle={`We'll walk you through ${leadInterest} with your data.`}
                />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </RevealProvider>
  );
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}
