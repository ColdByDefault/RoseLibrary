import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Navbar from "./components/main/Navbar";
import SignIn from "./components/Auth/SignIn";
import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import { auth } from "./components/config/firebase";
import LoadingScreen from "./components/main/LoadingScreen";
import Home from "./components/main/Home";
import Docs from "./components/docs/Docs";


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
        return <Home />;
      case "Docs":
        return <Docs />;
      case "Links":
        return <Docs />;
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
            <div className="text-black bg-black/10 backdrop-blur-md
            absolute top-0 z-50 mx-auto my-auto 
            h-full w-full pt-24">
              <div className="bg-yellow-400 backdrop-blur-md w-full text-center h-1/3
              flex items-center justify-center">
                <span>
                  This website uses Firebase for authentication and localStorage to maintain your session.
                  Learn more in our{" "}
                  <button onClick={() => handleSectionChange("PrivacyPolicy")}
                    className="underline text-blue-600">
                    Privacy Policy
                  </button>.
                </span>
                <button onClick={() => setShowCookiesBanner(false)}
                  className="ml-3 bg-black text-white px-3 py-1 rounded">
                  Accept
                </button>
              </div>
            </div>
          )}
          {/* Navbar */}
          <Navbar
            currentPage={activeSection}
            setCurrentPage={handleSectionChange}
            userDetails={userDetails}
            onLogout={handleSectionChange}/>
          {/* Main Content with Animation */}
          <div>
            {/* Add padding-top to account for the navbar height */}
            <div
              className={`pt-32 transform transition-all duration-500 ease-in-out ${
                isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}>
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
