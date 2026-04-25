"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

interface Industry {
  id: string;
  name: string;
  icon: string;
  useCase: string;
  primaryModule: string;
  primaryHref: string;
  accent: "blue" | "teal";
  stats: { value: string; label: string }[];
  bullets: string[];
}

const industries: Industry[] = [
  {
    id: "electronics",
    name: "Consumer Electronics",
    icon: "📱",
    useCase:
      "Replace paper warranty cards with unique QR codes on every box. Customers scan to activate, verifying authenticity instantly while you capture first-party consumer data directly via WhatsApp.",
    primaryModule: "Digital Warranty",
    primaryHref: "/solutions/warranty",
    accent: "blue",
    stats: [
      { value: "+68%", label: "Activation rate" },
      { value: "6×", label: "Data capture" },
    ],
    bullets: [
      "Anti-counterfeit QR on every SKU",
      "Extended warranty upsell on WhatsApp",
      "Service request routed to nearest centre",
    ],
  },
  {
    id: "fmcg",
    name: "FMCG & CPG",
    icon: "🛒",
    useCase:
      "Orchestrate complex secondary sales networks. Sync real-time inventory from 10,000+ distributors and run retailer loyalty programs that reward performance with automated payouts.",
    primaryModule: "Distributor Mgmt",
    primaryHref: "/solutions/distributor",
    accent: "teal",
    stats: [
      { value: "10k+", label: "Distributors live" },
      { value: "+34%", label: "Beat coverage" },
    ],
    bullets: [
      "Daily beat plan + geo-attendance",
      "Retailer loyalty with auto payouts",
      "Primary + secondary in one view",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "🏭",
    useCase:
      "Connect the shop floor to the field. Monitor fleet movements, optimize last-mile delivery routes, and manage your entire workforce's statutory compliance in one unified system.",
    primaryModule: "Supply Chain",
    primaryHref: "/solutions/supply",
    accent: "blue",
    stats: [
      { value: "−22%", label: "Logistics cost" },
      { value: "99.3%", label: "OTIF dispatch" },
    ],
    bullets: [
      "Plant → warehouse → dealer visibility",
      "Live fleet + ETA customer alerts",
      "Skytech HRMS for compliance",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare Chains",
    icon: "🩺",
    useCase:
      "Bridge the gap between patients and clinicians. Automated WhatsApp booking flows for appointments, vital capture for nurses, and a unified 360° patient timeline for doctors.",
    primaryModule: "Healthcare Edition",
    primaryHref: "/solutions/healthcare",
    accent: "teal",
    stats: [
      { value: "−41%", label: "No-show rate" },
      { value: "360°", label: "Patient view" },
    ],
    bullets: [
      "WhatsApp booking + reminders",
      "Nurse vital capture on phone",
      "Discharge follow-ups in one flow",
    ],
  },
  {
    id: "retail",
    name: "Retail & D2C",
    icon: "🛍️",
    useCase:
      "Turn WhatsApp into your highest-converting storefront. Abandoned-cart nudges, loyalty tier messaging, and order tracking all ship from a single workspace.",
    primaryModule: "WhatsApp Solution",
    primaryHref: "/solutions/whatsapp",
    accent: "blue",
    stats: [
      { value: "5.2×", label: "CTR vs email" },
      { value: "+41%", label: "Repeat orders" },
    ],
    bullets: [
      "Cart recovery + abandoned-cart flows",
      "Loyalty points on WhatsApp",
      "Tracking + feedback in-thread",
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Last-Mile",
    icon: "🚚",
    useCase:
      "Run a modern fleet ops room. Route optimization, proof-of-delivery capture, driver attendance, and live customer ETAs — every kilometre accounted for.",
    primaryModule: "Sales Fleet",
    primaryHref: "/solutions/fleet",
    accent: "teal",
    stats: [
      { value: "−28%", label: "Route time" },
      { value: "98%", label: "POD capture" },
    ],
    bullets: [
      "Multi-stop route optimization",
      "Driver attendance + expense",
      "Live tracking link to customer",
    ],
  },
];

export function Industries() {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-16 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-brand-blue/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-brand-teal/5 blur-[100px]" />

      <Container className="relative px-6 md:px-16">
        {/* Section intro */}
        <div className="reveal max-w-3xl">
          <SectionEyebrow>Industries We Power</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(28px,3.6vw,48px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-brand-navy md:mt-5">
            Built for the way{" "}
            <span className="grad-text">your industry</span> actually runs.
          </h2>
          <p className="mt-5 max-w-[640px] text-[16px] leading-[1.72] text-brand-gray md:text-[17px]">
            Six core verticals. One unified stack. Pick yours to see the exact
            modules, flows, and outcomes Ezupp customers achieve today.
          </p>
        </div>

        {/* Industry chip row — scrollable on mobile, wraps on desktop.
            Hide native scrollbar so it looks clean. */}
        <div className="reveal d1 mt-8 md:mt-14">
          <div className="-mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-2 md:min-w-0 md:flex-wrap md:gap-3">
              {industries.map((ind) => {
                const isActive = activeTab.id === ind.id;
                return (
                  <button
                    key={ind.id}
                    onMouseEnter={() => setActiveTab(ind)}
                    onClick={() => setActiveTab(ind)}
                    className={cn(
                      "group relative inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-3.5 py-2.5 text-[12px] font-bold transition-all md:text-[14px]",
                      isActive
                        ? ind.accent === "blue"
                          ? "border-brand-blue bg-brand-blue text-white shadow-[0_10px_30px_-12px_rgba(43,78,255,.55)]"
                          : "border-brand-teal bg-brand-teal text-white shadow-[0_10px_30px_-12px_rgba(46,216,160,.55)]"
                        : "border-black/10 bg-white text-brand-navy/70 hover:-translate-y-0.5 hover:border-brand-blue/30 hover:text-brand-navy",
                    )}
                  >
                    <span className="text-[15px]">{ind.icon}</span>
                    <span className="whitespace-nowrap">{ind.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* DETAIL PANEL — stacks on mobile, splits on desktop */}
        <div className="reveal d2 relative mt-8 overflow-hidden rounded-[20px] border border-black/5 bg-gradient-brand-soft md:mt-14 md:rounded-[28px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[1.15fr_1fr] md:gap-12 md:p-12 lg:p-16"
            >
              {/* Background mascot echo — hidden on mobile to save space */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 hidden opacity-[0.06] grayscale md:block md:-right-6">
                <EzuppMascot
                  pose={activeTab.accent === "blue" ? "thinking" : "working"}
                  size={360}
                  animated={false}
                />
              </div>

              {/* LEFT */}
              <div className="relative">
                <div
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] sm:text-[11px]",
                    activeTab.accent === "blue"
                      ? "border-brand-blue/20 bg-brand-blue/10 text-brand-blue"
                      : "border-brand-teal/30 bg-brand-teal/10 text-brand-teal-dark",
                  )}
                >
                  <span className="text-[12px] sm:text-[13px]">
                    {activeTab.icon}
                  </span>
                  {activeTab.name}
                </div>

                <p className="mt-4 text-[16px] font-semibold leading-[1.5] text-brand-navy sm:text-[18px] md:mt-5 md:text-[22px]">
                  {activeTab.useCase}
                </p>

                {/* stats row */}
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-5 sm:gap-x-10 md:mt-7">
                  {activeTab.stats.map((s) => (
                    <div key={s.label}>
                      <div
                        className={cn(
                          "text-[24px] font-extrabold tracking-[-0.03em] sm:text-[26px] md:text-[32px]",
                          activeTab.accent === "blue"
                            ? "text-brand-blue"
                            : "text-brand-teal-dark",
                        )}
                      >
                        {s.value}
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-brand-gray sm:text-[12px]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — bullets + primary module */}
              <div className="relative flex flex-col justify-between gap-5 sm:gap-6">
                <ul className="space-y-2.5 sm:space-y-3">
                  {activeTab.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/80 px-3.5 py-2.5 backdrop-blur sm:rounded-2xl sm:px-4 sm:py-3"
                    >
                      <span
                        className={cn(
                          "mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full",
                          activeTab.accent === "blue"
                            ? "bg-brand-blue"
                            : "bg-brand-teal",
                        )}
                      />
                      <span className="text-[13px] font-medium leading-[1.5] text-brand-navy sm:text-[14px]">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={activeTab.primaryHref}
                  className={cn(
                    "group inline-flex items-center justify-between gap-3 rounded-xl border-2 px-4 py-3.5 font-bold transition-all hover:-translate-y-0.5 hover:shadow-card-hover sm:rounded-2xl sm:px-5 sm:py-4",
                    activeTab.accent === "blue"
                      ? "border-brand-blue bg-white text-brand-blue"
                      : "border-brand-teal bg-white text-brand-teal-dark",
                  )}
                >
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
                      Core Pillar
                    </span>
                    <span className="text-[14px] sm:text-[15px]">
                      {activeTab.primaryModule}
                    </span>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5"
                  >
                    <path
                      d="M5 12h14m0 0l-5-5m5 5l-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
