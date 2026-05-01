import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dns from "node:dns";

export const runtime = "nodejs";

// Vercel's Node runtime sometimes returns EBUSY for getaddrinfo on the
// default IPv6-first lookup order. Forcing IPv4 first resolves it.
dns.setDefaultResultOrder("ipv4first");

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.INQUIRY_EMAIL_TO ?? "hello@quantumshamanicreiki.com";
  const from = process.env.INQUIRY_EMAIL_FROM ?? "QSR <hello@quantumshamanicreiki.com>";

  if (!host || !user || !pass) {
    console.log("[QSR contact] SMTP not configured. Inquiry received:", {
      name,
      email,
      subject: body.subject,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      tls: { servername: host },
    });

    const subject = body.subject
      ? `[QSR] ${body.subject} — ${name}`
      : `[QSR] New inquiry — ${name}`;

    const html = `
      <h2 style="font-family: Georgia, serif; color: #7a0d1b;">New QSR inquiry</h2>
      <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      <p><strong>Subject:</strong> ${escapeHtml(body.subject ?? "(none)")}</p>
      <hr/>
      <pre style="font-family: Georgia, serif; white-space: pre-wrap;">${escapeHtml(message)}</pre>
    `;

    const text = `New QSR inquiry\n\nFrom: ${name} <${email}>\nSubject: ${body.subject ?? "(none)"}\n\n${message}`;

    await transporter.sendMail({
      from,
      to,
      subject,
      html,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const detail = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    console.error("[QSR contact] SMTP send error:", detail);
    return NextResponse.json(
      {
        error: "Mail service is temporarily unavailable.",
        debug: detail,
      },
      { status: 502 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
