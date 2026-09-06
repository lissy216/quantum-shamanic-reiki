import Link from "next/link";
import Image from "next/image";
import { BookJsonLd, BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata = {
  title: "Reiki Evolved — The Book (Coming Soon)",
  description:
    "Reiki Evolved is the forthcoming book on Quantum Shamanic Reiki — the full Usui Reiki lineage, the Five Principles as living practice, the chakra and Aura systems, the published clinical research, and the quantum frameworks that meet it. A modern path of healing, presence, and living tradition. Coming soon.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Reiki Evolved — The Book (Coming Soon)",
    description:
      "A modern path of healing, presence, and living tradition. The companion book to Quantum Shamanic Reiki, forthcoming.",
    url: "https://quantumshamanicreiki.com/book",
  },
};

export default function BookPage() {
  return (
    <>
      <BookJsonLd />
      <BreadcrumbJsonLd trail={[{ name: "Home", href: "/" }, { name: "Reiki Evolved", href: "/book" }]} />
      <section className="bg-ember sparkle-bg">
        <div className="wrap section">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block font-display text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-charcoal)] bg-[var(--color-gold)] px-3 py-1.5">
                Coming Soon
              </span>
              <p className="font-display text-xs tracking-[0.36em] uppercase text-[var(--color-gold)] mt-6">
                The Book
              </p>
              <h1 className="font-display text-4xl md:text-6xl text-[var(--color-ivory)] mt-4">
                Reiki Evolved
              </h1>
              <p className="font-serif italic text-xl md:text-2xl text-[var(--color-gold-light)] mt-4">
                A modern path of healing, presence, and living tradition.
              </p>
              <div className="gold-rule mt-8 lg:justify-start" aria-hidden style={{ justifyContent: "flex-start" }}>
                <span className="star">✦ ✦ ✦</span>
              </div>
              <p className="font-serif text-lg text-[var(--color-ivory-warm)] mt-8 leading-relaxed max-w-xl">
                A grounded, lineage-honoring book that sets out the philosophy,
                history, science, and practice of QSR. Written for practitioners,
                students, and anyone called to deepen.
              </p>
              <p className="font-serif text-base text-[var(--color-gold-light)] italic mt-5">
                Release date to be announced. Add your name to the list and we&apos;ll
                send a single note when copies are available.
              </p>
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/contact" className="btn-gold">Notify Me When Released</Link>
                <Link href="/training" className="btn-outline">Begin Training</Link>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto">
              <div className="relative shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                <Image
                  src="/images/Reiki.Evolved.BookCover.png"
                  alt="Reiki Evolved book cover — Tree of Life over a still mountain lake"
                  width={800}
                  height={1200}
                  priority
                  className="w-full h-auto block border border-[var(--color-gold-dark)]"
                />
                {/* Coming Soon corner ribbon */}
                <div className="absolute top-4 -right-2 rotate-3">
                  <div className="font-display text-[0.7rem] tracking-[0.32em] uppercase text-[var(--color-charcoal)] bg-[var(--color-gold)] px-4 py-2 shadow-lg border border-[var(--color-gold-dark)]">
                    Coming Soon
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-[var(--color-smoke)] mt-5 italic font-serif">
                Cover art revealed · publication date forthcoming
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment text-[var(--color-charcoal)]">
        <div className="wrap-tight section">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-crimson)]">
            What this book offers
          </h2>
          <div className="gold-rule mt-6" aria-hidden style={{ justifyContent: "flex-start" }}>
            <span className="star">✦</span>
          </div>

          <div className="mt-10 space-y-8 font-serif text-lg leading-relaxed">
            <p>
              <em>Reiki Evolved</em> is a seed and a map. Seeds contain the blueprint
              of the tree, but the actual tree grows in the soil of your practice.
              The map is not the territory. Only direct experience will reveal what
              Reiki is. This book offers the map. The practice offers the territory.
            </p>
            <p>
              Within these pages you will find the full lineage of Reiki, anchored
              in the Usui Memorial Stone and the careful work of Doi, Mochizuki, and
              Petter. You will find the Five Reiki Principles unfolded as a living
              practice. You will find the chakra system, the Aura, hand positions,
              and ethics. You will find the published clinical research on Reiki —
              including a 2025 meta-analysis on quality-of-life outcomes — and the
              quantum frameworks that meet it.
            </p>
            <p>
              And you will find the QSR distinction: that you are not separate from
              Reiki, that the Earth is alive and an active partner in healing, and
              that the work of practice is the work of remembering what you have
              always been.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-grain">
        <div className="wrap section">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.32em] uppercase text-[var(--color-gold)]">
              Inside the book
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-[var(--color-ivory)] mt-5">
              Chapter highlights
            </h2>
            <div className="gold-rule mt-6" aria-hidden>
              <span className="star">✦</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {CHAPTERS.map((c) => (
              <div
                key={c.title}
                className="border-l-2 border-[var(--color-gold-dark)] pl-5"
              >
                <p className="font-display text-xs tracking-[0.28em] uppercase text-[var(--color-gold)]">
                  {c.tag}
                </p>
                <h3 className="font-display text-xl text-[var(--color-ivory)] mt-2">
                  {c.title}
                </h3>
                <p className="font-serif text-[var(--color-ivory-warm)] mt-3 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ember">
        <div className="wrap-tight section text-center">
          <span className="inline-block font-display text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-charcoal)] bg-[var(--color-gold)] px-3 py-1.5">
            Coming Soon
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-ivory)] mt-6">
            Begin with the page.
            <br />
            <span className="italic font-serif font-light text-[var(--color-gold-light)]">
              Continue with the practice.
            </span>
          </h2>
          <p className="font-serif text-lg text-[var(--color-ivory-warm)] mt-8">
            <em>Reiki Evolved</em> is forthcoming. Add your name to the announcement
            list and we&apos;ll send one note the day copies are available — no
            other email, ever.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">Notify Me When Released</Link>
            <Link href="/training" className="btn-outline">Train With Us Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const CHAPTERS = [
  {
    tag: "Part I",
    title: "What Reiki Is",
    body:
      "The meaning of Rei and Ki. How Reiki works in the body. The river analogy. What the published clinical research shows, and what remains open.",
  },
  {
    tag: "Part II",
    title: "The Three Pillars",
    body:
      "Gasshō, Reiji-hō, and Chiryō — the foundational practices of Usui Reiki Ryōhō explained for daily working life.",
  },
  {
    tag: "Part III",
    title: "The QSR Difference",
    body:
      "Why we do not channel — we become. The Earth as living partner. Two distinctions that change everything about the practice.",
  },
  {
    tag: "Part IV",
    title: "The Five Principles",
    body:
      "“Just for today” — the portal to the practice. Anger, worry, gratitude, devotion, kindness as living disciplines.",
  },
  {
    tag: "Part V",
    title: "The History of Reiki",
    body:
      "Anchored in the Usui Memorial Stone. Mikao Usui’s life and work. Hayashi’s clinic. Takata in the West. The quieter streams that came to us.",
  },
  {
    tag: "Part VI",
    title: "Energy and the Body",
    body:
      "The chakra system, the Aura, energy pathways. Working maps for the practitioner, with full hand-position references.",
  },
  {
    tag: "Part VII",
    title: "Quantum and the Field",
    body:
      "Wave-particle duality, the observer effect, entanglement, biofield science. Where physics and practice meet without overreach.",
  },
  {
    tag: "Part VIII",
    title: "Practice and Ethics",
    body:
      "Self-healing, treating others, scope of practice, professional integrity, and the long discipline of becoming.",
  },
];
