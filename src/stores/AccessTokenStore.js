let accessToken = window.localStorage.getItem("token") || null;

export const getAccessToken = () => accessToken;

export const setAccessToken = (token) => {
  window.localStorage.setItem("token", token);
  accessToken = token;
};

export const logout = () => {
  window.localStorage.removeItem("token");
  window.location.assign("/login");
};

export const removeUser = (user) => {
  console.log( "hola",removeUser)
  window.localStorage.removeItem(user);
  console.log()
// window.location.assign("/");
 };

