import AboutMe from "../components/about-me";
import Projects from "../components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-8">
      <div className="w-full max-w-4xl">
        <AboutMe />
        <Projects />
      </div>
    </main>
  );
}
