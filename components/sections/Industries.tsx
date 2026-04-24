"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const industries = [
  {
    id: "electronics",
    name: "Consumer Electronics",
    useCase:
      "Replace paper warranty cards with unique QR codes on every box. Customers scan to activate, verifying authenticity instantly while you capture first-party consumer data directly via WhatsApp.",
    primaryModule: "Digital Warranty",
    accent: "blue",
  },
  {
    id: "fmcg",
    name: "FMCG & CPG",
    useCase:
      "Orchestrate complex secondary sales networks. Sync real-time inventory from 10,000+ distributors and run retailer loyalty programs that reward performance with automated payouts.",
    primaryModule: "Distributor Mgmt",
    accent: "teal",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    useCase:
      "Connect the shop floor to the field. Monitor fleet movements, optimize last-mile delivery routes, and manage your entire workforce's statutory compliance in one unified system.",
    primaryModule: "SCM & Fleet",
    accent: "blue",
  },
  {
    id: "healthcare",
    name: "Healthcare Chains",
    useCase:
      "Bridge the gap between patients and clinicians. Automated WhatsApp booking flows for appointments, vital capture for nurses, and a unified 360° patient timeline for doctors.",
    primaryModule: "Smart CRM",
    accent: "teal",
  },
];

export function Industries() {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <section id="industries" className="relative overflow-hidden bg-white py-16 md:py-32">
      <Container className="px-6 md:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          
          {/* LEFT — Typography-first Industry List */}
          <div className="reveal">
            <SectionEyebrow>Industry Spotlight</SectionEyebrow>
            <h2 className="mt-5 text-[clamp(28px,3.5vw,48px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-brand-navy">
              Tailored for <span className="grad-text">your</span> scale.
            </h2>
            
            {/* THE LIST — Vertical on desktop, Horizontal scroll on mobile */}
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 md:mt-12 md:flex-col md:items-start md:space-y-2">
              {industries.map((ind, i) => (
                <div key={ind.id} className="flex items-center">
                  <button
                    onMouseEnter={() => setActiveTab(ind)}
                    onClick={() => setActiveTab(ind)}
                    className={cn(
                      "group relative transition-all duration-300",
                      activeTab.id === ind.id 
                        ? "py-2 md:py-6" 
                        : "py-2 hover:opacity-100 md:py-5"
                    )}
                  >
                    <div className={cn(
                      "relative flex items-center transition-all duration-500",
                      activeTab.id === ind.id ? "translate-x-0" : "md:group-hover:translate-x-2"
                    )}>
                      {activeTab.id === ind.id && (
                        <motion.div 
                          layoutId="activeIndicator"
                          className="mr-2 h-1.5 w-1.5 rounded-full bg-brand-blue md:mr-4 md:h-2 md:w-2"
                        />
                      )}
                      <span className={cn(
                        "text-[15px] font-extrabold tracking-tight transition-colors md:text-[28px]",
                        activeTab.id === ind.id ? "text-brand-navy" : "text-brand-navy/30 hover:text-brand-navy/60"
                      )}>
                        {ind.name}
                      </span>
                    </div>
                  </button>
                  
                  {/* Pipe separator — only on mobile, and not after the last item */}
                  {i < industries.length - 1 && (
                    <span className="ml-3 text-brand-navy/10 md:hidden">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Dynamic Detail Panel (No blocks, just clean layout) */}
          <div className="reveal d2 relative flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                {/* Large Background Mascot (Presenting) */}
                <div className="pointer-events-none absolute -right-20 -top-24 opacity-[0.03] grayscale md:-right-32">
                  <EzuppMascot pose="wave" size={340} animated={false} />
                </div>

                <div className="relative z-10 flex flex-col gap-8 md:gap-12">
                  {/* The Use Case Text */}
                  <div className="max-w-[540px]">
                    <div className={cn(
                      "mb-4 text-[11px] font-extrabold uppercase tracking-[.15em]",
                      activeTab.accent === "blue" ? "text-brand-blue" : "text-brand-teal"
                    )}>
                      Core Pillar: {activeTab.primaryModule}
                    </div>
                    <p className="text-[18px] font-medium leading-[1.6] text-brand-navy md:text-[22px]">
                      {activeTab.useCase}
                    </p>
                  </div>

                  {/* Mascot Interaction — Bot pointing to the feature detail */}
                  <div className="flex items-end gap-6">
                    <div className="flex-shrink-0">
                      <EzuppMascot 
                        pose="wave" 
                        size={140} 
                        className="drop-shadow-2xl"
                      />
                    </div>
                    <div className="mb-14 hidden h-px flex-grow bg-gradient-to-r from-transparent via-black/10 to-transparent md:block" />
                    <div className="mb-10 max-w-[240px]">
                       <div className="text-[13px] font-semibold text-brand-gray">
                          "Ezzy automates the handoffs here, so your team doesn't have to."
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative Grid/Lines to keep "similar design" feel without capsules */}
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-brand-blue/5 blur-[80px]" />
          </div>

        </div>
      </Container>
    </section>
  );
}
