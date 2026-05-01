import QsrSymbol from "@/components/QsrSymbol";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Reach out about a Quantum Shamanic Reiki session, training, or the Reiki Evolved book.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ember sparkle-bg">
        <div className="wrap-tight section text-center">
          <QsrSymbol size={80} variant="gold" className="mx-auto" />
          <p className="font-display text-xs tracking-[0.36em] uppercase text-[var(--color-gold)] mt-6">
            Reach Out
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[var(--color-ivory)] mt-6">
            Send a note.
            <br />
            <span className="italic font-serif font-light text-[var(--color-gold-light)]">
              We will be in touch.
            </span>
          </h1>
          <div className="gold-rule mt-10" aria-hidden>
            <span className="star">✦ ✦ ✦</span>
          </div>
          <p className="font-serif text-lg text-[var(--color-ivory-warm)] mt-8 leading-relaxed">
            Sessions, training, the book, or simply a question — write in your own
            words and we&apos;ll meet you there.
          </p>
        </div>
      </section>

      <section className="bg-charcoal-grain">
        <div className="wrap section grid gap-14 lg:grid-cols-[1.4fr_1fr] items-start">
          <div>
            <h2 className="font-display text-2xl tracking-[0.04em] text-[var(--color-gold-light)]">
              Send a note
            </h2>
            <p className="font-serif text-[var(--color-ivory-warm)] mt-3 mb-8">
              We respond within two business days, usually sooner.
            </p>
            <ContactForm />
          </div>

          <aside className="border-l border-[rgba(200,162,74,0.25)] pl-8 font-serif text-[var(--color-ivory-warm)]">
            <h3 className="font-display text-xs tracking-[0.28em] uppercase text-[var(--color-gold)]">
              Direct
            </h3>
            <p className="mt-4">
              <a className="link-gold" href="mailto:hello@quantumshamanicreiki.com">
                hello@quantumshamanicreiki.com
              </a>
            </p>

            <h3 className="font-display text-xs tracking-[0.28em] uppercase text-[var(--color-gold)] mt-10">
              Where we work
            </h3>
            <p className="mt-4 leading-relaxed">
              In-person sessions and intensives are held in the Ottawa Valley,
              Ontario. Distance sessions and online cohorts are offered worldwide.
            </p>

            <h3 className="font-display text-xs tracking-[0.28em] uppercase text-[var(--color-gold)] mt-10">
              A note on scope
            </h3>
            <p className="mt-4 leading-relaxed text-sm text-[var(--color-smoke)]">
              We are not doctors, psychologists, or prescribers. Reiki complements
              medical and mental-health care; it does not replace it. Please continue
              with your care team alongside any work with us.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
