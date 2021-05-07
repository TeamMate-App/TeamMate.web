import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMatch } from "../../services/GameService";
import { deleteMatch } from "../../services/GameService.js";
/* import JoinEvent from "../JoinEvent/JoinEvent";
import LinkToEditGame from "./LinkToEditGame"; */
import CommentBox from "../Comments/Coments";
import GoogleMapReact from "google-map-react";
import image from "./images/ball (1).svg";

import "../ListGames/Events.css";
import "./../Navbar/Navbar.css";
import "./GameDetail.css";
import GameSidebarLeft from "./Content/GameSidebarLeft";
import MainContent from "./Content/MainContent";
import { getUserInfo } from "../../services/UserService";

const Marker = ({ children }) => children;

export default function GameDetail() {
  const [Game, setGame] = useState();
  const [user, setUser] = useState();

  const { id } = useParams();
  const { push } = useHistory();



  console.log("GAMEEEEE ****************************", Game?.location.coordinates[0]);
/*   console.log("COOORDINATES ****************************", Game); */


  useEffect(() => {
    getMatch(id).then((Game) => setGame(Game));
  }, [id]);

  useEffect(() => {
    getUserInfo().then((user) => setUser(user));
  }, []);

  const remove = () => {
    deleteMatch(id).then(() => {
      push("/");
    });
  };
  if (!Game) {
    return "Loading...";
  }

  return (
    <>
      <div className="shownavbar">
        {user?.id && (
          <div className="wrap">
            <div id="main-content">
              <MainContent user={user} Game={Game} remove={remove} />
            </div>
            <div id="sidebar-left">
              <GameSidebarLeft user={user} Game={Game} date={Game.date} />
              <div
                className="container mapDetailGame"
                style={{ height: "300px", width: "100%" }}
              >
                <GoogleMapReact
                  bootstrapURLKeys={{ key: process.env.REACT_APP_G_MAPS_KEY }}
                  defaultCenter={{
                    lat: Game?.location.coordinates[0],
                    lng: Game?.location.coordinates[1],
                  }}
                  defaultZoom={17}
                >
                  {Game?.location.coordinates[0] ? (
                    <Marker
                      lat={Game?.location.coordinates[0]}
                      lng={Game?.location.coordinates[1]}
                      className="p-0"
                    >
                      <button className="crime-marker p-0">
                        <img src={image} alt="ballMark" />
                      </button>
                    </Marker>
                  ) : (
                    <div></div>
                  )}
                </GoogleMapReact>
              </div>
            </div>
            <div id="sidebar-right">
              <h2>Comentarios</h2>
              <hr></hr>
              <CommentBox user={user} Game={Game} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/*
<div className="blog-card">
          <div className="meta">
            <div
              className="photo"
              style={{ backgroundImage: `url(${Game.image})` }}
            />
            <ul className="details">
              <li className="au thor"></li>
              <li className="date"> </li>
              <li className="tags">
                <a href="/">{Game.id}</a>
              </li>
            </ul>
          </div>
          <div className="description">
            <button
              type="button"
              className="close"
              aria-label="Close"
              id="hide-sign-close-icon"
            >
              <span className="close-icon">
                <i className="fa fa-times"></i>
              </span>
            </button>
            <h1>{Game.name}SINGLE GAME</h1>
            <h2>{Game.address}</h2>
            <p>{Game.description}</p>
            <div className="read-more">
              <div>
                {user?.id === Game?.user ? (
                  <button className="btn btn-danger" onClick={remove}>
                    Deleteeee
                  </button>
                ) : (
                  <JoinEvent GameId={Game.id} />
                )}
              </div>
              <div>
                <LinkToEditGame user={user} Game={Game} />
              </div>
            </div>
          </div>
        </div> */
