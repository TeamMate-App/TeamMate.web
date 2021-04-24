import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/UserService";
import Users from "./Users";
import "./Users.css";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    getAllUsers().then((even) => {
      setUsers(even);
      console.log(even);
    });
  }, []);

console.log(users)

  return (
    <div>
      <h1>Lista de Eventos</h1>
      <Users users={users} />
    </div>
  );
};

export default ListUsers;
