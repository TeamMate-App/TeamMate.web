import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMatch } from "../../services/GameService";
import { deleteMatch } from "../../services/GameService.js";
import JoinEvent from "../JoinEvent/JoinEvent";
import LinkToEditGame from "./LinkToEditGame";

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
      </div>
    </>
  );
}
