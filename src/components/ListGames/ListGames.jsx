import React, { useEffect, useState } from "react";
import { getGames } from "../../services/GameService";
import GamesMap from "./GamesMap";
import "./Events.css";
import SimpleMap from "../Maps/MapsListGames"

const ListGames = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getGames().then((even) => {
      setEvents(even);
    });
  }, []);

  return (
    <div className="container">
    <div className="row">
      <div className="col-6"><h1>Lista de Eventos</h1><SimpleMap /></div>
      <div className="col-6">
        <GamesMap events={events} />
      </div>
      <div id="map"></div>
    </div>
    </div>

  );
};

export default ListGames;
