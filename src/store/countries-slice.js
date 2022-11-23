import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const countriesInitialState = {
    questions: [],
    questionsQuantity: 0,
    isQuestionnaireOver: false,
    score: 0,
    isFunFactShown: false,
    questionIndex: 0,
    isStartPlaying: false,
    difficultyLevel: null,
    levelForMatchExplanation: null,
    startTime: 0,
    endTime: 0,
    questionsToServer: []
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState: { ...countriesInitialState },
    reducers: {
        manipulateCountries(state, { payload }) {

            const { questions, questionsQuantity } = payload;

            state.questions = questions;
            state.questionsQuantity = questionsQuantity;
        },
        setMatchExplanation(state, { payload: level }) {
            state.levelForMatchExplanation = level;
        },
        nullify(state) {
            state.score = 0;
            state.questionsQuantity = 0;
            state.isFunFactShown = false;
            state.questions = [];
            state.questionIndex = 0;
            state.isStartPlaying = false;
            state.difficultyLevel = null;
            state.isQuestionnaireOver = false;
            state.questionsToServer = [];
        },
        showFunFact(state) {
            state.isFunFactShown = true;
        },
        hideFunFact(state) {
            state.isFunFactShown = false;
        },
        nextCountryHandler(state) {
            state.questionIndex = state.questionIndex + 1
        },
        startPlaying(state, { payload: difficultyLevel }) {
            state.isStartPlaying = true;
            state.difficultyLevel = difficultyLevel;
            state.startTime = new Date().getTime();
        },
        caseTrueAnswer(state, { payload: trueCountry }) {
            state.score++;
            const questionObj = { isCorrect: true, trueCountry: '' };
            questionObj.trueCountry = trueCountry;
            state.questionsToServer = [...state.questionsToServer, questionObj];
        },
        caseFalseAnswer(state, { payload }) {
            const questionObj = { isCorrect: false, trueCountry: '' };
            questionObj.trueCountry = payload.trueCountry;
            questionObj.falseCountry = payload.falseCountry;
            state.questionsToServer = [...state.questionsToServer, questionObj];
        },
        caseFinalQuestion(state) {
            state.endTime = new Date().getTime();
            state.isQuestionnaireOver = true;
        },
        caseAnswer(state, { payload }) {
            console.log(payload);
            const { isCorrect, trueCountry, falseCountry, isFinalQuestion } = payload;
            const questionObj = { isCorrect, trueCountry };
            if (falseCountry) {
                questionObj.falseCountry = falseCountry;
            }
            state.questionsToServer = [...state.questionsToServer, questionObj];
            if (isFinalQuestion) {
                state.endTime = new Date().getTime();
                state.isQuestionnaireOver = true;
            }
        }
    }
})

export const sendScoreRequest = () => {
    return async (dispatch) => {
        // const reqData = { isLoading: false };
        try {
            let token = sessionStorage.getItem('token');
            // reqData.isLoading = true;
            const { data: sendScoreRequestData } = await axios.patch("http://localhost:8000/score-elrom", {
                level: countriesSlice.getInitialState().difficultyLevel.toLowerCase(),
                startTime: countriesSlice.getInitialState().startTime,
                endTime: countriesSlice.getInitialState().endTime,
                score: countriesSlice.getInitialState().score,
                questions: countriesSlice.getInitialState().questionsToServer
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            })
            // reqData.isLoading = false;
            // reqData.sendScoreRequestData = sendScoreRequestData;
            dispatch(countriesActions.nullify())
            console.log(sendScoreRequestData);
        } catch (error) {
            dispatch(countriesActions.nullify())
            // reqData.error = error;
            // return reqData;
        }
    };
};

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
