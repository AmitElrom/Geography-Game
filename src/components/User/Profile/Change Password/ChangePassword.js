import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import useHttpAxios from "../../../../hooks/use-http-axios";

import ChangePasswordItem from "../Change Password Item/ChangePaswordItem";

import { passwordRegex } from "../../../../utils/utils-regex";
import authContext from "../../../../store/auth-context";

const changePasswordItems = [
  { name: "newPassword", title: "Enter New Password", info: "" },
  { name: "confirmedPassword", title: "Confirm Password", info: "" },
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
      <ChangePasswordItem
        key={item.name}
        title={item.title}
        name={item.name}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ChangePassword;