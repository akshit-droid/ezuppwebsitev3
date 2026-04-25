"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";
import { ArrowRightIcon } from "@/components/icons/SolutionIcons";
import { submitLead } from "@/lib/submitLead";
import { cn } from "@/lib/cn";

/* ----------------------------------------------------------------------- *
 * Conversation tree — each top-level prompt has a small list of follow-up
 * questions. After 2 (or 3) questions the user is routed to the form
 * with their selections summarised in the message field, so the enterprise
 * team gets meaningful context rather than just "wants a demo".
 * ----------------------------------------------------------------------- */
interface FollowupOption {
  /** short label rendered on the chip */
  label: string;
  /** longer phrasing used in the summary handed to the form */
  value: string;
}

interface FollowupQuestion {
  question: string;
  options: FollowupOption[];
}

interface Prompt {
  id: string;
  title: string;
  /** seeds the message field if user skips follow-ups */
  lead: string;
  emoji: string;
  /** Ezzy's friendly intro line shown above the first follow-up */
  intro: string;
  followups: FollowupQuestion[];
}

const PROMPTS: Prompt[] = [
  {
    id: "demo",
    title: "Book a live demo of the full platform",
    lead: "I'd like to see a live demo of the full Ezupp platform for my team.",
    emoji: "🎬",
    intro:
      "Awesome — we run sharper demos when we know who you're for. Two quick questions:",
    followups: [
      {
        question: "How big is your team?",
        options: [
          { label: "Solo / Founder", value: "Team size: Solo / Founder" },
          { label: "5 – 25", value: "Team size: 5–25 people" },
          { label: "25 – 100", value: "Team size: 25–100 people" },
          { label: "100+ people", value: "Team size: 100+ people" },
        ],
      },
      {
        question: "Which area should the demo focus on?",
        options: [
          {
            label: "Field & distribution",
            value: "Demo focus: Field operations & distribution",
          },
          {
            label: "CRM & sales",
            value: "Demo focus: CRM & sales pipeline",
          },
          {
            label: "WhatsApp marketing",
            value: "Demo focus: WhatsApp automation & marketing",
          },
          {
            label: "Full platform tour",
            value: "Demo focus: End-to-end platform tour",
          },
        ],
      },
    ],
  },
  {
    id: "modules",
    title: "Which modules are right for my business?",
    lead: "I'm not sure which Ezupp modules fit my business. Could someone advise?",
    emoji: "🧩",
    intro:
      "Let's find your fit — answer two quick things and I'll line up the right specialist.",
    followups: [
      {
        question: "What's your industry?",
        options: [
          { label: "Electronics", value: "Industry: Electronics & appliances" },
          { label: "FMCG / Food", value: "Industry: FMCG / Food & beverage" },
          { label: "Manufacturing", value: "Industry: Manufacturing" },
          { label: "Retail / D2C", value: "Industry: Retail / D2C" },
          { label: "Other", value: "Industry: Other" },
        ],
      },
      {
        question: "What's slowing your team down most?",
        options: [
          {
            label: "Manual coordination",
            value: "Pain point: Manual ops & coordination",
          },
          {
            label: "Lost / scattered leads",
            value: "Pain point: Leads slipping through the cracks",
          },
          {
            label: "Service & warranty",
            value: "Pain point: After-sales, service & warranty",
          },
          {
            label: "Inventory & dispatch",
            value: "Pain point: Inventory / supply / dispatch chaos",
          },
        ],
      },
    ],
  },
  {
    id: "whatsapp",
    title: "How does WhatsApp Automation work?",
    lead: "Can you walk me through how Ezupp's WhatsApp Automation module works?",
    emoji: "💬",
    intro:
      "Happy to walk you through it — first, two quick questions so the deep-dive lands right:",
    followups: [
      {
        question: "Broadcasts, 2-way conversations, or both?",
        options: [
          { label: "Broadcasts", value: "Use case: WhatsApp broadcasts" },
          {
            label: "2-way chat",
            value: "Use case: 2-way customer conversations",
          },
          { label: "Both", value: "Use case: Broadcasts + 2-way conversations" },
        ],
      },
      {
        question: "How many customers reach you weekly?",
        options: [
          { label: "Under 1k", value: "Volume: Under 1,000 / week" },
          { label: "1k – 10k", value: "Volume: 1,000 – 10,000 / week" },
          { label: "10k – 100k", value: "Volume: 10,000 – 100,000 / week" },
          { label: "100k+", value: "Volume: 100,000+ / week" },
        ],
      },
    ],
  },
  {
    id: "integrate",
    title: "Can Ezupp integrate with our existing ERP?",
    lead: "We currently run on another system — can Ezupp integrate with it?",
    emoji: "🔌",
    intro:
      "Short answer: yes — but the right path depends on what you run today. Quick check:",
    followups: [
      {
        question: "Which system are you on today?",
        options: [
          { label: "SAP", value: "Current system: SAP" },
          { label: "Tally", value: "Current system: Tally" },
          { label: "Oracle / NetSuite", value: "Current system: Oracle / NetSuite" },
          { label: "Custom / in-house", value: "Current system: Custom / in-house build" },
          { label: "Other", value: "Current system: Other" },
        ],
      },
      {
        question: "What's the priority?",
        options: [
          {
            label: "Two-way data sync",
            value: "Goal: Two-way data sync with our existing system",
          },
          {
            label: "Replace existing system",
            value: "Goal: Replace our current system with Ezupp",
          },
          {
            label: "Add WhatsApp / Field on top",
            value: "Goal: Layer Ezupp's WhatsApp / Field modules on top",
          },
          {
            label: "Just exploring",
            value: "Goal: Just exploring options",
          },
        ],
      },
    ],
  },
];

type Step = "prompts" | "followups" | "form" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const emptyForm: FormState = { name: "", email: "", phone: "", message: "" };

interface Answer {
  question: string;
  answer: string; // long-form value
  label: string; // short label that was clicked
}

function buildMessage(prompt: Prompt, answers: Answer[]): string {
  const lines: string[] = [prompt.lead, ""];
  if (answers.length) {
    lines.push("Quick context:");
    answers.forEach((a) => {
      lines.push(`• ${a.answer}`);
    });
  }
  return lines.join("\n");
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("prompts");
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [followupIdx, setFollowupIdx] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  /* close on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* autofocus name when form appears */
  useEffect(() => {
    if (step === "form") {
      const t = setTimeout(() => firstInputRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [step]);

  function pickPrompt(p: Prompt) {
    setSelectedPrompt(p);
    setFollowupIdx(0);
    setAnswers([]);
    if (p.followups.length === 0) {
      setForm((f) => ({ ...f, message: p.lead }));
      setStep("form");
    } else {
      setStep("followups");
    }
  }

  function pickAnswer(opt: FollowupOption) {
    if (!selectedPrompt) return;
    const currentQuestion = selectedPrompt.followups[followupIdx].question;
    const newAnswers: Answer[] = [
      ...answers,
      { question: currentQuestion, answer: opt.value, label: opt.label },
    ];
    setAnswers(newAnswers);

    const isLast = followupIdx + 1 >= selectedPrompt.followups.length;
    if (isLast) {
      // Build summary message and go to form
      setForm((f) => ({
        ...f,
        message: buildMessage(selectedPrompt, newAnswers),
      }));
      setStep("form");
    } else {
      setFollowupIdx(followupIdx + 1);
    }
  }

  function backStep() {
    if (step === "followups") {
      if (followupIdx === 0) {
        // back to prompts
        setSelectedPrompt(null);
        setAnswers([]);
        setStep("prompts");
      } else {
        // pop last answer, go back one question
        setAnswers((a) => a.slice(0, -1));
        setFollowupIdx((i) => i - 1);
      }
    } else if (step === "form") {
      // go back to last follow-up if there were follow-ups, else prompts
      if (selectedPrompt && selectedPrompt.followups.length > 0) {
        setStep("followups");
        setFollowupIdx(selectedPrompt.followups.length - 1);
        setAnswers((a) => a.slice(0, -1));
      } else {
        reset();
      }
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setErr(null);

    const result = await submitLead({
      source: `Chat widget · ${selectedPrompt?.title ?? "Custom"}`,
      name: form.name,
      email: form.email,
      phone: form.phone,
      interest: selectedPrompt?.title ?? "",
      message: form.message,
    });

    setSubmitting(false);
    if (result.ok) {
      setStep("success");
    } else {
      setErr(result.error ?? "Something went wrong");
      setStep("error");
    }
  }

  function reset() {
    setSelectedPrompt(null);
    setFollowupIdx(0);
    setAnswers([]);
    setForm(emptyForm);
    setErr(null);
    setStep("prompts");
  }

  const currentFollowup =
    selectedPrompt && step === "followups"
      ? selectedPrompt.followups[followupIdx]
      : null;
  const followupTotal = selectedPrompt?.followups.length ?? 0;

  return (
    <>
      {/* floating trigger */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat with Ezzy"}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "group fixed bottom-6 right-6 z-[90] flex items-center gap-3 rounded-full",
          "bg-gradient-brand pl-3 pr-5 py-2 shadow-float transition-all duration-300",
          "hover:scale-105 hover:shadow-[0_24px_70px_-20px_rgba(43,78,255,.55)]",
          open && "scale-95 opacity-0 pointer-events-none",
        )}
      >
        <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white/95">
          <EzuppMascot pose="wave" size={46} animated={false} />
        </span>
        <span className="flex flex-col items-start text-left leading-tight">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/85">
            Chat with
          </span>
          <span className="text-[13px] font-extrabold text-white">Ezzy</span>
        </span>
        <span className="ml-1 inline-block h-2 w-2 animate-blink rounded-full bg-brand-teal" />
      </button>

      {/* panel */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[95] flex items-end justify-end p-4 transition",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        {/* backdrop only on mobile */}
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-brand-navy/40 backdrop-blur-[2px] transition-opacity md:hidden",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          ref={panelRef}
          role="dialog"
          aria-label="Chat with Ezzy"
          aria-modal="true"
          className={cn(
            "relative flex w-full max-w-[380px] flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(8,15,46,.35)] transition-all duration-300",
            "max-h-[min(640px,calc(100dvh-48px))]",
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          {/* header */}
          <div className="relative flex items-center gap-3 overflow-hidden bg-gradient-brand px-5 py-4 text-white">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
            <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
              <EzuppMascot pose="wave" size={54} animated={false} />
            </div>
            <div className="relative flex-1">
              <div className="text-[15px] font-extrabold">
                Ezzy from Ezupp
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/80">
                <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-brand-teal" />
                Usually replies within an hour
              </div>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 2l10 10M12 2L2 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* body */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            {step === "prompts" && (
              <div className="space-y-4">
                <div className="flex items-end gap-2">
                  <div className="rounded-2xl rounded-bl-sm bg-brand-light-gray px-4 py-3 text-[13.5px] leading-[1.55] text-brand-navy">
                    Hi 👋 I&apos;m Ezzy. What can I help you with today?
                  </div>
                </div>

                <div className="pl-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-gray">
                  Quick starters
                </div>

                <div className="space-y-2">
                  {PROMPTS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => pickPrompt(p)}
                      className={cn(
                        "group flex w-full items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 text-left",
                        "transition hover:border-brand-blue/40 hover:bg-brand-blue/[.03] hover:shadow-card",
                      )}
                    >
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-brand-soft text-[16px]">
                        {p.emoji}
                      </span>
                      <span className="flex-1 text-[13.5px] font-semibold text-brand-navy">
                        {p.title}
                      </span>
                      <span className="text-brand-blue opacity-0 transition group-hover:opacity-100">
                        <ArrowRightIcon size={14} />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "followups" && selectedPrompt && currentFollowup && (
              <div className="animate-fade-in space-y-4">
                {/* echo of the prompt the user picked */}
                <div className="ml-auto inline-block max-w-[85%] rounded-2xl rounded-br-sm bg-gradient-brand px-4 py-2.5 text-[13px] font-semibold text-white shadow-card">
                  {selectedPrompt.title}
                </div>

                {/* Ezzy intro line — only on first question so it doesn't repeat */}
                {followupIdx === 0 && (
                  <div className="flex items-start gap-2">
                    <div className="rounded-2xl rounded-bl-sm bg-brand-light-gray px-4 py-3 text-[13px] leading-[1.55] text-brand-navy">
                      <span className="mr-1.5">{selectedPrompt.emoji}</span>
                      {selectedPrompt.intro}
                    </div>
                  </div>
                )}

                {/* prior answers as small bubbles so the user feels heard */}
                {answers.map((a, i) => (
                  <div
                    key={`a-${i}`}
                    className="ml-auto inline-block max-w-[85%] rounded-2xl rounded-br-sm bg-brand-blue/10 px-3.5 py-2 text-[12.5px] font-semibold text-brand-navy"
                  >
                    {a.label}
                  </div>
                ))}

                {/* progress dots */}
                <div className="flex items-center gap-1.5 pl-1">
                  {Array.from({ length: followupTotal }).map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        i < followupIdx
                          ? "w-6 bg-brand-teal"
                          : i === followupIdx
                          ? "w-6 bg-brand-blue"
                          : "w-1.5 bg-brand-navy/15",
                      )}
                    />
                  ))}
                  <span className="ml-1 text-[10px] font-bold uppercase tracking-wider text-brand-gray">
                    Step {followupIdx + 1} / {followupTotal}
                  </span>
                </div>

                {/* current question */}
                <div className="flex items-start gap-2">
                  <div className="rounded-2xl rounded-bl-sm bg-brand-light-gray px-4 py-3 text-[13.5px] font-semibold leading-[1.5] text-brand-navy">
                    {currentFollowup.question}
                  </div>
                </div>

                {/* options */}
                <div className="grid grid-cols-2 gap-2">
                  {currentFollowup.options.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => pickAnswer(opt)}
                      className={cn(
                        "group rounded-xl border border-black/5 bg-white px-3 py-2.5 text-left text-[12.5px] font-semibold text-brand-navy",
                        "transition hover:-translate-y-0.5 hover:border-brand-blue/40 hover:bg-brand-blue/[.04] hover:shadow-card",
                        "active:translate-y-0",
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* nav row */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={backStep}
                    className="text-[12px] font-bold text-brand-navy/55 transition hover:text-brand-blue"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!selectedPrompt) return;
                      setForm((f) => ({
                        ...f,
                        message: buildMessage(selectedPrompt, answers),
                      }));
                      setStep("form");
                    }}
                    className="text-[12px] font-bold text-brand-navy/55 transition hover:text-brand-blue"
                  >
                    Skip to form →
                  </button>
                </div>
              </div>
            )}

            {step === "form" && (
              <form onSubmit={handleSubmit} className="animate-fade-in space-y-4">
                {selectedPrompt && (
                  <div className="flex items-start gap-2 rounded-2xl rounded-bl-sm bg-brand-light-gray px-4 py-3 text-[13px] leading-[1.55] text-brand-navy">
                    <span className="text-[15px] leading-none">
                      {selectedPrompt.emoji}
                    </span>
                    <span>
                      Got it —{" "}
                      <strong className="font-extrabold">
                        {selectedPrompt.title.toLowerCase()}
                      </strong>
                      .
                      {answers.length > 0 ? (
                        <>
                          {" "}I&apos;ve noted{" "}
                          <strong className="font-extrabold">
                            {answers.map((a) => a.label).join(" · ")}
                          </strong>
                          . Drop your details and I&apos;ll route you to the right specialist.
                        </>
                      ) : (
                        <> Drop your details and I&apos;ll route you to the right enterprise lead.</>
                      )}
                    </span>
                  </div>
                )}

                <ChatField label="Your name">
                  <input
                    ref={firstInputRef}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className={fieldCls}
                  />
                </ChatField>

                <ChatField label="Work email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@company.com"
                    className={fieldCls}
                  />
                </ChatField>

                <ChatField label="Phone (optional)">
                  <input
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 00000 00000"
                    className={fieldCls}
                  />
                </ChatField>

                <ChatField label="Message">
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={cn(fieldCls, "resize-none")}
                  />
                </ChatField>

                <div className="flex items-center gap-2">
                  <Button type="submit" disabled={submitting} className="flex-1">
                    {submitting ? "Sending…" : "Send message"}
                    {!submitting && <ArrowRightIcon />}
                  </Button>
                  <button
                    type="button"
                    onClick={backStep}
                    className="rounded-lg border border-black/10 px-3 py-[10px] text-[12px] font-bold text-brand-navy/60 transition hover:border-brand-blue hover:text-brand-blue"
                  >
                    Back
                  </button>
                </div>
              </form>
            )}

            {step === "success" && (
              <div className="py-2 text-center">
                <div className="mx-auto w-[120px]">
                  <EzuppMascot pose="celebrate" size={120} />
                </div>
                <h3 className="mt-4 text-[18px] font-extrabold text-brand-navy">
                  Message sent!
                </h3>
                <p className="mt-1.5 px-4 text-[13px] leading-[1.6] text-brand-gray">
                  We&apos;ve delivered your note to our enterprise team. You
                  should hear back within 24 hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-5"
                  onClick={reset}
                >
                  Send another
                </Button>
              </div>
            )}

            {step === "error" && (
              <div className="py-2 text-center">
                <div className="mx-auto w-[120px]">
                  <EzuppMascot pose="thinking" size={120} />
                </div>
                <h3 className="mt-4 text-[18px] font-extrabold text-brand-navy">
                  Something went wrong
                </h3>
                <p className="mt-1.5 px-4 text-[13px] leading-[1.6] text-brand-gray">
                  {err ?? "Please try again in a moment."}
                </p>
                <div className="mt-5 flex items-center justify-center gap-2">
                  <Button size="sm" onClick={() => setStep("form")}>
                    Try again
                  </Button>
                  <Button variant="outline" size="sm" onClick={reset}>
                    Start over
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* footer */}
          <div className="border-t border-black/5 bg-brand-light-gray px-5 py-3 text-center text-[11px] text-brand-gray">
            Powered by <span className="font-extrabold text-brand-navy">Ezupp</span>
            &nbsp;·&nbsp; We never share your data.
          </div>
        </div>
      </div>
    </>
  );
}

/* ----------------------------------------------------------------------- *
 * Small helpers scoped to this widget
 * ----------------------------------------------------------------------- */
const fieldCls =
  "w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-[13.5px] text-brand-navy outline-none transition placeholder:text-black/30 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15";

function ChatField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-brand-navy/55">
        {label}
      </span>
      {children}
    </label>
  );
}
