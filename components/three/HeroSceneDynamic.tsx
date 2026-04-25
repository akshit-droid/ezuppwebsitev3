"use client";

import dynamic from "next/dynamic";

/**
 * The R3F canvas must never render on the server — wrap it with `next/dynamic`
 * and `ssr: false`. A lightweight skeleton shows while the chunk loads.
 */
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-40 w-40">
        <div className="absolute inset-0 animate-pulse-soft rounded-full bg-gradient-brand opacity-20 blur-2xl" />
        <div className="absolute inset-6 animate-spin-slow rounded-full border-2 border-dashed border-brand-blue/40" />
        <div className="absolute inset-12 rounded-full bg-gradient-brand opacity-90 shadow-float" />
      </div>
    </div>
  ),
});

export default function HeroSceneDynamic({
  compact = false,
}: {
  /** Pass true on mobile to hide the in-canvas "Live uptime" card so it
      doesn't overlap the orbit on a narrow viewport. */
  compact?: boolean;
}) {
  return <HeroScene compact={compact} />;
}
