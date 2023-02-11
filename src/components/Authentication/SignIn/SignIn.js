import { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGoogleLogin } from "@react-oauth/google";

import useHttpAxios from "../../../hooks/use-http-axios";

import FormInput from "../FormInput/FormInput";
import InternalLink from "../../UI/Internal Link/InternalLink";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "../SignUp/SignUp.module.css";

import authContext from "../../../store/auth-context";

import { alertActions } from "../../../store/alert-slice";
import GoogleButton from "../Google Button/GoogleButton";

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
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loginHandler } = useContext(authContext);

  const { error, isLoading, sendRequest: signInRequest } = useHttpAxios();
  const { errorGoogle, sendRequest: signInGoogleRequest } = useHttpAxios();
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);

  useEffect(() => {
    if (error) {
      dispatch(alertActions.activateAlert({ isError: true, data: error }));
    }
    if (errorGoogle) {
      dispatch(alertActions.activateAlert({ isError: true, data: errorGoogle }));
    }
  }, [error, errorGoogle, dispatch]);

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
          url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth-elrom/sign-in`,
          body: values,
        },
        (data) => {
          if (data.token) {
            dispatch(alertActions.activateAlert({ isError: false, data }));
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

  const handleGoogleSignInSuccess = async (tokenResponse) => {
    setIsLoadingGoogle(true);
    const accessToken = tokenResponse.access_token;

    await signInGoogleRequest(
      {
        method: "POST",
        url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth-elrom/sign-in`,
        body: { googleAccessToken: accessToken },
      },
      (data) => {
        if (data.token) {
          dispatch(alertActions.activateAlert({ isError: false, data }));
          loginHandler(data.token, { ...data.userData });
          setIsLoadingGoogle(false);
          navigate("/welcome", { replace: true });
        }
      }
    );
    setIsLoadingGoogle(false);
  };

  const signIn = useGoogleLogin({
    onSuccess: handleGoogleSignInSuccess,
  });

  return (
    <Fragment>
      {isLoading || isLoadingGoogle ? (
        <Spinner />
      ) : (
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <h1>Sign In</h1>
          {formInputList}
          <div>
            <button className="button-28" type="submit">
              Sign In
            </button>
          </div>
          <div>
            <GoogleButton text="sign in with Google" onClick={() => signIn()} />
          </div>
          <div className={classes["forgot-password"]}>
            <InternalLink to="/forgot-password">Forgot password?</InternalLink>
          </div>
          <div className={classes["sign-up"]}>
            <p>Don't have an account? &nbsp;</p>
            <InternalLink to="/sign-up">Sign Up</InternalLink>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default SignIn;
