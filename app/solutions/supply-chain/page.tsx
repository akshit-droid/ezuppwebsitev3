import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: { absolute: "Ezupp — One Platform. Every Business Need." },
  description:
    "Plan, procure, warehouse, and dispatch with Ezupp Supply Chain — automated workflows across every node, from PO to last-mile delivery.",
  alternates: {
    canonical: "https://ezupp.com/solutions/supply-chain",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Plan, procure, warehouse, and dispatch with Ezupp Supply Chain — automated workflows across every node, from PO to last-mile delivery.",
    url: "https://ezupp.com/solutions/supply-chain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Plan, procure, warehouse, and dispatch with Ezupp Supply Chain — automated workflows across every node, from PO to last-mile delivery.",
  },
};

export default function SupplyChainPage() {
  return <HomeShell />;
}
