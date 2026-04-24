import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-16 md:py-32">
      <Container className="px-6 md:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="reveal">
            <SectionEyebrow>Testimonials</SectionEyebrow>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-brand-navy md:mt-5">
              Trusted by enterprise teams.
            </h2>
          </div>
          <div className="reveal d2 max-w-sm text-[14px] leading-[1.7] text-brand-gray">
            From 200-distributor FMCG networks to multi-location hospital
            chains — Ezupp runs under the hood.
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={cn(
                "reveal group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-card transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-card-hover",
                `d${i + 1}`,
              )}
            >
              {/* big quote glyph */}
              <div
                aria-hidden
                className="absolute -right-4 -top-6 text-[160px] font-extrabold leading-none text-brand-blue/[.06]"
              >
                &ldquo;
              </div>

              <div
                aria-hidden
                className="mb-5 h-1 w-10 rounded bg-gradient-to-r from-brand-blue to-brand-teal"
              />

              <blockquote className="relative text-[16px] leading-[1.72] text-brand-navy">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-extrabold text-white",
                    t.accent === "blue"
                      ? "bg-gradient-to-br from-brand-blue to-brand-blue-dark"
                      : "bg-gradient-to-br from-brand-teal to-brand-teal-dark",
                  )}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-extrabold text-brand-navy">{t.name}</div>
                  <div className="mt-0.5 text-[13px] text-brand-gray">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
