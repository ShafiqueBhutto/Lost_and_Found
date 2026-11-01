import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await signup(name, email, password);
    if (res.success) {
      navigate("/");
    } else {
      setError(res.message);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#222"; 

    return () => {
      document.body.style.backgroundColor = ""; 
    };
  }, []);

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSignup}>
        
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-msg">{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
