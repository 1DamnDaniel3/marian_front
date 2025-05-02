import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = {
        id: action.payload.id,
        name: action.payload.name,
        role: action.payload.role,
      };
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    }
  }
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;