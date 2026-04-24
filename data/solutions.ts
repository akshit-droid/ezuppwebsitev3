import type { ComponentType, SVGProps } from "react";
import {
  AIIcon,
  CRMIcon,
  DistributorIcon,
  FleetIcon,
  HRMSIcon,
  HealthIcon,
  LoyaltyIcon,
  SupplyIcon,
  WhatsAppIcon,
} from "@/components/icons/SolutionIcons";

export type SolutionAccent = "blue" | "teal";

export interface Solution {
  id: string;
  name: string;
  tag: string;
  desc: string;
  accent: SolutionAccent;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  /** Internal route (e.g. /solutions/crm) or external URL (e.g. https://www.skytechhr.com/). */
  href: string;
  /** If true, the link opens in a new tab. */
  external?: boolean;
}

export const solutions: Solution[] = [
  {
    id: "fleet",
    name: "Sales Fleet Management",
    tag: "Field Sales",
    desc: "Real-time tracking, route optimization, and performance dashboards for your entire field sales force.",
    accent: "blue",
    Icon: FleetIcon,
    href: "/solutions/fleet",
  },
  {
    id: "distributor",
    name: "Distributor Management",
    tag: "Distribution",
    desc: "Full visibility across your distributor network — orders, inventory, settlements, and secondary sales.",
    accent: "teal",
    Icon: DistributorIcon,
    href: "/solutions/distributor",
  },
  {
    id: "supply",
    name: "Supply Chain Management",
    tag: "Operations",
    desc: "Streamline procurement, warehousing, and last-mile delivery with intelligent workflow automation.",
    accent: "blue",
    Icon: SupplyIcon,
    href: "/solutions/supply",
  },
  {
    id: "loyalty",
    name: "Loyalty Management",
    tag: "Retention",
    desc: "QR warranty activation plus tiered rewards across primary, secondary and tertiary sales — all in one program.",
    accent: "teal",
    Icon: LoyaltyIcon,
    href: "/solutions/loyalty",
  },
  {
    id: "ai",
    name: "AI Powered Ecosystem",
    tag: "Intelligence",
    desc: "Lead qualification, call analysis, intelligent routing, and route-optimised appointments — layered across ERP and CRM.",
    accent: "blue",
    Icon: AIIcon,
    href: "/solutions/ai",
  },
  {
    id: "hrms",
    name: "Integrated HRMS (Skytech)",
    tag: "HR & Payroll",
    desc: "Complete HR lifecycle — recruitment, payroll, attendance, appraisals, and statutory compliance. Powered by Skytech.",
    accent: "blue",
    Icon: HRMSIcon,
    href: "https://www.skytechhr.com/",
    external: true,
  },
  {
    id: "crm",
    name: "Smart CRM",
    tag: "CRM",
    desc: "Pipeline, qualification, appointments, agent & customer apps, route planning, event sequences, and email.",
    accent: "teal",
    Icon: CRMIcon,
    href: "/solutions/crm",
  },
  {
    id: "health",
    name: "Healthcare Edition",
    tag: "Healthcare",
    desc: "CRM and WhatsApp booking flows designed for doctors, nurses, clinics, and hospital chains.",
    accent: "blue",
    Icon: HealthIcon,
    href: "/solutions/healthcare",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Solution",
    tag: "Messaging",
    desc: "Chatbots, support, sales, marketing, order tracking, and feedback — in one WhatsApp workspace.",
    accent: "teal",
    Icon: WhatsAppIcon,
    href: "/solutions/whatsapp",
  },
];
