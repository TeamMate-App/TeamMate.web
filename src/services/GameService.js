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

export const postCreateMatch = (body) => {
  return http.post(`/games/create`,body);
};

export const deleteMatch = (id) => {
  return http.post(`/games/delete/${id}`);
};

export const join = (GameId, email) => {
  return http.post(`/games/join/${GameId}`,{email});
};

export const getPlayersSubs = (id, body) => {
  return http.get(`/games/join/${id}/allplayers`, body);
};
