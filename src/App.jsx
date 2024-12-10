import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Navbar from "./components/main/Navbar";
import SignIn from "./components/Auth/SignIn";
import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import { auth } from "./components/config/firebase";
import LoadingScreen from "./components/main/LoadingScreen";


function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [userDetails, setUserDetails] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
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

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  const handleSectionChange = (section) => {
    if (activeSection !== section) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveSection(section);
        setIsAnimating(false);
      }, 500); // Match animation duration
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserDetails(null);
      setActiveSection("Home");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        return <div className="w-full h-full">Home Page</div>;
      case "Docs":
        return <div>Documentation Page</div>;
      case "Links":
        return <div>Links Page</div>;
      case "SignIn":
        return <SignIn setUserDetails={setUserDetails} setCurrentPage={handleSectionChange} />        ;
      case "PrivacyPolicy":
        return <PrivacyPolicy />;
      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  return (
    <>
      {/* Show Loading Screen */}
      {!showContent && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Show Main Content After Loading */}
      {showContent && (
        <div className="flex flex-col min-h-screen">
          {/* Cookies Banner */}
          {showCookiesBanner && (
            <div className="bg-yellow-500 text-black p-3 text-center">
              <span>
                This website uses Firebase for authentication and localStorage to maintain your session.
                Learn more in our{" "}
                <button
                  onClick={() => handleSectionChange("PrivacyPolicy")}
                  className="underline text-blue-600"
                >
                  Privacy Policy
                </button>.
              </span>
              <button
                onClick={() => setShowCookiesBanner(false)}
                className="ml-3 bg-black text-white px-3 py-1 rounded"
              >
                Accept
              </button>
            </div>
          )}

          {/* Navbar */}
          <Navbar
            currentPage={activeSection}
            setCurrentPage={handleSectionChange}
            userDetails={userDetails}
            onLogout={handleSectionChange}
          />

          {/* Main Content with Animation */}
          <div className="flex-grow relative z-10">
            <div
              className={`transform transition-all duration-500 ease-in-out ${
                isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            >
              {renderSection()}
            </div>
          </div>

          {/* Footer */}
        </div>
      )}
    </>
  );
}

export default App;
