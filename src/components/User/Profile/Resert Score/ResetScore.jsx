import React from "react";

const ResetScore = () => {
  const resetScoreHandler = () => {
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
          onClick={resetScoreHandler}
        >
          Reset Score
        </button>
      </div>
    </div>
  );
};

export default ResetScore;
