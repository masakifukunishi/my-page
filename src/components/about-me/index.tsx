import Item from "./Item";
import Socials from "./socials";

const AboutMe = () => {
  return (
    <div className="mt-14">
      <div className="text-lg">Hi there, it's Masaki👋 Thanks for visiting my personal page!</div>
      <h2 id="about" className="text-2xl font-bold mt-6">
        About me
      </h2>
      <div className="mt-2">
        <Item item="💡 Software Developer: Client side(React) - Server side(Node, Python)" />
        <ul className="list-inside ml-4">
          <li className="list-disc mb-1">Client-side (React)</li>
          <li className="list-disc mb-1">Server-side (TypeScript, Python)</li>
          <li className="list-disc mb-1">Database (MySQL, MongoDB)</li>
        </ul>
        <Item item="📍 Osaka, Japan" />
        <Item item="🎥 Fan of Edgar Wright's movies" />
      </div>
      <Socials />
    </div>
  );
};

export default AboutMe;
