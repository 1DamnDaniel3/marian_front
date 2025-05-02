import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRegister: false
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        registerSuccess: (state) => {
            state.isRegister = true;
        },
    },
});

export const {registerSuccess} = registerSlice.actions;
export default registerSlice.reducer;