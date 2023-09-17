import SorcialLink from "./SorcialLink";
const Socials = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mt-8">Socials</h3>
      <ul className="mt-2">
        <SorcialLink href="https://github.com/masakifukunishi" service="GitHub" />
        <SorcialLink href="https://www.linkedin.com/in/masaki-fukunishi/" service="LinkedIn" />
        <SorcialLink href="https://dev.to/masakifukunishi" service="Dev Community (Articles)" />
        <SorcialLink href="https://twitter.com/masakifukunishi" service="X (Japanese)" />
        <SorcialLink href="mailto:fmsknn@gmail.com " service="Email - fmsknn@gmail.com" />
      </ul>
    </>
  );
};

export default Socials;
