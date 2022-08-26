import { createSlice } from "@reduxjs/toolkit";
import { getUserInfos, userLogin } from "./userActions";

// If exist, initialize token from local storage
const userToken = localStorage.getItem("token") ? localStorage.getItem("token") : null;

const initialState = {
  status: null,
  loading: false,
  userInfo: null,
  userToken,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.status = null;
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    // User Login
    [userLogin.pending]: (state) => {
      state.status = null;
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.status = payload.status;
      state.loading = false;
      state.userToken = payload.body.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.status = payload.status;
      state.loading = false;
      state.error = payload.message;
    },
    // User Infos
    [getUserInfos.pending]: (state) => {
      state.loading = true;
    },
    [getUserInfos.fulfilled]: (state, { payload }) => {
      state.status = payload.status;
      state.loading = false;
      state.userInfo = payload.body;
    },
    [getUserInfos.rejected]: (state, { payload }) => {
      state.status = payload.status;
      state.loading = false;
      state.error = payload.message;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
