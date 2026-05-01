import Link from "next/link";
import Wordmark from "./Wordmark";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(200,162,74,0.18)] bg-[var(--color-charcoal-soft)] text-[var(--color-ivory-warm)]">
      <div className="wrap py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Wordmark size="md" variant="gold" />
          <p className="font-serif italic mt-5 text-[var(--color-smoke)] max-w-xs">
            Grounded light. Sacred clarity.
          </p>
          <p className="font-sans text-sm mt-4 text-[var(--color-smoke)] leading-relaxed max-w-sm">
            A four-level certification path weaving the lineage of Mikao Usui with
            earth-rooted shamanic teaching and the insights of quantum physics.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.24em] uppercase text-[var(--color-gold)] mb-4">
            Explore
          </h4>
          <ul className="space-y-2 font-serif">
            <li><Link className="hover:text-[var(--color-gold-light)]" href="/about">About</Link></li>
            <li><Link className="hover:text-[var(--color-gold-light)]" href="/levels">The Four Levels</Link></li>
            <li><Link className="hover:text-[var(--color-gold-light)]" href="/sessions">Healing Sessions</Link></li>
            <li><Link className="hover:text-[var(--color-gold-light)]" href="/training">Training & Enrollment</Link></li>
            <li><Link className="hover:text-[var(--color-gold-light)]" href="/book">Reiki Evolved</Link></li>
            <li><Link className="hover:text-[var(--color-gold-light)]" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs tracking-[0.24em] uppercase text-[var(--color-gold)] mb-4">
            Reach Out
          </h4>
          <ul className="space-y-2 font-serif">
            <li>
              <a className="hover:text-[var(--color-gold-light)]" href="mailto:hello@quantumshamanicreiki.com">
                hello@quantumshamanicreiki.com
              </a>
            </li>
            <li className="text-[var(--color-smoke)]">Ottawa Valley · Online · Worldwide</li>
          </ul>
          <div className="gold-rule mt-8" aria-hidden>
            <span className="star">✦ ✦ ✦</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(200,162,74,0.10)]">
        <div className="wrap py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--color-smoke)] font-sans">
          <p>© {year} Quantum Shamanic Reiki. All rights reserved.</p>
          <p className="font-display tracking-[0.24em] uppercase text-[0.65rem]">QSR</p>
        </div>
      </div>
    </footer>
  );
}
