import axios from "axios";

/* This function creates an Auth header to store the auth-token from localStorage
 and per the instructions sets the content-type to json to authenticate crud operation calls
 to the server*/

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://messaging-test.bixly.com",

    headers: {
      "Authorization":`Token ${token}`,
      "Content-Type" : "application/json"
    },
  });
};
