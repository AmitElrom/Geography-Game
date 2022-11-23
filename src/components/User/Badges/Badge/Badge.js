import React from "react";

const Badge = ({ img, name, headline, paragraph, hasBadge }) => {
  return (
    <div style={{ width: "20%", padding: 4, border: "1px solid red" }}>
      <h3>
        {headline}{" "}
        <span style={{ color: "green" }}>{hasBadge && "has badge icon"}</span>
      </h3>
      <img width={160} height={160} src={img} alt={name} />
      <p>{paragraph}</p>
    </div>
  );
};

export default Badge;
