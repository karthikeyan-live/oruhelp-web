import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  Switch
} from "react-router-dom";
import OrgHome from "./containers/OrgHome";
import Blog from "../blog/";
import OrgSignup from "./signup";

export default function Index() {
  let { path } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route path={`${path}/blog`} component={Blog} />
        <Route path={`${path}/signup`} component={OrgSignup} />
        <Route exact path={path} component={OrgHome} />
      </Switch>
    </Router>
  );
}
