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

/* -------- LOYALTY: QR warranty + cascading rewards (ad-grade) -------- */
export function LoyaltyGraphic(props: Props) {
  return (
    <CardShell {...props}>
      {/* extra defs scoped to loyalty */}
      <defs>
        <radialGradient id="loyaltyHaloA" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2ED8A0" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#2ED8A0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#2ED8A0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="loyaltyHaloB" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2B4EFF" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#2B4EFF" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2B4EFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="qrCardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#080F2E" />
          <stop offset="1" stopColor="#1A2354" />
        </linearGradient>
        <linearGradient id="rewardCardA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F4F7FF" />
        </linearGradient>
        <linearGradient id="rewardChipBlue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2B4EFF" />
          <stop offset="1" stopColor="#5B6FE3" />
        </linearGradient>
        <linearGradient id="rewardChipViolet" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7C5CFF" />
          <stop offset="1" stopColor="#9B7CFF" />
        </linearGradient>
        <linearGradient id="rewardChipTeal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2ED8A0" />
          <stop offset="1" stopColor="#22B085" />
        </linearGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* atmospheric halos behind the card */}
      <ellipse cx="180" cy="180" rx="120" ry="100" fill="url(#loyaltyHaloA)" />
      <ellipse cx="380" cy="280" rx="130" ry="110" fill="url(#loyaltyHaloB)" />

      {/* ============= TOP BAR ============= */}
      <g transform="translate(68 64)">
        {/* live badge */}
        <rect width="116" height="22" rx="11" fill="#FFFFFF" stroke="#E3E8F7" />
        <circle cx="14" cy="11" r="4" fill="#2ED8A0">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
        </circle>
        <text x="24" y="15" fontSize="9" fill="#080F2E" fontWeight="800" fontFamily="system-ui" letterSpacing="1.4">
          LOYALTY ENGINE · LIVE
        </text>
      </g>
      {/* tier badge */}
      <g transform="translate(348 60)">
        <rect width="104" height="30" rx="15" fill="url(#pillBrand)" />
        <text x="14" y="19" fontSize="13" fill="#FFD23F" fontWeight="800" fontFamily="system-ui">★</text>
        <text x="28" y="19" fontSize="11" fill="#fff" fontWeight="800" fontFamily="system-ui" letterSpacing="0.4">
          Tier · Gold
        </text>
      </g>

      {/* ============= CENTER QR CARD (the hero) ============= */}
      <g transform="translate(70 104)">
        {/* outer glow ring */}
        <circle cx="76" cy="76" r="78" fill="none" stroke="#2ED8A0" strokeOpacity="0.18" strokeWidth="2" strokeDasharray="3 4">
          <animateTransform attributeName="transform" type="rotate" from="0 76 76" to="360 76 76" dur="22s" repeatCount="indefinite" />
        </circle>
        <circle cx="76" cy="76" r="68" fill="none" stroke="#2B4EFF" strokeOpacity="0.12" strokeWidth="1" />

        {/* card */}
        <rect width="152" height="152" rx="20" fill="url(#qrCardGrad)" />
        <rect width="152" height="152" rx="20" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" />

        {/* faint product label */}
        <text x="14" y="22" fontSize="8" fill="#9AA3B8" fontWeight="800" fontFamily="system-ui" letterSpacing="1.4">
          AURRA · APX-880
        </text>
        <rect x="120" y="13" width="18" height="3" rx="1.5" fill="url(#pillBrand)" />

        {/* QR — cleaner, denser pattern */}
        <g transform="translate(28 32)">
          <rect width="96" height="96" rx="10" fill="#FFFFFF" />
          {/* finder eyes */}
          <g fill="#080F2E">
            <rect x="8" y="8" width="20" height="20" rx="3" />
            <rect x="68" y="8" width="20" height="20" rx="3" />
            <rect x="8" y="68" width="20" height="20" rx="3" />
          </g>
          <g fill="#FFFFFF">
            <rect x="13" y="13" width="10" height="10" rx="1.5" />
            <rect x="73" y="13" width="10" height="10" rx="1.5" />
            <rect x="13" y="73" width="10" height="10" rx="1.5" />
          </g>
          <g fill="#080F2E">
            <rect x="16" y="16" width="4" height="4" />
            <rect x="76" y="16" width="4" height="4" />
            <rect x="16" y="76" width="4" height="4" />
          </g>
          {/* data modules */}
          <g fill="#080F2E">
            {[
              [36, 8], [44, 8], [56, 8], [36, 16], [48, 16], [40, 24], [56, 24],
              [8, 36], [16, 36], [28, 36], [40, 36], [56, 36], [68, 36], [76, 36], [84, 36],
              [8, 44], [20, 44], [32, 44], [48, 44], [60, 44], [72, 44], [84, 44],
              [8, 52], [16, 52], [28, 52], [40, 52], [52, 52], [64, 52], [80, 52],
              [8, 60], [20, 60], [32, 60], [44, 60], [56, 60], [68, 60], [80, 60], [88, 60],
              [36, 68], [48, 68], [60, 68], [72, 68], [84, 68],
              [40, 76], [52, 76], [64, 76], [76, 76], [84, 76],
              [36, 84], [48, 84], [60, 84], [72, 84], [80, 84], [88, 84],
            ].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="4" height="4" />
            ))}
          </g>
          {/* brand center logo dot */}
          <rect x="42" y="42" width="12" height="12" rx="2.5" fill="#FFFFFF" />
          <rect x="44" y="44" width="8" height="8" rx="2" fill="url(#pillBrand)" />

          {/* scan ray */}
          <g>
            <rect x="0" y="0" width="96" height="2.5" fill="#2ED8A0" opacity="0.85">
              <animate attributeName="y" values="0;94;0" dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.6s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>

        {/* SCAN footer */}
        <g transform="translate(0 132)">
          <rect x="14" y="0" width="124" height="14" rx="7" fill="#FFFFFF" fillOpacity="0.08" />
          <text x="76" y="10" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontWeight="800" fontFamily="system-ui" letterSpacing="1.5">
            SCAN TO REGISTER
          </text>
        </g>
      </g>

      {/* warranty pill below QR */}
      <g transform="translate(70 280)">
        <rect width="152" height="32" rx="16" fill="#FFFFFF" stroke="#E3E8F7" />
        <circle cx="20" cy="16" r="9" fill="#2ED8A01F" />
        <path d="M16 16 L19 19 L25 13" stroke="#22B085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="34" y="14" fontSize="10" fill="#080F2E" fontWeight="800" fontFamily="system-ui">Warranty active</text>
        <text x="34" y="25" fontSize="9" fill="#6D7590" fontFamily="system-ui">24 months · auto-registered</text>
      </g>

      {/* ============= CONNECTORS ============= */}
      {/* From QR center (~146, 180) to each reward card */}
      <g stroke="#2B4EFF" strokeOpacity="0.35" strokeWidth="1.4" strokeDasharray="3 4" fill="none">
        <path d="M222,140 C260,140 270,128 320,128" />
        <path d="M222,180 C266,180 274,184 320,184" />
        <path d="M222,220 C260,220 270,236 320,240" />
      </g>
      {/* traveling pulse dots */}
      <g>
        <circle r="3" fill="#2B4EFF">
          <animateMotion dur="3.4s" repeatCount="indefinite" path="M222,140 C260,140 270,128 320,128" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3.4s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#7C5CFF">
          <animateMotion dur="3.4s" begin="0.5s" repeatCount="indefinite" path="M222,180 C266,180 274,184 320,184" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3.4s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#2ED8A0">
          <animateMotion dur="3.4s" begin="1s" repeatCount="indefinite" path="M222,220 C260,220 270,236 320,240" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3.4s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ============= REWARD CASCADE (right column) ============= */}
      {/* Distributor */}
      <g transform="translate(244 108)" filter="url(#cardShadow)">
        <rect width="208" height="44" rx="12" fill="url(#rewardCardA)" stroke="#E3E8F7" />
        <rect x="6" y="6" width="32" height="32" rx="8" fill="#2B4EFF14" />
        <text x="22" y="28" textAnchor="middle" fontSize="16" fontFamily="system-ui">🏭</text>
        <text x="46" y="20" fontSize="11" fill="#080F2E" fontWeight="800" fontFamily="system-ui">Distributor</text>
        <text x="46" y="33" fontSize="9" fill="#6D7590" fontFamily="system-ui">Primary sale</text>
        <rect x="138" y="12" width="62" height="20" rx="10" fill="url(#rewardChipBlue)" />
        <text x="169" y="25" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">+ ₹420</text>
      </g>

      {/* Retailer */}
      <g transform="translate(244 162)" filter="url(#cardShadow)">
        <rect width="208" height="44" rx="12" fill="url(#rewardCardA)" stroke="#E3E8F7" />
        <rect x="6" y="6" width="32" height="32" rx="8" fill="#7C5CFF14" />
        <text x="22" y="28" textAnchor="middle" fontSize="16" fontFamily="system-ui">🏪</text>
        <text x="46" y="20" fontSize="11" fill="#080F2E" fontWeight="800" fontFamily="system-ui">Retailer</text>
        <text x="46" y="33" fontSize="9" fill="#6D7590" fontFamily="system-ui">Secondary sale</text>
        <rect x="138" y="12" width="62" height="20" rx="10" fill="url(#rewardChipViolet)" />
        <text x="169" y="25" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">+ ₹180</text>
      </g>

      {/* Consumer */}
      <g transform="translate(244 216)" filter="url(#cardShadow)">
        <rect width="208" height="44" rx="12" fill="url(#rewardCardA)" stroke="#E3E8F7" />
        <rect x="6" y="6" width="32" height="32" rx="8" fill="#2ED8A014" />
        <text x="22" y="28" textAnchor="middle" fontSize="16" fontFamily="system-ui">👤</text>
        <text x="46" y="20" fontSize="11" fill="#080F2E" fontWeight="800" fontFamily="system-ui">Consumer</text>
        <text x="46" y="33" fontSize="9" fill="#6D7590" fontFamily="system-ui">Tertiary scan</text>
        <rect x="138" y="12" width="62" height="20" rx="10" fill="url(#rewardChipTeal)" />
        <text x="169" y="25" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">+ 250 pts</text>
      </g>

      {/* ============= BOTTOM SUMMARY BAR ============= */}
      <g transform="translate(68 328)" filter="url(#cardShadow)">
        <rect width="384" height="56" rx="16" fill="#080F2E" />
        <rect width="384" height="56" rx="16" fill="url(#pillBrand)" opacity="0.12" />

        {/* coin */}
        <g transform="translate(16 14)">
          <circle cx="14" cy="14" r="14" fill="#FFD23F" />
          <circle cx="14" cy="14" r="14" fill="url(#pillBrand)" opacity="0.2" />
          <text x="14" y="18" textAnchor="middle" fontSize="13" fill="#080F2E" fontWeight="800" fontFamily="system-ui">₹</text>
        </g>

        <text x="56" y="22" fontSize="9" fill="#FFFFFF" fillOpacity="0.65" fontWeight="800" fontFamily="system-ui" letterSpacing="1.6">
          REWARDS SETTLED · TODAY
        </text>
        <text x="56" y="44" fontSize="20" fill="#FFFFFF" fontWeight="800" fontFamily="system-ui" letterSpacing="-0.3">
          ₹14,82,940
        </text>

        {/* mini sparkline */}
        <g transform="translate(228 18)">
          <path d="M0,22 L18,16 L34,18 L50,10 L66,12 L82,4 L100,8 L116,2"
            stroke="#2ED8A0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="116" cy="2" r="3" fill="#2ED8A0">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* delta chip */}
        <g transform="translate(312 16)">
          <rect width="60" height="24" rx="12" fill="#2ED8A0" fillOpacity="0.18" />
          <text x="30" y="16" textAnchor="middle" fontSize="11" fill="#2ED8A0" fontWeight="800" fontFamily="system-ui">↗ 38%</text>
        </g>
      </g>

      {/* floating accents */}
      {/* sparkles */}
      <g opacity="0.85">
        <g transform="translate(232 88)">
          <path d="M0,-6 L1.5,-1.5 L6,0 L1.5,1.5 L0,6 L-1.5,1.5 L-6,0 L-1.5,-1.5 Z" fill="#2ED8A0">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
          </path>
        </g>
        <g transform="translate(456 200)">
          <path d="M0,-5 L1.2,-1.2 L5,0 L1.2,1.2 L0,5 L-1.2,1.2 L-5,0 L-1.2,-1.2 Z" fill="#2B4EFF">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2.6s" begin="0.5s" repeatCount="indefinite" />
          </path>
        </g>
        <g transform="translate(60 96)">
          <path d="M0,-4 L1,-1 L4,0 L1,1 L0,4 L-1,1 L-4,0 L-1,-1 Z" fill="#7C5CFF">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2.4s" begin="1s" repeatCount="indefinite" />
          </path>
        </g>
      </g>

      {/* floating "+250 pts earned" toast */}
      <g transform="translate(290 76)">
        <g>
          <animateTransform attributeName="transform" type="translate"
            values="290 76; 290 70; 290 76" dur="3.6s" repeatCount="indefinite" />
          <rect width="140" height="26" rx="13" fill="url(#pillBrand)" />
          <rect width="140" height="26" rx="13" fill="#FFFFFF" fillOpacity="0.0" />
          <circle cx="14" cy="13" r="6" fill="#FFD23F" />
          <text x="14" y="17" textAnchor="middle" fontSize="9" fill="#080F2E" fontWeight="800" fontFamily="system-ui">★</text>
          <text x="26" y="17" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">
            + 250 pts · earned
          </text>
        </g>
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
      {/* WhatsApp booking chat — left phone */}
      <g transform="translate(68 72)">
        <rect width="196" height="296" rx="24" fill="#131B44" />
        <rect x="6" y="6" width="184" height="284" rx="20" fill="#ECE5DD" />
        <rect x="6" y="6" width="184" height="42" rx="20" fill="#075E54" />
        <rect x="6" y="28" width="184" height="20" fill="#075E54" />
        <circle cx="28" cy="28" r="10" fill="#fff" />
        <text x="28" y="32" textAnchor="middle" fontSize="11" fill="#075E54" fontWeight="800" fontFamily="system-ui">🩺</text>
        <text x="46" y="26" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">Apollo Clinic</text>
        <text x="46" y="38" fontSize="8" fill="#ffffffB3" fontFamily="system-ui">online</text>

        {/* chat bubbles */}
        <g transform="translate(18 64)">
          <rect width="120" height="32" rx="10" fill="#fff" />
          <text x="10" y="14" fontSize="8" fill="#6D7590" fontFamily="system-ui">Bot · 10:04</text>
          <text x="10" y="26" fontSize="9" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Book an appointment?</text>
        </g>

        <g transform="translate(50 104)">
          <rect width="118" height="28" rx="10" fill="#DCF8C6" />
          <text x="10" y="18" fontSize="9" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Yes, skin — tomorrow</text>
        </g>

        <g transform="translate(18 140)">
          <rect width="154" height="62" rx="10" fill="#fff" />
          <text x="10" y="16" fontSize="8" fill="#6D7590" fontFamily="system-ui">Dr. Mehta · Dermatology</text>
          <rect x="10" y="22" width="56" height="22" rx="8" fill="#2B4EFF1A" />
          <text x="38" y="37" textAnchor="middle" fontSize="9" fill="#2B4EFF" fontWeight="800" fontFamily="system-ui">10:30 AM</text>
          <rect x="72" y="22" width="56" height="22" rx="8" fill="#2ED8A01A" />
          <text x="100" y="37" textAnchor="middle" fontSize="9" fill="#22B085" fontWeight="800" fontFamily="system-ui">11:15 AM</text>
          <text x="10" y="56" fontSize="8" fill="#6D7590" fontFamily="system-ui">Tap a slot to confirm</text>
        </g>

        <g transform="translate(50 210)">
          <rect width="118" height="28" rx="10" fill="#DCF8C6" />
          <text x="10" y="18" fontSize="9" fill="#080F2E" fontWeight="700" fontFamily="system-ui">10:30 AM please</text>
        </g>

        <g transform="translate(18 246)">
          <rect width="140" height="30" rx="10" fill="#fff" />
          <text x="10" y="14" fontSize="8" fill="#6D7590" fontFamily="system-ui">Bot · just now</text>
          <text x="10" y="26" fontSize="9" fill="#22B085" fontWeight="800" fontFamily="system-ui">Booked ✓ See you tomorrow</text>
        </g>
      </g>

      {/* Doctor schedule card — right panel */}
      <g transform="translate(284 72)">
        <rect width="168" height="296" rx="16" fill="#fff" stroke="#E3E8F7" />
        <text x="14" y="26" fontSize="10" fill="#6D7590" fontWeight="700" letterSpacing="1" fontFamily="system-ui">
          DR. MEHTA · TODAY
        </text>

        {/* appointment stack */}
        <g transform="translate(14 44)">
          <rect width="140" height="44" rx="10" fill="#F5F8FF" stroke="#2B4EFF" strokeOpacity="0.2" />
          <rect x="0" y="0" width="4" height="44" rx="2" fill="#2B4EFF" />
          <text x="14" y="18" fontSize="10" fill="#080F2E" fontWeight="800" fontFamily="system-ui">09:00 · R. Kumar</text>
          <text x="14" y="32" fontSize="9" fill="#6D7590" fontFamily="system-ui">Follow-up · allergy</text>
        </g>

        <g transform="translate(14 96)">
          <rect width="140" height="44" rx="10" fill="#F5F8FF" stroke="#2ED8A0" strokeOpacity="0.3" />
          <rect x="0" y="0" width="4" height="44" rx="2" fill="#2ED8A0" />
          <text x="14" y="18" fontSize="10" fill="#080F2E" fontWeight="800" fontFamily="system-ui">10:30 · S. Nair</text>
          <text x="14" y="32" fontSize="9" fill="#22B085" fontWeight="800" fontFamily="system-ui">NEW · dermatology</text>
        </g>

        <g transform="translate(14 148)">
          <rect width="140" height="44" rx="10" fill="#F8FAFF" stroke="#E3E8F7" />
          <rect x="0" y="0" width="4" height="44" rx="2" fill="#9BA6C6" />
          <text x="14" y="18" fontSize="10" fill="#080F2E" fontWeight="800" fontFamily="system-ui">11:15 · A. Patel</text>
          <text x="14" y="32" fontSize="9" fill="#6D7590" fontFamily="system-ui">Vital check</text>
        </g>

        {/* vitals mini panel */}
        <g transform="translate(14 210)">
          <rect width="140" height="66" rx="10" fill="url(#cardBg)" stroke="#E3E8F7" />
          <text x="10" y="16" fontSize="8" fill="#6D7590" fontWeight="700" letterSpacing="1" fontFamily="system-ui">PATIENT 360°</text>
          <text x="10" y="34" fontSize="10" fill="#080F2E" fontWeight="800" fontFamily="system-ui">BP 122/78</text>
          <text x="74" y="34" fontSize="10" fill="#080F2E" fontWeight="800" fontFamily="system-ui">HR 72</text>
          <text x="10" y="52" fontSize="9" fill="#22B085" fontWeight="700" fontFamily="system-ui">● Stable · last visit 11 Apr</text>
        </g>
      </g>
    </CardShell>
  );
}

/* -------- WARRANTY: QR activation + digital certificate -------- */
export function WarrantyGraphic(props: Props) {
  return (
    <CardShell {...props}>
      {/* Mobile activation flow */}
      <g transform="translate(68 72)">
        <rect width="200" height="296" rx="20" fill="#fff" stroke="#E3E8F7" />
        <rect width="200" height="46" rx="20" fill="#2B4EFF" />
        <rect y="24" width="200" height="22" fill="#2B4EFF" />
        <circle cx="100" cy="23" r="12" fill="#fff" fillOpacity="0.2" />
        <text x="100" y="27" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800" fontFamily="system-ui">Product Activation</text>

        <g transform="translate(20 68)">
          <text x="0" y="0" fontSize="11" fill="#080F2E" fontWeight="800" fontFamily="system-ui">Scan QR Code</text>
          <rect y="12" width="160" height="120" rx="12" fill="#F8FAFF" stroke="#E3E8F7" />
          {/* QR Pattern */}
          <g transform="translate(56 48)">
             <rect width="48" height="48" fill="#080F2E" fillOpacity="0.1" />
             <rect x="4" y="4" width="12" height="12" fill="#2B4EFF" />
             <rect x="32" y="4" width="12" height="12" fill="#2B4EFF" />
             <rect x="4" y="32" width="12" height="12" fill="#2B4EFF" />
             <rect x="22" y="22" width="4" height="4" fill="#2ED8A0" />
          </g>
          <text x="80" y="146" textAnchor="middle" fontSize="9" fill="#6D7590" fontFamily="system-ui">Authenticating...</text>
        </g>

        <g transform="translate(20 236)">
          <rect width="160" height="40" rx="10" fill="#2ED8A0" />
          <text x="80" y="24" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="800" fontFamily="system-ui">Activate Warranty</text>
        </g>
      </g>

      {/* Admin / Certificate view */}
      <g transform="translate(284 72)">
        <rect width="168" height="296" rx="16" fill="#fff" stroke="#E3E8F7" />
        <text x="14" y="26" fontSize="10" fill="#6D7590" fontWeight="700" letterSpacing="1" fontFamily="system-ui">
          CERTIFICATE ISSUED
        </text>

        <rect x="14" y="44" width="140" height="180" rx="12" fill="#F5F8FF" stroke="#2B4EFF" strokeOpacity="0.2" />
        <circle cx="84" cy="90" r="24" fill="#2ED8A022" />
        <path d="M74 90 L80 96 L94 84" stroke="#2ED8A0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        
        <text x="84" y="136" textAnchor="middle" fontSize="11" fill="#080F2E" fontWeight="800" fontFamily="system-ui">Valid Warranty</text>
        <text x="84" y="152" textAnchor="middle" fontSize="9" fill="#6D7590" fontFamily="system-ui">ID: W-482910</text>
        
        <line x1="34" y1="170" x2="134" y2="170" stroke="#E3E8F7" />
        <text x="84" y="190" textAnchor="middle" fontSize="9" fill="#080F2E" fontWeight="700" fontFamily="system-ui">Expires: Oct 2026</text>

        <g transform="translate(14 240)">
          <rect width="140" height="42" rx="10" fill="#F8FAFF" />
          <text x="10" y="18" fontSize="9" fill="#6D7590" fontFamily="system-ui">Customer notified via</text>
          <text x="10" y="32" fontSize="10" fill="#22B085" fontWeight="800" fontFamily="system-ui">WhatsApp ✅</text>
        </g>
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

/* -------- DISTRIBUTOR: command-center with live partners + orders -------- */
export function DistributorGraphic(props: Props) {
  // Partner cards arranged in a constellation around the central HQ console.
  const partners: {
    x: number;
    y: number;
    name: string;
    region: string;
    value: string;
    state: "live" | "pending" | "won";
  }[] = [
    { x: 60, y: 88, name: "Pune Distr.", region: "West", value: "₹1.84L", state: "live" },
    { x: 326, y: 78, name: "Indore Distr.", region: "Central", value: "₹62.5K", state: "pending" },
    { x: 50, y: 248, name: "Jaipur Distr.", region: "North", value: "₹2.40L", state: "won" },
    { x: 332, y: 252, name: "Chennai Distr.", region: "South", value: "₹1.12L", state: "live" },
  ];

  const stateFill = (s: "live" | "pending" | "won") =>
    s === "live" ? "#2ED8A0" : s === "pending" ? "#FFB547" : "#2B4EFF";

  return (
    <CardShell {...props}>
      <defs>
        <linearGradient id="distrConsole" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E1638" />
          <stop offset="1" stopColor="#13225C" />
        </linearGradient>
        <linearGradient id="distrChart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2ED8A0" stopOpacity="0.45" />
          <stop offset="1" stopColor="#2ED8A0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="distrBeam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2B4EFF" stopOpacity="0.05" />
          <stop offset="0.5" stopColor="#2B4EFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#2ED8A0" stopOpacity="0.05" />
        </linearGradient>
        <radialGradient id="distrGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#2B4EFF" stopOpacity="0.18" />
          <stop offset="1" stopColor="#2B4EFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g transform="translate(68 68)">
        {/* inner stage */}
        <rect width="384" height="304" rx="16" fill="#F5F8FF" stroke="#E3E8F7" />

        {/* faint grid */}
        <g opacity="0.5">
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={(i + 1) * 38} x2="384" y2={(i + 1) * 38} stroke="#E3E8F7" strokeWidth="0.6" strokeDasharray="2 4" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 40} y1="0" x2={(i + 1) * 40} y2="304" stroke="#E3E8F7" strokeWidth="0.6" strokeDasharray="2 4" />
          ))}
        </g>

        {/* glow behind central console */}
        <rect x="92" y="74" width="200" height="156" rx="16" fill="url(#distrGlow)" />

        {/* connection beams (HQ → partners) */}
        {partners.map((p, i) => (
          <g key={`beam-${i}`}>
            <line
              x1={192}
              y1={152}
              x2={p.x}
              y2={p.y}
              stroke="url(#distrBeam)"
              strokeWidth="1.5"
              strokeDasharray="3 4"
              opacity="0.6"
            />
            {/* travelling pulse dot */}
            <circle r="2.4" fill={stateFill(p.state)}>
              <animateMotion
                dur={`${2.6 + (i % 2) * 0.9}s`}
                repeatCount="indefinite"
                begin={`${i * 0.4}s`}
                path={`M 192 152 L ${p.x} ${p.y}`}
              />
              <animate attributeName="opacity" values="0;1;1;0" dur={`${2.6 + (i % 2) * 0.9}s`} repeatCount="indefinite" begin={`${i * 0.4}s`} />
            </circle>
          </g>
        ))}

        {/* CENTRAL CONSOLE */}
        <g transform="translate(96 78)">
          {/* console card */}
          <rect width="192" height="148" rx="14" fill="url(#distrConsole)" />
          {/* shine */}
          <rect width="192" height="22" rx="14" fill="#ffffff" fillOpacity="0.06" />

          {/* header dots */}
          <circle cx="14" cy="14" r="3" fill="#FF5C72" />
          <circle cx="26" cy="14" r="3" fill="#FFB547" />
          <circle cx="38" cy="14" r="3" fill="#2ED8A0" />

          {/* title */}
          <text x="14" y="46" fontSize="9.5" fontWeight="800" fill="#7DA0FF" fontFamily="system-ui" letterSpacing="1.2">
            HQ · DISTRIBUTOR CONTROL
          </text>

          {/* big stat */}
          <text x="14" y="74" fontSize="22" fontWeight="800" fill="#fff" fontFamily="system-ui" letterSpacing="-0.4">
            1,284
          </text>
          <text x="14" y="89" fontSize="9" fontWeight="600" fill="#ffffff99" fontFamily="system-ui">
            outlets · 4-tier hierarchy
          </text>

          {/* mini bar chart */}
          <g transform="translate(108 56)">
            <rect x="0" y="22" width="6" height="14" rx="1.5" fill="#2B4EFF" opacity="0.45" />
            <rect x="10" y="14" width="6" height="22" rx="1.5" fill="#2B4EFF" opacity="0.6" />
            <rect x="20" y="8" width="6" height="28" rx="1.5" fill="#2B4EFF" opacity="0.75" />
            <rect x="30" y="18" width="6" height="18" rx="1.5" fill="#2B4EFF" opacity="0.5" />
            <rect x="40" y="4" width="6" height="32" rx="1.5" fill="#2ED8A0" />
            <rect x="50" y="10" width="6" height="26" rx="1.5" fill="#2ED8A0" opacity="0.85" />
            <rect x="60" y="16" width="6" height="20" rx="1.5" fill="#2ED8A0" opacity="0.6" />
            <rect x="70" y="2" width="6" height="34" rx="1.5" fill="#2ED8A0" />
          </g>

          {/* trend line */}
          <path
            d="M14 124 Q 50 112, 90 116 T 178 96"
            stroke="#2ED8A0"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M14 124 Q 50 112, 90 116 T 178 96 L 178 138 L 14 138 Z"
            fill="url(#distrChart)"
          />
          <circle cx="178" cy="96" r="3" fill="#2ED8A0" />
          <circle cx="178" cy="96" r="6" fill="#2ED8A0" fillOpacity="0.25">
            <animate attributeName="r" values="6;10;6" dur="1.6s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.25;0;0.25" dur="1.6s" repeatCount="indefinite" />
          </circle>

          {/* live order ticker (bottom strip) */}
          <g transform="translate(0 132)">
            <rect width="192" height="16" fill="#ffffff" fillOpacity="0.06" />
            <circle cx="10" cy="8" r="2.5" fill="#2ED8A0">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.3s" repeatCount="indefinite" />
            </circle>
            <text x="18" y="11" fontSize="8.5" fontWeight="700" fill="#fff" fontFamily="system-ui">
              SO-48219 · ₹1.84L · Pune
            </text>
            <text x="138" y="11" fontSize="8" fontWeight="600" fill="#7DA0FF" fontFamily="system-ui">
              just now
            </text>
          </g>
        </g>

        {/* central HQ ring + logo */}
        <g transform="translate(192 152)">
          <circle r="28" fill="#fff" stroke="#2B4EFF" strokeOpacity="0.15" strokeWidth="6" />
          <circle r="22" fill="url(#pillBrand)" />
          <path
            d="M-8 -4 L -2 -4 L -2 4 L 4 4 L 4 -8 L 10 -8 L 10 8 L -8 8 Z"
            fill="#fff"
            opacity="0.9"
          />
          <text y="-12" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#fff" fontFamily="system-ui" letterSpacing="1.4">HQ</text>
        </g>

        {/* PARTNER CARDS */}
        {partners.map((p, i) => (
          <g key={`card-${i}`} transform={`translate(${p.x - 56} ${p.y - 22})`}>
            <rect width="112" height="44" rx="10" fill="#fff" stroke="#E3E8F7" strokeWidth="1" />
            <rect width="112" height="44" rx="10" fill="#fff" filter="url(#cardShadow)" opacity="0.0001" />

            {/* status dot */}
            <circle cx="12" cy="14" r="4" fill={stateFill(p.state)} />
            <circle cx="12" cy="14" r="6" fill={stateFill(p.state)} fillOpacity="0.25">
              <animate attributeName="r" values="6;9;6" dur="1.8s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
              <animate attributeName="fill-opacity" values="0.25;0;0.25" dur="1.8s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>

            <text x="22" y="17" fontSize="9.5" fontWeight="800" fill="#080F2E" fontFamily="system-ui">
              {p.name}
            </text>
            <text x="22" y="29" fontSize="7.5" fontWeight="600" fill="#6B7280" fontFamily="system-ui">
              {p.region} · order
            </text>
            <text x="100" y="29" fontSize="9" fontWeight="800" fill="#2B4EFF" fontFamily="system-ui" textAnchor="end">
              {p.value}
            </text>
            {/* mini progress bar */}
            <rect x="8" y="34" width="96" height="3" rx="1.5" fill="#EEF2FB" />
            <rect x="8" y="34" width={p.state === "won" ? 96 : p.state === "live" ? 70 : 38} height="3" rx="1.5" fill={stateFill(p.state)} />
          </g>
        ))}

        {/* floating PRICING tag (top-right) */}
        <g transform="translate(282 26)">
          <rect width="98" height="24" rx="12" fill="#fff" stroke="#E3E8F7" />
          <circle cx="14" cy="12" r="6" fill="#2B4EFF" fillOpacity="0.12" />
          <path d="M11 12 L 13 14 L 17 10" stroke="#2B4EFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="26" y="16" fontSize="8.5" fontWeight="800" fill="#080F2E" fontFamily="system-ui">
            Pricing synced
          </text>
        </g>

        {/* floating LOYALTY tag (bottom-left) */}
        <g transform="translate(2 286)">
          <rect width="118" height="24" rx="12" fill="#0E1638" />
          <path
            d="M14 8 L 16 13 L 21 13.6 L 17.4 17 L 18.3 22 L 14 19.5 L 9.7 22 L 10.6 17 L 7 13.6 L 12 13 Z"
            fill="#2ED8A0"
          />
          <text x="26" y="16" fontSize="8.5" fontWeight="800" fill="#fff" fontFamily="system-ui">
            Loyalty · Q2 active
          </text>
        </g>
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
