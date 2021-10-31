import axios from "axios";

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
