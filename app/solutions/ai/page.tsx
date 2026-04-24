import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { AIGraphic } from "@/components/solution/SolutionGraphics";

export const metadata: Metadata = {
  title: "AI Powered Ecosystem · Smart ERP & CRM | Ezupp",
  description:
    "Lead qualification, call analysis, intelligent lead routing, and route-optimised appointments — AI layered across your ERP and CRM.",
};

export default function AIPage() {
  return (
    <SolutionPage
      eyebrow="Intelligence · AI"
      title={
        <>
          Put <span className="grad-text">AI</span> to work across your ERP and CRM.
        </>
      }
      tagline="Qualify leads, analyse calls, route opportunities, and optimise appointment travel — automatically."
      description="Ezupp AI is not a feature bolted on — it's a layer that reads every conversation, every CRM record, every ERP event, and quietly makes the next decision smarter. Sales, operations, support, and ops teams all benefit without changing how they work."
      hero={<AIGraphic />}
      mascotPose="working"
      leadSource="AI Ecosystem page"
      leadInterest="AI Powered Ecosystem"
      benefits={[
        { stat: "+42%", label: "Qualified-lead rate" },
        { stat: "−31%", label: "Time to first contact" },
        { stat: "2.8×", label: "Appointments / day / rep" },
        { stat: "98%", label: "Call-analysis coverage" },
      ]}
      features={[
        {
          glyph: "🎯",
          title: "Lead Qualification (BANT+)",
          desc: "Every inbound lead is scored on budget, authority, need, timeline — and enriched with firmographic signals. Junk drops out before your SDR sees it.",
        },
        {
          glyph: "🎙️",
          title: "Call & Voice Analysis",
          desc: "Auto-transcribe, summarise, extract objections, sentiment and next actions from every sales or support call. Never lose context between conversations.",
        },
        {
          glyph: "🧭",
          title: "Intelligent Lead Routing",
          desc: "Assign leads to the right rep based on territory, load, historical close-rate, and product expertise — not just round-robin.",
        },
        {
          glyph: "🗺️",
          title: "Appointment Route Optimisation",
          desc: "Daily plan for field teams that maximises meetings per rep, minimises travel, and respects appointment priorities.",
        },
        {
          glyph: "🔮",
          title: "Predictive Pipeline",
          desc: "Forecast close probabilities, at-risk deals, and revenue slippage — so managers coach the right reps on the right deals.",
        },
        {
          glyph: "⚙️",
          title: "ERP Anomaly Detection",
          desc: "Catch inventory mismatches, invoice outliers, and supply anomalies in real time — before they become costly.",
        },
      ]}
      howItWorks={[
        {
          title: "Connect your stack",
          desc: "Plug Ezupp AI into your existing ERP, CRM, telephony and WhatsApp — no rip and replace.",
        },
        {
          title: "AI listens and scores",
          desc: "Every lead, call, and transaction is analysed. The platform gets smarter as it sees more of your business.",
        },
        {
          title: "Decisions get automated",
          desc: "Routing, scheduling, follow-ups and alerts trigger automatically. Humans focus on selling and closing.",
        },
      ]}
    />
  );
}
