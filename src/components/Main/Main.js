import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttpAxios from '../../hooks/use-http-axios';

import Levels from '../Levels General/Levels';
import MainLevel from '../Levels General/MainLevel';

import { countriesActions } from '../../store/countries-slice';
import GameRules from './rules/rules/GameRules';

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(countriesActions.nullify());
    }, [dispatch])

    return (
        <Fragment>
            <GameRules />
            <Levels />
            <MainLevel />
        </Fragment>
    )
}

export default Main