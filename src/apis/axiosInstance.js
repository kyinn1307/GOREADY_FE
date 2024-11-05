import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASEURL;

const axiosApi = (url) => {
  const instance = axios.create({
    baseURL: url,
    timeout: 10000,
  });
  return instance;
};

export const axiosInstance = axiosApi(BASE_URL);
