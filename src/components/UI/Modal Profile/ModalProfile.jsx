import React, { useState, useContext, useRef, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

import authContext from "../../../store/auth-context";

import classes from "./ModalProfile.module.css";

const ModalProfile = ({ button, onClick, setIsModalShown }) => {
  const [isTextWritten, setIsTextWritten] = useState(false);
  const [text, setText] = useState("");

  const { userData } = useContext(authContext);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
        <div className={classes.top}>
          <span className={classes.header}>Are you absolutely sure?</span>
          <span>
            <IoMdCloseCircleOutline
              size={20}
              className={classes["close-btn"]}
              onClick={() => setIsModalShown(false)}
            />
          </span>
        </div>
        <div className={classes.secondary}>
          Unexpected bad things will happen if you don’t read this!
        </div>
        <div>
          <p>
            This action cannot be undone. {userData?.fullName}, this will
            permanently delete your account, score, analyses and all data
            associated with your profile.
          </p>
          <p>
            Please type <span className={classes.text}>{text}</span> to confirm.
          </p>
          <div className={classes["input-div"]}>
            <input type="text" onChange={changeInputHandler} ref={inputRef} />
          </div>
        </div>
        <div className={classes["div-delete-btn"]}>
          <button
            className={`button-28`}
            onClick={onClick}
            disabled={!isTextWritten}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProfile;
