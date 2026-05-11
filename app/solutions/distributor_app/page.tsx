import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: { absolute: "Ezupp — One Platform. Every Business Need." },
  description:
    "Manage your distributor network end-to-end — master data, dynamic pricing, sales orders, schemes & loyalty — on Ezupp's distribution-led ERP.",
  alternates: {
    canonical: "https://ezupp.com/solutions/distributor_app",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Manage your distributor network end-to-end — master data, dynamic pricing, sales orders, schemes & loyalty — on Ezupp's distribution-led ERP.",
    url: "https://ezupp.com/solutions/distributor_app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Manage your distributor network end-to-end — master data, dynamic pricing, sales orders, schemes & loyalty — on Ezupp's distribution-led ERP.",
  },
};

export default function DistributorPage() {
  return <HomeShell />;
}
