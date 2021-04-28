import React from "react";
import { join } from "../../services/EventService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const JoinEvent = ({matchId}) => {
 
  const notify = (message) => toast(message);
  console.log('matchId', matchId)
  const handleClick = () => {
    join(matchId)
    .then((res)=> {
      notify(res);
    }).catch(error => notify(error.message)); 
  }

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
