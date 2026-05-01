import Link from "next/link";
import QsrSymbol from "@/components/QsrSymbol";

export const metadata = {
  title: "Training & Enrollment",
  description:
    "Quantum Shamanic Reiki Level 1 training and certification — formats, dates, and how to enroll.",
};

export default function TrainingPage() {
  return (
    <>
      <section className="bg-ember sparkle-bg">
        <div className="wrap-tight section text-center">
          <QsrSymbol size={88} variant="gold" className="mx-auto" />
          <p className="font-display text-xs tracking-[0.36em] uppercase text-[var(--color-gold)] mt-6">
            Training
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[var(--color-ivory)] mt-6">
            The fire is
            <br />
            <span className="italic font-serif font-light text-[var(--color-gold-light)]">
              already in you.
            </span>
          </h1>
          <div className="gold-rule mt-10" aria-hidden>
            <span className="star">✦ ✦ ✦</span>
          </div>
          <p className="font-serif text-lg md:text-xl text-[var(--color-ivory-warm)] mt-10 leading-relaxed">
            We are not giving you something new. We are walking with you toward what
            is already true. The training is fundamentally experiential — practical,
            grounded, and lived from the inside.
          </p>
        </div>
      </section>

      <section className="bg-parchment text-[var(--color-charcoal)]">
        <div className="wrap section">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.32em] uppercase text-[var(--color-crimson)]">
              Formats
            </p>
            <h2 className="font-display text-3xl md:text-5xl mt-5">
              Choose how you arrive
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {FORMATS.map((f) => (
              <div
                key={f.title}
                className="border border-[var(--color-crimson)] bg-[var(--color-ivory-warm)] p-8"
              >
                <p className="font-display text-xs tracking-[0.28em] uppercase text-[var(--color-crimson)]">
                  {f.tag}
                </p>
                <h3 className="font-display text-2xl text-[var(--color-charcoal)] mt-3">
                  {f.title}
                </h3>
                <p className="font-serif italic text-[var(--color-crimson)] mt-2">{f.length}</p>
                <p className="font-serif mt-5 leading-relaxed">{f.body}</p>
                <ul className="mt-5 space-y-2 font-serif">
                  {f.included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[var(--color-crimson)]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-grain">
        <div className="wrap section">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.32em] uppercase text-[var(--color-gold)]">
              What you receive
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-[var(--color-ivory)] mt-5">
              The full Level I container
            </h2>
            <div className="gold-rule mt-6" aria-hidden>
              <span className="star">✦</span>
            </div>
          </div>

          <ul className="grid gap-5 md:grid-cols-2 font-serif text-[var(--color-ivory-warm)] text-lg">
            {RECEIVED.map((item) => (
              <li
                key={item}
                className="border-l-2 border-[var(--color-gold-dark)] pl-5 leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-parchment text-[var(--color-charcoal)]">
        <div className="wrap-tight section">
          <p className="font-display text-xs tracking-[0.32em] uppercase text-[var(--color-crimson)]">
            Frequently asked
          </p>
          <h2 className="font-display text-3xl md:text-5xl mt-5">Common questions</h2>
          <div className="gold-rule mt-6" aria-hidden style={{ justifyContent: "flex-start" }}>
            <span className="star">✦</span>
          </div>

          <dl className="mt-10 divide-y divide-[rgba(122,13,27,0.2)]">
            {FAQ.map((q) => (
              <div key={q.q} className="py-6">
                <dt className="font-display text-lg tracking-[0.04em] text-[var(--color-crimson)]">
                  {q.q}
                </dt>
                <dd className="font-serif text-lg leading-relaxed mt-3">{q.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ember">
        <div className="wrap-tight section text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-ivory)]">
            Take the next step
          </h2>
          <p className="font-serif text-lg text-[var(--color-ivory-warm)] mt-6">
            Send a note. Tell us where you are. We&apos;ll share the next available cohort,
            tuition, and any questions before you commit.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">Request Enrollment Details</Link>
            <Link href="/levels" className="btn-outline">Review the Path</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const FORMATS = [
  {
    tag: "Format A",
    title: "In-Person Weekend Intensive",
    length: "Two consecutive days · approximately 14 hours of instruction",
    body:
      "A traditional weekend container, held in the Ottawa Valley. We work in a small group, with full attunement ceremony, hands-on practice, and shared meals. You leave certified and practising.",
    included: [
      "Bound Level I manual (yours to keep)",
      "Live attunement ceremony and Shamanic Fire Rite",
      "Hands-on practice with feedback",
      "QSR Level 1 Certificate",
      "Continuing email support",
    ],
  },
  {
    tag: "Format B",
    title: "Online Cohort",
    length: "Four weekly evening sessions · approximately 12 hours total",
    body:
      "For practitioners outside the region. We meet online over four sessions, with private practice in between. The attunement is given in real time across distance — using the same principles of entanglement that govern distance treatment itself.",
    included: [
      "Digital Level I manual (printable)",
      "Distance attunement with live ceremony",
      "Recorded sessions for review",
      "QSR Level 1 Certificate",
      "Practice partner matching",
    ],
  },
];

const RECEIVED = [
  "The Level 1 Medicine Attunement, transmitted in ceremony",
  "A Shamanic Fire Rite to seal and protect the practice",
  "Bound Level I manual or its digital equivalent",
  "The Tree of Life practice — Becoming Reiki",
  "Full instruction in self-healing hand positions",
  "Full instruction in offering treatments to others",
  "Working maps of the chakras, Aura, and energy pathways",
  "The Five Reiki Principles as a daily practice",
  "Ethics, scope of practice, and practitioner integrity",
  "Continuing support after certification",
];

const FAQ = [
  {
    q: "Do I need any prior Reiki experience?",
    a: "No. Level I is an open door. Whether you are completely new or already trained in another tradition, you are welcome. The attunement does not conflict with prior lineages — it adds to them.",
  },
  {
    q: "Is QSR a religion?",
    a: "No. Reiki is not a religion and is not tied to any particular faith tradition. It works regardless of belief, as electricity does. The practice integrates beautifully with whatever spiritual framework, or none, you already hold.",
  },
  {
    q: "Will I be certified to practise on others?",
    a: "Yes. Level I includes the full attunement and instruction needed to begin offering Reiki to others, with appropriate ethical framing and scope of practice clearly taught.",
  },
  {
    q: "How is QSR different from other Reiki trainings?",
    a: "Two main distinctions. First, you do not learn to channel Reiki — you learn that you have always been Reiki, and the work is to remember it. Second, we ground deeply into the Earth as an active participant in healing, not merely a neutral surface beneath us.",
  },
  {
    q: "What happens after Level I?",
    a: "Many students practise Level I for months or years before continuing. There is no rush. Levels II, III, and IV become available as you are ready and as you feel called.",
  },
  {
    q: "What is the investment?",
    a: "Tuition varies by format and cohort. We share current pricing privately when you request enrollment details, along with options for sliding-scale and instalment plans where appropriate.",
  },
];
