import axios from "axios";
import { getAccessToken, logout } from "../stores/AccessTokenStore";

export const create = (opts = {}) => {
  const http = axios.create({
    baseURL: "http://localhost:3001/api", //pondremos la dirección de heroku
    ...opts,
  });

  http.interceptors.request.use((request) => {
    //send token as authirization
    if (opts.useAccessToken !== false) {
      request.headers.common.Authorization = `Bearer ${getAccessToken()}`;
    } else {
      delete request.headers.common.Authorization;
    }

    return request;
  });

  http.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response && [401, 403].includes(error.response.status)) {
        logout();
      }
      return Promise.reject(error);
    }
  );
  return http
};
