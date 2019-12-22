import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  Switch
} from "react-router-dom";

import Blog from "./containers/blog";

export default function Index() {
  let { path } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${path}/:id`} component={Blog} />
        <Route exact path={path} component={Blog} />
      </Switch>
    </Router>
  );
}