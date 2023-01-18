import React, { Fragment, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import useHttpAxios from "../../../hooks/use-http-axios";

import FormInput from "../FormInput/FormInput";
import Spinner from "../../UI/Spinner/Spinner";

import { passwordRegex } from "../../../utils/utils-regex";
import authContext from "../../../store/auth-context";

import classes from "./ChangePassword.module.css";

import { alertActions } from "../../../store/alert-slice";

import confirmedImg from "../../../imgs/Confirmed-cuate.png";

const INPUTS = [
  {
    id: "i1",
    name: "password",
    placeholder: "Enter password",
    label: "Password",
  },
  {
    id: "i2",
    name: "confirmedPassword",
    placeholder: "Confirm password",
    label: "Confirmed Password",
  },
];

const ChangePassword = () => {
  const { loginHandler, updateUserInfo } = useContext(authContext);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    error,
    isLoading,
    sendRequest: changePasswordRequest,
  } = useHttpAxios();

  useEffect(() => {
    if (error) {
      dispatch(alertActions.activateAlert({ isError: true, data: error }));
    }
  }, [error, dispatch]);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .matches(
          passwordRegex,
          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        )
        .required("Required"),
      confirmedPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      let token = sessionStorage.getItem("token-reset-password");
      changePasswordRequest(
        {
          method: "PUT",
          url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth-elrom/change-password`,
          body: {
            newPassword: values.password,
            confirmedPassword: values.confirmedPassword,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        (data) => {
          updateUserInfo(data.userData);
          loginHandler(token, data.userData);
          dispatch(alertActions.activateAlert({ isError: false, data }));
          sessionStorage.removeItem("token-reset-password");
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("forgot-password-email-sent");
          navigate("/welcome");
        }
      );
    },
  });

  const formInputsList = (
    <div>
      {INPUTS.map((input) => {
        return (
          <FormInput
            key={input.id}
            label={input.label}
            placeholder={input.placeholder}
            name={input.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[input.name] && formik.touched[input.name]
                ? formik.errors[input.name]
                : null
            }
          />
        );
      })}
    </div>
  );

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          {formInputsList}
          <div>
            <button className={`button-28 ${classes.button}`} type="submit">
              Change Password and Sign In
            </button>
          </div>
        </form>
      )}
      <img
        src={confirmedImg}
        alt="Confirmed-cuate"
        className="img-reset-password"
      />
    </Fragment>
  );
};

export default ChangePassword;
