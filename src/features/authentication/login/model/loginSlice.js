import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isLogin = true;
        },
        logout: (state) => {
            state.isLogin = false;
        },
    },
});

export const {loginSuccess, logout} = loginSlice.actions;
export default loginSlice.reducer;