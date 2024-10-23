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
          <li className="list-disc mb-1">Frontend : React</li>
          <li className="list-disc mb-1">Backend : TypeScript, Python</li>
          <li className="list-disc mb-1">Databases : MySQL, PostgreSQL, MongoDB</li>
          <li className="list-disc mb-1">Infrastructure : AWS, Docker</li>
          <li className="list-disc mb-1">Design : Figma</li>
        </ul>
        <Item item="📍 Tokyo, Japan" />
        <Item item="🎥 Fan of Edgar Wright's movies" />
      </div>
      <Socials />
    </div>
  );
};

export default AboutMe;
