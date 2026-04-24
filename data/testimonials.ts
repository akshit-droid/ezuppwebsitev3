export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: "blue" | "teal";
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ezupp transformed how we manage our 200+ distributor network. The real-time visibility alone saved us weeks of manual reporting every month.",
    name: "Rajesh Mehta",
    role: "VP Operations, Apex Distributors",
    initials: "RM",
    accent: "blue",
  },
  {
    quote:
      "The WhatsApp automation module is a game-changer. Our order confirmation and support response time dropped from hours to seconds.",
    name: "Priya Sharma",
    role: "Head of CX, RetailMart Group",
    initials: "PS",
    accent: "teal",
  },
  {
    quote:
      "We evaluated 6 enterprise platforms. Ezupp was the only one that natively covered ERP, CRM, and HRMS without stitching multiple vendors together.",
    name: "Arjun Nair",
    role: "CTO, MedCore Hospitals",
    initials: "AN",
    accent: "blue",
  },
];
