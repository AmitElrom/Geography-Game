import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import GameRules from "./rules/rules/GameRules";
import Levels from "./Levels General/Levels";
import MainLevel from "./Levels General/MainLevel";

import { countriesActions } from "../../store/countries-slice";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countriesActions.nullify());
  }, [dispatch]);

  return (
    <Fragment>
      <Levels />
      <MainLevel />
      <GameRules />
    </Fragment>
  );
};

export default Main;
