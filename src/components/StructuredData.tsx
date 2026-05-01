/**
 * JSON-LD structured data components for SEO.
 * Inline <script type="application/ld+json"> blocks rendered server-side.
 */

const SITE = "https://quantumshamanicreiki.com";
const ORG_NAME = "Quantum Shamanic Reiki";
const ORG_LOGO = `${SITE}/images/qsr-vercel-app-icon-1024-no-c9x.png`;
const ORG_DESCRIPTION =
  "Quantum Shamanic Reiki is a four-level Reiki certification path weaving the Usui Reiki lineage with earth-rooted shamanic teaching and the insights of quantum physics. Sessions and training in the Ottawa Valley and online.";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Used on the home page. Establishes the brand. */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: ORG_NAME,
        alternateName: "QSR",
        url: SITE,
        logo: ORG_LOGO,
        description: ORG_DESCRIPTION,
        slogan: "Grounded light. Sacred clarity.",
        areaServed: ["Ottawa Valley", "Ontario", "Canada", "Worldwide"],
        knowsAbout: [
          "Reiki",
          "Usui Reiki",
          "Energy healing",
          "Reiki training",
          "Reiki certification",
          "Shamanic healing",
          "Quantum physics and consciousness",
          "Distance healing",
        ],
        sameAs: [],
      }}
    />
  );
}

/** Used on the home page. Local-business signal for "Reiki near me" / "Reiki Ottawa" search intent. */
export function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "@id": `${SITE}/#business`,
        name: ORG_NAME,
        url: SITE,
        image: ORG_LOGO,
        description: ORG_DESCRIPTION,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Ontario",
          addressCountry: "CA",
          addressLocality: "Ottawa Valley",
        },
        areaServed: [
          { "@type": "City", name: "Ottawa" },
          { "@type": "AdministrativeArea", name: "Ontario" },
          { "@type": "Country", name: "Canada" },
        ],
        availableService: [
          { "@type": "Service", name: "Reiki healing session (in person)" },
          { "@type": "Service", name: "Distance Reiki session" },
          { "@type": "Service", name: "Reiki Level 1 training and certification" },
        ],
      }}
    />
  );
}

/** Sessions page — itemized service offering. */
export function SessionsServiceJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Quantum Shamanic Reiki Healing Session",
        serviceType: "Reiki energy healing",
        provider: { "@id": `${SITE}/#organization` },
        areaServed: ["Ottawa Valley", "Ontario", "Canada", "Worldwide"],
        url: `${SITE}/sessions`,
        description:
          "A Reiki healing session — a gentle, non-invasive energy treatment that supports the body's own capacity to heal. Available in person in the Ottawa Valley or remotely worldwide. Open to first-time clients and ongoing practice.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Reiki session formats",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "In-Person Reiki Session",
                description:
                  "Full Reiki treatment on the table. 60 minutes. Held in the Ottawa Valley.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Distance Reiki Session",
                description:
                  "Remote Reiki using the Hon-Sha-Ze-Sho-Nen symbol. 60 minutes. Anywhere in the world.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Extended Sacred Reiki Session",
                description:
                  "90-minute session with fire-rite opening, extended treatment, and closing dialogue. For thresholds, transitions, and integration work.",
              },
            },
          ],
        },
      }}
    />
  );
}

/** Training page — Course schema for Reiki Level 1. */
export function TrainingCourseJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Quantum Shamanic Reiki Level 1 — Foundation Training",
        description:
          "Reiki Level 1 training and certification. Includes the Level 1 Medicine Attunement, Shamanic Fire Rite, the Tree of Life practice, the chakra and Aura systems, full self-healing and treatment-of-others protocols, the Five Reiki Principles, and ethics. Open to complete beginners and to practitioners trained in other Reiki lineages or related modalities.",
        provider: { "@id": `${SITE}/#organization` },
        url: `${SITE}/training`,
        educationalLevel: "Beginner",
        teaches: [
          "What Reiki is and how it works",
          "Usui Reiki history and lineage",
          "Reiki self-healing hand positions",
          "Treating others with Reiki",
          "The seven chakras and the human energy system",
          "The Aura and biofield",
          "The Five Reiki Principles",
          "Ethics and scope of Reiki practice",
          "The QSR Tree of Life practice",
        ],
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            name: "Weekend Intensive (in person, Ottawa Valley)",
            courseMode: "Onsite",
            location: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Ontario",
                addressCountry: "CA",
              },
            },
            courseWorkload: "PT14H",
          },
          {
            "@type": "CourseInstance",
            name: "Online Cohort (four weekly sessions)",
            courseMode: "Online",
            courseWorkload: "PT12H",
          },
        ],
      }}
    />
  );
}

/** Training page — FAQs surface in Google rich results. */
export function TrainingFaqJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need any prior Reiki experience?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Level 1 is an open door. Whether you are completely new or already trained in another Reiki tradition, you are welcome. The QSR attunement does not conflict with prior lineages — it adds to them.",
            },
          },
          {
            "@type": "Question",
            name: "Is Reiki a religion?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Reiki is not a religion and is not tied to any particular faith tradition. It works regardless of belief, as electricity does. The practice integrates with whatever spiritual framework, or none, you already hold.",
            },
          },
          {
            "@type": "Question",
            name: "Will I be certified to practise Reiki on others?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Level 1 includes the full attunement and all instruction needed to begin offering Reiki to others, with appropriate ethical framing and clear scope of practice.",
            },
          },
          {
            "@type": "Question",
            name: "How is Quantum Shamanic Reiki different from other Reiki trainings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Two main distinctions. First, you do not learn to channel Reiki — you learn that you have always been Reiki, and the work is to remember it. Second, we ground deeply into the Earth as an active participant in healing, not merely a neutral surface beneath us.",
            },
          },
          {
            "@type": "Question",
            name: "What happens after Level 1?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many students practise Level 1 for months or years before continuing. There is no rush. Levels 2, 3, and 4 become available as you are ready and as you feel called.",
            },
          },
          {
            "@type": "Question",
            name: "What is the investment for Reiki training?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tuition varies by format and cohort. We share current pricing privately when you request enrollment details, along with options for sliding-scale and instalment plans where appropriate.",
            },
          },
        ],
      }}
    />
  );
}

/** Book page — Coming-soon book. */
export function BookJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Book",
        name: "Reiki Evolved",
        alternateName: "Reiki Evolved: A modern path of healing, presence, and living tradition",
        bookFormat: "https://schema.org/Paperback",
        url: `${SITE}/book`,
        image: `${SITE}/images/Reiki.Evolved.BookCover.png`,
        about: ["Reiki", "Energy healing", "Usui Reiki lineage", "Quantum physics and consciousness"],
        publisher: { "@id": `${SITE}/#organization` },
        workExample: {
          "@type": "Book",
          bookFormat: "https://schema.org/Paperback",
        },
      }}
    />
  );
}

/** Breadcrumb trail (used per page). */
export function BreadcrumbJsonLd({ trail }: { trail: { name: string; href: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((step, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: step.name,
          item: `${SITE}${step.href}`,
        })),
      }}
    />
  );
}
