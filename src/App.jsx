import React, { useState, useEffect } from "react";
import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import LoadingScreen from "./components/main/LoadingScreen";
import Home from "./components/main/Home";
import Docs from "./components/docs/Docs";
import Navbar from "./components/main/Navbar";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCookiesBanner, setShowCookiesBanner] = useState(true);

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

  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        return <Home />;
      case "Docs":
        return <Docs />;
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
          {/* Cookies Banner */}
          {showCookiesBanner && (
            <div
              className="absolute top-0 z-50 h-full w-full bg-black/10 backdrop-blur-md flex items-center justify-center"
              aria-live="assertive"
            >
              <div className="bg-yellow-400 p-4 rounded-lg text-center max-w-lg">
                <div>
                  This website uses cookies to enhance your experience. Learn more in our {" "}
                  <button
                    onClick={() => handleSectionChange("PrivacyPolicy")}
                    className="underline text-blue-600"
                  >
                    Privacy Policy
                  </button>
                  .
                </div>
                <button
                  onClick={() => setShowCookiesBanner(false)}
                  className="mt-2 bg-black text-white px-4 py-2 rounded"
                >
                  Accept
                </button>
              </div>
            </div>
          )}
          {/* Navbar */}
          <Navbar currentPage={activeSection} setCurrentPage={handleSectionChange} />
          {/* Main Content */}
          <div
            className={`transform transition-all duration-500 ease-in-out ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            {renderSection()}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
