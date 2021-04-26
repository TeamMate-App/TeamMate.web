import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import UserProfile from "../UserProfile/UserProfile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { register } from "../../services/UserService";
import Navbar from "../Home/Navbar";
import ListEvents from "../ListEvents/ListEvents";
import Event from "../Match Detail/Match";

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
        <Route exact path="/listEvents" component={ListEvents} />
        <Route exact path="/events/:id" component={Event} />
      </Switch>
    </>
  );
};

export default AppRouter;
