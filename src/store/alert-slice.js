import { createSlice } from "@reduxjs/toolkit";

const alertInitialState = {
  isAlertActivated: false,
  isError: false,
  data: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState: alertInitialState,
  reducers: {
    activateAlert(state, { payload }) {
      state.isError = payload.isError;
      state.data = payload.data
        ? payload.data
        : payload.isError
        ? "Error"
        : "Success";
      state.isAlertActivated = true;
    },
    deactivateAlert(state) {
      state.isAlertActivated = false;
    },
  },
});

export const alertActions = alertSlice.actions;

export default alertSlice;
