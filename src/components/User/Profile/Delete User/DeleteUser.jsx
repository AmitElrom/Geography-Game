import React from "react";

const DeleteUser = () => {
  const deleteUserHandler = () => {
    console.log("helo");
  };

  return (
    <div>
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
          onClick={deleteUserHandler}
        >
          Delete User
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
