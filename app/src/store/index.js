import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./user-slice";
import { dashOffSlice } from "./dashoff-slice";
export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
    [dashOffSlice.name]: dashOffSlice.reducer,
  },
});
