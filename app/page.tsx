import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: {
    absolute: "Ezupp ERP— Sales first ERP solution for Distribution Led Enterprises",
  },
  description:
    "Ezupp is an all-in-one enterprise platform combining ERP, CRM, On-Demand, and WhatsApp Automation. Designed for mid-to-large businesses across manufacturing, distribution, retail, healthcare, and services.",
  alternates: {
    canonical: "https://ezupp.com/",
  },
  openGraph: {
    title: "Ezupp ERP— Sales first ERP solution for Distribution Led Enterprises",
    description:
      "Ezupp is an all-in-one enterprise platform combining ERP, CRM, On-Demand, and WhatsApp Automation. Designed for mid-to-large businesses across manufacturing, distribution, retail, healthcare, and services.",
    url: "https://ezupp.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp ERP— Sales first ERP solution for Distribution Led Enterprises",
    description:
      "Ezupp is an all-in-one enterprise platform combining ERP, CRM, On-Demand, and WhatsApp Automation. Designed for mid-to-large businesses across manufacturing, distribution, retail, healthcare, and services.",
  },
};

export default function Home() {
  return <HomeShell />;
}
