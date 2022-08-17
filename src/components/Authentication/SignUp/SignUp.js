import { useRef } from "react";

import {
  isEmail,
  isNotEmpty,
  isValidPassword,
} from "../../../utils/utils-validity";

const SignUp = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const password1Ref = useRef();
  const password2Ref = useRef();

  const submitSignUpFormHandler = (e) => {
    e.preventDefault();

    let enteredfirstName = firstNameRef.current.value;
    let enteredLastName = lastNameRef.current.value;
    let enteredEmail = emailRef.current.value;
    let enteredPassword1 = password1Ref.current.value;
    let enteredPassword2 = password2Ref.current.value;

    let firstNameIsValid = isNotEmpty(enteredfirstName);
    let lastNameIsValid = isNotEmpty(enteredLastName);
    let emailIsValid = isEmail(enteredEmail);
    let password1IsValid = isValidPassword(enteredPassword1);
    let password2IsValid =
      isValidPassword(enteredPassword2) &&
      enteredPassword1 === enteredPassword2;

    console.log(
      enteredfirstName,
      enteredLastName,
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
        <input type="text" id="first_name" ref={firstNameRef} />
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="text" id="last_name" ref={lastNameRef} />
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
