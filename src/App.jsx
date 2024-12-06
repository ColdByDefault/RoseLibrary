import React, { useState, useContext } from "react";
import Navbar2 from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const { user } = useContext(AuthContext);
  const [activeComponent, setActiveComponent] = useState("Home");

  const renderContent = () => {
    if (user) {
      switch (activeComponent) {
        case "Dashboard":
          return <div>Welcome to the Dashboard!</div>;
        case "Logout":
          return <Logout />;
        default:
          return <div>Welcome back, {user}!</div>;
      }
    } else {
      switch (activeComponent) {
        case "SignUp":
          return <SignUp />;
        case "Login":
          return <Login />;
        default:
          return <div>Welcome to ROSE Library!</div>;
      }
    }
  };

  return (
    <div>
      <Navbar2 setActiveComponent={setActiveComponent} />
      <div className="p-4">{renderContent()}</div>
    </div>
  );
}

export default App;
