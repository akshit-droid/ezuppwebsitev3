"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";
import { ArrowRightIcon, CheckIcon } from "@/components/icons/SolutionIcons";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}

interface Feature {
  icon: string;
  label: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: "🧩",
    label: "Modular by design",
    desc: "Start with one module. Expand to the full platform. Everything connects natively — no middleware needed.",
  },
  {
    icon: "🤖",
    label: "AI-first architecture",
    desc: "Every module is infused with machine learning — from demand forecasting to lead scoring.",
  },
  {
    icon: "💬",
    label: "WhatsApp-native",
    desc: "Not a bolt-on. WhatsApp communication is woven into the core platform for every workflow.",
  },
  {
    icon: "🛡️",
    label: "Industry editions",
    desc: "Pre-configured for warranty, retail, distribution, and manufacturing — live faster.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-32">
      <Container className="px-6 md:px-16">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
          {/* LEFT — mascot + feature stack */}
          <div className="reveal relative">
            {/* backdrop gradient card */}
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-brand-soft p-8 md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-teal/20 blur-3xl" />

              {/* mascot with laptop */}
              <div className="mb-4 flex items-center gap-5">
                <EzuppMascot pose="working" size={140} />
                <div>
                  <div className="text-[12px] font-extrabold uppercase tracking-[.1em] text-brand-blue">
                    Meet Ezzy
                  </div>
                  <div className="mt-1.5 text-[18px] font-extrabold text-brand-navy">
                    Your always-on copilot
                  </div>
                  <div className="mt-1 max-w-[220px] text-[13px] leading-[1.6] text-brand-gray">
                    Works across every module, learns from your workflows,
                    nudges the right team at the right moment.
                  </div>
                </div>
              </div>

              {/* feature list */}
              <div className="mt-6 space-y-5">
                {features.map((f, i) => (
                  <div key={f.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[20px] shadow-soft">
                      {f.icon}
                    </div>
                    <div>
                      <div className="text-[15px] font-extrabold text-brand-navy">
                        {f.label}
                      </div>
                      <div className="mt-1 text-[13px] leading-[1.6] text-brand-gray">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — copy */}
          <div className="reveal d3">
            <SectionEyebrow>About Ezupp</SectionEyebrow>
            <h2 className="mt-5 text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-brand-navy">
              Built for enterprises that can&apos;t afford{" "}
              <span className="grad-text">disconnected systems.</span>
            </h2>

            <p className="mt-6 text-[16px] leading-[1.78] text-brand-gray">
              Most enterprises run on 4–8 disconnected tools. Data lives in
              spreadsheets. Decisions take days. Growth stalls at the seams
              between systems.
            </p>
            <p className="mt-3 text-[16px] leading-[1.78] text-brand-gray">
              <strong className="text-brand-navy">Ezupp</strong>, by{" "}
              <strong className="text-brand-navy">Electrovese Solutions</strong>
              , was built to solve this — a platform that covers your entire
              operation from HR to last-mile delivery, from sales to customer
              care. All interconnected. All intelligent.
            </p>
            <p className="mt-3 text-[16px] leading-[1.78] text-brand-gray">
              One login. One source of truth. One platform that grows with you.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Enterprise-grade security",
                "99.9% uptime SLA",
                "Open APIs everywhere",
                "24/7 dedicated support",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2.5 text-[14px] font-semibold text-brand-navy/85"
                >
                  <CheckIcon className="text-brand-teal" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button size="lg" onClick={() => scrollToId("contact")}>
                Get a Custom Demo
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
