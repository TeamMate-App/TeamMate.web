import React, { useEffect } from "react";
import { join } from "../../services/GameService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinEvent = ({ GameId, update }) => {
  const notify = (message) => toast(message);


  const handleClick = () => {
    join(GameId.id)
      .then((res) => {
        notify(res);
        onclick()
      })

      .catch((error) => notify(error.message));
   
  };
  useEffect(() => {
    join()
  },[])

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
