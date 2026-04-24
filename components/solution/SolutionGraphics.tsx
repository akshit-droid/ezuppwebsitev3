import type { SVGProps } from "react";

/**
 * Clean, simple hero graphics for each solution subpage.
 *
 * Each one is an SVG card that sits in the hero art slot of SolutionPage.
 * We intentionally keep them minimal — a single metaphor per module — so the
 * page stays readable and on-brand without competing with copy.
 */

type Props = SVGProps<SVGSVGElement>;

function CardShell({ children, ...rest }: Props & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 520 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[520px]"
      role="img"
      {...rest}
    >
      <defs>
        <linearGradient id="cardBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5F8FF" />
          <stop offset="1" stopColor="#EEF3FF" />
        </linearGradient>
        <linearGradient id="cardStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2B4EFF" stopOpacity="0.25" />
          <stop offset="1" stopColor="#2ED8A0" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="pillBrand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2B4EFF" />
          <stop offset="1" stopColor="#4A6CFF" />
        </linearGradient>
        <linearGradient id="pillTeal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2ED8A0" />
          <stop offset="1" stopColor="#22B085" />
        </linearGradient>
        <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#080F2E" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* glow backdrop */}
      <circle cx="260" cy="220" r="210" fill="#2B4EFF" fillOpacity="0.06" />
      <circle cx="120" cy="120" r="60" fill="#2ED8A0" fillOpacity="0.08" />

      {/* card */}
      <g filter="url(#cardShadow)">
        <rect
          x="40"
          y="40"
          width="440"
          height="360"
          rx="28"
          fill="url(#cardBg)"
          stroke="url(#cardStroke)"
          strokeWidth="1.2"
        />
      </g>

      {children}
    </svg>
  );
}

/* -------- LOYALTY: QR warranty + tiered sales ladder -------- */
export function LoyaltyGraphic(props: Props) {
  return (
    <CardShell {...props}>
      {/* top bar */}
      <rect x="64" y="64" width="120" height="14" rx="7" fill="url(#pillBrand)" />
      <circle cx="440" cy="72" r="7" fill="#2ED8A0" />

      {/* QR code */}
      <g transform="translate(68 98)">
        <rect width="120" height="120" rx="14" fill="#fff" stroke="#E3E8F7" />
        <g fill="#080F2E">
          <rect x="14" y="14" width="24" height="24" rx="4" />
          <rect x="82" y="14" width="24" height="24" rx="4" />
          <rect x="14" y="82" width="24" height="24" rx="4" />
          <rect x="20" y="20" width="12" height="12" rx="2" fill="#fff" />
          <rect x="88" y="20" width="12" height="12" rx="2" fill="#fff" />
          <rect x="20" y="88" width="12" height="12" rx="2" fill="#fff" />
          <rect x="48" y="16" width="6" height="6" />
          <rect x="60" y="16" width="6" height="6" />
          <rect x="48" y="28" width="6" height="6" />
          <rect x="72" y="52" width="6" height="6" />
          <rect x="48" y="52" width="6" height="6" />
          <rect x="60" y="64" width="6" height="6" />
          <rect x="84" y="64" width="6" height="6" />
          <rect x="48" y="76" width="6" height="6" />
          <rect x="72" y="88" width="6" height="6" />
          <rect x="84" y="88" width="6" height="6" />
          <rect x="96" y="76" width="6" height="6" />
        </g>
      </g>
      <text x="128" y="240" textAnchor="middle" fontSize="11" fill="#6D7590" fontWeight="700" fontFamily="system-ui">
        Scan to activate
      </text>

      {/* tiered sales ladder */}
      <g transform="translate(224 108)">
        <rect width="220" height="44" rx="12" fill="#fff" stroke="#E3E8F7" />
        <circle cx="22" cy="22" r="10" fill="url(#pillBrand)" />
        <text x="22" y="26" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">1</text>
        <text x="42" y="21" fontSize="12" fill="#080F2E" fontWeight="800" fontFamily="system-ui">Primary sale</text>
        <text x="42" y="34" fontSize="10" fill="#6D7590" fontFamily="system-ui">Brand → Distributor</text>
        <text x="196" y="26" fontSize="11" fill="#2B4EFF" fontWeight="800" fontFamily="system-ui">+500 pts</text>
      </g>

      <g transform="translate(224 160)">
        <rect width="220" height="44" rx="12" fill="#fff" stroke="#E3E8F7" />
        <circle cx="22" cy="22" r="10" fill="url(#pillTeal)" />
        <text x="22" y="26" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">2</text>
        <text x="42" y="21" fontSize="12" fill="#080F2E" fontWeight="800" fontFamily="system-ui">Secondary sale</text>
        <text x="42" y="34" fontSize="10" fill="#6D7590" fontFamily="system-ui">Distributor → Retailer</text>
        <text x="196" y="26" fontSize="11" fill="#22B085" fontWeight="800" fontFamily="system-ui">+250 pts</text>
      </g>

      <g transform="translate(224 212)">
        <rect width="220" height="44" rx="12" fill="#fff" stroke="#E3E8F7" />
        <circle cx="22" cy="22" r="10" fill="#131B44" />
        <text x="22" y="26" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">3</text>
        <text x="42" y="21" fontSize="12" fill="#080F2E" fontWeight="800" fontFamily="system-ui">Tertiary sale</text>
        <text x="42" y="34" fontSize="10" fill="#6D7590" fontFamily="system-ui">Retailer → Consumer</text>
        <text x="196" y="26" fontSize="11" fill="#080F2E" fontWeight="800" fontFamily="system-ui">+100 pts</text>
      </g>

      {/* points summary */}
      <g transform="translate(68 260)">
        <rect width="376" height="108" rx="16" fill="#fff" stroke="#E3E8F7" />
        <text x="20" y="28" fontSize="11" fill="#6D7590" fontWeight="700" fontFamily="system-ui" letterSpacing="1.5">
          REWARDS EARNED
        </text>
        <text x="20" y="64" fontSize="32" fill="#080F2E" fontWeight="800" fontFamily="system-ui">
          ₹1,28,400
        </text>
        <rect x="20" y="76" width="336" height="8" rx="4" fill="#F0F3FC" />
        <rect x="20" y="76" width="240" height="8" rx="4" fill="url(#pillBrand)" />
        <text x="20" y="100" fontSize="10" fill="#6D7590" fontFamily="system-ui">
          Goal: ₹1.8L · 71% to next tier
        </text>
      </g>
    </CardShell>
  );
}

/* -------- AI ECOSYSTEM: lead qualification + routing -------- */
export function AIGraphic(props: Props) {
  return (
    <CardShell {...props}>
      {/* AI card header */}
      <g transform="translate(68 68)">
        <rect width="384" height="56" rx="16" fill="#fff" stroke="#E3E8F7" />
        <circle cx="32" cy="28" r="14" fill="url(#pillBrand)" />
        <path d="M26 28 L30 32 L38 24" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="58" y="26" fontSize="13" fill="#080F2E" fontWeight="800" fontFamily="system-ui">Ezzy AI · Qualified lead</text>
        <text x="58" y="42" fontSize="11" fill="#6D7590" fontFamily="system-ui">Enterprise · Score 92/100 · Route → Alex</text>
        <rect x="324" y="16" width="44" height="24" rx="12" fill="#2ED8A033" />
        <text x="346" y="31" textAnchor="middle" fontSize="11" fill="#22B085" fontWeight="800" fontFamily="system-ui">HOT</text>
      </g>

      {/* transcript snippet */}
      <g transform="translate(68 140)">
        <rect width="244" height="220" rx="16" fill="#fff" stroke="#E3E8F7" />
        <text x="20" y="28" fontSize="10" fill="#6D7590" fontWeight="700" letterSpacing="1.2" fontFamily="system-ui">
          CALL ANALYSIS
        </text>
        <rect x="20" y="42" width="204" height="10" rx="5" fill="#F0F3FC" />
        <rect x="20" y="42" width="168" height="10" rx="5" fill="url(#pillBrand)" />
        <text x="20" y="72" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Sentiment</text>
        <text x="204" y="72" textAnchor="end" fontSize="11" fill="#22B085" fontWeight="800" fontFamily="system-ui">Positive</text>

        <line x1="20" y1="86" x2="224" y2="86" stroke="#F0F3FC" />

        <text x="20" y="108" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Intent</text>
        <text x="204" y="108" textAnchor="end" fontSize="11" fill="#2B4EFF" fontWeight="800" fontFamily="system-ui">Buy · 30d</text>

        <line x1="20" y1="122" x2="224" y2="122" stroke="#F0F3FC" />

        <text x="20" y="144" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Objection</text>
        <text x="204" y="144" textAnchor="end" fontSize="11" fill="#6D7590" fontWeight="700" fontFamily="system-ui">Pricing</text>

        <line x1="20" y1="158" x2="224" y2="158" stroke="#F0F3FC" />

        <text x="20" y="180" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Next action</text>
        <text x="204" y="180" textAnchor="end" fontSize="11" fill="#2B4EFF" fontWeight="800" fontFamily="system-ui">Send SOW</text>

        <rect x="20" y="196" width="204" height="10" rx="5" fill="#F0F3FC" />
        <rect x="20" y="196" width="120" height="10" rx="5" fill="url(#pillTeal)" />
      </g>

      {/* routing map */}
      <g transform="translate(324 140)">
        <rect width="128" height="220" rx="16" fill="#fff" stroke="#E3E8F7" />
        <text x="16" y="26" fontSize="10" fill="#6D7590" fontWeight="700" letterSpacing="1.2" fontFamily="system-ui">
          ROUTING
        </text>

        {/* agent avatars */}
        <g transform="translate(14 44)">
          <circle cx="16" cy="16" r="14" fill="url(#pillBrand)" />
          <text x="16" y="20" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="800" fontFamily="system-ui">AK</text>
          <text x="38" y="14" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Alex</text>
          <text x="38" y="26" fontSize="9" fill="#6D7590" fontFamily="system-ui">12 deals open</text>
        </g>
        <g transform="translate(14 84)">
          <circle cx="16" cy="16" r="14" fill="#131B44" />
          <text x="16" y="20" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="800" fontFamily="system-ui">PR</text>
          <text x="38" y="14" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Priya</text>
          <text x="38" y="26" fontSize="9" fill="#6D7590" fontFamily="system-ui">8 deals open</text>
        </g>
        <g transform="translate(14 124)">
          <circle cx="16" cy="16" r="14" fill="url(#pillTeal)" />
          <text x="16" y="20" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="800" fontFamily="system-ui">SM</text>
          <text x="38" y="14" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Sam</text>
          <text x="38" y="26" fontSize="9" fill="#6D7590" fontFamily="system-ui">5 deals open</text>
        </g>

        <rect x="14" y="168" width="100" height="32" rx="10" fill="#2B4EFF0D" />
        <path d="M24 184 L32 192 L48 176" stroke="#2B4EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="56" y="188" fontSize="10" fill="#2B4EFF" fontWeight="800" fontFamily="system-ui">Auto-assigned</text>
      </g>
    </CardShell>
  );
}

/* -------- CRM: Kanban pipeline -------- */
export function CRMGraphic(props: Props) {
  const cols = [
    { title: "Discover", color: "#94A0C4", count: 4 },
    { title: "Qualified", color: "#2B4EFF", count: 3 },
    { title: "Proposal", color: "#4A6CFF", count: 2 },
    { title: "Closed", color: "#22B085", count: 2 },
  ];
  return (
    <CardShell {...props}>
      <g transform="translate(68 72)">
        <rect width="384" height="30" rx="10" fill="#fff" stroke="#E3E8F7" />
        <circle cx="18" cy="15" r="5" fill="#FF6767" />
        <circle cx="34" cy="15" r="5" fill="#FFCC3B" />
        <circle cx="50" cy="15" r="5" fill="#2ED8A0" />
        <text x="70" y="19" fontSize="10" fill="#6D7590" fontWeight="700" fontFamily="system-ui">ezupp.com/crm/pipeline</text>
      </g>

      {cols.map((c, i) => (
        <g key={c.title} transform={`translate(${68 + i * 96} 118)`}>
          <text x="8" y="14" fontSize="10" fill="#6D7590" fontWeight="800" fontFamily="system-ui" letterSpacing="1">
            {c.title.toUpperCase()}
          </text>
          <circle cx="80" cy="10" r="8" fill={c.color + "22"} />
          <text x="80" y="14" textAnchor="middle" fontSize="9" fill={c.color} fontWeight="800" fontFamily="system-ui">
            {c.count}
          </text>
          <rect x="0" y="22" width="86" height="60" rx="10" fill="#fff" stroke="#E3E8F7" />
          <rect x="8" y="30" width="70" height="6" rx="3" fill="#E7ECFF" />
          <rect x="8" y="42" width="48" height="6" rx="3" fill="#F0F3FC" />
          <rect x="8" y="62" width="28" height="14" rx="7" fill={c.color + "1F"} />
          <circle cx="15" cy="69" r="3" fill={c.color} />

          <rect x="0" y="92" width="86" height="60" rx="10" fill="#fff" stroke="#E3E8F7" />
          <rect x="8" y="100" width="64" height="6" rx="3" fill="#E7ECFF" />
          <rect x="8" y="112" width="40" height="6" rx="3" fill="#F0F3FC" />
          <rect x="8" y="132" width="28" height="14" rx="7" fill={c.color + "1F"} />
          <circle cx="15" cy="139" r="3" fill={c.color} />
        </g>
      ))}

      {/* summary strip */}
      <g transform="translate(68 290)">
        <rect width="384" height="70" rx="14" fill="#fff" stroke="#E3E8F7" />
        <text x="20" y="26" fontSize="10" fill="#6D7590" fontWeight="700" letterSpacing="1.2" fontFamily="system-ui">
          PIPELINE VALUE
        </text>
        <text x="20" y="54" fontSize="22" fill="#080F2E" fontWeight="800" fontFamily="system-ui">
          ₹8.4 Cr
        </text>
        <rect x="190" y="20" width="64" height="32" rx="10" fill="#2B4EFF0D" />
        <text x="222" y="40" textAnchor="middle" fontSize="11" fill="#2B4EFF" fontWeight="800" fontFamily="system-ui">+24% QoQ</text>
        <rect x="266" y="20" width="98" height="32" rx="10" fill="#2ED8A01A" />
        <text x="315" y="40" textAnchor="middle" fontSize="11" fill="#22B085" fontWeight="800" fontFamily="system-ui">32 deals open</text>
      </g>
    </CardShell>
  );
}

/* -------- HEALTHCARE: calendar + WhatsApp booking chat -------- */
export function HealthcareGraphic(props: Props) {
  return (
    <CardShell {...props}>
      {/* WhatsApp mock */}
      <g transform="translate(68 72)">
        <rect width="200" height="296" rx="20" fill="#fff" stroke="#E3E8F7" />
        <rect width="200" height="46" rx="20" fill="#22B085" />
        <rect y="24" width="200" height="22" fill="#22B085" />
        <circle cx="26" cy="23" r="12" fill="#fff" />
        <text x="26" y="27" textAnchor="middle" fontSize="14" fill="#22B085" fontWeight="800" fontFamily="system-ui">+</text>
        <text x="46" y="21" fontSize="11" fill="#fff" fontWeight="800" fontFamily="system-ui">Dr. Mehra Clinic</text>
        <text x="46" y="34" fontSize="9" fill="#ffffffaa" fontFamily="system-ui">Online · replies instantly</text>

        <g transform="translate(12 58)">
          <rect width="140" height="32" rx="10" fill="#F0F3FC" />
          <text x="10" y="14" fontSize="9" fill="#080F2E" fontFamily="system-ui">Hi! I need a consult</text>
          <text x="10" y="26" fontSize="9" fill="#080F2E" fontFamily="system-ui">for tomorrow morning.</text>
        </g>
        <g transform="translate(48 98)">
          <rect width="140" height="62" rx="10" fill="#E9F8F2" />
          <text x="10" y="14" fontSize="9" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Sure! Available slots:</text>
          <rect x="10" y="22" width="60" height="14" rx="4" fill="#fff" stroke="#22B085" />
          <text x="40" y="32" textAnchor="middle" fontSize="8" fill="#22B085" fontWeight="800" fontFamily="system-ui">09:30 AM</text>
          <rect x="74" y="22" width="60" height="14" rx="4" fill="#22B085" />
          <text x="104" y="32" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="800" fontFamily="system-ui">10:15 AM</text>
          <rect x="10" y="40" width="60" height="14" rx="4" fill="#fff" stroke="#22B085" />
          <text x="40" y="50" textAnchor="middle" fontSize="8" fill="#22B085" fontWeight="800" fontFamily="system-ui">11:00 AM</text>
          <rect x="74" y="40" width="60" height="14" rx="4" fill="#fff" stroke="#22B085" />
          <text x="104" y="50" textAnchor="middle" fontSize="8" fill="#22B085" fontWeight="800" fontFamily="system-ui">04:45 PM</text>
        </g>
        <g transform="translate(12 168)">
          <rect width="168" height="42" rx="10" fill="#F0F3FC" />
          <text x="10" y="14" fontSize="9" fill="#080F2E" fontFamily="system-ui">10:15 AM works. Confirming</text>
          <text x="10" y="26" fontSize="9" fill="#080F2E" fontFamily="system-ui">with my insurance ID.</text>
          <text x="10" y="38" fontSize="9" fill="#22B085" fontWeight="700" fontFamily="system-ui">📎 INS-394821</text>
        </g>
        <g transform="translate(48 218)">
          <rect width="140" height="62" rx="10" fill="#E9F8F2" />
          <text x="10" y="14" fontSize="9" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Appointment confirmed ✅</text>
          <text x="10" y="26" fontSize="8" fill="#6D7590" fontFamily="system-ui">Tue 26 Nov · 10:15 AM</text>
          <text x="10" y="38" fontSize="8" fill="#6D7590" fontFamily="system-ui">Dr. Mehra · Cabin 2</text>
          <text x="10" y="52" fontSize="8" fill="#22B085" fontWeight="800" fontFamily="system-ui">+ added to your calendar</text>
        </g>
      </g>

      {/* clinic dashboard */}
      <g transform="translate(284 72)">
        <rect width="168" height="296" rx="16" fill="#fff" stroke="#E3E8F7" />
        <text x="14" y="26" fontSize="10" fill="#6D7590" fontWeight="700" letterSpacing="1" fontFamily="system-ui">
          TODAY · DR. MEHRA
        </text>

        {[
          ["09:00", "Rohan Shah", "New patient"],
          ["09:45", "Priya K", "Follow-up"],
          ["10:15", "Arjun V", "Confirmed"],
          ["11:00", "Neha S", "Pending"],
          ["12:00", "Aditi R", "Confirmed"],
          ["04:30", "Kiran B", "New patient"],
        ].map(([time, name, tag], i) => (
          <g key={time} transform={`translate(14 ${42 + i * 40})`}>
            <rect width="140" height="32" rx="8" fill={tag === "Confirmed" ? "#E9F8F2" : "#F6F8FF"} />
            <text x="10" y="14" fontSize="10" fill="#080F2E" fontWeight="800" fontFamily="system-ui">{time}</text>
            <text x="10" y="26" fontSize="9" fill="#080F2E" fontFamily="system-ui">{name}</text>
            <text x="130" y="20" textAnchor="end" fontSize="8" fill={tag === "Confirmed" ? "#22B085" : "#6D7590"} fontWeight="800" fontFamily="system-ui">
              {tag === "Confirmed" ? "✓" : "•"} {tag}
            </text>
          </g>
        ))}
      </g>
    </CardShell>
  );
}

/* -------- WHATSAPP: conversation + automation -------- */
export function WhatsAppGraphic(props: Props) {
  return (
    <CardShell {...props}>
      {/* phone chat */}
      <g transform="translate(88 68)">
        <rect width="184" height="304" rx="28" fill="#131B44" />
        <rect x="6" y="6" width="172" height="292" rx="22" fill="#ECE5DD" />
        <rect x="6" y="6" width="172" height="44" rx="22" fill="#075E54" />
        <rect x="6" y="28" width="172" height="22" fill="#075E54" />
        <circle cx="28" cy="28" r="10" fill="#fff" />
        <path d="M22 29c2-3 10-3 12 0" stroke="#075E54" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="28" cy="25" r="3.5" fill="#075E54" />
        <text x="44" y="26" fontSize="11" fill="#fff" fontWeight="800" fontFamily="system-ui">Zenith Supply</text>
        <text x="44" y="38" fontSize="8" fill="#ffffffaa" fontFamily="system-ui">typing…</text>

        {/* incoming */}
        <g transform="translate(14 62)">
          <rect width="124" height="36" rx="10" fill="#fff" />
          <text x="10" y="14" fontSize="9" fill="#080F2E" fontFamily="system-ui">Where is my order?</text>
          <text x="10" y="26" fontSize="9" fill="#080F2E" fontWeight="700" fontFamily="system-ui">#ORD-48219</text>
        </g>

        {/* outgoing bot */}
        <g transform="translate(42 106)">
          <rect width="128" height="96" rx="10" fill="#DCF8C6" />
          <text x="10" y="14" fontSize="9" fill="#080F2E" fontWeight="700" fontFamily="system-ui">📦 Your order is on the way!</text>
          <rect x="10" y="22" width="108" height="4" rx="2" fill="#fff" />
          <rect x="10" y="22" width="84" height="4" rx="2" fill="#22B085" />
          <text x="10" y="40" fontSize="8" fill="#6D7590" fontFamily="system-ui">Ordered</text>
          <text x="66" y="40" fontSize="8" fill="#6D7590" fontFamily="system-ui">Packed</text>
          <text x="92" y="40" fontSize="8" fill="#22B085" fontWeight="800" fontFamily="system-ui">In transit</text>

          <line x1="10" y1="52" x2="118" y2="52" stroke="#ffffff" />
          <text x="10" y="66" fontSize="9" fill="#080F2E" fontFamily="system-ui">ETA: Today, 6:30 PM</text>
          <text x="10" y="80" fontSize="9" fill="#080F2E" fontFamily="system-ui">Driver: Rakesh (+91…)</text>
          <rect x="10" y="84" width="108" height="10" rx="5" fill="#22B085" />
          <text x="64" y="92" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="800" fontFamily="system-ui">Track live</text>
        </g>

        {/* quick reply */}
        <g transform="translate(14 212)">
          <rect width="40" height="16" rx="8" fill="#fff" stroke="#22B085" />
          <text x="20" y="11" textAnchor="middle" fontSize="8" fill="#22B085" fontWeight="800" fontFamily="system-ui">Reorder</text>
          <rect x="48" y="0" width="48" height="16" rx="8" fill="#fff" stroke="#22B085" />
          <text x="72" y="11" textAnchor="middle" fontSize="8" fill="#22B085" fontWeight="800" fontFamily="system-ui">Feedback</text>
          <rect x="102" y="0" width="48" height="16" rx="8" fill="#fff" stroke="#22B085" />
          <text x="126" y="11" textAnchor="middle" fontSize="8" fill="#22B085" fontWeight="800" fontFamily="system-ui">Support</text>
        </g>

        {/* input bar */}
        <rect x="6" y="262" width="172" height="36" rx="16" fill="#fff" />
        <rect x="14" y="272" width="100" height="16" rx="8" fill="#F0F3FC" />
        <circle cx="158" cy="280" r="12" fill="#22B085" />
        <path d="M153 280 L165 280 M161 276 L165 280 L161 284" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* automation pills */}
      <g transform="translate(300 112)">
        <rect width="148" height="32" rx="16" fill="#fff" stroke="#E3E8F7" />
        <circle cx="22" cy="16" r="8" fill="#2B4EFF" />
        <text x="22" y="20" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">🤖</text>
        <text x="38" y="21" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Auto-reply in 3s</text>
      </g>
      <g transform="translate(300 156)">
        <rect width="148" height="32" rx="16" fill="#fff" stroke="#E3E8F7" />
        <circle cx="22" cy="16" r="8" fill="#22B085" />
        <text x="22" y="20" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">📦</text>
        <text x="38" y="21" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Live order status</text>
      </g>
      <g transform="translate(300 200)">
        <rect width="148" height="32" rx="16" fill="#fff" stroke="#E3E8F7" />
        <circle cx="22" cy="16" r="8" fill="#4A6CFF" />
        <text x="22" y="20" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">📣</text>
        <text x="38" y="21" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Campaign broadcast</text>
      </g>
      <g transform="translate(300 244)">
        <rect width="148" height="32" rx="16" fill="#fff" stroke="#E3E8F7" />
        <circle cx="22" cy="16" r="8" fill="#F59E0B" />
        <text x="22" y="20" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">⭐</text>
        <text x="38" y="21" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Feedback & NPS</text>
      </g>
      <g transform="translate(300 288)">
        <rect width="148" height="32" rx="16" fill="#fff" stroke="#E3E8F7" />
        <circle cx="22" cy="16" r="8" fill="#131B44" />
        <text x="22" y="20" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">🎯</text>
        <text x="38" y="21" fontSize="11" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Lead nurture</text>
      </g>
    </CardShell>
  );
}

/* -------- FLEET: map + routing -------- */
export function FleetGraphic(props: Props) {
  return (
    <CardShell {...props}>
      <g transform="translate(68 68)">
        <rect width="384" height="232" rx="16" fill="#F5F8FF" stroke="#E3E8F7" />
        {/* roads */}
        <path d="M30 180 Q 120 140 210 170 T 360 110" stroke="#CAD3EC" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M60 60 Q 160 80 240 60 T 360 200" stroke="#CAD3EC" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M30 180 Q 120 140 210 170 T 360 110" stroke="#2B4EFF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="4 6" />

        {/* pins */}
        {[
          [30, 180, "#22B085"],
          [150, 160, "#2B4EFF"],
          [240, 170, "#2B4EFF"],
          [330, 118, "#2B4EFF"],
          [360, 110, "#F59E0B"],
        ].map(([x, y, c], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle cx="0" cy="0" r="8" fill={c as string} />
            <circle cx="0" cy="0" r="14" fill={c as string} fillOpacity="0.2" />
            <text x="0" y="3" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" fontFamily="system-ui">{i + 1}</text>
          </g>
        ))}

        {/* truck */}
        <g transform="translate(200 150)">
          <rect x="-16" y="-10" width="24" height="18" rx="3" fill="#131B44" />
          <path d="M8 -4 L18 -4 L22 2 L22 8 L8 8 Z" fill="#2B4EFF" />
          <circle cx="-10" cy="11" r="3.5" fill="#080F2E" />
          <circle cx="14" cy="11" r="3.5" fill="#080F2E" />
        </g>
      </g>

      {/* bottom stat strip */}
      <g transform="translate(68 316)">
        <rect width="122" height="52" rx="12" fill="#fff" stroke="#E3E8F7" />
        <text x="14" y="22" fontSize="9" fill="#6D7590" fontWeight="700" letterSpacing="1" fontFamily="system-ui">AGENTS LIVE</text>
        <text x="14" y="44" fontSize="20" fill="#080F2E" fontWeight="800" fontFamily="system-ui">24 / 28</text>
      </g>
      <g transform="translate(199 316)">
        <rect width="122" height="52" rx="12" fill="#fff" stroke="#E3E8F7" />
        <text x="14" y="22" fontSize="9" fill="#6D7590" fontWeight="700" letterSpacing="1" fontFamily="system-ui">KM SAVED / WK</text>
        <text x="14" y="44" fontSize="20" fill="#22B085" fontWeight="800" fontFamily="system-ui">4,280</text>
      </g>
      <g transform="translate(330 316)">
        <rect width="122" height="52" rx="12" fill="#fff" stroke="#E3E8F7" />
        <text x="14" y="22" fontSize="9" fill="#6D7590" fontWeight="700" letterSpacing="1" fontFamily="system-ui">ON-TIME</text>
        <text x="14" y="44" fontSize="20" fill="#2B4EFF" fontWeight="800" fontFamily="system-ui">96.4%</text>
      </g>
    </CardShell>
  );
}

/* -------- DISTRIBUTOR: network web -------- */
export function DistributorGraphic(props: Props) {
  return (
    <CardShell {...props}>
      <g transform="translate(68 68)">
        <rect width="384" height="304" rx="16" fill="#F5F8FF" stroke="#E3E8F7" />

        {/* central brand node */}
        <g transform="translate(192 152)">
          <circle r="42" fill="url(#pillBrand)" />
          <text y="4" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="system-ui">BRAND</text>
          <text y="20" textAnchor="middle" fontSize="9" fill="#ffffffcc" fontFamily="system-ui">HQ</text>
        </g>

        {/* distributor nodes */}
        {[
          [70, 60, "North"],
          [320, 60, "East"],
          [52, 248, "South"],
          [330, 248, "West"],
          [190, 40, "NCR"],
          [190, 272, "HYD"],
        ].map(([x, y, label], i) => (
          <g key={i}>
            <line x1={260} y1={152} x2={x as number} y2={y as number}
                  stroke="#2B4EFF" strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="3 4"
                  transform="translate(-68 0)" />
          </g>
        ))}
        {[
          [70, 60, "North", "#22B085"],
          [320, 60, "East", "#2B4EFF"],
          [52, 248, "South", "#22B085"],
          [330, 248, "West", "#2B4EFF"],
          [190, 40, "NCR", "#22B085"],
          [190, 272, "HYD", "#2B4EFF"],
        ].map(([x, y, label, color], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="22" fill="#fff" stroke={color as string} strokeWidth="2" />
            <text y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill="#080F2E" fontFamily="system-ui">{label}</text>
          </g>
        ))}
      </g>
    </CardShell>
  );
}

/* -------- SUPPLY CHAIN: pipeline -------- */
export function SupplyGraphic(props: Props) {
  return (
    <CardShell {...props}>
      <g transform="translate(68 140)">
        {[
          { label: "Plan", icon: "📋", color: "#2B4EFF" },
          { label: "Procure", icon: "🧾", color: "#4A6CFF" },
          { label: "Warehouse", icon: "🏬", color: "#131B44" },
          { label: "Dispatch", icon: "🚚", color: "#22B085" },
        ].map((step, i) => (
          <g key={step.label} transform={`translate(${i * 96} 0)`}>
            <circle cx="40" cy="40" r="28" fill="#fff" stroke={step.color} strokeWidth="2" />
            <text x="40" y="46" textAnchor="middle" fontSize="18" fontFamily="system-ui">{step.icon}</text>
            <text x="40" y="90" textAnchor="middle" fontSize="11" fontWeight="800" fill="#080F2E" fontFamily="system-ui">{step.label}</text>
            {i < 3 && (
              <path
                d={`M68 40 L92 40`}
                stroke={step.color}
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
                fill="none"
              />
            )}
          </g>
        ))}
      </g>

      {/* throughput bars */}
      <g transform="translate(68 260)">
        <rect width="384" height="100" rx="14" fill="#fff" stroke="#E3E8F7" />
        <text x="20" y="24" fontSize="10" fill="#6D7590" fontWeight="700" letterSpacing="1" fontFamily="system-ui">THROUGHPUT · LAST 7 DAYS</text>

        {[56, 70, 48, 82, 92, 66, 88].map((h, i) => (
          <g key={i} transform={`translate(${20 + i * 52} ${86 - h * 0.5})`}>
            <rect width="24" height={h * 0.5} rx="6" fill={i === 4 ? "url(#pillBrand)" : "#E3E8F7"} />
          </g>
        ))}
      </g>

      {/* header card */}
      <g transform="translate(68 68)">
        <rect width="384" height="60" rx="14" fill="#fff" stroke="#E3E8F7" />
        <text x="20" y="26" fontSize="10" fill="#6D7590" fontWeight="700" letterSpacing="1" fontFamily="system-ui">ACTIVE SHIPMENTS</text>
        <text x="20" y="50" fontSize="20" fill="#080F2E" fontWeight="800" fontFamily="system-ui">128 in transit</text>
        <rect x="260" y="18" width="104" height="24" rx="12" fill="#2ED8A01A" />
        <text x="312" y="34" textAnchor="middle" fontSize="11" fill="#22B085" fontWeight="800" fontFamily="system-ui">99.2% on time</text>
      </g>
    </CardShell>
  );
}
