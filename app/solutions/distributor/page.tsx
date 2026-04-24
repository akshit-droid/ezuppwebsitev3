import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { DistributorGraphic } from "@/components/solution/SolutionGraphics";

export const metadata: Metadata = {
  title: "Distributor Management · End-to-end Network Visibility | Ezupp",
  description:
    "Orders, inventory, settlements, and secondary sales — full visibility across your distributor network with a simple DMS.",
};

export default function DistributorPage() {
  return (
    <SolutionPage
      eyebrow="Distribution"
      title={
        <>
          See your entire <span className="grad-text">distributor network</span>
          &nbsp;in one place.
        </>
      }
      tagline="Orders, inventory, settlements, schemes, and secondary sales — unified across every distributor."
      description="Brands with large distributor footprints spend weeks consolidating reports from spreadsheets that never quite match. Ezupp DMS replaces that with a single source of truth — orders, stock, claims, and secondary sales flow in daily, automatically."
      hero={<DistributorGraphic />}
      mascotPose="default"
      leadSource="Distributor Management page"
      leadInterest="Distributor Management"
      benefits={[
        { stat: "100%", label: "Network visibility" },
        { stat: "−64%", label: "Claim reconciliation time" },
        { stat: "+29%", label: "Fill rate" },
        { stat: "24 hr", label: "Secondary sales refresh" },
      ]}
      features={[
        {
          glyph: "📦",
          title: "Distributor Portal",
          desc: "A clean web + mobile portal for distributors — orders, inventory, schemes, claims, ledger and payments.",
        },
        {
          glyph: "📈",
          title: "Secondary Sales Capture",
          desc: "Retailer-level sales flow back daily from distributor ERPs or a lightweight retailer app — unlocking real market view.",
        },
        {
          glyph: "💰",
          title: "Claims & Settlements",
          desc: "Scheme claims, credit notes, and settlements automated end-to-end — no more Excel wars at month end.",
        },
        {
          glyph: "🎯",
          title: "Targeted Schemes",
          desc: "Design slab, QPS, or product-mix schemes for any distributor cohort. Performance and ROI visible from day one.",
        },
        {
          glyph: "📊",
          title: "Network Analytics",
          desc: "Depth of distribution, out-of-stock alerts, share-of-shelf, and white-space analysis — across your network.",
        },
        {
          glyph: "🔄",
          title: "ERP + Loyalty Integration",
          desc: "Two-way sync with your ERP and Ezupp Loyalty — so primary, secondary, and tertiary all tell one coherent story.",
        },
      ]}
    />
  );
}
