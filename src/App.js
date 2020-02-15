import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import InvoicePage from "./invoice";
import BlogPage from "./blog";
import Org from "./org";
import Home from "./home";
import AccountPage from "./account";
import Navigation from "./common/components/Navigation";
import { withFirebase } from './common/components/Firebase';
import { withAuthentication } from './common/components/Session';

const App = () => (
        <Router>
        <Navigation />
          <Switch>
            <Route path="/invoice" component={InvoicePage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/:userName" component={Org} />
            <Route exact={true} path="/" component={Home} />
          </Switch>
        </Router>
    );
    export default withAuthentication(App);