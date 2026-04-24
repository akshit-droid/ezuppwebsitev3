export interface Stat {
  value: string;
  label: string;
  accent: "blue" | "teal" | "white";
}

export const stats: Stat[] = [
  { value: "500+", label: "Enterprise clients\nacross India", accent: "blue" },
  { value: "9", label: "Native modules,\nfully integrated", accent: "teal" },
  { value: "2.4M+", label: "Transactions\nprocessed daily", accent: "white" },
  { value: "24/7", label: "Support &\nSLA guarantee", accent: "teal" },
];
