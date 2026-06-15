import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactMain from "../components/ContactMain";

export const metadata: Metadata = {
  title: "Contatti · Il Paradiso del Mare",
  description:
    "Contatta Il Paradiso del Mare a Muggiò: indirizzo, telefono, email, orari di apertura e modulo di contatto. Vi aspettiamo.",
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
