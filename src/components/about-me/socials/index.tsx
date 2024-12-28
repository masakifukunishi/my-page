import SorcialLink from "./SorcialLink";
const Socials = () => {
  return (
    <>
      <h3 className="text-xl font-bold mt-8">Socials</h3>
      <ul className="mt-2">
        <SorcialLink href="https://github.com/masakifukunishi" service="GitHub" />
        <SorcialLink href="https://www.linkedin.com/in/masaki-fukunishi/" service="LinkedIn" />
        <SorcialLink href="https://dev.to/masakifukunishi" service="Dev Community (Articles)" />
        <SorcialLink href="mailto:fmsknn@gmail.com " service="Email - fmsknn@gmail.com" />
        <h3 className="text-lg font-semibold mt-2">Japanese</h3>
        <SorcialLink href="https://twitter.com/masakifukunishi" service="X" />
        <SorcialLink href="https://zenn.dev/masakifukunishi" service="Zenn" />
      </ul>
    </>
  );
};

export default Socials;
