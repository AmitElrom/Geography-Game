import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttpAxios from "../../../../hooks/use-http-axios";

import PersonalInfoItem from "../Personal Info Item/PersonalInfoItem";

import { nameRegex } from "../../../../utils/utils-regex";
import { capitlizeFirstLetter } from "../../../../utils/utils-manipulate-strings";

const UpdatePersonalInfo = ({ userInfo, toUpdateInfo }) => {
  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    let upperCaseName = capitlizeFirstLetter(value);
    if (name === "First Name" || name === "Last Name") {
      formik.setFieldValue(name, upperCaseName);
    } else {
      formik.setFieldValue(name, value);
    }
  };

  const {
    isLoading,
    error,
    sendRequest: updateUserInfoRequest,
  } = useHttpAxios();

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
      //   signUpRequest(
      //     {
      //       method: "PUT",
      //       url: "http://localhost:8000/auth-elrom",
      //       body: values,
      //     },
      //     (data) => {
      //       console.log(data);
      //       loginHandler(data.token, { ...data.userData });
      //       navigate("/welcome", { replace: true });
      //     }
      //   );
      alert("hello");
    },
  });

  const PersonalInfoItems = userInfo.map((info) => {
    return (
      <PersonalInfoItem
        value={formik.values[info.info]}
        key={info.title}
        title={info.title}
        info={info.info}
        toUpdate={toUpdateInfo}
        onChange={changeInputHandler}
      />
    );
  });

  return (
    <Fragment>
      {!toUpdateInfo ? (
        <div>
          <div>{PersonalInfoItems}</div>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div>{PersonalInfoItems}</div>
          <div>
            <button type="submit">Update Profile</button>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default UpdatePersonalInfo;
