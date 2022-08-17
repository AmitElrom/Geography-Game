import { useRef, useState } from "react";

import {
  isEmail,
  isNotEmpty,
  isValidPassword,
} from "../../../utils/utils-validity";

import { capitlizeFirstLetter } from "../../../utils/utils-manipulate-strings";

const SignUp = () => {
  const emailRef = useRef();
  const password1Ref = useRef();
  const password2Ref = useRef();

  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setName((prevName) => {
      return {
        ...prevName,
        [name]: capitlizeFirstLetter(value),
      };
    });
  };

  const submitSignUpFormHandler = (e) => {
    e.preventDefault();

    let enteredEmail = emailRef.current.value;
    let enteredPassword1 = password1Ref.current.value;
    let enteredPassword2 = password2Ref.current.value;

    let firstNameIsValid = isNotEmpty(name.firstName);
    let lastNameIsValid = isNotEmpty(name.lastName);
    let emailIsValid = isEmail(enteredEmail);
    let password1IsValid = isValidPassword(enteredPassword1);
    let password2IsValid =
      isValidPassword(enteredPassword2) &&
      enteredPassword1 === enteredPassword2;

    console.log(
      name.firstName,
      name.lastName,
      enteredEmail,
      enteredPassword1,
      enteredPassword2
    );

    console.log(
      firstNameIsValid,
      lastNameIsValid,
      emailIsValid,
      password1IsValid,
      password2IsValid
    );
  };

  return (
    <form onSubmit={submitSignUpFormHandler}>
      <div>
        <label htmlFor=""></label>
        <input
          type="text"
          id="first_name"
          name="firstName"
          value={name.firstName}
          onChange={changeInputHandler}
        />
      </div>
      <div>
        <label htmlFor=""></label>
        <input
          type="text"
          id="last_name"
          name="lastName"
          value={name.lastName}
          onChange={changeInputHandler}
        />
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="text" id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="text" id="password1" ref={password1Ref} />
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="text" id="password2" ref={password2Ref} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
