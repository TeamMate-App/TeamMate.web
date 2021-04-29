import React, { useEffect, useState } from "react";
import { getGames } from "../../services/GameService";
import GamesMap from "./GamesMap";
import "./Events.css";

const ListGames = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getGames().then((even) => {
      setEvents(even);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Eventos</h1>
      <GamesMap events={events} />
    </div>
  );
};

export default ListGames;
