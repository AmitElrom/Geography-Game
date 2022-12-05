import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import useHttpAxios from "../../../hooks/use-http-axios";

import FormInput from "../FormInput/FormInput";
import { useNavigate } from "react-router-dom";

import classes from './ForgotPassword.module.css';


const ForgotPassword = () => {
  const navigate = useNavigate();

  const {
    error,
    isLoading,
    sendRequest: resetPasswordRequest,
  } = useHttpAxios();

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
          sessionStorage.setItem('email', values.email)
          alert(data.message);
          navigate("/verify-email-code", { replace: true });
        }
      );
    },
  });

  return (
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
        <button className={`button-28 ${classes.button}`} type="submit">Reset Password</button>
      </div>
    </form>
  );
};

export default ForgotPassword;
