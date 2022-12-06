import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";

import { countriesActions } from "../../../store/countries-slice";

import classes from "./FunFactsSwitch.module.css";

const FunFactsSwitch = () => {
  const dispatch = useDispatch();

  const { isFunFactsShown } = useSelector((state) => state.countries);

  const toggleFunFactModals = () => {
    dispatch(countriesActions.setIsFunFacts(!isFunFactsShown));
  };

  return (
    <button
      className={`button-28 ${classes.button}`}
      onClick={toggleFunFactModals}
      title={
        isFunFactsShown
          ? "More knowledge, but more time"
          : "Less time, but less knowledge"
      }
    >
      {isFunFactsShown ? (
        <span>
          With Fun Facts{" "}
          <BiCheckCircle
            size={20}
            style={{ verticalAlign: "middle", color: "green" }}
          />
        </span>
      ) : (
        <span>
          Without Fun Facts{" "}
          <BiXCircle
            size={20}
            style={{ verticalAlign: "middle", color: "red" }}
          />
        </span>
      )}
    </button>
  );
};

export default FunFactsSwitch;
