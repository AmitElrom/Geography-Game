import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import GameRules from "./rules/rules/GameRules";
import Levels from "./Levels General/Levels";
import MainLevel from "./Levels General/MainLevel";

import { countriesActions } from "../../store/countries-slice";
import FunFactsSwitch from "../UI/Fun Facts Switch/FunFactsSwitch";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countriesActions.nullify());
  }, [dispatch]);

  return (
    <Fragment>
      <FunFactsSwitch />
      <Levels />
      <MainLevel />
      <GameRules />
    </Fragment>
  );
};

export default Main;
