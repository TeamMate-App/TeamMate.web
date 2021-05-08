import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../services/UserService";
import LinkToEdit from "./LinkToEdit";
import "./User.css"

export default function User() {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    getUserInfo(id).then((user) => setUser(user));
  }, [id]);

  if (!user) {
    return "Loading...";
  }
  return (

    <div className="profile-bg container">
      <div className="content-p">
        <img className="user-image" src={user.image} alt={user.name} />
      </div>
      <LinkToEdit
        id={user?.id}
        User={user?.user}
      />
    </div>

  );
}
