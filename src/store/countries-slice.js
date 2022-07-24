import { createSlice } from '@reduxjs/toolkit';

import { getMeRandomElements } from '../utils/utils-general';

const countriesInitialState = {
    countries: [],
    questionsQuantity: 0
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState: { ...countriesInitialState },
    reducers: {
        manipulateCountries(state, { payload }) {
            state.countries = [];
            state.questionsQuantity = 0;

            const { countriesFromAPI: countriesFromAPII, questionsQuantity } = payload;
            const countriesFromAPI = { ...countriesFromAPII };

            const { trueArray: chosenTrueCountries, falseArray: chosenFalseCountries } = getMeRandomElements(countriesFromAPI.potentialTrueCountries, questionsQuantity);
            const trueCountries = chosenTrueCountries.map(country => {
                return {
                    ...country,
                    isCountry: true
                }
            })

            const preFalseCountries = countriesFromAPI.potentialFalseCountries.concat(...chosenFalseCountries)
            const falseCountries = preFalseCountries.map(country => {
                return {
                    ...country,
                    isCountry: false
                }
            })

            const transformedCountries = [];
            for (let i = 0; i < trueCountries.length; i++) {
                const {
                    trueArray: questionFalseCountries,
                    trueIndexes: falseCountriesIndexes
                } = getMeRandomElements(falseCountries, 3)
                // optional - splicing - causes false options are always different
                for (let i = 0; i < 3; i++) {
                    falseCountries.splice(falseCountriesIndexes[i], 1)
                }
                transformedCountries.push([trueCountries[i], ...questionFalseCountries])
            }
            state.countries = transformedCountries;
            state.questionsQuantity = questionsQuantity;
        }
    }
})

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
