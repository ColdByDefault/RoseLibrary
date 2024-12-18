/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Background from "./Background";

function Navbar({ setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 z-10 w-full">
        <div className="relative mx-auto lg:w-2/3 lg:rounded-xl">
          <Background />
          <nav className="lg:w-2/3 mx-auto mt-2 lg:rounded-xl lg:px-4 bg-black lg:bg-transparent">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
              {/* Logo Section */}
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  be<span className="text-blue-500">R</span>ich<span className="text-sm absolute lg:-translate-y-1/6 text-blue-400">.Library</span>
                </span>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:text-blue-400"
                aria-controls="mega-menu-icons"
                aria-expanded={menuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>

              {/* Main Navigation Links */}
              <div
                id="mega-menu-icons"
                className={`items-center justify-evenly ${menuOpen ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`}
              >
                <ul className="flex font-medium w-full space-x-12 items-center justify-center">
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavigation("Home")}
                      className="block py-2 px-3 text-blue-600"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavigation("Docs")}
                      className="block py-2 px-3 text-white"
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleNavigation("Links")}
                      className="block py-2 px-3 text-white"
                    >
                      Links
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
