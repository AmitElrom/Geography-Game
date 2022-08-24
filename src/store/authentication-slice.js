import { createSlice } from '@reduxjs/toolkit';

const authenticationInitialState = {
    isLoggedIn: false,
    userData: {
        email: '',
        firstName: '',
        lastName: '',
        fullName: ''
    }
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: authenticationInitialState,
    reducers: {
        loginHandler(state, { payload }) {
            state.userData = { ...payload.userData };
            state.isLoggedIn = !!payload.token;
            sessionStorage.setItem('token', payload.token)
            sessionStorage.setItem('user', JSON.stringify(payload.userData))
        },
        logoutHandler(state) {
            state.isLoggedIn = false;
            state.userName = {
                email: '',
                firstName: '',
                lastName: '',
                fullName: ''
            };
            sessionStorage.removeItem('token')
        }
    }
})

export const authenticationActions = authenticationSlice.actions;

export default authenticationSlice;