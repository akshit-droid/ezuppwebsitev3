"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons/SolutionIcons";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";
import { submitLead } from "@/lib/submitLead";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const empty: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export interface LeadFormProps {
  /** Free-form identifier recorded against the submission (e.g. "Smart CRM page"). */
  source: string;
  /** Product/module to auto-tag on the submission (e.g. "Smart CRM"). */
  interest?: string;
  /** Heading above the form. */
  title?: string;
  /** Sub-caption below the heading. */
  subtitle?: string;
  /** Placeholder/prompt for the message textarea. */
  messagePrompt?: string;
  /** Submit button label. Defaults to "Request Demo". */
  submitLabel?: string;
  className?: string;
}

/**
 * Shared lead form used by the Contact section and every feature page.
 *
 * Submissions route through `submitLead` → FormSubmit.co → akshit@electrovese.com.
 * A `source` prop lets each host page tag where the lead came from so the
 * enterprise team can route quickly.
 */
export function LeadForm({
  source,
  interest,
  title = "Book a Demo",
  subtitle,
  messagePrompt = "Tell us about your business, team size, and specific requirements…",
  submitLabel = "Request Demo",
  className,
}: LeadFormProps) {
  const [form, setForm] = useState<FormState>(empty);
  const [ok, setOk] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setErr(null);

    const result = await submitLead({
      source,
      interest,
      name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      message: form.message,
    });

    setSubmitting(false);
    if (result.ok) setOk(true);
    else setErr(result.error ?? "Something went wrong. Please try again.");
  }

  return (
    <div
      className={`relative rounded-[32px] border border-black/5 bg-white p-8 shadow-card md:p-10 ${className ?? ""}`}
    >
      {ok ? (
        <div className="py-10 text-center">
          <div className="mx-auto w-[140px]">
            <EzuppMascot pose="celebrate" size={140} />
          </div>
          <h3 className="mt-6 text-[24px] font-extrabold text-brand-navy">
            Request Received!
          </h3>
          <p className="mt-2 text-[15px] text-brand-gray">
            Our enterprise team will reach out within 24 hours to schedule your
            demo.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => {
              setOk(false);
              setErr(null);
              setForm(empty);
            }}
          >
            Submit Another
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-2 text-[22px] font-extrabold tracking-[-0.02em] text-brand-navy">
            {title}
          </div>
          {subtitle && (
            <p className="mb-6 text-[14px] leading-[1.6] text-brand-gray">
              {subtitle}
            </p>
          )}
          {!subtitle && <div className="mb-6" />}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Full Name *">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={inputCls}
              />
            </Field>
            <Field label="Company *">
              <input
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Company name"
                className={inputCls}
              />
            </Field>
            <Field label="Work Email *">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className={inputCls}
              />
            </Field>
            <Field label="Phone">
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 00000 00000"
                className={inputCls}
              />
            </Field>
          </div>

          <Field label="Message" className="mt-5">
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={messagePrompt}
              rows={3}
              className={`${inputCls} resize-none`}
            />
          </Field>

          {interest && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-brand-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              Product interest: {interest}
            </div>
          )}

          {err && (
            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-[13px] text-red-700">
              {err}
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? "Sending…" : submitLabel}
              {!submitting && <ArrowRightIcon />}
            </Button>
            <span className="text-[12px] text-brand-gray">
              We&apos;ll respond within 24 hours.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

const inputCls =
  "w-full border-0 border-b-[1.5px] border-black/10 bg-transparent px-0 py-2.5 text-[15px] text-brand-navy outline-none transition placeholder:text-black/25 focus:border-brand-blue";

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-2.5 block text-[12px] font-bold uppercase tracking-[.05em] text-brand-navy/55">
        {label}
      </span>
      {children}
    </label>
  );
}
