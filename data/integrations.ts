import type { ComponentType, SVGProps } from "react";
import {
  AWSIcon,
  DelhiveryIcon,
  GoogleWorkspaceIcon,
  MS365Icon,
  PayUIcon,
  RazorpayIcon,
  SAPIcon,
  SalesforceIcon,
  ShiprocketIcon,
  ShopifyIcon,
  TallyIcon,
  TwilioIcon,
  WhatsAppBizIcon,
  WooIcon,
  ZohoIcon,
} from "@/components/icons/IntegrationIcons";

export interface Integration {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
}

export const integrations: Integration[] = [
  { name: "Tally", Icon: TallyIcon },
  { name: "SAP", Icon: SAPIcon },
  { name: "Zoho", Icon: ZohoIcon },
  { name: "Salesforce", Icon: SalesforceIcon },
  { name: "WhatsApp Biz", Icon: WhatsAppBizIcon },
  { name: "Shopify", Icon: ShopifyIcon },
  { name: "WooCommerce", Icon: WooIcon },
  { name: "Razorpay", Icon: RazorpayIcon },
  { name: "PayU", Icon: PayUIcon },
  { name: "Shiprocket", Icon: ShiprocketIcon },
  { name: "Delhivery", Icon: DelhiveryIcon },
  { name: "AWS", Icon: AWSIcon },
  { name: "G Workspace", Icon: GoogleWorkspaceIcon },
  { name: "MS 365", Icon: MS365Icon },
  { name: "Twilio", Icon: TwilioIcon },
];
