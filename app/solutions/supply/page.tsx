import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { SupplyGraphic } from "@/components/solution/SolutionGraphics";

export const metadata: Metadata = {
  title: "Supply Chain Management · Plan, Procure, Dispatch | Ezupp",
  description:
    "Streamline procurement, warehousing, and last-mile delivery with intelligent workflow automation across every node of your supply chain.",
};

export default function SupplyPage() {
  return (
    <SolutionPage
      eyebrow="Operations"
      title={
        <>
          From PO to <span className="grad-text">porch</span>, without the
          paperwork.
        </>
      }
      tagline="Procurement, warehousing, dispatch, and last-mile — orchestrated in one workflow."
      description="Ezupp Supply Chain is a single control tower across your ops. Demand plans feed procurement, POs trigger inbound, warehouses balance stock, and dispatch stays in sync with your field and distributor apps — with alerts when anything drifts."
      hero={<SupplyGraphic />}
      mascotPose="working"
      leadSource="Supply Chain page"
      leadInterest="Supply Chain Management"
      benefits={[
        { stat: "99.2%", label: "On-time dispatch" },
        { stat: "−31%", label: "Stock-outs" },
        { stat: "+18%", label: "Warehouse throughput" },
        { stat: "<1 hr", label: "Order-to-pick SLA" },
      ]}
      features={[
        {
          glyph: "📋",
          title: "Demand Planning",
          desc: "Statistical forecasts blended with sales intel — so procurement isn't guessing and warehouses aren't gambling.",
        },
        {
          glyph: "🧾",
          title: "Procurement Workflows",
          desc: "Approval-based PO creation, vendor scorecards, and GRN reconciliation — with invoicing and payments linked.",
        },
        {
          glyph: "🏬",
          title: "Warehouse Ops",
          desc: "Bin-level inventory, put-away, picking, and cycle counts — with mobile scanner support for pickers.",
        },
        {
          glyph: "🚚",
          title: "Dispatch & Last-mile",
          desc: "Auto-allocate shipments to carriers, optimise last-mile routes, and expose live tracking to customers on WhatsApp.",
        },
        {
          glyph: "🔔",
          title: "Control Tower Alerts",
          desc: "Anomalies surface early — late POs, stock dips, delayed dispatches, SLA breaches — with owners auto-tagged.",
        },
        {
          glyph: "🔗",
          title: "ERP + CRM Integration",
          desc: "Two-way sync with your ERP (Tally, SAP, Oracle, Zoho) and Ezupp CRM — orders, invoices, and returns stay consistent.",
        },
      ]}
    />
  );
}
