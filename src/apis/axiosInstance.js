import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASEURL;

const axiosApi = (url) => {
  const instance = axios.create({
    baseURL: url,
  });
  return instance;
};

export const axiosInstance = axiosApi(BASE_URL);
