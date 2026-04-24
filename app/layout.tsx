import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Ezupp — One Platform. Every Business Need.",
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
    "Healthcare ERP",
  ],
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "ERP, CRM, On-Demand, and WhatsApp Automation — unified. Built for enterprises that can't afford silos.",
    type: "website",
    images: ["/assets/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
