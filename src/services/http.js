import axios from "axios";
import { toast } from "react-toastify";
export const BASE_URL = "https://api.matiestate.com";

const http = axios.create({
  baseURL: `${BASE_URL}/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const onRequest = (config) => {
  const token = '' // get token
  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }

  return config;
};

const onRequestError = (error) => Promise.reject(error);

const onResponse = (response) => response.data;

const onResponseError = async (error) => {
  // This error is from axios itself
  if (error?.message === "canceled") return;

  let errorMessage =
    error?.response?.data?.message ||
    "Something went wrong!, please try again.";

  const isForceLogout =
    error?.response?.status === 401 || error?.response?.status === 403;
  if (isForceLogout) {
    toast.error(errorMessage);
    return '' //force logout
  }

  toast.error(errorMessage);
  return Promise.reject(error);
};

http.interceptors.request.use(onRequest, onRequestError);
http.interceptors.response.use(onResponse, onResponseError);

export default http;
