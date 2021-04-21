import { create } from "./BaseService";

const http = create()

export const getUserInfo = () => {
  return http.get('/user/me')
}


export const register = (user) =>
  http.post("/user/create", user).then((response) => response.data);