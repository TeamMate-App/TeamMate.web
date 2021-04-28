import { create } from "./BaseService";

const http = create({
  useAccessToken: false,
});

export const login = (body) => {
  return http.post("/login", body);
};

export const loginGoogle = (body)=> {
  return http.get("/authenticate/google/cb", body)
  ;
}