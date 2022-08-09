import { createSlice } from '@reduxjs/toolkit';


const countriesInitialState = {
    questions: [],
    questionsQuantity: 0,
    score: 0,
    isFunFactShown: false,
    questionIndex: 0,
    isStartPlaying: false,
    difficultyLevel: null
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
        }
    }
})

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
