import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./routes/";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PublicRoutes />
        <PrivateRoutes />
      </BrowserRouter>
    );
  }
}

export default App;
