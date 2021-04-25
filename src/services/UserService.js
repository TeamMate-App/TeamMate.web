import { create } from "./BaseService";

const http = create()

export const getUserInfo = () => {
  return http.get('/user/me')
}

export const getAllUsers = () => {
  return http.get('user/allusers')
}

export const register = (user) =>
  http.post("/user/register", user).then((response) => response.data);

export const editUser = (user) => {
  return http.put("/user/edit/", user)
}