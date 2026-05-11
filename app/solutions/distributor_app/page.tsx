import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { DistributorGraphic } from "@/components/solution/SolutionGraphics";
import { DistributorShowcase } from "@/components/solution/DistributorShowcase";

export const metadata: Metadata = {
  title:
    "Distributor Management · Master Data, Pricing & Loyalty | Ezupp ERP",
  description:
    "Govern your distributor network the way your business works — Channel, Segment, Division, Plants. Control product visibility, dynamic pricing, sales orders, and run incentive programs from one ERP-grade platform.",
};

export default function DistributorPage() {
  return (
    <SolutionPage
      eyebrow="Distribution · ERP Module"
      title={
        <>
          See your entire <span className="grad-text">distributor network</span>
          &nbsp;in one place.
        </>
      }
      tagline="Master data, product visibility, dynamic pricing, sales orders & loyalty — across every distributor."
      description="Ezupp's Distributor Management is built on the Ezupp ERP — so the master data your business actually runs on (Channel, Segment, Division, Plants) lives in one place. Control what each distributor sees, set segment-wise pricing, approve sales orders, and run incentive or loyalty programs — through an admin console for HQ and a mobile app for every distributor."
      hero={<DistributorGraphic />}
      mascotPose="default"
      leadSource="Distributor Management page"
      leadInterest="Distributor Management"
      benefits={[
        { stat: "100%", label: "Network visibility" },
        { stat: "4-tier", label: "Master data depth" },
        { stat: "+29%", label: "Fill rate" },
        { stat: "Live", label: "Sales orders" },
      ]}
      features={[
        {
          glyph: "🗂️",
          title: "Master Data — Channel, Segment, Division, Plants",
          desc: "Model your network the way your business actually works. Every distributor sits inside a clear hierarchy that drives pricing, visibility, schemes and reporting.",
        },
        {
          glyph: "👁️",
          title: "Product Visibility Control",
          desc: "Decide what catalogue each distributor sees — by Channel, Segment, Division or any combination. Launch SKUs to one cohort without exposing the rest.",
        },
        {
          glyph: "💰",
          title: "Dynamic Pricing",
          desc: "Maintain segment-wise rate cards, slabs, and contract pricing. Update once and rates flow to every distributor app — instantly.",
        },
        {
          glyph: "🧾",
          title: "Sales Orders, End-to-end",
          desc: "Distributors place orders from their app. HQ approves, allocates from the right plant, and pushes the dispatch — all from the same record.",
        },
        {
          glyph: "🏆",
          title: "Incentive & Loyalty Programs",
          desc: "Design slab schemes, QPS, mix-of-product schemes, and loyalty tiers. Distributors track their own progress live; payouts are auto-credited.",
        },
        {
          glyph: "📈",
          title: "Secondary Sales & Network Analytics",
          desc: "Retailer-level data flows back daily. Depth of distribution, out-of-stock alerts, white-space — across your whole network.",
        },
        {
          glyph: "💳",
          title: "Claims & Settlements",
          desc: "Scheme claims, credit notes, and settlements automated end-to-end — no more Excel wars at month-end.",
        },
        {
          glyph: "📱",
          title: "App + Admin Console",
          desc: "One ERP, two surfaces — a mobile app for every distributor and an admin console for HQ. Same data, no syncing, no second tool.",
        },
      ]}
    >
      {/* Rich product showcase — hierarchy, pricing matrix, orders feed, loyalty */}
      <DistributorShowcase />
    </SolutionPage>
  );
}
