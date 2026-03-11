import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Services from "./components/sections/Services";

function App() {
  return (
    <div className="bg-[#050505] text-white selection:bg-blue-500 overflow-x-hidden">
      <Navbar />
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-24">
        <About />
      </section>
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </div>
  );
}

export default App;
