import Link from "next/link";

import HeaderLink from "./HeaderLink";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 h-14 px-8 flex items-center ">
      <h1 className="text-2xl font-semibold">Masaki Fukunishi</h1>
      <div className="ml-auto">
        <HeaderLink href="#about" menu="About" />
        <HeaderLink href="#career" menu="Career" />
        <HeaderLink href="#apps" menu="Apps" />
      </div>
    </header>
  );
};

export default Header;
