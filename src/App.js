import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const InvoicePage = lazy(() => import("./invoice"));
const BlogPage = lazy(() => import("./blog"));
const Org = lazy(() => import("./org"));
const AccountPage = lazy(() => import("./account"));
const HomePage = lazy(() => import("./home"));

export function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/invoice" component={InvoicePage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/:userName" component={Org} />
          <Route exact={true} path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Router>
  );
}
