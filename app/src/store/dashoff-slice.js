import { createSlice } from "@reduxjs/toolkit";

const initiateState = {
  current: {},
  currentView: {},
};

const formatCurrentDashOff = (dashOff) => {
  if (dashOff.type != "Owner") return {};

  return {
    id: dashOff.dashOff._id,
    type: dashOff.dashOff.type,
    duration: dashOff.challenge && dashOff.challenge.duration,
    title: dashOff.challenge && dashOff.challenge.name,
    headline: dashOff.challenge && dashOff.challenge.headline,
    description: dashOff.challenge && dashOff.challenge.description,
    createdAt: dashOff.dashOff.createdAt,
    challengeId: dashOff.challenge && dashOff.challenge._id,
    status: dashOff.dashOff.status,
    markup: dashOff.dashOff.markup,
    raw: dashOff.dashOff.raw,
    public: dashOff.dashOff.public,
    isOwner: dashOff.type == "Owner",
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
    loadCurrentViewDashOff: (state, action) => {
      return {
        ...state,
        currentView: action.payload,
      };
    },
  },
});

export const { loadCurrentDashOff, loadCurrentViewDashOff } =
  dashOffSlice.actions;

export const getCurrent = () => {
  return (state) => state.dashOff.current;
};
export const getView = () => {
  return (state) => state.dashOff.currentView;
};

export default dashOffSlice.reducer;
