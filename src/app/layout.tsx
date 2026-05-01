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
    default: "Quantum Shamanic Reiki — Grounded light. Sacred clarity.",
    template: "%s — Quantum Shamanic Reiki",
  },
  description:
    "Quantum Shamanic Reiki is a four-level certification path that weaves the lineage of Mikao Usui with earth-rooted shamanic teaching and the insights of quantum physics. Sessions, training, and the Reiki Evolved book.",
  metadataBase: new URL("https://quantumshamanicreiki.com"),
  openGraph: {
    title: "Quantum Shamanic Reiki",
    description:
      "Grounded light. Sacred clarity. A four-level certification path weaving Usui Reiki, shamanic earth wisdom, and quantum physics.",
    url: "https://quantumshamanicreiki.com",
    siteName: "Quantum Shamanic Reiki",
    locale: "en_CA",
    type: "website",
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
