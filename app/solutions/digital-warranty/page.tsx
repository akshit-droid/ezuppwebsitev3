import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: { absolute: "Ezupp — One Platform. Every Business Need." },
  description:
    "QR-based warranty activation, product authentication & automated support — Ezupp Digital Warranty turns every sale into a direct relationship.",
  alternates: {
    canonical: "https://ezupp.com/solutions/digital-warranty",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "QR-based warranty activation, product authentication & automated support — Ezupp Digital Warranty turns every sale into a direct relationship.",
    url: "https://ezupp.com/solutions/digital-warranty",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "QR-based warranty activation, product authentication & automated support — Ezupp Digital Warranty turns every sale into a direct relationship.",
  },
};

export default function DigitalWarrantyPage() {
  return <HomeShell />;
}
