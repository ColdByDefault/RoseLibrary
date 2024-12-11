import React, { useState } from "react";
import Logout from "../Auth/Logout";

function Navbar({ currentPage, setCurrentPage, userDetails, setUserDetails }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 z-10 w-full mt-2 border-b-1 bg-black">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        {/* Logo Section: Update text style or layout here */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            beRich<span className="text-sm absolute lg:-translate-y-1/6">.Library</span>
          </span>
        </div>
        {/* Right-Side Buttons: Style button colors, text, or spacing */}
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
          {!userDetails && (
            <a
              href="#"
              onClick={() => handleNavigation("SignIn")}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 
              font-medium rounded-lg text-sm px-4 py-2 
              md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Sign-In
            </a>
          )}
          {userDetails && (
            <>
              <img
                src={userDetails.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-10 h-10 rounded-full"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/40")
                }
              />
              <span className="text-gray-800 dark:text-white font-medium">
                {userDetails.username}
              </span>
              <Logout
                setUserDetails={setUserDetails}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}

          {/* Mobile Menu Toggle: Change icon or button styles here */}
          <button onClick={() => setMenuOpen((prev) => !prev)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg
            md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-icons"
            aria-expanded={menuOpen}>
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
        </div>
        {/* Main Navigation Links: Adjust hover or active states */}
        <div
          id="mega-menu-icons"
          className={`items-center justify-evenly ${
            menuOpen ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex font-medium w-full space-x-12 items-center justify-center">
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("Home")}
                className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 
                md:hover:text-blue-600 md:p-0 dark:text-blue-500 
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </a>
            </li>
            {/* Docs and Links only visible if user is signed in */}
            {userDetails && (
              <>
                <li>
                  <a
                    href="#"
                    onClick={() => handleNavigation("Docs")}
                    className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 
                    md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 
                    dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleNavigation("Links")}
                    className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 
                    md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                    dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Links
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
