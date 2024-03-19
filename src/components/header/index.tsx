"use client";
import { useState } from "react";

import HeaderLink from "./HeaderLink";
import MobileNavigationLink from "./MobileNavigationLink";
import Cross from "./icons/Cross";
import Hamburger from "./icons/Hamburger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 px-6 flex items-center bg-header bg-opacity-95 sticky">
      <h1 className="text-xl cursor-pointer  md:pl-2" onClick={scrollToTop}>
        Masaki Fukunishi
      </h1>
      <div className="ml-auto">
        <div className="hidden md:flex">
          <HeaderLink href="#about" menu="About" />
          <HeaderLink href="#career" menu="Career" />
          <HeaderLink href="#apps" menu="Apps" />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={openMenu}>
            <Hamburger />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 w-52 h-full bg-gray-800 flex items-end flex-col pt-5 bg-header bg-opacity-95">
          <button onClick={closeMenu} className="ml-auto pr-6">
            <Cross />
          </button>
          <div className="flex flex-col mr-auto pl-7">
            <MobileNavigationLink href="#about" menu="About" handleClick={closeMenu} />
            <MobileNavigationLink href="#career" menu="Career" handleClick={closeMenu} />
            <MobileNavigationLink href="#apps" menu="Apps" handleClick={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
