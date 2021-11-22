import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { Formik } from "formik";
import * as yup from "yup";
import FormContainer from "../components/FormContainer";

const Login = () => {
  const validationSchema = yup.object({
    email: yup.string().required("Please enter your email address."),
    password: yup.string().required("Please enter your password."),
  });
  return (
    <FormContainer>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <>
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
              <button type="submit" onClick={props.handleSubmit}>
                Login
              </button>
            </>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default Login;
