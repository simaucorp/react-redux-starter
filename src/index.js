import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./state/store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthService } from "./services";

const Auth = new AuthService();
let initialState = {};

if (Auth.isLoggedIn()) {
  initialState.auth = {
    isAuthenticated: true,
    token: Auth.getToken()
  };
}

const store = createStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
