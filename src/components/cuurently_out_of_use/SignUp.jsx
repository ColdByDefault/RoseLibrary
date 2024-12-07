import React, { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      alert("User already exists!");
    } else {
      users.push({ username, password: btoa(password) }); // Store password in Base64 format
      localStorage.setItem("users", JSON.stringify(users));
      alert("Sign Up successful!");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
