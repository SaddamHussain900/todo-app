import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setLoading } from "../../features/slices/loginSlice";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.login);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/todos");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.toLowerCase(), password }),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(login({ email, token: data.token, name: data.name }));
        navigate("/todos");
      } else {
        setErrorMessage(data.message || "Login failed"); // Set error message
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again."); // Set error message
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Display error */}
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
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
