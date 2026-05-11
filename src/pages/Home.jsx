import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Curriculum from "../components/sections/Curriculum";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
         <About />
         <Curriculum />
      </main>

      <Footer />
    </>
  );
}