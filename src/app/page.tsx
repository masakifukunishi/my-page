import AboutMe from "../components/about-me";
import Career from "../components/career";
import Projects from "../components/projects";

const Home = () => {
  return (
    <main className="flex justify-center">
      <div className="container px-5 sm:px-16">
        <AboutMe />
        <Projects />
        <Career />
      </div>
    </main>
  );
};

export default Home;
