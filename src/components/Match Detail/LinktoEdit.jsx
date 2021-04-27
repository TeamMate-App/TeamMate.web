import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const LinktoEdit = ({ match }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user?.id === match?.user && (
        <Link
          to={{
            pathname: `/events/${match.id}/edit`,
            state: match,
          }}
        >
          <p>EDIT</p>
        </Link>
        
      )}
    </div>
  );
};

export default LinktoEdit;
