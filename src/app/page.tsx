import AboutMe from "../components/about-me";
import Career from "../components/career";
import Projects from "../components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 md:p-8">
      <div className="w-full max-w-3xl">
        <AboutMe />
        <Projects />
        <Career />
      </div>
    </main>
  );
}
