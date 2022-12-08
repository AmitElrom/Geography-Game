import { configureStore } from "@reduxjs/toolkit";

import countriesSlice from "./countries-slice";
import alertSlice from "./alert-slice";

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    alert: alertSlice.reducer
  },
});

export default store;
