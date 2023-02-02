import React, { Fragment, useState, useEffect } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useHttpAxios from "../../../../hooks/use-http-axios";
import authContext from "../../../../store/auth-context";

import ModalProfile from "../../../UI/Modal Profile/ModalProfile";
import Spinner from "../../../UI/Spinner/Spinner";

import { alertActions } from "../../../../store/alert-slice";

import byeImg from "../../../../imgs/Bye-amico.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

import classes from "./DeleteUser.module.css";

const DeleteUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isModalShown, setIsModalShown] = useState(false);

  const { error, isLoading, sendRequest: deleteUserRequest } = useHttpAxios();

  useEffect(() => {
    if (error) {
      dispatch(alertActions.activateAlert({ isError: true, data: error }));
    }
  }, [error, dispatch]);

  const { logoutHandler } = useContext(authContext);

  const deleteUserHandler = async () => {
    let token = localStorage.getItem("token");
    await deleteUserRequest(
      {
        url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth-elrom/users`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      (data) => {
        dispatch(alertActions.activateAlert({ isError: false, data }));
        logoutHandler();
        navigate("/sign-in");
      }
    );
  };

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {isModalShown && (
            <ModalProfile
              button="I understand the consequences, delete this user's account"
              onClick={deleteUserHandler}
              setIsModalShown={setIsModalShown}
            />
          )}
          <p>
            Once you delete a user's account, there is no going back. Please be
            certain.
          </p>
          <div>
            <button
              className="button-28"
              style={{ width: "auto" }}
              onClick={() => setIsModalShown(true)}
            >
              Delete User
            </button>
          </div>
          <LazyLoadImage
            src={byeImg}
            placeholderSrc={byeImg}
            effect="blur"
            alt="two people waving for goodbye"
            className={classes.img}
          />
        </div>
      )}
    </Fragment>
  );
};

export default DeleteUser;
