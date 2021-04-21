import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import UserProfile from "../UserProfile/UserProfile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { getUserInfo } from "../../services/UserService";
import { register } from "../../services/UserService";

import { getAccessToken } from "../../stores/AccessTokenStore";

const AppRouter = () => {
  const [user, setUser] = useState(null);

  const getUser = () => {
    return getUserInfo().then((response) => setUser(response));
  };
  
  const createUser = () => {
    return register()
  }

  useEffect(() => {
    if (getAccessToken()) {
      getUser();
    }
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" render={() => <Register doRegister={createUser} />} />
        <Route exact path="/login" render={() => <Login doLogin={getUser} />} />
        <Route exact path="/userProfile" component={UserProfile} />
      </Switch>
    </>
  );
};

//OJO: para hacer la logica de la navbar que cambia login por close session.... clase de sabado 10 min 4:31:00
//{user ? ()} ----------> si tengo usuario pinta esto y si no esto otro con el ternario ? :

export default AppRouter;
