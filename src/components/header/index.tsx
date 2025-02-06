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

  return (
    <header className="fixed top-0 left-0 w-full h-14 sticky bg-background bg-opacity-90 px-10 md:px-8 text-gray-100">
      <div className="max-w-4xl mx-auto h-full flex items-center">
        <div className="ml-auto">
          <div className="hidden md:flex">
            <HeaderLink href="#about" menu="About" />
            <HeaderLink href="#projects" menu="Projects" />
            <HeaderLink href="#career" menu="Career" />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={openMenu}>
              <Hamburger />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden fixed top-0 right-0 w-52 h-full flex items-end flex-col pt-5 bg-background bg-opacity-95">
            <button onClick={closeMenu} className="px-10 md:px-8">
              <Cross />
            </button>
            <div className="flex flex-col mr-auto pl-7">
              <MobileNavigationLink href="#about" menu="About" handleClick={closeMenu} />
              <MobileNavigationLink href="#projects" menu="Projects" handleClick={closeMenu} />
              <MobileNavigationLink href="#career" menu="Career" handleClick={closeMenu} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
