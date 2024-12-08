import React, { useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignIn = ({ setUserDetails, setCurrentPage }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUserDetails({ username: user.displayName, photoURL: user.photoURL });
      setError("");
      setCurrentPage("Home"); // Redirect to Home
    } catch (error) {
      setError("Google sign-in failed. Please try again.");
    }
  };

  const handleEmailSignUp = async () => {
    if (!username.trim()) {
      setError("Username is required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      return;
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
      setError(
        "Password must be at least 8 characters long and include at least one uppercase letter and one number."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUserDetails({
        username,
        photoURL: null,
      });
      setError("");
      setCurrentPage("Home"); // Redirect to Home
    } catch (error) {
      setError("Sign-up failed. Please try again.");
    }
  };

  return (
    <>
      <div className="w-full h-[90vh] flex items-start justify-center mt-8">
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        {error && <p className="bg-red-500 text-white text-sm p-2 rounded mb-4">{error}</p>}
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
        <button
          onClick={handleEmailSignUp}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 mt-4 flex items-center justify-center space-x-2"
        >
          <FontAwesomeIcon icon={faGoogle} />
          <span>Sign In with Google</span>
        </button>
      </div>
      </div>
    </>
  );
};

export default SignIn;
