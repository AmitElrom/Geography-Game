import { createSlice } from '@reduxjs/toolkit';

import { getMeRandomElements } from '../utils/utils-general';

const countriesInitialState = {
    questions: [],
    questionsQuantity: 0
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState: { ...countriesInitialState },
    reducers: {
        manipulateCountries(state, { payload }) {

            const { questions, questionsQuantity } = payload;

            state.questions = questions;
            state.questionsQuantity = questionsQuantity;
        }
    }
})

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
