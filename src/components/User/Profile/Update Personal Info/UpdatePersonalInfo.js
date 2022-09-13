import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttpAxios from "../../../../hooks/use-http-axios";

import PersonalInfoItem from "../Personal Info Item/PersonalInfoItem";

import { nameRegex } from "../../../../utils/utils-regex";
import { capitlizeFirstLetter } from "../../../../utils/utils-manipulate-strings";

const UpdatePersonalInfo = ({ userInfo, toUpdateInfo }) => {
  const PersonalInfoItems = userInfo.map((info) => {
    return (
      <PersonalInfoItem
        key={info.title}
        title={info.title}
        info={info.info}
        toUpdate={toUpdateInfo}
      />
    );
  });

  const {
    isLoading,
    error,
    sendRequest: updateUserInfoRequest,
  } = useHttpAxios();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
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
      //   signUpRequest(
      //     {
      //       method: "POST",
      //       url: "http://localhost:8000/auth-elrom/sign-up",
      //       body: values,
      //     },
      //     (data) => {
      //       console.log(data);
      //       loginHandler(data.token, { ...data.userData });
      //       navigate("/welcome", { replace: true });
      //     }
      //   );
    },
  });

  //   const changeInputNameHandler = (e) => {
  //     const { name, value } = e.target;
  //     let upperCaseName = capitlizeFirstLetter(value);
  //     formik.setFieldValue(name, upperCaseName);
  //   };

  return (
    <Fragment>
      {!toUpdateInfo ? (
        <div>
          <div>{PersonalInfoItems}</div>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div>{PersonalInfoItems}</div>
          <button type="submit">Update Profile</button>
        </form>
      )}
    </Fragment>
  );
};

export default UpdatePersonalInfo;
