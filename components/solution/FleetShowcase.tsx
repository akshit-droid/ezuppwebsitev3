"use client";

import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

/**
 * Rich product showcase for /solutions/fleet — recreates the "live tracking +
 * route optimisation + today's performance" mockup as native JSX/SVG so it
 * stays crisp at any DPR, is fully responsive on mobile, and themed to the
 * Ezupp palette without shipping a heavy raster.
 *
 * On desktop: phone on the left, two stacked dashboard cards on the right.
 * On mobile: phone centred at the top, cards stacked below.
 */
export function FleetShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-24">
      {/* soft brand wash behind the showcase */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[80%] -translate-y-1/2 bg-gradient-to-b from-brand-blue/[0.04] via-brand-teal/[0.04] to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-0 h-80 w-80 rounded-full bg-brand-teal/10 blur-[90px]" />

      <Container className="relative px-5 md:px-16">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow>Live · in your hand</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy md:mt-5">
            One screen for the rep,{" "}
            <span className="grad-text">one dashboard</span> for the manager.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] leading-[1.7] text-brand-gray md:mt-5 md:text-[16px]">
            Reps see their optimised beat live. Managers watch the whole fleet
            move in real-time — with route savings and performance updating as
            the day unfolds.
          </p>
        </div>

        {/* main layout — phone + cards */}
        <div className="reveal d2 mt-10 grid items-center gap-8 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 lg:gap-14">
          {/* PHONE */}
          <div className="relative mx-auto w-full max-w-[300px] md:max-w-none">
            <PhoneMockup />
            {/* soft floor reflection */}
            <div className="pointer-events-none mx-auto mt-2 h-6 w-[70%] rounded-full bg-brand-navy/10 blur-2xl" />
          </div>

          {/* CARDS — stacked on the right on desktop, stacked below on mobile */}
          <div className="flex flex-col gap-4 md:gap-5">
            <RouteOptimisationCard />
            <PerformanceCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Phone mockup ---------------- */
function PhoneMockup() {
  return (
    <div className="relative mx-auto aspect-[9/19] w-full max-w-[280px] rounded-[36px] bg-[#0E1638] p-[6px] shadow-[0_28px_60px_-15px_rgba(8,15,46,0.45)]">
      {/* notch */}
      <div className="absolute left-1/2 top-1.5 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#0E1638]" />
      {/* speaker dot */}
      <div className="absolute left-1/2 top-3 z-20 h-1 w-10 -translate-x-1/2 rounded-full bg-[#1A2456]" />

      {/* screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-gradient-to-b from-[#F5F8FF] to-white">
        {/* status bar */}
        <div className="flex items-center justify-between px-5 pt-4 text-[10px] font-bold text-brand-navy">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="inline-block h-1 w-1 rounded-full bg-brand-navy" />
            <span className="inline-block h-1 w-1 rounded-full bg-brand-navy" />
            <span className="inline-block h-1 w-1 rounded-full bg-brand-navy" />
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <rect x="0" y="0" width="11" height="6" rx="1.5" stroke="currentColor" strokeWidth="1" />
              <rect x="1.5" y="1.5" width="6.5" height="3" rx="0.5" fill="currentColor" />
              <rect x="12" y="2" width="1.5" height="3" rx="0.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* header */}
        <div className="px-4 pt-3">
          <div className="flex items-center gap-1.5 text-[12px] font-extrabold text-brand-teal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-brand-teal" />
            Live tracking
          </div>
          <div className="text-[10px] font-medium text-brand-gray">
            On the move
          </div>
        </div>

        {/* map */}
        <div className="relative mx-3 mt-3 h-[58%] overflow-hidden rounded-2xl bg-[#EEF2FB]">
          <svg viewBox="0 0 280 360" className="absolute inset-0 h-full w-full">
            {/* grid streets */}
            <g stroke="#D6DEEF" strokeWidth="6" strokeLinecap="round">
              <path d="M-10 70 Q 60 75 130 70 T 290 80" fill="none" />
              <path d="M-10 150 Q 60 155 130 150 T 290 160" fill="none" />
              <path d="M-10 230 Q 60 235 130 230 T 290 240" fill="none" />
              <path d="M-10 310 Q 60 315 130 310 T 290 320" fill="none" />
              <path d="M70 -10 Q 75 90 70 180 T 80 380" fill="none" />
              <path d="M180 -10 Q 185 90 180 180 T 190 380" fill="none" />
            </g>

            {/* park / blocks */}
            <rect x="20" y="20" width="40" height="40" rx="6" fill="#DCE5F5" opacity="0.7" />
            <rect x="200" y="200" width="60" height="40" rx="6" fill="#DCE5F5" opacity="0.7" />
            <rect x="100" y="170" width="60" height="40" rx="6" fill="#D8EFE5" opacity="0.85" />

            {/* original route — dotted blue */}
            <path
              d="M50 320 L 70 250 L 70 200 L 130 180 L 130 110 L 200 80 L 230 50"
              stroke="#2B4EFF"
              strokeWidth="3"
              strokeDasharray="2 6"
              fill="none"
              strokeLinecap="round"
            />

            {/* optimised route — solid teal */}
            <path
              d="M50 320 Q 90 290 70 230 Q 60 170 130 170 Q 200 170 200 110 Q 200 70 230 50"
              stroke="#2ED8A0"
              strokeWidth="3.6"
              fill="none"
              strokeLinecap="round"
            />

            {/* origin pin */}
            <g transform="translate(50 320)">
              <circle r="9" fill="#2ED8A0" fillOpacity="0.25" />
              <circle r="5" fill="#2ED8A0" />
            </g>

            {/* destination pin */}
            <g transform="translate(230 50)">
              <circle r="13" fill="#2B4EFF" fillOpacity="0.18" />
              <path d="M0 -12 C 7 -12 11 -7 11 -2 C 11 6 0 16 0 16 C 0 16 -11 6 -11 -2 C -11 -7 -7 -12 0 -12 Z" fill="#2B4EFF" />
              <circle cy="-2" r="4" fill="#fff" />
            </g>

            {/* moving rep arrow */}
            <g transform="translate(135 175) rotate(-25)">
              <circle r="14" fill="#fff" />
              <circle r="14" fill="#2B4EFF" fillOpacity="0.18" />
              <path d="M0 -7 L 6 6 L 0 3 L -6 6 Z" fill="#2B4EFF" />
            </g>
          </svg>

          {/* legend */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2 rounded-lg bg-white/95 px-2.5 py-1.5 text-[9px] font-bold text-brand-navy shadow-sm">
            <span className="flex items-center gap-1">
              <span className="inline-block h-[2px] w-3 rounded bg-brand-teal" />
              Optimised
            </span>
            <span className="flex items-center gap-1 text-brand-navy/55">
              <span
                className="inline-block h-[2px] w-3 rounded"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #2B4EFF 0 2px, transparent 2px 5px)",
                }}
              />
              Original
            </span>
          </div>
        </div>

        {/* agent card */}
        <div className="mx-3 mt-3 rounded-2xl bg-white p-3 shadow-[0_8px_24px_-10px_rgba(8,15,46,0.18)]">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue text-[14px] text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 13l2-5h14l2 5M5 13v5a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-5M5 13h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8" cy="16" r="1.4" fill="currentColor" />
                <circle cx="16" cy="16" r="1.4" fill="currentColor" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[11px] font-extrabold text-brand-navy">
                Agent Alex
              </div>
              <div className="text-[9.5px] font-medium text-brand-gray">
                Arriving in 14 min
              </div>
            </div>
            <div className="text-[9.5px] font-bold text-brand-teal">94%</div>
          </div>
          {/* ETA progress */}
          <div className="mt-2 h-1 w-full rounded-full bg-brand-light-gray">
            <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-brand-teal to-brand-blue" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Route optimisation card ---------------- */
function RouteOptimisationCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-black/5 bg-white p-5 shadow-[0_18px_42px_-12px_rgba(8,15,46,0.18)] md:p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-brand-soft">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 19c0-3 2-5 5-5s5 2 5 5M19 5L5 19"
              stroke="#2B4EFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="19" cy="5" r="3" stroke="#2B4EFF" strokeWidth="1.8" />
            <circle cx="5" cy="19" r="3" stroke="#2B4EFF" strokeWidth="1.8" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-[15px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[16px]">
            Route optimisation
          </h3>
          <p className="mt-1 text-[12px] leading-[1.55] text-brand-gray md:text-[13px]">
            AI calculated the most efficient route with fewer stops.
          </p>
        </div>
      </div>

      {/* badges */}
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <div className="flex items-center gap-2 rounded-xl border border-brand-teal/25 bg-brand-teal/5 px-3 py-2.5">
          <DownArrow />
          <div>
            <div className="text-[16px] font-extrabold leading-none text-brand-navy md:text-[18px]">
              18%
            </div>
            <div className="mt-0.5 text-[10px] font-semibold text-brand-gray">
              Distance saved
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-brand-teal/25 bg-brand-teal/5 px-3 py-2.5">
          <DownArrow />
          <div>
            <div className="text-[16px] font-extrabold leading-none text-brand-navy md:text-[18px]">
              24 min
            </div>
            <div className="mt-0.5 text-[10px] font-semibold text-brand-gray">
              Time saved
            </div>
          </div>
        </div>
      </div>

      {/* chart */}
      <div className="mt-4 h-[88px] w-full">
        <svg viewBox="0 0 360 88" className="h-full w-full">
          <defs>
            <linearGradient id="optGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#2ED8A0" stopOpacity="0.28" />
              <stop offset="1" stopColor="#2ED8A0" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* baseline grid */}
          <g stroke="#EEF2FB" strokeWidth="1">
            <line x1="0" y1="22" x2="360" y2="22" />
            <line x1="0" y1="44" x2="360" y2="44" />
            <line x1="0" y1="66" x2="360" y2="66" />
          </g>

          {/* original route — dashed grey */}
          <path
            d="M5 50 C 40 30, 80 70, 120 50 S 200 22, 240 38 S 320 70, 355 56"
            stroke="#9AA4BF"
            strokeWidth="2"
            strokeDasharray="3 4"
            fill="none"
            strokeLinecap="round"
          />
          {/* optimised — solid teal with area */}
          <path
            d="M5 60 C 50 42, 110 50, 160 36 S 240 18, 290 22 S 340 14, 355 14 L 355 88 L 5 88 Z"
            fill="url(#optGrad)"
          />
          <path
            d="M5 60 C 50 42, 110 50, 160 36 S 240 18, 290 22 S 340 14, 355 14"
            stroke="#22B085"
            strokeWidth="2.6"
            fill="none"
            strokeLinecap="round"
          />
          {/* end marker */}
          <circle cx="355" cy="14" r="5" fill="#22B085" />
          <circle cx="355" cy="14" r="9" fill="#22B085" fillOpacity="0.18" />
        </svg>
      </div>

      {/* legend */}
      <div className="mt-2 flex items-center gap-4 text-[10px] font-semibold">
        <span className="flex items-center gap-1.5 text-brand-navy">
          <span className="inline-block h-[2px] w-4 rounded bg-brand-teal-dark" />
          Optimised route
        </span>
        <span className="flex items-center gap-1.5 text-brand-gray">
          <span
            className="inline-block h-[2px] w-4 rounded"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #9AA4BF 0 3px, transparent 3px 6px)",
            }}
          />
          Original route
        </span>
      </div>
    </div>
  );
}

function DownArrow() {
  return (
    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal-dark">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 4v15m0 0l-6-6m6 6l6-6"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ---------------- Today's performance card ---------------- */
function PerformanceCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-black/5 bg-white p-5 shadow-[0_18px_42px_-12px_rgba(8,15,46,0.18)] md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[16px]">
          Today&apos;s performance
        </h3>
        <span className="rounded-full bg-brand-teal/15 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-brand-teal-dark">
          Live
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        <PerfTile
          color="blue"
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12a9 9 0 1118 0M12 12l4-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="1.6" fill="currentColor" />
            </svg>
          }
          value="96.4%"
          label="On-time"
        />
        <PerfTile
          color="teal"
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          }
          value="4,280 km"
          label="Distance covered"
        />
        <PerfTile
          color="violet"
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M8 12l3 3 5-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          value="24 / 28"
          label="Agents live"
        />
      </div>
    </div>
  );
}

function PerfTile({
  color,
  icon,
  value,
  label,
}: {
  color: "blue" | "teal" | "violet";
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  const swatch =
    color === "blue"
      ? { bg: "bg-brand-blue/10", fg: "text-brand-blue", val: "text-brand-blue" }
      : color === "teal"
      ? {
          bg: "bg-brand-teal/15",
          fg: "text-brand-teal-dark",
          val: "text-brand-teal-dark",
        }
      : {
          bg: "bg-[#A48BFF]/15",
          fg: "text-[#7A5BFF]",
          val: "text-[#7A5BFF]",
        };
  return (
    <div className="rounded-xl border border-black/5 bg-white px-2.5 py-3 text-center">
      <div
        className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full ${swatch.bg} ${swatch.fg}`}
      >
        {icon}
      </div>
      <div
        className={`mt-2 text-[15px] font-extrabold leading-none tracking-[-0.02em] text-brand-navy md:text-[16px]`}
      >
        {value}
      </div>
      <div className={`mt-1 text-[10px] font-semibold ${swatch.val}`}>
        {label}
      </div>
    </div>
  );
}
