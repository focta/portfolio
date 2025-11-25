import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <Skills />
      {/* 他のセクションは後で追加 */}
    </main>
  );
}
