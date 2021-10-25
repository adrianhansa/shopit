import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(login("adrian2@yahoo.com", "111111"))}>
        Login
      </button>
    </div>
  );
};

export default Login;
