import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <Auth0Provider
        clientId="p6psldDEG5lQNsCiyZE291ZBH7GRYPB2"
        domain="dev-wgmj80e4.us.auth0.com"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
