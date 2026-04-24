import type { SVGProps } from "react";
import { cn } from "@/lib/cn";

export type MascotPose =
  | "wave"       // waving — used near CTAs
  | "thinking"   // hand on chin — FAQ
  | "working"    // with laptop — About
  | "celebrate"  // arms up — contact success
  | "default";   // neutral floating

interface MascotProps extends Omit<SVGProps<SVGSVGElement>, "pose"> {
  pose?: MascotPose;
  size?: number;
  className?: string;
  /**
   * Enables the subtle bob + blink animations. Defaults to true.
   */
  animated?: boolean;
}

/**
 * Ezzy — the Ezupp mascot.
 *
 * A friendly rounded-cube robot rendered in brand blue/teal. Multiple poses
 * let us thread the character through the site in a consistent way without
 * importing a separate asset per context.
 */
export function EzuppMascot({
  pose = "default",
  size = 180,
  className,
  animated = true,
  ...rest
}: MascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(animated && "mascot-bob", className)}
      aria-label="Ezzy the Ezupp mascot"
      role="img"
      {...rest}
    >
      <defs>
        <linearGradient id="mascotBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3A5CFF" />
          <stop offset="1" stopColor="#2B4EFF" />
        </linearGradient>
        <linearGradient id="mascotBelly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F9FBFF" />
          <stop offset="1" stopColor="#E7ECFF" />
        </linearGradient>
        <linearGradient id="mascotAccent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2ED8A0" />
          <stop offset="1" stopColor="#22B085" />
        </linearGradient>
        <radialGradient id="mascotShadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#080F2E" stopOpacity="0.35" />
          <stop offset="1" stopColor="#080F2E" stopOpacity="0" />
        </radialGradient>
        <filter id="mascotGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* shadow */}
      <ellipse cx="100" cy="205" rx="55" ry="7" fill="url(#mascotShadow)" />

      {/* antenna */}
      <line
        x1="100"
        y1="22"
        x2="100"
        y2="38"
        stroke="#2B4EFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="100" cy="18" r="6" fill="url(#mascotAccent)" />
      <circle cx="100" cy="18" r="10" fill="#2ED8A0" opacity="0.25" filter="url(#mascotGlow)" />

      {/* head */}
      <rect
        x="42"
        y="38"
        width="116"
        height="86"
        rx="28"
        fill="url(#mascotBody)"
      />
      {/* head highlight */}
      <path
        d="M55 50 Q 55 42 70 42 L 130 42 Q 150 42 150 60"
        stroke="white"
        strokeOpacity="0.22"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* face plate */}
      <rect x="56" y="56" width="88" height="50" rx="18" fill="url(#mascotBelly)" />

      {/* eyes */}
      <g>
        <ellipse
          cx="82"
          cy="82"
          rx="7"
          ry="9"
          fill="#080F2E"
          className={animated ? "mascot-eye" : undefined}
        />
        <ellipse cx="84.5" cy="79" rx="2.2" ry="2.2" fill="white" />
      </g>
      <g>
        <ellipse
          cx="118"
          cy="82"
          rx="7"
          ry="9"
          fill="#080F2E"
          className={animated ? "mascot-eye delay" : undefined}
        />
        <ellipse cx="120.5" cy="79" rx="2.2" ry="2.2" fill="white" />
      </g>

      {/* cheeks */}
      <ellipse cx="66" cy="96" rx="5" ry="3" fill="#2ED8A0" opacity="0.35" />
      <ellipse cx="134" cy="96" rx="5" ry="3" fill="#2ED8A0" opacity="0.35" />

      {/* mouth — varies slightly by pose */}
      {pose === "celebrate" ? (
        <path
          d="M88 98 Q 100 112 112 98"
          stroke="#080F2E"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="#080F2E"
          fillOpacity="0.12"
        />
      ) : pose === "thinking" ? (
        <path
          d="M90 100 L 108 100"
          stroke="#080F2E"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M88 98 Q 100 108 112 98"
          stroke="#080F2E"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
      )}

      {/* body */}
      <rect
        x="56"
        y="128"
        width="88"
        height="60"
        rx="20"
        fill="url(#mascotBody)"
      />
      {/* body panel */}
      <rect x="72" y="142" width="56" height="32" rx="10" fill="url(#mascotBelly)" />
      {/* status dots on panel */}
      <circle cx="84" cy="158" r="3" fill="#2ED8A0" />
      <circle cx="96" cy="158" r="3" fill="#2B4EFF" />
      <circle cx="108" cy="158" r="3" fill="#2ED8A0" opacity="0.4" />
      <rect x="80" y="166" width="40" height="2" rx="1" fill="#2B4EFF" opacity="0.35" />

      {/* arms — pose-specific */}
      {pose === "wave" ? (
        <g style={{ transformOrigin: "45px 140px" }}>
          <g className={animated ? "origin-[45px_140px] animate-wave" : undefined}>
            {/* left arm waving up */}
            <rect x="24" y="108" width="18" height="44" rx="9" fill="url(#mascotBody)" transform="rotate(-28 33 130)" />
            <circle cx="22" cy="106" r="11" fill="url(#mascotAccent)" />
          </g>
          {/* right arm down */}
          <rect x="158" y="138" width="18" height="44" rx="9" fill="url(#mascotBody)" />
          <circle cx="167" cy="184" r="11" fill="url(#mascotAccent)" />
        </g>
      ) : pose === "celebrate" ? (
        <>
          <rect x="18" y="108" width="18" height="44" rx="9" fill="url(#mascotBody)" transform="rotate(-40 27 130)" />
          <circle cx="15" cy="100" r="11" fill="url(#mascotAccent)" />
          <rect x="164" y="108" width="18" height="44" rx="9" fill="url(#mascotBody)" transform="rotate(40 173 130)" />
          <circle cx="185" cy="100" r="11" fill="url(#mascotAccent)" />
        </>
      ) : pose === "thinking" ? (
        <>
          {/* right arm up to chin */}
          <rect x="124" y="96" width="16" height="36" rx="8" fill="url(#mascotBody)" transform="rotate(28 132 114)" />
          <circle cx="146" cy="100" r="10" fill="url(#mascotAccent)" />
          {/* left arm across waist */}
          <rect x="28" y="140" width="18" height="40" rx="9" fill="url(#mascotBody)" transform="rotate(15 37 160)" />
          <circle cx="50" cy="182" r="11" fill="url(#mascotAccent)" />
        </>
      ) : pose === "working" ? (
        <>
          <rect x="28" y="140" width="18" height="36" rx="9" fill="url(#mascotBody)" />
          <circle cx="37" cy="178" r="10" fill="url(#mascotAccent)" />
          <rect x="154" y="140" width="18" height="36" rx="9" fill="url(#mascotBody)" />
          <circle cx="163" cy="178" r="10" fill="url(#mascotAccent)" />
          {/* tiny laptop on lap */}
          <rect x="58" y="176" width="84" height="8" rx="2" fill="#131B44" />
          <rect x="62" y="160" width="76" height="18" rx="2" fill="#131B44" />
          <rect x="66" y="164" width="68" height="10" rx="1" fill="#2B4EFF" opacity="0.8" />
          <line x1="70" y1="168" x2="100" y2="168" stroke="#2ED8A0" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="70" y1="172" x2="126" y2="172" stroke="#fff" strokeOpacity=".4" strokeWidth="1.4" strokeLinecap="round" />
        </>
      ) : (
        // default
        <>
          <rect x="28" y="138" width="18" height="40" rx="9" fill="url(#mascotBody)" />
          <circle cx="37" cy="180" r="11" fill="url(#mascotAccent)" />
          <rect x="154" y="138" width="18" height="40" rx="9" fill="url(#mascotBody)" />
          <circle cx="163" cy="180" r="11" fill="url(#mascotAccent)" />
        </>
      )}

      {/* feet */}
      <ellipse cx="78" cy="194" rx="12" ry="6" fill="#131B44" />
      <ellipse cx="122" cy="194" rx="12" ry="6" fill="#131B44" />

      {/* tiny E logo on chest panel */}
      <g transform="translate(96 148)">
        <path
          d="M0 0 h10 v2 h-8 v2 h7 v2 h-7 v2 h8 v2 h-10 z"
          fill="#2B4EFF"
        />
      </g>
    </svg>
  );
}
