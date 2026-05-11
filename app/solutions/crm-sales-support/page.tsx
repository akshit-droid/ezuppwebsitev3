import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: { absolute: "Ezupp — One Platform. Every Business Need." },
  description:
    "Pipeline management, smart qualification, appointments, route optimisation & sequences — Ezupp Smart CRM for end-to-end sales motion.",
  alternates: {
    canonical: "https://ezupp.com/solutions/crm-sales-support",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Pipeline management, smart qualification, appointments, route optimisation & sequences — Ezupp Smart CRM for end-to-end sales motion.",
    url: "https://ezupp.com/solutions/crm-sales-support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Pipeline management, smart qualification, appointments, route optimisation & sequences — Ezupp Smart CRM for end-to-end sales motion.",
  },
};

export default function CRMSalesSupportPage() {
  return <HomeShell />;
}
