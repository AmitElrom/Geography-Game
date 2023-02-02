import React, { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttpAxios from "../../../../hooks/use-http-axios";

import { nameRegex } from "../../../../utils/utils-regex";
import { capitlizeFirstLetter } from "../../../../utils/utils-manipulate-strings";

import authContext from "../../../../store/auth-context";

import FormInput from "../../../Authentication/FormInput/FormInput";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./UpdatePersonalInfo.module.css";

import { alertActions } from "../../../../store/alert-slice";

const UpdatePersonalInfo = ({ userInfo }) => {
  const dispatch = useDispatch();

  const {
    isLoading,
    error,
    sendRequest: updateUserInfoRequest,
  } = useHttpAxios();

  useEffect(() => {
    if (error) {
      dispatch(alertActions.activateAlert({ isError: true, data: error }));
    }
  }, [error, dispatch]);

  const { token, updateUserInfo, userData } = useContext(authContext);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const formik = useFormik({
    initialValues: {
      firstName: userInfo[0].info,
      lastName: userInfo[1].info,
      email: userInfo[2].info,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(nameRegex, "Only English letters")
        .required("Required"),
      lastName: Yup.string()
        .matches(nameRegex, "Only English letters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      if (
        values.firstName === userInfo[0].info &&
        values.lastName === userInfo[1].info &&
        values.email === userInfo[2].info
      ) {
        dispatch(alertActions.activateAlert({ isError: true, data: error }));
      } else {
        updateUserInfo(values);
        updateUserInfoRequest(
          {
            method: "PUT",
            url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth-elrom`,
            body: values,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          (data) => {
            dispatch(alertActions.activateAlert({ isError: false, data }));
          }
        );
      }
    },
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    let upperCaseName = capitlizeFirstLetter(value);
    if (name === "firstName" || name === "lastName") {
      formik.setFieldValue(name, upperCaseName);
    } else {
      formik.setFieldValue(name, value);
    }
  };

  useEffect(() => {
    if (
      formik.values.email === userData?.email &&
      formik.values.firstName === userData?.firstName &&
      formik.values.lastName === userData?.lastName
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [formik.values, userData?.email, userData?.firstName, userData?.lastName]);

  const updateInfoInuptsList = userInfo.map((info) => {
    return (
      <FormInput
        key={info.name}
        title={info.title}
        name={info.name}
        value={formik.values[info.name]}
        onChange={
          info.name === "firstName" || info.name === "lastName"
            ? changeInputHandler
            : formik.handleChange
        }
        onBlur={formik.handleBlur}
        error={
          formik.touched[info.name] && formik.errors[info.name]
            ? formik.errors[info.name]
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
          <div>{updateInfoInuptsList}</div>
          <button
            disabled={isButtonDisabled}
            className={`button-28 ${classes.button} ${isButtonDisabled && classes.disabled
              }`}
            type="submit"
          >
            Update Profile
          </button>
        </form>
      )}
    </Fragment>
  );
};

export default UpdatePersonalInfo;
