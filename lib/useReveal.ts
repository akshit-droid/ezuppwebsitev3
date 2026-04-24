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

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.visible)")
        .forEach((el) => io.observe(el));
    };

    // initial pass
    observeAll();

    // re-observe any nodes that mount later (e.g. after conditional rendering)
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
