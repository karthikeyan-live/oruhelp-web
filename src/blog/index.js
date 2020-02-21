import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  Switch
} from "react-router-dom";

import Blog from "./containers/Blog";

export default function Index() {
  let { path } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${path}/:blogId`} component={Blog} />
      </Switch>
    </Router>
  );
}
