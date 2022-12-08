import React, { Fragment, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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
          url: "http://localhost:8000/auth-elrom/forgot-password",
          body: values,
        },
        (data) => {
          dispatch(alertActions.activateAlert({ isError: false, data }));
          sessionStorage.setItem("email", values.email);
          setIsEmailSentForgotPassword(true);
          sessionStorage.setItem("forgot-password-email-sent", true);
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
            value={formik.values.email}
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
      <img
        src={sentMessageImg}
        alt="Sent Message-cuate"
        className="img-reset-password"
      />
    </Fragment>
  );
};

export default ForgotPassword;
