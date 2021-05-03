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

    <div class="profile-bg container">
      <div class="content-p">
        <img src={user.image} alt={user.name} />
        <p className="p-name"><h3 className="h3-name">{user.name}</h3>
          {user.description}</p>
        <small>{user.address}</small>
      </div>
      <LinkToEdit
        id={user.id}
        User={user.user}
      />
    </div>

  );
}
