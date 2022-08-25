import tokenReducer from "../features/auth";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export default store;
