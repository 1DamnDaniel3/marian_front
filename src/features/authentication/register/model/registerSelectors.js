export const selectRegisterState = (state) => state.register;
export const selectIsRegistered = (state) => selectRegisterState(state).isRegister;