import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterGroup {
  title: string;
  links: FooterLink[];
}

const groups: FooterGroup[] = [
  {
    title: "Solutions",
    links: [
      { label: "Sales Fleet", href: "/solutions/fleet" },
      { label: "Distributor Mgmt", href: "/solutions/distributor" },
      { label: "Supply Chain", href: "/solutions/supply" },
      { label: "Loyalty Mgmt", href: "/solutions/loyalty" },
      { label: "AI Ecosystem", href: "/solutions/ai" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Smart CRM", href: "/solutions/crm" },
      { label: "HRMS (Skytech)", href: "https://www.skytechhr.com/", external: true },
      { label: "Digital Warranty", href: "/solutions/warranty" },
      { label: "WhatsApp Solution", href: "/solutions/whatsapp" },
      { label: "Integrations", href: "/#integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Contact Us", href: "/#contact" },
      { label: "Book Demo", href: "/#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
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
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo.png"
                alt="Ezupp"
                width={132}
                height={30}
                className="h-[30px] w-auto opacity-90 [filter:brightness(0)_invert(1)]"
              />
            </Link>
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
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-medium text-white/45 transition hover:text-brand-teal"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[13px] font-medium text-white/45 transition hover:text-brand-teal"
                      >
                        {l.label}
                      </Link>
                    )}
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
