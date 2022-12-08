import { createSlice } from "@reduxjs/toolkit";

const initialStateMenu = {
  isMenuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialStateMenu,
  reducers: {
    toggleMenu(state, { payload }) {
      !payload
        ? (state.isMenuOpen = !state.isMenuOpen)
        : payload.toOpenMenu
        ? (state.isMenuOpen = true)
        : (state.isMenuOpen = false);
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
