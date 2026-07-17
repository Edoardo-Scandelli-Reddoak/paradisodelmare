import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactMain from "../components/ContactMain";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Il Paradiso del Mare a Muggiò (MB): indirizzo in Via Trieste 23, telefono, email, orari di apertura, mappa e prenotazione online. Vi aspettiamo.",
  alternates: {
    canonical: "/contatti",
  },
};

export default function ContattiPage() {
  return (
    <main className="relative">
      <Navbar />
      <ContactHero />
      <ContactMain />
      <Footer />
    </main>
  );
}
