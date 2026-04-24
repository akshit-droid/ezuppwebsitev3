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
}

export const solutions: Solution[] = [
  {
    id: "fleet",
    name: "Sales Fleet Management",
    tag: "Field Sales",
    desc: "Real-time tracking, route optimization, and performance dashboards for your entire field sales force.",
    accent: "blue",
    Icon: FleetIcon,
  },
  {
    id: "distributor",
    name: "Distributor Management",
    tag: "Distribution",
    desc: "Full visibility across your distributor network — orders, inventory, settlements, and secondary sales.",
    accent: "teal",
    Icon: DistributorIcon,
  },
  {
    id: "supply",
    name: "Supply Chain Management",
    tag: "Operations",
    desc: "Streamline procurement, warehousing, and last-mile delivery with intelligent workflow automation.",
    accent: "blue",
    Icon: SupplyIcon,
  },
  {
    id: "loyalty",
    name: "Loyalty Management",
    tag: "Retention",
    desc: "Drive retention through smart reward programs, tiered incentives, and personalized campaigns.",
    accent: "teal",
    Icon: LoyaltyIcon,
  },
  {
    id: "ai",
    name: "AI Powered Ecosystem",
    tag: "Intelligence",
    desc: "Machine learning insights, predictive analytics, and process automation across every module.",
    accent: "blue",
    Icon: AIIcon,
  },
  {
    id: "hrms",
    name: "Integrated HRMS (Skytech)",
    tag: "HR & Payroll",
    desc: "Complete HR lifecycle — recruitment, payroll, attendance, appraisals, and statutory compliance.",
    accent: "blue",
    Icon: HRMSIcon,
  },
  {
    id: "crm",
    name: "Smart CRM",
    tag: "CRM",
    desc: "Manage leads, pipelines, and every customer touchpoint with a CRM that learns your sales process.",
    accent: "teal",
    Icon: CRMIcon,
  },
  {
    id: "health",
    name: "Healthcare Edition",
    tag: "Healthcare",
    desc: "Purpose-built for clinics, hospitals, and pharmacy chains — appointments, EMR, billing, and inventory.",
    accent: "blue",
    Icon: HealthIcon,
  },
  {
    id: "whatsapp",
    name: "WhatsApp Solution",
    tag: "Messaging",
    desc: "Automate order updates, support tickets, marketing campaigns, and lead nurturing via WhatsApp.",
    accent: "teal",
    Icon: WhatsAppIcon,
  },
];
