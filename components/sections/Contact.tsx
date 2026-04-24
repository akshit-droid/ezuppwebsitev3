"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { solutions } from "@/data/solutions";
import { ArrowRightIcon } from "@/components/icons/SolutionIcons";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";
import { submitLead } from "@/lib/submitLead";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const empty: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

export function Contact() {
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
      source: "Contact form",
      name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      interest: form.interest,
      message: form.message,
    });

    setSubmitting(false);
    if (result.ok) {
      setOk(true);
    } else {
      setErr(result.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-32">
      {/* ambient */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-teal/10 blur-[100px]" />

      <Container className="relative px-6 md:px-16">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-24">
          {/* LEFT */}
          <div className="reveal">
            <SectionEyebrow>Get in Touch</SectionEyebrow>
            <h2 className="mt-5 text-[clamp(28px,3.4vw,44px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-brand-navy">
              Ready to see Ezupp in action?
            </h2>
            <p className="mt-5 text-[16px] leading-[1.78] text-brand-gray">
              Talk to our enterprise team and get a live demo tailored to your
              industry, team size, and specific workflows.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { k: "📧", v: "hello@electrovese.com", s: "Email" },
                { k: "📞", v: "+91 98765 43210", s: "Call or WhatsApp" },
                { k: "📍", v: "Electrovese Solutions, India", s: "Headquarters" },
              ].map((f) => (
                <div key={f.v} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand-soft text-[20px]">
                    {f.k}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-brand-navy">{f.v}</div>
                    <div className="mt-0.5 text-[12px] text-brand-gray">{f.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-end gap-3">
              <EzuppMascot pose="wave" size={140} />
              <div className="mb-4 max-w-[220px] rounded-2xl bg-white p-4 shadow-card">
                <div className="text-[13px] font-bold text-brand-navy">
                  Hi, I&apos;m Ezzy 👋
                </div>
                <div className="mt-1 text-[12px] leading-[1.55] text-brand-gray">
                  Drop your details and I&apos;ll route you to the right
                  enterprise lead.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="reveal d2">
            <div className="relative rounded-[32px] border border-black/5 bg-white p-8 shadow-card md:p-10">
              {ok ? (
                <div className="py-10 text-center">
                  <div className="mx-auto w-[140px]">
                    <EzuppMascot pose="celebrate" size={140} />
                  </div>
                  <h3 className="mt-6 text-[24px] font-extrabold text-brand-navy">
                    Request Received!
                  </h3>
                  <p className="mt-2 text-[15px] text-brand-gray">
                    Our enterprise team will reach out within 24 hours to
                    schedule your demo.
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
                  <div className="mb-8 text-[22px] font-extrabold tracking-[-0.02em] text-brand-navy">
                    Book a Demo
                  </div>

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

                  <Field label="Product Interest" className="mt-5">
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className={inputCls}
                    >
                      <option value="">Choose a module or the full platform…</option>
                      {solutions.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="Full Platform">Full Platform</option>
                    </select>
                  </Field>

                  <Field label="Message" className="mt-5">
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your business, team size, and challenges…"
                      rows={3}
                      className={`${inputCls} resize-none`}
                    />
                  </Field>

                  {err && (
                    <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-[13px] text-red-700">
                      {err}
                    </div>
                  )}

                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <Button type="submit" size="lg" disabled={submitting}>
                      {submitting ? "Sending…" : "Request Demo"}
                      {!submitting && <ArrowRightIcon />}
                    </Button>
                    <span className="text-[12px] text-brand-gray">
                      We&apos;ll respond within 24 hours.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
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
