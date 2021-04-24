import React, { useEffect, useState } from "react";
import { getEvents } from "../../services/EventService";
import Events from "./Events";
import "./Events.css";

const ListEvents = () => {
  const [events, setEvents] = useState([]);
  

  useEffect(() => {
    getEvents().then((even) => {
      setEvents(even);
      console.log("even");
    });
  }, []);

console.log(events)

  return (
    <div>
      <h1>Lista de Eventos</h1>
      <Events events={events} />
    </div>
  );
};

export default ListEvents;
