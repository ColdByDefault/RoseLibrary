import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Navbar from "./components/main/Navbar";
import Background from "./components/main/Background";
import Home from "./components/main/Home";
import SignIn from "./components/Auth/SignIn";
import { auth } from "./components/config/firebase";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [userDetails, setUserDetails] = useState(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails({
          username: user.displayName || user.email,
          photoURL: user.photoURL,
        });
      } else {
        setUserDetails(null);
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserDetails(null);
      setCurrentPage("Home");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Docs":
        return <div>Documentation Page</div>;
      case "Links":
        return <div>Links Page</div>;
      case "SignIn":
        return <SignIn setUserDetails={setUserDetails} setCurrentPage={setCurrentPage} />;
      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  return (
    <>
      {/* Background Component */}
      <Background />

      {/* Navbar and Content */}
      <div className="relative z-10">
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          userDetails={userDetails}
          onLogout={handleLogout}
        />
        <main className="p-4">{renderPage()}</main>
      </div>
    </>
  );
}

export default App;
