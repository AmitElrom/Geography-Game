import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHttpAxios from '../../hooks/use-http-axios';

import Levels from '../Levels General/Levels';
import MainLevel from '../Levels General/MainLevel';

import { countriesActions } from '../../store/countries-slice';

const Main = () => {

    const { isQuestionnaireOver, startTime, endTime, difficultyLevel, score, questionsToServer } = useSelector(state => state.countries);

    const dispatch = useDispatch();

    const { error, isLoading, sendRequest: sendScoreRequest } = useHttpAxios();

    useEffect(() => {
        dispatch(countriesActions.nullify());
    }, [dispatch])

    useEffect(() => {
        if (isQuestionnaireOver) {
            let token = sessionStorage.getItem('token');
            console.log(questionsToServer);
            sendScoreRequest({
                method: "PATCH",
                url: "http://localhost:8000/score-elrom",
                body: {
                    level: difficultyLevel.toLowerCase(),
                    startTime,
                    endTime,
                    score,
                    questions: questionsToServer
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }, (data) => {
                console.log('score updating', data);
            })
            dispatch(countriesActions.nullify())
        }
    }, [isQuestionnaireOver, dispatch, sendScoreRequest, difficultyLevel, startTime, endTime, score, questionsToServer])

    return (
        <Fragment>
            <Levels />
            <MainLevel />
        </Fragment>
    )
}

export default Main