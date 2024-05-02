import Item from "./Item";
import Socials from "./socials";

const AboutMe = () => {
  return (
    <div className="mt-14">
      <h2 id="about" className="text-2xl font-bold mt-4">
        About me
      </h2>
      <div className="mt-2">
        <Item item="💡 Software Developer" />
        <ul className="list-inside ml-4">
          <li className="list-disc mb-1">Client-side (React)</li>
          <li className="list-disc mb-1">Server-side (TypeScript, Python)</li>
        </ul>
        <Item item="📍 Tokyo, Japan" />
        <Item item="🎥 Fan of Edgar Wright's movies" />
      </div>
      <Socials />
    </div>
  );
};

export default AboutMe;
