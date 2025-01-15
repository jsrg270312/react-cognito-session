import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isLogged: false,
  userInfo: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isLogged = true;
      state.userInfo = payload;
      state.error = null;
    },
    loginFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isLogged = false;
      state.error = payload.message;
      state.userInfo = null;
    },
    logoutSuccess: (state) => {
      state.error = null;
      state.isLoading = false;
      state.isLogged = false;
      state.userInfo = null;
    },
  },
});

export const { startLoading, loginSuccess, loginFailure, logoutSuccess } =
  authSlice.actions;
