import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const LinktoEdit = ({ matchsUser, matchsId }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user?.id === matchsUser && (
        <Link to={`/events/${matchsId}/edit`}>
          <p>EDIT</p>
        </Link>
      )}
    </div>
  );
};

export default LinktoEdit;
