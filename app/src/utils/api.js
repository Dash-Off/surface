import axios from "axios";
import { toast } from "react-toastify";

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
