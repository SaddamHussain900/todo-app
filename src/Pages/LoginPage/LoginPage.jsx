import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      dispatch(login({ name: "John Doe", email: "" }));
      navigate("/todos");
    }, 2000);
  }, [dispatch, navigate]);

  return <div>LoginPage</div>;
};

export default LoginPage;
