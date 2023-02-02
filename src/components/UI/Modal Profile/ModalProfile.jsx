import React, { useState, useContext, useRef } from "react";
import { useEffect } from "react";

import authContext from "../../../store/auth-context";

import classes from "./ModalProfile.module.css";

const ModalProfile = ({ button, onClick, setIsModalShown }) => {
  const [isTextWritten, setIsTextWritten] = useState(false);
  const [text, setText] = useState("");

  const { userData } = useContext(authContext);

  useEffect(() => {
    const { firstName, lastName, email } = userData;
    setText(`${firstName}-${lastName}/${email}`);
  }, [userData]);

  const changeInputHandler = (e) => {
    if (e.target.value === text && text) {
      setIsTextWritten(true);
    } else {
      setIsTextWritten(false);
    }
  };

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className={classes["modal-overlay"]}>
      <div className={classes["modal-content"]} ref={modalRef}>
        <div>
          Are you absolutely sure?{" "}
          <button onClick={() => setIsModalShown(false)}>x</button>
        </div>
        <div>Unexpected bad things will happen if you don’t read this!</div>
        <div>
          <p>
            This action cannot be undone. {userData?.fullName}, this will
            permanently delete your account, score, analyses and all data
            associated with your profile.
          </p>
          <p>
            Please type{" "}
            <span style={{ color: "red", fontWeight: 800 }}>{text}</span> to
            confirm.
          </p>
          <input type="text" onChange={changeInputHandler} />
        </div>
        <button onClick={onClick} disabled={!isTextWritten}>
          {button}
        </button>
      </div>
    </div>
  );
};

export default ModalProfile;
