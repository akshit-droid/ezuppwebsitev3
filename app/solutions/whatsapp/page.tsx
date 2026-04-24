import type { Metadata } from "next";
import Image from "next/image";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { WhatsAppGraphic } from "@/components/solution/SolutionGraphics";
import { Container } from "@/components/ui/Container";

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
    >
      {/* INTEGRATED IMAGERY — NON-CONTAINER STYLE */}
      <div className="space-y-24 py-12 md:space-y-32 md:py-20">
        
        {/* FAQ Bot Spotlight */}
        <Container className="px-6 md:px-16">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div className="reveal order-2 md:order-1">
              <Image 
                src="/assets/whatsapp/wa-faq-bot.png" 
                alt="Automated FAQ Bot" 
                width={800} 
                height={500}
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
            <div className="reveal d2 order-1 md:order-2">
              <h3 className="text-[28px] font-extrabold leading-tight text-brand-navy md:text-[36px]">
                Bots that actually <span className="grad-text">understand.</span>
              </h3>
              <p className="mt-4 text-[16px] leading-[1.75] text-brand-gray">
                Handle 80% of routine inquiries—from tracking orders to checking store hours—without human intervention. Ezupp bots are trained on your business data to provide instant, accurate answers 24/7.
              </p>
            </div>
          </div>
        </Container>

        {/* AI Brain Visual — Full bleed feel */}
        <div className="reveal relative overflow-hidden bg-brand-navy py-16 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent" />
          <Container className="relative z-10 px-6 md:px-16">
             <div className="mx-auto max-w-4xl text-center">
                <h3 className="text-[30px] font-extrabold text-white md:text-[42px]">
                   A unified <span className="text-brand-teal">AI Operating System</span>
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-[16px] text-white/60 md:text-[18px]">
                   Automating the entire customer lifecycle—from the first "Hi" to the final delivery confirmation.
                </p>
                <div className="mt-12 md:mt-16">
                  <Image 
                    src="/assets/whatsapp/wa-ai-brain.png" 
                    alt="AI Central Intelligence" 
                    width={1200} 
                    height={700}
                    className="mx-auto h-auto w-full max-w-5xl rounded-3xl shadow-[0_0_100px_rgba(46,216,160,0.15)]"
                  />
                </div>
             </div>
          </Container>
        </div>

        {/* Human Handover Spotlight */}
        <Container className="px-6 md:px-16">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
            <div className="reveal">
              <h3 className="text-[28px] font-extrabold leading-tight text-brand-navy md:text-[36px]">
                Seamless <span className="grad-text">human handover.</span>
              </h3>
              <p className="mt-4 text-[16px] leading-[1.75] text-brand-gray">
                When a conversation gets complex, Ezupp intelligently routes it to the right human agent. Your team gets full context of the bot's prior interaction, ensuring a smooth transition for the customer.
              </p>
            </div>
            <div className="reveal d2">
              <Image 
                src="/assets/whatsapp/wa-handover.png" 
                alt="Seamless Human Handover" 
                width={800} 
                height={500}
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </Container>

      </div>
    </SolutionPage>
  );
}
