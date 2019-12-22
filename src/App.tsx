import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const BlogPage = lazy(() => import('./blog'));
const Org = lazy(() => import('./org'));
const AccountPage = lazy(() => import('./account'));
const HomePage = lazy(() => import('./home'));

class App extends Component {
  public render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/blog" component={BlogPage} />
            <Route path="/org" component={Org} />
            <Route path="/account" component={AccountPage} />
            <Route exact={true} path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
