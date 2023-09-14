import AboutMe from "../components/about-me";
import Career from "../components/career";
import Apps from "../components/apps";

const Home = () => {
  return (
    <main className="flex justify-center">
      <div className=" px-5 sm:px-16">
        <AboutMe />
        <Career />
        <Apps />
      </div>
    </main>
  );
};

export default Home;
