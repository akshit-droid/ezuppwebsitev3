import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 32 32",
  fill: "none" as const,
});

export function FleetIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="2" y="13" width="14" height="10" rx="2.5" stroke="#2B4EFF" strokeWidth="1.8" />
      <path d="M16 18h8l-3-5h-5v5z" stroke="#2B4EFF" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M24 18h4v5h-4z" stroke="#2B4EFF" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="8" cy="25" r="2.2" stroke="#2ED8A0" strokeWidth="1.8" />
      <circle cx="22" cy="25" r="2.2" stroke="#2ED8A0" strokeWidth="1.8" />
      <path d="M6 10l4-4 4 4" stroke="#2B4EFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DistributorIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="16" cy="6" r="3" stroke="#2ED8A0" strokeWidth="1.8" />
      <circle cx="6" cy="26" r="3" stroke="#2ED8A0" strokeWidth="1.8" />
      <circle cx="26" cy="26" r="3" stroke="#2ED8A0" strokeWidth="1.8" />
      <line x1="16" y1="9" x2="6" y2="23" stroke="#2B4EFF" strokeWidth="1.6" />
      <line x1="16" y1="9" x2="26" y2="23" stroke="#2B4EFF" strokeWidth="1.6" />
      <line x1="6" y1="26" x2="26" y2="26" stroke="#2B4EFF" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="2" fill="#2ED8A0" opacity=".5" />
    </svg>
  );
}

export function SupplyIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="2" y="8" width="10" height="12" rx="2" stroke="#2B4EFF" strokeWidth="1.8" />
      <rect x="20" y="12" width="10" height="10" rx="2" stroke="#2B4EFF" strokeWidth="1.8" />
      <path d="M12 14h8" stroke="#2B4EFF" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 11l3 3-3 3" stroke="#2ED8A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="23" r="2" fill="#2ED8A0" />
      <circle cx="25" cy="25" r="2" fill="#2ED8A0" />
    </svg>
  );
}

export function LoyaltyIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M16 27L5 16a6 6 0 0 1 8.49-8.49L16 10l2.51-2.49A6 6 0 0 1 27 16L16 27z"
        stroke="#2ED8A0"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M11 19l3 3 6-7" stroke="#2B4EFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AIIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="4" y="4" width="24" height="24" rx="5" stroke="#2B4EFF" strokeWidth="1.8" />
      <circle cx="11" cy="12" r="2" fill="#2ED8A0" />
      <circle cx="21" cy="12" r="2" fill="#2ED8A0" />
      <circle cx="16" cy="21" r="2" fill="#2ED8A0" />
      <line x1="11" y1="14" x2="16" y2="19" stroke="#2B4EFF" strokeWidth="1.4" />
      <line x1="21" y1="14" x2="16" y2="19" stroke="#2B4EFF" strokeWidth="1.4" />
      <line x1="11" y1="12" x2="21" y2="12" stroke="#2B4EFF" strokeWidth="1.4" />
      <path d="M24 4v-3M28 4l2-2M28 8h3" stroke="#2ED8A0" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function HRMSIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="11" cy="10" r="3.5" stroke="#2B4EFF" strokeWidth="1.8" />
      <path d="M4 26c0-4 3.1-7 7-7" stroke="#2B4EFF" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="21" cy="10" r="3.5" stroke="#2B4EFF" strokeWidth="1.8" opacity=".4" />
      <path
        d="M21 19c3.9 0 7 3 7 7"
        stroke="#2B4EFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity=".4"
      />
      <path d="M18 24h8M22 20v8" stroke="#2ED8A0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CRMIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M28 20a2.7 2.7 0 0 1-2.7 2.7H9.3L4 28V7.3A2.7 2.7 0 0 1 6.7 4.6h18.6A2.7 2.7 0 0 1 28 7.3V20z"
        stroke="#2ED8A0"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <line x1="10" y1="12" x2="22" y2="12" stroke="#2B4EFF" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="10" y1="17" x2="17" y2="17" stroke="#2B4EFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function HealthIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="4" y="4" width="24" height="24" rx="4" stroke="#2B4EFF" strokeWidth="1.8" />
      <path d="M16 10v12M10 16h12" stroke="#2ED8A0" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 32, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M16 3C8.82 3 3 8.82 3 16c0 2.46.67 4.77 1.84 6.76L3 29l6.38-1.8A12.9 12.9 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"
        stroke="#2ED8A0"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 11c0 0 .7 2.2 2.9 4.5s4.5 2.9 4.5 2.9l1.4-1.4a.7.7 0 0 1 1 0l1.6 1.6a.7.7 0 0 1 0 1c-.7.7-1.6 1.2-2.4 1.2C15.8 20.8 11.2 16.2 11.2 12c0-.8.5-1.7 1.2-2.4a.7.7 0 0 1 1 0l1.6 1.6a.7.7 0 0 1 0 1L13.6 13.6"
        stroke="#2B4EFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...rest}>
      <path
        d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...rest}>
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" opacity=".25" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" {...rest}>
      <path d="M9 4v10M4 9h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" {...rest}>
      <path
        d="M9 1l1.5 4.5L15 7 10.5 8.5 9 13 7.5 8.5 3 7l4.5-1.5L9 1z"
        fill="currentColor"
      />
      <path d="M14.5 12l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" fill="currentColor" opacity=".6" />
    </svg>
  );
}
