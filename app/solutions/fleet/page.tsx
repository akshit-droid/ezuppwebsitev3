import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { FleetGraphic } from "@/components/solution/SolutionGraphics";

export const metadata: Metadata = {
  title: "Sales Fleet Management · Real-time Tracking & Routing | Ezupp",
  description:
    "Live location tracking, AI route optimisation, performance dashboards, and a rep-friendly mobile app for your entire field sales force.",
};

export default function FleetPage() {
  return (
    <SolutionPage
      eyebrow="Field Sales"
      title={
        <>
          Give your field team the <span className="grad-text">shortest
          path</span> to the next deal.
        </>
      }
      tagline="Real-time tracking, route optimisation, and a performance dashboard for your entire field sales fleet."
      description="Ezupp Sales Fleet turns a scattered field team into a coordinated engine. Reps see their optimal daily beat. Managers see live location, coverage, and missed visits. Customers get more meetings, fewer apologies."
      hero={<FleetGraphic />}
      mascotPose="working"
      leadSource="Sales Fleet page"
      leadInterest="Sales Fleet Management"
      benefits={[
        { stat: "+38%", label: "Visits per rep / day" },
        { stat: "−22%", label: "KM travelled / visit" },
        { stat: "96%", label: "Beat-plan adherence" },
        { stat: "Live", label: "Location updates" },
      ]}
      features={[
        {
          glyph: "📍",
          title: "Live Tracking",
          desc: "See every rep's location on a single map — with battery-aware GPS that doesn't kill their phone.",
        },
        {
          glyph: "🧭",
          title: "Route Optimisation",
          desc: "AI builds the day's beat to maximise meetings and minimise driving — respecting priorities and SLAs.",
        },
        {
          glyph: "📝",
          title: "Visit & Order Capture",
          desc: "Check-in, capture orders, log outcomes, and collect signatures in a single flow — offline-first mobile app.",
        },
        {
          glyph: "📊",
          title: "Performance Dashboards",
          desc: "Rep scorecards, coverage heatmaps, productivity trends, and territory gaps — all automatic.",
        },
        {
          glyph: "🚨",
          title: "Smart Alerts",
          desc: "Geo-fence breaches, missed visits, stale leads, and anomaly detection — pushed to managers, not chased by them.",
        },
        {
          glyph: "💬",
          title: "In-app Messaging",
          desc: "Reps and managers coordinate inside the same app — no more WhatsApp archaeology to find yesterday's commitments.",
        },
      ]}
    />
  );
}
