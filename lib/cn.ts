import clsx, { type ClassValue } from "clsx";

/**
 * Tiny helper so components can conditionally compose tailwind class strings
 * without pulling in tailwind-merge. Uses `clsx` under the hood.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
