import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getUserInfo } from "../services/UserService";
import { getAccessToken } from "../stores/AccessTokenStore";


export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const getUser =  () => {
    const response =  getUserInfo();
    return setUser(response);
  };

  useEffect(() => {
    if (getAccessToken()) {
      getUser();
    }
  }, []);

  const value = {
    getUser,
    user,
  };

  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
}
