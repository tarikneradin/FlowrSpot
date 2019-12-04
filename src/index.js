import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import App from "./core/App";
import Store from "./core/store";
import initilizeHttpClient from "./config/axios-config";

const StoreInstance = Store();

initilizeHttpClient();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
