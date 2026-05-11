import type { Metadata } from "next";
import { HomeShell } from "@/components/sections/HomeShell";

export const metadata: Metadata = {
  title: { absolute: "Ezupp — One Platform. Every Business Need." },
  description:
    "Smart WhatsApp chatbots, customer support, sales campaigns, order tracking & feedback — your whole business on WhatsApp with Ezupp.",
  alternates: {
    canonical: "https://ezupp.com/solutions/whatsapp",
  },
  openGraph: {
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Smart WhatsApp chatbots, customer support, sales campaigns, order tracking & feedback — your whole business on WhatsApp with Ezupp.",
    url: "https://ezupp.com/solutions/whatsapp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp — One Platform. Every Business Need.",
    description:
      "Smart WhatsApp chatbots, customer support, sales campaigns, order tracking & feedback — your whole business on WhatsApp with Ezupp.",
  },
};

export default function WhatsAppPage() {
  return <HomeShell />;
}
