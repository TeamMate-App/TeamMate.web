import React, { useEffect, useState } from "react";
import { getGames } from "../../services/GameService";
import GamesMap from "./GamesMap";
import "./Events.css";
import image from "../GameDetail/images/ball (1).svg";
import GoogleMapReact from "google-map-react";
import "./../Navbar/Navbar.css";

const Marker = ({ children }) => children;

const ListGames = () => {
  const [games, setGames] = useState([]);
  console.log("Games **********************************", games);

  useEffect(() => {
    getGames(games.body).then((games) => {
      setGames(games);
    });
  }, [games.body]);

  return (
    <>
      <div className="shownavbar"></div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Lista de Eventos</h1>
            <div
              className="container mapDetailGame"
              style={{ height: "300px", width: "100%" }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_G_MAPS_KEY }}
                defaultCenter={{
                  lat: 40,
                  lng: -3,
                }}
                defaultZoom={17}
              >
                {games.map((match) => (
                  <Marker
                    key={match.id}
                    lat={match.location.latitude}
                    lng={match.location.longitude}
                  >
                    <button className="crime-marker">
                      <img src={image} alt="Ball" />
                    </button>
                  </Marker>
                ))}
                {/* {Game?.location.latitude[0] ? (
                    <Marker
                      lat={Game?.location.latitude[0]}
                      lng={Game?.location.longitude[0]}
                      className="p-0"
                    >
                      <button className="crime-marker p-0">
                        <img src={image} alt="ballMark" />
                      </button>
                    </Marker>
                  ) : (
                    <div></div>
                  )} */}
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
