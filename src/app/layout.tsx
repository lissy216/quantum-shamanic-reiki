import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Quantum Shamanic Reiki — Reiki Training & Energy Healing in the Ottawa Valley",
    template: "%s — Quantum Shamanic Reiki",
  },
  description:
    "Quantum Shamanic Reiki: Reiki training, certification, and energy healing sessions in the Ottawa Valley and online. A four-level path weaving Usui Reiki lineage, earth-rooted shamanic teaching, and the insights of quantum physics. Open to beginners and to practitioners trained in other traditions.",
  metadataBase: new URL("https://quantumshamanicreiki.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Reiki",
    "Reiki training",
    "Reiki certification",
    "Reiki Ottawa",
    "Reiki Ontario",
    "energy healing",
    "energy healing certification",
    "Usui Reiki",
    "shamanic Reiki",
    "quantum Reiki",
    "Reiki for beginners",
    "Reiki Level 1",
    "Reiki Level 2",
    "Reiki master training",
    "distance Reiki",
    "Reiki session",
    "alternative healing",
    "complementary therapy",
    "spiritual healing",
    "Reiki near me",
  ],
  openGraph: {
    title: "Quantum Shamanic Reiki — Reiki Training & Energy Healing",
    description:
      "Grounded light. Sacred clarity. A four-level Reiki certification path weaving Usui Reiki, earth-rooted shamanic teaching, and quantum physics. Sessions and training in the Ottawa Valley and online.",
    url: "https://quantumshamanicreiki.com",
    siteName: "Quantum Shamanic Reiki",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Shamanic Reiki",
    description:
      "Grounded light. Sacred clarity. Reiki training and energy healing rooted in lineage, ceremony, and the field.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
