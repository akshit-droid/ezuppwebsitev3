"use client";

import { useEffect } from "react";

/**
 * Adds the `.visible` class to any `.reveal` element when it enters the
 * viewport. Runs once on mount. Works across multiple sections because it
 * re-queries the DOM on every invocation.
 */
export function useReveal(): void {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
