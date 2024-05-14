import axios from "axios";
import { getToken } from "./AuthService";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/movie";

export const getList = () => axios.get(AUTH_REST_API_BASE_URL + "/list");




// Add a request interceptor
axios.interceptors.request.use(function (config) {
 config.headers['Authorization'] = getToken();
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});