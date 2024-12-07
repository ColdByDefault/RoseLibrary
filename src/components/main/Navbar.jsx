import React, { useState } from "react";

function Navbar({ setCurrentView }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => setCurrentView("landing")}>
          beRich.library
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="focus:outline-none">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full bg-blue-500 md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li
            className="cursor-pointer p-2 hover:bg-blue-700 md:hover:bg-transparent"
            onClick={() => {
              setCurrentView("landing");
              setIsMenuOpen(false);
            }}
          >
            Landing Page
          </li>
          <li
            className="cursor-pointer p-2 hover:bg-blue-700 md:hover:bg-transparent"
            onClick={() => {
              setCurrentView("signin");
              setIsMenuOpen(false);
            }}
          >
            Sign In
          </li>
          <li
            className="cursor-pointer p-2 hover:bg-blue-700 md:hover:bg-transparent"
            onClick={() => {
              setCurrentView("signup");
              setIsMenuOpen(false);
            }}
          >
            Sign Up
          </li>
          <li
            className="cursor-pointer p-2 hover:bg-blue-700 md:hover:bg-transparent"
            onClick={() => {
              setCurrentView("signout");
              setIsMenuOpen(false);
            }}
          >
            Sign Out
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
