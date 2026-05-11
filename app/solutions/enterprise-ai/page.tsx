import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: { absolute: "Ezupp — One Platform. Every Business Need." },
  description:
    "AI lead qualification, call analysis, smart routing & route-optimised appointments — Ezupp's AI layer across your ERP and CRM.",
  alternates: {
    canonical: "https://ezupp.com/solutions/enterprise-ai",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "AI lead qualification, call analysis, smart routing & route-optimised appointments — Ezupp's AI layer across your ERP and CRM.",
    url: "https://ezupp.com/solutions/enterprise-ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "AI lead qualification, call analysis, smart routing & route-optimised appointments — Ezupp's AI layer across your ERP and CRM.",
  },
};

export default function EnterpriseAIPage() {
  return <HomeShell />;
}
