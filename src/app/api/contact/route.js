import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/constants";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const IS_DEV = process.env.NODE_ENV !== "production";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fail(error, status) {
  return NextResponse.json({ success: false, error }, { status });
}

// Real Resend errors can reveal account details, so visitors only see them in development.
function publicError(realMessage) {
  return IS_DEV ? realMessage : "Failed to send message. Please try again.";
}

function resendHint(message = "") {
  if (/api key is invalid/i.test(message)) {
    return "Create a new key at https://resend.com/api-keys and update RESEND_API_KEY in .env.local.";
  }
  if (/testing emails|own email address/i.test(message)) {
    return "onboarding@resend.dev can only send to your Resend account's email. Set EMAIL_TO to that address or verify a domain at https://resend.com/domains.";
  }
  if (/domain is not verified/i.test(message)) {
    return "EMAIL_FROM uses an unverified domain. Verify it at https://resend.com/domains or use onboarding@resend.dev.";
  }
  return null;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid request body.", 400);
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return fail("Name, email, and message are required.", 400);
  }

  if (!EMAIL_REGEX.test(email)) {
    return fail("Please provide a valid email address.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.EMAIL_FROM?.trim() || "Aivornex <onboarding@resend.dev>";
  const to = process.env.EMAIL_TO?.trim() || CONTACT_EMAIL;

  console.log("[contact] env check:", {
    RESEND_API_KEY: apiKey ? `set (${apiKey.slice(0, 7)}…, ${apiKey.length} chars)` : "MISSING",
    EMAIL_FROM: process.env.EMAIL_FROM ? from : `not set, using default: ${from}`,
    EMAIL_TO: process.env.EMAIL_TO ? to : `not set, using default: ${to}`,
  });

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is missing from .env.local");
    return fail(publicError("RESEND_API_KEY is missing from .env.local."), 500);
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Inquiry: ${service || "General"} - ${name}`,
      html: `
        <h2>New Contact from AIVORNEX</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        ${phone ? `<p><b>Phone:</b> ${escapeHtml(phone)}</p>` : ""}
        <p><b>Service:</b> ${escapeHtml(service || "Not specified")}</p>
        <p><b>Message:</b><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        <p><b>Date:</b> ${new Date().toLocaleString()}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend rejected the email:", error);
      const hint = resendHint(error.message);
      if (hint) console.error("[contact] Fix:", hint);
      return fail(publicError(`Resend: ${error.message}`), 502);
    }

    console.log("[contact] Email sent. Resend id:", data?.id, "to:", to);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Unexpected error while sending:", err);
    return fail(publicError(err?.message || "Unexpected error."), 500);
  }
}
