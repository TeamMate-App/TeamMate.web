import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../services/UserService";
import LinkToEdit from "./LinkToEdit";

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
    <div className="Product card" style={{ width: "18rem" }}>
      <img src={user.image} className="card-img-top" alt={user.name} />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">
          {user.description}
          <br />
          {user.address} 
        </p>
        <LinkToEdit
          id={user.id}
          User={user.user}
        />
      </div>
    </div>
  );
}
