import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const BlogPage = lazy(() => import('./blog'));
const AccountPage = lazy(() => import('./account'));
const HomePage = lazy(() => import('./pages/HomePage'));

class App extends Component {
  public render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/blog" component={BlogPage} />
            <Route path="/account" component={AccountPage} />
            <Route exact={true} path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
