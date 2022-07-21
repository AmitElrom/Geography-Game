import { configureStore } from '@reduxjs/toolkit';

import countriesSlice from './countries-slice';

const store = configureStore({
    reducer: { countries: countriesSlice.reducer }
});

export default store;
