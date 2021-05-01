import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMatch } from "../../services/GameService";
import { deleteMatch } from "../../services/GameService.js";
import JoinEvent from "../JoinEvent/JoinEvent";
import LinkToEditGame from "./LinkToEditGame";
import "../ListGames/Events.css";
import "./../Navbar/Navbar.css";
import "./GameDetail.css";

export default function GameDetail() {
  const [Game, setGame] = useState();
  const { id, user } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    getMatch(id).then((Game) => setGame(Game));
  }, [id]);

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
      <div className="pushnavbar">
        <div className="wrap">
          <div id="main-content">
            <h2>Vista del campo</h2>
            <hr></hr>
            <p>Jugadores</p>
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
          <div id="sidebar-left">
            <h2>Informacion</h2>
            <hr></hr>
            <div className="d-flex container">
              <div className="row">
                <div className="col-xs-12 col-sm-2">
                  <div className="box">
                    <ul>
                      <li>Date</li>
                      <li>Date</li>
                      <li>Date</li>
                      <li>Date</li>
                      <li>Date</li>
                    </ul>
                  </div>
                  <hr></hr>
                  <h4>Organizador</h4>
                  <p></p>
                  <h4>Maps</h4>
                </div>

                <div className="col-xs-12 col-sm-10">
                  <div className="box ml-5">
                    <ul>
                      <li>Date</li>
                      <li>Date</li>
                      <li>Date</li>
                      <li>Date</li>
                      <li>Date</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="sidebar-right">
            <h2>Vista del campo</h2>
            <hr></hr>
            <p>Comentarios</p>
          </div>
        </div>
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
