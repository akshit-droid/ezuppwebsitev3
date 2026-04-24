import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface FooterGroup {
  title: string;
  links: string[];
}

const groups: FooterGroup[] = [
  {
    title: "Solutions",
    links: ["Sales Fleet", "Distributor Mgmt", "Supply Chain", "Loyalty Mgmt", "AI Ecosystem"],
  },
  {
    title: "Platform",
    links: ["Smart CRM", "HRMS (Skytech)", "Healthcare Edition", "WhatsApp Solution", "Integrations"],
  },
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Book Demo", "Privacy Policy", "Terms of Service"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy px-6 pb-9 pt-20 md:px-16">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-[90px]" />

      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/logo.png"
              alt="Ezupp"
              width={132}
              height={30}
              className="h-[30px] w-auto opacity-90 [filter:brightness(0)_invert(1)]"
            />
            <p className="mt-5 max-w-[260px] text-[13px] leading-[1.7] text-white/35">
              One-stop ERP, CRM, On-Demand, and WhatsApp Automation platform
              by Electrovese Solutions.
            </p>

            {/* social */}
            <div className="mt-6 flex gap-3">
              {["L", "X", "I", "G"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[12px] font-extrabold text-white/60 transition hover:border-brand-teal hover:text-brand-teal"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h5 className="mb-5 text-[11px] font-extrabold uppercase tracking-[.12em] text-white/35">
                {g.title}
              </h5>
              <ul className="space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13px] font-medium text-white/45 transition hover:text-brand-teal"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-7">
          <p className="text-[12px] text-white/25">
            © 2026 Electrovese Solutions. All rights reserved. Ezupp™
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-brand-teal" />
            <span className="text-[12px] text-white/25">All systems operational</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
