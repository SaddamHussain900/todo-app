import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.scss";
import { setLoading } from "../../features/slices/loginSlice";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!"); // Set error message
      return;
    }
    try {
      dispatch(setLoading(true));
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }), // Include name in the request
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        setErrorMessage(data.message || "Signup failed"); // Set error message
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("An error occurred. Please try again."); // Set error message
    }
  };
  /*Added Coment*/
  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          {/* Display error */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
