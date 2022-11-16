import { Fragment, useEffect, useState } from 'react'
import useHttpAxios from '../../../hooks/use-http-axios';
import { useSelector, useDispatch } from 'react-redux';

import Navigation from '../Navigation/Navigation'

import classes from './Layout.module.css';

import { countriesActions } from '../../../store/countries-slice';

const Layout = ({ children, className }) => {

    const [isScoreSent, setIsScoreSent] = useState(false);
    console.log(isScoreSent);

    const dispatch = useDispatch();

    const { isQuestionnaireOver, startTime, endTime, difficultyLevel, score, questionsToServer } = useSelector(state => state.countries);

    const { errorSendScore, isLoadingSendScore, sendRequest: sendScoreRequest } = useHttpAxios();
    const { errorGetGameSummary, isLoadingGetGameSummary, sendRequest: getGameSummaryRequest } = useHttpAxios();

    useEffect(() => {
        if (isQuestionnaireOver) {
            let token = sessionStorage.getItem('token');
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
                setIsScoreSent(data?.acknowledged);
            })
            dispatch(countriesActions.nullify())
        }
    }, [isQuestionnaireOver, dispatch, sendScoreRequest, difficultyLevel, startTime, endTime, score, questionsToServer, getGameSummaryRequest])

    useEffect(() => {
        if (isScoreSent) {
            let token = sessionStorage.getItem('token');
            getGameSummaryRequest({
                method: "GET",
                url: "http://localhost:8000/score-elrom/game-summary",
                body: {
                    level: difficultyLevel.toLowerCase(),
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }, (gameSummaryData) => {
                console.log('gameSummaryData', gameSummaryData);
            })
        }
    }, [getGameSummaryRequest, isScoreSent, difficultyLevel])


    return (
        <Fragment>
            <Navigation />
            <main className={`${className} ${classes.main}`} >{children}</main>
        </Fragment>
    )
}

export default Layout