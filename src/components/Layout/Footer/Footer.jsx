import React, { useEffect, useState } from "react";
import { IoLogoLinkedin } from "react-icons/io";

import classes from "./Footer.module.css";

const Footer = () => {
  const [isSmartphoneOrTablet, setIsSmartphoneOrTablet] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.match(/iPhone|iPad|iPod|Android/i)) {
      setIsSmartphoneOrTablet(true);
    }
  }, []);

  return (
    <footer className={classes.footer}>
      <a
        className={classes.data}
        href="https://www.linkedin.com/in/amit-elrom/"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <span className={classes["linkedin-icon"]}>
            <IoLogoLinkedin />
          </span>
          <span
            className={`${classes["developer-name"]} ${
              isSmartphoneOrTablet
                ? classes["developer-name-mobile"]
                : undefined
            }`}
          >
            Amit Elrom
          </span>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
