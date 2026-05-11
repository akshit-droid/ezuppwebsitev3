import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { WarrantyGraphic } from "@/components/solution/SolutionGraphics";
import { WarrantyShowcase } from "@/components/solution/WarrantyShowcase";

export const metadata: Metadata = {
  title: "Digital Warranty Activation · QR Registration & Authentication | Ezupp",
  description:
    "Protect your brand and delight customers with seamless QR-based warranty activation, product authentication, and automated support flows.",
};

export default function WarrantyPage() {
  return (
    <SolutionPage
      eyebrow="Warranty"
      title={
        <>
          Turn every <span className="grad-text">sale</span> into a direct
          relationship.
        </>
      }
      tagline="Digital activation flows that bridge the gap between anonymous sales and loyal customers."
      description="Traditional warranty cards are lost, ignored, or fake. Ezupp's Digital Warranty Activation replaces paper with a single scan. Customers activate their warranty on WhatsApp in seconds, verify product authenticity instantly, and stay connected with your brand long after the box is opened."
      hero={<WarrantyGraphic />}
      mascotPose="wave"
      leadSource="Digital Warranty Activation page"
      leadInterest="Digital Warranty Activation"
      benefits={[
        { stat: "3s", label: "Activation time" },
        { stat: "+85%", label: "Data capture" },
        { stat: "Zero", label: "Paper waste" },
        { stat: "100%", label: "Authenticity" },
      ]}
      features={[
        {
          glyph: "📱",
          title: "Scan-to-Activate",
          desc: "Unique QR codes on every product. One scan opens a WhatsApp chat that handles registration, profiling, and activation in one flow.",
        },
        {
          glyph: "🛡️",
          title: "Anti-Counterfeit",
          desc: "Protect your brand with real-time product authentication. Notify customers instantly if a serial number is already registered or fraudulent.",
        },
        {
          glyph: "📜",
          title: "Digital Certificates",
          desc: "Automatically issue PDF warranty certificates via WhatsApp and Email. No more hunting for physical invoices or stamped cards.",
        },
        {
          glyph: "🔔",
          title: "Expiry Alerts",
          desc: "Automated WhatsApp nudges before a warranty expires. Offer renewals, AMC upgrades, or loyalty points to drive repeat sales.",
        },
        {
          glyph: "🛠️",
          title: "Claim Management",
          desc: "Customers can initiate service requests or warranty claims directly from the chat. Attach photos, describe issues, and track status live.",
        },
        {
          glyph: "📊",
          title: "Consumer Insights",
          desc: "Finally see who is buying your products. Track demographics, locations, and purchase patterns even when selling via retail networks.",
        },
        {
          glyph: "💬",
          title: "WhatsApp Feedback",
          desc: "Collect NPS and product reviews immediately after activation while the customer's excitement is at its peak.",
        },
        {
          glyph: "🔗",
          title: "CRM Integration",
          desc: "Every activation updates your Smart CRM. Bridge the gap between after-sales service and your marketing/sales teams.",
        },
      ]}
      howItWorks={[
        {
          title: "Label your products",
          desc: "Generate unique QR codes for every SKU or batch from your Ezupp dashboard.",
        },
        {
          title: "Customer scans & chats",
          desc: "The scan launches a WhatsApp bot. Registration takes less than 30 seconds with no app required.",
        },
        {
          title: "Lifetime connection",
          desc: "The warranty is active. You now have a verified channel to send support, offers, and survey pings.",
        },
      ]}
    >
      {/* Rich product showcase — scan tile + WhatsApp chat + certificate + insights */}
      <WarrantyShowcase />
    </SolutionPage>
  );
}
