import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProfilePage } from "../views/pages";
import { withAuth } from "../services";

const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/profile" component={withAuth(ProfilePage)}></Route>
  </Switch>
);

export default PrivateRoutes;
