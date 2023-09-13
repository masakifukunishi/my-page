import AboutMe from "../components/about-me";
import Career from "../components/career";

const Home = () => {
  return (
    <main className="flex justify-center">
      <div className="container px-4 sm:px-8">
        <AboutMe />
        <Career />
      </div>
    </main>
  );
};

export default Home;
