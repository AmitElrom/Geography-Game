import { createSlice } from '@reduxjs/toolkit';


const countriesInitialState = {
    questions: [],
    questionsQuantity: 0,
    score: 0
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
        nullifyScore(state) {
            state.score = 0;
        }
    }
})

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
