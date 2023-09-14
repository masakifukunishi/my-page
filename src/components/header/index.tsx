"use client";
import { useState } from "react";

import HeaderLink from "./HeaderLink";
import MobileNavigationLink from "./MobileNavigationLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 px-8 flex items-center bg-header bg-opacity-95 sticky">
      <h1 className="text-2xl font-semibold">Masaki Fukunishi</h1>
      <div className="ml-auto">
        <div className="hidden md:flex">
          <HeaderLink href="#about" menu="About" />
          <HeaderLink href="#career" menu="Career" />
          <HeaderLink href="#apps" menu="Apps" />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={openMenu}>
            <div className="w-6 h-0.5 my-1 bg-gray-50"></div>
            <div className="w-6 h-0.5 my-1 bg-gray-50"></div>
            <div className="w-6 h-0.5 my-1 bg-gray-50"></div>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 w-56 h-full bg-gray-800 flex items-center flex-col px-8 pt-5 bg-header bg-opacity-95">
          <button onClick={closeMenu} className="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center">
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
