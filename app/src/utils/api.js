import axios from "axios";
import { toast } from "react-toastify";
import {
  loadCurrentDashOff,
  loadCurrentViewDashOff,
  loadChallenges,
  loadMyDashOffs,
} from "../store/dashoff-slice";
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
      if (cb) toast.error("Failed to save dashoff");
      console.log("Failed to upload latest content");
    });
};

export const createChallenge = (challengeId, cb) => {
  return api
    .post(getURL("/challenges"), {
      type: "CHALLENGE",
      challenge_id: challengeId,
    })
    .then(({ data }) => {
      toast(data.message);
      window.location.href = `/space/${data.dashOff._id}`;
    })
    .catch((err) => {
      if (cb) toast.error("Challenge unlock failed... ");
      console.log("Failed to create challenge...");
    });
};

export const fetchCurrentDashOff =
  (id, readOnly = false) =>
  (dispatch) => {
    return api
      .get(getURL(`/myDashOffs/${id}` + (readOnly ? "?view=1" : "")))
      .then(({ data }) => {
        if (readOnly) {
          dispatch(loadCurrentViewDashOff(data));
        } else {
          dispatch(loadCurrentDashOff(data));
        }
      })
      .catch((err) => {
        // handle if required
      });
  };

export const fetchChallenges = () => (dispatch) => {
  return api
    .get(getURL(`/challenges`))
    .then(({ data }) => {
      dispatch(loadChallenges(data));
    })
    .catch((err) => {
      toast.error("Failed to fetch challenges..");
    });
};

export const fetchDashOffs = () => (dispatch) => {
  return api
    .get(getURL(`/myDashOffs`))
    .then(({ data }) => {
      dispatch(loadMyDashOffs(data));
    })
    .catch((err) => {
      toast.error("Failed to fetch dashOffs..");
    });
};

export const startChallenge = () => (dispatch) => {
  return;
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

export const completeDashOff = (id) => (dispatch) => {
  const complete = async () => {
    return api
      .patch(getURL(`/completeDashOff`), { dash_off_id: id })
      .then(({ data }) => {
        dispatch(loadCurrentDashOff({}));
        window.location.href = "/dashboard";
      })
      .catch((e) => {
        toast.error("Action failed, please retry after sometime...");
      });
  };
  return saveDashOff(
    {
      dash_off_id: id,
      ...writingContentCache.get(id),
    },
    complete,
  );
};

export const publishDashOff = (id, publish) => (dispatch) => {
  return api
    .patch(getURL(`/myDashOffs/${id}`), { public: publish, dash_off_id: id })
    .then(({ data }) => {
      dispatch(fetchCurrentDashOff(id));
      toast(`${publish ? "Published" : "Archived"} DashOff !`);
    })
    .catch((err) => {
      toast("Operation failed, please try later...");
    });
};

export const logout = (cb) => {
  return api
    .post("/auth/logout")
    .then(({ data }) => {
      console.log(data);
      cb();
    })
    .catch((err) => {
      console.log(err);
      toast(
        (err && err.response && err.response.data.message) ||
          "Error: Logout failed, Please try again",
      );
    });
};
