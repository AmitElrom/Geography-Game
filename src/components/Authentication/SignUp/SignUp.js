import { useState } from "react";

import FormInput from "../FormInput/FormInput";

import classes from "./SignUp.module.css";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });

  const formInputs = [
    {
      id: 1,
      name: "firstName",
      placeholder: "First Name",
      label: "First Name",
      type: "text",
    },
    {
      id: 2,
      name: "lastName",
      placeholder: "Last Name",
      label: "Last Name",
      type: "text",
    },
    {
      id: 3,
      name: "email",
      placeholder: "Email",
      label: "Email",
      type: "email",
      error: "Email",
    },
    {
      id: 4,
      name: "password1",
      placeholder: "Password",
      label: "Password",
      type: "password",
      error: "",
    },
    {
      id: 5,
      name: "password2",
      placeholder: "Enter password again",
      label: "Password",
      type: "password",
      error: "",
    },
  ];

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
  };

  const submitSignUpFormHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const formInputList = (
    <div>
      {formInputs.map((input) => {
        return (
          <FormInput key={input.id} {...input} onChange={changeInputHandler} />
        );
      })}
    </div>
  );

  return (
    <form className={classes.form} onSubmit={submitSignUpFormHandler}>
      {formInputList}
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUp;
