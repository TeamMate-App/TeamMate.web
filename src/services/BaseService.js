import axios from "axios";
import { getAccessToken, logout } from "../stores/AccessTokenStore";

export const create = (opts = {}) => {
  const http = axios.create({
    baseURL: `${process.env.REACT_APP_API_HOST}/api`, //pondremos la dirección de heroku
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


  //logout
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
 



