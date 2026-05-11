import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealProvider } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: {
    absolute: "How to Set Up Distributor Clusters in Ezupp",
  },
  description:
    "Step-by-step instructions for building territory clusters that support clean assignment, performance tracking, and escalation flows.",
  alternates: {
    canonical: "https://ezupp.com/knowledge/set-up-distributor-clusters",
  },
  openGraph: {
    title: "How to Set Up Distributor Clusters in Ezupp",
    description:
      "Step-by-step instructions for building territory clusters that support clean assignment, performance tracking, and escalation flows.",
    url: "https://ezupp.com/knowledge/set-up-distributor-clusters",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Set Up Distributor Clusters in Ezupp",
    description:
      "Step-by-step instructions for building territory clusters that support clean assignment, performance tracking, and escalation flows.",
  },
};

export default function DistributorClustersArticle() {
  return (
    <RevealProvider>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-white pt-32 pb-12 md:pt-40 md:pb-16">
          <Container className="px-6 md:px-16">
            <Link
              href="/knowledge"
              className="text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-blue hover:underline"
            >
              ← Knowledge Base
            </Link>
            <SectionEyebrow>Article · Distributor Management</SectionEyebrow>
            <h1 className="mt-5 text-[clamp(30px,4.6vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-brand-navy">
              How to Set Up Distributor Clusters in Ezupp
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.78] text-brand-gray">
              Step-by-step instructions for building territory clusters that
              support clean assignment, performance tracking, and escalation
              flows.
            </p>
          </Container>
        </section>

        <section className="bg-brand-soft py-12 md:py-20">
          <Container className="px-6 md:px-16">
            <article className="prose prose-slate mx-auto max-w-3xl text-[16px] leading-[1.78] text-brand-navy/90">
              <h2 className="mt-0 text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.02em] text-brand-navy">
                1. Define Your Cluster Strategy
              </h2>
              <p className="mt-4">
                Before creating clusters in Ezupp, decide the dimension that
                drives your routing — geography, channel, segment, or a hybrid.
                Document the rule so future onboarding stays consistent.
              </p>

              <h2 className="mt-10 text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.02em] text-brand-navy">
                2. Create Cluster Records
              </h2>
              <p className="mt-4">
                In <strong>Admin → Distributor Network → Clusters</strong>, add
                each cluster with a unique code, parent region, and primary
                contact. Codes are immutable; pick a naming convention you can
                live with for years.
              </p>

              <h2 className="mt-10 text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.02em] text-brand-navy">
                3. Assign Distributors
              </h2>
              <p className="mt-4">
                Bulk-import via CSV or assign individually from the distributor
                profile. Every distributor must belong to exactly one cluster —
                Ezupp blocks duplicate assignment to prevent commission
                conflicts.
              </p>

              <h2 className="mt-10 text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.02em] text-brand-navy">
                4. Configure Escalation Flows
              </h2>
              <p className="mt-4">
                Map each cluster to a primary owner, secondary owner, and
                escalation manager. Tickets unresolved past SLA route up the
                chain automatically.
              </p>

              <h2 className="mt-10 text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.02em] text-brand-navy">
                5. Verify & Go Live
              </h2>
              <p className="mt-4">
                Run the built-in <strong>Cluster Health Check</strong> report
                to surface unassigned distributors, missing owners, or
                overlapping territories. Resolve every red flag before
                enabling field sync.
              </p>
            </article>
          </Container>
        </section>
      </main>
      <Footer />
    </RevealProvider>
  );
}
