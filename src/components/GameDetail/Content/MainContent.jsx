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
        <h2>Vista del campo</h2>
        <hr className="mb-0"></hr>
      </div>
      <div className="backgroundCourt" alt="pista"></div>
      <div className="container">
        <h2>Organizador: {players[0]?.user?.name}</h2>
        <div className="">
          {user?.id === Game?.user ? (
            <button className="btn btn-danger" onClick={remove}>
              Deletee
            </button>
          ) : (
            <button className="btn btn-danger" onClick={handleClick}>
              Join Event
            </button>
          )}
        </div>

        <button className="btn btn-danger" onClick={handleUnsubscribe}>
          Unsubscribe
        </button>

        <h1>Players</h1>
        <hr></hr>

        <div className="row">
          <div className="col-6">
            <h1>{players[0]?.user?.name}</h1>
            <h1>{players[1]?.user?.name}</h1>
            <h1>{players[2]?.user?.name}</h1>
            <h1>{players[3]?.user?.name}</h1>
          </div>
          <div className="col-6">
            <h1>{players[0]?.user?.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
