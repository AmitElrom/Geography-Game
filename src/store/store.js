import { configureStore } from "@reduxjs/toolkit";

import countriesSlice from "./countries-slice";
import authenticationSlice from "./authentication-slice";

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    auth: authenticationSlice.reducer,
  },
});

export default store;
