"use client";

import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

/**
 * Rich product showcase for /solutions/ai.
 *
 * Six panels arranged across three rows — one per AI capability:
 *   1. BANT+ Lead Qualification          (BantQualifierCard)
 *   2. Call & Voice Analysis             (CallAnalysisCard)
 *   3. Intelligent Lead Routing          (RoutingCard)
 *   4. Appointment Route Optimisation    (RouteOptimisationCard)
 *   5. Predictive Pipeline               (PredictivePipelineCard)
 *   6. ERP Anomaly Detection             (AnomalyDetectionCard)
 *
 * All native JSX/SVG so it stays crisp at any DPR.
 */
export function AIShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-24">
      {/* atmospheric brand wash */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[80%] -translate-y-1/2 bg-gradient-to-b from-brand-blue/[0.05] via-brand-teal/[0.04] to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-0 h-80 w-80 rounded-full bg-brand-teal/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-60" />

      <Container className="relative px-5 md:px-16">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow>How the AI shows up</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy md:mt-5">
            Six places it quietly{" "}
            <span className="grad-text">does the work for you.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] leading-[1.7] text-brand-gray md:mt-5 md:text-[16px]">
            Every lead scored, every call analysed, every route optimised.
            Same UI for your team — a smarter brain underneath.
          </p>
        </div>

        {/* ROW 1 — qualification + call analysis */}
        <div className="reveal d2 mt-10 grid items-stretch gap-5 md:mt-14 md:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <BantQualifierCard />
          </div>
          <div className="lg:col-span-5">
            <CallAnalysisCard />
          </div>
        </div>

        {/* ROW 2 — routing + route optimisation */}
        <div className="reveal d2 mt-5 grid items-stretch gap-5 md:mt-6 md:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <RoutingCard />
          </div>
          <div className="lg:col-span-7">
            <RouteOptimisationCard />
          </div>
        </div>

        {/* ROW 3 — predictive pipeline + anomaly detection */}
        <div className="reveal d3 mt-5 grid items-stretch gap-5 md:mt-6 md:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <PredictivePipelineCard />
          </div>
          <div className="lg:col-span-5">
            <AnomalyDetectionCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * Shared chrome
 * ---------------------------------------------------------------- */
function CardShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "relative h-full overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_30px_70px_-30px_rgba(8,15,46,0.18)] " +
        (className ?? "")
      }
    >
      {children}
    </div>
  );
}

function CardHeader({
  eyebrow,
  title,
  accent = "blue",
}: {
  eyebrow: string;
  title: string;
  accent?: "blue" | "teal" | "violet";
}) {
  const dot =
    accent === "teal"
      ? "bg-brand-teal"
      : accent === "violet"
        ? "bg-[#7C5CFF]"
        : "bg-brand-blue";
  return (
    <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
      <div className="flex items-center gap-2.5">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        <span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-brand-gray">
          {eyebrow}
        </span>
      </div>
      <span className="text-[12px] font-extrabold tracking-tight text-brand-navy">
        {title}
      </span>
    </div>
  );
}

function LiveDot({ color = "#2ED8A0" }: { color?: string }) {
  return (
    <span className="relative inline-flex h-2 w-2">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
        style={{ background: color }}
      />
      <span
        className="relative inline-flex h-2 w-2 rounded-full"
        style={{ background: color }}
      />
    </span>
  );
}

/* ---------------------------------------------------------------- *
 * 1) BANT+ Lead Qualification
 * ---------------------------------------------------------------- */
function BantQualifierCard() {
  type ScoreItem = { label: string; value: number; color: string };
  const scores: ScoreItem[] = [
    { label: "Budget", value: 88, color: "#2B4EFF" },
    { label: "Authority", value: 92, color: "#2ED8A0" },
    { label: "Need", value: 76, color: "#7C5CFF" },
    { label: "Timeline", value: 81, color: "#F59E0B" },
  ];
  const composite = Math.round(
    scores.reduce((s, x) => s + x.value, 0) / scores.length,
  );

  return (
    <CardShell>
      <CardHeader
        eyebrow="Lead Qualification · BANT+"
        title="Inbound · 24h"
      />

      <div className="grid gap-5 p-5 md:grid-cols-12 md:p-6">
        {/* Left — lead profile + composite score */}
        <div className="md:col-span-5">
          <div className="rounded-2xl border border-black/8 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand-soft text-[18px]">
                🏢
              </div>
              <div>
                <div className="text-[13px] font-extrabold text-brand-navy">
                  Vector Foods Pvt Ltd
                </div>
                <div className="text-[11px] text-brand-gray">
                  FMCG · 320 employees · Pune
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-gradient-brand p-3 text-white">
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/80">
                  Composite score
                </div>
                <div className="mt-0.5 text-[28px] font-extrabold leading-none tracking-[-0.02em]">
                  {composite}
                  <span className="ml-1 text-[12px] font-bold text-white/70">
                    / 100
                  </span>
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-[20px]">
                🎯
              </div>
            </div>

            {/* Enrichment chips */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Verified Domain", "₹40Cr revenue", "Series-A", "8+ plants"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/8 bg-white px-2 py-0.5 text-[10px] font-bold text-brand-navy"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Right — BANT score bars */}
        <div className="md:col-span-7">
          <div className="text-[11px] font-extrabold uppercase tracking-[.15em] text-brand-gray">
            Signal breakdown
          </div>
          <div className="mt-3 space-y-3">
            {scores.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between text-[12px]">
                  <span className="font-bold text-brand-navy">{s.label}</span>
                  <span className="font-extrabold text-brand-navy">
                    {s.value}
                  </span>
                </div>
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-brand-light-gray">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.value}%`,
                      background: `linear-gradient(90deg, ${s.color}, ${s.color}cc)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Junk filter strip */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <FilterStat label="Inbound" value="248" tone="navy" />
            <FilterStat label="Junk filtered" value="93" tone="gray" />
            <FilterStat label="To SDR" value="155" tone="teal" />
          </div>
        </div>
      </div>
    </CardShell>
  );
}

function FilterStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "navy" | "gray" | "teal";
}) {
  const valColor =
    tone === "teal"
      ? "text-brand-teal"
      : tone === "gray"
        ? "text-brand-gray"
        : "text-brand-navy";
  return (
    <div className="rounded-xl border border-black/8 bg-brand-light-gray/60 p-2.5">
      <div className="text-[10px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
        {label}
      </div>
      <div className={`mt-0.5 text-[18px] font-extrabold ${valColor}`}>
        {value}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * 2) Call & Voice Analysis
 * ---------------------------------------------------------------- */
function CallAnalysisCard() {
  type Sentiment = "pos" | "neu" | "neg";
  const lines: { who: "rep" | "cust"; text: string; tag?: string; s: Sentiment }[] =
    [
      {
        who: "rep",
        text: "Hi Anil, Priya here — saw you signed up for a demo.",
        s: "pos",
      },
      {
        who: "cust",
        text: "Yes — but honestly we already use Salesforce.",
        tag: "Objection",
        s: "neg",
      },
      {
        who: "rep",
        text: "Got it. Ezupp sits beside it, not on top — runs your field ops.",
        s: "neu",
      },
      {
        who: "cust",
        text: "If implementation is under 4 weeks, we can talk.",
        tag: "Buy signal",
        s: "pos",
      },
    ];

  return (
    <CardShell>
      <CardHeader
        eyebrow="Call & Voice Analysis"
        title="04:21 · transcribed"
        accent="violet"
      />

      <div className="flex h-[calc(100%-49px)] flex-col p-5 md:p-6">
        {/* waveform + meter */}
        <div className="rounded-2xl border border-black/8 bg-brand-navy p-3 text-white">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-[12px]">
              🎙️
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                {Array.from({ length: 28 }).map((_, i) => {
                  const h = 4 + ((i * 13) % 18);
                  return (
                    <span
                      key={i}
                      className="block w-[3px] rounded-full"
                      style={{
                        height: `${h}px`,
                        background:
                          i < 18
                            ? "linear-gradient(180deg,#2ED8A0,#5B6FE3)"
                            : "rgba(255,255,255,0.25)",
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <span className="text-[10px] font-bold tracking-tight text-white/70">
              EN-IN
            </span>
          </div>
        </div>

        {/* transcript */}
        <div className="mt-3 space-y-2">
          {lines.map((l, i) => (
            <div
              key={i}
              className={
                "flex gap-2 " + (l.who === "rep" ? "" : "flex-row-reverse")
              }
            >
              <div
                className={
                  "max-w-[85%] rounded-2xl px-3 py-2 text-[12px] leading-[1.45] " +
                  (l.who === "rep"
                    ? "bg-brand-light-gray text-brand-navy"
                    : "bg-brand-blue/10 text-brand-navy")
                }
              >
                {l.text}
                {l.tag && (
                  <span
                    className={
                      "ml-2 rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[.1em] " +
                      (l.s === "neg"
                        ? "bg-rose-500/15 text-rose-600"
                        : "bg-brand-teal/15 text-brand-teal-dark")
                    }
                  >
                    {l.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* AI summary */}
        <div className="mt-auto pt-3">
          <div className="rounded-2xl bg-gradient-brand-soft p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-blue">
                AI summary
              </span>
              <span className="rounded-full bg-white px-1.5 py-0.5 text-[9px] font-extrabold text-brand-navy">
                Sentiment · positive
              </span>
            </div>
            <div className="mt-1 text-[12px] font-bold leading-[1.45] text-brand-navy">
              Next: send 4-week implementation plan + ROI vs Salesforce.
            </div>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

/* ---------------------------------------------------------------- *
 * 3) Intelligent Lead Routing
 * ---------------------------------------------------------------- */
function RoutingCard() {
  const reps = [
    {
      name: "Rohan",
      city: "Mumbai",
      load: 9,
      close: 38,
      tags: ["West", "FMCG"],
      match: 92,
      pick: true,
    },
    {
      name: "Karan",
      city: "Bangalore",
      load: 18,
      close: 22,
      tags: ["South", "SaaS"],
      match: 64,
    },
    {
      name: "Sara",
      city: "Delhi",
      load: 12,
      close: 31,
      tags: ["North", "Retail"],
      match: 71,
    },
  ];

  return (
    <CardShell>
      <CardHeader eyebrow="Intelligent Lead Routing" title="Decision · live" />

      <div className="p-5 md:p-6">
        {/* incoming lead pill */}
        <div className="flex items-center justify-between rounded-2xl border border-black/8 bg-brand-light-gray/60 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[13px]">
              🎯
            </span>
            <div className="leading-tight">
              <div className="text-[12px] font-extrabold text-brand-navy">
                Lead · Vector Foods · West · FMCG
              </div>
              <div className="text-[10px] text-brand-gray">Inbound · 02:13</div>
            </div>
          </div>
          <span className="text-[10px] font-extrabold text-brand-blue">
            Routing…
          </span>
        </div>

        {/* AI hub + connectors */}
        <div className="relative mt-4 overflow-hidden rounded-2xl bg-white p-4">
          <svg
            viewBox="0 0 320 70"
            className="absolute inset-x-0 top-3 h-[70px] w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            {[40, 160, 280].map((x, i) => (
              <path
                key={i}
                d={`M160,4 C160,30 ${x},20 ${x},58`}
                stroke={i === 0 ? "#2ED8A0" : "rgba(43,78,255,0.25)"}
                strokeWidth="1.4"
                fill="none"
                strokeDasharray={i === 0 ? "0" : "4 4"}
              />
            ))}
            <circle cx="160" cy="6" r="4" fill="#2B4EFF" />
            {[40, 160, 280].map((x, i) => (
              <circle key={i} cx={x} cy="58" r="3" fill={i === 0 ? "#2ED8A0" : "#5B6FE3"} />
            ))}
          </svg>
          <div className="relative z-10 flex justify-center">
            <div className="rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.15em] text-white shadow-[0_8px_22px_-6px_rgba(43,78,255,0.5)]">
              Ezupp AI router
            </div>
          </div>
          <div className="relative z-10 mt-12 grid grid-cols-3 gap-2">
            {reps.map((r) => (
              <div
                key={r.name}
                className={
                  "rounded-xl border p-2 text-center " +
                  (r.pick
                    ? "border-brand-teal/50 bg-brand-teal/[0.07]"
                    : "border-black/8 bg-brand-light-gray/40")
                }
              >
                <div
                  className={
                    "mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-extrabold " +
                    (r.pick
                      ? "bg-brand-teal text-white"
                      : "bg-white text-brand-navy")
                  }
                >
                  {r.name[0]}
                </div>
                <div className="mt-1 text-[11px] font-extrabold text-brand-navy">
                  {r.name}
                </div>
                <div className="text-[9px] text-brand-gray">{r.city}</div>
                <div className="mt-1 text-[10px] font-bold">
                  <span
                    className={r.pick ? "text-brand-teal-dark" : "text-brand-gray"}
                  >
                    {r.match}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* decision factors */}
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[
            { label: "Territory", val: "West ✓" },
            { label: "Load", val: "9 open" },
            { label: "Close-rate", val: "38%" },
          ].map((d) => (
            <div
              key={d.label}
              className="rounded-lg border border-black/8 bg-white px-2 py-1.5"
            >
              <div className="text-[9px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
                {d.label}
              </div>
              <div className="text-[11px] font-extrabold text-brand-navy">
                {d.val}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl bg-brand-teal/10 px-3 py-2">
          <span className="text-[11px] font-extrabold text-brand-teal-dark">
            ✓ Assigned to Rohan
          </span>
          <span className="text-[10px] font-bold text-brand-gray">SLA 9m</span>
        </div>
      </div>
    </CardShell>
  );
}

/* ---------------------------------------------------------------- *
 * 4) Appointment Route Optimisation
 * ---------------------------------------------------------------- */
function RouteOptimisationCard() {
  // Stops in the optimised order
  const stops = [
    { x: 50, y: 80, label: "10:30", priority: "P1" },
    { x: 130, y: 50, label: "11:45", priority: "P0" },
    { x: 215, y: 90, label: "13:15", priority: "P1" },
    { x: 290, y: 60, label: "14:30", priority: "P2" },
    { x: 360, y: 110, label: "15:50", priority: "P1" },
    { x: 420, y: 60, label: "17:00", priority: "P0" },
  ];
  // Build smooth path through stops
  const path = stops
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
    .join(" ");

  return (
    <CardShell>
      <CardHeader
        eyebrow="Appointment Route Optimisation"
        title="Rohan · Tue 21 May"
        accent="teal"
      />

      <div className="flex h-[calc(100%-49px)] flex-col p-5 md:p-6">
        {/* Map-like canvas */}
        <div className="relative overflow-hidden rounded-2xl border border-black/8 bg-[radial-gradient(circle_at_30%_20%,#EAF1FF,#F4F7FE_45%,#F7F8FC_75%)] p-3">
          <svg
            viewBox="0 0 460 170"
            className="h-[210px] w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* faint road grid */}
            <g stroke="rgba(43,78,255,0.08)" strokeWidth="1">
              <path d="M0 30 H460" />
              <path d="M0 70 H460" />
              <path d="M0 110 H460" />
              <path d="M0 150 H460" />
              <path d="M70 0 V170" />
              <path d="M180 0 V170" />
              <path d="M300 0 V170" />
              <path d="M400 0 V170" />
            </g>

            {/* old route (faded) */}
            <path
              d="M50,80 L290,60 L130,50 L420,60 L215,90 L360,110"
              stroke="rgba(245,158,11,0.45)"
              strokeWidth="1.4"
              strokeDasharray="4 4"
              fill="none"
            />

            {/* optimised route */}
            <path
              d={path}
              stroke="url(#routeGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2B4EFF" />
                <stop offset="100%" stopColor="#2ED8A0" />
              </linearGradient>
            </defs>

            {/* moving pulse */}
            <circle r="4" fill="#2ED8A0">
              <animateMotion dur="6s" repeatCount="indefinite" path={path} />
            </circle>

            {/* stops */}
            {stops.map((s, i) => (
              <g key={i}>
                <circle
                  cx={s.x}
                  cy={s.y}
                  r="9"
                  fill="white"
                  stroke="#2B4EFF"
                  strokeWidth="2"
                />
                <text
                  x={s.x}
                  y={s.y + 3}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="800"
                  fill="#080F2E"
                >
                  {i + 1}
                </text>
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="absolute left-3 top-3 flex items-center gap-3 rounded-full bg-white px-2.5 py-1 shadow-[0_4px_14px_-4px_rgba(8,15,46,0.15)]">
            <span className="flex items-center gap-1 text-[10px] font-bold text-brand-navy">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> Old
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-brand-navy">
              <span className="h-2 w-2 rounded-full bg-brand-teal" /> Optimised
            </span>
          </div>

          <div className="absolute right-3 top-3 rounded-full bg-brand-navy px-2.5 py-1 text-[10px] font-extrabold text-white">
            6 meetings
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <RouteStat label="Travel saved" value="−42 km" tone="teal" />
          <RouteStat label="Time saved" value="1h 15m" tone="blue" />
          <RouteStat label="Meetings / day" value="2.8×" tone="navy" />
        </div>
      </div>
    </CardShell>
  );
}

function RouteStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "navy" | "blue" | "teal";
}) {
  const cls =
    tone === "teal"
      ? "text-brand-teal-dark"
      : tone === "blue"
        ? "text-brand-blue"
        : "text-brand-navy";
  return (
    <div className="rounded-xl border border-black/8 bg-white p-2.5">
      <div className="text-[10px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
        {label}
      </div>
      <div className={`mt-0.5 text-[16px] font-extrabold ${cls}`}>{value}</div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * 5) Predictive Pipeline
 * ---------------------------------------------------------------- */
function PredictivePipelineCard() {
  type Trend = "up" | "flat" | "down";
  const deals: {
    name: string;
    value: string;
    stage: string;
    prob: number;
    trend: Trend;
    risk: "low" | "med" | "high";
  }[] = [
    {
      name: "Vector Foods",
      value: "₹84L",
      stage: "Proposal",
      prob: 78,
      trend: "up",
      risk: "low",
    },
    {
      name: "Brightline Retail",
      value: "₹52L",
      stage: "Negotiation",
      prob: 64,
      trend: "flat",
      risk: "med",
    },
    {
      name: "Helix Pharma",
      value: "₹1.2Cr",
      stage: "Discovery",
      prob: 41,
      trend: "down",
      risk: "high",
    },
    {
      name: "Northstar Auto",
      value: "₹38L",
      stage: "Won prep",
      prob: 92,
      trend: "up",
      risk: "low",
    },
  ];

  return (
    <CardShell>
      <CardHeader eyebrow="Predictive Pipeline" title="Q2 forecast" />
      <div className="grid gap-5 p-5 md:grid-cols-12 md:p-6">
        {/* Forecast hero */}
        <div className="md:col-span-4">
          <div className="rounded-2xl bg-brand-navy p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/70">
                Forecast
              </span>
              <LiveDot />
            </div>
            <div className="mt-2 text-[28px] font-extrabold leading-none tracking-[-0.02em]">
              ₹3.84Cr
            </div>
            <div className="mt-1 text-[11px] text-white/70">
              vs ₹4.10Cr target
            </div>

            {/* mini trend */}
            <svg viewBox="0 0 120 40" className="mt-3 h-10 w-full">
              <defs>
                <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2ED8A0" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2ED8A0" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,30 L20,22 L40,26 L60,16 L80,18 L100,10 L120,14 L120,40 L0,40 Z"
                fill="url(#forecastFill)"
              />
              <path
                d="M0,30 L20,22 L40,26 L60,16 L80,18 L100,10 L120,14"
                stroke="#2ED8A0"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* slip / at risk */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-center">
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[16px] font-extrabold">₹64L</div>
                <div className="text-[9px] uppercase tracking-[.12em] text-white/70">
                  Slip risk
                </div>
              </div>
              <div className="rounded-lg bg-white/10 p-2">
                <div className="text-[16px] font-extrabold">7</div>
                <div className="text-[9px] uppercase tracking-[.12em] text-white/70">
                  At-risk deals
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deal table */}
        <div className="md:col-span-8">
          <div className="text-[11px] font-extrabold uppercase tracking-[.15em] text-brand-gray">
            Top deals · AI close probability
          </div>
          <div className="mt-3 divide-y divide-black/5 rounded-2xl border border-black/8 bg-white">
            {deals.map((d) => (
              <div
                key={d.name}
                className="flex items-center justify-between gap-3 px-3 py-2.5"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-extrabold text-brand-navy">
                      {d.name}
                    </span>
                    <span className="text-[10px] text-brand-gray">{d.stage}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-brand-light-gray">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${d.prob}%`,
                        background:
                          d.risk === "high"
                            ? "linear-gradient(90deg,#F43F5E,#FB7185)"
                            : d.risk === "med"
                              ? "linear-gradient(90deg,#F59E0B,#FBBF24)"
                              : "linear-gradient(90deg,#2B4EFF,#2ED8A0)",
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendArrow t={d.trend} />
                  <span className="text-[11px] font-extrabold text-brand-navy">
                    {d.prob}%
                  </span>
                  <span className="w-12 text-right text-[12px] font-extrabold text-brand-navy">
                    {d.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardShell>
  );
}

function TrendArrow({ t }: { t: "up" | "flat" | "down" }) {
  const color =
    t === "up" ? "#22B085" : t === "down" ? "#F43F5E" : "#9AA3B8";
  const path =
    t === "up"
      ? "M3 9l4-4 3 3 5-5"
      : t === "down"
        ? "M3 5l4 4 3-3 5 5"
        : "M3 7h12";
  return (
    <svg width="18" height="14" viewBox="0 0 18 14">
      <path
        d={path}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ---------------------------------------------------------------- *
 * 6) ERP Anomaly Detection
 * ---------------------------------------------------------------- */
function AnomalyDetectionCard() {
  type Sev = "high" | "med" | "low";
  const items: { icon: string; title: string; sub: string; sev: Sev; t: string }[] =
    [
      {
        icon: "📦",
        title: "Stock variance · SKU-1098",
        sub: "Ledger 240 vs floor 187 · −22%",
        sev: "high",
        t: "2m",
      },
      {
        icon: "🧾",
        title: "Invoice outlier · INV-58221",
        sub: "₹4.2L · 3.1× vendor avg",
        sev: "med",
        t: "8m",
      },
      {
        icon: "🚚",
        title: "Dispatch delay · Plant Pune",
        sub: "Avg lead-time +18h (3-day window)",
        sev: "med",
        t: "21m",
      },
      {
        icon: "💸",
        title: "Price drift · MT North",
        sub: "Effective rate −4.6% vs rate-card",
        sev: "low",
        t: "1h",
      },
    ];

  const sevPill = (s: Sev) =>
    s === "high"
      ? "bg-rose-500/10 text-rose-600"
      : s === "med"
        ? "bg-amber-500/10 text-amber-600"
        : "bg-brand-blue/10 text-brand-blue";

  return (
    <CardShell>
      <CardHeader
        eyebrow="ERP Anomaly Detection"
        title="Live · last 24h"
        accent="violet"
      />

      <div className="flex h-[calc(100%-49px)] flex-col p-5 md:p-6">
        {/* Top stat strip */}
        <div className="grid grid-cols-3 gap-2">
          <AnomalyStat label="Scanned events" value="412k" />
          <AnomalyStat label="Flagged" value="11" tone="amber" />
          <AnomalyStat label="Auto-resolved" value="6" tone="teal" />
        </div>

        {/* Feed */}
        <div className="mt-3 space-y-2 overflow-hidden">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex items-center gap-3 rounded-xl border border-black/8 bg-white px-3 py-2"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-light-gray text-[14px]">
                {it.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[12px] font-extrabold text-brand-navy">
                  {it.title}
                </div>
                <div className="truncate text-[10px] text-brand-gray">
                  {it.sub}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span
                  className={
                    "rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[.1em] " +
                    sevPill(it.sev)
                  }
                >
                  {it.sev}
                </span>
                <span className="text-[9px] font-bold text-brand-gray">
                  {it.t}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-3 text-[10px] font-bold text-brand-gray">
          Detection runs continuously across plants, ledgers and dispatches.
        </div>
      </div>
    </CardShell>
  );
}

function AnomalyStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "teal" | "amber";
}) {
  const cls =
    tone === "teal"
      ? "text-brand-teal-dark"
      : tone === "amber"
        ? "text-amber-600"
        : "text-brand-navy";
  return (
    <div className="rounded-xl border border-black/8 bg-brand-light-gray/50 p-2.5">
      <div className="text-[9px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
        {label}
      </div>
      <div className={`mt-0.5 text-[16px] font-extrabold ${cls}`}>{value}</div>
    </div>
  );
}
