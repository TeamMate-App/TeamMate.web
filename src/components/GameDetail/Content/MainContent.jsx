import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPlayersSubs } from "../../../services/GameService";
import JoinEvent from "../../JoinEvent/JoinEvent";
import LinktoEditGame from "../LinkToEditGame";
import "./MainContent.css";
/* import image from "./../images/Pista-de-padel-Manza.jpeg" */

const MainContent = ({ Game, user, remove }) => {
  const [players, setPlayers] = useState([]);
  
  const { GameId } = useParams();

  useEffect(() => {
    getPlayersSubs(players).then((playersSubscribed) => {
      setPlayers(playersSubscribed);
    });
  }, [players]);
  console.log("++++++PLAYERS+++++++", players[1]?.user.name );

  return (
    <div>
      <div>
        <h2>Vista del campo</h2>
        <hr className="mb-0"></hr>
      </div>
      <div className="backgroundCourt" alt="pista"></div>
      <div className="container">
        <div className="">
          {user?.id === Game?.user ? (
            <button className="btn btn-danger" onClick={remove}>
              Deleteeee
            </button>
          ) : (
            <JoinEvent GameId={Game} />
          )}
        </div>
        <div>
          <LinktoEditGame user={user} Game={Game} />
        </div>

        <h1>Players</h1>
        <hr></hr>

        <div className="row">
          <div className="col-6">
            <h1>{players[0]?.user.name}</h1>
            <h1>{players[1]?.user.name}</h1>
            <h1>{players[2]?.user.name}</h1>
            <h1>{players[3]?.user.name}</h1>

          </div>
          <div className="col-6">
            <h1>goal</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
