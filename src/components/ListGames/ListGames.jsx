import React, { useEffect, useState } from "react";
import { getGames } from "../../services/GameService";
import GamesMap from "./GamesMap";
import "./Events.css";

import GoogleMapReact from "google-map-react";
import "./../Navbar/Navbar.css";

const Marker = ({ children }) => children;

const ListGames = () => {
  const [games, setGames] = useState([]);
  console.log("Games **********************************", games);
  /* console.log(games[0].location) */

  useEffect(() => {
    getGames(games.body).then((games) => {
      setGames(games);
    });
  }, [games.body]);

  return (
    <>
      <div className="shownavbar"></div>
      <div className="container">
      <h2>Busca tu partido más cercano</h2>
      <hr></hr>
        <div className="row">
          <div className="col-6">
            <div
              className="container mapDetailGame"
              style={{ height: "500px", width: "100%" }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_G_MAPS_KEY }}
                defaultCenter={{
                  lat: 40,
                  lng: -3,
                }}
                defaultZoom={10}
              >
                {games?.map((game) => (
                  <Marker
                    key={game.id}
                    lat={game?.location.coordinates[0]}
                    lng={game?.location.coordinates[1]}
                  >
                    <button className="crime-marker">
                      <img
                        src="https://res.cloudinary.com/teammatereact258/image/upload/v1620506232/ball_baiuaj.png"
                        alt="Ball"
                      />
                    </button>
                  </Marker>
                ))}
              </GoogleMapReact>
            </div>
          </div>
          <div className="col-6">
            <GamesMap games={games} />
          </div>
          <div id="map"></div>
        </div>
      </div>
    </>
  );
};

export default ListGames;
