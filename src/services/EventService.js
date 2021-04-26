import { create } from "./BaseService";

const http = create();

export const getEvents = () => {
  return http.get("/events");
};

export const getMatch = (id) => {
  return http.get(`/events/${id}`);
};
