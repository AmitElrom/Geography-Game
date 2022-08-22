import { createSlice } from '@reduxjs/toolkit';

const authenticationInitialState = {
    isLoggedIn: false
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: authenticationInitialState,
    reducers: {
        loginHandler(state) {
            state.isLoggedIn = true;
        },
        logoutHandler(state) {
            state.isLoggedIn = false;
        }
    }
})

export const authenticationActions = authenticationSlice.actions;

export default authenticationSlice;