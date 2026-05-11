import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Integrations } from "@/components/sections/Integrations";
import { Compare } from "@/components/sections/Compare";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { RevealProvider } from "@/components/ui/Reveal";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { WhyEzuppQuiz } from "@/components/quiz/WhyEzuppQuiz";

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
  return (
    <RevealProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Solutions />
        <Industries />
        <Stats />
        <About />
        <Integrations />
        <Compare />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <WhyEzuppQuiz />
    </RevealProvider>
  );
}
