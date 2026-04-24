import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution/SolutionPage";
import { HealthcareGraphic } from "@/components/solution/SolutionGraphics";

export const metadata: Metadata = {
  title: "Healthcare Edition · CRM + WhatsApp for Clinics | Ezupp",
  description:
    "Purpose-built CRM and WhatsApp booking flows for doctors, nurses, clinics, and hospital chains — appointments, follow-ups, and patient care made simple.",
};

export default function HealthcarePage() {
  return (
    <SolutionPage
      eyebrow="Healthcare"
      title={
        <>
          Designed for <span className="grad-text">doctors & nurses</span> — not
          salespeople.
        </>
      }
      tagline="CRM and WhatsApp booking flows tuned for clinics, diagnostic chains, and hospitals."
      description="Most CRMs force clinical teams to think like sales reps. Ezupp Healthcare Edition does the opposite — the language, workflows, and data model are built around patients, consultations, and follow-ups. Patients book on WhatsApp, doctors see a clean daily schedule, and nurses manage pre- and post-consult touchpoints without spreadsheets."
      hero={<HealthcareGraphic />}
      mascotPose="thinking"
      leadSource="Healthcare Edition page"
      leadInterest="Healthcare Edition"
      benefits={[
        { stat: "−52%", label: "No-show rate" },
        { stat: "3 min", label: "Avg booking time" },
        { stat: "+27%", label: "Follow-up adherence" },
        { stat: "24/7", label: "Booking window" },
      ]}
      features={[
        {
          glyph: "💬",
          title: "WhatsApp Booking Flows",
          desc: "Patients chat naturally to pick a doctor, slot, and location. Pre-built flows for consultation, diagnostics, vaccination, and home-visit bookings.",
        },
        {
          glyph: "👩‍⚕️",
          title: "Doctor Schedule View",
          desc: "A clean, OPD-friendly day view with confirmations, vitals, history, and attached reports — nothing clinical staff don't need.",
        },
        {
          glyph: "🧑‍⚕️",
          title: "Nurse Workflows",
          desc: "Pre-consult prep, vitals capture, triage questionnaires, and post-consult follow-ups — assigned, tracked, and closed with one tap.",
        },
        {
          glyph: "🔔",
          title: "Automated Reminders",
          desc: "WhatsApp reminders before the appointment, follow-up nudges after, and medication adherence pings — all templated and consent-based.",
        },
        {
          glyph: "📋",
          title: "Patient Timeline",
          desc: "One timeline per patient — visits, prescriptions, lab reports, payments, and messages — accessible to the care team, not to marketing.",
        },
        {
          glyph: "💳",
          title: "Payments & Insurance",
          desc: "UPI, card, and cash at the clinic; insurance ID capture inside the chat. Settle on the spot, reconcile automatically.",
        },
        {
          glyph: "🏥",
          title: "Multi-Clinic Ready",
          desc: "Roll up across locations, specialties, and doctors. Central rules, local overrides, branch-level reporting.",
        },
        {
          glyph: "🔐",
          title: "Privacy & Compliance",
          desc: "Role-based access, audit trails, and data-residency controls designed for healthcare's privacy expectations.",
        },
      ]}
      howItWorks={[
        {
          title: "Set up your clinic",
          desc: "Doctors, slots, consult types, and WhatsApp number — onboarded in a day.",
        },
        {
          title: "Patients book on WhatsApp",
          desc: "No app install. They chat, pick a slot, confirm — and show up.",
        },
        {
          title: "Clinical team runs the day",
          desc: "Doctors see their schedule, nurses run the prep, follow-ups close automatically.",
        },
      ]}
    />
  );
}
