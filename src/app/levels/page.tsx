import Link from "next/link";
import BrandSigil from "@/components/BrandSigil";

export const metadata = {
  title: "The Four Levels of Reiki Certification",
  description:
    "The QSR Reiki certification path has four levels: Level 1, Level 2, Level 3 (Advanced Practitioner), and Level 4 (Reiki Master Teacher). Curriculum, attunements, prerequisites, and what each level opens for both beginners and practitioners trained in other Reiki traditions.",
  alternates: { canonical: "/levels" },
  openGraph: {
    title: "The Four Levels of Reiki Certification",
    description:
      "Level 1, Level 2, Advanced Practitioner, Reiki Master Teacher. Full curriculum and attunement details for each level of Quantum Shamanic Reiki.",
    url: "https://quantumshamanicreiki.com/levels",
  },
};

export default function LevelsPage() {
  return (
    <>
      <section className="bg-ember sparkle-bg">
        <div className="wrap-tight section text-center">
          <BrandSigil size={140} className="mx-auto" priority />
          <p className="font-display text-xs tracking-[0.36em] uppercase text-[var(--color-gold)] mt-6">
            The Path
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[var(--color-ivory)] mt-6">
            Four Levels.
            <br />
            <span className="italic font-serif font-light text-[var(--color-gold-light)]">
              One unfolding.
            </span>
          </h1>
          <div className="gold-rule mt-10" aria-hidden>
            <span className="star">✦ ✦ ✦</span>
          </div>
          <p className="font-serif text-lg md:text-xl text-[var(--color-ivory-warm)] mt-10 leading-relaxed">
            Each level rests on the foundation of the one before. The work is
            cumulative, and the depth grows with practice. Take what time you need.
            The fire is patient.
          </p>
        </div>
      </section>

      {LEVEL_DETAIL.map((lvl, i) => {
        const dark = i % 2 === 0;
        return (
          <section
            key={lvl.tag}
            className={dark ? "bg-charcoal-grain" : "bg-parchment text-[var(--color-charcoal)]"}
          >
            <div className="wrap section">
              <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
                <div>
                  {lvl.title ? (
                    <p
                      className={`font-display text-xs tracking-[0.32em] uppercase ${
                        dark ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]"
                      }`}
                    >
                      {lvl.tag}
                    </p>
                  ) : null}
                  <h2
                    className={`font-display text-3xl md:text-5xl ${
                      lvl.title ? "mt-4" : ""
                    } ${dark ? "text-[var(--color-ivory)]" : "text-[var(--color-charcoal)]"}`}
                  >
                    {lvl.title ?? lvl.tag}
                  </h2>
                  <p
                    className={`font-serif italic text-lg mt-3 ${
                      dark ? "text-[var(--color-gold-light)]" : "text-[var(--color-crimson)]"
                    }`}
                  >
                    {lvl.subtitle}
                  </p>
                  <p
                    className={`mt-6 inline-block px-3 py-1 border text-xs font-display tracking-[0.2em] uppercase ${
                      dark
                        ? "border-[var(--color-gold)] text-[var(--color-gold-light)]"
                        : "border-[var(--color-crimson)] text-[var(--color-crimson)]"
                    }`}
                  >
                    {lvl.status}
                  </p>
                </div>

                <div>
                  <p className={`font-serif text-lg leading-relaxed ${dark ? "text-[var(--color-ivory-warm)]" : ""}`}>
                    {lvl.intro}
                  </p>

                  <h3
                    className={`font-display text-sm tracking-[0.28em] uppercase mt-10 mb-4 ${
                      dark ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]"
                    }`}
                  >
                    What you will learn
                  </h3>
                  <ul
                    className={`grid gap-3 sm:grid-cols-2 font-serif ${
                      dark ? "text-[var(--color-ivory-warm)]" : "text-[var(--color-charcoal)]"
                    }`}
                  >
                    {lvl.curriculum.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-3 leading-relaxed ${
                          dark
                            ? "border-l border-[var(--color-gold-dark)] pl-4"
                            : "border-l border-[var(--color-crimson)] pl-4"
                        }`}
                      >
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3
                    className={`font-display text-sm tracking-[0.28em] uppercase mt-10 mb-4 ${
                      dark ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]"
                    }`}
                  >
                    The Attunement
                  </h3>
                  <p
                    className={`font-serif text-lg leading-relaxed italic ${
                      dark ? "text-[var(--color-gold-light)]" : "text-[var(--color-crimson)]"
                    }`}
                  >
                    {lvl.attunement}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-ember">
        <div className="wrap-tight section text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-ivory)]">
            The first step is Level I.
          </h2>
          <p className="font-serif text-lg text-[var(--color-ivory-warm)] mt-6 leading-relaxed">
            Level I training is open for enrollment. Whether you are new to Reiki,
            already trained in another tradition, or simply called to deepen — all are welcome.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/training" className="btn-gold">View Upcoming Trainings</Link>
            <Link href="/contact" className="btn-outline">Ask a Question</Link>
          </div>
        </div>
      </section>
    </>
  );
}

type LevelDetail = {
  tag: string;
  /** Optional. Levels I and II carry no title, only a tag and a strapline. */
  title?: string;
  subtitle: string;
  status: string;
  intro: string;
  curriculum: string[];
  attunement: string;
};

const LEVEL_DETAIL: LevelDetail[] = [
  {
    tag: "Level I",
    subtitle: "Becoming Reiki",
    status: "Open for enrollment",
    intro:
      "Level I lays the essential foundation for your Reiki practice. It is fundamentally experiential. While the manual provides the map, the territory is accessed through direct experience. Read it. Practise it. Let it teach you from the inside.",
    curriculum: [
      "What Reiki is, and the philosophy of QSR",
      "The history of Reiki, from Mikao Usui to the present",
      "The QSR Level 1 Medicine Attunement",
      "A Shamanic Fire Rite",
      "The Tree of Life practice — Becoming Reiki",
      "The human energy system: chakras, Aura, energy pathways",
      "Self-healing hand positions",
      "Offering treatments to others",
      "Ethics and the scope of practitioner responsibility",
    ],
    attunement:
      "You receive the Level I attunement and a Shamanic Fire Rite. From this moment forward, Reiki is not something you channel. It is something you have become.",
  },
  {
    tag: "Level II",
    subtitle: "Symbol & Distance",
    status: "Cohort forming — request details",
    intro:
      "Level II opens the practice into the realm of symbol and intention. You learn to work across distance, across time, and across the perceived boundaries between bodies. The work becomes both more precise and more spacious.",
    curriculum: [
      "Cho-Ku-Rei — the power symbol",
      "Sei-Hei-Ki — the emotional and mental healing symbol",
      "Hon-Sha-Ze-Sho-Nen — the distance symbol",
      "Working with intention and the observer effect",
      "Distance healing and quantum entanglement",
      "Treatment for habits, patterns, and ancestral wounds",
      "Building a practitioner-level treatment session",
      "Ethics of distance work and informed consent",
    ],
    attunement:
      "You receive the Level II attunement and the three sacred symbols. Your hands are now able to reach across the field where time and distance dissolve.",
  },
  {
    tag: "Level III",
    title: "Advanced Practitioner",
    subtitle: "The Master Symbol",
    status: "Prerequisite: Level II",
    intro:
      "Level III is the deepening into Mastery. This is not about hierarchy or power-over. This is the long work of refining your presence until the room itself begins to do the healing. The Master frequency is given.",
    curriculum: [
      "Dai-Ko-Myo — the Master Symbol",
      "The Master frequency in self and in service",
      "Advanced treatment forms and protocols",
      "Working with trauma, transition, and the dying",
      "Energetic protection and discernment",
      "The shadow work of the practitioner",
      "Holding space for others on the path",
      "The Five Principles as a daily practice",
    ],
    attunement:
      "You receive the Master attunement. The frequency itself begins to live in your bones. Your simply being in a room becomes part of the medicine.",
  },
  {
    tag: "Level IV",
    title: "Reiki Master Teacher",
    subtitle: "Lineage Carrier",
    status: "By invitation",
    intro:
      "Level IV is the capacity to attune others. To pass forward what was given to you. This level is offered by invitation, after long apprenticeship, because lineage transmission is sacred work and not all are called to teach.",
    curriculum: [
      "The full attunement ceremony — giving, not only receiving",
      "Lineage transmission and the responsibility of carrying",
      "Designing curriculum and teaching presence",
      "Mentoring students through their own awakening",
      "The ethics of payment, scope, and refusal",
      "Holding ceremony — opening, threshold, closing",
      "The keeper’s relationship to silence and rest",
      "Becoming a place where the medicine lives",
    ],
    attunement:
      "You become a place from which the lineage now flows outward. The fire is in your hands. You tend it for others.",
  },
];
