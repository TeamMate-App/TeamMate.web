import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import "../ListGames/Events.css";

const LinktoEditGame = ({ Game }) => {
   const { user } = useContext(UserContext);

  
  return (
    <>
      <div>
        {user?.id === Game?.user.id ? (
          <Link
            to={{
              pathname: `/games/edit/${Game.id}`,
              state: Game,
            }}
            className="btn btn-primary"
          >
            {" "}
            Edit
          </Link>
        )
         : <div></div>}
      </div>
    </>
  );
};

export default LinktoEditGame;
