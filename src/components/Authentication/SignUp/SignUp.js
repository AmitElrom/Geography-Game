import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttpAxios from "../../../hooks/use-http-axios";

import FormInput from "../FormInput/FormInput";

import classes from "./SignUp.module.css";

import { nameRegex, passwordRegex } from "../../../utils/utils-regex";
import { capitlizeFirstLetter } from "../../../utils/utils-manipulate-strings";
import { useContext } from "react";
import authContext from "../../../store/auth-context";

const SignUp = () => {
  const navigate = useNavigate();

  const { loginHandler } = useContext(authContext);

  const { isLoading, error, sendRequest: signUpRequest } = useHttpAxios();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(nameRegex, "Only English letters")
        .required("Required"),
      lastName: Yup.string()
        .matches(nameRegex, "Only English letters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password1: Yup.string()
        .matches(
          passwordRegex,
          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        )
        .required("Required"),
      password2: Yup.string()
        .oneOf([Yup.ref("password1"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      signUpRequest(
        {
          method: "POST",
          url: "http://localhost:8000/auth-elrom/sign-up",
          body: values,
        },
        (data) => {
          console.log(data);
          loginHandler(data.token, { ...data.userData })
          navigate("/welcome", { replace: true });
        }
      );
    },
  });

  const changeInputNameHandler = (e) => {
    const { name, value } = e.target;
    let upperCaseName = capitlizeFirstLetter(value);
    formik.setFieldValue(name, upperCaseName);
  };

  const formInputs = [
    {
      id: 1,
      name: "firstName",
      placeholder: "First Name",
      label: "First Name",
      type: "text",
    },
    {
      id: 2,
      name: "lastName",
      placeholder: "Last Name",
      label: "Last Name",
      type: "text",
    },
    {
      id: 3,
      name: "email",
      placeholder: "Email",
      label: "Email",
      type: "email",
    },
    {
      id: 4,
      name: "password1",
      placeholder: "Password",
      label: "Password",
      type: "password",
    },
    {
      id: 5,
      name: "password2",
      placeholder: "Enter password again",
      label: "Password",
      type: "password",
    },
  ];

  const formInputList = (
    <div>
      {formInputs.map((input) => {
        return (
          <FormInput
            key={input.id}
            {...input}
            value={formik.values[input.name]}
            onChange={
              input.name === "firstName" || input.name === "lastName"
                ? changeInputNameHandler
                : formik.handleChange
            }
            onBlur={formik.handleBlur}
            error={
              formik.touched[input.name] && formik.errors[input.name]
                ? formik.errors[input.name]
                : null
            }
          />
        );
      })}
    </div>
  );

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      {formInputList}
      <div>
        <button type="submit">Sign Up</button>
      </div>
      <div className={classes["sign-in"]}>
        <p>Already have an account? &nbsp;</p>
        <Link to="/sign-in">Sign In</Link>
      </div>
    </form>
  );
};

export default SignUp;
