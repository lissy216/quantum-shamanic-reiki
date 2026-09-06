import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    default: "Quantum Shamanic Reiki — Online Reiki Training, Certification & Healing Sessions",
    template: "%s — Quantum Shamanic Reiki",
  },
  description:
    "Quantum Shamanic Reiki: online Reiki training, certification, and distance energy healing sessions worldwide — with in-person retreats and one-to-one sessions also available in the Ottawa Valley, Ontario. A four-level path weaving Usui Reiki lineage, earth-rooted shamanic teaching, and the insights of quantum physics. Open to beginners and to practitioners trained in other traditions.",
  metadataBase: new URL("https://quantumshamanicreiki.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "online Reiki training",
    "Reiki certification online",
    "distance Reiki",
    "Reiki",
    "Reiki training",
    "Reiki certification",
    "energy healing",
    "energy healing certification",
    "Usui Reiki",
    "shamanic Reiki",
    "quantum Reiki",
    "Reiki for beginners",
    "Reiki Level 1 online",
    "Reiki Level 2 online",
    "Reiki master training online",
    "online Reiki session",
    "remote Reiki",
    "alternative healing",
    "complementary therapy",
    "spiritual healing",
    "Reiki Ottawa",
    "Reiki Ontario",
  ],
  openGraph: {
    title: "Quantum Shamanic Reiki — Online Reiki Training & Healing",
    description:
      "Grounded light. Sacred clarity. A four-level Reiki certification path weaving Usui Reiki, earth-rooted shamanic teaching, and quantum physics. Online training and distance sessions worldwide; in-person retreats in the Ottawa Valley.",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
