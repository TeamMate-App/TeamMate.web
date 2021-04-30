import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const LinktoEditGame = ({ Game }) => {
  const { user } = useContext(UserContext);

/*   console.log("Link to edit user id",user.id) */
  console.log("Link to edit game user",Game)
  return (
    <>
    <div>
     
     {/*  {user?.id === Game?.user.id && ( */}
        <Link
          to={{
            pathname: `/games/edit/${Game.id}`,
            state: Game,
          }} className="btn btn-primary"
        > Editttttttttttt</Link>
    {/*   )} */}
    </div>
    </>
  );
};

export default LinktoEditGame;
