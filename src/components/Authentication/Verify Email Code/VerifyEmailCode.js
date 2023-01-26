import React, { Fragment, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import useHttpAxios from "../../../hooks/use-http-axios";

import FormInput from "../FormInput/FormInput";
import Spinner from "../../UI/Spinner/Spinner";

import { sixNumbers } from "../../../utils/utils-regex";

import classes from "./VerifyEmailCode.module.css";
import authContext from "../../../store/auth-context";

import { alertActions } from "../../../store/alert-slice";

import newMessageImg from "../../../imgs/New message-pana.png";

const VerifyEmailCode = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { setIsEmailCodeVerified } = useContext(authContext);

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
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .matches(
          sixNumbers,
          "Email code must be exactly and only 6 characters."
        )
        .required("Required"),
    }),
    onSubmit: (values) => {
      let email = sessionStorage.getItem("email");
      resetPasswordRequest(
        {
          method: "POST",
          url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth-elrom/verify-code`,
          body: {
            ...values,
            email,
          },
        },
        (data) => {
          dispatch(alertActions.activateAlert({ isError: false, data }));
          setIsEmailCodeVerified(data.token);
          sessionStorage.setItem("token-reset-password", data.token);
          navigate("/change-password", { replace: true });
        }
      );
    },
  });

  console.log(formik.values.code);

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (formik.values.code.length === 6) {
        formik.submitForm();
        setTimeout(() => {
          if (pathname === "/verify-email-code") {
            formik.setFieldValue("code", "");
          }
        }, 1500);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [formik, formik.values.code, pathname]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <FormInput
            style={{
              width: `calc(${
                "Enter the code you got in your email".length * 8
              }px + 1.2rem)`,
            }}
            label="Email Code"
            placeholder="Enter the code you got in your email"
            name="code"
            value={formik.values.code}
            onChange={changeInputHandler}
            // onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.code && formik.errors.code
                ? formik.errors.code
                : null
            }
          />
          {/* <div>
            <button className={`button-28 ${classes.button}`} type="submit">
              Verify Code
            </button>
          </div> */}
        </form>
      )}
      <LazyLoadImage
        src={newMessageImg}
        placeholderSrc={newMessageImg}
        effect="blur"
        alt="New message-pana"
        className="img-reset-password"
      />
    </Fragment>
  );
};

export default VerifyEmailCode;
