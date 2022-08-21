import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import useHttpAxios from "../../../hooks/use-http-axios";

import FormInput from "../FormInput/FormInput";

import classes from "../SignUp/SignUp.module.css";

const SignIn = () => {
  const navigate = useNavigate();

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
    onSubmit: async (values) => {
      signInRequest(
        {
          method: "POST",
          url: "http://localhost:8000/auth-elrom/sign-in",
          body: values,
        },
        (data) => {
          if (data.token) {
            sessionStorage.setItem("token", data.token);
            navigate("/welcome", { replace: true });
          }
          console.log(error);
        }
      );
    },
  });

  const formInputs = [
    {
      id: 1,
      name: "email",
      placeholder: "Email",
      label: "Email",
      type: "text",
    },
    {
      id: 2,
      name: "password",
      placeholder: "Password",
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
      {formInputList}
      <div>
        <button type="submit">Sign In</button>
      </div>
      <div className={classes["sign-up"]}>
        <p>Don't have an account? &nbsp;</p>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </form>
  );
};

export default SignIn;
