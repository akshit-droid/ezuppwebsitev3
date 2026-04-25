"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";
import { cn } from "@/lib/cn";

/* ---------------------------------------------------------------- *
 * Comparison data
 * ---------------------------------------------------------------- */

type Metric = { label: string; us: string; them: string };

interface Competitor {
  id: "salesforce" | "zoho" | "sap";
  name: string;
  short: string;
  logoLetter: string;
  logoColor: string;
  tagline: string;
  // Honest acknowledgement of where they're strong — builds credibility.
  strengths: string[];
  // Where Ezupp wins, framed as facts not insults.
  limitations: string[];
  metrics: Metric[];
  // Ezzy speech bubble copy for this tab.
  ezzyLine: string;
}

const COMPETITORS: Competitor[] = [
  {
    id: "salesforce",
    name: "Salesforce",
    short: "Salesforce",
    logoLetter: "S",
    logoColor: "#00A1E0",
    tagline: "The enterprise CRM standard",
    strengths: [
      "Massive ecosystem and AppExchange",
      "Battle-tested at Fortune 500 scale",
      "Deep CRM analytics if you have the team to run it",
    ],
    limitations: [
      "Per-user licensing scales painfully past 50 reps",
      "6 to 12-month implementations with certified consultants",
      "No native ERP — distribution, dispatch, GST need custom dev",
      "Designed for desktop sales teams, not Indian field reps",
    ],
    metrics: [
      { label: "Time to live", us: "2–6 weeks", them: "6–12 months" },
      { label: "Pricing model", us: "Module-based", them: "Per user · $$$$" },
      {
        label: "India-first features",
        us: "GST · UPI · WhatsApp · Hindi",
        them: "Add-ons & partners",
      },
    ],
    ezzyLine:
      "Salesforce is great at what it does. It just isn't built for Indian distribution, field-team realities, or budgets under ₹2 cr a year.",
  },
  {
    id: "zoho",
    name: "Zoho One",
    short: "Zoho",
    logoLetter: "Z",
    logoColor: "#E42527",
    tagline: "The all-in-one suite",
    strengths: [
      "Affordable starting price",
      "50+ apps under one subscription",
      "Indian-origin and GST-aware out of the box",
    ],
    limitations: [
      "Apps feel unified but data still sits in 50 silos underneath",
      "Distribution, secondary sales, loyalty need Creator + Flow stitching",
      "Zia AI is bolted on, not woven into every workflow",
      "No deep ERP master data — Channel · Segment · Division · Plants",
    ],
    metrics: [
      { label: "Time to live", us: "2–6 weeks", them: "Quick start · slow scale" },
      { label: "Architecture", us: "One ERP backbone", them: "50 apps stitched" },
      {
        label: "Distribution depth",
        us: "First-class DMS",
        them: "DIY in Creator",
      },
    ],
    ezzyLine:
      "Zoho is lovely for small teams. As soon as you need real DMS, channel schemes, or AI in every record, the seams start showing.",
  },
  {
    id: "sap",
    name: "SAP Business One",
    short: "SAP B1",
    logoLetter: "S",
    logoColor: "#0FAAFF",
    tagline: "The mid-market ERP heavyweight",
    strengths: [
      "Battle-tested ERP backbone",
      "Strong manufacturing and finance modules",
      "Globally recognised in audit and procurement",
    ],
    limitations: [
      "Crore-scale implementations and 9 to 18-month go-lives",
      "Legacy UI — mobile and field experience are afterthoughts",
      "CRM, WhatsApp, QR loyalty, AI — all require heavy add-ons",
      "Customisation is locked behind SAP partners and ABAP work",
    ],
    metrics: [
      { label: "Time to live", us: "2–6 weeks", them: "9–18 months" },
      { label: "Setup cost", us: "₹ lakhs", them: "₹ crores" },
      {
        label: "Mobile field UX",
        us: "Native, modern",
        them: "Desktop-first",
      },
    ],
    ezzyLine:
      "SAP B1 is over-built for most Indian SMEs and under-built for Indian field workflows. We sit exactly in that gap.",
  },
];

const EZUPP_PILLARS = [
  {
    icon: "🇮🇳",
    title: "India-first by default",
    desc: "GST, e-invoice, UPI payouts, WhatsApp BSP, regional languages — built in, not bought.",
  },
  {
    icon: "⚡",
    title: "Live in 2–6 weeks",
    desc: "ERP-grade master data and CRM together — without the multi-year SAP-style program.",
  },
  {
    icon: "🧠",
    title: "AI in every module",
    desc: "Lead scoring, call analysis, route optimisation and anomaly detection — woven into the core.",
  },
  {
    icon: "📱",
    title: "Built for the field",
    desc: "Mobile-first apps for distributors, retailers, technicians and reps — not just office laptops.",
  },
  {
    icon: "🔌",
    title: "One platform, nine modules",
    desc: "Pick what fits today — Sales Fleet, DMS, CRM, Loyalty — and add the rest as you grow.",
  },
];

/* ---------------------------------------------------------------- *
 * Section
 * ---------------------------------------------------------------- */

export function Compare() {
  const [activeId, setActiveId] = useState<Competitor["id"]>("salesforce");
  const active = COMPETITORS.find((c) => c.id === activeId)!;

  return (
    <section
      id="compare"
      className="relative overflow-hidden bg-white py-16 md:py-28"
    >
      {/* atmospheric wash */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[80%] -translate-y-1/2 bg-gradient-to-b from-brand-blue/[0.04] via-brand-teal/[0.05] to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-20 -z-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-0 h-80 w-80 rounded-full bg-brand-teal/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-50" />

      <Container className="relative px-5 md:px-16">
        {/* HEADER + EZZY */}
        <div className="reveal relative mx-auto max-w-3xl text-center">
          <SectionEyebrow>Stack up · honestly</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(28px,3.8vw,46px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy md:mt-5">
            Ezupp vs the{" "}
            <span className="grad-text">legacy stack.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.7] text-brand-gray md:text-[16px]">
            We're not the right fit for everyone — and we'd rather you knew
            up front. Here&apos;s how we honestly stack up against the tools
            you&apos;re probably evaluating.
          </p>
        </div>

        {/* Ezzy + speech bubble — sits below header on mobile, top-right on desktop */}
        <div className="reveal d2 relative mt-8 flex flex-col items-center gap-3 md:mt-10 md:flex-row md:items-end md:justify-center">
          <EzuppMascot pose="thinking" size={92} />
          <div className="relative max-w-[420px] rounded-2xl border border-black/8 bg-white px-4 py-3 shadow-card md:ml-2">
            {/* tail */}
            <div className="absolute -left-2 bottom-5 hidden h-3 w-3 rotate-45 border-b border-l border-black/8 bg-white md:block" />
            <div className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-blue">
              Ezzy says
            </div>
            <div
              key={active.id}
              className="mt-1 animate-word-swap text-[13px] font-bold leading-[1.55] text-brand-navy"
            >
              {active.ezzyLine}
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="reveal d2 mt-10 flex flex-wrap items-center justify-center gap-2 md:mt-12">
          {COMPETITORS.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-extrabold transition-all",
                  isActive
                    ? "border-transparent bg-brand-navy text-white shadow-[0_14px_40px_-12px_rgba(8,15,46,0.45)]"
                    : "border-black/10 bg-white text-brand-navy hover:border-brand-blue/40 hover:-translate-y-0.5",
                )}
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
                  style={{ background: c.logoColor }}
                >
                  {c.logoLetter}
                </span>
                Ezupp <span className="opacity-50">vs</span> {c.short}
              </button>
            );
          })}
        </div>

        {/* COMPARISON CARDS */}
        <div
          key={active.id}
          className="reveal d3 mt-8 grid animate-word-swap items-stretch gap-5 md:mt-12 md:gap-6 lg:grid-cols-12"
        >
          {/* Ezupp side */}
          <div className="lg:col-span-7">
            <article className="relative h-full overflow-hidden rounded-[24px] border border-transparent bg-gradient-to-br from-brand-navy via-[#11194A] to-brand-navy p-6 text-white shadow-[0_30px_70px_-30px_rgba(8,15,46,0.45)] md:p-8">
              {/* decorative glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(46,216,160,0.5), transparent 60%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -left-10 -bottom-10 h-56 w-56 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(43,78,255,0.5), transparent 60%)",
                }}
              />

              {/* header */}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[16px] font-extrabold">
                    Ez
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/65">
                      Our take
                    </div>
                    <div className="text-[18px] font-extrabold tracking-tight">
                      Ezupp
                    </div>
                  </div>
                </div>
                <span className="rounded-full bg-brand-teal/15 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-teal">
                  India-first
                </span>
              </div>

              {/* pillars */}
              <ul className="relative mt-6 space-y-3">
                {EZUPP_PILLARS.map((p) => (
                  <li
                    key={p.title}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3 backdrop-blur-sm"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-[16px]">
                      {p.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13px] font-extrabold text-white">
                        {p.title}
                      </div>
                      <div className="mt-0.5 text-[12px] leading-[1.55] text-white/70">
                        {p.desc}
                      </div>
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <CheckIcon />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Competitor side */}
          <div className="lg:col-span-5">
            <article className="relative h-full overflow-hidden rounded-[24px] border border-black/8 bg-white p-6 shadow-card md:p-8">
              {/* header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl text-[16px] font-extrabold text-white"
                    style={{ background: active.logoColor }}
                  >
                    {active.logoLetter}
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-brand-gray">
                      What you may also be looking at
                    </div>
                    <div className="text-[18px] font-extrabold tracking-tight text-brand-navy">
                      {active.name}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-1 text-[12px] text-brand-gray">
                {active.tagline}
              </div>

              {/* strengths — honest */}
              <div className="mt-6">
                <div className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-gray">
                  Where it&apos;s strong
                </div>
                <ul className="mt-2 space-y-1.5">
                  {active.strengths.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-[13px] leading-[1.55] text-brand-navy/85"
                    >
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy/30" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* limitations — also honest */}
              <div className="mt-5 rounded-2xl border border-black/8 bg-brand-light-gray/60 p-4">
                <div className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-blue">
                  Where Ezupp wins for India
                </div>
                <ul className="mt-2 space-y-2">
                  {active.limitations.map((l) => (
                    <li key={l} className="flex items-start gap-2.5">
                      <CompareIcon />
                      <span className="text-[13px] leading-[1.55] text-brand-navy">
                        {l}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>

        {/* METRIC STRIP */}
        <div className="reveal d3 mt-5 grid gap-3 md:mt-6 md:grid-cols-3 md:gap-4">
          {active.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-black/8 bg-white p-5 shadow-card"
            >
              <div className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-gray">
                {m.label}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gradient-brand-soft p-3">
                  <div className="text-[9px] font-extrabold uppercase tracking-[.15em] text-brand-blue">
                    Ezupp
                  </div>
                  <div className="mt-0.5 text-[14px] font-extrabold text-brand-navy">
                    {m.us}
                  </div>
                </div>
                <div className="rounded-xl bg-brand-light-gray/70 p-3">
                  <div className="text-[9px] font-extrabold uppercase tracking-[.15em] text-brand-gray">
                    {active.short}
                  </div>
                  <div className="mt-0.5 text-[14px] font-extrabold text-brand-navy/80">
                    {m.them}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal d3 mt-10 flex flex-col items-center gap-3 md:mt-14">
          <p className="max-w-xl text-center text-[13px] text-brand-gray">
            Want a side-by-side built around <em>your</em> stack, team size,
            and use case? Ezzy will line it up — no sales pressure.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-[13px] font-extrabold text-white shadow-[0_18px_40px_-12px_rgba(43,78,255,0.45)] transition-all hover:-translate-y-0.5"
          >
            Get a tailored comparison
            <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * Inline icons
 * ---------------------------------------------------------------- */
function CheckIcon() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal/20">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.5L5 9L9.5 3.5"
          stroke="#2ED8A0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CompareIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/15">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path
          d="M3 6h6m0 0L6 3m3 3L6 9"
          stroke="#2B4EFF"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
