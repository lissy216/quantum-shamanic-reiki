import Link from "next/link";
import BrandSigil from "@/components/BrandSigil";

export const metadata = {
  title: "About Reiki & the QSR Tradition",
  description:
    "What Reiki is, how it works, and what makes Quantum Shamanic Reiki different. The full Usui Reiki lineage from Mikao Usui to today, plus the two distinctions of QSR: becoming Reiki rather than channeling it, and grounding the practice into the living Earth.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Reiki & the QSR Tradition",
    description:
      "What Reiki is, how it works, and the lineage from Mikao Usui to QSR. Two distinctions that change everything about the practice.",
    url: "https://quantumshamanicreiki.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ember sparkle-bg">
        <div className="wrap-tight section text-center">
          <BrandSigil size={140} className="mx-auto" priority />
          <p className="font-display text-xs tracking-[0.36em] uppercase text-[var(--color-gold)] mt-6">
            About the Tradition
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[var(--color-ivory)] mt-6">
            A lineage that breathes,
            <br />
            <span className="italic font-serif font-light text-[var(--color-gold-light)]">
              and a practice that listens.
            </span>
          </h1>
          <div className="gold-rule mt-10" aria-hidden>
            <span className="star">✦ ✦ ✦</span>
          </div>
        </div>
      </section>

      <section className="bg-parchment text-[var(--color-charcoal)]">
        <div className="wrap-tight section">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--color-crimson)]">
            What Reiki is
          </h2>
          <p className="font-serif text-lg mt-6 leading-relaxed">
            <em>Reiki</em> (RAY-key) is a Japanese word. <em>Rei</em> means spiritual
            or universal consciousness — the divine intelligence that underlies all
            things. <em>Ki</em> means life force energy — the vital current that
            animates all living beings. Together: spiritually guided life force energy.
          </p>
          <p className="font-serif text-lg mt-5 leading-relaxed">
            It is a gentle, non-invasive healing art practised through the laying
            on of hands or hands-off energy work. The practitioner supports the flow
            of healing energy through the client’s system, restoring balance,
            transforming held patterns, and supporting the body’s innate capacity
            to heal itself.
          </p>
          <p className="font-serif text-lg mt-5 leading-relaxed">
            Your worldview does not need to shift to benefit from Reiki. You do not
            need to believe in it. It works regardless of belief, as electricity does.
            Practitioners always work in support of, never in opposition to, conventional
            medical care. We do not diagnose, prescribe, or replace medical treatment.
          </p>
        </div>
      </section>

      <section className="bg-charcoal-grain">
        <div className="wrap section">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.32em] uppercase text-[var(--color-gold)]">
              The Lineage
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-[var(--color-ivory)] mt-5">
              From the mountain to your hands
            </h2>
            <div className="gold-rule mt-6" aria-hidden>
              <span className="star">✦</span>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {LINEAGE.map((entry) => (
              <article
                key={entry.name}
                className="border-l-2 border-[var(--color-gold-dark)] pl-6"
              >
                <p className="font-display text-xs tracking-[0.28em] uppercase text-[var(--color-gold)]">
                  {entry.years}
                </p>
                <h3 className="font-display text-2xl text-[var(--color-ivory)] mt-2">
                  {entry.name}
                </h3>
                <p className="font-serif italic text-[var(--color-gold-light)] mt-1">
                  {entry.role}
                </p>
                <p className="font-serif text-[var(--color-ivory-warm)] mt-4 leading-relaxed">
                  {entry.body}
                </p>
              </article>
            ))}
          </div>

          <p className="font-serif italic text-center text-[var(--color-smoke)] mt-12 max-w-2xl mx-auto">
            Lineages are not built only by those who publish. Some of the most important
            keepers of the practice taught one student at a time, in rooms without cameras,
            and trusted that what they had been given would find its way forward.
          </p>
        </div>
      </section>

      <section className="bg-parchment text-[var(--color-charcoal)]">
        <div className="wrap-tight section">
          <p className="font-display text-xs tracking-[0.32em] uppercase text-[var(--color-crimson)]">
            What makes QSR different
          </p>
          <h2 className="font-display text-3xl md:text-5xl mt-5">
            Two distinctions, both essential.
          </h2>
          <div className="gold-rule mt-6" aria-hidden style={{ justifyContent: "flex-start" }}>
            <span className="star">✦</span>
          </div>

          <div className="mt-10 space-y-10 font-serif text-lg leading-relaxed">
            <div>
              <h3 className="font-display text-2xl text-[var(--color-crimson)] mb-4">
                I. You become the light.
              </h3>
              <p>
                Traditional Reiki teaches that the practitioner is a hollow conduit.
                That model is accurate, and many extraordinary healers have worked
                from within it. Quantum Shamanic Reiki recognizes something deeper:
                the separation between you and the energy is itself an illusion.
                You are not separate from Reiki. You are Reiki. The work of Level 1
                is to remember this.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-[var(--color-crimson)] mb-4">
                II. The Earth is alive, and we root into her.
              </h3>
              <p>
                Many healing modalities draw energy down from above — from Heaven,
                from Source, from the transcendent. This is powerful. In QSR, we do
                both: we draw from Source above and we root into the Earth below.
                The Earth is not merely a neutral surface. She is alive, conscious,
                and an active participant in healing. Grounding into the Earth
                is not optional in QSR. It is the foundation of everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ember">
        <div className="wrap-tight section text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-ivory)]">
            Ready to begin?
          </h2>
          <p className="font-serif text-lg text-[var(--color-ivory-warm)] mt-6">
            Walk the four-level path, or experience the work in a session first.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/levels" className="btn-gold">The Four Levels</Link>
            <Link href="/sessions" className="btn-outline">Book a Session</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const LINEAGE = [
  {
    years: "1865–1926",
    name: "Mikao Usui",
    role: "Founder, Usui Reiki Ryōhō",
    body:
      "Born in the village of Taniai, Gifu Prefecture. After a 21-day fast, meditation, and prayer on Mount Kurama in 1922, he experienced a profound awakening described as a great Reiki energy entering him. He opened a clinic in Tokyo, founded the Usui Reiki Ryōhō Gakkai, and taught over 2,000 students before his passing.",
  },
  {
    years: "1880–1940",
    name: "Chujiro Hayashi",
    role: "Naval physician, Shinpiden Master",
    body:
      "One of Usui’s eleven Master-level students. Founded the Hayashi Reiki Kenkyukai in Tokyo, where he refined the practice into the structured form most familiar to Western practitioners today. Bridge between Usui’s teaching and the world.",
  },
  {
    years: "1900–1980",
    name: "Hawayo Takata",
    role: "Carrier of Reiki to the West",
    body:
      "Born in Hawaii to Japanese immigrant parents. Healed of multiple serious conditions at Hayashi’s clinic, then returned to Hawaii to practise and teach. Began teaching mainland classes in 1973. Initiated twenty-two Masters before her death and ensured Reiki survived in the West.",
  },
  {
    years: "Modern era",
    name: "Quiet Streams",
    role: "Hidden teachers · Ann Thomas · Kathy Glover Scott",
    body:
      "Within the wider unfolding, quieter currents flow through teachers whose names never reach the public record. Through Ann Thomas’s Ascension Reiki and the careful transmission of Kathy Glover Scott in Ottawa, the teachings that became QSR were carried into our hands.",
  },
];
