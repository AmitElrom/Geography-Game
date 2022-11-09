import { createSlice } from '@reduxjs/toolkit';


const countriesInitialState = {
    questions: [],
    questionsQuantity: 0,
    isQuestionnaireOver: false,
    score: 0,
    isFunFactShown: false,
    questionIndex: 0,
    isStartPlaying: false,
    difficultyLevel: null,
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
        incrementScore(state) {
            state.score++;
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
        }
    }
})

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
