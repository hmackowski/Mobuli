import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth";

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + "/register", registerObj);

export const loginAPICall = (emailAddress, password) => axios.post(AUTH_REST_API_BASE_URL + "/login", { emailAddress, password });

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (emailAddress) => sessionStorage.setItem("authenticatedUser", emailAddress);

export const isUserLoggedIn = () => {
  const emailAddress = sessionStorage.getItem("authenticatedUser");

  if (emailAddress == null) return false;
  else return true;
};

export const getLoggedInUser = () => {
  const emailAddress = sessionStorage.getItem("authenticatedUser");
  return emailAddress;
}

export const logOut = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload(false);
}