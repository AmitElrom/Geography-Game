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
            state.userData = payload.userData ? { ...payload.userData } : { ...state.userData };
            state.isLoggedIn = !!payload.token;
            sessionStorage.setItem('user', JSON.stringify(payload.userData))
            sessionStorage.setItem('token', payload.token)
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