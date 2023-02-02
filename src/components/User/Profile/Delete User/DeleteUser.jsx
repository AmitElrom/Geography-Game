import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttpAxios from "../../../../hooks/use-http-axios";

import ModalProfile from "../../../UI/Modal Profile/ModalProfile";

const DeleteUser = () => {
  const navigate = useNavigate();

  const [isModalShown, setIsModalShown] = useState(false);

  const { error, isLoading, sendRequest: deleteUserRequest } = useHttpAxios();

  const deleteUserHandler = async () => {
    let token = sessionStorage.getItem("token");
    await deleteUserRequest(
      {
        url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth-elrom/users`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      (data) => {
        console.log(data);
      }
    );
    sessionStorage.clear();
    navigate("/sign-in");
  };

  return (
    <div>
      {isModalShown && (
        <ModalProfile
          button="I understand the consequences, delete this user's account"
          onClick={deleteUserHandler}
          setIsModalShown={setIsModalShown}
        />
      )}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        mollitia expedita nostrum quam blanditiis. Maiores quo voluptates,
        maxime alias reiciendis nulla voluptatum et vero! Ab tempore nisi quam
        nobis molestias?
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
    </div>
  );
};

export default DeleteUser;
