import { configureStore } from "@reduxjs/toolkit";

import countriesSlice from "./countries-slice";
import alertSlice from "./alert-slice";
import menuSlice from "./menu-slice";

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    alert: alertSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export default store;
