"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const SUBJECTS = [
  "General inquiry",
  "Book a session",
  "Training & enrollment",
  "Reiki Evolved (the book)",
  "Speaking or partnership",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong sending your message.");
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setError(msg);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[var(--color-gold)] bg-[rgba(200,162,74,0.08)] p-8 text-center">
        <p className="font-display text-2xl text-[var(--color-gold-light)]">
          Your note has arrived.
        </p>
        <p className="font-serif italic text-[var(--color-ivory-warm)] mt-3">
          We’ll be in touch soon. With care.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 font-serif">
      <Field label="Your name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <SelectField label="What is this about?" name="subject" options={SUBJECTS} />
      <TextareaField label="Your message" name="message" required rows={6} />

      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {status === "error" && (
        <p className="text-[var(--color-crimson)] font-serif">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold w-full md:w-auto disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Note"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-display text-xs tracking-[0.24em] uppercase text-[var(--color-gold)]">
        {label}
        {required && <span className="text-[var(--color-crimson-bright)]"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full bg-transparent border border-[rgba(200,162,74,0.4)] focus:border-[var(--color-gold)] outline-none px-4 py-3 text-[var(--color-ivory)] font-serif"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="font-display text-xs tracking-[0.24em] uppercase text-[var(--color-gold)]">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full bg-[var(--color-charcoal-soft)] border border-[rgba(200,162,74,0.4)] focus:border-[var(--color-gold)] outline-none px-4 py-3 text-[var(--color-ivory)] font-serif"
      >
        <option value="" disabled>Choose one…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
  rows = 5,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="font-display text-xs tracking-[0.24em] uppercase text-[var(--color-gold)]">
        {label}
        {required && <span className="text-[var(--color-crimson-bright)]"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        className="mt-2 w-full bg-transparent border border-[rgba(200,162,74,0.4)] focus:border-[var(--color-gold)] outline-none px-4 py-3 text-[var(--color-ivory)] font-serif resize-y"
      />
    </label>
  );
}
