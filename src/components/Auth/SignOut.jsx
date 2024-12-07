import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

function SignOut() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error during sign-out:", error.message);
    }
  };

  return (
    <div>
      <h1>Sign Out</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;
