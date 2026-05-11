import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: { absolute: "Ezupp — One Platform. Every Business Need." },
  description:
    "Run channel loyalty + QR-based warranty programs across primary, secondary & tertiary sales — drive retention with Ezupp Loyalty.",
  alternates: {
    canonical: "https://ezupp.com/solutions/loyalty-app",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Run channel loyalty + QR-based warranty programs across primary, secondary & tertiary sales — drive retention with Ezupp Loyalty.",
    url: "https://ezupp.com/solutions/loyalty-app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Run channel loyalty + QR-based warranty programs across primary, secondary & tertiary sales — drive retention with Ezupp Loyalty.",
  },
};

export default function LoyaltyAppPage() {
  return <HomeShell />;
}
