import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/UserService";
import User from "./User";
import "./Users.css";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    getAllUsers().then((even) => {
      setUsers(even);
    });
  }, []);


  return (
    <div>
      <h1>Lista de Eventos</h1>
      <User users={users} />
    </div>
  );
};

export default ListUsers;
