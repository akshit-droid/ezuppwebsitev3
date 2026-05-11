import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealProvider } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: {
    absolute: "Ezupp Knowledge Base",
  },
  description:
    "Implementation guides, configuration references, and operational runbooks for teams deploying Ezupp ERP.",
  alternates: {
    canonical: "https://ezupp.com/knowledge",
  },
  openGraph: {
    title: "Ezupp Knowledge Base",
    description:
      "Implementation guides, configuration references, and operational runbooks for teams deploying Ezupp ERP.",
    url: "https://ezupp.com/knowledge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezupp Knowledge Base",
    description:
      "Implementation guides, configuration references, and operational runbooks for teams deploying Ezupp ERP.",
  },
};

interface Article {
  title: string;
  href?: string;
  summary: string;
}

const articles: Article[] = [
  {
    title: "How to Set Up Distributor Clusters in Ezupp",
    href: "/knowledge/set-up-distributor-clusters",
    summary:
      "Step-by-step instructions for building territory clusters that support clean assignment, performance tracking, and escalation flows.",
  },
  {
    title: "Mobile App Role Permissions Matrix",
    summary:
      "Use this article to prevent overexposed data and ensure each role sees only the actions and dashboards they need.",
  },
  {
    title: "Integration Health Check Runbook",
    summary:
      "Operational checks for verifying live integrations across ERP, CRM, and WhatsApp endpoints.",
  },
];

export default function KnowledgeHub() {
  return (
    <RevealProvider>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-40 md:pb-24">
          <Container className="px-6 md:px-16">
            <SectionEyebrow>Knowledge Base</SectionEyebrow>
            <h1 className="mt-5 text-[clamp(34px,5.6vw,64px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-brand-navy">
              Ezupp Knowledge Base
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.78] text-brand-gray">
              Implementation guides, configuration references, and operational
              runbooks for teams deploying Ezupp ERP.
            </p>
          </Container>
        </section>

        <section className="bg-brand-soft py-16 md:py-24">
          <Container className="px-6 md:px-16">
            <ul className="grid gap-6 md:grid-cols-2">
              {articles.map((a) => (
                <li
                  key={a.title}
                  className="rounded-2xl border border-black/5 bg-white p-7 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                >
                  <h2 className="text-[clamp(20px,2vw,24px)] font-bold leading-[1.25] tracking-[-0.02em] text-brand-navy">
                    {a.href ? (
                      <Link href={a.href} className="hover:text-brand-blue">
                        {a.title}
                      </Link>
                    ) : (
                      a.title
                    )}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.7] text-brand-gray">
                    {a.summary}
                  </p>
                  {a.href ? (
                    <Link
                      href={a.href}
                      className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-blue hover:underline"
                    >
                      Read article →
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </RevealProvider>
  );
}
