import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Specialties from "./components/Specialties";
import DailyCatch from "./components/DailyCatch";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Story />
      <Specialties />
      <DailyCatch />
      <Gallery />
      <Reservation />
      <Footer />
    </main>
  );
}
