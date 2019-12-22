import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  Switch
} from "react-router-dom";
import OrgHome from "./containers/OrgHome";

export default function Index() {
  let { path } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${path}/:userName`} component={OrgHome} />
        <Route exact path={path} component={OrgHome} />
      </Switch>
    </Router>
  );
}
