import tokenReducer from "../features/token";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export default store;
