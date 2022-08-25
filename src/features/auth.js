import { createSlice } from "@reduxjs/toolkit";
import { selectAuth } from "../utils/selector";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetching: (draft, action) => {
      if (draft.status === "void") {
        draft.status = "pending";
        return;
      }
      if (draft.status === "rejected") {
        draft.error = null;
        draft.status = "pending";
        return;
      }
      if (draft.status === "login") {
        draft.status = "updating";
        return;
      }
      return;
    },
    resolved: (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.data = action.payload;
        draft.status = "login";
        return;
      }
      return;
    },
    rejected: (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.error = action.payload;
        draft.data = null;
        draft.status = "rejected";
        return;
      }
      return;
    },
    logout: (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.error = null;
        draft.data = null;
        draft.status = "logout";
        return;
      }
      return;
    },
  },
});

export function authLogIn(credentials, hasLocalStorage) {
  // return a thunk
  return async (dispatch, getState) => {
    const status = selectAuth(getState()).status;

    if (status === "pending" || status === "updating") {
      return;
    }

    dispatch(actions.fetching());

    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      };

      const response = await fetch("http://localhost:3001/api/v1/user/login", requestOptions);
      const data = await response.json();

      if (data.status === 400) {
        dispatch(actions.rejected(data.message));
        console.error("Identifiants incorrects");
        return;
      }

      if (hasLocalStorage) {
        localStorage.setItem("token", JSON.stringify(data.body.token));
      }

      dispatch(actions.resolved(data));
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
}

export function authLogOut(dispatch, getState) {
  dispatch(actions.logout());
  localStorage.removeItem("token");
  window.location.href = "/";
}

export default reducer;
