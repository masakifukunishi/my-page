import Item from "./Item";
import Socials from "./socials";

const AboutMe = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mt-16">About me</h2>
      <ul className="mt-2">
        <Item item="💡 Software Developer: Client side(React) - Server side(Node, Python) etc..." />
        <Item item="📍 British Columbia, Canada" />
        <Item item="🎥 Fan of Edgar Wright's movies" />
      </ul>
      <Socials />
    </>
  );
};

export default AboutMe;
