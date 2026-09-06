import Link from "next/link";
import BrandSigil from "@/components/BrandSigil";
import { SessionsServiceJsonLd, BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata = {
  title: "Online & Distance Reiki Sessions (Worldwide) + In-Person",
  description:
    "Book a Reiki healing session — online and remotely from anywhere in the world, or in person in the Ottawa Valley, Ontario. Quantum Shamanic Reiki distance sessions support stress, anxiety, sleep, grief, and the body’s own capacity to heal. No belief required. First-time clients welcome.",
  alternates: { canonical: "/sessions" },
  openGraph: {
    title: "Online & Distance Reiki Sessions — Worldwide",
    description:
      "An unhurried hour with the field. Distance Reiki sessions worldwide; in-person sessions in the Ottawa Valley.",
    url: "https://quantumshamanicreiki.com/sessions",
  },
};

export default function SessionsPage() {
  return (
    <>
      <SessionsServiceJsonLd />
      <BreadcrumbJsonLd trail={[{ name: "Home", href: "/" }, { name: "Sessions", href: "/sessions" }]} />
      <section className="bg-ember sparkle-bg">
        <div className="wrap-tight section text-center">
          <BrandSigil size={140} className="mx-auto" priority />
          <p className="font-display text-xs tracking-[0.36em] uppercase text-[var(--color-gold)] mt-6">
            Receive
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[var(--color-ivory)] mt-6">
            A session is simply
            <br />
            <span className="italic font-serif font-light text-[var(--color-gold-light)]">
              an unhurried hour with the field.
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
            What to expect
          </h2>
          <p className="font-serif text-lg mt-6 leading-relaxed">
            Reiki sessions are offered online and as distance sessions worldwide,
            with in-person sessions also held in the Ottawa Valley, Ontario.
            Clients come for a wide range of reasons — stress, anxiety, sleep
            difficulty, grief, recovery, or simply because something in them is
            asking for stillness. First-time clients are warmly welcomed.
          </p>
          <p className="font-serif text-lg mt-5 leading-relaxed">
            You arrive. You are met where you are. You lie down fully clothed on a
            massage table — or you settle into a comfortable chair if lying is not
            comfortable for your body — and the work begins.
          </p>
          <p className="font-serif text-lg mt-5 leading-relaxed">
            Hands rest gently on or above the body in a series of positions that
            move through the chakras and Aura. Most people experience deep warmth,
            a sense of weight lifting, drifting between waking and sleep, and a
            quiet that does not arrive easily in ordinary life.
          </p>
          <p className="font-serif text-lg mt-5 leading-relaxed">
            What is remarkable about this work is that the energy itself possesses
            wisdom. The practitioner does not decide where it goes or what it does.
            Reiki flows to where it is needed. It addresses cause as well as symptom.
            It works at the level of the whole person, not just the presenting complaint.
          </p>
          <p className="font-serif text-lg mt-5 leading-relaxed italic text-[var(--color-crimson)]">
            You do not have to believe in Reiki for it to work. You only have to
            be willing to lie down for an hour and let the river find its course.
          </p>
        </div>
      </section>

      <section className="bg-charcoal-grain">
        <div className="wrap section">
          <div className="text-center mb-12">
            <p className="font-display text-xs tracking-[0.32em] uppercase text-[var(--color-gold)]">
              Session Forms
            </p>
            <h2 className="font-display text-3xl md:text-5xl mt-5 text-[var(--color-ivory)]">
              Ways to receive
            </h2>
            <div className="gold-rule mt-6" aria-hidden>
              <span className="star">✦</span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {OFFERINGS.map((o) => (
              <div
                key={o.title}
                className="border border-[rgba(200,162,74,0.25)] bg-[rgba(28,24,32,0.6)] p-7 flex flex-col"
              >
                <p className="font-display text-xs tracking-[0.28em] uppercase text-[var(--color-gold)]">
                  {o.length}
                </p>
                <h3 className="font-display text-2xl text-[var(--color-ivory)] mt-3">
                  {o.title}
                </h3>
                <p className="font-serif italic text-[var(--color-gold-light)] mt-2">
                  {o.format}
                </p>
                <p className="font-serif mt-5 text-[var(--color-ivory-warm)] leading-relaxed flex-1">
                  {o.body}
                </p>
                <p className="mt-6 font-display text-sm tracking-[0.18em] uppercase text-[var(--color-gold-light)]">
                  {o.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment text-[var(--color-charcoal)]">
        <div className="wrap-tight section">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--color-crimson)]">
            What we do not do
          </h2>
          <p className="font-serif text-lg mt-6 leading-relaxed">
            Reiki practitioners are not doctors, psychologists, or prescribers. We
            do not diagnose conditions. We never advise discontinuing medical
            treatment. We always work in support of, never in opposition to,
            conventional care. Reiki is offered today in many hospital and clinical
            settings. It is a complement, not a replacement.
          </p>
          <p className="font-serif text-lg mt-5 leading-relaxed">
            If you are working through serious illness, ongoing mental health concerns,
            or active trauma, please continue with your care team. Reiki is an
            extraordinary companion to that work. It is not a substitute for it.
          </p>
        </div>
      </section>

      <section className="bg-ember">
        <div className="wrap-tight section text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-ivory)]">
            Ready to book?
          </h2>
          <p className="font-serif text-lg text-[var(--color-ivory-warm)] mt-6">
            Send a brief note and we&apos;ll find a time that works.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">Request a Session</Link>
            <Link href="/about" className="btn-outline">Learn More First</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const OFFERINGS = [
  {
    length: "60 minutes",
    title: "Distance Reiki Session",
    format: "Online · anywhere in the world",
    body:
      "Distance Reiki uses the symbol Hon-Sha-Ze-Sho-Nen and the principle of entanglement: that what has ever interacted remains, in some sense, connected. You rest at home. The work arrives. Available worldwide, in any time zone we can hold space in.",
    price: "Investment shared upon booking",
  },
  {
    length: "90 minutes",
    title: "Extended Sacred Session",
    format: "Online or in person",
    body:
      "A longer arc. Includes a fire-rite opening, an extended Reiki treatment, and a closing dialogue. Held for those navigating thresholds — grief, transition, the work of integration.",
    price: "Investment shared upon booking",
  },
  {
    length: "60 minutes",
    title: "In-Person Session",
    format: "Ottawa Valley",
    body:
      "A full Reiki treatment on the table. Quiet space, warm room, hand-positions through the seven chakras and the Aura. Most clients leave deeply rested and clearer than they came.",
    price: "Investment shared upon booking",
  },
];
