import React, { useEffect, useState } from "react";
import { getGames } from "../../services/GameService";
import GamesMap from "./GamesMap";
import "./Events.css";
import "./../Navbar/Navbar.css"


const ListGames = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getGames().then((even) => {
      setEvents(even);
    });
  }, []);

  return (
    <>
      <div className="pushnavbar">
       
        <h1>Lista de Eventos</h1>
        <GamesMap events={events} />
      </div>
    </>
  );
};

export default ListGames;
