import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Corrected path



const Logout = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <div>
      <h2>You are logged in</h2>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Logout;
