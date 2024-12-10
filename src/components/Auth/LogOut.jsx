import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Logout = ({ setUserDetails, setCurrentPage }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      if (typeof setUserDetails === "function") {
        setUserDetails(null);
      }
      if (typeof setCurrentPage === "function") {
        setCurrentPage("Home");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
