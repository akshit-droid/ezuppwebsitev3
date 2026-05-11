import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: { absolute: "Ezupp — One Platform. Every Business Need." },
  description:
    "Not exposed separately in the crawl; the route rendered the shared homepage shell.",
  alternates: {
    canonical: "https://ezupp.com/solutions/enterprise-ai",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Not exposed separately in the crawl; the route rendered the shared homepage shell.",
    url: "https://ezupp.com/solutions/enterprise-ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Not exposed separately in the crawl; the route rendered the shared homepage shell.",
  },
};

export default function EnterpriseAIPage() {
  return <HomeShell />;
}
