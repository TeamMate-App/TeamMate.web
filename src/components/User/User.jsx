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
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="Product card" style={{ width: "18rem" }}>
            <img src={user.image} className="card-img-top" alt={user.name} />
            <div className="card-body">
              <p className="card-title">{user.name}</p>
              <p className="card-text">
                {user.description}
                {user.address}
              </p>
            </div>
            <LinkToEdit
              id={user.id}
              User={user.user}
            />
          </div>
        </div>
      </div>
    </div>

  );
}
