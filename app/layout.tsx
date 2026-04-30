import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Ezupp — One Platform. Every Business Needs.",
    template: "%s · Ezupp",
  },
  description:
    "Ezupp unifies ERP, CRM, On-Demand operations, and WhatsApp Automation — a single intelligent enterprise platform by Electrovese Solutions.",
  keywords: [
    "Ezupp",
    "Electrovese",
    "ERP",
    "CRM",
    "HRMS",
    "WhatsApp Automation",
    "Enterprise Platform",
    "Distributor Management",
    "Digital Warranty Activation",
  ],
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Needs.",
    description:
      "ERP, CRM, On-Demand, and WhatsApp Automation — unified. Built for enterprises that can't afford disconnected systems.",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ezupp — One Platform. Every Business Needs.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Needs.",
    images: ["/assets/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#2B4EFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZJXF46NEW0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZJXF46NEW0');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
