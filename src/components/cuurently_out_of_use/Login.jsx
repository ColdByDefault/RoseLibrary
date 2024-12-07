import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Corrected path


const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === btoa(password)
    );

    if (user) {
      logIn(username);
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Log In</h2>
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
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
