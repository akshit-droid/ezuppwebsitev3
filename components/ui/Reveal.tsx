"use client";

import { useReveal } from "@/lib/useReveal";

/**
 * Mount once in `app/page.tsx` (or root client wrapper) — it wires the
 * IntersectionObserver that toggles `.visible` on any `.reveal` element
 * rendered on the page.
 */
export function RevealProvider({ children }: { children: React.ReactNode }) {
  useReveal();
  return <>{children}</>;
}
