import React, { useState } from "react";
import Navbar from "./components/main/Navbar";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import SignOut from "./components/Auth/SignOut";
import LandingPage from "./components/main/LandingPage";

function App() {
  const [currentView, setCurrentView] = useState("landing"); // Default to "landing" view

  const renderComponent = () => {
    switch (currentView) {
      case "signin":
        return <SignIn />;
      case "signup":
        return <SignUp />;
      case "signout":
        return <SignOut />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div>
      <Navbar setCurrentView={setCurrentView} />
      {renderComponent()}
    </div>
  );
}

export default App;
