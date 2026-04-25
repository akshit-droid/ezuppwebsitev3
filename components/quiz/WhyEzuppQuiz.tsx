"use client";

import { useEffect, useState, type FormEvent } from "react";
import { EzuppMascot } from "@/components/mascot/EzuppMascot";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons/SolutionIcons";
import { submitLead } from "@/lib/submitLead";
import { cn } from "@/lib/cn";

/* ----------------------------------------------------------------------- *
 * Question data
 *
 * Each option carries a weight and a tag list. Tags map to recommended
 * modules on the final score screen.
 * ----------------------------------------------------------------------- */

type ModuleTag =
  | "fleet"
  | "distributor"
  | "supply"
  | "loyalty"
  | "ai"
  | "crm"
  | "warranty"
  | "whatsapp"
  | "healthcare"
  | "hrms";

interface Option {
  label: string;
  emoji: string;
  score: number;
  tags: ModuleTag[];
}

interface Question {
  id: string;
  title: string;
  hint: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: "industry",
    title: "Which sounds most like your business?",
    hint: "Pick the one that fits best.",
    options: [
      {
        label: "Consumer electronics / appliances",
        emoji: "📱",
        score: 18,
        tags: ["warranty", "crm", "whatsapp"],
      },
      {
        label: "FMCG, CPG or consumer brands",
        emoji: "🛒",
        score: 20,
        tags: ["distributor", "loyalty", "supply"],
      },
      {
        label: "Manufacturing / industrial",
        emoji: "🏭",
        score: 17,
        tags: ["supply", "fleet", "hrms"],
      },
      {
        label: "Healthcare / clinics / hospitals",
        emoji: "🩺",
        score: 19,
        tags: ["healthcare", "whatsapp", "crm"],
      },
      {
        label: "Retail, D2C or services",
        emoji: "🛍️",
        score: 16,
        tags: ["whatsapp", "loyalty", "crm"],
      },
    ],
  },
  {
    id: "pain",
    title: "What's hurting the most right now?",
    hint: "Be honest — we'll tailor the recommendation.",
    options: [
      {
        label: "Data lives in silos — nothing talks",
        emoji: "🧩",
        score: 22,
        tags: ["ai", "crm"],
      },
      {
        label: "Field team visibility is a black box",
        emoji: "🕳️",
        score: 20,
        tags: ["fleet", "distributor"],
      },
      {
        label: "Customer support drowning in WhatsApp",
        emoji: "💬",
        score: 21,
        tags: ["whatsapp", "ai"],
      },
      {
        label: "Spreadsheets + manual handoffs everywhere",
        emoji: "📊",
        score: 19,
        tags: ["crm", "supply", "hrms"],
      },
    ],
  },
  {
    id: "size",
    title: "How big is your team?",
    hint: "Ezupp scales from 20 to 20,000.",
    options: [
      { label: "Under 50", emoji: "🌱", score: 14, tags: ["whatsapp", "crm"] },
      {
        label: "50 – 500",
        emoji: "🌿",
        score: 18,
        tags: ["crm", "whatsapp", "loyalty"],
      },
      {
        label: "500 – 5,000",
        emoji: "🌳",
        score: 20,
        tags: ["supply", "distributor", "hrms"],
      },
      {
        label: "5,000+ enterprise",
        emoji: "🏢",
        score: 22,
        tags: ["ai", "supply", "hrms", "crm"],
      },
    ],
  },
  {
    id: "timeline",
    title: "When do you want to be live?",
    hint: "Our average implementation is 2–6 weeks.",
    options: [
      {
        label: "Yesterday — we needed this last quarter",
        emoji: "⚡",
        score: 20,
        tags: ["whatsapp", "crm"],
      },
      {
        label: "Within a month",
        emoji: "⏱️",
        score: 18,
        tags: ["crm", "whatsapp", "loyalty"],
      },
      {
        label: "This quarter",
        emoji: "📅",
        score: 16,
        tags: ["supply", "distributor"],
      },
      {
        label: "Still scoping — show me what's possible",
        emoji: "🔍",
        score: 14,
        tags: ["ai"],
      },
    ],
  },
];

/* Module → readable display, href, blurb */
const MODULE_META: Record<
  ModuleTag,
  { name: string; href: string; blurb: string; emoji: string }
> = {
  fleet: {
    name: "Sales Fleet",
    href: "/solutions/fleet",
    blurb: "Routes, attendance, live tracking for your field teams.",
    emoji: "🚚",
  },
  distributor: {
    name: "Distributor Mgmt",
    href: "/solutions/distributor",
    blurb: "Primary + secondary sales, beat plans, claims — one system.",
    emoji: "🏢",
  },
  supply: {
    name: "Supply Chain",
    href: "/solutions/supply",
    blurb: "Plant → warehouse → dealer visibility with live dispatch.",
    emoji: "📦",
  },
  loyalty: {
    name: "Loyalty Mgmt",
    href: "/solutions/loyalty",
    blurb: "QR-based loyalty that rewards retailers & consumers.",
    emoji: "🎯",
  },
  ai: {
    name: "AI Ecosystem",
    href: "/solutions/ai",
    blurb: "Intelligence layer over every module — auto-routing, auto-insights.",
    emoji: "🤖",
  },
  crm: {
    name: "Smart CRM",
    href: "/solutions/crm",
    blurb: "360° customer view with pipelines, tasks and inbox.",
    emoji: "📊",
  },
  warranty: {
    name: "Digital Warranty",
    href: "/solutions/warranty",
    blurb: "QR-based warranty activation + anti-counterfeit.",
    emoji: "🛡️",
  },
  whatsapp: {
    name: "WhatsApp Solution",
    href: "/solutions/whatsapp",
    blurb: "Chatbots, support, campaigns, tracking — one inbox.",
    emoji: "💬",
  },
  healthcare: {
    name: "Healthcare Edition",
    href: "/solutions/healthcare",
    blurb: "Appointments, vitals, patient timeline for clinics.",
    emoji: "🩺",
  },
  hrms: {
    name: "Skytech HRMS",
    href: "https://www.skytechhr.com/",
    blurb: "Compliance, payroll, attendance across the workforce.",
    emoji: "👥",
  },
};

type Step = "intro" | "quiz" | "result" | "submitted";

/** Initial delay before auto-opening on first visit (ms). */
const FIRST_OPEN_DELAY_MS = 6_000;
/** Re-open delay after the user dismisses the popup (ms). */
const REOPEN_DELAY_MS = 300_000;

export function WhyEzuppQuiz() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("intro");
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  /* Auto-open on every visit after a small delay,
     and re-open 150s after each dismissal — until the user submits. */
  useEffect(() => {
    let firstTimer: ReturnType<typeof setTimeout> | null = null;
    let reopenTimer: ReturnType<typeof setTimeout> | null = null;

    // First visit pop: short delay so the user sees the page first
    firstTimer = setTimeout(() => {
      setOpen((prev) => prev || true);
    }, FIRST_OPEN_DELAY_MS);

    // Re-open whenever the popup is closed (after 150s) — unless the user
    // has already submitted (we don't want to nag a converted user).
    const onClosed = (e: Event) => {
      const detail = (e as CustomEvent<{ submitted?: boolean }>).detail;
      if (detail?.submitted) return;
      if (reopenTimer) clearTimeout(reopenTimer);
      reopenTimer = setTimeout(() => {
        setOpen(true);
      }, REOPEN_DELAY_MS);
    };
    window.addEventListener("ezupp-quiz-closed", onClosed as EventListener);

    return () => {
      if (firstTimer) clearTimeout(firstTimer);
      if (reopenTimer) clearTimeout(reopenTimer);
      window.removeEventListener("ezupp-quiz-closed", onClosed as EventListener);
    };
  }, []);

  /* Lock body scroll while open */
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  /* ESC to close */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function handleClose() {
    const wasSubmitted = step === "submitted";
    setOpen(false);
    // reset with a slight delay so the closing animation isn't interrupted
    setTimeout(() => {
      setStep("intro");
      setQIdx(0);
      setAnswers([]);
      setSubmitting(false);
      setSubmitError(null);
      setForm({ name: "", company: "", email: "", phone: "" });
    }, 250);
    // Notify the auto-open effect so it can schedule the next reopen.
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("ezupp-quiz-closed", {
          detail: { submitted: wasSubmitted },
        }),
      );
    }
  }

  function start() {
    setStep("quiz");
    setQIdx(0);
    setAnswers([]);
  }

  function answer(opt: Option) {
    const next = [...answers, opt];
    setAnswers(next);
    if (qIdx + 1 < QUESTIONS.length) {
      setQIdx(qIdx + 1);
    } else {
      setStep("result");
    }
  }

  function back() {
    if (qIdx === 0) {
      setStep("intro");
      return;
    }
    setQIdx(qIdx - 1);
    setAnswers(answers.slice(0, -1));
  }

  /* ------- scoring ------- */
  const rawScore = answers.reduce((s, a) => s + a.score, 0);
  const maxScore = QUESTIONS.reduce(
    (s, q) => s + Math.max(...q.options.map((o) => o.score)),
    0,
  );
  const scorePct = maxScore > 0 ? Math.round((rawScore / maxScore) * 100) : 0;

  const tagCounts = answers.reduce<Record<string, number>>((acc, a) => {
    a.tags.forEach((t) => {
      acc[t] = (acc[t] ?? 0) + 1;
    });
    return acc;
  }, {});
  const recommendedTags = (Object.entries(tagCounts) as [ModuleTag, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([t]) => t);

  const verdict =
    scorePct >= 85
      ? {
          title: "Perfect fit.",
          body:
            "You're exactly the kind of business Ezupp was built for. Our enterprise team will show you a live environment wired to your data.",
        }
      : scorePct >= 70
        ? {
            title: "Strong fit.",
            body:
              "You'll see wins in weeks, not quarters. We can scope the right modules for your team and show a working demo.",
          }
        : scorePct >= 55
          ? {
              title: "Solid fit.",
              body:
                "There's meaningful overlap. Let's walk through the modules that matter most for you.",
            }
          : {
              title: "Worth a conversation.",
              body:
                "We may or may not be right for you — and that's fine. Book a call and we'll tell you honestly.",
            };

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const summary = QUESTIONS.map((q, i) => {
      const a = answers[i];
      return `${q.title} — ${a ? a.label : "—"}`;
    }).join("\n");

    const res = await submitLead({
      source: "Why Ezupp Quiz",
      interest: recommendedTags.map((t) => MODULE_META[t].name).join(", "),
      name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      message: `Fit score: ${scorePct}/100\n\nAnswers:\n${summary}`,
    });

    setSubmitting(false);
    if (res.ok) {
      setStep("submitted");
    } else {
      setSubmitError(res.error ?? "Something went wrong. Try again.");
    }
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Take the Why Ezupp quiz"
        className={cn(
          "group fixed bottom-6 left-6 z-40 hidden items-center gap-3 rounded-full border border-white/20 bg-gradient-brand px-4 py-3 text-white shadow-[0_18px_50px_-12px_rgba(43,78,255,.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-10px_rgba(43,78,255,.7)] sm:inline-flex",
          open && "pointer-events-none opacity-0",
        )}
      >
        <span className="text-[18px]">✨</span>
        <span className="text-[13px] font-extrabold tracking-tight">
          Is Ezupp right for you?
        </span>
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-extrabold">
          60s quiz
        </span>
      </button>

      {/* Mobile mini trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Take the Why Ezupp quiz"
        className={cn(
          "fixed bottom-[88px] left-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-[18px] text-white shadow-[0_18px_40px_-12px_rgba(43,78,255,.55)] sm:hidden",
          open && "pointer-events-none opacity-0",
        )}
      >
        ✨
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <button
            aria-label="Close"
            onClick={handleClose}
            className="absolute inset-0 animate-fade-in bg-brand-navy/55 backdrop-blur-sm"
          />

          <div className="relative z-10 flex w-full max-w-[720px] animate-slide-up flex-col overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:rounded-[28px]">
            {/* Top gradient band */}
            <div className="relative bg-gradient-brand px-6 py-5 text-white sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-[20px]">
                    ✨
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-[.15em] text-white/80">
                      60-second quiz
                    </div>
                    <div className="text-[17px] font-extrabold tracking-tight sm:text-[19px]">
                      Why Choose Ezupp?
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  aria-label="Close quiz"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 4l8 8M12 4l-8 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* progress */}
              {step === "quiz" && (
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full bg-white transition-all duration-500"
                    style={{
                      width: `${((qIdx + 1) / QUESTIONS.length) * 100}%`,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Body */}
            <div className="max-h-[72vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              {step === "intro" && (
                <div className="flex flex-col items-center text-center">
                  <EzuppMascot pose="wave" size={120} />
                  <h3 className="mt-4 text-[22px] font-extrabold leading-[1.2] tracking-tight text-brand-navy sm:text-[26px]">
                    Let&apos;s see if we&apos;re a{" "}
                    <span className="grad-text">perfect fit.</span>
                  </h3>
                  <p className="mt-3 max-w-[460px] text-[14px] leading-[1.7] text-brand-gray sm:text-[15px]">
                    Four quick questions. Ezzy scores your fit and recommends
                    the exact Ezupp modules your business will get the most
                    from.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[12px] font-semibold text-brand-navy/65">
                    <span className="inline-flex items-center gap-1.5">
                      <span>⚡</span> 60 seconds
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span>🎯</span> Tailored suggestions
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span>🔒</span> No spam, ever
                    </span>
                  </div>
                  <Button size="lg" onClick={start} className="mt-7">
                    Start the quiz
                    <ArrowRightIcon />
                  </Button>
                </div>
              )}

              {step === "quiz" && (
                <div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={back}
                      className="text-[12px] font-bold text-brand-gray transition hover:text-brand-navy"
                    >
                      ← Back
                    </button>
                    <span className="text-[11px] font-extrabold uppercase tracking-[.12em] text-brand-gray">
                      {qIdx + 1} / {QUESTIONS.length}
                    </span>
                  </div>

                  <h3
                    key={QUESTIONS[qIdx].id}
                    className="mt-4 animate-word-swap text-[22px] font-extrabold leading-[1.2] tracking-tight text-brand-navy sm:text-[26px]"
                  >
                    {QUESTIONS[qIdx].title}
                  </h3>
                  <p className="mt-2 text-[13px] text-brand-gray">
                    {QUESTIONS[qIdx].hint}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {QUESTIONS[qIdx].options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => answer(opt)}
                        className="group flex items-center justify-between gap-4 rounded-2xl border border-black/8 bg-white px-4 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-card"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-brand-soft text-[18px]">
                            {opt.emoji}
                          </div>
                          <span className="text-[14px] font-bold text-brand-navy sm:text-[15px]">
                            {opt.label}
                          </span>
                        </div>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="flex-shrink-0 text-brand-gray transition group-hover:translate-x-1 group-hover:text-brand-blue"
                        >
                          <path
                            d="M5 12h14m0 0l-5-5m5 5l-5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === "result" && (
                <div>
                  {/* score display */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44">
                      <svg
                        viewBox="0 0 120 120"
                        className="absolute inset-0 -rotate-90"
                      >
                        <circle
                          cx="60"
                          cy="60"
                          r="52"
                          stroke="rgba(43,78,255,0.12)"
                          strokeWidth="10"
                          fill="none"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="52"
                          stroke="url(#quizScoreGrad)"
                          strokeWidth="10"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${(scorePct / 100) * (2 * Math.PI * 52)} ${2 * Math.PI * 52}`}
                          className="transition-all duration-700"
                        />
                        <defs>
                          <linearGradient
                            id="quizScoreGrad"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#2B4EFF" />
                            <stop offset="100%" stopColor="#2ED8A0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="flex flex-col items-center">
                        <div className="text-[38px] font-extrabold tracking-[-0.04em] text-brand-navy sm:text-[44px]">
                          {scorePct}
                        </div>
                        <div className="-mt-1 text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-gray">
                          / 100 fit
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-4 text-[22px] font-extrabold tracking-tight text-brand-navy sm:text-[26px]">
                      {verdict.title}
                    </h3>
                    <p className="mt-2 max-w-[480px] text-[14px] leading-[1.7] text-brand-gray sm:text-[15px]">
                      {verdict.body}
                    </p>
                  </div>

                  {/* recommended modules */}
                  <div className="mt-7">
                    <div className="text-[11px] font-extrabold uppercase tracking-[.15em] text-brand-gray">
                      Ezzy recommends
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {recommendedTags.map((tag) => {
                        const m = MODULE_META[tag];
                        const isExternal = m.href.startsWith("http");
                        const Tag = isExternal ? "a" : "a";
                        return (
                          <Tag
                            key={tag}
                            href={m.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="group rounded-2xl border border-black/8 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-card"
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand-soft text-[16px]">
                              {m.emoji}
                            </div>
                            <div className="mt-2 text-[14px] font-extrabold text-brand-navy">
                              {m.name}
                            </div>
                            <div className="mt-1 text-[12px] leading-[1.55] text-brand-gray">
                              {m.blurb}
                            </div>
                          </Tag>
                        );
                      })}
                    </div>
                  </div>

                  {/* lead form */}
                  <form
                    onSubmit={submit}
                    className="mt-7 rounded-2xl bg-brand-light-gray p-5 sm:p-6"
                  >
                    <div className="text-[11px] font-extrabold uppercase tracking-[.15em] text-brand-gray">
                      Get your tailored demo
                    </div>
                    <div className="mt-1 text-[15px] font-extrabold text-brand-navy sm:text-[16px]">
                      We&apos;ll email your score + a playbook for the modules
                      above.
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <QuizField
                        label="Name"
                        value={form.name}
                        onChange={(v) => setForm({ ...form, name: v })}
                        required
                      />
                      <QuizField
                        label="Company"
                        value={form.company}
                        onChange={(v) => setForm({ ...form, company: v })}
                        required
                      />
                      <QuizField
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={(v) => setForm({ ...form, email: v })}
                        required
                      />
                      <QuizField
                        label="Phone"
                        type="tel"
                        value={form.phone}
                        onChange={(v) => setForm({ ...form, phone: v })}
                      />
                    </div>

                    {submitError && (
                      <p className="mt-3 text-[12px] font-semibold text-red-500">
                        {submitError}
                      </p>
                    )}

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setStep("quiz");
                          setQIdx(0);
                          setAnswers([]);
                        }}
                        className="text-[12px] font-bold text-brand-gray transition hover:text-brand-navy"
                      >
                        ← Retake quiz
                      </button>
                      <Button type="submit" size="md" disabled={submitting}>
                        {submitting ? "Sending…" : "Email my score"}
                        {!submitting && <ArrowRightIcon />}
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {step === "submitted" && (
                <div className="flex flex-col items-center py-8 text-center">
                  <EzuppMascot pose="celebrate" size={140} />
                  <h3 className="mt-4 text-[22px] font-extrabold tracking-tight text-brand-navy sm:text-[26px]">
                    You&apos;re in. Check your inbox.
                  </h3>
                  <p className="mt-2 max-w-[420px] text-[14px] leading-[1.7] text-brand-gray sm:text-[15px]">
                    We just mailed your fit score ({scorePct}/100) and a short
                    module playbook to {form.email}. Our team will reach out
                    within 24 hours.
                  </p>
                  <Button
                    size="md"
                    variant="outline"
                    onClick={handleClose}
                    className="mt-6"
                  >
                    Close
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ------- tiny field component local to this file ------- */
function QuizField({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-extrabold uppercase tracking-[.1em] text-brand-gray">
        {label}
        {required && <span className="text-brand-blue"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-[14px] font-medium text-brand-navy outline-none transition focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(43,78,255,.12)]"
      />
    </label>
  );
}
