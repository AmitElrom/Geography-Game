import { createSlice } from '@reduxjs/toolkit';

const authenticationInitialState = {
    isLoggedIn: false
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: authenticationInitialState,
    reducers: {

    }
})

export const authenticationActions = authenticationSlice.actions;

export default authenticationSlice;