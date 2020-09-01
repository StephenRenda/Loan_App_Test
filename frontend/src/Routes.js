import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import Signin from "./components/auth/Signin";
import Profile from "./components/user/Profile";
import Signup from "./components/user/Signup";

// import auth from "./components/auth/auth-helper";
const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <PrivateRoutes path="/user/edit/:userId" />
        <Route
          path="/user/:userId"
          component={(props) => <Profile {...props} />}
        />
        <Route path="/signup" component={(props) => <Signup {...props} />} />
        <Route path="/signin" component={(props) => <Signin {...props} />} />
      </Switch>
    </div>
  );
};

export default Routes;
