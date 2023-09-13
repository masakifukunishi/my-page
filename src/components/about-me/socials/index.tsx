import SorcialLink from "./SorcialLink";
const Socials = () => {
  return (
    <>
      <h3 className="text-xl font-bold mt-3">Socials</h3>
      <ul>
        <SorcialLink href="https://github.com/masakifukunishi" service="GitHub" />
        <SorcialLink href="https://www.linkedin.com/in/masaki-fukunishi/" service="LinkedIn" />
        <SorcialLink href="https://dev.to/masakifukunishi" service="Dev Community (Articles)" />
        <SorcialLink href="https://twitter.com/masakifukunishi" service="X (Japanese)" />
      </ul>
    </>
  );
};

export default Socials;
