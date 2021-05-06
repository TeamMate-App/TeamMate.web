import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getUserInfo } from "../services/UserService";
import { getAccessToken } from "../stores/AccessTokenStore";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const getUser = () => {
    return getUserInfo().then((res) => setUser(res));
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
