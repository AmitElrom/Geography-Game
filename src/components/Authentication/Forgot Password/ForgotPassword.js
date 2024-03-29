import React, { Fragment, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LazyLoadImage } from "react-lazy-load-image-component";

import useHttpAxios from "../../../hooks/use-http-axios";

import Spinner from "../../UI/Spinner/Spinner";
import FormInput from "../FormInput/FormInput";

import classes from "./ForgotPassword.module.css";
import authContext from "../../../store/auth-context";

import { alertActions } from "../../../store/alert-slice";

import sentMessageImg from "../../../imgs/Sent Message-cuate.png";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { setIsEmailSentForgotPassword } = useContext(authContext);

  const {
    error,
    isLoading,
    sendRequest: resetPasswordRequest,
  } = useHttpAxios();

  useEffect(() => {
    if (error) {
      dispatch(alertActions.activateAlert({ isError: true, data: error }));
    }
  }, [error, dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      resetPasswordRequest(
        {
          method: "POST",
          url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth-elrom/forgot-password`,
          body: values,
        },
        (data) => {
          dispatch(alertActions.activateAlert({ isError: false, data }));
          localStorage.setItem("email", values.email);
          setIsEmailSentForgotPassword(true);
          localStorage.setItem("forgot-password-email-sent", true);
          navigate("/verify-email-code", { replace: true });
        }
      );
    },
  });

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <FormInput
            label="Email"
            placeholder="Enter your email address"
            name="email"
            value={formik.values.email.trim()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
          />
          <div>
            <button className={`button-28 ${classes.button}`} type="submit">
              Reset Password
            </button>
          </div>
        </form>
      )}
      <LazyLoadImage
        src={sentMessageImg}
        placeholderSrc={sentMessageImg}
        effect="blur"
        alt="Sent Message-cuate"
        className="img-reset-password"
      />
    </Fragment>
  );
};

export default ForgotPassword;
