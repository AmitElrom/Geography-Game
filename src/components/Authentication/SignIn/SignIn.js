import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttpAxios from "../../../hooks/use-http-axios";

import FormInput from "../FormInput/FormInput";

import classes from "../SignUp/SignUp.module.css";

import authContext from "../../../store/auth-context";

const formInputs = [
  {
    id: 1,
    name: "email",
    placeholder: "Email",
  },
  {
    id: 2,
    name: "password",
    placeholder: "Password",
  },
];

const SignIn = () => {
  const navigate = useNavigate();

  const { loginHandler } = useContext(authContext);

  const { error, isLoading, sendRequest: signInRequest } = useHttpAxios();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      signInRequest(
        {
          method: "POST",
          url: "http://localhost:8000/auth-elrom/sign-in",
          body: values,
        },
        (data) => {
          if (data.token) {
            console.log(data);
            loginHandler(data.token, { ...data.userData });
            navigate("/welcome", { replace: true });
          }
        }
      );
    },
  });

  const formInputList = (
    <div>
      {formInputs.map((input) => {
        return (
          <FormInput
            key={input.id}
            {...input}
            value={formik.values[input.name]}
            onChange={formik.handleChange}
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
      <h1>Sign In</h1>
      {formInputList}
      <div>
        <button className="button-28" type="submit">Sign In</button>
      </div>
      <div className={classes["forgot-password"]}>
        <Link to="/forgot-password">Forgot password?</Link>
      </div>
      <div className={classes["sign-up"]}>
        <p>Don't have an account? &nbsp;</p>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </form>
  );
};

export default SignIn;
