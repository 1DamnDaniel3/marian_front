import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRegistrationProcess: false
};

const authenticateSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        authProcessSwitch: (state) => {
            state.isRegistrationProcess = !state.isRegistrationProcess;
        },
    },
});

export const { authProcessSwitch } = authenticateSlice.actions;
export default authenticateSlice.reducer;