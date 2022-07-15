import { createSlice } from '@reduxjs/toolkit';

const countriesInitialState = {
    countries: [],
    questionsQuantity: 0
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState: countriesInitialState,
    reducers: {
        maipulateCountries(state, { payload: countriesArr }) {
            // payload is countries array, with number of items - 4 times the number of questions
            // if there are 10 questions - there are 40 items (countries) in the payload/countriesArr

            // add to each item/country a field that represents - if the country is the right answer
            // 1/4 of countries gets a true value, the rest false value
            const countriesWithIsCountry = countriesArr.map((country, index) => {
                if (index < countriesArr.length / 4) {
                    return { ...country, isCountry: true }
                } else {
                    return { ...country, isCountry: false }
                }
            })

            const transformedCountries = [];
            let wrongIndex = countriesWithIsCountry.length / 4;
            for (let i = 0; i < countriesWithIsCountry.length / 4; i++) {
                const question = [];

                const trueCountry = countriesWithIsCountry[i];
                const falseCountries = [countriesWithIsCountry[wrongIndex],
                countriesWithIsCountry[wrongIndex + 1],
                countriesWithIsCountry[wrongIndex + 2]];
                question.push(trueCountry, ...falseCountries)

                transformedCountries.push(question)
                wrongIndex += 3;
            }
            state.countries = transformedCountries;
            state.questionsQuantity = transformedCountries.length;
        }
    }
})

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
