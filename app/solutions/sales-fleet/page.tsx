import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: { absolute: "Ezupp — One Platform. Every Business Need." },
  description:
    "Track field reps live, optimise routes with AI, and manage targets — Ezupp Sales Fleet runs your entire on-ground sales force from one app.",
  alternates: {
    canonical: "https://ezupp.com/solutions/sales-fleet",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Track field reps live, optimise routes with AI, and manage targets — Ezupp Sales Fleet runs your entire on-ground sales force from one app.",
    url: "https://ezupp.com/solutions/sales-fleet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Track field reps live, optimise routes with AI, and manage targets — Ezupp Sales Fleet runs your entire on-ground sales force from one app.",
  },
};

export default function SalesFleetPage() {
  return <HomeShell />;
}
