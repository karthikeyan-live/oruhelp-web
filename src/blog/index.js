import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  Switch
} from "react-router-dom";

import Blog from "./containers/blog";
import BlogHome from "./containers/blog-home";

export default function Index() {
  let { path } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={`${path}/:blogId`} component={Blog} />
        <Route exact path={path} component={BlogHome} />
      </Switch>
    </Router>
  );
}
