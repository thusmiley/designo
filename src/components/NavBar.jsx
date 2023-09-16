import React from "react";
import { useState } from "react";
import logoDark from "../assets/shared/desktop/logo-dark.png";
import open from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed top-0 z-10 bg-white w-full py-[35px] md:py-[64px] md:static">
      <div className="">
        <div className="w-container mx-auto flex justify-between md:items-center">
          <a href="/">
            <img src={logoDark} alt="logo" className="object-contain w-[202px] h-[27px] xl:w-[196px] xl:h-[24px]" />
          </a>
          <nav>
            {/* desktop and tablet */}
            <ul className="hidden md:flex space-x-[42px] text-darkGrey text-[14px] leading-[14px] tracking-[2px] menu-light">
              <li>
                <a href="/about">OUR COMPANY</a>
              </li>
              <li>
                <a href="/locations">LOCATIONS</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>

            {/* mobile */}
            <div className="md:hidden">
              {/* overlay */}
              <div className={`${!toggle ? "hidden" : "fixed"} top-[96px] bottom-0 left-0 right-0 bg-black/50`} />

              {/* open/close buttons */}
              <img src={toggle ? close : open} alt="menu" onClick={() => setToggle(!toggle)} className="cursor-pointer" />

              {/* nav  */}
              <div className={`${!toggle ? "hidden" : "flex"} absolute top-[96px] left-0 right-0 bg-black`}>
                <ul className="flex-col text-white py-12 space-y-8 text-[24px] leading-[25px] tracking-[2px] mobile-menu w-container mx-auto">
                  <li>
                    <a href="/about">OUR COMPANY</a>
                  </li>
                  <li>
                    <a href="/locations">LOCATIONS</a>
                  </li>
                  <li>
                    <a href="/contact">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
