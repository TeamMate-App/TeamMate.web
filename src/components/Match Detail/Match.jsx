import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMatch } from "../../services/EventService";
import LinktoEdit from "./LinktoEdit";

export default function Event({ user }) {
  const [matchs, setMatch] = useState();
  const { id } = useParams();

  useEffect(() => {
    getMatch(id).then((mat) => setMatch(mat));
  }, [id]);

  if (!matchs) {
    return "Loading...";
  }

  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{ backgroundImage: `url(${matchs.image})` }}
          />
          <ul className="details">
            <li className="author">
              <h1>{matchs.name}</h1>
            </li>
            <li className="date">{matchs.date}</li>
            <li className="tags">
              <li>
                <a href="/">{matchs.id}</a>
              </li>
              <li>
                <LinktoEdit
                  user={user}
                  matchsId={matchs.id}
                  matchsUser={matchs.user}
                />
              </li>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>{matchs.name}</h1>
          <h2>{matchs.address}</h2>
          <p>{matchs.description}</p>
          <p className="read-more">
            <a href="/">Created by {matchs.name}</a>
          </p>
        </div>
      </div>
    </>
  );
}
