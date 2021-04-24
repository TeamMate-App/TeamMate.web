import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import UserProfile from "../UserProfile/UserProfile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { getUserInfo } from "../../services/UserService";
import { register } from "../../services/UserService";
import Navbar from "../Home/Navbar";
import { getAccessToken } from "../../stores/AccessTokenStore";
import ListEvents from "../ListEvents/ListEvents";

const AppRouter = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await getUserInfo();
    return setUser(response);
  };

  const createUser = () => {
    return register();
  };

  useEffect(() => {
    if (getAccessToken()) {
      getUser();
    }
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/register"
          render={() => <Register doRegister={createUser} />}
        />
        <Route exact path="/login" render={() => <Login doLogin={getUser} />} />
        <Route exact path="/userProfile" component={UserProfile} />
        <Route exact path="/listEvents" component={ListEvents} />
      </Switch>
    </>
  );
};


export default AppRouter;
