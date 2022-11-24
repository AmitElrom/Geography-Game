import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import useHttpAxios from "../../../hooks/use-http-axios";

import FormInput from "../FormInput/FormInput";

import { sixNumbers } from "../../../utils/utils-regex";


const VerifyEmailCode = () => {

    const navigate = useNavigate();

    const {
        error,
        isLoading,
        sendRequest: resetPasswordRequest,
    } = useHttpAxios();

    const formik = useFormik({
        initialValues: {
            code: "",
        },
        validationSchema: Yup.object({
            code: Yup.string().matches(sixNumbers, "Email code must be exactly and only 6 characters.").required("Required"),
        }),
        onSubmit: (values) => {
            let email = sessionStorage.getItem('email');
            resetPasswordRequest(
                {
                    method: "POST",
                    url: "http://localhost:8000/auth-elrom/verify-code",
                    body: {
                        ...values,
                        email
                    },
                },
                (data) => {
                    sessionStorage.setItem('token-reset-password', data.token)
                    alert(data.token);
                    navigate("/change-password", { replace: true });
                }
            );
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormInput
                style={{ width: `calc(${"Enter the code you got in your email".length * 8}px + 1.2rem)` }}
                label="Email Code"
                placeholder="Enter the code you got in your email"
                name="code"
                value={formik.values.code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.code && formik.errors.code
                        ? formik.errors.code
                        : null
                }
            />
            <div>
                <button type="submit">Verify Code</button>
            </div>
        </form>
    );
};

export default VerifyEmailCode;
