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
      }, 500);
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
        return (
          <SignIn
            setUserDetails={setUserDetails}
            setCurrentPage={handleSectionChange}
          />
        );
      case "PrivacyPolicy":
        return <PrivacyPolicy />;
      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  return (
    <>
      {!showContent && <LoadingScreen onComplete={handleLoadingComplete} />}
      {showContent && (
        <div className="relative flex flex-col min-h-screen">
          {/* Random Dots Background */}
          {/* Cookies Banner */}
          {showCookiesBanner && (
            <div className="absolute top-0 z-50 h-full w-full bg-black/10 backdrop-blur-md flex items-center justify-center"
              aria-live="assertive">
              <div className="bg-yellow-400 p-4 rounded-lg text-center max-w-lg">
                <p>
                  <span className="text-red-500">PLEASE REVIEW THE SECURITY ISSUE ON GITHUB BEFORE PROCEEDING</span><br />
                  This website uses Firebase for authentication and
                  localStorage to maintain your session. Learn more in our{" "}
                  <button onClick={() => handleSectionChange("PrivacyPolicy")}
                    className="underline text-blue-600">
                    Privacy Policy
                  </button>.
                </p>
                <button onClick={() => setShowCookiesBanner(false)}
                  className="mt-2 bg-black text-white px-4 py-2 rounded">
                  Accept
                </button>
              </div>
            </div>
          )}
          {/* Navbar */}
          <Navbar currentPage={activeSection}
            setCurrentPage={handleSectionChange}
            userDetails={userDetails}/>
          {/* Main Content */}
          <div className={`transform transition-all duration-500 ease-in-out ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}>
            {renderSection()}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
