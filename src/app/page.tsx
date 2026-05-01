import Link from "next/link";
import BrandSigil from "@/components/BrandSigil";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      {/* HERO */}
      <section className="bg-ember sparkle-bg relative overflow-hidden">
        <div className="wrap section text-center relative z-10">
          <div className="flex justify-center mb-8">
            <BrandSigil size={180} priority />
          </div>

          <p className="font-display text-xs md:text-sm tracking-[0.36em] uppercase text-[var(--color-gold)]">
            Quantum &nbsp;·&nbsp; Shamanic &nbsp;·&nbsp; Reiki
          </p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-[var(--color-ivory)] mt-6">
            You do not channel the light.
            <br />
            <span className="text-[var(--color-gold-light)] italic font-serif font-light">
              You become it.
            </span>
          </h1>

          <div className="gold-rule mt-10" aria-hidden>
            <span className="star">✦ ✦ ✦</span>
          </div>

          <p className="font-serif text-xl md:text-2xl text-[var(--color-ivory-warm)] mt-10 max-w-2xl mx-auto leading-relaxed">
            Quantum Shamanic Reiki is a four-level Reiki certification path that
            honours the lineage of Mikao Usui, integrates earth-rooted shamanic
            teaching, and applies the insights of quantum physics to the practice
            of energy healing.
          </p>
          <p className="font-serif text-base md:text-lg text-[var(--color-gold-light)] italic mt-5 max-w-2xl mx-auto leading-relaxed">
            Trainings and sessions held online worldwide, with in-person retreats
            and one-to-one sessions also offered in the Ottawa Valley, Ontario.
            Open to first-time clients, beginners, and practitioners already
            trained in another Reiki tradition or related modality.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/training" className="btn-gold">Begin Training</Link>
            <Link href="/sessions" className="btn-outline">Book a Session</Link>
          </div>
        </div>
      </section>

      {/* WHAT IS QSR */}
      <section className="bg-parchment text-[var(--color-charcoal)]">
        <div className="wrap-tight section text-center">
          <p className="font-display text-xs tracking-[0.32em] uppercase text-[var(--color-crimson)]">
            What is QSR
          </p>
          <h2 className="font-display text-3xl md:text-5xl mt-5 text-[var(--color-charcoal)]">
            An evolution. A deepening. A homecoming.
          </h2>
          <div className="gold-rule mt-8" aria-hidden>
            <span className="star">✦</span>
          </div>
          <div className="mt-10 space-y-6 font-serif text-lg md:text-xl text-[var(--color-charcoal)] leading-relaxed">
            <p>
              Traditional Reiki teaches that the practitioner is a channel — a hollow
              conduit through which healing energy flows from a divine Source.
              That model is true. It is also incomplete.
            </p>
            <p>
              Quantum Shamanic Reiki recognizes something deeper: the separation between
              you and the energy is itself an illusion. There is no gap to cross,
              because there is no hollow. <em>You are not separate from Reiki.
              You are Reiki.</em> The work of Level 1 is to remember this.
            </p>
            <p className="text-[var(--color-crimson)] italic">
              A traditional radio is a receiver. A star generates light. In QSR,
              you do not pick up a signal. You become the source.
            </p>
          </div>
        </div>
      </section>

      {/* THE FOUR LEVELS */}
      <section className="bg-charcoal-grain">
        <div className="wrap section">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.32em] uppercase text-[var(--color-gold)]">
              The Path
            </p>
            <h2 className="font-display text-3xl md:text-5xl mt-5 text-[var(--color-ivory)]">
              Four Levels of Becoming
            </h2>
            <div className="gold-rule mt-6" aria-hidden>
              <span className="star">✦ ✦ ✦</span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {LEVELS.map((lvl) => (
              <div
                key={lvl.title}
                className="border border-[rgba(200,162,74,0.25)] bg-[rgba(28,24,32,0.6)] p-7 flex flex-col"
              >
                <p className="font-display text-xs tracking-[0.28em] uppercase text-[var(--color-gold)]">
                  {lvl.tag}
                </p>
                <h3 className="font-display text-2xl text-[var(--color-ivory)] mt-3">
                  {lvl.title}
                </h3>
                <p className="font-serif italic text-[var(--color-gold-light)] mt-2">
                  {lvl.subtitle}
                </p>
                <p className="font-serif mt-5 text-[var(--color-ivory-warm)] leading-relaxed flex-1">
                  {lvl.summary}
                </p>
                <p className="mt-5 text-xs font-display tracking-[0.2em] uppercase text-[var(--color-smoke)]">
                  {lvl.status}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/levels" className="btn-outline">Walk The Full Path</Link>
          </div>
        </div>
      </section>

      {/* WHAT REIKI DOES */}
      <section className="bg-parchment text-[var(--color-charcoal)]">
        <div className="wrap section">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <p className="font-display text-xs tracking-[0.32em] uppercase text-[var(--color-crimson)]">
                What the work does
              </p>
              <h2 className="font-display text-3xl md:text-5xl mt-5">
                The river finds its course again.
              </h2>
              <div className="gold-rule mt-6" aria-hidden style={{ justifyContent: "flex-start" }}>
                <span className="star">✦</span>
              </div>
              <p className="font-serif text-lg mt-8 leading-relaxed">
                Imagine the body as a great river. In a healthy state, energy flows
                freely. When something blocks the flow — a fallen tree, a dam of
                trauma, a drought of neglect — the river stagnates. Reiki restores
                the natural current.
              </p>
              <p className="font-serif text-lg mt-5 leading-relaxed">
                What is remarkable is that the energy itself possesses wisdom.
                The practitioner does not decide where it goes. Reiki flows to where
                it is needed. It addresses cause as well as symptom. It works at the
                level of the whole person.
              </p>
            </div>

            <div className="border-l-2 border-[var(--color-crimson)] pl-7">
              <p className="font-display text-xs tracking-[0.28em] uppercase text-[var(--color-crimson)]">
                What Clinical Studies Show
              </p>
              <ul className="mt-6 space-y-5 font-serif text-base leading-relaxed">
                <li>
                  A 2017 review of 13 placebo-controlled trials found Reiki more
                  effective than sham treatment in 8 studies — for pain, anxiety,
                  heart-rate variability, and blood pressure.
                </li>
                <li>
                  A 2019 effectiveness trial of 1,411 sessions documented significant
                  improvements across pain, drowsiness, tiredness, nausea, anxiety,
                  depression, and overall wellbeing.
                </li>
                <li>
                  A 2025 meta-analysis (661 participants) found significant improvement
                  in quality of life. A 2024 meta-analysis (824 participants) found
                  significant anxiety reduction.
                </li>
                <li className="text-[var(--color-crimson)]">
                  No adverse effects have been reported in any published Reiki study.
                  The body of evidence is growing.
                </li>
              </ul>
              <p className="text-xs mt-6 text-[var(--color-smoke-dark)] font-sans">
                Sources: McManus 2017 · Dyer, Baldwin & Rand 2019 · Liu et al. 2025 · Li et al. 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-ember">
        <div className="wrap-tight section text-center">
          <BrandSigil size={120} className="mx-auto" />
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-ivory)] mt-8">
            You have arrived at the right place,
            <br />
            <span className="italic font-serif font-light text-[var(--color-gold-light)]">
              at the right time, in the right way.
            </span>
          </h2>
          <p className="font-serif text-lg text-[var(--color-ivory-warm)] mt-8 leading-relaxed">
            There are no accidents in healing. Something in you has been moving
            toward this. Now here you are.
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

const LEVELS = [
  {
    tag: "Level I",
    title: "Foundation",
    subtitle: "Becoming Reiki",
    summary:
      "The first attunement. Self-healing, hand positions, the chakra system, the Aura, ethics, and the Tree of Life practice. The ground beneath everything that follows.",
    status: "Open for enrollment",
  },
  {
    tag: "Level II",
    title: "Practitioner",
    subtitle: "Symbol & Distance",
    summary:
      "The sacred symbols and their living application — Cho-Ku-Rei, Sei-Hei-Ki, Hon-Sha-Ze-Sho-Nen. Distance healing through the entanglement of all things.",
    status: "Cohort forming",
  },
  {
    tag: "Level III",
    title: "Master",
    subtitle: "The Master Symbol",
    summary:
      "The Dai-Ko-Myo, the Master frequency. Deepened practice, advanced treatment forms, and the inner work of holding space for others on the path.",
    status: "Prerequisite: Level II",
  },
  {
    tag: "Level IV",
    title: "Teacher",
    subtitle: "Lineage Carrier",
    summary:
      "The capacity to attune others. Lineage transmission, ceremony, and the ethics of passing this medicine forward. The work of becoming a keeper.",
    status: "By invitation",
  },
];
