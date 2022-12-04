import React from "react";

const LinkNewTab = ({ href, data, className }) => {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" style={{ color: "inherit" }} >
      {data}
    </a>
  );
};

export default LinkNewTab;
