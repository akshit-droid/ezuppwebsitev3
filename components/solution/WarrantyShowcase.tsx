"use client";

import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

/**
 * Rich product showcase for /solutions/warranty — recreates the end-to-end
 * journey: scan a QR → activate on WhatsApp → receive a digital certificate
 * → verify authenticity. Native JSX/SVG, mobile-first, themed to the
 * Ezupp palette.
 *
 * Composition:
 *   - Hero scan tile (product box + QR + scan ray)
 *   - WhatsApp activation chat
 *   - Digital certificate card (with seal)
 *   - Authenticity verified badge + insight stats
 */
export function WarrantyShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-24">
      {/* atmospheric brand wash */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-[80%] -translate-y-1/2 bg-gradient-to-b from-brand-teal/[0.06] via-brand-blue/[0.04] to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-0 h-72 w-72 rounded-full bg-brand-teal/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-0 h-80 w-80 rounded-full bg-brand-blue/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-60" />

      <Container className="relative px-5 md:px-16">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionEyebrow>Scan · Activate · Authenticate</SectionEyebrow>
          <h2 className="mt-4 text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy md:mt-5">
            One scan turns a buyer{" "}
            <span className="grad-text">into a relationship.</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[15px] leading-[1.7] text-brand-gray md:mt-5 md:text-[16px]">
            From the QR on the box to a verified warranty in WhatsApp — in
            under 30 seconds. No app, no paper, no fakes.
          </p>
        </div>

        {/* MAIN COMPOSITION */}
        <div className="reveal d2 mt-10 grid items-stretch gap-5 md:mt-14 md:gap-6 lg:grid-cols-12">
          {/* LEFT — Scan tile (large) */}
          <div className="lg:col-span-5">
            <ScanTile />
          </div>

          {/* MIDDLE — WhatsApp chat */}
          <div className="lg:col-span-4">
            <WhatsAppChat />
          </div>

          {/* RIGHT — Certificate */}
          <div className="lg:col-span-3">
            <CertificateCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * Scan tile — product box + QR + scan ray
 * ---------------------------------------------------------------- */
function ScanTile() {
  return (
    <div className="relative h-full overflow-hidden rounded-[22px] border border-black/5 bg-gradient-to-br from-[#0E1638] via-[#101A45] to-[#13225C] p-5 text-white shadow-[0_22px_50px_-15px_rgba(8,15,46,0.45)] md:p-6">
      {/* decorative lights */}
      <div className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-brand-teal/30 blur-[60px]" />
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-brand-blue/40 blur-[70px]" />
      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-brand-teal" />
          <span className="text-[10.5px] font-extrabold uppercase tracking-[.16em] text-brand-teal">
            Authentic
          </span>
        </div>
        <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[9.5px] font-extrabold uppercase tracking-wider backdrop-blur">
          SKU · EZ-PRO-2024
        </span>
      </div>

      <h3 className="relative mt-3 text-[15px] font-extrabold tracking-[-0.01em] md:text-[17px]">
        Scan once. Connected for life.
      </h3>

      {/* product box + QR */}
      <div className="relative mt-5 flex items-center justify-center">
        <ProductBox />
      </div>

      {/* status */}
      <div className="relative mt-5 grid grid-cols-3 gap-2.5 rounded-2xl bg-white/5 p-2.5 backdrop-blur">
        <ScanStat value="3s" label="To scan" tone="teal" />
        <ScanStat value="100%" label="Authenticity" tone="blue" />
        <ScanStat value="0" label="Apps to install" tone="teal" />
      </div>
    </div>
  );
}

function ProductBox() {
  return (
    <div className="relative">
      {/* shadow puddle */}
      <div className="pointer-events-none absolute -bottom-4 left-1/2 h-6 w-[80%] -translate-x-1/2 rounded-full bg-black/40 blur-2xl" />

      {/* the box */}
      <svg viewBox="0 0 240 200" className="w-full max-w-[280px]">
        <defs>
          <linearGradient id="boxFront" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E2E8F8" />
          </linearGradient>
          <linearGradient id="boxTop" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#F1F4FB" />
            <stop offset="1" stopColor="#C8D2EC" />
          </linearGradient>
          <linearGradient id="boxSide" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#A7B3D6" />
            <stop offset="1" stopColor="#7C8BBE" />
          </linearGradient>
          <linearGradient id="rayG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2ED8A0" stopOpacity="0.6" />
            <stop offset="1" stopColor="#2ED8A0" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* top face */}
        <polygon points="40,50 160,30 220,55 100,75" fill="url(#boxTop)" />
        {/* side face */}
        <polygon points="160,30 220,55 220,150 160,125" fill="url(#boxSide)" />
        {/* front face */}
        <polygon points="40,50 160,30 160,125 40,145" fill="url(#boxFront)" />

        {/* logo on box */}
        <g transform="translate(56 70)">
          <rect x="0" y="0" width="32" height="10" rx="2" fill="#2B4EFF" opacity="0.85" />
          <rect x="0" y="14" width="60" height="4" rx="1.5" fill="#2B4EFF" opacity="0.4" />
          <rect x="0" y="22" width="44" height="4" rx="1.5" fill="#2B4EFF" opacity="0.25" />
        </g>

        {/* QR area */}
        <g transform="translate(96 88)">
          <rect x="-2" y="-2" width="48" height="48" rx="4" fill="#FFFFFF" stroke="#0E1638" strokeOpacity="0.15" />
          {/* QR pattern (decorative) */}
          <g fill="#0E1638">
            <rect x="2" y="2" width="10" height="10" />
            <rect x="32" y="2" width="10" height="10" />
            <rect x="2" y="32" width="10" height="10" />
            <rect x="4" y="4" width="6" height="6" fill="#fff" />
            <rect x="34" y="4" width="6" height="6" fill="#fff" />
            <rect x="4" y="34" width="6" height="6" fill="#fff" />
            <rect x="6" y="6" width="2" height="2" />
            <rect x="36" y="6" width="2" height="2" />
            <rect x="6" y="36" width="2" height="2" />
            {/* random dots */}
            <rect x="14" y="2" width="2" height="2" />
            <rect x="18" y="2" width="2" height="2" />
            <rect x="22" y="6" width="2" height="2" />
            <rect x="26" y="2" width="2" height="2" />
            <rect x="14" y="6" width="2" height="2" />
            <rect x="18" y="10" width="2" height="2" />
            <rect x="22" y="14" width="2" height="2" />
            <rect x="26" y="18" width="2" height="2" />
            <rect x="30" y="14" width="2" height="2" />
            <rect x="34" y="18" width="2" height="2" />
            <rect x="2" y="14" width="2" height="2" />
            <rect x="6" y="18" width="2" height="2" />
            <rect x="10" y="22" width="2" height="2" />
            <rect x="14" y="26" width="2" height="2" />
            <rect x="22" y="22" width="2" height="2" />
            <rect x="26" y="26" width="2" height="2" />
            <rect x="34" y="22" width="2" height="2" />
            <rect x="38" y="26" width="2" height="2" />
            <rect x="14" y="32" width="2" height="2" />
            <rect x="18" y="36" width="2" height="2" />
            <rect x="22" y="34" width="2" height="2" />
            <rect x="26" y="38" width="2" height="2" />
            <rect x="30" y="34" width="2" height="2" />
            <rect x="34" y="38" width="2" height="2" />
            <rect x="38" y="32" width="2" height="2" />
            <rect x="42" y="36" width="2" height="2" />
            <rect x="42" y="14" width="2" height="2" />
            <rect x="38" y="10" width="2" height="2" />
            <rect x="2" y="22" width="2" height="2" />
            <rect x="6" y="28" width="2" height="2" />
            <rect x="10" y="2" width="2" height="2" />
          </g>
        </g>

        {/* scan ray */}
        <rect x="84" y="55" width="80" height="60" fill="url(#rayG)" opacity="0.5" />
        <line
          x1="84"
          y1="100"
          x2="164"
          y2="100"
          stroke="#2ED8A0"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <animate
            attributeName="y1"
            values="60;120;60"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="60;120;60"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </line>

        {/* corner brackets */}
        <g stroke="#2ED8A0" strokeWidth="2.4" fill="none" strokeLinecap="round">
          <path d="M84 65 L 84 55 L 94 55" />
          <path d="M154 55 L 164 55 L 164 65" />
          <path d="M84 110 L 84 120 L 94 120" />
          <path d="M154 120 L 164 120 L 164 110" />
        </g>

        {/* phone shape pointing at QR */}
        <g transform="translate(174 90)">
          <rect x="0" y="0" width="36" height="62" rx="6" fill="#0E1638" />
          <rect x="2" y="2" width="32" height="58" rx="4" fill="#13225C" />
          <rect x="14" y="56" width="8" height="2" rx="1" fill="#2ED8A0" />
          {/* tiny check */}
          <circle cx="18" cy="28" r="9" fill="#2ED8A0" />
          <path d="M14 28 L 17 31 L 22 24" stroke="#0E1638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </svg>
    </div>
  );
}

function ScanStat({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone: "teal" | "blue";
}) {
  const fg = tone === "teal" ? "text-brand-teal" : "text-[#7DA0FF]";
  return (
    <div className="text-center">
      <div className={`text-[15px] font-extrabold tracking-[-0.02em] md:text-[17px] ${fg}`}>
        {value}
      </div>
      <div className="mt-0.5 text-[9.5px] font-semibold uppercase tracking-wider text-white/55">
        {label}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * WhatsApp activation chat
 * ---------------------------------------------------------------- */
function WhatsAppChat() {
  const messages: { who: "bot" | "user"; text: string; meta?: string }[] = [
    { who: "bot", text: "Welcome to Ezupp Care! 👋\nLet's activate your warranty." },
    { who: "user", text: "📷 Scanned: EZ-PRO-2024 / SN 8472-1029" },
    {
      who: "bot",
      text:
        "Confirmed authentic ✅\nProduct: Ezupp Pro Mixer\nMfg: 12 Mar 2026",
    },
    { who: "user", text: "That's me 🙌" },
    {
      who: "bot",
      text: "🎉 Warranty activated for 24 months.\nCertificate is on its way…",
      meta: "Sent · seen",
    },
  ];

  return (
    <div className="relative h-full overflow-hidden rounded-[22px] border border-black/5 bg-[#E5DDD5] p-3 shadow-[0_22px_50px_-15px_rgba(8,15,46,0.18)]">
      {/* WhatsApp wallpaper pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0E1638 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* header */}
      <div className="relative -m-3 mb-3 flex items-center gap-2.5 bg-[#075E54] px-3 py-2.5 text-white">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-[12px] font-extrabold">
          E
        </div>
        <div className="flex-1">
          <div className="text-[12px] font-extrabold leading-tight">
            Ezupp Care
          </div>
          <div className="flex items-center gap-1 text-[10px] opacity-80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-teal" />
            online
          </div>
        </div>
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[8.5px] font-extrabold uppercase tracking-wider">
          WA
        </span>
      </div>

      {/* messages */}
      <div className="relative flex flex-col gap-1.5 pb-1">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.who === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] whitespace-pre-line rounded-2xl px-2.5 py-1.5 text-[10.5px] leading-[1.45] shadow-sm ${
                m.who === "user"
                  ? "rounded-br-sm bg-[#DCF8C6] text-brand-navy"
                  : "rounded-bl-sm bg-white text-brand-navy"
              }`}
            >
              {m.text}
              {m.meta && (
                <div className="mt-0.5 flex items-center justify-end gap-0.5 text-[8.5px] font-medium text-brand-gray">
                  {m.meta}
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M1 4l2.5 2.5L8 1.5"
                      stroke="#2B4EFF"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 4l2.5 2.5L11 1.5"
                      stroke="#2B4EFF"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* typing indicator */}
        <div className="mt-1 flex items-center gap-1.5">
          <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-2.5 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-brand-gray/60" />
            <span
              className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-brand-gray/60"
              style={{ animationDelay: "0.2s" }}
            />
            <span
              className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-brand-gray/60"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Digital certificate card
 * ---------------------------------------------------------------- */
function CertificateCard() {
  return (
    <div className="relative h-full overflow-hidden rounded-[22px] border border-black/5 bg-gradient-to-br from-white to-[#F5F8FF] p-5 shadow-[0_22px_50px_-15px_rgba(8,15,46,0.18)] md:p-6">
      {/* corner ribbon */}
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 overflow-hidden">
        <div className="absolute -right-8 top-3 rotate-45 bg-gradient-brand px-8 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white shadow-md">
          Verified
        </div>
      </div>

      {/* top row */}
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M7 9h10M7 13h6M7 17h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue">
            Digital Warranty
          </div>
          <div className="text-[12px] font-extrabold tracking-[-0.01em] text-brand-navy">
            Certificate
          </div>
        </div>
      </div>

      {/* serial */}
      <div className="mt-4 rounded-xl border border-dashed border-brand-blue/30 bg-brand-blue/[0.04] px-3 py-2">
        <div className="text-[9px] font-bold uppercase tracking-wider text-brand-gray">
          Serial number
        </div>
        <div className="mt-0.5 font-mono text-[12px] font-extrabold tracking-[0.05em] text-brand-navy">
          EZ-PRO-2024 · 8472-1029
        </div>
      </div>

      {/* meta */}
      <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
        <div>
          <div className="font-bold uppercase tracking-wider text-brand-gray">Owner</div>
          <div className="font-extrabold text-brand-navy">Riya Mehra</div>
        </div>
        <div>
          <div className="font-bold uppercase tracking-wider text-brand-gray">Valid till</div>
          <div className="font-extrabold text-brand-navy">12 Mar 2028</div>
        </div>
        <div>
          <div className="font-bold uppercase tracking-wider text-brand-gray">Activated</div>
          <div className="font-extrabold text-brand-navy">Today · 9:41 AM</div>
        </div>
        <div>
          <div className="font-bold uppercase tracking-wider text-brand-gray">Coverage</div>
          <div className="font-extrabold text-brand-navy">24 months</div>
        </div>
      </div>

      {/* seal */}
      <div className="mt-4 flex items-end justify-between">
        <Seal />
        <div className="text-right">
          <div className="text-[9px] font-bold uppercase tracking-wider text-brand-gray">
            Signed by
          </div>
          <div
            className="text-[18px] italic text-brand-navy"
            style={{ fontFamily: "'Brush Script MT', 'Snell Roundhand', cursive" }}
          >
            Ezupp Care
          </div>
          <div className="mt-0.5 text-[8.5px] font-medium text-brand-gray">
            #EZ-CERT-49281
          </div>
        </div>
      </div>
    </div>
  );
}

function Seal() {
  return (
    <div className="relative">
      <svg width="64" height="64" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="sealG" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#2ED8A0" />
            <stop offset="1" stopColor="#22B085" />
          </linearGradient>
        </defs>
        {/* gear-like outer */}
        <g fill="url(#sealG)">
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 16;
            const x = 32 + Math.cos(a) * 26;
            const y = 32 + Math.sin(a) * 26;
            return <circle key={i} cx={x} cy={y} r="4" />;
          })}
        </g>
        <circle cx="32" cy="32" r="22" fill="url(#sealG)" />
        <circle cx="32" cy="32" r="18" fill="none" stroke="#fff" strokeWidth="1.4" strokeOpacity="0.6" />
        {/* check */}
        <path
          d="M22 33 l 7 7 l 14 -14"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

