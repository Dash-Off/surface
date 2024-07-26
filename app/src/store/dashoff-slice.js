import { createSlice } from "@reduxjs/toolkit";
import { secondsToMinutes } from "../utils/helper";
import moment from "moment";

const initiateState = {
  current: {},
  currentView: {},
  challenges: [],
};

const formatCurrentDashOff = (dashOff) => {
  if (dashOff.type != "Owner") return {};
  let corrections = {};
  if (dashOff.scores && dashOff.scores.corrections) {
    dashOff.scores.corrections.forEach((correction) => {
      if (!corrections[correction["actual"]]) {
        corrections[correction["actual"]] = {
          isSentiment: false,
          isReadDiff: false,
          suggestions: [],
          actual: correction["actual"],
        };
      }
      if (correction["correctionType"] === "SENTI") {
        corrections[correction["actual"]].isSentiment = true;
      }
      if (correction["correctionType"] === "READ") {
        corrections[correction["actual"]].isReadDiff = true;
      }
      if (correction["correctionType"] === "GRAMMAR") {
        corrections[correction["actual"]]["suggestions"].push(
          correction["suggestion"],
        );
      }
    });
  }

  return {
    id: dashOff.dashOff._id,
    type: dashOff.dashOff.type,
    duration:
      dashOff.challenge && dashOff.challenge._id
        ? dashOff.challenge.duration
        : -1,
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
    scores: dashOff.scores,
    corrections: corrections,
  };
};

export const CHALLENGE_ACTION = {
  START_CHALLENGE: {
    name: "START_CHALLENGE",
    text: "Start Challenge",
  },
  CONTINUE_CHALLENGE: {
    name: "CONTINUE_CHALLENGE",
    text: "Continue Challenge",
  },
  VIEW_CHALLENGE: {
    name: "VIEW_CHALLENGE",
    text: "View",
  },
};

const getChallengeAction = (status) => {
  if (!status) {
    return CHALLENGE_ACTION.START_CHALLENGE.name;
  } else if (status == "ACTIVE") {
    return CHALLENGE_ACTION.CONTINUE_CHALLENGE.name;
  } else {
    return CHALLENGE_ACTION.VIEW_CHALLENGE.name;
  }
};

const getInstruction = (action, order, locked) => {
  if (locked) {
    return "Complete active challenge to unlock !";
  }
  if (action === CHALLENGE_ACTION.START_CHALLENGE.name) {
    if (order === 1) {
      return "Start your first challenge";
    } else {
      return "Next Challenge";
    }
  } else {
    return null;
  }
};

const formatChallenges = (challenge) => {
  const action = getChallengeAction(challenge.status);
  return {
    ...challenge,
    id: challenge.challenge_id,
    dashOffId: challenge.dash_off_id,
    locked: !!challenge.locked,
    name: challenge.name,
    description: challenge.headline,
    createdAt: challenge.created_at
      ? moment(challenge.created_at).format("MMMM Do YYYY, h:mm:ss a")
      : "",
    duration: challenge.duration
      ? secondsToMinutes(challenge.duration)
      : undefined,
    action,
    instruction: getInstruction(action, challenge.order, challenge.locked),
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
    loadChallenges: (state, action) => {
      return {
        ...state,
        challenges: action.payload
          .sort((a, b) => b.order - a.order)
          .map((challenge) => formatChallenges(challenge)),
      };
    },
  },
});

export const { loadCurrentDashOff, loadCurrentViewDashOff, loadChallenges } =
  dashOffSlice.actions;

export const getCurrent = () => {
  return (state) => state.dashOff.current;
};
export const getView = () => {
  return (state) => state.dashOff.currentView;
};
export const getChallenges = () => {
  return (state) => state.dashOff.challenges;
};

export default dashOffSlice.reducer;
