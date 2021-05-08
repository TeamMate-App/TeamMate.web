import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  getPlayersSubs,
  join,
  unsubscribe,
} from "../../../services/GameService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserInfo } from "../../../services/UserService";
import "./MainContent.css";

const MainContent = ({ Game, user, remove }) => {
  const [players, setPlayers] = useState([]);
  const { id } = useParams();
  const notify = (message) => toast(message);
  let email;
  console.log("PLAYERS", players);
  console.log("PLAYERS", players[0]?.user.name);

  getUserInfo().then((response) => {
    email = response.email;
  });

  useEffect(() => {
    getPlayersSubs(id).then((playersSubscribed) => {
      setPlayers(playersSubscribed);
    });
  }, [id]);

  const handleClick = () => {
    join(Game.id, email)
      .then((res) => {
        notify(res);
        getPlayersSubs(id).then((playersSubscribed) => {
          setPlayers(playersSubscribed);
        });
      })

      .catch((error) => notify(error.message));
  };

  const handleUnsubscribe = () => {
    unsubscribe(Game.id, email)
      .then((res) => {
        notify(res);
        setPlayers(players.filter((player) => player.user.id !== user.id));
      })
      .catch((error) => notify(error.message));
  };

  return (
    <div>
      <ToastContainer />

      <div>
        <h2>Game field</h2>
        <hr className="mb-0"></hr>
      </div>
      {players.length === 1 && (
        <div className="backgroundCourt1" alt="pista"></div>
      )}
      {players.length === 2 && (
        <div className="backgroundCourt2" alt="pista"></div>
      )}
      {players.length === 3 && (
        <div className="backgroundCourt3" alt="pista"></div>
      )}
      {players.length === 4 && (
        <div className="backgroundCourt4" alt="pista"></div>
      )}
      <div className="container mt-2">
        <h2>Created by: {players[0]?.user?.name}</h2>
        <hr></hr>
        <div className="">
          {user?.id === Game?.user ? (
            <button className="btn btn-danger" onClick={remove}>
              Deletee
            </button>
          ) : (
            <div>
              <button className="btn btn-danger" onClick={handleClick}>
                Join Event
              </button>

              <button className="btn btn-danger" onClick={handleUnsubscribe}>
                Unsubscribe
              </button>
            </div>
          )}
        </div>

        <h1>Players: {players.length}</h1>
        <hr></hr>

        <div className="row">
          <div className="col-12">
            <h1>{players[0]?.user?.name}</h1>
            <h1>{players[1]?.user?.name}</h1>
            <h1>{players[2]?.user?.name}</h1>
            <h1>{players[3]?.user?.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
