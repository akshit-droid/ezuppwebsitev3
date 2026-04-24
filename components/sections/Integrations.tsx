"use client";

import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { integrations } from "@/data/integrations";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}

export function Integrations() {
  return (
    <section id="integrations" className="relative overflow-hidden bg-brand-light-gray py-16 md:py-32">
      <Container className="px-6 md:px-16">
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-20">
          <div className="reveal">
            <SectionEyebrow>Integrations</SectionEyebrow>
            <h2 className="mt-5 text-[clamp(28px,3.4vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy">
              Connects with the tools you already use.
            </h2>
          </div>
          <div className="reveal d2">
            <p className="text-[16px] leading-[1.75] text-brand-gray">
              Pre-built connectors to 50+ platforms — accounting, payments,
              logistics, communication, and cloud infrastructure. Open APIs for
              anything else.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => scrollToId("contact")}
            >
              Request an integration
            </Button>
          </div>
        </div>

        <div className="reveal mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 sm:grid-cols-4 md:mt-16 md:grid-cols-5 md:rounded-3xl">
          {integrations.map((it) => (
            <div
              key={it.name}
              className="group relative flex flex-col items-center justify-center gap-3 bg-white px-4 py-8 transition hover:bg-brand-navy"
            >
              <div className="flex h-12 w-12 items-center justify-center transition-transform group-hover:scale-110">
                <it.Icon size={44} className="transition group-hover:[filter:brightness(1.3)]" />
              </div>
              <div className="text-[12px] font-bold text-brand-navy/65 transition group-hover:text-white">
                {it.name}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
