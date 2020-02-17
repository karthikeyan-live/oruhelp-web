import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  Switch
} from "react-router-dom";

import Login from "./login";
import Settings from "./settings";
import SignUp from "./signup";
import PasswordForgetPage from "./passwordforget";

export default function Index() {
  let { path } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${path}/login`} component={Login} />
        <Route exact path={`${path}/settings`} component={Settings} />
        <Route exact path={`${path}/signup`} component={SignUp} />
        <Route
          exact
          path={`${path}/forgotpassword`}
          component={PasswordForgetPage}
        />
        <Route exact path={path} component={Login} />
      </Switch>
    </Router>
  );
}
