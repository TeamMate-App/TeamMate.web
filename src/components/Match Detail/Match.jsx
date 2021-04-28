import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMatch } from "../../services/EventService";
import { deleteMatch } from "../../services/EventService.js";
import JoinEvent from "../JoinEvent/JoinEvent";
import LinktoEdit from "./LinktoEdit";

export default function Event() {
  const [match, setMatch] = useState();
  const { id, user } = useParams();
  const { push } = useHistory();
  console.log("id", id);

  useEffect(() => {
    getMatch(id).then((match) => setMatch(match));
  }, [id]);

  const remove = () => {
    deleteMatch(id).then(() => {
      push("/");
    });
  };
  if (!match) {
    return "Loading...";
  }

  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{ backgroundImage: `url(${match.image})` }}
          />
          <ul className="details">
            <li className="au thor">
              {/* <LinktoEdit user={user} match={match} /> */}
            </li>
            <li className="date">{match.date}</li>
            <li className="tags">
              <a href="/">{match.id}</a>

              {/*  <LinktoEdit user={user} match={match} /> */}
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
          <h1>{match.name}</h1>
          <h2>{match.address}</h2>
          <p>{match.description}</p>
          <div className="read-more">
            {user?.id === match?.user ? (
              <button className="btn btn-danger" onClick={remove}>
                Deleteeee
              </button>
            ) : (
              <JoinEvent matchId={match?.id} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
