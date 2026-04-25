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
    name: "Eastman Power",
    role: "Enterprise Client",
    initials: "EP",
    accent: "blue",
  },
  {
    quote:
      "The WhatsApp automation module is a game-changer. Our order confirmation and support response time dropped from hours to seconds.",
    name: "Dr Morepen Home",
    role: "On Demand Healthcare",
    initials: "DM",
    accent: "teal",
  },
  {
    quote:
      "We evaluated 6 enterprise platforms. Ezupp was the only one that natively covered ERP, CRM, and HRMS without stitching multiple vendors together.",
    name: "Aarvika Naturals",
    role: "Wellness & D2C",
    initials: "AN",
    accent: "blue",
  },
];
