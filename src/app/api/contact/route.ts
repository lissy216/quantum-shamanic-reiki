import { NextResponse } from "next/server";

export const runtime = "nodejs";

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_EMAIL_TO ?? "hello@quantumshamanicreiki.com";
  const from = process.env.INQUIRY_EMAIL_FROM ?? "QSR <hello@darkhorsehealinglodge.com>";

  if (!apiKey) {
    console.log("[QSR contact] Resend not configured. Inquiry received:", {
      name,
      email,
      subject: body.subject,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  try {
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

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ from, to, subject, html, reply_to: email }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[QSR contact] Resend error:", res.status, text);
      return NextResponse.json(
        { error: "Mail service is temporarily unavailable." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[QSR contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected error sending your note." },
      { status: 500 }
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
