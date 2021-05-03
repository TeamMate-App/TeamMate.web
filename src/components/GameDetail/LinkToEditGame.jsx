import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import "../ListGames/Events.css";


const LinktoEditGame = ({ Game }) => {
  const { user } = useContext(UserContext);

/*   console.log("Link to edit user id",user.id) */
  console.log("Link to edit GAME:",Game)
  return (
    <>
    <div>
     
     {/*  {user?.id === Game?.user.id && ( */}
        <Link
          to={{
            pathname: `/games/edit/${Game.id}`,
            state: Game,
          }} className="btn btn-primary"
        > Edit</Link>
    {/*   )} */}
    </div>
    </>
  );
};

export default LinktoEditGame;
