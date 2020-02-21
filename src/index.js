import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import Firebase, { FirebaseContext } from "./common/components/Firebase";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";
import "./index.css";

ReactGA.initialize(process.env.REACT_APP_GA || "UA-00000-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
