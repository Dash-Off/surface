import axios from "axios";
import { toast } from "react-toastify";
import { loadCurrentDashOff } from "../store/dashoff-slice";
import { writingContentCache } from "./helper";

const HOST_URL = "http://localhost:3000/api/v1";
const api = axios.create({
  baseURL: HOST_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

const getURL = (path) => `${HOST_URL}${path}`;

export const getUserInfo = (params = {}) => {
  return api.get("/auth/userinfo", { params });
};

export const login = (data, cb) => {
  return api
    .post("/auth/login", data)
    .then(({ data }) => {
      console.log(data);
      cb();
    })
    .catch((err) => {
      console.log(err);
      toast(
        (err && err.response && err.response.data.message) ||
          "Error: Login failed",
      );
    });
};

export const registerUser = (params = {}, cb) => {
  return api
    .post(getURL("/auth/register"), params)
    .then(({ data }) => {
      console.log(data);
      toast("Signup successful !");
      if (cb) {
        cb();
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error(
        (err && err.response && err.response.data.error.message) ||
          "Registration error",
      );
    });
};

export const saveDashOff = (content, cb) => {
  return api
    .patch(getURL("/saveDashOff"), content)
    .then(({ data }) => {
      if (cb) cb();
    })
    .catch((err) => {
      //toast.error("Failed to save dashoff");
      console.log("Failed to upload latest content");
    });
};

export const fetchCurrentDashOff = (id) => (dispatch) => {
  return api
    .get(getURL(`/myDashOffs/${id}`))
    .then(({ data }) => {
      dispatch(loadCurrentDashOff(data));
    })
    .catch((err) => {
      // handle if required
    });
};

export const expireDashOff = (id, challengeId) => (dispatch) => {
  return api
    .patch(getURL(`/myDashOffs/${id}`), { status: "EXPIRED", dash_off_id: id })
    .then(({ data }) => {
      api
        .post(getURL("/challenges"), {
          type: "CHALLENGE",
          challenge_id: challengeId,
        })
        .then(({ data }) => {
          dispatch(loadCurrentDashOff({}));
          writingContentCache.remove(id);
          window.location.href = `/space/${data.dashOff._id}`;
        })
        .catch((err) => {
          toast("Failed to restart dashoff try later...");
        });
    })
    .catch((err) => {
      toast("Failed to restart dashoff try later...");
    });
};
