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
        },
        // manipulateCountries(state, { payload }) {
        //     const manipulatedCountries = [];
        //     for (let i = 0; i < payload.length; i++) {
        //         if (i < payload.length / 4) {
        //             const manipulatedCountryTrue = {
        //                 ...payload[i],
        //                 isCountry: true
        //             }
        //             manipulatedCountries.push(manipulatedCountryTrue)
        //         } else {
        //             const manipulatedCountryFalse = {
        //                 ...payload[i],
        //                 isCountry: false
        //             }
        //             manipulatedCountries.push(manipulatedCountryFalse)
        //         }
        //     }
        //     const newCountriesArr = [];
        //     for (let i = 0; i < manipulatedCountries.length / 4; i++) {
        //         const question = [];
        //         question.push(manipulatedCountries[i])
        //         let wrongIndex = manipulatedCountries.length / 4 + 1;
        //         question.push(manipulatedCountries[wrongIndex],
        //             manipulatedCountries[wrongIndex + 1],
        //             manipulatedCountries[wrongIndex + 2])
        //         wrongIndex += 3;
        //         newCountriesArr.push(question)
        //     }
        //     return newCountriesArr;
        // }
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
        }
    }
})

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
