import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./user-slice";
export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
  },
});
