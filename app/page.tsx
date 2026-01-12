import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Offer from "@/components/sections/Offer";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Offer />
      <Gallery />
      <Contact />
    </main>
  );
}
