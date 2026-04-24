import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { LoyaltyGraphic } from "@/components/solution/SolutionGraphics";

export const metadata: Metadata = {
  title: "Loyalty Management · QR Warranty & Channel Incentives | Ezupp",
  description:
    "Drive retention with QR-based warranty activation and reward programs across primary, secondary, and tertiary sales channels.",
};

export default function LoyaltyPage() {
  return (
    <SolutionPage
      eyebrow="Retention · Loyalty"
      title={
        <>
          Turn every sale into a <span className="grad-text">loyalty touchpoint.</span>
        </>
      }
      tagline="QR-based warranty activation + tiered incentives for brands, distributors, retailers, and end consumers — all in one place."
      description="Ezupp Loyalty lets customers scan a QR at purchase to activate warranty, while you reward every stakeholder in the chain — distributors on primary sales, retailers on secondary, and consumers on tertiary. Points, tiers, redemptions, and analytics, handled."
      hero={<LoyaltyGraphic />}
      mascotPose="celebrate"
      leadSource="Loyalty Management page"
      leadInterest="Loyalty Management"
      benefits={[
        { stat: "3.4×", label: "Repeat-purchase rate" },
        { stat: "+68%", label: "Warranty registrations" },
        { stat: "92%", label: "Channel participation" },
        { stat: "24 hr", label: "Payout turnaround" },
      ]}
      features={[
        {
          glyph: "📱",
          title: "QR Warranty Activation",
          desc: "Consumers scan a unique QR on the product to register warranty instantly — no forms, no paperwork. You capture every buyer as a known customer.",
        },
        {
          glyph: "🏭",
          title: "Primary Sales Incentives",
          desc: "Reward distributors automatically for every lift from your warehouse — slab-based schemes, target bonuses, and seasonal boosters.",
        },
        {
          glyph: "🏪",
          title: "Secondary Sales Rewards",
          desc: "Track distributor → retailer transactions in real time and run targeted schemes for retailers based on volume, mix, or geography.",
        },
        {
          glyph: "🎁",
          title: "Tertiary / Consumer Points",
          desc: "End consumers earn points on every scan — redeemable for cashback, gifts, upgrades, or loyalty-tier benefits.",
        },
        {
          glyph: "📊",
          title: "Program Analytics",
          desc: "See which schemes are lifting what numbers, drop-off cohorts, channel leaderboards, and predicted ROI — in one dashboard.",
        },
        {
          glyph: "💸",
          title: "Automated Payouts",
          desc: "Direct bank transfers, UPI, or wallet credits trigger automatically based on your scheme rules. No reconciliation headaches.",
        },
      ]}
      howItWorks={[
        {
          title: "Unique QR per SKU",
          desc: "Generate tamper-proof QR codes and bind them to SKUs, batches, and serial numbers.",
        },
        {
          title: "Reward every scan",
          desc: "Primary, secondary, and tertiary stakeholders earn automatically based on your scheme rules.",
        },
        {
          title: "Redeem & repeat",
          desc: "Users redeem for cash, gifts, or tier upgrades — and you see who your best channel partners really are.",
        },
      ]}
    />
  );
}
