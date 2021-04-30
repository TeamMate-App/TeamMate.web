import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import UserProfile from "../UserProfile/UserProfile";
import Login from "../Login/Login";
import Register from "../Login/Register/Register";
import { register } from "../../services/UserService";
import EditProfile from "../UserProfile/EditProfile/EditProfile";
import CreateMatch from "../CreateGame/CreateMatch";
import Navbar from "../Navbar/Navbar";
import ActivateAccount from "../Login/TokenAccount/ActivateAccount";
import LinkEditGame from "../Edit Game/EditGame";
import ListGames from "./../ListGames/ListGames";
import GameDetail from "../GameDetail/GameDetail";

const AppRouter = () => {
  const createUser = () => {
    return register();
  };

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/register"
          render={() => <Register doRegister={createUser} />}
        />
        <Route exact path="/activate/:token" component={ActivateAccount} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userProfile" component={UserProfile} />
        <Route path="/userProfile/:id/edit" component={EditProfile} />
        <Route exact path="/listGames" component={ListGames} />
        <Route exact path="/games/:id" component={GameDetail} />
        <Route
          exact
          path="/games/edit/:id"
          render={(props) => <LinkEditGame {...props} />}
        />
        <Route exact path="/createMatch" component={CreateMatch} />
      </Switch>
    </>
  );
};

export default AppRouter;
