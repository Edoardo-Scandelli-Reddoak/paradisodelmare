import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, BUSINESS } from "./lib/site";
import JsonLd from "./components/JsonLd";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Il Paradiso del Mare — Ristorante di Pesce a Muggiò",
    template: "%s · Il Paradiso del Mare",
  },
  description:
    "Ristorante di pesce a Muggiò (MB): pescato del giorno, crudi, tartare e cucina di mare contemporanea. Dal mare alla tavola. Prenota il tuo tavolo.",
  applicationName: BUSINESS.name,
  keywords: [
    "ristorante di pesce Muggiò",
    "ristorante pesce Monza Brianza",
    "cucina di mare",
    "pescato del giorno",
    "crudi di mare",
    "tartare di pesce",
    "gambero rosso",
    "Il Paradiso del Mare",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Verifica Google Search Console: incolla qui il codice del meta tag
  // fornito dalla console, oppure rimuovi se usi la verifica via DNS.
  // verification: { google: "IL-TUO-CODICE-DI-VERIFICA" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#043a47",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
