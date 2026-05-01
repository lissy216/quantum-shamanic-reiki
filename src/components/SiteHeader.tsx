"use client";

import Link from "next/link";
import { useState } from "react";
import Wordmark from "./Wordmark";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/levels", label: "The Path" },
  { href: "/sessions", label: "Sessions" },
  { href: "/training", label: "Training" },
  { href: "/book", label: "The Book" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(18,16,20,0.85)] border-b border-[rgba(200,162,74,0.18)]">
      <div className="wrap flex items-center justify-between py-3">
        <Link href="/" aria-label="Quantum Shamanic Reiki home" className="hover:opacity-90 transition">
          <Wordmark size="sm" variant="gold" />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[0.78rem] tracking-[0.18em] uppercase text-[var(--color-ivory-warm)] hover:text-[var(--color-gold-light)] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="md:hidden text-[var(--color-gold-light)] p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6 L18 18 M6 18 L18 6" strokeLinecap="round" />
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[rgba(200,162,74,0.15)] bg-[var(--color-charcoal-soft)]">
          <ul className="wrap py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-sm tracking-[0.18em] uppercase text-[var(--color-ivory-warm)] hover:text-[var(--color-gold-light)] py-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
