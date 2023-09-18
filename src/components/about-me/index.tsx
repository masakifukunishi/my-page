import Item from "./Item";
import Socials from "./socials";

const AboutMe = () => {
  return (
    <div className="mt-14">
      <div className="text-lg">Hi there, it's Masaki👋 Thanks for visiting my personal page!</div>
      <h2 id="about" className="text-3xl font-bold mt-6">
        About me
      </h2>
      <ul className="mt-2">
        <Item item="💡 Software Developer: Client side(React) - Server side(Node, Python) etc..." />
        <Item item="📍 British Columbia, Canada" />
        <Item item="🎥 Fan of Edgar Wright's movies" />
      </ul>
      <Socials />
    </div>
  );
};

export default AboutMe;
