import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Curriculum from "../components/sections/Curriculum";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import BookDemo from "../components/sections/BookDemo";
import Contact from "../components/sections/Contact";
import LearningModes from "../components/sections/LearningModes";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <LearningModes />
         <About />
         <Curriculum />
         <Projects />
         <Testimonials />
         <BookDemo />
        <Contact />
         
      </main>

      <Footer />
    </>
  );
}