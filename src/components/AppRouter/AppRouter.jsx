import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import UserProfile from "../UserProfile/UserProfile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { register } from "../../services/UserService";
import Navbar from "../Home/Navbar";
import ListEvents from "../ListEvents/ListEvents";
import Event from "../Match Detail/Match";
import EditProfile from "../EditProfile/EditProfile";
import EditMatch from "../Edit Match/EditMatch";
import CreateMatch from "../CreateGame/CreateMatch";

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/userProfile" component={UserProfile} />
        <Route path="/userProfile/:id/edit" component={EditProfile} />
        <Route exact path="/listEvents" component={ListEvents} />
        <Route exact path="/events/:id" component={Event} />
        <Route
          exact
          path="/events/:id/edit"
          render={(props) => <EditMatch {...props} />}
        />
        <Route exact path="/createMatch" component={CreateMatch} />
      </Switch>
    </>
  );
};

export default AppRouter;
