import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import useHttpAxios from "../../../../hooks/use-http-axios";

import ChangePasswordItem from "../Change Password Item/ChangePaswordItem";
import FormInput from '../../../Authentication/FormInput/FormInput';

import { passwordRegex } from "../../../../utils/utils-regex";
import authContext from "../../../../store/auth-context";

import classes from './ChangePassword.module.css';

const changePasswordItems = [
  { name: "newPassword", placeholder: "Enter New Password", info: "" },
  { name: "confirmedPassword", placeholder: "Confirm Password", info: "" },
];

const ChangePassword = ({ setToUpdatePassword }) => {
  const { token } = useContext(authContext);

  const {
    isLoading,
    error,
    sendRequest: changePasswordRequest,
  } = useHttpAxios();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .matches(
          passwordRegex,
          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        )
        .required("Required"),
      confirmedPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      changePasswordRequest(
        {
          method: "PUT",
          url: "http://localhost:8000/auth-elrom/change-password",
          body: values,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        (data) => {
          console.log(data);
          alert(data.message);
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
    <form onSubmit={formik.handleSubmit}>
      <h2>Reset Password</h2>
      <div>{changePasswordItemList}</div>
      <div>
        <button className={`button-28 ${classes.button}`} >Submit</button>
      </div>
    </form>
  );
};

export default ChangePassword;
