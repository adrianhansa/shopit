import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { Formik } from "formik";
import * as yup from "yup";
import FormContainer from "../components/FormContainer";

const Login = ({ history, location }) => {
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);
  const userInfoFromStorage = localStorage.getItem("userInfo");

  useEffect(() => {
    if (userInfoFromStorage) {
      history.push(redirect);
    }
  }, [history, userInfoFromStorage, redirect]);

  const validationSchema = yup.object({
    email: yup.string().required("Please enter your email address."),
    password: yup.string().required("Please enter your password."),
  });

  return (
    <FormContainer>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          dispatch(login(values.email, values.password));
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <>
              <h2>Log In</h2>
              {loading && <p>{loading}</p>}
              {error && <p>{error}</p>}
              <input
                type="email"
                placeholder="email"
                value={props.values.email}
                onChange={props.handleChange("email")}
                onBlur={props.handleBlur("email")}
              />
              {props.touched && <p>{props.errors.email}</p>}
              <input
                type="password"
                placeholder="password"
                value={props.values.password}
                onChange={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
              />
              {props.touched && <p>{props.errors.password}</p>}
              <Button type="submit" onClick={props.handleSubmit}>
                Login
              </Button>
            </>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default Login;
