import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Career from "./components/Career";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <Skills />
      <Career />
    </main>
  );
}
