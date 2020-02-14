import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import InvoicePage from "./invoice";
import BlogPage from "./blog";
import Org from "./org";
import Home from "./home";
import AccountPage from "./account";
import Navigation from "./common/components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
export default App;
