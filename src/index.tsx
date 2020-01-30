import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './common/components/Firebase/index';

ReactGA.initialize(process.env.REACT_APP_GA || 'UA-00000-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.hydrate(<FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
