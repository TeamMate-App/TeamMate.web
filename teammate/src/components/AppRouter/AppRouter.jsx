import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import UserProfile from "../UserProfile/UserProfile";
import Login from "../Login/Login";
import { getUserInfo } from "../../services/UserService";
import { getAccessToken } from "../../stores/AccessTokenStore";
import Pruebabar from "../Home/Pruebabar";

const AppRouter = () => {
  const [user, setUser] = useState(null);

  const getUser = () => {
    return getUserInfo().then((response) => setUser(response));
  };

  useEffect(() => {
    if (getAccessToken()) {
      getUser();
    }
  }, []);

  

  return (
    <>
    <Pruebabar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" render={() => <Login doLogin={getUser} />} />
      <Route exact path="/userProfile" component={UserProfile} />
    </Switch>
    </>
  );
};

//OJO: para hacer la logica de la navbar que cambia login por close session.... clase de sabado 10 min 4:31:00 
//{user ? ()} ----------> si tengo usuario pinta esto y si no esto otro con el ternario ? :

export default AppRouter;
