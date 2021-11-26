import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import FormContainer from "../components/FormContainer";
import { Button } from "react-bootstrap";
import { register } from "../actions/userActions";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);
  const validationSchema = yup.object({
    email: yup.string().required("Please provide a valid email address."),
    password: yup
      .string()
      .min(6, "The password must contain at least 6 characters.")
      .required("The password is required."),
    passwordVerify: yup.string().required(),
    name: yup.string().required("Please eneter your name."),
  });
  return (
    <FormContainer>
      <h2>Register</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordVerify: "",
          name: "",
        }}
        onSubmit={(values) =>
          dispatch(
            register(
              values.email,
              values.password,
              values.passwordVerify,
              values.name
            )
          )
        }
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <>
              {loading && <p>{loading}</p>}
              {error && <p>{error}</p>}
              <input
                type="text"
                placeholder="full name"
                value={props.values.name}
                onChange={props.handleChange("name")}
                onBlur={props.handleBlur("name")}
              />
              {props.touched && <p>{props.errors.name}</p>}
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
              <input
                type="password"
                placeholder="passwordVerify"
                value={props.values.passwordVerify}
                onChange={props.handleChange("passwordVerify")}
                onBlur={props.handleBlur("passwordVerify")}
              />
              {props.touched && <p>{props.errors.passwordVerify}</p>}
              <Button type="submit" onClick={props.handleSubmit}>
                Register
              </Button>
            </>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default Register;
