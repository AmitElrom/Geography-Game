import React, { Fragment, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import useHttpAxios from "../../../../hooks/use-http-axios";

import FormInput from "../../../Authentication/FormInput/FormInput";
import Spinner from "../../../UI/Spinner/Spinner";

import { passwordRegex } from "../../../../utils/utils-regex";
import authContext from "../../../../store/auth-context";

import classes from "./ChangePassword.module.css";

import { alertActions } from "../../../../store/alert-slice";

const changePasswordItems = [
  { name: "newPassword", placeholder: "Enter New Password", info: "" },
  { name: "confirmedPassword", placeholder: "Confirm Password", info: "" },
];

const ChangePassword = ({ setToUpdatePassword }) => {
  const dispatch = useDispatch();

  const { token } = useContext(authContext);

  const {
    isLoading,
    error,
    sendRequest: changePasswordRequest,
  } = useHttpAxios();

  useEffect(() => {
    if (error) {
      dispatch(alertActions.activateAlert({ isError: true, data: error }));
    }
  }, [error, dispatch]);

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .matches(passwordRegex, "Minimum six characters")
        .required("Required"),
      confirmedPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      changePasswordRequest(
        {
          method: "PUT",
          url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth-elrom/change-password`,
          body: values,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        (data) => {
          dispatch(alertActions.activateAlert({ isError: false, data }));
          setToUpdatePassword(false);
        }
      );
    },
  });

  const changePasswordItemList = changePasswordItems.map((item) => {
    return (
      <FormInput
        key={item.name}
        name={item.name}
        placeholder={item.placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.errors[item.name] && formik.touched[item.name]
            ? formik.errors[item.name]
            : null
        }
      />
    );
  });

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <h2>Reset Password</h2>
          <div>{changePasswordItemList}</div>
          <div>
            <button className={`button-28 ${classes.button}`}>Submit</button>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default ChangePassword;
