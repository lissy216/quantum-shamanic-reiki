import Link from "next/link";
import BrandSigil from "@/components/BrandSigil";

export const metadata = {
  title: "Reiki Evolved",
  description:
    "Reiki Evolved is the foundational text of Quantum Shamanic Reiki. Lineage, philosophy, and practice woven together.",
};

export default function BookPage() {
  return (
    <>
      <section className="bg-ember sparkle-bg">
        <div className="wrap section">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
            <div className="text-center lg:text-left">
              <p className="font-display text-xs tracking-[0.36em] uppercase text-[var(--color-gold)]">
                The Book
              </p>
              <h1 className="font-display text-4xl md:text-6xl text-[var(--color-ivory)] mt-6">
                Reiki Evolved
              </h1>
              <p className="font-serif italic text-xl md:text-2xl text-[var(--color-gold-light)] mt-4">
                The companion text to Quantum Shamanic Reiki
              </p>
              <div className="gold-rule mt-8 lg:justify-start" aria-hidden style={{ justifyContent: "flex-start" }}>
                <span className="star">✦ ✦ ✦</span>
              </div>
              <p className="font-serif text-lg text-[var(--color-ivory-warm)] mt-8 leading-relaxed max-w-xl">
                A grounded, lineage-honoring book that sets out the philosophy,
                history, science, and practice of QSR. Written for practitioners,
                students, and anyone called to deepen.
              </p>
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/contact" className="btn-gold">Request a Copy</Link>
                <Link href="/training" className="btn-outline">Begin Training</Link>
              </div>
            </div>

            {/* Book mock — gold frame around symbol; replace later with cover image */}
            <div className="relative max-w-sm mx-auto">
              <div className="aspect-[2/3] bg-charcoal-grain border border-[var(--color-gold-dark)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] flex flex-col items-center justify-between p-10">
                <div className="text-center">
                  <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-gold)]">
                    Reiki
                  </p>
                  <p className="font-display text-2xl text-[var(--color-ivory)] mt-1 italic">
                    Evolved
                  </p>
                </div>
                <BrandSigil size={180} priority />
                <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-[var(--color-gold)] text-center">
                  Quantum · Shamanic · Reiki
                </p>
              </div>
              <p className="text-center text-xs text-[var(--color-smoke)] mt-4 italic font-serif">
                Cover preview · final art coming soon
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
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-ivory)]">
            Begin with the page.
            <br />
            <span className="italic font-serif font-light text-[var(--color-gold-light)]">
              Continue with the practice.
            </span>
          </h2>
          <p className="font-serif text-lg text-[var(--color-ivory-warm)] mt-8">
            Request a copy and we&apos;ll send ordering details, format options, and
            information on the companion training.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">Request a Copy</Link>
            <Link href="/training" className="btn-outline">Train With Us</Link>
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
      "&ldquo;Just for today&rdquo; — the portal to the practice. Anger, worry, gratitude, devotion, kindness as living disciplines.",
  },
  {
    tag: "Part V",
    title: "The History of Reiki",
    body:
      "Anchored in the Usui Memorial Stone. Mikao Usui&rsquo;s life and work. Hayashi&rsquo;s clinic. Takata in the West. The quieter streams that came to us.",
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
