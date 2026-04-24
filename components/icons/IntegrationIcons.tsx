import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const frame = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 40 40",
  fill: "none" as const,
});

const Bg = ({ color }: { color: string }) => (
  <rect x="2" y="2" width="36" height="36" rx="10" fill={color} opacity=".1" />
);

export function TallyIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#2B4EFF" />
      <path d="M12 12v16M17 16v12M22 12v16M27 18v10" stroke="#2B4EFF" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function SAPIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#0FAAFF" />
      <path
        d="M10 14h14l-4 6 4 6H12l4-6-4-6z"
        fill="#0FAAFF"
        opacity=".8"
      />
      <circle cx="26" cy="20" r="3" fill="#2ED8A0" />
    </svg>
  );
}

export function ZohoIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#2B4EFF" />
      <path d="M12 14h14l-14 12h14" stroke="#2B4EFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SalesforceIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#00A1E0" />
      <path
        d="M14 22a3 3 0 0 1 3-5 4 4 0 0 1 7.5-1A3.5 3.5 0 0 1 28 22a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 13 22"
        stroke="#00A1E0"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function WhatsAppBizIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#25D366" />
      <path
        d="M20 10c-5.5 0-10 4.5-10 10 0 1.8.5 3.5 1.3 5L10 30l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S25.5 10 20 10z"
        stroke="#25D366"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 16c0 0 .6 1.8 2.3 3.7s3.7 2.3 3.7 2.3l1.1-1.1a.6.6 0 0 1 .8 0l1.3 1.3a.6.6 0 0 1 0 .8c-.6.6-1.3 1-2 1-3.4 0-7.2-3.8-7.2-7.2 0-.7.4-1.4 1-2a.6.6 0 0 1 .8 0l1.3 1.3a.6.6 0 0 1 0 .8L18 17.8"
        stroke="#25D366"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShopifyIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#95BF47" />
      <path
        d="M16 12l-4 1 2 15 12 2 2-14-4-1-1-2a3 3 0 0 0-5 0l-2 2z"
        fill="#95BF47"
        opacity=".85"
      />
      <path d="M21 17v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function WooIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#7F54B3" />
      <path
        d="M10 18l2 5 2-5 2 5 2-5m8 0l2 5 2-5"
        stroke="#7F54B3"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="21" r="1.6" fill="#7F54B3" />
    </svg>
  );
}

export function RazorpayIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#0C2451" />
      <path d="M14 28l8-18h4l-4 10h3l-4 8h-7z" fill="#3395FF" />
    </svg>
  );
}

export function PayUIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#00BCD4" />
      <path d="M12 14h6a3 3 0 0 1 0 6h-4v6M22 14v8a4 4 0 0 0 8 0v-8" stroke="#00BCD4" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function ShiprocketIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#8B47FF" />
      <path
        d="M28 12c-6 0-10 4-12 10l-2-1-2 4 4 2 2 4 4-2-1-2c6-2 10-6 10-12l-3-3z"
        stroke="#8B47FF"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="24" cy="16" r="1.6" fill="#8B47FF" />
    </svg>
  );
}

export function DelhiveryIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#E53935" />
      <path d="M12 16l8-4 8 4v8l-8 4-8-4v-8z" stroke="#E53935" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      <path d="M12 16l8 4 8-4M20 20v8" stroke="#E53935" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function AWSIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#FF9900" />
      <path d="M10 22c3 2 7 3 10 3s7-1 10-3" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path
        d="M14 18a2.5 2.5 0 1 1 3-3M26 18a2.5 2.5 0 1 0-3-3M18 14.5a2 2 0 1 1 4 0"
        stroke="#FF9900"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function GoogleWorkspaceIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#EA4335" />
      <rect x="12" y="14" width="16" height="12" rx="2" stroke="#EA4335" strokeWidth="1.8" fill="none" />
      <path d="M12 15l8 6 8-6" stroke="#EA4335" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      <circle cx="28" cy="26" r="2" fill="#2ED8A0" />
    </svg>
  );
}

export function MS365Icon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#D83B01" />
      <rect x="12" y="12" width="7" height="7" fill="#D83B01" opacity=".9" />
      <rect x="21" y="12" width="7" height="7" fill="#2ED8A0" opacity=".9" />
      <rect x="12" y="21" width="7" height="7" fill="#2B4EFF" opacity=".9" />
      <rect x="21" y="21" width="7" height="7" fill="#FFC107" opacity=".9" />
    </svg>
  );
}

export function TwilioIcon({ size = 40, ...r }: P) {
  return (
    <svg {...frame(size)} {...r}>
      <Bg color="#F22F46" />
      <circle cx="20" cy="20" r="8" stroke="#F22F46" strokeWidth="1.8" fill="none" />
      <circle cx="17" cy="17" r="1.8" fill="#F22F46" />
      <circle cx="23" cy="17" r="1.8" fill="#F22F46" />
      <circle cx="17" cy="23" r="1.8" fill="#F22F46" />
      <circle cx="23" cy="23" r="1.8" fill="#F22F46" />
    </svg>
  );
}
