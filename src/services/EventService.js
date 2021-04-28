import { create } from "./BaseService";

const http = create();

export const getEvents = () => {
  return http.get("/events");
};

export const getMatch = (id) => {
  return http.get(`/events/${id}`);
};

export const putEditMatch = (id, body) => {
  return http.put(`/events/edit/${id}`, body);
};

export const getCreateMatch = () => {
  return http.get(`/events/create`);
};

export const deleteMatch = (id) => {
  return http.post(`/events/delete/${id}`);
};

export const join = (eventId) => {
  return http.post(`/events/join/${eventId}`);
};
