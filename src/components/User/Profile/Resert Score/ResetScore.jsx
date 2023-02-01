import React, { useState } from "react";
import useHttpAxios from "../../../../hooks/use-http-axios";

import ModalProfile from "../../../UI/Modal Profile/ModalProfile";

const ResetScore = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const { error, isLoading, sendRequest: resetScoreRequest } = useHttpAxios();

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const resetScoreHandler = () => {
    let token = sessionStorage.getItem("token");
    resetScoreRequest(
      {
        url: `${process.env.REACT_APP_SERVER_BASE_URL}/score-elrom/reset`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      (data) => {
        console.log(data);
      }
    );
  };

  return (
    <div>
      {isModalShown && (
        <ModalProfile button="Reset Score" onClick={resetScoreHandler} />
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
          onClick={openModalHandler}
        >
          Reset Score
        </button>
      </div>
    </div>
  );
};

export default ResetScore;
