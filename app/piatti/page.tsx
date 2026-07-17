import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";
import DishesContent from "../components/DishesContent";

export const metadata: Metadata = {
  title: "I nostri piatti",
  description:
    "I piatti del Paradiso del Mare a Muggiò (MB): crudi, tartare, gran crudo di mare, gamberi rossi, risotti e secondi di pesce. Scopri le nostre specialità di mare.",
  alternates: {
    canonical: "/piatti",
  },
};

export default function PiattiPage() {
  return (
    <main className="relative">
      <Navbar />
      <DishesContent />
      <Reservation />
      <Footer />
    </main>
  );
}
