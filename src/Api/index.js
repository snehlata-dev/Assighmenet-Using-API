import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "";
const Api = axios.create({
  baseURL: BASE_URL,
});

Api.interceptors.request.use(function (config) {
  return config;
});

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response && error.response?.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error.response);
  }
);
export default Api;
