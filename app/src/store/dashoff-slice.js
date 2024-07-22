import { createSlice } from "@reduxjs/toolkit";

const initiateState = {
  current: {},
};

const formatCurrentDashOff = (dashOff) => {
  if (dashOff.type != "Owner") return {};
  return {
    id: dashOff.dashOff._id,
    type: dashOff.dashOff.type,
    duration: dashOff.challenge.duration,
    title: dashOff.challenge.name,
    headline: dashOff.challenge.headline,
    description: dashOff.challenge.description,
    createdAt: dashOff.dashOff.createdAt,
    challengeId: dashOff.challenge._id,
  };
};

export const dashOffSlice = createSlice({
  name: "dashOff",
  initialState: initiateState,
  reducers: {
    loadCurrentDashOff: (state, action) => {
      return {
        ...state,
        current: formatCurrentDashOff(action.payload),
      };
    },
  },
});

export const { loadCurrentDashOff } = dashOffSlice.actions;

export const getCurrent = () => {
  return (state) => state.dashOff.current;
};

export default dashOffSlice.reducer;
