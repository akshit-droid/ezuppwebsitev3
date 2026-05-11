import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: { absolute: "Ezupp — One Platform. Every Business Need." },
  description:
    "Not exposed separately in the crawl; the route rendered the shared homepage shell.",
  alternates: {
    canonical: "https://ezupp.com/solutions/crm-sales-support",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Not exposed separately in the crawl; the route rendered the shared homepage shell.",
    url: "https://ezupp.com/solutions/crm-sales-support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Not exposed separately in the crawl; the route rendered the shared homepage shell.",
  },
};

export default function CRMSalesSupportPage() {
  return <HomeShell />;
}
