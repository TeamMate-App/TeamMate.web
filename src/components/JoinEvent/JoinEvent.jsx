import React from "react";
import { join } from "../../services/GameService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinEvent = ({ GameId }) => {
  const notify = (message) => toast(message);
  console.log("Join event GAMEID:", GameId);

  
  const handleClick = () => {
    join(GameId.id)
      .then((res) => {
        notify(res);
      })
      .catch((error) => notify(error.message));
  };

  return (
    <div>
      <ToastContainer />
      <button className="btn btn-danger" onClick={handleClick}>
        Join Event
      </button>
    </div>
  );
};

export default JoinEvent;
