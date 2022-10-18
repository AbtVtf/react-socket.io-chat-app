import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../slice/sessionSlice";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});
