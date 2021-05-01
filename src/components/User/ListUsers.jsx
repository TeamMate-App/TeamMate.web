import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../services/UserService";
import User from "./User";
import "./Users.css";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    getUserInfo().then((even) => {
      setUsers(even);
    });
  }, []);


  return (
    <div>
      <User users={users} />
    </div>
  );
};

export default ListUsers;
