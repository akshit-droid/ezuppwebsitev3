import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { WhatsAppGraphic } from "@/components/solution/SolutionGraphics";

export const metadata: Metadata = {
  title: "WhatsApp Solution · Chatbots, Support, Sales & Tracking | Ezupp",
  description:
    "Smart WhatsApp chatbots, customer support, sales & marketing campaigns, order tracking, feedback collection — all from one Ezupp workspace.",
};

export default function WhatsAppPage() {
  return (
    <SolutionPage
      eyebrow="Messaging · WhatsApp"
      title={
        <>
          The whole business, <span className="grad-text">on WhatsApp.</span>
        </>
      }
      tagline="Chatbots, support, sales & marketing, order tracking, and feedback — in one WhatsApp workspace."
      description="Customers don't want to install your app. They want to chat. Ezupp turns WhatsApp into your front door — smart bots for common questions, live agents for complex ones, broadcast campaigns that convert, and order tracking that doesn't need a courier's website."
      hero={<WhatsAppGraphic />}
      mascotPose="wave"
      leadSource="WhatsApp Solution page"
      leadInterest="WhatsApp Solution"
      benefits={[
        { stat: "87%", label: "Resolved by bot" },
        { stat: "3 s", label: "Avg first response" },
        { stat: "5.2×", label: "Campaign CTR vs email" },
        { stat: "+41%", label: "Repeat orders" },
      ]}
      features={[
        {
          glyph: "🤖",
          title: "Smart Chatbots",
          desc: "Build flows in a visual canvas — FAQ, order placement, status check, or guided qualification — and hand off to a human when it matters.",
        },
        {
          glyph: "🎧",
          title: "Customer Support",
          desc: "Shared inbox, tickets, tags, SLAs, and canned responses. Multiple agents on a single WhatsApp number with zero confusion.",
        },
        {
          glyph: "📣",
          title: "Sales & Marketing Campaigns",
          desc: "Segmented broadcasts with approved templates, opt-in tracking, and conversion attribution. Launch offers without landing in spam.",
        },
        {
          glyph: "📦",
          title: "Order Tracking",
          desc: "Live status messages at each step — ordered, packed, shipped, out for delivery — with a real-time map link and rescheduling options.",
        },
        {
          glyph: "⭐",
          title: "Feedback & NPS",
          desc: "Post-purchase or post-service feedback in a 20-second chat. Star ratings, reasons, and testimonials captured automatically.",
        },
        {
          glyph: "🧠",
          title: "AI Suggested Replies",
          desc: "Agents see draft responses pulled from past tickets and product docs — answering faster without sounding robotic.",
        },
        {
          glyph: "🗂️",
          title: "CRM + ERP Sync",
          desc: "Every chat, order, and resolution lands on the customer record in Ezupp CRM — and pushes to your ERP where relevant.",
        },
        {
          glyph: "🔐",
          title: "Official BSP",
          desc: "Built on Meta's Cloud API via an official Business Service Provider. Full template approvals, green tick, and compliance.",
        },
      ]}
      howItWorks={[
        {
          title: "Verify your WhatsApp",
          desc: "We onboard your number, set up the green-tick verification, and import your templates.",
        },
        {
          title: "Design your flows",
          desc: "Drag-and-drop builders for bots, campaigns, and notifications. No code.",
        },
        {
          title: "Scale support + revenue",
          desc: "Agents pick up what bots can't. Campaigns go out. Tickets close. Customers come back.",
        },
      ]}
    />
  );
}
