import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://18.218.204.131:8080/api/auth";

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

export const getLoggedInUserName = () => {
  let firstName = sessionStorage.getItem("firstName");
  return firstName;
}

export const logOut = () => {
  localStorage.clear();
  sessionStorage.clear();
}

export async function getUserID(emailAddress) {
  return axios.get(AUTH_REST_API_BASE_URL + "/getUserID?emailAddress=" + emailAddress)
    .then(response => {
      return response.data.firstName;
    })
    .catch(error => {
      console.error('Error fetching user ID:', error);
      throw error;
    });
}

export function saveUserInfo(emailAddress, callback){
  axios.get(AUTH_REST_API_BASE_URL + "/getUserID?emailAddress=" + emailAddress)
    .then(response => {
      const userInfo = response.data;
      sessionStorage.setItem("userID", userInfo.id);
      sessionStorage.setItem("firstName", userInfo.firstName);
      if (callback) {
        callback();
      }
    })
    .catch(error => {
      console.error('Error fetching user info:', error);
    });
}

