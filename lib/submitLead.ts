/**
 * Lead submission helper.
 *
 * Submissions are delivered to `akshit@electrovese.com` via FormSubmit.co's
 * AJAX endpoint — a zero-backend service that forwards form data as email.
 *
 * IMPORTANT: On the very first submission, FormSubmit will send a
 * verification email to `akshit@electrovese.com`. Click the confirmation
 * link in that email once and all future submissions arrive instantly.
 *
 * To swap this for your own backend later, change `LEAD_ENDPOINT` below to
 * point to a Next.js API route (e.g. `/api/lead`) and keep this function's
 * signature the same — no caller changes needed.
 */

export const LEAD_RECIPIENT = "akshit@electrovese.com";
const LEAD_ENDPOINT = `https://formsubmit.co/ajax/${LEAD_RECIPIENT}`;

export interface LeadPayload {
  /** Human-readable source, e.g. "Contact form" or "Chat widget". */
  source: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  interest?: string;
  message: string;
}

export interface LeadResult {
  ok: boolean;
  error?: string;
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  try {
    const res = await fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `[Ezupp] New lead — ${payload.source}`,
        _template: "table",
        _captcha: "false",
        ...payload,
      }),
    });

    if (!res.ok) {
      return { ok: false, error: `Submission failed (${res.status})` };
    }
    const data = (await res.json().catch(() => ({}))) as {
      success?: string | boolean;
      message?: string;
    };
    const success =
      data.success === true ||
      data.success === "true" ||
      data.success === undefined;
    return success
      ? { ok: true }
      : { ok: false, error: data.message ?? "Submission failed" };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}
