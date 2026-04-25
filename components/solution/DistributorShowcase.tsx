"use client";

import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

/**
 * Rich product showcase for /solutions/distributor — highlights the four
 * pillars of the Ezupp DMS (built on top of the ERP, with both an admin
 * console and a distributor app):
 *
 *   1. Master data hierarchy — Channel · Segment · Division · Plants
 *   2. Product visibility + dynamic pricing matrix
 *   3. Sales orders feed (live)
 *   4. Incentive / loyalty program tracker
 *
 * Plus an "App + Admin" footer that frames the dual-surface ERP story.
 */
export function DistributorShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-24">
      {/* atmospheric brand wash */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[80%] -translate-y-1/2 bg-gradient-to-b from-brand-blue/[0.05] via-brand-teal/[0.04] to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-0 h-80 w-80 rounded-full bg-brand-teal/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-60" />

      <Container className="relative px-5 md:px-16">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow>ERP · Admin Console + Distributor App</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy md:mt-5">
            Master data, pricing, orders & loyalty —{" "}
            <span className="grad-text">all under one roof.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] leading-[1.7] text-brand-gray md:mt-5 md:text-[16px]">
            Govern your distributor network the way your business actually
            works — by Channel, Segment, Division and Plant. Control what each
            distributor sees, what they pay, and reward the ones who deliver.
          </p>
        </div>

        {/* ROW 1 — Hierarchy (large) + Incentive (right) */}
        <div className="reveal d2 mt-10 grid items-stretch gap-5 md:mt-14 md:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <NetworkHierarchy />
          </div>
          <div className="lg:col-span-5">
            <IncentiveCard />
          </div>
        </div>

        {/* ROW 2 — Product+Pricing matrix + Sales orders feed */}
        <div className="reveal d3 mt-5 grid items-stretch gap-5 md:mt-6 md:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <CatalogPricingCard />
          </div>
          <div className="lg:col-span-5">
            <OrdersFeedCard />
          </div>
        </div>

        {/* ROW 3 — App + Admin duality */}
        <div className="reveal d3 mt-5 md:mt-6">
          <AppAdminDualityCard />
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * 1. Network hierarchy — Channel > Segment > Division > Plants
 * ---------------------------------------------------------------- */
function NetworkHierarchy() {
  return (
    <div className="relative h-full overflow-hidden rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_22px_50px_-15px_rgba(8,15,46,0.18)] md:p-6">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand-soft">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="4" r="2.4" stroke="#2B4EFF" strokeWidth="1.7" />
              <circle cx="5" cy="13" r="2.4" stroke="#2B4EFF" strokeWidth="1.7" />
              <circle cx="12" cy="13" r="2.4" stroke="#2B4EFF" strokeWidth="1.7" />
              <circle cx="19" cy="13" r="2.4" stroke="#2B4EFF" strokeWidth="1.7" />
              <circle cx="9" cy="20" r="1.8" stroke="#2B4EFF" strokeWidth="1.5" />
              <circle cx="15" cy="20" r="1.8" stroke="#2B4EFF" strokeWidth="1.5" />
              <path d="M12 6.4V11M5.6 13L9 17M18.4 13l-3 4M11 13l1 5" stroke="#2B4EFF" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h3 className="text-[14px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[15px]">
              Network master data
            </h3>
            <p className="text-[11px] font-medium text-brand-gray">
              Channel · Segment · Division · Plants
            </p>
          </div>
        </div>
        <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider text-brand-blue">
          1,284 outlets
        </span>
      </div>

      {/* hierarchy graphic */}
      <div className="relative mt-5">
        {/* SVG connectors layer */}
        <svg
          viewBox="0 0 600 320"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="connG" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#2B4EFF" stopOpacity="0.45" />
              <stop offset="1" stopColor="#2ED8A0" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          {/* Tier 1 (Channel) → Tier 2 (Segments) */}
          <path d="M300 50 C 300 80, 110 80, 110 110" stroke="url(#connG)" strokeWidth="1.4" fill="none" strokeDasharray="3 4" />
          <path d="M300 50 C 300 80, 300 80, 300 110" stroke="url(#connG)" strokeWidth="1.4" fill="none" strokeDasharray="3 4" />
          <path d="M300 50 C 300 80, 490 80, 490 110" stroke="url(#connG)" strokeWidth="1.4" fill="none" strokeDasharray="3 4" />

          {/* Tier 2 → Tier 3 (Divisions) */}
          <path d="M110 145 C 110 170, 60 170, 60 200" stroke="url(#connG)" strokeWidth="1.2" fill="none" strokeDasharray="3 4" />
          <path d="M110 145 C 110 170, 160 170, 160 200" stroke="url(#connG)" strokeWidth="1.2" fill="none" strokeDasharray="3 4" />
          <path d="M300 145 C 300 170, 250 170, 250 200" stroke="url(#connG)" strokeWidth="1.2" fill="none" strokeDasharray="3 4" />
          <path d="M300 145 C 300 170, 350 170, 350 200" stroke="url(#connG)" strokeWidth="1.2" fill="none" strokeDasharray="3 4" />
          <path d="M490 145 C 490 170, 440 170, 440 200" stroke="url(#connG)" strokeWidth="1.2" fill="none" strokeDasharray="3 4" />
          <path d="M490 145 C 490 170, 540 170, 540 200" stroke="url(#connG)" strokeWidth="1.2" fill="none" strokeDasharray="3 4" />

          {/* Tier 3 → Tier 4 (Plants/distributors — small dots fanning out) */}
          {[60, 160, 250, 350, 440, 540].map((x, i) => (
            <g key={i}>
              <path d={`M${x} 235 C ${x} 260, ${x - 18} 260, ${x - 18} 280`} stroke="url(#connG)" strokeWidth="0.9" fill="none" strokeDasharray="2 3" />
              <path d={`M${x} 235 C ${x} 260, ${x + 18} 260, ${x + 18} 280`} stroke="url(#connG)" strokeWidth="0.9" fill="none" strokeDasharray="2 3" />
            </g>
          ))}
        </svg>

        {/* Tiers */}
        <div className="relative grid grid-rows-4 gap-3.5 pb-2 md:gap-5">
          {/* Tier 1 — Channel */}
          <div className="flex justify-center">
            <TierNode tone="brandStrong" size="lg" subtitle="Channel">
              FMCG · National
            </TierNode>
          </div>

          {/* Tier 2 — Segments */}
          <div className="flex justify-around">
            <TierNode tone="blue" subtitle="Segment">Modern Trade</TierNode>
            <TierNode tone="blue" subtitle="Segment">General Trade</TierNode>
            <TierNode tone="blue" subtitle="Segment">HoReCa</TierNode>
          </div>

          {/* Tier 3 — Divisions */}
          <div className="grid grid-cols-6 gap-1.5 px-1">
            <TierNode tone="violet" subtitle="Division" small>North</TierNode>
            <TierNode tone="violet" subtitle="Division" small>West</TierNode>
            <TierNode tone="violet" subtitle="Division" small>South</TierNode>
            <TierNode tone="violet" subtitle="Division" small>East</TierNode>
            <TierNode tone="violet" subtitle="Division" small>Metro</TierNode>
            <TierNode tone="violet" subtitle="Division" small>Tier-2</TierNode>
          </div>

          {/* Tier 4 — Plants / Distributors (compact chips) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {[
              "Pune",
              "Mumbai",
              "Delhi",
              "Indore",
              "Jaipur",
              "Bengaluru",
              "Hyderabad",
              "Chennai",
              "Kolkata",
              "+9",
            ].map((p) => (
              <span
                key={p}
                className="rounded-full border border-brand-teal/25 bg-brand-teal/10 px-2.5 py-1 text-[9.5px] font-extrabold text-brand-teal-dark"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* legend */}
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-semibold text-brand-gray">
        <LegendDot color="bg-brand-blue" label="Channel" />
        <LegendDot color="bg-brand-blue/70" label="Segment" />
        <LegendDot color="bg-[#7A5BFF]" label="Division" />
        <LegendDot color="bg-brand-teal" label="Plant / Distributor" />
      </div>
    </div>
  );
}

function TierNode({
  tone,
  size = "md",
  small,
  subtitle,
  children,
}: {
  tone: "brandStrong" | "blue" | "violet";
  size?: "md" | "lg";
  small?: boolean;
  subtitle: string;
  children: React.ReactNode;
}) {
  const styles =
    tone === "brandStrong"
      ? "bg-gradient-brand text-white shadow-[0_10px_24px_-8px_rgba(43,78,255,.55)]"
      : tone === "blue"
      ? "bg-white text-brand-navy ring-1 ring-brand-blue/20 shadow-[0_8px_18px_-10px_rgba(43,78,255,0.4)]"
      : "bg-white text-brand-navy ring-1 ring-[#A48BFF]/35";
  const pad = size === "lg" ? "px-4 py-2" : small ? "px-1.5 py-1" : "px-3 py-1.5";
  return (
    <div className={`rounded-xl ${styles} ${pad} text-center`}>
      <div
        className={`text-[8.5px] font-extrabold uppercase tracking-wider ${
          tone === "brandStrong" ? "text-white/75" : "text-brand-gray"
        }`}
      >
        {subtitle}
      </div>
      <div
        className={`${
          small ? "text-[10px]" : size === "lg" ? "text-[13px]" : "text-[11.5px]"
        } font-extrabold leading-tight`}
      >
        {children}
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}

/* ---------------------------------------------------------------- *
 * 2. Catalog visibility + dynamic pricing matrix
 * ---------------------------------------------------------------- */
function CatalogPricingCard() {
  const rows = [
    { sku: "EZ-FLR-50KG", mrp: "₹1,420", mt: "₹1,180", gt: "₹1,210", horeca: "₹1,150", v: ["on", "on", "on", "off"] },
    { sku: "EZ-OIL-15L", mrp: "₹2,260", mt: "₹1,840", gt: "₹1,890", horeca: "₹1,790", v: ["on", "on", "off", "on"] },
    { sku: "EZ-DAL-25KG", mrp: "₹3,500", mt: "₹2,890", gt: "₹2,950", horeca: "₹2,780", v: ["on", "on", "on", "on"] },
    { sku: "EZ-SUG-50KG", mrp: "₹2,150", mt: "₹1,720", gt: "—", horeca: "₹1,690", v: ["on", "off", "on", "on"] },
  ];
  const segments = ["MT", "GT", "HoReCa", "Bulk"];

  return (
    <div className="relative h-full overflow-hidden rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_22px_50px_-15px_rgba(8,15,46,0.18)] md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand-soft">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2.4" stroke="#2B4EFF" strokeWidth="1.7" />
              <path d="M3 9h18M9 3v18" stroke="#2B4EFF" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <h3 className="text-[14px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[15px]">
              Product visibility & dynamic pricing
            </h3>
            <p className="text-[11px] font-medium text-brand-gray">
              Per-segment SKU access · custom rate cards
            </p>
          </div>
        </div>
        <span className="rounded-full bg-brand-teal/15 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider text-brand-teal-dark">
          Auto-synced
        </span>
      </div>

      {/* matrix */}
      <div className="mt-4 overflow-x-auto rounded-2xl border border-black/5">
        <table className="w-full min-w-[460px] border-collapse text-left">
          <thead>
            <tr className="bg-brand-light-gray text-[9.5px] font-extrabold uppercase tracking-wider text-brand-gray">
              <th className="px-3 py-2">SKU</th>
              <th className="px-3 py-2">MRP</th>
              {segments.map((s) => (
                <th key={s} className="px-3 py-2 text-center">
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.sku}
                className={`text-[10.5px] ${
                  i % 2 === 1 ? "bg-brand-light-gray/40" : "bg-white"
                }`}
              >
                <td className="px-3 py-2 font-extrabold text-brand-navy">
                  {r.sku}
                </td>
                <td className="px-3 py-2 font-bold text-brand-gray">{r.mrp}</td>
                <PriceCell value={r.mt} state={r.v[0]} />
                <PriceCell value={r.gt} state={r.v[1]} />
                <PriceCell value={r.horeca} state={r.v[2]} />
                <PriceCell value={r.v[3] === "off" ? "—" : "₹—"} state={r.v[3]} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* legend */}
      <div className="mt-3 flex flex-wrap items-center gap-3 text-[9.5px] font-semibold text-brand-gray">
        <span className="flex items-center gap-1.5">
          <span className="inline-flex h-3.5 w-6 items-center rounded-full bg-brand-teal/85 px-0.5">
            <span className="ml-auto inline-block h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          Visible to segment
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-flex h-3.5 w-6 items-center rounded-full bg-brand-gray/35 px-0.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          Hidden
        </span>
        <span className="ml-auto text-brand-teal-dark">
          Pricing rules apply across the network instantly.
        </span>
      </div>
    </div>
  );
}

function PriceCell({ value, state }: { value: string; state: string }) {
  const isOn = state === "on";
  return (
    <td
      className={`px-3 py-2 text-center font-bold ${
        isOn ? "text-brand-navy" : "text-brand-gray/60"
      }`}
    >
      <div className="flex items-center justify-center gap-1.5">
        <span
          className={`inline-flex h-3.5 w-6 flex-shrink-0 items-center rounded-full px-0.5 ${
            isOn ? "bg-brand-teal/85" : "bg-brand-gray/30"
          }`}
        >
          <span
            className={`inline-block h-2.5 w-2.5 rounded-full bg-white ${
              isOn ? "ml-auto" : ""
            }`}
          />
        </span>
        <span>{value}</span>
      </div>
    </td>
  );
}

/* ---------------------------------------------------------------- *
 * 3. Sales orders feed (live)
 * ---------------------------------------------------------------- */
function OrdersFeedCard() {
  const orders = [
    { id: "SO-48219", from: "Pune Distributor", value: "₹1,84,200", time: "2 min ago", state: "Confirmed", tone: "teal" as const },
    { id: "SO-48218", from: "Indore Distributor", value: "₹62,500", time: "11 min", state: "In review", tone: "blue" as const },
    { id: "SO-48217", from: "Jaipur Distributor", value: "₹2,40,900", time: "23 min", state: "Confirmed", tone: "teal" as const },
    { id: "SO-48216", from: "Kolkata Distributor", value: "₹38,600", time: "41 min", state: "Pending pay.", tone: "amber" as const },
    { id: "SO-48215", from: "Chennai Distributor", value: "₹1,12,000", time: "1 hr", state: "Confirmed", tone: "teal" as const },
  ];
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_22px_50px_-15px_rgba(8,15,46,0.18)] md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand-soft">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 4h2l2.5 12.5a2 2 0 002 1.5h7.5a2 2 0 002-1.5L21 7H6"
                stroke="#2B4EFF"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="21" r="1.4" fill="#2B4EFF" />
              <circle cx="17" cy="21" r="1.4" fill="#2B4EFF" />
            </svg>
          </div>
          <div>
            <h3 className="text-[14px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[15px]">
              Sales orders feed
            </h3>
            <p className="text-[11px] font-medium text-brand-gray">
              Live, from every distributor
            </p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-brand-teal/15 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider text-brand-teal-dark">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-brand-teal opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal" />
          </span>
          Live
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-1.5">
        {orders.map((o) => (
          <OrderRow key={o.id} {...o} />
        ))}
      </div>

      {/* footer summary */}
      <div className="mt-3 grid grid-cols-3 gap-2.5 rounded-2xl bg-gradient-brand-soft p-3">
        <FooterStat value="₹46.2L" label="Today" />
        <FooterStat value="184" label="Orders" />
        <FooterStat value="98.2%" label="Fill rate" />
      </div>
    </div>
  );
}

function OrderRow({
  id,
  from,
  value,
  time,
  state,
  tone,
}: {
  id: string;
  from: string;
  value: string;
  time: string;
  state: string;
  tone: "teal" | "blue" | "amber";
}) {
  const swatch =
    tone === "teal"
      ? "bg-brand-teal/15 text-brand-teal-dark"
      : tone === "blue"
      ? "bg-brand-blue/10 text-brand-blue"
      : "bg-[#FFB547]/15 text-[#B97500]";
  return (
    <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-white px-2.5 py-2 transition hover:-translate-y-0.5 hover:shadow-[0_8px_18px_-8px_rgba(8,15,46,0.18)]">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-extrabold text-brand-blue">
            {id}
          </span>
          <span
            className={`rounded-full px-1.5 py-0.5 text-[8.5px] font-extrabold uppercase tracking-wider ${swatch}`}
          >
            {state}
          </span>
        </div>
        <div className="mt-0.5 truncate text-[10.5px] font-bold text-brand-navy">
          {from}
        </div>
      </div>
      <div className="text-right">
        <div className="text-[11px] font-extrabold tracking-[-0.01em] text-brand-navy">
          {value}
        </div>
        <div className="text-[9px] font-medium text-brand-gray">{time}</div>
      </div>
    </div>
  );
}

function FooterStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-[14px] font-extrabold tracking-[-0.02em] text-brand-navy md:text-[16px]">
        {value}
      </div>
      <div className="mt-0.5 text-[9px] font-semibold text-brand-gray">
        {label}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * 4. Incentive / Loyalty program card
 * ---------------------------------------------------------------- */
function IncentiveCard() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-black/5 bg-gradient-to-br from-[#0E1638] via-[#101A45] to-[#13225C] p-5 text-white shadow-[0_22px_50px_-15px_rgba(8,15,46,0.45)] md:p-6">
      <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-teal/30 blur-[60px]" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-brand-blue/40 blur-[70px]" />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-brand-teal backdrop-blur">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.39 4.84 5.34.78-3.86 3.77.91 5.32L12 14.78 7.22 16.71l.91-5.32L4.27 7.62l5.34-.78L12 2z"
                fill="currentColor"
                opacity="0.18"
              />
              <path
                d="M12 2l2.39 4.84 5.34.78-3.86 3.77.91 5.32L12 14.78 7.22 16.71l.91-5.32L4.27 7.62l5.34-.78L12 2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-[14px] font-extrabold tracking-[-0.01em] md:text-[15px]">
              Incentive & loyalty programs
            </h3>
            <p className="text-[11px] font-medium text-white/65">
              Reward distributors for performance
            </p>
          </div>
        </div>
        <span className="rounded-full bg-brand-teal/20 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider text-brand-teal">
          Active · Q2
        </span>
      </div>

      {/* program */}
      <div className="relative mt-4 rounded-2xl bg-white/5 p-3.5 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="text-[12px] font-extrabold">
            Q2 — Slab Scheme
          </div>
          <div className="text-[9.5px] font-medium text-white/60">
            Closes in 12 days
          </div>
        </div>

        {/* slab bar */}
        <div className="relative mt-3 h-2.5 w-full rounded-full bg-white/10">
          {/* slab thresholds */}
          <span className="absolute left-[30%] -top-1 h-[18px] w-px bg-white/20" />
          <span className="absolute left-[60%] -top-1 h-[18px] w-px bg-white/20" />
          {/* fill */}
          <div className="relative h-full w-[68%] overflow-hidden rounded-full bg-gradient-to-r from-brand-blue via-[#5B6FE3] to-brand-teal">
            <div className="absolute inset-0 animate-[shimmer_2.4s_linear_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
        </div>

        {/* slab labels */}
        <div className="mt-2 flex justify-between text-[8.5px] font-bold uppercase tracking-wider text-white/50">
          <span>Bronze</span>
          <span>Silver</span>
          <span className="text-brand-teal">● You · Gold</span>
          <span>Platinum</span>
        </div>

        {/* metrics */}
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <IncentiveStat value="₹68L" label="Earned YTD" tone="teal" />
          <IncentiveStat value="2.1×" label="vs target" tone="blue" />
          <IncentiveStat value="48" label="Active distrs." tone="white" />
        </div>
      </div>

      {/* mini leaderboard */}
      <div className="relative mt-3 rounded-2xl bg-white/5 p-3 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-white/70">
            Leaderboard · Top 3
          </div>
          <span className="text-[9px] font-medium text-white/45">
            Auto-credited
          </span>
        </div>
        <div className="mt-2 flex flex-col gap-1.5">
          <LeaderRow rank={1} name="Pune Distributor" points="14,820" tone="gold" />
          <LeaderRow rank={2} name="Jaipur Distributor" points="11,460" tone="silver" />
          <LeaderRow rank={3} name="Indore Distributor" points="9,840" tone="bronze" />
        </div>
      </div>
    </div>
  );
}

function IncentiveStat({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone: "teal" | "blue" | "white";
}) {
  const fg =
    tone === "teal"
      ? "text-brand-teal"
      : tone === "blue"
      ? "text-[#7DA0FF]"
      : "text-white";
  return (
    <div className="text-center">
      <div className={`text-[15px] font-extrabold tracking-[-0.02em] md:text-[17px] ${fg}`}>
        {value}
      </div>
      <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/55">
        {label}
      </div>
    </div>
  );
}

function LeaderRow({
  rank,
  name,
  points,
  tone,
}: {
  rank: number;
  name: string;
  points: string;
  tone: "gold" | "silver" | "bronze";
}) {
  const medal =
    tone === "gold"
      ? "bg-[#F4C430] text-[#5C3A00]"
      : tone === "silver"
      ? "bg-[#D8DEE7] text-[#3A4156]"
      : "bg-[#CD7F32] text-white";
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/5 px-2 py-1.5">
      <span
        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md text-[9.5px] font-extrabold ${medal}`}
      >
        {rank}
      </span>
      <span className="flex-1 text-[10.5px] font-bold">{name}</span>
      <span className="text-[10px] font-extrabold text-brand-teal">
        {points} pts
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * 5. App + Admin duality (footer card)
 * ---------------------------------------------------------------- */
function AppAdminDualityCard() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_22px_50px_-15px_rgba(8,15,46,0.18)] md:p-7">
      <div className="grid items-center gap-6 md:grid-cols-[1.2fr_2fr]">
        {/* tagline */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider text-brand-blue">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M3 12l4 4 14-14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            One platform · two surfaces
          </span>
          <h3 className="mt-2 text-[16px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[18px]">
            Built on Ezupp ERP — every distributor gets an{" "}
            <span className="grad-text">app</span>, every business gets an{" "}
            <span className="grad-text">admin console</span>.
          </h3>
          <p className="mt-2 text-[12px] leading-[1.6] text-brand-gray md:text-[13px]">
            The same data — orders, pricing, schemes, plants — flows both ways.
            No syncing, no spreadsheets, no second tool.
          </p>
        </div>

        {/* device split */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {/* Distributor App tile */}
          <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-brand-light-gray to-white p-4">
            <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-brand-blue">
              Distributor App
            </div>
            <div className="mt-1 text-[12px] font-extrabold text-brand-navy md:text-[13px]">
              Place orders · scheme tracker · ledger
            </div>
            {/* mini phone */}
            <div className="mx-auto mt-3 aspect-[9/19] w-full max-w-[88px] rounded-[14px] bg-[#0E1638] p-[3px]">
              <div className="h-full w-full rounded-[11px] bg-gradient-to-b from-[#F5F8FF] to-white p-1.5">
                <div className="h-1 w-6 rounded-full bg-[#0E1638]/80" />
                <div className="mt-1 rounded-md bg-brand-blue/10 px-1 py-0.5 text-[6.5px] font-extrabold text-brand-blue">
                  ₹1.84L
                </div>
                <div className="mt-1 space-y-0.5">
                  <div className="h-1.5 w-full rounded bg-brand-light-gray" />
                  <div className="h-1.5 w-3/4 rounded bg-brand-light-gray" />
                  <div className="h-1.5 w-2/3 rounded bg-brand-light-gray" />
                </div>
                <div className="mt-1 rounded-md bg-brand-teal/15 px-1 py-0.5 text-[6.5px] font-extrabold text-brand-teal-dark">
                  + Order
                </div>
              </div>
            </div>
          </div>

          {/* Admin Console tile */}
          <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-[#0E1638] to-[#13225C] p-4 text-white">
            <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-brand-teal">
              Admin Console
            </div>
            <div className="mt-1 text-[12px] font-extrabold md:text-[13px]">
              Master data · pricing · approvals · analytics
            </div>
            {/* mini browser */}
            <div className="mt-3 overflow-hidden rounded-md bg-[#0A1130] ring-1 ring-white/10">
              <div className="flex items-center gap-1 bg-[#13225C] px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5C72]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFB547]" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              </div>
              <div className="flex gap-1.5 p-2">
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-full rounded bg-white/15" />
                  <div className="h-1.5 w-2/3 rounded bg-white/10" />
                  <div className="mt-1 grid grid-cols-3 gap-0.5">
                    <div className="h-3 rounded bg-brand-blue/40" />
                    <div className="h-3 rounded bg-brand-teal/40" />
                    <div className="h-3 rounded bg-[#A48BFF]/50" />
                  </div>
                  <div className="h-1.5 w-3/4 rounded bg-white/10" />
                  <div className="h-1.5 w-1/2 rounded bg-white/10" />
                </div>
                <div className="w-1/3 space-y-0.5 rounded bg-white/5 p-1">
                  <div className="h-1 w-full rounded bg-white/20" />
                  <div className="h-1 w-3/4 rounded bg-white/10" />
                  <div className="h-1 w-2/3 rounded bg-white/10" />
                  <div className="h-3 w-full rounded bg-brand-teal/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
