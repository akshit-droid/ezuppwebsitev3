"use client";

import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

/**
 * Rich product showcase for /solutions/crm — three panels:
 *   1. Sales Pipeline (kanban) — the lead-management surface
 *   2. In-built channels card (WhatsApp + Email + Dynamic Forms)
 *   3. Sequence flow — automation that runs across those channels
 *
 * All native JSX/SVG so it stays crisp at any DPR. Mobile-first stacking;
 * desktop puts the pipeline + channels side-by-side, sequence below.
 */
export function CrmShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-24">
      {/* atmospheric brand wash */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[80%] -translate-y-1/2 bg-gradient-to-b from-brand-blue/[0.05] via-brand-teal/[0.04] to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-0 h-80 w-80 rounded-full bg-brand-teal/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-60" />

      <Container className="relative px-5 md:px-16">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow>Pipeline · Channels · Sequences</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy md:mt-5">
            Your whole revenue motion,{" "}
            <span className="grad-text">on one canvas.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] leading-[1.7] text-brand-gray md:mt-5 md:text-[16px]">
            Pipelines that move themselves. Conversations on every channel —
            from the same record. Sequences that follow up so you don&apos;t
            have to.
          </p>
        </div>

        {/* MAIN COMPOSITION — Pipeline (large) on left, Channels card on right */}
        <div className="reveal d2 mt-10 grid items-stretch gap-5 md:mt-14 md:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <PipelineBoard />
          </div>
          <div className="lg:col-span-5">
            <ChannelsCard />
          </div>
        </div>

        {/* SEQUENCE FLOW — full width below */}
        <div className="reveal d3 mt-5 md:mt-6">
          <SequenceFlowCard />
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * Pipeline / Kanban board
 * ---------------------------------------------------------------- */
function PipelineBoard() {
  return (
    <div className="relative h-full overflow-hidden rounded-[22px] border border-black/5 bg-white p-4 shadow-[0_22px_50px_-15px_rgba(8,15,46,0.18)] md:p-6">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand-soft">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="6" height="16" rx="1.6" stroke="#2B4EFF" strokeWidth="1.7" />
              <rect x="11" y="4" width="6" height="10" rx="1.6" stroke="#2B4EFF" strokeWidth="1.7" />
              <rect x="19" y="4" width="2" height="6" rx="1" fill="#2B4EFF" />
            </svg>
          </div>
          <div>
            <div className="text-[13px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[14px]">
              Sales Pipeline · Q2
            </div>
            <div className="text-[10.5px] font-medium text-brand-gray md:text-[11px]">
              42 active deals · ₹6.8 Cr in motion
            </div>
          </div>
        </div>
        <span className="rounded-full bg-brand-teal/15 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider text-brand-teal-dark">
          Live
        </span>
      </div>

      {/* columns */}
      <div className="mt-4 grid grid-cols-3 gap-2.5 md:gap-3">
        <KanbanColumn
          title="Qualified"
          count="14"
          tone="blue"
          cards={[
            { name: "Acme Distributors", value: "₹12L", tag: "Hot", stage: 92 },
            { name: "Kite Foods", value: "₹4.5L", tag: "Warm", stage: 60 },
            { name: "Lumen Retail", value: "₹8L", tag: "Cold", stage: 25 },
          ]}
        />
        <KanbanColumn
          title="Proposal"
          count="9"
          tone="violet"
          highlight
          cards={[
            { name: "Northwind", value: "₹22L", tag: "Hot", stage: 85 },
            { name: "Bluebird Co.", value: "₹6L", tag: "Warm", stage: 55 },
          ]}
        />
        <KanbanColumn
          title="Won"
          count="11"
          tone="teal"
          cards={[
            { name: "Helio Industries", value: "₹18L", tag: "Won", stage: 100 },
            { name: "Pranav Logistics", value: "₹5.2L", tag: "Won", stage: 100 },
          ]}
        />
      </div>

      {/* stat strip */}
      <div className="mt-4 grid grid-cols-3 gap-2.5 rounded-2xl bg-gradient-brand-soft p-3 md:gap-3">
        <PipelineStat value="34%" label="Win rate" tone="blue" />
        <PipelineStat value="₹6.8 Cr" label="Open value" tone="violet" />
        <PipelineStat value="11 days" label="Avg. cycle" tone="teal" />
      </div>
    </div>
  );
}

function KanbanColumn({
  title,
  count,
  tone,
  cards,
  highlight,
}: {
  title: string;
  count: string;
  tone: "blue" | "violet" | "teal";
  cards: { name: string; value: string; tag: string; stage: number }[];
  highlight?: boolean;
}) {
  const dot =
    tone === "blue"
      ? "bg-brand-blue"
      : tone === "violet"
      ? "bg-[#7A5BFF]"
      : "bg-brand-teal";
  return (
    <div
      className={`rounded-xl border border-black/5 bg-brand-light-gray/60 p-2 md:p-2.5 ${
        highlight ? "ring-2 ring-brand-blue/15" : ""
      }`}
    >
      <div className="mb-2 flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${dot}`} />
          <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-brand-navy">
            {title}
          </span>
        </div>
        <span className="rounded-full bg-white px-1.5 py-0.5 text-[9px] font-bold text-brand-gray">
          {count}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        {cards.map((c) => (
          <DealCard key={c.name} {...c} tone={tone} />
        ))}
      </div>
    </div>
  );
}

function DealCard({
  name,
  value,
  tag,
  stage,
  tone,
}: {
  name: string;
  value: string;
  tag: string;
  stage: number;
  tone: "blue" | "violet" | "teal";
}) {
  const tagStyle =
    tag === "Hot"
      ? "bg-[#FF5C72]/15 text-[#E03A52]"
      : tag === "Warm"
      ? "bg-[#FFB547]/15 text-[#B97500]"
      : tag === "Won"
      ? "bg-brand-teal/15 text-brand-teal-dark"
      : "bg-brand-blue/10 text-brand-blue";
  const bar =
    tone === "blue"
      ? "from-brand-blue to-[#5B6FE3]"
      : tone === "violet"
      ? "from-[#7A5BFF] to-[#A48BFF]"
      : "from-brand-teal-dark to-brand-teal";
  return (
    <div className="rounded-lg border border-black/5 bg-white p-2 shadow-[0_3px_8px_-3px_rgba(8,15,46,0.08)] transition-shadow hover:shadow-[0_8px_18px_-6px_rgba(8,15,46,0.18)]">
      <div className="flex items-center justify-between">
        <div className="text-[10.5px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[11px]">
          {name}
        </div>
        <span
          className={`rounded-full px-1.5 py-0.5 text-[8.5px] font-extrabold uppercase ${tagStyle}`}
        >
          {tag}
        </span>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-[9.5px] font-bold text-brand-blue">{value}</span>
        <span className="text-[9px] font-medium text-brand-gray">
          {stage}% to close
        </span>
      </div>
      <div className="mt-1.5 h-1 w-full rounded-full bg-brand-light-gray">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${bar}`}
          style={{ width: `${stage}%` }}
        />
      </div>
    </div>
  );
}

function PipelineStat({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone: "blue" | "violet" | "teal";
}) {
  const fg =
    tone === "blue"
      ? "text-brand-blue"
      : tone === "violet"
      ? "text-[#7A5BFF]"
      : "text-brand-teal-dark";
  return (
    <div className="text-center">
      <div className={`text-[15px] font-extrabold tracking-[-0.02em] md:text-[18px] ${fg}`}>
        {value}
      </div>
      <div className="mt-0.5 text-[9.5px] font-semibold text-brand-gray">
        {label}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Channels card — the unique value prop:
 * "In-built — connect WhatsApp, your email, and send dynamic forms to
 * customers — all from inside the same deal record."
 * ---------------------------------------------------------------- */
function ChannelsCard() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_22px_50px_-15px_rgba(8,15,46,0.18)] md:p-6">
      {/* atmospheric corner */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-[0.10] blur-2xl" />

      {/* header */}
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-[0_8px_16px_-6px_rgba(43,78,255,0.5)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 8a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4H10l-4 4V8z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="11" r="1" fill="currentColor" />
              <circle cx="13" cy="11" r="1" fill="currentColor" />
              <circle cx="17" cy="11" r="1" fill="currentColor" />
            </svg>
          </div>
          <div>
            <h3 className="text-[14px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[15px]">
              In-built channels
            </h3>
            <p className="text-[11px] font-medium text-brand-gray">
              All from the same deal record
            </p>
          </div>
        </div>
        <span className="rounded-full bg-brand-teal/15 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider text-brand-teal-dark">
          Native
        </span>
      </div>

      {/* connector tiles */}
      <div className="relative mt-4 flex flex-col gap-2.5">
        <ConnectorRow
          tone="teal"
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 20l1.6-4.2A8 8 0 1110 19l-5 1z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12c.5 1 1.5 2 3 2.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          }
          title="Connect WhatsApp"
          desc="Official Cloud API · 2-way chat from the deal"
          status="Connected"
        />
        <ConnectorRow
          tone="blue"
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M3 7l9 7 9-7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title="Connect your Email"
          desc="Gmail / Outlook · threads, opens, AI summaries"
          status="Connected"
        />
        <ConnectorRow
          tone="violet"
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M7 8h10M7 12h7M7 16h5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="18" cy="16" r="2" fill="currentColor" />
            </svg>
          }
          title="Send Dynamic Forms"
          desc="Branded, conditional logic, auto-populated fields"
          status="3 live"
        />
      </div>

      {/* unified inbox preview */}
      <div className="relative mt-4 rounded-2xl bg-gradient-to-br from-brand-light-gray to-white p-3">
        <div className="flex items-center justify-between">
          <div className="text-[9.5px] font-extrabold uppercase tracking-wider text-brand-navy/70">
            Acme Distributors · timeline
          </div>
          <span className="rounded-full bg-white px-1.5 py-0.5 text-[8.5px] font-bold text-brand-gray">
            Today
          </span>
        </div>

        <div className="mt-2 flex flex-col gap-1.5">
          <TimelineRow
            tone="teal"
            channel="WA"
            text="Quote received — replied 👍"
            time="9:42"
          />
          <TimelineRow
            tone="blue"
            channel="EM"
            text="Proposal v2 opened (3×)"
            time="11:08"
          />
          <TimelineRow
            tone="violet"
            channel="FRM"
            text="Onboarding form submitted"
            time="2:14"
          />
        </div>
      </div>
    </div>
  );
}

function ConnectorRow({
  tone,
  icon,
  title,
  desc,
  status,
}: {
  tone: "teal" | "blue" | "violet";
  icon: React.ReactNode;
  title: string;
  desc: string;
  status: string;
}) {
  const fg =
    tone === "teal"
      ? "text-brand-teal-dark"
      : tone === "blue"
      ? "text-brand-blue"
      : "text-[#7A5BFF]";
  const bg =
    tone === "teal"
      ? "bg-brand-teal/15"
      : tone === "blue"
      ? "bg-brand-blue/10"
      : "bg-[#A48BFF]/15";
  const dot =
    tone === "teal"
      ? "bg-brand-teal"
      : tone === "blue"
      ? "bg-brand-blue"
      : "bg-[#7A5BFF]";
  return (
    <div className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-2.5 transition hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-10px_rgba(8,15,46,0.18)] md:p-3">
      <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${bg} ${fg}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[12px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[12.5px]">
          {title}
        </div>
        <div className="text-[10.5px] font-medium text-brand-gray">{desc}</div>
      </div>
      <div className="flex flex-shrink-0 items-center gap-1 rounded-full border border-black/5 bg-brand-light-gray px-2 py-1">
        <span className={`relative flex h-1.5 w-1.5`}>
          <span
            className={`absolute inline-flex h-full w-full animate-pulse-soft rounded-full ${dot} opacity-70`}
          />
          <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dot}`} />
        </span>
        <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-brand-navy">
          {status}
        </span>
      </div>
    </div>
  );
}

function TimelineRow({
  tone,
  channel,
  text,
  time,
}: {
  tone: "teal" | "blue" | "violet";
  channel: string;
  text: string;
  time: string;
}) {
  const swatch =
    tone === "teal"
      ? "bg-brand-teal/20 text-brand-teal-dark"
      : tone === "blue"
      ? "bg-brand-blue/15 text-brand-blue"
      : "bg-[#A48BFF]/20 text-[#7A5BFF]";
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 shadow-[0_3px_8px_-4px_rgba(8,15,46,0.08)]">
      <span
        className={`inline-flex h-5 w-7 flex-shrink-0 items-center justify-center rounded-md text-[8.5px] font-extrabold uppercase ${swatch}`}
      >
        {channel}
      </span>
      <span className="flex-1 text-[10.5px] font-semibold text-brand-navy">
        {text}
      </span>
      <span className="text-[9px] font-medium text-brand-gray">{time}</span>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Sequence flow card — "automation that runs while you sleep"
 * ---------------------------------------------------------------- */
function SequenceFlowCard() {
  const steps: {
    day: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    tone: "blue" | "violet" | "teal";
  }[] = [
    {
      day: "Day 0",
      title: "Lead created",
      desc: "BANT scoring, owner assigned",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      tone: "blue",
    },
    {
      day: "Day 1",
      title: "Email sent",
      desc: "Personalised intro + deck",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 7l9 7 9-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      tone: "violet",
    },
    {
      day: "Day 3",
      title: "WhatsApp nudge",
      desc: "Quick template + CTA",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 20l1.6-4.2A8 8 0 1110 19l-5 1z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      tone: "teal",
    },
    {
      day: "Day 5",
      title: "Call scheduled",
      desc: "AI books a 15-min slot",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="16" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="15" r="2.4" fill="currentColor" />
        </svg>
      ),
      tone: "blue",
    },
    {
      day: "Day 7",
      title: "Won 🎉",
      desc: "Pushed to ERP & onboarding",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12l4 4 10-10"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      tone: "teal",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_22px_50px_-15px_rgba(8,15,46,0.18)] md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-[0_8px_16px_-6px_rgba(43,78,255,0.5)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12a9 9 0 0017 4M21 12A9 9 0 004 8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M21 4v4h-4M3 20v-4h4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-[14px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[15px]">
              Sequence on autopilot
            </h3>
            <p className="text-[11px] font-medium text-brand-gray">
              Lead → Won in 7 days · zero manual nudges
            </p>
          </div>
        </div>
        <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[9.5px] font-extrabold uppercase tracking-wider text-brand-blue">
          5 actions · 0 missed
        </span>
      </div>

      {/* horizontal flow */}
      <div className="relative mt-5 overflow-x-auto pb-1">
        <div className="relative flex min-w-[640px] items-stretch gap-2 md:min-w-0 md:gap-3">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-1 items-stretch">
              <SeqStep {...s} />
              {i < steps.length - 1 && <SeqConnector />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeqStep({
  day,
  title,
  desc,
  icon,
  tone,
}: {
  day: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  tone: "blue" | "violet" | "teal";
}) {
  const fg =
    tone === "blue"
      ? "text-brand-blue"
      : tone === "violet"
      ? "text-[#7A5BFF]"
      : "text-brand-teal-dark";
  const bg =
    tone === "blue"
      ? "bg-brand-blue/10"
      : tone === "violet"
      ? "bg-[#A48BFF]/15"
      : "bg-brand-teal/15";
  return (
    <div className="flex flex-1 flex-col items-start rounded-2xl border border-black/5 bg-brand-light-gray/50 p-3 md:p-3.5">
      <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${bg} ${fg}`}>
        {icon}
      </div>
      <div className={`mt-2.5 text-[9.5px] font-extrabold uppercase tracking-wider ${fg}`}>
        {day}
      </div>
      <div className="mt-1 text-[12px] font-extrabold tracking-[-0.01em] text-brand-navy md:text-[13px]">
        {title}
      </div>
      <div className="mt-0.5 text-[10.5px] leading-[1.45] text-brand-gray">
        {desc}
      </div>
    </div>
  );
}

function SeqConnector() {
  return (
    <div className="hidden flex-shrink-0 items-center self-stretch md:flex">
      <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
        <path
          d="M1 7h18m0 0l-4-4m4 4l-4 4"
          stroke="#2B4EFF"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2 3"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
