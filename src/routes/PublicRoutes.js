import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, LoginPage, ForOFourPage } from "../views/pages";

const PublicRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/404" component={ForOFourPage} />
    <Route component={ForOFourPage} />
  </Switch>
);

export default PublicRoutes;
