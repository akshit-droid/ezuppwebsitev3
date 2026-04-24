import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { CRMGraphic } from "@/components/solution/SolutionGraphics";

export const metadata: Metadata = {
  title: "Smart CRM · Pipeline, Appointments & Automation | Ezupp",
  description:
    "Lead management as a pipeline, smart qualification, appointment management, agent + customer apps, route optimisation, event sequences, and in-house email — in one CRM.",
};

export default function CRMPage() {
  return (
    <SolutionPage
      eyebrow="Sales · CRM"
      title={
        <>
          A CRM that actually <span className="grad-text">moves deals</span> forward.
        </>
      }
      tagline="Pipelines, qualification, appointments, agent and customer apps, route planning, and email — unified."
      description="Ezupp Smart CRM is built for teams that sell and service in the real world. Pipelines stay clean because qualification is structured. Field teams stay on track because routes are optimised. Customers get their own app. And email, WhatsApp, and calls all live in the same timeline."
      hero={<CRMGraphic />}
      mascotPose="default"
      leadSource="Smart CRM page"
      leadInterest="Smart CRM"
      benefits={[
        { stat: "+34%", label: "Win rate" },
        { stat: "−45%", label: "Admin time / rep" },
        { stat: "4.8 ★", label: "Agent app rating" },
        { stat: "1.9×", label: "Meetings / week" },
      ]}
      features={[
        {
          glyph: "🗂️",
          title: "Pipeline Lead Management",
          desc: "Drag-and-drop Kanban pipelines per business unit. Custom stages, entry criteria, and automation at every stage transition.",
        },
        {
          glyph: "🎯",
          title: "Lead Qualification",
          desc: "Structured qualification checklists (BANT, MEDDIC, your own) with scoring. Only qualified leads advance — managers get early warnings on stuck deals.",
        },
        {
          glyph: "📅",
          title: "Appointment Management",
          desc: "Book, reschedule, and track customer meetings with calendar sync. Customers confirm via WhatsApp or the customer app — no-shows plummet.",
        },
        {
          glyph: "📲",
          title: "Apps for Agents & Customers",
          desc: "Field agents get a mobile app for leads, visits, and orders. Customers get a branded self-service app to see orders, tickets, and history.",
        },
        {
          glyph: "🧭",
          title: "Demand & Supply Routing",
          desc: "Assign the nearest, best-suited agent for a visit or service call. Optimise daily routes to cut travel, raise meetings-per-day.",
        },
        {
          glyph: "🔁",
          title: "Event Sequences",
          desc: "Configure what happens and when — email after day 1, WhatsApp on day 3, follow-up call on day 5, escalate if silent. Sequences run on autopilot.",
        },
        {
          glyph: "📧",
          title: "In-house Email Integration",
          desc: "Send and receive email directly inside the CRM — threads, templates, open tracking, and AI summaries attached to the lead record.",
        },
        {
          glyph: "🧾",
          title: "Quotes, Orders & Payments",
          desc: "Generate branded quotes and invoices, collect payments, and push confirmed orders to ERP — all inside the deal record.",
        },
        {
          glyph: "📈",
          title: "Manager Dashboards",
          desc: "Forecasts, activity heatmaps, rep scorecards, and deal-risk alerts. Sales leaders get the picture without chasing updates.",
        },
      ]}
      howItWorks={[
        {
          title: "Model your pipeline",
          desc: "Define stages, qualification rules, and sequences for each product line or region.",
        },
        {
          title: "Onboard your team",
          desc: "Agents get a mobile app, managers get a dashboard, customers get a branded portal — all day one.",
        },
        {
          title: "Automate the boring bits",
          desc: "Let Ezupp assign leads, schedule appointments, send follow-ups, and surface risk. Your team focuses on relationships.",
        },
      ]}
    />
  );
}
