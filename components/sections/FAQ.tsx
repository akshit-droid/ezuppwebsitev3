"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/data/faqs";
import { ArrowRightIcon, PlusIcon } from "@/components/icons/SolutionIcons";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";
import { cn } from "@/lib/cn";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-brand-light-gray py-16 md:py-32">
      <Container className="px-6 md:px-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="reveal">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-5 text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-brand-navy">
              Questions?
              <br />
              <span className="grad-text">Answered.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-brand-gray">
              Can&apos;t find what you&apos;re looking for? Our enterprise team
              is available anytime.
            </p>

            <div className="mt-8">
              <Button onClick={() => scrollToId("contact")}>
                Talk to us
                <ArrowRightIcon />
              </Button>
            </div>

            <div className="mt-12 hidden md:block">
              <EzuppMascot pose="thinking" size={180} />
            </div>
          </div>

          <div className="reveal d2">
            <div className="divide-y divide-black/10 border-y border-black/10">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className={cn("transition-colors", isOpen && "bg-white/60")}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[16px] font-extrabold text-brand-navy transition-colors group-hover:text-brand-blue">
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] transition-all",
                          isOpen
                            ? "rotate-45 border-brand-blue bg-brand-blue text-white"
                            : "border-black/15 text-brand-blue",
                        )}
                      >
                        <PlusIcon />
                      </span>
                    </button>
                    <div className={cn("faq-answer", isOpen && "open")}>
                      <div>
                        <p className="pb-6 pr-10 text-[15px] leading-[1.75] text-brand-gray">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
