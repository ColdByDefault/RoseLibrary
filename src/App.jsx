import React, { useState, useContext } from "react";
import Auth from "./components/Auth/Authentication";



function App() {

  return (
    <div>
      <h1 className="text-4xl text-red-400">FireBase</h1>
      <Auth />
    </div>
  );
}

export default App;
