import React, { useState } from "react";
import {
  signInWithPopup,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [userDetails, setUserDetails] = useState(null); // Stores verified user details

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleEmailSignUp = async () => {
    try {
      setError("");
  
      if (!username.trim()) {
        setError("Username is required.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Invalid email format.");
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
  
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await sendEmailVerification(user);
      setVerificationSent(true);
      setError("Verification email sent. Please check your inbox.");
    } catch (error) {
      console.error("Sign-Up Error:", error);
      setError("Sign-up failed. Please try again.!");
    }
  };
  
  const handleEmailLogin = async () => {
    try {
      setError("");
  
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await user.reload();
      if (user.emailVerified) {
        setUserDetails({
          username: user.displayName || "User",
          photoURL: user.photoURL || null,
        });
      } else {
        setError("Please verify your email before accessing Docs or Links.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };
  
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
  
      setUserDetails({
        username: user.displayName || "Google User",
        photoURL: user.photoURL || null,
      });
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      setError("Google sign-in failed. Please try again.");
    }
  };
  

  return (
    <div className="w-full h-[90vh] flex items-start justify-center mt-8">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
        <h1 className="text-2xl font-bold text-center mb-6">
          {isLoginMode ? "Log In" : "Sign Up"}
        </h1>
        {error && <p className="bg-red-500 text-white text-sm p-2 rounded mb-4">{error}</p>}
        {verificationSent && (
          <p className="bg-blue-500 text-white text-sm p-2 rounded mb-4">
            Verification email sent. Please verify your email before logging in.
          </p>
        )}

        {userDetails ? (
          <div>
            <h2 className="text-green-400 text-lg font-bold text-center mb-4">
              Welcome, {userDetails.username}
            </h2>
            {userDetails.photoURL && (
              <img
                src={userDetails.photoURL}
                alt="User"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
            )}
            <p className="text-center">You are now logged in and verified!</p>
          </div>
        ) : (
          <>
            {!isLoginMode && (
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Username *</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-300 mb-2">Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-400"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
            {!isLoginMode && (
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Confirm Password *</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            )}

            <button
              onClick={isLoginMode ? handleEmailLogin : handleEmailSignUp}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              {isLoginMode ? "Log In" : "Sign Up"}
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 mt-4 flex items-center justify-center space-x-2"
            >
              <FontAwesomeIcon icon={faGoogle} />
              <span>{isLoginMode ? "Log In with Google" : "Sign Up with Google"}</span>
            </button>
            <p
              onClick={() => setIsLoginMode((prev) => !prev)}
              className="mt-4 text-sm text-center text-blue-400 cursor-pointer hover:underline"
            >
              {isLoginMode
                ? "Don't have an account? Sign Up"
                : "Already have an account? Log In"}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
