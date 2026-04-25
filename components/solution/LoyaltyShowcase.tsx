"use client";

import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

/**
 * Rich product showcase for /solutions/loyalty.
 *
 * Designed to be ad-grade: clear narrative arc — one scan ripples into
 * three reward streams (distributor / retailer / consumer), then payouts
 * + analytics close the loop.
 *
 * Panels (mobile stacks, desktop grid):
 *   1. ScanHeroCard      — product with QR + animated scan ray + warranty badge
 *   2. CascadeCard       — primary → secondary → tertiary reward cascade
 *   3. DistributorScheme — slab progress for primary sales
 *   4. RetailerBoard     — secondary-sales leaderboard
 *   5. ConsumerWallet    — tertiary consumer wallet (mini phone)
 *   6. SchemeAnalytics   — uplift dashboard
 *   7. PayoutsFeed       — automated UPI/NEFT/wallet payouts
 */
export function LoyaltyShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-24">
      {/* atmospheric brand wash */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[80%] -translate-y-1/2 bg-gradient-to-b from-brand-blue/[0.05] via-brand-teal/[0.06] to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-0 h-80 w-80 rounded-full bg-brand-teal/15 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-60" />

      <Container className="relative px-5 md:px-16">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow>One scan · everyone wins</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy md:mt-5">
            A loyalty engine that{" "}
            <span className="grad-text">moves money down the channel —</span>{" "}
            automatically.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.7] text-brand-gray md:mt-5 md:text-[16px]">
            Every QR scan activates warranty, rewards the distributor and
            retailer behind the sale, and credits the consumer — in seconds.
            One platform handles points, tiers, payouts and program analytics.
          </p>
        </div>

        {/* ROW 1 — hero scan + cascade */}
        <div className="reveal d2 mt-10 grid items-stretch gap-5 md:mt-14 md:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ScanHeroCard />
          </div>
          <div className="lg:col-span-5">
            <CascadeCard />
          </div>
        </div>

        {/* ROW 2 — distributor scheme + retailer leaderboard */}
        <div className="reveal d2 mt-5 grid items-stretch gap-5 md:mt-6 md:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DistributorSchemeCard />
          </div>
          <div className="lg:col-span-7">
            <RetailerBoardCard />
          </div>
        </div>

        {/* ROW 3 — consumer wallet + analytics + payouts */}
        <div className="reveal d3 mt-5 grid items-stretch gap-5 md:mt-6 md:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ConsumerWalletCard />
          </div>
          <div className="lg:col-span-4">
            <SchemeAnalyticsCard />
          </div>
          <div className="lg:col-span-4">
            <PayoutsFeedCard />
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
  accent?: "blue" | "teal" | "violet" | "amber";
}) {
  const dot =
    accent === "teal"
      ? "bg-brand-teal"
      : accent === "violet"
        ? "bg-[#7C5CFF]"
        : accent === "amber"
          ? "bg-amber-500"
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
 * 1) Scan hero — product + QR + scan ray + warranty badge
 * ---------------------------------------------------------------- */
function ScanHeroCard() {
  return (
    <CardShell>
      <CardHeader eyebrow="QR Warranty Activation" title="Scan · 0.4s" />

      <div className="relative grid gap-5 p-5 md:grid-cols-12 md:gap-6 md:p-6">
        {/* LEFT — product card with QR + scan ray */}
        <div className="md:col-span-7">
          <div className="relative h-[300px] overflow-hidden rounded-[22px] bg-gradient-to-br from-brand-navy via-[#1a2354] to-brand-navy text-white">
            {/* dotted radial glow */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(46,216,160,0.35), transparent 55%), radial-gradient(circle at 75% 80%, rgba(43,78,255,0.45), transparent 55%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* product mock — generic appliance box */}
            <div className="absolute left-6 top-6 h-[220px] w-[170px] -rotate-6">
              <div className="relative h-full w-full rounded-[14px] bg-gradient-to-br from-white/95 to-white/85 p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                {/* brand strip */}
                <div className="flex items-center justify-between">
                  <div className="text-[9px] font-extrabold uppercase tracking-[.2em] text-brand-navy">
                    Aurra
                  </div>
                  <div className="h-1.5 w-6 rounded-full bg-gradient-brand" />
                </div>
                <div className="mt-2 text-[11px] font-extrabold leading-tight text-brand-navy">
                  Pro Series<br />Mixer Grinder
                </div>
                <div className="mt-1 text-[8px] font-bold text-brand-gray">
                  Model · APX-880 · 750W
                </div>

                {/* QR code (synthetic blocky) */}
                <div className="mt-3 flex justify-center">
                  <QrSquare size={104} />
                </div>

                <div className="mt-2 text-center text-[8px] font-extrabold uppercase tracking-[.15em] text-brand-navy">
                  Scan to register
                </div>
              </div>
            </div>

            {/* phone scanning */}
            <div className="absolute bottom-6 right-6 h-[230px] w-[120px] rotate-[10deg]">
              <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-black p-1.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
                <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[#0E1530]">
                  {/* notch */}
                  <div className="absolute left-1/2 top-1.5 h-2 w-10 -translate-x-1/2 rounded-full bg-black" />
                  {/* scanner viewfinder */}
                  <div className="absolute inset-x-3 top-7 bottom-12 overflow-hidden rounded-lg border border-white/15 bg-black/40">
                    {/* corner brackets */}
                    {(["tl", "tr", "bl", "br"] as const).map((c) => (
                      <span
                        key={c}
                        className={
                          "absolute h-3 w-3 border-brand-teal " +
                          (c === "tl"
                            ? "left-1 top-1 border-l-2 border-t-2"
                            : c === "tr"
                              ? "right-1 top-1 border-r-2 border-t-2"
                              : c === "bl"
                                ? "bottom-1 left-1 border-b-2 border-l-2"
                                : "bottom-1 right-1 border-b-2 border-r-2")
                        }
                      />
                    ))}
                    {/* mini QR inside viewfinder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <QrSquare size={62} dark />
                    </div>
                    {/* scan ray */}
                    <div className="absolute inset-x-0 top-0 h-[2px] animate-scan-ray bg-gradient-to-r from-transparent via-brand-teal to-transparent shadow-[0_0_18px_rgba(46,216,160,0.85)]" />
                  </div>
                  {/* status pill */}
                  <div className="absolute inset-x-2 bottom-2 rounded-md bg-brand-teal/15 px-2 py-1.5 text-center text-[8px] font-extrabold uppercase tracking-[.14em] text-brand-teal">
                    Verified ✓
                  </div>
                </div>
              </div>
            </div>

            {/* warranty pill */}
            <div className="absolute left-6 bottom-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur">
              <span className="text-[14px]">🛡️</span>
              <div className="leading-tight">
                <div className="text-[9px] font-extrabold uppercase tracking-[.15em] text-white/80">
                  Warranty
                </div>
                <div className="text-[11px] font-extrabold text-white">
                  Active · 24 months
                </div>
              </div>
            </div>

            {/* points popping up */}
            <div className="absolute right-6 top-6 animate-float-soft rounded-full bg-gradient-brand px-3 py-1.5 text-[11px] font-extrabold text-white shadow-[0_18px_40px_-14px_rgba(43,78,255,0.7)]">
              + 250 pts earned
            </div>
          </div>
        </div>

        {/* RIGHT — flow steps + outcome */}
        <div className="flex flex-col justify-between md:col-span-5">
          <div className="space-y-3">
            <FlowStep
              n={1}
              title="Consumer scans QR"
              sub="Unique per SKU · serial · batch"
              tone="blue"
            />
            <FlowStep
              n={2}
              title="Warranty auto-activated"
              sub="Captured as a known customer"
              tone="teal"
            />
            <FlowStep
              n={3}
              title="Rewards fan out"
              sub="Distributor + retailer + consumer"
              tone="violet"
            />
          </div>

          <div className="mt-4 rounded-2xl bg-gradient-brand-soft p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-blue">
                Outcome
              </span>
              <LiveDot />
            </div>
            <div className="mt-1 grid grid-cols-3 gap-1.5">
              <MiniStat label="Activation" value="0.4s" tone="teal" />
              <MiniStat label="Drop-off" value="−81%" tone="navy" />
              <MiniStat label="Captured" value="100%" tone="blue" />
            </div>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

function QrSquare({ size = 100, dark = false }: { size?: number; dark?: boolean }) {
  // Synthetic QR pattern — 13x13 grid, deterministic
  const N = 13;
  const cells: boolean[][] = [];
  for (let r = 0; r < N; r++) {
    cells[r] = [];
    for (let c = 0; c < N; c++) {
      // pseudo-random but deterministic
      cells[r][c] = ((r * 31 + c * 17 + r * c) % 7) % 2 === 0;
    }
  }
  const finder = (cx: number, cy: number, color: string) => (
    <>
      <rect
        x={cx}
        y={cy}
        width={3}
        height={3}
        rx="0.4"
        fill="none"
        stroke={color}
        strokeWidth="0.7"
      />
      <rect x={cx + 1} y={cy + 1} width={1} height={1} fill={color} />
    </>
  );
  const fg = dark ? "#2ED8A0" : "#080F2E";
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${N} ${N}`}
      shapeRendering="crispEdges"
      style={{
        background: dark ? "transparent" : "white",
        borderRadius: 4,
      }}
    >
      {/* data dots — skip finder regions */}
      {cells.map((row, r) =>
        row.map((on, c) => {
          const inFinder =
            (r < 4 && c < 4) || (r < 4 && c > N - 5) || (r > N - 5 && c < 4);
          if (!on || inFinder) return null;
          return <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill={fg} />;
        }),
      )}
      {finder(0, 0, fg)}
      {finder(N - 3, 0, fg)}
      {finder(0, N - 3, fg)}
    </svg>
  );
}

function FlowStep({
  n,
  title,
  sub,
  tone,
}: {
  n: number;
  title: string;
  sub: string;
  tone: "blue" | "teal" | "violet";
}) {
  const colors: Record<typeof tone, string> = {
    blue: "from-brand-blue to-[#5B6FE3]",
    teal: "from-brand-teal to-brand-teal-dark",
    violet: "from-[#7C5CFF] to-[#2B4EFF]",
  };
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-black/8 bg-white p-3">
      <div
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colors[tone]} text-[12px] font-extrabold text-white`}
      >
        {n}
      </div>
      <div>
        <div className="text-[12px] font-extrabold text-brand-navy">{title}</div>
        <div className="text-[11px] text-brand-gray">{sub}</div>
      </div>
    </div>
  );
}

function MiniStat({
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
    <div className="rounded-lg bg-white p-1.5 text-center">
      <div className="text-[8px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
        {label}
      </div>
      <div className={`mt-0.5 text-[14px] font-extrabold ${cls}`}>{value}</div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * 2) Reward cascade — primary → secondary → tertiary
 * ---------------------------------------------------------------- */
function CascadeCard() {
  type Tier = {
    icon: string;
    title: string;
    sub: string;
    reward: string;
    color: string;
    bg: string;
  };
  const tiers: Tier[] = [
    {
      icon: "🏭",
      title: "Distributor",
      sub: "Primary sale",
      reward: "+ ₹420",
      color: "#2B4EFF",
      bg: "from-brand-blue/10 to-brand-blue/[0.02]",
    },
    {
      icon: "🏪",
      title: "Retailer",
      sub: "Secondary sale",
      reward: "+ ₹180",
      color: "#7C5CFF",
      bg: "from-[#7C5CFF]/10 to-[#7C5CFF]/[0.02]",
    },
    {
      icon: "👤",
      title: "Consumer",
      sub: "Tertiary scan",
      reward: "+ 250 pts",
      color: "#22B085",
      bg: "from-brand-teal/10 to-brand-teal/[0.02]",
    },
  ];
  return (
    <CardShell>
      <CardHeader eyebrow="Reward cascade" title="One sale · 3 winners" accent="teal" />
      <div className="p-5 md:p-6">
        {/* trigger pill */}
        <div className="mb-3 flex items-center justify-between rounded-2xl bg-gradient-brand px-3 py-2.5 text-white">
          <div className="flex items-center gap-2">
            <span className="text-[14px]">🛒</span>
            <div className="leading-tight">
              <div className="text-[9px] font-extrabold uppercase tracking-[.15em] text-white/80">
                Trigger
              </div>
              <div className="text-[12px] font-extrabold">
                APX-880 · ₹4,290 · sold
              </div>
            </div>
          </div>
          <LiveDot color="#FFFFFF" />
        </div>

        {/* cascade rows with connectors */}
        <div className="space-y-2.5">
          {tiers.map((t, i) => (
            <div key={t.title} className="relative">
              {i < tiers.length && (
                <div className="absolute left-[19px] top-[42px] h-2 w-px bg-black/15" />
              )}
              <div
                className={`flex items-center justify-between rounded-2xl border border-black/8 bg-gradient-to-br ${t.bg} px-3 py-2.5`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-[16px]"
                    style={{ background: `${t.color}1A` }}
                  >
                    {t.icon}
                  </div>
                  <div>
                    <div className="text-[12px] font-extrabold text-brand-navy">
                      {t.title}
                    </div>
                    <div className="text-[10px] text-brand-gray">{t.sub}</div>
                  </div>
                </div>
                <div
                  className="rounded-full px-2.5 py-1 text-[11px] font-extrabold text-white"
                  style={{ background: t.color }}
                >
                  {t.reward}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* total settled chip */}
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-dashed border-brand-teal/40 bg-brand-teal/[0.06] px-3 py-2.5">
          <div className="text-[11px] font-extrabold text-brand-teal-dark">
            ✓ All rewards posted
          </div>
          <div className="text-[11px] font-extrabold text-brand-navy">
            Settle in 24h
          </div>
        </div>
      </div>
    </CardShell>
  );
}

/* ---------------------------------------------------------------- *
 * 3) Distributor scheme — slab progress
 * ---------------------------------------------------------------- */
function DistributorSchemeCard() {
  const slabs = [
    { label: "Bronze", target: "₹5L", reward: "1.5%" },
    { label: "Silver", target: "₹10L", reward: "2.2%" },
    { label: "Gold", target: "₹18L", reward: "3.0%" },
    { label: "Platinum", target: "₹28L", reward: "4.0%" },
  ];
  const progress = 64; // %
  const currentTier = "Silver";

  return (
    <CardShell>
      <CardHeader eyebrow="Primary Sales · Distributor" title="Q2 scheme" />
      <div className="flex h-[calc(100%-49px)] flex-col p-5 md:p-6">
        {/* tile */}
        <div className="rounded-2xl bg-brand-navy p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/70">
                Current tier
              </div>
              <div className="mt-0.5 text-[20px] font-extrabold">
                {currentTier}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-extrabold uppercase tracking-[.18em] text-white/70">
                Lifted
              </div>
              <div className="mt-0.5 text-[20px] font-extrabold">₹11.4L</div>
            </div>
          </div>

          {/* slab bar */}
          <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#cd7f32] via-[#c0c0c0] to-[#FFD23F]"
              style={{ width: `${progress}%` }}
            />
            {[25, 50, 75].map((p) => (
              <span
                key={p}
                className="absolute top-1/2 h-3 w-px -translate-y-1/2 bg-white/40"
                style={{ left: `${p}%` }}
              />
            ))}
            {/* you marker */}
            <span
              className="absolute -top-0.5 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_0_3px_rgba(46,216,160,0.45)]"
              style={{ left: `${progress}%` }}
            />
          </div>

          <div className="mt-2 grid grid-cols-4 gap-1 text-center">
            {slabs.map((s, i) => (
              <div key={s.label} className="text-[8px]">
                <div
                  className={
                    "font-extrabold uppercase tracking-[.1em] " +
                    (i <= 1 ? "text-white" : "text-white/55")
                  }
                >
                  {s.label}
                </div>
                <div className="text-white/60">{s.target}</div>
              </div>
            ))}
          </div>
        </div>

        {/* next milestone callout */}
        <div className="mt-4 rounded-2xl border border-black/8 bg-white p-3">
          <div className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-gray">
            Next milestone
          </div>
          <div className="mt-1 flex items-end justify-between">
            <div>
              <div className="text-[15px] font-extrabold text-brand-navy">
                ₹6.6L to Gold
              </div>
              <div className="text-[11px] text-brand-gray">
                Unlocks 3.0% slab + ₹15K booster
              </div>
            </div>
            <div className="rounded-full bg-brand-teal/15 px-2 py-1 text-[10px] font-extrabold text-brand-teal-dark">
              On track ↗
            </div>
          </div>
        </div>

        {/* mini scheme tiles */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-black/8 bg-brand-light-gray/60 p-2.5">
            <div className="text-[10px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
              Active schemes
            </div>
            <div className="mt-0.5 text-[16px] font-extrabold text-brand-navy">
              4
            </div>
          </div>
          <div className="rounded-xl border border-black/8 bg-brand-light-gray/60 p-2.5">
            <div className="text-[10px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
              Earned · YTD
            </div>
            <div className="mt-0.5 text-[16px] font-extrabold text-brand-blue">
              ₹2.84L
            </div>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

/* ---------------------------------------------------------------- *
 * 4) Retailer leaderboard — secondary sales
 * ---------------------------------------------------------------- */
function RetailerBoardCard() {
  const rows = [
    {
      rank: 1,
      name: "Sundar Electronics",
      city: "Coimbatore",
      pts: "12,840",
      delta: "+18%",
      tier: "Diamond",
      tierColor: "#7C5CFF",
    },
    {
      rank: 2,
      name: "Priya Stores",
      city: "Indore",
      pts: "11,205",
      delta: "+12%",
      tier: "Platinum",
      tierColor: "#2B4EFF",
    },
    {
      rank: 3,
      name: "Khanna Mart",
      city: "Lucknow",
      pts: "9,670",
      delta: "+9%",
      tier: "Gold",
      tierColor: "#F59E0B",
    },
    {
      rank: 4,
      name: "Bharat Home",
      city: "Pune",
      pts: "8,915",
      delta: "+6%",
      tier: "Gold",
      tierColor: "#F59E0B",
    },
    {
      rank: 5,
      name: "Suraj Traders",
      city: "Surat",
      pts: "7,420",
      delta: "+4%",
      tier: "Silver",
      tierColor: "#94A3B8",
    },
  ];

  return (
    <CardShell>
      <CardHeader
        eyebrow="Secondary Sales · Retailer leaderboard"
        title="May · top 5"
        accent="violet"
      />
      <div className="p-5 md:p-6">
        {/* podium row for top 3 */}
        <div className="grid grid-cols-3 gap-3">
          {rows.slice(0, 3).map((r) => {
            const medal = r.rank === 1 ? "🥇" : r.rank === 2 ? "🥈" : "🥉";
            const heightClass =
              r.rank === 1 ? "pt-3" : r.rank === 2 ? "pt-5" : "pt-7";
            return (
              <div key={r.rank} className={heightClass}>
                <div
                  className="rounded-2xl border border-black/8 p-3 text-center"
                  style={{ background: `${r.tierColor}0D` }}
                >
                  <div className="text-[20px]">{medal}</div>
                  <div className="mt-1 truncate text-[11px] font-extrabold text-brand-navy">
                    {r.name}
                  </div>
                  <div className="text-[9px] text-brand-gray">{r.city}</div>
                  <div className="mt-2 text-[14px] font-extrabold text-brand-navy">
                    {r.pts}
                  </div>
                  <div className="text-[9px] font-bold text-brand-teal-dark">
                    {r.delta}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* table for ranks 4-5 */}
        <div className="mt-4 divide-y divide-black/5 rounded-2xl border border-black/8 bg-white">
          {rows.slice(3).map((r) => (
            <div
              key={r.rank}
              className="flex items-center justify-between px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-light-gray text-[11px] font-extrabold text-brand-navy">
                  {r.rank}
                </span>
                <div>
                  <div className="text-[12px] font-extrabold text-brand-navy">
                    {r.name}
                  </div>
                  <div className="text-[10px] text-brand-gray">{r.city}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[.1em] text-white"
                  style={{ background: r.tierColor }}
                >
                  {r.tier}
                </span>
                <span className="w-16 text-right text-[12px] font-extrabold text-brand-navy">
                  {r.pts}
                </span>
                <span className="w-12 text-right text-[10px] font-extrabold text-brand-teal-dark">
                  {r.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* footer chips */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <KpiChip label="Active retailers" value="2,194" />
          <KpiChip label="Scans / day" value="14,820" tone="blue" />
          <KpiChip label="Participation" value="92%" tone="teal" />
        </div>
      </div>
    </CardShell>
  );
}

function KpiChip({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "blue" | "teal";
}) {
  const cls =
    tone === "teal"
      ? "text-brand-teal-dark"
      : tone === "blue"
        ? "text-brand-blue"
        : "text-brand-navy";
  return (
    <div className="rounded-xl border border-black/8 bg-brand-light-gray/60 p-2.5">
      <div className="text-[9px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
        {label}
      </div>
      <div className={`mt-0.5 text-[14px] font-extrabold ${cls}`}>{value}</div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * 5) Consumer wallet — mini phone
 * ---------------------------------------------------------------- */
function ConsumerWalletCard() {
  return (
    <CardShell>
      <CardHeader
        eyebrow="Tertiary · Consumer"
        title="Wallet"
        accent="teal"
      />
      <div className="flex h-[calc(100%-49px)] items-center justify-center bg-gradient-to-br from-brand-light-gray/60 to-white p-5">
        {/* phone */}
        <div className="relative h-[360px] w-[200px] overflow-hidden rounded-[28px] bg-black p-1.5 shadow-[0_30px_60px_-15px_rgba(8,15,46,0.35)]">
          <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-white">
            {/* status bar */}
            <div className="flex items-center justify-between bg-brand-navy px-4 py-1.5 text-[8px] font-bold text-white">
              <span>9:41</span>
              <span>•••</span>
            </div>
            {/* hero balance */}
            <div className="bg-gradient-brand px-4 pb-4 pt-3 text-white">
              <div className="text-[9px] font-extrabold uppercase tracking-[.15em] text-white/80">
                Aurra Rewards
              </div>
              <div className="mt-1.5 flex items-baseline gap-1">
                <span className="text-[28px] font-extrabold leading-none tracking-[-0.02em]">
                  3,420
                </span>
                <span className="text-[10px] font-bold text-white/70">pts</span>
              </div>
              <div className="mt-1 text-[9px] text-white/70">
                ≈ ₹342 · expires Dec 2026
              </div>
              {/* tier ring */}
              <div className="mt-2 flex items-center justify-between rounded-full bg-white/15 px-2.5 py-1">
                <span className="text-[9px] font-extrabold uppercase tracking-[.12em]">
                  Tier · Gold
                </span>
                <span className="text-[9px] font-bold text-white/85">
                  680 to Platinum
                </span>
              </div>
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[68%] rounded-full bg-white" />
              </div>
            </div>

            {/* recent activity */}
            <div className="px-3 pt-3">
              <div className="text-[9px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
                Recent
              </div>
              <div className="mt-1.5 space-y-1.5">
                {[
                  { icon: "📱", t: "Scanned · Mixer", d: "+250 pts" },
                  { icon: "🎁", t: "Redeemed · ₹100", d: "−1,000 pts" },
                  { icon: "🌟", t: "Referral bonus", d: "+150 pts" },
                ].map((it) => (
                  <div
                    key={it.t}
                    className="flex items-center justify-between rounded-lg bg-brand-light-gray/60 px-2 py-1.5"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="text-[12px]">{it.icon}</span>
                      <span className="text-[9px] font-extrabold text-brand-navy">
                        {it.t}
                      </span>
                    </div>
                    <span
                      className={
                        "text-[9px] font-extrabold " +
                        (it.d.startsWith("+")
                          ? "text-brand-teal-dark"
                          : "text-brand-navy/70")
                      }
                    >
                      {it.d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* redeem CTA */}
            <div className="absolute inset-x-3 bottom-3">
              <div className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-navy py-2 text-[10px] font-extrabold text-white">
                Redeem now
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

/* ---------------------------------------------------------------- *
 * 6) Scheme analytics — uplift dashboard
 * ---------------------------------------------------------------- */
function SchemeAnalyticsCard() {
  const schemes = [
    { name: "Slab · Q2 GT", lift: 78, val: "+₹84L" },
    { name: "QPS · Mixers", lift: 64, val: "+₹52L" },
    { name: "Festive booster", lift: 92, val: "+₹1.1Cr" },
    { name: "Mix-of-product", lift: 41, val: "+₹26L" },
  ];

  return (
    <CardShell>
      <CardHeader eyebrow="Program Analytics" title="Lift · last 30d" />
      <div className="flex h-[calc(100%-49px)] flex-col p-5 md:p-6">
        {/* hero stat */}
        <div className="rounded-2xl bg-gradient-brand-soft p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-blue">
              Net program lift
            </span>
            <LiveDot />
          </div>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-[26px] font-extrabold leading-none tracking-[-0.02em] text-brand-navy">
              ₹2.72Cr
            </span>
            <span className="mb-1 text-[11px] font-extrabold text-brand-teal-dark">
              ↗ 38% MoM
            </span>
          </div>
          <svg viewBox="0 0 220 50" className="mt-2 h-10 w-full">
            <defs>
              <linearGradient id="liftFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2B4EFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#2B4EFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 L25,32 L50,34 L75,22 L100,26 L125,16 L150,18 L175,8 L200,12 L220,4 L220,50 L0,50 Z"
              fill="url(#liftFill)"
            />
            <path
              d="M0,40 L25,32 L50,34 L75,22 L100,26 L125,16 L150,18 L175,8 L200,12 L220,4"
              stroke="#2B4EFF"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* per-scheme bars */}
        <div className="mt-3 space-y-2">
          {schemes.map((s) => (
            <div key={s.name}>
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-brand-navy">{s.name}</span>
                <span className="font-extrabold text-brand-teal-dark">
                  {s.val}
                </span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-brand-light-gray">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-teal"
                  style={{ width: `${s.lift}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-3 text-[10px] font-bold text-brand-gray">
          Predicted Q3 ROI · 4.2× spend
        </div>
      </div>
    </CardShell>
  );
}

/* ---------------------------------------------------------------- *
 * 7) Automated payouts feed
 * ---------------------------------------------------------------- */
function PayoutsFeedCard() {
  const items = [
    {
      who: "Sundar Electronics",
      method: "UPI",
      amt: "₹4,290",
      t: "just now",
      tone: "teal",
    },
    {
      who: "Bharat Distributors",
      method: "NEFT",
      amt: "₹38,420",
      t: "2m",
      tone: "blue",
    },
    {
      who: "Anjali Sharma",
      method: "Wallet",
      amt: "₹100",
      t: "5m",
      tone: "violet",
    },
    {
      who: "Khanna Mart",
      method: "UPI",
      amt: "₹2,150",
      t: "11m",
      tone: "teal",
    },
    {
      who: "Vikram Patel",
      method: "Wallet",
      amt: "₹250",
      t: "18m",
      tone: "violet",
    },
  ];

  const toneColor = (t: string) =>
    t === "teal" ? "#22B085" : t === "violet" ? "#7C5CFF" : "#2B4EFF";

  return (
    <CardShell>
      <CardHeader
        eyebrow="Automated Payouts"
        title="Live · 24h"
        accent="amber"
      />
      <div className="flex h-[calc(100%-49px)] flex-col p-5 md:p-6">
        {/* big stat */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-2xl bg-brand-navy p-3 text-white">
            <div className="text-[9px] font-extrabold uppercase tracking-[.15em] text-white/70">
              Settled today
            </div>
            <div className="mt-1 text-[18px] font-extrabold leading-none">
              ₹14.8L
            </div>
            <div className="mt-1 text-[9px] text-white/60">186 payouts</div>
          </div>
          <div className="rounded-2xl border border-black/8 bg-brand-light-gray/60 p-3">
            <div className="text-[9px] font-extrabold uppercase tracking-[.15em] text-brand-gray">
              Avg time
            </div>
            <div className="mt-1 text-[18px] font-extrabold leading-none text-brand-navy">
              2.4s
            </div>
            <div className="mt-1 text-[9px] text-brand-teal-dark">
              ↗ 99.6% success
            </div>
          </div>
        </div>

        {/* feed */}
        <div className="mt-3 space-y-1.5 overflow-hidden">
          {items.map((it) => (
            <div
              key={it.who + it.t}
              className="flex items-center justify-between rounded-xl border border-black/8 bg-white px-2.5 py-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-extrabold text-white"
                  style={{ background: toneColor(it.tone) }}
                >
                  {it.method[0]}
                </span>
                <div className="min-w-0">
                  <div className="truncate text-[11px] font-extrabold text-brand-navy">
                    {it.who}
                  </div>
                  <div className="text-[9px] text-brand-gray">
                    {it.method} · {it.t}
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-extrabold text-brand-navy">
                {it.amt}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-2 text-[10px] font-bold text-brand-gray">
          UPI · IMPS · NEFT · Wallet — auto-routed by scheme rules.
        </div>
      </div>
    </CardShell>
  );
}
