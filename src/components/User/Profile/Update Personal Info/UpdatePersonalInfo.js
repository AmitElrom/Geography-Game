import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttpAxios from "../../../../hooks/use-http-axios";

import UpdatePersonalInfoItem from "../Update Personal Info Item/UpdatePersonalInfoItem";

import { nameRegex } from "../../../../utils/utils-regex";
import { capitlizeFirstLetter } from "../../../../utils/utils-manipulate-strings";
import authContext from "../../../../store/auth-context";
import FormInput from "../../../Authentication/FormInput/FormInput";

import classes from './UpdatePersonalInfo.module.css';

const UpdatePersonalInfo = ({ userInfo, setToUpdateInfo }) => {
    const {
        isLoading,
        error,
        sendRequest: updateUserInfoRequest,
    } = useHttpAxios();

    const { token, updateUserInfo } = useContext(authContext);

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
                alert("no change has been done");
            } else {
                updateUserInfo(values);
                updateUserInfoRequest(
                    {
                        method: "PUT",
                        url: "http://localhost:8000/auth-elrom",
                        body: values,
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    },
                    (data) => {
                        console.log(data);
                        alert("user info updated");
                        setToUpdateInfo(false);
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
                error={
                    formik.touched[info.name] && formik.errors[info.name]
                        ? formik.errors[info.name]
                        : null
                }
            />
        );
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>{updateInfoInuptsList}</div>
            <div>
                <button className={`button-28 ${classes.button}`} type="submit">Update Profile</button>
            </div>
        </form>
    );
};

export default UpdatePersonalInfo;
