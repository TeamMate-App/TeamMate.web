import { create } from "./BaseService";

const http = create();

export const getGames = () => {
  return http.get("/games");
};

export const getMatch = (id) => {
  return http.get(`/games/${id}`);
};

export const putEditMatch = (id, body) => {
  return http.put(`/games/edit/${id}`, body);
};

export const getCreateMatch = () => {
  return http.get(`/games/create`);
};

export const deleteMatch = (id) => {
  return http.post(`/games/delete/${id}`);
};

export const join = (GameId) => {
  return http.post(`/games/join/${GameId}`);
};
