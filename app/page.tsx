import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      {/* 他のセクションは後で追加 */}
    </main>
  );
}
