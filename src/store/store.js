import { configureStore } from '@reduxjs/toolkit';

import countriesSlice from './countries-slice';

const store = configureStore({
    reducer: countriesSlice.reducer
});

export default store;
