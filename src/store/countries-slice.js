import { createSlice } from '@reduxjs/toolkit';

const countriesInitialState = {
    countries: []
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState: countriesInitialState,
    reducers: {
        applyCountries(state, { payload }) {
            state.countries = payload
        }
    }
})

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
