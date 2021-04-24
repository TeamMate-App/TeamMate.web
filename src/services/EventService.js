import { create } from "./BaseService";

const http = create()

export const getEvents = () => {
  return http.get('/events')
}


