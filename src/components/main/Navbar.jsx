import React from "react";
import Logout from "../Auth/Logout";

function Navbar({ currentPage, setCurrentPage, userDetails, setUserDetails }) {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-6">
        {/* Home is always visible */}
        <button onClick={() => handleNavigation("Home")}>Home</button>

        {/* Docs and Links only visible if user is signed in */}
        {userDetails && (
          <>
            <button onClick={() => handleNavigation("Docs")}>Docs</button>
            <button onClick={() => handleNavigation("Links")}>Links</button>
          </>
        )}

        {/* Sign-In button only visible if user is not signed in */}
        {!userDetails && (
          <button onClick={() => handleNavigation("SignIn")}>Sign-In</button>
        )}
      </div>

      {/* User details and logout button if user is signed in */}
      {userDetails && (
        <div className="flex items-center space-x-4">
          <img
            src={userDetails.photoURL || "https://via.placeholder.com/40"}
            alt="User"
            className="w-10 h-10 rounded-full border border-white"
            onError={(e) => (e.target.src = "https://via.placeholder.com/40")}
          />
          <span>{userDetails.username}</span>
          <Logout setUserDetails={setUserDetails} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
