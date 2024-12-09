import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Navbar from "./components/main/Navbar";
import Home from "./components/main/Home";
import SignIn from "./components/Auth/SignIn";
import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import { auth } from "./components/config/firebase";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [userDetails, setUserDetails] = useState(null);
  const [showCookiesBanner, setShowCookiesBanner] = useState(true);

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
      case "PrivacyPolicy":
        return <PrivacyPolicy />;
      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  return (
    <>
      {/* Cookies Banner */}
      {showCookiesBanner && (
        <div className="bg-yellow-500 text-black p-3 text-center">
          <span>
            This website uses Firebase for authentication and localStorage to maintain your session. 
            Learn more in our{" "}
            <button
              onClick={() => setCurrentPage("PrivacyPolicy")}
              className="underline text-blue-600">
              Privacy Policy
            </button>.
          </span>
          <button
            onClick={() => setShowCookiesBanner(false)}
            className="ml-3 bg-black text-white px-3 py-1 rounded">
            Accept
          </button>
        </div>
      )}

      {/* Navbar and Content */}
      <div>
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
