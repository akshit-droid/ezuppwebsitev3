"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons/SolutionIcons";
import { cn } from "@/lib/cn";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-[68px] items-center justify-between px-6 md:px-16",
        "border-b border-black/5 backdrop-blur-xl transition-shadow",
        "bg-white/85",
        scrolled && "shadow-[0_2px_24px_rgba(0,0,0,.06)]",
      )}
    >
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          scrollToId("hero");
        }}
        className="flex items-center gap-2"
      >
        <Image
          src="/assets/logo.png"
          alt="Ezupp"
          width={132}
          height={34}
          priority
          className="h-[34px] w-auto"
        />
      </a>

      <ul className="hidden items-center gap-10 md:flex">
        {navLinks.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(l.id);
              }}
              className="text-[14px] font-semibold text-brand-navy/55 transition hover:text-brand-navy"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden items-center gap-3 md:flex">
        <Button variant="outline" onClick={() => scrollToId("contact")}>
          Contact Us
        </Button>
        <Button onClick={() => scrollToId("contact")}>
          Book Demo
          <ArrowRightIcon />
        </Button>
      </div>

      {/* mobile trigger */}
      <button
        type="button"
        aria-label="Toggle menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 md:hidden"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="flex flex-col gap-1">
          <span className={cn("block h-0.5 w-5 bg-brand-navy transition", open && "translate-y-1.5 rotate-45")} />
          <span className={cn("block h-0.5 w-5 bg-brand-navy transition", open && "opacity-0")} />
          <span className={cn("block h-0.5 w-5 bg-brand-navy transition", open && "-translate-y-1.5 -rotate-45")} />
        </span>
      </button>

      {/* mobile sheet */}
      {open && (
        <div className="absolute inset-x-0 top-full border-b border-black/5 bg-white/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col p-5">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    scrollToId(l.id);
                  }}
                  className="block py-3 text-[15px] font-semibold text-brand-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <Button
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  scrollToId("contact");
                }}
              >
                Book Demo
                <ArrowRightIcon />
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
