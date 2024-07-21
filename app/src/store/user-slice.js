import { createSlice } from "@reduxjs/toolkit";

const initiateState = {
  username: "",
  name: "",
  email: "",
  gender: "",
};

export const usersSlice = createSlice({
  name: "user",
  initialState: initiateState,
  reducers: {
    loadUserInfo: (state, action) => action.payload,
  },
});

export const { loadUserInfo } = usersSlice.actions;

export const getUser = () => {
  return (state) => state.user;
};
export const isLoggedIn = () => {
  return (state) => {
    return !!state.user.username;
  };
};

export default usersSlice.reducer;
